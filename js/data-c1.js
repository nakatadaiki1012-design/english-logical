window.LX = window.LX || { courses: [] };
window.LX.courses.push({
  id: "c1", name: "論理表現Ⅰ", short: "Ⅰ",
  desc: "基本の文法で、自分のことを正しく伝える",
  units: [
    {
      id: "c1-u01",
      title: "文の型（5文型）",
      en: "Sentence Patterns",
      tag: "文法",
      goal: "動詞のあとに来る形で、文の意味を決められる",
      points: [
        {
          h: "SVC は「S ＝ C」",
          body: "be動詞や become, look などのあとに来る C は、主語の状態や正体を説明する。S と C はイコールの関係になる。",
          form: "S ＋ V ＋ C",
          ex: "My sister [became] a nurse.",
          exja: "姉は看護師になった。"
        },
        {
          h: "SVOO は「人に物を」",
          body: "give, show, tell などは目的語を2つとれる。「人（O₁）に 物（O₂）を」の順。to や for を使って SVO の形にもできる。",
          form: "S ＋ V ＋ O₁（人）＋ O₂（物）",
          ex: "My father [gave me] a watch.",
          exja: "父は私に腕時計をくれた。"
        },
        {
          h: "SVOC の C は O の説明",
          body: "make や keep のあとに「O ＋ C」が来ると、「O を C の状態にする」という意味。C には形容詞や名詞が入る。",
          form: "S ＋ V ＋ O ＋ C",
          ex: "The news made me [happy].",
          exja: "その知らせで私はうれしくなった。"
        }
      ],
      sentences: [
        {
          en: "She [looks] tired today.",
          ja: "彼女は今日、疲れているように見える。",
          alt: ["looks at", "sees", "watches"],
          tip: "look ＋ 形容詞「〜に見える」（SVC）"
        },
        {
          en: "My sister [became] a nurse last year.",
          ja: "姉は去年、看護師になった。",
          alt: ["became to", "got to", "turned to"],
          tip: "become ＋ 名詞「〜になる」（SVC）"
        },
        {
          en: "My father [gave me] a watch.",
          ja: "父は私に腕時計をくれた。",
          alt: ["gave to me", "gave for me", "gave me to"],
          tip: "give ＋ 人 ＋ 物「人に物をあげる」"
        },
        {
          en: "Could you [show me] the way to the station?",
          ja: "駅へ行く道を教えてくれませんか。",
          alt: ["show to me", "show for me", "show me to"],
          tip: "show ＋ 人 ＋ 物「人に物を見せる・示す」"
        },
        {
          en: "The news made me [happy].",
          ja: "その知らせで私はうれしくなった。",
          alt: ["happily", "happiness", "to be happy"],
          tip: "make ＋ O ＋ C「O を C にする」"
        },
        {
          en: "We should [keep the room] clean.",
          ja: "私たちは部屋をきれいにしておくべきだ。",
          alt: ["keep clean the room", "keep the room to", "keep room"],
          tip: "keep ＋ O ＋ C「O を C のままにしておく」"
        }
      ],
      summary: [
        "SVC：S ＝ C（become, look）",
        "SVOO：人に物を（give, show）",
        "SVOC：O を C にする（make, keep）"
      ]
    },
    {
      id: "c1-u02",
      title: "時制（現在・過去・進行）",
      en: "Present, Past and Progressive",
      tag: "文法",
      goal: "いつのことかに合わせて、動詞の形を選べる",
      points: [
        {
          h: "現在形は「いつもの事実」",
          body: "現在形は、今だけでなく習慣やいつも変わらない事実を表す。主語が3人称単数なら動詞に -s をつける。",
          form: "S ＋ 動詞の現在形（-s）",
          ex: "My brother [walks] to school every day.",
          exja: "弟は毎日歩いて学校へ行く。"
        },
        {
          h: "過去形は「終わったこと」",
          body: "過去形は、過去のある時点で起きて、もう終わったことを表す。yesterday, last week, ago などとよく一緒に使う。",
          form: "S ＋ 動詞の過去形",
          ex: "I [visited] Kyoto last summer.",
          exja: "私は去年の夏、京都を訪れた。"
        },
        {
          h: "進行形は「その最中」",
          body: "be動詞 ＋ -ing で「〜している最中」を表す。過去進行形 was / were ＋ -ing は「そのとき〜していた」。",
          form: "be ＋ 動詞の -ing 形",
          ex: "I [was taking] a bath when you called.",
          exja: "あなたが電話をくれたとき、私はお風呂に入っていた。"
        }
      ],
      sentences: [
        {
          en: "My brother [walks] to school every day.",
          ja: "弟は毎日歩いて学校へ行く。",
          alt: ["walk", "is walk", "walking"],
          tip: "習慣は現在形。3人称単数なので -s"
        },
        {
          en: "The sun [rises] in the east.",
          ja: "太陽は東からのぼる。",
          alt: ["rise", "rose", "is rise"],
          tip: "変わらない事実は現在形"
        },
        {
          en: "I [visited] Kyoto last summer.",
          ja: "私は去年の夏、京都を訪れた。",
          alt: ["visit", "have visited", "am visiting"],
          tip: "last summer は過去。過去形を使う"
        },
        {
          en: "Look! The children [are playing] in the park.",
          ja: "見て！子どもたちが公園で遊んでいる。",
          alt: ["play", "plays", "is playing"],
          tip: "今まさに〜している ＝ 現在進行形"
        },
        {
          en: "I [was taking] a bath when you called.",
          ja: "あなたが電話をくれたとき、私はお風呂に入っていた。",
          alt: ["take", "am taking", "were taking"],
          tip: "過去のある時点での最中 ＝ 過去進行形"
        },
        {
          en: "What [were you doing] at eight last night?",
          ja: "昨夜8時に、あなたは何をしていましたか。",
          alt: ["did you doing", "are you doing", "you were doing"],
          tip: "疑問文は be動詞を主語の前に出す"
        }
      ],
      summary: [
        "現在形：習慣・変わらない事実",
        "過去形：もう終わったこと",
        "進行形：be ＋ -ing で「最中」"
      ]
    },
    {
      id: "c1-u03",
      title: "現在完了",
      en: "Present Perfect",
      tag: "文法",
      goal: "過去と今がつながっていることを have ＋ 過去分詞で表せる",
      points: [
        {
          h: "継続「ずっと〜している」",
          body: "過去に始まったことが今も続いているとき、have ＋ 過去分詞を使う。for（期間）や since（始まった時）と一緒に使うことが多い。",
          form: "have ＋ 過去分詞 ＋ for ／ since",
          ex: "I [have lived] in Osaka for ten years.",
          exja: "私は10年間大阪に住んでいる。"
        },
        {
          h: "経験「〜したことがある」",
          body: "今までに経験したことは現在完了で言う。回数は once, twice, 〜 times。「一度もない」は never を使う。",
          form: "have ＋ 過去分詞 ＋ before / once など",
          ex: "I [have never seen] snow.",
          exja: "私は一度も雪を見たことがない。"
        },
        {
          h: "完了「もう〜した」",
          body: "ちょうど終わったことや、その結果が今に残っていることを表す。just, already, yet とよく使う。yet は疑問文・否定文で使う。",
          form: "have ＋ just / already ＋ 過去分詞",
          ex: "I [have just finished] my homework.",
          exja: "私はちょうど宿題を終えたところだ。"
        }
      ],
      sentences: [
        {
          en: "I [have lived] in Osaka for ten years.",
          ja: "私は10年間大阪に住んでいる。",
          alt: ["live", "lived", "am living"],
          tip: "for ＋ 期間で「ずっと」＝ 継続"
        },
        {
          en: "She has been sick [since] last Monday.",
          ja: "彼女はこの前の月曜日からずっと具合が悪い。",
          alt: ["for", "from", "ago"],
          tip: "since ＋ 始まった時「〜以来」"
        },
        {
          en: "I [have never seen] snow.",
          ja: "私は一度も雪を見たことがない。",
          alt: ["have never saw", "have never see", "have seen never"],
          tip: "never は have と過去分詞の間"
        },
        {
          en: "Have you ever [been] to Hokkaido?",
          ja: "あなたは北海道に行ったことがありますか。",
          alt: ["being", "went", "go"],
          tip: "have been to 〜「〜に行ったことがある」"
        },
        {
          en: "I [have just finished] my homework.",
          ja: "私はちょうど宿題を終えたところだ。",
          alt: ["just finished have", "have just finish", "am just finished"],
          tip: "just は have と過去分詞の間"
        },
        {
          en: "The train hasn't arrived [yet].",
          ja: "電車はまだ到着していない。",
          alt: ["already", "still", "just"],
          tip: "否定文の「まだ」は yet（文末）"
        }
      ],
      summary: [
        "継続：for ＋ 期間／since ＋ 起点",
        "経験：ever, never, 〜 times",
        "完了：just, already, yet"
      ]
    },
    {
      id: "c1-u04",
      title: "助動詞",
      en: "Modal Verbs",
      tag: "文法",
      goal: "can, must, should などで判断を加えられる",
      points: [
        {
          h: "助動詞 ＋ 動詞の原形",
          body: "助動詞は動詞の前に置いて、「できる」「〜しなければならない」などの意味を加える。後ろの動詞はいつも原形。",
          form: "S ＋ 助動詞 ＋ 動詞の原形",
          ex: "She [can speak] three languages.",
          exja: "彼女は3つの言語を話せる。"
        },
        {
          h: "must と have to",
          body: "どちらも「〜しなければならない」。ただし否定にすると意味が変わる。must not は「〜してはいけない」、don't have to は「〜しなくてよい」。",
          form: "must not ／ don't have to ＋ 原形",
          ex: "You [don't have to] come tomorrow.",
          exja: "明日は来なくてもいいですよ。"
        },
        {
          h: "should と may",
          body: "should は「〜すべきだ」と助言するときに使う。may は「〜してもよい」という許可や「〜かもしれない」という推量を表す。",
          form: "should ／ may ＋ 動詞の原形",
          ex: "You [should see] a doctor.",
          exja: "あなたは医者にみてもらうべきだ。"
        }
      ],
      sentences: [
        {
          en: "She [can speak] three languages.",
          ja: "彼女は3つの言語を話せる。",
          alt: ["can speaks", "cans speak", "can to speak"],
          tip: "助動詞のあとは原形。can に -s はつかない"
        },
        {
          en: "You [must not] use your phone here.",
          ja: "ここで携帯電話を使ってはいけない。",
          alt: ["don't have to", "must", "have not to"],
          tip: "must not「〜してはいけない」（禁止）"
        },
        {
          en: "You [don't have to] come tomorrow.",
          ja: "明日は来なくてもいいですよ。",
          alt: ["must not", "have not", "don't must"],
          tip: "don't have to「〜しなくてよい」"
        },
        {
          en: "You [should see] a doctor.",
          ja: "あなたは医者にみてもらうべきだ。",
          alt: ["should to see", "should seeing", "should saw"],
          tip: "should ＋ 原形「〜すべきだ」（助言）"
        },
        {
          en: "It [may rain] this afternoon.",
          ja: "今日の午後は雨が降るかもしれない。",
          alt: ["may rains", "may raining", "may to rain"],
          tip: "may ＋ 原形「〜かもしれない」"
        },
        {
          en: "[Will you] open the window, please?",
          ja: "窓を開けてくれませんか。",
          alt: ["Will you to", "Do you will", "You will"],
          tip: "Will you 〜?「〜してくれませんか」"
        }
      ],
      summary: [
        "助動詞のあとは必ず原形",
        "must not 禁止／don't have to 不要",
        "should 助言／may 許可・推量"
      ]
    },
    {
      id: "c1-u05",
      title: "受動態",
      en: "The Passive Voice",
      tag: "文法",
      goal: "「〜される」と、される側を主語にして言える",
      points: [
        {
          h: "be ＋ 過去分詞",
          body: "「〜される」は be動詞 ＋ 過去分詞。する人を言いたいときは by 〜 をつける。言わなくてもわかるときは by 〜 を省く。",
          form: "S ＋ be ＋ 過去分詞（＋ by 〜）",
          ex: "This song [is loved] by many people.",
          exja: "この歌は多くの人に愛されている。"
        },
        {
          h: "時制は be動詞で表す",
          body: "過去のことは was / were ＋ 過去分詞。未来は will be ＋ 過去分詞。助動詞があるときは「助動詞 ＋ be ＋ 過去分詞」。",
          form: "was ／ will be ／ can be ＋ 過去分詞",
          ex: "This temple [was built] in 1603.",
          exja: "この寺は1603年に建てられた。"
        },
        {
          h: "by 以外の前置詞",
          body: "感情や状態を表す受動態は by 以外を使うことが多い。be interested in, be covered with, be known to などはまとめて覚える。",
          form: "be ＋ 過去分詞 ＋ in ／ with ／ to",
          ex: "I [am interested in] Japanese history.",
          exja: "私は日本の歴史に興味がある。"
        }
      ],
      sentences: [
        {
          en: "This song [is loved] by many people.",
          ja: "この歌は多くの人に愛されている。",
          alt: ["loves", "is loving", "loved"],
          tip: "「〜される」は be ＋ 過去分詞"
        },
        {
          en: "English [is spoken] in many countries.",
          ja: "英語は多くの国で話されている。",
          alt: ["speaks", "is speaking", "is speak"],
          tip: "話す人が一般の人なので by 〜 は省く"
        },
        {
          en: "This temple [was built] in 1603.",
          ja: "この寺は1603年に建てられた。",
          alt: ["built", "is built", "was build"],
          tip: "過去の受動態は was ＋ 過去分詞"
        },
        {
          en: "The results [will be announced] next week.",
          ja: "結果は来週発表される。",
          alt: ["will announce", "will be announce", "are announced will"],
          tip: "未来の受動態は will be ＋ 過去分詞"
        },
        {
          en: "I [am interested in] Japanese history.",
          ja: "私は日本の歴史に興味がある。",
          alt: ["am interesting in", "am interested at", "interest in"],
          tip: "be interested in 〜「〜に興味がある」"
        },
        {
          en: "The mountain [was covered with] snow.",
          ja: "山は雪でおおわれていた。",
          alt: ["covered with", "was covering", "was covered of"],
          tip: "be covered with 〜「〜でおおわれている」"
        }
      ],
      summary: [
        "受動態 ＝ be ＋ 過去分詞",
        "時制・助動詞は be の部分で表す",
        "be interested in など熟語で覚える"
      ]
    },
    {
      id: "c1-u06",
      title: "不定詞",
      en: "Infinitives",
      tag: "文法",
      goal: "to ＋ 動詞の原形の3つの使い方を区別できる",
      points: [
        {
          h: "名詞的用法「〜すること」",
          body: "to ＋ 原形が「〜すること」として、文の目的語や主語・補語になる。want to 〜, hope to 〜, decide to 〜 などがよく使われる。",
          form: "want ／ hope ／ decide ＋ to ＋ 原形",
          ex: "I [want to be] a teacher.",
          exja: "私は先生になりたい。"
        },
        {
          h: "形容詞的用法「〜するための」",
          body: "名詞のすぐ後ろに to ＋ 原形を置くと、「〜するための」「〜すべき」とその名詞を説明する。",
          form: "名詞 ＋ to ＋ 原形",
          ex: "I have a lot of [homework to do].",
          exja: "私にはやるべき宿題がたくさんある。"
        },
        {
          h: "副詞的用法「〜するために」",
          body: "目的「〜するために」や、感情の原因「〜して（うれしい）」を表す。It is 〜 to … は「…することは〜だ」という形。",
          form: "S ＋ V 〜 ＋ to ＋ 原形（目的）",
          ex: "I went to the library [to study].",
          exja: "私は勉強するために図書館へ行った。"
        }
      ],
      sentences: [
        {
          en: "I [want to be] a teacher.",
          ja: "私は先生になりたい。",
          alt: ["want be", "want being", "want to being"],
          tip: "want to ＋ 原形「〜したい」"
        },
        {
          en: "My dream is [to travel] around the world.",
          ja: "私の夢は世界中を旅することだ。",
          alt: ["travel", "to traveling", "traveled"],
          tip: "is to 〜「〜することだ」（補語）"
        },
        {
          en: "I have a lot of [homework to do].",
          ja: "私にはやるべき宿題がたくさんある。",
          alt: ["to do homework", "homework doing", "homework do"],
          tip: "名詞 ＋ to 〜「〜すべき名詞」"
        },
        {
          en: "I went to the library [to study].",
          ja: "私は勉強するために図書館へ行った。",
          alt: ["for studied", "studying", "to studying"],
          tip: "to ＋ 原形「〜するために」（目的）"
        },
        {
          en: "I was surprised [to hear] the news.",
          ja: "その知らせを聞いて私は驚いた。",
          alt: ["hearing", "to hearing", "heard"],
          tip: "感情 ＋ to 〜「〜して（驚いた）」"
        },
        {
          en: "[It is] important to get enough sleep.",
          ja: "十分な睡眠をとることは大切だ。",
          alt: ["That is", "This is", "There is"],
          tip: "It is 〜 to …「…することは〜だ」"
        }
      ],
      summary: [
        "名詞的：〜すること（want to）",
        "形容詞的：名詞 ＋ to 〜",
        "副詞的：〜するために・〜して"
      ]
    },
    {
      id: "c1-u07",
      title: "動名詞",
      en: "Gerunds",
      tag: "文法",
      goal: "-ing 形を「〜すること」として使いこなせる",
      points: [
        {
          h: "-ing で「〜すること」",
          body: "動詞の -ing 形は「〜すること」という名詞の働きをする。文の主語にも、動詞や前置詞の目的語にもなれる。",
          form: "動詞の -ing 形 ＝ 〜すること",
          ex: "[Reading] books is my hobby.",
          exja: "本を読むことが私の趣味だ。"
        },
        {
          h: "動名詞だけをとる動詞",
          body: "enjoy, finish, stop, mind などのあとは、to 不定詞ではなく動名詞を使う。「やっていること」を表す動詞が多い。",
          form: "enjoy ／ finish ／ stop ＋ -ing",
          ex: "We [enjoyed singing] together.",
          exja: "私たちは一緒に歌うことを楽しんだ。"
        },
        {
          h: "前置詞のあとは -ing",
          body: "前置詞のあとに動詞を置くときは必ず -ing 形にする。be good at -ing や look forward to -ing などを覚えよう。",
          form: "前置詞 ＋ 動詞の -ing 形",
          ex: "Thank you for [inviting] me.",
          exja: "招待してくれてありがとう。"
        }
      ],
      sentences: [
        {
          en: "[Reading] books is my hobby.",
          ja: "本を読むことが私の趣味だ。",
          alt: ["Read", "Reads", "To reading"],
          tip: "-ing 形は文の主語になれる"
        },
        {
          en: "We [enjoyed singing] together.",
          ja: "私たちは一緒に歌うことを楽しんだ。",
          alt: ["enjoyed to sing", "enjoyed sing", "enjoyed sang"],
          tip: "enjoy のあとは -ing（to は不可）"
        },
        {
          en: "Have you [finished writing] the report?",
          ja: "レポートを書き終えましたか。",
          alt: ["finished to write", "finished write", "finished wrote"],
          tip: "finish ＋ -ing「〜し終える」"
        },
        {
          en: "Thank you for [inviting] me.",
          ja: "招待してくれてありがとう。",
          alt: ["invite", "to invite", "invited"],
          tip: "前置詞 for のあとは -ing"
        },
        {
          en: "She is good at [playing] the piano.",
          ja: "彼女はピアノをひくのが得意だ。",
          alt: ["play", "to play", "plays"],
          tip: "be good at -ing「〜するのが得意」"
        },
        {
          en: "I'm looking forward to [seeing] you again.",
          ja: "またあなたに会えるのを楽しみにしています。",
          alt: ["see", "saw", "be seen"],
          tip: "look forward to の to は前置詞"
        }
      ],
      summary: [
        "-ing 形 ＝ 〜すること",
        "enjoy ／ finish ／ stop ＋ -ing",
        "前置詞のあとは必ず -ing"
      ]
    },
    {
      id: "c1-u08",
      title: "分詞（名詞を修飾）",
      en: "Participles as Modifiers",
      tag: "文法",
      goal: "-ing と過去分詞で名詞をくわしく説明できる",
      points: [
        {
          h: "-ing は「〜している」",
          body: "現在分詞（-ing）は「〜している」という意味で名詞を説明する。1語なら名詞の前、ほかの語がつくと名詞の後ろに置く。",
          form: "-ing ＋ 名詞 ／ 名詞 ＋ -ing 〜",
          ex: "Look at the [sleeping] baby.",
          exja: "眠っている赤ちゃんを見て。"
        },
        {
          h: "過去分詞は「〜された」",
          body: "過去分詞は「〜された」「〜されている」という受け身の意味で名詞を説明する。置く位置のルールは -ing と同じ。",
          form: "過去分詞 ＋ 名詞 ／ 名詞 ＋ 過去分詞 〜",
          ex: "This is a car [made] in Japan.",
          exja: "これは日本で作られた車だ。"
        },
        {
          h: "感情の分詞に注意",
          body: "「人をわくわくさせる」ものは exciting、「わくわくさせられた」人は excited。surprising / surprised なども同じ考え方。",
          form: "物 ＝ -ing ／ 人 ＝ 過去分詞",
          ex: "The game was [exciting].",
          exja: "その試合はわくわくするものだった。"
        }
      ],
      sentences: [
        {
          en: "Look at the [sleeping] baby.",
          ja: "眠っている赤ちゃんを見て。",
          alt: ["slept", "sleeps", "to sleep"],
          tip: "1語の -ing は名詞の前「〜している」"
        },
        {
          en: "The boy [playing] the guitar is my brother.",
          ja: "ギターをひいている男の子は私の弟だ。",
          alt: ["played", "plays", "is playing"],
          tip: "名詞 ＋ -ing 〜「〜している名詞」"
        },
        {
          en: "We need some [boiled] water.",
          ja: "沸かしたお湯が少し必要だ。",
          alt: ["boiling to", "boil", "boils"],
          tip: "boiled water「沸かされた水」＝ 湯"
        },
        {
          en: "This is a car [made] in Japan.",
          ja: "これは日本で作られた車だ。",
          alt: ["making", "makes", "make"],
          tip: "名詞 ＋ 過去分詞 〜「〜された名詞」"
        },
        {
          en: "I read a book [written] by a famous writer.",
          ja: "私は有名な作家によって書かれた本を読んだ。",
          alt: ["writing", "wrote", "writes"],
          tip: "本は「書かれた」ので過去分詞"
        },
        {
          en: "We were [excited] about the trip.",
          ja: "私たちはその旅行にわくわくしていた。",
          alt: ["exciting", "excite", "excitement"],
          tip: "人が「わくわくさせられた」→ excited"
        }
      ],
      summary: [
        "-ing ＝ 〜している",
        "過去分詞 ＝ 〜された",
        "1語なら前、2語以上なら後ろ"
      ]
    },
    {
      id: "c1-u09",
      title: "比較",
      en: "Comparisons",
      tag: "文法",
      goal: "2つ以上のものをくらべて、ちがいや同じ点を言える",
      points: [
        {
          h: "as 〜 as「同じくらい」",
          body: "as ＋ 形容詞・副詞の原級 ＋ as で「…と同じくらい〜」。not as 〜 as にすると「…ほど〜ではない」という意味になる。",
          form: "as ＋ 原級 ＋ as ＋ くらべる相手",
          ex: "Tom is [as tall as] his father.",
          exja: "トムは父親と同じくらい背が高い。"
        },
        {
          h: "比較級 ＋ than",
          body: "2つをくらべて「…より〜」は比較級 ＋ than。短い語は -er、長い語は more をつける。good は better になる。",
          form: "-er ／ more 〜 ＋ than",
          ex: "This book is [more interesting than] that one.",
          exja: "この本はあの本よりおもしろい。"
        },
        {
          h: "最上級「いちばん〜」",
          body: "3つ以上の中で「いちばん〜」は the ＋ 最上級。範囲は in（場所・集団）か of（複数のもの）で表す。",
          form: "the ＋ -est ／ most 〜 ＋ in ／ of",
          ex: "Mt. Fuji is [the highest] mountain in Japan.",
          exja: "富士山は日本でいちばん高い山だ。"
        }
      ],
      sentences: [
        {
          en: "Tom is [as tall as] his father.",
          ja: "トムは父親と同じくらい背が高い。",
          alt: ["as taller as", "so tall than", "tall as"],
          tip: "as ＋ 原級 ＋ as「同じくらい〜」"
        },
        {
          en: "This bag is [not as heavy as] that one.",
          ja: "このかばんはあのかばんほど重くない。",
          alt: ["not as heavier as", "not heavy as", "as not heavy as"],
          tip: "not as 〜 as「…ほど〜ではない」"
        },
        {
          en: "My room is [larger than] yours.",
          ja: "私の部屋はあなたの部屋より広い。",
          alt: ["more large than", "large than", "larger as"],
          tip: "短い語は -er ＋ than"
        },
        {
          en: "This book is [more interesting than] that one.",
          ja: "この本はあの本よりおもしろい。",
          alt: ["interestinger than", "more interesting as", "most interesting than"],
          tip: "長い語は more 〜 than"
        },
        {
          en: "Mt. Fuji is [the highest] mountain in Japan.",
          ja: "富士山は日本でいちばん高い山だ。",
          alt: ["the higher", "highest of", "the most high"],
          tip: "the ＋ 最上級 ＋ in ＋ 場所"
        },
        {
          en: "She is [the best] player of the five.",
          ja: "彼女は5人の中でいちばんうまい選手だ。",
          alt: ["the better", "the goodest", "the most good"],
          tip: "good の最上級は best。of ＋ 複数"
        }
      ],
      summary: [
        "as 〜 as：同じくらい",
        "比較級 ＋ than：…より",
        "the ＋ 最上級 ＋ in／of"
      ]
    },
    {
      id: "c1-u10",
      title: "関係代名詞",
      en: "Relative Pronouns",
      tag: "文法",
      goal: "who, which, that で名詞に説明をつけられる",
      points: [
        {
          h: "who は「人」を説明",
          body: "名詞が人のとき、その後ろに who ＋ 動詞 〜 をつけて「〜する人」と説明できる。who は説明の文の主語の役をする。",
          form: "人 ＋ who ＋ 動詞 〜",
          ex: "I have a friend [who] lives in Canada.",
          exja: "私にはカナダに住んでいる友だちがいる。"
        },
        {
          h: "which は「物」を説明",
          body: "名詞が物や動物のときは which を使う。that は人にも物にも使える。説明の文の中で主語の役をするので、すぐ後ろは動詞。",
          form: "物 ＋ which ／ that ＋ 動詞 〜",
          ex: "This is the bus [which] goes to the airport.",
          exja: "これは空港へ行くバスだ。"
        },
        {
          h: "目的格は省略できる",
          body: "説明の文に主語がある「物 ＋ which ＋ S ＋ V」の形では、which や that を省略できる。「S が V する物」という意味。",
          form: "名詞 ＋（which ／ that）＋ S ＋ V",
          ex: "This is the book [I bought] yesterday.",
          exja: "これは私が昨日買った本だ。"
        }
      ],
      sentences: [
        {
          en: "I have a friend [who] lives in Canada.",
          ja: "私にはカナダに住んでいる友だちがいる。",
          alt: ["which", "whose", "what"],
          tip: "人を説明する主格は who"
        },
        {
          en: "The man [who is standing] there is our coach.",
          ja: "あそこに立っている男性は私たちのコーチだ。",
          alt: ["which is standing", "who standing", "is standing who"],
          tip: "人 ＋ who ＋ 動詞 〜"
        },
        {
          en: "This is the bus [which] goes to the airport.",
          ja: "これは空港へ行くバスだ。",
          alt: ["who", "where", "what"],
          tip: "物を説明する主格は which"
        },
        {
          en: "I like songs [that] make people happy.",
          ja: "私は人を幸せにする歌が好きだ。",
          alt: ["who", "what", "they"],
          tip: "that は人にも物にも使える"
        },
        {
          en: "This is the book [I bought] yesterday.",
          ja: "これは私が昨日買った本だ。",
          alt: ["bought I", "which I bought it", "I bought it"],
          tip: "目的格の which は省略できる。it は不要"
        },
        {
          en: "The pictures [she took] in Kyoto were beautiful.",
          ja: "彼女が京都でとった写真は美しかった。",
          alt: ["she took them", "took she", "who she took"],
          tip: "名詞 ＋ S ＋ V「S が V した名詞」"
        }
      ],
      summary: [
        "人 ＋ who ＋ 動詞",
        "物 ＋ which ／ that ＋ 動詞",
        "名詞 ＋（which）S ＋ V：省略可"
      ]
    },
    {
      id: "c1-u11",
      title: "意見とその理由",
      en: "Giving Opinions and Reasons",
      tag: "表現",
      goal: "自分の意見を言い、理由を順番に示せる",
      points: [
        {
          h: "意見をはっきり言う",
          body: "まず立場を1文で言う。I think (that) 〜 や In my opinion, 〜 を使う。反対なら I don't think 〜 と think を否定する。",
          form: "I think (that) ＋ S ＋ V",
          ex: "[I think] students should read more books.",
          exja: "生徒はもっと本を読むべきだと思う。"
        },
        {
          h: "理由は because で",
          body: "意見のあとに because ＋ S ＋ V で理由をつける。because は文と文をつなぐ言葉なので、後ろには主語と動詞を置く。",
          form: "意見 ＋ because ＋ S ＋ V",
          ex: "I like summer [because] I can swim in the sea.",
          exja: "海で泳げるので、私は夏が好きだ。"
        },
        {
          h: "First, Second で整理",
          body: "理由が2つ以上あるときは First, Second, で番号をつけると伝わりやすい。最後は For these reasons, で意見をもう一度言う。",
          form: "First, 〜 ／ Second, 〜",
          ex: "[First], it is good for our health.",
          exja: "第一に、それは健康によい。"
        }
      ],
      sentences: [
        {
          en: "[I think] students should read more books.",
          ja: "生徒はもっと本を読むべきだと思う。",
          alt: ["I'm think", "I think about", "I thought of"],
          tip: "I think (that) ＋ 文 で意見を言う"
        },
        {
          en: "[In my opinion], school uniforms are necessary.",
          ja: "私の意見では、制服は必要だ。",
          alt: ["In my opinion of", "On my opinion", "By my opinion"],
          tip: "In my opinion, 〜「私の意見では」"
        },
        {
          en: "I [don't think] homework is a waste of time.",
          ja: "宿題が時間のむだだとは思わない。",
          alt: ["think not", "not think", "am not think"],
          tip: "反対意見は I don't think 〜 が自然"
        },
        {
          en: "I like summer [because] I can swim in the sea.",
          ja: "海で泳げるので、私は夏が好きだ。",
          alt: ["because of", "as for", "due to"],
          tip: "because ＋ S ＋ V で理由"
        },
        {
          en: "[First], walking to school is good for our health.",
          ja: "第一に、歩いて登校することは健康によい。",
          alt: ["At first", "Firstly of all", "The first"],
          tip: "理由を並べるときは First,（At first は不可）"
        },
        {
          en: "[For these reasons], I agree with the idea.",
          ja: "これらの理由から、私はその考えに賛成だ。",
          alt: ["By these reasons", "For this reasons", "Because these reasons"],
          tip: "For these reasons, で意見をまとめる"
        }
      ],
      summary: [
        "I think ／ In my opinion で立場",
        "because ＋ S ＋ V で理由",
        "First, Second で理由を整理"
      ]
    },
    {
      id: "c1-u12",
      title: "情報を加える・例を挙げる",
      en: "Adding Information and Examples",
      tag: "表現",
      goal: "つなぎ言葉で情報を足し、具体例を示せる",
      points: [
        {
          h: "also と In addition",
          body: "情報を足すとき、also は文の中（一般動詞の前・be動詞のあと）に置く。In addition, や Moreover, は文の初めに置いて新しい点を加える。",
          form: "In addition, ＋ 文 ／ S also V",
          ex: "[In addition], it is cheap.",
          exja: "さらに、それは安い。"
        },
        {
          h: "For example で具体例",
          body: "For example, は文の初めに置き、そのあとに具体的な例を文で書く。主張のあとに例があると、話に説得力が出る。",
          form: "主張. For example, ＋ 文.",
          ex: "[For example], you can talk with friends online.",
          exja: "たとえば、オンラインで友だちと話せる。"
        },
        {
          h: "such as は名詞を並べる",
          body: "such as は名詞のすぐ後ろに置き、「たとえば〜のような」と例の名詞を並べる。For example と違い、後ろは文ではなく名詞。",
          form: "名詞 ＋ such as ＋ 名詞, 名詞",
          ex: "I like fruits [such as] apples and grapes.",
          exja: "私はりんごやぶどうのような果物が好きだ。"
        }
      ],
      sentences: [
        {
          en: "She plays the piano. She [also] plays the violin.",
          ja: "彼女はピアノをひく。バイオリンもひく。",
          alt: ["too also", "and", "either"],
          tip: "also は一般動詞の前に置く"
        },
        {
          en: "This bike is light. [In addition], it is cheap.",
          ja: "この自転車は軽い。さらに、安い。",
          alt: ["In addition to", "In additional", "Addition"],
          tip: "In addition, ＋ 文「さらに」"
        },
        {
          en: "[Moreover], the city has many beautiful parks.",
          ja: "そのうえ、その町には美しい公園がたくさんある。",
          alt: ["More", "Moreover of", "Furthermore of"],
          tip: "Moreover, ＋ 文「そのうえ」"
        },
        {
          en: "[For example], you can talk with friends online.",
          ja: "たとえば、オンラインで友だちと話せる。",
          alt: ["Such as", "For examples", "As example"],
          tip: "For example, のあとは文"
        },
        {
          en: "I like fruits [such as] apples and grapes.",
          ja: "私はりんごやぶどうのような果物が好きだ。",
          alt: ["such like", "such", "like as"],
          tip: "名詞 ＋ such as ＋ 名詞"
        },
        {
          en: "[For instance], many students use tablets in class.",
          ja: "たとえば、多くの生徒が授業でタブレットを使う。",
          alt: ["Such as", "For instances", "In instance"],
          tip: "For instance, ＝ For example,"
        }
      ],
      summary: [
        "also は文中、In addition は文頭",
        "For example, ＋ 文",
        "名詞 ＋ such as ＋ 名詞"
      ]
    }
  ]
});
