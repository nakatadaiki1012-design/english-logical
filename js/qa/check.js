// 英問英答（ゲームの 長距離便で 出る）の点検： node js/qa/check.js js/qa/c1-a.js
global.window = {};
const path = require('path');
const base = path.join(__dirname, '..');
['data-c1.js', 'data-c2.js', 'data-c3.js'].forEach(f => require(path.join(base, f)));
const file = path.resolve(process.argv[2]);
require(file);
const units = {}; window.LX.courses.forEach(c => c.units.forEach(u => units[u.id] = u));
const bad = []; const len = s => Array.from(String(s || '')).length;
const words = s => String(s).trim().split(/\s+/).length;
const qa = window.LX.qa || {};
const ids = Object.keys(qa);
if (!ids.length) bad.push('LX.qa が空');
ids.forEach(id => {
  if (!units[id]) return bad.push(id + ' という単元はない');
  const list = qa[id], seen = new Set();
  if (!Array.isArray(list) || list.length !== 10) bad.push(id + ' は 10 問（いま ' + (list || []).length + '）');
  (list || []).forEach((x, j) => {
    const sid = id + ' #' + (j + 1);
    if (!x.q || !/\?$/.test(x.q.trim())) bad.push(`${sid} q は ? で終わる英語の質問: ${x.q}`);
    if (x.q && words(x.q) > 14) bad.push(`${sid} q が長い（14 語まで）: ${x.q}`);
    if (!x.qja) bad.push(`${sid} qja なし`);
    if (!x.a || !/[.!?]$/.test(x.a.trim())) bad.push(`${sid} a は 文末記号つきの 英文: ${x.a}`);
    if (!Array.isArray(x.alt) || x.alt.length !== 3 || new Set(x.alt).size !== 3 || x.alt.includes(x.a)) bad.push(`${sid} alt は ちがう 3 つ: ${x.a}`);
    [x.a].concat(x.alt || []).forEach(o => { if (words(o) > 14) bad.push(`${sid} 選択肢が長い（14 語まで）: ${o}`); if (/["\/]/.test(o)) bad.push(`${sid} " か / : ${o}`); });
    if (!x.why || len(x.why) > 60) bad.push(`${sid} why（60 字以内・必須）`);
    if (seen.has(x.q)) bad.push(`${sid} 重複: ${x.q}`); seen.add(x.q);
  });
});
console.log(ids.length + ' 単元', bad.length ? '\n問題 ' + bad.length + ' 件\n' + bad.join('\n') : '問題なし');
process.exit(bad.length ? 1 : 0);
