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
