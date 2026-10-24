window.LX = window.LX || { courses: [] };
window.LX.courses.push({
  id: "c3", name: "論理表現Ⅲ", short: "Ⅲ",
  desc: "筋道を立てて、意見を説得力のある英語にする",
  units: [
    {
      id: "c3-u01",
      title: "無生物主語",
      en: "Inanimate Subjects",
      tag: "文法",
      goal: "物や出来事を主語にして、引きしまった英文が書ける",
      points: [
        {
          h: "物が主語、人が目的語",
          body: "英語では「物・出来事」を主語にして、人を目的語に置く文がよく使われる。日本語にするときは「〜のおかげで」「〜によって」と訳すと自然になる。",
          form: "物 ＋ V ＋ 人 ＋ …",
          ex: "This bus [takes] you to the station.",
          exja: "このバスに乗れば駅に行ける。"
        },
        {
          h: "原因・理由を主語にする",
          body: "make や cause、keep を使うと「〜のせいで…になる」を短く言える。because の文より、書きことばらしい引きしまった表現になる。",
          form: "原因 ＋ make / keep ＋ 人 ＋ 状態",
          ex: "The heavy rain [kept] us at home.",
          exja: "大雨のせいで私たちは家にいた。"
        },
        {
          h: "可能・妨げを表す動詞",
          body: "enable 人 to do は「〜のおかげで人は…できる」、prevent 人 from doing は「〜のせいで人は…できない」。どちらも論説文でよく出る。",
          form: "物 ＋ enable 人 to do / prevent 人 from doing",
          ex: "The Internet [enables] us to learn anywhere.",
          exja: "インターネットのおかげで、どこでも学べる。"
        }
      ],
      sentences: [
        {
          en: "This road [leads] to the city hall.",
          ja: "この道を行けば市役所に出る。",
          alt: ["leads at", "goes us", "brings"],
          tip: "lead to 〜「〜に通じる・つながる」"
        },
        {
          en: "A short walk [brought] us to the beach.",
          ja: "少し歩くと浜辺に着いた。",
          alt: ["came", "arrived", "reached to"],
          tip: "bring 人 to 場所「人を〜に連れてくる」"
        },
        {
          en: "The heavy snow [prevented] us from going out.",
          ja: "大雪のせいで私たちは外出できなかった。",
          alt: ["stopped to", "kept to", "made"],
          tip: "prevent 人 from doing「〜させない」"
        },
        {
          en: "This app [enables] students to study at home.",
          ja: "このアプリのおかげで、生徒は家で勉強できる。",
          alt: ["makes", "lets", "has"],
          tip: "enable 人 to do「人が〜できるようにする」"
        },
        {
          en: "His advice [made] me change my mind.",
          ja: "彼の助言で私は考えを変えた。",
          alt: ["made me to", "caused", "let to"],
          tip: "make 人 do「人に〜させる」(to は不要)"
        },
        {
          en: "A lack of sleep [causes] many students to feel tired.",
          ja: "睡眠不足のせいで、多くの生徒が疲れを感じている。",
          alt: ["makes", "lets", "has"],
          tip: "cause 人 to do「人が〜する原因になる」"
        }
      ],
      summary: [
        "物 ＋ take 人 to 〜 ＝ 〜に行ける",
        "enable 人 to do ＝ 〜のおかげで…できる",
        "prevent 人 from doing ＝ …できない"
      ]
    },
    {
      id: "c3-u02",
      title: "名詞構文",
      en: "Nominal Style",
      tag: "文法",
      goal: "動詞や形容詞を名詞にして、文をまとめて書ける",
      points: [
        {
          h: "動詞を名詞にする",
          body: "「彼が到着した」を his arrival のような名詞のかたまりにすると、1つの文に情報をつめこめる。論説文でよく使う書き方。",
          form: "所有格 ＋ 名詞（＋ of 〜）",
          ex: "[His arrival] surprised everyone.",
          exja: "彼が到着したので、みんな驚いた。"
        },
        {
          h: "形容詞を名詞にする",
          body: "important → importance、difficult → difficulty のように形容詞も名詞にできる。「〜の大切さ」を1つのかたまりで主語や目的語にできる。",
          form: "the ＋ 名詞 ＋ of 〜",
          ex: "We know [the importance] of sleep.",
          exja: "私たちは睡眠が大切だと知っている。"
        },
        {
          h: "形容詞 ＋ 名詞 ＝ 副詞の意味",
          body: "a good speaker of English は「英語を上手に話す人」。名詞の前の形容詞が、日本語では「〜に…する」という副詞のように訳されることが多い。",
          form: "a ＋ 形容詞 ＋ 〜er（人）",
          ex: "She is [a fast runner].",
          exja: "彼女は走るのが速い。"
        }
      ],
      sentences: [
        {
          en: "He is [a good cook].",
          ja: "彼は料理が上手だ。",
          alt: ["a well cook", "good cooking", "a cook good"],
          tip: "a good 〜er「〜するのが上手な人」"
        },
        {
          en: "[Her sudden death] shocked the whole town.",
          ja: "彼女が急に亡くなったことは、町中に衝撃を与えた。",
          alt: ["She suddenly died", "Her suddenly die", "Her dead sudden"],
          tip: "die → death「死ぬこと」を名詞で"
        },
        {
          en: "We waited for [the arrival] of the train.",
          ja: "私たちは電車が着くのを待った。",
          alt: ["the arrive", "the arriving to", "arrived"],
          tip: "arrive → arrival（名詞）"
        },
        {
          en: "I realized [the difficulty] of the task.",
          ja: "その仕事がむずかしいと私は気づいた。",
          alt: ["the difficult", "difficultly", "the difficulting"],
          tip: "difficult → difficulty（名詞）"
        },
        {
          en: "[A careful reading] of the text helps you understand it.",
          ja: "文章を注意深く読めば、理解しやすくなる。",
          alt: ["Carefully read", "A carefully reading", "A careful read of"],
          tip: "形容詞 ＋ 名詞で「注意深く読むこと」"
        },
        {
          en: "[The rapid growth] of the city caused traffic problems.",
          ja: "その都市が急に大きくなったことで、交通問題が起きた。",
          alt: ["The rapidly grow", "The rapid grow", "Rapidly growing of"],
          tip: "grow rapidly → rapid growth"
        }
      ],
      summary: [
        "arrive → arrival のように名詞化",
        "the importance of 〜 ＝ 〜の大切さ",
        "a good 〜er ＝ 〜するのが上手な人"
      ]
    },
    {
      id: "c3-u03",
      title: "譲歩と条件",
      en: "Concession and Condition",
      tag: "文法",
      goal: "「〜だけれど」「〜でない限り」を正しく使い分けられる",
      points: [
        {
          h: "although ＝ 〜だけれども",
          body: "although / though のあとには「主語＋動詞」が来る。前置詞の despite / in spite of のあとには名詞が来る。どちらも「〜にもかかわらず」の意味。",
          form: "Although S V, S V. ／ Despite ＋ 名詞",
          ex: "[Although] it was raining, we played soccer.",
          exja: "雨が降っていたけれど、私たちはサッカーをした。"
        },
        {
          h: "even if と though",
          body: "even if は「たとえ〜でも（そうなるかわからない仮定）」、even though は「実際に〜なのに（事実）」。事実かどうかで使い分ける。",
          form: "Even if S V, … ／ Even though S V, …",
          ex: "[Even if] it rains, the game will be held.",
          exja: "たとえ雨が降っても、試合は行われる。"
        },
        {
          h: "unless／as long as",
          body: "unless は「〜しない限り（＝ if … not）」、as long as は「〜しさえすれば・〜する限りは」。条件を表す接続詞で、未来のことも現在形で書く。",
          form: "unless S V ／ as long as S V",
          ex: "You'll be late [unless] you hurry.",
          exja: "急がないと遅れるよ。"
        }
      ],
      sentences: [
        {
          en: "[Although] he was tired, he kept working.",
          ja: "彼は疲れていたが、働き続けた。",
          alt: ["Despite", "Because of", "In spite of"],
          tip: "although ＋ S V「〜だけれども」"
        },
        {
          en: "We went out [despite] the rain.",
          ja: "雨にもかかわらず、私たちは出かけた。",
          alt: ["although", "even though", "despite of"],
          tip: "despite ＋ 名詞（of は不要）"
        },
        {
          en: "I will go [even if] it snows tomorrow.",
          ja: "たとえ明日雪が降っても、私は行く。",
          alt: ["even", "despite", "in spite of"],
          tip: "even if「たとえ〜でも」（仮定）"
        },
        {
          en: "You can't enter [unless] you have a ticket.",
          ja: "チケットを持っていなければ、入れません。",
          alt: ["if", "as long as", "despite"],
          tip: "unless ＝ if … not「〜しない限り」"
        },
        {
          en: "You can stay here [as long as] you keep quiet.",
          ja: "静かにしている限り、ここにいてもいいよ。",
          alt: ["unless", "despite", "even though not"],
          tip: "as long as「〜しさえすれば」"
        },
        {
          en: "[Even though] she studied hard, she failed the test.",
          ja: "一生けんめい勉強したのに、彼女はテストに落ちた。",
          alt: ["Despite", "Unless", "As long as"],
          tip: "even though「実際に〜なのに」（事実）"
        }
      ],
      summary: [
        "although ＋ 文 ／ despite ＋ 名詞",
        "even if 仮定／even though 事実",
        "unless ＝ 〜しない限り"
      ]
    },
    {
      id: "c3-u04",
      title: "意見文の型",
      en: "Essay Structure",
      tag: "表現",
      goal: "序論・本論・結論の型で、意見文を組み立てられる",
      points: [
        {
          h: "序論：立場をはっきり言う",
          body: "最初の段落で、テーマに対して賛成か反対かを1文で言い切る。この文を「主題文（thesis statement）」と呼ぶ。読み手は最初に結論を知りたい。",
          form: "I believe that 〜. ／ In my opinion, 〜.",
          ex: "[In my opinion], students should wear uniforms.",
          exja: "私の考えでは、生徒は制服を着るべきだ。"
        },
        {
          h: "本論：理由を順番に",
          body: "理由は2つか3つにしぼり、First / Second / Finally で順に示す。それぞれの理由には、具体例や体験を1つそえると説得力が増す。",
          form: "First, 〜. Second, 〜. Finally, 〜.",
          ex: "[First], uniforms save time in the morning.",
          exja: "第一に、制服があると朝の時間が節約できる。"
        },
        {
          h: "結論：くり返してしめる",
          body: "最後の段落は In conclusion / For these reasons で始め、序論の意見を別の言い方でくり返す。新しい理由はここでは出さない。",
          form: "For these reasons, I believe 〜.",
          ex: "[For these reasons], I support school uniforms.",
          exja: "これらの理由から、私は制服に賛成だ。"
        }
      ],
      sentences: [
        {
          en: "[I believe that] reading books is important.",
          ja: "読書は大切だと私は考える。",
          alt: ["I believe to", "I am believe", "I believing that"],
          tip: "I believe that ＋ 文「〜だと考える」"
        },
        {
          en: "[In my opinion], homework should be reduced.",
          ja: "私の考えでは、宿題は減らすべきだ。",
          alt: ["In my opinions of", "On my opinion", "By my opinion"],
          tip: "In my opinion「私の考えでは」"
        },
        {
          en: "I have two reasons [for this opinion].",
          ja: "この意見には理由が2つある。",
          alt: ["to this opinion of", "at this opinion", "with opinion this"],
          tip: "reasons for 〜「〜の理由」"
        },
        {
          en: "[First], exercise keeps us healthy.",
          ja: "第一に、運動は私たちを健康に保つ。",
          alt: ["At first", "Firstly of all", "The first"],
          tip: "First,「第一に」(At first は「最初は」)"
        },
        {
          en: "[In conclusion], I think we should recycle more.",
          ja: "結論として、私たちはもっとリサイクルすべきだと思う。",
          alt: ["In conclude", "At conclusion", "To conclusion"],
          tip: "In conclusion「結論として」"
        },
        {
          en: "[For these reasons], I agree with the idea.",
          ja: "これらの理由から、私はその考えに賛成だ。",
          alt: ["By these reasons", "With this reasons", "For this reasons"],
          tip: "For these reasons「これらの理由から」"
        }
      ],
      summary: [
        "序論：In my opinion, 〜.",
        "本論：First, … Second, …",
        "結論：For these reasons, 〜."
      ]
    },
    {
      id: "c3-u05",
      title: "反論と再反論",
      en: "Counterarguments",
      tag: "表現",
      goal: "反対意見を認めたうえで、自分の意見を守れる",
      points: [
        {
          h: "反対意見を紹介する",
          body: "Some people argue that 〜 で、自分とちがう意見をまず紹介する。相手の考えも知っていると示すことで、文章が公平で説得力のあるものになる。",
          form: "Some people argue that 〜.",
          ex: "[Some people argue that] smartphones are harmful.",
          exja: "スマートフォンは有害だと主張する人もいる。"
        },
        {
          h: "一部を認める",
          body: "It is true that 〜 で「たしかに〜だ」と相手の意見の正しい部分を認める。そのあとに but / however を続けて、自分の主張に戻すのが定番の流れ。",
          form: "It is true that 〜, but …",
          ex: "[It is true that] cars are convenient, but they pollute the air.",
          exja: "たしかに車は便利だが、空気を汚す。"
        },
        {
          h: "However で再反論",
          body: "However, 〜 で「しかしながら」と自分の意見を述べ直す。「理由」や「データ」を示して、反対意見より自分の意見が強いことを伝える。",
          form: "However, 〜.",
          ex: "[However], this is not always the case.",
          exja: "しかし、いつもそうとは限らない。"
        }
      ],
      sentences: [
        {
          en: "Some people [argue that] school should start later.",
          ja: "学校はもっと遅く始まるべきだと主張する人もいる。",
          alt: ["argues that", "arguing that", "argue to"],
          tip: "argue that 〜「〜と主張する」"
        },
        {
          en: "[It is true] that online classes are convenient.",
          ja: "たしかにオンライン授業は便利だ。",
          alt: ["It is truth", "It true is", "It is truly"],
          tip: "It is true that 〜「たしかに〜だ」"
        },
        {
          en: "[However], they cannot replace real friends.",
          ja: "しかし、それらは本当の友達の代わりにはならない。",
          alt: ["But also", "Although", "Despite"],
          tip: "However, 〜「しかしながら」（文頭でコンマ）"
        },
        {
          en: "Others may say that it [costs too much].",
          ja: "費用がかかりすぎると言う人もいるかもしれない。",
          alt: ["costs too many", "is costing too much of", "cost too much of"],
          tip: "cost too much「費用がかかりすぎる」"
        },
        {
          en: "On [the other hand], it saves a lot of time.",
          ja: "その一方で、それは多くの時間を節約する。",
          alt: ["other hand", "the another hand", "the others hand"],
          tip: "On the other hand「その一方で」"
        },
        {
          en: "I [understand this point], but I still disagree.",
          ja: "その点はわかるが、それでも私は反対だ。",
          alt: ["am understanding this point of", "understand to this point", "understood this point of"],
          tip: "I understand 〜, but …「〜はわかるが…」"
        }
      ],
      summary: [
        "Some people argue that 〜.",
        "It is true that 〜, but …",
        "However, 〜. で自分の意見に戻る"
      ]
    },
    {
      id: "c3-u06",
      title: "データを説明する",
      en: "Describing Data",
      tag: "表現",
      goal: "グラフや表の数字の変化を、英語で正確に言える",
      points: [
        {
          h: "増える・減る",
          body: "increase / rise は「増える」、decrease / fall は「減る」。変化の大きさは sharply（急に）や slightly（少し）でそえる。",
          form: "主語 ＋ increase / decrease ＋ 副詞",
          ex: "The number of visitors [increased sharply].",
          exja: "訪問者の数は急激に増えた。"
        },
        {
          h: "割合を言う",
          body: "account for 〜 は「〜を占める」。percent は「〜パーセント」で複数形にしない。about や more than をつけると、ざっくりした数も言える。",
          form: "A accounts for 〜 percent of B.",
          ex: "Rice [accounts for] 40 percent of the total.",
          exja: "米が全体の40パーセントを占めている。"
        },
        {
          h: "グラフを紹介する",
          body: "The graph shows 〜 で、まず何のグラフかを言う。from A to B（AからBまで）や between A and B で期間を示すと分かりやすい。",
          form: "The graph shows 〜 from A to B.",
          ex: "[The graph shows] changes in the population.",
          exja: "このグラフは人口の変化を示している。"
        }
      ],
      sentences: [
        {
          en: "[The graph shows] the number of tourists.",
          ja: "このグラフは観光客の数を示している。",
          alt: ["The graph is showing of", "The graph show", "The graph says to"],
          tip: "The graph shows 〜「グラフは〜を示す」"
        },
        {
          en: "Sales [increased sharply] last year.",
          ja: "昨年、売り上げが急激に増えた。",
          alt: ["increased sharp", "were increased sharply", "sharp increased"],
          tip: "increase sharply「急激に増える」"
        },
        {
          en: "The price [decreased slightly] in May.",
          ja: "5月に価格はわずかに下がった。",
          alt: ["decreased slight", "was decreased slight", "slight decreased"],
          tip: "decrease slightly「わずかに減る」"
        },
        {
          en: "Young people [account for] half of the users.",
          ja: "若者が利用者の半分を占めている。",
          alt: ["account", "account of", "are accounted"],
          tip: "account for 〜「〜を占める」"
        },
        {
          en: "About 30 [percent of] students walk to school.",
          ja: "約30パーセントの生徒が歩いて登校している。",
          alt: ["percents of", "percent", "percentage"],
          tip: "percent は複数形にしない"
        },
        {
          en: "The population rose [from 5,000 to] 8,000.",
          ja: "人口は5,000人から8,000人に増えた。",
          alt: ["since 5,000 to", "from 5,000 until", "between 5,000 to"],
          tip: "from A to B「AからBへ」"
        }
      ],
      summary: [
        "increase sharply ＝ 急に増える",
        "account for 〜 ＝ 〜を占める",
        "The graph shows 〜."
      ]
    },
    {
      id: "c3-u07",
      title: "問題と解決策",
      en: "Problems and Solutions",
      tag: "表現",
      goal: "社会の問題を説明し、解決策を提案できる",
      points: [
        {
          h: "問題を示す",
          body: "One serious problem is 〜 で問題を紹介する。そのあとに「なぜ問題なのか」を1〜2文で説明すると、解決策の必要性が読み手に伝わる。",
          form: "One serious problem is that 〜.",
          ex: "[One serious problem is] food waste.",
          exja: "深刻な問題の1つは食品ロスだ。"
        },
        {
          h: "解決策を提案する",
          body: "One solution is to 〜（解決策の1つは〜すること）や We should 〜 で提案する。何を・だれが・どうするかを具体的に書くことが大切。",
          form: "One solution is to ＋ 動詞の原形.",
          ex: "[One solution is to] use public transportation.",
          exja: "解決策の1つは、公共交通機関を使うことだ。"
        },
        {
          h: "必要性・効果を言う",
          body: "It is necessary for 人 to 〜 は「人が〜することが必要だ」。This would help 〜 で「これは〜の助けになるだろう」と効果を予想して結ぶ。",
          form: "It is necessary for 人 to 〜.",
          ex: "[It is necessary for] us to save energy.",
          exja: "私たちはエネルギーを節約する必要がある。"
        }
      ],
      sentences: [
        {
          en: "One serious [problem is] plastic waste.",
          ja: "深刻な問題の1つはプラスチックごみだ。",
          alt: ["problems is", "problem are", "problems are"],
          tip: "One serious problem is 〜"
        },
        {
          en: "One solution [is to] plant more trees.",
          ja: "解決策の1つは、もっと木を植えることだ。",
          alt: ["are to", "to", "is for"],
          tip: "One solution is to do「〜すること」"
        },
        {
          en: "We [should reduce] the use of plastic bags.",
          ja: "私たちはレジ袋の使用を減らすべきだ。",
          alt: ["should reducing", "should to reduce", "should reduced"],
          tip: "should ＋ 動詞の原形「〜すべきだ」"
        },
        {
          en: "It is [necessary for] the government to act now.",
          ja: "政府は今すぐ行動する必要がある。",
          alt: ["necessary of", "need for", "necessity for"],
          tip: "It is necessary for 人 to do"
        },
        {
          en: "This [would help] reduce traffic jams.",
          ja: "これは交通渋滞を減らす助けになるだろう。",
          alt: ["would helping", "would helps", "would to help"],
          tip: "help ＋ 動詞の原形「〜するのに役立つ」"
        },
        {
          en: "If we [work together], we can solve this problem.",
          ja: "力を合わせれば、この問題は解決できる。",
          alt: ["will work together", "worked together will", "working together"],
          tip: "条件の if 節は未来でも現在形"
        }
      ],
      summary: [
        "One serious problem is 〜.",
        "One solution is to 〜.",
        "This would help 〜. で効果を言う"
      ]
    },
    {
      id: "c3-u08",
      title: "ディベートの表現",
      en: "Debate Expressions",
      tag: "表現",
      goal: "ディベートで主張・質問・反ばくを英語で言える",
      points: [
        {
          h: "立場を述べる",
          body: "最初に We agree / disagree with 〜 で立場をはっきり言う。そのあと We have two points. のように論点の数を予告すると聞きやすい。",
          form: "We agree / disagree with the idea that 〜.",
          ex: "We [disagree with] the idea that homework is useless.",
          exja: "私たちは宿題は役に立たないという考えに反対です。"
        },
        {
          h: "相手に質問する",
          body: "Could you explain 〜? や What do you mean by 〜? で、相手の主張の弱い所を質問する。ていねいな言い方を使うのがマナー。",
          form: "Could you explain 〜? ／ What do you mean by 〜?",
          ex: "[What do you mean by] effective?",
          exja: "「効果的」とはどういう意味ですか。"
        },
        {
          h: "反ばくする",
          body: "I'd like to point out that 〜（〜を指摘したい）や That is not always true.（いつも正しいとは限らない）で反ばくする。",
          form: "I'd like to point out that 〜.",
          ex: "I'd like to [point out] that the data is old.",
          exja: "そのデータは古いということを指摘したい。"
        }
      ],
      sentences: [
        {
          en: "We [agree with] the idea.",
          ja: "私たちはその考えに賛成です。",
          alt: ["agree to with", "are agree with", "agreeing"],
          tip: "agree with 〜「〜に賛成する」"
        },
        {
          en: "We have [two points] to make.",
          ja: "私たちには述べたい論点が2つあります。",
          alt: ["two point", "the two point", "two of point"],
          tip: "論点の数を最初に予告する"
        },
        {
          en: "[Could you explain] your second point?",
          ja: "2つ目の論点を説明していただけますか。",
          alt: ["Could you explaining", "Could you to explain", "Could explain you"],
          tip: "Could you ＋ 動詞の原形？（ていねいな依頼）"
        },
        {
          en: "What do you [mean by] fair?",
          ja: "「公平」とはどういう意味ですか。",
          alt: ["mean of", "meaning by", "means by"],
          tip: "mean by 〜「〜で…を意味する」"
        },
        {
          en: "That is [not always] true.",
          ja: "それはいつも正しいとは限りません。",
          alt: ["always not", "never always", "not ever"],
          tip: "not always「いつも〜とは限らない」（部分否定）"
        },
        {
          en: "I'd like to [point out] that their plan is too expensive.",
          ja: "彼らの計画は費用がかかりすぎると指摘したいと思います。",
          alt: ["point", "pointing out", "point out of"],
          tip: "point out that 〜「〜を指摘する」"
        }
      ],
      summary: [
        "We agree / disagree with 〜.",
        "What do you mean by 〜?",
        "point out that 〜 で反ばくする"
      ]
    },
    {
      id: "c3-u09",
      title: "要約する",
      en: "Summarizing",
      tag: "表現",
      goal: "文章の主張を、自分のことばで短くまとめられる",
      points: [
        {
          h: "筆者の主張を示す",
          body: "要約は The writer argues that 〜 や According to the passage, 〜 で始めると、筆者の意見だとはっきりする。自分の意見はまぜない。",
          form: "The writer argues that 〜.",
          ex: "[The writer argues that] sleep is important.",
          exja: "筆者は睡眠が大切だと主張している。"
        },
        {
          h: "言いかえてまとめる",
          body: "本文をそのまま写さず、自分のことばで言いかえる。具体例や数字はけずり、「一番言いたいこと」と「その理由」だけ残すのがコツ。",
          form: "主張 ＋ 理由（具体例はけずる）",
          ex: "The passage [is about] climate change.",
          exja: "この文章は気候変動についてのものだ。"
        },
        {
          h: "ひとことでしめる",
          body: "In short（要するに）や In other words（言いかえれば）を使って、内容を1文に短くまとめる。要約の最後や、長い説明のあとに便利。",
          form: "In short, 〜. ／ In other words, 〜.",
          ex: "[In short], we need more sleep.",
          exja: "要するに、私たちはもっと睡眠が必要だ。"
        }
      ],
      sentences: [
        {
          en: "This passage [is about] online shopping.",
          ja: "この文章はネットショッピングについてのものだ。",
          alt: ["is of", "is about of", "abouts"],
          tip: "be about 〜「〜についてのものだ」"
        },
        {
          en: "The writer [argues that] we should eat less meat.",
          ja: "筆者は、私たちは肉を食べる量を減らすべきだと主張している。",
          alt: ["argue that", "arguing that", "argues to"],
          tip: "argues that 〜（三人称単数の s）"
        },
        {
          en: "[According to] the passage, bees are in danger.",
          ja: "この文章によると、ミツバチは危機にある。",
          alt: ["According", "Accordingly to", "According for"],
          tip: "according to 〜「〜によると」"
        },
        {
          en: "[In short], exercise improves our mood.",
          ja: "要するに、運動は気分をよくする。",
          alt: ["In shortly", "For short", "At short"],
          tip: "In short「要するに」"
        },
        {
          en: "[In other words], money cannot buy happiness.",
          ja: "言いかえれば、お金で幸せは買えない。",
          alt: ["In another words", "In other word", "With other words"],
          tip: "In other words「言いかえれば」"
        },
        {
          en: "The main point is that [we must protect] nature.",
          ja: "主な論点は、私たちが自然を守らなければならないということだ。",
          alt: ["we must protecting", "we must to protect", "we musts protect"],
          tip: "The main point is that 〜"
        }
      ],
      summary: [
        "The writer argues that 〜.",
        "具体例はけずり、主張と理由を残す",
        "In short, 〜. ＝ 要するに"
      ]
    },
    {
      id: "c3-u10",
      title: "メールと手紙",
      en: "Emails and Letters",
      tag: "表現",
      goal: "目的がはっきりした、ていねいなメールが書ける",
      points: [
        {
          h: "用件を最初に言う",
          body: "あいさつ（Dear 〜,）のあとすぐに I am writing to 〜 で、メールの目的を言う。相手は最初の1文で「何の用件か」をつかめる。",
          form: "Dear 〜, I am writing to ＋ 動詞の原形.",
          ex: "[I am writing to] ask about your summer program.",
          exja: "夏のプログラムについてお聞きしたくご連絡しました。"
        },
        {
          h: "ていねいにお願いする",
          body: "Could you 〜? や I would appreciate it if you could 〜. で、ていねいにお願いする。友達へのメールより、かしこまった言い方を選ぶ。",
          form: "I would appreciate it if you could 〜.",
          ex: "[Could you] send me more information?",
          exja: "もっと情報を送っていただけますか。"
        },
        {
          h: "結びのことば",
          body: "最後は I look forward to 〜ing（〜を楽しみにしています）でしめ、Best regards, ＋ 名前 で終える。to のあとは名詞か 〜ing。",
          form: "I look forward to ＋ 〜ing. Best regards,",
          ex: "I look forward to [hearing] from you.",
          exja: "お返事を楽しみにしています。"
        }
      ],
      sentences: [
        {
          en: "[Thank you for] your quick reply.",
          ja: "早いお返事をありがとうございます。",
          alt: ["Thank you of", "Thanks you for", "Thank for"],
          tip: "Thank you for 〜「〜をありがとう」"
        },
        {
          en: "I am [writing to] ask about the event.",
          ja: "イベントについてお聞きしたく、ご連絡しました。",
          alt: ["writing for", "write to", "written to"],
          tip: "I am writing to do「〜の件で」"
        },
        {
          en: "[Could you] tell me the date of the meeting?",
          ja: "会議の日付を教えていただけますか。",
          alt: ["Could you to", "Could", "Could you please to"],
          tip: "Could you 〜?「〜していただけますか」"
        },
        {
          en: "I would [appreciate it if] you could help me.",
          ja: "手伝っていただけるとありがたいです。",
          alt: ["appreciate if it", "appreciating it if", "appreciate it that"],
          tip: "appreciate it if 〜「〜だと助かる」"
        },
        {
          en: "I have [attached] my schedule to this email.",
          ja: "このメールに私の予定表を添付しました。",
          alt: ["attach", "attaching", "been attached"],
          tip: "attach A to B「AをBに添付する」"
        },
        {
          en: "I look forward to [seeing] you next week.",
          ja: "来週お会いできるのを楽しみにしています。",
          alt: ["see", "be seen", "saw"],
          tip: "look forward to ＋ 〜ing"
        }
      ],
      summary: [
        "I am writing to 〜. で用件",
        "Could you 〜? でていねいに依頼",
        "I look forward to 〜ing."
      ]
    },
    {
      id: "c3-u11",
      title: "ひかえめに言う",
      en: "Hedging",
      tag: "表現",
      goal: "言い切りすぎない、ひかえめな言い方ができる",
      points: [
        {
          h: "言い切らない理由",
          body: "「すべての人が〜だ」と言い切ると、反例1つで主張がくずれる。論理的な文章では、seem や may で少しひかえめに言うほうが信頼されやすい。",
          form: "It seems that 〜. ／ S may 〜.",
          ex: "[It seems that] he is busy today.",
          exja: "彼は今日いそがしいようだ。"
        },
        {
          h: "傾向を言う",
          body: "tend to 〜 は「〜する傾向がある」。always（いつも）と言い切らず、「そうなることが多い」と言える。most や many もひかえめに使える。",
          form: "S tend to ＋ 動詞の原形.",
          ex: "Teenagers [tend to] stay up late.",
          exja: "十代の若者は夜ふかしする傾向がある。"
        },
        {
          h: "可能性を言う",
          body: "may / might / could は「〜かもしれない」。probably（たぶん）や likely（〜しそうな）も可能性の強さを表す。確かさの度合いを選んで使う。",
          form: "S may / might ＋ 動詞の原形.",
          ex: "This [may] be a good solution.",
          exja: "これはよい解決策かもしれない。"
        }
      ],
      sentences: [
        {
          en: "[It seems that] she is happy.",
          ja: "彼女は幸せそうだ。",
          alt: ["It seems to", "It is seem that", "It seeming that"],
          tip: "It seems that 〜「〜のようだ」"
        },
        {
          en: "People [tend to] buy cheaper products.",
          ja: "人は安い商品を買う傾向がある。",
          alt: ["tend", "tend for", "are tend to"],
          tip: "tend to do「〜する傾向がある」"
        },
        {
          en: "This [may] be the reason for the problem.",
          ja: "これがその問題の原因かもしれない。",
          alt: ["may to", "mays", "is may"],
          tip: "may ＋ 動詞の原形「〜かもしれない」"
        },
        {
          en: "It will [probably] rain this afternoon.",
          ja: "今日の午後はたぶん雨が降るだろう。",
          alt: ["probable", "probability", "be probably"],
          tip: "probably「たぶん」は副詞"
        },
        {
          en: "[Most] students seem to like the new rule.",
          ja: "ほとんどの生徒は新しい規則を気に入っているようだ。",
          alt: ["Most of", "Almost", "The most"],
          tip: "most ＋ 名詞「ほとんどの〜」"
        },
        {
          en: "Social media [is likely to] change our lives.",
          ja: "SNSは私たちの生活を変える可能性が高い。",
          alt: ["is likely", "likes to", "is like to"],
          tip: "be likely to do「〜しそうだ」"
        }
      ],
      summary: [
        "It seems that 〜. ＝ 〜のようだ",
        "tend to 〜 ＝ 〜する傾向がある",
        "may / be likely to で可能性を言う"
      ]
    },
    {
      id: "c3-u12",
      title: "定義と具体例",
      en: "Definitions and Examples",
      tag: "表現",
      goal: "ことばの意味を定義し、具体例で説明できる",
      points: [
        {
          h: "ことばを定義する",
          body: "むずかしい用語は、最初に定義してから使う。X refers to 〜（Xは〜を指す）や X means 〜 を使う。定義が共有されると議論がかみ合う。",
          form: "X refers to 〜. ／ X means 〜.",
          ex: "Recycling [refers to] using things again.",
          exja: "リサイクルとは物を再び使うことを指す。"
        },
        {
          h: "例を名詞で並べる",
          body: "such as 〜 は「〜のような」。後ろに名詞を並べて、例を短くあげられる。例が3つ以上なら A, B, and C の形にする。",
          form: "名詞 ＋ such as A, B, and C",
          ex: "I like fruits [such as] apples and grapes.",
          exja: "私はリンゴやブドウのような果物が好きだ。"
        },
        {
          h: "例を文で示す",
          body: "For example, / For instance, は文の頭に置き、例を1つの文で示す。抽象的な主張のすぐあとに置くと、読み手がイメージしやすくなる。",
          form: "For example, 〜. ／ For instance, 〜.",
          ex: "[For instance], many people use e-books.",
          exja: "たとえば、多くの人が電子書籍を使っている。"
        }
      ],
      sentences: [
        {
          en: "A volunteer is a person who [works for free].",
          ja: "ボランティアとは、無料で働く人のことだ。",
          alt: ["work for free", "working for free", "is work for free"],
          tip: "a person who 〜「〜する人」"
        },
        {
          en: "Fair trade [refers to] fair prices for farmers.",
          ja: "フェアトレードとは、農家への公正な価格を指す。",
          alt: ["refers", "refers of", "is referred"],
          tip: "refer to 〜「〜を指す」"
        },
        {
          en: "This word [means] very tired.",
          ja: "この単語は「とても疲れた」という意味だ。",
          alt: ["is mean", "meaning", "means of"],
          tip: "means 〜「〜を意味する」"
        },
        {
          en: "We can play sports [such as] tennis and golf.",
          ja: "私たちはテニスやゴルフのようなスポーツができる。",
          alt: ["such", "as such", "so as"],
          tip: "such as ＋ 名詞「〜のような」"
        },
        {
          en: "[For example], Japan has many old temples.",
          ja: "たとえば、日本には多くの古い寺がある。",
          alt: ["For examples", "By example", "As example"],
          tip: "For example,「たとえば」"
        },
        {
          en: "[For instance], some schools allow students to use phones.",
          ja: "たとえば、生徒が電話を使うことを認めている学校もある。",
          alt: ["For instances", "In instance", "By instance"],
          tip: "For instance,「たとえば」"
        }
      ],
      summary: [
        "X refers to 〜. ＝ Xは〜を指す",
        "such as ＋ 名詞 ＝ 〜のような",
        "For example, ＋ 文 で具体例"
      ]
    }
  ]
});
