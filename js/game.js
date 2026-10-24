/* 論理表現ラボ：ごほうび（コイン・段位・バッジ）／⏱ タイムアタック／🏆 クラス対戦
   クラス対戦は Firebase Realtime Database（無料）の REST API を使う。設定は ⚙ か js/config.js */
(function () {
  'use strict';

  function A() { return window.LXAPP; }
  function S() { return A().S(); }
  function esc(t) { return A().esc(t); }
  function $(s, r) { return (r || document).querySelector(s); }
  function fmt(n) { return Math.round(n).toLocaleString('ja-JP'); }
  function save() { A().save(); }

  /* =========================================================
     ごほうび：コイン → 段位、毎日の連続記録、バッジ
     ========================================================= */
  var LEVELS = [
    [0, '10級'], [100, '9級'], [250, '8級'], [500, '7級'], [800, '6級'], [1200, '5級'], [1700, '4級'], [2300, '3級'],
    [3000, '2級'], [4000, '1級'], [5500, '初段'], [7500, '二段'], [10000, '三段'], [13000, '四段'], [17000, '五段'], [22000, '名人']
  ];
  var BADGES = [
    { id: 'first', ico: '🌱', name: 'はじめの一歩', how: 'はじめてコインを手に入れる' },
    { id: 'pass1', ico: '💮', name: '初合格', how: '単元テストに 1 つ合格' },
    { id: 'pass12', ico: '📘', name: 'コース制覇', how: '1 つのコースの 12 単元すべて合格' },
    { id: 'pass36', ico: '👑', name: '全単元制覇', how: 'Ⅰ・Ⅱ・Ⅲ の 36 単元すべて合格' },
    { id: 'day3', ico: '🔥', name: '3日連続', how: '3 日続けて 学習する' },
    { id: 'day7', ico: '🌋', name: '7日連続', how: '7 日続けて 学習する' },
    { id: 'day30', ico: '🏯', name: '30日連続', how: '30 日続けて 学習する' },
    { id: 'fix50', ico: '🧠', name: '定着 50 文', how: '「○ 言えた」が 3 回続いた文が 50 文' },
    { id: 'rev100', ico: '🔁', name: '思い出し 100 回', how: '英作文・復習で ○△✕ を 100 回' },
    { id: 'combo10', ico: '⚡', name: '10 コンボ', how: 'タイムアタックで 10 コンボ' },
    { id: 'combo30', ico: '🌩', name: '30 コンボ', how: 'タイムアタックで 30 コンボ' },
    { id: 'ta1000', ico: '🎯', name: '1,000 点', how: 'タイムアタックで 1,000 点' },
    { id: 'ta3000', ico: '🚀', name: '3,000 点', how: 'タイムアタックで 3,000 点' },
    { id: 'battle', ico: '🏆', name: 'クラス対戦デビュー', how: 'クラス対戦に参加する' },
    { id: 'top3', ico: '🥇', name: '表彰台', how: 'クラス対戦で 3 位以内' },
    { id: 'coin5000', ico: '💰', name: '5,000 コイン', how: 'コインを 5,000 枚ためる' }
  ];
  /* 語数をくらべる「ものさし」（寿司打の「〇円分」のかわり） */
  var RULER = [
    [0, 'ウォーミングアップ中'], [10, '英語のあいさつ 数回分'], [30, '英語の自己紹介 くらい'],
    [60, '英検3級のライティング（25〜35語）2本分'], [90, '英検2級のライティング（80〜100語）1本分'],
    [130, '1分間スピーチ 1本分'], [200, '英検準1級のライティング（120〜150語）1本分以上'],
    [300, '英字新聞の短いニュース記事 1本分'], [450, '共通テストの長文 1題分']
  ];

  function rw() {
    var s = S();
    if (!s.rw) s.rw = { coins: 0, streak: 0, lastDay: 0, badges: {}, best: {}, cnt: 0, battles: 0, top3: 0, maxCombo: 0, taBest: 0 };
    return s.rw;
  }
  function levelOf(c) {
    var i = 0; while (i + 1 < LEVELS.length && c >= LEVELS[i + 1][0]) i++;
    var nx = LEVELS[i + 1];
    return { i: i, name: LEVELS[i][1], from: LEVELS[i][0], next: nx ? nx[0] : null, nextName: nx ? nx[1] : null };
  }
  function streakNow() { var r = rw(), d = A().dayNo(); return r.lastDay >= d - 1 ? r.streak : 0; }
  function touchDay() {
    var r = rw(), d = A().dayNo();
    if (r.lastDay === d) return;
    r.streak = r.lastDay === d - 1 ? r.streak + 1 : 1; r.lastDay = d;
  }
  function passCount(cid) {
    var n = 0; A().COURSES.forEach(function (c) { if (cid && c.id !== cid) return; c.units.forEach(function (u) { if (A().prog(u.id).pass) n++; }); });
    return n;
  }
  function badgeOn(id) {
    var r = rw(), s = S();
    switch (id) {
      case 'first': return r.coins > 0;
      case 'pass1': return passCount() >= 1;
      case 'pass12': return A().COURSES.some(function (c) { return passCount(c.id) >= c.units.length; });
      case 'pass36': return passCount() >= 36;
      case 'day3': return r.streak >= 3;
      case 'day7': return r.streak >= 7;
      case 'day30': return r.streak >= 30;
      case 'fix50': return Object.keys(s.srs).filter(function (k) { return s.srs[k].b >= 3; }).length >= 50;
      case 'rev100': return r.cnt >= 100;
      case 'combo10': return r.maxCombo >= 10;
      case 'combo30': return r.maxCombo >= 30;
      case 'ta1000': return r.taBest >= 1000;
      case 'ta3000': return r.taBest >= 3000;
      case 'battle': return r.battles >= 1;
      case 'top3': return r.top3 >= 1;
      case 'coin5000': return r.coins >= 5000;
    }
    return false;
  }
  function checkBadges() {
    var r = rw();
    BADGES.forEach(function (b) {
      if (!r.badges[b.id] && badgeOn(b.id)) { r.badges[b.id] = A().today(); celebrate(b.ico + ' バッジ獲得', b.name); }
    });
  }
  function earn(n) {
    if (!n) return;
    var r = rw(), before = levelOf(r.coins).i;
    r.coins += n; touchDay();
    var lv = levelOf(r.coins);
    if (lv.i > before) celebrate('🎉 段位アップ！', lv.name);
    checkBadges(); save(); chip(); plus(n);
  }
  function chip() {
    var r = rw(), el = $('#coinChip'); if (!el) return;
    el.innerHTML = '🪙<b>' + fmt(r.coins) + '</b><span class="lv">' + levelOf(r.coins).name + '</span>';
  }
  function plus(n) {
    var el = $('#coinChip'); if (!el) return;
    var rc = el.getBoundingClientRect(), p = document.createElement('div');
    p.className = 'plus'; p.textContent = '+' + n; p.style.left = (rc.left + rc.width / 2) + 'px'; p.style.top = (rc.bottom) + 'px';
    document.body.appendChild(p); setTimeout(function () { p.remove(); }, 900);
  }
  var cq = [], cbusy = false;
  function celebrate(t, big) {
    cq.push([t, big]); if (cbusy) return;
    (function nextC() {
      var x = cq.shift(); if (!x) { cbusy = false; return; }
      cbusy = true;
      var d = document.createElement('div'); d.className = 'celebrate';
      d.innerHTML = '<small>' + esc(x[0]) + '</small><b>' + esc(x[1]) + '</b>';
      document.body.appendChild(d);
      setTimeout(function () { d.remove(); nextC(); }, 2000);
    })();
  }

  /* ---------- ダイアログ（ごほうび・設定） ---------- */
  var gdlg, gin;
  function dlgOpen(html) { gin.innerHTML = html; if (!gdlg.open) gdlg.showModal(); }
  function openRewards() {
    var r = rw(), lv = levelOf(r.coins), pc = lv.next ? (r.coins - lv.from) / (lv.next - lv.from) * 100 : 100;
    var keys = [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全']], ms = [['order', '並べかえ'], ['cloze', '穴うめ'], ['mix', 'ミックス']];
    dlgOpen('<div class="dlg-head"><h2>🪙 ごほうび</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="dlg-body rwbody">' +
      '<div class="lvcard"><small>いまの段位</small><b class="lvname">' + lv.name + '</b>' +
      '<div class="pbar"><i style="width:' + pc.toFixed(1) + '%"></i></div>' +
      '<small>' + (lv.next ? '次の「' + lv.nextName + '」まで あと ' + fmt(lv.next - r.coins) + ' コイン' : '最高の段位です！') + '</small>' +
      '<div class="lvstats"><span>🪙 <b>' + fmt(r.coins) + '</b> コイン</span><span>🔥 <b>' + streakNow() + '</b> 日連続</span><span>🏅 <b>' + Object.keys(r.badges).length + '</b>/' + BADGES.length + '</span></div>' +
      '<table class="best"><tr><th>⏱ ベスト</th>' + ms.map(function (m) { return '<th>' + m[1] + '</th>'; }).join('') + '</tr>' +
      keys.map(function (k) { return '<tr><th>' + k[1] + '</th>' + ms.map(function (m) { var b = r.best[k[0] + '-' + m[0]]; return '<td>' + (b ? fmt(b) : '－') + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>' +
      '</div>' +
      '<div class="badges">' + BADGES.map(function (b) {
        var on = r.badges[b.id];
        return '<div class="bd' + (on ? '' : ' off') + '" title="' + esc(b.how) + '"><i>' + (on ? b.ico : '🔒') + '</i><b>' + esc(b.name) + '</b><small>' + esc(on ? on : b.how) + '</small></div>';
      }).join('') + '</div>' +
      '<p class="note rwnote">コインのもらい方：正解 +10・英作文 ○ +5・音読 ✓ +1・テスト合格 +50（はじめての合格は +150）・タイムアタックは 20 点で +1</p>' +
      '</div>');
  }
  function openSettings() {
    var s = S(), seg = function (key, opts, cur) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-set="' + key + ':' + o[0] + '" aria-pressed="' + (String(cur) === String(o[0])) + '">' + o[1] + '</button>'; }).join('') + '</div>';
    };
    dlgOpen('<div class="dlg-head"><h2>⚙ 設定</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="dlg-body">' +
      '<div class="fld"><span class="fl">文字の大きさ</span>' + seg('size', [[0, '小'], [1, '中'], [2, '大']], s.size) + '</div>' +
      '<div class="fld"><span class="fl">画面</span>' + seg('theme', [['', '自動'], ['light', '明るい'], ['dark', '暗い']], s.theme || '') + '</div>' +
      '<div class="fld"><span class="fl">読み上げ</span>' + seg('rate', [[0.9, 'ふつう'], [0.65, 'ゆっくり']], s.rate < 0.8 ? 0.65 : 0.9) + '</div>' +
      '<hr class="sep"><b>🏆 クラス対戦のデータベース（先生が 1 回だけ）</b>' +
      '<div class="fld"><input type="text" id="dbUrl" placeholder="https://〇〇-default-rtdb.〇〇.firebasedatabase.app" value="' + esc(s.db || '') + '"><button type="button" class="btn" data-set="dbtest">保存して接続テスト</button></div>' +
      '<p class="note">' + (window.LX_CONFIG && LX_CONFIG.db ? 'js/config.js に設定ずみ（ここが空なら そちらを使います）。' : '作り方は README の「クラス対戦の準備」にあります。') +
      '生徒は 先生の部屋のリンク・QR から入れば 設定はいりません。</p>' +
      '</div>');
  }
  function settingsClick(v) {
    var s = S();
    if (v === 'dbtest') {
      s.db = $('#dbUrl').value.trim().replace(/\/+$/, ''); save();
      if (!base()) { toast('https:// で始まる URL を入れてください'); return; }
      var k = 'rooms/ping_' + pid();
      api('PUT', k, { t: { '.sv': 'timestamp' } })
        .then(function () { return api('DELETE', k); })
        .then(function () { toast('✅ つながりました'); }, function (e) { toast('✕ つながりません（' + e.message + '）'); });
      return;
    }
    var kv = v.split(':'), key = kv[0], val = kv[1];
    if (key === 'size') s.size = +val;
    if (key === 'theme') s.theme = val;
    if (key === 'rate') s.rate = +val;
    save(); A().applyLook(); openSettings();
  }
  function toast(m) { A().toast(m); }

  /* =========================================================
     タイムアタックの しくみ（ひとり・クラス対戦 共通）
     ========================================================= */
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function rshuffle(a, R) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pool(cfg) {
    var out = [];
    A().COURSES.forEach(function (c) {
      if (cfg.c !== 'all' && c.id !== cfg.c) return;
      c.units.forEach(function (u) {
        if (u.no > (cfg.u || 99)) return;
        if (cfg.p && !A().prog(u.id).pass) return;
        out = out.concat(u.sentences);
      });
    });
    return out;
  }
  function cfgName(cfg) {
    var c = cfg.c === 'all' ? '全コース' : (A().COURSES.filter(function (x) { return x.id === cfg.c; })[0] || {}).name;
    return c + (cfg.u && cfg.u < 12 ? '（〜' + cfg.u + '）' : '') + '・' + { order: '並べかえ', cloze: '穴うめ', mix: 'ミックス' }[cfg.m] + '・' + cfg.t + '秒';
  }
  function words(s) { return s.plain.split(' ').length; }

  var G = null;          // 遊んでいるゲーム
  var OFF = 0;           // サーバーとの時計のずれ（ms）
  function now() { return Date.now() + OFF; }
  function mult() { return 1 + Math.min(4, Math.floor(G.combo / 10)) * 0.5; }

  function newGame(cfg, seed, mode, startAt) {
    if (G) clearInterval(G.timer);
    var R = rng(seed), p = pool(cfg);
    G = { cfg: cfg, R: R, list: rshuffle(p, R), qi: 0, score: 0, combo: 0, maxCombo: 0, ok: 0, miss: 0, words: 0,
      mode: mode, startAt: startAt, endAt: startAt + cfg.t * 1000, q: null, lock: false, over: false, timer: null };
    nextQ();
    return G;
  }
  function nextQ() {
    var s = G.list[G.qi % G.list.length]; G.qi++;
    var type = G.cfg.m === 'mix' ? (G.R() < 0.5 ? 'order' : 'cloze') : G.cfg.m;
    if (type === 'order') {
      var t = A().tilesOf(s), idx = t.tiles.map(function (_, i) { return i; });
      G.q = { s: s, type: type, tiles: t.tiles, end: t.end, ord: rshuffle(idx, G.R), placed: [], ptr: 0, bad: -1 };
    } else {
      G.q = { s: s, type: type, ch: rshuffle([s.key].concat(s.alt), G.R), pick: -1 };
    }
    G.lock = false;
  }
  function pts(base) { var p = Math.round(base * mult()); G.score += p; return p; }
  function hit() { G.combo++; if (G.combo > G.maxCombo) G.maxCombo = G.combo; }
  function miss() { G.combo = 0; G.miss++; }
  function solved() {
    G.ok++; G.words += words(G.q.s); G.lock = true;
    pushScore();
    setTimeout(function () { if (G && !G.over) { nextQ(); drawQ(); } }, 280);
  }
  function tapTile(i) {
    var q = G.q; if (G.lock || q.placed.indexOf(i) >= 0) return;
    if (q.tiles[i] === q.tiles[q.ptr]) {
      q.placed.push(i); q.ptr++; hit(); pts(10); q.bad = -1;
      if (q.ptr === q.tiles.length) { pts(20); q.done = 1; solved(); }
    } else { miss(); q.bad = i; }
    drawQ();
  }
  function pickChoice(i) {
    var q = G.q; if (G.lock || q.pick >= 0) return;
    q.pick = i;
    if (q.ch[i] === q.s.key) { hit(); pts(30); drawQ(); solved(); }
    else {
      miss(); G.lock = true; drawQ();
      setTimeout(function () { if (G && !G.over) { nextQ(); drawQ(); } }, 900);
    }
  }

  /* 画面 */
  function playShell(title) {
    A().view.innerHTML = '<div class="unit play">' +
      '<div class="hud">' +
      '<button type="button" class="btn ghost" data-ga="quit" title="やめる">✕</button>' +
      '<div class="tbar"><i id="tfill"></i><span id="tsec"></span></div>' +
      '<div class="hc" id="hcombo"></div>' +
      '<div class="hs"><small>' + esc(title) + '</small><b id="hscore">0</b></div>' +
      '</div>' +
      '<section class="card"><div class="cin" id="gq"></div></section></div>';
  }
  function drawHud() {
    if (!G) return;
    var t = now(), left = Math.max(0, G.endAt - t), all = G.cfg.t * 1000;
    var f = $('#tfill'), sec = $('#tsec'), sc = $('#hscore'), cb = $('#hcombo');
    if (f) { f.style.width = (t < G.startAt ? 100 : left / all * 100) + '%'; f.className = left < 10000 && t >= G.startAt ? 'hurry' : ''; }
    if (sec) sec.textContent = t < G.startAt ? G.cfg.t + '秒' : Math.ceil(left / 1000) + '秒';
    if (sc) sc.textContent = fmt(G.score);
    if (cb) cb.innerHTML = G.combo >= 2 ? '<b>' + G.combo + '</b> コンボ' + (mult() > 1 ? '<i>×' + mult() + '</i>' : '') : '';
  }
  function drawQ() {
    var el = $('#gq'); if (!el || !G) return;
    var t = now();
    if (t < G.startAt) {
      var n = Math.ceil((G.startAt - t) / 1000);
      el.innerHTML = '<div class="count"><small>' + esc(cfgName(G.cfg)) + '</small><b>' + (n > 3 ? '…' : n) + '</b><small>正しいカード・答えを どんどんタップ！ ミスするとコンボが切れる</small></div>';
      drawHud(); return;
    }
    var q = G.q, s = q.s, h;
    if (q.type === 'order') {
      h = '<div class="lab"><span class="pill">🧩 並べかえ</span><span>次に来るカードをタップ</span><span class="r">✅ ' + G.ok + '　✕ ' + G.miss + '</span></div>' +
        '<div class="mid"><p class="ja big">' + esc(s.ja) + '</p>' +
        '<div class="slots' + (q.done ? ' ok' : '') + '">' + q.placed.map(function (i) { return '<span class="tl">' + esc(q.tiles[i]) + '</span>'; }).join('') +
        (q.done ? '<span class="end">' + esc(q.end) + '</span>' : '') + '</div>' +
        '<div class="pool">' + q.ord.map(function (i) {
          return '<button type="button" class="tl' + (q.placed.indexOf(i) >= 0 ? ' used' : '') + (q.bad === i ? ' shake' : '') + '" data-gt="' + i + '">' + esc(q.tiles[i]) + '</button>';
        }).join('') + '</div></div>';
    } else {
      var ok = q.pick >= 0 && q.ch[q.pick] === s.key;
      h = '<div class="lab"><span class="pill">✏️ 穴うめ</span><span>（　）に入るものをタップ</span><span class="r">✅ ' + G.ok + '　✕ ' + G.miss + '</span></div>' +
        '<div class="mid"><p class="en">' + A().blankEn(s, q.pick >= 0 ? s.key : '', q.pick >= 0) + '</p><p class="ja">' + esc(s.ja) + '</p></div>' +
        '<div class="choices">' + q.ch.map(function (w, i) {
          var c = q.pick < 0 ? '' : (w === s.key ? ' ok' : (i === q.pick && !ok ? ' ng' : ''));
          return '<button type="button" class="choice' + c + '" data-gp="' + i + '"><span class="kb">' + (i + 1) + '</span>' + esc(w) + '</button>';
        }).join('') + '</div>';
    }
    el.innerHTML = h; drawHud();
  }
  function runClock(onEnd) {
    clearInterval(G.timer);
    var wasCount = now() < G.startAt;
    G.timer = setInterval(function () {
      if (!G) return;
      var t = now();
      if (t < G.startAt) { drawQ(); return; }
      if (wasCount) { wasCount = false; drawQ(); }
      if (t >= G.endAt && !G.over) { G.over = true; clearInterval(G.timer); onEnd(); return; }
      drawHud();
    }, 100);
    drawQ();
  }
  function ruler(w) { var r = RULER[0][1]; RULER.forEach(function (x) { if (w >= x[0]) r = x[1]; }); return r; }
  function afterGame() {
    var r = rw(), coins = Math.floor(G.score / 20);
    if (G.maxCombo > r.maxCombo) r.maxCombo = G.maxCombo;
    if (G.score > r.taBest) r.taBest = G.score;
    return coins;
  }

  /* ---------- ひとりで タイムアタック ---------- */
  function taCfg() { var s = S(); if (!s.ta) s.ta = { c: s.course || 'c1', m: 'order', p: 0, u: 12, t: 60 }; return s.ta; }
  function startSolo() {
    var cfg = taCfg(), c2 = { c: cfg.c, m: cfg.m, p: cfg.p, u: 12, t: 60 };
    if (!pool(c2).length) { c2.p = 0; toast('合格した単元がまだないので、全単元から出します'); }
    newGame(c2, Math.floor(Math.random() * 1e9), 'solo', Date.now() + 3200);
    playShell('スコア');
    runClock(endSolo);
  }
  function endSolo() {
    var r = rw(), key = G.cfg.c + '-' + G.cfg.m, prev = r.best[key] || 0, rec = G.score > prev;
    if (rec) r.best[key] = G.score;
    var coins = afterGame(); save(); earn(coins); checkBadges();
    var share = '論理表現ラボ ⏱タイムアタック（' + cfgName(G.cfg) + '）\n' + fmt(G.score) + '点！ ' + G.words + '語を組み立てた（≒ ' + ruler(G.words) + '）\n最大' + G.maxCombo + 'コンボ・段位「' + levelOf(r.coins).name + '」\n' + location.origin + location.pathname;
    G.share = share;
    $('#gq').innerHTML = '<div class="result">' +
      (rec && G.score > 0 ? '<div class="bigstamp newrec">新記録</div>' : '') +
      '<div class="score">' + fmt(G.score) + '<small> 点</small></div>' +
      '<p class="phrase">🧩 <b>' + G.words + '</b> 語を組み立てた ≒ <b>' + esc(ruler(G.words)) + '</b></p>' +
      '<p class="tstats">✅ 正解 ' + G.ok + '　✕ ミス ' + G.miss + '　⚡ 最大 ' + G.maxCombo + ' コンボ　🪙 +' + coins + '</p>' +
      '<p class="note">' + esc(cfgName(G.cfg)) + ' のベスト：' + fmt(Math.max(prev, G.score)) + ' 点</p>' +
      '<div class="row" style="justify-content:center"><button type="button" class="btn main" data-ga="again">↺ もう一度</button>' +
      '<button type="button" class="btn warm" data-ga="brag">📣 自慢する</button>' +
      '<button type="button" class="btn ghost" data-go="game">◀ もどる</button></div></div>';
    $('#hcombo').innerHTML = '';
  }
  function brag(text) {
    if (navigator.share && /Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) { navigator.share({ text: text }).catch(function () { }); return; }
    var done = function () { toast('結果の文章をコピーしました。LINE などに はりつけて自慢しよう'); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { toast(text.split('\n')[1]); });
    else toast(text.split('\n')[1]);
  }

  /* ---------- ゲームのトップ ---------- */
  function renderHub() {
    var cfg = taCfg(), r = rw(), s = S();
    var seg = function (key, opts) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-ta="' + key + ':' + o[0] + '" aria-pressed="' + (String(cfg[key]) === String(o[0])) + '">' + o[1] + '</button>'; }).join('') + '</div>';
    };
    var best = r.best[cfg.c + '-' + cfg.m] || 0;
    var hasDb = !!base();
    A().view.innerHTML = '<div class="unit">' +
      '<div class="ubar"><button type="button" class="btn ghost" data-act="home">◀ 一覧</button>' +
      '<div class="utitle"><small>やるほど コインがたまって 段位が上がる</small><b>🎮 ゲーム</b></div>' +
      '<button type="button" class="btn ghost rwbtn" data-ga="rewards">🏅 段位・バッジ</button></div>' +
      '<div class="hub">' +
      '<section class="panel hubp"><h3>⏱ タイムアタック</h3><p class="note">60 秒で 何点とれる？ 正しいカードを 次々タップ。続けて正解すると コンボで点数アップ</p>' +
      '<div class="fld"><span class="fl">コース</span>' + seg('c', [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全部']]) + '</div>' +
      '<div class="fld"><span class="fl">種目</span>' + seg('m', [['order', '並べかえ'], ['cloze', '穴うめ'], ['mix', 'ミックス']]) + '</div>' +
      '<div class="fld"><span class="fl">範囲</span>' + seg('p', [[1, '合格した単元'], [0, '全単元']]) + '</div>' +
      '<div class="fld go"><button type="button" class="btn main big" data-ga="solo">▶ スタート</button><span class="bestv">ベスト <b>' + fmt(best) + '</b> 点</span></div>' +
      '</section>' +
      '<section class="panel hubp"><h3>🏆 クラス対戦</h3><p class="note">先生の合図で 全員いっせいにスタート。ランキングが リアルタイムで動く</p>' +
      (hasDb ?
        '<div class="fld"><input type="text" id="jCode" inputmode="numeric" maxlength="4" placeholder="部屋番号（4けた）"><input type="text" id="jName" maxlength="10" placeholder="ニックネーム" value="' + esc(s.nick || '') + '"></div>' +
        '<div class="fld"><button type="button" class="btn main" data-ga="join">参加する ▶</button></div>' +
        '<div class="fld teacher"><span class="note">先生</span><button type="button" class="btn" data-ga="mkroom">🏫 部屋をつくる</button></div>'
        : '<p class="body warnbox">まだ使えません。先生が ⚙ 設定で データベースを 1 回登録すると使えるようになります（README「クラス対戦の準備」）。<br>先生から届いた 部屋のリンク・QR を開けば すぐ参加できます。</p>' +
        '<div class="fld"><button type="button" class="btn" data-ga="settings">⚙ 設定を開く</button></div>') +
      '</section></div></div>';
  }
  function hubTa(v) { var kv = v.split(':'), cfg = taCfg(); cfg[kv[0]] = kv[0] === 'p' ? +kv[1] : kv[1]; save(); renderHub(); }

  /* =========================================================
     クラス対戦（Firebase Realtime Database の REST ＋ ストリーム）
     rooms/{code} = { cfg, state: lobby|play|end, round, seed, startAt, players: { pid: { n, s, b, k, w, r, d } } }
     ========================================================= */
  function base() {
    var u = (S().db || (window.LX_CONFIG && LX_CONFIG.db) || '').trim().replace(/\/+$/, '');
    return /^https:\/\/[^\s]+$/.test(u) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/.test(u) ? u : '';
  }
  function pid() { var s = S(); if (!s.pid) { s.pid = 'p' + Math.random().toString(36).slice(2, 10); save(); } return s.pid; }
  function api(method, path, body) {
    var o = { method: method };
    if (body !== undefined) o.body = JSON.stringify(body);
    return fetch(base() + '/' + path + '.json', o).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }
  function listen(path, cb) {
    var tree = null, es = null, poll = null, closed = false;
    function setAt(p, val) {
      var keys = p.split('/').filter(Boolean);
      if (!keys.length) { tree = val; return; }
      if (tree === null || typeof tree !== 'object') tree = {};
      var o = tree;
      for (var i = 0; i < keys.length - 1; i++) { if (o[keys[i]] == null || typeof o[keys[i]] !== 'object') o[keys[i]] = {}; o = o[keys[i]]; }
      if (val === null) delete o[keys[keys.length - 1]]; else o[keys[keys.length - 1]] = val;
    }
    function startPoll() {
      if (poll || closed) return;
      poll = setInterval(function () { api('GET', path).then(function (v) { tree = v; cb(tree); }, function () { }); }, 1500);
    }
    try {
      es = new EventSource(base() + '/' + path + '.json');
      es.addEventListener('put', function (e) { var d = JSON.parse(e.data); setAt(d.path, d.data); cb(tree); });
      es.addEventListener('patch', function (e) {
        var d = JSON.parse(e.data), p = d.path.replace(/\/$/, '');
        Object.keys(d.data || {}).forEach(function (k) { setAt(p + '/' + k, d.data[k]); }); cb(tree);
      });
      es.onerror = function () { if (es.readyState === 2) startPoll(); };
    } catch (e) { startPoll(); }
    return function () { closed = true; if (es) es.close(); clearInterval(poll); };
  }
  function syncClock(code) {
    var t0 = Date.now(), p = 'rooms/' + code + '/clock/' + pid();
    return api('PUT', p, { '.sv': 'timestamp' }).then(function (ts) {
      var t1 = Date.now();
      if (typeof ts === 'number') OFF = ts - (t0 + t1) / 2;
      api('DELETE', p).catch(function () { });
    }, function () { });
  }
  function joinUrl(code) {
    var u = location.origin + location.pathname + '#join=' + code;
    if (S().db && !(window.LX_CONFIG && LX_CONFIG.db === base())) u += '&db=' + encodeURIComponent(base());
    return u;
  }
  function playersOf(room, round) {
    var ps = room && room.players || {};
    return Object.keys(ps).map(function (k) { var p = ps[k]; p.id = k; return p; })
      .filter(function (p) { return p && p.n && (round == null || p.r === round); })
      .sort(function (a, b) { return round == null ? (b.b || 0) - (a.b || 0) : (b.s || 0) - (a.s || 0); });
  }

  /* ---------- 先生：部屋 ---------- */
  var H = null;
  function makeRoom() {
    var cfg = { c: S().course || 'c1', m: 'order', u: 12, t: 60 };
    var tryOne = function (n) {
      var code = String(1000 + Math.floor(Math.random() * 9000));
      return api('GET', 'rooms/' + code).then(function (v) {
        if (v && n < 6) return tryOne(n + 1);
        return api('PUT', 'rooms/' + code, { cfg: cfg, state: 'lobby', round: 0, seed: 0, startAt: 0, host: pid(), created: { '.sv': 'timestamp' } })
          .then(function () { var s = S(); s.hostRooms = (s.hostRooms || []).concat(code).slice(-5); save(); location.hash = '#host/' + code; });
      });
    };
    tryOne(0).catch(function (e) { toast('部屋をつくれませんでした（' + e.message + '）。⚙ 設定を確認してください'); });
  }
  function openHost(code) {
    H = { code: code, room: null, tab: 'now', ending: false, timer: null, stop: null };
    A().view.innerHTML = '<div class="host"><aside class="panel hostL" id="hostL"></aside><section class="panel board" id="board"><div class="count"><b>…</b></div></section></div>';
    syncClock(code).then(function () {
      if (!H || H.code !== code) return;
      H.stop = listen('rooms/' + code, function (room) {
        if (!H) return;
        if (!room) { toast('この部屋は閉じられました'); location.hash = '#game'; return; }
        var first = !H.room; H.room = room;
        if (first) drawHostL();
        else drawHostL(true);
        drawBoard();
      });
      H.timer = setInterval(function () {
        if (!H || !H.room) return;
        var r = H.room;
        if (r.state === 'play' && now() > r.startAt + r.cfg.t * 1000 + 2500 && !H.ending) {
          H.ending = true; api('PATCH', 'rooms/' + code, { state: 'end' }).then(function () { H && (H.ending = false); });
        }
        if (r.state === 'play') drawBoard();
      }, 250);
    });
  }
  function drawHostL(soft) {
    var r = H.room, el = $('#hostL'); if (!el) return;
    var cfg = r.cfg, busy = r.state === 'play';
    var seg = function (key, opts) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-hc="' + key + ':' + o[0] + '" aria-pressed="' + (String(cfg[key]) === String(o[0])) + '"' + (busy ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>';
    };
    var units = []; for (var i = 1; i <= 12; i++) units.push([i, i < 12 ? '〜' + i : '全部']);
    var n = playersOf(r).length;
    var qrOld = soft && $('#qr') ? $('#qr').innerHTML : '';
    el.innerHTML =
      '<div class="roomhd"><small>部屋番号</small><div class="code">' + H.code + '</div></div>' +
      '<div class="qr" id="qr">' + qrOld + '</div>' +
      '<p class="note joinhow">論理表現ラボ → 🎮 → 🏆 で 番号を入力<br>または QR を読みとる</p>' +
      '<div class="hcfg">' +
      '<div class="fld"><span class="fl">コース</span>' + seg('c', [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全']]) + '</div>' +
      '<div class="fld"><span class="fl">種目</span>' + seg('m', [['order', '並べかえ'], ['cloze', '穴うめ'], ['mix', 'ミックス']]) + '</div>' +
      '<div class="fld"><span class="fl">時間</span>' + seg('t', [[30, '30秒'], [60, '60秒'], [90, '90秒']]) + '</div>' +
      '<div class="fld"><span class="fl">単元</span><select id="hU"' + (busy ? ' disabled' : '') + '>' + units.map(function (u) { return '<option value="' + u[0] + '"' + (+cfg.u === u[0] ? ' selected' : '') + '>' + u[1] + '</option>'; }).join('') + '</select><span class="note">（習ったところまで）</span></div>' +
      '</div>' +
      '<div class="hbtns"><span class="ppl">👥 <b>' + n + '</b> 人</span>' +
      '<button type="button" class="btn main big" data-ga="hstart"' + (busy ? ' disabled' : '') + '>' + (r.round ? '▶ 第' + (r.round + 1) + '回戦 スタート' : '▶ スタート') + '</button></div>' +
      '<div class="hbtns sm"><button type="button" class="btn ghost" data-ga="hcopy">🔗 参加リンクをコピー</button><button type="button" class="btn ghost" data-ga="hclose">部屋を閉じる</button></div>';
    if (!qrOld) drawQR(joinUrl(H.code));
  }
  var qrLib = null;
  function drawQR(url) {
    var put = function () {
      var el = $('#qr'); if (!el || !window.qrcode) return;
      var q = window.qrcode(0, 'M'); q.addData(url); q.make();
      el.innerHTML = q.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
    };
    if (window.qrcode) { put(); return; }
    if (!qrLib) {
      qrLib = document.createElement('script');
      qrLib.src = 'js/vendor/qrcode.js'; // qrcode-generator 1.4.4（MIT）
      document.head.appendChild(qrLib);
    }
    qrLib.addEventListener('load', put);
  }
  function hostCfg(v) {
    var kv = v.split(':'), val = kv[0] === 'c' || kv[0] === 'm' ? kv[1] : +kv[1], o = {}; o[kv[0]] = val;
    api('PATCH', 'rooms/' + H.code + '/cfg', o).catch(function () { toast('変更できませんでした'); });
  }
  function hostStart() {
    var r = H.room; if (!r || r.state === 'play') return;
    if (!pool(r.cfg).length) { toast('問題がありません'); return; }
    api('PATCH', 'rooms/' + H.code, { state: 'play', round: (r.round || 0) + 1, seed: Math.floor(Math.random() * 1e9), startAt: Math.round(now() + 5000) })
      .catch(function () { toast('スタートできませんでした'); });
  }
  /* ランキング表：広さ（W×H）を測って、入る列数・行数・文字の大きさを決める（40人でもスクロールなし） */
  function rows(list, mode, W, H) {
    var top = Math.max(1, list.reduce(function (m, p) { return Math.max(m, mode === 'best' ? p.b || 0 : p.s || 0); }, 0));
    var n = list.length, cols = n <= 10 ? 1 : n <= 24 ? 2 : 3, rowsN = n, more = 0, style = '';
    if (W && H) {
      cols = Math.max(1, Math.min(cols, Math.floor(W / 230)));
      var maxRows = Math.max(1, Math.floor(H / 24));
      rowsN = Math.ceil(n / cols);
      if (rowsN > maxRows) { rowsN = maxRows; more = n - (cols * rowsN - 1); list = list.slice(0, cols * rowsN - 1); }
      rowsN = Math.max(Math.min(8, maxRows), rowsN);
      var fs = Math.max(11, Math.min(26, H / rowsN * 0.55));
      style = ' style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr));grid-template-rows:repeat(' + rowsN + ',minmax(0,1fr));font-size:' + fs.toFixed(1) + 'px"';
    }
    var rank = 0, last = -1;
    return '<ol class="rk"' + style + '>' +
      list.map(function (p, i) {
        var v = mode === 'best' ? p.b || 0 : p.s || 0;
        if (v !== last) { rank = i + 1; last = v; }
        var medal = rank <= 3 && v > 0 ? ['🥇', '🥈', '🥉'][rank - 1] : rank;
        return '<li class="' + (rank <= 3 && v > 0 ? 'top top' + rank : '') + (p.id === pid() ? ' me' : '') + '"><span class="rn">' + medal + '</span><span class="nm">' + esc(p.n) + (mode !== 'best' && p.k >= 10 ? ' <i class="fire">🔥' + p.k + '</i>' : '') + '</span>' +
          '<span class="bar"><i style="width:' + (v / top * 100).toFixed(1) + '%"></i></span><span class="sc">' + fmt(v) + '</span></li>';
      }).join('') + (more ? '<li class="more">…ほか ' + more + ' 人</li>' : '') + '</ol>';
  }
  function drawBoard() {
    var el = $('#board'), r = H && H.room; if (!el || !r) return;
    var t = now(), head, body, bl, lst = null, lmode = 'now';
    var tabs = '<div class="btabs"><button type="button" data-ga="tab:now" aria-selected="' + (H.tab === 'now') + '">今回</button><button type="button" data-ga="tab:best" aria-selected="' + (H.tab === 'best') + '">🏆 ハイスコア</button></div>';
    if (H.tab === 'best') {
      head = '<div class="bhead"><b>🏆 この部屋のハイスコア</b>' + tabs + '</div>';
      bl = playersOf(r).filter(function (p) { return p.b > 0; });
      if (bl.length) { lst = bl; lmode = 'best'; } else body = '<div class="count"><small>まだ記録がありません</small></div>';
    } else if (r.state === 'lobby' || !r.round) {
      var ps = playersOf(r);
      head = '<div class="bhead"><b>参加者を待っています</b>' + tabs + '</div>';
      body = ps.length ? '<div class="chips">' + ps.map(function (p) { return '<span class="chipn">' + esc(p.n) + '</span>'; }).join('') + '</div>'
        : '<div class="count"><small>生徒が 部屋番号 ' + H.code + ' で 入ってくると ここに名前が出ます</small></div>';
    } else if (r.state === 'play' && t < r.startAt) {
      head = '<div class="bhead"><b>第' + r.round + '回戦　' + esc(cfgName(r.cfg)) + '</b>' + tabs + '</div>';
      body = '<div class="count"><b>' + Math.max(1, Math.ceil((r.startAt - t) / 1000)) + '</b><small>まもなく スタート！</small></div>';
    } else {
      lst = playersOf(r, r.round);
      var end = r.state === 'end', left = Math.max(0, r.startAt + r.cfg.t * 1000 - t);
      head = '<div class="bhead"><b>' + (end ? '🎉 第' + r.round + '回戦 結果発表' : '⏱ 残り ' + Math.ceil(left / 1000) + ' 秒') + '</b>' + tabs + '</div>' +
        (end ? '' : '<div class="tbar host"><i style="width:' + (left / (r.cfg.t * 1000) * 100) + '%"' + (left < 10000 ? ' class="hurry"' : '') + '></i></div>');
      if (end && lst[0] && lst[0].s > 0) head += '<div class="champ">🥇 ' + esc(lst[0].n) + ' さん　' + fmt(lst[0].s) + ' 点</div>';
      if (!lst.length) { lst = null; body = '<div class="count"><small>まだ だれも 答えていません</small></div>'; }
    }
    el.innerHTML = head + '<div class="bbody">' + (lst ? '' : body) + '</div>';
    if (lst) { var bb = el.querySelector('.bbody'); bb.innerHTML = rows(lst, lmode, bb.clientWidth, bb.clientHeight); }
  }

  /* ---------- 生徒：参加 ---------- */
  var B = null;
  function openJoin(code, db) {
    if (db) { S().db = db; save(); }
    if (!base()) { renderHub(); toast('クラス対戦の設定がまだです'); return; }
    var s = S();
    A().view.innerHTML = '<div class="unit"><div class="ubar"><button type="button" class="btn ghost" data-go="game">◀ もどる</button><div class="utitle"><small>クラス対戦</small><b>🏆 部屋に入る</b></div></div>' +
      '<section class="card"><div class="cin"><div class="result">' +
      '<p class="h">部屋番号</p><div class="fld center"><input type="text" id="jCode" class="bigin" inputmode="numeric" maxlength="4" value="' + esc(code || '') + '" placeholder="0000"></div>' +
      '<div class="fld center"><input type="text" id="jName" maxlength="10" placeholder="ニックネーム（10文字まで）" value="' + esc(s.nick || '') + '"></div>' +
      '<p class="note">本名ではなく ニックネームでも OK。ランキングに表示されます</p>' +
      '<div class="row" style="justify-content:center"><button type="button" class="btn main big" data-ga="join">参加する ▶</button></div>' +
      '</div></div></section></div>';
    if (code) { var n = $('#jName'); if (n && !n.value) n.focus(); }
  }
  function join() {
    var code = ($('#jCode').value || '').replace(/\D/g, ''), name = ($('#jName').value || '').trim().slice(0, 10);
    if (code.length !== 4) { toast('部屋番号は 4 けたです'); return; }
    if (!name) { toast('ニックネームを入れてください'); return; }
    var s = S(); s.nick = name; save();
    var me = 'rooms/' + code + '/players/' + pid();
    api('GET', 'rooms/' + code + '/state').then(function (st) {
      if (!st) throw new Error('nf');
      return api('GET', me);
    }).then(function (old) {
      return api('PATCH', me, { n: name, s: old && old.s || 0, b: old && old.b || 0, r: old && old.r || 0, k: 0 });
    }).then(function () {
      return syncClock(code);
    }).then(function () {
      B = { code: code, room: null, played: 0, last: 0, push: null, awarded: {} };
      var rb = rw(); rb.battles = Math.max(rb.battles, 1); save(); checkBadges();
      location.hash = '#battle/' + code;
    }).catch(function (e) { toast(e.message === 'nf' ? '部屋 ' + code + ' が見つかりません' : 'つながりません（' + e.message + '）'); });
  }
  function openBattle(code) {
    if (!B || B.code !== code) B = { code: code, room: null, played: 0, last: 0, push: null, awarded: {} };
    drawWait();
    syncClock(code).then(function () {
      if (!B) return;
      B.stop = listen('rooms/' + code, onRoom);
    });
  }
  function onRoom(room) {
    if (!B) return;
    if (!room) { toast('先生が部屋を閉じました'); location.hash = '#game'; return; }
    B.room = room;
    var me = room.players && room.players[pid()];
    if (!me) { location.hash = '#join=' + B.code; return; }
    if (room.state === 'play' && room.round !== B.played && now() < room.startAt + room.cfg.t * 1000 - 3000) {
      B.played = room.round;
      newGame(room.cfg, room.seed, 'battle', room.startAt);
      api('PATCH', 'rooms/' + B.code + '/players/' + pid(), { s: 0, k: 0, w: 0, r: room.round, d: 0 }).catch(function () { });
      playShell('部屋 ' + B.code + '・第' + room.round + '回戦');
      runClock(endBattle);
      return;
    }
    if (room.state === 'end' && B.played === room.round && !B.awarded[room.round]) {
      B.awarded[room.round] = 1;
      var lst = playersOf(room, room.round), my = lst.map(function (p) { return p.id; }).indexOf(pid());
      if (my >= 0 && my < 3 && lst[my].s > 0) { rw().top3++; earn(50); }
      save(); checkBadges();
    }
    if (!G || G.over) drawWait();
  }
  function pushScore(final) {
    if (!G || G.mode !== 'battle' || !B) return;
    var t = Date.now();
    if (!final && t - B.last < 600) { clearTimeout(B.push); B.push = setTimeout(function () { pushScore(); }, 650); return; }
    B.last = t;
    var me = B.room && B.room.players && B.room.players[pid()] || {};
    api('PATCH', 'rooms/' + B.code + '/players/' + pid(), { s: G.score, k: G.combo, w: G.words, r: B.played, b: Math.max(me.b || 0, G.score), d: final ? 1 : 0 }).catch(function () { });
  }
  function endBattle() {
    clearTimeout(B && B.push); pushScore(true);
    var coins = afterGame() + 20; save(); earn(coins);
    G.coins = coins;
    setTimeout(drawWait, 300);
  }
  function drawWait() {
    if (!B) return;
    var room = B.room, el = A().view;
    var head = '<div class="unit"><div class="ubar"><button type="button" class="btn ghost" data-ga="bleave">◀ ぬける</button><div class="utitle"><small>クラス対戦</small><b>🏆 部屋 ' + B.code + '</b></div><span class="ppl">👥 ' + (room ? playersOf(room).length : 0) + ' 人</span></div><section class="card"><div class="cin"><div class="result">';
    var tail = '</div></div></section></div>', mid;
    if (!room) mid = '<p class="h">つないでいます…</p>';
    else if (room.state === 'play' && room.round !== B.played) mid = '<p class="h">いま 第' + room.round + '回戦の最中です</p><p class="body">次の回から参加できます。少し待ってね</p>';
    else if (B.played && room.round === B.played) {
      var lst = playersOf(room, room.round), my = lst.map(function (p) { return p.id; }).indexOf(pid()), meP = lst[my] || {};
      var fin = room.state === 'end';
      mid = '<p class="note">第' + room.round + '回戦 ' + (fin ? '結果' : '（集計中… みんなが終わるのを待っています）') + '</p>' +
        '<div class="score">' + (my + 1) + '<small> 位 / ' + lst.length + ' 人</small></div>' +
        '<p class="tstats">' + fmt(meP.s || 0) + ' 点　🧩 ' + (meP.w || 0) + ' 語' + (G && G.coins ? '　🪙 +' + G.coins : '') + '</p>' +
        rows(lst.slice(0, 5), 'now') +
        '<p class="note">' + (fin ? '先生が 次のスタートをおすと 始まります' : '') + '</p>';
    } else mid = '<div class="bigstamp wait">参加中</div><p class="h">' + esc(S().nick || '') + ' さん、ようこそ！</p><p class="body">先生が スタートをおすと 3・2・1 で 全員いっせいに始まります</p>' +
      '<div class="chips small">' + playersOf(room).slice(0, 40).map(function (p) { return '<span class="chipn' + (p.id === pid() ? ' me' : '') + '">' + esc(p.n) + '</span>'; }).join('') + '</div>';
    el.innerHTML = head + mid + tail;
  }

  /* =========================================================
     画面の切りかえ（app.js から よばれる）
     ========================================================= */
  function leave() {
    if (G) { clearInterval(G.timer); G = null; }
    if (H) { clearInterval(H.timer); if (H.stop) H.stop(); H = null; }
  }
  function route(h) {
    var m;
    if (h === 'game') { leaveBattle(); renderHub(); return true; }
    if (h === 'ta') { startSolo(); return true; }
    if ((m = h.match(/^join(?:=(\d*))?(?:&db=(.+))?$/))) { leaveBattle(); openJoin(m[1] || '', m[2] || ''); return true; }
    if ((m = h.match(/^host\/(\d{4})$/))) { leaveBattle(); if (!base()) { renderHub(); return true; } openHost(m[1]); return true; }
    if ((m = h.match(/^battle\/(\d{4})$/))) { if (!base()) { renderHub(); return true; } openBattle(m[1]); return true; }
    leaveBattle();
    return false;
  }
  function leaveBattle() { if (B) { if (B.stop) B.stop(); clearTimeout(B.push); B = null; } }

  /* ---------- 操作 ---------- */
  function init() {
    gdlg = $('#gdlg'); gin = $('#gdlgIn');
    $('#coinChip').onclick = openRewards;
    $('#btnSet').onclick = openSettings;
    $('#btnGame').onclick = function () { location.hash = '#game'; };
    gdlg.addEventListener('close', function () { if (location.hash === '#game' && !G) renderHub(); });
    gdlg.addEventListener('click', function (e) {
      if (e.target === gdlg) { gdlg.close(); return; }
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-x')) gdlg.close();
      else if (b.dataset.set) settingsClick(b.dataset.set);
    });
    A().view.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      var d = b.dataset;
      if (d.gt != null && G) { tapTile(+d.gt); return; }
      if (d.gp != null && G) { pickChoice(+d.gp); return; }
      if (d.ta) { hubTa(d.ta); return; }
      if (d.hc) { hostCfg(d.hc); return; }
      switch (d.ga && d.ga.split(':')[0]) {
        case 'solo': if (location.hash === '#ta') startSolo(); else location.hash = '#ta'; break;
        case 'again': startSolo(); break;
        case 'brag': brag(G && G.share || ''); break;
        case 'quit': leave(); leaveBattle(); if (location.hash === '#game') renderHub(); else location.hash = '#game'; break;
        case 'rewards': openRewards(); break;
        case 'settings': openSettings(); break;
        case 'join': join(); break;
        case 'mkroom': makeRoom(); break;
        case 'hstart': hostStart(); break;
        case 'hcopy': {
          var u = joinUrl(H.code);
          if (navigator.clipboard) navigator.clipboard.writeText(u).then(function () { toast('参加リンクをコピーしました'); }, function () { toast(u); }); else toast(u);
          break;
        }
        case 'hclose':
          if (confirm('部屋 ' + H.code + ' を閉じますか？（ランキングも消えます）')) { var c = H.code; leave(); api('DELETE', 'rooms/' + c).then(function () { location.hash = '#game'; }, function () { location.hash = '#game'; }); }
          break;
        case 'tab': H.tab = d.ga.split(':')[1]; drawBoard(); break;
        case 'bleave': leaveBattle(); leave(); location.hash = '#game'; break;
      }
    });
    A().view.addEventListener('change', function (e) {
      if (e.target.id === 'hU' && H) api('PATCH', 'rooms/' + H.code + '/cfg', { u: +e.target.value }).catch(function () { });
    });
    A().view.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.target.id === 'jName' || e.target.id === 'jCode')) join();
    });
    document.addEventListener('keydown', function (e) {
      if (!G || G.over || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName || '')) return;
      if (G.q && G.q.type === 'cloze' && /^[1-4]$/.test(e.key) && now() >= G.startAt) pickChoice(+e.key - 1);
    });
    chip();
  }

  window.LXG = { route: route, leave: function () { leave(); }, earn: earn, init: init, count: function () { rw().cnt++; }, _g: function () { return G; } };
})();
