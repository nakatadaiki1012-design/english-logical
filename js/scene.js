/* 論理表現ラボ：英文ロケットの 背景（上へ 上へ 流れていく景色）
   ・高度（めじるしの番号＋その先の進みぐあい）に合わせて カメラが上がり、景色が 足もとへ 流れる
   ・雲や星は 推進力（コンボ・ブースト）に合わせて 速く流れる → 「加速している」感じ
   ・問題のカードの うしろに描く（カードは少し透ける）。ロケットは 右下 */
(function () {
  'use strict';

  var cv = null, cx = null, raf = 0, get = null, W = 0, H = 0, DPR = 1;
  var cam = 0, vel = 0, drift = 0, thrustNow = 0, t0 = 0, lastT = 0;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 空の色（下 → 上）：高度の番号ごと
  var SKYC = [['#bfe3f7', '#7fc0ea'], ['#b3dcf5', '#6cb4e6'], ['#a6d3f1', '#5aa6df'], ['#97c8ec', '#4a95d3'], ['#7fb3e2', '#346fb6'],
    ['#4f7fbf', '#1c3f7d'], ['#1d3263', '#0a1430'], ['#0b1530', '#04070f'], ['#060a18', '#020308'], ['#08040d', '#020106'], ['#05030a', '#010104']];
  // 決まった乱数（毎回 同じ景色）
  var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  var CLOUDS = [], STARS = [], CITY = [];
  for (var i = 0; i < 46; i++) CLOUDS.push({ lv: 0.5 + rnd() * 5.3, x: rnd(), w: 0.18 + rnd() * 0.3, a: 0.35 + rnd() * 0.45 });
  for (i = 0; i < 160; i++) STARS.push({ x: rnd(), y: rnd(), d: 0.2 + rnd() * 0.8, s: 0.6 + rnd() * 1.6, p: rnd() * 6.28 });
  for (i = 0; i < 26; i++) CITY.push({ x: i / 26 + rnd() * 0.02, w: 0.025 + rnd() * 0.03, h: 0.04 + rnd() * 0.12 });

  function mix(a, b, f) {
    var A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
    var r = Math.round((A >> 16) + ((B >> 16) - (A >> 16)) * f), g = Math.round(((A >> 8) & 255) + (((B >> 8) & 255) - ((A >> 8) & 255)) * f), bb = Math.round((A & 255) + ((B & 255) - (A & 255)) * f);
    return 'rgb(' + r + ',' + g + ',' + bb + ')';
  }
  function size() {
    if (!cv) return;
    var r = cv.parentNode.getBoundingClientRect(); DPR = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    cv.width = W * DPR; cv.height = H * DPR; cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  // 高度 L の物が いま 画面の どこ（y）に 見えるか
  function Y(L) { return H * 0.86 - (L - cam) * H * 0.95; }
  function emoji(ch, x, y, px) { cx.font = px + 'px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'bottom'; cx.fillText(ch, x, y); }

  function draw(now) {
    raf = requestAnimationFrame(draw);
    if (!cv || !get) return;
    var st = get() || {}, dt = Math.min(0.05, (now - (lastT || now)) / 1000); lastT = now;
    var target = st.level || 0;
    // カメラは 目標の高度へ なめらかに近づく（正解のたびに グッと上がる）
    var prev = cam; cam += (target - cam) * (reduce ? 1 : Math.min(1, dt * 3.2)); vel = cam - prev;
    var th = st.started ? Math.min(1, 0.25 + (st.combo || 0) / 40) * (st.boost ? 1.6 : 1) : 0;
    thrustNow += (th - thrustNow) * Math.min(1, dt * 4);
    if (!reduce) drift += dt * (0.05 + thrustNow * 0.55 + vel * 30);
    var k = Math.max(0, Math.min(SKYC.length - 1.001, cam)), i0 = Math.floor(k), f = k - i0;
    var g = cx.createLinearGradient(0, H, 0, 0);
    g.addColorStop(0, mix(SKYC[i0][0], SKYC[i0 + 1][0], f)); g.addColorStop(1, mix(SKYC[i0][1], SKYC[i0 + 1][1], f));
    cx.fillStyle = g; cx.fillRect(0, 0, W, H);
    var tsec = (now - t0) / 1000;

    // 星（宇宙が近づくと 見えてくる。推進力で 下へ流れる）
    var sa = Math.max(0, Math.min(1, (cam - 4.6) / 1.4));
    if (sa > 0) {
      cx.fillStyle = '#fff';
      STARS.forEach(function (s) {
        var y = ((s.y + drift * s.d * 0.9) % 1) * H, tw = 0.6 + 0.4 * Math.sin(tsec * 2 + s.p);
        cx.globalAlpha = sa * tw * (0.4 + s.d * 0.6);
        var len = 1 + Math.max(0, thrustNow - 0.9) * s.d * 10; // ふだんは 点、ブースト中だけ 少し のびる
        cx.fillRect(s.x * W, y, s.s, s.s * len);
      });
      cx.globalAlpha = 1;
    }
    // 地球の まるみ（宇宙の入口 あたり）
    if (cam > 5.2 && cam < 8.6) {
      var R = W * 2.4, cy0 = Y(5.55) + R * 0.98;
      if (cy0 - R < H + 40) {
        var eg = cx.createRadialGradient(W / 2, cy0, R * 0.9, W / 2, cy0, R * 1.04);
        eg.addColorStop(0, '#1e5aa8'); eg.addColorStop(0.92, '#4fa3e3'); eg.addColorStop(0.97, 'rgba(140,210,255,.55)'); eg.addColorStop(1, 'rgba(140,210,255,0)');
        cx.fillStyle = eg; cx.beginPath(); cx.arc(W / 2, cy0, R * 1.04, 0, Math.PI * 2); cx.fill();
      }
    }
    // 地面・街・発射台
    var gy = Y(0) + H * 0.04;
    if (gy < H + 10) {
      cx.fillStyle = '#7d8f7a'; CITY.forEach(function (b) { cx.fillRect(b.x * W, gy - b.h * H, b.w * W, b.h * H + 2); });
      cx.fillStyle = '#5e7a5a'; cx.fillRect(0, gy, W, H);
      cx.fillStyle = '#9aa29a'; cx.fillRect(W * 0.78, gy - 6, W * 0.16, 6); // 発射台
    }
    // めじるし
    var big = Math.min(W, H);
    function mark(L, ch, x, px) { var y = Y(L) + px * 0.15; if (y > -px && y - px < H + px) emoji(ch, x, y, px); }
    mark(1, '🗼', W * 0.2, big * 0.3);
    mark(2, '🏙', W * 0.28, big * 0.32);
    // 富士山（横に大きく）
    var fy = Y(3) + H * 0.1;
    if (fy > -40 && fy - H * 0.4 < H) {
      cx.fillStyle = '#4b6b8f'; cx.beginPath(); cx.moveTo(-W * 0.1, fy); cx.lineTo(W * 0.42, fy - H * 0.36); cx.lineTo(W * 0.58, fy - H * 0.36); cx.lineTo(W * 1.1, fy); cx.closePath(); cx.fill();
      cx.fillStyle = '#f4f7fb'; cx.beginPath(); cx.moveTo(W * 0.33, fy - H * 0.27); cx.lineTo(W * 0.42, fy - H * 0.36); cx.lineTo(W * 0.58, fy - H * 0.36); cx.lineTo(W * 0.67, fy - H * 0.27);
      for (var z = 0; z < 6; z++) cx.lineTo(W * (0.64 - z * 0.06), fy - H * (0.27 + (z % 2 ? 0.02 : -0.01)));
      cx.closePath(); cx.fill();
    }
    // 飛行機（横切る）
    var py = Y(4); if (py > -60 && py < H + 60) emoji('✈️', ((tsec * 0.08) % 1.4 - 0.2) * W, py, big * 0.12);
    mark(7, '🛰', W * 0.25 + Math.sin(tsec * 0.3) * W * 0.05, big * 0.18);
    mark(8, '🌕', W * 0.3, big * 0.42);
    // 火星
    var my = Y(9) - big * 0.2;
    if (my > -big * 0.4 && my < H + big * 0.4) {
      var mg = cx.createRadialGradient(W * 0.3 - big * 0.06, my - big * 0.06, big * 0.02, W * 0.3, my, big * 0.2);
      mg.addColorStop(0, '#f08a5d'); mg.addColorStop(1, '#8c2f1b'); cx.fillStyle = mg; cx.beginPath(); cx.arc(W * 0.3, my, big * 0.2, 0, Math.PI * 2); cx.fill();
    }
    mark(10, '🪐', W * 0.3, big * 0.45);
    // 雲（通りすぎる。推進力で 速く流れる）
    var ca = Math.max(0, 1 - Math.max(0, cam - 5.6) / 0.8);
    if (ca > 0) CLOUDS.forEach(function (c) {
      // 雲は 雲の高さ（0.5〜5.8）の中で 下へ 流れつづける（推進力が強いほど 速い）
      var lv = 0.5 + (((c.lv - 0.5 - drift * 0.12) % 5.3) + 5.3) % 5.3, y = Y(lv);
      if (y < -60 || y > H + 60) return;
      var x = c.x * W, w = c.w * W, stretch = 1 + thrustNow * 0.6;
      cx.globalAlpha = c.a * ca; cx.fillStyle = '#ffffff';
      cx.beginPath(); cx.ellipse(x, y, w * 0.5, w * 0.16 * stretch, 0, 0, Math.PI * 2); cx.ellipse(x - w * 0.22, y + 3, w * 0.28, w * 0.12 * stretch, 0, 0, Math.PI * 2); cx.ellipse(x + w * 0.2, y - 4, w * 0.3, w * 0.14 * stretch, 0, 0, Math.PI * 2); cx.fill();
      cx.globalAlpha = 1;
    });
    // 速さの線（ブースト・速いとき）
    if (!reduce && st.boost && thrustNow > 1.1) { // 速さの線は ブースト中だけ
      cx.strokeStyle = 'rgba(255,255,255,' + Math.min(0.3, (thrustNow - 1.1) * 0.8) + ')'; cx.lineWidth = 1.5;
      for (var q = 0; q < 14; q++) { var lx = ((q * 0.137 + 0.05) % 1) * W, ly = ((drift * 3 + q * 0.29) % 1) * H; cx.beginPath(); cx.moveTo(lx, ly); cx.lineTo(lx, ly + 40 + thrustNow * 40); cx.stroke(); }
    }
    // ロケット（右下）と 炎
    var rx = W - Math.max(34, Math.min(60, W * 0.08)), ry = H * 0.84 + (st.started ? Math.sin(tsec * 18) * thrustNow * 1.5 : 0);
    var rs = Math.max(30, Math.min(56, big * 0.09));
    if (st.started) {
      var fl = rs * (0.5 + thrustNow * 0.9) * (0.85 + Math.random() * 0.3);
      var fg = cx.createLinearGradient(0, ry, 0, ry + fl);
      fg.addColorStop(0, 'rgba(255,240,180,.95)'); fg.addColorStop(0.4, 'rgba(255,159,28,.85)'); fg.addColorStop(1, 'rgba(255,80,60,0)');
      cx.fillStyle = fg; cx.beginPath(); cx.moveTo(rx - rs * 0.16, ry - 2); cx.quadraticCurveTo(rx, ry + fl * 1.1, rx + rs * 0.16, ry - 2); cx.closePath(); cx.fill();
    }
    cx.save(); cx.translate(rx, ry); cx.rotate(-Math.PI / 4); cx.font = rs + 'px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('🚀', rs * 0.12, -rs * 0.12); cx.restore();
  }

  function start(parent, getter) {
    stop();
    get = getter; cam = 0; vel = 0; drift = 0; thrustNow = 0; t0 = performance.now(); lastT = 0;
    cv = document.createElement('canvas'); cv.className = 'scene'; cv.setAttribute('aria-hidden', 'true');
    parent.insertBefore(cv, parent.firstChild); cx = cv.getContext('2d');
    size(); window.addEventListener('resize', size);
    raf = requestAnimationFrame(draw);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf); raf = 0;
    window.removeEventListener('resize', size);
    if (cv && cv.parentNode) cv.parentNode.removeChild(cv);
    cv = null; get = null;
  }
  window.LXSCENE = { start: start, stop: stop };
})();
