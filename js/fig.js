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
    return '<div class="fig ftime"><div class="tmarks">' + f.marks.map(function (m, i) {
      var c = 'tm' + (i % 3);
      if (m.at != null) return '<div class="tmk ' + c + '"><span class="dot" style="left:' + pos(m.at) + '%"></span><span class="tl0" style="left:' + pos(m.at) + '%">' + esc(m.label) + '</span></div>';
      var a = Math.min(m.from, m.to), b = Math.max(m.from, m.to), dir = m.to > m.from ? 'r' : 'l';
      return '<div class="tmk ' + c + '"><span class="band ' + dir + '" style="left:' + pos(a) + '%;width:' + (pos(b) - pos(a)).toFixed(2) + '%"></span><span class="tl0" style="left:' + ((+pos(a) + +pos(b)) / 2).toFixed(2) + '%">' + esc(m.label) + '</span></div>';
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
  function html(f) {
    if (!f || !f.t) return '';
    try { return { slots: slots, time: time, scale: scale, flow: flow, vs: vs }[f.t](f); } catch (e) { return ''; }
  }

  /* slots の矢印は 描いたあとで 箱の位置を測って ひく */
  function after(root) {
    (root || document).querySelectorAll('.fslots.has-arc').forEach(function (fg) {
      var ab = fg.getAttribute('data-arc').split(','), a = fg.querySelector('[data-i="' + ab[0] + '"]'), b = fg.querySelector('[data-i="' + ab[1] + '"]');
      var svg = fg.querySelector('svg.arcs'), lab = fg.querySelector('.arcl'); if (!a || !b || !svg) return;
      var R = fg.getBoundingClientRect(), ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      var x1 = ra.left + ra.width / 2 - R.left, x2 = rb.left + rb.width / 2 - R.left, y = Math.max(ra.bottom, rb.bottom) - R.top + 2;
      var dip = Math.min(26, 10 + Math.abs(x2 - x1) * 0.12);
      svg.setAttribute('width', R.width); svg.setAttribute('height', R.height);
      svg.innerHTML = '<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>' +
        '<path d="M' + x1 + ',' + y + ' C' + x1 + ',' + (y + dip) + ' ' + x2 + ',' + (y + dip) + ' ' + x2 + ',' + (y + 3) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#ah)"/>';
      if (lab) { lab.style.left = ((x1 + x2) / 2) + 'px'; lab.style.top = (y + dip * 0.75) + 'px'; }
    });
  }
  var rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { after(document); }, 120); });

  window.LXFIG = { html: html, after: after };
})();
