/* 追加教材：論理表現Ⅲ 1〜6（超わかりやすい説明＋同じ型の演習 12 文） */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c3-u01"] = {
  core: {
    ico: "🚂",
    catch: "物が主語＝物が人を動かす機関車",
    say: "英語は「物・出来事」を主人公にして、人を動かす。訳すときは「〜のおかげで」「〜のせいで」と人を主語に戻すと自然。",
    fig: { t: "slots", parts: [["The rain", "S"], ["kept", "V"], ["us", "O"], ["at home", "M"]], arc: [0, 2, "人を動かす"] }
  },
  points: [
    {
      h: "物が人を運ぶ・連れていく",
      body: "take・bring・lead は「物が人をどこかへ運ぶ」イメージ。日本語では「〜すれば…に行ける」と人を主語にして訳すと自然。",
      form: "物 ＋ take／bring ＋ 人 ＋ to 場所",
      ex: "This bus [takes] you to the station.",
      exja: "このバスに乗れば駅に行けます。",
      fig: { t: "slots", parts: [["This bus", "S"], ["takes", "V"], ["you", "O"], ["to the station", "M"]], arc: [0, 2, "人を運ぶ"] },
      ng: { bad: "This bus goes you to the station.", good: "This bus takes you to the station.", why: "go は人を目的語にとれない。運ぶのは take" }
    },
    {
      h: "原因が人を〜させる",
      body: "make・keep・cause は「原因が人をある状態に押しこむ」イメージ。because を使った長い文が、1文にギュッと縮む。",
      form: "原因 ＋ make 人 do／keep 人 ＋ 状態",
      ex: "The heavy rain [kept] us at home.",
      exja: "大雨のせいで私たちは家にいた。",
      fig: { t: "vs", a: ["We stayed home. It rained.", "日本語っぽい"], b: ["The rain kept us at home.", "英語らしい"] },
      ng: { bad: "His advice made me to change my mind.", good: "His advice made me change my mind.", why: "make 人 のあとは to なしの原形" }
    },
    {
      h: "できる・できないを決める物",
      body: "enable は「道を開ける」、prevent は「通せんぼ」。物が人に、できるようにさせたり、できなくさせたりする。",
      form: "enable 人 to do／prevent 人 from",
      ex: "The Internet [enables] us to learn anywhere.",
      exja: "インターネットのおかげでどこでも学べる。",
      fig: { t: "vs", a: ["The app enables us to study.", "道を開ける"], b: ["Snow prevented us from going.", "通せんぼ"] },
      ng: { bad: "The snow prevented us to go out.", good: "The snow prevented us from going out.", why: "prevent は from ＋ -ing。to は使わない" }
    }
  ],
  drills: [
    { en: "This train [takes] you to Kyoto.", ja: "この電車に乗れば京都に行けます。", alt: ["goes", "arrives", "reaches to"], tip: "take 人 to 場所＝人を〜へ運ぶ" },
    { en: "This path [leads] to the lake.", ja: "この小道を行くと湖に出る。", alt: ["leads at", "reaches to", "arrives"], tip: "lead to 〜＝〜に通じる" },
    { en: "A ten-minute walk [brought] me to the park.", ja: "10分歩くと公園に着いた。", alt: ["came", "arrived", "went"], tip: "bring 人 to 場所＝人を〜へ連れてくる" },
    { en: "The news [made] her very happy.", ja: "その知らせで彼女はとても喜んだ。", alt: ["caused", "let", "felt"], tip: "make 人 ＋ 形容詞＝人を〜にする" },
    { en: "The noise [kept] me awake all night.", ja: "騒音のせいで一晩中眠れなかった。", alt: ["made to", "let", "stayed"], tip: "keep 人 ＋ 状態＝人を〜のままにする" },
    { en: "This medicine will [make] you feel better.", ja: "この薬を飲めば気分がよくなるよ。", alt: ["make to", "let to", "cause"], tip: "make 人 ＋ 原形（to なし）" },
    { en: "What [made] you choose this school?", ja: "なぜこの学校を選んだのですか。", alt: ["caused", "let to", "had to"], tip: "What made you 〜?＝なぜ〜したの？" },
    { en: "This photo [reminds] me of my childhood.", ja: "この写真を見ると子どものころを思い出す。", alt: ["remembers", "recalls to", "reminds to"], tip: "remind 人 of 〜＝人に〜を思い出させる" },
    { en: "The typhoon [prevented] the plane from taking off.", ja: "台風のせいで飛行機は離陸できなかった。", alt: ["stopped to", "made", "let"], tip: "prevent A from -ing＝Aが〜できない" },
    { en: "A part-time job [enabled] him to buy a new bike.", ja: "アルバイトのおかげで彼は新しい自転車を買えた。", alt: ["made", "let", "had"], tip: "enable 人 to do＝人が〜できる" },
    { en: "Online lessons [allow] students to learn at their own pace.", ja: "オンライン授業のおかげで生徒は自分のペースで学べる。", alt: ["let", "make", "have"], tip: "allow 人 to do＝人が〜できるようにする" },
    { en: "Stress [causes] many people to lose sleep.", ja: "ストレスのせいで多くの人が眠れなくなる。", alt: ["makes", "lets", "has"], tip: "cause 人 to do＝人に〜させる（悪い結果）" }
  ]
};

window.LX.plus["c3-u02"] = {
  core: {
    ico: "📦",
    catch: "名詞構文は「文をギュッと箱づめ」",
    say: "「彼が急に到着した」を his sudden arrival に。文まるごとを名詞の箱に入れると、主語にも目的語にも置ける。",
    fig: { t: "vs", a: ["He arrived suddenly.", "ふつうの文"], b: ["his sudden arrival", "名詞の箱"] }
  },
  points: [
    {
      h: "動詞→名詞で「箱」にする",
      body: "arrive→arrival、decide→decision。he は his に、suddenly は sudden に変わるのがコツ。",
      form: "所有格 ＋ 形容詞 ＋ 名詞",
      ex: "[His arrival] surprised everyone.",
      exja: "彼が来たのでみんな驚いた。",
      fig: { t: "slots", parts: [["His arrival", "S"], ["surprised", "V"], ["everyone", "O"]] },
      ng: { bad: "His suddenly arrival surprised us.", good: "His sudden arrival surprised us.", why: "名詞の前は形容詞。suddenly ではなく sudden" }
    },
    {
      h: "形容詞→名詞で「〜さ」",
      body: "important→importance、difficult→difficulty。「〜の大切さ」を the 名詞 of 〜 の箱にする。",
      form: "the ＋ 名詞 ＋ of 〜",
      ex: "We know [the importance] of sleep.",
      exja: "私たちは睡眠の大切さを知っている。",
      fig: { t: "slots", parts: [["We", "S"], ["know", "V"], ["the importance", "O"], ["of sleep", "M"]], arc: [3, 2, "何の大切さ"] },
      ng: { bad: "We know the important of sleep.", good: "We know the importance of sleep.", why: "the のあとは名詞。important は形容詞" }
    },
    {
      h: "a good cook＝料理が上手",
      body: "a good cook は「料理が上手な人」。名詞の前の形容詞は、日本語では「上手に〜する」と副詞のように訳すと自然。",
      form: "a ＋ 形容詞 ＋ 人を表す名詞",
      ex: "She is [a fast runner].",
      exja: "彼女は走るのが速い。",
      fig: { t: "vs", a: ["She runs fast.", "動詞で言う"], b: ["She is a fast runner.", "名詞で言う"] },
      ng: { bad: "He is a well speaker of English.", good: "He is a good speaker of English.", why: "名詞の前は形容詞 good。well は副詞" }
    }
  ],
  drills: [
    { en: "She is [a good swimmer].", ja: "彼女は泳ぐのが上手だ。", alt: ["a well swimmer", "good swimming", "a swimmer good"], tip: "a good 〜er＝〜するのが上手な人" },
    { en: "My father is [an early riser].", ja: "父は早起きだ。", alt: ["an early rise", "a riser early", "an early rising"], tip: "an early riser＝早起きの人" },
    { en: "We were impressed by [her kindness].", ja: "私たちは彼女の親切さに感動した。", alt: ["her kind", "she is kind", "her kindly"], tip: "kind → kindness（親切さ）" },
    { en: "I understand [the importance] of exercise.", ja: "運動の大切さはわかっている。", alt: ["the important", "importantly", "the importantly"], tip: "important → importance" },
    { en: "Everyone was waiting for [his return].", ja: "みんな彼が帰ってくるのを待っていた。", alt: ["he returns", "his returned", "him return to"], tip: "return は動詞も名詞も同じ形" },
    { en: "[His sudden decision] surprised his parents.", ja: "彼が急に決めたので両親は驚いた。", alt: ["He suddenly decided", "His suddenly decide", "His decide sudden"], tip: "decide → decision、副詞→形容詞" },
    { en: "[His absence] from school worried his friends.", ja: "彼が学校を休んだので友達は心配した。", alt: ["He was absent", "His absent", "His absently"], tip: "absent → absence（欠席）" },
    { en: "[The discovery] of the new planet excited scientists.", ja: "新しい惑星が発見されて科学者たちはわくわくした。", alt: ["The discover", "Discovered", "The discovering to"], tip: "discover → discovery（発見）" },
    { en: "[A short rest] will make you feel better.", ja: "少し休めば気分がよくなるよ。", alt: ["Rest shortly", "A shortly rest", "Short resting of"], tip: "名詞の箱が主語＝「〜すれば」" },
    { en: "[A quick look] at the map will help you.", ja: "地図をさっと見れば役に立つよ。", alt: ["Quickly look", "A quickly look", "A quick looking at"], tip: "look quickly → a quick look" },
    { en: "The [growth of] online shopping is changing our lives.", ja: "ネットショッピングの広がりが生活を変えている。", alt: ["grow of", "growing to", "grows of"], tip: "grow → growth（成長・広がり）" },
    { en: "[The increase] in prices worries many families.", ja: "物価が上がって多くの家庭が心配している。", alt: ["The increasing to", "Increased", "The increasingly"], tip: "increase は名詞にもなる（増加）" }
  ]
};

window.LX.plus["c3-u03"] = {
  core: {
    ico: "⛵",
    catch: "譲歩は「向かい風でも進む船」",
    say: "「〜だけど」は予想と逆の結果。後ろが「主語＋動詞」なら although、名詞だけなら despite。ここが最大の分かれ道。",
    fig: { t: "vs", a: ["Although it rained, we went.", "後ろに主語＋動詞"], b: ["Despite the rain, we went.", "後ろに名詞だけ"] }
  },
  points: [
    {
      h: "although／despite",
      body: "although は接続詞なので後ろに「主語＋動詞」。despite は前置詞なので後ろは名詞だけ。後ろを見れば一発で決まる。",
      form: "Although S V ／ Despite ＋ 名詞",
      ex: "[Although] it was raining, we played soccer.",
      exja: "雨が降っていたが、私たちはサッカーをした。",
      fig: { t: "slots", parts: [["Despite", "前置詞"], ["the rain", "名詞"], ["we", "S"], ["played", "V"]], arc: [0, 1, "名詞だけ"] },
      ng: { bad: "Despite it was raining, we played.", good: "Although it was raining, we played.", why: "後ろが 主語＋動詞 なら although" }
    },
    {
      h: "even if／though",
      body: "even if は「仮に〜でも」（起こるかは不明）。even though は「実際〜なのに」（事実）。if＝もしも、though＝事実。",
      form: "Even if S V ／ Even though S V",
      ex: "[Even if] it rains, the game will be held.",
      exja: "たとえ雨が降っても試合は行われる。",
      fig: { t: "vs", a: ["Even if it rains, …", "まだわからない"], b: ["Even though it rained, …", "本当に降った"] },
      ng: { bad: "Even if it will rain, I will go.", good: "Even if it rains, I will go.", why: "条件の文は未来のことでも現在形" }
    },
    {
      h: "unless は「〜しない限り」",
      body: "unless＝if … not。as long as は「〜さえすれば」。unless の後ろに not は入れない。未来も現在形で書く。",
      form: "unless S V ／ as long as S V",
      ex: "You'll be late [unless] you hurry.",
      exja: "急がないと遅れるよ。",
      fig: { t: "vs", a: ["Unless you hurry, …", "急がないなら"], b: ["As long as you hurry, …", "急ぎさえすれば"] },
      ng: { bad: "Unless you don't hurry, you'll be late.", good: "Unless you hurry, you'll be late.", why: "unless に not の意味がもう入っている" }
    }
  ],
  drills: [
    { en: "[Although] it was cold, we swam in the sea.", ja: "寒かったけれど、私たちは海で泳いだ。", alt: ["Despite", "In spite of", "Because of"], tip: "後ろが 主語＋動詞 → although" },
    { en: "[Though] he is young, he is very wise.", ja: "彼は若いけれど、とても賢い。", alt: ["Despite", "In spite", "Because of"], tip: "though＝although（少しくだけた形）" },
    { en: "The game continued [despite] the heavy rain.", ja: "大雨にもかかわらず試合は続いた。", alt: ["although", "though", "despite of"], tip: "後ろが名詞だけ → despite" },
    { en: "She smiled [in spite of] the pain.", ja: "彼女は痛みにもかかわらずほほえんだ。", alt: ["although", "in spite", "despite of"], tip: "in spite of＝despite" },
    { en: "[Even if] you fail, you can try again.", ja: "たとえ失敗しても、また挑戦できる。", alt: ["Even", "Despite", "In spite of"], tip: "even if＝仮に〜でも" },
    { en: "[Even though] it was late, he kept studying.", ja: "遅い時間だったのに、彼は勉強を続けた。", alt: ["Even", "Despite", "In spite of"], tip: "even though＝実際に〜なのに" },
    { en: "You won't pass the test [unless] you study.", ja: "勉強しないとテストに受からないよ。", alt: ["despite", "in spite of", "unless not"], tip: "unless＝if … not" },
    { en: "I'll lend you my bike [as long as] you return it.", ja: "返してくれるなら自転車を貸すよ。", alt: ["despite", "in spite of", "as long"], tip: "as long as＝〜さえすれば" },
    { en: "[Unless] it snows, the bus will come on time.", ja: "雪が降らない限り、バスは時間どおりに来る。", alt: ["Despite", "In spite of", "Even"], tip: "未来でも unless の後は現在形" },
    { en: "[In spite of] his injury, he finished the race.", ja: "けがをしていたのに、彼はレースを走りきった。", alt: ["Although", "Even though", "In spite"], tip: "後ろが名詞 → in spite of" },
    { en: "She went to school [even though] she had a cold.", ja: "彼女はかぜをひいていたのに学校へ行った。", alt: ["despite", "in spite of", "even"], tip: "事実なので even though" },
    { en: "You can use my phone [as long as] you are careful.", ja: "気をつけてくれるならスマホを使っていいよ。", alt: ["despite", "unless not", "in spite of"], tip: "as long as＝〜する限りは" }
  ]
};

window.LX.plus["c3-u04"] = {
  core: {
    ico: "🍔",
    catch: "意見文はハンバーガー",
    say: "上のパン＝主張、具材＝理由と具体例、下のパン＝もう一度主張。上下のパンが同じ意見だから、ブレない文章になる。",
    fig: { t: "flow", steps: ["主張", "理由①＋例", "理由②＋例", "結論"] }
  },
  points: [
    {
      h: "序論：最初に言い切る",
      body: "1文目で賛成か反対かを言い切る。これが主題文。英語の読み手は「で、結論は？」を最初に知りたがっている。",
      form: "I believe that 〜.",
      ex: "[In my opinion], students should wear uniforms.",
      exja: "私の意見では、生徒は制服を着るべきだ。",
      fig: { t: "flow", steps: ["テーマ", "賛成か反対か", "主題文"] },
      ng: { bad: "I am agree with this idea.", good: "I agree with this idea.", why: "agree は動詞。am はいらない" }
    },
    {
      h: "本論：理由と例はセット",
      body: "理由は2〜3つ。First, Second で番号をふり、それぞれに For example で例を1つ。理由だけでは弱い、例で強くなる。",
      form: "First, 〜. For example, 〜.",
      ex: "[First], uniforms save time in the morning.",
      exja: "第一に、制服は朝の時間を節約する。",
      fig: { t: "flow", steps: ["First", "例", "Second", "例"] },
      ng: { bad: "At first, uniforms save time.", good: "First, uniforms save time.", why: "At first は「最初は（あとで変わる）」の意味" }
    },
    {
      h: "結論：言いかえて締める",
      body: "In conclusion / For these reasons で始め、最初の主張を別の言葉でくり返す。新しい理由はここで出さない。",
      form: "For these reasons, 〜.",
      ex: "[For these reasons], I support school uniforms.",
      exja: "これらの理由から、私は制服に賛成する。",
      ng: { bad: "For this reasons, I agree.", good: "For these reasons, I agree.", why: "reasons は複数なので these" }
    }
  ],
  drills: [
    { en: "[I believe that] students should read more books.", ja: "生徒はもっと本を読むべきだと私は考える。", alt: ["I believe to", "I am believe that", "I believing that"], tip: "I believe that ＋ 文＝〜と考える" },
    { en: "[In my opinion], we should save more energy.", ja: "私の意見では、もっとエネルギーを節約すべきだ。", alt: ["In my opinions of", "On my opinion", "By my opinion"], tip: "In my opinion, ＋ 文" },
    { en: "I [agree with] the idea of a four-day school week.", ja: "週4日制の学校という考えに賛成だ。", alt: ["am agree with", "agree to with", "agreeing with"], tip: "agree with 〜（am は不要）" },
    { en: "I am [against] the plan to close the library.", ja: "図書館を閉める計画には反対だ。", alt: ["against to", "opposite", "oppose"], tip: "be against 〜＝〜に反対" },
    { en: "I have [two reasons] to support my opinion.", ja: "私の意見を支える理由が2つある。", alt: ["two reason", "two of reason", "the two reason"], tip: "reason は数えられる → reasons" },
    { en: "[First], smartphones help us find information quickly.", ja: "第一に、スマホで情報をすばやく見つけられる。", alt: ["At first", "Firstly of all", "The first"], tip: "理由の1つ目は First," },
    { en: "[Second], they are useful in an emergency.", ja: "第二に、緊急時に役に立つ。", alt: ["Secondary", "The second of", "Two"], tip: "2つ目は Second," },
    { en: "[For example], I use a map app when I travel.", ja: "たとえば、私は旅行のとき地図アプリを使う。", alt: ["For examples", "By example", "Example for"], tip: "理由のあとに具体例" },
    { en: "[Finally], reading improves our writing skills.", ja: "最後に、読書は書く力を高める。", alt: ["Final", "At final", "In finally"], tip: "最後の理由は Finally," },
    { en: "[In conclusion], I think homework is necessary.", ja: "結論として、宿題は必要だと思う。", alt: ["In conclude", "At conclusion", "To conclusion"], tip: "結論の段落は In conclusion," },
    { en: "[For these reasons], I believe uniforms are a good idea.", ja: "これらの理由から、制服はよい考えだと思う。", alt: ["For this reasons", "By these reasons", "Because these reasons"], tip: "these reasons（複数）" },
    { en: "[That is why] I support the new rule.", ja: "だから私は新しい規則に賛成だ。", alt: ["That is the why", "This is reason", "That why"], tip: "That is why 〜＝だから〜" }
  ]
};

window.LX.plus["c3-u05"] = {
  core: {
    ico: "🥋",
    catch: "反論は「受けてから返す」柔道",
    say: "相手の意見をいったん受け止め（It is true that…）、However で返す。受けを見せるほど、返し技が決まる。",
    fig: { t: "flow", steps: ["反対意見", "たしかに…", "However,", "自分の主張"] }
  },
  points: [
    {
      h: "相手の意見を紹介する",
      body: "Some people argue that 〜 で反対意見を先に出す。「ちゃんと知ってるよ」と示すと、公平で強い文章になる。",
      form: "Some people argue that 〜.",
      ex: "[Some people argue that] smartphones are harmful.",
      exja: "スマホは有害だと主張する人もいる。",
      ng: { bad: "Some people argues that it is bad.", good: "Some people argue that it is bad.", why: "people は複数。argues にしない" }
    },
    {
      h: "「たしかに〜だが」と受ける",
      body: "It is true that 〜, but … は柔道の「受け身」。相手の正しい部分を認めると、その後の反論を読み手が聞いてくれる。",
      form: "It is true that 〜, but …",
      ex: "[It is true that] cars are convenient, but they pollute the air.",
      exja: "たしかに車は便利だが、空気を汚す。",
      fig: { t: "vs", a: ["It is true that A,", "認める（受け）"], b: ["but B.", "主張へ（返し）"] },
      ng: { bad: "It is truth that cars are useful.", good: "It is true that cars are useful.", why: "true は形容詞。truth は名詞" }
    },
    {
      h: "However で返し技",
      body: "However, の後に自分の主張と根拠（理由・データ）を置く。However は文頭でコンマ付き。2文をつなぐ接続詞ではない。",
      form: "However, 〜.",
      ex: "[However], this is not always the case.",
      exja: "しかし、いつもそうとは限らない。",
      fig: { t: "flow", steps: ["相手の意見", "However,", "主張", "根拠"] },
      ng: { bad: "Cars are useful, however they are expensive.", good: "Cars are useful. However, they are expensive.", why: "However は文をつなげない。文を切ってから" }
    }
  ],
  drills: [
    { en: "Some people [argue that] homework is unnecessary.", ja: "宿題は不要だと主張する人もいる。", alt: ["argues that", "arguing that", "argue to"], tip: "Some people argue that ＋ 文" },
    { en: "Some people [say that] video games are a waste of time.", ja: "ゲームは時間のむだだと言う人もいる。", alt: ["says that", "saying that", "say to"], tip: "反対意見をまず紹介する" },
    { en: "[It is true] that school uniforms are expensive.", ja: "たしかに制服は高い。", alt: ["It is truth", "It true is", "It is truly"], tip: "It is true that 〜＝たしかに〜" },
    { en: "[Of course], cars are useful in the countryside.", ja: "もちろん、いなかでは車は便利だ。", alt: ["Of courses", "In course", "By course"], tip: "Of course,＝もちろん（認める）" },
    { en: "[However], we should think about the environment.", ja: "しかし、環境のことを考えるべきだ。", alt: ["But also", "Although", "Despite"], tip: "However, ＋ 文（コンマを忘れずに）" },
    { en: "On [the other hand], online classes save time.", ja: "一方で、オンライン授業は時間の節約になる。", alt: ["other hand", "the another hand", "the others hand"], tip: "On the other hand,＝一方で" },
    { en: "I [see your point], but I still disagree.", ja: "言いたいことはわかるが、やはり反対だ。", alt: ["look your point", "see your pointing", "watch your point"], tip: "I see your point＝言い分はわかる" },
    { en: "Others may say that it [is too difficult].", ja: "難しすぎると言う人もいるかもしれない。", alt: ["is too difficulty", "is very difficult to", "too difficult is"], tip: "Others may say that 〜＝〜と言う人も" },
    { en: "[Even so], I think the rule is necessary.", ja: "それでも、その規則は必要だと思う。", alt: ["Even if so", "Even though so", "Even"], tip: "Even so,＝それでも" },
    { en: "This idea [may sound] strange at first.", ja: "この考えは最初は奇妙に聞こえるかもしれない。", alt: ["may sounds", "may sounding", "may to sound"], tip: "may sound 〜＝〜に聞こえるかも" },
    { en: "[Nevertheless], many students support the plan.", ja: "それにもかかわらず、多くの生徒がその案を支持している。", alt: ["Never", "Neverless", "Nevertheless of"], tip: "Nevertheless,＝それでもなお" },
    { en: "Their argument [is not convincing] enough.", ja: "彼らの主張は十分に説得力がない。", alt: ["is not convincingly", "does not convincing", "is not convince"], tip: "convincing＝説得力のある" }
  ]
};

window.LX.plus["c3-u06"] = {
  core: {
    ico: "📈",
    catch: "グラフは「動き＋速さ」で実況する",
    say: "数字の変化は「増えた・減った（動詞）」＋「急に・少し（副詞）」の2点セット。スポーツ実況のように動きを伝えよう。",
    fig: { t: "scale", left: "少し", right: "急に", items: [["slightly", 12], ["gradually", 38], ["steadily", 62], ["sharply", 90]] }
  },
  points: [
    {
      h: "動き：増える・減る",
      body: "増えるは increase／rise、減るは decrease／fall。どれも「自分で増える・減る」動詞なので、受け身にしない。",
      form: "主語 ＋ increase / decrease ＋ 副詞",
      ex: "The number of visitors [increased sharply].",
      exja: "訪問者の数は急に増えた。",
      fig: { t: "slots", parts: [["Sales", "S"], ["increased", "V"], ["sharply", "M"]], arc: [2, 1, "どのくらい"] },
      ng: { bad: "The number of students was increased.", good: "The number of students increased.", why: "increase は「増える」。受け身にしない" }
    },
    {
      h: "割合：〜を占める",
      body: "account for は「〜を占める」。percent は複数形にしない。about（約）や more than（〜より多い）も便利。",
      form: "A accounts for 〜 percent of B.",
      ex: "Rice [accounts for] 40 percent of the total.",
      exja: "米が全体の40%を占める。",
      fig: { t: "scale", left: "0%", right: "100%", items: [["about 30%", 30], ["half", 50], ["more than 80%", 82]] },
      ng: { bad: "About 30 percents of students walk.", good: "About 30 percent of students walk.", why: "percent には複数の s をつけない" }
    },
    {
      h: "期間とグラフの紹介",
      body: "まず The graph shows 〜 で何のグラフか言う。期間は from A to B や between A and B で示す。",
      form: "The graph shows 〜 from A to B.",
      ex: "[The graph shows] changes in the population.",
      exja: "そのグラフは人口の変化を示している。",
      fig: { t: "time", marks: [{ from: -4, to: 0, label: "from A to B" }, { at: -4, label: "A（始まり）" }] },
      ng: { bad: "The graph is showing about the population.", good: "The graph shows the population.", why: "show は他動詞。about はいらない" }
    }
  ],
  drills: [
    { en: "The number of students [increased slightly] this year.", ja: "今年、生徒の数は少し増えた。", alt: ["increased slight", "was increased slightly", "slight increased"], tip: "変化の大きさは副詞で" },
    { en: "Sales [fell sharply] in April.", ja: "4月に売り上げが急に落ちた。", alt: ["fell sharp", "were fallen sharply", "sharp fell"], tip: "fall（減る）＋ sharply（急に）" },
    { en: "The temperature [rose gradually] during the day.", ja: "日中、気温は徐々に上がった。", alt: ["rose gradual", "was risen gradually", "gradual rose"], tip: "rise-rose-risen（自動詞）" },
    { en: "Smartphone users [account for] 70 percent of the total.", ja: "スマホ利用者が全体の70%を占める。", alt: ["account", "account of", "are accounted"], tip: "account for 〜＝〜を占める" },
    { en: "About 40 [percent of] the students like science.", ja: "生徒の約40%が理科を好きだ。", alt: ["percents of", "percentage", "percent"], tip: "percent に s はつけない" },
    { en: "[The graph shows] how people spend their free time.", ja: "そのグラフは人々が自由な時間をどう過ごすかを示している。", alt: ["The graph show", "The graph is showing of", "The graph says to"], tip: "まず何のグラフかを言う" },
    { en: "The price went up [from 100 to] 150 yen.", ja: "値段は100円から150円に上がった。", alt: ["since 100 to", "from 100 until", "between 100 to"], tip: "from A to B＝AからBへ" },
    { en: "The number of visitors [doubled] in five years.", ja: "5年で訪問者の数は2倍になった。", alt: ["was doubled to", "double", "doubling"], tip: "double＝2倍になる" },
    { en: "[More than half] of the students use the library.", ja: "半数以上の生徒が図書館を利用している。", alt: ["More half", "More than a half of", "Most than half"], tip: "more than half＝半数より多い" },
    { en: "The rate [remained stable] between 2015 and 2020.", ja: "その割合は2015年から2020年の間、安定していた。", alt: ["remained stably", "was remained stable", "remain stably"], tip: "remain ＋ 形容詞＝〜のままだ" },
    { en: "Rice production [reached a peak] in 1990.", ja: "米の生産量は1990年にピークに達した。", alt: ["reached to a peak", "was reached a peak", "reach peak"], tip: "reach a peak＝最高に達する" },
    { en: "[Compared with] last year, sales have increased.", ja: "昨年と比べて、売り上げは増えた。", alt: ["Compare with", "Comparing to with", "Compared"], tip: "Compared with 〜＝〜と比べて" }
  ]
};
