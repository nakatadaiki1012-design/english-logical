/* 論理表現ラボ：英文ロケットの 背景（リアル版）
   ・高度（めじるしの番号＋進みぐあい）を カメラが「ばね」で 追いかける → 正解で グッと加速して、なめらかに 落ち着く
   ・雲・街・タワー・山・月などは 最初に 1 回だけ 絵を描いておき（スプライト）、毎フレームは 貼るだけ → 軽い
   ・重いときは 自動で 解像度と 粒の数を 落とす。画面を 見ていない時は 止まる
   ・問題のカードの うしろに描く。ロケットは 右下 */
(function () {
  'use strict';

  var cv = null, cx = null, raf = 0, get = null, W = 0, H = 0, RS = 1;
  var cam = 0, vel = 0, cruise = 0, thr = 0, t0 = 0, lastT = 0, q = 1, ft = [], level = 0, lastDraw = 0;
  var skyKey = -1, skyGrad = null, SP = {}, smoke = [], CL = [];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 決まった乱数 ---------- */
  var seed = 11;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function off(w, h) { var c = document.createElement('canvas'); c.width = Math.max(2, Math.ceil(w)); c.height = Math.max(2, Math.ceil(h)); return c; }
  function hex(c) { var n = parseInt(c.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
  function mixc(a, b, f) { var A = hex(a), B = hex(b); return 'rgb(' + Math.round(A[0] + (B[0] - A[0]) * f) + ',' + Math.round(A[1] + (B[1] - A[1]) * f) + ',' + Math.round(A[2] + (B[2] - A[2]) * f) + ')'; }

  /* 空の色：[地平線, 真ん中, てっぺん]（高度の番号ごと） */
  var SKY = [
    ['#d9ecf7', '#9ccbec', '#5f9fd8'], ['#d4e9f7', '#93c4ea', '#5698d4'], ['#cfe6f6', '#8abde6', '#4c8fcf'],
    ['#c6e0f4', '#7fb3e0', '#3f82c6'], ['#b4d4ee', '#6a9fd4', '#2c69b0'], ['#8db7e0', '#3d72b5', '#163f7e'],
    ['#4a78b5', '#14305f', '#050c1f'], ['#1c2f55', '#060b1a', '#010205'], ['#0d1428', '#03050c', '#000002'],
    ['#140a12', '#040206', '#000000'], ['#0c0a10', '#020204', '#000000']];

  /* ---------- スプライト（最初に 1 回だけ 描く） ---------- */
  function buildSprites() {
    seed = 11; SP = {};
    var s = RS, U = Math.min(W, H);
    // 雲（もくもく）3 種
    SP.cloud = [0, 1, 2].map(function (v) {
      var w = W * (0.42 + v * 0.1) * s, h = w * 0.36, c = off(w, h), g = c.getContext('2d');
      for (var i = 0; i < 11; i++) {
        var px = w * (0.15 + rnd() * 0.7), py = h * (0.45 + rnd() * 0.3), r = h * (0.22 + rnd() * 0.22);
        var gr = g.createRadialGradient(px, py - r * 0.25, r * 0.1, px, py, r);
        gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.6, 'rgba(250,252,255,0.75)'); gr.addColorStop(1, 'rgba(240,246,252,0)');
        g.fillStyle = gr; g.beginPath(); g.arc(px, py, r, 0, Math.PI * 2); g.fill();
      }
      // 下側の かげ
      var sh = g.createLinearGradient(0, h * 0.45, 0, h);
      sh.addColorStop(0, 'rgba(160,180,205,0)'); sh.addColorStop(1, 'rgba(150,170,195,0.35)');
      g.globalCompositeOperation = 'source-atop'; g.fillStyle = sh; g.fillRect(0, 0, w, h);
      return c;
    });
    // すじ雲
    (function () {
      var w = W * 0.7 * s, h = w * 0.1, c = off(w, h), g = c.getContext('2d');
      g.strokeStyle = 'rgba(255,255,255,0.22)'; g.lineCap = 'round';
      for (var i = 0; i < 26; i++) { var y = h * (0.2 + rnd() * 0.6), x = w * rnd() * 0.4; g.lineWidth = 1 + rnd() * 3 * s; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + w * 0.25, y - h * 0.2 * rnd(), x + w * (0.4 + rnd() * 0.5), y + h * 0.1); g.stroke(); }
      SP.cirrus = c;
    })();
    // けむり
    (function () {
      var r = 32 * s, c = off(r * 2, r * 2), g = c.getContext('2d'), gr = g.createRadialGradient(r, r, 0, r, r, r);
      gr.addColorStop(0, 'rgba(235,235,235,0.75)'); gr.addColorStop(0.5, 'rgba(215,215,215,0.4)'); gr.addColorStop(1, 'rgba(200,200,200,0)');
      g.fillStyle = gr; g.fillRect(0, 0, r * 2, r * 2); SP.puff = c;
    })();
    // 星（2 枚の層）
    SP.stars = [0, 1].map(function (layer) {
      var c = off(W * s, H * s), g = c.getContext('2d'), n = layer ? 70 : 160;
      for (var i = 0; i < n; i++) {
        var x = rnd() * W * s, y = rnd() * H * s, r = (layer ? 0.9 + rnd() * 1.1 : 0.4 + rnd() * 0.7) * s, a = layer ? 0.75 + rnd() * 0.25 : 0.35 + rnd() * 0.45;
        g.fillStyle = 'rgba(255,' + (240 + Math.round(rnd() * 15)) + ',' + (225 + Math.round(rnd() * 30)) + ',' + a + ')';
        g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
        if (layer && rnd() < 0.12) { g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(x - r * 4, y - 0.3 * s, r * 8, 0.6 * s); g.fillRect(x - 0.3 * s, y - r * 4, 0.6 * s, r * 8); }
      }
      return c;
    });
    // 街（遠く・近く）
    SP.city = [0, 1].map(function (near) {
      var w = W * s, h = H * 0.32 * s, c = off(w, h), g = c.getContext('2d'), x = 0;
      var col = near ? ['#5b6b7c', '#4c5b6b', '#66778a'] : ['#93a7bd', '#8aa0b8', '#9fb2c6'];
      while (x < w) {
        var bw = (near ? 18 + rnd() * 34 : 12 + rnd() * 26) * s, bh = h * (near ? 0.25 + rnd() * 0.55 : 0.15 + rnd() * 0.4);
        g.fillStyle = col[Math.floor(rnd() * 3)]; g.fillRect(x, h - bh, bw - 1, bh);
        if (near) { g.fillStyle = 'rgba(255,255,255,0.10)'; for (var yy = h - bh + 5 * s; yy < h - 4 * s; yy += 7 * s) g.fillRect(x + 3 * s, yy, bw - 7 * s, 2 * s); }
        x += bw;
      }
      if (!near) { var hz = g.createLinearGradient(0, 0, 0, h); hz.addColorStop(0, 'rgba(220,235,248,0)'); hz.addColorStop(1, 'rgba(220,235,248,0.55)'); g.fillStyle = hz; g.fillRect(0, 0, w, h); }
      return c;
    });
    // 東京タワー（赤白）
    (function () {
      var h = H * 0.5 * s, w = h * 0.36, c = off(w, h), g = c.getContext('2d'), cxm = w / 2;
      function band(y0, y1, half0, half1, col) { g.fillStyle = col; g.beginPath(); g.moveTo(cxm - half0, y0); g.lineTo(cxm + half0, y0); g.lineTo(cxm + half1, y1); g.lineTo(cxm - half1, y1); g.closePath(); g.fill(); }
      var top = h * 0.02, base = h, n = 14;
      for (var i = 0; i < n; i++) {
        var a = i / n, b = (i + 1) / n, y0 = top + (base - top) * a, y1 = top + (base - top) * b;
        var hw = function (t) { return t < 0.2 ? w * 0.012 : w * (0.03 + Math.pow((t - 0.2) / 0.8, 1.7) * 0.47); };
        band(y0, y1, hw(a), hw(b), i % 2 ? '#f4f1ec' : '#e0442f');
      }
      // 展望台
      g.fillStyle = '#e8e3da'; g.fillRect(cxm - w * 0.13, h * 0.42, w * 0.26, h * 0.035); g.fillRect(cxm - w * 0.08, h * 0.28, w * 0.16, h * 0.022);
      // 脚の あいだ（すきま）
      g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.moveTo(cxm, h * 0.78); g.quadraticCurveTo(cxm - w * 0.22, h * 0.9, cxm - w * 0.3, h); g.lineTo(cxm + w * 0.3, h); g.quadraticCurveTo(cxm + w * 0.22, h * 0.9, cxm, h * 0.78); g.fill();
      g.globalCompositeOperation = 'source-atop'; var lg = g.createLinearGradient(0, 0, w, 0); lg.addColorStop(0, 'rgba(0,0,0,0)'); lg.addColorStop(1, 'rgba(0,0,0,0.18)'); g.fillStyle = lg; g.fillRect(0, 0, w, h);
      SP.tower = c;
    })();
    // スカイツリー
    (function () {
      var h = H * 0.85 * s, w = h * 0.07, c = off(w, h), g = c.getContext('2d'), m = w / 2;
      var gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#f2f5f8'); gr.addColorStop(0.6, '#cfd8e2'); gr.addColorStop(1, '#a9b6c4');
      g.fillStyle = gr; g.beginPath(); g.moveTo(m - w * 0.04, 0); g.lineTo(m + w * 0.04, 0); g.lineTo(m + w * 0.16, h * 0.25); g.lineTo(m + w * 0.22, h * 0.7); g.lineTo(m + w * 0.5, h); g.lineTo(m - w * 0.5, h); g.lineTo(m - w * 0.22, h * 0.7); g.lineTo(m - w * 0.16, h * 0.25); g.closePath(); g.fill();
      g.fillStyle = '#dfe6ee'; g.fillRect(m - w * 0.4, h * 0.36, w * 0.8, h * 0.02); g.fillRect(m - w * 0.3, h * 0.25, w * 0.6, h * 0.012);
      SP.skytree = c;
    })();
    // 富士山
    (function () {
      var w = W * 1.3 * s, h = H * 0.5 * s, c = off(w, h), g = c.getContext('2d');
      var body = g.createLinearGradient(0, 0, 0, h); body.addColorStop(0, '#45648c'); body.addColorStop(1, '#7f9cbd');
      g.fillStyle = body; g.beginPath(); g.moveTo(0, h); g.bezierCurveTo(w * 0.25, h * 0.75, w * 0.38, h * 0.12, w * 0.45, h * 0.05); g.lineTo(w * 0.55, h * 0.05); g.bezierCurveTo(w * 0.62, h * 0.12, w * 0.75, h * 0.75, w, h); g.closePath(); g.fill();
      g.fillStyle = '#f6f8fb'; g.beginPath(); g.moveTo(w * 0.385, h * 0.24); g.bezierCurveTo(w * 0.41, h * 0.14, w * 0.43, h * 0.07, w * 0.45, h * 0.05); g.lineTo(w * 0.55, h * 0.05); g.bezierCurveTo(w * 0.57, h * 0.07, w * 0.59, h * 0.14, w * 0.615, h * 0.24);
      for (var i = 0; i < 9; i++) g.lineTo(w * (0.615 - (i + 1) * 0.0255), h * (0.24 + (i % 2 ? -0.03 : 0.04) + rnd() * 0.04));
      g.closePath(); g.fill();
      var hz = g.createLinearGradient(0, h * 0.4, 0, h); hz.addColorStop(0, 'rgba(210,228,245,0)'); hz.addColorStop(1, 'rgba(210,228,245,0.7)');
      g.globalCompositeOperation = 'source-atop'; g.fillStyle = hz; g.fillRect(0, 0, w, h);
      SP.fuji = c;
    })();
    // 旅客機
    (function () {
      var w = W * 0.16 * s, h = w * 0.36, c = off(w, h), g = c.getContext('2d');
      g.fillStyle = '#f3f5f8'; g.beginPath(); g.ellipse(w * 0.5, h * 0.5, w * 0.48, h * 0.09, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#d8dde4'; g.beginPath(); g.moveTo(w * 0.45, h * 0.5); g.lineTo(w * 0.3, h * 0.95); g.lineTo(w * 0.38, h * 0.95); g.lineTo(w * 0.6, h * 0.5); g.fill();
      g.beginPath(); g.moveTo(w * 0.45, h * 0.5); g.lineTo(w * 0.32, h * 0.05); g.lineTo(w * 0.39, h * 0.05); g.lineTo(w * 0.6, h * 0.5); g.fill();
      g.beginPath(); g.moveTo(w * 0.05, h * 0.45); g.lineTo(w * 0.0, h * 0.15); g.lineTo(w * 0.08, h * 0.15); g.lineTo(w * 0.16, h * 0.45); g.fill();
      SP.plane = c;
    })();
    // 宇宙ステーション
    (function () {
      var w = W * 0.34 * s, h = w * 0.5, c = off(w, h), g = c.getContext('2d');
      g.fillStyle = '#9aa3ad'; g.fillRect(w * 0.08, h * 0.47, w * 0.84, h * 0.06);
      [0.1, 0.27, 0.62, 0.79].forEach(function (x) {
        var pg = g.createLinearGradient(0, 0, 0, h); pg.addColorStop(0, '#c99a2e'); pg.addColorStop(1, '#8a6414'); g.fillStyle = pg;
        g.fillRect(w * x, h * 0.05, w * 0.11, h * 0.38); g.fillRect(w * x, h * 0.57, w * 0.11, h * 0.38);
      });
      g.fillStyle = '#e4e8ed'; g.fillRect(w * 0.43, h * 0.35, w * 0.14, h * 0.3); g.fillRect(w * 0.38, h * 0.44, w * 0.24, h * 0.12);
      SP.iss = c;
    })();
    // 月
    (function () {
      var r = U * 0.24 * s, c = off(r * 2, r * 2), g = c.getContext('2d');
      var gr = g.createRadialGradient(r * 0.7, r * 0.7, r * 0.1, r, r, r); gr.addColorStop(0, '#f1eee4'); gr.addColorStop(1, '#a7a294');
      g.fillStyle = gr; g.beginPath(); g.arc(r, r, r, 0, Math.PI * 2); g.fill();
      g.save(); g.clip();
      for (var i = 0; i < 26; i++) { var x = r * 2 * rnd(), y = r * 2 * rnd(), cr = r * (0.04 + rnd() * 0.12); g.fillStyle = 'rgba(120,115,105,0.28)'; g.beginPath(); g.arc(x, y, cr, 0, Math.PI * 2); g.fill(); g.strokeStyle = 'rgba(255,255,255,0.18)'; g.lineWidth = 1 * s; g.beginPath(); g.arc(x - cr * 0.15, y - cr * 0.15, cr, Math.PI, Math.PI * 1.5); g.stroke(); }
      var sh = g.createLinearGradient(0, 0, r * 2, 0); sh.addColorStop(0.55, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.55)'); g.fillStyle = sh; g.fillRect(0, 0, r * 2, r * 2);
      g.restore(); SP.moon = c;
    })();
    // 火星
    (function () {
      var r = U * 0.2 * s, c = off(r * 2, r * 2), g = c.getContext('2d');
      var gr = g.createRadialGradient(r * 0.7, r * 0.7, r * 0.1, r, r, r); gr.addColorStop(0, '#f09a62'); gr.addColorStop(1, '#7a2c16');
      g.fillStyle = gr; g.beginPath(); g.arc(r, r, r, 0, Math.PI * 2); g.fill(); g.save(); g.clip();
      for (var i = 0; i < 12; i++) { g.fillStyle = 'rgba(90,30,15,0.25)'; g.beginPath(); g.ellipse(r * 2 * rnd(), r * 2 * rnd(), r * (0.1 + rnd() * 0.3), r * (0.04 + rnd() * 0.1), rnd() * 3, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = 'rgba(255,255,255,0.75)'; g.beginPath(); g.ellipse(r, r * 0.12, r * 0.3, r * 0.1, 0, 0, Math.PI * 2); g.fill();
      var sh = g.createLinearGradient(0, 0, r * 2, 0); sh.addColorStop(0.55, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.55)'); g.fillStyle = sh; g.fillRect(0, 0, r * 2, r * 2);
      g.restore(); SP.mars = c;
    })();
    // 土星（輪つき）
    (function () {
      var r = U * 0.16 * s, w = r * 5, h = r * 2.6, c = off(w, h), g = c.getContext('2d'), mx = w / 2, my = h / 2;
      function ring(front) {
        g.save(); g.beginPath(); if (front) g.rect(0, my, w, h); else g.rect(0, 0, w, my); g.clip();
        [[2.3, 'rgba(210,190,150,0.55)', 0.22], [1.95, 'rgba(230,212,170,0.75)', 0.3], [1.55, 'rgba(190,170,130,0.5)', 0.18]].forEach(function (x) { g.strokeStyle = x[1]; g.lineWidth = r * x[2]; g.beginPath(); g.ellipse(mx, my, r * x[0], r * x[0] * 0.28, -0.25, 0, Math.PI * 2); g.stroke(); });
        g.restore();
      }
      ring(false);
      var gr = g.createLinearGradient(mx, my - r, mx, my + r); ['#e9d5a8', '#d2b47c', '#e6cf9d', '#c9a96f', '#e2c994'].forEach(function (col, i) { gr.addColorStop(i / 4, col); });
      g.fillStyle = gr; g.beginPath(); g.arc(mx, my, r, 0, Math.PI * 2); g.fill();
      var sh = g.createLinearGradient(mx - r, 0, mx + r, 0); sh.addColorStop(0.5, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.5)'); g.fillStyle = sh; g.beginPath(); g.arc(mx, my, r, 0, Math.PI * 2); g.fill();
      ring(true); SP.saturn = c;
    })();
    // 地球の ふち（大気の 青い光）
    (function () {
      var w = W * s, h = H * 0.7 * s, c = off(w, h), g = c.getContext('2d'), R = w * 2.4, cy = h * 0.35 + R;
      var og = g.createRadialGradient(w / 2, cy, R * 0.94, w / 2, cy, R); og.addColorStop(0, '#173f78'); og.addColorStop(0.85, '#2f6fb0'); og.addColorStop(1, '#79b6e6');
      g.fillStyle = og; g.beginPath(); g.arc(w / 2, cy, R, 0, Math.PI * 2); g.fill();
      for (var i = 0; i < 40; i++) { g.fillStyle = 'rgba(255,255,255,' + (0.1 + rnd() * 0.25) + ')'; g.beginPath(); g.ellipse(w * rnd(), h * (0.42 + rnd() * 0.55), w * (0.04 + rnd() * 0.12), h * (0.008 + rnd() * 0.02), 0, 0, Math.PI * 2); g.fill(); }
      var at = g.createRadialGradient(w / 2, cy, R * 0.995, w / 2, cy, R * 1.03); at.addColorStop(0, 'rgba(120,190,255,0.85)'); at.addColorStop(0.4, 'rgba(90,160,240,0.35)'); at.addColorStop(1, 'rgba(60,120,220,0)');
      g.globalCompositeOperation = 'destination-over'; g.fillStyle = at; g.beginPath(); g.arc(w / 2, cy, R * 1.03, 0, Math.PI * 2); g.fill();
      SP.earth = c;
    })();
    // 太陽の 光
    (function () {
      var r = U * 0.5 * s, c = off(r * 2, r * 2), g = c.getContext('2d'), gr = g.createRadialGradient(r, r, 0, r, r, r);
      gr.addColorStop(0, 'rgba(255,255,245,1)'); gr.addColorStop(0.06, 'rgba(255,250,225,0.9)'); gr.addColorStop(0.2, 'rgba(255,240,200,0.3)'); gr.addColorStop(1, 'rgba(255,240,200,0)');
      g.fillStyle = gr; g.fillRect(0, 0, r * 2, r * 2); SP.sun = c;
    })();
    // ロケット
    (function () {
      var h = Math.max(54, Math.min(100, H * 0.12)) * s, w = h * 0.36, c = off(w, h), g = c.getContext('2d'), m = w / 2;
      var bd = g.createLinearGradient(0, 0, w, 0); bd.addColorStop(0, '#d8dde3'); bd.addColorStop(0.35, '#ffffff'); bd.addColorStop(1, '#a9b2bc');
      g.fillStyle = '#c0392b'; g.beginPath(); g.moveTo(m - w * 0.2, h * 0.72); g.lineTo(m - w * 0.5, h * 0.95); g.lineTo(m - w * 0.2, h * 0.9); g.fill(); g.beginPath(); g.moveTo(m + w * 0.2, h * 0.72); g.lineTo(m + w * 0.5, h * 0.95); g.lineTo(m + w * 0.2, h * 0.9); g.fill();
      g.fillStyle = bd; g.beginPath(); g.moveTo(m, 0); g.bezierCurveTo(m + w * 0.32, h * 0.14, m + w * 0.24, h * 0.5, m + w * 0.22, h * 0.9); g.lineTo(m - w * 0.22, h * 0.9); g.bezierCurveTo(m - w * 0.24, h * 0.5, m - w * 0.32, h * 0.14, m, 0); g.fill();
      g.fillStyle = '#d0392b'; g.beginPath(); g.moveTo(m, 0); g.bezierCurveTo(m + w * 0.2, h * 0.07, m + w * 0.25, h * 0.15, m + w * 0.26, h * 0.2); g.lineTo(m - w * 0.26, h * 0.2); g.bezierCurveTo(m - w * 0.25, h * 0.15, m - w * 0.2, h * 0.07, m, 0); g.fill();
      g.fillStyle = '#2a3440'; g.beginPath(); g.arc(m, h * 0.38, w * 0.13, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#7cc4f0'; g.beginPath(); g.arc(m, h * 0.38, w * 0.09, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#5c6670'; g.fillRect(m - w * 0.14, h * 0.9, w * 0.28, h * 0.08);
      SP.rocket = c; SP.rh = h / s; SP.rw = w / s;
    })();
    // 雲の 置き場所（高度の 帯の中）
    CL = [];
    for (var i = 0; i < 26; i++) CL.push({ lv: 0.7 + rnd() * 3.8, x: rnd() * 1.2 - 0.1, v: Math.floor(rnd() * 3), d: 0.6 + rnd() * 0.8, k: 'c' });
    for (i = 0; i < 8; i++) CL.push({ lv: 4.4 + rnd() * 1.3, x: rnd() * 1.1 - 0.1, v: 0, d: 0.5 + rnd() * 0.5, k: 'ci' });
  }

  function size() {
    if (!cv || !cv.parentNode) return;
    var r = cv.parentNode.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    RS = Math.min(1, window.devicePixelRatio || 1) * q; // 背景は 細かくなくても 見た目が 変わらない → 軽く
    cv.width = Math.round(W * RS); cv.height = Math.round(H * RS); cx.setTransform(RS, 0, 0, RS, 0, 0);
    skyKey = -1; buildSprites();
  }
  // 高度 L の物が いま 画面の どこ（y）に 見えるか（d：奥行き。小さいほど ゆっくり動く）
  function Y(L, d) { return H * 0.86 - (L - cam) * H * 0.95 * (d || 1); }
  function img(c, x, y, w, h) { cx.drawImage(c, x, y, w, h); }

  function drawSky() {
    var k = Math.max(0, Math.min(SKY.length - 1.001, cam)), key = Math.round(k * 60);
    if (key !== skyKey) {
      skyKey = key; var i0 = Math.floor(k), f = k - i0, a = SKY[i0], b = SKY[i0 + 1];
      skyGrad = cx.createLinearGradient(0, H, 0, 0);
      skyGrad.addColorStop(0, mixc(a[0], b[0], f)); skyGrad.addColorStop(0.5, mixc(a[1], b[1], f)); skyGrad.addColorStop(1, mixc(a[2], b[2], f));
    }
    cx.fillStyle = skyGrad; cx.fillRect(0, 0, W, H);
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!cv || !get || document.hidden) { lastT = 0; return; }
    // 重さを はかって、重ければ 段階的に 軽くする（1：解像度を下げて 30 回／秒、2：さらに下げる）
    if (lastDraw) { ft.push(now - lastDraw); if (ft.length > 40) ft.shift(); }
    if (ft.length === 40 && level < 2) {
      var avg = ft.reduce(function (m, x) { return m + x; }, 0) / 40, lim = level === 0 ? 22 : 40;
      if (avg > lim) { level++; q = level === 1 ? 0.7 : 0.5; ft = []; size(); }
    }
    if (level > 0 && now - lastDraw < 30) return; // 軽い モード：1 秒に 30 回
    lastDraw = now;
    var st = get() || {}, dt = lastT ? Math.min(0.05, (now - lastT) / 1000) : 0.016; lastT = now;
    var lite = level > 0;

    // カメラ：目標の 高度を「ばね」で 追う（正解で グッと加速 → なめらかに 落ち着く）
    var target = st.level || 0;
    if (reduce) { cam = target; vel = 0; }
    else { var acc = 16 * (target - cam) - 7.5 * vel; vel += acc * dt; cam += vel * dt; }
    var th = st.started ? Math.min(1, 0.25 + (st.combo || 0) / 40) * (st.boost ? 1.6 : 1) : 0;
    thr += (th - thr) * Math.min(1, dt * 3);
    var speed = (reduce ? 0 : 0.05 + thr * 0.32 + Math.max(0, vel) * 0.9); // 景色が 流れる 速さ
    cruise += speed * dt;
    var tsec = (now - t0) / 1000;

    cx.save();
    if (st.boost && !reduce) cx.translate((Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2); // ブーストの ゆれ
    drawSky();

    // 星（宇宙に 近づくと 見える）
    var sa = Math.max(0, Math.min(1, (cam - 5.0) / 1.2));
    if (sa > 0) {
      SP.stars.forEach(function (c, layer) {
        if (lite && !layer) return; // 軽い モードでは 明るい星の 層だけ
        var d = layer ? 0.6 : 0.25, oy = ((cruise * d * H * 0.6) % H + H) % H;
        cx.globalAlpha = sa * (layer ? 1 : 0.8);
        img(c, 0, oy - H, W, H); img(c, 0, oy, W, H);
      });
      cx.globalAlpha = 1;
    }
    // 太陽
    var sunA = cam < 5.5 ? 0.85 : 1, sunR = Math.min(W, H) * (cam < 5.5 ? 0.9 : 0.55);
    cx.globalAlpha = sunA; img(SP.sun, W * 0.12 - sunR / 2, H * 0.12 - sunR / 2 + Math.max(0, 5 - cam) * 4, sunR, sunR); cx.globalAlpha = 1;

    // 地球の ふち
    if (cam > 5.0 && cam < 8.8) { var ey = Y(5.75, 0.8); img(SP.earth, 0, ey, W, H * 0.7); }
    // 惑星など
    var U = Math.min(W, H);
    var isy = Y(7.1, 0.9); if (isy > -H * 0.3 && isy < H) { cx.save(); cx.translate(W * 0.3, isy); cx.rotate(Math.sin(tsec * 0.2) * 0.05); img(SP.iss, -W * 0.17, -W * 0.085, W * 0.34, W * 0.17); cx.restore(); }
    var my = Y(8.05, 0.85); if (my > -U * 0.5 && my < H + U * 0.5) img(SP.moon, W * 0.3 - U * 0.24, my - U * 0.24, U * 0.48, U * 0.48);
    var ry = Y(9.05, 0.85); if (ry > -U * 0.4 && ry < H + U * 0.4) img(SP.mars, W * 0.28 - U * 0.2, ry - U * 0.2, U * 0.4, U * 0.4);
    var sy = Y(10.05, 0.85); if (sy > -U * 0.3 && sy < H + U * 0.3) img(SP.saturn, W * 0.32 - U * 0.4, sy - U * 0.21, U * 0.8, U * 0.42);

    // 地上（遠い街 → 富士山 → 近い街・タワー）：奥行きで 流れる速さを 変える
    if (cam < 4.6) {
      var fy = Y(3.0, 0.7); if (fy > -H * 0.5 && fy - H * 0.5 < H) img(SP.fuji, -W * 0.15, fy - H * 0.5 + H * 0.1, W * 1.3, H * 0.5);
      var c0 = Y(0, 0.75) + H * 0.06; if (c0 - H * 0.32 < H) img(SP.city[0], 0, c0 - H * 0.32, W, H * 0.32);
      var sky2 = Y(2.0, 0.9) + H * 0.06; if (sky2 - H * 0.85 < H && sky2 > 0) img(SP.skytree, W * 0.62, sky2 - H * 0.85, H * 0.85 * 0.07, H * 0.85);
      var ty = Y(1.0, 0.95) + H * 0.06; if (ty - H * 0.5 < H && ty > 0) img(SP.tower, W * 0.14, ty - H * 0.5, H * 0.5 * 0.36, H * 0.5);
      var c1 = Y(0) + H * 0.06; if (c1 - H * 0.32 < H) img(SP.city[1], 0, c1 - H * 0.32, W, H * 0.32);
      var gy = Y(0) + H * 0.06; if (gy < H) { cx.fillStyle = '#4f5d4c'; cx.fillRect(0, gy, W, H - gy + 4); }
    }
    // 旅客機と 飛行機雲
    var py = Y(4.0, 0.9);
    if (py > -60 && py < H + 60) {
      var px = ((tsec * 0.06) % 1.5 - 0.25) * W;
      var cg = cx.createLinearGradient(px - W * 0.5, 0, px, 0); cg.addColorStop(0, 'rgba(255,255,255,0)'); cg.addColorStop(1, 'rgba(255,255,255,0.6)');
      cx.fillStyle = cg; cx.fillRect(px - W * 0.5, py - 2, W * 0.5, 3);
      img(SP.plane, px - 4, py - W * 0.16 * 0.18, W * 0.16, W * 0.16 * 0.36);
    }
    // 雲（帯の中を 流れつづける。近い雲ほど 速く 大きい）
    var ca = Math.max(0, 1 - Math.max(0, cam - 5.4) / 0.8);
    if (ca > 0) {
      for (var i = 0; i < CL.length; i++) {
        if (lite && i % 2) continue;
        var c = CL[i], base = c.k === 'c' ? 0.7 : 4.4, band = c.k === 'c' ? 3.8 : 1.3;
        var lv = base + (((c.lv - base - cruise * 0.35 * c.d) % band) + band) % band;
        var y = Y(lv, c.d);
        var sp = c.k === 'c' ? SP.cloud[c.v] : SP.cirrus, cw = (c.k === 'c' ? W * (0.42 + c.v * 0.1) : W * 0.7) * (0.6 + c.d * 0.5), ch = cw * (c.k === 'c' ? 0.36 : 0.1);
        if (y < -ch || y > H + ch) continue;
        cx.globalAlpha = ca * (c.k === 'c' ? 0.95 : 0.8);
        img(sp, c.x * W - cw / 2, y - ch / 2, cw, ch * (1 + Math.max(0, vel) * 0.25));
      }
      cx.globalAlpha = 1;
    }
    // 雲の層を つきぬける 瞬間（白く かすむ）
    var fog = Math.max(0, 1 - Math.abs(cam - 4.15) / 0.35);
    if (fog > 0 && !reduce) { cx.fillStyle = 'rgba(245,248,252,' + (fog * 0.45) + ')'; cx.fillRect(0, 0, W, H); }

    // 速さの 線
    var vv = Math.max(0, vel) + (st.boost ? 0.8 : 0);
    if (!reduce && vv > 0.45) {
      cx.strokeStyle = cam > 5.5 ? 'rgba(200,220,255,' + Math.min(0.35, (vv - 0.45) * 0.4) + ')' : 'rgba(255,255,255,' + Math.min(0.3, (vv - 0.45) * 0.35) + ')';
      cx.lineWidth = 1.2;
      for (var k2 = 0; k2 < (lite ? 6 : 12); k2++) { var lx = ((k2 * 0.1379 + 0.03) % 1) * W, ly = ((cruise * 2.2 + k2 * 0.317) % 1) * H; cx.beginPath(); cx.moveTo(lx, ly); cx.lineTo(lx, ly + 30 + vv * 70); cx.stroke(); }
    }

    // ロケット・炎・けむり
    var rw = SP.rw, rh = SP.rh, rx = W - Math.max(30, Math.min(56, W * 0.075)), ry0 = H * 0.72 - Math.min(H * 0.05, Math.max(0, vel) * H * 0.05);
    var sway = st.started ? Math.sin(tsec * 1.3) * 0.03 : 0;
    var nozzleY = ry0 + rh * 0.97;
    if (st.started) {
      var inSpace = cam > 5.8;
      // けむり（大気の 中だけ）
      if (!inSpace && !reduce && smoke.length < (lite ? 22 : 48) && Math.random() < 0.3 + thr * 0.6) smoke.push({ x: rx + (Math.random() - 0.5) * 4, y: nozzleY + rh * 0.3, r: rw * 0.6, a: 0.55, vx: (Math.random() - 0.5) * 12 });
      // 炎
      var L = rh * (0.55 + thr * 1.25) * (0.9 + Math.random() * 0.2), wid = rw * (inSpace ? 0.55 + thr * 0.5 : 0.36);
      var og = cx.createLinearGradient(0, nozzleY, 0, nozzleY + L);
      og.addColorStop(0, inSpace ? 'rgba(190,220,255,0.95)' : 'rgba(255,245,200,0.98)'); og.addColorStop(0.25, inSpace ? 'rgba(140,170,255,0.7)' : 'rgba(255,170,40,0.9)'); og.addColorStop(1, 'rgba(255,90,40,0)');
      cx.fillStyle = og; cx.beginPath(); cx.moveTo(rx - rw * 0.14, nozzleY); cx.quadraticCurveTo(rx - wid, nozzleY + L * 0.45, rx, nozzleY + L); cx.quadraticCurveTo(rx + wid, nozzleY + L * 0.45, rx + rw * 0.14, nozzleY); cx.closePath(); cx.fill();
      cx.fillStyle = 'rgba(255,255,240,0.95)'; cx.beginPath(); cx.moveTo(rx - rw * 0.08, nozzleY); cx.quadraticCurveTo(rx, nozzleY + L * 0.5, rx + rw * 0.08, nozzleY); cx.fill();
    }
    for (var si = smoke.length - 1; si >= 0; si--) {
      var p = smoke[si]; p.y += (60 + speed * H * 0.9) * dt; p.x += p.vx * dt; p.r += rw * 0.9 * dt; p.a -= 0.28 * dt;
      if (p.a <= 0 || p.y > H + 40) { smoke.splice(si, 1); continue; }
      cx.globalAlpha = p.a * (cam > 5.5 ? 0.3 : 1); img(SP.puff, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    cx.globalAlpha = 1;
    cx.save(); cx.translate(rx, ry0 + rh / 2); cx.rotate(sway); img(SP.rocket, -rw / 2, -rh / 2, rw, rh); cx.restore();
    cx.restore();
  }

  function start(parent, getter) {
    stop();
    get = getter; cam = 0; vel = 0; cruise = 0; thr = 0; smoke = []; ft = []; t0 = performance.now(); lastT = 0; lastDraw = 0;
    cv = document.createElement('canvas'); cv.className = 'scene'; cv.setAttribute('aria-hidden', 'true');
    parent.insertBefore(cv, parent.firstChild); cx = cv.getContext('2d', { alpha: false });
    size(); window.addEventListener('resize', size);
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf); raf = 0;
    window.removeEventListener('resize', size);
    if (cv && cv.parentNode) cv.parentNode.removeChild(cv);
    cv = null; get = null; smoke = [];
  }
  window.LXSCENE = { start: start, stop: stop, _q: function () { return q; }, _lv: function () { return level; } };
})();
