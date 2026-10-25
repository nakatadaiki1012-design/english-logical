/* 論理表現ラボ：画面の動き
   覚え方の流れ：💡わかる → 🗣声に出す → 🧩組み立てる → ✏️えらぶ → ⚡思い出す → 🏁テスト → 🔁間をあけて復習 */
(function () {
  'use strict';

  /* ---------- 教材の準備 ---------- */
  var COURSES = (window.LX && window.LX.courses || []).slice().sort(function (a, b) { return a.id < b.id ? -1 : 1; });
  var UNITS = {}, SENTS = {}, PLUS = window.LX && window.LX.plus || {}, MORE = window.LX && window.LX.more || {};
  function prep(s, u, id) {
    s.id = id; s.unit = u;
    s.plain = s.en.replace(/[\[\]]/g, '');
    var m = s.en.match(/\[([^\]]+)\]/);
    s.key = m ? m[1] : '';
  }
  COURSES.forEach(function (c) {
    c.units.forEach(function (u, i) {
      u.course = c; u.no = i + 1; UNITS[u.id] = u;
      var px = PLUS[u.id]; // 追加教材：ひとことで言うと・わかりやすいポイント・演習 12 文
      if (px) { if (px.core) u.core = px.core; if (px.points && px.points.length) u.points = px.points; u.drills = px.drills || []; }
      u.drills = (u.drills || []).concat(MORE[u.id] || []); // 長めの 演習文（js/more）も 演習・ゲームに 足す
      u.sentences.forEach(function (s, j) {
        prep(s, u, u.id + '-' + (j + 1)); SENTS[s.id] = s;
        var w = px && px.swhy && px.swhy[j]; if (w) { s.why = w.why; s.p = w.p; }
      });
      u.drills.forEach(function (s, j) { prep(s, u, u.id + '-d' + (j + 1)); });
    });
  });

  var STEPS = [
    { k: 'point', ico: '💡', name: 'ポイント', what: 'わかる' },
    { k: 'learn', ico: '🗣', name: '音読', what: '声に出す' },
    { k: 'order', ico: '🧩', name: '並べかえ', what: '組み立てる' },
    { k: 'cloze', ico: '✏️', name: '穴うめ', what: 'えらぶ' },
    { k: 'recall', ico: '⚡', name: '英作文', what: '思い出す' },
    { k: 'drill', ico: '💪', name: '演習', what: '数をこなす' },
    { k: 'test', ico: '🏁', name: 'テスト', what: 'たしかめる' }
  ];
  var IV = [0, 1, 2, 4, 7, 15, 30]; // 復習の間隔（日）。3回以上「言えた」で定着
  var TEST_N = 5, PASS = 4;

  /* ---------- 記録（この端末のブラウザに保存） ---------- */
  var KEY = 'lxlab-v1';
  function blank() { return { course: COURSES[0] ? COURSES[0].id : 'c1', prog: {}, srs: {}, theme: '', size: 1, rate: 0.9, task: null, name: '', last: '' }; }
  var S = (function () {
    try { var v = JSON.parse(localStorage.getItem(KEY)); if (v && typeof v === 'object') return Object.assign(blank(), v); } catch (e) { }
    return blank();
  })();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  function prog(uid) { return S.prog[uid] || (S.prog[uid] = { st: {}, best: 0, pass: 0, at: '', sec: 0, tries: 0 }); }
  function dayNo() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); }
  function today() { var d = new Date(); return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(); }
  function dueIds() { var t = dayNo(); return Object.keys(S.srs).filter(function (id) { return SENTS[id] && S.srs[id].due <= t; }); }
  function learned(cid) { return Object.keys(S.srs).filter(function (id) { return SENTS[id] && (!cid || SENTS[id].unit.course.id === cid) && S.srs[id].b >= 3; }).length; }
  function grade(id, g) { // 0 まだ / 1 あやしい / 2 言えた
    var c = S.srs[id] || { b: 0, due: 0, n: 0 }, t = dayNo();
    if (g === 2) { c.b = Math.min(c.b + 1, IV.length - 1); c.due = t + Math.max(1, IV[c.b]); }
    else if (g === 1) { c.b = Math.max(0, c.b - 1); c.due = t + 1; }
    else { c.b = 0; c.due = t; }
    c.n = (c.n || 0) + 1; S.srs[id] = c; save(); badge();
    if (window.LXG) LXG.count(); earn([1, 2, 5][g]);
  }
  function earn(n) { if (window.LXG) LXG.earn(n); }
  function enroll(id, due) { if (!S.srs[id]) { S.srs[id] = { b: 0, due: due, n: 0 }; } }

  /* ---------- 小さな道具 ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  /* 並べかえの カード：最初から 正しい 順に ならんで いたら まぜ直す（同じ 語が 2 枚 あっても 見た目で くらべる） */
  function scramble(tiles) {
    var idx = tiles.map(function (_, i) { return i; }), o = idx, k = 0;
    if (tiles.length < 2) return idx;
    do { o = shuffle(idx); k++; } while (k < 20 && o.every(function (i, pos) { return tiles[i] === tiles[pos]; }));
    return o;
  }
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function hash(str) { var h = 7; for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
  function toast(msg) {
    // ダイアログが 開いていたら その中に 出す（後ろに かくれないように）。長い 文は 長めに 出す
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; (document.querySelector('dialog[open]') || document.body).appendChild(t);
    setTimeout(function () { t.remove(); }, Math.min(4500, 1600 + String(msg).length * 45));
  }
  function whyB(has) { return has ? ' <button type="button" class="whyb" data-act="why">🤔 なぜ？</button>' : ''; }
  function hasWhy(s) { var u = s && s.unit, pt = u && u.points[s.p || 0]; return !!(s && (s.why || (pt && (pt.why || pt.easy)))); }
  function hl(en) { return esc(en).replace(/\[([^\]]+)\]/, '<mark>$1</mark>'); }
  function blankEn(s, fill, ok) {
    var b = '<span class="blank' + (ok ? ' ok' : '') + '">' + (fill ? esc(fill) : '&nbsp;') + '</span>';
    return esc(s.en).replace(/\[[^\]]+\]/, b);
  }
  function minutes(sec) { return sec ? Math.max(1, Math.round(sec / 60)) + '分' : '0分'; }

  /* 声（英語の読み上げ） */
  var hasTTS = 'speechSynthesis' in window;
  function voice() {
    var vs = hasTTS ? speechSynthesis.getVoices() : [];
    return vs.filter(function (v) { return /^en[-_]US/i.test(v.lang); })[0] || vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  function speak(text) {
    if (!hasTTS) { toast('この端末では読み上げが使えません'); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/[\[\]]/g, ''));
    u.lang = 'en-US'; u.rate = S.rate; var v = voice(); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }

  /* 並べかえのカード（大事な所はひとかたまり。多すぎるときは となりとくっつけて 7 枚まで） */
  var LOWER = /^(The|A|An|It|Its|This|That|These|Those|My|Your|His|Her|Our|Their|He|She|We|They|You|There|Here|If|When|While|Although|Though|Because|Since|However|First|Second|Third|Finally|Also|In|On|At|For|By|With|Some|Many|Most|All|Each|Every|What|Who|Whose|Which|How|Why|Where|Do|Does|Did|Is|Are|Was|Were|Have|Has|Had|Can|Could|Will|Would|Should|May|Might|Must|Not|No|Never|Only|Unless|As|To|One|Even|Let|Please|Thank|Thanks|After|Before|According|Compared|Without|Not|So|Therefore|Moreover|Furthermore|Besides|Instead|Overall|Today|Recently|Studying|Reading|Playing|Learning|Being|Having|Seen|Seeing|Living|Using)$/;
  function tilesOf(s) {
    var m = s.en.match(/^(.*?)\[([^\]]+)\](.*)$/);
    var toks = [];
    function add(str, k) { str.trim().split(/\s+/).forEach(function (w) { if (w) toks.push({ t: w, k: k }); }); }
    add(m[1], 0); toks.push({ t: m[2].trim(), k: 1 }); add(m[3], 0);
    // 「,」だけのカードは 前のカードに くっつける（In my opinion, など）
    for (var q = toks.length - 1; q > 0; q--) if (/^[,;:]+$/.test(toks[q].t)) { toks[q - 1].t += toks[q].t; toks.splice(q, 1); }
    var end = '', last = toks[toks.length - 1], pm = last.t.match(/^(.*?)([.?!]+)$/);
    if (pm) { end = pm[2]; last.t = pm[1]; if (!last.t) toks.pop(); }
    var f = toks[0], fw = f.t.split(' ')[0];
    if (LOWER.test(fw.replace(/[,]$/, ''))) f.t = fw.charAt(0).toLowerCase() + f.t.slice(1);
    while (toks.length > 7) {
      var best = -1, bl = 1e9;
      for (var i = 0; i < toks.length - 1; i++) {
        if (toks[i].k || toks[i + 1].k) continue;
        var l = toks[i].t.length + toks[i + 1].t.length + (/[,;:]$/.test(toks[i].t) ? 100 : 0); // 文の切れ目はまたがない
        if (l < bl) { bl = l; best = i; }
      }
      if (best < 0) best = toks[0].k ? 1 : 0;
      toks.splice(best, 2, { t: toks[best].t + ' ' + toks[best + 1].t, k: 0 });
    }
    return { tiles: toks.map(function (x) { return x.t; }), end: end };
  }

  /* 音読：回数がふえるほど 単語をかくす（最後は頭文字だけ → 暗唱） */
  function hideEn(s, level) {
    if (!level) return hl(s.en);
    var seed = hash(s.id), out = [], inKey = false;
    s.en.split(' ').forEach(function (w, i) {
      var open = w.indexOf('[') >= 0, close = w.indexOf(']') >= 0;
      if (open) inKey = true;
      var key = inKey; if (close) inKey = false;
      var core = w.replace(/[\[\]]/g, '');
      var hide = level >= 3 || key || ((seed >> (i % 24)) + i * 7) % 3 < level;
      if (!hide) { out.push(esc(core)); return; }
      var mm = core.match(/^([^A-Za-z']*)([A-Za-z'][A-Za-z'\-]*)(.*)$/);
      if (!mm) { out.push(esc(core)); return; }
      var word = mm[2], masked = word.charAt(0) + word.slice(1).replace(/[A-Za-z]/g, '_');
      out.push(esc(mm[1]) + '<span class="hid' + (key ? ' key' : '') + '">' + esc(masked) + '</span>' + esc(mm[3]));
    });
    return out.join(' ');
  }

  /* ---------- 見た目の設定 ---------- */
  function applyLook() {
    var r = document.documentElement;
    if (S.theme) r.setAttribute('data-theme', S.theme); else r.removeAttribute('data-theme');
    r.setAttribute('data-size', S.size);
  }
  $('#brand').onclick = function () { go('#' + S.course); };
  $('#btnReview').onclick = function () { go('#review'); };
  $('#btnTask').onclick = function () { openTask(); };

  function badge() { var n = dueIds().length; $('#dueBadge').textContent = n ? n : ''; }
  function nav() {
    $('#cnav').innerHTML = COURSES.map(function (c) {
      return '<button type="button" data-c="' + c.id + '" aria-current="' + (c.id === S.course) + '">' + esc(c.short) + '<span class="full">' + esc(c.name.replace(/[ⅠⅡⅢ]$/, '').replace('論理表現', '')) + '</span></button>';
    }).join('');
  }
  $('#cnav').onclick = function (e) { var b = e.target.closest('button[data-c]'); if (b) { S.course = b.dataset.c; save(); go('#' + S.course); } };

  /* ---------- 画面の切りかえ（#c1 ／ #c1-u03 ／ #c1-u03/order ／ #review） ---------- */
  var V = {};
  var view = $('#view');
  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  function route() {
    if (hasTTS) speechSynthesis.cancel();
    ['dlg', 'gdlg'].forEach(function (id) { var d = document.getElementById(id); if (d && d.open && !d.querySelector('#hsetdlg')) d.close(); }); // 画面が 変わったら ダイアログは とじる
    if (window.LXG) LXG.leave();
    var h = decodeURIComponent(location.hash.slice(1));
    if (h.indexOf('task=') === 0) { takeTask(h.slice(5)); return; }
    if (window.LXG && LXG.route(h)) { clearInterval(timer); V = { view: 'game' }; document.body.setAttribute('data-view', 'game'); nav(); badge(); return; }
    var p = h.split('/');
    if (UNITS[p[0]]) {
      var u = UNITS[p[0]], st = STEPS.some(function (x) { return x.k === p[1]; }) ? p[1] : firstStep(u);
      S.course = u.course.id; S.last = u.id; save();
      openUnit(u, st);
    } else if (p[0] === 'review') {
      openReview();
    } else {
      var c = COURSES.filter(function (x) { return x.id === p[0]; })[0];
      if (c) { S.course = c.id; save(); }
      V = { view: 'home' }; renderHome();
    }
    document.body.setAttribute('data-view', V.view || 'home');
    nav(); badge();
  }
  function firstStep(u) {
    var st = prog(u.id).st;
    for (var i = 0; i < STEPS.length; i++) if (!st[STEPS[i].k]) return STEPS[i].k;
    return 'point';
  }
  function course() { return COURSES.filter(function (c) { return c.id === S.course; })[0] || COURSES[0]; }

  /* ---------- ホーム ---------- */
  function renderHome() {
    var c = course(), passed = c.units.filter(function (u) { return prog(u.id).pass; }).length;
    var nsent = c.units.length * 6, due = dueIds().length;
    var next = UNITS[S.last] && UNITS[S.last].course === c && !prog(S.last).pass ? UNITS[S.last] : c.units.filter(function (u) { return !prog(u.id).pass; })[0];
    var task = S.task && S.task.c === c.id ? S.task : null, taskIds = task ? task.u : [];
    var tnext = taskIds.filter(function (id) { return UNITS[id] && !prog(id).pass; })[0]; // 課題の 単元が 先
    if (tnext) next = UNITS[tnext];
    var tb = '';
    if (S.task) {
      var tp = S.task.u.filter(function (id) { return UNITS[id] && prog(id).pass; }).length;
      tb = '<div class="taskbox">📮 <span>課題 <b>' + tp + '/' + S.task.u.length + '</b> 合格' + (S.task.d ? '・しめきり ' + esc(S.task.d.replace(/^\d+-0?(\d+)-0?(\d+)$/, '$1/$2')) : '') + '</span><button type="button" class="btn" data-act="task">見る</button></div>';
    }
    view.innerHTML =
      '<div class="home">' +
      '<section class="panel hero">' +
      '<div class="top2"><h2 class="cname">' + esc(c.name) + '</h2>' +
      '<div class="stats">' +
      '<div class="stat"><b>' + passed + '<small>/' + c.units.length + '</small></b><small>合格した単元</small></div>' +
      '<div class="stat"><b>' + learned(c.id) + '<small>/' + nsent + '</small></b><small>定着した例文</small></div>' +
      '<div class="stat"><b>' + due + '</b><small>今日の復習</small></div>' +
      '</div></div>' +
      '<p class="cdesc">' + esc(c.desc) + '</p>' + tb +
      // はじめての人だけ：スマホでも 1 単元の 進め方を 1 行で
      (Object.keys(UNITS).some(function (id) { var st = prog(id).st; return st && Object.keys(st).length; }) ? '' :
        '<p class="firstrun">はじめての人へ：単元を えらんで ' + STEPS.map(function (x) { return x.ico; }).join('→') + ' の 順に 進もう</p>') +
      '<div class="acts">' +
      (next ? '<button type="button" class="btn main" data-go="' + next.id + '">▶ ' + (prog(next.id).sec ? '続きから' : 'はじめる') + '：' + esc(next.title) + '</button>' : '<button type="button" class="btn main" data-act="review">🎉 全単元 合格！ 復習しよう</button>') +
      '<button type="button" class="btn' + (due ? ' warm' : '') + '" data-act="review">🔁 今日の復習' + (due ? '（' + due + '文）' : '') + '</button>' +
      '<button type="button" class="btn gamebtn" data-go="game">🎮 タイムアタック・クラス対戦</button>' +
      '</div>' +
      '<div class="cycle"><h3>おぼえ方（1 単元＝' + STEPS.length + ' ステップ）</h3><ol>' +
      STEPS.map(function (s) { return '<li><span>' + s.ico + '</span><b>' + s.name + '</b><span>' + s.what + '</span></li>'; }).join('') +
      '<li><span>🔁</span><b>復習</b><span>日をあけて 思い出す（忘れる前に）</span></li>' +
      '</ol></div>' +
      '</section>' +
      '<section class="grid" aria-label="単元">' +
      c.units.map(function (u) {
        var pr = prog(u.id), isT = taskIds.indexOf(u.id) >= 0;
        return '<button type="button" class="tile' + (isT ? ' task' : '') + '" data-go="' + u.id + '">' +
          '<span class="no">' + esc(c.short) + '-' + two(u.no) + (isT ? ' <span class="tk">📮課題</span>' : '') + '</span>' +
          '<span class="tg' + (u.tag === '表現' ? ' ex' : '') + '">' + esc(u.tag) + '</span>' +
          '<b>' + esc(u.title) + '</b><small>' + esc(u.en) + '</small><span class="gl">' + esc(u.goal) + '</span>' +
          '<span class="pips">' + STEPS.map(function (s) { return '<i class="' + (pr.st[s.k] ? 'on' : '') + '"></i>'; }).join('') + '</span>' +
          (pr.pass ? '<span class="stamp">合格</span>' : '') +
          '</button>';
      }).join('') +
      '</section></div>';
  }

  /* ---------- 単元 ---------- */
  var timer = null;
  function tick() {
    clearInterval(timer);
    timer = setInterval(function () {
      if (document.hidden) return;
      if (V.view === 'unit') { prog(V.u.id).sec += 5; save(); }
    }, 5000);
  }
  function openUnit(u, st) {
    V = { view: 'unit', u: u, step: st, page: 0, a: {} };
    if (st === 'test') newTest();
    if (st === 'drill') newDrill();
    tick(); renderUnit();
  }
  /* ポイントのページ：ひとことで言うと → ポイント 3 枚 → まちがえやすいところ → まとめ */
  function pointPages(u) {
    var pg = [];
    if (u.core) pg.push('core');
    u.points.forEach(function (_, i) { pg.push(i); });
    if (u.points.some(function (p) { return p.ng; })) pg.push('ng');
    pg.push('sum');
    return pg;
  }
  function pagesOf() {
    var u = V.u;
    switch (V.step) {
      case 'point': return pointPages(u).length;
      case 'test': return TEST_N + 1;
      case 'drill': return V.dr.length + 1;
      default: return u.sentences.length;
    }
  }
  /* 演習：同じ型の例文（12 文）を 並べかえ・穴うめ 交互に */
  function drillPool(u) { return u.drills.length ? u.drills : u.sentences; }
  function newDrill() {
    var flip = Math.random() < 0.5;
    // 演習文（36 文）から 毎回 ちがう 12 問
    V.dr = shuffle(drillPool(V.u)).slice(0, 12).map(function (s, i) { return { s: s, type: (i % 2 === 0) === flip ? 'order' : 'cloze' }; });
    V.a = {}; V.page = 0;
  }
  function curS() {
    if (V.step === 'test') return V.test[V.page].s;
    if (V.step === 'drill') return V.dr[V.page].s;
    return V.u.sentences[V.page];
  }
  function setStep(k) { location.hash = '#' + V.u.id + '/' + k; }
  function markDone(k) { var pr = prog(V.u.id); if (!pr.st[k]) { pr.st[k] = 1; save(); } }
  function ans() { return V.a[V.page] || (V.a[V.page] = {}); }
  function answered() {
    var a = V.a[V.page] || {};
    if (V.step === 'order' || V.step === 'cloze') return a.done;
    if (V.step === 'drill') return V.page >= V.dr.length || a.done;
    if (V.step === 'recall') return a.g != null;
    if (V.step === 'test') return V.page >= TEST_N || a.done;
    return true;
  }
  function nextPage() {
    var n = pagesOf();
    if (V.step === 'test' && V.page >= TEST_N) return;
    if (!answered()) { toast('答えてから進もう'); return; }
    if (V.page < n - 1) {
      V.page++;
      if (V.step === 'drill' && V.page === V.dr.length) finishDrill();
      renderUnit(); autoSpeak(); return;
    }
    markDone(V.step);
    var i = STEPS.map(function (s) { return s.k; }).indexOf(V.step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1].k);
  }
  function prevPage() { if (V.page > 0) { V.page--; renderUnit(); } }
  function autoSpeak() {
    if (V.step === 'learn') speak(V.u.sentences[V.page].en);
  }

  function renderUnit() {
    var u = V.u, c = u.course, pr = prog(u.id), n = pagesOf();
    var dots = '';
    for (var i = 0; i < n; i++) {
      var a = V.a[i] || {}, cls = i === V.page ? 'on' : (a.ok === true ? 'ok' : a.ok === false ? 'ng' : '');
      dots += '<i class="' + cls + '"></i>';
    }
    var last = V.page === n - 1, isRes = V.step === 'test' && V.page >= TEST_N;
    if (V.step === 'drill' && last) { isRes = false; }
    var nextLabel = last ? (V.step === 'test' ? '' : '次のステップ ▶') : '次へ ▶';
    view.innerHTML =
      '<div class="unit">' +
      '<div class="ubar"><button type="button" class="btn ghost" data-act="home" title="単元の一覧へ">◀ 一覧</button>' +
      '<div class="utitle"><small>' + esc(c.name) + '・' + two(u.no) + '・' + esc(u.tag) + '</small><b>' + esc(u.title) + '</b></div>' +
      '<nav class="steps" aria-label="ステップ">' + STEPS.map(function (s) {
        return '<button type="button" data-step="' + s.k + '" class="' + (pr.st[s.k] ? 'done' : '') + '" aria-current="' + (s.k === V.step) + '">' + s.ico + '<span class="n">' + s.name + '</span></button>';
      }).join('') + '</nav></div>' +
      '<section class="card" id="card"><div class="cin' + (V.step === 'point' ? ' pt' : '') + '">' + cardHTML() + '</div></section>' +
      '<div class="fbar">' +
      '<button type="button" class="btn ghost" data-act="prev"' + (V.page === 0 || isRes ? ' disabled' : '') + '>◀</button>' +
      '<div class="dots">' + dots + '</div>' +
      '<span class="kbd">← → で移動</span>' +
      (isRes ? '<button type="button" class="btn ghost next" data-act="home">一覧へ</button>' :
        '<button type="button" class="btn main next" data-act="next">' + nextLabel + '</button>') +
      '</div></div>';
    if (window.LXFIG) LXFIG.after(view);
  }

  function cardHTML() {
    var u = V.u, s, a = ans();
    switch (V.step) {
      case 'point': {
        var pg = pointPages(u)[V.page], fig = window.LXFIG ? LXFIG.html : function () { return ''; };
        if (pg === 'core') {
          var co = u.core;
          return '<div class="lab"><span class="pill">✨ ひとことで言うと</span><span>' + esc(u.en) + '</span><span class="r">🎯 ' + esc(u.goal) + '</span></div>' +
            '<div class="mid core"><div class="coreh"><span class="cico">' + esc(co.ico) + '</span><h3 class="h catch">' + esc(co.catch) + '</h3></div>' +
            '<p class="body">' + esc(co.say) + '</p>' + fig(co.fig) + '</div>';
        }
        if (typeof pg === 'number') {
          var p = u.points[pg];
          return '<div class="lab"><span class="pill">💡 ポイント ' + (pg + 1) + '/' + u.points.length + '</span><span>' + esc(u.en) + '</span>' +
            (p.why || p.easy ? '<span class="r">' + whyB(true) + '</span>' : (!u.core && pg === 0 ? '<span class="r">🎯 ' + esc(u.goal) + '</span>' : '')) + '</div>' +
            '<div class="mid' + (p.fig ? ' hasfig' : '') + '"><h3 class="h">' + esc(p.h) + '</h3><p class="body">' + esc(p.body) + '</p>' +
            (p.form ? '<div class="form">' + esc(p.form) + '</div>' : '') + (p.fig ? fig(p.fig) : '') +
            '<div class="exb"><button type="button" class="say mini" data-say="' + esc(p.ex) + '" title="聞く">🔊</button><div><p class="en sm">' + hl(p.ex) + '</p><p class="ja">' + esc(p.exja) + '</p></div></div></div>';
        }
        if (pg === 'ng') {
          return '<div class="lab"><span class="pill">⚠ まちがえやすいところ</span><span>テストで ねらわれる！</span></div>' +
            '<div class="mid"><ul class="nglist">' + u.points.filter(function (p) { return p.ng; }).map(function (p) {
              return '<li><p class="bad">✕ ' + esc(p.ng.bad) + '</p><p class="good">○ ' + esc(p.ng.good) + '</p><p class="why">' + esc(p.ng.why) + '</p></li>';
            }).join('') + '</ul></div>';
        }
        return '<div class="lab"><span class="pill">📌 まとめ</span><span>これだけは覚える</span></div>' +
          '<div class="mid"><h3 class="h">' + esc(u.title) + '</h3><ul class="sumlist">' +
          u.summary.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '<div class="row"><span class="note">次は 例文を声に出して 体に入れよう 🗣</span></div>';
      }
      case 'learn': {
        s = u.sentences[V.page]; var r = a.r || 0;
        return '<div class="lab"><span class="pill">🗣 音読 ' + (V.page + 1) + '/6</span><span>声に出して読んだら ✓。読むたびに 英文がかくれていく</span></div>' +
          '<div class="mid"><p class="en">' + hideEn(s, r) + '</p><p class="ja">' + esc(s.ja) + '</p><p class="tip">' + esc(s.tip) + whyB(hasWhy(s)) + '</p></div>' +
          '<div class="row"><button type="button" class="say" data-say="' + esc(s.en) + '">🔊 聞く</button>' +
          '<button type="button" class="say' + (S.rate < 0.8 ? ' on' : '') + '" data-act="rate" title="ゆっくり">🐢 ゆっくり</button>' +
          '<span class="reads">' + [1, 2, 3].map(function (k) { return '<i class="' + (r >= k ? 'on' : '') + '">' + k + '</i>'; }).join('') + '</span>' +
          '<button type="button" class="btn' + (r < 3 ? ' main' : '') + '" data-act="read">' + (r < 3 ? '✓ 読んだ（' + (r + 1) + '回目）' : '↺ 最初から') + '</button>' +
          (r >= 3 ? '<span class="note">頭文字だけで言えたら 暗唱できた！</span>' : '') + '</div>';
      }
      case 'order': return orderHTML(u.sentences[V.page], a, '🧩 並べかえ ' + (V.page + 1) + '/6', false);
      case 'cloze': return clozeHTML(u.sentences[V.page], a, '✏️ 穴うめ ' + (V.page + 1) + '/6', false);
      case 'recall': return recallHTML(u.sentences[V.page], a, '⚡ 瞬間英作文 ' + (V.page + 1) + '/6');
      case 'test': return testHTML();
      case 'drill': return drillHTML();
    }
    return '';
  }
  function drillHTML() {
    var n = V.dr.length;
    if (V.page < n) {
      var q = V.dr[V.page], lab = '💪 演習 ' + (V.page + 1) + '/' + n;
      return q.type === 'cloze' ? clozeHTML(q.s, ans(), lab, false) : orderHTML(q.s, ans(), lab, false);
    }
    var ok = 0; for (var i = 0; i < n; i++) if ((V.a[i] || {}).ok) ok++;
    var pr = prog(V.u.id), great = ok >= n - 1;
    return '<div class="result">' +
      (great ? '<div class="bigstamp">よくできた</div>' : '<p class="h">' + (ok >= n / 2 ? 'いい調子！' : 'くり返すほど 体に入る！') + '</p>') +
      '<div class="score">' + ok + '<small> / ' + n + ' 問 正解</small></div>' +
      '<p class="body">同じ型の文を たくさん解くと、型が 体に入ります。この単元で これまでに <b>' + (pr.dr || 0) + '</b> 問 正解。</p>' +
      '<div class="row" style="justify-content:center"><button type="button" class="btn' + (great ? '' : ' main') + '" data-act="drillagain">💪 もう 1 セット（順番を変えて）</button>' +
      '<button type="button" class="btn' + (great ? ' main' : '') + '" data-step="test">🏁 テストへ ▶</button></div></div>';
  }
  function finishDrill() {
    var pr = prog(V.u.id), ok = 0;
    for (var i = 0; i < V.dr.length; i++) if ((V.a[i] || {}).ok) ok++;
    pr.dr = (pr.dr || 0) + ok; pr.st.drill = 1; save();
  }

  function orderHTML(s, a, lab, strict) {
    if (!a.t) { a.t = tilesOf(s); a.ord = scramble(a.t.tiles); a.b = []; }
    var tl = a.t.tiles, built = a.b.map(function (i) { return tl[i]; });
    var state = a.done ? (a.ok ? 'ok' : 'ng') : '';
    var slots = a.b.map(function (i, pos) {
      var bad = a.done && !a.ok && tl[pos] !== tl[i];
      return '<button type="button" class="tl' + (bad ? ' bad' : '') + '" data-un="' + pos + '"' + (a.done ? ' disabled' : '') + '>' + esc(tl[i]) + '</button>';
    }).join('');
    var pool = a.ord.map(function (i) {
      return '<button type="button" class="tl' + (a.b.indexOf(i) >= 0 ? ' used' : '') + '" data-tl="' + i + '"' + (a.done ? ' disabled' : '') + '>' + esc(tl[i]) + '</button>';
    }).join('');
    var fb = '';
    if (a.done) {
      var wb = strict ? '' : whyB(hasWhy(s));
      fb = a.ok ? '<p class="tip">⭕ 正解！ ' + esc(s.tip) + wb + '</p>'
        : '<p class="en sm">' + hl(s.en) + '</p><p class="tip ng">✕ 正しい順は上のとおり。' + esc(s.tip) + wb + '</p>';
    }
    return '<div class="lab"><span class="pill">' + lab + '</span><span>日本語に合うように カードをタップして ならべる</span></div>' +
      '<div class="mid"><p class="ja big">' + esc(s.ja) + '</p>' +
      '<div class="slots ' + state + '">' + slots + (a.b.length ? '<span class="end">' + esc(a.t.end) + '</span>' : '<span class="note">ここに ならぶ</span>') + '</div>' +
      (a.done ? fb : '<div class="pool">' + pool + '</div>') + '</div>' +
      '<div class="row">' + (a.done && !a.ok && !strict ? '<button type="button" class="btn" data-act="oretry">↺ もう一度 ならべる</button>' : '') +
      (!a.done ? '<button type="button" class="btn ghost" data-act="clear">↺ やり直す</button>' +
        (strict ? '' : '<button type="button" class="btn ghost" data-act="ohint">💡 ヒント（最初の1枚）</button>') : '') +
      (a.done ? '<button type="button" class="say" data-say="' + esc(s.en) + '">🔊 聞く</button>' : '') + '</div>';
  }
  function clozeHTML(s, a, lab, strict) {
    if (!a.ch) a.ch = shuffle([s.key].concat(s.alt));
    var btns = a.ch.map(function (w, i) {
      var cls = a.done ? (w === s.key ? ' ok' : (w === a.pick ? ' ng' : '')) : '';
      return '<button type="button" class="choice' + cls + '" data-pick="' + i + '"' + (a.done ? ' disabled' : '') + '><span class="kb">' + (i + 1) + '</span>' + esc(w) + '</button>';
    }).join('');
    return '<div class="lab"><span class="pill">' + lab + '</span><span>（　）に入るものを えらぶ</span></div>' +
      '<div class="mid"><p class="en">' + blankEn(s, a.done ? s.key : '', a.done) + '</p><p class="ja">' + esc(s.ja) + '</p>' +
      (a.done ? '<p class="tip' + (a.ok ? '' : ' ng') + '">' + (a.ok ? '⭕ 正解！ ' : '✕ 正解は「' + esc(s.key) + '」。') + esc(s.tip) + (strict ? '' : whyB(hasWhy(s))) + '</p>' : '') + '</div>' +
      '<div class="choices">' + btns + '</div>' +
      (a.done && !strict ? '<div class="row"><button type="button" class="say" data-say="' + esc(s.en) + '">🔊 聞く</button></div>' : '');
  }
  function recallHTML(s, a, lab) {
    var first = s.plain.split(' ').map(function (w) { return w.charAt(0) + (w.length > 1 ? '…' : ''); }).join(' ');
    return '<div class="lab"><span class="pill">' + lab + '</span><span>日本語を見て すぐ英語で言う → 答えを見て 自分で ○△✕</span></div>' +
      '<div class="mid"><p class="ja big">' + esc(s.ja) + '</p>' +
      (a.hint && !a.shown ? '<p class="en sm" style="color:var(--muted)">' + esc(first) + '</p>' : '') +
      (a.shown ? '<p class="en">' + hl(s.en) + '</p><p class="tip">' + esc(s.tip) + whyB(hasWhy(s)) + '</p>'
        : '<button type="button" class="veil" data-act="show">口に出して言ってから タップ（スペースキー）で 答えを見る</button>') + '</div>' +
      (a.shown ? '<div class="grades">' +
        '<button type="button" class="grade g0" data-g="0">✕ まだ<small>もう一度 出る</small></button>' +
        '<button type="button" class="grade g1" data-g="1">△ あやしい<small>あした 復習</small></button>' +
        '<button type="button" class="grade g2" data-g="2">○ 言えた<small>間をあけて 復習</small></button></div>'
        : '<div class="row"><button type="button" class="btn ghost" data-act="hint"' + (a.hint ? ' disabled' : '') + '>💡 頭文字ヒント</button></div>');
  }

  /* 確認テスト：穴うめ 3 ＋ 並べかえ 2（ヒントなし・1回勝負） */
  function newTest() {
    var ss = shuffle(V.u.sentences.concat(V.u.drills)).slice(0, TEST_N);
    var types = shuffle(['cloze', 'cloze', 'cloze', 'order', 'order']);
    V.test = ss.map(function (s, i) { return { s: s, type: types[i] }; });
    V.a = {}; V.page = 0;
  }
  function testHTML() {
    if (V.page < TEST_N) {
      var q = V.test[V.page], a = ans(), lab = '🏁 確認テスト ' + (V.page + 1) + '/' + TEST_N;
      return q.type === 'cloze' ? clozeHTML(q.s, a, lab, true) : orderHTML(q.s, a, lab, true);
    }
    var sc = 0, miss = [];
    for (var i = 0; i < TEST_N; i++) { if ((V.a[i] || {}).ok) sc++; else miss.push(V.test[i].s); }
    var pass = sc >= PASS, u = V.u;
    var nxt = u.course.units[u.no] || null;
    return '<div class="result">' +
      (pass ? '<div class="bigstamp">合格</div>' : '<p class="h">' + (sc >= PASS - 1 ? 'あと少し！' : sc >= 2 ? 'もう一息！ まちがえた文を 見直そう' : 'ポイントと 音読から もう一度 やってみよう') + '</p>') +
      '<div class="score">' + sc + '<small> / ' + TEST_N + '</small></div>' +
      '<p class="body">' + (pass ? 'この単元の例文は「🔁 復習」に入りました。日をあけて 思い出すと 忘れにくくなります。' : PASS + ' 問以上で合格。まちがえた文を 音読してから もう一度。') + '</p>' +
      (miss.length ? '<ul class="misslist">' + miss.map(function (s) { return '<li>' + esc(s.plain) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="row" style="justify-content:center">' +
      '<button type="button" class="btn' + (pass ? '' : ' main') + '" data-act="retest">↺ もう一度テスト</button>' +
      (!pass ? '<button type="button" class="btn" data-step="learn">🗣 音読にもどる</button>' : '') +
      (pass && nxt ? '<button type="button" class="btn main" data-go="' + nxt.id + '">次の単元：' + esc(nxt.title) + ' ▶</button>' : '') +
      '</div></div>';
  }
  function finishTest() {
    var sc = 0, pr = prog(V.u.id), t = dayNo();
    for (var i = 0; i < TEST_N; i++) {
      var a = V.a[i] || {}, s = V.test[i].s;
      if (a.ok) sc++; else if (SENTS[s.id]) { enroll(s.id, t); S.srs[s.id].due = t; S.srs[s.id].b = 0; }
    }
    pr.tries++; pr.best = Math.max(pr.best, sc);
    if (sc >= PASS) {
      earn(pr.pass ? 50 : 150);
      if (!pr.pass) { pr.pass = 1; pr.at = today(); }
      pr.st.test = 1;
      V.u.sentences.forEach(function (s) { enroll(s.id, t + 1); });
    }
    save(); badge();
  }

  /* ---------- 復習（間隔反復） ---------- */
  function openReview(free) {
    var q = dueIds();
    var mode = 'due';
    if (!q.length && free) {
      var pool = Object.keys(SENTS).filter(function (id) { return SENTS[id].unit.course.id === S.course && prog(SENTS[id].unit.id).sec > 0; });
      if (!pool.length) pool = course().units[0].sentences.map(function (s) { return s.id; });
      q = shuffle(pool).slice(0, 10); mode = 'free';
    }
    document.body.setAttribute('data-view', 'review');
    V = { view: 'review', q: shuffle(q), i: 0, a: {}, mode: mode, again: {}, done: 0, total: q.length };
    clearInterval(timer); renderReview();
  }
  function renderReview() {
    var body;
    if (V.i >= V.q.length) {
      var due = dueIds().length;
      body = '<div class="result">' + (V.total ? '<div class="bigstamp">完了</div><div class="score">' + V.done + '<small> 文</small></div>' : '<p class="h">今日の復習は ありません</p>') +
        '<p class="body">' + (due ? 'まだ ' + due + ' 文 残っています。' : V.total ? '「○ 言えた」が続いた文は、次に出るまでの間が のびていきます（1→2→4→7→15→30日）。' : '各単元の「⚡ 英作文」で ○△✕ を つけた文や、テストに 合格した 単元の 文が ここに 入ります。') + '</p>' +
        '<div class="row" style="justify-content:center">' +
        (due ? '<button type="button" class="btn main" data-act="review">続ける</button>' : '') +
        '<button type="button" class="btn' + (due ? '' : ' main') + '" data-act="free">🎲 ランダムに 10 文 練習</button>' +
        '<button type="button" class="btn ghost" data-act="home">一覧へ</button></div></div>';
    } else {
      var s = SENTS[V.q[V.i]], a = V.a[V.i] || (V.a[V.i] = {});
      var lab = (V.mode === 'free' ? '🎲 練習 ' : '🔁 復習 ') + (V.i + 1) + '/' + V.q.length;
      body = recallHTML(s, a, lab).replace('</span><span>', '</span><span>' + esc(s.unit.course.short + '-' + two(s.unit.no) + ' ' + s.unit.title) + '　');
    }
    view.innerHTML = '<div class="unit">' +
      '<div class="ubar"><button type="button" class="btn ghost" data-act="home">◀ 一覧</button>' +
      '<div class="utitle"><small>思い出すほど 忘れにくくなる</small><b>' + (V.mode === 'free' ? '🎲 ランダム練習' : '🔁 今日の復習') + '</b></div></div>' +
      '<section class="card" id="card"><div class="cin">' + body + '</div></section>' +
      '<div class="fbar"><div class="dots">' + (V.q.length <= 30 ? V.q.map(function (_, i) { var a = V.a[i] || {}; return '<i class="' + (i === V.i ? 'on' : a.g === 2 ? 'ok' : a.g != null ? 'ng' : '') + '"></i>'; }).join('') : (V.i + ' / ' + V.q.length)) + '</div>' +
      '<span class="kbd">スペース：答え　1・2・3：✕△○</span></div></div>';
  }
  function reviewGrade(g) {
    var id = V.q[V.i], a = V.a[V.i]; a.g = g;
    grade(id, g); V.done++;
    if (g === 0 && !V.again[id]) { V.again[id] = 1; V.q.push(id); }
    V.i++; renderReview();
  }

  /* ---------- 操作 ---------- */
  view.addEventListener('click', function (e) {
    var t = e.target.closest('button'); if (!t || t.disabled) return;
    var d = t.dataset;
    if (d.go) { go('#' + d.go); return; }
    if (d.say) { speak(d.say); return; }
    if (d.step) { setStep(d.step); return; }
    if (d.g != null) {
      var g = +d.g;
      if (V.view === 'review') { reviewGrade(g); return; }
      var s = V.u.sentences[V.page]; ans().g = g; ans().ok = g === 2; grade(s.id, g);
      if (V.page < 5) { V.page++; renderUnit(); } else { markDone('recall'); setStep('test'); }
      return;
    }
    if (d.tl != null) { var a = ans(); a.b.push(+d.tl); checkOrder(); renderUnit(); return; }
    if (d.un != null) { ans().b.splice(+d.un, 1); renderUnit(); return; }
    if (d.pick != null) { pick(+d.pick); return; }
    switch (d.act) {
      case 'home': go('#' + S.course); break;
      case 'review': go('#review'); if (V.view === 'review') openReview(); break;
      case 'free': openReview(true); break;
      case 'task': openTask(); break;
      case 'next': nextPage(); break;
      case 'prev': prevPage(); break;
      case 'rate': S.rate = S.rate < 0.8 ? 0.9 : 0.65; save(); renderUnit(); speak(V.u.sentences[V.page].en); break;
      case 'read': {
        var a2 = ans(); a2.r = (a2.r || 0) >= 3 ? 0 : (a2.r || 0) + 1;
        if (a2.r >= 3) a2.ok = true;
        if (a2.r) earn(1);
        renderUnit(); break;
      }
      case 'clear': ans().b = []; renderUnit(); break;
      case 'oretry': { var a4 = ans(); a4.b = []; a4.done = 0; a4.ok = false; a4.retry = 1; renderUnit(); break; }
      case 'ohint': {
        var a3 = ans(); a3.b = []; if (!a3.t) break;
        var first = a3.t.tiles[0], idx = a3.ord.filter(function (i) { return a3.t.tiles[i] === first; })[0];
        a3.b.push(idx); a3.hinted = 1; renderUnit(); break;
      }
      case 'show': revealRecall(); break;
      case 'hint': (V.view === 'review' ? (V.a[V.i] || {}) : ans()).hint = 1; rerender(); break;
      case 'retest': newTest(); renderUnit(); break;
      case 'why': case 'why1': openWhy(1); break;
      case 'why2': openWhy(2); break;
      case 'whyx': closeWhy(); break;
      case 'drillagain': newDrill(); renderUnit(); break;
    }
  });
  /* ---------- 🤔 なぜ？（カードの上に 1 枚かぶせる。2 段目は「それでもわからない人へ」） ---------- */
  function whyCtx() {
    if (V.view === 'review') { var rs = SENTS[V.q[V.i]]; return { s: rs, pt: rs.unit.points[rs.p || 0] }; }
    if (V.view !== 'unit') return null;
    if (V.step === 'point') { var pg = pointPages(V.u)[V.page]; return typeof pg === 'number' ? { s: null, pt: V.u.points[pg] } : null; }
    var s = curS(); return { s: s, pt: s.unit.points[s.p || 0] };
  }
  function openWhy(level) {
    var c = whyCtx(), card = $('#card'); if (!c || !card) return;
    var old = card.querySelector('.sheet'); if (old) old.remove();
    var s = c.s, pt = c.pt || {}, easy = level === 2 && pt.easy, h;
    if (easy) {
      h = '<p class="sh-lab easy">🐣 それでもわからないときは</p>' +
        '<p class="sh-easy">' + esc(pt.easy) + '</p>' +
        (pt.ex ? '<p class="en sm">' + hl(pt.ex) + '</p>' : '');
    } else {
      h = '<p class="sh-lab">🤔 なぜそうなる？</p>' +
        (s ? '<p class="en sm">' + hl(s.en) + '</p>' + (s.why ? '<p class="sh-why">' + esc(s.why) + '</p>' : '') : '') +
        (pt.why ? '<div class="sh-rule"><b>きまり：' + esc(pt.h || '') + '</b><p>' + esc(pt.why) + '</p></div>' : '');
    }
    var d = document.createElement('div'); d.className = 'sheet'; d.setAttribute('role', 'dialog');
    d.innerHTML = '<div class="shin">' + h + '</div><div class="row shbtn">' +
      (easy ? '<button type="button" class="btn ghost" data-act="why1">◀ もどる</button>' : (pt.easy ? '<button type="button" class="btn" data-act="why2">🐣 それでもわからない…</button>' : '')) +
      '<button type="button" class="btn main" data-act="whyx">✕ とじる</button></div>';
    card.appendChild(d);
  }
  function closeWhy() { var d = $('#card .sheet'); if (d) d.remove(); }
  function rerender() { if (V.view === 'review') renderReview(); else if (V.view === 'unit') renderUnit(); }
  function revealRecall() {
    var a, s;
    if (V.view === 'review') { a = V.a[V.i]; s = SENTS[V.q[V.i]]; } else { a = ans(); s = V.u.sentences[V.page]; }
    if (!a || a.shown) return;
    a.shown = 1; rerender(); speak(s.en);
  }
  function checkOrder() {
    var a = ans(); if (a.b.length < a.t.tiles.length) return;
    a.done = 1; a.ok = a.b.every(function (i, pos) { return a.t.tiles[i] === a.t.tiles[pos]; });
    if (a.ok && !a.retry) earn(10); // コインは 1 回目で 正解した時だけ
    var s = curS();
    if (V.step !== 'test') speak(s.en);
    if (V.step === 'test' && V.page === TEST_N - 1) finishTest();
  }
  function pick(i) {
    var a = ans(); if (a.done) return;
    var s = curS();
    a.pick = a.ch[i]; a.done = 1; a.ok = a.pick === s.key;
    if (a.ok) earn(10);
    if (V.step !== 'test') speak(s.en);
    if (V.step === 'test' && V.page === TEST_N - 1) finishTest();
    renderUnit();
  }

  document.addEventListener('keydown', function (e) {
    if ($('#dlg').open || /INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ''))) return;
    if ($('#card .sheet')) { if (e.key === 'Escape') closeWhy(); return; }
    if (V.view === 'unit') {
      if (e.key === 'ArrowRight') { e.preventDefault(); nextPage(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevPage(); }
      else if (e.key === ' ' && V.step === 'recall') { e.preventDefault(); if (!ans().shown) revealRecall(); }
      else if (/^[1-4]$/.test(e.key) && (V.step === 'cloze' || (V.step === 'test' && V.test[V.page] && V.test[V.page].type === 'cloze') || (V.step === 'drill' && V.dr[V.page] && V.dr[V.page].type === 'cloze'))) { pick(+e.key - 1); }
      else if (/^[1-3]$/.test(e.key) && V.step === 'recall' && ans().shown) { var b = view.querySelector('[data-g="' + ({ 1: 0, 2: 1, 3: 2 })[e.key] + '"]'); if (b) b.click(); }
    } else if (V.view === 'review' && V.i < V.q.length) {
      var a = V.a[V.i] || {};
      if (e.key === ' ') { e.preventDefault(); if (!a.shown) revealRecall(); }
      else if (/^[1-3]$/.test(e.key) && a.shown) reviewGrade(+e.key - 1);
    }
  });

  /* ---------- 課題（先生がリンクを送る → 生徒がやる → 結果を送り返す） ---------- */
  function b64e(o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function b64d(s) { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; return JSON.parse(decodeURIComponent(escape(atob(s)))); }
  function takeTask(code) {
    try {
      var t = b64d(code);
      if (!t || !t.u || !t.u.length) throw 0;
      t.u = t.u.filter(function (id) { return UNITS[id]; });
      S.task = t; S.course = t.c || (UNITS[t.u[0]] && UNITS[t.u[0]].course.id) || S.course; save();
      history.replaceState(null, '', location.pathname + location.search + '#' + S.course);
      route(); openTask('st');
    } catch (e) { toast('課題のリンクが読めませんでした'); go('#' + S.course); }
  }
  var dlg = $('#dlg'), dlgIn = $('#dlgIn');
  function openTask(tab) {
    tab = tab || 'st'; // 生徒の 画面から（先生は タブで 切りかえ）
    var head = '<div class="dlg-head"><h2>📮 課題</h2><button type="button" class="ibtn x" data-x>✕ とじる</button></div>' +
      '<div class="tabs" role="tablist"><button type="button" role="tab" data-tab="st" aria-selected="' + (tab === 'st') + '">生徒：わたしの課題</button>' +
      '<button type="button" role="tab" data-tab="te" aria-selected="' + (tab === 'te') + '">先生：課題をつくる</button></div>';
    var body;
    if (tab === 'st') {
      if (!S.task) body = '<p>まだ課題はありません。先生から届いたリンクを開くと、ここに出ます。</p><p class="note">先生の方は 上の「先生：課題をつくる」へ</p>';
      else {
        var t = S.task, pc = 0;
        body = (t.m ? '<p>💬 ' + esc(t.m) + '</p>' : '') + '<ul class="tlist">' + t.u.map(function (id) {
          var u = UNITS[id], pr = prog(id); if (pr.pass) pc++;
          var stc = STEPS.filter(function (s) { return pr.st[s.k]; }).length;
          return '<li>' + esc(u.course.short + '-' + two(u.no)) + ' ' + esc(u.title) + '<span class="' + (pr.pass ? 'p' : '') + '">' + (pr.pass ? '合格 ' + pr.best + '/' + TEST_N : stc ? '途中 ' + stc + '/' + STEPS.length : 'まだ') + '</span></li>';
        }).join('') + '</ul>' +
          '<p class="note">' + pc + '/' + t.u.length + ' 単元 合格' + (t.d ? '・しめきり ' + esc(t.d) : '') + '</p>' +
          '<div class="fld"><input type="text" id="tName" placeholder="名前（例：2年3組 12番 山田）" value="' + esc(S.name) + '"><button type="button" class="btn main" data-res>📤 結果を送る</button></div>' +
          '<textarea class="out" id="tOut" readonly hidden></textarea>';
      }
    } else {
      var c = course();
      body = '<p class="note">' + esc(c.name) + ' の単元（ほかのコースは 上のⅠⅡⅢで切りかえてから）</p>' +
        '<div class="checks">' + c.units.map(function (u) { return '<label><input type="checkbox" value="' + u.id + '"><small>' + two(u.no) + '</small>' + esc(u.title) + '</label>'; }).join('') + '</div>' +
        '<div class="fld"><span>しめきり</span><input type="date" id="tDue"></div>' +
        '<div class="fld"><input type="text" id="tMsg" placeholder="ひとこと（例：テストで4問以上を目指そう）"></div>' +
        '<div class="fld"><button type="button" class="btn main" data-mk>🔗 リンクをつくる</button><span class="note">LINE やメールで生徒に送る</span></div>' +
        '<textarea class="out" id="tOut" readonly hidden></textarea>';
    }
    dlgIn.innerHTML = head + '<div class="dlg-body">' + body + '</div>';
    if (!dlg.open) dlg.showModal();
  }
  function copyOut(text, ok) {
    var o = $('#tOut'); o.hidden = false; o.value = text; o.select();
    var done = function () { toast(ok); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { try { document.execCommand('copy'); done(); } catch (e) { } });
    else { try { document.execCommand('copy'); done(); } catch (e) { } }
  }
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) { dlg.close(); return; }
    var b = e.target.closest('button'); if (!b) return;
    if (b.hasAttribute('data-x')) dlg.close();
    else if (b.dataset.tab) openTask(b.dataset.tab);
    else if (b.hasAttribute('data-mk')) {
      var ids = [].map.call(dlgIn.querySelectorAll('.checks input:checked'), function (x) { return x.value; });
      if (!ids.length) { toast('単元を 1 つ以上えらんでください'); return; }
      var t = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), c: S.course, u: ids, d: $('#tDue').value, m: $('#tMsg').value.trim() };
      var url = location.origin + location.pathname + '#task=' + b64e(t);
      copyOut(url, 'リンクをコピーしました（課題コード ' + t.id + '）');
    } else if (b.hasAttribute('data-res')) {
      S.name = $('#tName').value.trim(); save();
      if (!S.name) { toast('名前を入れてください'); return; }
      var t2 = S.task, pc = 0;
      var lines = t2.u.map(function (id) {
        var u = UNITS[id], pr = prog(id); if (pr.pass) pc++;
        var stc = STEPS.filter(function (s) { return pr.st[s.k]; }).length;
        return '・' + u.course.short + '-' + two(u.no) + ' ' + u.title + '：' + (pr.pass ? '合格（テスト ' + pr.best + '/' + TEST_N + '・' + pr.at + '）' : stc || pr.sec ? '途中（' + stc + '/' + STEPS.length + ' ステップ）' : 'まだ') + '・' + minutes(pr.sec);
      });
      var text = '【論理表現ラボ 課題の結果】\n名前：' + S.name + '\n課題コード：' + (t2.id || '-') + '\n合格：' + pc + '/' + t2.u.length + ' 単元\n' + lines.join('\n') +
        '\n定着した例文：' + learned() + ' 文\n送った日：' + today();
      if (navigator.share && /Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) { navigator.share({ text: text }).catch(function () { copyOut(text, 'コピーしました'); }); }
      else copyOut(text, '結果をコピーしました。先生に送ってください');
    }
  });

  /* ---------- はじまり ---------- */
  applyLook();
  if (hasTTS) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = function () { }; }
  window.addEventListener('hashchange', route);
  if (!location.hash) history.replaceState(null, '', '#' + S.course);
  window.LXAPP = {
    S: function () { return S; }, save: save, esc: esc, toast: toast, view: view, applyLook: applyLook,
    COURSES: COURSES, UNITS: UNITS, SENTS: SENTS, prog: prog, dayNo: dayNo, today: today,
    tilesOf: tilesOf, blankEn: blankEn, speak: speak
  };
  if (window.LXG) LXG.init();
  route();
})();
