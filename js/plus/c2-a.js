/* 論理表現Ⅱ 1〜6 単元の 追加教材（ひとことで言うと・わかりやすい説明・演習 24 文・絵） */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c2-u01"] = {
  core: {
    ico: "⏪",
    catch: "過去完了は「過去の、さらに前」",
    say: "過去のある時点を基準にして、それより前のことを言う。未来完了は、未来の時点が基準。",
    fig: { t: "time", marks: [{ at: -3, label: "①電車が出た" }, { at: -1, label: "②駅に着いた" }] }
  },
  points: [
    {
      h: "過去完了＝過去より前",
      body: "過去の話の中で「それよりもっと前」を言うときは had＋過去分詞。時間の線に点を2つ打ち、古いほうが had と考えよう。",
      form: "had ＋ 過去分詞",
      ex: "When I arrived, the train [had left].",
      exja: "私が着いたとき、電車は出てしまっていた。",
      fig: { t: "time", marks: [{ at: -3, label: "電車が出た" }, { at: -1, label: "私が着いた" }] },
      ng: { bad: "When I arrived, the train has left.", good: "When I arrived, the train had left.", why: "基準が過去なので have ではなく had" },
      why: "英語は時間の前後をはっきり言う言葉。過去の基準より前だと示すために、had で1段古い時を表す。",
      easy: "①先に起きたことと後のことを並べる。②後のほうはふつうの過去形。③先のほうに had をつける。古いほうが had！"
    },
    {
      h: "過去のある時までの継続",
      body: "過去の基準の時まで「ずっと続いていた」ことも had＋過去分詞。現在完了の矢印を、そのまま過去へずらしたイメージ。",
      form: "had ＋ 過去分詞 ＋ for／since",
      ex: "She [had lived] in Osaka for five years before she moved.",
      exja: "彼女は引っ越すまで5年間大阪に住んでいた。",
      fig: { t: "time", marks: [{ from: -4, to: -1, label: "5年間住んでいた" }, { at: -1, label: "引っ越し" }] },
      ng: { bad: "She has lived in Osaka for five years before she moved.", good: "She had lived in Osaka for five years before she moved.", why: "引っ越した「過去」が基準なので had" },
      why: "現在完了は「今まで続く」。基準を過去にずらすと「その過去まで続いた」になるので、have が had に変わる。",
      easy: "現在完了の have を、過去にタイムスリップさせると had になる。「その日まで ずっと〜だった」と言いたいときに使うよ。"
    },
    {
      h: "未来完了＝未来の時点まで",
      body: "未来のある時までに「終わっている・続いている」は will have＋過去分詞。by（〜までに）とセットで出ることが多い。",
      form: "will have ＋ 過去分詞 ＋ by ～",
      ex: "I [will have finished] the report by noon.",
      exja: "正午までにはレポートを書き終えているだろう。",
      fig: { t: "time", marks: [{ from: 0, to: 2, label: "書いている" }, { at: 2, label: "正午" }] },
      ng: { bad: "I will finish the report until noon.", good: "I will have finished the report by noon.", why: "「までに」は by。until は「までずっと」" },
      why: "未来のある時点を基準に、それまでに完了・継続していることを言う。未来の will と完了の have を合体させた形。",
      easy: "①未来に「しめきり」を立てる。②その時には もう終わっているよね。③だから will＋have＋過去分詞。by〜が目印。"
    }
  ],
  drills: [
    { en: "When I got home, my sister [had gone] to bed.", ja: "私が家に帰ったとき、妹はもう寝ていた。", alt: ["has gone", "goes", "have gone"], tip: "帰宅より前に寝た → had＋過去分詞", why: "帰宅より前に寝ていた。has／have gone は今が基準、goes は今の習慣なのでダメ。", p: 0 },
    { en: "I [had already eaten] lunch when he called.", ja: "彼が電話してきたとき、私はもう昼食を食べ終えていた。", alt: ["have already eaten", "already eat", "has already eaten"], tip: "電話より前に食べ終えていた", why: "電話より前に食べ終えていた。have／has は今が基準。already eat は時制がない。", p: 0 },
    { en: "She showed me the photos she [had taken] in Paris.", ja: "彼女はパリで撮った写真を私に見せてくれた。", alt: ["has taken", "had take", "have taken"], tip: "見せたより前に撮った", why: "見せたより前に撮った写真。had take は過去分詞でないので×（take → taken）。", p: 0 },
    { en: "The bus [had left] before we reached the stop.", ja: "私たちがバス停に着く前に、バスは出てしまっていた。", alt: ["has left", "leaves", "have left"], tip: "着いたより前に出発 → had left", why: "バス停に着くより前に出ていた。leaves は今のこと、has／have left は今が基準。", p: 0 },
    { en: "He [had worked] at the bank for twenty years before he retired.", ja: "彼は退職するまで20年間銀行で働いていた。", alt: ["has worked", "have worked", "had work"], tip: "退職の時までの継続", why: "退職の時までの20年の継続。had work は過去分詞でない。has／have は今が基準。", p: 1 },
    { en: "I [had never been] abroad until I was twenty.", ja: "20歳になるまで、私は海外に行ったことがなかった。", alt: ["have never been", "has never been", "never have been"], tip: "過去の時点までの経験", why: "20歳の時までの経験。have／has never been は今までの経験。語順は had never been。", p: 1 },
    { en: "We [had known] each other for ten years when we got married.", ja: "結婚したとき、私たちは知り合って10年たっていた。", alt: ["have known", "has known", "had know"], tip: "結婚の時までの継続", why: "結婚した時までの10年の継続。have／has known は今まで、had know は形が×。", p: 1 },
    { en: "By the time the police arrived, the thief [had run] away.", ja: "警察が着いたときには、どろぼうは逃げてしまっていた。", alt: ["has run", "have run", "had ran"], tip: "run の過去分詞は run", why: "警察が着く前に逃げた。run の過去分詞は run なので had ran は×。has／have は今基準。", p: 0 },
    { en: "I [will have finished] this book by tomorrow.", ja: "明日までにはこの本を読み終えているだろう。", alt: ["will finish have", "have finished", "had finished"], tip: "未来の時点までに完了 → will have", why: "明日（未来）までに完了。have／had は今・過去が基準。will finish have は語順×。", p: 2 },
    { en: "She [will have arrived] in London by tonight.", ja: "今夜までには彼女はロンドンに着いているだろう。", alt: ["has arrived", "had arrived", "will arrived"], tip: "by tonight ＝ 未来の基準", why: "今夜（未来）までに到着している。has／had は今・過去が基準。will arrived は形が×。", p: 2 },
    { en: "By next year, we [will have been] friends for five years.", ja: "来年で、私たちは友だちになって5年になる。", alt: ["have been", "had been", "will be been"], tip: "未来の時点までの継続", why: "来年（未来）までの5年の継続。will be been という形はない。have／had は基準ちがい。", p: 2 },
    { en: "If I read it again, I [will have read] it three times.", ja: "もう一度読めば、それを3回読んだことになる。", alt: ["have read", "had read", "will had read"], tip: "未来の時点までの経験", why: "もう一度読む未来の時点で3回目の経験。will had は形が×、have／had は基準ちがい。", p: 2 },
    { en: "When we arrived, the concert [had already started].", ja: "私たちが着いたとき、コンサートはもう始まっていた。", alt: ["has already started", "already starts", "have already started"], tip: "着いたより前に始まった", why: "着いたより前に始まっていた → had。has／have は今が基準、starts は今のこと。", p: 0 },
    { en: "I noticed that I [had left] my phone at home.", ja: "私は家に電話を置いてきたことに気づいた。", alt: ["have left", "has left", "had leave"], tip: "気づいたより前に置いてきた", why: "気づいた時より前に置いてきた → had left。had leave は過去分詞でないので×。", p: 0 },
    { en: "The shop [had closed] by the time I got there.", ja: "私が着いたときには、店は閉まっていた。", alt: ["has closed", "closes", "had close"], tip: "着いた時までに閉まっていた", why: "着いた（過去）より前に閉まった → had closed。closes は今、had close は形が×。", p: 0 },
    { en: "He returned the book he [had borrowed] from me.", ja: "彼は私から借りていた本を返した。", alt: ["has borrowed", "had borrow", "have borrowed"], tip: "返したより前に借りた", why: "返すより前に借りていた → had borrowed。has／have は今が基準なので×。", p: 0 },
    { en: "When I called her, she [had just finished] dinner.", ja: "私が電話したとき、彼女はちょうど夕食を終えたところだった。", alt: ["has just finished", "just finishes", "have just finished"], tip: "電話の直前に終えた → had just", why: "電話した過去の時点の直前 → had just finished。has／have は今が基準。", p: 0 },
    { en: "I [had lived] in Osaka for three years before I moved here.", ja: "ここに引っ越す前、私は大阪に3年間住んでいた。", alt: ["have lived", "has lived", "had live"], tip: "引っ越しまでの3年間", why: "引っ越した過去までの継続 → had lived。have／has は今まで、had live は×。", p: 1 },
    { en: "She [had never eaten] sushi before she came to Japan.", ja: "彼女は日本に来るまで、すしを食べたことがなかった。", alt: ["has never eaten", "have never eaten", "had never ate"], tip: "来日までの経験 → had never", why: "来日（過去）までの経験 → had never eaten。ate は過去分詞ではないので×。", p: 1 },
    { en: "They [had been] married for ten years when their son was born.", ja: "息子が生まれたとき、彼らは結婚して10年だった。", alt: ["have been", "has been", "had be"], tip: "生まれた時までの10年", why: "生まれた時（過去）までの10年 → had been。have／has は今まで、had be は×。", p: 1 },
    { en: "By the time you wake up, I [will have left] home.", ja: "あなたが起きるころには、私は家を出てしまっているだろう。", alt: ["had left", "have left", "will left"], tip: "起きる時（未来）までに完了", why: "未来の時点までに完了 → will have left。had／have は今や過去が基準。", p: 2 },
    { en: "By the end of this month, he [will have saved] enough money.", ja: "今月末までに、彼は十分なお金をためているだろう。", alt: ["has saved", "had saved", "will saved"], tip: "月末（未来）までに完了", why: "月末という未来までに完了 → will have saved。will のあとは原形 have。", p: 2 },
    { en: "By 2030, the city [will have changed] a lot.", ja: "2030年までに、その町は大きく変わっているだろう。", alt: ["has changed", "had changed", "will changed"], tip: "2030年までに変化", why: "2030年という未来までの変化 → will have changed。will changed は×。", p: 2 },
    { en: "Next month, we [will have known] each other for a year.", ja: "来月で、私たちは知り合って1年になる。", alt: ["have known", "had known", "will knew"], tip: "来月（未来）までの継続", why: "来月という未来までの継続 → will have known。will knew は形が×。", p: 2 },
  ],
  swhy: [
    { why: "着いた（過去）より前に始まっていたので had started。has／have は今が基準なのでダメ。", p: 0 },
    { why: "なくした（過去）より前にもらったので had given。gives は今の習慣、has は今が基準。", p: 0 },
    { why: "北海道に行った過去の時点までの経験。have／has は「今まで」の経験になってしまう。", p: 1 },
    { why: "医者に行った時まで1週間続いていたので had been。is は今、have been は今まで。", p: 1 },
    { why: "来年の春（未来）までの継続。will live だと「住むだろう」で、10年間の期間と合わない。", p: 2 },
    { why: "by the time 〜 は未来の基準。それまでに終わる → will have ended。had は過去基準で×。", p: 2 }
  ]
};

window.LX.plus["c2-u02"] = {
  core: {
    ico: "🔍",
    catch: "助動詞＋have done は「過去への推理」",
    say: "今の自分が、過去のことを「〜したにちがいない」「〜したかも」と推理したり、「〜すべきだった」と後悔したりする形。",
    fig: { t: "scale", left: "ありえない", right: "まちがいない", items: [["can't have", 5], ["may have", 50], ["must have", 95]] }
  },
  points: [
    {
      h: "must have＝したにちがいない",
      body: "過去のことを「ぜったいそうだった」と推理する。名探偵が証拠から言い切るイメージ。何か根拠があるときに使う。",
      form: "must have ＋ 過去分詞",
      fig: { t: "pic", items: [{ e: "🌂", x: 20, y: 62, l: "ぬれた傘", s: 0.9 }, { e: "🕵️", x: 76, y: 62, l: "推理する", b: "雨だったはず！" }], arrows: [[0, 1, "証拠", "dash"]], cap: "証拠から過去を言い切る＝must have" },
      ex: "He [must have been] tired.",
      exja: "彼は疲れていたにちがいない。",
      ng: { bad: "He must be tired yesterday.", good: "He must have been tired yesterday.", why: "過去の推理は must have＋過去分詞" },
      why: "助動詞のあとは原形しか置けない。過去のことを推理するには、完了形 have＋過去分詞で1段過去にもどす。",
      easy: "①must は「きっと」。②でも must のあとに過去形は置けない。③そこで have＋過去分詞で「〜した」を表す。"
    },
    {
      h: "can't／may have",
      body: "can't have は「したはずがない」（ほぼ0%）、may have は「したかもしれない」（五分五分）。確信度のものさしで覚えよう。",
      form: "can't／may have ＋ 過去分詞",
      ex: "She [can't have said] such a thing.",
      exja: "彼女がそんなことを言ったはずがない。",
      fig: { t: "scale", left: "0%", right: "100%", items: [["can't have", 3], ["may have", 50], ["must have", 97]] },
      ng: { bad: "She mustn't have said such a thing.", good: "She can't have said such a thing.", why: "「はずがない」は can't have。mustn't は禁止" },
      why: "推理の強さは助動詞で決まる。can't は「ありえない」、may は「かも」。過去の話なので後ろは have＋過去分詞。",
      easy: "天気予報のように％で考えよう。must have＝90%、may have＝50%、can't have＝ほぼ0%。「〜した」の部分はいつも have＋過去分詞。"
    },
    {
      h: "should have＝後悔・非難",
      body: "should have は「すべきだったのに（しなかった）」。やり直したい気持ち。shouldn't have は「しなければよかった」。",
      form: "should have ＋ 過去分詞",
      ex: "I [should have studied] harder.",
      exja: "もっと一生けんめい勉強すべきだった。",
      fig: { t: "vs", a: ["I should have studied.", "実際はしなかった"], b: ["I studied hard.", "実際にした"] },
      ng: { bad: "I should study harder last year.", good: "I should have studied harder last year.", why: "過去への後悔は should have＋過去分詞" },
      why: "should は「〜すべき」。過去にすべきだった＝実際はしなかった、という意味になるので後悔や非難を表す。",
      easy: "「あのとき〜しておけばよかった…」と言いたいときの決まり文句。should have＋過去分詞をセットで覚えよう。"
    }
  ],
  drills: [
    { en: "She [must have left] her umbrella on the train.", ja: "彼女は電車にかさを置き忘れたにちがいない。", alt: ["must left", "must had left", "must have leave"], tip: "must have＋過去分詞＝したにちがいない", why: "置き忘れたにちがいない → must have left。must の後に過去形 left や had は置けない。", p: 0 },
    { en: "They [must have practiced] very hard.", ja: "彼らはとても熱心に練習したにちがいない。", alt: ["must practiced", "must have practice", "must had practiced"], tip: "have のあとは過去分詞", why: "練習したにちがいない → must have practiced。have の後は過去分詞（practice は×）。", p: 0 },
    { en: "He [may have forgotten] my name.", ja: "彼は私の名前を忘れたのかもしれない。", alt: ["may forgot", "may have forget", "may has forgotten"], tip: "may have＝したかもしれない", why: "忘れたかもしれない → may have forgotten。forgot は過去形、has は助動詞の後で×。", p: 1 },
    { en: "Ken [might have taken] the wrong train.", ja: "ケンは電車を乗りまちがえたのかもしれない。", alt: ["might took", "might have take", "might has taken"], tip: "might have も「したかも」", why: "乗りまちがえたかもしれない → might have taken。took は過去形、take は原形で×。", p: 1 },
    { en: "You [can't have seen] Mr. Sato yesterday.", ja: "あなたが昨日佐藤先生を見たはずがない。", alt: ["can't saw", "can't have see", "mustn't seen"], tip: "can't have＝したはずがない", why: "見たはずがない → can't have seen。saw は過去形で×。mustn't は「禁止」で意味がちがう。", p: 1 },
    { en: "She [cannot have finished] the work so soon.", ja: "彼女がそんなに早く仕事を終えたはずがない。", alt: ["cannot finished", "cannot have finish", "cannot has finished"], tip: "助動詞のあとは have（has ✕）", why: "終えたはずがない → cannot have finished。finish は原形、has は助動詞の後で×。", p: 1 },
    { en: "We [should have taken] a taxi.", ja: "タクシーに乗るべきだった。", alt: ["should took", "should have take", "should has taken"], tip: "should have＝すべきだった（後悔）", why: "タクシーに乗るべきだった → should have taken。took・take・has は形が×。", p: 2 },
    { en: "I [should have listened] to my mother.", ja: "母の言うことを聞くべきだった。", alt: ["should listened", "should have listen", "should has listened"], tip: "やり直したい気持ち", why: "母の言うことを聞くべきだった → should have listened。listen は原形で×。", p: 2 },
    { en: "You [shouldn't have told] him the secret.", ja: "彼に秘密を話すべきではなかったのに。", alt: ["shouldn't told", "shouldn't have tell", "shouldn't has told"], tip: "shouldn't have＝しなければよかった", why: "言わなければよかった → shouldn't have told。tell は原形、has は形が×。", p: 2 },
    { en: "He [needn't have worried] about the test.", ja: "彼はテストのことを心配する必要はなかったのに。", alt: ["needn't worried", "needn't have worry", "needn't has worried"], tip: "needn't have＝する必要はなかった", why: "心配する必要はなかった（のにした）→ needn't have worried。worry は原形で×。", p: 2 },
    { en: "You [could have called] me from the station.", ja: "駅から電話してくれてもよかったのに。", alt: ["could called", "could have call", "could has called"], tip: "could have＝できたのに（しなかった）", why: "電話してくれればよかったのに → could have called。call は原形、has は形が×。", p: 2 },
    { en: "If I had run, I [could have caught] the bus.", ja: "走っていたら、バスに間に合ったのに。", alt: ["could caught", "could have catch", "can have caught"], tip: "過去の反対の想像 → could have", why: "走っていたら間に合った → could have caught。can は今の話、catch は原形で×。", p: 1 },
    { en: "The road is wet. It [must have rained] last night.", ja: "道がぬれている。昨夜雨が降ったにちがいない。", alt: ["must rained", "must have rain", "must had rained"], tip: "証拠から過去を推理", why: "ぬれた道（証拠）から過去を推理 → must have rained。must のあとは原形。", p: 0 },
    { en: "You [must have worked] hard to pass the test.", ja: "その試験に合格するなんて、一生けんめい勉強したにちがいない。", alt: ["must worked", "must have work", "must had worked"], tip: "合格から過去を推理", why: "合格したから「したにちがいない」→ must have worked。have のあとは過去分詞。", p: 0 },
    { en: "He looks happy. He [must have won] the game.", ja: "彼はうれしそうだ。試合に勝ったにちがいない。", alt: ["must won", "must have win", "must had won"], tip: "うれしそう → 勝ったはず", why: "うれしそうな顔から推理 → must have won。win は過去分詞でないので×。", p: 0 },
    { en: "She [may have gone] home already.", ja: "彼女はもう家に帰ったかもしれない。", alt: ["may went", "may have go", "may has gone"], tip: "may have ＝ 〜したかもしれない", why: "過去の「かもしれない」→ may have gone。may のあとは has ではなく have。", p: 1 },
    { en: "I [might have left] my bag in the classroom.", ja: "教室にかばんを置いてきたかもしれない。", alt: ["might left", "might have leave", "might has left"], tip: "might have ＝ 〜したかもしれない", why: "自信のない過去の推量 → might have left。might left は過去形で×。", p: 1 },
    { en: "He [can't have said] such a thing.", ja: "彼がそんなことを言ったはずがない。", alt: ["can't said", "can't have say", "can't has said"], tip: "can't have ＝ したはずがない", why: "過去の「ありえない」→ can't have said。have のあとは過去分詞 said。", p: 1 },
    { en: "They [couldn't have known] the answer.", ja: "彼らが答えを知っていたはずがない。", alt: ["couldn't knew", "couldn't have know", "couldn't has known"], tip: "couldn't have ＝ したはずがない", why: "過去の否定の推量 → couldn't have known。knew・know の形は×。", p: 1 },
    { en: "I [should have brought] an umbrella.", ja: "かさを持ってくるべきだった。", alt: ["should brought", "should have bring", "should has brought"], tip: "should have ＝ すべきだった（後悔）", why: "しなかった後悔 → should have brought。bring は過去分詞ではない。", p: 2 },
    { en: "We [shouldn't have stayed] up so late.", ja: "そんなに夜ふかしするべきではなかった。", alt: ["shouldn't stayed", "shouldn't have stay", "shouldn't has stayed"], tip: "してしまった後悔", why: "してしまったことへの後悔 → shouldn't have stayed。stay は形が×。", p: 2 },
    { en: "You ought to [have told] me earlier.", ja: "もっと早く言ってくれればよかったのに。", alt: ["told", "has told", "had told"], tip: "ought to have ＝ すべきだった", why: "ought to のあとは原形 → have told。told／has／had は to のあとに置けない。", p: 2 },
    { en: "She [needn't have bought] so much food.", ja: "彼女はそんなにたくさん食べ物を買う必要はなかったのに。", alt: ["needn't bought", "needn't have buy", "needn't has bought"], tip: "needn't have ＝ しなくてよかったのに", why: "買う必要はなかった（のに買った）→ needn't have bought。buy は×。", p: 2 },
    { en: "He [could have helped] us, but he didn't.", ja: "彼は私たちを手伝えたのに、手伝わなかった。", alt: ["could helped", "could have help", "could has helped"], tip: "could have ＝ できたのに", why: "できたのにしなかった → could have helped。could のあとは原形 have。", p: 2 },
  ],
  swhy: [
    { why: "驚いたにちがいない（過去の推理）→ must have been。助動詞の後は原形なので had／be は×。", p: 0 },
    { why: "乗り遅れたかもしれない → may have missed。助動詞の後は have（has は×）、miss は×。", p: 1 },
    { why: "忘れたはずがない → can't have forgotten。forgot は過去形で×。have の後は過去分詞。", p: 1 },
    { why: "もっと早く出るべきだった（後悔）→ should have left。leave は原形、has／had は×。", p: 2 },
    { why: "食べなければよかった → shouldn't have eaten。have が抜けると×。eat は原形で×。", p: 2 },
    { why: "練習していたら勝てただろう → could have won。can は今の可能性で過去の話に合わない。", p: 1 }
  ]
};

window.LX.plus["c2-u03"] = {
  core: {
    ico: "🔮",
    catch: "仮定法は「時制を1段過去にずらす」",
    say: "現実とちがう想像は、わざと時制を1つ過去にずらして「これは現実じゃないよ」と知らせる。",
    fig: { t: "pic", items: [{ e: "🧒", x: 22, y: 66, l: "I", b: "もし鳥なら…" }, { e: "🐦", x: 76, y: 45, l: "a bird", s: 0.9 }], arrows: [[0, 1, "If I were", "dash"]], cap: "ありえない想像 → 時制を1段過去へ" }
  },
  points: [
    {
      h: "仮定法過去＝今の反対",
      body: "今の事実と反対の想像は、if の中を過去形に。be動詞は主語が何でも were。1段ずらして現実から距離をとるイメージ。",
      form: "If ＋ 過去形, would ＋ 原形",
      ex: "If I [were] you, I would accept the offer.",
      exja: "もし私があなたなら、その申し出を受けるだろう。",
      fig: { t: "slots", parts: [["If I were you", "過去形"], ["I would accept", "助動詞"]] },
      ng: { bad: "If I am you, I would accept the offer.", good: "If I were you, I would accept the offer.", why: "今の反対の想像は were（過去形）" },
      why: "過去形は「時間の遠さ」だけでなく「現実からの遠さ」も表す。だから今の反対の想像は過去形にずらす。",
      easy: "①現実：私は鳥じゃない。②想像するときは1段うしろ（過去形）にずらす。③If I were a bird, I could fly. と覚えよう。"
    },
    {
      h: "仮定法過去完了＝過去の反対",
      body: "過去の事実と反対の想像は、もう1段ずらして had＋過去分詞。結論は would have＋過去分詞で「〜しただろうに」。",
      form: "If had done, would have done",
      ex: "If I had known, I [would have helped] you.",
      exja: "知っていたら、あなたを手伝ったのに。",
      fig: { t: "vs", a: ["I didn't know.", "過去の事実"], b: ["If I had known, ...", "過去の反対"] },
      ng: { bad: "If I knew, I would have helped you.", good: "If I had known, I would have helped you.", why: "過去の反対なので if の中は had＋過去分詞" },
      why: "過去の事実の反対は、過去形からさらに1段ずらして had＋過去分詞。結論側も would have＋過去分詞になる。",
      easy: "「あのとき〜だったら、〜したのに」は、if 側に had、結論側に would have。両方「1段多く」過去にするセット。"
    },
    {
      h: "ミックス型",
      body: "「あのとき〜していたら（過去）、今ごろ〜なのに（今）」。if 側は過去の反対、結論側は今の反対。now がミックスの合図。",
      form: "If had done, would 原形 now",
      ex: "If I had taken the medicine, I [would be] fine now.",
      exja: "あのとき薬を飲んでいたら、今ごろ元気なのに。",
      fig: { t: "time", marks: [{ at: -2, label: "薬を飲まず" }, { at: 0, label: "今ぐあい悪い" }] },
      ng: { bad: "If I had taken the medicine, I would have been fine now.", good: "If I had taken the medicine, I would be fine now.", why: "now の話なので would be（今の反対）" },
      why: "if 側の時（過去）と結論側の時（今）がちがうから。それぞれの時の反対を、それぞれの形で言う。",
      easy: "①if の中は「あのとき」→ had＋過去分詞。②結論は「今」→ would＋原形。③now が見えたら結論は would be の形。"
    }
  ],
  drills: [
    { en: "If I [knew] her address, I would write to her.", ja: "彼女の住所を知っていれば、手紙を書くのに。", alt: ["know", "had know", "would know"], tip: "今の反対 → if の中は過去形", why: "住所を知らない今の反対 → knew。know は現実の話、had know は形が×。", p: 0 },
    { en: "If I [were] taller, I could play basketball better.", ja: "もっと背が高ければ、バスケがもっとうまくできるのに。", alt: ["am", "be", "will be"], tip: "be動詞は were", why: "背が高くない今の反対 → were。am・be・will be は現実の言い方で×。", p: 0 },
    { en: "If we had a car, we [could drive] to the lake.", ja: "車があれば、湖までドライブできるのに。", alt: ["can drive", "could drove", "could driving"], tip: "結論は could＋原形", why: "車がない今の反対の結論 → could drive。can は現実、could drove は形が×。", p: 0 },
    { en: "What would you do if you [won] the lottery?", ja: "宝くじに当たったらどうする？", alt: ["will win", "had win", "winning"], tip: "ありえない想像 → 過去形", why: "宝くじに当たる想像（今の反対）→ won。will win は現実の予定で would と合わない。", p: 0 },
    { en: "If it [were not] raining, we would play outside.", ja: "雨が降っていなければ、外で遊ぶのに。", alt: ["is not", "does not", "has not"], tip: "今の反対 → were not", why: "雨が降っている今の反対 → were not。is not は現実の話で would と合わない。", p: 0 },
    { en: "I [would buy] that bike if I had enough money.", ja: "お金が十分あれば、あの自転車を買うのに。", alt: ["will buy", "would bought", "buy"], tip: "結論は would＋原形", why: "お金がない今の反対の結論 → would buy。will buy は現実、would bought は形が×。", p: 0 },
    { en: "If I had gotten up earlier, I [wouldn't have been] late.", ja: "もっと早く起きていたら、遅刻しなかっただろう。", alt: ["won't be", "wouldn't be been", "haven't been"], tip: "過去の反対 → would have＋過去分詞", why: "早起きしなかった過去の反対の結論 → wouldn't have been。won't be は現実で×。", p: 1 },
    { en: "If she [had asked] me, I would have helped her.", ja: "彼女が頼んでくれていたら、手伝ったのに。", alt: ["has asked", "had ask", "would asked"], tip: "過去の反対 → had＋過去分詞", why: "頼まなかった過去の反対 → had asked。has asked は今が基準、had ask は形が×。", p: 1 },
    { en: "If we had left earlier, we [could have seen] the sunrise.", ja: "もっと早く出発していたら、日の出が見られたのに。", alt: ["could seen", "can have seen", "could have saw"], tip: "could have＋過去分詞", why: "早く出なかった過去の反対の結論 → could have seen。have の後は過去分詞 seen。", p: 1 },
    { en: "If I [had saved] money, I could buy it now.", ja: "お金をためていたら、今それが買えるのに。", alt: ["have saved", "had save", "would save"], tip: "ミックス型：if 側は過去の反対", why: "貯金しなかった（過去）→ 今買えない（今）のミックス。if 側は過去の反対で had saved。", p: 2 },
    { en: "If he had not missed the train, he [would be] here now.", ja: "電車に乗りおくれなかったら、彼は今ここにいるのに。", alt: ["will be", "would have be", "is"], tip: "now → 結論は would＋原形", why: "乗り遅れた（過去）→ 今ここにいない。now があるので結論は今の反対 would be。", p: 2 },
    { en: "If you [had come] to the party, you would have met her.", ja: "パーティーに来ていたら、彼女に会えたのに。", alt: ["have come", "had came", "would come"], tip: "come の過去分詞は come", why: "来なかった過去の反対 → had come。have come は今が基準、had came は過去分詞が×。", p: 1 },
    { en: "If I [had] wings, I would fly to the moon.", ja: "もし翼があったら、月まで飛んでいくのに。", alt: ["have", "has", "will have"], tip: "今の反対 → 過去形", why: "翼は今ない（現実の反対）→ 過去形 had。have／has／will は事実の話。", p: 0 },
    { en: "If I [were] you, I would accept the offer.", ja: "もし私があなたなら、その申し出を受けるだろう。", alt: ["am", "be", "will be"], tip: "仮定法では were", why: "私はあなたになれない → 仮定法 were。am／will be は現実の話になる。", p: 0 },
    { en: "If she lived near here, she [would visit] us more often.", ja: "もし彼女がこの近くに住んでいたら、もっとよく来てくれるのに。", alt: ["will visit", "visits", "would visited"], tip: "if 節が過去形 → would＋原形", why: "if 節が仮定法過去 → 主節は would visit。will は現実、would visited は×。", p: 0 },
    { en: "If I [spoke] English well, I could travel alone.", ja: "英語がうまく話せたら、ひとりで旅行できるのに。", alt: ["speak", "will speak", "had spoke"], tip: "今の反対 → 過去形", why: "今は話せない（現実の反対）→ 過去形 spoke。had spoke は形が×。", p: 0 },
    { en: "If we [didn't have] homework, we could play more.", ja: "宿題がなければ、もっと遊べるのに。", alt: ["don't have", "won't have", "haven't had"], tip: "今の反対 → 過去形", why: "今は宿題がある（現実の反対）→ didn't have。don't／won't は現実の話。", p: 0 },
    { en: "If I had known the answer, I [would have told] you.", ja: "答えを知っていたら、あなたに教えたのに。", alt: ["will have told", "would told", "had told"], tip: "過去の反対 → would have", why: "過去の反対 → would have told。would told は形が×、will は現実の未来。", p: 1 },
    { en: "If it [hadn't rained], we would have gone camping.", ja: "雨が降らなかったら、キャンプに行ったのに。", alt: ["didn't rain", "hasn't rained", "wouldn't rain"], tip: "過去の反対 → had＋過去分詞", why: "過去の反対 → if 節は hadn't rained。didn't rain だと主節と合わない。", p: 1 },
    { en: "If you had studied harder, you [could have passed] the exam.", ja: "もっと勉強していたら、試験に合格できたのに。", alt: ["can have passed", "could have pass", "could passed"], tip: "過去の反対 → could have", why: "過去の反対 → could have passed。can have は×、pass は過去分詞でない。", p: 1 },
    { en: "What would you have done if you [had missed] the bus?", ja: "もしバスに乗り遅れていたら、どうしていましたか。", alt: ["have missed", "would miss", "had miss"], tip: "過去の反対 → had＋過去分詞", why: "過去の想像 → if 節は had missed。have missed は今基準、had miss は×。", p: 1 },
    { en: "If I [had taken] the medicine, I would feel better now.", ja: "薬を飲んでいたら、今は気分がいいのに。", alt: ["have taken", "had took", "would take"], tip: "if は過去、主節は今", why: "飲まなかった過去の反対 → had taken。took は過去分詞でないので×。", p: 2 },
    { en: "If she had gone to bed earlier, she [wouldn't be] sleepy now.", ja: "もっと早く寝ていたら、彼女は今眠くないのに。", alt: ["won't be", "wouldn't have be", "isn't"], tip: "now があるので今の反対", why: "now の反対 → wouldn't be。won't／isn't は現実、have be は形が×。", p: 2 },
    { en: "If I [had practiced] more, I could play the piano now.", ja: "もっと練習していたら、今ピアノがひけるのに。", alt: ["have practiced", "had practice", "would practice"], tip: "過去の練習 → 今の結果", why: "練習しなかった過去の反対 → had practiced。had practice は形が×。", p: 2 },
  ],
  swhy: [
    { why: "時間がない今の現実の反対 → 過去形 had。have は現実の話になり、would と合わない。", p: 0 },
    { why: "鳥ではない今の反対 → were。am は現実の話。仮定法の be は主語に関係なく were。", p: 0 },
    { why: "今の反対の想像の結論 → would go。will go は現実の予定、would have go は形が×。", p: 0 },
    { why: "過去の反対の結論 → would have caught。would catch は今の想像で、過去の話に合わない。", p: 1 },
    { why: "過去の反対の if 側 → had studied。studied だと今の反対で would have と合わない。", p: 1 },
    { why: "食べなかった（過去）→ 今おなかがすいている。now があるので結論は今の形 wouldn't be。", p: 2 }
  ]
};

window.LX.plus["c2-u04"] = {
  core: {
    ico: "💭",
    catch: "wish も as if も「現実じゃない」サイン",
    say: "wish・as if・without・It's time のあとも、現実とちがう話なので時制を1段過去へ。合言葉は「1段ずらし」",
    fig: { t: "vs", a: ["I wish I had a dog.", "今はいない"], b: ["I'm glad I have a dog.", "今いる"] }
  },
  points: [
    {
      h: "I wish＝かなわない願い",
      body: "I wish のあとは現実とちがうので1段過去へ。今の願いは過去形、過去への後悔は had＋過去分詞。hope は実現しそうな願い。",
      form: "I wish ＋ 過去形／had 過去分詞",
      ex: "I wish I [could] speak French.",
      exja: "フランス語が話せたらなあ。",
      fig: { t: "vs", a: ["I wish I could swim.", "実現はむずかしい"], b: ["I hope I can swim.", "実現しそう"] },
      ng: { bad: "I wish I can speak French.", good: "I wish I could speak French.", why: "wish のあとは1段過去。can → could" },
      why: "I wish は「実際はそうじゃない」願い。現実から距離をとるため、仮定法と同じく1段過去にずらす。",
      easy: "①今の願い → 過去形（I wish I had…）。②過去への後悔 → had＋過去分詞。③かないそうな願いなら hope を使う。"
    },
    {
      h: "as if＝まるで〜のように",
      body: "as if の後ろは「本当はちがうけど、そう見える」。主節と同じ時なら過去形、それより前なら had＋過去分詞。",
      form: "as if ＋ 過去形／had 過去分詞",
      ex: "He talks as if he [knew] everything.",
      exja: "彼はまるで何でも知っているかのように話す。",
      fig: { t: "pic", items: [{ e: "👦", x: 22, y: 64, l: "He", b: "何でも知ってる！" }, { e: "🎓", x: 76, y: 58, l: "博士みたい", s: 0.9 }], arrows: [[0, 1, "as if", "dash"]], cap: "本当はちがう → 1段過去の knew" },
      ng: { bad: "He looked as if he has seen a ghost.", good: "He looked as if he had seen a ghost.", why: "見えた時より前のことは had＋過去分詞" },
      why: "as if の中身は事実ではない想像。だから仮定法と同じく、時を1段ずらした形を使う。",
      easy: "「本当は知らないのに、知っているみたい」。本当じゃない部分だけ1段過去にする。同じ時 → 過去形、前のこと → had。"
    },
    {
      h: "without＝もし〜がなければ",
      body: "without や if it were not for は「〜がなかったら」。if のない仮定法。結論の would が想像の目印。",
      form: "Without ～, S would ＋ 原形",
      ex: "[Without] water, we could not live.",
      exja: "水がなければ、私たちは生きられないだろう。",
      fig: { t: "slots", parts: [["Without water,", "仮定"], ["we could not live", "結論"]], arc: [0, 1, "もし〜なら"] },
      ng: { bad: "If it is not for water, we could not live.", good: "If it were not for water, we could not live.", why: "if it were not for は決まった形" },
      why: "without〜 が if 節の役目をしている。if がなくても結論に would があれば、それは想像の話のサイン。",
      easy: "without＝「〜がなかったら」と覚える。後ろの文に would が出てきたら「想像の話だな」と気づければOK。"
    }
  ],
  drills: [
    { en: "I wish I [were] a little taller.", ja: "もう少し背が高ければなあ。", alt: ["am", "be", "will be"], tip: "wish のあとは were", why: "背が高くない今の反対の願い → were。am・be・will be は現実の言い方で×。", p: 0 },
    { en: "I wish I [knew] his phone number.", ja: "彼の電話番号を知っていればなあ。", alt: ["know", "have known", "knowing"], tip: "今の願い → 過去形", why: "電話番号を知らない今の反対 → knew。know は現実、have known は時がずれる。", p: 0 },
    { en: "I wish it [would stop] raining.", ja: "雨がやんでくれたらいいのに。", alt: ["stops", "will stop", "would stopped"], tip: "wish ＋ would＋原形", why: "雨がやんでほしい（相手まかせの願い）→ would stop。will・stops は wish の後で×。", p: 0 },
    { en: "I wish I [had gone] to the concert.", ja: "あのコンサートに行けばよかったなあ。", alt: ["have gone", "go", "had went"], tip: "過去への後悔 → had＋過去分詞", why: "行かなかった過去の後悔 → had gone。have gone は今が基準、had went は形が×。", p: 0 },
    { en: "I wish I [hadn't said] that to her.", ja: "彼女にあんなことを言わなければよかった。", alt: ["haven't said", "don't say", "hadn't say"], tip: "過去への後悔 → hadn't＋過去分詞", why: "言ってしまった過去の後悔 → hadn't said。haven't・don't は現実の話で×。", p: 0 },
    { en: "She talks as if she [were] my mother.", ja: "彼女はまるで私の母親のような話し方をする。", alt: ["is being", "be", "will be"], tip: "as if ＋ were", why: "本当は母ではない → as if＋were。is being・will be は現実・未来の話で×。", p: 1 },
    { en: "He acted as if nothing [had happened].", ja: "彼はまるで何事もなかったかのようにふるまった。", alt: ["has happened", "happens", "had happen"], tip: "それより前 → had＋過去分詞", why: "何かあったのに、なかったかのように → 前のことなので had happened。", p: 1 },
    { en: "[Without] the internet, our lives would be very different.", ja: "インターネットがなければ、生活はずいぶん違うだろう。", alt: ["Unless", "Except", "If"], tip: "Without ＋ 名詞＝〜がなければ", why: "インターネットがなかったら → Without＋名詞。Unless・If は後ろに文が必要。", p: 2 },
    { en: "[If it were] not for your advice, I would give up.", ja: "あなたの助言がなければ、私はあきらめるだろう。", alt: ["If it is", "If it was be", "Unless it were"], tip: "If it were not for ＝ 〜がなければ", why: "if it were not for の形。If it is は現実、Unless it were は意味が×。", p: 2 },
    { en: "[But for] the rain, the game would have been exciting.", ja: "雨がなかったら、試合は盛り上がっただろう。", alt: ["But", "Except", "Without for"], tip: "But for ＝ Without", why: "But for＝Without（〜がなかったら）。But だけ・Except は意味が×。", p: 2 },
    { en: "It's time we [started] the meeting.", ja: "もう会議を始める時間だ。", alt: ["will start", "starting", "had start"], tip: "It's time ＋ 過去形", why: "It's time＋過去形で「もう〜すべき時だ」。starting・will start は×。", p: 0 },
    { en: "It's high time you [cleaned] your room.", ja: "とっくに部屋をそうじする時間だよ。", alt: ["will clean", "cleaning", "had clean"], tip: "It's high time ＋ 過去形", why: "It's high time＋過去形で「とっくに〜すべき時だ」。clean の過去形 cleaned。", p: 0 },
    { en: "I wish I [lived] near the sea.", ja: "海の近くに住んでいたらなあ。", alt: ["live", "will live", "had live"], tip: "今の願い → 過去形", why: "今の願い → 1段過去の lived。live／will live は現実の話になる。", p: 0 },
    { en: "I wish I [could fly] like a bird.", ja: "鳥のように飛べたらなあ。", alt: ["can fly", "could flew", "will fly"], tip: "can → could にずらす", why: "かなわない願い → can を could に。could flew は could のあとが×。", p: 0 },
    { en: "I wish you [were] here with me.", ja: "あなたがここにいてくれたらなあ。", alt: ["are", "be", "will be"], tip: "今の願い → were", why: "今いない人への願い → were。are／will be は現実の話になる。", p: 0 },
    { en: "I wish I [had studied] English harder in junior high.", ja: "中学でもっと英語を勉強しておけばよかった。", alt: ["have studied", "had study", "would study"], tip: "過去への後悔 → had＋過去分詞", why: "中学（過去）への後悔 → had studied。had study は形が×。", p: 0 },
    { en: "I wish I [hadn't eaten] so much.", ja: "あんなに食べなければよかった。", alt: ["haven't eaten", "don't eat", "hadn't ate"], tip: "過去への後悔 → hadn't", why: "食べた過去への後悔 → hadn't eaten。ate は過去分詞でないので×。", p: 0 },
    { en: "It's about time you [went] home.", ja: "もう家に帰る時間だよ。", alt: ["go", "will go", "going"], tip: "It's time ＋ 過去形", why: "It's (about) time のあとは過去形 went。go／will go／going は×。", p: 0 },
    { en: "He spends money as if he [were] rich.", ja: "彼はまるでお金持ちのようにお金を使う。", alt: ["is being", "be", "will be"], tip: "as if ＋ 過去形", why: "本当はお金持ちではない → as if＋were。be／will be は形が合わない。", p: 1 },
    { en: "He looked as if he [had run] a marathon.", ja: "彼はまるでマラソンを走ってきたように見えた。", alt: ["has run", "had ran", "runs"], tip: "見えた時より前 → had＋過去分詞", why: "見えた時より前のこと → had run。ran は過去分詞でないので×。", p: 1 },
    { en: "You talk as if you [knew] the answer.", ja: "あなたはまるで答えを知っているかのように話す。", alt: ["had knew", "knowing", "will know"], tip: "同じ時 → 過去形", why: "話す今と同じ時の想像 → knew。had knew は形が×、knowing も×。", p: 1 },
    { en: "[Without] your support, I couldn't have finished the project.", ja: "あなたの支えがなかったら、その計画をやり終えられなかった。", alt: ["Unless", "Except", "If"], tip: "Without ＋ 名詞 ＝ 〜がなければ", why: "名詞 your support の前 → Without。Unless／If は後ろに文が必要。", p: 2 },
    { en: "[If it had] not been for the map, we would have gotten lost.", ja: "地図がなかったら、私たちは道に迷っていただろう。", alt: ["If it has", "If it was", "Unless it had"], tip: "過去なら If it had not been for", why: "過去の「〜がなければ」→ If it had not been for。has／was は形が×。", p: 2 },
    { en: "[But for] his advice, I would have made a mistake.", ja: "彼の助言がなかったら、私はまちがえていただろう。", alt: ["Except", "Unless", "But not"], tip: "But for ＝ Without", why: "But for＋名詞 ＝ 〜がなければ。Unless は文が必要、Except は意味が×。", p: 2 },
  ],
  swhy: [
    { why: "妹がいない今の現実と反対の願い → 過去形 had。have／has は現実の話で wish と合わない。", p: 0 },
    { why: "去年の後悔 → had studied。studied だと「今の願い」になってしまう。", p: 0 },
    { why: "本当はスターではない → as if＋were。be・been は形が×、will be は未来の話。", p: 1 },
    { why: "「〜がなかったら」は前置詞 without＋名詞。Unless・If は後ろに文が必要で×。", p: 2 },
    { why: "if it were not for＝「〜がなければ」の決まった形。is not は現実の話で×。", p: 2 },
    { why: "It's time＋過去形＝「もう〜する時間だ（まだしていない）」。原形 go や will go は×。", p: 0 }
  ]
};

window.LX.plus["c2-u05"] = {
  core: {
    ico: "✂️",
    catch: "分詞構文は「接続詞をカットした文」",
    say: "When I walked… の接続詞と主語をカットし、動詞を -ing に。文がスッキリして、映画の場面説明のようになる。",
    fig: { t: "slots", parts: [["Walking home", "分詞"], ["I", "S"], ["met Ken", "V O"]], arc: [0, 1, "I がする"] }
  },
  points: [
    {
      h: "接続詞をカットする",
      body: "接続詞（when, because など）と主語を消し、動詞を -ing に。主語は後ろの文と同じ人。意味は前後から「〜して・〜なので」。",
      form: "～ing ～, S ＋ V",
      ex: "[Walking] in the park, I met an old friend.",
      exja: "公園を歩いていたら、昔の友だちに会った。",
      fig: { t: "slots", parts: [["Walking", "分詞"], ["I", "S"], ["met an old friend", "V O"]], arc: [0, 1, "I が歩く"] },
      ng: { bad: "Walking in the park, a dog barked at me.", good: "While I was walking in the park, a dog barked at me.", why: "歩いたのは犬ではない。主語をそろえる" },
      why: "主語が同じなら、接続詞と主語はくり返さなくても意味が通じる。動詞を -ing にして「つなぎ」の形にする。",
      easy: "①When I walked in the park, I met… ②When と I をカット。③walked を Walking に。これで分詞構文の完成！"
    },
    {
      h: "受け身は過去分詞で",
      body: "主語が「〜される」側なら、過去分詞から始める（Being が省かれた形）。本は書く側ではなく書かれる側だから Written。",
      form: "過去分詞 ～, S ＋ V",
      ex: "[Written] in easy English, the book is popular.",
      exja: "やさしい英語で書かれているので、その本は人気だ。",
      fig: { t: "pic", items: [{ e: "✍️", x: 20, y: 60, l: "作者（書く側）" }, { e: "📘", x: 76, y: 60, l: "the book" }], arrows: [[0, 1, "書く"]], cap: "本は書かれる側 → Written" },
      ng: { bad: "Writing in easy English, the book is popular.", good: "Written in easy English, the book is popular.", why: "本は「書かれる」側なので過去分詞" },
      why: "主語がその動作を「される」側なら受け身。Being written の Being は省けるので、過去分詞から始まる。",
      easy: "主語に「〜する？される？」と聞こう。本は書く？書かれる？→ 書かれる。だから Written。する側なら -ing。"
    },
    {
      h: "否定は Not、前は Having",
      body: "否定は分詞の前に Not。主節より前のことは Having＋過去分詞で「〜し終えてから」。順番がひと目でわかる。",
      form: "Not ～ing／Having ＋ 過去分詞",
      ex: "[Not knowing] what to say, I kept silent.",
      exja: "何と言えばいいかわからず、私は黙っていた。",
      fig: { t: "time", marks: [{ at: -2, label: "①宿題を終える" }, { at: -1, label: "②テレビを見る" }] },
      ng: { bad: "Knowing not what to say, I kept silent.", good: "Not knowing what to say, I kept silent.", why: "not は分詞の前に置く" },
      why: "not は打ち消す語の前に置くのがきまり。Having＋過去分詞は、主節より前に起きたことをはっきり示す。",
      easy: "①否定したいなら先頭に Not。②「〜し終えてから」なら Having＋過去分詞。2つのパーツを先頭に置くだけ。"
    }
  ],
  drills: [
    { en: "[Seeing] me, the dog wagged its tail.", ja: "私を見て、犬はしっぽをふった。", alt: ["Saw", "Seen", "To seeing"], tip: "犬が見る → -ing", why: "犬が私を見る（する側）→ Seeing。Seen は「見られる」、Saw は文頭に置けない。", p: 0 },
    { en: "[Opening] the door, I found a letter on the floor.", ja: "ドアを開けると、床に手紙が落ちていた。", alt: ["Opened", "Open", "To opening"], tip: "私が開ける → -ing", why: "私がドアを開ける（する側）→ Opening。Opened は「開けられた」側になる。", p: 0 },
    { en: "[Living] near the sea, she swims every day.", ja: "海の近くに住んでいるので、彼女は毎日泳ぐ。", alt: ["Lived", "Live", "To living"], tip: "理由「〜なので」", why: "彼女が海の近くに住む（する側）→ Living。Lived・Live は文頭に置けない。", p: 0 },
    { en: "[Being] sick, he stayed home from school.", ja: "病気だったので、彼は学校を休んだ。", alt: ["Be", "Been", "To being"], tip: "be動詞は Being", why: "Being sick＝病気なので。Been・Be は文頭の形として×。", p: 0 },
    { en: "[Surprised] at the news, she dropped her cup.", ja: "その知らせに驚いて、彼女はカップを落とした。", alt: ["Surprising", "Surprise", "To surprised"], tip: "驚かされる → 過去分詞", why: "彼女は驚かされる側 → Surprised。Surprising だと「人を驚かせる」になる。", p: 1 },
    { en: "[Born] in Canada, he speaks English and French.", ja: "カナダで生まれたので、彼は英語とフランス語を話す。", alt: ["Bearing", "Bear", "Being bear"], tip: "生まれる＝be born → Born", why: "人は「生まれる」側（受け身）→ Born。Bearing は「産む」側になってしまう。", p: 1 },
    { en: "[Not feeling] well, I left the party early.", ja: "気分がよくなかったので、パーティーを早めに出た。", alt: ["Feeling not", "Not feel", "Don't feeling"], tip: "否定は Not ＋ -ing", why: "否定は分詞の前に Not → Not feeling。Feeling not・Don't は語順・形が×。", p: 2 },
    { en: "[Having lost] my key, I couldn't get in.", ja: "かぎをなくしてしまったので、中に入れなかった。", alt: ["Having lose", "Had lost", "Have lost"], tip: "先に起きたこと → Having＋過去分詞", why: "鍵をなくしたのは入れなかったより前 → Having lost。lose は過去分詞でない。", p: 2 },
    { en: "[Having lived] in Tokyo, he knows the city well.", ja: "東京に住んでいたので、彼はその街をよく知っている。", alt: ["Have lived", "Having live", "Had living"], tip: "前のこと → Having＋過去分詞", why: "東京に住んでいたのは今より前 → Having lived。Have・Had は分詞構文の形でない。", p: 2 },
    { en: "She walked to school, [listening] to music.", ja: "彼女は音楽を聞きながら学校へ歩いた。", alt: ["listened", "listen", "to listening"], tip: "後ろに付けて「〜しながら」", why: "歩きながら音楽を聞く（同時）→ listening。listened・listen だと動詞が2つで×。", p: 0 },
    { en: "The boy ran into the room, [shouting] my name.", ja: "少年は私の名前をさけびながら部屋にかけこんだ。", alt: ["shouted", "shout", "to shouting"], tip: "同時に起きる動作 → -ing", why: "走りながら叫ぶ（同時）→ shouting。shouted・shout だと動詞が2つで×。", p: 0 },
    { en: "[Judging from] his face, he must be angry.", ja: "顔から判断すると、彼は怒っているにちがいない。", alt: ["Judged from", "Judge from", "To judging from"], tip: "決まった形：Judging from ～", why: "Judging from＝「〜から判断すると」の決まった形。Judged・Judge は×。", p: 0 },
    { en: "[Walking] along the beach, I found a shell.", ja: "浜辺を歩いていたら、貝がらを見つけた。", alt: ["Walked", "Walk", "To walking"], tip: "I が歩く → -ing", why: "歩くのは I（する側）→ Walking。Walked だと「歩かされた」の形。", p: 0 },
    { en: "[Getting] off the bus, she saw her friend.", ja: "バスを降りると、彼女は友だちを見かけた。", alt: ["Got", "Get", "To getting"], tip: "降りたのは she → -ing", why: "降りるのは she（する側）→ Getting。Got／Get は文のつなぎにならない。", p: 0 },
    { en: "[Turning] left, you will see the station.", ja: "左に曲がると、駅が見えます。", alt: ["Turned", "Turn", "To turning"], tip: "曲がるのは you → -ing", why: "曲がるのは you（する側）→ Turning。Turn だと命令文になり文がつながらない。", p: 0 },
    { en: "[Having] a cold, she couldn't go to school.", ja: "かぜをひいていたので、彼女は学校に行けなかった。", alt: ["Had", "Have", "To having"], tip: "理由 → -ing", why: "「かぜをひいていたので」→ Having。Had／Have は文のつなぎにならない。", p: 0 },
    { en: "He came into the room, [carrying] a big box.", ja: "彼は大きな箱をかかえて部屋に入ってきた。", alt: ["carried", "carry", "to carrying"], tip: "〜しながら → -ing", why: "入りながら運ぶ（同時）→ carrying。carried では2つ目の動詞になり×。", p: 0 },
    { en: "[Built] 100 years ago, the bridge is still strong.", ja: "100年前に建てられたが、その橋は今もじょうぶだ。", alt: ["Building", "Build", "To built"], tip: "橋は建てられる側", why: "橋は建てられる側 → 過去分詞 Built。Building だと橋が建てることに。", p: 1 },
    { en: "[Left] alone, the baby began to cry.", ja: "ひとりにされて、赤ちゃんは泣き出した。", alt: ["Leaving", "Leave", "To left"], tip: "赤ちゃんは残される側", why: "赤ちゃんはひとりに「される」側 → Left。Leaving だと赤ちゃんが去ることに。", p: 1 },
    { en: "[Excited] about the trip, we couldn't sleep.", ja: "旅行にわくわくして、私たちは眠れなかった。", alt: ["Exciting", "Excite", "To excited"], tip: "わくわくさせられる → 過去分詞", why: "私たちはわくわく「させられる」側 → Excited。Exciting は人をわくわくさせる側。", p: 1 },
    { en: "[Not knowing] what to do, I asked my teacher.", ja: "どうしたらいいかわからず、私は先生にたずねた。", alt: ["Knowing not", "Not know", "Don't knowing"], tip: "否定は Not を前に", why: "否定は分詞の前に Not → Not knowing。Knowing not は語順が×。", p: 2 },
    { en: "[Not wanting] to be late, she ran to the station.", ja: "遅れたくなかったので、彼女は駅まで走った。", alt: ["Wanting not", "Not want", "Don't wanting"], tip: "否定は Not ＋ -ing", why: "分詞構文の否定 → Not wanting。Don't は分詞の前に使えない。", p: 2 },
    { en: "[Having seen] the movie before, I knew the ending.", ja: "前にその映画を見ていたので、結末を知っていた。", alt: ["Having see", "Had seen", "Have seen"], tip: "前のこと → Having＋過去分詞", why: "知っていた時より前に見た → Having seen。see は過去分詞でない。", p: 2 },
    { en: "[Having spent] all my money, I had to walk home.", ja: "お金を全部使ってしまったので、歩いて帰るしかなかった。", alt: ["Having spend", "Had spent", "Have spent"], tip: "先に使い切った → Having", why: "歩いて帰る前に使い切った → Having spent。Had／Have では文がつながらない。", p: 2 },
  ],
  swhy: [
    { why: "彼女が知らせを聞く（する側）→ Hearing。Heard は「聞かれる」、To hearing は形が×。", p: 0 },
    { why: "島は空から見られる側 → Seen。Seeing だと島が何かを見ることになってしまう。", p: 1 },
    { why: "私が疲れを感じる（する側）→ Feeling。Felt・Feel は文の頭に置けない形。", p: 0 },
    { why: "否定は分詞の前に Not → Not having。Don't・No は分詞構文では使わない。", p: 2 },
    { why: "宿題を終えた後でテレビ → 先のことなので Having finished。finish は形が×。", p: 2 },
    { why: "座りながら雑誌を読む（同時）→ 文の後ろに reading。reads は動詞が2つになり×。", p: 0 }
  ]
};

window.LX.plus["c2-u06"] = {
  core: {
    ico: "📍",
    catch: "関係副詞は「場所・時・理由の説明カード」",
    say: "名詞のあとに where／when／why を置き、「どんな場所・時・理由か」を後ろから説明する。コンマがあれば補足説明。",
    fig: { t: "slots", parts: [["the town", "名詞"], ["where I was born", "説明"]], arc: [1, 0, "どんな町？"] }
  },
  points: [
    {
      h: "where／when で場所・時",
      body: "場所の名詞のあとは where、時の名詞のあとは when。後ろに「主語＋動詞」がそろった文が続くのがポイント。",
      form: "場所＋where／時＋when ＋ S V",
      ex: "This is the town [where] I was born.",
      exja: "これは私が生まれた町だ。",
      fig: { t: "slots", parts: [["the town", "場所"], ["where", "関係副詞"], ["I was born", "S V"]], arc: [2, 0, "町の説明"] },
      ng: { bad: "This is the town which I was born.", good: "This is the town where I was born.", why: "後ろが完全な文（S V）なら where" },
      why: "where／when は「前置詞＋which」の代わり。in which → where なので、後ろには主語・動詞がそろった完全な文が来る。",
      easy: "①名詞が場所なら where、時なら when。②後ろの文に「足りない部分」がないか見る。③そろっていれば where／when。"
    },
    {
      h: "why と how",
      body: "the reason why は「〜する理由」、how は「〜する方法」。the way how とは言わず、どちらか一方だけ。",
      form: "the reason why ～／how ～",
      ex: "Tell me the reason [why] you were late.",
      exja: "遅れた理由を教えて。",
      fig: { t: "vs", a: ["This is how I did it.", "○ how だけ"], b: ["This is the way how...", "✕ 両方はダメ"] },
      ng: { bad: "This is the way how I solved it.", good: "This is how I solved it.", why: "the way と how は いっしょに使わない" },
      why: "why は reason、how は way と同じ意味を持つ。意味がかぶるので the way how のように並べない。",
      easy: "「理由」なら why、「やり方」なら how。the way how は「やり方やり方」と同じことを2回言うのでダメ。"
    },
    {
      h: "コンマ付き＝補足説明",
      body: "コンマのあとの who／which は「ちなみに」と付け足す説明。that は使えない。, which は前の文全体も指せる。",
      form: "名詞, who／which ～",
      ex: "I have a brother, [who] lives in Kyoto.",
      exja: "私には兄が一人いて、京都に住んでいる。",
      fig: { t: "slots", parts: [["He said nothing,", "文"], ["which", "関係詞"], ["made her angry", "VOC"]], arc: [1, 0, "前の文全体"] },
      ng: { bad: "I met Ken, that told me the news.", good: "I met Ken, who told me the news.", why: "コンマのあとに that は使えない" },
      why: "コンマは「ここで一度切る」記号。前の名詞をしぼりこまず付け足すだけなので、しぼりこみ専用の that は使えない。",
      easy: "コンマの後は「ちなみに〜」と読もう。人なら who、物や前の文なら which。that はコンマの後に来られない。"
    }
  ],
  drills: [
    { en: "This is the house [where] my grandfather lived.", ja: "これは祖父が住んでいた家だ。", alt: ["which", "when", "what"], tip: "場所＋where ＋ S V", why: "the house（場所）＋完全な文 → where。which だと lived in のように in が必要。", p: 0 },
    { en: "I know a shop [where] you can buy cheap shoes.", ja: "安いくつが買える店を知っている。", alt: ["which", "when", "what"], tip: "後ろが完全な文 → where", why: "a shop（場所）＋完全な文 → where。when は時なので×。", p: 0 },
    { en: "Kyoto is the city [where] I want to live.", ja: "京都は私が住みたい街だ。", alt: ["which", "when", "what"], tip: "live in the city → where", why: "the city（場所）＋I want to live → where。which なら live in となる。", p: 0 },
    { en: "Sunday is the day [when] I clean my room.", ja: "日曜日は私が部屋をそうじする日だ。", alt: ["where", "which", "what"], tip: "時＋when", why: "the day（時）＋完全な文 → when。where は場所なので×。", p: 0 },
    { en: "Do you remember the year [when] we graduated?", ja: "私たちが卒業した年を覚えている？", alt: ["where", "which", "what"], tip: "the year ＝ 時 → when", why: "the year（時）＋we graduated → when。which・what は文がつながらない。", p: 0 },
    { en: "I don't know the reason [why] she cried.", ja: "彼女が泣いた理由がわからない。", alt: ["where", "which", "what"], tip: "the reason ＋ why", why: "the reason＋文 → why。where・which は「理由」とつながらない。", p: 1 },
    { en: "This is [why] I started studying English.", ja: "こういうわけで、私は英語の勉強を始めた。", alt: ["what", "which", "whose"], tip: "This is why ＝ だから〜", why: "This is why＝「これが理由で」。what・whose は意味が×。", p: 1 },
    { en: "That is [how] he became a famous singer.", ja: "そのようにして彼は有名な歌手になった。", alt: ["the way how", "which", "what"], tip: "the way how は ✕", why: "That is how＝「そうやって」。the way how は同じ意味の重ねで×。", p: 1 },
    { en: "My sister, [who] lives in Osaka, is a nurse.", ja: "姉は大阪に住んでいて、看護師をしている。", alt: ["that", "which", "whom"], tip: "コンマのあと・人 → who", why: "姉は1人なので補足説明 → , who。that はコンマの後に使えない。", p: 2 },
    { en: "We visited Nara, [which] has many old temples.", ja: "私たちは奈良を訪れたが、そこには古い寺がたくさんある。", alt: ["that", "who", "where"], tip: "主語の役 → which", why: "奈良（物・場所）の付け足し → , which。that はコンマの後に使えず、who は人用。", p: 2 },
    { en: "He passed the exam, [which] surprised everyone.", ja: "彼は試験に合格し、そのことはみんなを驚かせた。", alt: ["that", "what", "who"], tip: ", which ＝ 前の文全体", why: "合格したこと（前の文全体）を指す → , which。that・what はコンマの後で×。", p: 2 },
    { en: "I called Mika, [who] was in the hospital.", ja: "ミカに電話したが、彼女は入院していた。", alt: ["that", "which", "whose"], tip: "コンマのあとに that は ✕", why: "ミカ（人）の付け足し → , who。that はコンマの後で×、which は物用。", p: 2 },
    { en: "This is the school [where] my mother teaches.", ja: "ここは母が教えている学校です。", alt: ["which", "when", "what"], tip: "場所の説明 → where", why: "my mother teaches で文が完成 → 場所の where。which だと at が必要。", p: 0 },
    { en: "I'll never forget the day [when] I won the race.", ja: "レースに勝った日を、私は決して忘れない。", alt: ["where", "which", "what"], tip: "時の説明 → when", why: "the day（時）を説明 → when。where は場所、what は先行詞がいらない語。", p: 0 },
    { en: "Spring is the season [when] flowers bloom.", ja: "春は花がさく季節だ。", alt: ["where", "which", "what"], tip: "季節（時）→ when", why: "the season（時）のあとに完全な文 → when。which だと in が必要。", p: 0 },
    { en: "Hawaii is a place [where] people enjoy surfing.", ja: "ハワイは人々がサーフィンを楽しむ場所だ。", alt: ["which", "when", "what"], tip: "場所の説明 → where", why: "a place（場所）＋完全な文 → where。surfing まで文が完成しているので which は×。", p: 0 },
    { en: "The restaurant [where] we had lunch was crowded.", ja: "私たちが昼食を食べたレストランは混んでいた。", alt: ["which", "when", "what"], tip: "場所の説明 → where", why: "had lunch で文が完成 → 場所の where。which なら at が必要。", p: 0 },
    { en: "Tell me the reason [why] you were late.", ja: "遅れた理由を教えて。", alt: ["where", "which", "what"], tip: "the reason ＋ why", why: "理由（the reason）を説明 → why。where は場所、what は×。", p: 1 },
    { en: "That's [why] I was so tired.", ja: "そういうわけで、私はとても疲れていた。", alt: ["what", "which", "whose"], tip: "That's why ＝ だから〜", why: "前の話が原因 → That's why＋結果。what だと意味が通らない。", p: 1 },
    { en: "This is [how] I make curry.", ja: "こうやって私はカレーを作ります。", alt: ["the way how", "which", "what"], tip: "方法 → how", why: "方法 → how だけ。the way how とは言わない。what では意味が×。", p: 1 },
    { en: "My father, [who] works at a bank, is very busy.", ja: "父は銀行で働いていて、とても忙しい。", alt: ["that", "which", "whom"], tip: "コンマ＋人の補足 → who", why: "人の補足説明 → , who。that はコンマの後に使えず、whom は主語にならない。", p: 2 },
    { en: "We went to Kyoto, [where] we saw many temples.", ja: "私たちは京都に行き、そこでたくさんの寺を見た。", alt: ["which", "that", "when"], tip: "コンマ＋場所の補足 → where", why: "場所の補足で後ろは完全な文 → , where。which は in が必要。", p: 2 },
    { en: "I lost my bike, [which] my uncle had given me.", ja: "おじがくれた自転車を、私はなくした。", alt: ["that", "who", "what"], tip: "コンマ＋物 → which", why: "物の補足 → , which。that はコンマの後に使えず、who は人用。", p: 2 },
    { en: "She said she was sick, [which] was not true.", ja: "彼女は病気だと言ったが、それは本当ではなかった。", alt: ["that", "what", "who"], tip: "前の内容全体 → , which", why: "前の文全体を指す → , which。that はコンマの後×、what は先行詞なし。", p: 2 },
  ],
  swhy: [
    { why: "the day（時）＋完全な文 we first met → when。which だと後ろに足りない部分が必要。", p: 0 },
    { why: "the park（場所）＋完全な文 → where。which なら play tennis in と in が必要。", p: 0 },
    { why: "That is why＝「そういうわけで」。which・what は意味がつながらない。", p: 1 },
    { why: "This is how＝「こうやって」。the way how とは言わないので×。", p: 1 },
    { why: "前の文全体（何も言わなかったこと）を指す → , which。that はコンマの後に使えない。", p: 2 },
    { why: "Ken（人）の付け足し → , who。that はコンマの後に使えず、which は物用。", p: 2 }
  ]
};
