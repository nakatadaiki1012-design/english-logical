var LX = window.LX = window.LX || { courses: [] };
LX.courses.push({
  id: "c2", name: "論理表現Ⅱ", short: "Ⅱ",
  desc: "複雑な文法と、筋の通ったパラグラフを書く力",
  units: [
    {
      id: "c2-u01", title: "過去完了・未来完了", en: "Past Perfect / Future Perfect", tag: "文法",
      goal: "過去より前、未来までのことを正しい時制で言える",
      points: [
        { h: "過去完了＝過去より前", body: "過去のある時点よりさらに前のことは had ＋ 過去分詞で表す。基準になる過去の時点が必ずある。", form: "had ＋ 過去分詞", ex: "When I arrived, the train [had left].", exja: "私が着いたとき、電車は出てしまっていた。" },
        { h: "過去のある時までの継続", body: "「その時まで～していた」「それまでに～したことがあった」も過去完了。for や before といっしょによく使う。", form: "had ＋ 過去分詞 ＋ for ～", ex: "She [had lived] in Osaka for five years before she moved.", exja: "彼女は引っ越す前に5年間大阪に住んでいた。" },
        { h: "未来完了＝未来の時点まで", body: "未来のある時点までに終わっていること・続いていることは will have ＋ 過去分詞。by ～ などの目印と使う。", form: "will have ＋ 過去分詞", ex: "I [will have finished] the report by noon.", exja: "正午までにはレポートを終えているだろう。" }
      ],
      sentences: [
        { en: "The movie [had started] when we got there.", ja: "私たちが着いたとき、映画は始まっていた。", alt: ["has started", "have started", "starts"], tip: "着いた（過去）より前→過去完了" },
        { en: "I lost the pen my father [had given] me.", ja: "父がくれたペンをなくしてしまった。", alt: ["has given", "gives", "have given"], tip: "なくすより前にもらった→had p.p." },
        { en: "I [had never seen] snow until I visited Hokkaido.", ja: "北海道を訪れるまで雪を見たことがなかった。", alt: ["have never seen", "never see", "has never seen"], tip: "過去の時点までの経験→過去完了" },
        { en: "She [had been] sick for a week when she saw a doctor.", ja: "医者にみてもらったとき、彼女は1週間具合が悪かった。", alt: ["has been", "is", "have been"], tip: "過去の時点までの継続→had been" },
        { en: "By next spring, I [will have lived] here for ten years.", ja: "来年の春で、ここに10年住んだことになる。", alt: ["will live", "have lived", "had lived"], tip: "未来の時点までの継続→未来完了" },
        { en: "The game [will have ended] by the time you get home.", ja: "あなたが家に着くころには、試合は終わっているだろう。", alt: ["had ended", "has ended", "was ended"], tip: "未来のある時までに完了→未来完了" }
      ],
      summary: ["had ＋ 過去分詞＝過去より前", "基準になる過去の時点が必要", "will have ＋ 過去分詞＝未来までに"]
    },
    {
      id: "c2-u02", title: "助動詞＋完了形", en: "Modal + have + p.p.", tag: "文法",
      goal: "過去のことへの推量や後悔を、助動詞で表せる",
      points: [
        { h: "must have＝したにちがいない", body: "must have ＋ 過去分詞は「～したにちがいない」。今の時点から、過去のことを強く推量する表現。", form: "must have ＋ 過去分詞", ex: "He [must have been] tired.", exja: "彼は疲れていたにちがいない。" },
        { h: "can't have / may have", body: "can't have は「～したはずがない」、may have は「～したかもしれない」。確信の強さで使い分ける。", form: "can't / may ＋ have ＋ 過去分詞", ex: "She [can't have said] such a thing.", exja: "彼女がそんなことを言ったはずがない。" },
        { h: "should have＝後悔・非難", body: "should have ＋ 過去分詞は「～すべきだったのに（しなかった）」。shouldn't have は「～すべきではなかった」。", form: "should have ＋ 過去分詞", ex: "I [should have studied] harder.", exja: "もっと勉強すべきだった。" }
      ],
      sentences: [
        { en: "You [must have been] surprised at the news.", ja: "その知らせに驚いたにちがいない。", alt: ["must be been", "must had been", "must have be"], tip: "must have p.p.＝～したにちがいない" },
        { en: "He [may have missed] the bus this morning.", ja: "彼は今朝バスに乗り遅れたかもしれない。", alt: ["may has missed", "may have miss", "may had missed"], tip: "助動詞のあとは have（原形）" },
        { en: "She [can't have forgotten] our meeting.", ja: "彼女が私たちの打ち合わせを忘れたはずがない。", alt: ["can't forgot", "can't has forgotten", "can't have forget"], tip: "can't have p.p.＝～したはずがない" },
        { en: "I [should have left] home earlier.", ja: "もっと早く家を出るべきだった。", alt: ["should has left", "should have leave", "should had left"], tip: "should have p.p.＝すべきだったのに" },
        { en: "You [shouldn't have eaten] so much cake.", ja: "そんなにケーキを食べるべきではなかったのに。", alt: ["shouldn't eaten", "shouldn't have eat", "shouldn't has eaten"], tip: "shouldn't have p.p.＝しなければよかった" },
        { en: "I [could have won] the race if I had practiced more.", ja: "もっと練習していたら、レースに勝てたかもしれない。", alt: ["could has won", "could have win", "can have won"], tip: "could have p.p.＝～できたのに" }
      ],
      summary: ["must have p.p.＝したにちがいない", "can't have p.p.＝したはずがない", "should have p.p.＝すべきだったのに"]
    },
    {
      id: "c2-u03", title: "仮定法過去・過去完了", en: "Subjunctive Mood", tag: "文法",
      goal: "事実と違うことを想像して、仮定法で言える",
      points: [
        { h: "仮定法過去＝今の反対", body: "今の事実と違うことを想像するときは、if の中を過去形にする。形は過去でも意味は「今」。be 動詞は were が基本。", form: "If S 過去形, S would ＋ 原形", ex: "If I [were] you, I would accept the offer.", exja: "もし私があなたなら、その申し出を受けるだろう。" },
        { h: "仮定法過去完了＝過去の反対", body: "過去の事実と違うことを想像するときは、if の中を had ＋ 過去分詞に、結果を would have ＋ 過去分詞にする。", form: "If S had p.p., S would have p.p.", ex: "If I had known, I [would have helped] you.", exja: "知っていたら、あなたを手伝ったのに。" },
        { h: "ミックス型", body: "「あの時～していたら、今は…だろう」のように、if の中は過去完了、結果は would ＋ 原形になることもある。", form: "If S had p.p., S would ＋ 原形 ＋ now", ex: "If I had taken the medicine, I [would be] fine now.", exja: "薬を飲んでいたら、今は元気だろうに。" }
      ],
      sentences: [
        { en: "If I [had] more time, I would read more books.", ja: "もっと時間があれば、もっと本を読むのに。", alt: ["have", "will have", "have had"], tip: "今の反対→ if の中は過去形" },
        { en: "If I [were] a bird, I could fly to you.", ja: "もし私が鳥なら、あなたのところへ飛んでいけるのに。", alt: ["am", "will be", "have been"], tip: "仮定法では be 動詞は were" },
        { en: "If it were sunny, we [would go] on a picnic.", ja: "晴れていたら、ピクニックに行くのに。", alt: ["will go", "go", "would have go"], tip: "結果は would ＋ 原形" },
        { en: "If you had left earlier, you [would have caught] the train.", ja: "もっと早く出ていたら、電車に間に合ったのに。", alt: ["would catch", "will have caught", "would have catch"], tip: "過去の反対→ would have p.p." },
        { en: "If he [had studied] harder, he would have passed.", ja: "もっと勉強していたら、彼は合格しただろうに。", alt: ["studied", "has studied", "would study"], tip: "過去の反対→ if の中は had p.p." },
        { en: "If I had eaten breakfast, I [wouldn't be] hungry now.", ja: "朝ごはんを食べていたら、今おなかがすいていないのに。", alt: ["won't be", "wouldn't have been", "am not"], tip: "now があるので結果は would ＋ 原形" }
      ],
      summary: ["今の反対→ if＋過去形, would＋原形", "過去の反対→ if＋had p.p.", "結果は would have p.p."]
    },
    {
      id: "c2-u04", title: "仮定法のいろいろ", en: "I wish / as if / without", tag: "文法",
      goal: "願い・たとえ・「～がなければ」を仮定法で言える",
      points: [
        { h: "I wish ＋ 仮定法", body: "I wish の後ろは、かなわない願い。今のことなら過去形、過去のことなら had ＋ 過去分詞を使う。", form: "I wish S 過去形 / had p.p.", ex: "I wish I [could] speak French.", exja: "フランス語が話せたらいいのに。" },
        { h: "as if ＝まるで～のように", body: "as if ＋ 過去形で「まるで～であるかのように」。実際はそうではないことを表す。", form: "S V as if S 過去形", ex: "He talks as if he [knew] everything.", exja: "彼はまるで何でも知っているかのように話す。" },
        { h: "without ＝もし～がなければ", body: "without ～ や if it were not for ～ で「～がなければ」。過去の話なら if it had not been for ～ になる。", form: "Without ～, S would ＋ 原形", ex: "[Without] water, we could not live.", exja: "水がなければ、私たちは生きられないだろう。" }
      ],
      sentences: [
        { en: "I wish I [had] a little sister.", ja: "妹がいたらいいのに。", alt: ["have", "will have", "has"], tip: "I wish ＋ 過去形＝今かなわない願い" },
        { en: "I wish I [had studied] harder last year.", ja: "去年もっと勉強していたらよかったのに。", alt: ["studied", "have studied", "would study"], tip: "過去への願い→ had p.p." },
        { en: "She looks as if she [were] a movie star.", ja: "彼女はまるで映画スターのように見える。", alt: ["be", "will be", "been"], tip: "as if ＋ 過去形＝まるで～のように" },
        { en: "[Without] your help, I would have failed.", ja: "あなたの助けがなかったら、私は失敗していただろう。", alt: ["Unless", "If", "Except"], tip: "without ＋ 名詞＝～がなければ" },
        { en: "If it [were not] for music, life would be boring.", ja: "もし音楽がなければ、人生は退屈だろう。", alt: ["is not", "had not", "was not been"], tip: "if it were not for ～＝～がなければ" },
        { en: "It's time you [went] to bed.", ja: "もう寝る時間ですよ。", alt: ["go", "will go", "have gone"], tip: "It's time ＋ 過去形＝もう～する時間だ" }
      ],
      summary: ["I wish＋過去形＝今かなわない願い", "as if＋過去形＝まるで～のように", "without ～＝もし～がなければ"]
    },
    {
      id: "c2-u05", title: "分詞構文", en: "Participial Constructions", tag: "文法",
      goal: "分詞で文をつなぎ、時や理由を短く表せる",
      points: [
        { h: "分詞構文＝接続詞を省く", body: "接続詞と主語を省いて、動詞を -ing にすると分詞構文になる。時・理由・同時進行などの意味を文脈で読む。", form: "-ing ～, S ＋ V", ex: "[Walking] in the park, I met an old friend.", exja: "公園を歩いていて、旧友に会った。" },
        { h: "受け身の分詞構文", body: "主語が「～される」側なら、過去分詞から始める。前に付く Being はふつう省かれる。", form: "過去分詞 ～, S ＋ V", ex: "[Written] in easy English, the book is popular.", exja: "やさしい英語で書かれているので、その本は人気だ。" },
        { h: "否定と完了の形", body: "否定は not を分詞の前に置く。主節より前のことは Having ＋ 過去分詞で表す。", form: "Not -ing / Having p.p. ～, S ＋ V", ex: "[Not knowing] what to say, I kept silent.", exja: "何と言えばいいかわからず、黙っていた。" }
      ],
      sentences: [
        { en: "[Hearing] the news, she started to cry.", ja: "その知らせを聞いて、彼女は泣き出した。", alt: ["Heard", "To hearing", "Hear"], tip: "彼女が聞く（能動）→ -ing" },
        { en: "[Seen] from the sky, the island looks like a heart.", ja: "空から見ると、その島はハートのように見える。", alt: ["Seeing", "See", "Saw"], tip: "島は見られる側→過去分詞" },
        { en: "[Feeling] tired, I went to bed early.", ja: "疲れていたので、早く寝た。", alt: ["Felt", "Feel", "To feeling"], tip: "理由を表す分詞構文" },
        { en: "[Not having] enough money, he couldn't buy the bike.", ja: "お金が足りなかったので、彼は自転車を買えなかった。", alt: ["Not have", "No having", "Don't having"], tip: "否定は not を分詞の前に" },
        { en: "[Having finished] my homework, I watched TV.", ja: "宿題を終えてから、テレビを見た。", alt: ["Having finish", "Had finished", "Have finished"], tip: "主節より前→ Having p.p." },
        { en: "He sat on the sofa, [reading] a magazine.", ja: "彼は雑誌を読みながらソファに座っていた。", alt: ["read", "reads", "to reading"], tip: "同時に起きること→ , -ing" }
      ],
      summary: ["-ing で始めて接続詞・主語を省く", "受け身なら過去分詞から始める", "前のことは Having p.p."]
    },
    {
      id: "c2-u06", title: "関係副詞と非制限用法", en: "Relative Adverbs", tag: "文法",
      goal: "場所・時・理由を関係副詞で説明できる",
      points: [
        { h: "where / when で場所・時", body: "関係副詞 where は場所、when は時を表す名詞を後ろから説明する。in which や on which に言いかえられる。", form: "場所 ＋ where S V / 時 ＋ when S V", ex: "This is the town [where] I was born.", exja: "ここは私が生まれた町だ。" },
        { h: "why と how", body: "the reason why ～ は「～する理由」。how は「～する方法」だが、the way how とは言わない。the way か how のどちらかを使う。", form: "the reason why S V / how S V", ex: "Tell me the reason [why] you were late.", exja: "遅れた理由を教えて。" },
        { h: "コンマ付き＝補足説明", body: "関係詞の前にコンマがあると、前の名詞に情報を付け足す非制限用法。that は使えない。「そして～」と訳す。", form: "名詞, which / who ～", ex: "I have a brother, [who] lives in Kyoto.", exja: "私には兄がいて、京都に住んでいる。" }
      ],
      sentences: [
        { en: "I remember the day [when] we first met.", ja: "私たちが初めて会った日を覚えている。", alt: ["which", "where", "what"], tip: "時を表す名詞＋ when" },
        { en: "This is the park [where] I often play tennis.", ja: "ここは私がよくテニスをする公園だ。", alt: ["which", "when", "what"], tip: "場所を表す名詞＋ where" },
        { en: "That is [why] I like this song.", ja: "そういうわけで私はこの歌が好きだ。", alt: ["which", "what", "the way why"], tip: "That is why ～＝だから～" },
        { en: "This is [how] I learned to swim.", ja: "このようにして私は泳げるようになった。", alt: ["the way how", "which", "what"], tip: "the way how は使わない" },
        { en: "He said nothing, [which] made her angry.", ja: "彼は何も言わず、そのことが彼女を怒らせた。", alt: ["that", "what", "who"], tip: ", which は前の文全体も指せる" },
        { en: "I met Ken, [who] told me about the festival.", ja: "ケンに会い、彼が祭りのことを教えてくれた。", alt: ["that", "which", "what"], tip: "コンマの後ろに that は使えない" }
      ],
      summary: ["where＝場所、when＝時", "the way か how（the way how×）", "コンマ＋which / who＝補足説明"]
    },
    {
      id: "c2-u07", title: "話法と時制の一致", en: "Reported Speech", tag: "文法",
      goal: "人が言ったことを、時制をそろえて伝えられる",
      points: [
        { h: "時制の一致", body: "主節が過去なら、that 節の動詞も一つ過去にずらす。is → was、will → would、過去形 → 過去完了。", form: "S said (that) S 過去形", ex: "She said that she [was] busy.", exja: "彼女は忙しいと言った。" },
        { h: "直接話法→間接話法", body: "相手の言葉を自分の言葉で伝え直す。人称（I→he など）、時制、時や場所の言葉（now→then など）も変える。", form: "say to 人 → tell 人", ex: "He told me that he [would] call me later.", exja: "彼は後で私に電話すると言った。" },
        { h: "疑問文・命令文を伝える", body: "疑問文は ask ＋ if / 疑問詞 ＋ S V の語順。命令文は tell ＋ 人 ＋ to 不定詞にする。", form: "ask 人 if S V / tell 人 to ～", ex: "She asked me [if] I was hungry.", exja: "彼女は私におなかがすいているか尋ねた。" }
      ],
      sentences: [
        { en: "He said that he [was] tired.", ja: "彼は疲れていると言った。", alt: ["be", "were", "being"], tip: "said（過去）に合わせて was" },
        { en: "I thought she [would] come to the party.", ja: "彼女はパーティーに来ると思っていた。", alt: ["will", "is", "does"], tip: "will → would にずらす" },
        { en: "She told me that she [had lost] her key.", ja: "彼女はかぎをなくしたと私に言った。", alt: ["has lost", "have lost", "had lose"], tip: "言ったより前→過去完了" },
        { en: "My mother told me [to clean] my room.", ja: "母は私に部屋をそうじするように言った。", alt: ["clean", "cleaning", "that clean"], tip: "命令文→ tell 人 to ～" },
        { en: "He asked me [where] I lived.", ja: "彼は私にどこに住んでいるか尋ねた。", alt: ["where did", "where do", "that where"], tip: "疑問詞の後ろは S V の語順" },
        { en: "The teacher said that the earth [goes] around the sun.", ja: "先生は地球は太陽のまわりを回っていると言った。", alt: ["go", "going", "is go"], tip: "変わらない事実は現在形のまま" }
      ],
      summary: ["主節が過去→ that 節も過去へ", "疑問文は ask if / 疑問詞＋S V", "命令文は tell 人 to ～"]
    },
    {
      id: "c2-u08", title: "強調・倒置", en: "Emphasis and Inversion", tag: "文法",
      goal: "大事な部分を強調したり、倒置で強めたりできる",
      points: [
        { h: "It is ～ that の強調", body: "強めたい語句を It is と that の間にはさむ。強める語句が人なら、that の代わりに who も使える。", form: "It is ＋ 強調する語句 ＋ that ～", ex: "It was Tom [that] broke the window.", exja: "窓を割ったのはトムだった。" },
        { h: "do で動詞を強調", body: "動詞の前に do / does / did を置くと「本当に～する」と強調できる。後ろの動詞は原形にする。", form: "S ＋ do / does / did ＋ 原形", ex: "I [did] call you yesterday.", exja: "昨日本当にあなたに電話したんだ。" },
        { h: "否定語が前→倒置", body: "Never や Little などの否定語を文頭に出すと、後ろは疑問文と同じ語順（倒置）になる。", form: "Never ＋ have / do ＋ S ＋ V", ex: "Never [have I] seen such a beautiful view.", exja: "こんなに美しい景色は見たことがない。" }
      ],
      sentences: [
        { en: "It was in Kyoto [that] I first met her.", ja: "私が初めて彼女に会ったのは京都でだった。", alt: ["which", "what", "where it"], tip: "It was ～ that で場所を強調" },
        { en: "It is you [who] are wrong.", ja: "まちがっているのはあなただ。", alt: ["which", "whom", "what"], tip: "人を強調するときは who も可" },
        { en: "She [does] love her dog.", ja: "彼女は本当に犬が大好きだ。", alt: ["do", "is", "doing"], tip: "主語が3人称単数→ does ＋ 原形" },
        { en: "Little [did I] dream that I would win.", ja: "優勝するとは夢にも思わなかった。", alt: ["I did", "I dreamed", "do I"], tip: "否定語 Little が文頭→倒置" },
        { en: "Not only [did he] sing, but he also danced.", ja: "彼は歌っただけでなく、踊りもした。", alt: ["he did", "he", "does he"], tip: "Not only が文頭→疑問文の語順" },
        { en: "Only then [did I] realize my mistake.", ja: "その時になって初めて、自分のまちがいに気づいた。", alt: ["I did", "I", "do I"], tip: "Only ＋ 時の語句が文頭→倒置" }
      ],
      summary: ["It is ～ that で語句を強調", "do / does / did＋原形＝本当に", "否定語が文頭→疑問文の語順"]
    },
    {
      id: "c2-u09", title: "パラグラフの組み立て", en: "Paragraph Structure", tag: "表現",
      goal: "主張→理由・例→まとめの順で書ける",
      points: [
        { h: "最初に言いたいことを書く", body: "英語のパラグラフは、最初の1文（トピック・センテンス）で一番言いたいことをはっきり述べる。", form: "Topic → Supporting → Concluding", ex: "[I believe that] school uniforms are useful.", exja: "制服は役に立つと私は考える。" },
        { h: "理由と例で支える", body: "次に、理由や具体例でトピックを支える（サポーティング）。First, Second, For example で順番を示す。", form: "First, ～. Second, ～. For example, ～.", ex: "[First], uniforms save students time.", exja: "第一に、制服は生徒の時間を節約する。" },
        { h: "最後にまとめる", body: "最後の1文（コンクルーディング）で、言いたいことを別の言葉でくり返して締めくくる。", form: "For these reasons, / In conclusion, ～", ex: "[For these reasons], I support school uniforms.", exja: "これらの理由から、私は制服に賛成だ。" }
      ],
      sentences: [
        { en: "[I believe that] reading books is important.", ja: "私は本を読むことは大切だと考える。", alt: ["I believing that", "I am believe that", "I believe to"], tip: "最初の1文で主張を言う" },
        { en: "[First], reading gives us new knowledge.", ja: "第一に、読書は私たちに新しい知識を与える。", alt: ["Firstly of all", "At first of", "The first"], tip: "First, で1つ目の理由" },
        { en: "[Second], it helps us understand other people.", ja: "第二に、他の人を理解するのに役立つ。", alt: ["Two", "Secondary", "The second of"], tip: "Second, で2つ目の理由" },
        { en: "[For example], I learned about history from novels.", ja: "たとえば、私は小説から歴史について学んだ。", alt: ["For examples", "By example", "Example for"], tip: "For example, で具体例" },
        { en: "[In addition], reading can reduce stress.", ja: "さらに、読書はストレスを減らすことができる。", alt: ["In addition to", "Addition", "In add"], tip: "In addition, で情報を足す" },
        { en: "[For these reasons], I think everyone should read more.", ja: "これらの理由から、みんなもっと本を読むべきだと思う。", alt: ["By these reason", "For this reasons", "Because these reasons"], tip: "まとめの1文で主張をくり返す" }
      ],
      summary: ["最初の1文で主張をはっきり言う", "First / Second / For example", "For these reasons で締めくくる"]
    },
    {
      id: "c2-u10", title: "賛成・反対を述べる", en: "Agreeing and Disagreeing", tag: "表現",
      goal: "立場と理由をはっきり示して意見を言える",
      points: [
        { h: "立場をはっきり言う", body: "まず賛成か反対かを最初に言う。I agree with ～ / I disagree with ～ のあとに、意見や考えを続ける。", form: "I agree / disagree with ＋ 意見", ex: "I [agree with] this idea.", exja: "私はこの考えに賛成だ。" },
        { h: "理由をつなげる", body: "立場を言ったら必ず理由を言う。because ＋ S V、または This is because ～ で理由を説明する。", form: "～. This is because S V.", ex: "[This is because] it saves energy.", exja: "なぜならそれはエネルギーを節約するからだ。" },
        { h: "相手を認めてから反論", body: "I see your point, but ～ のように、相手の意見を一度認めてから反対すると、ていねいで説得力が増す。", form: "I see your point, but ～", ex: "[I see your point], but I have a different opinion.", exja: "言いたいことはわかるが、私は違う意見だ。" }
      ],
      sentences: [
        { en: "I [agree with] the plan to start school later.", ja: "私は授業の開始を遅らせる案に賛成だ。", alt: ["agree to with", "am agree with", "agreeing with"], tip: "agree with ＋ 意見・人" },
        { en: "I [disagree with] the idea of banning phones.", ja: "私は携帯電話を禁止するという考えに反対だ。", alt: ["disagree to", "am disagree with", "not agree with"], tip: "disagree with ＋ 意見" },
        { en: "I'm [in favor of] the new rule.", ja: "私は新しい規則に賛成だ。", alt: ["in favor to", "favor of", "on favor of"], tip: "be in favor of ～＝～に賛成" },
        { en: "I'm [against] using plastic bags.", ja: "私はレジ袋を使うことに反対だ。", alt: ["against to", "opposite", "oppose"], tip: "be against ～＝～に反対" },
        { en: "[This is because] it is bad for the environment.", ja: "なぜなら、それは環境に悪いからだ。", alt: ["This is why because", "Because of", "That because"], tip: "This is because S V で理由" },
        { en: "[I see your point], but I still think it's too expensive.", ja: "言いたいことはわかるが、それでも高すぎると思う。", alt: ["I look your point", "I see your pointing", "I watch your point"], tip: "相手を認めてから but で反論" }
      ],
      summary: ["最初に agree / disagree で立場", "This is because ～で理由", "I see your point, but で反論"]
    },
    {
      id: "c2-u11", title: "比べる・対比する", en: "Comparing and Contrasting", tag: "表現",
      goal: "2つのものの違いや共通点をわかりやすく書ける",
      points: [
        { h: "while / whereas で対比", body: "while や whereas は「～なのに対して」。2つのことを1文でくらべるときに使い、コンマで区切る。", form: "S V, while S V", ex: "I like dogs, [while] my sister likes cats.", exja: "私は犬が好きだが、妹はねこが好きだ。" },
        { h: "文をまたいで対比", body: "前の文と反対の内容を次の文で言うときは、On the other hand, ～ を文頭に置く。", form: "～. On the other hand, ～.", ex: "Trains are fast. [On the other hand], buses are cheap.", exja: "電車は速い。一方、バスは安い。" },
        { h: "compared with で比較", body: "compared with ～ は「～とくらべると」。似ている点を言うときは Similarly, や in the same way を使う。", form: "Compared with A, B is ～.", ex: "[Compared with] last year, it is warmer this year.", exja: "去年とくらべると、今年は暖かい。" }
      ],
      sentences: [
        { en: "Tom is quiet, [while] his brother is very active.", ja: "トムはおとなしいが、彼の兄はとても活発だ。", alt: ["during", "since then", "but while"], tip: "while＝～なのに対して" },
        { en: "Some people like summer, [whereas] others prefer winter.", ja: "夏が好きな人もいれば、冬のほうが好きな人もいる。", alt: ["where", "whatever", "whether"], tip: "whereas＝一方では" },
        { en: "City life is convenient. [On the other hand], it is noisy.", ja: "都会の生活は便利だ。一方で、うるさい。", alt: ["In the other hand", "On the other hands", "On other hand"], tip: "On the other hand, は文頭で" },
        { en: "[Compared with] Tokyo, this town is very quiet.", ja: "東京とくらべると、この町はとても静かだ。", alt: ["Compare with", "Comparing to with", "Compared"], tip: "Compared with ～＝～とくらべると" },
        { en: "Online shopping is easy. [However], we can't touch the items.", ja: "ネットの買い物は簡単だ。しかし、商品にさわれない。", alt: ["Although", "But also", "Despite"], tip: "However, ＋ 文＝しかし" },
        { en: "Japan has four seasons. [Similarly], Korea has four seasons.", ja: "日本には四季がある。同じように、韓国にも四季がある。", alt: ["Similar", "Same as", "Likely"], tip: "Similarly, ＝同じように（共通点）" }
      ],
      summary: ["while / whereas＝～なのに対して", "On the other hand＝一方で（文頭）", "compared with ～＝～とくらべると"]
    },
    {
      id: "c2-u12", title: "原因と結果", en: "Cause and Effect", tag: "表現",
      goal: "原因と結果のつながりを正しい言葉で示せる",
      points: [
        { h: "because of ＋ 名詞", body: "because の後ろには S V、because of や due to の後ろには名詞が来る。後ろの形のちがいに注意する。", form: "because S V / because of ＋ 名詞", ex: "The game was canceled [because of] the rain.", exja: "雨のため試合は中止になった。" },
        { h: "結果を示す言葉", body: "As a result, や Therefore, は「その結果」「したがって」。前の文の原因を受けて、結果を述べる。", form: "原因. As a result, 結果.", ex: "He practiced hard. [As a result], he won.", exja: "彼は一生懸命練習した。その結果、優勝した。" },
        { h: "原因が主語の文", body: "lead to ～ や cause ～ は「～につながる」「～を引き起こす」。原因を主語にして結果を述べる。", form: "原因 ＋ lead to / cause ＋ 結果", ex: "Lack of sleep can [lead to] health problems.", exja: "睡眠不足は健康問題につながることがある。" }
      ],
      sentences: [
        { en: "The train was late [because of] the heavy snow.", ja: "大雪のため電車が遅れた。", alt: ["because", "because for", "since of"], tip: "後ろが名詞→ because of" },
        { en: "The event was canceled [due to] the typhoon.", ja: "台風のためイベントは中止された。", alt: ["due", "because", "owing"], tip: "due to ＋ 名詞＝～のために" },
        { en: "I missed breakfast. [As a result], I was hungry all morning.", ja: "朝食をぬいた。その結果、午前中ずっとおなかがすいていた。", alt: ["As result", "In a result", "As the result of"], tip: "As a result, ＝その結果" },
        { en: "It was raining. [Therefore], we stayed home.", ja: "雨が降っていた。だから、私たちは家にいた。", alt: ["Because", "Although", "So that"], tip: "Therefore, ＝したがって" },
        { en: "Too much screen time can [lead to] poor sleep.", ja: "画面を見すぎると、睡眠の質が悪くなることがある。", alt: ["lead", "lead with", "leads to"], tip: "can の後ろは原形 lead to" },
        { en: "Global warming [causes] many natural disasters.", ja: "地球温暖化は多くの自然災害を引き起こす。", alt: ["causes to", "is caused", "because"], tip: "cause ＋ 結果＝～を引き起こす" }
      ],
      summary: ["because＋S V / because of＋名詞", "As a result / Therefore＝その結果", "原因 lead to / cause 結果"]
    }
  ]
});
