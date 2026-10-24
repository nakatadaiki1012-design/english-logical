/* 論理表現Ⅱ 1〜6 単元の 追加教材（ひとことで言うと・わかりやすい説明・演習 12 文） */
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
      ng: { bad: "When I arrived, the train has left.", good: "When I arrived, the train had left.", why: "基準が過去なので have ではなく had" }
    },
    {
      h: "過去のある時までの継続",
      body: "過去の基準の時まで「ずっと続いていた」ことも had＋過去分詞。現在完了の矢印を、そのまま過去へずらしたイメージ。",
      form: "had ＋ 過去分詞 ＋ for／since",
      ex: "She [had lived] in Osaka for five years before she moved.",
      exja: "彼女は引っ越すまで5年間大阪に住んでいた。",
      fig: { t: "time", marks: [{ from: -4, to: -1, label: "5年間住んでいた" }, { at: -1, label: "引っ越し" }] },
      ng: { bad: "She has lived in Osaka for five years before she moved.", good: "She had lived in Osaka for five years before she moved.", why: "引っ越した「過去」が基準なので had" }
    },
    {
      h: "未来完了＝未来の時点まで",
      body: "未来のある時までに「終わっている・続いている」は will have＋過去分詞。by（〜までに）とセットで出ることが多い。",
      form: "will have ＋ 過去分詞 ＋ by ～",
      ex: "I [will have finished] the report by noon.",
      exja: "正午までにはレポートを書き終えているだろう。",
      fig: { t: "time", marks: [{ from: 0, to: 2, label: "書いている" }, { at: 2, label: "正午" }] },
      ng: { bad: "I will finish the report until noon.", good: "I will have finished the report by noon.", why: "「までに」は by。until は「までずっと」" }
    }
  ],
  drills: [
    { en: "When I got home, my sister [had gone] to bed.", ja: "私が家に帰ったとき、妹はもう寝ていた。", alt: ["has gone", "goes", "have gone"], tip: "帰宅より前に寝た → had＋過去分詞" },
    { en: "I [had already eaten] lunch when he called.", ja: "彼が電話してきたとき、私はもう昼食を食べ終えていた。", alt: ["have already eaten", "already eat", "has already eaten"], tip: "電話より前に食べ終えていた" },
    { en: "She showed me the photos she [had taken] in Paris.", ja: "彼女はパリで撮った写真を私に見せてくれた。", alt: ["has taken", "had take", "have taken"], tip: "見せたより前に撮った" },
    { en: "The bus [had left] before we reached the stop.", ja: "私たちがバス停に着く前に、バスは出てしまっていた。", alt: ["has left", "leaves", "have left"], tip: "着いたより前に出発 → had left" },
    { en: "He [had worked] at the bank for twenty years before he retired.", ja: "彼は退職するまで20年間銀行で働いていた。", alt: ["has worked", "have worked", "had work"], tip: "退職の時までの継続" },
    { en: "I [had never been] abroad until I was twenty.", ja: "20歳になるまで、私は海外に行ったことがなかった。", alt: ["have never been", "has never been", "never have been"], tip: "過去の時点までの経験" },
    { en: "We [had known] each other for ten years when we got married.", ja: "結婚したとき、私たちは知り合って10年たっていた。", alt: ["have known", "has known", "had know"], tip: "結婚の時までの継続" },
    { en: "By the time the police arrived, the thief [had run] away.", ja: "警察が着いたときには、どろぼうは逃げてしまっていた。", alt: ["has run", "have run", "had ran"], tip: "run の過去分詞は run" },
    { en: "I [will have finished] this book by tomorrow.", ja: "明日までにはこの本を読み終えているだろう。", alt: ["will finish have", "have finished", "had finished"], tip: "未来の時点までに完了 → will have" },
    { en: "She [will have arrived] in London by tonight.", ja: "今夜までには彼女はロンドンに着いているだろう。", alt: ["has arrived", "had arrived", "will arrived"], tip: "by tonight ＝ 未来の基準" },
    { en: "By next year, we [will have been] friends for five years.", ja: "来年で、私たちは友だちになって5年になる。", alt: ["have been", "had been", "will be been"], tip: "未来の時点までの継続" },
    { en: "If I read it again, I [will have read] it three times.", ja: "もう一度読めば、それを3回読んだことになる。", alt: ["have read", "had read", "will had read"], tip: "未来の時点までの経験" }
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
      ex: "He [must have been] tired.",
      exja: "彼は疲れていたにちがいない。",
      ng: { bad: "He must be tired yesterday.", good: "He must have been tired yesterday.", why: "過去の推理は must have＋過去分詞" }
    },
    {
      h: "can't／may have",
      body: "can't have は「したはずがない」（ほぼ0%）、may have は「したかもしれない」（五分五分）。確信度のものさしで覚えよう。",
      form: "can't／may have ＋ 過去分詞",
      ex: "She [can't have said] such a thing.",
      exja: "彼女がそんなことを言ったはずがない。",
      fig: { t: "scale", left: "0%", right: "100%", items: [["can't have", 3], ["may have", 50], ["must have", 97]] },
      ng: { bad: "She mustn't have said such a thing.", good: "She can't have said such a thing.", why: "「はずがない」は can't have。mustn't は禁止" }
    },
    {
      h: "should have＝後悔・非難",
      body: "should have は「すべきだったのに（しなかった）」。やり直したい気持ち。shouldn't have は「しなければよかった」。",
      form: "should have ＋ 過去分詞",
      ex: "I [should have studied] harder.",
      exja: "もっと一生けんめい勉強すべきだった。",
      fig: { t: "vs", a: ["I should have studied.", "実際はしなかった"], b: ["I studied hard.", "実際にした"] },
      ng: { bad: "I should study harder last year.", good: "I should have studied harder last year.", why: "過去への後悔は should have＋過去分詞" }
    }
  ],
  drills: [
    { en: "She [must have left] her umbrella on the train.", ja: "彼女は電車にかさを置き忘れたにちがいない。", alt: ["must left", "must had left", "must have leave"], tip: "must have＋過去分詞＝したにちがいない" },
    { en: "They [must have practiced] very hard.", ja: "彼らはとても熱心に練習したにちがいない。", alt: ["must practiced", "must have practice", "must had practiced"], tip: "have のあとは過去分詞" },
    { en: "He [may have forgotten] my name.", ja: "彼は私の名前を忘れたのかもしれない。", alt: ["may forgot", "may have forget", "may has forgotten"], tip: "may have＝したかもしれない" },
    { en: "Ken [might have taken] the wrong train.", ja: "ケンは電車を乗りまちがえたのかもしれない。", alt: ["might took", "might have take", "might has taken"], tip: "might have も「したかも」" },
    { en: "You [can't have seen] Mr. Sato yesterday.", ja: "あなたが昨日佐藤先生を見たはずがない。", alt: ["can't saw", "can't have see", "mustn't seen"], tip: "can't have＝したはずがない" },
    { en: "She [cannot have finished] the work so soon.", ja: "彼女がそんなに早く仕事を終えたはずがない。", alt: ["cannot finished", "cannot have finish", "cannot has finished"], tip: "助動詞のあとは have（has ✕）" },
    { en: "We [should have taken] a taxi.", ja: "タクシーに乗るべきだった。", alt: ["should took", "should have take", "should has taken"], tip: "should have＝すべきだった（後悔）" },
    { en: "I [should have listened] to my mother.", ja: "母の言うことを聞くべきだった。", alt: ["should listened", "should have listen", "should has listened"], tip: "やり直したい気持ち" },
    { en: "You [shouldn't have told] him the secret.", ja: "彼に秘密を話すべきではなかったのに。", alt: ["shouldn't told", "shouldn't have tell", "shouldn't has told"], tip: "shouldn't have＝しなければよかった" },
    { en: "He [needn't have worried] about the test.", ja: "彼はテストのことを心配する必要はなかったのに。", alt: ["needn't worried", "needn't have worry", "needn't has worried"], tip: "needn't have＝する必要はなかった" },
    { en: "You [could have called] me from the station.", ja: "駅から電話してくれてもよかったのに。", alt: ["could called", "could have call", "could has called"], tip: "could have＝できたのに（しなかった）" },
    { en: "If I had run, I [could have caught] the bus.", ja: "走っていたら、バスに間に合ったのに。", alt: ["could caught", "could have catch", "can have caught"], tip: "過去の反対の想像 → could have" }
  ]
};

window.LX.plus["c2-u03"] = {
  core: {
    ico: "🔮",
    catch: "仮定法は「時制を1段過去にずらす」",
    say: "現実とちがう想像は、わざと時制を1つ過去にずらして「これは現実じゃないよ」と知らせる。",
    fig: { t: "vs", a: ["If it rains, I'll stay.", "ありうる話"], b: ["If I were rich, I'd...", "ありえない想像"] }
  },
  points: [
    {
      h: "仮定法過去＝今の反対",
      body: "今の事実と反対の想像は、if の中を過去形に。be動詞は主語が何でも were。1段ずらして現実から距離をとるイメージ。",
      form: "If ＋ 過去形, would ＋ 原形",
      ex: "If I [were] you, I would accept the offer.",
      exja: "もし私があなたなら、その申し出を受けるだろう。",
      fig: { t: "slots", parts: [["If I were you", "過去形"], ["I would accept", "助動詞"]] },
      ng: { bad: "If I am you, I would accept the offer.", good: "If I were you, I would accept the offer.", why: "今の反対の想像は were（過去形）" }
    },
    {
      h: "仮定法過去完了＝過去の反対",
      body: "過去の事実と反対の想像は、もう1段ずらして had＋過去分詞。結論は would have＋過去分詞で「〜しただろうに」。",
      form: "If had done, would have done",
      ex: "If I had known, I [would have helped] you.",
      exja: "知っていたら、あなたを手伝ったのに。",
      fig: { t: "vs", a: ["I didn't know.", "過去の事実"], b: ["If I had known, ...", "過去の反対"] },
      ng: { bad: "If I knew, I would have helped you.", good: "If I had known, I would have helped you.", why: "過去の反対なので if の中は had＋過去分詞" }
    },
    {
      h: "ミックス型",
      body: "「あのとき〜していたら（過去）、今ごろ〜なのに（今）」。if 側は過去の反対、結論側は今の反対。now がミックスの合図。",
      form: "If had done, would 原形 now",
      ex: "If I had taken the medicine, I [would be] fine now.",
      exja: "あのとき薬を飲んでいたら、今ごろ元気なのに。",
      fig: { t: "time", marks: [{ at: -2, label: "薬を飲まず" }, { at: 0, label: "今ぐあい悪い" }] },
      ng: { bad: "If I had taken the medicine, I would have been fine now.", good: "If I had taken the medicine, I would be fine now.", why: "now の話なので would be（今の反対）" }
    }
  ],
  drills: [
    { en: "If I [knew] her address, I would write to her.", ja: "彼女の住所を知っていれば、手紙を書くのに。", alt: ["know", "had know", "would know"], tip: "今の反対 → if の中は過去形" },
    { en: "If I [were] taller, I could play basketball better.", ja: "もっと背が高ければ、バスケがもっとうまくできるのに。", alt: ["am", "be", "will be"], tip: "be動詞は were" },
    { en: "If we had a car, we [could drive] to the lake.", ja: "車があれば、湖までドライブできるのに。", alt: ["can drive", "could drove", "could driving"], tip: "結論は could＋原形" },
    { en: "What would you do if you [won] the lottery?", ja: "宝くじに当たったらどうする？", alt: ["will win", "had win", "winning"], tip: "ありえない想像 → 過去形" },
    { en: "If it [were not] raining, we would play outside.", ja: "雨が降っていなければ、外で遊ぶのに。", alt: ["is not", "does not", "has not"], tip: "今の反対 → were not" },
    { en: "I [would buy] that bike if I had enough money.", ja: "お金が十分あれば、あの自転車を買うのに。", alt: ["will buy", "would bought", "buy"], tip: "結論は would＋原形" },
    { en: "If I had gotten up earlier, I [wouldn't have been] late.", ja: "もっと早く起きていたら、遅刻しなかっただろう。", alt: ["won't be", "wouldn't be been", "haven't been"], tip: "過去の反対 → would have＋過去分詞" },
    { en: "If she [had asked] me, I would have helped her.", ja: "彼女が頼んでくれていたら、手伝ったのに。", alt: ["has asked", "had ask", "would asked"], tip: "過去の反対 → had＋過去分詞" },
    { en: "If we had left earlier, we [could have seen] the sunrise.", ja: "もっと早く出発していたら、日の出が見られたのに。", alt: ["could seen", "can have seen", "could have saw"], tip: "could have＋過去分詞" },
    { en: "If I [had saved] money, I could buy it now.", ja: "お金をためていたら、今それが買えるのに。", alt: ["have saved", "had save", "would save"], tip: "ミックス型：if 側は過去の反対" },
    { en: "If he had not missed the train, he [would be] here now.", ja: "電車に乗りおくれなかったら、彼は今ここにいるのに。", alt: ["will be", "would have be", "is"], tip: "now → 結論は would＋原形" },
    { en: "If you [had come] to the party, you would have met her.", ja: "パーティーに来ていたら、彼女に会えたのに。", alt: ["have come", "had came", "would come"], tip: "come の過去分詞は come" }
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
      ng: { bad: "I wish I can speak French.", good: "I wish I could speak French.", why: "wish のあとは1段過去。can → could" }
    },
    {
      h: "as if＝まるで〜のように",
      body: "as if の後ろは「本当はちがうけど、そう見える」。主節と同じ時なら過去形、それより前なら had＋過去分詞。",
      form: "as if ＋ 過去形／had 過去分詞",
      ex: "He talks as if he [knew] everything.",
      exja: "彼はまるで何でも知っているかのように話す。",
      fig: { t: "slots", parts: [["He talks", "S V"], ["as if", "接続"], ["he knew everything", "仮定法"]] },
      ng: { bad: "He looked as if he has seen a ghost.", good: "He looked as if he had seen a ghost.", why: "見えた時より前のことは had＋過去分詞" }
    },
    {
      h: "without＝もし〜がなければ",
      body: "without や if it were not for は「〜がなかったら」。if のない仮定法。結論の would が想像の目印。",
      form: "Without ～, S would ＋ 原形",
      ex: "[Without] water, we could not live.",
      exja: "水がなければ、私たちは生きられないだろう。",
      fig: { t: "slots", parts: [["Without water,", "仮定"], ["we could not live", "結論"]], arc: [0, 1, "もし〜なら"] },
      ng: { bad: "If it is not for water, we could not live.", good: "If it were not for water, we could not live.", why: "if it were not for は決まった形" }
    }
  ],
  drills: [
    { en: "I wish I [were] a little taller.", ja: "もう少し背が高ければなあ。", alt: ["am", "be", "will be"], tip: "wish のあとは were" },
    { en: "I wish I [knew] his phone number.", ja: "彼の電話番号を知っていればなあ。", alt: ["know", "have known", "knowing"], tip: "今の願い → 過去形" },
    { en: "I wish it [would stop] raining.", ja: "雨がやんでくれたらいいのに。", alt: ["stops", "will stop", "would stopped"], tip: "wish ＋ would＋原形" },
    { en: "I wish I [had gone] to the concert.", ja: "あのコンサートに行けばよかったなあ。", alt: ["have gone", "go", "had went"], tip: "過去への後悔 → had＋過去分詞" },
    { en: "I wish I [hadn't said] that to her.", ja: "彼女にあんなことを言わなければよかった。", alt: ["haven't said", "don't say", "hadn't say"], tip: "過去への後悔 → hadn't＋過去分詞" },
    { en: "She talks as if she [were] my mother.", ja: "彼女はまるで私の母親のような話し方をする。", alt: ["is being", "be", "will be"], tip: "as if ＋ were" },
    { en: "He acted as if nothing [had happened].", ja: "彼はまるで何事もなかったかのようにふるまった。", alt: ["has happened", "happens", "had happen"], tip: "それより前 → had＋過去分詞" },
    { en: "[Without] the internet, our lives would be very different.", ja: "インターネットがなければ、生活はずいぶん違うだろう。", alt: ["Unless", "Except", "If"], tip: "Without ＋ 名詞＝〜がなければ" },
    { en: "[If it were] not for your advice, I would give up.", ja: "あなたの助言がなければ、私はあきらめるだろう。", alt: ["If it is", "If it was be", "Unless it were"], tip: "If it were not for ＝ 〜がなければ" },
    { en: "[But for] the rain, the game would have been exciting.", ja: "雨がなかったら、試合は盛り上がっただろう。", alt: ["But", "Except", "Without for"], tip: "But for ＝ Without" },
    { en: "It's time we [started] the meeting.", ja: "もう会議を始める時間だ。", alt: ["will start", "starting", "had start"], tip: "It's time ＋ 過去形" },
    { en: "It's high time you [cleaned] your room.", ja: "とっくに部屋をそうじする時間だよ。", alt: ["will clean", "cleaning", "had clean"], tip: "It's high time ＋ 過去形" }
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
      ng: { bad: "Walking in the park, a dog barked at me.", good: "While I was walking in the park, a dog barked at me.", why: "歩いたのは犬ではない。主語をそろえる" }
    },
    {
      h: "受け身は過去分詞で",
      body: "主語が「〜される」側なら、過去分詞から始める（Being が省かれた形）。本は書く側ではなく書かれる側だから Written。",
      form: "過去分詞 ～, S ＋ V",
      ex: "[Written] in easy English, the book is popular.",
      exja: "やさしい英語で書かれているので、その本は人気だ。",
      fig: { t: "slots", parts: [["Written", "過去分詞"], ["the book", "S"], ["is popular", "V C"]], arc: [0, 1, "本が書かれる"] },
      ng: { bad: "Writing in easy English, the book is popular.", good: "Written in easy English, the book is popular.", why: "本は「書かれる」側なので過去分詞" }
    },
    {
      h: "否定は Not、前は Having",
      body: "否定は分詞の前に Not。主節より前のことは Having＋過去分詞で「〜し終えてから」。順番がひと目でわかる。",
      form: "Not ～ing／Having ＋ 過去分詞",
      ex: "[Not knowing] what to say, I kept silent.",
      exja: "何と言えばいいかわからず、私は黙っていた。",
      fig: { t: "time", marks: [{ at: -2, label: "①宿題を終える" }, { at: -1, label: "②テレビを見る" }] },
      ng: { bad: "Knowing not what to say, I kept silent.", good: "Not knowing what to say, I kept silent.", why: "not は分詞の前に置く" }
    }
  ],
  drills: [
    { en: "[Seeing] me, the dog wagged its tail.", ja: "私を見て、犬はしっぽをふった。", alt: ["Saw", "Seen", "To seeing"], tip: "犬が見る → -ing" },
    { en: "[Opening] the door, I found a letter on the floor.", ja: "ドアを開けると、床に手紙が落ちていた。", alt: ["Opened", "Open", "To opening"], tip: "私が開ける → -ing" },
    { en: "[Living] near the sea, she swims every day.", ja: "海の近くに住んでいるので、彼女は毎日泳ぐ。", alt: ["Lived", "Live", "To living"], tip: "理由「〜なので」" },
    { en: "[Being] sick, he stayed home from school.", ja: "病気だったので、彼は学校を休んだ。", alt: ["Be", "Been", "To being"], tip: "be動詞は Being" },
    { en: "[Surprised] at the news, she dropped her cup.", ja: "その知らせに驚いて、彼女はカップを落とした。", alt: ["Surprising", "Surprise", "To surprised"], tip: "驚かされる → 過去分詞" },
    { en: "[Born] in Canada, he speaks English and French.", ja: "カナダで生まれたので、彼は英語とフランス語を話す。", alt: ["Bearing", "Bear", "Being bear"], tip: "生まれる＝be born → Born" },
    { en: "[Not feeling] well, I left the party early.", ja: "気分がよくなかったので、パーティーを早めに出た。", alt: ["Feeling not", "Not feel", "Don't feeling"], tip: "否定は Not ＋ -ing" },
    { en: "[Having lost] my key, I couldn't get in.", ja: "かぎをなくしてしまったので、中に入れなかった。", alt: ["Having lose", "Had lost", "Have lost"], tip: "先に起きたこと → Having＋過去分詞" },
    { en: "[Having lived] in Tokyo, he knows the city well.", ja: "東京に住んでいたので、彼はその街をよく知っている。", alt: ["Have lived", "Having live", "Had living"], tip: "前のこと → Having＋過去分詞" },
    { en: "She walked to school, [listening] to music.", ja: "彼女は音楽を聞きながら学校へ歩いた。", alt: ["listened", "listen", "to listening"], tip: "後ろに付けて「〜しながら」" },
    { en: "The boy ran into the room, [shouting] my name.", ja: "少年は私の名前をさけびながら部屋にかけこんだ。", alt: ["shouted", "shout", "to shouting"], tip: "同時に起きる動作 → -ing" },
    { en: "[Judging from] his face, he must be angry.", ja: "顔から判断すると、彼は怒っているにちがいない。", alt: ["Judged from", "Judge from", "To judging from"], tip: "決まった形：Judging from ～" }
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
      ng: { bad: "This is the town which I was born.", good: "This is the town where I was born.", why: "後ろが完全な文（S V）なら where" }
    },
    {
      h: "why と how",
      body: "the reason why は「〜する理由」、how は「〜する方法」。the way how とは言わず、どちらか一方だけ。",
      form: "the reason why ～／how ～",
      ex: "Tell me the reason [why] you were late.",
      exja: "遅れた理由を教えて。",
      fig: { t: "vs", a: ["This is how I did it.", "○ how だけ"], b: ["This is the way how...", "✕ 両方はダメ"] },
      ng: { bad: "This is the way how I solved it.", good: "This is how I solved it.", why: "the way と how は いっしょに使わない" }
    },
    {
      h: "コンマ付き＝補足説明",
      body: "コンマのあとの who／which は「ちなみに」と付け足す説明。that は使えない。, which は前の文全体も指せる。",
      form: "名詞, who／which ～",
      ex: "I have a brother, [who] lives in Kyoto.",
      exja: "私には兄が一人いて、京都に住んでいる。",
      fig: { t: "slots", parts: [["He said nothing,", "文"], ["which", "関係詞"], ["made her angry", "VOC"]], arc: [1, 0, "前の文全体"] },
      ng: { bad: "I met Ken, that told me the news.", good: "I met Ken, who told me the news.", why: "コンマのあとに that は使えない" }
    }
  ],
  drills: [
    { en: "This is the house [where] my grandfather lived.", ja: "これは祖父が住んでいた家だ。", alt: ["which", "when", "what"], tip: "場所＋where ＋ S V" },
    { en: "I know a shop [where] you can buy cheap shoes.", ja: "安いくつが買える店を知っている。", alt: ["which", "when", "what"], tip: "後ろが完全な文 → where" },
    { en: "Kyoto is the city [where] I want to live.", ja: "京都は私が住みたい街だ。", alt: ["which", "when", "what"], tip: "live in the city → where" },
    { en: "Sunday is the day [when] I clean my room.", ja: "日曜日は私が部屋をそうじする日だ。", alt: ["where", "which", "what"], tip: "時＋when" },
    { en: "Do you remember the year [when] we graduated?", ja: "私たちが卒業した年を覚えている？", alt: ["where", "which", "what"], tip: "the year ＝ 時 → when" },
    { en: "I don't know the reason [why] she cried.", ja: "彼女が泣いた理由がわからない。", alt: ["where", "which", "what"], tip: "the reason ＋ why" },
    { en: "This is [why] I started studying English.", ja: "こういうわけで、私は英語の勉強を始めた。", alt: ["what", "which", "whose"], tip: "This is why ＝ だから〜" },
    { en: "That is [how] he became a famous singer.", ja: "そのようにして彼は有名な歌手になった。", alt: ["the way how", "which", "what"], tip: "the way how は ✕" },
    { en: "My sister, [who] lives in Osaka, is a nurse.", ja: "姉は大阪に住んでいて、看護師をしている。", alt: ["that", "which", "whom"], tip: "コンマのあと・人 → who" },
    { en: "We visited Nara, [which] has many old temples.", ja: "私たちは奈良を訪れたが、そこには古い寺がたくさんある。", alt: ["that", "who", "where"], tip: "主語の役 → which" },
    { en: "He passed the exam, [which] surprised everyone.", ja: "彼は試験に合格し、そのことはみんなを驚かせた。", alt: ["that", "what", "who"], tip: ", which ＝ 前の文全体" },
    { en: "I called Mika, [who] was in the hospital.", ja: "ミカに電話したが、彼女は入院していた。", alt: ["that", "which", "whose"], tip: "コンマのあとに that は ✕" }
  ]
};
