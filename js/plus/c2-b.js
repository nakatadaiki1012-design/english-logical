window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

/* ===== c2-u07 話法と時制の一致 ===== */
window.LX.plus["c2-u07"] = {
  core: {
    ico: "📼",
    catch: "言ったことは「録画」で伝える→時制が1つ過去へ",
    say: "said（過去）の中で話すと、中の動詞も過去にずれる。カメラを「言った時」に置いて見るイメージ。",
    fig: { t: "time", marks: [{ at: -2, label: "「忙しい」と言った" }, { at: 0, label: "今それを伝える" }] }
  },
  points: [
    {
      h: "said の後ろは一歩過去へ",
      body: "主節が said（過去）なら、that の中も過去にずらす。is→was、will→would。言った「その時」に合わせるだけ。",
      form: "S said (that) S ＋ 過去形",
      ex: "She said that she [was] busy.",
      exja: "彼女は忙しいと言った。",
      fig: { t: "vs", a: ["She says she is busy.", "今言っている"], b: ["She said she was busy.", "前に言った"] },
      ng: { bad: "He said that he will come.", good: "He said that he would come.", why: "said（過去）の中では will も would に下げる" }
    },
    {
      h: "もっと前のことは had＋過去分詞",
      body: "言った時より さらに前のできごとは、過去完了（had＋過去分詞）。時間の階段を2段下りるイメージ。",
      form: "said that S had ＋ 過去分詞",
      ex: "She told me that she [had lost] her key.",
      exja: "彼女は鍵をなくしたと私に言った。",
      fig: { t: "time", marks: [{ at: -3, label: "鍵をなくした" }, { at: -1, label: "そう言った" }, { at: 0, label: "今" }] },
      ng: { bad: "She told me she has lost her key.", good: "She told me she had lost her key.", why: "言った時より前のことなので had＋過去分詞" }
    },
    {
      h: "質問は if、命令は to",
      body: "疑問文は ask 人 if ～ や 疑問詞＋S＋V の順。命令は tell 人 to ～。いつも本当のことは現在形のまま。",
      form: "ask 人 if S V ／ tell 人 to ～",
      ex: "She asked me [if] I was hungry.",
      exja: "彼女は私にお腹がすいているかとたずねた。",
      ng: { bad: "He asked me where did I live.", good: "He asked me where I lived.", why: "文の中の疑問文は ふつうの語順（S＋V）にする" }
    }
  ],
  drills: [
    { en: "She said that she [was] hungry.", ja: "彼女はお腹がすいていると言った。", alt: ["be", "were", "being"], tip: "said の中は過去形 was" },
    { en: "He said he [could] swim well.", ja: "彼は上手に泳げると言った。", alt: ["can to", "could to", "cans"], tip: "can も過去の could に" },
    { en: "I thought it [would] rain.", ja: "雨が降るだろうと思った。", alt: ["would to", "is", "being"], tip: "thought の中では will→would" },
    { en: "Ken told me that he [had seen] the movie.", ja: "ケンはその映画を見たことがあると私に言った。", alt: ["has saw", "have seen", "had see"], tip: "言った時より前は had＋過去分詞" },
    { en: "She said that she [was studying] English.", ja: "彼女は英語を勉強していると言った。", alt: ["is study", "was study", "were studying"], tip: "進行形も was ～ing に" },
    { en: "My father told me [not to] stay up late.", ja: "父は私に夜ふかしするなと言った。", alt: ["to not to", "don't", "no to"], tip: "否定の命令は tell 人 not to ～" },
    { en: "The coach told us [to run] faster.", ja: "コーチは私たちにもっと速く走れと言った。", alt: ["run", "running", "that run"], tip: "命令は tell 人 to ＋ 原形" },
    { en: "She asked me [if] I liked sushi.", ja: "彼女は私に寿司が好きかとたずねた。", alt: ["that", "what if", "do"], tip: "Yes/No の質問は if（〜かどうか）" },
    { en: "He asked me [what] I wanted for dinner.", ja: "彼は私に夕食に何がほしいかとたずねた。", alt: ["what did", "what do", "that what"], tip: "疑問詞の後ろは S＋V の語順" },
    { en: "I asked her [when] she would leave.", ja: "私は彼女にいつ出発するのかたずねた。", alt: ["when will", "when did", "that when"], tip: "when の後ろも S＋V の語順" },
    { en: "Our teacher said that water [boils] at 100 degrees.", ja: "先生は水は100度で沸騰すると言った。", alt: ["boil", "boiling", "is boil"], tip: "いつも本当のことは現在形のまま" },
    { en: "She told me that she [would visit] Kyoto the next day.", ja: "彼女は次の日に京都を訪れると私に言った。", alt: ["will visits", "would visited", "visits will"], tip: "will visit → would visit" }
  ]
};

/* ===== c2-u08 強調・倒置 ===== */
window.LX.plus["c2-u08"] = {
  core: {
    ico: "🔦",
    catch: "強調はスポットライト、倒置はドラムロール",
    say: "It is ～ that で一部にライトを当てる。否定語を先頭に出すと、語順がひっくり返って強く響く。",
    fig: { t: "slots", parts: [["It was", "枠"], ["Tom", "主役"], ["that", "枠"], ["broke the window", "残り"]] }
  },
  points: [
    {
      h: "It is と that ではさむ",
      body: "強めたい語句を It is と that ではさむだけ。残りは後ろへ。「割ったのは トムだよ」と指さすイメージ。人なら who も可。",
      form: "It is ＋ 強めたい語句 ＋ that ～",
      ex: "It was Tom [that] broke the window.",
      exja: "窓を割ったのはトムだった。",
      fig: { t: "slots", parts: [["It was", "枠"], ["Tom", "主役"], ["that", "枠"], ["broke the window", "残り"]] },
      ng: { bad: "It was Tom which broke the window.", good: "It was Tom that broke the window.", why: "人を強めるときは that か who。which は使わない" }
    },
    {
      h: "do／does／did で「本当に」",
      body: "動詞の前に do・does・did を置くと「本当に〜する」と強まる。後ろの動詞は必ず原形。声を大きくするイメージ。",
      form: "S ＋ do／does／did ＋ 原形",
      ex: "I [did] call you yesterday.",
      exja: "昨日 本当に電話したんだよ。",
      ng: { bad: "She does loves her dog.", good: "She does love her dog.", why: "does の後ろは原形。s はつけない" }
    },
    {
      h: "否定語が先頭なら 疑問文の語順",
      body: "Never・Little などを文頭に出すと、後ろが疑問文の形（have I／did I）になる。「まさか！」の驚きが強まる。",
      form: "Never ＋ have／did ＋ S ＋ V",
      ex: "Never [have I] seen such a beautiful view.",
      exja: "こんなに美しい景色は見たことがない。",
      fig: { t: "slots", parts: [["Never", "否定"], ["have", "V"], ["I", "S"], ["seen", "V"]] },
      ng: { bad: "Never I have seen such a view.", good: "Never have I seen such a view.", why: "否定語が先頭なら have と I を入れかえる" }
    }
  ],
  drills: [
    { en: "It was Ken [that] found my wallet.", ja: "私の財布を見つけたのはケンだった。", alt: ["what", "which it", "where"], tip: "It was ＋ 人 ＋ that ～" },
    { en: "It is this book [that] changed my life.", ja: "私の人生を変えたのはこの本だ。", alt: ["what", "who", "where"], tip: "物を強めるときは that" },
    { en: "It was yesterday [that] I met him.", ja: "私が彼に会ったのは昨日だった。", alt: ["what", "which", "who"], tip: "時を強めても that" },
    { en: "It was my sister [who] made this cake.", ja: "このケーキを作ったのは姉だった。", alt: ["which", "whom", "what"], tip: "人を強めるなら who も OK" },
    { en: "I [do] remember your name.", ja: "あなたの名前は本当に覚えているよ。", alt: ["does", "am", "doing"], tip: "I には do ＋ 原形" },
    { en: "He [did] finish his homework.", ja: "彼は本当に宿題を終えたんだ。", alt: ["done", "was", "doing"], tip: "過去の強調は did ＋ 原形" },
    { en: "She [does] look happy today.", ja: "彼女は今日 本当にうれしそうだ。", alt: ["do", "is", "doing"], tip: "3人称単数は does ＋ 原形" },
    { en: "Never [have I] seen such a big fish.", ja: "こんなに大きな魚は見たことがない。", alt: ["I have", "I had", "have me"], tip: "Never の後ろは have ＋ I" },
    { en: "Rarely [does she] eat breakfast.", ja: "彼女はめったに朝食を食べない。", alt: ["she does", "she", "do she"], tip: "Rarely も否定語 → does she" },
    { en: "Not until midnight [did he] come home.", ja: "真夜中になってやっと彼は帰ってきた。", alt: ["he did", "he", "does he"], tip: "Not until ～ の後ろは did ＋ S" },
    { en: "Hardly [had I] arrived when it began to rain.", ja: "着いたとたんに雨が降り出した。", alt: ["I had", "I have", "had me"], tip: "Hardly had S ＋ 過去分詞 when ～" },
    { en: "Only after the test [did I] understand the rule.", ja: "テストの後になって初めて そのルールがわかった。", alt: ["I did", "I", "do I"], tip: "Only ＋ 時 が先頭でも倒置" }
  ]
};

/* ===== c2-u09 パラグラフの組み立て ===== */
window.LX.plus["c2-u09"] = {
  core: {
    ico: "🍔",
    catch: "段落はハンバーガー：主張で始めて主張で閉じる",
    say: "上のパン＝主張、具＝理由と例、下のパン＝まとめ。この順なら 読む人が迷わない。",
    fig: { t: "flow", steps: ["主張", "理由①", "理由②・例", "まとめ"] }
  },
  points: [
    {
      h: "最初の1文で言い切る",
      body: "パラグラフの1文目（トピックセンテンス）で、言いたいことを先に言う。日本語の「結論は最後」とは逆。",
      form: "I believe that ～.",
      ex: "[I believe that] school uniforms are useful.",
      exja: "制服は役に立つと私は思う。",
      ng: { bad: "I am believe that uniforms are useful.", good: "I believe that uniforms are useful.", why: "believe は動詞。am はいらない" }
    },
    {
      h: "理由に番号、例で具体化",
      body: "First, Second で理由に番号をつけると読みやすい。For example で具体例を足すと 説得力がぐんと上がる。",
      form: "First／Second／For example",
      ex: "[First], uniforms save students time.",
      exja: "第一に、制服は生徒の時間を節約する。",
      fig: { t: "flow", steps: ["理由①", "理由②", "具体例"] },
      ng: { bad: "At first, uniforms save time.", good: "First, uniforms save time.", why: "At first は「はじめは（後で変わる）」の意味" }
    },
    {
      h: "最後にもう一度主張",
      body: "For these reasons や In conclusion で、最初の主張を言いかえて締める。最後に新しい話は出さない。",
      form: "For these reasons, ～.",
      ex: "[For these reasons], I support school uniforms.",
      exja: "これらの理由から、私は制服に賛成だ。",
      ng: { bad: "For this reasons, I support it.", good: "For these reasons, I support it.", why: "reasons は複数なので these" }
    }
  ],
  drills: [
    { en: "[In my opinion], students should learn cooking.", ja: "私の意見では、生徒は料理を学ぶべきだ。", alt: ["In my opinion of", "On my opinion", "By my opinion"], tip: "意見の始めに In my opinion," },
    { en: "[I think that] sports are good for students.", ja: "スポーツは生徒によいと私は思う。", alt: ["I thinking that", "I am think that", "I think to"], tip: "主張の1文目：I think that ～" },
    { en: "[First], cooking helps us stay healthy.", ja: "第一に、料理は健康でいる助けになる。", alt: ["Firstly of all", "At first of", "The first"], tip: "理由①は First," },
    { en: "[Second], it saves money.", ja: "第二に、お金の節約になる。", alt: ["Two", "Secondary", "The second of"], tip: "理由②は Second," },
    { en: "[Finally], it is a useful life skill.", ja: "最後に、それは役に立つ生活の技術だ。", alt: ["Final", "At finally", "In finally"], tip: "最後の理由は Finally," },
    { en: "[For example], I can make curry for my family.", ja: "例えば、私は家族にカレーを作れる。", alt: ["For examples", "By example", "Example for"], tip: "具体例は For example," },
    { en: "[For instance], many students join clubs.", ja: "例えば、多くの生徒が部活に入っている。", alt: ["For instances", "In instance", "By instance"], tip: "For example と同じ意味" },
    { en: "[In addition], exercise reduces stress.", ja: "さらに、運動はストレスを減らす。", alt: ["In addition to", "Addition", "In add"], tip: "理由を足すなら In addition," },
    { en: "[Moreover], it helps us make friends.", ja: "そのうえ、友だちを作る助けにもなる。", alt: ["More", "Moreover of", "Most over"], tip: "Moreover, ＝ そのうえ" },
    { en: "[In conclusion], I believe sports are important.", ja: "結論として、スポーツは大切だと思う。", alt: ["In conclude", "At conclusion", "To conclusion"], tip: "まとめの合図 In conclusion," },
    { en: "[For these reasons], students should learn to cook.", ja: "これらの理由から、生徒は料理を学ぶべきだ。", alt: ["By these reason", "For this reasons", "Because these reasons"], tip: "主張をもう一度：For these reasons," },
    { en: "[To sum up], reading has many benefits.", ja: "まとめると、読書には多くの利点がある。", alt: ["To summing up", "For sum up", "To sum"], tip: "To sum up, ＝ まとめると" }
  ]
};

/* ===== c2-u10 賛成・反対を述べる ===== */
window.LX.plus["c2-u10"] = {
  core: {
    ico: "🙋",
    catch: "まず旗を立てる：賛成か反対かを最初に宣言",
    say: "立場→理由→相手への一言、の順で言えば、短くても伝わる意見になる。",
    fig: { t: "flow", steps: ["立場", "理由", "相手を認める", "反論"] }
  },
  points: [
    {
      h: "agree は動詞！am はいらない",
      body: "agree は「賛成する」という動詞。I am agree は ✕。正しくは I agree with ～。反対は disagree。",
      form: "I agree／disagree with ＋ 意見",
      ex: "I [agree with] this idea.",
      exja: "私はこの考えに賛成だ。",
      fig: { t: "vs", a: ["I agree with you.", "○ agree は動詞"], b: ["I am agree with you.", "✕ be動詞は不要"] },
      ng: { bad: "I'm agree with the plan.", good: "I agree with the plan.", why: "agree は動詞なので be動詞はつけない" }
    },
    {
      h: "理由は because で続ける",
      body: "意見を言ったら、すぐ This is because S V. で理由を続ける。because の後ろは文（主語＋動詞）。",
      form: "～. This is because S V.",
      ex: "[This is because] it saves energy.",
      exja: "なぜならエネルギーの節約になるからだ。",
      ng: { bad: "This is because of it saves energy.", good: "This is because it saves energy.", why: "後ろが文（S＋V）なら of はいらない" }
    },
    {
      h: "認めてから反論が大人の技",
      body: "I see your point, but ～ で相手を一度認めてから反論すると、角が立たず 説得力も上がる。",
      form: "I see your point, but ～.",
      ex: "[I see your point], but I have a different opinion.",
      exja: "言いたいことはわかるが、私は別の意見だ。",
      fig: { t: "flow", steps: ["相手を認める", "but", "自分の意見"] },
      ng: { bad: "I look your point, but I disagree.", good: "I see your point, but I disagree.", why: "「わかる」の意味は see。look は使わない" }
    }
  ],
  drills: [
    { en: "I [agree with] you.", ja: "私はあなたに賛成だ。", alt: ["agree to with", "am agree with", "agreeing with"], tip: "agree with ＋ 人・意見" },
    { en: "I [completely agree] with this plan.", ja: "私はこの計画に全面的に賛成だ。", alt: ["complete agree", "am completely agree", "completely agreeing"], tip: "副詞 completely ＋ 動詞 agree" },
    { en: "I [disagree with] this rule.", ja: "私はこの規則に反対だ。", alt: ["disagree to", "am disagree with", "not agree with"], tip: "反対は disagree with" },
    { en: "I [don't agree with] the plan.", ja: "私はその計画に賛成しない。", alt: ["am not agree with", "not agree with", "don't agree to with"], tip: "否定は don't agree with" },
    { en: "I'm [in favor of] online classes.", ja: "私はオンライン授業に賛成だ。", alt: ["in favor to", "favor of", "on favor of"], tip: "be in favor of ～ ＝ 賛成" },
    { en: "I'm [against] the new school rule.", ja: "私は新しい校則に反対だ。", alt: ["against to", "opposite", "oppose"], tip: "be against ～ ＝ 反対" },
    { en: "I [support] the idea of a four-day week.", ja: "私は週4日制の考えを支持する。", alt: ["am support", "supporting", "support to"], tip: "support ＋ 意見 ＝ 支持する" },
    { en: "[This is because] uniforms save time.", ja: "なぜなら制服は時間の節約になるからだ。", alt: ["This is why because", "Because of", "That because"], tip: "理由の文：This is because S V" },
    { en: "The reason [is that] it costs too much.", ja: "その理由は、費用がかかりすぎることだ。", alt: ["is because of", "is what", "is of"], tip: "The reason is that S V" },
    { en: "[That's why] I agree with the plan.", ja: "だから私はその計画に賛成なのだ。", alt: ["That's because why", "That's reason", "That why"], tip: "That's why ～ ＝ だから～" },
    { en: "I [see your point], but it's not realistic.", ja: "言いたいことはわかるが、それは現実的ではない。", alt: ["look your point", "see your pointing", "watch your point"], tip: "認めてから but で反論" },
    { en: "That [may be true], but we need more time.", ja: "それはそうかもしれないが、もっと時間が必要だ。", alt: ["may true", "may be truth", "maybe true"], tip: "That may be true, but ～" }
  ]
};

/* ===== c2-u11 比べる・対比する ===== */
window.LX.plus["c2-u11"] = {
  core: {
    ico: "⚖️",
    catch: "対比は天びん：2つを同じ物差しで並べる",
    say: "while／whereas は1文の中で、On the other hand は文と文の間で、左右のちがいを見せる。",
    fig: { t: "vs", a: ["Trains are fast.", "速い"], b: ["Buses are cheap.", "安い"] }
  },
  points: [
    {
      h: "1文で対比：while",
      body: "S V, while S V. で「〜だが一方…」。2つの文を1本につなぐ 天びんの支点のイメージ。whereas は かたい書き言葉。",
      form: "S V, while／whereas S V",
      ex: "I like dogs, [while] my sister likes cats.",
      exja: "私は犬が好きだが、妹は猫が好きだ。",
      fig: { t: "slots", parts: [["I like dogs,", "A"], ["while", "支点"], ["she likes cats", "B"]] },
      ng: { bad: "I like dogs. While my sister likes cats.", good: "I like dogs, while my sister likes cats.", why: "while は接続詞。文を切らずにつなぐ" }
    },
    {
      h: "文と文の間に置く対比語",
      body: "On the other hand は2つの文の間に置き、後ろにコンマ。「もう片方の手には」＝反対側の面を見せる合図。",
      form: "～. On the other hand, ～.",
      ex: "Trains are fast. [On the other hand], buses are cheap.",
      exja: "電車は速い。一方、バスは安い。",
      ng: { bad: "In the other hand, buses are cheap.", good: "On the other hand, buses are cheap.", why: "手の「上」に乗せるイメージで on" }
    },
    {
      h: "比べる基準を先に置く",
      body: "Compared with A, ～ で「Aとくらべると〜」。基準を先に置いて 物差しを決める。Unlike A（Aとちがって）も便利。",
      form: "Compared with A, B is ～.",
      ex: "[Compared with] last year, it is warmer this year.",
      exja: "去年とくらべて、今年は暖かい。",
      fig: { t: "scale", left: "寒い", right: "暖かい", items: [["last year", 30], ["this year", 75]] },
      ng: { bad: "Compare with last year, it is warmer.", good: "Compared with last year, it is warmer.", why: "「くらべられると」なので過去分詞 Compared" }
    }
  ],
  drills: [
    { en: "My father likes coffee, [while] my mother likes tea.", ja: "父はコーヒーが好きだが、母は紅茶が好きだ。", alt: ["during", "since then", "but while"], tip: "1文の中の対比は while" },
    { en: "Some students walk to school, [whereas] others take the bus.", ja: "歩いて通学する生徒もいれば、バスに乗る生徒もいる。", alt: ["where", "whatever", "whether"], tip: "whereas ＝ 一方（かたい語）" },
    { en: "I am good at math, [while] my brother is good at art.", ja: "私は数学が得意だが、弟は美術が得意だ。", alt: ["during", "since then", "but while"], tip: "A, while B で左右を比べる" },
    { en: "Living in the country is relaxing. On [the other hand], it is inconvenient.", ja: "田舎暮らしはのんびりできる。一方で不便だ。", alt: ["other hand", "the another hand", "the others hand"], tip: "On the other hand ＝ 一方で" },
    { en: "E-books are light. [However], some people prefer paper books.", ja: "電子書籍は軽い。しかし紙の本を好む人もいる。", alt: ["Although", "But also", "Despite"], tip: "文頭の However, ＋ コンマ" },
    { en: "[Compared with] my old phone, this one is much faster.", ja: "前のスマホとくらべて、これはずっと速い。", alt: ["Compare with", "Comparing to with", "Compared"], tip: "Compared with A, ～" },
    { en: "[Unlike] his brother, Ken loves sports.", ja: "兄とちがって、ケンはスポーツが大好きだ。", alt: ["Unlike of", "Not like", "Dislike"], tip: "Unlike A, ～ ＝ Aとちがって" },
    { en: "[Like] Japan, Italy has many old buildings.", ja: "日本と同じように、イタリアには古い建物が多い。", alt: ["Likely", "Liking", "Alike"], tip: "共通点は Like A, ～" },
    { en: "My sister is tall. [Similarly], my brother is tall.", ja: "姉は背が高い。同様に、兄も背が高い。", alt: ["Similar", "Same as", "Likely"], tip: "同じ点を足すなら Similarly," },
    { en: "[Both] Tokyo and Osaka are big cities.", ja: "東京も大阪も大都市だ。", alt: ["Either", "Neither", "Each"], tip: "both A and B ＝ AもBも" },
    { en: "[In contrast], the countryside has fewer jobs.", ja: "対照的に、田舎は仕事が少ない。", alt: ["In contrary", "On contrast", "By contrast of"], tip: "In contrast, ＝ 対照的に" },
    { en: "Smartphones are useful. At [the same time], they can be harmful.", ja: "スマホは便利だ。同時に、害にもなりうる。", alt: ["same time", "the same times", "a same time"], tip: "At the same time, ＝ 同時に" }
  ]
};

/* ===== c2-u12 原因と結果 ===== */
window.LX.plus["c2-u12"] = {
  core: {
    ico: "🎳",
    catch: "原因と結果はドミノ：倒れる順に言葉でつなぐ",
    say: "原因→結果の流れを、because of・as a result・lead to などの つなぎ言葉で見える化する。",
    fig: { t: "flow", steps: ["原因", "つなぎ言葉", "結果"] }
  },
  points: [
    {
      h: "後ろが文か名詞かで決める",
      body: "後ろが文（S＋V）なら because、名詞だけなら because of／due to。後ろを見て決めるのがコツ。",
      form: "because S V ／ because of ＋ 名詞",
      ex: "The game was canceled [because of] the rain.",
      exja: "雨のため 試合は中止になった。",
      fig: { t: "vs", a: ["because it rained", "後ろが文"], b: ["because of the rain", "後ろが名詞"] },
      ng: { bad: "The game was canceled because the rain.", good: "The game was canceled because of the rain.", why: "the rain は名詞だけなので because of" }
    },
    {
      h: "結果の合図：As a result",
      body: "原因の文を言い切ってから、次の文の頭に As a result, や Therefore, を置く。ドミノが次に倒れる合図。",
      form: "原因. As a result, 結果.",
      ex: "He practiced hard. [As a result], he won.",
      exja: "彼は一生懸命練習した。その結果、勝った。",
      fig: { t: "flow", steps: ["原因", "その結果", "結果"] },
      ng: { bad: "As result, he won the game.", good: "As a result, he won the game.", why: "a を忘れずに：As a result" }
    },
    {
      h: "原因を主語にしてつなぐ",
      body: "原因を主語にして、動詞で結果につなぐ。lead to は「〜につながる」、cause は「〜を引き起こす」。",
      form: "原因 ＋ lead to／cause ＋ 結果",
      ex: "Lack of sleep can [lead to] health problems.",
      exja: "睡眠不足は健康問題につながりうる。",
      fig: { t: "slots", parts: [["Lack of sleep", "原因"], ["can lead to", "V"], ["health problems", "結果"]] },
      ng: { bad: "Lack of sleep can leads to problems.", good: "Lack of sleep can lead to problems.", why: "can の後ろは原形。s はつけない" }
    }
  ],
  drills: [
    { en: "We stayed inside [because of] the heat.", ja: "暑さのため私たちは室内にいた。", alt: ["because", "because for", "since of"], tip: "名詞の前は because of" },
    { en: "The flight was delayed [due to] heavy fog.", ja: "濃い霧のため飛行機が遅れた。", alt: ["due", "because", "owing"], tip: "due to ＋ 名詞" },
    { en: "[Thanks to] your help, I passed the test.", ja: "あなたが手伝ってくれたおかげで、テストに合格した。", alt: ["Thank to", "Thanks for", "Thank you to"], tip: "よい結果の原因は Thanks to" },
    { en: "She was late [because] she missed the bus.", ja: "彼女はバスに乗り遅れたので遅刻した。", alt: ["because of", "due to", "owing to"], tip: "後ろが文（S＋V）なら because" },
    { en: "I studied hard. [As a result], I passed the exam.", ja: "一生懸命勉強した。その結果、試験に合格した。", alt: ["As result", "In a result", "As the result of"], tip: "結果の文の頭に As a result," },
    { en: "He ate too much. [Therefore], he felt sick.", ja: "彼は食べすぎた。そのため気分が悪くなった。", alt: ["Because", "Although", "So that"], tip: "Therefore, ＝ だから（かたい語）" },
    { en: "It was very cold, [so] the lake froze.", ja: "とても寒かったので、湖が凍った。", alt: ["because", "although", "since"], tip: "原因, so 結果" },
    { en: "Eating too much sugar can [lead to] health problems.", ja: "砂糖のとりすぎは健康問題につながりうる。", alt: ["lead", "lead with", "leads to"], tip: "can ＋ lead to ＋ 結果" },
    { en: "Smoking [causes] serious diseases.", ja: "喫煙は深刻な病気を引き起こす。", alt: ["causes to", "is caused", "because"], tip: "原因 ＋ causes ＋ 結果" },
    { en: "Heavy rain [caused] the river to flood.", ja: "大雨で川があふれた。", alt: ["caused to", "made", "was caused"], tip: "cause ＋ O ＋ to ～" },
    { en: "The storm was [the cause of] the delay.", ja: "その嵐が遅れの原因だった。", alt: ["the cause for of", "the cause from", "the cause by"], tip: "the cause of ～ ＝ ～の原因" },
    { en: "[Because of this], many shops closed early.", ja: "このため、多くの店が早く閉まった。", alt: ["Because this", "Because of so", "Because for this"], tip: "this は名詞 → Because of this" }
  ]
};

/* ===== 解説（なぜ？・それでもわからない人へ）=====
   W(単元, ポイント[[why, easy]×3], 演習[[p, why]×12], 例文[[p, why]×6]) */
(function (P) {
  function W(id, pts, dr, sw) {
    var u = P[id];
    pts.forEach(function (x, i) { u.points[i].why = x[0]; u.points[i].easy = x[1]; });
    dr.forEach(function (x, j) { u.drills[j].p = x[0]; u.drills[j].why = x[1]; });
    u.swhy = sw.map(function (x) { return { p: x[0], why: x[1] }; });
  }

  W("c2-u07", [
    ["英語は「言った時点」から見て時制を決める。said で舞台が過去に移るので、中の動詞もその過去に合わせてずらす。", "① 昨日「眠い」と言った。② 今それを人に話す。③ 「眠かった」と言うよね。英語も同じで、is が was になる。"],
    ["言った時がすでに過去。それよりさらに前のことは、もう一段過去の had＋過去分詞で表して、順番をはっきりさせる。", "階段を思いうかべよう。今→1段下が「言った時」(過去)→2段下が「もっと前」(had＋過去分詞)。2段下りたら had。"],
    ["質問をそのまま入れずに「〜かどうか」に変えるから if。命令は「〜するように」だから to＋動詞の原形でつなぐ。", "① 「お腹すいた？」→「お腹すいたかどうか」＝ if。② 「片づけなさい」→「片づけるように」＝ to 片づける。③ 中は ふつうの文の順番。"]
  ], [
    [0, "said が過去なので is を過去にずらして was。be は原形、were は she に合わない。"],
    [0, "said に合わせて can を過去の could に。can to／could to のように to は入らない。"],
    [0, "thought が過去なので will を would に。would to は to が余分、is は時制がずれる。"],
    [1, "見たのは「話した時」より前なので had seen。has saw は形がこわれ、had see は原形でダメ。"],
    [0, "said に合わせて過去進行形 was studying に。was study は -ing がなく、is は今の形。"],
    [2, "「〜しないように」は not を to の前に置いて not to。don't や no to はこの形では使えない。"],
    [2, "tell 人 to 〜「人に〜するように言う」の形。run や running だと told us とつながらない。"],
    [2, "「〜かどうか」をたずねたので if。that は質問には使わず、do は文の途中に入らない。"],
    [2, "疑問詞のあとはふつうの文の順で what I wanted。what did／what do は疑問文の順でダメ。"],
    [2, "when のあとは she would leave の順。when will／when did は疑問文の語順なので×。"],
    [2, "水が100度で沸くのは いつも本当のことなので現在形のまま boils。boil は主語 water に合わない。"],
    [0, "said に合わせて will を would に。would のあとは原形なので visited は×。"]
  ], [
    [0, "said が過去なので is を was に。be は原形、were は he に合わず、being は動詞にならない。"],
    [0, "thought が過去なので will を would に。is／does は「今」の形で、過去の舞台とずれる。"],
    [1, "なくしたのは話すより前なので had lost。have lost は今が基準、has／had lose は原形で×。"],
    [2, "命令は tell 人 to 〜 で伝える。clean や cleaning は told me に続かない。"],
    [2, "疑問詞のあとはふつうの文の順で where I lived。where did／where do は疑問文の順で×。"],
    [2, "地球が太陽のまわりを回るのは いつも本当のことなので現在形 goes のまま。go は主語に合わない。"]
  ]);

  W("c2-u08", [
    ["It is ＿ that 〜 は、目立たせたい語句だけを前の特別席に出し、残りを that 以下に回す形。だから大事な所に光が当たる。", "① 元の文「トムが窓を割った」。② 言いたいのは「トム」。③ It was トム that 窓を割った。＝「窓を割ったのは トムなんだよ」。"],
    ["do／does／did は、ふつうは隠れている「する」を表に出したもの。わざわざ出すから「本当に」の強めになる。後ろは原形。", "「I called.」を大声で言うかわりに、I DID call. と書く。did に「ちゃんと」の気持ちがこもる。did のあとは call のまま。"],
    ["否定の語を文頭に出すと聞き手が「えっ？」と身構える。その驚きを表すため、疑問文と同じ語順にひっくり返す決まり。", "① I have never seen 〜。② never を先頭へ。③ 残りを疑問文の形 have I seen に。「一度も見たことない、なんて！」の気持ち。"]
  ], [
    [0, "強めたいのは Ken。It was ＿ that 〜 の形なので that。what／where は強調構文に使えない。"],
    [0, "「この本こそが」を強める It is ＿ that。what は前に名詞があるので不可、who は物に使えない。"],
    [0, "強めるのは時の言葉 yesterday でも that で受ける。what／which／who は時の語句には合わない。"],
    [0, "強めるのが人 my sister なので who も使える。which は物用、whom は主語の位置に使えない。"],
    [1, "主語が I で今の話なので do＋原形 remember。does は三人称、am・doing は強めの形にならない。"],
    [1, "過去の話を強めるので did＋原形 finish。done・was・doing だと finish とつながらない。"],
    [1, "主語 she で今の話なので does＋原形 look。do は she と×、is・doing は強めにならない。"],
    [2, "Never が文頭なので疑問文の順 have I。I have はふつうの順、have me は主語が me で×。"],
    [2, "Rarely（めったに〜ない）が文頭なので does she eat の順。she does はふつうの順なので×。"],
    [2, "Not until が先頭なので did he come の順。he did はふつうの順、does は過去と×。"],
    [2, "Hardly が先頭なので had I arrived の順。I had はふつうの順、had me は主語が×。"],
    [2, "Only after 〜 が先頭で疑問文の順 did I understand。I did／I はふつうの順でダメ。"]
  ], [
    [0, "場所 in Kyoto を強めても受けは that。which／what は不可、where it は it が余分。"],
    [0, "強めるのが人 you なので who。which は物、whom は主語に使えない、what は前に名詞があり×。"],
    [1, "主語 she で今の話なので does＋原形 love。do は she に合わず、is・doing は強めにならない。"],
    [2, "否定の Little が先頭なので did I dream の順。I did／I dreamed はふつうの順で×。"],
    [2, "Not only が先頭なので did he sing の順。he did・he はふつうの順、does は過去と×。"],
    [2, "Only then が先頭なので did I realize の順。I did・I はふつうの順、do は過去と×。"]
  ]);

  W("c2-u09", [
    ["読み手は最初の1文で「何の話か」を決めて読み進める。だから結論を先に言うと、後ろの理由がすべてそこにつながって伝わる。", "道案内で「駅に行きます」と最初に言えば、あとの「右・左」が全部わかる。英語の文章も、ゴールを最初に言ってから道順を話す。"],
    ["理由は数があると整理して聞ける。そして「例えば」の具体例は、頭の中に場面が見えるので、ただの理由より信じてもらいやすい。", "① First（1つ目）② Second（2つ目）と指で数えるように言う。③ For example で「たとえば うちでは…」と実際の話をそえる。"],
    ["最後に主張をくり返すと、読み手の頭に答えが残る。新しい話を出すと、どれが言いたいことかぼやけてしまう。", "サンドイッチを思いうかべよう。上のパン＝主張、中の具＝理由と例、下のパン＝もう一度主張。下のパンがないと くずれる。"]
  ], [
    [0, "In my opinion「私の意見では」の決まり文句。on や by ではなく in、of も付けない。"],
    [0, "think は動詞なので I think that。I am think は動詞が2つ、think to は形がちがう。"],
    [1, "1つ目は First,。Firstly of all という形はなく、At first は「最初は」の意味。"],
    [1, "2つ目の理由は Second,。Two は数そのもの、Secondary は「二次的な」で意味がちがう。"],
    [2, "最後の理由は Finally,。Final は形容詞、at や in は付けない。"],
    [1, "具体例は For example,。examples と複数にせず、by example は使わない。"],
    [1, "For instance も「例えば」。instances と複数にせず、in や by では始めない。"],
    [1, "In addition,「さらに」で文頭に置く。In addition to は後ろに名詞が必要なのでここでは×。"],
    [1, "Moreover は1語で「その上」。More だけでは意味が通らず、of は付けない。"],
    [2, "まとめの合図は In conclusion。conclude は動詞なので×、at や to では始めない。"],
    [2, "these は複数なので reasons。this reasons は数が合わず、Because these は形が×。"],
    [2, "To sum up「まとめると」の決まり文句。summing や for にはしない。sum だけでは×。"]
  ], [
    [0, "believe は動詞なので I believe that。am believe は動詞が2つで×。"],
    [1, "1つ目の理由は First,。Firstly of all という形はなく、The first は合図にならない。"],
    [1, "2つ目は Second,。Two は数、Secondary は「二次的な」、The second of は×。"],
    [1, "具体例は For example,。examples と複数にせず、By example などは英語にない形。"],
    [1, "In addition,「さらに」。In addition to は後ろに名詞が必要、Addition だけは×。"],
    [2, "these（これらの）は複数なので reasons。For this reasons は数が合わず、By は使わない。"]
  ]);

  W("c2-u10", [
    ["agree は「賛成する」という動きそのもの（動詞）。am と agree を並べると動詞が2つになるので、am はいらない。", "「I am 走る」とは言わないよね。agree も「賛成する」という動きの言葉。だから I agree だけでOK。人や考えには with をつける。"],
    ["意見だけでは「なんで？」と聞かれる。This is because のあとに主語と動詞の文を続けると、理由が1つの文で言い切れる。", "① I agree.（意見）② This is because（なぜなら）③ it saves energy.（理由の文）。because のあとは ふつうの文を置くだけ。"],
    ["相手を先に認めると、相手は「聞いてもらえた」と感じて耳をかたむける。だから but のあとの反論が受け入れられやすい。", "けんかにしないコツ。① 「なるほどね」と受け止める。② but「でもね」。③ 自分の意見。キャッチボールで、まず受けてから投げ返す感じ。"]
  ], [
    [0, "agree は動詞なので am は不要。人に賛成は agree with。to with は前置詞が2つで×。"],
    [0, "completely（完全に）が agree を強める。complete は形容詞で×、am を付けると動詞が2つ。"],
    [0, "disagree with「〜に反対する」。to ではなく with、am disagree は動詞が2つで×。"],
    [0, "否定は don't agree with。am not agree は動詞が2つ、not agree だけは×。"],
    [0, "in favor of「〜に賛成で」の決まった形。in favor to／on favor of は前置詞がちがう。"],
    [0, "against「〜に反対で」は前置詞なので後ろに名詞。against to は前置詞が2つで×。"],
    [0, "support は動詞「支持する」。am support は動詞が2つ、support to は to が余分。"],
    [1, "理由を続けるのは This is because ＋文。Because of は後ろが名詞だけのときに使う。"],
    [1, "The reason is that ＋文「理由は〜だ」。is because of は後ろが文なので合わない。"],
    [1, "That's why ＋文「だから〜」で結果を言う。That's because why のように2つ重ねない。"],
    [2, "相手の言い分がわかった＝see your point。look や watch は「目で見る」だけで意味がちがう。"],
    [2, "That may be true「それは本当かもしれない」。may のあとは動詞の原形 be が必要。"]
  ], [
    [0, "agree は動詞なので am は不要。考えに賛成は agree with。to with は前置詞が2つ。"],
    [0, "disagree with で「〜に反対」。am disagree は動詞が2つで×、not は don't が必要。"],
    [0, "in favor of「〜に賛成で」の決まり文句。in favor to や on favor of は前置詞がちがう。"],
    [0, "against は前置詞で後ろに名詞。against to は前置詞が2つ、oppose は am と並ばない。"],
    [1, "理由の文を続けるので This is because ＋文。Because of は後ろが名詞のときだけ。"],
    [2, "「言い分はわかる」は I see your point。look・watch は目で見るだけ、pointing は×。"]
  ]);

  W("c2-u11", [
    ["while は2つの文を1つにつなぐ言葉。だから A, while B の1文の中で、2つを左右に置いて差を見せられる。", "シーソーを思いうかべよう。左に「私は犬」、右に「妹はねこ」。while はまん中の支え。1本の板で2人を比べられる。"],
    ["On the other hand は「もう一方の手では」。片手ずつ別のものを持つように、前の文と反対の面を次の文で見せる合図。", "① 右手に「電車は速い」。② 左手に持ちかえて On the other hand,「バスは安い」。③ 文と文の間に置き、後ろにコンマ。"],
    ["比べるには何が基準かを先に決める必要がある。Compared with A を先に置くと、聞き手はAを物差しにして後ろを読める。", "身長をはかるときは まず物差しを当てる。Compared with 去年（物差し）→ 今年は暖かい。先に「何と比べて」を言えば迷わない。"]
  ], [
    [0, "2つの文を1文で対比するので while。during は後ろに名詞だけ、but while は2つ重ねで×。"],
    [0, "「〜だが一方」で対比する whereas。where は場所、whether は「〜かどうか」で意味がちがう。"],
    [0, "2つの文を1文で比べる while。since then は「それ以来」で、対比の意味にならない。"],
    [1, "On the other hand の決まった形。the を落とさず、another や others にはしない。"],
    [1, "文の頭で「しかし」は However,。Although は後ろに文が続く形で、ここでは×。"],
    [2, "Compared with A「Aと比べると」。Compare は動詞の原形で×、with を落とすと形がくずれる。"],
    [2, "Unlike A「Aとちがって」は1語。Unlike of は of が余分、Dislike は「きらう」で別の意味。"],
    [2, "Like A「Aと同じように」。Likely は「たぶん」、Alike は名詞の前に置けないので×。"],
    [2, "前の文と同じ様子なので Similarly,「同じように」。Similar は形容詞で文頭の合図にならない。"],
    [2, "Both A and B「AもBも」。Either は or、Neither は nor とセットなので×。"],
    [1, "In contrast,「対照的に」の決まり文句。In contrary／On contrast は形がちがう。"],
    [1, "At the same time「同時に／その一方で」。the を落とさず、times と複数にしない。"]
  ], [
    [0, "2つの文を1文で対比する while。during は後ろに名詞だけ、but while は接続詞が2つで×。"],
    [0, "whereas は「〜なのに対し」。where は場所、whatever は「何でも」、whether は「かどうか」。"],
    [1, "On the other hand の決まった形。In ではなく On、hand は1つなので hands にしない。"],
    [2, "Compared with A「Aと比べると」。Compare は原形で×、Compared だけでは with 不足。"],
    [1, "前と反対の内容なので However,。Although は後ろに文をつなぐ語、Despite は後ろが名詞。"],
    [2, "同じ様子を加えるので Similarly,。Similar は形容詞、Likely は「たぶん」で意味がちがう。"]
  ]);

  W("c2-u12", [
    ["because は文と文をつなぐ接着剤、because of は名詞をつなぐ接着剤。つなぐ相手がちがうので、後ろの形で決まる。", "後ろをチェック！① 「彼が寝坊した」のように 主語と動詞がある → because。② 「雨」のように名詞だけ → because of。"],
    ["原因の文を先に終えてから、次の文の頭で「その結果」と言うと、出来事の順番どおりに話が進むので わかりやすい。", "ドミノたおし。① 1枚目「たくさん練習した。」② 合図 As a result,「その結果」③ 2枚目「勝った。」。合図は2つ目の文の先頭に。"],
    ["原因を主語に置くと「原因→結果」が左から右へ一直線に並ぶ。lead to や cause がその矢印の役目をする。", "矢印→を言葉にしたのが lead to と cause。「ねぶそく → 体の不調」を、Lack of sleep leads to 体の不調。と左から読むだけ。"]
  ], [
    [0, "後ろが名詞だけなので because of。because は後ろに文が必要、since of はない形。"],
    [0, "後ろが名詞 heavy fog なので due to。due だけでは to が足りず、because は文が必要。"],
    [0, "「〜のおかげで」は Thanks to。Thank to は s が必要、Thanks for は「〜をありがとう」。"],
    [0, "後ろが主語＋動詞の文なので because。because of／due to は後ろが名詞のとき。"],
    [1, "As a result,「その結果」の決まった形。a を落とさず、in ではなく as を使う。"],
    [1, "前の文の結果を言うので Therefore,。Because は理由、Although は逆の内容をつなぐ語で×。"],
    [1, "「だから」と結果を文でつなぐ so。because・since は逆に原因をつなぐ語になる。"],
    [2, "can のあとは原形 lead、さらに to が必要。leads は can のあとに来られない。"],
    [2, "cause は後ろにすぐ名詞（引き起こすもの）。causes to は to が余分、is caused は受け身。"],
    [2, "cause A to 〜「Aに〜させる」。caused to は A がない。made なら to は付かないので×。"],
    [2, "the cause of A「Aの原因」。for of は前置詞が2つ、from／by では「〜の原因」にならない。"],
    [0, "this は名詞なので Because of this。Because this は of 不足で×。"]
  ], [
    [0, "後ろが名詞だけなので because of。because は後ろに文が必要、since of はない形。"],
    [0, "後ろが名詞 the typhoon なので due to。due だけ・owing だけでは to が足りない。"],
    [1, "As a result,「その結果」が決まった形。a を落とすのも、in にするのも×。"],
    [1, "雨だった → だから家にいた、なので Therefore。Because／Although は意味も形も合わない。"],
    [2, "can のあとは原形で lead to。lead だけでは to がなく、leads は can のあとに来られない。"],
    [2, "cause は「〜を引き起こす」で後ろにすぐ名詞。causes to は to が余分、because は動詞でない。"]
  ]);
})(window.LX.plus);

/* ===== 演習文を 24 文に（うしろに 12 文）・絵の図 =====
   D(単元, [[英文, 日本語, [わな×3], ヒント, ポイント番号, なぜ]×12]) */
(function (P) {
  function D(id, rows) {
    rows.forEach(function (r) { P[id].drills.push({ en: r[0], ja: r[1], alt: r[2], tip: r[3], p: r[4], why: r[5] }); });
  }

  D("c2-u07", [
    ["Mika said that the test [was] difficult.", "ミカはテストが難しかったと言った。", ["be", "were", "being"], "said の中は is → was", 0, "said（過去）に合わせて is→was。test は単数で were は×、be／being は×。"],
    ["He said he [would] call me later.", "彼はあとで私に電話すると言った。", ["will to", "would to", "was"], "will → would", 0, "said の中では will が would に下がる。助動詞の後ろに to は付かず、was call も形がない。"],
    ["She said she [didn't like] spicy food.", "彼女は辛い食べ物が好きではないと言った。", ["doesn't liked", "didn't liked", "don't like"], "don't → didn't ＋ 原形", 0, "否定も過去に下げて didn't like。did の後ろは原形なので liked は×、she に don't も×。"],
    ["They told us that they [were] ready.", "彼らは準備ができていると私たちに言った。", ["was", "be", "being"], "are → were", 0, "主語 they は複数なので are を過去の were に。was は単数用、be／being は動詞の形でない。"],
    ["I knew that he [was] telling the truth.", "彼が本当のことを言っていると私はわかっていた。", ["were", "be", "being"], "knew の中も過去 was ～ing", 0, "knew（過去）の中なので進行形も was ～ing。he に were は×、be／being では動詞にならない。"],
    ["She said that she [had finished] her homework.", "彼女は宿題を終えたと言った。", ["has finish", "have finished", "had finish"], "言う前に終えた → had＋過去分詞", 1, "言った時より前に終えたので had＋過去分詞。has finish は形がこわれ、she に have も×。"],
    ["He told me he [had met] her before.", "彼は以前彼女に会ったことがあると私に言った。", ["have met", "had meet", "has meeting"], "had ＋ 過去分詞", 1, "言った時より前の経験なので had met。he に have は×、had の後ろは過去分詞で meet は×。"],
    ["I found that someone [had taken] my bike.", "だれかが私の自転車を持っていったとわかった。", ["has took", "had took", "have taken"], "気づく前に持っていかれた", 1, "気づいた時より前のことなので had taken。took は過去形で had の後ろに使えない。"],
    ["The clerk asked me [if] I needed a bag.", "店員は私に袋が必要かとたずねた。", ["that", "what", "do"], "Yes/No の質問 → if", 2, "「必要ですか？」は Yes/No の質問なので if（〜かどうか）。that では質問にならない。"],
    ["She asked me [where] I had bought my shoes.", "彼女は私がどこで靴を買ったのかたずねた。", ["where did", "where do", "that where"], "where ＋ S ＋ V の語順", 2, "文の中の質問はふつうの語順なので where I had bought。did／do を入れると疑問文の形で×。"],
    ["The doctor told me [to rest] for a few days.", "医者は私に数日休むように言った。", ["rest", "resting", "that rest"], "命令 → tell 人 to ＋ 原形", 2, "「休みなさい」という命令は tell 人 to 原形。to がない rest や resting はつながらない。"],
    ["My teacher told us [not to] use our phones.", "先生は私たちにスマホを使わないように言った。", ["don't to", "not", "no to"], "否定の命令 → not to", 2, "「使うな」は tell 人 not to 原形。not だけでは to がない。don't to／no to は×。"]
  ]);

  D("c2-u08", [
    ["It was Mika [who] won the speech contest.", "スピーチコンテストで優勝したのはミカだった。", ["which", "whom", "what"], "人を強調 → who も OK", 0, "強調したいのは人（ミカ）で、後ろの主語になるので who。which は物、whom は目的語用、what は×。"],
    ["It is music [that] makes me happy.", "私を幸せにしてくれるのは音楽だ。", ["what", "who", "where"], "It is ～ that で強調", 0, "It is と that で music をはさんで強調。what は×、who は人用、where は場所用。"],
    ["It was in 2010 [that] we moved here.", "私たちがここに引っこしたのは2010年だった。", ["what", "which", "who"], "時を強調しても that", 0, "強調の型は It was ～ that。時をはさんでも that。what／which／who ではこの型にならない。"],
    ["It was at the station [that] I lost my wallet.", "私が財布をなくしたのは駅でだった。", ["what", "which", "who"], "場所を強調しても that", 0, "at the station をはさんで強調するので that。what／which／who では型がこわれる。"],
    ["We [do] need your help.", "私たちは本当にあなたの助けが必要だ。", ["does", "did to", "doing"], "we ＋ do ＋ 原形", 1, "主語 we・現在なので do で強調し、後ろは原形 need。does は三人称単数用、did to／doing は×。"],
    ["She [did] call me last night.", "彼女は昨夜本当に私に電話してきた。", ["does", "do", "done"], "過去 → did ＋ 原形", 1, "last night で過去なので did＋原形。does／do は現在の形で、done は動詞の前に置けない。"],
    ["He [does] study hard every day.", "彼は本当に毎日一生懸命勉強している。", ["do", "did to", "is"], "三人称単数・現在 → does", 1, "he・毎日の習慣なので does で強調。he に do は×、did to は形がなく、is study も×。"],
    ["I [did] tell you the truth.", "私は本当にあなたに真実を話したんだ。", ["do to", "does", "done"], "過去の「本当に」→ did", 1, "過去に話したことを強く言うので did＋原形。I に does は×、do to／done は形にならない。"],
    ["Never [had I] felt so happy.", "あれほど幸せに感じたことはなかった。", ["I had", "I have", "had"], "Never が先頭 → had I", 2, "否定語 Never が先頭に来たら疑問文の語順で had I。I had はふつうの語順、had だけでは主語がない。"],
    ["Seldom [do we] see snow here.", "ここではめったに雪を見ない。", ["we do", "we", "does we"], "Seldom が先頭 → do we", 2, "Seldom（めったに〜ない）が先頭なので do we。we do はふつうの順、does は we に×。"],
    ["Not once [did she] complain about the work.", "彼女は一度もその仕事に文句を言わなかった。", ["she did", "she", "did her"], "Not once が先頭 → did she", 2, "Not once が先頭なので did she の倒置。she did は語順が逆、her は主語に使えない。"],
    ["Little [did we] know about the plan.", "私たちはその計画についてほとんど知らなかった。", ["we did", "we knew", "did us"], "Little が先頭 → did we", 2, "否定の Little が先頭なので did we＋原形。we knew はふつうの語順、us は主語に使えない。"]
  ]);

  D("c2-u09", [
    ["[I believe that] students should read every day.", "私は生徒は毎日読書すべきだと思う。", ["I believing that", "I am believe that", "I believe to"], "主張は I believe that ＋ 文", 0, "主張を言い切る型 I believe that＋文。believing では動詞がなく、am believe も×。"],
    ["[In my opinion], school lunches should be free.", "私の意見では、給食は無料にすべきだ。", ["In my opinion of", "On my opinion", "By my opinion"], "In my opinion, ＝ 私の意見では", 0, "決まった言い方は In my opinion,。前置詞は in で、on／by は×。of を足すと文がつながらない。"],
    ["[I strongly think] that we should save water.", "水を節約すべきだと私は強く思う。", ["I strong think", "I am strongly think", "I strongly thinking"], "strongly で主張を強める", 0, "think を強めるのは副詞 strongly。strong は形容詞で×、am think／thinking も×。"],
    ["[First], volunteering teaches us teamwork.", "第一に、ボランティアはチームワークを教えてくれる。", ["Firstly of all", "At first of", "The first"], "理由①は First,", 1, "理由の1つ目は First,。Firstly of all 等は形がなく、The first も×。"],
    ["[Second], it helps us meet new people.", "第二に、新しい人と出会う助けになる。", ["Two", "Secondary", "The second of"], "理由②は Second,", 1, "理由の2つ目は Second,。Two は順番でなく、Secondary は「二次的な」。"],
    ["[Also], it gives us a sense of purpose.", "また、目的意識を与えてくれる。", ["Also of", "And also of", "Too"], "Also, で理由を追加", 1, "文の頭で理由を足すのは Also,。of を付けると形がこわれ、Too は文頭に置けない。"],
    ["[For example], I clean the park with my friends.", "たとえば、私は友だちと公園をそうじする。", ["For examples", "By example", "Example for"], "具体例は For example,", 1, "具体例の合図は For example,（単数）。examples と複数にしない。By／Example for は×。"],
    ["[In fact], many people feel happier after helping others.", "実際、人を助けたあと多くの人は幸せを感じる。", ["In facts", "On fact", "By fact"], "In fact, ＝ 実際に", 1, "事実で理由を支える合図は In fact,。fact は複数にせず、前置詞も in。On／By fact は×。"],
    ["[Furthermore], it can help our future careers.", "さらに、将来の仕事にも役立つ。", ["Further of", "Furthermores", "More further"], "Furthermore, ＝ さらに", 1, "理由を積み重ねる Furthermore,。of を付けたり s を付けたりはしない。More further は×。"],
    ["[In conclusion], volunteering is worth trying.", "結論として、ボランティアはやってみる価値がある。", ["In conclude", "At conclusion", "To conclusion"], "まとめは In conclusion,", 2, "最後の主張の合図は In conclusion,。conclude は動詞で×、前置詞も in で At／To は×。"],
    ["[To sum up], exercise makes our lives better.", "まとめると、運動は生活をよりよくする。", ["To summing up", "To sum", "For sum up"], "To sum up, ＝ まとめると", 2, "決まった形は To sum up,。to の後ろは原形で summing は×、up を落とす・For にするのも×。"],
    ["[That is why] I think everyone should volunteer.", "だから、みんなボランティアをすべきだと思う。", ["That is because why", "This why", "That why is"], "That is why ＝ だから", 2, "理由を受けて結論を言う That is why＋文。because と why を重ねる形や is のない形は×。"]
  ]);

  D("c2-u10", [
    ["I [agree with] my friend's idea.", "私は友だちの考えに賛成だ。", ["am agree with", "agree to with", "agreeing with"], "agree は動詞！ be はいらない", 0, "agree は動詞なので I agree with。am を付けると動詞が2つ、agreeing では動詞にならない。"],
    ["We [agree that] the park should stay open.", "私たちは公園を開けておくべきだということに賛成だ。", ["are agree that", "agree with that", "agreeing that"], "agree that ＋ 文", 0, "後ろが文なら agree that＋文。with は名詞の前に使うので×。are agree／agreeing も×。"],
    ["I [totally disagree] with his opinion.", "私は彼の意見にまったく反対だ。", ["am totally disagree", "totally disagreeing", "totally not agree"], "totally ＋ disagree", 0, "反対の動詞は disagree。be 動詞は不要で、～ing では動詞がない。not agree の語順も×。"],
    ["Many students are [in favor of] longer breaks.", "多くの生徒は長い休み時間に賛成している。", ["in favor to", "favor of", "on favor of"], "be in favor of ＝ 賛成", 0, "決まった形は in favor of。to／on にしたり in を落としたりすると形がこわれる。"],
    ["My parents are [against] the idea.", "両親はその考えに反対している。", ["against to", "oppose", "opposite"], "be against ＝ 反対", 0, "be against＋名詞で「反対」。to は不要、oppose は動詞、opposite は意味がずれる。"],
    ["I'm [for] the plan to build a library.", "私は図書館を建てる計画に賛成だ。", ["for to", "pro of", "on"], "be for ＝ 賛成", 0, "be for＋名詞で「賛成」。for to は形がなく、pro of／on では賛成にならない。"],
    ["[One reason is] that it is cheaper.", "理由の一つは、それがより安いことだ。", ["One reason are", "One reasons is", "One reason being"], "One reason is that ～", 1, "One reason は単数なので is。are は複数用、reasons は×、being では文にならない。"],
    ["I agree, [because] it helps the environment.", "環境に役立つので、私は賛成だ。", ["because of", "due to", "owing"], "後ろが文 → because", 1, "後ろが it helps…という文なので because。because of／due to は後ろに名詞だけが来る。"],
    ["[This is why] I support the plan.", "こういうわけで、私はその計画を支持する。", ["This is because why", "This why", "Why this is"], "This is why ＝ だから", 1, "理由を言ったあと結論を出す This is why＋文。because と why を重ねたり語順を変えたりは×。"],
    ["You [have a point], but it is too expensive.", "一理あるけれど、それは高すぎる。", ["have point", "has a point", "are a point"], "have a point ＝ 一理ある", 2, "相手を認める決まり文句 have a point。a を落とすのは×、you に has も×、are でもない。"],
    ["[I understand], but I still disagree.", "わかるけれど、それでも私は反対だ。", ["I am understand", "I understanding", "I understands"], "I understand, but ～", 2, "まず認める I understand。am を付けると動詞が2つ、～ing では動詞がなく、I に s は付かない。"],
    ["That [sounds good], but who will pay for it?", "それはよさそうだけど、だれがお金を払うの？", ["sounds well", "sound good", "is sound good"], "sound ＋ 形容詞", 2, "sound＋形容詞なので good。well は×、That に s なしの sound も×、is sound も×。"]
  ]);

  D("c2-u11", [
    ["Ken likes rice, [while] Mika prefers bread.", "ケンはご飯が好きだが、一方ミカはパンが好きだ。", ["during", "since then", "but while"], "S V, while S V", 0, "2つの文を対比でつなぐのは while。during は名詞の前だけ、since then／but while は×。"],
    ["Cats sleep a lot, [whereas] dogs need walks.", "ネコはよく寝るが、一方イヌは散歩が必要だ。", ["where", "whatever", "whether"], "whereas ＝ 一方で", 0, "左右をくらべる whereas。where は場所、whatever は「何でも」、whether は「〜かどうか」。"],
    ["Summer is hot here, [while] winter is mild.", "ここの夏は暑いが、一方冬はおだやかだ。", ["during", "meanwhile of", "when while"], "while で 夏と冬を対比", 0, "2つの季節を1文でくらべる while。during は後ろが名詞、meanwhile of 等は×。"],
    ["Old people often watch TV, [whereas] young people use phones.", "お年寄りはよくテレビを見るが、若者はスマホを使う。", ["where", "whatever", "whether"], "whereas はかたい対比", 0, "世代のちがいを対比する whereas。where／whatever／whether では「一方で」の意味にならない。"],
    ["Big cities are exciting. [However], they are crowded.", "大都市はわくわくする。しかし、混んでいる。", ["Although", "But also", "Despite"], "However, ＝ しかし", 1, "文と文の間で反対を出す However,。Although は文をつなぐ語、Despite は名詞の前。"],
    ["Paper books are heavy. On [the other hand], they feel nice.", "紙の本は重い。その一方で、手ざわりがいい。", ["other hand", "the another hand", "the others hand"], "On the other hand", 1, "決まった形は On the other hand。the を落とす、another／others にするのは×。"],
    ["Buses are cheap. [In contrast], taxis are expensive.", "バスは安い。それに対して、タクシーは高い。", ["In contrasts", "On contrast", "By contrast of"], "In contrast, ＝ それに対して", 1, "反対を並べる In contrast,。複数にせず、On は×、By contrast に of は付かない。"],
    ["My town is quiet. [By contrast], Tokyo is very busy.", "私の町は静かだ。対照的に、東京はとてもにぎやかだ。", ["By contrast of", "On contrast", "In contrasts"], "By contrast, ＝ 対照的に", 1, "By contrast, も文頭の対比の合図。後ろに of は付かず、On は×、contrasts と複数にもしない。"],
    ["[Compared with] last year, prices are higher.", "去年とくらべると、物価が高い。", ["Compare with", "Comparing to with", "Compared"], "Compared with ＝ 〜とくらべると", 2, "「くらべられると」の Compared with。Compare は命令の形、with なし・重ねるのは×。"],
    ["[Compared to] cats, dogs need more care.", "ネコとくらべると、イヌはもっと世話が必要だ。", ["Compare to", "Comparing with to", "Compared of"], "Compared to も同じ意味", 2, "Compared to も「〜とくらべると」。Compare は動詞の原形で×、of は×、前置詞を重ねるのも×。"],
    ["[Unlike] me, my sister is good at singing.", "私とちがって、姉は歌が上手だ。", ["Dislike", "Not like as", "Unlikely"], "Unlike A ＝ Aとちがって", 2, "「〜とちがって」は Unlike。Dislike は「きらう」、Unlikely は「ありそうにない」。"],
    ["[Like] her mother, Yui is a good cook.", "母親と同じように、ユイは料理が上手だ。", ["Likely", "Alike", "As like"], "Like A ＝ Aと同じように", 2, "Like で「〜と同じように」。Likely は「ありそうな」、Alike は名詞の前に置けない。"]
  ]);

  D("c2-u12", [
    ["We couldn't play outside [because of] the storm.", "嵐のせいで外で遊べなかった。", ["because", "because for", "since of"], "後ろが名詞 → because of", 0, "後ろが名詞 the storm なので because of。because は後ろに文が必要、for 等は×。"],
    ["The road was closed [due to] an accident.", "事故のため道路が閉鎖された。", ["due", "because", "owing"], "due to ＋ 名詞", 0, "後ろが名詞なので due to。due／owing は to がないと使えず、because は後ろに文が必要。"],
    ["[Thanks to] the bus, I arrived on time.", "バスのおかげで、時間どおりに着いた。", ["Thank to", "Thanks for", "Thanking to"], "Thanks to ＝ 〜のおかげで", 0, "よい原因は Thanks to＋名詞。Thank は s が必要、Thanks for は「〜をありがとう」。"],
    ["I stayed home [because] I had a cold.", "かぜをひいていたので家にいた。", ["because of", "due to", "thanks to"], "後ろが文 → because", 0, "後ろが文 I had a cold なので because。because of 等は名詞の前だけ。"],
    ["He was absent [since] he was sick.", "彼は病気だったので休んだ。", ["since of", "because of", "due to"], "since ＋ 文 ＝ 〜なので", 0, "後ろが文なので since（〜なので）。since of は形がなく、because of／due to は後ろが名詞。"],
    ["She trained every day. [As a result], she won.", "彼女は毎日練習した。その結果、勝った。", ["As result", "In a result", "As the result of"], "As a result, ＝ その結果", 1, "原因の文のあとに結果を出す As a result,。a を落とす、In にする、of を付けるのは×。"],
    ["The shop was closed. [Therefore], we went home.", "店は閉まっていた。だから、私たちは帰った。", ["Because", "Although", "So that"], "Therefore, ＝ だから", 1, "閉まっていた→だから帰った、で Therefore,。Because は理由側、Although は逆。"],
    ["I forgot my umbrella, [so] I got wet.", "かさを忘れたので、ぬれた。", ["so of", "because of", "such"], "S V, so S V", 1, "原因の文のあとに結果をつなぐ so。because of は後ろが名詞、so of／such ではつながらない。"],
    ["[For this reason], we changed the plan.", "この理由で、私たちは計画を変えた。", ["For this reasons", "By this reason", "For reason this"], "For this reason, ＝ この理由で", 1, "決まった形は For this reason,。this の後ろは単数、前置詞は for。語順を変えるのも×。"],
    ["Stress can [lead to] headaches.", "ストレスは頭痛につながることがある。", ["lead", "leads to", "lead with"], "can ＋ lead to", 2, "「〜につながる」は lead to。to なしは×、can の後ろに leads は×、with も×。"],
    ["Using phones at night [causes] sleep problems.", "夜スマホを使うことは睡眠の問題を引き起こす。", ["causes to", "is caused", "because"], "cause ＋ 名詞", 2, "Using phones（単数）が引き起こすので causes。to は不要、is caused は逆の意味。"],
    ["Too much rain can [result in] floods.", "雨が多すぎると洪水になることがある。", ["result", "results in", "result to"], "result in ＝ 〜という結果になる", 2, "原因→結果は result in。in を落とす・to にするのは×、can の後ろに results は×。"]
  ]);

  /* 絵の図：イメージで覚えると効くところだけ */
  P["c2-u07"].points[2].fig = { t: "pic",
    items: [{ e: "👩", x: 20, y: 66, l: "She", b: "お腹すいた？" }, { e: "🧒", x: 78, y: 62, l: "me" }],
    arrows: [[0, 1, "asked me if"]], cap: "質問は if（〜かどうか）で伝える" };
  P["c2-u08"].points[0].fig = { t: "pic",
    items: [{ e: "🔦", x: 14, y: 28, l: "It was～that", s: 0.9 }, { e: "👦", x: 52, y: 65, l: "Tom", s: 1.3 }, { e: "🪟", x: 86, y: 62, l: "the window", s: 0.8 }],
    arrows: [[0, 1, "ここを強調"]], cap: "It was と that の間に スポットライト" };
  P["c2-u10"].points[2].fig = { t: "pic",
    items: [{ e: "🙂", x: 16, y: 64, l: "相手", b: "～すべき！" }, { e: "🤝", x: 50, y: 60, l: "認める", s: 0.9 }, { e: "🙋", x: 85, y: 62, l: "but 反論" }],
    arrows: [[0, 1, ""], [1, 2, ""]], cap: "受け止めてから 自分の意見を返す" };
  P["c2-u11"].points[2].fig = { t: "bars",
    items: [["last year", 40], ["this year", 75]], cap: "Compared with で 基準とくらべる" };
  P["c2-u12"].core.fig = { t: "pic",
    items: [{ e: "🌨️", x: 12, y: 58, l: "大雪" }, { e: "🚃", x: 50, y: 58, l: "電車が遅れる" }, { e: "😓", x: 88, y: 58, l: "遅刻" }],
    arrows: [[0, 1, "because of"], [1, 2, "as a result"]], cap: "原因から結果へ ドミノのように つなぐ" };
  P["c2-u12"].points[2].fig = { t: "pic",
    items: [{ e: "😴", x: 18, y: 60, l: "寝不足" }, { e: "🤒", x: 80, y: 60, l: "体調不良" }],
    arrows: [[0, 1, "lead to"]], cap: "原因 → lead to → 結果" };
})(window.LX.plus);
