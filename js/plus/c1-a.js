/* 追加教材：論理表現Ⅰ 1〜6 単元（わかりやすい説明・図・まちがい例・演習 12 文） */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c1-u01"] = {
  core: {
    ico: "🧱",
    catch: "英語は「動詞の右側」で型が決まる",
    say: "日本語は語順が自由。英語は置く場所で役目が決まる。動詞の右に何が来るかを見れば、文の型がわかる。",
    fig: { t: "slots", parts: [["The news", "S"], ["made", "V"], ["me", "O"], ["happy", "C"]], arc: [3, 2, "me の様子"] }
  },
  points: [
    {
      h: "SVC は「S ＝ C」のイコール",
      body: "become・look・get は「＝」の働き。became a nurse なら「姉＝看護師」。C には名詞か形容詞が入る。",
      form: "S ＋ V ＋ C（S＝C）",
      ex: "My sister [became] a nurse.",
      exja: "姉は看護師になった。",
      fig: { t: "slots", parts: [["She", "S"], ["looks", "V"], ["tired", "C"]], arc: [2, 0, "She の様子"] },
      ng: { bad: "She looks happily.", good: "She looks happy.", why: "C は S の様子。様子を表すのは形容詞（-ly は不可）" }
    },
    {
      h: "SVOO は「人に・物を」の順",
      body: "give・show・tell・buy は「人」→「物」の順。物を先に言うなら give a watch to me と to で人をつなぐ。",
      form: "S ＋ V ＋ 人 ＋ 物",
      ex: "My father [gave me] a watch.",
      exja: "父は私に時計をくれた。",
      fig: { t: "vs", a: ["He gave me a watch.", "人 → 物 の順"], b: ["He gave a watch to me.", "物 → to ＋ 人"] },
      ng: { bad: "He gave to me a watch.", good: "He gave me a watch.", why: "人を先に置くときは to を入れない" }
    },
    {
      h: "SVOC の C は O の説明",
      body: "make・keep のあとの O と C は「O＝C」。made me happy は「me＝happy」。O を C の状態にする。",
      form: "S ＋ V ＋ O ＋ C（O＝C）",
      ex: "The news made me [happy].",
      exja: "その知らせで私はうれしくなった。",
      ng: { bad: "Please keep clean the room.", good: "Please keep the room clean.", why: "O（the room）が先、その様子 C（clean）があと" }
    }
  ],
  drills: [
    { en: "Tom [looks] very sleepy.", ja: "トムはとても眠そうだ。", alt: ["looks at", "sees", "watches"], tip: "look ＋ 形容詞「〜に見える」" },
    { en: "This soup [tastes] good.", ja: "このスープはおいしい。", alt: ["tastes of", "eats", "tasted to"], tip: "taste ＋ 形容詞「〜な味がする」" },
    { en: "It [got] dark outside.", ja: "外が暗くなった。", alt: ["got to", "became to", "turned to"], tip: "get ＋ 形容詞「〜になる」" },
    { en: "My brother [became] a famous singer.", ja: "兄は有名な歌手になった。", alt: ["became to", "got to", "was become"], tip: "become ＋ 名詞「〜になる」" },
    { en: "She [sent me] a long letter.", ja: "彼女は私に長い手紙を送ってくれた。", alt: ["sent to me", "sent for me", "sent me to"], tip: "send ＋ 人 ＋ 物" },
    { en: "Can you [tell me] your phone number?", ja: "電話番号を教えてくれますか。", alt: ["tell to me", "say me", "tell for me"], tip: "tell ＋ 人 ＋ 物「人に物を伝える」" },
    { en: "My mother [bought me] a new bike.", ja: "母は私に新しい自転車を買ってくれた。", alt: ["bought to me", "bought me to", "buy me for"], tip: "buy ＋ 人 ＋ 物" },
    { en: "Mr. Sato [teaches us] English.", ja: "佐藤先生は私たちに英語を教えている。", alt: ["teaches to us", "teach us", "teaches for us"], tip: "teach ＋ 人 ＋ 教科" },
    { en: "We [call our dog] Pochi.", ja: "私たちは犬をポチと呼んでいる。", alt: ["call to our dog", "call our dog as", "calls our dog"], tip: "call ＋ O ＋ C「O を C と呼ぶ」" },
    { en: "This song always makes me [sad].", ja: "この歌を聞くといつも悲しくなる。", alt: ["sadly", "sadness", "to sad"], tip: "make ＋ O ＋ 形容詞" },
    { en: "I found the test [easy].", ja: "そのテストは簡単だとわかった。", alt: ["easiness", "to easy", "easy to"], tip: "find ＋ O ＋ C「O が C だとわかる」" },
    { en: "Please leave the door [open].", ja: "ドアを開けたままにしておいてください。", alt: ["opening", "openly", "to open"], tip: "leave ＋ O ＋ C「O を C のままに」" }
  ]
};

window.LX.plus["c1-u02"] = {
  core: {
    ico: "🎞",
    catch: "時制は「カメラでどこを映すか」",
    say: "現在形は「いつも」の写真、過去形は「もう終わった」写真、進行形は「その瞬間」の動画。",
    fig: { t: "time", marks: [{ from: -4, to: 4, label: "いつも（現在形）" }, { at: -2, label: "過去の一点" }, { at: 0, label: "今まさに" }] }
  },
  points: [
    {
      h: "現在形は「いつもの事実」",
      body: "現在形は「今この瞬間」ではなく、毎日の習慣や変わらない事実を表す。主語が he・she・it なら動詞に -s を付ける。",
      form: "主語が3単現 → 動詞 ＋ s",
      ex: "My brother [walks] to school every day.",
      exja: "弟は毎日歩いて学校へ行く。",
      fig: { t: "time", marks: [{ from: -4, to: 4, label: "毎日くり返す" }] },
      ng: { bad: "He walk to school every day.", good: "He walks to school every day.", why: "he・she・it が主語の現在形は 動詞に -s" }
    },
    {
      h: "過去形は「終わった写真」",
      body: "過去形は、もう終わったことを過去の一点で切り取る。yesterday・last ～・～ ago が目印。今とのつながりは言わない。",
      form: "動詞の過去形（-ed／不規則）",
      ex: "I [visited] Kyoto last summer.",
      exja: "私は去年の夏、京都を訪れた。",
      fig: { t: "time", marks: [{ at: -2, label: "去年の夏" }] },
      ng: { bad: "I have visited Kyoto last summer.", good: "I visited Kyoto last summer.", why: "last summer は過去の一点。現在完了とは使えない" }
    },
    {
      h: "進行形は「その瞬間の動画」",
      body: "be動詞 ＋ -ing で「ちょうど〜している最中」。過去進行形なら「その時〜していた」。when ～ の瞬間に続いていた動作を表す。",
      form: "be動詞 ＋ 動詞の -ing 形",
      ex: "I [was taking] a bath when you called.",
      exja: "あなたが電話したとき、私は風呂に入っていた。",
      fig: { t: "time", marks: [{ from: -3, to: -1, label: "風呂に入っていた" }, { at: -2, label: "電話が鳴る" }] },
      ng: { bad: "I am knowing the answer.", good: "I know the answer.", why: "know・like など「状態」の動詞は ふつう進行形にしない" }
    }
  ],
  drills: [
    { en: "My father [drinks] coffee every morning.", ja: "父は毎朝コーヒーを飲む。", alt: ["drink", "is drink", "drinking"], tip: "every morning＝習慣 → 現在形" },
    { en: "Water [boils] at 100 degrees.", ja: "水は100度で沸騰する。", alt: ["boil", "is boil", "boiling"], tip: "変わらない事実は現在形" },
    { en: "We [went] to the beach yesterday.", ja: "私たちは昨日、海へ行った。", alt: ["go", "have gone", "are going"], tip: "yesterday は過去形" },
    { en: "She [bought] a new phone two days ago.", ja: "彼女は2日前に新しい電話を買った。", alt: ["buys", "has bought", "is buying"], tip: "～ ago は過去形の目印" },
    { en: "Be quiet! The baby [is sleeping].", ja: "静かに！赤ちゃんが眠っている。", alt: ["sleep", "are sleeping", "is sleep"], tip: "今まさに → 現在進行形" },
    { en: "Listen! Someone [is knocking] at the door.", ja: "聞いて！だれかがドアをノックしている。", alt: ["knock", "are knocking", "is knock"], tip: "Listen! は「今」の合図" },
    { en: "They [were watching] TV when I came home.", ja: "私が帰宅したとき、彼らはテレビを見ていた。", alt: ["watch", "are watching", "was watching"], tip: "when ～ の時点で最中 → 過去進行形" },
    { en: "What [are you doing] now?", ja: "今、何をしているの？", alt: ["do you doing", "you are doing", "did you doing"], tip: "疑問文は be動詞を前に" },
    { en: "Ken [does not like] spicy food.", ja: "ケンは辛い食べ物が好きではない。", alt: ["do not like", "is not like", "not likes"], tip: "3単現の否定は does not ＋ 原形" },
    { en: "[Did you see] the movie last night?", ja: "昨夜その映画を見ましたか。", alt: ["Do you saw", "Did you saw", "Were you see"], tip: "過去の疑問文は Did ＋ 原形" },
    { en: "It [was raining] hard at that time.", ja: "その時、雨が激しく降っていた。", alt: ["is raining", "rains", "were raining"], tip: "at that time の最中 → 過去進行形" },
    { en: "I [was studying] in my room when the phone rang.", ja: "電話が鳴ったとき、私は部屋で勉強していた。", alt: ["am studying", "were studying", "was study"], tip: "電話が鳴った瞬間の「最中」" }
  ]
};

window.LX.plus["c1-u03"] = {
  core: {
    ico: "🏹",
    catch: "現在完了は「過去から今に刺さる矢」",
    say: "過去のできごとが、今とつながっている。だから話の中心は「今」。過去の一点を表す言葉とは使えない。",
    fig: { t: "time", marks: [{ from: -3, to: 0, label: "過去 → 今もつながる" }] }
  },
  points: [
    {
      h: "継続「ずっと〜している」",
      body: "過去に始まって、今も続いている。期間は for（〜の間）、始まった時点は since（〜から）で表す。",
      form: "have ＋ 過去分詞 ＋ for／since",
      ex: "I [have lived] in Osaka for ten years.",
      exja: "私は10年間大阪に住んでいる。",
      fig: { t: "time", marks: [{ from: -3, to: 0, label: "10年間 住んでいる" }] },
      ng: { bad: "I have lived in Osaka since ten years.", good: "I have lived in Osaka for ten years.", why: "期間（10年間）は for、始まった時点は since" }
    },
    {
      h: "経験「〜したことがある」",
      body: "生まれてから今までをふり返って「ある・ない」を言う。ever（今までに）・never（一度も〜ない）・〜 times（〜回）が目印。",
      form: "have ＋ (ever／never) ＋ 過去分詞",
      ex: "I [have never seen] snow.",
      exja: "私は雪を一度も見たことがない。",
      fig: { t: "time", marks: [{ from: -4, to: 0, label: "生まれてから今まで" }, { at: -2, label: "1回目" }] },
      ng: { bad: "I have seen him yesterday.", good: "I saw him yesterday.", why: "yesterday は過去の一点。今とつながらないので過去形" }
    },
    {
      h: "完了「もう〜した」",
      body: "さっき終わって、その結果が今にある。just（ちょうど）・already（もう）・yet（否定文で「まだ」、疑問文で「もう」）が目印。",
      form: "have ＋ just／already ＋ 過去分詞",
      ex: "I [have just finished] my homework.",
      exja: "私はちょうど宿題を終えたところだ。",
      fig: { t: "vs", a: ["I have lost my key.", "今も見つからない"], b: ["I lost my key.", "今はわからない"] },
      ng: { bad: "When have you finished your homework?", good: "When did you finish your homework?", why: "When（いつ）は過去の一点をたずねる。過去形で" }
    }
  ],
  drills: [
    { en: "We [have known] each other for five years.", ja: "私たちは知り合って5年になる。", alt: ["know", "have know", "are knowing"], tip: "for ＋ 期間 → 継続" },
    { en: "It has been cold [since] last week.", ja: "先週からずっと寒い。", alt: ["for", "from", "ago"], tip: "since ＋ 始まった時点" },
    { en: "He has played tennis [for] three years.", ja: "彼は3年間テニスをしている。", alt: ["since", "during", "ago"], tip: "for ＋ 期間の長さ" },
    { en: "My sister [has been] sick since Friday.", ja: "姉は金曜日から体調が悪い。", alt: ["is", "was", "has be"], tip: "be動詞の現在完了は has been" },
    { en: "I [have visited] Okinawa twice.", ja: "私は沖縄に2回行ったことがある。", alt: ["visit", "am visiting", "have visit"], tip: "twice・～ times は経験" },
    { en: "Have you ever [eaten] natto?", ja: "納豆を食べたことがありますか。", alt: ["ate", "eat", "eating"], tip: "ever ＋ 過去分詞で経験をたずねる" },
    { en: "She [has never been] abroad.", ja: "彼女は一度も海外に行ったことがない。", alt: ["never has been", "has never be", "has been never"], tip: "never は have と過去分詞の間" },
    { en: "How many times [have you read] this book?", ja: "この本を何回読んだことがありますか。", alt: ["did you have read", "have you reading", "you have read"], tip: "回数をたずねる経験の疑問文" },
    { en: "The bus [has already left].", ja: "バスはもう出てしまった。", alt: ["has already leave", "have already left", "is already left"], tip: "already は have と過去分詞の間" },
    { en: "Have you finished your lunch [yet]?", ja: "もう昼食を食べ終わりましたか。", alt: ["still", "ago", "since"], tip: "疑問文の yet は「もう」" },
    { en: "I [haven't decided] my future job yet.", ja: "将来の仕事はまだ決めていない。", alt: ["didn't decided", "haven't decide", "don't decided"], tip: "否定文の yet は「まだ」" },
    { en: "He [has lost] his wallet, so he can't buy lunch.", ja: "彼は財布をなくしてしまったので、昼食が買えない。", alt: ["has lose", "have lost", "is losing"], tip: "なくした結果が今も続く" }
  ]
};

window.LX.plus["c1-u04"] = {
  core: {
    ico: "🎚",
    catch: "助動詞は「気持ちのダイヤル」",
    say: "動詞の前に置いて、話し手の気持ち（できる・すべき・かもしれない）を足す。後ろの動詞はいつも原形。",
    fig: { t: "scale", left: "弱い", right: "強い", items: [["may", 35], ["should", 65], ["must", 95]] }
  },
  points: [
    {
      h: "助動詞 ＋ 動詞の原形",
      body: "助動詞は動詞にかぶせる「帽子」。帽子をかぶった動詞は原形にもどる。主語が he でも -s は付かず、to も入らない。",
      form: "助動詞 ＋ 動詞の原形",
      ex: "She [can speak] three languages.",
      exja: "彼女は3か国語を話すことができる。",
      fig: { t: "slots", parts: [["She", "S"], ["can", "助動詞"], ["speak", "原形"], ["three languages", "O"]] },
      ng: { bad: "She can speaks English.", good: "She can speak English.", why: "助動詞のあとは原形。-s は付けない" }
    },
    {
      h: "禁止 と 不要 は正反対",
      body: "must not は「してはいけない」（赤信号）。don't have to は「しなくてもいい」（青信号）。形は似ても意味は逆。",
      form: "must not 禁止／don't have to 不要",
      ex: "You [don't have to] come tomorrow.",
      exja: "あなたは明日来なくてもよい。",
      fig: { t: "vs", a: ["You must not run here.", "禁止：だめ"], b: ["You don't have to run.", "不要：しなくていい"] },
      ng: { bad: "You must not hurry. We have time.", good: "You don't have to hurry. We have time.", why: "「急がなくていい」は不要。禁止の must not ではない" }
    },
    {
      h: "should と may",
      body: "should は「〜したほうがいい」というアドバイス。may は「〜かもしれない」（半分くらいの確信）や「〜してもよい」（許可）。",
      form: "should ＋ 原形／may ＋ 原形",
      ex: "You [should see] a doctor.",
      exja: "あなたは医者にみてもらったほうがいい。",
      fig: { t: "vs", a: ["You should rest.", "アドバイス"], b: ["It may rain.", "かもしれない"] },
      ng: { bad: "You should to see a doctor.", good: "You should see a doctor.", why: "should のあとに to は入らない" }
    }
  ],
  drills: [
    { en: "My grandfather [can use] a smartphone.", ja: "祖父はスマートフォンを使うことができる。", alt: ["can uses", "can to use", "cans use"], tip: "can ＋ 原形「〜できる」" },
    { en: "[Can I] borrow your pen?", ja: "ペンを借りてもいいですか。", alt: ["Do I can", "Can I to", "Am I can"], tip: "Can I ～?「〜してもいい？」" },
    { en: "You [must wear] a helmet on a bike.", ja: "自転車ではヘルメットをかぶらなければならない。", alt: ["must wearing", "must to wear", "musts wear"], tip: "must ＋ 原形「〜しなければならない」" },
    { en: "Students [must not] eat in the library.", ja: "生徒は図書館で食べてはいけない。", alt: ["don't must", "must to not", "not must"], tip: "must not ＝ 禁止" },
    { en: "We [have to] leave at six.", ja: "私たちは6時に出なければならない。", alt: ["have", "has to", "must to"], tip: "have to ＝「〜しなければならない」" },
    { en: "She [doesn't have to] work on Sunday.", ja: "彼女は日曜日は働かなくてもよい。", alt: ["don't have to", "doesn't has to", "isn't have to"], tip: "3単現は doesn't have to" },
    { en: "You [should drink] more water.", ja: "あなたはもっと水を飲んだほうがいい。", alt: ["should drinking", "should to drink", "should drank"], tip: "should ＋ 原形「〜したほうがいい」" },
    { en: "We [shouldn't stay] up so late.", ja: "私たちはそんなに夜ふかしすべきではない。", alt: ["shouldn't to stay", "don't should stay", "shouldn't staying"], tip: "should not ＝「〜すべきでない」" },
    { en: "He [may be] at the gym now.", ja: "彼は今ジムにいるかもしれない。", alt: ["may is", "may being", "mays be"], tip: "may ＋ 原形「〜かもしれない」" },
    { en: "[May I] use the bathroom?", ja: "お手洗いを使ってもいいですか。", alt: ["Do I may", "May I to", "Am I may"], tip: "May I ～? はていねいな許可" },
    { en: "[Will you] help me with my homework?", ja: "宿題を手伝ってくれませんか。", alt: ["Do you will", "Will you to", "Are you will"], tip: "Will you ～?「〜してくれる？」" },
    { en: "It [will be] sunny tomorrow.", ja: "明日は晴れるだろう。", alt: ["will is", "wills be", "will being"], tip: "will ＋ 原形「〜だろう」" }
  ]
};

window.LX.plus["c1-u05"] = {
  core: {
    ico: "🔄",
    catch: "受動態は「主役を入れかえるカメラ」",
    say: "「だれがしたか」より「何がされたか」を主役にしたいときに使う。する側は by ～ で後ろに回すか、言わない。",
    fig: { t: "vs", a: ["Many people love it.", "する側が主役"], b: ["It is loved by many.", "される側が主役"] }
  },
  points: [
    {
      h: "be ＋ 過去分詞で「される」",
      body: "される側を文の先頭に出し、動詞を be ＋ 過去分詞にする。する側は by ～ で後ろへ。だれがしたか大事でなければ by は省く。",
      form: "be動詞 ＋ 過去分詞（＋ by ～）",
      ex: "This song [is loved] by many people.",
      exja: "この歌は多くの人に愛されている。",
      fig: { t: "slots", parts: [["This song", "S"], ["is loved", "V"], ["by many people", "M"]] },
      ng: { bad: "This song is love by many people.", good: "This song is loved by many people.", why: "be動詞のあとは過去分詞（loved）" }
    },
    {
      h: "時制は be動詞が引き受ける",
      body: "過去分詞はいつも同じ形。いつの話かは be動詞が決める。is（今）・was（過去）・will be（未来）と be動詞だけ変える。",
      form: "was／were・will be ＋ 過去分詞",
      ex: "This temple [was built] in 1603.",
      exja: "この寺は1603年に建てられた。",
      fig: { t: "time", marks: [{ at: -3, label: "was built" }, { at: 0, label: "is used" }, { at: 3, label: "will be held" }] },
      ng: { bad: "The results will announced next week.", good: "The results will be announced next week.", why: "未来の受動態は will be ＋ 過去分詞" }
    },
    {
      h: "by 以外の前置詞と組む形",
      body: "気持ちや状態の受動態は by 以外の前置詞と組む。interested in・surprised at などセットで覚える。",
      form: "be interested in など",
      ex: "I [am interested in] Japanese history.",
      exja: "私は日本の歴史に興味がある。",
      ng: { bad: "I am interesting in history.", good: "I am interested in history.", why: "人は「興味をもたされている」側なので -ed 形" }
    }
  ],
  drills: [
    { en: "This room [is cleaned] every day.", ja: "この部屋は毎日そうじされる。", alt: ["cleans", "is cleaning", "cleaned is"], tip: "be ＋ 過去分詞「〜される」" },
    { en: "Baseball [is played] all over Japan.", ja: "野球は日本中でされている。", alt: ["plays", "is playing", "is play"], tip: "be ＋ 過去分詞" },
    { en: "These cookies [were made] by my sister.", ja: "これらのクッキーは姉が作った。", alt: ["made", "were make", "was made"], tip: "複数の過去は were ＋ 過去分詞" },
    { en: "The window [was broken] by the wind.", ja: "窓は風で割れた。", alt: ["broke", "was break", "is broke"], tip: "break → broken" },
    { en: "This book [was written] by a high school student.", ja: "この本は高校生によって書かれた。", alt: ["wrote", "was wrote", "is writing"], tip: "write → written" },
    { en: "The new stadium [will be built] next year.", ja: "新しいスタジアムは来年建てられる。", alt: ["will build", "will be build", "is built will"], tip: "未来は will be ＋ 過去分詞" },
    { en: "[Is English taught] at your school?", ja: "あなたの学校では英語が教えられていますか。", alt: ["Does English taught", "Is English teach", "Is English teaching"], tip: "疑問文は be動詞を前に" },
    { en: "The bag [wasn't found] anywhere.", ja: "そのかばんはどこにも見つからなかった。", alt: ["didn't found", "wasn't find", "isn't founded"], tip: "否定は be動詞 ＋ not" },
    { en: "We [were surprised at] the news.", ja: "私たちはその知らせに驚いた。", alt: ["were surprising at", "surprised at", "were surprised of"], tip: "be surprised at「〜に驚く」" },
    { en: "The singer [is known to] young people.", ja: "その歌手は若者に知られている。", alt: ["is knowing to", "knows to", "is know to"], tip: "be known to「〜に知られている」" },
    { en: "The street [was filled with] people.", ja: "通りは人でいっぱいだった。", alt: ["was filling with", "filled with of", "was filled of"], tip: "be filled with「〜でいっぱい」" },
    { en: "My grandmother [is satisfied with] her new house.", ja: "祖母は新しい家に満足している。", alt: ["is satisfying with", "satisfies with", "is satisfied of"], tip: "be satisfied with「〜に満足」" }
  ]
};

window.LX.plus["c1-u06"] = {
  core: {
    ico: "➡️",
    catch: "to 不定詞は「これから向かう矢印」",
    say: "to はもともと「〜へ向かって」。だから to ＋ 動詞は「これからすること・目的・ねらい」を表すことが多い。",
    fig: { t: "slots", parts: [["I", "S"], ["went", "V"], ["to the library", "M"], ["to study", "目的"]], arc: [3, 1, "何のため？"] }
  },
  points: [
    {
      h: "名詞のはたらき「〜すること」",
      body: "to ＋ 動詞で「〜すること」というひとかたまりの名詞になる。want・hope・decide の目的語や、文の主語・補語になれる。",
      form: "want／hope／decide ＋ to ＋ 原形",
      ex: "I [want to be] a teacher.",
      exja: "私は先生になりたい。",
      fig: { t: "slots", parts: [["I", "S"], ["want", "V"], ["to be a teacher", "O"]] },
      ng: { bad: "I want being a teacher.", good: "I want to be a teacher.", why: "want は「これから」を見る動詞なので to 不定詞" }
    },
    {
      h: "形容詞のはたらき「〜するための」",
      body: "名詞のすぐ後ろに to ＋ 動詞を置くと「〜するための・〜すべき」と名詞を説明する。日本語と順番が逆なので注意。",
      form: "名詞 ＋ to ＋ 原形",
      ex: "I have a lot of [homework to do].",
      exja: "私にはやるべき宿題がたくさんある。",
      fig: { t: "slots", parts: [["homework", "名詞"], ["to do", "説明"]], arc: [1, 0, "どんな宿題？"] },
      ng: { bad: "I want something drink.", good: "I want something to drink.", why: "「飲むための何か」は to が必要" }
    },
    {
      h: "副詞のはたらき「〜するために」",
      body: "動詞の後ろの to ＋ 動詞は「〜するために」。感情の言葉のあとなら「〜して」。It is ～ to … は主語を後ろに回す形。",
      form: "動詞 ＋ to ＋ 原形／It is ～ to …",
      ex: "I went to the library [to study].",
      exja: "私は勉強するために図書館へ行った。",
      ng: { bad: "It is important get enough sleep.", good: "It is important to get enough sleep.", why: "It is ～ のあとの「〜すること」は to が必要" }
    }
  ],
  drills: [
    { en: "I [hope to see] you again soon.", ja: "またすぐに会えるといいな。", alt: ["hope seeing", "hope see", "hope to seeing"], tip: "hope to ＋ 原形" },
    { en: "She [decided to study] abroad.", ja: "彼女は留学することに決めた。", alt: ["decided studying", "decided study", "decided to studying"], tip: "decide to ＋ 原形" },
    { en: "My goal is [to win] the tournament.", ja: "私の目標は大会で優勝することだ。", alt: ["win", "to winning", "won"], tip: "to ＋ 原形「〜すること」が補語に" },
    { en: "[To learn] a new language is fun.", ja: "新しい言語を学ぶことは楽しい。", alt: ["Learn", "To learning", "Learned"], tip: "to ＋ 原形が主語になる" },
    { en: "Do you have anything [to drink]?", ja: "何か飲むものはありますか。", alt: ["drink", "drinking to", "to drinking"], tip: "anything to ＋ 原形「飲むためのもの」" },
    { en: "Kyoto has many places [to visit].", ja: "京都には訪れるべき場所がたくさんある。", alt: ["visit", "to visiting", "visited to"], tip: "名詞 ＋ to ＋ 原形「訪れるべき」" },
    { en: "I had no time [to eat] breakfast.", ja: "朝食を食べる時間がなかった。", alt: ["eat", "eating to", "to eating"], tip: "time to ＋ 原形「〜する時間」" },
    { en: "He got up early [to catch] the first train.", ja: "彼は始発電車に乗るために早起きした。", alt: ["catch", "catching to", "to catching"], tip: "目的「〜するために」" },
    { en: "We went to the park [to play] soccer.", ja: "私たちはサッカーをするために公園へ行った。", alt: ["play", "to playing", "for play"], tip: "目的「〜するために」" },
    { en: "I was glad [to get] your letter.", ja: "あなたの手紙を受け取ってうれしかった。", alt: ["get", "getting to", "to getting"], tip: "感情 ＋ to ＋ 原形「〜して」" },
    { en: "[It is] difficult to answer this question.", ja: "この質問に答えるのは難しい。", alt: ["That is", "This is", "There is"], tip: "It は後ろの to ～ を指す" },
    { en: "It is fun [to talk] with friends online.", ja: "オンラインで友だちと話すのは楽しい。", alt: ["talk", "talking to", "to talking"], tip: "It is ～ to ＋ 原形" }
  ]
};
