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
  /* 語数をくらべる「ものさし」 */
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
    var keys = [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全']], ms = LVS.map(function (l) { return [l.k, l.ico + l.name.replace('便', '')]; });
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
        return '<div class="bd' + (on ? '' : ' off') + '" title="' + esc(b.how) + '" data-how="' + esc(b.ico + ' ' + b.name + '：' + b.how) + '"><i>' + (on ? b.ico : '🔒') + '</i><b>' + esc(b.name) + '</b><small>' + esc(on ? on : b.how) + '</small></div>';
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
      '<div class="fld"><span class="fl">効果音</span>' + seg('sfx', [[1, '🔊 オン'], [0, '🔇 オフ']], s.sfx === false ? 0 : 1) + '</div>' +
      '<hr class="sep"><b>🏆 クラス対戦のデータベース（先生が 1 回だけ）</b>' +
      '<div class="fld"><input type="text" id="dbUrl" placeholder="https://〇〇-default-rtdb.〇〇.firebasedatabase.app" value="' + esc(s.db || '') + '"><button type="button" class="btn" data-set="dbtest">保存して接続テスト</button></div>' +
      '<p class="note dbnote">' + (window.LX_CONFIG && LX_CONFIG.db ? 'js/config.js に設定ずみ（ここが空なら そちらを使います）。' : '作り方は README の「クラス対戦の準備」にあります。') +
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
    if (key === 'sfx') { s.sfx = val === '1'; if (s.sfx) { save(); FX('ok'); } }
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
  function FX(name, a) { if (window.LXFX) LXFX.play(name, a); }
  /* 出題する単元（cfg.us = "c2-u03,c2-u04" のように えらんだ単元。空ならコース全体） */
  function usOf(cfg) { return String(cfg.us || '').split(',').filter(function (id) { return A().UNITS[id]; }); }
  function unitLabel(id) { var u = A().UNITS[id]; return u.course.short + '-' + (u.no < 10 ? '0' : '') + u.no; }
  function rangeName(cfg) {
    var us = usOf(cfg);
    if (us.length === 1) return unitLabel(us[0]) + ' ' + A().UNITS[us[0]].title;
    if (us.length) return us.slice(0, 3).map(unitLabel).join('・') + (us.length > 3 ? ' ほか' + (us.length - 3) : '');
    var c = cfg.c === 'all' ? '全コース' : (A().COURSES.filter(function (x) { return x.id === cfg.c; })[0] || {}).name;
    return c + (cfg.u && cfg.u < 12 ? '（〜' + cfg.u + '）' : '') + (cfg.p ? '（合格した単元）' : '');
  }
  var TIMES = [[30, '30秒'], [60, '1分'], [90, '1分半'], [120, '2分'], [180, '3分'], [300, '5分']];
  /* 3 つの コース（並べかえ・穴うめは いつも ミックス）。長い文ほど むずかしいが 点数が のびる
     w：出す文の 語数、x：点数の 倍率、miss：ミスで へる 燃料（ms） */
  var LVS = [
    { k: 'easy', ico: '🛩', name: 'ショート便', sub: '短い文・はじめての人に', w: [0, 7], x: 1, miss: 1000 },
    { k: 'std', ico: '🚀', name: 'スタンダード便', sub: 'いろいろな長さ・点数 ×1.3', w: [0, 99], x: 1.3, miss: 1000 },
    { k: 'long', ico: '🌌', name: '長距離便', sub: '長文だけ・点数 ×1.5・ミス −2秒', w: [9, 99], x: 1.5, miss: 2000 }];
  function lvOf(cfg) { var k = cfg && cfg.lv; return LVS.filter(function (l) { return l.k === k; })[0] || LVS[1]; }
  function lvName(cfg) { var l = lvOf(cfg); return l.ico + ' ' + l.name; }
  var SRCS = [['all', '例文＋演習文'], ['core', '例文だけ（覚えた文）'], ['drill', '演習文だけ（初めての文）']];
  var TOPS = [[3, '上位 3 人'], [5, '5 人'], [10, '10 人'], [0, '全員']];
  function topN(cfg) { return cfg && cfg.top != null ? +cfg.top : 10; } // 大画面に 映す 人数（0 ＝ 全員）
  function topName(cfg) { var n = topN(cfg); return n ? '上位 ' + n + ' 人まで 表示' : '全員を 表示'; }
  /* 順位（同点は 同じ順位）。先生の画面では 上位 n 位までに しぼる */
  function rankOf(list, id, mode) { var d = rowData(list, mode).filter(function (x) { return x.p.id === id; })[0]; return d ? d.rank : 0; }
  function cut(list, n, mode) { if (!n) return list; var ds = rowData(list, mode); return ds.filter(function (d) { return d.rank <= n; }).map(function (d) { return d.p; }); }
  function tName(t) { var x = TIMES.filter(function (o) { return o[0] === +t; })[0]; return x ? x[1] : t + '秒'; }
  function srcOf(u, src) {
    var d = u.drills && u.drills.length ? u.drills : u.sentences;
    return src === 'core' ? u.sentences : src === 'drill' ? d : u.sentences.concat(u.drills || []);
  }
  function pool(cfg) {
    var all = poolAll(cfg), w = lvOf(cfg).w;
    var fit = all.filter(function (s) { var n = words(s); return n >= w[0] && n <= w[1]; });
    return fit.length >= 8 ? fit : all; // えらんだ範囲が せまくて 足りないときは 全部の長さから
  }
  function poolAll(cfg) {
    var us = usOf(cfg);
    if (us.length) return [].concat.apply([], us.map(function (id) { return srcOf(A().UNITS[id], cfg.src); }));
    var out = [];
    A().COURSES.forEach(function (c) {
      if (cfg.c !== 'all' && c.id !== cfg.c) return;
      c.units.forEach(function (u) {
        if (u.no > (cfg.u || 99)) return;
        if (cfg.p && !A().prog(u.id).pass) return;
        out = out.concat(srcOf(u, cfg.src));
      });
    });
    return out;
  }
  function cfgName(cfg) {
    return lvName(cfg) + '・' + rangeName(cfg) + '・' + tName(cfg.t) +
      (cfg.src === 'core' ? '・例文だけ' : cfg.src === 'drill' ? '・演習文だけ' : '');
  }
  function words(s) { return s.plain.split(' ').length; }
  function soloName(cfg) { return lvName(cfg) + '・' + rangeName(cfg); }

  var G = null;          // 遊んでいるゲーム
  var OFF = 0;           // サーバーとの時計のずれ（ms）
  function now() { return Date.now() + OFF; }

  /* ===== 🚀 英文ロケット（タイムアタックの ルール） =====
     正しいカードで 燃料を入れ、文が完成すると ロケットが上がる。点数 ＝ 高度（東京タワー → … → 宇宙ステーション → 月 → 火星 → 土星）。
     ひとり：60 秒から。文を完成させると 時間がふえる（並べかえ +1／+2／+3 秒、穴うめ +0.4／+0.8／+1.2 秒。コンボ 10・25 で ふえる）。
             ミスは −1 秒。40 秒たつと 時計が だんだん速くなる（最大 3 倍）→ 上手でも いつかは 終わる。
     対戦：時間は 固定（公平のため）。点数・コンボ・ブーストは 同じ。 */
  var RULE = { start: 60, calm: 40, ramp: 70, cap: 3, miss: 1000, fever: 20, feverSec: 7 };
  var FUEL = [[5, 100], [7, 180], [9, 300], [99, 500]]; // 長い文ほど 大きな燃料（たくさん上がる）
  function fuelOf(s) { var w = words(s); for (var i = 0; i < FUEL.length; i++) if (w <= FUEL[i][0]) return { pts: FUEL[i][1], k: i }; }
  /* 高度の めじるし：[この点数で 到達, 高さ(km), 絵, 名前] */
  // ふつうの人で 宇宙まで、上手な人で 木星〜土星、達人で 銀河まで 届く目安（距離は 地球からの だいたいの きょり）
  var SKY = [[0, 0, '🛫', '発射台'], [150, 0.333, '🗼', '東京タワー'], [400, 0.634, '🏙', 'スカイツリー'], [900, 3.776, '🗻', '富士山'],
    [1600, 10, '✈️', '飛行機の高さ'], [2500, 20, '🌤', '成層圏'], [4000, 100, '🌌', '宇宙の入口'], [6500, 400, '🛰', '宇宙ステーション'],
    [11000, 384400, '🌕', '月'], [17000, 78000000, '🔴', '火星'], [26000, 630000000, '🟠', '木星'], [38000, 1280000000, '🪐', '土星'],
    [55000, 2700000000, '🔵', '天王星'], [75000, 4300000000, '🌀', '海王星'], [100000, 24000000000, '🛸', '太陽系の外'],
    [140000, 2.46e17, '🌌', '天の川銀河の中心'], [200000, 2.37e19, '🌀', 'アンドロメダ銀河'], [300000, 1.3e23, '✨', '宇宙の果て']];
  function altOf(score) {
    var i = 0; while (i + 1 < SKY.length && score >= SKY[i + 1][0]) i++;
    var a = SKY[i], b = SKY[i + 1], f = b ? (score - a[0]) / (b[0] - a[0]) : 0;
    return { i: i, here: a, next: b || null, pct: b ? f * 100 : 100, km: b ? a[1] + (b[1] - a[1]) * f : a[1] };
  }
  function fmtKm(km) {
    if (km < 1) return Math.round(km * 1000) + ' m';
    if (km < 1000) return (km < 100 ? km.toFixed(1) : Math.round(km)) + ' km';
    if (km < 1e8) return (km < 1e5 ? fmt(km) : fmt(Math.round(km / 1e4)) + '万') + ' km';
    if (km < 1e12) return (km < 1e10 ? (km / 1e8).toFixed(1) : fmt(Math.round(km / 1e8))) + '億 km';
    var ly = km / 9.461e12; // 遠すぎるときは 光年で
    if (ly < 1e4) return fmt(ly) + ' 光年';
    if (ly < 1e8) return fmt(Math.round(ly / 1e4)) + '万 光年';
    return fmt(Math.round(ly / 1e8)) + '億 光年';
  }
  function fever() { return G && G.feverUntil && Date.now() < G.feverUntil; }
  function mult() { var m = G.combo >= 100 ? 4 : G.combo >= 50 ? 3 : G.combo >= 25 ? 2 : G.combo >= 10 ? 1.5 : 1; return m * (fever() ? 2 : 1); }
  function speedNow() {
    if (G.mode !== 'solo') return 1;
    var el = (Date.now() - G.startAt) / 1000;
    return Math.min(RULE.cap, 1 + Math.max(0, el - RULE.calm) / RULE.ramp);
  }
  function timeLeft() { return G.mode === 'solo' ? G.left : Math.max(0, G.endAt - now()); }

  function newGame(cfg, seed, mode, startAt) {
    if (G) clearInterval(G.timer);
    var R = rng(seed), p = pool(cfg);
    G = { cfg: cfg, R: R, list: rshuffle(p, R), sorted: p.slice().sort(function (a, b) { return words(a) - words(b); }), recent: [], queue: [], qi: 0,
      score: 0, combo: 0, maxCombo: 0, ok: 0, miss: 0, words: 0, alt: 0, meter: 0, feverUntil: 0, feverN: 0, maxSpeed: 1,
      mode: mode, startAt: startAt, endAt: startAt + cfg.t * 1000, left: (mode === 'solo' ? RULE.start : cfg.t) * 1000, tl: 0,
      q: null, lock: false, over: false, timer: null };
    fillQueue(); nextQ();
    return G;
  }
  function pickS() {
    if (G.mode !== 'solo') { // 対戦：全員 同じ順
      if (G.qi > 0 && G.qi % G.list.length === 0) {
        var lastS = G.list[G.list.length - 1];
        G.list = rshuffle(G.list, G.R);
        if (G.list.length > 1 && G.list[0] === lastS) G.list.push(G.list.shift());
      }
      return G.list[G.qi++ % G.list.length];
    }
    // ひとり：高く上がるほど 長い文（大きな燃料）が 出てくる
    var n = G.sorted.length, stage = Math.min(3, Math.floor(G.ok / 6));
    var lo = Math.floor(n * stage / 5), hi = Math.max(lo + 1, Math.min(n, Math.ceil(n * (stage + 2) / 5))), x;
    for (var k = 0; k < 10; k++) { x = G.sorted[lo + Math.floor(G.R() * (hi - lo))]; if (G.recent.indexOf(x) < 0) break; }
    G.recent.push(x); if (G.recent.length > Math.min(8, n - 1)) G.recent.shift();
    return x;
  }
  function fillQueue() { while (G.queue.length < 3) G.queue.push(pickS()); }
  function nextQ() {
    var s = G.queue.shift(); fillQueue();
    var type = G.R() < 0.5 ? 'order' : 'cloze'; // 並べかえ・穴うめは いつも ミックス
    if (type === 'order') {
      var t = A().tilesOf(s), idx = t.tiles.map(function (_, i) { return i; });
      var ord = idx, k = 0; // 最初から 正しい 順に ならんで いたら まぜ直す
      do { ord = rshuffle(idx, G.R); k++; } while (k < 20 && t.tiles.length > 1 && ord.every(function (i, pos) { return t.tiles[i] === t.tiles[pos]; }));
      G.q = { s: s, type: type, tiles: t.tiles, end: t.end, ord: ord, placed: [], ptr: 0, bad: -1 };
    } else {
      G.q = { s: s, type: type, ch: rshuffle([s.key].concat(s.alt), G.R), pick: -1 };
    }
    G.q.fuel = fuelOf(s); G.q.fresh = true;
    G.lock = false;
  }
  function pts(base) {
    var p = Math.round(base * mult() * lvOf(G.cfg).x); G.score += p;
    var sc = $('#hscore'); if (sc) { sc.classList.remove('bump'); void sc.offsetWidth; sc.classList.add('bump'); }
    return p;
  }
  function cardMid(dy) { var c = $('.play .card'), r = c && c.getBoundingClientRect(); return r ? [r.left + r.width / 2, r.top + r.height * (dy || 0.35)] : null; }
  function hit(el) {
    G.combo++; if (G.combo > G.maxCombo) G.maxCombo = G.combo;
    // 火花：コンボが のびるほど たくさん 出る
    var n = 1 + Math.min(7, Math.floor(G.combo / 6)); if (fever()) n *= 2;
    if (window.LXFX && el) LXFX.sparks(el, n);
    if (!fever()) { G.meter++; if (G.meter >= RULE.fever) startFever(); }
    // コンボの だんかいが 上がったら お祝い
    if (G.combo === 5) { // はじめての人にも 早めに 小さな お祝い
      FX('lead'); var m5 = cardMid(); if (m5 && window.LXFX) LXFX.pop('5 COMBO!', m5[0], m5[1], 'big');
    }
    if ([10, 25, 50, 100].indexOf(G.combo) >= 0 || (G.combo > 100 && G.combo % 50 === 0)) {
      FX('combo'); var m = cardMid();
      if (m && window.LXFX) { LXFX.pop(G.combo + ' COMBO!  ×' + mult(), m[0], m[1], 'big'); LXFX.burst(40, m[0], m[1] + 20); }
    }
  }
  function startFever() {
    G.feverUntil = Date.now() + RULE.feverSec * 1000; G.meter = 0; G.feverN++;
    FX('boost'); var m = cardMid(0.3);
    if (m && window.LXFX) { LXFX.pop('🚀 BOOST!! ×2', m[0], m[1], 'go boost'); LXFX.boost(RULE.feverSec); }
  }
  function timePop(text, cls) { var t = $('.play .tbar'); if (t && window.LXFX) LXFX.popAt(t, text, cls); }
  function miss() {
    G.combo = 0; G.miss++; G.meter = Math.max(0, G.meter - 2); // ミスで メーターは 少し へるだけ（ブーストを 見られる人を ふやす）
    if (G.mode === 'solo') { var ms = lvOf(G.cfg).miss; G.left -= ms; timePop('−' + ms / 1000 + '秒', 'tminus'); }
    FX('miss'); flash('ng');
  }
  function flash(k) {
    var c = $('.play .card'); if (!c) return;
    c.classList.remove('f-ok', 'f-ng'); void c.offsetWidth; c.classList.add('f-' + k);
  }
  function solved() {
    var q = G.q, fu = q.fuel, before = altOf(G.score).i;
    G.ok++; G.words += words(q.s); G.lock = true;
    var p = pts(fu.pts / 2 + (q.type === 'cloze' ? 10 : 0));
    var m = cardMid(0.25); if (m && window.LXFX) LXFX.pop('🚀 +' + fmt(p), m[0], m[1], 'up');
    var now2 = altOf(G.score); G.alt = Math.max(G.alt, now2.i);
    if (now2.i > before && m && window.LXFX) { // めじるしを こえた
      setTimeout(function () { LXFX.pop(now2.here[2] + ' ' + now2.here[3] + ' 突破！', m[0], m[1] + 40, 'big'); FX('lead'); }, 250);
    }
    if (G.mode === 'solo') { // 時間ボーナス（コンボが のびているほど 多い）
      var tier = G.combo >= 25 ? 2 : G.combo >= 10 ? 1 : 0, b = (q.type === 'order' ? [1, 2, 3] : [0.4, 0.8, 1.2])[tier];
      G.left += b * 1000; timePop('+' + b + '秒', 'tplus');
    }
    FX('ok'); flash('ok');
    pushScore();
    setTimeout(function () { if (G && !G.over) { nextQ(); drawQ(); } }, 280);
  }
  function tapTile(i, el) {
    var q = G.q; if (G.lock || q.placed.indexOf(i) >= 0) return;
    if (q.tiles[i] === q.tiles[q.ptr]) {
      q.placed.push(i); q.ptr++; hit(el); var p = pts(10); q.bad = -1;
      FX('tap', G.combo); if (el && window.LXFX) LXFX.popAt(el, '+' + p);
      if (q.ptr === q.tiles.length) { q.done = 1; solved(); }
    } else { miss(); q.bad = i; }
    drawQ();
  }
  function pickChoice(i, el) {
    var q = G.q; if (G.lock || q.pick >= 0) return;
    q.pick = i; el = el || document.querySelectorAll('.choice')[i];
    if (q.ch[i] === q.s.key) {
      hit(el); var p = pts(10); if (window.LXFX) LXFX.popAt(el, '+' + p);
      drawQ(); solved();
    } else {
      miss(); G.lock = true; drawQ();
      setTimeout(function () { if (G && !G.over) { nextQ(); drawQ(); } }, 900);
    }
  }

  /* 画面 */
  function playShell(title) {
    var solo = G && G.mode === 'solo';
    A().view.innerHTML = '<div class="unit play">' +
      '<div class="hud">' +
      '<button type="button" class="btn ghost" data-ga="quit" title="やめる">✕</button>' +
      '<div class="tbar"><i id="tfill"></i><span id="tsec"></span></div>' +
      (G && G.mode === 'battle' ? '<div class="hr" id="hrank"></div>' : '') +
      '<div class="hc" id="hcombo"></div>' +
      '<div class="hs"><small>' + esc(title) + '</small><b id="hscore">0</b></div>' +
      '</div>' +
      '<div class="hud2"><span class="mlab">🔥</span><div class="meter"><i id="hmeter"></i><span id="hmtext"></span></div>' +
      (solo ? '<span class="spd" id="hspd" title="燃料の減り"></span>' : '') + '<span class="altv" id="halt">🛫 0 m</span></div>' +
      '<section class="card"><div class="cin" id="gq"></div></section></div>';
    // 背景：上へ 流れていく景色（カードの うしろ）
    if (window.LXSCENE) LXSCENE.start(A().view, function () {
      if (!G) return null;
      var al = altOf(G.score);
      return { level: al.i + (al.next ? al.pct / 100 : 0), combo: G.combo, boost: fever(), started: now() >= G.startAt && !G.over };
    });
  }
  /* 表示の 書きかえは 変わった時だけ（軽くする） */
  var HC = {};
  function setText(el, key, v) { if (el && HC[key] !== v) { HC[key] = v; el.textContent = v; } }
  function setHTML(el, key, v) { if (el && HC[key] !== v) { HC[key] = v; el.innerHTML = v; } }
  function setStyle(el, key, prop, v) { if (el && HC[key] !== v) { HC[key] = v; el.style[prop] = v; } }
  function setAttr(el, key, name, v) { if (el && HC[key] !== v) { HC[key] = v; el.setAttribute(name, v); } }
  function setCls(el, key, cls, on) { on = !!on; if (el && HC[key] !== on) { HC[key] = on; el.classList.toggle(cls, on); } }
  function drawHud() {
    if (!G) return;
    if (HC.g !== G) HC = { g: G }; // 新しい ゲームでは 覚えを リセット
    var t = now(), started = t >= G.startAt, left = timeLeft();
    var full = G.mode === 'solo' ? RULE.start * 1000 : G.cfg.t * 1000;
    setStyle($('#tfill'), 'tf', 'width', (started ? Math.min(100, left / full * 100) : 100).toFixed(1) + '%');
    setText($('#tsec'), 'ts', '⛽ ' + (started ? Math.max(0, Math.ceil(left / 1000)) : Math.round(full / 1000)) + '秒');
    setText($('#hscore'), 'sc', fmt(G.score));
    setHTML($('#hcombo'), 'cb', G.combo >= 2 ? '<b>' + G.combo + '</b> コンボ' + (mult() > 1 ? '<i>×' + mult() + '</i>' : '') : '');
    setAttr($('.play .card'), 'cmb', 'data-combo', String(G.combo >= 50 ? 3 : G.combo >= 25 ? 2 : G.combo >= 10 ? 1 : 0));
    var hurry = started && left < 10000;
    setCls($('#tfill'), 'tfh', 'hurry', hurry); setCls($('.play .tbar'), 'tbh', 'hurry', hurry);
    var fv = fever(), pl = $('.unit.play');
    setCls(pl, 'bst', 'boost', fv);
    setCls(pl, 'spc', 'space', altOf(G.score).i >= 6); // 宇宙に出たら カードを 夜の色に
    setStyle($('#hmeter'), 'mt', 'width', (fv ? (G.feverUntil - Date.now()) / (RULE.feverSec * 1000) * 100 : G.meter / RULE.fever * 100).toFixed(0) + '%');
    setText($('#hmtext'), 'mx', fv ? '🚀 BOOST!! 点数 ×2' : 'あと ' + (RULE.fever - G.meter) + ' で ブースト');
    var sp = $('#hspd');
    if (sp) { var v = speedNow(); if (v > G.maxSpeed) G.maxSpeed = v; setText(sp, 'sp', started && v > 1.04 ? '⏩ ×' + v.toFixed(1) : ''); setCls(sp, 'spf', 'fast', v > 2); }
    var al = altOf(G.score); setText($('#halt'), 'al', al.here[2] + ' ' + fmtKm(al.km));
    if (G.mode === 'battle') liveRank();
  }
  /* クラス対戦：プレイ中の 自分の順位 */
  function liveRank() {
    var el = $('#hrank'); if (!el || !B || !B.room) return;
    var ps = B.room.players || {}, rank = 1, n = 0, me = pid();
    Object.keys(ps).forEach(function (k) { var p = ps[k]; if (!p || p.r !== B.played) return; n++; if (k !== me && (p.s || 0) > G.score) rank++; });
    n = Math.max(n, 1);
    el.innerHTML = rank === 1 && G.score > 0 ? '<b>👑 1</b>位' : '<b>' + rank + '</b>位<small>/' + n + '</small>';
    el.className = 'hr' + (rank === 1 && G.score > 0 ? ' first' : '');
    if (rank === 1 && G.prevRank > 1 && G.score > 0) { FX('lead'); if (window.LXFX) LXFX.popAt(el, '👑 1位に浮上！', 'big'); }
    G.prevRank = rank;
  }

  function drawQ() {
    var el = $('#gq'); if (!el || !G) return;
    var t = now();
    if (t < G.startAt) {
      var n = Math.ceil((G.startAt - t) / 1000);
      if (n !== G.lastN) {
        G.lastN = n; if (n <= 3) FX('beep');
        el.innerHTML = '<div class="count"><small>' + esc(G.mode === 'solo' ? soloName(G.cfg) : cfgName(G.cfg)) + '</small><b class="cd">' + (n > 3 ? '…' : n) + '</b><small>' + (G.mode === 'solo' ? '🚀 並べかえと 穴うめが まざって出る。正しいカードで 燃料を入れて 打ち上げ！ 正解を続けると 🔥ブーストで 加速、燃料（時間）も ふえる。ミスは −' + lvOf(G.cfg).miss / 1000 + ' 秒。高く上がるほど 燃料の減りが 速くなる' : '正しいカード・答えを どんどんタップ！ ミスするとコンボが切れる') + '</small></div>';
      }
      drawHud(); return;
    }
    var q = G.q, s = q.s, h, al = altOf(G.score);
    var belt = '<div class="sky sky' + Math.min(al.i, 8) + '"><span class="here">' + al.here[2] + ' ' + esc(al.here[3]) + '</span>' +
      '<span class="track"><i style="width:' + al.pct.toFixed(1) + '%"></i><b class="rkt" style="left:' + al.pct.toFixed(1) + '%">🚀</b></span>' +
      '<span class="nxt">' + (al.next ? al.next[2] + ' ' + esc(al.next[3]) : '🏁 最高到達！') + '</span></div>';
    var fresh = q.fresh; q.fresh = false;
    if (q.type === 'order') {
      h = belt +
        '<div class="mid' + (fresh ? ' slidein' : '') + '"><p class="ja big">' + esc(s.ja) + '</p>' +
        '<div class="slots' + (q.done ? ' ok' : '') + '">' + q.placed.map(function (i) { return '<span class="tl">' + esc(q.tiles[i]) + '</span>'; }).join('') +
        (q.done ? '<span class="end">' + esc(q.end) + '</span>' : '') + '</div>' +
        '<div class="pool">' + q.ord.map(function (i) {
          return '<button type="button" class="tl' + (q.placed.indexOf(i) >= 0 ? ' used' : '') + (q.bad === i ? ' shake' : '') + '" data-gt="' + i + '">' + esc(q.tiles[i]) + '</button>';
        }).join('') + '</div></div>';
    } else {
      var ok = q.pick >= 0 && q.ch[q.pick] === s.key;
      h = belt +
        '<div class="mid' + (fresh ? ' slidein' : '') + '"><p class="en">' + A().blankEn(s, q.pick >= 0 ? s.key : '', q.pick >= 0) + '</p><p class="ja">' + esc(s.ja) + '</p></div>' +
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
      if (wasCount) {
        wasCount = false; drawQ(); FX('go');
        var c = $('.play .card'), r = c && c.getBoundingClientRect();
        if (r && window.LXFX) LXFX.pop(G.mode === 'solo' ? 'LIFT OFF!' : 'GO!', r.left + r.width / 2, r.top + r.height * 0.3, 'go');
      }
      if (G.mode === 'solo') { var rt = Date.now(), dt = G.tl ? rt - G.tl : 0; G.tl = rt; G.left -= dt * speedNow(); }
      if (timeLeft() <= 0 && !G.over) { G.over = true; G.dur = (Date.now() - G.startAt) / 1000; clearInterval(G.timer); FX('whistle'); onEnd(); return; }
      drawHud();
    }, 50);
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
  function taCfg() { var s = S(); if (!s.ta) s.ta = { c: s.course || 'c1', lv: 'std' }; if (!s.ta.lv) s.ta.lv = 'std'; return s.ta; }
  /* 範囲は「教科書まるごと」か「えらんだ単元」。並べかえ・穴うめは いつも ミックス。ベストは 範囲 × コースごと */
  function bestKey(cfg, lv) { var us = usOf(cfg); return (us.length ? 'u:' + us.join(',') : cfg.c) + '-' + lv; }
  function startSolo() {
    var cfg = taCfg(), c2 = { c: cfg.c, lv: cfg.lv, m: 'mix', p: 0, u: 12, t: 60, us: cfg.us || '' };
    newGame(c2, Math.floor(Math.random() * 1e9), 'solo', Date.now() + 3200);
    playShell('スコア');
    runClock(endSolo);
  }
  function endSolo() {
    var r = rw(), key = bestKey(G.cfg, lvOf(G.cfg).k), prev = r.best[key] || 0, rec = G.score > prev;
    if (rec) r.best[key] = G.score;
    var coins = afterGame(); save(); earn(coins); checkBadges();
    var dur = Math.round(G.dur || 0), mm = Math.floor(dur / 60) + '分' + (dur % 60) + '秒';
    var al = altOf(G.score);
    var share = '論理表現ラボ 🚀英文ロケット（' + soloName(G.cfg) + '）\n' + al.here[2] + al.here[3] + '（' + fmtKm(al.km) + '）まで 到達！ ' + fmt(G.score) + '点\n完成した文 ' + G.ok + '・' + mm + '・' + G.words + '語（≒ ' + ruler(G.words) + '）\n最大' + G.maxCombo + 'コンボ・段位「' + levelOf(r.coins).name + '」\n' + location.origin + location.pathname;
    G.share = share;
    if (rec && G.score > 0 && window.LXFX) { setTimeout(function () { FX('fanfare'); LXFX.rain(3); LXFX.burst(80); }, 500); }
    $('#gq').innerHTML = '<div class="result">' +
      (rec && G.score > 0 ? '<div class="bigstamp newrec">新記録</div>' : '') +
      '<div class="score">' + fmt(G.score) + '<small> 点</small></div>' +
      arrival(al) +
      '<p class="tstats big">🧩 完成した文 <b>' + G.ok + '</b>　⏱ <b>' + mm + '</b>　🔥 ブースト <b>' + G.feverN + '</b> 回</p>' +
      '<p class="phrase">🧩 <b>' + G.words + '</b> 語を組み立てた ≒ <b>' + esc(ruler(G.words)) + '</b></p>' +
      '<p class="tstats">⚡ 最大 ' + G.maxCombo + ' コンボ　⏩ 燃料の減り 最高 ×' + G.maxSpeed.toFixed(1) + '　✕ ミス ' + G.miss + '　🪙 +' + coins + '</p>' +
      '<p class="note">' + esc(soloName(G.cfg)) + ' のベスト：' + fmt(Math.max(prev, G.score)) + ' 点</p>' +
      '<div class="row" style="justify-content:center"><button type="button" class="btn main" data-ga="again">↺ もう一度</button>' +
      '<button type="button" class="btn warm" data-ga="brag">📣 自慢する</button>' +
      '<button type="button" class="btn ghost" data-go="game">◀ もどる</button></div></div>';
    $('#hcombo').innerHTML = '';
  }
  /* 到達した場所と、通りすぎた めじるし */
  function arrival(al) {
    // 「あと少しで 次へ」が 見えると もう一度 やりたくなる
    var togo = al.next && G ? '<em class="togo">あと <i>' + fmt(al.next[0] - G.score) + '</i> 点で ' + al.next[2] + ' ' + esc(al.next[3]) + '</em>' : '';
    return '<div class="arrive"><span class="ae">' + al.here[2] + '</span><div class="at"><small>到達した場所</small><b>' + esc(al.here[3]) + '</b><span>' + fmtKm(al.km) + '</span>' + togo + '</div></div>' +
      '<div class="ladder">' + SKY.slice(1).map(function (x, k) {
        var i = k + 1, st = i <= al.i ? 'ok' : i === al.i + 1 ? 'nx' : '';
        return i > al.i + 2 || i < al.i - 6 ? '' : // 通りすぎた めじるしは 近い 7 つだけ（1 行に おさめる）
          '<span class="lm ' + st + '" title="' + esc(x[3]) + '">' + x[2] + (st === 'ok' ? '<i>✓</i>' : '') + '</span>';
      }).join('') + '</div>';
  }
  function brag(text) {
    if (navigator.share && /Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) { navigator.share({ text: text }).catch(function () { }); return; }
    var done = function () { toast('結果の文章をコピーしました。LINE などに はりつけて自慢しよう'); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { toast(text.split('\n')[1]); });
    else toast(text.split('\n')[1]);
  }

  /* ---------- ゲームのトップ ---------- */
  function renderHub() {
    var cfg = taCfg(), r = rw(), s = S(), us = usOf(cfg);
    var seg = function (key, opts) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-ta="' + key + ':' + o[0] + '" aria-pressed="' + (String(cfg[key]) === String(o[0]) && !us.length) + '">' + o[1] + '</button>'; }).join('') + '</div>';
    };
    var hasDb = !!base();
    A().view.innerHTML = '<div class="unit">' +
      '<div class="ubar"><button type="button" class="btn ghost" data-act="home">◀ 一覧</button>' +
      '<div class="utitle"><small>やるほど コインがたまって 段位が上がる</small><b>🎮 ゲーム</b></div>' +
      '<button type="button" class="btn ghost rwbtn" data-ga="rewards">🏅 段位・バッジ</button></div>' +
      '<div class="hub">' +
      '<section class="panel hubp ta"><h3><span class="hico">🚀</span> 英文ロケット</h3><p class="note">正しいカードで 燃料を入れて 打ち上げ！ 正解を続けると 🔥ブーストで 加速。どこまで 高く 行ける？</p>' +
      '<div class="fld rng"><span class="fl">範囲</span>' + seg('c', [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全部']]) +
      '<button type="button" class="btn rangebtn' + (us.length ? ' on' : '') + '" data-ga="spick">' + (us.length ? '📚 ' + esc(rangeName(cfg)) + ' ✎' : '📚 単元をえらぶ') + '</button></div>' +
      '<div class="lvs">' + LVS.map(function (l) {
        var b = r.best[bestKey(cfg, l.k)] || 0;
        return '<button type="button" class="lvb lv-' + l.k + '" data-ta="go:' + l.k + '"><i>' + l.ico + '</i><b>' + l.name + '</b><small>' + l.sub + '</small>' +
          '<span class="lvbest">ベスト <em>' + (b ? fmt(b) : '－') + '</em></span></button>';
      }).join('') + '</div>' +
      '</section>' +
      '<section class="panel hubp vs"><h3><span class="hico">🏆</span> クラス対戦</h3><p class="note">先生の合図で 全員いっせいにスタート。🚀 ロケット対戦 か、1 問ずつ 4 択で 答える 🎯 クイズ大会</p>' +
      (hasDb ?
        '<div class="fld joinrow"><input type="text" id="jCode" inputmode="numeric" maxlength="4" placeholder="部屋番号"><input type="text" id="jName" maxlength="10" placeholder="ニックネーム" value="' + esc(s.nick || '') + '"><button type="button" class="btn main" data-ga="join">参加 ▶</button></div>' +
        '<div class="fld teacher"><span class="note">先生</span><button type="button" class="btn" data-ga="mkroom:race">🚀 ロケット対戦の 部屋</button><button type="button" class="btn" data-ga="mkroom:quiz">🎯 クイズ大会の 部屋</button></div>'
        : '<p class="body warnbox">まだ使えません。先生が ⚙ 設定で データベースを 1 回登録すると使えるようになります（README「クラス対戦の準備」）。<br>先生から届いた 部屋のリンク・QR を開けば すぐ参加できます。</p>' +
        '<div class="fld"><button type="button" class="btn" data-ga="settings">⚙ 設定を開く</button></div>') +
      '</section></div></div>';
  }
  function hubTa(v) {
    var kv = v.split(':'), cfg = taCfg();
    if (kv[0] === 'go') { cfg.lv = kv[1]; save(); location.hash = '#ta'; return; } // コースを えらぶと すぐ スタート
    cfg[kv[0]] = kv[1]; if (kv[0] === 'c') cfg.us = ''; // 教科書を おしたら まるごとに もどす
    save(); renderHub();
  }
  function soloPick() { var cfg = taCfg(); openPicker(cfg.us || '', cfg.c === 'all' ? S().course : cfg.c, function (us) { cfg.us = us; save(); renderHub(); }); }

  /* ---------- 単元えらび（今日の授業の範囲） ---------- */
  var P = null;
  function openPicker(usStr, c, done) {
    P = { sel: {}, c: c || S().course || 'c1', done: done };
    String(usStr || '').split(',').forEach(function (id) { if (A().UNITS[id]) P.sel[id] = 1; });
    var first = Object.keys(P.sel)[0]; if (first) P.c = A().UNITS[first].course.id;
    drawPicker();
  }
  function drawPicker() {
    var ids = Object.keys(P.sel), c = A().COURSES.filter(function (x) { return x.id === P.c; })[0] || A().COURSES[0];
    var n = ids.reduce(function (m, id) { var u = A().UNITS[id]; return m + u.sentences.length + (u.drills || []).length; }, 0);
    dlgOpen('<div class="dlg-head"><h2>📚 出題する単元</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="tabs">' + A().COURSES.map(function (x) {
        var k = ids.filter(function (id) { return A().UNITS[id].course === x; }).length;
        return '<button type="button" data-pk="c:' + x.id + '" aria-selected="' + (x === c) + '">' + esc(x.name) + (k ? '<span class="badge">' + k + '</span>' : '') + '</button>';
      }).join('') + '</div>' +
      '<div class="dlg-body"><p class="note pknote">今日の授業でやった単元をタップ（いくつでも・コースをまたいでも OK）。えらんだ単元の例文だけが出ます</p>' +
      '<div class="pick">' + c.units.map(function (u) {
        return '<button type="button" class="pku" data-pk="u:' + u.id + '" aria-pressed="' + !!P.sel[u.id] + '"><small>' + esc(unitLabel(u.id)) + '</small><b>' + esc(u.title) + '</b></button>';
      }).join('') + '</div>' +
      '<div class="pkfoot"><span>✔ <b>' + ids.length + '</b> 単元・<b>' + n + '</b> 文</span>' +
      '<button type="button" class="btn ghost" data-pk="none">ぜんぶはずす</button>' +
      '<button type="button" class="btn main" data-pk="ok">' + (ids.length ? '決定 ▶' : 'コース全部にする') + '</button></div></div>');
  }
  function pickerClick(v) {
    if (!P) return;
    if (v === 'ok') {
      var d = P.done, sel = P.sel, us = Object.keys(A().UNITS).filter(function (id) { return sel[id]; }).join(',');
      P = null; gdlg.close(); d(us); return;
    }
    if (v === 'none') P.sel = {};
    else if (v.indexOf('c:') === 0) P.c = v.slice(2);
    else if (v.indexOf('u:') === 0) { var id = v.slice(2); if (P.sel[id]) delete P.sel[id]; else { P.sel[id] = 1; FX('pop'); } }
    drawPicker();
  }

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
    function net(ok) { document.body.classList.toggle('offline', !ok && !closed); } // つながりの 表示
    function startPoll() {
      if (poll || closed) return;
      poll = setInterval(function () { api('GET', path).then(function (v) { net(true); tree = v; cb(tree); }, function () { net(false); }); }, 1500);
    }
    try {
      es = new EventSource(base() + '/' + path + '.json');
      es.addEventListener('put', function (e) { net(true); var d = JSON.parse(e.data); setAt(d.path, d.data); cb(tree); });
      es.addEventListener('keep-alive', function () { net(true); });
      es.onopen = function () { net(true); };
      es.addEventListener('patch', function (e) {
        net(true); var d = JSON.parse(e.data), p = d.path.replace(/\/$/, '');
        Object.keys(d.data || {}).forEach(function (k) { setAt(p + '/' + k, d.data[k]); }); cb(tree);
      });
      es.onerror = function () { net(false); if (es.readyState === 2) startPoll(); };
    } catch (e) { startPoll(); }
    return function () { closed = true; document.body.classList.remove('offline'); if (es) es.close(); clearInterval(poll); };
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
  function makeRoom(kind) {
    var cfg = { c: S().course || 'c1', m: 'mix', lv: 'std', u: 12, t: 60 };
    if (kind === 'quiz') { cfg.kind = 'quiz'; cfg.qn = 10; cfg.qt = 20; }
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
        // room は 同じ入れ物が 書きかえられて届くので、前の状態は 文字で覚えておく
        var first = !H.room, prev = H.st; H.room = room; H.st = room.state + '|' + room.round;
        if (!first && prev && prev !== H.st && prev.split('|')[1] === String(room.round) && room.state === 'end') setTimeout(function () { if (H && H.room) showPodium(H.room); }, 300);
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
        if (isQuiz(r.cfg)) quizTick();
      }, 250);
    });
  }
  function drawHostL(soft) {
    var r = H.room, el = $('#hostL'); if (!el) return;
    var cfg = r.cfg, qz = isQuiz(cfg), busy = r.state === 'play' || (qz && /^(q|reveal|board)$/.test(r.state));
    var seg = function (key, opts) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-hc="' + key + ':' + o[0] + '" aria-pressed="' + (String(cfg[key]) === String(o[0])) + '"' + (busy ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>';
    };
    var n = playersOf(r).length;
    var qrOld = soft && $('#qr') ? $('#qr').innerHTML : '';
    el.innerHTML =
      '<div class="roomhd"><small>部屋番号</small><div class="code">' + H.code + '</div></div>' +
      '<div class="qr" id="qr">' + qrOld + '</div>' +
      '<p class="note joinhow">QR を 読みとる か、論理表現ラボ → 🎮 ゲーム → 部屋番号と ニックネーム →「参加 ▶」</p>' +
      '<div class="hsum">' +
      (qz ? '<p><span>🎯</span><b>クイズ大会・' + qN(cfg) + ' 問・1 問 ' + qT(cfg) + ' 秒</b></p>'
        : '<p><span>⏱</span><b>' + esc(tName(cfg.t)) + '</b></p>') +
      '<p><span>🏆</span><b>' + esc(topName(cfg)) + '</b></p>' +
      '<p><span>📚</span><b>' + esc(rangeName(cfg)) + '</b></p>' +
      (qz ? '<p><span>📖</span><b>' : '<p><span>' + lvOf(cfg).ico + '</span><b>' + esc(lvOf(cfg).name) + '・') + esc((SRCS.filter(function (o) { return o[0] === (cfg.src || 'all'); })[0] || ['', ''])[1].replace(/（.*）/, '')) + '</b></p>' +
      '<button type="button" class="btn hsetbtn" data-ga="hset"' + (busy ? ' disabled' : '') + '>⚙ 出題の設定（遊び方・単元・時間・映す人数）</button>' +
      '</div>' +
      '<div class="hbtns"><span class="ppl">👥 <b>' + n + '</b> 人</span>' +
      (qz && busy ? '<span class="qzbusy">🎯 クイズ中（第 ' + ((r.qi || 0) + 1) + ' 問 / ' + qN(cfg) + '）</span>' : '<button type="button" class="btn main big" data-ga="hstart"' + (busy ? ' disabled' : '') + '>' + (qz ? (r.round ? '▶ もう一度 クイズ' : '▶ クイズ スタート') : r.round ? '▶ 第' + (r.round + 1) + '回戦 スタート' : '▶ スタート') + '</button>') + '</div>' +
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
  function hostPick(back) {
    var cfg = H.room.cfg;
    openPicker(cfg.us || '', cfg.c === 'all' ? S().course : cfg.c, function (us) {
      if (!H) return;
      var old = H.room.cfg.us; H.room.cfg.us = us;
      api('PATCH', 'rooms/' + H.code + '/cfg', { us: us }).catch(function () { if (H && H.room) { H.room.cfg.us = old; drawHostL(true); } toast('変更できませんでした。電波を たしかめて もう一度'); });
      if (back) setTimeout(openHostSet, 0);
    });
  }
  function hostCfg(v) {
    var kv = v.split(':'), val = kv[0] === 'c' || kv[0] === 'lv' || kv[0] === 'src' || kv[0] === 'kind' ? kv[1] : +kv[1], o = {}; o[kv[0]] = val;
    if (kv[0] === 'c') { o.us = ''; o.u = 12; }
    var old = {}; Object.keys(o).forEach(function (k) { old[k] = H.room.cfg[k]; H.room.cfg[k] = o[k]; }); // 先に画面へ反映
    api('PATCH', 'rooms/' + H.code + '/cfg', o).catch(function () { // 失敗したら もとに もどす（先生と 生徒の 問題が ずれないように）
      if (!H || !H.room) return; Object.keys(old).forEach(function (k) { H.room.cfg[k] = old[k]; });
      toast('変更できませんでした。電波を たしかめて もう一度'); drawHostL(true); if (gdlg.open && $('#hsetdlg')) openHostSet();
    });
    if (gdlg.open && $('#hsetdlg')) openHostSet();
    drawHostL(true);
  }
  /* ⚙ 出題の設定（先生）：時間・単元・コース・出す文 を 1 枚で（並べかえ・穴うめは いつも ミックス） */
  function openHostSet() {
    if (!H || !H.room) return;
    var cfg = H.room.cfg, us = usOf(cfg), qz = isQuiz(cfg), n = (qz ? poolAll(cfg) : pool(cfg)).length;
    var seg = function (key, opts, cur) {
      return '<div class="seg">' + opts.map(function (o) { return '<button type="button" data-hs="' + key + ':' + o[0] + '" aria-pressed="' + (String(cur) === String(o[0])) + '">' + o[1] + '</button>'; }).join('') + '</div>';
    };
    dlgOpen('<div class="dlg-head" id="hsetdlg"><h2>⚙ 出題の設定</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="dlg-body hset">' +
      '<div class="hrow"><span class="hl">🎮 遊び方</span>' + seg('kind', KINDS, qz ? 'quiz' : 'race') + '</div>' +
      (qz ? '<div class="hrow"><span class="hl">❓ 問題数</span>' + seg('qn', QNS, qN(cfg)) + '</div>' +
        '<div class="hrow"><span class="hl">⏱ 1 問の 時間</span>' + seg('qt', QTS, qT(cfg)) + '</div>'
        : '<div class="hrow"><span class="hl">⏱ 時間</span>' + seg('t', TIMES, cfg.t) + '</div>') +
      '<div class="hrow"><span class="hl">📚 範囲</span><div class="hcol">' +
      '<button type="button" class="btn rangebtn' + (us.length ? ' on' : '') + '" data-hs="pick">' + (us.length ? '📚 ' + esc(rangeName(cfg)) + ' ✎' : '📚 今日の単元をえらぶ') + '</button>' +
      '<div class="hsub"><span class="note">または コース全部：</span>' + seg('c', [['c1', 'Ⅰ'], ['c2', 'Ⅱ'], ['c3', 'Ⅲ'], ['all', '全']], us.length ? '' : cfg.c) + '</div></div></div>' +
      (qz ? '' : '<div class="hrow"><span class="hl">🚀 コース</span>' + seg('lv', LVS.map(function (l) { return [l.k, l.ico + ' ' + l.name]; }), lvOf(cfg).k) + '</div>') +
      '<div class="hrow"><span class="hl">📖 出す文</span>' + seg('src', SRCS, cfg.src || 'all') + '</div>' +
      '<div class="hrow"><span class="hl">🏆 映す人数</span><div class="hcol">' + seg('top', TOPS, topN(cfg)) + '<span class="note topnote">大画面の ランキングに 出す 人数。自分の 順位は 生徒の 画面に いつも 出ます</span></div></div>' +
      '<div class="pkfoot"><span>出題される文：<b>' + n + '</b> 文</span><button type="button" class="btn main" data-x>決定 ▶</button></div>' +
      '</div>');
  }
  function hostSetClick(v) {
    if (!H) return;
    if (v === 'pick') { hostPick(true); return; }
    hostCfg(v);
  }
  function hostStart() {
    var r = H.room; if (!r || r.state === 'play') return;
    if (isQuiz(r.cfg)) { if (!/^(q|reveal|board)$/.test(r.state)) quizStart(); return; }
    if (!pool(r.cfg).length) { toast('問題がありません'); return; }
    api('PATCH', 'rooms/' + H.code, { state: 'play', round: (r.round || 0) + 1, seed: Math.floor(Math.random() * 1e9), startAt: Math.round(now() + 5000) })
      .catch(function () { toast('スタートできませんでした'); });
  }
  /* ランキング表：広さ（W×H）を測って、入る列数・行数・文字の大きさを決める（40人でもスクロールなし） */
  function rows(list, mode, W, H, hid) {
    var top = Math.max(1, list.reduce(function (m, p) { return Math.max(m, mode === 'best' ? p.b || 0 : p.s || 0); }, 0));
    var n = list.length + (hid ? 1 : 0), cols = n <= 10 ? 1 : n <= 24 ? 2 : 3, rowsN = n, more = 0, style = ''; // hid：「ほか ○ 人」の 行
    if (W && H) {
      var maxRows = Math.max(1, Math.floor(H / 24)), roomy = Math.max(1, Math.floor(H / 44));
      cols = Math.max(1, Math.min(3, Math.floor(W / 230), Math.ceil(n / roomy))); // 1 列で ゆったり 入るなら 1 列（上から 順に 読める）
      rowsN = Math.ceil(n / cols);
      if (rowsN > maxRows) { rowsN = maxRows; more = list.length - (cols * rowsN - 1); list = list.slice(0, cols * rowsN - 1); }
      rowsN = Math.max(Math.min(8, maxRows), rowsN);
      var fs = Math.max(11, Math.min(26, H / rowsN * 0.55));
      style = ' style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr));grid-template-rows:repeat(' + rowsN + ',minmax(0,1fr));font-size:' + fs.toFixed(1) + 'px"';
    }
    return '<ol class="rk"' + style + '>' +
      rowData(list, mode, top).map(function (d) {
        return '<li data-id="' + esc(d.p.id) + '" class="' + (d.top ? 'top top' + d.rank : '') + (d.p.id === pid() ? ' me' : '') + '"><span class="rn">' + d.medal + '</span><span class="nm">' + nmHTML(d, mode) + '</span>' +
          '<span class="bar"><i style="width:' + d.pct + '%"></i></span><span class="sc">' + fmt(d.v) + '</span></li>';
      }).join('') + (more || hid ? '<li class="more">…ほか ' + ((more || 0) + (hid || 0)) + ' 人' + (hid ? '（順位は 自分の 画面で）' : '') + '</li>' : '') + '</ol>';
  }
  function rowData(list, mode, top) {
    if (!top) top = Math.max(1, list.reduce(function (m, p) { return Math.max(m, mode === 'best' ? p.b || 0 : p.s || 0); }, 0));
    var rank = 0, last = -1;
    return list.map(function (p, i) {
      var v = mode === 'best' ? p.b || 0 : p.s || 0;
      if (v !== last) { rank = i + 1; last = v; }
      return { p: p, v: v, rank: rank, top: rank <= 3 && v > 0, medal: rank <= 3 && v > 0 ? ['🥇', '🥈', '🥉'][rank - 1] : rank, pct: (v / top * 100).toFixed(1) };
    });
  }
  function nmHTML(d, mode) { return esc(d.p.n) + (mode !== 'best' && d.p.k >= 10 ? ' <i class="fire">🔥' + d.p.k + '</i>' : ''); }
  /* 順位が同じときは 数字と棒だけ書きかえる（棒がなめらかにのびる） */
  function patchRows(bb, list, mode) {
    rowData(list, mode).forEach(function (d) {
      var li = bb.querySelector('li[data-id="' + (window.CSS && CSS.escape ? CSS.escape(d.p.id) : d.p.id) + '"]'); if (!li) return;
      var sc = li.querySelector('.sc'), t = fmt(d.v);
      if (sc.textContent !== t) { sc.textContent = t; li.classList.remove('up'); void li.offsetWidth; li.classList.add('up'); }
      li.querySelector('.bar i').style.width = d.pct + '%';
      li.querySelector('.nm').innerHTML = nmHTML(d, mode);
      li.querySelector('.rn').innerHTML = d.medal;
      li.classList.remove('top', 'top1', 'top2', 'top3'); if (d.top) li.classList.add('top', 'top' + d.rank);
    });
  }
  /* 順位が入れかわったら 行がすべって動く */
  function flip(bb, old) {
    bb.querySelectorAll('li[data-id]').forEach(function (li) {
      var o = old[li.dataset.id]; if (!o) { li.classList.add('enter'); return; }
      var n = li.getBoundingClientRect(), dx = o.left - n.left, dy = o.top - n.top;
      if (!dx && !dy) return;
      li.style.transition = 'none'; li.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      requestAnimationFrame(function () { requestAnimationFrame(function () { li.style.transition = 'transform .55s cubic-bezier(.2,.8,.2,1)'; li.style.transform = ''; }); });
    });
  }
  function banner(text, cls) {
    var b = document.createElement('div'); b.className = 'lbanner ' + (cls || ''); b.textContent = text;
    document.body.appendChild(b); setTimeout(function () { b.remove(); }, 2200);
  }
  function hueOf(n) { var h = 0; for (var i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) % 360; return h; }
  function drawBoard() {
    var el = $('#board'), r = H && H.room; if (!el || !r) return;
    if (isQuiz(r.cfg) && /^(q|reveal|board)$/.test(r.state) && H.tab === 'now') { H.bkey = ''; drawQuizBoard(el, r); return; }
    el.classList.remove('quiz', 'open'); H.qkey = '';
    var t = now(), head, body, bl, lst = null, lmode = 'now', hid = 0;
    var tabs = '<div class="btabs"><button type="button" data-ga="tab:now" aria-selected="' + (H.tab === 'now') + '">今回</button><button type="button" data-ga="tab:best" aria-selected="' + (H.tab === 'best') + '">🏆 ハイスコア</button></div>';
    if (H.tab === 'best') {
      head = '<div class="bhead"><b>🏆 この部屋のハイスコア</b>' + tabs + '</div>';
      bl = playersOf(r).filter(function (p) { return p.b > 0; });
      if (bl.length) { lst = cut(bl, topN(r.cfg), 'best'); hid = bl.length - lst.length; lmode = 'best'; } else body = '<div class="count"><small>まだ記録がありません</small></div>';
    } else if (r.state === 'lobby' || !r.round) {
      var ps = playersOf(r), seen = H.seen || (H.seen = {});
      if (ps.length > (H.lastN || 0) && H.lastN != null) FX('pop');
      H.lastN = ps.length;
      head = '<div class="bhead"><b>' + (ps.length ? '👥 <span class="bign">' + ps.length + '</span> 人 参加中！' : '参加者を待っています') + '</b>' + tabs + '</div>';
      body = ps.length ? '<div class="chips">' + ps.map(function (p) {
        var nw = !seen[p.id]; seen[p.id] = 1;
        return '<button type="button" class="chipn' + (nw ? ' new' : '') + '" style="--h:' + hueOf(p.n) + '" data-kick="' + esc(p.id) + '" title="タップで この人を 部屋から はずす">' + esc(p.n) + '</button>';
      }).join('') + '</div><p class="note kicknote">ふさわしくない 名前は タップで 部屋から はずせます</p>'
        : '<div class="count"><b class="wave">👋</b><small>生徒が 入ってくると ここに 名前が 出ます</small></div>';
      body = '<div class="howjoin"><span>📱 論理表現ラボ → 🎮 ゲーム → 部屋番号</span><b>' + H.code + '</b><span>→ ニックネーム →「参加 ▶」（左の QR でも OK）</span></div>' + body;
      body += '<p class="note rangeinfo">' + (isQuiz(r.cfg) ? esc(quizName(r.cfg)) : '出題：' + esc(cfgName(r.cfg))) + '</p>';
    } else if (r.state === 'play' && t < r.startAt) {
      var cn = Math.max(1, Math.ceil((r.startAt - t) / 1000));
      if (cn !== H.cdN) { H.cdN = cn; if (cn <= 3) FX('beep'); }
      head = '<div class="bhead"><b>第' + r.round + '回戦　' + esc(cfgName(r.cfg)) + '</b>' + tabs + '</div>';
      body = '<div class="count"><b class="cd" data-n="' + cn + '">' + cn + '</b><small>まもなく スタート！</small></div>';
    } else {
      lst = playersOf(r, r.round);
      var all = lst.length; lst = cut(lst, topN(r.cfg), 'now'); hid = all - lst.length;
      var end = r.state === 'end', left = Math.max(0, r.startAt + r.cfg.t * 1000 - t);
      head = '<div class="bhead"><b>' + (end ? '🎉 ' + roundName(r) + ' 結果発表' : '⏱ 残り ' + Math.ceil(left / 1000) + ' 秒') + '</b>' + tabs + '</div>' +
        (end ? '' : '<div class="tbar host"><i style="width:' + (left / (r.cfg.t * 1000) * 100) + '%"' + (left < 10000 ? ' class="hurry"' : '') + '></i></div>');
      if (end && lst[0] && lst[0].s > 0) head += '<div class="champ">👑 ' + esc(lst[0].n) + ' さん　' + fmt(lst[0].s) + ' 点 <button type="button" class="btn ghost replay" data-ga="podium">🎉 表彰式をもう一度</button>' +
        (isQuiz(r.cfg) && r.stat ? '<button type="button" class="btn ghost replay" data-ga="qstat">📊 問題ごとの 正答率</button>' : '') +
        '<button type="button" class="btn ghost replay" data-ga="hcsv">📋 結果をコピー</button></div>';
      if (!lst.length) { lst = null; body = '<div class="count"><small>まだ だれも 答えていません</small></div>'; }
    }
    if (r.state === 'play' && t >= r.startAt && H.goR !== r.round) { H.goR = r.round; FX('go'); banner('スタート！', 'go'); }
    if (r.state === 'play' && t >= r.startAt + r.cfg.t * 1000 && H.whR !== r.round) { H.whR = r.round; FX('whistle'); banner('そこまで！', 'stop'); }
    var key = H.tab + '|' + r.state + '|' + r.round + '|' + hid + '|' + (lst ? lst.map(function (p) { return p.id; }).join(',') : body);
    var bb = el.querySelector('.bbody');
    if (H.bkey === key && bb) {
      var bh = el.querySelector('.bh'); if (bh && bh.innerHTML !== head) bh.innerHTML = head;
      if (lst) patchRows(bb, lst, lmode);
      return;
    }
    var old = {};
    if (bb) bb.querySelectorAll('li[data-id]').forEach(function (li) { old[li.dataset.id] = li.getBoundingClientRect(); });
    el.innerHTML = '<div class="bh">' + head + '</div><div class="bbody">' + (lst ? '' : body) + '</div>';
    if (lst) { bb = el.querySelector('.bbody'); bb.innerHTML = rows(lst, lmode, bb.clientWidth, bb.clientHeight, hid); if (H.bkey && H.bkey.split('|')[1] === r.state) flip(bb, old); }
    H.bkey = key;
    // トップ交代
    if (r.state === 'play' && H.tab === 'now' && lst && lst[0] && lst[0].s > 0) {
      if (H.leader && H.leader !== lst[0].id && (!lst[1] || lst[1].s < lst[0].s)) { banner('👑 トップ交代！ ' + lst[0].n + ' さん', 'lead'); FX('lead'); }
      H.leader = lst[0].id;
    }
  }

  /* ---------- 表彰式（結果発表の演出） ---------- */
  function showPodium(room) {
    var lst = playersOf(room, room.round).filter(function (p) { return p.s > 0; }).slice(0, 3);
    if (!lst.length) return;
    closeShow();
    var pd = function (p, k) {
      if (!p) return '<div class="pd p' + k + ' empty"></div>';
      return '<div class="pd p' + k + '">' + (k === 1 ? '<div class="crown">👑</div>' : '') +
        '<div class="who"><span class="medal">' + ['', '🥇', '🥈', '🥉'][k] + '</span><b style="--len:' + Math.max(3, Array.from(p.n).length) + '">' + esc(p.n) + '</b>' +
        '<small><span class="cnt" data-to="' + p.s + '">' + (k === 1 ? '0' : fmt(p.s)) + '</span> 点</small></div>' +
        '<div class="block"><span>' + k + '</span></div></div>';
    };
    var d = document.createElement('div'); d.className = 'show'; d.id = 'show';
    d.innerHTML = '<div class="rays"></div><div class="showin">' +
      '<p class="stitle">🎉 ' + roundName(room) + ' 結果発表</p><p class="drum">ドゥルルルル…</p>' +
      '<div class="podium">' + pd(lst[1], 2) + pd(lst[0], 1) + pd(lst[2], 3) + '</div>' +
      '<div class="sbtns"><button type="button" class="btn" data-sh="close">ランキングを見る ▶</button></div></div>';
    document.body.appendChild(d);
    d.addEventListener('click', function (e) { if (e.target.closest('[data-sh=close]')) closeShow(); });
    var T = H.showT = [], at = function (ms, fn) { T.push(setTimeout(fn, ms)); };
    FX('drum', 2.4);
    at(2500, function () { d.classList.add('s3'); if (lst[2]) FX('medal'); });
    at(3700, function () { d.classList.add('s2'); if (lst[1]) FX('medal'); });
    at(4900, function () { d.classList.add('dark'); });
    at(6100, function () {
      d.classList.add('s1'); FX('fanfare');
      if (window.LXFX) { LXFX.rain(8); LXFX.burst(180, innerWidth / 2, innerHeight * 0.45); }
      countUp(d.querySelector('.p1 .cnt'), 1400);
    });
    at(7600, function () { d.classList.add('done'); });
  }
  function closeShow() {
    var d = $('#show'); if (d) d.remove();
    if (H && H.showT) H.showT.forEach(clearTimeout);
    if (window.LXFX) LXFX.stop();
  }
  function countUp(el, ms) {
    if (!el) return;
    var to = +el.dataset.to, t0 = Date.now();
    (function f() { var k = Math.min(1, (Date.now() - t0) / ms); el.textContent = fmt(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })();
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
    if (!me) { if (B.played || B.seen) toast('部屋から はずれました。ニックネームを 入れ直して 参加してね'); location.hash = '#join=' + B.code; return; }
    B.seen = 1;
    if (isQuiz(room.cfg) && /^(q|reveal|board)$/.test(room.state) && room.round) { quizStudent(room); return; }
    clearInterval(B.qzT);
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
      var myRank = rankOf(lst, pid(), 'now');
      if (my >= 0 && myRank <= 3 && lst[my].s > 0) { rw().top3++; earn(50); }
      save(); checkBadges();
      B.cel = { round: room.round, rank: my + 1, n: lst.length };
      setTimeout(function () {
        if (!window.LXFX || !B) return;
        if (my === 0 && lst[0].s > 0) { FX('fanfare'); LXFX.rain(5); LXFX.burst(120); }
        else if (my > 0 && my < 3 && lst[my].s > 0) { FX('medal'); LXFX.burst(60); }
        else FX('pop');
      }, 400);
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
      // 自分の 順位は いつも 見える。表は 先生が えらんだ 人数（最大 5 人）＋ 自分の 行
      var rk = rankOf(lst, pid(), 'now') || my + 1, show = cut(lst, Math.min(topN(room.cfg) || 5, 5), 'now').slice(0, 5);
      var mine = show.some(function (p) { return p.id === pid(); }) ? '' : '<ol class="rk mine"><li class="me"><span class="rn">' + rk + '</span><span class="nm">' + esc(meP.n || S().nick || '') + '</span><span class="bar"><i style="width:' + ((meP.s || 0) / Math.max(1, (lst[0] || {}).s || 1) * 100).toFixed(1) + '%"></i></span><span class="sc">' + fmt(meP.s || 0) + '</span></li></ol>';
      var win = fin && rk === 1 && (meP.s || 0) > 0, med = fin && rk <= 3 && (meP.s || 0) > 0;
      mid = '<p class="note">' + roundName(room) + ' ' + (fin ? '結果' : '（集計中… みんなが終わるのを待っています）') + '</p>' +
        (win ? '<div class="winner"><span class="crown">👑</span><b>優勝！</b></div>' : med ? '<div class="winner m' + rk + '"><span class="crown">' + ['', '🥇', '🥈', '🥉'][rk] + '</span><b>' + (rk === 2 ? '準優勝！' : 'メダル獲得！') + '</b></div>' : fin ? '<p class="h">おつかれさま！</p>' : '') +
        '<div class="score' + (win ? ' gold' : '') + '">' + rk + '<small> 位 / ' + lst.length + ' 人</small></div>' +
        '<p class="tstats">' + fmt(meP.s || 0) + ' 点　' + (isQuiz(room.cfg) ? '⭕ ' + (meP.w || 0) + ' 問 正解' : '🧩 ' + (meP.w || 0) + ' 語') + (G && G.coins ? '　🪙 +' + G.coins : '') + '</p>' +
        rows(show, 'now') + mine + (fin ? quizMissed(room) : '') +
        '<p class="note">' + (fin ? '先生が 次のスタートをおすと 始まります' : '') + '</p>';
    } else mid = '<div class="bigstamp wait">参加中</div><p class="h">' + esc(S().nick || '') + ' さん、ようこそ！</p><p class="body">' + (isQuiz(room.cfg) ? '🎯 クイズ大会：先生の 大画面に 問題が 出たら、手元の 4 色の ボタンで 答えよう。早く 正解するほど 高得点！' : '先生が スタートをおすと 3・2・1 で 全員いっせいに始まります') + '</p>' +
      '<div class="chips small">' + playersOf(room).slice(0, 40).map(function (p) { return '<span class="chipn' + (p.id === pid() ? ' me' : '') + '">' + esc(p.n) + '</span>'; }).join('') + '</div>';
    el.innerHTML = head + mid + tail;
  }

  /* =========================================================
     画面の切りかえ（app.js から よばれる）
     ========================================================= */
  function leave() {
    if (window.LXSCENE) LXSCENE.stop();
    if ($('#show')) closeShow();
    if (G) { clearInterval(G.timer); G = null; }
    if (H) { clearInterval(H.timer); if (H.stop) H.stop(); H = null; }
  }
  function route(h) {
    var m;
    // 生徒が 対戦中は 上の ボタンを かくす（うっかり 押して 部屋から ぬけないように。ぬけるのは「◀ ぬける」）
    if (/^battle\//.test(h)) document.body.setAttribute('data-room', '1'); else document.body.removeAttribute('data-room');
    if (h === 'game') { leaveBattle(); renderHub(); return true; }
    if (h === 'ta') { startSolo(); return true; }
    if ((m = h.match(/^join(?:=(\d*))?(?:&db=(.+))?$/))) { leaveBattle(); openJoin(m[1] || '', m[2] || ''); return true; }
    if ((m = h.match(/^host\/(\d{4})$/))) { leaveBattle(); if (!base()) { renderHub(); return true; } openHost(m[1]); return true; }
    if ((m = h.match(/^battle\/(\d{4})$/))) { if (!base()) { renderHub(); return true; } openBattle(m[1]); return true; }
    leaveBattle();
    return false;
  }
  function leaveBattle() { if (B) { if (B.stop) B.stop(); clearTimeout(B.push); clearInterval(B.qzT); B = null; } }

  /* =========================================================
     🎯 クイズ大会（カフートのような 先生ペースの 早押し 4 択）
     先生の 大画面に 1 問ずつ 出る → 生徒は 手元で 4 色の ボタン → 正解と 人数の グラフ → ランキング → 次の問題
     rooms/{code} = { cfg: { kind: 'quiz', qn, qt, … }, state: lobby|q|reveal|board|end, round, seed, qi, qAt }
     players/{pid} = { n, s（合計点）, k（連続正解）, r（回）, a: { q（問題番号）, c（えらんだ番号）, ok, p（点） } }
     ========================================================= */
  var QNS = [[5, '5 問'], [10, '10 問'], [15, '15 問'], [20, '20 問']];
  var QTS = [[10, '10 秒'], [20, '20 秒'], [30, '30 秒']];
  var KINDS = [['race', '🚀 ロケット対戦'], ['quiz', '🎯 クイズ大会']];
  var QCOL = [['▲', 'qa0'], ['◆', 'qa1'], ['●', 'qa2'], ['■', 'qa3']]; // 赤・青・黄・緑
  var QREAD = 3000; // 問題を 読む 時間（このあと ボタンが 押せる）
  function qRead(cfg, seed, qi) { var q = quizQs(cfg, seed)[qi]; return q && q.type === 'pick' ? QREAD + 1500 : QREAD; }
  function isQuiz(cfg) { return cfg && cfg.kind === 'quiz'; }
  function roundName(room) { return isQuiz(room.cfg) ? '🎯 クイズ大会' + (room.round > 1 ? '（' + room.round + ' 回目）' : '') : '第' + room.round + '回戦'; }
  function qN(cfg) { return +cfg.qn || 10; }
  function qT(cfg) { return +cfg.qt || 20; }
  function quizName(cfg) { return '🎯 クイズ大会・' + rangeName(cfg) + '・' + qN(cfg) + ' 問・1 問 ' + qT(cfg) + ' 秒'; }
  /* 問題は 部屋の seed から 全員が 同じものを 作る（通信は 番号だけ） */
  var QC = {};
  function quizQs(cfg, seed) {
    var key = seed + '|' + JSON.stringify(cfg);
    if (QC.key === key) return QC.qs;
    var R = rng(seed), src = poolAll(cfg), list = [], qs = [];
    while (list.length < qN(cfg) && src.length) list = list.concat(rshuffle(src, R));
    list.slice(0, qN(cfg)).forEach(function (s) {
      var opts, x = R(), type = x < 0.4 ? 'cloze' : x < 0.75 ? 'pick' : 'order';
      if (type === 'order') { // 並べかえ：英文を 4 つの かたまりに 分けて 正しい 順に タップ
        var t = A().tilesOf(s), tl = t.tiles, ch = [];
        if (tl.length >= 4) for (var g = 0; g < 4; g++) ch.push(tl.slice(Math.round(g * tl.length / 4), Math.round((g + 1) * tl.length / 4)).join(' '));
        var dup = ch.some(function (c, i) { return ch.indexOf(c) !== i; });
        if (ch.length === 4 && !dup) {
          var od = rshuffle([0, 1, 2, 3], R); if (od.join('') === '0123') od = [1, 3, 0, 2];
          qs.push({ s: s, type: 'order', opts: od.map(function (i) { return ch[i]; }), ans: [0, 1, 2, 3].map(function (k) { return od.indexOf(k); }).join(''), end: t.end });
          return;
        }
        type = 'cloze';
      }
      if (type === 'cloze') opts = [s.key].concat(s.alt);
      else opts = [s.plain].concat(s.alt.map(function (a) { return s.en.replace(/\[[^\]]+\]/, a); }));
      var ord = rshuffle([0, 1, 2, 3], R);
      qs.push({ s: s, type: type, opts: ord.map(function (i) { return opts[i]; }), ans: ord.indexOf(0) });
    });
    QC = { key: key, qs: qs };
    return qs;
  }
  function qPts(ms, limit, streak) { return Math.round(1000 * (1 - Math.min(1, ms / limit) / 2)) + Math.min(5, streak) * 100; }
  function qStem(q, big) { // 問題文（大画面・手元 共通）
    var s = q.s;
    var parts = s.en.split(/\[[^\]]+\]/);
    if (q.type === 'cloze') return '<p class="qen' + (big ? ' big' : '') + '">' + esc(parts[0]) + '<span class="qblank"></span>' + esc(parts[1] || '') + '</p><p class="qja">' + esc(s.ja) + '</p>';
    if (q.type === 'order') return '<p class="qlab">🧩 正しい 順に タップ！</p><p class="qen ja' + (big ? ' big' : '') + '">' + esc(s.ja) + '</p>';
    return '<p class="qlab">正しい 英文は どれ？</p><p class="qen ja' + (big ? ' big' : '') + '">' + esc(s.ja) + '</p>';
  }
  function qAnswered(room) { return playersOf(room, room.round).filter(function (p) { return p.a && p.a.q === room.qi; }); }

  /* ----- 先生 ----- */
  function quizStart() {
    var r = H.room;
    if (!poolAll(r.cfg).length) { toast('問題がありません'); return; }
    var seed = Math.floor(Math.random() * 1e9);
    H.rk0 = {}; // 前の 順位（ランキングの ↑ 表示用）
    api('PATCH', 'rooms/' + H.code, { state: 'q', round: (r.round || 0) + 1, seed: seed, qi: 0, stat: null, qAt: Math.round(now() + qRead(r.cfg, seed, 0) + 2000) })
      .catch(function () { toast('スタートできませんでした'); });
  }
  function quizNext() {
    var r = H.room; if (!r || H.qbusy) return;
    var o = r.state === 'q' ? { state: 'reveal' }
      : r.state === 'reveal' ? { state: 'board' }
      : r.qi + 1 >= qN(r.cfg) ? { state: 'end' }
      : { state: 'q', qi: r.qi + 1, qAt: Math.round(now() + qRead(r.cfg, r.seed, r.qi + 1)) };
    if (o.state === 'board') { // 問題ごとの 正答率を のこす（ぎりぎりの 回答も ふくめて。あとで 復習に 使う）
      var q = quizQs(r.cfg, r.seed)[r.qi], ans = qAnswered(r);
      o['stat/' + r.qi] = { ok: ans.filter(function (p) { return p.a.ok; }).length, n: playersOf(r, r.round).length }; void q;
    }
    H.qbusy = true;
    api('PATCH', 'rooms/' + H.code, o).then(function () { H && (H.qbusy = false); }, function () { H && (H.qbusy = false); toast('つながりません'); });
  }
  /* 📊 問題ごとの 正答率（低い順に 色で わかる）→ 授業の 復習に */
  function quizStat() {
    var r = H && H.room; if (!r || !r.stat) return;
    var qs = quizQs(r.cfg, r.seed), st = r.stat;
    var list = qs.map(function (q, i) { var x = st[i]; return x && x.n ? { i: i, q: q, pc: Math.round(x.ok / x.n * 100), x: x } : null; }).filter(Boolean);
    dlgOpen('<div class="dlg-head"><h2>📊 問題ごとの 正答率</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="dlg-body qstat"><p class="note">正答率が 低い 問題は、授業で もう一度 ふれると 効果的です（赤：50% 未満）</p><ol>' +
      list.map(function (d) {
        return '<li class="' + (d.pc < 50 ? 'lo' : d.pc < 80 ? 'mid' : 'hi') + '"><span class="no">' + (d.i + 1) + '</span><span class="tx"><b>' + esc(d.q.s.en.replace(/\[([^\]]+)\]/, '［$1］')) + '</b><small>' + esc(d.q.s.unit.course.short + '-' + (d.q.s.unit.no < 10 ? '0' : '') + d.q.s.unit.no + ' ' + d.q.s.unit.title) + '</small></span>' +
          '<span class="pc"><i style="width:' + d.pc + '%"></i><b>' + d.pc + '%</b></span></li>';
      }).join('') + '</ol></div>');
  }
  /* 📋 結果を コピー（表計算に そのまま 貼れる タブ区切り） */
  function copyResult() {
    var r = H && H.room; if (!r) return;
    var lst = playersOf(r, r.round), qz = isQuiz(r.cfg);
    var txt = ['順位\t名前\t点数\t' + (qz ? '正解数' : '語数')].concat(rowData(lst, 'now').map(function (d) { var n = String(d.p.n).replace(/[\t\r\n]/g, ' '); if (/^[=+\-@]/.test(n)) n = "'" + n; return d.rank + '\t' + n + '\t' + (d.p.s || 0) + '\t' + (d.p.w || 0); })).join('\n');
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { toast('結果をコピーしました（Excel・スプレッドシートに 貼れます）'); }, function () { toast('コピーできませんでした'); });
    else toast('コピーできませんでした');
  }
  function quizTick() { // 時間切れ・全員 回答で 自動で 答え合わせへ
    var r = H.room; if (r.state !== 'q') return;
    var n = playersOf(r, r.round).length, done = qAnswered(r).length;
    if (now() > r.qAt + qT(r.cfg) * 1000 + 600 || (n && done >= n && now() > r.qAt)) quizNext();
    else drawBoard();
  }
  /* 前の 問題からの 順位の 上がり下がり（▲2） */
  function markMoves(bb, ps, fresh) {
    var now0 = {}; rowData(ps, 'now').forEach(function (d) { now0[d.p.id] = d.rank; });
    H.rk0 = H.rk0 || {};
    if (fresh) { H.rkShow = H.rk0; H.rk0 = now0; }
    bb.querySelectorAll('li[data-id]').forEach(function (li) {
      var a = H.rkShow && H.rkShow[li.dataset.id], b = now0[li.dataset.id];
      if (a && b && a !== b) li.querySelector('.nm').insertAdjacentHTML('beforeend', ' <i class="' + (b < a ? 'rup' : 'rdn') + '">' + (b < a ? '▲' : '▼') + Math.abs(a - b) + '</i>');
    });
  }
  function drawQuizBoard(el, r) {
    var q = quizQs(r.cfg, r.seed)[r.qi], t = now(), key = r.state + '|' + r.round + '|' + r.qi;
    if (!q) return;
    var ps = playersOf(r, r.round), ans = qAnswered(r), lim = qT(r.cfg) * 1000;
    if (H.qkey === key && r.state === 'q') { // 時計と 回答数だけ 書きかえ
      var left = Math.max(0, r.qAt + lim - t), tf = $('#qzt'), tn = $('#qzs'), an = $('#qzn');
      if (tf) tf.style.width = (t < r.qAt ? 100 : left / lim * 100).toFixed(1) + '%';
      var sec = Math.ceil(left / 1000);
      if (tn) tn.textContent = t < r.qAt ? 'よーい…' : sec;
      if (t >= r.qAt && sec <= 3 && sec > 0 && H.qsec !== key + sec) { H.qsec = key + sec; FX('beep'); }
      if (tf) tf.classList.toggle('hurry', t >= r.qAt && sec <= 5);
      if (an) an.textContent = ans.length + ' / ' + ps.length;
      if (t >= r.qAt && H.qgo !== key) { H.qgo = key; FX('go'); el.classList.add('open'); }
      return;
    }
    if (H.qkey === key && r.state === 'reveal' && H.qrevN === ans.length) return; // 答え合わせは 回答数が 変わった時だけ
    H.qrevN = ans.length;
    if (H.qkey === key && r.state === 'board' && el.querySelector('.qzrk')) { // ボタンは そのまま、表だけ
      var bb0 = el.querySelector('.qzrk'), lst0 = cut(ps, topN(r.cfg), 'now');
      bb0.innerHTML = rows(lst0, 'now', bb0.clientWidth, bb0.clientHeight, ps.length - lst0.length); markMoves(bb0, ps, false);
      return;
    }
    var fresh = H.qkey !== key;
    var head = '<div class="bhead"><b>🎯 第 ' + (r.qi + 1) + ' 問 <small>/ ' + qN(r.cfg) + '</small></b>';
    var body;
    if (r.state === 'board') {
      var all = ps.length, lst = cut(ps, topN(r.cfg), 'now');
      head += '<span class="qzsub">ランキング</span></div>';
      body = '<div class="bbody qzrk"></div><div class="qzfoot"><button type="button" class="btn main big" data-ga="qnext">' + (r.qi + 1 >= qN(r.cfg) ? '🏆 結果発表 ▶' : '▶ 次の問題') + '</button></div>';
      el.innerHTML = '<div class="bh">' + head + '</div>' + body;
      var bb = el.querySelector('.bbody');
      bb.innerHTML = lst.length ? rows(lst, 'now', bb.clientWidth, bb.clientHeight, all - lst.length) : '<div class="count"><small>まだ だれも 答えていません</small></div>';
      markMoves(bb, ps, fresh);
    } else {
      var rev = r.state === 'reveal', cnt = [0, 0, 0, 0];
      ans.forEach(function (p) { if (p.a.c >= 0 && p.a.c < 4) cnt[p.a.c]++; });
      var mx = Math.max(1, Math.max.apply(null, cnt)), okN = ans.filter(function (p) { return p.a.ok; }).length, ord = q.type === 'order';
      head += rev ? '<span class="qzsub">正解 <b>' + okN + '</b> 人 / ' + ps.length + ' 人</span></div>'
        : '<span class="qzsub">回答 <b id="qzn">' + ans.length + ' / ' + ps.length + '</b></span><span class="qzsec" id="qzs">' + (t < r.qAt ? 'よーい…' : Math.ceil(lim / 1000)) + '</span></div>' +
          '<div class="tbar host"><i id="qzt" style="width:100%"></i></div>';
      body = '<div class="qzq">' + qStem(q, true) + '</div>' +
        (rev && ord ? '<div class="qzopts rev seq">' + q.ans.split('').map(function (d, k) { // 並べかえの 答え：正しい 順に 1〜4
          var i = +d; return '<div class="qo ' + QCOL[i][1] + ' ok"><span class="no4">' + (k + 1) + '</span><span class="sh">' + QCOL[i][0] + '</span><span class="tx">' + esc(q.opts[i]) + '</span></div>';
        }).join('') + '</div>'
        : '<div class="qzopts' + (q.type === 'pick' ? ' long' : '') + (rev ? ' rev' : '') + '">' + q.opts.map(function (o, i) {
          return '<div class="qo ' + QCOL[i][1] + (rev ? (i === q.ans ? ' ok' : ' no') : '') + '"><span class="sh">' + QCOL[i][0] + '</span><span class="tx">' + esc(o) + '</span>' +
            (rev ? '<span class="ct"><i style="width:' + (cnt[i] / mx * 100).toFixed(0) + '%"></i><b>' + cnt[i] + '</b></span>' + (i === q.ans ? '<span class="ck">✓</span>' : '') : '') + '</div>';
        }).join('') + '</div>') +
        (rev ? '<div class="qzwhy">' + (q.type !== 'cloze' ? '<b>' + esc(q.s.plain) + '</b>' : '') + (q.s.why ? '<span>💡 ' + esc(q.s.why) + '</span>' : '') + '</div>' +
          '<div class="qzfoot"><button type="button" class="btn ghost" data-ga="qsay">🔊 正しい英文を 聞く</button><button type="button" class="btn main big" data-ga="qnext">ランキング ▶</button></div>'
          : '<div class="qzfoot"><button type="button" class="btn ghost" data-ga="qnext">⏭ しめきる</button></div>');
      el.innerHTML = '<div class="bh">' + head + '</div>' + body;
      if (rev && fresh) FX('lead'); else if (t >= r.qAt) { el.classList.add('open'); }
    }
    el.classList.toggle('quiz', true); if (r.state !== 'q') el.classList.remove('open');
    H.qkey = key;
  }

  /* ----- 生徒 ----- */
  function quizStudent(room) {
    var Z = B.qz;
    if (!Z || Z.round !== room.round) {
      var me0 = room.players && room.players[pid()] || {};
      if (G) { clearInterval(G.timer); G = null; } // 前の ロケット対戦の 後始末
      Z = B.qz = { round: room.round, s: 0, k: 0, got: {}, ok: 0 };
      B.played = room.round; B.qzKey = '';
      if (me0.r === room.round) { // 読みこみ直し：つづきから（1 問ごとの ○✕ も もどす）
        Z.s = me0.s || 0; Z.k = me0.k || 0; Z.ok = me0.w || 0;
        var hh = me0.h || {}; Object.keys(hh).forEach(function (i) { if (hh[i] != null) Z.got[i] = { c: -1, ok: !!hh[i], p: 0 }; });
        if (me0.a && me0.a.q === room.qi) Z.got[room.qi] = { c: me0.a.c, ok: !!me0.a.ok, p: me0.a.p || 0 };
      } else { // 新しい 大会
        api('PATCH', 'rooms/' + B.code + '/players/' + pid(), { s: 0, k: 0, r: room.round, a: null, h: null, w: 0, d: 0 }).catch(function () { });
        var rb = rw(); rb.battles = Math.max(rb.battles, 1);
      }
    }
    if (room.state !== 'q' && !Z.got[room.qi]) qMiss(room); // 答えなかった
    var q = quizQs(room.cfg, room.seed)[room.qi]; if (!q) return;
    var mine = Z.got[room.qi], lim = qT(room.cfg) * 1000;
    var lst = playersOf(room, room.round), rk = rankOf(lst, pid(), 'now') || lst.length;
    // 1. 画面は 場面が 変わった時だけ 作りなおす（ほかの人の 回答で 作りなおすと、押している ボタンが 消えて タップが 失われる）
    var key = room.state + '|' + room.round + '|' + room.qi + '|' + !!mine;
    if (B.qzKey === key && $('.qzs')) {
      var e1 = $('#qzrk'), e2 = $('#qzrn'); if (e1) e1.textContent = rk; if (e2) e2.textContent = lst.length;
      return;
    }
    B.qzKey = key;
    clearInterval(B.qzT);
    var head = '<div class="unit qzs"><div class="ubar"><button type="button" class="btn ghost" data-ga="bleave">◀ ぬける</button><div class="utitle"><small>🎯 クイズ大会・部屋 ' + B.code + '</small><b>第 ' + (room.qi + 1) + ' 問 / ' + qN(room.cfg) + '</b></div><span class="ppl">' + fmt(Z.s) + ' 点</span></div><section class="card"><div class="cin">';
    var mid;
    if (room.state === 'q' && !mine) {
      var open = now() >= room.qAt;
      mid = '<div class="tbar"><i id="qzt" style="width:100%"></i><span id="qzs"></span></div>' +
        '<div class="qzq">' + qStem(q) + '</div>' +
        '<div class="qzbtns' + (q.type === 'pick' ? ' long' : '') + '">' + q.opts.map(function (o, i) {
          return '<button type="button" class="qb ' + QCOL[i][1] + '" data-qa="' + i + '"' + (open ? '' : ' disabled') + '><span class="sh">' + QCOL[i][0] + '</span><span class="tx">' + esc(o) + '</span></button>';
        }).join('') + '</div>' +
        (q.type === 'order' ? '<div class="qzseq"><span id="qzsq">タップした 順： </span><button type="button" class="btn ghost" data-ga="qreset">↺ やり直す</button></div>' : '');
      B.qzSeq = [];
      B.qzT = setInterval(function () { // 時計（よーい → 開始 → 残り時間）
        var t = now(), tf = $('#qzt'), ts = $('#qzs'); if (!tf) { clearInterval(B.qzT); return; }
        if (t < room.qAt) { ts.textContent = 'よーい…'; return; }
        if (!B.qzOpen || B.qzOpen !== room.qi + '|' + room.round) { B.qzOpen = room.qi + '|' + room.round; FX('go'); document.querySelectorAll('.qb').forEach(function (b) { b.disabled = false; }); }
        var left = Math.max(0, room.qAt + lim - t); tf.style.width = (left / lim * 100).toFixed(1) + '%'; ts.textContent = Math.ceil(left / 1000) + ' 秒';
        if (!left) { clearInterval(B.qzT); qMiss(room); quizStudent(room); }
      }, 100);
    } else if (room.state === 'q') {
      var cc = typeof mine.c === 'string' ? -2 : mine.c; // -2：並べかえ
      mid = '<div class="qzwait"><span class="qb big ' + (cc >= 0 ? QCOL[cc][1] : cc === -2 ? 'seq' : 'none') + '"><span class="sh">' + (cc >= 0 ? QCOL[cc][0] : cc === -2 ? '🧩' : '⌛') + '</span></span>' +
        '<p class="h">' + (cc !== -1 ? '回答しました！' : '時間切れ…') + '</p><p class="note">先生の 画面で 答え合わせを 待っています</p></div>';
    } else if (room.state === 'reveal') {
      var ok = mine && mine.ok;
      var awk = B.code + '|' + room.round + '|' + room.qi, sv = S(); sv.qzAw = sv.qzAw || [];
      if (Z.shown !== awk) {
        Z.shown = awk; FX(ok ? 'ok' : 'miss'); if (ok && window.LXFX) LXFX.burst(40);
        if (ok && sv.qzAw.indexOf(awk) < 0) { sv.qzAw = sv.qzAw.concat(awk).slice(-60); earn(10); }
      }
      mid = '<div class="qzres ' + (ok ? 'ok' : 'ng') + '"><b class="mk">' + (ok ? '⭕ 正解！' : mine && mine.c !== -1 ? '❌ ざんねん' : '⌛ 時間切れ') + '</b>' +
        (ok ? '<p class="pt">+' + fmt(mine.p) + ' 点' + (Z.k >= 2 ? '　<span class="fire">🔥 ' + Z.k + ' 連続</span>' : '') + '</p>' : '') +
        (!ok && mine && mine.c !== -1 && mine.c != null ? '<p class="mine">あなたの 答え：' + (typeof mine.c === 'string' ? mine.c.split('').map(function (k) { return QCOL[+k][0]; }).join(' → ') : QCOL[mine.c][0] + ' ' + esc(q.type === 'pick' ? q.opts[mine.c] : q.opts[mine.c])) + '</p><p class="note">正しい 答え ↓</p>' : '') +
        '<p class="ans">' + (q.type === 'order' ? '' : '<span class="sh ' + QCOL[q.ans][1] + '">' + QCOL[q.ans][0] + '</span> ') + esc(q.type === 'cloze' ? q.opts[q.ans] : q.s.plain) + '</p>' +
        (q.s.why ? '<p class="note">💡 ' + esc(q.s.why) + '</p>' : '') +
        '<p class="rk"><small>いま</small><b id="qzrk">' + rk + '</b><small>位 / <span id="qzrn">' + lst.length + '</span> 人</small></p></div>';
    } else { // board
      mid = '<div class="qzres"><p class="rk big"><small>いま</small><b id="qzrk">' + rk + '</b><small>位 / <span id="qzrn">' + lst.length + '</span> 人</small></p><p class="pt">' + fmt(Z.s) + ' 点</p><p class="note">次の 問題を 待っています</p></div>';
    }
    A().view.innerHTML = head + mid + '</div></section></div>';
  }
  /* 生徒：クイズの おわりに「まちがえた 問題」と 正しい 英文（最大 3 つ） */
  function quizMissed(room) {
    if (!isQuiz(room.cfg) || !B || !B.qz || B.qz.round !== room.round) return '';
    var qs = quizQs(room.cfg, room.seed), miss = Object.keys(B.qz.got).filter(function (i) { return !B.qz.got[i].ok && qs[i]; });
    if (!miss.length) return B.qz.ok >= qN(room.cfg) ? '<p class="qmiss ok">🎉 全問 正解！</p>' : '';
    return '<div class="qmiss"><b>📝 まちがえた 問題（' + miss.length + '）</b>' + miss.slice(0, 3).map(function (i) {
      var s = qs[i].s; return '<p><span>' + esc(s.ja) + '</span>' + esc(s.en.split('[')[0]) + '<em>' + esc(s.key) + '</em>' + esc(s.en.split(']')[1] || '') + '</p>';
    }).join('') + (miss.length > 3 ? '<small>ほか ' + (miss.length - 3) + ' 問</small>' : '') + '</div>';
  }
  /* 答えなかった（時間切れ）：連続正解を 0 に して 記録にも のこす */
  function qMiss(room) {
    var Z = B.qz; if (!Z || Z.got[room.qi]) return;
    Z.got[room.qi] = { c: -1, ok: false, p: 0 }; Z.k = 0;
    var o = { k: 0, a: { q: room.qi, c: -1, ok: 0, p: 0 } }; o['h/' + room.qi] = 0;
    api('PATCH', 'rooms/' + B.code + '/players/' + pid(), o).catch(function () { });
  }
  function quizAnswer(i) {
    var room = B && B.room; if (!room || room.state !== 'q' || !B.qz) return;
    var Z = B.qz, t = now() - room.qAt, lim = qT(room.cfg) * 1000;
    if (Z.got[room.qi] || t < 0 || t > lim + 300) return;
    var q = quizQs(room.cfg, room.seed)[room.qi];
    if (q.type === 'order') { // 4 つを 順に。そろったら 送る
      var sq = B.qzSeq = B.qzSeq || []; if (sq.indexOf(i) >= 0) return;
      sq.push(i); FX('tap', sq.length * 4);
      var bt = document.querySelector('.qb[data-qa="' + i + '"]'); if (bt) { bt.classList.add('picked'); bt.setAttribute('data-n', sq.length); }
      var lb = $('#qzsq'); if (lb) lb.textContent = 'タップした 順： ' + sq.map(function (k) { return QCOL[k][0]; }).join(' → ');
      if (sq.length < 4) return;
      i = sq.join('');
    }
    var ok = q.type === 'order' ? i === q.ans : i === q.ans, p = ok ? qPts(t, lim, Z.k) : 0;
    Z.k = ok ? Z.k + 1 : 0; Z.s += p; if (ok) Z.ok++;
    Z.got[room.qi] = { c: i, ok: ok, p: p };
    FX('tap', 0);
    var me = room.players && room.players[pid()] || {};
    var body = { s: Z.s, k: Z.k, r: room.round, b: Math.max(me.b || 0, Z.s), w: Z.ok, a: { q: room.qi, c: i, ok: ok ? 1 : 0, p: p } }, path = 'rooms/' + B.code + '/players/' + pid();
    body['h/' + room.qi] = ok ? 1 : 0;
    api('PATCH', path, body).catch(function () { setTimeout(function () { api('PATCH', path, body).catch(function () { toast('答えを 送れませんでした。電波を たしかめてね'); }); }, 800); });
    quizStudent(room);
  }

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
      else if (b.dataset.pk) pickerClick(b.dataset.pk);
      else if (b.dataset.hs) hostSetClick(b.dataset.hs);
    });
    gdlg.addEventListener('click', function (e) { var bd = e.target.closest('.bd[data-how]'); if (bd) toast(bd.dataset.how); }); // バッジを タップで 取り方（スマホは title が 見えない）
    A().view.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      var d = b.dataset;
      if (d.gt != null && G) { tapTile(+d.gt, b); return; }
      if (d.gp != null && G) { pickChoice(+d.gp, b); return; }
      if (d.qa != null && B) { quizAnswer(+d.qa); return; }
      if (d.ta) { hubTa(d.ta); return; }
      if (d.hc) { hostCfg(d.hc); return; }
      if (d.kick && H) { // 先生：名前を タップで 部屋から はずす（ふさわしくない ニックネーム対策）
        var kp = H.room && H.room.players && H.room.players[d.kick];
        if (kp && confirm('「' + kp.n + '」さんを 部屋から はずしますか？（その生徒は 名前を 入れ直して 入れます）')) api('DELETE', 'rooms/' + H.code + '/players/' + d.kick).catch(function () { toast('はずせませんでした'); });
        return;
      }
      switch (d.ga && d.ga.split(':')[0]) {
        case 'solo': if (location.hash === '#ta') startSolo(); else location.hash = '#ta'; break;
        case 'again': startSolo(); break;
        case 'spick': soloPick(); break;
        case 'brag': brag(G && G.share || ''); break;
        case 'quit': leave(); leaveBattle(); if (location.hash === '#game') renderHub(); else location.hash = '#game'; break;
        case 'rewards': openRewards(); break;
        case 'settings': openSettings(); break;
        case 'join': join(); break;
        case 'mkroom': makeRoom(d.ga.split(':')[1]); break;
        case 'qreset': if (B) { B.qzSeq = []; document.querySelectorAll('.qb.picked').forEach(function (x) { x.classList.remove('picked'); x.removeAttribute('data-n'); }); var lb = $('#qzsq'); if (lb) lb.textContent = 'タップした 順： '; } break;
        case 'qsay': { var rq = H && H.room, qq = rq && quizQs(rq.cfg, rq.seed)[rq.qi]; if (qq) A().speak(qq.s.plain); break; }
        case 'hstart': hostStart(); break;
        case 'qnext': quizNext(); break;
        case 'qstat': quizStat(); break;
        case 'hcsv': copyResult(); break;
        case 'hcopy': {
          var u = joinUrl(H.code);
          if (navigator.clipboard) navigator.clipboard.writeText(u).then(function () { toast('参加リンクをコピーしました'); }, function () { toast(u); }); else toast(u);
          break;
        }
        case 'hclose':
          if (confirm('部屋 ' + H.code + ' を閉じますか？（ランキングも消えます）')) { var c = H.code; leave(); api('DELETE', 'rooms/' + c).then(function () { location.hash = '#game'; }, function () { location.hash = '#game'; }); }
          break;
        case 'tab': H.tab = d.ga.split(':')[1]; drawBoard(); break;
        case 'hpick': hostPick(); break;
        case 'hset': openHostSet(); break;
        case 'podium': if (H && H.room) showPodium(H.room); break;
        case 'bleave': leaveBattle(); leave(); location.hash = '#game'; break;
      }
    });
    document.addEventListener('pointerdown', function () { if (window.LXFX) LXFX.unlock(); }, { once: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && $('#show')) closeShow(); });
    A().view.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.target.id === 'jName' || e.target.id === 'jCode')) join();
    });
    document.addEventListener('keydown', function (e) { // 先生：プレゼン用 リモコン（PageDown）・→・スペースで クイズを 次へ
      if (!H || !H.room || !isQuiz(H.room.cfg) || gdlg.open || $('#show') || /INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName || '')) return;
      if (/^(q|reveal|board)$/.test(H.room.state) && (e.key === 'PageDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter')) {
        if (H.room.state === 'q' && now() < H.room.qAt) return; // 問題を 読む 時間は とばさない
        e.preventDefault(); quizNext();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (!G && B && B.qz && /^[1-4]$/.test(e.key) && $('.qb:not([disabled])')) { quizAnswer(+e.key - 1); return; }
      if (!G || G.over || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName || '')) return;
      if (G.q && G.q.type === 'cloze' && /^[1-4]$/.test(e.key) && now() >= G.startAt) pickChoice(+e.key - 1);
    });
    chip();
  }

  window.LXG = { route: route, leave: function () { leave(); }, earn: earn, init: init, count: function () { rw().cnt++; }, _g: function () { return G; }, _qz: function () { return B && B.room ? quizQs(B.room.cfg, B.room.seed)[B.room.qi] : null; } };
})();
