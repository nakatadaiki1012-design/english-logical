// 追加教材の点検： node js/plus/check.js js/plus/c1-a.js
global.window = {};
const path = require('path');
const base = path.join(__dirname, '..');
['data-c1.js', 'data-c2.js', 'data-c3.js'].forEach(f => require(path.join(base, f)));
const file = path.resolve(process.argv[2]);
require(file);
const units = {}; window.LX.courses.forEach(c => c.units.forEach(u => units[u.id] = u));
const bad = []; const len = s => Array.from(String(s || '')).length;
const L = (id, what, v, n) => { if (len(v) > n) bad.push(`${id} ${what} が長い(${len(v)}>${n}): ${v}`); };
const ROLE = /^(S|V|O|C|M|.{1,4})$/;
function fig(id, f) {
  if (!f || typeof f !== 'object') return bad.push(id + ' fig がない');
  if (f.t === 'slots') {
    if (!Array.isArray(f.parts) || f.parts.length < 2 || f.parts.length > 6) bad.push(id + ' slots parts 数');
    (f.parts || []).forEach(p => { if (!Array.isArray(p) || p.length !== 2) bad.push(id + ' slots part 形'); else { L(id, 'slots英語', p[0], 18); if (!ROLE.test(p[1])) bad.push(id + ' slots role ' + p[1]); } });
    if (f.arc) { if (!Array.isArray(f.arc) || f.arc.length !== 3 || !(f.arc[0] < f.parts.length) || !(f.arc[1] < f.parts.length) || f.arc[0] === f.arc[1]) bad.push(id + ' arc'); else L(id, 'arc', f.arc[2], 10); }
  } else if (f.t === 'time') {
    if (!Array.isArray(f.marks) || !f.marks.length || f.marks.length > 3) bad.push(id + ' time marks 数');
    (f.marks || []).forEach(m => { const ok = m.at != null ? Math.abs(m.at) <= 4 : (Math.abs(m.from) <= 4 && Math.abs(m.to) <= 4 && m.from !== m.to); if (!ok) bad.push(id + ' time 範囲'); L(id, 'time label', m.label, 12); });
  } else if (f.t === 'scale') {
    if (!Array.isArray(f.items) || f.items.length < 2 || f.items.length > 5) bad.push(id + ' scale items 数');
    (f.items || []).forEach(it => { L(id, 'scale英語', it[0], 14); if (!(it[1] >= 0 && it[1] <= 100)) bad.push(id + ' scale 位置'); });
    L(id, 'scale left', f.left, 8); L(id, 'scale right', f.right, 8);
  } else if (f.t === 'flow') {
    if (!Array.isArray(f.steps) || f.steps.length < 2 || f.steps.length > 5) bad.push(id + ' flow steps 数');
    (f.steps || []).forEach(x => L(id, 'flow', x, 8));
  } else if (f.t === 'vs') {
    ['a', 'b'].forEach(k => { const v = f[k]; if (!Array.isArray(v) || v.length !== 2) bad.push(id + ' vs ' + k); else { L(id, 'vs英文', v[0], 30); L(id, 'vs説明', v[1], 14); } });
  } else if (f.t === 'pic') {
    const it = f.items || [];
    if (it.length < 2 || it.length > 5) bad.push(id + ' pic items 数');
    let nb = 0;
    it.forEach((x, i) => {
      if (!x.e || Array.from(x.e).length > 3) bad.push(id + ' pic e は絵文字1つ');
      if (!(x.x >= 8 && x.x <= 92 && x.y >= 20 && x.y <= 85)) bad.push(id + ' pic 位置 ' + x.x + ',' + x.y);
      if (x.s != null && !(x.s >= 0.6 && x.s <= 1.6)) bad.push(id + ' pic s');
      L(id, 'pic l', x.l, 12);
      if (x.b) { nb++; L(id, 'pic b', x.b, 12); if (x.y < 45) bad.push(id + ' pic 吹き出しの物は y 45 以上'); }
      it.forEach((y, j) => { if (j > i && Math.abs(x.x - y.x) < 25 && Math.abs(x.y - y.y) < 30) bad.push(id + ' pic 重なり ' + i + '-' + j); });
    });
    if (nb > 1) bad.push(id + ' pic 吹き出しは1個まで');
    const ar = f.arrows || [];
    if (ar.length > 3) bad.push(id + ' pic arrows 数');
    ar.forEach(a => { if (!Array.isArray(a) || !(a[0] < it.length) || !(a[1] < it.length) || a[0] === a[1]) bad.push(id + ' pic arrow'); else L(id, 'pic arrow', a[2], 12); });
    L(id, 'pic cap', f.cap, 26);
  } else if (f.t === 'bars') {
    const it = f.items || [];
    if (it.length < 2 || it.length > 4) bad.push(id + ' bars items 数');
    it.forEach(x => { L(id, 'bars label', x[0], 12); if (!(x[1] >= 0 && x[1] <= 100)) bad.push(id + ' bars 値'); });
    L(id, 'bars cap', f.cap, 26);
  } else bad.push(id + ' fig の種類 ' + f.t);
}
function sent(id, s, seen) {
  const m = s.en.match(/\[([^\]]+)\]/g);
  if (!m || m.length !== 1) bad.push(`${id} [ ] が1か所でない: ${s.en}`);
  const key = m ? m[0].slice(1, -1) : '';
  const words = s.en.replace(/[\[\]]/g, '').split(' ');
  if (words.length < 4 || words.length > 13) bad.push(`${id} 語数 ${words.length}: ${s.en}`);
  if (key.split(' ').length > 3) bad.push(`${id} [ ] が4語以上: ${s.en}`);
  if (!/[.?!]$/.test(s.en)) bad.push(`${id} 文末: ${s.en}`);
  if (/["\/]/.test(s.en)) bad.push(`${id} " か / : ${s.en}`);
  if (!Array.isArray(s.alt) || s.alt.length !== 3 || new Set(s.alt).size !== 3 || s.alt.includes(key)) bad.push(`${id} alt: ${s.en}`);
  if (!s.ja) bad.push(`${id} ja なし`);
  L(id, 'tip', s.tip, 30);
  const plain = s.en.replace(/[\[\]]/g, '').toLowerCase();
  if (seen.has(plain)) bad.push(`${id} 重複: ${s.en}`); seen.add(plain);
}
const plus = window.LX.plus || {};
const ids = Object.keys(plus);
if (!ids.length) bad.push('LX.plus が空');
ids.forEach(id => {
  const p = plus[id], u = units[id];
  if (!u) return bad.push(id + ' という単元はない');
  if (!p.core) bad.push(id + ' core なし'); else { L(id, 'core.catch', p.core.catch, 26); L(id, 'core.say', p.core.say, 64); if (!p.core.ico) bad.push(id + ' ico なし'); fig(id + ' core', p.core.fig); }
  if (!Array.isArray(p.points) || p.points.length !== 3) bad.push(id + ' points は3枚');
  (p.points || []).forEach((pt, i) => {
    const pid = id + ' p' + (i + 1);
    L(pid, 'h', pt.h, 18); L(pid, 'body', pt.body, 70); L(pid, 'form', pt.form, 30);
    if (!pt.ex || (pt.ex.match(/\[/g) || []).length !== 1) bad.push(pid + ' ex の [ ]');
    if (!pt.exja) bad.push(pid + ' exja');
    if (pt.fig) fig(pid, pt.fig);
    if (!pt.ng || !pt.ng.bad || !pt.ng.good || !pt.ng.why) bad.push(pid + ' ng'); else { L(pid, 'ng.why', pt.ng.why, 40); if (pt.ng.bad === pt.ng.good) bad.push(pid + ' ng 同じ'); }
    if (process.env.NEED_WHY) { if (!pt.why) bad.push(pid + ' why なし'); if (!pt.easy) bad.push(pid + ' easy なし'); }
    if (pt.why) L(pid, 'why', pt.why, 90); if (pt.easy) L(pid, 'easy', pt.easy, 120);
  });
  const seen = new Set(u.sentences.map(s => s.en.replace(/[\[\]]/g, '').toLowerCase()));
  const ND = process.env.DRILL24 ? 24 : 12;
  if (!Array.isArray(p.drills) || (process.env.DRILL24 ? p.drills.length !== 24 : p.drills.length < 12)) bad.push(id + ' drills は' + ND + '文（いま ' + (p.drills || []).length + '）');
  (p.drills || []).forEach(s => sent(id, s, seen));
  if (process.env.NEED_WHY) {
    (p.drills || []).forEach((s, j) => { if (!s.why) bad.push(id + ' drill' + (j + 1) + ' why なし'); if (![0, 1, 2].includes(s.p)) bad.push(id + ' drill' + (j + 1) + ' p'); });
    if (!Array.isArray(p.swhy) || p.swhy.length !== 6) bad.push(id + ' swhy は6個');
    (p.swhy || []).forEach((w, j) => { if (!w || !w.why) bad.push(id + ' swhy' + (j + 1) + ' why なし'); else L(id, 'swhy', w.why, 60); if (!w || ![0, 1, 2].includes(w.p)) bad.push(id + ' swhy' + (j + 1) + ' p'); });
  }
  (p.drills || []).forEach(s => { if (s.why) L(id, 'drill why', s.why, 60); });
});
console.log(ids.length + ' 単元', bad.length ? '\n問題 ' + bad.length + ' 件\n' + bad.join('\n') : '問題なし');
process.exit(bad.length ? 1 : 0);
