/* 論理表現ラボ：文法の図（5 種類）
   slots … 文の部品を 色分け（S・V・O・C・M）＋「説明する」矢印
   time  … 時間の線（過去 ← 今 → 未来）
   scale … ものさし（確信度・程度）
   flow  … 文章の組み立て
   vs    … まぎらわしい 2 つを くらべる */
(function () {
  'use strict';

  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var ROLE = { S: '主語', V: '動詞', O: '目的語', C: '補語', M: '修飾' };

  function slots(f) {
    var arc = f.arc && f.arc.length === 3 ? f.arc : null;
    return '<div class="fig fslots' + (arc ? ' has-arc' : '') + '"' + (arc ? ' data-arc="' + arc[0] + ',' + arc[1] + '" data-arcl="' + esc(arc[2]) + '"' : '') + '>' +
      '<div class="slrow">' + f.parts.map(function (p, i) {
        var r = p[1], known = ROLE[r];
        return '<div class="sl r-' + (known ? r : 'X') + '" data-i="' + i + '"><b>' + esc(p[0]) + '</b><i>' + esc(r) + (known ? '<small>' + known + '</small>' : '') + '</i></div>';
      }).join('') + '</div>' + (arc ? '<svg class="arcs" aria-hidden="true"></svg><span class="arcl">' + esc(arc[2]) + '</span>' : '') + '</div>';
  }
  function pos(v) { return ((Math.max(-4, Math.min(4, +v)) + 4) / 8 * 100).toFixed(2); }
  function time(f) {
    var n = f.marks.length;
    return '<div class="fig ftime"><div class="tmarks">' + f.marks.map(function (m, i) {
      var c = 'tm' + (i % 3), k = n - 1 - i; // k：時間の線まで あと 何段
      // 点（できごと）は 時間の線の 上に 打ち、ことばから 点線で つなぐ（どの 時点か ひと目で わかる）
      if (m.at != null) return '<div class="tmk ' + c + '" style="--k:' + k + '"><span class="stem" style="left:' + pos(m.at) + '%"></span><span class="dot" style="left:' + pos(m.at) + '%"></span><span class="tl0" style="left:' + pos(m.at) + '%">' + esc(m.label) + '</span></div>';
      var a = Math.min(m.from, m.to), b = Math.max(m.from, m.to), dir = m.to > m.from ? 'r' : 'l';
      return '<div class="tmk ' + c + '" style="--k:' + k + '"><span class="band ' + dir + '" style="left:' + pos(a) + '%;width:' + (pos(b) - pos(a)).toFixed(2) + '%"></span><span class="tl0" style="left:' + ((+pos(a) + +pos(b)) / 2).toFixed(2) + '%">' + esc(m.label) + '</span></div>';
    }).join('') + '</div>' +
      '<div class="taxis"><span class="tp">過去</span><span class="now">今</span><span class="tf">未来</span></div></div>';
  }
  function scale(f) {
    return '<div class="fig fscale"><div class="sbar">' + f.items.map(function (it, i) {
      var x = Math.max(0, Math.min(100, +it[1])), edge = x >= 82 ? ' er' : x <= 18 ? ' el' : '';
      return '<span class="pin ' + (i % 2 ? 'dn' : 'up') + edge + '" style="left:' + x + '%"><b>' + esc(it[0]) + '</b></span>';
    }).join('') + '</div><div class="sends"><span>' + esc(f.left) + '</span><span>' + esc(f.right) + '</span></div></div>';
  }
  function flow(f) {
    return '<div class="fig fflow">' + f.steps.map(function (x, i) {
      return (i ? '<span class="fa">➜</span>' : '') + '<span class="fs fs' + (i % 5) + '">' + esc(x) + '</span>';
    }).join('') + '</div>';
  }
  function vs(f) {
    return '<div class="fig fvs"><div class="vb va"><b>' + esc(f.a[0]) + '</b><small>' + esc(f.a[1]) + '</small></div>' +
      '<span class="vsx">VS</span>' +
      '<div class="vb vbb"><b>' + esc(f.b[0]) + '</b><small>' + esc(f.b[1]) + '</small></div></div>';
  }
  /* pic … 絵（絵文字の人・物を置いて、矢印と吹き出しで 文法のイメージを 場面にする）
     座標は 横 0〜100・縦 0〜100（％）。箱は 横：縦 ＝ 2：1 */
  function pic(f) {
    var items = f.items || [], P = function (it) { return [(+it.x) * 2, +it.y]; };
    var labs = '';
    var svg = (f.arrows || []).map(function (ar) {
      var a = items[ar[0]], b = items[ar[1]]; if (!a || !b) return '';
      var A0 = P(a), B0 = P(b), dx = B0[0] - A0[0], dy = B0[1] - A0[1], L = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / L, uy = dy / L, ra = 13 * (+a.s || 1), rb = 13 * (+b.s || 1);
      var x1 = A0[0] + ux * ra, y1 = A0[1] + uy * ra, x2 = B0[0] - ux * rb, y2 = B0[1] - uy * rb;
      var cx = (x1 + x2) / 2 + (dx >= 0 ? uy : -uy) * 9, cy = (y1 + y2) / 2 - Math.abs(ux) * 9; // 少しだけ 上に ふくらませる
      var tx = x2 - cx, ty = y2 - cy, tl = Math.sqrt(tx * tx + ty * ty) || 1; tx /= tl; ty /= tl;
      var h1 = (x2 - tx * 7 - ty * 4) + ',' + (y2 - ty * 7 + tx * 4), h2 = (x2 - tx * 7 + ty * 4) + ',' + (y2 - ty * 7 - tx * 4);
      var lx = (x1 + 2 * cx + x2) / 4, ly = (y1 + 2 * cy + y2) / 4 - 2;
      // 矢印の ことばは 絵より 手前の 札にする（重なっても 読める）
      if (ar[2]) labs += '<span class="pal2" style="left:' + (lx / 2).toFixed(1) + '%;top:' + ly.toFixed(1) + '%">' + esc(ar[2]) + '</span>';
      return '<path d="M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1) + '" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"' + (ar[3] === 'dash' ? ' stroke-dasharray="5 4"' : '') + '/>' +
        '<polygon points="' + x2.toFixed(1) + ',' + y2.toFixed(1) + ' ' + h1 + ' ' + h2 + '" fill="currentColor"/>';
    }).join('');
    return '<div class="fig fpic"><div class="pbox">' +
      '<svg viewBox="0 0 200 100" class="parr" aria-hidden="true">' + svg + '</svg>' +
      items.map(function (it) {
        var sc = Math.max(0.6, Math.min(1.6, +it.s || 1));
        return '<div class="pit" style="left:' + (+it.x) + '%;top:' + (+it.y) + '%;--s:' + sc + '">' +
          (it.b ? '<span class="pbub">' + esc(it.b) + '</span>' : '') +
          '<span class="pe">' + esc(it.e) + '</span>' + (it.l ? '<span class="pl">' + esc(it.l) + '</span>' : '') + '</div>';
      }).join('') + labs + '</div>' + (f.cap ? '<p class="pcap">' + esc(f.cap) + '</p>' : '') + '</div>';
  }
  /* bars … くらべる棒（比較の「同じ」「〜より上」） */
  function bars(f) {
    return '<div class="fig fbars">' + (f.items || []).map(function (it, i) {
      return '<div class="bri"><span class="brl">' + esc(it[0]) + '</span><span class="brb"><i class="bc' + (i % 4) + '" style="width:' + Math.max(2, Math.min(100, +it[1])) + '%"></i></span></div>';
    }).join('') + (f.cap ? '<p class="pcap">' + esc(f.cap) + '</p>' : '') + '</div>';
  }
  function html(f) {
    if (!f || !f.t) return '';
    try { return { slots: slots, time: time, scale: scale, flow: flow, vs: vs, pic: pic, bars: bars }[f.t](f); } catch (e) { return ''; }
  }

  /* slots の矢印は 描いたあとで 箱の位置を測って ひく */
  function after(root) {
    (root || document).querySelectorAll('.fslots.has-arc').forEach(function (fg) {
      var ab = fg.getAttribute('data-arc').split(','), a = fg.querySelector('[data-i="' + ab[0] + '"]'), b = fg.querySelector('[data-i="' + ab[1] + '"]');
      var svg = fg.querySelector('svg.arcs'), lab = fg.querySelector('.arcl'); if (!a || !b || !svg) return;
      var R = fg.getBoundingClientRect(), ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      // 出発点（説明する側）と 到着点（説明される側）の 箱の下のまんなか
      var x1 = Math.round(ra.left + ra.width / 2 - R.left), x2 = Math.round(rb.left + rb.width / 2 - R.left);
      var y0 = Math.round(Math.max(ra.bottom, rb.bottom) - R.top), d = 14, dir = x2 > x1 ? 1 : -1;
      var r = Math.min(6, Math.abs(x2 - x1) / 2), yb = y0 + d;
      svg.setAttribute('width', R.width); svg.setAttribute('height', R.height);
      // 下に出て → 横へ → 上に入る（角は丸く）。先に小さな矢じり、出発点に丸
      svg.innerHTML =
        '<path d="M' + x1 + ',' + (y0 + 4) + ' V' + (yb - r) + ' Q' + x1 + ',' + yb + ' ' + (x1 + dir * r) + ',' + yb +
        ' H' + (x2 - dir * r) + ' Q' + x2 + ',' + yb + ' ' + x2 + ',' + (yb - r) + ' V' + (y0 + 8) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<polygon points="' + x2 + ',' + (y0 + 2) + ' ' + (x2 - 5) + ',' + (y0 + 9) + ' ' + (x2 + 5) + ',' + (y0 + 9) + '" fill="currentColor"/>' +
        '<circle cx="' + x1 + '" cy="' + (y0 + 4) + '" r="3" fill="currentColor"/>';
      if (lab) {
        var w = lab.offsetWidth, mid = (x1 + x2) / 2;
        mid = Math.max(w / 2, Math.min(R.width - w / 2, mid));
        lab.style.left = mid + 'px'; lab.style.top = (yb + 3) + 'px';
      }
    });
  }
  var rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { after(document); }, 120); });

  window.LXFIG = { html: html, after: after };
})();
