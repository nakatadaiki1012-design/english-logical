/* 論理表現Ⅰ 7〜12 単元：わかりやすい説明（core・points・ng）と 同じ型の演習 12 文 */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c1-u07"] = {
  core: {
    ico: "📸",
    catch: "動名詞は「動作を写真にして名詞にする」",
    say: "-ing をつけると、動きが1枚の写真（名詞）になる。だから主語にも目的語にもなれて、前置詞のうしろにも置ける。",
    fig: { t: "slots", parts: [["Reading books", "S"], ["is", "V"], ["my hobby", "C"]], arc: [2, 0, "同じもの"] }
  },
  points: [
    {
      h: "-ing＝「〜すること」",
      body: "動詞に -ing をつけると「〜すること」という名詞のカタマリになる。名詞だから、主語・目的語・補語のどこにでも置ける。",
      form: "動詞の -ing ＝ 名詞のはたらき",
      ex: "[Reading] books is my hobby.",
      exja: "本を読むことが私の趣味だ。",
      fig: { t: "slots", parts: [["Swimming", "S"], ["is", "V"], ["fun", "C"]] },
      ng: { bad: "Read books is my hobby.", good: "Reading books is my hobby.", why: "動詞の原形は主語になれない。-ing で名詞にする" }
    },
    {
      h: "enjoy は -ing だけ",
      body: "enjoy は「もうやっている動作」を楽しむ。だから写真の -ing をとる。to 不定詞（これから向かう矢印）はとれない。",
      form: "メガフェプス（mind enjoy give up…）",
      ex: "We [enjoyed singing] together.",
      exja: "私たちはいっしょに歌うのを楽しんだ。",
      fig: { t: "vs", a: ["We enjoyed singing.", "もうやっている"], b: ["We want to sing.", "これから向かう"] },
      ng: { bad: "We enjoyed to sing together.", good: "We enjoyed singing together.", why: "enjoy のあとは -ing。to は使えない" }
    },
    {
      h: "前置詞のあとは -ing",
      body: "前置詞のうしろは「名詞の席」。動詞を置くなら -ing で名詞にする。look forward to の to も前置詞！",
      form: "前置詞 ＋ -ing",
      ex: "Thank you for [inviting] me.",
      exja: "招待してくれてありがとう。",
      fig: { t: "slots", parts: [["She is good", "文"], ["at", "前置詞"], ["playing tennis", "名詞"]], arc: [1, 2, "名詞の席"] },
      ng: { bad: "I'm looking forward to see you.", good: "I'm looking forward to seeing you.", why: "この to は前置詞。うしろは -ing になる" }
    }
  ],
  drills: [
    { en: "[Swimming] is good exercise.", ja: "水泳はよい運動だ。", alt: ["Swim", "Swims", "To swimming"], tip: "主語になる -ing「泳ぐこと」" },
    { en: "[Playing] video games is fun.", ja: "テレビゲームをするのは楽しい。", alt: ["Play", "Plays", "Played"], tip: "-ing のカタマリが主語" },
    { en: "My hobby is [taking] pictures.", ja: "私の趣味は写真をとることだ。", alt: ["take", "took", "takes"], tip: "補語の -ing「〜すること」" },
    { en: "I [stopped eating] snacks at night.", ja: "私は夜にお菓子を食べるのをやめた。", alt: ["stopped eat", "stopped ate", "stopped eats"], tip: "stop ＋ -ing「〜するのをやめる」" },
    { en: "Do you [mind opening] the window?", ja: "窓を開けてもらえますか。", alt: ["mind to open", "mind open", "mind opened"], tip: "mind ＋ -ing（メガフェプスの m）" },
    { en: "He [gave up smoking] last year.", ja: "彼は去年たばこをやめた。", alt: ["gave up to smoke", "gave up smoke", "gave up smoked"], tip: "give up ＋ -ing「〜をあきらめる」" },
    { en: "She [practices dancing] every day.", ja: "彼女は毎日ダンスの練習をしている。", alt: ["practices to dance", "practices dance", "practices danced"], tip: "practice ＋ -ing" },
    { en: "I'm interested in [learning] Korean.", ja: "私は韓国語を学ぶことに興味がある。", alt: ["learn", "to learn", "learned"], tip: "前置詞 in のあとは -ing" },
    { en: "How about [going] to the movies?", ja: "映画に行くのはどう？", alt: ["go", "to go", "went"], tip: "How about ＋ -ing「〜するのはどう？」" },
    { en: "He left [without saying] goodbye.", ja: "彼はさよならも言わずに去った。", alt: ["without say", "without to say", "without said"], tip: "without ＋ -ing「〜しないで」" },
    { en: "I'm used to [getting] up early.", ja: "私は早起きに慣れている。", alt: ["get", "got", "gets"], tip: "be used to の to は前置詞" },
    { en: "We talked about [visiting] Okinawa next summer.", ja: "私たちは来年の夏に沖縄を訪れることについて話した。", alt: ["visit", "to visit", "visited"], tip: "about ＋ -ing" }
  ]
};

window.LX.plus["c1-u08"] = {
  core: {
    ico: "🏷️",
    catch: "分詞は名詞にはる「説明シール」",
    say: "-ing は「〜している」、過去分詞は「〜された」というシール。1語なら名詞の前に、2語以上なら名詞のうしろにはる。",
    fig: { t: "slots", parts: [["the boy", "名詞"], ["playing the guitar", "M"]], arc: [1, 0, "説明シール"] }
  },
  points: [
    {
      h: "-ing は「〜している」",
      body: "-ing は、その名詞が自分で動いている様子。1語なら前から、語句が長くなると名詞のうしろから説明する。",
      form: "名詞 ＋ -ing 〜",
      ex: "The boy [playing] the guitar is my brother.",
      exja: "ギターをひいている男の子は私の弟だ。",
      fig: { t: "slots", parts: [["The boy", "S"], ["playing the guitar", "M"], ["is", "V"], ["my brother", "C"]], arc: [1, 0, "説明"] },
      ng: { bad: "The boy plays the guitar is my brother.", good: "The boy playing the guitar is my brother.", why: "動詞が2つになってしまう。説明の部分は -ing に" }
    },
    {
      h: "過去分詞は「〜された」",
      body: "過去分詞は、その名詞が何かを「された」側。made in Japan＝日本で作られた。する側か、される側かで決める。",
      form: "名詞 ＋ 過去分詞 〜",
      ex: "This is a car [made] in Japan.",
      exja: "これは日本製の車だ。",
      fig: { t: "vs", a: ["a crying baby", "自分で泣いている"], b: ["a broken window", "割られた"] },
      ng: { bad: "I read a book writing by a famous writer.", good: "I read a book written by a famous writer.", why: "本は書く側でなく、書かれた側" }
    },
    {
      h: "感情は「させる」か「させられる」か",
      body: "excite は「わくわくさせる」。させる物は exciting、させられた人は excited。人の気持ちは -ed が基本。",
      form: "物 → exciting／人 → excited",
      ex: "We were [excited] about the trip.",
      exja: "私たちは旅行にわくわくしていた。",
      fig: { t: "vs", a: ["The game was exciting.", "させる側（物）"], b: ["I was excited.", "させられた側（人）"] },
      ng: { bad: "I was very exciting.", good: "I was very excited.", why: "私が人をわくわくさせる人になってしまう" }
    }
  ],
  drills: [
    { en: "Don't wake the [sleeping] cat.", ja: "眠っているネコを起こさないで。", alt: ["slept", "sleeps", "sleep"], tip: "1語の -ing は名詞の前" },
    { en: "Who is the girl [talking] with Ken?", ja: "ケンと話している女の子はだれ？", alt: ["talked", "talks", "is talking"], tip: "名詞 ＋ -ing 〜「〜している」" },
    { en: "I found a [broken] window.", ja: "私は割れた窓を見つけた。", alt: ["breaks", "break", "broke"], tip: "窓は割られた側 → 過去分詞" },
    { en: "This is a picture [painted] by my sister.", ja: "これは姉がかいた絵だ。", alt: ["painting", "paints", "paint"], tip: "絵はかかれた側 → 過去分詞" },
    { en: "The man [running] over there is my father.", ja: "あそこを走っている男の人は私の父だ。", alt: ["ran", "runs", "run"], tip: "うしろから説明する -ing" },
    { en: "English is a language [spoken] all over the world.", ja: "英語は世界中で話されている言語だ。", alt: ["speaking", "spoke", "speaks"], tip: "言語は話される側 → spoken" },
    { en: "I bought a [used] car.", ja: "私は中古車を買った。", alt: ["using", "uses", "use"], tip: "使われた車＝中古車" },
    { en: "The movie was [boring].", ja: "その映画は退屈だった。", alt: ["bored", "bore", "boredom"], tip: "退屈させる物 → -ing" },
    { en: "I was [surprised] at the news.", ja: "私はその知らせにおどろいた。", alt: ["surprising", "surprise", "surprises"], tip: "おどろかされた人 → -ed" },
    { en: "Do you know the boy [sitting] next to Yui?", ja: "ユイのとなりにすわっている男の子を知っている？", alt: ["sat", "sits", "is sitting"], tip: "名詞 ＋ -ing 〜" },
    { en: "We visited a temple [built] 500 years ago.", ja: "私たちは500年前に建てられた寺を訪れた。", alt: ["building", "builds", "build"], tip: "寺は建てられた側 → built" },
    { en: "There are many people [waiting] for the bus.", ja: "バスを待っている人がたくさんいる。", alt: ["waited", "wait", "waits"], tip: "people を -ing がうしろから説明" }
  ]
};

window.LX.plus["c1-u09"] = {
  core: {
    ico: "⚖️",
    catch: "比較は「てんびん」に2つをのせる",
    say: "as 〜 as はつりあい、比較級 ＋ than はかたむき、最上級は全員の中で1番。まず何と何をくらべるかを決めよう。",
    fig: { t: "scale", left: "下", right: "上", items: [["not as ~ as", 25], ["as ~ as", 50], ["-er than", 75], ["the -est", 98]] }
  },
  points: [
    {
      h: "as 〜 as は「つりあい」",
      body: "てんびんがつりあう＝同じくらい。as と as の間は元の形（-er にしない）。not をつけると「〜ほど…ない」。",
      form: "as ＋ 元の形 ＋ as",
      ex: "Tom is [as tall as] his father.",
      exja: "トムは父親と同じくらい背が高い。",
      ng: { bad: "Tom is as taller as his father.", good: "Tom is as tall as his father.", why: "as と as の間は 元の形のまま" }
    },
    {
      h: "比較級 ＋ than は「かたむき」",
      body: "短い語は -er、長い語は more をつける。than のうしろが「くらべる相手」。-er と more を両方つけるのは ✕。",
      form: "-er／more 〜 ＋ than",
      ex: "This book is [more interesting than] that one.",
      exja: "この本はあの本よりおもしろい。",
      fig: { t: "vs", a: ["larger than", "短い語は -er"], b: ["more interesting than", "長い語は more"] },
      ng: { bad: "My room is more larger than yours.", good: "My room is larger than yours.", why: "-er と more は どちらか一方だけ" }
    },
    {
      h: "最上級は「全員の中で1番」",
      body: "the ＋ -est（または most）。1番は1つだけなので the がつく。範囲が場所・集団なら in、人数・仲間なら of。",
      form: "the -est ＋ in／of 〜",
      ex: "Mt. Fuji is [the highest] mountain in Japan.",
      exja: "富士山は日本でいちばん高い山だ。",
      fig: { t: "scale", left: "ひくい", right: "たかい", items: [["Mt. Takao", 20], ["Mt. Aso", 55], ["Mt. Fuji", 95]] },
      ng: { bad: "She is the best player in the five.", good: "She is the best player of the five.", why: "人数（5人）の中は of、場所や集団は in" }
    }
  ],
  drills: [
    { en: "My bag is [as heavy as] yours.", ja: "私のかばんはあなたのと同じくらい重い。", alt: ["as heavier as", "so heavy than", "heavy as"], tip: "as ＋ 元の形 ＋ as" },
    { en: "Ken runs [faster than] Tom.", ja: "ケンはトムより速く走る。", alt: ["more fast than", "fast than", "faster as"], tip: "短い語は -er ＋ than" },
    { en: "This question is [easier than] that one.", ja: "この問題はあの問題よりやさしい。", alt: ["more easy than", "easy than", "easier as"], tip: "easy → easier（y を i に）" },
    { en: "Soccer is [more popular than] baseball in my class.", ja: "私のクラスでは野球よりサッカーが人気だ。", alt: ["popularer than", "more popular as", "most popular than"], tip: "長い語は more ＋ than" },
    { en: "This is [the most beautiful] park in the city.", ja: "ここは市でいちばん美しい公園だ。", alt: ["the more beautiful", "the beautifulest", "most beautifulest"], tip: "長い語の最上級は the most" },
    { en: "Today is [the hottest] day of the year.", ja: "今日は一年でいちばん暑い日だ。", alt: ["the hotter", "hotest", "the most hot"], tip: "hot → hottest（t を重ねる）" },
    { en: "My brother is [three years older] than me.", ja: "兄は私より3歳年上だ。", alt: ["older three years", "three years old", "three year older"], tip: "差は比較級の前に置く" },
    { en: "I can't swim [as fast as] Aoi.", ja: "私はアオイほど速く泳げない。", alt: ["as faster as", "so fast than", "fast as"], tip: "not as 〜 as「〜ほど…ない」" },
    { en: "Which do you like [better], tea or coffee?", ja: "紅茶とコーヒーではどちらが好き？", alt: ["more good", "gooder", "most good"], tip: "2つのうちどちら → better" },
    { en: "He is one of [the best] singers in Japan.", ja: "彼は日本で最高の歌手の一人だ。", alt: ["the better", "the goodest", "a best"], tip: "one of the 最上級 ＋ 複数形" },
    { en: "This movie is [much more interesting] than the book.", ja: "この映画は本よりずっとおもしろい。", alt: ["very more interesting", "much interestinger", "more much interesting"], tip: "比較級を強めるのは much" },
    { en: "Nothing is [more important than] health.", ja: "健康ほど大切なものはない。", alt: ["importanter than", "more important as", "most important than"], tip: "Nothing ＋ 比較級 ＝ 最上級の意味" }
  ]
};

window.LX.plus["c1-u10"] = {
  core: {
    ico: "🔗",
    catch: "関係代名詞は名詞のうしろにつなぐ「説明カード」",
    say: "まず「友だちがいる」と言い切って、そのあと who で「カナダに住んでいる」と説明を足す。英語は大事なことが先。",
    fig: { t: "slots", parts: [["a friend", "名詞"], ["who", "関係詞"], ["lives in Canada", "説明"]], arc: [2, 0, "説明"] }
  },
  points: [
    {
      h: "who は「人」の説明カード",
      body: "名詞が人なら who。who のうしろは、その人が何をするか。who がそのまま説明の文の主語になる。",
      form: "人 ＋ who ＋ 動詞",
      ex: "I have a friend [who] lives in Canada.",
      exja: "私にはカナダに住んでいる友だちがいる。",
      fig: { t: "slots", parts: [["a friend", "名詞"], ["who", "S"], ["lives in Canada", "V"]], arc: [1, 0, "＝友だち"] },
      ng: { bad: "I have a friend which lives in Canada.", good: "I have a friend who lives in Canada.", why: "友だちは人。人には who を使う" }
    },
    {
      h: "which は「物」の説明カード",
      body: "名詞が物や動物なら which。that は人にも物にも使える万能カード。迷ったら that でも OK。",
      form: "物 ＋ which／that ＋ 動詞",
      ex: "This is the bus [which] goes to the airport.",
      exja: "これは空港へ行くバスだ。",
      fig: { t: "vs", a: ["a friend who …", "人"], b: ["a bus which …", "物・動物"] },
      ng: { bad: "This is the bus who goes to the airport.", good: "This is the bus which goes to the airport.", why: "バスは物。物に who は使えない" }
    },
    {
      h: "目的格は「穴あき」に注意",
      body: "the book I bought では、bought の目的語（本）が前に出ている。だからうしろは空っぽ。it を入れると二重。",
      form: "名詞 ＋（which）S ＋ V",
      ex: "This is the book [I bought] yesterday.",
      exja: "これは私がきのう買った本だ。",
      fig: { t: "slots", parts: [["the book", "名詞"], ["I", "S"], ["bought", "V"], ["（　）", "O"]], arc: [3, 0, "ここが前へ"] },
      ng: { bad: "This is the book I bought it yesterday.", good: "This is the book I bought yesterday.", why: "本はもう前に出ている。it は入れない" }
    }
  ],
  drills: [
    { en: "I have an aunt [who] works at a hospital.", ja: "私には病院で働いているおばがいる。", alt: ["which", "whose", "what"], tip: "人 ＋ who ＋ 動詞" },
    { en: "This is the dog [which] saved the boy.", ja: "これがその男の子を救った犬だ。", alt: ["who", "where", "what"], tip: "動物 ＋ which" },
    { en: "She is the girl [who sings] very well.", ja: "彼女はとても上手に歌う女の子だ。", alt: ["which sings", "who singing", "sings who"], tip: "who のうしろは動詞" },
    { en: "The cake [that] my mother made was delicious.", ja: "母が作ったケーキはおいしかった。", alt: ["what", "who", "where"], tip: "物 ＋ that ＋ S ＋ V" },
    { en: "Do you know anyone [who] can speak French?", ja: "フランス語を話せる人をだれか知っている？", alt: ["which", "whose", "what"], tip: "anyone は人 → who" },
    { en: "The bag [I lost] was found in the classroom.", ja: "私がなくしたかばんは教室で見つかった。", alt: ["lost I", "I lost it", "which I lost it"], tip: "目的格は省略できる・it は不要" },
    { en: "I need a computer [which] is easy to use.", ja: "私は使いやすいコンピューターが必要だ。", alt: ["who", "whose", "what"], tip: "物 ＋ which ＋ 動詞" },
    { en: "The teacher [who teaches] us math is kind.", ja: "私たちに数学を教える先生はやさしい。", alt: ["which teaches", "who teach", "teaches who"], tip: "先生は1人 → teaches" },
    { en: "This is the movie [I watched] last night.", ja: "これは私が昨夜見た映画だ。", alt: ["watched I", "I watched it", "which I watched it"], tip: "穴あき：watched のうしろは空" },
    { en: "He has a sister [whose] name is Mika.", ja: "彼には名前がミカというお姉さんがいる。", alt: ["who", "which", "who's"], tip: "「その人の〜」は whose" },
    { en: "Everything [that] he said was true.", ja: "彼が言ったことはすべて本当だった。", alt: ["what", "who", "where"], tip: "everything のあとは that が自然" },
    { en: "The students [who] passed the test were happy.", ja: "テストに合格した生徒たちは喜んだ。", alt: ["which", "whose", "what"], tip: "人 ＋ who ＋ 動詞" }
  ]
};

window.LX.plus["c1-u11"] = {
  core: {
    ico: "🏗️",
    catch: "意見は「結論 → 理由」の順で組み立てる",
    say: "日本語は理由が先、英語は結論が先。I think 〜 と言い切ってから、because や First で理由を足そう。",
    fig: { t: "flow", steps: ["意見", "理由①", "理由②", "まとめ"] }
  },
  points: [
    {
      h: "まず意見を言い切る",
      body: "I think 〜 で始める。反対なら I don't think 〜。not は think の方につけるのが英語流。",
      form: "I think (that) S ＋ V",
      ex: "[I think] students should read more books.",
      exja: "生徒はもっと本を読むべきだと思う。",
      ng: { bad: "I'm agree with the idea.", good: "I agree with the idea.", why: "agree は動詞。be 動詞は いらない" }
    },
    {
      h: "理由は because でつなぐ",
      body: "because は文と文をつなぐ。うしろは S ＋ V。名詞だけなら because of。Because 〜. だけの文は ✕。",
      form: "意見 ＋ because S ＋ V",
      ex: "I like summer [because] I can swim in the sea.",
      exja: "海で泳げるので夏が好きだ。",
      fig: { t: "vs", a: ["because it is cheap", "うしろは S＋V"], b: ["because of the rain", "うしろは名詞"] },
      ng: { bad: "I like summer. Because I can swim.", good: "I like summer because I can swim.", why: "Because 〜 だけでは文にならない" }
    },
    {
      h: "First, で番号をふる",
      body: "理由が2つあるなら First, 〜. Second, 〜. と番号をふる。読む人が迷子にならない。At first（はじめは）とはちがう。",
      form: "First, 〜. Second, 〜.",
      ex: "[First], walking to school is good for our health.",
      exja: "第一に、歩いて通学するのは健康によい。",
      fig: { t: "flow", steps: ["First,", "Second,", "だから"] },
      ng: { bad: "At first, it is good for our health.", good: "First, it is good for our health.", why: "At first は「はじめは」。順番には First" }
    }
  ],
  drills: [
    { en: "[I think] we should save water.", ja: "私たちは水を節約すべきだと思う。", alt: ["I think of", "I'm think", "I thinking"], tip: "I think ＋ S ＋ V" },
    { en: "[In my opinion], smartphones are useful for students.", ja: "私の意見では、スマホは生徒に役立つ。", alt: ["In my opinion of", "On my opinion", "By my opinion"], tip: "In my opinion, ＋ 文" },
    { en: "I [don't think] it is a good idea.", ja: "それはよい考えではないと思う。", alt: ["think not", "not think", "am not think"], tip: "not は think につける" },
    { en: "I want to live in the city [because] it is convenient.", ja: "便利なので都会に住みたい。", alt: ["because of", "as for", "due to"], tip: "because ＋ S ＋ V" },
    { en: "[First], it is cheaper than taking a taxi.", ja: "第一に、タクシーに乗るより安い。", alt: ["At first", "Firstly of all", "The first"], tip: "理由の1つ目は First," },
    { en: "[Second], we can make new friends.", ja: "第二に、新しい友だちができる。", alt: ["Two", "Secondary", "The second of"], tip: "2つ目は Second," },
    { en: "[For example], we can use the library after school.", ja: "たとえば、放課後に図書館を使える。", alt: ["For examples", "By example", "Example for"], tip: "理由のあとに具体例" },
    { en: "[That is why] I like reading books.", ja: "だから私は読書が好きなのだ。", alt: ["That is reason", "That why", "This why is"], tip: "That is why ＋ 結果" },
    { en: "I agree with you [because] exercise is good for our health.", ja: "運動は健康によいので、あなたに賛成だ。", alt: ["because of", "due to", "as for"], tip: "うしろが文なら because" },
    { en: "[I believe that] online classes are useful.", ja: "オンライン授業は役に立つと信じている。", alt: ["I believing that", "I am believe that", "I believe to"], tip: "I believe that ＋ 文" },
    { en: "[Finally], it is good for the environment.", ja: "最後に、それは環境によい。", alt: ["At final", "Final", "The finally"], tip: "最後の理由は Finally," },
    { en: "[Therefore], I think school lunch is important.", ja: "したがって、給食は大切だと思う。", alt: ["Because", "Although", "So that"], tip: "Therefore,「したがって」" }
  ]
};

window.LX.plus["c1-u12"] = {
  core: {
    ico: "🚥",
    catch: "つなぎ言葉は文と文の「道路標識」",
    say: "In addition（さらに）や For example（たとえば）を文の頭に置くと、次に何が来るかが読む人に先にわかる。",
    fig: { t: "flow", steps: ["意見", "追加の理由", "具体例"] }
  },
  points: [
    {
      h: "In addition は「＋」",
      body: "also は文の中（一般動詞の前）。In addition, や Moreover, は文の頭に置いて「さらに」と情報を足す。",
      form: "In addition, S ＋ V",
      ex: "This bike is light. [In addition], it is cheap.",
      exja: "この自転車は軽い。そのうえ安い。",
      fig: { t: "slots", parts: [["This bike", "S"], ["is", "V"], ["also", "M"], ["cheap", "C"]] },
      ng: { bad: "In addition to, it is cheap.", good: "In addition, it is cheap.", why: "In addition to のあとは名詞が必要" }
    },
    {
      h: "For example は例の合図",
      body: "ふわっとした話のあとに For example, 〜. で具体例を出すと、説得力が一気に上がる。For instance, も同じ意味。",
      form: "For example, S ＋ V",
      ex: "[For example], you can talk with friends online.",
      exja: "たとえば、オンラインで友だちと話せる。",
      fig: { t: "flow", steps: ["主張", "たとえば", "具体例"] },
      ng: { bad: "For examples, you can talk online.", good: "For example, you can talk online.", why: "決まった言い方。s はつけない" }
    },
    {
      h: "such as は名詞を並べるだけ",
      body: "such as のうしろは名詞（apples and grapes）。文（S ＋ V）を続けたいときは For example, を使う。",
      form: "名詞 ＋ such as A and B",
      ex: "I like fruits [such as] apples and grapes.",
      exja: "私はりんごやぶどうのような果物が好きだ。",
      fig: { t: "vs", a: ["fruits such as apples", "うしろは名詞"], b: ["For example, I eat …", "うしろは文"] },
      ng: { bad: "Such as, you can use a tablet.", good: "For example, you can use a tablet.", why: "such as のあとに文は続けられない" }
    }
  ],
  drills: [
    { en: "He can speak English. He can [also] speak Chinese.", ja: "彼は英語が話せる。中国語も話せる。", alt: ["too also", "and", "either"], tip: "also は動詞の前" },
    { en: "The room is large. [In addition], it is bright.", ja: "その部屋は広い。さらに明るい。", alt: ["In addition to", "In additional", "Addition"], tip: "In addition,「さらに」" },
    { en: "This app is free. [Moreover], it is easy to use.", ja: "このアプリは無料だ。そのうえ使いやすい。", alt: ["More", "Moreover of", "Furthermore of"], tip: "Moreover,「そのうえ」" },
    { en: "[Furthermore], the hotel is near the station.", ja: "さらに、そのホテルは駅に近い。", alt: ["Further of", "Furthermore of", "Furthermores"], tip: "Furthermore,「さらに」" },
    { en: "[For example], you can recycle plastic bottles.", ja: "たとえば、ペットボトルをリサイクルできる。", alt: ["Such as", "For examples", "As example"], tip: "For example, ＋ 文" },
    { en: "I like sports [such as] tennis and soccer.", ja: "私はテニスやサッカーのようなスポーツが好きだ。", alt: ["such like", "such", "like as"], tip: "such as ＋ 名詞" },
    { en: "[For instance], some students study in cafes.", ja: "たとえば、カフェで勉強する生徒もいる。", alt: ["Such as", "For instances", "In instance"], tip: "For instance, ＝ For example," },
    { en: "We should eat vegetables [like] carrots and tomatoes.", ja: "にんじんやトマトのような野菜を食べるべきだ。", alt: ["alike", "likes", "as like"], tip: "like ＋ 名詞「〜のような」" },
    { en: "I like cats. My sister likes them, [too].", ja: "私はネコが好きだ。姉も好きだ。", alt: ["also too", "either", "so"], tip: "文の最後に too" },
    { en: "[Besides], it is too expensive.", ja: "それに、それは高すぎる。", alt: ["Beside", "Besides of", "In besides"], tip: "Besides,「それに」（s がつく）" },
    { en: "This phone is light. [What's more], it is cheap.", ja: "この電話は軽い。おまけに安い。", alt: ["What more", "What's mores", "That's more"], tip: "What's more,「おまけに」" },
    { en: "Many countries, [such as] Japan and Korea, use chopsticks.", ja: "日本や韓国のような多くの国がはしを使う。", alt: ["such", "such like", "as such"], tip: "such as ＋ 名詞を並べる" }
  ]
};
