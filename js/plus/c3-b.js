window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

/* ===== c3-u07 問題と解決策 ===== */
window.LX.plus["c3-u07"] = {
  core: {
    ico: "🩺",
    catch: "問題と解決策は「診察→処方せん」",
    say: "まず何が悪いかを診断（problem）、次にどう治すかを処方（solution）。この順で書くと説得力が出る。",
    fig: { t: "flow", steps: ["問題", "原因", "解決策", "効果"] }
  },
  points: [
    {
      h: "問題を示す：病名をつける",
      body: "One serious problem is 〜. で問題をズバリ言う。problem は単数なので be動詞は is。",
      form: "One serious problem is 〜.",
      ex: "[One serious problem is] food waste.",
      exja: "深刻な問題の一つは食品ロスだ。",
      fig: { t: "slots", parts: [["One problem", "S"], ["is", "V"], ["food waste", "C"]], arc: [2, 0, "問題の中身"] },
      ng: { bad: "One of the serious problem is food waste.", good: "One of the serious problems is food waste.", why: "one of のあとは複数形。動詞は one に合わせて is" }
    },
    {
      h: "解決策：to＝これから向かう",
      body: "One solution is to ＋ 動詞の原形.「解決策は〜すること」。to は「これから向かう」矢印なので提案にぴったり。",
      form: "One solution is to ＋ 動詞の原形.",
      ex: "[One solution is to] use public transportation.",
      exja: "解決策の一つは公共交通機関を使うことだ。",
      ng: { bad: "One solution is use public transportation.", good: "One solution is to use public transportation.", why: "is のあとに動詞を置くときは to ＋ 原形" }
    },
    {
      h: "必要性と効果を言う",
      body: "It is necessary for 人 to 〜.「人が〜する必要がある」。効果は would help でひかえめに。",
      form: "It is necessary for 人 to 〜.",
      ex: "It is [necessary for] us to save energy.",
      exja: "私たちはエネルギーを節約する必要がある。",
      fig: { t: "slots", parts: [["It", "S"], ["is", "V"], ["necessary", "C"], ["for us", "する人"], ["to save energy", "中身"]], arc: [4, 0, "It の中身"] },
      ng: { bad: "We are necessary to save energy.", good: "It is necessary for us to save energy.", why: "necessary は人を主語にしない。It is 〜 for 人 to" }
    }
  ],
  drills: [
    { en: "One big [problem is] air pollution.", ja: "大きな問題の一つは大気汚染だ。", alt: ["problems is", "problem are", "problems are"], tip: "problem（単数）＋ is" },
    { en: "Another [problem is] the lack of doctors.", ja: "もう一つの問題は医者の不足だ。", alt: ["problems is", "problem are", "problem be"], tip: "Another ＋ 単数名詞 ＋ is" },
    { en: "One solution [is to] recycle more paper.", ja: "解決策の一つは、もっと紙をリサイクルすることだ。", alt: ["are to", "to", "is for"], tip: "solution is to ＋ 動詞の原形" },
    { en: "The best solution [is to] talk with each other.", ja: "いちばんの解決策は、話し合うことだ。", alt: ["are to", "to", "is for"], tip: "提案は is to ＋ 原形" },
    { en: "We [should save] water at home.", ja: "私たちは家で水を節約すべきだ。", alt: ["should saving", "should to save", "should saved"], tip: "should ＋ 動詞の原形" },
    { en: "The city [should build] more bike lanes.", ja: "市はもっと自転車専用レーンを作るべきだ。", alt: ["should builds", "should to build", "should built"], tip: "should のあとは原形" },
    { en: "It is [necessary for] students to sleep well.", ja: "学生はよく眠る必要がある。", alt: ["necessary of", "need for", "necessity for"], tip: "It is necessary for 人 to 〜" },
    { en: "It is [important for] us to use less plastic.", ja: "私たちはプラスチックの使用を減らすことが大切だ。", alt: ["important of", "importance for", "important at"], tip: "It is 形容詞 for 人 to 〜" },
    { en: "This idea [would help] save energy.", ja: "この考えはエネルギー節約に役立つだろう。", alt: ["would helping", "would helps", "would to help"], tip: "would ＋ 原形で ひかえめな効果" },
    { en: "Free buses [would reduce] the number of cars.", ja: "無料バスがあれば車の数が減るだろう。", alt: ["would reduces", "would reducing", "would to reduce"], tip: "would のあとは原形" },
    { en: "If we [use] reusable bags, we can cut waste.", ja: "マイバッグを使えば、ごみを減らせる。", alt: ["will use", "used will", "using"], tip: "条件の if 節は 現在形" },
    { en: "If everyone [turns off] the lights, we can save a lot of energy.", ja: "みんなが電気を消せば、多くのエネルギーを節約できる。", alt: ["turn off", "will turn off", "turning off"], tip: "everyone は単数 → turns" }
  ]
};

/* ===== c3-u08 ディベートの表現 ===== */
window.LX.plus["c3-u08"] = {
  core: {
    ico: "🎾",
    catch: "ディベートは「言葉のテニス」",
    say: "相手の球（主張）を受け、質問で確かめ、反ばくで打ち返す。人ではなく意見に向かって打つのがルール。",
    fig: { t: "flow", steps: ["立場", "理由", "質問", "反ばく", "まとめ"] }
  },
  points: [
    {
      h: "立場をはっきり言う",
      body: "最初に賛成か反対かを宣言する。agree with ＋ 意見・人。agree は動詞なので be動詞はいらない。",
      form: "We agree / disagree with 〜.",
      ex: "We [disagree with] the idea that homework is useless.",
      exja: "私たちは宿題は無駄だという考えに反対だ。",
      fig: { t: "vs", a: ["We agree with the idea.", "賛成"], b: ["We disagree with the idea.", "反対"] },
      ng: { bad: "We are agree with the idea.", good: "We agree with the idea.", why: "agree は動詞。are はいらない" }
    },
    {
      h: "質問で 相手の球を確かめる",
      body: "言葉の意味があいまいなら What do you mean by 〜? と聞く。説明を求めるなら Could you explain 〜?",
      form: "What do you mean by 〜?",
      ex: "[What do you mean by] effective?",
      exja: "「効果的」とはどういう意味ですか。",
      ng: { bad: "What do you mean with effective?", good: "What do you mean by effective?", why: "「〜で何を意味するか」は mean by" }
    },
    {
      h: "反ばく：意見を打ち返す",
      body: "I'd like to point out that 〜.「〜を指摘したい」。人を責めず、根拠を示して意見の弱点だけをつく。",
      form: "I'd like to point out that 〜.",
      ex: "I'd like to [point out] that the data is old.",
      exja: "そのデータは古いと指摘したい。",
      fig: { t: "flow", steps: ["相手の主張", "弱点", "根拠", "こちらの結論"] },
      ng: { bad: "I'd like to pointing out that the data is old.", good: "I'd like to point out that the data is old.", why: "would like to のあとは動詞の原形" }
    }
  ],
  drills: [
    { en: "We [agree with] your opinion.", ja: "私たちはあなたの意見に賛成だ。", alt: ["agree to with", "are agree with", "agreeing with"], tip: "agree with ＋ 意見・人" },
    { en: "I [disagree with] this plan.", ja: "私はこの計画に反対だ。", alt: ["disagree to with", "am disagree with", "not agree with"], tip: "disagree with ＝ 反対する" },
    { en: "We have [three reasons] for our position.", ja: "私たちの立場には3つの理由がある。", alt: ["three reason", "three of reason", "the three reason"], tip: "three のあとは複数形" },
    { en: "[Could you explain] what you mean?", ja: "どういう意味か説明していただけますか。", alt: ["Could you explaining", "Could you to explain", "Could explain you"], tip: "Could you ＋ 動詞の原形 ?" },
    { en: "[Could you give] us an example?", ja: "例を挙げていただけますか。", alt: ["Could you giving", "Could you to give", "Could give you"], tip: "Could you ＋ 原形 で ていねいに" },
    { en: "What do you [mean by] free time?", ja: "自由時間とはどういう意味ですか。", alt: ["mean of", "meaning by", "means by"], tip: "What do you mean by 〜?" },
    { en: "What do you [mean by] success?", ja: "「成功」とはどういう意味ですか。", alt: ["mean with", "meaning by", "means by"], tip: "do のあとは原形 mean" },
    { en: "Your idea is [not always] correct.", ja: "あなたの考えがいつも正しいとは限らない。", alt: ["always not", "never always", "not ever"], tip: "not always ＝ いつも〜とは限らない" },
    { en: "That is [not necessarily] true.", ja: "それが必ずしも本当とは限らない。", alt: ["necessarily not", "not necessary", "no necessarily"], tip: "not necessarily ＝ 必ずしも〜ない" },
    { en: "I'd like to [point out] a problem with this idea.", ja: "この考えの問題点を指摘したい。", alt: ["point", "pointing out", "point out of"], tip: "point out ＝ 指摘する" },
    { en: "I'd like to [point out] that phones can help learning.", ja: "スマホは学習の助けになりうると指摘したい。", alt: ["pointing out", "pointed out", "point out of"], tip: "would like to ＋ 原形" },
    { en: "We [cannot accept] their argument because it has no evidence.", ja: "証拠がないので、私たちは彼らの主張を受け入れられない。", alt: ["cannot accepting", "cannot to accept", "not can accept"], tip: "cannot ＋ 動詞の原形" }
  ]
};

/* ===== c3-u09 要約する ===== */
window.LX.plus["c3-u09"] = {
  core: {
    ico: "🍊",
    catch: "要約は「果汁しぼり」",
    say: "長い文章から皮（具体例・くわしい説明）をすてて、果汁（主張と理由）だけをしぼり出す。",
    fig: { t: "flow", steps: ["主張", "理由", "具体例→捨てる"] }
  },
  points: [
    {
      h: "まず 筆者の主張をつかむ",
      body: "要約の第一文は「何についての文章か」と「筆者の言いたいこと」。The writer argues that 〜. で言い切る。",
      form: "The writer argues that 〜.",
      ex: "[The writer argues that] sleep is important.",
      exja: "筆者は睡眠が大切だと主張している。",
      fig: { t: "slots", parts: [["The writer", "S"], ["argues", "V"], ["that S ＋ V", "O"]] },
      ng: { bad: "The writer argue that sleep is important.", good: "The writer argues that sleep is important.", why: "writer は3人称単数。argues と s を付ける" }
    },
    {
      h: "具体例はけずる・言いかえる",
      body: "具体例や数字はけずって、主張と理由だけを残す。本文をそのまま写さず、自分の言葉に言いかえる。",
      form: "主張 ＋ 理由（具体例はけずる）",
      ex: "The passage [is about] climate change.",
      exja: "この文章は気候変動についてだ。",
      fig: { t: "vs", a: ["Sleep is important.", "主張→残す"], b: ["Tom slept nine hours.", "具体例→けずる"] },
      ng: { bad: "This passage is about of climate change.", good: "This passage is about climate change.", why: "about は前置詞。of を重ねない" }
    },
    {
      h: "ひとことで しめる",
      body: "最後は In short, 〜.「要するに」や In other words, 〜.「言いかえると」で、まとめを一文に。",
      form: "In short, 〜.（ひとことで言うと）",
      ex: "[In short], we need more sleep.",
      exja: "要するに、私たちはもっと睡眠が必要だ。",
      ng: { bad: "In another words, money is not everything.", good: "In other words, money is not everything.", why: "「言いかえると」は In other words（複数形）" }
    }
  ],
  drills: [
    { en: "This article [is about] food waste.", ja: "この記事は食品ロスについてだ。", alt: ["is of", "is about of", "abouts"], tip: "is about ＝ 〜についてだ" },
    { en: "The story [is about] a brave girl.", ja: "その物語は勇敢な少女についてだ。", alt: ["is of", "are about", "is about of"], tip: "story は単数 → is about" },
    { en: "The writer [argues that] schools should start later.", ja: "筆者は学校の始業を遅くすべきだと主張している。", alt: ["argue that", "arguing that", "argues to"], tip: "argues that ＋ 文" },
    { en: "The author [claims that] reading improves our lives.", ja: "著者は読書が生活を豊かにすると主張している。", alt: ["claim that", "claiming that", "claims to that"], tip: "claims that ＝ 〜と主張する" },
    { en: "[According to] the article, sugar is bad for teeth.", ja: "記事によると、砂糖は歯に悪い。", alt: ["According", "Accordingly to", "According for"], tip: "According to ＝ 〜によると" },
    { en: "[According to] the writer, music reduces stress.", ja: "筆者によると、音楽はストレスを減らす。", alt: ["According", "Accordingly to", "According for"], tip: "According to ＋ 名詞" },
    { en: "[In short], we should waste less food.", ja: "要するに、食べ物のむだを減らすべきだ。", alt: ["In shortly", "For short", "At short"], tip: "In short ＝ 要するに" },
    { en: "[In short], friends make us happy.", ja: "要するに、友達は私たちを幸せにする。", alt: ["In shortly", "For short", "On short"], tip: "まとめの一文の合図" },
    { en: "[In other words], time is money.", ja: "言いかえると、時は金なりだ。", alt: ["In another words", "In other word", "With other words"], tip: "In other words ＝ 言いかえると" },
    { en: "[In other words], we need to change our habits.", ja: "言いかえると、私たちは習慣を変える必要がある。", alt: ["In another words", "In other word", "By other words"], tip: "words は複数形" },
    { en: "The main point is that [we should protect] the ocean.", ja: "要点は、私たちは海を守るべきだということだ。", alt: ["we should protecting", "we should to protect", "we shoulds protect"], tip: "should ＋ 動詞の原形" },
    { en: "The passage [mainly explains] why bees are important.", ja: "この文章は主に、なぜミツバチが大切なのかを説明している。", alt: ["mainly explain", "main explains", "mainly explaining"], tip: "passage は単数 → explains" }
  ]
};

/* ===== c3-u10 メールと手紙 ===== */
window.LX.plus["c3-u10"] = {
  core: {
    ico: "✉️",
    catch: "メールは「サンドイッチ」",
    say: "あいさつ（パン）→ 用件・お願い（具）→ 結び（パン）。用件は最初にズバリ。読む人の時間を大切に。",
    fig: { t: "flow", steps: ["Dear 〜,", "用件", "お願い", "結び"] }
  },
  points: [
    {
      h: "用件は 最初にズバリ",
      body: "あいさつのすぐ後に I am writing to ＋ 原形.「〜するためにメールしています」。目的が先だと相手はすぐわかる。",
      form: "Dear 〜, I am writing to ＋ 原形.",
      ex: "[I am writing to] ask about your summer program.",
      exja: "夏のプログラムについてお聞きしたく、メールしています。",
      ng: { bad: "I am writing for ask about the program.", good: "I am writing to ask about the program.", why: "目的は to ＋ 動詞の原形" }
    },
    {
      h: "お願いは クッションつきで",
      body: "Could you 〜? はていねい。I would appreciate it if 〜 はさらにていねいで「〜だとありがたい」。",
      form: "I would appreciate it if 〜.",
      ex: "[Could you] send me more information?",
      exja: "もっと情報を送っていただけますか。",
      fig: { t: "scale", left: "ふつう", right: "とてもていねい", items: [["Can you 〜?", 30], ["Could you 〜?", 65], ["I'd appreciate", 95]] },
      ng: { bad: "I would appreciate if you could help me.", good: "I would appreciate it if you could help me.", why: "appreciate のあとに it を忘れない" }
    },
    {
      h: "結びで 次につなぐ",
      body: "最後は I look forward to ＋ 〜ing.「〜を楽しみにしています」。to は前置詞なので後ろは ing 形。",
      form: "I look forward to ＋ 〜ing.",
      ex: "I look forward to [hearing] from you.",
      exja: "お返事をお待ちしています。",
      fig: { t: "vs", a: ["I look forward to seeing you.", "○ ing 形"], b: ["I look forward to see you.", "✕ 原形"] },
      ng: { bad: "I look forward to hear from you.", good: "I look forward to hearing from you.", why: "この to は前置詞。後ろは 〜ing" }
    }
  ],
  drills: [
    { en: "[Thank you for] your kind message.", ja: "ご親切なメッセージをありがとうございます。", alt: ["Thank you of", "Thanks you for", "Thank for"], tip: "Thank you for ＋ 名詞" },
    { en: "[Thank you for] inviting me to the party.", ja: "パーティーに招待してくれてありがとう。", alt: ["Thank you of", "Thanks you for", "Thank for"], tip: "Thank you for ＋ 〜ing" },
    { en: "I am [writing to] apply for the volunteer program.", ja: "ボランティアプログラムに応募するためにメールしています。", alt: ["writing for", "write to", "written to"], tip: "I am writing to ＋ 原形" },
    { en: "I am [writing to] thank you for your help.", ja: "お手伝いのお礼を言いたくてメールしています。", alt: ["writing for", "write to", "written to"], tip: "用件は最初に" },
    { en: "[Could you] send me the schedule?", ja: "予定表を送っていただけますか。", alt: ["Could you to", "Could", "Could you please to"], tip: "Could you ＋ 原形 ?" },
    { en: "[Could you] check my essay by Friday?", ja: "金曜日までに私の作文を見ていただけますか。", alt: ["Could you to", "Could", "Could you please to"], tip: "ていねいなお願い" },
    { en: "I would [appreciate it if] you could reply soon.", ja: "早めにお返事いただけるとありがたいです。", alt: ["appreciate if it", "appreciating it if", "appreciate it that"], tip: "appreciate it if ＋ could" },
    { en: "I would [appreciate it if] you could call me.", ja: "お電話いただけるとありがたいです。", alt: ["appreciate if it", "appreciating it if", "appreciate it that"], tip: "it を忘れない" },
    { en: "I have [attached] a photo of the poster.", ja: "ポスターの写真を添付しました。", alt: ["attach", "attaching", "been attached"], tip: "have ＋ 過去分詞 ＝ 添付しました" },
    { en: "Please [find attached] my report.", ja: "報告書を添付しましたのでご確認ください。", alt: ["find attaching", "finding attached", "found attached"], tip: "find attached ＝ 添付をご覧ください" },
    { en: "I look forward to [hearing] from you soon.", ja: "近いうちにお返事をいただけるのを楽しみにしています。", alt: ["hear", "heard", "be heard"], tip: "look forward to ＋ 〜ing" },
    { en: "I look forward to [working] with you this summer.", ja: "この夏、一緒に活動できるのを楽しみにしています。", alt: ["work", "worked", "be worked"], tip: "to のあとは 〜ing" }
  ]
};

/* ===== c3-u11 ひかえめに言う ===== */
window.LX.plus["c3-u11"] = {
  core: {
    ico: "🌫️",
    catch: "ひかえめ表現は「言葉のクッション」",
    say: "言い切ると反論されやすい。seem・tend to・may で角を丸めると、正確で大人な英語になる。",
    fig: { t: "scale", left: "たぶん", right: "ほぼ確実", items: [["might", 25], ["may", 40], ["probably", 70], ["is likely to", 78], ["will", 92]] }
  },
  points: [
    {
      h: "言い切らずに「〜らしい」",
      body: "It seems that 〜.「〜のようだ」。様子から判断するときに使う。S seem(s) to 〜. と書きかえもできる。",
      form: "It seems that 〜.＝S seem to 〜.",
      ex: "[It seems that] he is busy today.",
      exja: "彼は今日忙しいようだ。",
      fig: { t: "vs", a: ["It seems that he is busy.", "that ＋ 文"], b: ["He seems to be busy.", "seem to ＋ 原形"] },
      ng: { bad: "It is seem that he is busy.", good: "It seems that he is busy.", why: "seem は一般動詞。is はいらない" }
    },
    {
      h: "「〜しがち」で 傾向を言う",
      body: "tend to ＋ 原形「〜する傾向がある」。全員ではなく「多くの場合」と言えるので、データの話で大活躍。",
      form: "S tend(s) to ＋ 動詞の原形.",
      ex: "Teenagers [tend to] stay up late.",
      exja: "10代は夜ふかしをしがちだ。",
      ng: { bad: "Teenagers are tend to stay up late.", good: "Teenagers tend to stay up late.", why: "tend は一般動詞。are はいらない" }
    },
    {
      h: "自信の度合いで 言葉をえらぶ",
      body: "may・might は五分五分、probably は7割、will はほぼ確実。どれくらい自信があるかで選ぶ。",
      form: "S may / might ＋ 動詞の原形.",
      ex: "This [may] be a good solution.",
      exja: "これは良い解決策かもしれない。",
      fig: { t: "scale", left: "五分五分", right: "ほぼ確実", items: [["might", 35], ["may", 45], ["probably", 70], ["will", 92]] },
      ng: { bad: "This may is a good solution.", good: "This may be a good solution.", why: "助動詞のあとは動詞の原形 be" }
    }
  ],
  drills: [
    { en: "[It seems that] the store is closed.", ja: "その店は閉まっているようだ。", alt: ["It seems to", "It is seem that", "It seeming that"], tip: "It seems that ＋ 文" },
    { en: "[It seems that] nobody knows the answer.", ja: "だれも答えを知らないようだ。", alt: ["It seems to", "It is seem that", "It seeming that"], tip: "様子から「〜のようだ」" },
    { en: "He [seems to be] tired today.", ja: "彼は今日疲れているようだ。", alt: ["seems be", "is seem to be", "seem to be"], tip: "S seems to be 〜" },
    { en: "Young people [tend to] use social media a lot.", ja: "若い人はSNSをよく使う傾向がある。", alt: ["tend", "tend for", "are tend to"], tip: "tend to ＋ 原形" },
    { en: "Students [tend to] study harder before tests.", ja: "生徒はテスト前に一生懸命勉強しがちだ。", alt: ["tend", "tends to", "are tend to"], tip: "主語が複数 → tend" },
    { en: "Prices [may] go up next year.", ja: "来年、物価が上がるかもしれない。", alt: ["may to", "mays", "are may"], tip: "may ＋ 原形" },
    { en: "This plan [might not] work well.", ja: "この計画はうまくいかないかもしれない。", alt: ["might not to", "not might", "might no"], tip: "might not ＋ 原形" },
    { en: "It will [probably] be sunny tomorrow.", ja: "明日はたぶん晴れるだろう。", alt: ["probable", "probability", "be probably"], tip: "will probably ＋ 原形" },
    { en: "[Most] people agree with this idea.", ja: "ほとんどの人がこの考えに賛成している。", alt: ["Most of", "Almost", "The most"], tip: "Most ＋ 名詞 ＝ ほとんどの" },
    { en: "[Many] experts believe that sleep is important.", ja: "多くの専門家が、睡眠は大切だと考えている。", alt: ["Much", "Many of", "A lot"], tip: "数えられる名詞には many" },
    { en: "Online classes [are likely to] become more common.", ja: "オンライン授業はもっと一般的になりそうだ。", alt: ["are likely", "likes to", "are like to"], tip: "be likely to ＝ 〜しそうだ" },
    { en: "Robots [are likely to] change the way we work.", ja: "ロボットは私たちの働き方を変えそうだ。", alt: ["are likely", "is likely to", "likes to"], tip: "主語が複数 → are likely to" }
  ]
};

/* ===== c3-u12 定義と具体例 ===== */
window.LX.plus["c3-u12"] = {
  core: {
    ico: "🔍",
    catch: "定義は「ラベル」、具体例は「中身を見せる」",
    say: "まず、ことばにラベルをはる（refers to）。次に中身を見せる（such as / for example）。抽象→具体。",
    fig: { t: "flow", steps: ["ことば", "定義", "具体例"] }
  },
  points: [
    {
      h: "定義＝ラベルをはる",
      body: "X refers to 〜.「X とは〜のことだ」。X means 〜. も同じ。主語が単数なら refers の s を忘れずに。",
      form: "X refers to 〜. ／ X means 〜.",
      ex: "Recycling [refers to] using things again.",
      exja: "リサイクルとは、物を再び使うことだ。",
      fig: { t: "slots", parts: [["Recycling", "ことば"], ["refers to", "＝"], ["using things again", "定義"]] },
      ng: { bad: "Recycling is refer to using things again.", good: "Recycling refers to using things again.", why: "refer は一般動詞。is はいらない" }
    },
    {
      h: "such as＝中身のサンプル",
      body: "名詞 ＋ such as A and B「AやBのような〜」。名詞のすぐ後ろに例を並べる。文ではなく名詞を並べる。",
      form: "名詞 ＋ such as A, B, and C",
      ex: "I like fruits [such as] apples and grapes.",
      exja: "私はリンゴやブドウのような果物が好きだ。",
      fig: { t: "slots", parts: [["fruits", "名詞"], ["such as", "M"], ["apples and grapes", "具体例"]], arc: [2, 0, "中身の例"] },
      ng: { bad: "I like fruits such apples and grapes.", good: "I like fruits such as apples and grapes.", why: "such だけでは ✕。such as でセット" }
    },
    {
      h: "for example＝文で見せる",
      body: "For example, ＋ 文.「たとえば〜」。such as は名詞を並べ、for example は文を続ける、と使い分ける。",
      form: "For example, S ＋ V.",
      ex: "[For instance], many people use e-books.",
      exja: "たとえば、多くの人が電子書籍を使っている。",
      fig: { t: "vs", a: ["sports such as tennis", "名詞を並べる"], b: ["For example, I play tennis.", "文を続ける"] },
      ng: { bad: "For examples, I play tennis.", good: "For example, I play tennis.", why: "For example は s を付けない決まり文句" }
    }
  ],
  drills: [
    { en: "A librarian is a person who [works in] a library.", ja: "司書とは図書館で働く人のことだ。", alt: ["work in", "working in", "is work in"], tip: "a person who ＋ 3単現の動詞" },
    { en: "A tourist is a person who [travels for] fun.", ja: "観光客とは楽しみのために旅行する人のことだ。", alt: ["travel for", "traveling for", "is travel for"], tip: "who のあとの動詞は person に合わせる" },
    { en: "Climate change [refers to] long-term changes in weather.", ja: "気候変動とは、天候の長期的な変化のことだ。", alt: ["refers", "refers of", "is referred"], tip: "refers to ＝ 〜のことだ" },
    { en: "Social media [refers to] websites for sharing information.", ja: "ソーシャルメディアとは、情報を共有するためのウェブサイトのことだ。", alt: ["refers of", "refers", "is referred"], tip: "refer to でセット" },
    { en: "The word huge [means] very big.", ja: "huge という語は、とても大きいという意味だ。", alt: ["is mean", "meaning", "means of"], tip: "X means 〜 ＝ X は〜という意味" },
    { en: "Hanami [means] viewing cherry blossoms.", ja: "花見とは桜を見ることだ。", alt: ["is mean", "meaning", "means of"], tip: "mean は一般動詞" },
    { en: "We need vegetables [such as] carrots and onions.", ja: "私たちにはニンジンや玉ねぎのような野菜が必要だ。", alt: ["such", "as such", "so as"], tip: "名詞 ＋ such as A and B" },
    { en: "I want to visit cities [such as] Paris and Rome.", ja: "私はパリやローマのような都市を訪れたい。", alt: ["such", "so as", "such like"], tip: "such as ＋ 名詞を並べる" },
    { en: "[For example], many students ride bikes to school.", ja: "たとえば、多くの生徒が自転車で通学している。", alt: ["For examples", "By example", "As example"], tip: "For example, ＋ 文" },
    { en: "[For example], you can join a volunteer club.", ja: "たとえば、ボランティア部に入ることができる。", alt: ["For examples", "By example", "In example"], tip: "文の頭に置いてコンマ" },
    { en: "[For instance], my town has a recycling center.", ja: "たとえば、私の町にはリサイクルセンターがある。", alt: ["For instances", "In instance", "By instance"], tip: "For instance ＝ For example" },
    { en: "[For instance], some people work from home.", ja: "たとえば、在宅で働く人もいる。", alt: ["For instances", "In instance", "As instance"], tip: "instance に s は付けない" }
  ]
};
