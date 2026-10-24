window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

/* ===== c3-u07 問題と解決策 ===== */
window.LX.plus["c3-u07"] = {
  core: {
    ico: "🩺",
    catch: "問題と解決策は「診察→処方せん」",
    say: "まず何が悪いかを診断（problem）、次にどう治すかを処方（solution）。この順で書くと説得力が出る。",
    fig: {"t": "pic", "items": [{"e": "🤒", "x": 12, "y": 55, "l": "問題"}, {"e": "🩺", "x": 37, "y": 55, "l": "原因"}, {"e": "💊", "x": 63, "y": 55, "l": "解決策"}, {"e": "😊", "x": 88, "y": 55, "l": "効果"}], "arrows": [[0, 1, ""], [1, 2, ""], [2, 3, ""]], "cap": "診察（問題・原因）→ 処方（解決策・効果）"}
  },
  points: [
    {
      h: "問題を示す：病名をつける",
      body: "One serious problem is 〜. で問題をズバリ言う。problem は単数なので be動詞は is。",
      form: "One serious problem is 〜.",
      ex: "[One serious problem is] food waste.",
      exja: "深刻な問題の一つは食品ロスだ。",
      fig: { t: "slots", parts: [["One problem", "S"], ["is", "V"], ["food waste", "C"]], arc: [2, 0, "問題の中身"] },
      ng: { bad: "One of the serious problem is food waste.", good: "One of the serious problems is food waste.", why: "one of のあとは複数形。動詞は one に合わせて is" },
      why: "主語は One serious problem（問題の一つ）で、1つの話。だから be動詞は is。「問題＝中身」のイコールの文になる。",
      easy: "① まず「深刻な問題の一つは」と言う。② 1つなので is。③ 最後に問題の中身（food waste）を置く。「AはB」と同じ形。"
    },
    {
      h: "解決策：to＝これから向かう",
      body: "One solution is to ＋ 動詞の原形.「解決策は〜すること」。to は「これから向かう」矢印なので提案にぴったり。",
      form: "One solution is to ＋ 動詞の原形.",
      ex: "[One solution is to] use public transportation.",
      exja: "解決策の一つは公共交通機関を使うことだ。",
      fig: {"t": "pic", "items": [{"e": "🚗", "x": 15, "y": 58, "l": "problem"}, {"e": "💡", "x": 50, "y": 50, "l": "solution"}, {"e": "🚌", "x": 85, "y": 58, "l": "use buses"}], "arrows": [[0, 1, "One solution"], [1, 2, "is to 〜"]], "cap": "is to ＋ 動詞＝これから向かう解決"},
      ng: { bad: "One solution is use public transportation.", good: "One solution is to use public transportation.", why: "is のあとに動詞を置くときは to ＋ 原形" },
      why: "is のあとに動詞をそのまま置けない。to をつけて「〜すること」という名詞のかたまりにすると、解決策＝〜すること になる。",
      easy: "① 解決策は「やること」。② 動詞は to をつけると「〜すること」に変身。③ One solution is to ＋ やること、で完成。"
    },
    {
      h: "必要性と効果を言う",
      body: "It is necessary for 人 to 〜.「人が〜する必要がある」。効果は would help でひかえめに。",
      form: "It is necessary for 人 to 〜.",
      ex: "It is [necessary for] us to save energy.",
      exja: "私たちはエネルギーを節約する必要がある。",
      fig: { t: "slots", parts: [["It", "S"], ["is", "V"], ["necessary", "C"], ["for us", "する人"], ["to save energy", "中身"]], arc: [4, 0, "It の中身"] },
      ng: { bad: "We are necessary to save energy.", good: "It is necessary for us to save energy.", why: "necessary は人を主語にしない。It is 〜 for 人 to" },
      why: "It は仮の主語で、本当の主語は to 以下。だれがするかは for 人 で示す。would は「もし実行したら」の気持ちで、効果を言い切らずに伝える。",
      easy: "① It is necessary（必要だ）とまず言う。② だれが？→ for us。③ 何を？→ to save energy。順番に足していけばOK。"
    }
  ],
  drills: [
    { en: "One big [problem is] air pollution.", ja: "大きな問題の一つは大気汚染だ。", alt: ["problems is", "problem are", "problems are"], tip: "problem（単数）＋ is", why: "主語 One big problem は単数→ is。problems・are はどちらも数が合わない。", p: 0 },
    { en: "Another [problem is] the lack of doctors.", ja: "もう一つの問題は医者の不足だ。", alt: ["problems is", "problem are", "problem be"], tip: "Another ＋ 単数名詞 ＋ is", why: "Another は「もう1つの」で単数→ problem is。be は原形なので主語の後に置けない。", p: 0 },
    { en: "One solution [is to] recycle more paper.", ja: "解決策の一つは、もっと紙をリサイクルすることだ。", alt: ["are to", "to", "is for"], tip: "solution is to ＋ 動詞の原形", why: "is to ＋ 原形で解決策の中身。to だけでは動詞がない。are は単数の solution と合わない。", p: 1 },
    { en: "The best solution [is to] talk with each other.", ja: "いちばんの解決策は、話し合うことだ。", alt: ["are to", "to", "is for"], tip: "提案は is to ＋ 原形", why: "The best solution も単数→ is to。is for では後ろに動詞の原形をつなげない。", p: 1 },
    { en: "We [should save] water at home.", ja: "私たちは家で水を節約すべきだ。", alt: ["should saving", "should to save", "should saved"], tip: "should ＋ 動詞の原形", why: "should ＋ 原形 save。saving・to save・saved は should のあとに置けない。", p: 1 },
    { en: "The city [should build] more bike lanes.", ja: "市はもっと自転車専用レーンを作るべきだ。", alt: ["should builds", "should to build", "should built"], tip: "should のあとは原形", why: "should のあとは原形 build。三単現の s も過去形も付けない。", p: 1 },
    { en: "It is [necessary for] students to sleep well.", ja: "学生はよく眠る必要がある。", alt: ["necessary of", "need for", "necessity for"], tip: "It is necessary for 人 to 〜", why: "人を表すのは for 人。of は使わず、need は動詞なので It is の後に合わない。", p: 2 },
    { en: "It is [important for] us to use less plastic.", ja: "私たちはプラスチックの使用を減らすことが大切だ。", alt: ["important of", "importance for", "important at"], tip: "It is 形容詞 for 人 to 〜", why: "It is important for 人 to 〜。importance は名詞、of・at は合わない。", p: 2 },
    { en: "This idea [would help] save energy.", ja: "この考えはエネルギー節約に役立つだろう。", alt: ["would helping", "would helps", "would to help"], tip: "would ＋ 原形で ひかえめな効果", why: "would のあとは原形 help。その後の save も原形。helps・helping は形が合わない。", p: 2 },
    { en: "Free buses [would reduce] the number of cars.", ja: "無料バスがあれば車の数が減るだろう。", alt: ["would reduces", "would reducing", "would to reduce"], tip: "would のあとは原形", why: "would ＋ 原形 reduce。would のあとに s・ing・to は付かない。", p: 2 },
    { en: "If we [use] reusable bags, we can cut waste.", ja: "マイバッグを使えば、ごみを減らせる。", alt: ["will use", "used will", "using"], tip: "条件の if 節は 現在形", why: "条件の if 節は現在形 use。will use は使わない。using では文の動詞がない。", p: 2 },
    { en: "If everyone [turns off] the lights, we can save a lot of energy.", ja: "みんなが電気を消せば、多くのエネルギーを節約できる。", alt: ["turn off", "will turn off", "turning off"], tip: "everyone は単数 → turns", why: "everyone は単数→ turns off。if 節に will は使わず、turning は動詞でない。", p: 2 },
    {"en": "One serious [problem is] traffic noise.", "ja": "深刻な問題の一つは交通の騒音だ。", "alt": ["problems is", "problem are", "problems are"], "tip": "One ＋ 単数 problem ＋ is", "why": "One のあとは単数 problem、動詞は is。problems・are は数が合わない。", "p": 0},
    {"en": "A big [problem is] the high cost of housing.", "ja": "大きな問題は住宅費の高さだ。", "alt": ["problems is", "problem are", "problems are"], "tip": "A big problem is 〜", "why": "A big problem は単数→ is。複数形 problems や are は合わない。", "p": 0},
    {"en": "The main [problem is] that we waste food.", "ja": "主な問題は、私たちが食べ物を無駄にしていることだ。", "alt": ["problems is", "problem are", "problem be"], "tip": "The main problem is that 〜", "why": "主語は The main problem（単数）→ is。be は原形で文の動詞にならない。", "p": 0},
    {"en": "One solution [is to] grow more vegetables.", "ja": "解決策の一つは、もっと野菜を育てることだ。", "alt": ["are to", "to", "is for"], "tip": "solution is to ＋ 原形", "why": "One solution は単数→ is to ＋原形。are は数がずれ、to だけでは動詞がない。", "p": 1},
    {"en": "A good solution [is to] share cars with neighbors.", "ja": "良い解決策は、近所の人と車を共有することだ。", "alt": ["are to", "to", "is for"], "tip": "is to ＋ 動詞の原形", "why": "解決策＝これから向かう行動→ is to ＋原形。is for では後ろの share とつながらない。", "p": 1},
    {"en": "Schools [should start] recycling programs.", "ja": "学校はリサイクルの取り組みを始めるべきだ。", "alt": ["should starting", "should to start", "should started"], "tip": "should ＋ 動詞の原形", "why": "should のあとは原形 start。-ing・to・過去形は助動詞のあとに置けない。", "p": 1},
    {"en": "People [should eat] less meat.", "ja": "人々は肉を食べる量を減らすべきだ。", "alt": ["should eating", "should to eat", "should ate"], "tip": "should ＋ 原形で提案", "why": "提案の should ＋原形 eat。eating・to eat・ate は should に続かない。", "p": 1},
    {"en": "It is [necessary for] us to protect forests.", "ja": "私たちは森林を守る必要がある。", "alt": ["necessary of", "need for", "necessity for"], "tip": "It is necessary for 人 to 〜", "why": "It is ＋形容詞 necessary ＋ for 人。of は使わず、need・necessity は名詞。", "p": 2},
    {"en": "It is [important for] children to play outside.", "ja": "子どもが外で遊ぶことは大切だ。", "alt": ["important of", "importance for", "important at"], "tip": "It is important for 人 to 〜", "why": "する人は for で示す。importance は名詞で is の後に合わず、of・at は使わない。", "p": 2},
    {"en": "This plan [would help] reduce food waste.", "ja": "この計画は食品ロスを減らすのに役立つだろう。", "alt": ["would helping", "would helps", "would to help"], "tip": "would ＋ 原形で効果を言う", "why": "would のあとは原形 help。-ing・3単現の s・to は付けない。", "p": 2},
    {"en": "More trees [would make] the city cooler.", "ja": "木が増えれば、街はもっと涼しくなるだろう。", "alt": ["would makes", "would making", "would to make"], "tip": "would ＋ 原形 ＋ O ＋ C", "why": "効果の予想は would ＋原形 make。makes・making・to make は不可。", "p": 2},
    {"en": "If we [plant] more trees, the air will be cleaner.", "ja": "もっと木を植えれば、空気はきれいになるだろう。", "alt": ["will plant", "planted will", "planting"], "tip": "If ＋ 現在形で条件", "why": "条件を表す If 節は未来でも現在形 plant。will plant は使わず、planting では動詞がない。", "p": 2}
  ],
  swhy: [
    { why: "主語 One serious problem は単数→ is。problems・are はどちらも数が合わない。", p: 0 },
    { why: "is to ＋ 原形で「〜すること」。to がないと動詞が2つ並ぶ。are は単数と合わない。", p: 1 },
    { why: "should のあとは必ず動詞の原形。to をつけたり ing・過去形にしたりはしない。", p: 1 },
    { why: "necessary のあと「だれが」は for 人。of・need は使わず、necessity は名詞。", p: 2 },
    { why: "would のあとは原形 help。helps・helping・to help は would と合わない。", p: 2 },
    { why: "条件の if 節は未来のことでも現在形 work。will は使わない。working では文の動詞がない。", p: 2 }
  ]
};

/* ===== c3-u08 ディベートの表現 ===== */
window.LX.plus["c3-u08"] = {
  core: {
    ico: "🎾",
    catch: "ディベートは「言葉のテニス」",
    say: "相手の球（主張）を受け、質問で確かめ、反ばくで打ち返す。人ではなく意見に向かって打つのがルール。",
    fig: {"t": "pic", "items": [{"e": "🧑", "x": 15, "y": 62, "l": "賛成側"}, {"e": "🎾", "x": 50, "y": 35, "s": 0.7}, {"e": "🧑‍🦱", "x": 85, "y": 62, "l": "反対側"}], "arrows": [[0, 1, "主張・理由"], [2, 1, "質問・反ばく"]], "cap": "意見のボールを打ち合う（人は打たない）"}
  },
  points: [
    {
      h: "立場をはっきり言う",
      body: "最初に賛成か反対かを宣言する。agree with ＋ 意見・人。agree は動詞なので be動詞はいらない。",
      form: "We agree / disagree with 〜.",
      ex: "We [disagree with] the idea that homework is useless.",
      exja: "私たちは宿題は無駄だという考えに反対だ。",
      fig: { t: "vs", a: ["We agree with the idea.", "賛成"], b: ["We disagree with the idea.", "反対"] },
      ng: { bad: "We are agree with the idea.", good: "We agree with the idea.", why: "agree は動詞。are はいらない" },
      why: "agree は「賛成する」という動詞そのもの。be動詞をつけると動詞が2つになる。だれ・何に賛成かは with でつなぐ。",
      easy: "① agree だけで「賛成する」。② am はいらない。③「〜に」は with。I agree with you. と丸ごと覚えよう。"
    },
    {
      h: "質問で 相手の球を確かめる",
      body: "言葉の意味があいまいなら What do you mean by 〜? と聞く。説明を求めるなら Could you explain 〜?",
      form: "What do you mean by 〜?",
      ex: "[What do you mean by] effective?",
      exja: "「効果的」とはどういう意味ですか。",
      fig: {"t": "pic", "items": [{"e": "🙋", "x": 20, "y": 62, "l": "I", "b": "どういう意味？"}, {"e": "🧑", "x": 80, "y": 62, "l": "相手"}], "arrows": [[0, 1, "mean by 〜?"]], "cap": "あいまいな言葉の意味を確かめる"},
      ng: { bad: "What do you mean with effective?", good: "What do you mean by effective?", why: "「〜で何を意味するか」は mean by" },
      why: "mean は「〜を意味する」。by 〜 で「〜という言葉で」。だから What do you mean by X? は「X と言うとき何を意味するの？」になる。",
      easy: "① 相手が知らない言葉を使った。② その言葉の前に by を置く。③ What do you mean by ＋ 言葉? で「それどういう意味？」と聞ける。"
    },
    {
      h: "反ばく：意見を打ち返す",
      body: "I'd like to point out that 〜.「〜を指摘したい」。人を責めず、根拠を示して意見の弱点だけをつく。",
      form: "I'd like to point out that 〜.",
      ex: "I'd like to [point out] that the data is old.",
      exja: "そのデータは古いと指摘したい。",
      fig: { t: "flow", steps: ["相手の主張", "弱点", "根拠", "こちらの結論"] },
      ng: { bad: "I'd like to pointing out that the data is old.", good: "I'd like to point out that the data is old.", why: "would like to のあとは動詞の原形" },
      why: "would like to は want to のていねい版。point out は「指をさして見せる」で、that 以下に問題点をはっきり示せる。",
      easy: "① I'd like to＝「〜したいです」。② point out＝「指さす」。③ that の後に 気になる点を言う。人ではなく 意見を指さすのがコツ。"
    }
  ],
  drills: [
    { en: "We [agree with] your opinion.", ja: "私たちはあなたの意見に賛成だ。", alt: ["agree to with", "are agree with", "agreeing with"], tip: "agree with ＋ 意見・人", why: "agree with ＋ 意見。are をつけると動詞が2つ。to with と前置詞を重ねない。", p: 0 },
    { en: "I [disagree with] this plan.", ja: "私はこの計画に反対だ。", alt: ["disagree to with", "am disagree with", "not agree with"], tip: "disagree with ＝ 反対する", why: "disagree は動詞→ am はいらない。not agree は do not agree としないと誤り。", p: 0 },
    { en: "We have [three reasons] for our position.", ja: "私たちの立場には3つの理由がある。", alt: ["three reason", "three of reason", "the three reason"], tip: "three のあとは複数形", why: "three の後は複数 reasons。three of reason・the three reason は言わない。", p: 0 },
    { en: "[Could you explain] what you mean?", ja: "どういう意味か説明していただけますか。", alt: ["Could you explaining", "Could you to explain", "Could explain you"], tip: "Could you ＋ 動詞の原形 ?", why: "Could you ＋ 原形 explain。to・ing は付けない。語順は Could you。", p: 1 },
    { en: "[Could you give] us an example?", ja: "例を挙げていただけますか。", alt: ["Could you giving", "Could you to give", "Could give you"], tip: "Could you ＋ 原形 で ていねいに", why: "Could you ＋ 原形 give。giving・to give は Could you の後に置けない。", p: 1 },
    { en: "What do you [mean by] free time?", ja: "自由時間とはどういう意味ですか。", alt: ["mean of", "meaning by", "means by"], tip: "What do you mean by 〜?", why: "mean by 〜 でセット。do の後は原形 mean。of ではなく by。", p: 1 },
    { en: "What do you [mean by] success?", ja: "「成功」とはどういう意味ですか。", alt: ["mean with", "meaning by", "means by"], tip: "do のあとは原形 mean", why: "do の後は原形 mean。means・meaning は形が合わない。with ではなく by。", p: 1 },
    { en: "Your idea is [not always] correct.", ja: "あなたの考えがいつも正しいとは限らない。", alt: ["always not", "never always", "not ever"], tip: "not always ＝ いつも〜とは限らない", why: "not always＝いつも〜とは限らない。always not・not ever は使わない。", p: 2 },
    { en: "That is [not necessarily] true.", ja: "それが必ずしも本当とは限らない。", alt: ["necessarily not", "not necessary", "no necessarily"], tip: "not necessarily ＝ 必ずしも〜ない", why: "not necessarily＝必ずしも〜ない。necessary は形容詞で true と並べられない。", p: 2 },
    { en: "I'd like to [point out] a problem with this idea.", ja: "この考えの問題点を指摘したい。", alt: ["point", "pointing out", "point out of"], tip: "point out ＝ 指摘する", why: "would like to ＋ 原形 point out。point だけでは意味が変わる。of は付けない。", p: 2 },
    { en: "I'd like to [point out] that phones can help learning.", ja: "スマホは学習の助けになりうると指摘したい。", alt: ["pointing out", "pointed out", "point out of"], tip: "would like to ＋ 原形", why: "to の後は原形 point out。pointing・pointed は to の後に置けない。", p: 2 },
    { en: "We [cannot accept] their argument because it has no evidence.", ja: "証拠がないので、私たちは彼らの主張を受け入れられない。", alt: ["cannot accepting", "cannot to accept", "not can accept"], tip: "cannot ＋ 動詞の原形", why: "cannot ＋ 原形 accept。ing・to は付けない。not can とは言わない。", p: 2 },
    {"en": "We [agree with] the new plan.", "ja": "私たちは新しい計画に賛成だ。", "alt": ["agree to with", "are agree with", "agreeing with"], "tip": "agree with ＋ 意見", "why": "agree は動詞なので be 不要→ agree with。agreeing では文の動詞がない。", "p": 0},
    {"en": "I [disagree with] your idea.", "ja": "私はあなたの考えに反対だ。", "alt": ["disagree to with", "am disagree with", "not agree with"], "tip": "disagree with ＋ 意見", "why": "disagree は動詞→ am は不要。not agree は do が必要（don't agree）。", "p": 0},
    {"en": "We have [two reasons] for this opinion.", "ja": "この意見には理由が2つある。", "alt": ["two reason", "two of reason", "the two reason"], "tip": "two ＋ 複数形 reasons", "why": "2つ以上は複数形 reasons。reason のまま・two of reason は形がおかしい。", "p": 0},
    {"en": "Our team has [three points] to make.", "ja": "私たちのチームには言いたい点が3つある。", "alt": ["three point", "three of point", "the three point"], "tip": "数 ＋ 複数形 points", "why": "three のあとは複数形 points。単数 point のままでは数が合わない。", "p": 0},
    {"en": "[Could you repeat] your last point?", "ja": "最後の点をもう一度言っていただけますか。", "alt": ["Could you repeating", "Could you to repeat", "Could repeat you"], "tip": "Could you ＋ 原形 〜?", "why": "Could you のあとは原形 repeat。-ing・to は不要で、語順は Could you。", "p": 1},
    {"en": "[Could you show] us the data?", "ja": "私たちにデータを見せていただけますか。", "alt": ["Could you showing", "Could you to show", "Could show you"], "tip": "Could you ＋ 原形", "why": "ていねいな質問は Could you ＋原形 show。Could show you は語順がちがう。", "p": 1},
    {"en": "What do you [mean by] fair rules?", "ja": "公平なルールとはどういう意味ですか。", "alt": ["mean of", "meaning by", "means by"], "tip": "What do you mean by 〜?", "why": "do you のあとは原形 mean、言葉は by で示す。means・meaning は不可。", "p": 1},
    {"en": "What do you [mean by] a good school?", "ja": "良い学校とはどういう意味ですか。", "alt": ["mean with", "meaning by", "means by"], "tip": "mean by ＋ 言葉", "why": "「〜とはどういう意味か」は mean by。with は使わず、do の後は原形。", "p": 1},
    {"en": "Your data is [not always] reliable.", "ja": "あなたのデータはいつも信頼できるとは限らない。", "alt": ["always not", "never always", "not ever"], "tip": "not always ＝ いつも〜とは限らない", "why": "部分否定は not always の順。always not・never always は意味がくずれる。", "p": 2},
    {"en": "Homework is [not necessarily] bad.", "ja": "宿題が必ずしも悪いとは限らない。", "alt": ["necessarily not", "not necessary", "no necessarily"], "tip": "not necessarily ＝ 必ずしも〜ない", "why": "部分否定は not necessarily。necessary は形容詞で、no は副詞に付かない。", "p": 2},
    {"en": "I'd like to [point out] two problems.", "ja": "2つの問題を指摘したい。", "alt": ["point", "pointing out", "point out of"], "tip": "point out ＝ 指摘する", "why": "指摘は point out のセット。point だけ・pointing・out of は形がちがう。", "p": 2},
    {"en": "We [cannot agree] with their plan because it costs too much.", "ja": "費用がかかりすぎるので、私たちは彼らの計画に賛成できない。", "alt": ["cannot agreeing", "cannot to agree", "not can agree"], "tip": "cannot ＋ 原形", "why": "cannot のあとは原形 agree。-ing・to は付けず、not can の語順はない。", "p": 2}
  ],
  swhy: [
    { why: "agree は動詞なので are はいらない。相手の意見には with。to with と前置詞を重ねない。", p: 0 },
    { why: "two のあとは複数形 points。the two point は数が合わず、two of point とも言わない。", p: 0 },
    { why: "Could you ＋ 原形で依頼。to・ing は付けない。Could explain you は語順がちがう。", p: 1 },
    { why: "mean by 〜 でセット。do の後なので原形 mean。of ではなく by。", p: 1 },
    { why: "not always＝いつも〜とは限らない。always not・never always は誤り。", p: 2 },
    { why: "would like to ＋ 原形 point out。point だけでは「指摘する」にならない。", p: 2 }
  ]
};

/* ===== c3-u09 要約する ===== */
window.LX.plus["c3-u09"] = {
  core: {
    ico: "🍊",
    catch: "要約は「果汁しぼり」",
    say: "長い文章から皮（具体例・くわしい説明）をすてて、果汁（主張と理由）だけをしぼり出す。",
    fig: {"t": "pic", "items": [{"e": "🍊", "x": 15, "y": 55, "l": "本文"}, {"e": "🥤", "x": 85, "y": 55, "l": "主張・理由"}, {"e": "🗑️", "x": 50, "y": 28, "l": "具体例", "s": 0.8}], "arrows": [[0, 1, "しぼる"], [0, 2, "皮はすてる", "dash"]], "cap": "果汁（主張と理由）だけを残す"}
  },
  points: [
    {
      h: "まず 筆者の主張をつかむ",
      body: "要約の第一文は「何についての文章か」と「筆者の言いたいこと」。The writer argues that 〜. で言い切る。",
      form: "The writer argues that 〜.",
      ex: "[The writer argues that] sleep is important.",
      exja: "筆者は睡眠が大切だと主張している。",
      fig: { t: "slots", parts: [["The writer", "S"], ["argues", "V"], ["that S ＋ V", "O"]] },
      ng: { bad: "The writer argue that sleep is important.", good: "The writer argues that sleep is important.", why: "writer は3人称単数。argues と s を付ける" },
      why: "要約を読む人は、まず「何の話か」と「筆者の言いたいこと」を知りたい。argues that 〜 で主張を文ごと示せるので、最初の一文に向く。",
      easy: "① 何の話？→ This passage is about 〜。② 筆者は何と言っている？→ The writer argues that 〜。この2文で要約の半分ができる。"
    },
    {
      h: "具体例はけずる・言いかえる",
      body: "具体例や数字はけずって、主張と理由だけを残す。本文をそのまま写さず、自分の言葉に言いかえる。",
      form: "主張 ＋ 理由（具体例はけずる）",
      ex: "The passage [is about] climate change.",
      exja: "この文章は気候変動についてだ。",
      fig: { t: "vs", a: ["Sleep is important.", "主張→残す"], b: ["Tom slept nine hours.", "具体例→けずる"] },
      ng: { bad: "This passage is about of climate change.", good: "This passage is about climate change.", why: "about は前置詞。of を重ねない" },
      why: "要約は短くするのが目的。例や数字は主張を支える材料なので、主張と理由が伝われば けずってよい。写すと要約にならない。",
      easy: "① 文章をオレンジだと思う。② 皮や種（例・数字）は捨てる。③ 果汁（主張と理由）だけをしぼって、自分の言葉で書く。"
    },
    {
      h: "ひとことで しめる",
      body: "最後は In short, 〜.「要するに」や In other words, 〜.「言いかえると」で、まとめを一文に。",
      form: "In short, 〜.（ひとことで言うと）",
      ex: "[In short], we need more sleep.",
      exja: "要するに、私たちはもっと睡眠が必要だ。",
      ng: { bad: "In another words, money is not everything.", good: "In other words, money is not everything.", why: "「言いかえると」は In other words（複数形）" },
      why: "In short・In other words は「ここからまとめます」という合図。読む人は次の一文が結論だとわかるので、短く言い切れる。",
      easy: "① 長い話をしたあと、② In short,（要するに）と言って、③ いちばん言いたいことを一文で言う。会話の「つまり〜ってこと」と同じ。"
    }
  ],
  drills: [
    { en: "This article [is about] food waste.", ja: "この記事は食品ロスについてだ。", alt: ["is of", "is about of", "abouts"], tip: "is about ＝ 〜についてだ", why: "is about で「〜についてだ」。of・about of は使わず、abouts という語はない。", p: 0 },
    { en: "The story [is about] a brave girl.", ja: "その物語は勇敢な少女についてだ。", alt: ["is of", "are about", "is about of"], tip: "story は単数 → is about", why: "The story は単数→ is about。are は複数用。of では「〜について」にならない。", p: 0 },
    { en: "The writer [argues that] schools should start later.", ja: "筆者は学校の始業を遅くすべきだと主張している。", alt: ["argue that", "arguing that", "argues to"], tip: "argues that ＋ 文", why: "The writer は単数→ argues that。argue・arguing は形が合わない。", p: 0 },
    { en: "The author [claims that] reading improves our lives.", ja: "著者は読書が生活を豊かにすると主張している。", alt: ["claim that", "claiming that", "claims to that"], tip: "claims that ＝ 〜と主張する", why: "The author は単数→ claims that。claim・claiming は形が合わない。", p: 0 },
    { en: "[According to] the article, sugar is bad for teeth.", ja: "記事によると、砂糖は歯に悪い。", alt: ["According", "Accordingly to", "According for"], tip: "According to ＝ 〜によると", why: "According to でセット。to を落とさない。Accordingly は「それに応じて」で別の語。", p: 1 },
    { en: "[According to] the writer, music reduces stress.", ja: "筆者によると、音楽はストレスを減らす。", alt: ["According", "Accordingly to", "According for"], tip: "According to ＋ 名詞", why: "According to ＋ 名詞（the writer）。for では「〜によると」にならない。", p: 1 },
    { en: "[In short], we should waste less food.", ja: "要するに、食べ物のむだを減らすべきだ。", alt: ["In shortly", "For short", "At short"], tip: "In short ＝ 要するに", why: "In short で決まった形。shortly は「まもなく」、For・At short は使わない。", p: 2 },
    { en: "[In short], friends make us happy.", ja: "要するに、友達は私たちを幸せにする。", alt: ["In shortly", "For short", "On short"], tip: "まとめの一文の合図", why: "In short＝要するに。shortly にしない。For short・On short は誤り。", p: 2 },
    { en: "[In other words], time is money.", ja: "言いかえると、時は金なりだ。", alt: ["In another words", "In other word", "With other words"], tip: "In other words ＝ 言いかえると", why: "In other words で決まった形。another・word（単数）・With は誤り。", p: 2 },
    { en: "[In other words], we need to change our habits.", ja: "言いかえると、私たちは習慣を変える必要がある。", alt: ["In another words", "In other word", "By other words"], tip: "words は複数形", why: "words は複数で In other words。another・By other words は使わない。", p: 2 },
    { en: "The main point is that [we should protect] the ocean.", ja: "要点は、私たちは海を守るべきだということだ。", alt: ["we should protecting", "we should to protect", "we shoulds protect"], tip: "should ＋ 動詞の原形", why: "should のあとは原形 protect。ing・to・shoulds は should と合わない。", p: 2 },
    { en: "The passage [mainly explains] why bees are important.", ja: "この文章は主に、なぜミツバチが大切なのかを説明している。", alt: ["mainly explain", "main explains", "mainly explaining"], tip: "passage は単数 → explains", why: "The passage は単数→ mainly explains。main は形容詞で動詞を説明できない。", p: 0 },
    {"en": "This essay [is about] climate change.", "ja": "このエッセイは気候変動についてだ。", "alt": ["is of", "is about of", "abouts"], "tip": "is about ＝ 〜についてだ", "why": "「〜について」は is about。of では意味が合わず、abouts という語はない。", "p": 0},
    {"en": "The report [is about] young people and sleep.", "ja": "その報告は若者と睡眠についてだ。", "alt": ["is of", "are about", "is about of"], "tip": "S is about 〜", "why": "主語 The report は単数→ is about。are は数が合わない。", "p": 0},
    {"en": "The writer [argues that] homework should be reduced.", "ja": "筆者は宿題を減らすべきだと主張している。", "alt": ["argue that", "arguing that", "argues to"], "tip": "argues that ＋ 文", "why": "The writer は3人称単数→ argues。後ろが文なので that。to は不可。", "p": 0},
    {"en": "The author [believes that] art helps children grow.", "ja": "著者は芸術が子どもの成長を助けると考えている。", "alt": ["believe that", "believing that", "believes to that"], "tip": "believes that ＋ 文", "why": "The author は単数→ believes。that の前に to は入らない。", "p": 0},
    {"en": "The passage [mainly explains] how plants grow.", "ja": "この文章は主に植物がどう育つかを説明している。", "alt": ["mainly explain", "main explains", "mainly explaining"], "tip": "mainly ＋ 動詞（3単現）", "why": "主語は単数→ explains。main は形容詞で動詞を修飾できない。", "p": 0},
    {"en": "[According to] the survey, most students like music.", "ja": "調査によると、ほとんどの生徒は音楽が好きだ。", "alt": ["According", "Accordingly to", "According for"], "tip": "According to ＝ 〜によると", "why": "情報の出どころは According to のセット。to を落とさず、for は使わない。", "p": 1},
    {"en": "[According to] the report, the population is falling.", "ja": "報告によると、人口は減っている。", "alt": ["According", "Accordingly to", "According for"], "tip": "According to ＋ 情報源", "why": "According to で決まった形。Accordingly は「それに応じて」で別の語。", "p": 1},
    {"en": "[In short], reading makes us smarter.", "ja": "要するに、読書は私たちを賢くする。", "alt": ["In shortly", "For short", "At short"], "tip": "In short ＝ 要するに", "why": "まとめの合図は In short。shortly は「まもなく」、For short は略称の意味。", "p": 2},
    {"en": "[In short], we need more sleep.", "ja": "要するに、私たちにはもっと睡眠が必要だ。", "alt": ["In shortly", "For short", "On short"], "tip": "In short, ＋ 文", "why": "In short で決まった形。前置詞を for・on に変えると意味が通らない。", "p": 2},
    {"en": "[In other words], practice makes perfect.", "ja": "言いかえれば、練習が完ぺきを生む。", "alt": ["In another words", "In other word", "With other words"], "tip": "In other words ＝ 言いかえると", "why": "other ＋ 複数 words が決まった形。another は単数名詞につく。", "p": 2},
    {"en": "[In other words], the plan was a failure.", "ja": "言いかえれば、その計画は失敗だった。", "alt": ["In another words", "In other word", "By other words"], "tip": "In other words, ＋ 言いかえ", "why": "In other words で固定。word と単数にしたり by に変えたりしない。", "p": 2},
    {"en": "The main point is that [we should save] water.", "ja": "要点は、私たちは水を節約すべきだということだ。", "alt": ["we should saving", "we should to save", "we shoulds save"], "tip": "that ＋ S ＋ should ＋ 原形", "why": "should のあとは原形 save。-ing・to は不可、助動詞に s は付かない。", "p": 2}
  ],
  swhy: [
    { why: "be about 〜 で「〜についてだ」。of・about of は使わない。abouts という語はない。", p: 0 },
    { why: "The writer は単数→ argues that。argue・arguing は形が合わず、to は誤り。", p: 0 },
    { why: "according to でセット。to を落とさない。Accordingly・for は誤り。", p: 1 },
    { why: "In short で「要するに」。In shortly・For short・At short は使わない。", p: 2 },
    { why: "In other words で決まった形。words は複数。another・With は誤り。", p: 2 },
    { why: "must のあとは原形 protect。ing・to・musts は must と合わない。", p: 2 }
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
      fig: {"t": "pic", "items": [{"e": "🧑", "x": 18, "y": 62, "l": "I", "b": "聞きたいこと"}, {"e": "✉️", "x": 50, "y": 55, "l": "Dear 〜,"}, {"e": "🧑‍💼", "x": 84, "y": 62, "l": "相手"}], "arrows": [[0, 1, "writing to"], [1, 2, ""]], "cap": "最初の1文で 用件を伝える"},
      ng: { bad: "I am writing for ask about the program.", good: "I am writing to ask about the program.", why: "目的は to ＋ 動詞の原形" },
      why: "メールを開いた人がまず知りたいのは「何の用？」。I am writing to ＋ 原形 で目的を最初に言えば、あとの文がすべてわかりやすくなる。",
      easy: "① Dear 〜, であいさつ。② すぐに I am writing to ＋ やりたいこと。③「〜のためにメールしました」で用件ズバリ。"
    },
    {
      h: "お願いは クッションつきで",
      body: "Could you 〜? はていねい。I would appreciate it if 〜 はさらにていねいで「〜だとありがたい」。",
      form: "I would appreciate it if 〜.",
      ex: "[Could you] send me more information?",
      exja: "もっと情報を送っていただけますか。",
      fig: { t: "scale", left: "ふつう", right: "とてもていねい", items: [["Can you 〜?", 30], ["Could you 〜?", 65], ["I'd appreciate", 95]] },
      ng: { bad: "I would appreciate if you could help me.", good: "I would appreciate it if you could help me.", why: "appreciate のあとに it を忘れない" },
      why: "Could は「もしできたら」という遠回しの気持ち。I would appreciate it if 〜 は「〜なら感謝します」で、さらに遠回し＝ていねいになる。",
      easy: "① 友だちには Can you 〜?。② 先生や知らない人には Could you 〜?。③ もっとていねいなら I would appreciate it if you could 〜.。"
    },
    {
      h: "結びで 次につなぐ",
      body: "最後は I look forward to ＋ 〜ing.「〜を楽しみにしています」。to は前置詞なので後ろは ing 形。",
      form: "I look forward to ＋ 〜ing.",
      ex: "I look forward to [hearing] from you.",
      exja: "お返事をお待ちしています。",
      fig: { t: "vs", a: ["I look forward to seeing you.", "○ ing 形"], b: ["I look forward to see you.", "✕ 原形"] },
      ng: { bad: "I look forward to hear from you.", good: "I look forward to hearing from you.", why: "この to は前置詞。後ろは 〜ing" },
      why: "look forward to の to は前置詞（〜へ）。前置詞のあとには名詞か ing 形がくるので、hearing・seeing になる。",
      easy: "① look forward to＝「〜を楽しみに待つ」。② この to の後は ing の形。③ I look forward to hearing from you. を丸ごと覚えよう。"
    }
  ],
  drills: [
    { en: "[Thank you for] your kind message.", ja: "ご親切なメッセージをありがとうございます。", alt: ["Thank you of", "Thanks you for", "Thank for"], tip: "Thank you for ＋ 名詞", why: "Thank you for ＋ 名詞。Thanks you・Thank for は誤り。of は使わない。", p: 0 },
    { en: "[Thank you for] inviting me to the party.", ja: "パーティーに招待してくれてありがとう。", alt: ["Thank you of", "Thanks you for", "Thank for"], tip: "Thank you for ＋ 〜ing", why: "for の後なので ing→ inviting。Thanks you・Thank for は誤り。", p: 0 },
    { en: "I am [writing to] apply for the volunteer program.", ja: "ボランティアプログラムに応募するためにメールしています。", alt: ["writing for", "write to", "written to"], tip: "I am writing to ＋ 原形", why: "I am writing to ＋ 原形 apply。for は誤り。write・written は am と合わない。", p: 0 },
    { en: "I am [writing to] thank you for your help.", ja: "お手伝いのお礼を言いたくてメールしています。", alt: ["writing for", "write to", "written to"], tip: "用件は最初に", why: "am writing で進行形、to thank で目的。write・written では am と合わない。", p: 0 },
    { en: "[Could you] send me the schedule?", ja: "予定表を送っていただけますか。", alt: ["Could you to", "Could", "Could you please to"], tip: "Could you ＋ 原形 ?", why: "Could you ＋ 原形 send。to は付けない。Could だけでは主語がない。", p: 1 },
    { en: "[Could you] check my essay by Friday?", ja: "金曜日までに私の作文を見ていただけますか。", alt: ["Could you to", "Could", "Could you please to"], tip: "ていねいなお願い", why: "Could you ＋ 原形 check。to は付けない。please to とも言わない。", p: 1 },
    { en: "I would [appreciate it if] you could reply soon.", ja: "早めにお返事いただけるとありがたいです。", alt: ["appreciate if it", "appreciating it if", "appreciate it that"], tip: "appreciate it if ＋ could", why: "appreciate it if で決まった形。if it の順は誤り。that では「〜なら」にならない。", p: 1 },
    { en: "I would [appreciate it if] you could call me.", ja: "お電話いただけるとありがたいです。", alt: ["appreciate if it", "appreciating it if", "appreciate it that"], tip: "it を忘れない", why: "it を忘れず appreciate it if。appreciating・that は使わない。", p: 1 },
    { en: "I have [attached] a photo of the poster.", ja: "ポスターの写真を添付しました。", alt: ["attach", "attaching", "been attached"], tip: "have ＋ 過去分詞 ＝ 添付しました", why: "have ＋ 過去分詞 attached。attach・attaching は have と合わない。", p: 1 },
    { en: "Please [find attached] my report.", ja: "報告書を添付しましたのでご確認ください。", alt: ["find attaching", "finding attached", "found attached"], tip: "find attached ＝ 添付をご覧ください", why: "find attached で「添付をご覧ください」の決まった形。Please の後は原形 find。", p: 1 },
    { en: "I look forward to [hearing] from you soon.", ja: "近いうちにお返事をいただけるのを楽しみにしています。", alt: ["hear", "heard", "be heard"], tip: "look forward to ＋ 〜ing", why: "to は前置詞→ hearing。hear・heard は to の後に置けない。be heard は受け身。", p: 2 },
    { en: "I look forward to [working] with you this summer.", ja: "この夏、一緒に活動できるのを楽しみにしています。", alt: ["work", "worked", "be worked"], tip: "to のあとは 〜ing", why: "look forward to ＋ ing→ working。work・worked は to の後に置けない。", p: 2 },
    {"en": "[Thank you for] your help yesterday.", "ja": "昨日は手伝ってくれてありがとう。", "alt": ["Thank you of", "Thanks you for", "Thank for"], "tip": "Thank you for ＋ 名詞", "why": "お礼の理由は for で示す。Thanks you は you が不要、Thank だけでは相手がない。", "p": 0},
    {"en": "[Thank you for] answering my questions.", "ja": "質問に答えてくれてありがとう。", "alt": ["Thank you of", "Thanks you for", "Thank for"], "tip": "Thank you for ＋ 〜ing", "why": "for のあとに理由（answering）。of は使わない。", "p": 0},
    {"en": "I am [writing to] ask for some information.", "ja": "いくつか情報をいただきたく、メールしています。", "alt": ["writing for", "write to", "written to"], "tip": "I am writing to ＋ 原形", "why": "am のあとは進行形 writing、目的は to ＋原形。write・written は形が合わない。", "p": 0},
    {"en": "I am [writing to] tell you about our school festival.", "ja": "学校祭についてお知らせするためにメールしています。", "alt": ["writing for", "write to", "written to"], "tip": "writing to ＝ 〜するために書く", "why": "目的は to ＋原形 tell。for では後ろの tell とつながらない。", "p": 0},
    {"en": "[Could you] tell me the price?", "ja": "値段を教えていただけますか。", "alt": ["Could you to", "Could", "Could you please to"], "tip": "Could you ＋ 原形 〜?", "why": "Could you のあとは原形 tell。to は不要で、Could だけでは相手がない。", "p": 1},
    {"en": "[Could you] reply by Monday?", "ja": "月曜日までにお返事いただけますか。", "alt": ["Could you to", "Could", "Could you please to"], "tip": "Could you ＋ 原形", "why": "ていねいな依頼は Could you ＋原形 reply。please を入れても to は付けない。", "p": 1},
    {"en": "I would [appreciate it if] you could check my report.", "ja": "レポートを確認していただけるとありがたいです。", "alt": ["appreciate if it", "appreciating it if", "appreciate it that"], "tip": "appreciate it if ＋ could", "why": "決まった形は appreciate it if。語順を変えたり that にしたりしない。", "p": 1},
    {"en": "I would [appreciate it if] you could send me a map.", "ja": "地図を送っていただけるとありがたいです。", "alt": ["appreciate if it", "appreciating it if", "appreciate it that"], "tip": "would appreciate it if 〜", "why": "would のあとは原形 appreciate。it if の順で使う。", "p": 1},
    {"en": "I have [attached] the list of members.", "ja": "メンバーの一覧を添付しました。", "alt": ["attach", "attaching", "been attached"], "tip": "have ＋ 過去分詞 attached", "why": "現在完了 have ＋過去分詞 attached。原形・-ing は have に続かない。", "p": 1},
    {"en": "Please [find attached] the photos from the trip.", "ja": "旅行の写真を添付しましたのでご覧ください。", "alt": ["find attaching", "finding attached", "found attached"], "tip": "Please find attached 〜", "why": "命令文 Please ＋原形 find、添付物は attached。finding・found は不可。", "p": 1},
    {"en": "I look forward to [meeting] you in Tokyo.", "ja": "東京でお会いできるのを楽しみにしています。", "alt": ["meet", "met", "be met"], "tip": "look forward to ＋ 〜ing", "why": "この to は前置詞なので後ろは -ing の meeting。原形 meet は不可。", "p": 2},
    {"en": "I look forward to [receiving] your reply.", "ja": "お返事をいただけるのを楽しみにしています。", "alt": ["receive", "received", "be received"], "tip": "to のあとは 〜ing 形", "why": "look forward to の to は前置詞→ receiving。原形・過去形は置けない。", "p": 2}
  ],
  swhy: [
    { why: "Thank you for ＋ 名詞。Thanks you・Thank for は誤り。of は使わない。", p: 0 },
    { why: "I am writing to ＋ 原形で目的。for は誤り。write・written は am と合わない。", p: 0 },
    { why: "Could you ＋ 原形 tell。to は付けない。Could だけでは「あなたが」が抜ける。", p: 1 },
    { why: "appreciate it if で決まった形。it は if の前。that は使わない。", p: 1 },
    { why: "have ＋ 過去分詞 attached。attach・attaching は have と合わない。", p: 1 },
    { why: "この to は前置詞→ seeing。see・saw は置けず、be seen は受け身。", p: 2 }
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
      ng: { bad: "It is seem that he is busy.", good: "It seems that he is busy.", why: "seem は一般動詞。is はいらない" },
      why: "見たことから判断しているだけで、事実と言い切れないとき It seems that を使う。言い切らないので、まちがっていても角が立たない。",
      easy: "① 友だちがニコニコしている。② でも本当にうれしいかはわからない。③ だから It seems that she is happy.「うれしそう」と言う。"
    },
    {
      h: "「〜しがち」で 傾向を言う",
      body: "tend to ＋ 原形「〜する傾向がある」。全員ではなく「多くの場合」と言えるので、データの話で大活躍。",
      form: "S tend(s) to ＋ 動詞の原形.",
      ex: "Teenagers [tend to] stay up late.",
      exja: "10代は夜ふかしをしがちだ。",
      fig: {"t": "bars", "items": [["夜ふかしする", 75], ["早く寝る", 25]], "cap": "tend to ＝ そうなることが多い"},
      ng: { bad: "Teenagers are tend to stay up late.", good: "Teenagers tend to stay up late.", why: "tend は一般動詞。are はいらない" },
      why: "「全員そうだ」と言うと、ちがう人が1人いるだけで間違いになる。tend to は「多くの場合そうだ」なので、例外があっても正しい。",
      easy: "① 高校生はみんな夜ふかし？→全員ではない。② でも多い。③ そんなとき Teenagers tend to stay up late.「〜しがち」と言う。"
    },
    {
      h: "自信の度合いで 言葉をえらぶ",
      body: "may・might は五分五分、probably は7割、will はほぼ確実。どれくらい自信があるかで選ぶ。",
      form: "S may / might ＋ 動詞の原形.",
      ex: "This [may] be a good solution.",
      exja: "これは良い解決策かもしれない。",
      fig: { t: "scale", left: "五分五分", right: "ほぼ確実", items: [["might", 35], ["may", 45], ["probably", 70], ["will", 92]] },
      ng: { bad: "This may is a good solution.", good: "This may be a good solution.", why: "助動詞のあとは動詞の原形 be" },
      why: "may・probably・will は自信の強さがちがう。データや根拠の強さに合わせて選ぶと、言いすぎず、読む人に信頼される。",
      easy: "① 天気予報を思い出そう。② 雨かも＝may、たぶん雨＝probably、ほぼ確実＝will。③ 自信のメーターに合わせて言葉を選ぶ。"
    }
  ],
  drills: [
    { en: "[It seems that] the store is closed.", ja: "その店は閉まっているようだ。", alt: ["It seems to", "It is seem that", "It seeming that"], tip: "It seems that ＋ 文", why: "It seems that ＋ 文。seems to の後に文は来ない。seem は一般動詞で is は不要。", p: 0 },
    { en: "[It seems that] nobody knows the answer.", ja: "だれも答えを知らないようだ。", alt: ["It seems to", "It is seem that", "It seeming that"], tip: "様子から「〜のようだ」", why: "that の後に文 nobody knows。It is seem・seeming は形が合わない。", p: 0 },
    { en: "He [seems to be] tired today.", ja: "彼は今日疲れているようだ。", alt: ["seems be", "is seem to be", "seem to be"], tip: "S seems to be 〜", why: "S seems to be で「〜のようだ」。to を落とさない。主語 He なので seems。", p: 0 },
    { en: "Young people [tend to] use social media a lot.", ja: "若い人はSNSをよく使う傾向がある。", alt: ["tend", "tend for", "are tend to"], tip: "tend to ＋ 原形", why: "tend to ＋ 原形。to を落とさない。tend は動詞なので are は付けない。", p: 1 },
    { en: "Students [tend to] study harder before tests.", ja: "生徒はテスト前に一生懸命勉強しがちだ。", alt: ["tend", "tends to", "are tend to"], tip: "主語が複数 → tend", why: "主語 Students は複数→ tend to。tends は単数用。are tend は動詞の重ね。", p: 1 },
    { en: "Prices [may] go up next year.", ja: "来年、物価が上がるかもしれない。", alt: ["may to", "mays", "are may"], tip: "may ＋ 原形", why: "may ＋ 原形 go。may に to や s は付けず、are may と重ねない。", p: 2 },
    { en: "This plan [might not] work well.", ja: "この計画はうまくいかないかもしれない。", alt: ["might not to", "not might", "might no"], tip: "might not ＋ 原形", why: "might not ＋ 原形。not は might の後。to は付けない。no ではなく not。", p: 2 },
    { en: "It will [probably] be sunny tomorrow.", ja: "明日はたぶん晴れるだろう。", alt: ["probable", "probability", "be probably"], tip: "will probably ＋ 原形", why: "will probably ＋ 原形。probable は形容詞、probability は名詞で、ここに入らない。", p: 2 },
    { en: "[Most] people agree with this idea.", ja: "ほとんどの人がこの考えに賛成している。", alt: ["Most of", "Almost", "The most"], tip: "Most ＋ 名詞 ＝ ほとんどの", why: "Most ＋ 名詞。Most of なら the が必要。Almost は名詞の前に直接置けない。", p: 1 },
    { en: "[Many] experts believe that sleep is important.", ja: "多くの専門家が、睡眠は大切だと考えている。", alt: ["Much", "Many of", "A lot"], tip: "数えられる名詞には many", why: "experts は数えられる→ Many。Much は数えられない名詞用。Many of なら the が必要。", p: 1 },
    { en: "Online classes [are likely to] become more common.", ja: "オンライン授業はもっと一般的になりそうだ。", alt: ["are likely", "likes to", "are like to"], tip: "be likely to ＝ 〜しそうだ", why: "are likely to ＋ 原形。to を落とさない。likes・like は「好き」で意味がちがう。", p: 2 },
    { en: "Robots [are likely to] change the way we work.", ja: "ロボットは私たちの働き方を変えそうだ。", alt: ["are likely", "is likely to", "likes to"], tip: "主語が複数 → are likely to", why: "主語 Robots は複数→ are likely to。is は単数用。likes to は「好き」の意味。", p: 2 },
    {"en": "[It seems that] the train is late.", "ja": "電車が遅れているようだ。", "alt": ["It seems to", "It is seem that", "It seeming that"], "tip": "It seems that ＋ 文", "why": "後ろが文なので It seems that。seem は一般動詞なので is は不要。", "p": 0},
    {"en": "[It seems that] everyone enjoyed the party.", "ja": "みんながパーティーを楽しんだようだ。", "alt": ["It seems to", "It is seem that", "It seeming that"], "tip": "It seems that ＋ S ＋ V", "why": "文が続くときは that。seems to のあとは原形が来る。", "p": 0},
    {"en": "She [seems to be] very busy this week.", "ja": "彼女は今週とても忙しいようだ。", "alt": ["seems be", "is seem to be", "seem to be"], "tip": "S seems to be 〜", "why": "She は3単現→ seems、そのあと to be。to を落とさない。", "p": 0},
    {"en": "Teenagers [tend to] stay up late.", "ja": "10代は夜ふかしをしがちだ。", "alt": ["tend", "tend for", "are tend to"], "tip": "tend to ＋ 動詞の原形", "why": "「〜しがち」は tend to ＋原形。to を落とさず、are は不要。", "p": 1},
    {"en": "People [tend to] trust their friends.", "ja": "人は友達を信用しがちだ。", "alt": ["tend", "tends to", "are tend to"], "tip": "複数の主語 ＋ tend to", "why": "People は複数→ tend（s なし）to。are を入れると動詞が重なる。", "p": 1},
    {"en": "[Most] students use smartphones every day.", "ja": "ほとんどの生徒は毎日スマホを使う。", "alt": ["Most of", "Almost", "The most"], "tip": "Most ＋ 名詞", "why": "名詞の前は Most。Most of には the が要り、Almost は名詞に付かない。", "p": 1},
    {"en": "[Many] people think that exercise is fun.", "ja": "多くの人は運動が楽しいと思っている。", "alt": ["Much", "Many of", "A lot"], "tip": "Many ＋ 数えられる名詞", "why": "people は数えられる→ Many。Much は数えられない名詞用、A lot は of が要る。", "p": 1},
    {"en": "The price [may] change next month.", "ja": "値段は来月変わるかもしれない。", "alt": ["may to", "mays", "is may"], "tip": "may ＋ 動詞の原形", "why": "may のあとは原形 change。to や s は付けず、is と重ねない。", "p": 2},
    {"en": "The game [might] be canceled because of rain.", "ja": "試合は雨で中止になるかもしれない。", "alt": ["might to", "mights", "is might"], "tip": "might ＋ 原形（少し弱い）", "why": "might のあとは原形 be。助動詞に s・to は付かない。", "p": 2},
    {"en": "It will [probably] snow tonight.", "ja": "今夜はたぶん雪が降るだろう。", "alt": ["probable", "probability", "be probably"], "tip": "will probably ＋ 原形", "why": "動詞の前に置くのは副詞 probably。probable は形容詞、probability は名詞。", "p": 2},
    {"en": "More people [are likely to] work from home.", "ja": "在宅で働く人はさらに増えそうだ。", "alt": ["are likely", "likes to", "are like to"], "tip": "be likely to ＋ 原形", "why": "be likely to のセット。to を落とさず、like だと「好き」の意味になる。", "p": 2},
    {"en": "This trend [is likely to] continue.", "ja": "この傾向は続きそうだ。", "alt": ["is likely", "likes to", "is like to"], "tip": "S is likely to 〜", "why": "単数の主語→ is likely to ＋原形。likes to は「〜するのが好き」。", "p": 2}
  ],
  swhy: [
    { why: "It seems that ＋ 文。seems to の後に文は来ない。is seem とは言わない。", p: 0 },
    { why: "tend to ＋ 原形で「〜しがち」。to を落とさない。for は使わず、tend は動詞なので are は不要。", p: 1 },
    { why: "may ＋ 原形 be。may に to や s は付けない。is may と動詞を重ねない。", p: 2 },
    { why: "probably は副詞で will と原形の間に入る。probable は形容詞、probability は名詞。", p: 2 },
    { why: "Most ＋ 名詞で「ほとんどの〜」。Most of なら the が必要。Almost は名詞の前に置けない。", p: 1 },
    { why: "be likely to ＋ 原形で「〜しそうだ」。to を落とさない。like は「好き」で意味がちがう。", p: 2 }
  ]
};

/* ===== c3-u12 定義と具体例 ===== */
window.LX.plus["c3-u12"] = {
  core: {
    ico: "🔍",
    catch: "定義は「ラベル」、具体例は「中身を見せる」",
    say: "まず、ことばにラベルをはる（refers to）。次に中身を見せる（such as / for example）。抽象→具体。",
    fig: {"t": "pic", "items": [{"e": "🏷️", "x": 15, "y": 55, "l": "定義"}, {"e": "📦", "x": 50, "y": 55, "l": "ことば"}, {"e": "🍎", "x": 85, "y": 55, "l": "具体例"}], "arrows": [[0, 1, "refers to"], [1, 2, "such as"]], "cap": "定義＝ラベル、具体例＝中身を見せる"}
  },
  points: [
    {
      h: "定義＝ラベルをはる",
      body: "X refers to 〜.「X とは〜のことだ」。X means 〜. も同じ。主語が単数なら refers の s を忘れずに。",
      form: "X refers to 〜. ／ X means 〜.",
      ex: "Recycling [refers to] using things again.",
      exja: "リサイクルとは、物を再び使うことだ。",
      fig: { t: "slots", parts: [["Recycling", "ことば"], ["refers to", "＝"], ["using things again", "定義"]] },
      ng: { bad: "Recycling is refer to using things again.", good: "Recycling refers to using things again.", why: "refer は一般動詞。is はいらない" },
      why: "定義は「X＝説明」のイコールの文。refer to は「〜を指す」なので、X が指している中身を後ろに置ける。主語が単数なら s が付く。",
      easy: "① 知らない言葉 X に ラベルをはる。② X refers to 〜 で「X とは〜のこと」。③ 主語が1つなら refers と s を付ける。"
    },
    {
      h: "such as＝中身のサンプル",
      body: "名詞 ＋ such as A and B「AやBのような〜」。名詞のすぐ後ろに例を並べる。文ではなく名詞を並べる。",
      form: "名詞 ＋ such as A, B, and C",
      ex: "I like fruits [such as] apples and grapes.",
      exja: "私はリンゴやブドウのような果物が好きだ。",
      fig: { t: "slots", parts: [["fruits", "名詞"], ["such as", "M"], ["apples and grapes", "具体例"]], arc: [2, 0, "中身の例"] },
      ng: { bad: "I like fruits such apples and grapes.", good: "I like fruits such as apples and grapes.", why: "such だけでは ✕。such as でセット" },
      why: "such as は「〜のような」で、直前の名詞の例を示す。as の後は名詞なので、名詞をならべるときに使う。",
      easy: "① 大きな箱（fruits）がある。② 中身を見せたい。③ fruits such as apples and grapes と、箱のすぐ後ろに中身をならべる。"
    },
    {
      h: "for example＝文で見せる",
      body: "For example, ＋ 文.「たとえば〜」。such as は名詞を並べ、for example は文を続ける、と使い分ける。",
      form: "For example, S ＋ V.",
      ex: "[For instance], many people use e-books.",
      exja: "たとえば、多くの人が電子書籍を使っている。",
      fig: { t: "vs", a: ["sports such as tennis", "名詞を並べる"], b: ["For example, I play tennis.", "文を続ける"] },
      ng: { bad: "For examples, I play tennis.", good: "For example, I play tennis.", why: "For example は s を付けない決まり文句" },
      why: "For example は文全体を例として出す合図。後ろに主語と動詞のそろった文が来る。名詞だけを並べたいなら such as を使う。",
      easy: "① 言いたいことを言う。② For example, と言ってひと休み（コンマ）。③ そのあとに、例になる文を1つ言う。"
    }
  ],
  drills: [
    { en: "A librarian is a person who [works in] a library.", ja: "司書とは図書館で働く人のことだ。", alt: ["work in", "working in", "is work in"], tip: "a person who ＋ 3単現の動詞", why: "a person は単数→ who works in。work・working は形が合わない。is work は誤り。", p: 0 },
    { en: "A tourist is a person who [travels for] fun.", ja: "観光客とは楽しみのために旅行する人のことだ。", alt: ["travel for", "traveling for", "is travel for"], tip: "who のあとの動詞は person に合わせる", why: "who の動詞は person に合わせて travels。travel・traveling は形が合わない。", p: 0 },
    { en: "Climate change [refers to] long-term changes in weather.", ja: "気候変動とは、天候の長期的な変化のことだ。", alt: ["refers", "refers of", "is referred"], tip: "refers to ＝ 〜のことだ", why: "refer to でセット→ refers to。to を落とさず、of は使わない。is referred は受け身。", p: 0 },
    { en: "Social media [refers to] websites for sharing information.", ja: "ソーシャルメディアとは、情報を共有するためのウェブサイトのことだ。", alt: ["refers of", "refers", "is referred"], tip: "refer to でセット", why: "Social media は単数あつかい→ refers to。of では「〜を指す」にならない。", p: 0 },
    { en: "The word huge [means] very big.", ja: "huge という語は、とても大きいという意味だ。", alt: ["is mean", "meaning", "means of"], tip: "X means 〜 ＝ X は〜という意味", why: "mean は一般動詞→ means。is mean は動詞の重ね。meaning では文の動詞がない。", p: 0 },
    { en: "Hanami [means] viewing cherry blossoms.", ja: "花見とは桜を見ることだ。", alt: ["is mean", "meaning", "means of"], tip: "mean は一般動詞", why: "Hanami は単数→ means。is mean・meaning は形が合わない。of は付けない。", p: 0 },
    { en: "We need vegetables [such as] carrots and onions.", ja: "私たちにはニンジンや玉ねぎのような野菜が必要だ。", alt: ["such", "as such", "so as"], tip: "名詞 ＋ such as A and B", why: "名詞の後に such as ＋ 例。such・as such・so as ではこの意味にならない。", p: 1 },
    { en: "I want to visit cities [such as] Paris and Rome.", ja: "私はパリやローマのような都市を訪れたい。", alt: ["such", "so as", "such like"], tip: "such as ＋ 名詞を並べる", why: "such as で決まった形。such like・so as は使わない。such だけでは as が足りない。", p: 1 },
    { en: "[For example], many students ride bikes to school.", ja: "たとえば、多くの生徒が自転車で通学している。", alt: ["For examples", "By example", "As example"], tip: "For example, ＋ 文", why: "For example で決まった形。examples・By example・As example は使わない。", p: 2 },
    { en: "[For example], you can join a volunteer club.", ja: "たとえば、ボランティア部に入ることができる。", alt: ["For examples", "By example", "In example"], tip: "文の頭に置いてコンマ", why: "For example で決まった形。In example・By example は使わず、examples にしない。", p: 2 },
    { en: "[For instance], my town has a recycling center.", ja: "たとえば、私の町にはリサイクルセンターがある。", alt: ["For instances", "In instance", "By instance"], tip: "For instance ＝ For example", why: "For instance で決まった形。instances・In instance・By instance は使わない。", p: 2 },
    { en: "[For instance], some people work from home.", ja: "たとえば、在宅で働く人もいる。", alt: ["For instances", "In instance", "As instance"], tip: "instance に s は付けない", why: "For instance で決まった形。instance に s は付けず、In・As は使わない。", p: 2 },
    {"en": "A doctor is a person who [works in] a hospital.", "ja": "医者とは病院で働く人のことだ。", "alt": ["work in", "working in", "is work in"], "tip": "a person who ＋ 3単現", "why": "who の先は a person（単数）→ works。is work は動詞が重なる。", "p": 0},
    {"en": "A pilot is a person who [flies] airplanes.", "ja": "パイロットとは飛行機を操縦する人のことだ。", "alt": ["fly", "flying", "is fly"], "tip": "who ＋ 3単現の動詞", "why": "a person を受ける who のあとは flies。fly・flying は形が合わない。", "p": 0},
    {"en": "Recycling [refers to] using things again.", "ja": "リサイクルとは、物を再び使うことだ。", "alt": ["refers", "refers of", "is referred"], "tip": "X refers to 〜 ＝ X とは〜", "why": "定義は refers to のセット。to を落とさず、of・受け身は使わない。", "p": 0},
    {"en": "Global warming [refers to] the rise in Earth's temperature.", "ja": "地球温暖化とは地球の気温の上昇のことだ。", "alt": ["refers", "refers of", "is referred"], "tip": "refers to ＋ 名詞", "why": "refer は to と組む。is referred は受け身で「定義する」意味にならない。", "p": 0},
    {"en": "The word tiny [means] very small.", "ja": "tiny という語は、とても小さいという意味だ。", "alt": ["is mean", "meaning", "means of"], "tip": "X means 〜", "why": "mean は一般動詞→ means。is mean は動詞が重なり、of は不要。", "p": 0},
    {"en": "Kaizen [means] continuous improvement.", "ja": "改善とは、絶えず良くしていくことだ。", "alt": ["is mean", "meaning", "means of"], "tip": "means ＝ 〜という意味だ", "why": "主語は単数→ means。meaning だけでは文の動詞がない。", "p": 0},
    {"en": "I like animals [such as] cats and rabbits.", "ja": "私はネコやウサギのような動物が好きだ。", "alt": ["such", "as such", "so as"], "tip": "名詞 ＋ such as ＋ 例", "why": "例を並べるのは such as。such だけ・so as では意味にならない。", "p": 1},
    {"en": "We sell sweets [such as] cookies and cakes.", "ja": "私たちはクッキーやケーキのようなお菓子を売っている。", "alt": ["such", "so as", "such like"], "tip": "such as ＋ 名詞の例", "why": "such as のあとに例の名詞を並べる。such like は使わない。", "p": 1},
    {"en": "She plays instruments [such as] the piano and the flute.", "ja": "彼女はピアノやフルートのような楽器を演奏する。", "alt": ["such", "as such", "so as"], "tip": "such as ＝ たとえば〜のような", "why": "前の名詞 instruments の中身を such as で見せる。", "p": 1},
    {"en": "[For example], many people walk to save money.", "ja": "たとえば、多くの人がお金を節約するために歩く。", "alt": ["For examples", "By example", "As example"], "tip": "For example, ＋ 文", "why": "For example で決まった形。example に s は付けず、by・as は使わない。", "p": 2},
    {"en": "[For example], my brother reads three books a week.", "ja": "たとえば、兄は週に3冊本を読む。", "alt": ["For examples", "By example", "In example"], "tip": "文の頭で For example,", "why": "後ろに文が来るので For example。in・by にすると決まり文句でなくなる。", "p": 2},
    {"en": "[For instance], some cafes offer free Wi-Fi.", "ja": "たとえば、無料Wi-Fiがあるカフェもある。", "alt": ["For instances", "In instance", "By instance"], "tip": "For instance ＝ For example", "why": "For instance は決まった形。instances と s を付けない。", "p": 2}
  ],
  swhy: [
    { why: "a person は単数→ who works。work・working は形が合わない。is work は動詞の重ね。", p: 0 },
    { why: "refer to でセット。to を落とさない。of は使わず、is referred は受け身で意味がちがう。", p: 0 },
    { why: "mean は一般動詞→ means。is mean は動詞の重ね。meaning では文の動詞がない。", p: 0 },
    { why: "such as ＋ 名詞で例を示す。such・as such・so as ではこの意味にならない。", p: 1 },
    { why: "For example で決まった形。examples・By example・As example は使わない。", p: 2 },
    { why: "For instance で決まった形。instances・In instance・By instance は使わない。", p: 2 }
  ]
};
