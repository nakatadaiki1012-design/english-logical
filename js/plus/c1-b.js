/* 論理表現Ⅰ 7〜12単元：ひとことで言うと・わかりやすいポイント・まちがい・演習12文・解説（js/PLUS.md） */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c1-u07"] = {
  "core": {
    "ico": "📸",
    "catch": "動名詞は「動作を写真にして名詞にする」",
    "say": "-ing をつけると、動きが1枚の写真（名詞）になる。だから主語にも目的語にもなれて、前置詞のうしろにも置ける。",
    "fig": {
      "t": "slots",
      "parts": [
        [
          "Reading books",
          "S"
        ],
        [
          "is",
          "V"
        ],
        [
          "my hobby",
          "C"
        ]
      ],
      "arc": [
        2,
        0,
        "同じもの"
      ]
    }
  },
  "points": [
    {
      "h": "-ing＝「〜すること」",
      "body": "動詞に -ing をつけると「〜すること」という名詞のカタマリになる。名詞だから、主語・目的語・補語のどこにでも置ける。",
      "form": "動詞の -ing ＝ 名詞のはたらき",
      "ex": "[Reading] books is my hobby.",
      "exja": "本を読むことが私の趣味だ。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "Swimming",
            "S"
          ],
          [
            "is",
            "V"
          ],
          [
            "fun",
            "C"
          ]
        ]
      },
      "ng": {
        "bad": "Read books is my hobby.",
        "good": "Reading books is my hobby.",
        "why": "動詞の原形は主語になれない。-ing で名詞にする"
      },
      "why": "動詞のままでは主語や目的語になれない。-ing をつけて名詞にすれば、文の中で名詞と同じ席に座れるから。",
      "easy": "① swim は「泳ぐ」という動き。② -ing をつけると swimming＝「泳ぐこと」という物の名前に変身。③ 名前だから「〜は」の主語にできる。"
    },
    {
      "h": "enjoy は -ing だけ",
      "body": "enjoy は「もうやっている動作」を楽しむ。だから写真の -ing をとる。to 不定詞（これから向かう矢印）はとれない。",
      "form": "メガフェプス（mind enjoy give up…）",
      "ex": "We [enjoyed singing] together.",
      "exja": "私たちはいっしょに歌うのを楽しんだ。",
      "fig": {
        "t": "pic",
        "items": [
          {
            "e": "🎤",
            "x": 16,
            "y": 62,
            "l": "enjoy -ing",
            "b": "もう歌ってる"
          },
          {
            "e": "🏃",
            "x": 52,
            "y": 62,
            "l": "want to ~"
          },
          {
            "e": "🎯",
            "x": 86,
            "y": 62,
            "l": "これから"
          }
        ],
        "arrows": [
          [
            1,
            2,
            "向かう矢印"
          ]
        ],
        "cap": "-ing は今やっている・to はこれから"
      },
      "ng": {
        "bad": "We enjoyed to sing together.",
        "good": "We enjoyed singing together.",
        "why": "enjoy のあとは -ing。to は使えない"
      },
      "why": "enjoy・finish・stop・mind などは、もうしている事やしていた事について言う動詞。だから実際の動作を表す -ing と相性がいい。",
      "easy": "① to は「これから向かう矢印」。② enjoy は今している事を楽しむ。③ これからの事はまだ楽しめないので、to ではなく -ing。"
    },
    {
      "h": "前置詞のあとは -ing",
      "body": "前置詞のうしろは「名詞の席」。動詞を置くなら -ing で名詞にする。look forward to の to も前置詞！",
      "form": "前置詞 ＋ -ing",
      "ex": "Thank you for [inviting] me.",
      "exja": "招待してくれてありがとう。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "Thank you",
            "文"
          ],
          [
            "for",
            "前置詞"
          ],
          [
            "inviting me",
            "名詞"
          ]
        ],
        "arc": [
          1,
          2,
          "名詞の席"
        ]
      },
      "ng": {
        "bad": "I'm looking forward to see you.",
        "good": "I'm looking forward to seeing you.",
        "why": "この to は前置詞。うしろは -ing になる"
      },
      "why": "前置詞（at・for・in・about など）のうしろには名詞しか置けない決まり。動詞は -ing にして名詞に変えてから置く。",
      "easy": "① at や for は「名詞専用のいす」。② 動詞はそのまま座れない。③ -ing の服を着て名詞に変身すれば座れる。"
    }
  ],
  "drills": [
    {
      "en": "[Swimming] is good exercise.",
      "ja": "水泳はよい運動だ。",
      "alt": [
        "Swim",
        "Swims",
        "To swimming"
      ],
      "tip": "主語になる -ing「泳ぐこと」",
      "why": "主語の席なので名詞の形 Swimming。Swim・Swims は動詞、To swimming は形が✕。",
      "p": 0
    },
    {
      "en": "[Playing] video games is fun.",
      "ja": "テレビゲームをするのは楽しい。",
      "alt": [
        "Play",
        "Plays",
        "Played"
      ],
      "tip": "-ing のカタマリが主語",
      "why": "is の前の主語は名詞の形。Playing で「すること」。Play・Plays・Played は動詞。",
      "p": 0
    },
    {
      "en": "My hobby is [taking] pictures.",
      "ja": "私の趣味は写真をとることだ。",
      "alt": [
        "take",
        "took",
        "takes"
      ],
      "tip": "補語の -ing「〜すること」",
      "why": "is のあとの「〜すること」も名詞の形で taking。take・took・takes は動詞。",
      "p": 0
    },
    {
      "en": "I [stopped eating] snacks at night.",
      "ja": "私は夜にお菓子を食べるのをやめた。",
      "alt": [
        "stopped eat",
        "stopped ate",
        "stopped eats"
      ],
      "tip": "stop ＋ -ing「〜するのをやめる」",
      "why": "stop は「していた事をやめる」なので -ing。eat・ate・eats だと動詞が2つ重なる。",
      "p": 1
    },
    {
      "en": "Do you [mind opening] the window?",
      "ja": "窓を開けてもらえますか。",
      "alt": [
        "mind to open",
        "mind open",
        "mind opened"
      ],
      "tip": "mind ＋ -ing（メガフェプスの m）",
      "why": "mind（いやがる）は -ing をとる。to open は✕、open・opened は動詞が重なる。",
      "p": 1
    },
    {
      "en": "He [gave up smoking] last year.",
      "ja": "彼は去年たばこをやめた。",
      "alt": [
        "gave up to smoke",
        "gave up smoke",
        "gave up smoked"
      ],
      "tip": "give up ＋ -ing「〜をあきらめる」",
      "why": "give up（やめる）は -ing をとる。to smoke は✕、smoke・smoked は動詞が重なる。",
      "p": 1
    },
    {
      "en": "She [practices dancing] every day.",
      "ja": "彼女は毎日ダンスの練習をしている。",
      "alt": [
        "practices to dance",
        "practices dance",
        "practices danced"
      ],
      "tip": "practice ＋ -ing",
      "why": "practice（練習する）は -ing をとる。to dance は✕、dance・danced は動詞が重なる。",
      "p": 1
    },
    {
      "en": "I'm interested in [learning] Korean.",
      "ja": "私は韓国語を学ぶことに興味がある。",
      "alt": [
        "learn",
        "to learn",
        "learned"
      ],
      "tip": "前置詞 in のあとは -ing",
      "why": "in は前置詞なので learning。learn・learned は動詞、to learn は前置詞の後に✕。",
      "p": 2
    },
    {
      "en": "How about [going] to the movies?",
      "ja": "映画に行くのはどう？",
      "alt": [
        "go",
        "to go",
        "went"
      ],
      "tip": "How about ＋ -ing「〜するのはどう？」",
      "why": "How about の about は前置詞。だから going。go・went は動詞、to go は✕。",
      "p": 2
    },
    {
      "en": "He left [without saying] goodbye.",
      "ja": "彼はさよならも言わずに去った。",
      "alt": [
        "without say",
        "without to say",
        "without said"
      ],
      "tip": "without ＋ -ing「〜しないで」",
      "why": "without は前置詞なので saying。say・said は動詞のまま、to say は✕。",
      "p": 2
    },
    {
      "en": "I'm used to [getting] up early.",
      "ja": "私は早起きに慣れている。",
      "alt": [
        "get",
        "got",
        "gets"
      ],
      "tip": "be used to の to は前置詞",
      "why": "be used to の to は前置詞。だから -ing の getting。get・got・gets は✕。",
      "p": 2
    },
    {
      "en": "We talked about [visiting] Okinawa next summer.",
      "ja": "私たちは来年の夏に沖縄を訪れることについて話した。",
      "alt": [
        "visit",
        "to visit",
        "visited"
      ],
      "tip": "about ＋ -ing",
      "why": "about は前置詞なので visiting。visit・visited は動詞、to visit は置けない。",
      "p": 2
    },
    {
      "en": "[Watching] movies is my favorite pastime.",
      "ja": "映画を見ることが私のいちばんの楽しみだ。",
      "alt": [
        "Watch",
        "Watches",
        "To watching"
      ],
      "tip": "主語の「〜すること」＝ -ing",
      "why": "主語は名詞の席なので Watching で「見ること」。Watch・Watches は動詞のままで主語になれない。",
      "p": 0
    },
    {
      "en": "[Studying] abroad is my dream.",
      "ja": "留学することが私の夢だ。",
      "alt": [
        "Study",
        "Studies",
        "To studying"
      ],
      "tip": "主語になる -ing",
      "why": "Studying abroad で「留学すること」という名詞。Study・Studies は主語になれない。",
      "p": 0
    },
    {
      "en": "Her job is [teaching] children.",
      "ja": "彼女の仕事は子どもたちを教えることだ。",
      "alt": [
        "teach",
        "teaches",
        "taught"
      ],
      "tip": "補語の「〜すること」＝ -ing",
      "why": "「仕事＝教えること」なので teaching。teach・teaches は is と並べられない。",
      "p": 0
    },
    {
      "en": "My father [enjoys cooking] on weekends.",
      "ja": "父は週末に料理を楽しむ。",
      "alt": [
        "enjoys to cook",
        "enjoys cook",
        "enjoy cooking"
      ],
      "tip": "enjoy ＋ -ing",
      "why": "enjoy は -ing だけをとる。to cook は ✕。主語が My father なので enjoys。",
      "p": 1
    },
    {
      "en": "Have you [finished cleaning] your room?",
      "ja": "部屋のそうじは終わった？",
      "alt": [
        "finished to clean",
        "finished clean",
        "finish cleaning"
      ],
      "tip": "finish ＋ -ing",
      "why": "finish は -ing だけ。to clean・clean は ✕。Have you のあとは finished。",
      "p": 1
    },
    {
      "en": "Please [avoid using] your phone in class.",
      "ja": "授業中は電話を使うのを避けてください。",
      "alt": [
        "avoid to use",
        "avoid use",
        "avoiding use"
      ],
      "tip": "avoid ＋ -ing",
      "why": "avoid は -ing をとる（メガフェプスの a）。to use・use は ✕。",
      "p": 1
    },
    {
      "en": "It suddenly [stopped raining].",
      "ja": "急に雨がやんだ。",
      "alt": [
        "stopped to raining",
        "stop raining",
        "stopping rain"
      ],
      "tip": "stop ＋ -ing ＝ 〜するのをやめる",
      "why": "stop -ing で「〜するのをやめる」。to raining は ✕。過去の話なので stopped。",
      "p": 1
    },
    {
      "en": "I'm thinking of [joining] the tennis club.",
      "ja": "テニス部に入ろうかと考えている。",
      "alt": [
        "join",
        "to join",
        "joined"
      ],
      "tip": "前置詞 of ＋ -ing",
      "why": "of は前置詞なので、うしろは名詞の席。joining にする。join・to join・joined は置けない。",
      "p": 2
    },
    {
      "en": "Thank you for [helping] me with my homework.",
      "ja": "宿題を手伝ってくれてありがとう。",
      "alt": [
        "help",
        "to help",
        "helped"
      ],
      "tip": "for（前置詞）＋ -ing",
      "why": "for は前置詞。うしろの動詞は -ing で名詞にする。help・to help・helped は ✕。",
      "p": 2
    },
    {
      "en": "She is afraid of [making] mistakes.",
      "ja": "彼女はまちがえることをこわがっている。",
      "alt": [
        "make",
        "to make",
        "made"
      ],
      "tip": "be afraid of ＋ -ing",
      "why": "of は前置詞なので making。make・made は名詞の席に置けず、of to make も ✕。",
      "p": 2
    },
    {
      "en": "Before [going] to bed, I brush my teeth.",
      "ja": "寝る前に歯をみがく。",
      "alt": [
        "go",
        "to go",
        "went"
      ],
      "tip": "before ＋ -ing",
      "why": "ここの before は前置詞として使い、うしろは -ing。go・to go・went は ✕。",
      "p": 2
    },
    {
      "en": "He is proud of [being] a member of the team.",
      "ja": "彼はチームの一員であることを誇りに思っている。",
      "alt": [
        "be",
        "is",
        "to be"
      ],
      "tip": "be proud of ＋ -ing",
      "why": "of のうしろは名詞の席。be 動詞も -ing にして being。be・is・to be は置けない。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "主語の席は名詞なので Reading（読むこと）。Read・Reads は動詞、To reading は✕。",
      "p": 0
    },
    {
      "why": "enjoy のあとは -ing。to sing はとれず、sing・sang だと動詞が2つ並んでしまう。",
      "p": 1
    },
    {
      "why": "finish のあとは -ing。to write は使えず、write・wrote だと動詞が2つ重なる。",
      "p": 1
    },
    {
      "why": "for は前置詞なので後ろは名詞の形 inviting。invite・to invite・invited は✕。",
      "p": 2
    },
    {
      "why": "at は前置詞なので playing。play・plays は動詞のまま、to play は前置詞の後に置けない。",
      "p": 2
    },
    {
      "why": "look forward to の to は前置詞なので seeing。see・saw・be seen は✕。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u08"] = {
  "core": {
    "ico": "🏷️",
    "catch": "分詞は名詞にはる「説明シール」",
    "say": "-ing は「〜している」、過去分詞は「〜された」というシール。1語なら名詞の前に、2語以上なら名詞のうしろにはる。",
    "fig": {
      "t": "slots",
      "parts": [
        [
          "the boy",
          "名詞"
        ],
        [
          "playing the guitar",
          "M"
        ]
      ],
      "arc": [
        1,
        0,
        "説明シール"
      ]
    }
  },
  "points": [
    {
      "h": "-ing は「〜している」",
      "body": "-ing は、その名詞が自分で動いている様子。1語なら前から、語句が長くなると名詞のうしろから説明する。",
      "form": "名詞 ＋ -ing 〜",
      "ex": "The boy [playing] the guitar is my brother.",
      "exja": "ギターをひいている男の子は私の弟だ。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "The boy",
            "S"
          ],
          [
            "playing the guitar",
            "M"
          ],
          [
            "is",
            "V"
          ],
          [
            "my brother",
            "C"
          ]
        ],
        "arc": [
          1,
          0,
          "説明"
        ]
      },
      "ng": {
        "bad": "The boy plays the guitar is my brother.",
        "good": "The boy playing the guitar is my brother.",
        "why": "動詞が2つになってしまう。説明の部分は -ing に"
      },
      "why": "-ing は「動いている最中」を表す形。名詞の横に置くと、その名詞が今どうしているかを説明できる。語句が長いと後ろに回す。",
      "easy": "① sleeping は「眠っている」。② the sleeping baby で「眠っている赤ちゃん」。③ 説明が長い時は the boy playing the guitar と後ろへ。"
    },
    {
      "h": "過去分詞は「〜された」",
      "body": "過去分詞は、その名詞が何かを「された」側。made in Japan＝日本で作られた。する側か、される側かで決める。",
      "form": "名詞 ＋ 過去分詞 〜",
      "ex": "This is a car [made] in Japan.",
      "exja": "これは日本製の車だ。",
      "fig": {
        "t": "pic",
        "items": [
          {
            "e": "👶",
            "x": 16,
            "y": 62,
            "l": "crying",
            "b": "えーん"
          },
          {
            "e": "👷",
            "x": 50,
            "y": 62,
            "l": "in Japan"
          },
          {
            "e": "🚗",
            "x": 84,
            "y": 62,
            "l": "a car made"
          }
        ],
        "arrows": [
          [
            1,
            2,
            "作った",
            "dash"
          ]
        ],
        "cap": "-ing は自分で・過去分詞はされた側"
      },
      "ng": {
        "bad": "I read a book writing by a famous writer.",
        "good": "I read a book written by a famous writer.",
        "why": "本は書く側でなく、書かれた側"
      },
      "why": "過去分詞は受け身の形。名詞が自分でするのではなく、だれかに「される」側のときに使う。",
      "easy": "① 車は自分で自分を作らない。だれかに作られる。② だから made（作られた）。③ 「する側」なら -ing、「される側」なら過去分詞。"
    },
    {
      "h": "感情は「させる」か「させられる」か",
      "body": "excite は「わくわくさせる」。させる物は exciting、させられた人は excited。人の気持ちは -ed が基本。",
      "form": "物 → exciting／人 → excited",
      "ex": "We were [excited] about the trip.",
      "exja": "私たちは旅行にわくわくしていた。",
      "fig": {
        "t": "pic",
        "items": [
          {
            "e": "🎢",
            "x": 18,
            "y": 58,
            "l": "exciting"
          },
          {
            "e": "😆",
            "x": 80,
            "y": 58,
            "l": "excited"
          }
        ],
        "arrows": [
          [
            0,
            1,
            "わくわくさせる"
          ]
        ],
        "cap": "させる物は -ing、させられた人は -ed"
      },
      "ng": {
        "bad": "I was very exciting.",
        "good": "I was very excited.",
        "why": "私が人をわくわくさせる人になってしまう"
      },
      "why": "excite・surprise は「〜させる」という動詞。物が人をわくわくさせる→exciting、人がわくわくさせられた→excited。",
      "easy": "① 映画が私をわくわくさせる→映画は exciting。② 私はわくわくさせられた→私は excited。③ 人の気持ちを言う時はたいてい -ed。"
    }
  ],
  "drills": [
    {
      "en": "Don't wake the [sleeping] cat.",
      "ja": "眠っているネコを起こさないで。",
      "alt": [
        "slept",
        "sleeps",
        "sleep"
      ],
      "tip": "1語の -ing は名詞の前",
      "why": "猫が自分で眠っている側なので sleeping。slept・sleeps・sleep は名詞の前に置けない。",
      "p": 0
    },
    {
      "en": "Who is the girl [talking] with Ken?",
      "ja": "ケンと話している女の子はだれ？",
      "alt": [
        "talked",
        "talks",
        "is talking"
      ],
      "tip": "名詞 ＋ -ing 〜「〜している」",
      "why": "女の子が自分で話している側なので talking。is talking だと is が2つになる。",
      "p": 0
    },
    {
      "en": "I found a [broken] window.",
      "ja": "私は割れた窓を見つけた。",
      "alt": [
        "breaks",
        "break",
        "broke"
      ],
      "tip": "窓は割られた側 → 過去分詞",
      "why": "窓は割られた側なので broken。breaks・break・broke は動詞の形。",
      "p": 1
    },
    {
      "en": "This is a picture [painted] by my sister.",
      "ja": "これは姉がかいた絵だ。",
      "alt": [
        "painting",
        "paints",
        "paint"
      ],
      "tip": "絵はかかれた側 → 過去分詞",
      "why": "絵は描かれる側なので painted。painting だと絵が描くことになる。",
      "p": 1
    },
    {
      "en": "The man [running] over there is my father.",
      "ja": "あそこを走っている男の人は私の父だ。",
      "alt": [
        "ran",
        "runs",
        "run"
      ],
      "tip": "うしろから説明する -ing",
      "why": "男の人が自分で走っている側なので running。ran・runs・run だと動詞が2つになる。",
      "p": 0
    },
    {
      "en": "English is a language [spoken] all over the world.",
      "ja": "英語は世界中で話されている言語だ。",
      "alt": [
        "speaking",
        "spoke",
        "speaks"
      ],
      "tip": "言語は話される側 → spoken",
      "why": "言葉は話される側なので spoken。speaking だと言葉が話すことになる。",
      "p": 1
    },
    {
      "en": "I bought a [used] car.",
      "ja": "私は中古車を買った。",
      "alt": [
        "using",
        "uses",
        "use"
      ],
      "tip": "使われた車＝中古車",
      "why": "車は使われた側なので used（中古の）。using だと車が使う側になる。",
      "p": 1
    },
    {
      "en": "The movie was [boring].",
      "ja": "その映画は退屈だった。",
      "alt": [
        "bored",
        "bore",
        "boredom"
      ],
      "tip": "退屈させる物 → -ing",
      "why": "映画は人を退屈させる側なので boring。bored は退屈させられた人に使う。",
      "p": 2
    },
    {
      "en": "I was [surprised] at the news.",
      "ja": "私はその知らせにおどろいた。",
      "alt": [
        "surprising",
        "surprise",
        "surprises"
      ],
      "tip": "おどろかされた人 → -ed",
      "why": "私は驚かされた側なので surprised。surprising は人を驚かせる物に使う。",
      "p": 2
    },
    {
      "en": "Do you know the boy [sitting] next to Yui?",
      "ja": "ユイのとなりにすわっている男の子を知っている？",
      "alt": [
        "sat",
        "sits",
        "is sitting"
      ],
      "tip": "名詞 ＋ -ing 〜",
      "why": "男の子が自分で座っている側なので sitting。is sitting だと動詞が2つになる。",
      "p": 0
    },
    {
      "en": "We visited a temple [built] 500 years ago.",
      "ja": "私たちは500年前に建てられた寺を訪れた。",
      "alt": [
        "building",
        "builds",
        "build"
      ],
      "tip": "寺は建てられた側 → built",
      "why": "寺は建てられた側なので built。building だと寺が建てることになる。",
      "p": 1
    },
    {
      "en": "There are many people [waiting] for the bus.",
      "ja": "バスを待っている人がたくさんいる。",
      "alt": [
        "waited",
        "wait",
        "waits"
      ],
      "tip": "people を -ing がうしろから説明",
      "why": "人々が自分で待っている側なので waiting。waited だと「待たれた」になる。",
      "p": 0
    },
    {
      "en": "Look at the [flying] bird.",
      "ja": "飛んでいる鳥を見て。",
      "alt": [
        "flew",
        "flies",
        "to fly"
      ],
      "tip": "1語の -ing は名詞の前",
      "why": "鳥が自分で飛んでいるので -ing。1語なら名詞の前。flew・flies は動詞のままで名詞を説明できない。",
      "p": 0
    },
    {
      "en": "The girl [wearing] a red hat is my cousin.",
      "ja": "赤い帽子をかぶっている女の子は私のいとこだ。",
      "alt": [
        "wore",
        "wears",
        "is wearing"
      ],
      "tip": "名詞 ＋ -ing 語句",
      "why": "女の子が自分で身につけているので -ing。語句が長いのでうしろから説明。wears などでは文が2つになる。",
      "p": 0
    },
    {
      "en": "I have a friend [living] in Osaka.",
      "ja": "私には大阪に住んでいる友だちがいる。",
      "alt": [
        "lived",
        "lives",
        "is living"
      ],
      "tip": "名詞 ＋ -ing 語句",
      "why": "友だちが自分で住んでいるので living。lives・is living だと動詞が2つになり、つなぐ語がない。",
      "p": 0
    },
    {
      "en": "The [rising] sun was beautiful.",
      "ja": "のぼってくる太陽は美しかった。",
      "alt": [
        "rose",
        "rises",
        "to rise"
      ],
      "tip": "1語の -ing は名詞の前",
      "why": "太陽が自分でのぼっているので rising。rose・rises は動詞で、名詞の前に置いて説明できない。",
      "p": 0
    },
    {
      "en": "This is a cake [made] by my grandmother.",
      "ja": "これは祖母が作ったケーキだ。",
      "alt": [
        "making",
        "makes",
        "make"
      ],
      "tip": "名詞 ＋ 過去分詞 ＋ by",
      "why": "ケーキは「作られた」側なので過去分詞 made。making だとケーキが自分で作ることになる。",
      "p": 1
    },
    {
      "en": "I received a letter [written] in English.",
      "ja": "英語で書かれた手紙を受け取った。",
      "alt": [
        "writing",
        "wrote",
        "writes"
      ],
      "tip": "〜された ＝ 過去分詞",
      "why": "手紙は「書かれた」側なので written。writing は手紙が書く側になり ✕。wrote・writes は動詞。",
      "p": 1
    },
    {
      "en": "The [stolen] bike was found in the park.",
      "ja": "ぬすまれた自転車は公園で見つかった。",
      "alt": [
        "stealing",
        "stole",
        "steal"
      ],
      "tip": "1語の過去分詞は名詞の前",
      "why": "自転車は「ぬすまれた」側なので stolen。stealing だと自転車がぬすむ側になる。",
      "p": 1
    },
    {
      "en": "Most of the songs [sung] at the concert were new.",
      "ja": "コンサートで歌われた歌のほとんどは新曲だった。",
      "alt": [
        "singing",
        "sang",
        "sings"
      ],
      "tip": "〜された ＝ 過去分詞",
      "why": "歌は「歌われた」側なので sung。singing だと歌が歌う側になる。sang・sings は動詞で ✕。",
      "p": 1
    },
    {
      "en": "Japanese is a language [studied] by many people.",
      "ja": "日本語は多くの人に学ばれている言語だ。",
      "alt": [
        "studying",
        "studies",
        "study"
      ],
      "tip": "名詞 ＋ 過去分詞 ＋ by",
      "why": "言語は「学ばれる」側なので studied。studying だと言語が学ぶ側になる。by 〜 も「される」の合図。",
      "p": 1
    },
    {
      "en": "The news was [shocking].",
      "ja": "そのニュースは衝撃的だった。",
      "alt": [
        "shocked",
        "shock",
        "shocks"
      ],
      "tip": "物 ＋ -ing（させる側）",
      "why": "ニュースは人をショックに「させる」側なので shocking。shocked は「させられた人」に使う。",
      "p": 2
    },
    {
      "en": "I was [bored] with the long speech.",
      "ja": "長いスピーチにうんざりした。",
      "alt": [
        "boring",
        "bore",
        "bores"
      ],
      "tip": "人 ＋ -ed（させられた側）",
      "why": "私は退屈「させられた」側なので bored。boring だと私が人を退屈させる人になってしまう。",
      "p": 2
    },
    {
      "en": "The students were [interested] in the experiment.",
      "ja": "生徒たちはその実験に興味をもった。",
      "alt": [
        "interesting",
        "interest",
        "interests"
      ],
      "tip": "人の気持ち ＝ -ed",
      "why": "生徒は興味を「もたされた」側なので interested。interesting は「興味をひく物」に使う。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "赤ちゃんは自分で眠っている側なので sleeping。slept・sleeps は✕、to sleep は「これから」。",
      "p": 0
    },
    {
      "why": "男の子が自分で弾いている。playing で後ろから説明。is playing だと動詞が2つになる。",
      "p": 0
    },
    {
      "why": "水は沸かされる側なので boiled。boil・boils は動詞のまま、boiling to は形が✕。",
      "p": 1
    },
    {
      "why": "車は作られる側なので made。making だと車が作ることになる。makes・make は動詞。",
      "p": 1
    },
    {
      "why": "本は書かれる側なので written。writing だと本が書くことになる。wrote・writes は動詞。",
      "p": 1
    },
    {
      "why": "私たちはわくわくさせられた側なので excited。exciting は人をわくわくさせる物に使う。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u09"] = {
  "core": {
    "ico": "⚖️",
    "catch": "比較は「てんびん」に2つをのせる",
    "say": "as 〜 as はつりあい、比較級 ＋ than はかたむき、最上級は全員の中で1番。まず何と何をくらべるかを決めよう。",
    "fig": {
      "t": "scale",
      "left": "下",
      "right": "上",
      "items": [
        [
          "not as ~ as",
          25
        ],
        [
          "as ~ as",
          50
        ],
        [
          "-er than",
          75
        ],
        [
          "the -est",
          98
        ]
      ]
    }
  },
  "points": [
    {
      "h": "as 〜 as は「つりあい」",
      "body": "てんびんがつりあう＝同じくらい。as と as の間は元の形（-er にしない）。not をつけると「〜ほど…ない」。",
      "form": "as ＋ 元の形 ＋ as",
      "ex": "Tom is [as tall as] his father.",
      "exja": "トムは父親と同じくらい背が高い。",
      "ng": {
        "bad": "Tom is as taller as his father.",
        "good": "Tom is as tall as his father.",
        "why": "as と as の間は 元の形のまま"
      },
      "why": "as 〜 as は「同じ量」を表すので、どちらかが上という -er は入れない。元の形のまま両側を as ではさむ。",
      "easy": "① シーソーが平らにつりあう様子。② as tall as＝同じくらいの背。③ not をつけると「そこまで届かない」＝〜ほど…ない。",
      "fig": {
        "t": "bars",
        "items": [
          [
            "Tom",
            72
          ],
          [
            "his father",
            72
          ],
          [
            "his brother",
            50
          ]
        ],
        "cap": "as tall as ＝ 同じ高さ（つりあい）"
      }
    },
    {
      "h": "比較級 ＋ than は「かたむき」",
      "body": "短い語は -er、長い語は more をつける。than のうしろが「くらべる相手」。-er と more を両方つけるのは ✕。",
      "form": "-er／more 〜 ＋ than",
      "ex": "This book is [more interesting than] that one.",
      "exja": "この本はあの本よりおもしろい。",
      "fig": {
        "t": "vs",
        "a": [
          "larger than",
          "短い語は -er"
        ],
        "b": [
          "more interesting than",
          "長い語は more"
        ]
      },
      "ng": {
        "bad": "My room is more larger than yours.",
        "good": "My room is larger than yours.",
        "why": "-er と more は どちらか一方だけ"
      },
      "why": "比較級は「どちらが上か」を表す。-er か more のどちらか一方で「より〜」になるので、両方つけると二重になる。",
      "easy": "① 2つをくらべる。② 短い言葉は tall→taller。③ 長い言葉は interesting→more interesting。④ くらべる相手は than のあと。"
    },
    {
      "h": "最上級は「全員の中で1番」",
      "body": "the ＋ -est（または most）。1番は1つだけなので the がつく。範囲が場所・集団なら in、人数・仲間なら of。",
      "form": "the -est ＋ in／of 〜",
      "ex": "Mt. Fuji is [the highest] mountain in Japan.",
      "exja": "富士山は日本でいちばん高い山だ。",
      "fig": {
        "t": "bars",
        "items": [
          [
            "Mt. Takao",
            20
          ],
          [
            "Mt. Aso",
            55
          ],
          [
            "Mt. Fuji",
            95
          ]
        ],
        "cap": "the highest ＝ 全部の中で1番"
      },
      "ng": {
        "bad": "She is the best player in the five.",
        "good": "She is the best player of the five.",
        "why": "人数（5人）の中は of、場所や集団は in"
      },
      "why": "最上級は「グループの中で1つだけ」。1つに決まるものには the をつけるから、最上級には the がつく。",
      "easy": "① クラスで1番速い人は1人だけ。② 1人に決まるから the。③ in Japan（場所）、of the five（人数）で範囲を言う。"
    }
  ],
  "drills": [
    {
      "en": "My bag is [as heavy as] yours.",
      "ja": "私のかばんはあなたのと同じくらい重い。",
      "alt": [
        "as heavier as",
        "so heavy than",
        "heavy as"
      ],
      "tip": "as ＋ 元の形 ＋ as",
      "why": "同じくらいは as 原級 as。heavier は✕、so 〜 than と heavy as は形が✕。",
      "p": 0
    },
    {
      "en": "Ken runs [faster than] Tom.",
      "ja": "ケンはトムより速く走る。",
      "alt": [
        "more fast than",
        "fast than",
        "faster as"
      ],
      "tip": "短い語は -er ＋ than",
      "why": "fast は短い語なので faster than。more fast は二重、fast than は -er なし。",
      "p": 1
    },
    {
      "en": "This question is [easier than] that one.",
      "ja": "この問題はあの問題よりやさしい。",
      "alt": [
        "more easy than",
        "easy than",
        "easier as"
      ],
      "tip": "easy → easier（y を i に）",
      "why": "easy は y を i にして easier than。more easy・easy than は✕。",
      "p": 1
    },
    {
      "en": "Soccer is [more popular than] baseball in my class.",
      "ja": "私のクラスでは野球よりサッカーが人気だ。",
      "alt": [
        "popularer than",
        "more popular as",
        "most popular than"
      ],
      "tip": "長い語は more ＋ than",
      "why": "popular は長い語なので more 〜 than。popularer は✕、most は最上級。",
      "p": 1
    },
    {
      "en": "This is [the most beautiful] park in the city.",
      "ja": "ここは市でいちばん美しい公園だ。",
      "alt": [
        "the more beautiful",
        "the beautifulest",
        "most beautifulest"
      ],
      "tip": "長い語の最上級は the most",
      "why": "長い語の最上級は the most 〜。more は比較級、beautifulest という形はない。",
      "p": 2
    },
    {
      "en": "Today is [the hottest] day of the year.",
      "ja": "今日は一年でいちばん暑い日だ。",
      "alt": [
        "the hotter",
        "hotest",
        "the most hot"
      ],
      "tip": "hot → hottest（t を重ねる）",
      "why": "1年で1番は the hottest（t を重ねる）。hotter は比較級、hotest はつづり✕。",
      "p": 2
    },
    {
      "en": "My brother is [three years older] than me.",
      "ja": "兄は私より3歳年上だ。",
      "alt": [
        "older three years",
        "three years old",
        "three year older"
      ],
      "tip": "差は比較級の前に置く",
      "why": "差は older の前に置いて three years older。older three years の順は✕。",
      "p": 1
    },
    {
      "en": "I can't swim [as fast as] Aoi.",
      "ja": "私はアオイほど速く泳げない。",
      "alt": [
        "as faster as",
        "so fast than",
        "fast as"
      ],
      "tip": "not as 〜 as「〜ほど…ない」",
      "why": "否定でも as 原級 as。can't 〜 as fast as＝〜ほど速くない。faster は✕。",
      "p": 0
    },
    {
      "en": "Which do you like [better], tea or coffee?",
      "ja": "紅茶とコーヒーではどちらが好き？",
      "alt": [
        "more good",
        "gooder",
        "most good"
      ],
      "tip": "2つのうちどちら → better",
      "why": "2つのうち「より好き」は better。more good・gooder はなく、most は3つ以上。",
      "p": 1
    },
    {
      "en": "He is one of [the best] singers in Japan.",
      "ja": "彼は日本で最高の歌手の一人だ。",
      "alt": [
        "the better",
        "the goodest",
        "a best"
      ],
      "tip": "one of the 最上級 ＋ 複数形",
      "why": "one of the 最上級＋複数。the better は比較級、goodest はない、a best は✕。",
      "p": 2
    },
    {
      "en": "This movie is [much more interesting] than the book.",
      "ja": "この映画は本よりずっとおもしろい。",
      "alt": [
        "very more interesting",
        "much interestinger",
        "more much interesting"
      ],
      "tip": "比較級を強めるのは much",
      "why": "比較級を強めるのは much。very は比較級を強められない。more much は順番✕。",
      "p": 1
    },
    {
      "en": "Nothing is [more important than] health.",
      "ja": "健康ほど大切なものはない。",
      "alt": [
        "importanter than",
        "more important as",
        "most important than"
      ],
      "tip": "Nothing ＋ 比較級 ＝ 最上級の意味",
      "why": "Nothing is 比較級 than＝〜ほど大切なものはない。importanter・most は✕。",
      "p": 1
    },
    {
      "en": "This box is [as big as] that one.",
      "ja": "この箱はあの箱と同じくらいの大きさだ。",
      "alt": [
        "as bigger as",
        "so big than",
        "big as"
      ],
      "tip": "as ＋ 元の形 ＋ as",
      "why": "つりあいは as 〜 as。間は元の形 big。bigger は ✕、than とも組まない。最初の as も必要。",
      "p": 0
    },
    {
      "en": "My sister can't cook [as well as] my mother.",
      "ja": "姉は母ほど料理が上手ではない。",
      "alt": [
        "as better as",
        "so well than",
        "as well than"
      ],
      "tip": "not as 〜 as ＝ 〜ほど…ない",
      "why": "cook を説明するのは副詞 well。as と as ではさむ。better は比較級で ✕。than とは組まない。",
      "p": 0
    },
    {
      "en": "This summer was not [as hot as] last summer.",
      "ja": "今年の夏は去年の夏ほど暑くなかった。",
      "alt": [
        "as hotter as",
        "so hot than",
        "hot as"
      ],
      "tip": "not as 〜 as ＝ 〜ほど…ない",
      "why": "not のあとに as hot as。間は元の形で hotter は ✕。as を1つ落とすのも ✕。",
      "p": 0
    },
    {
      "en": "Jupiter is [bigger than] the earth.",
      "ja": "木星は地球より大きい。",
      "alt": [
        "more big than",
        "big than",
        "biggest than"
      ],
      "tip": "短い語 ＋ -er than",
      "why": "big は短い語なので bigger（g を重ねる）。more big は ✕。than の前は比較級。",
      "p": 1
    },
    {
      "en": "This test was [more difficult than] the last one.",
      "ja": "このテストは前回より難しかった。",
      "alt": [
        "difficulter than",
        "more difficult as",
        "most difficult than"
      ],
      "tip": "長い語は more 〜 than",
      "why": "difficult は長い語なので more。difficulter は ✕。than と組むのは most ではない。",
      "p": 1
    },
    {
      "en": "My brother gets up [earlier than] me.",
      "ja": "兄は私より早く起きる。",
      "alt": [
        "more early than",
        "early than",
        "earliest than"
      ],
      "tip": "early → earlier（y を i に）",
      "why": "early の比較級は earlier。more early・early・earliest は ✕。",
      "p": 1
    },
    {
      "en": "Your idea is [much better than] mine.",
      "ja": "君の考えは私のよりずっとよい。",
      "alt": [
        "very better than",
        "more better than",
        "much good than"
      ],
      "tip": "比較級を強める much",
      "why": "比較級を強めるのは much。very は比較級につかない。better に more を重ねるのも ✕。",
      "p": 1
    },
    {
      "en": "Lake Biwa is [the largest] lake in Japan.",
      "ja": "琵琶湖は日本でいちばん大きな湖だ。",
      "alt": [
        "the larger",
        "largest of",
        "the most large"
      ],
      "tip": "the ＋ -est ＋ in 場所",
      "why": "日本の中で1番なので the largest。larger は比較級。large は短い語で most は ✕。",
      "p": 2
    },
    {
      "en": "This is [the most exciting] game of the season.",
      "ja": "これは今シーズンでいちばんわくわくする試合だ。",
      "alt": [
        "the excitingest",
        "the more exciting",
        "most exciting of"
      ],
      "tip": "長い語は the most",
      "why": "exciting は長い語なので the most。-est は ✕。1番なので more も ✕。",
      "p": 2
    },
    {
      "en": "Who is [the tallest] in your class?",
      "ja": "クラスでいちばん背が高いのはだれ？",
      "alt": [
        "the taller",
        "tallest of",
        "the most tall"
      ],
      "tip": "the ＋ -est ＋ in 集団",
      "why": "クラスの中で1番なので the tallest。taller は比較級。tall は短い語なので most は使わない。",
      "p": 2
    },
    {
      "en": "Winter is [the coldest] season of the year.",
      "ja": "冬は1年でいちばん寒い季節だ。",
      "alt": [
        "the colder",
        "coldest in",
        "the most cold"
      ],
      "tip": "the ＋ -est",
      "why": "四季で1番なので the coldest。colder は比較級。cold は短い語で most は ✕。",
      "p": 2
    },
    {
      "en": "She is [the youngest] of the three sisters.",
      "ja": "彼女は3姉妹の中でいちばん年下だ。",
      "alt": [
        "the younger",
        "youngest in",
        "the most young"
      ],
      "tip": "the ＋ -est ＋ of 仲間",
      "why": "3人の中で1番なので最上級 the youngest。3人なので比較級 younger は ✕。young は短い語。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "同じくらいは as 原級 as。taller は✕、so 〜 than と tall as は形がそろっていない。",
      "p": 0
    },
    {
      "why": "〜ほど重くないは not as 原級 as。heavier は✕、not heavy as は as が足りない。",
      "p": 0
    },
    {
      "why": "短い語 large は larger than。more large は二重、larger as は than がない。",
      "p": 1
    },
    {
      "why": "長い語なので more 〜 than。interestinger は✕、most は最上級、as では比べられない。",
      "p": 1
    },
    {
      "why": "日本で1番は the highest。the higher は比較級、highest of は the がない。",
      "p": 2
    },
    {
      "why": "5人で1番は the best（good の最上級）。better は比較級、goodest はない。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u10"] = {
  "core": {
    "ico": "🔗",
    "catch": "関係代名詞は名詞のうしろにつなぐ「説明カード」",
    "say": "まず「友だちがいる」と言い切って、そのあと who で「カナダに住んでいる」と説明を足す。英語は大事なことが先。",
    "fig": {
      "t": "slots",
      "parts": [
        [
          "a friend",
          "名詞"
        ],
        [
          "who",
          "関係詞"
        ],
        [
          "lives in Canada",
          "説明"
        ]
      ],
      "arc": [
        2,
        0,
        "説明"
      ]
    }
  },
  "points": [
    {
      "h": "who は「人」の説明カード",
      "body": "名詞が人なら who。who のうしろは、その人が何をするか。who がそのまま説明の文の主語になる。",
      "form": "人 ＋ who ＋ 動詞",
      "ex": "I have a friend [who] lives in Canada.",
      "exja": "私にはカナダに住んでいる友だちがいる。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "a friend",
            "名詞"
          ],
          [
            "who",
            "S"
          ],
          [
            "lives in Canada",
            "V"
          ]
        ],
        "arc": [
          1,
          0,
          "＝友だち"
        ]
      },
      "ng": {
        "bad": "I have a friend which lives in Canada.",
        "good": "I have a friend who lives in Canada.",
        "why": "友だちは人。人には who を使う"
      },
      "why": "名詞のあとに文で説明を足す時、つなぎに who を置く。who は説明の文の主語の代わりなので、すぐ後ろに動詞が来る。",
      "easy": "① I have a friend.（友だちがいる）② He lives in Canada.（彼はカナダに住む）③ He を who に変えてつなぐ→a friend who lives in Canada。"
    },
    {
      "h": "which は「物」の説明カード",
      "body": "名詞が物や動物なら which。that は人にも物にも使える万能カード。迷ったら that でも OK。",
      "form": "物 ＋ which／that ＋ 動詞",
      "ex": "This is the bus [which] goes to the airport.",
      "exja": "これは空港へ行くバスだ。",
      "fig": {
        "t": "pic",
        "items": [
          {
            "e": "🧑",
            "x": 16,
            "y": 55,
            "l": "人 → who"
          },
          {
            "e": "🚌",
            "x": 50,
            "y": 55,
            "l": "物 → which"
          },
          {
            "e": "🐶",
            "x": 84,
            "y": 55,
            "l": "動物 → which"
          }
        ],
        "cap": "迷ったら that でどれも OK"
      },
      "ng": {
        "bad": "This is the bus who goes to the airport.",
        "good": "This is the bus which goes to the airport.",
        "why": "バスは物。物に who は使えない"
      },
      "why": "つなぎの言葉は、説明される名詞で決まる。人なら who、物や動物なら which。that はどちらにも使える。",
      "easy": "① 前の名詞を見る。② 人→who、物→which。③ 迷ったら that。④ what は前に名詞がない時の言葉なので、名詞の後ろには使わない。"
    },
    {
      "h": "目的格は「穴あき」に注意",
      "body": "the book I bought では、bought の目的語（本）が前に出ている。だからうしろは空っぽ。it を入れると二重。",
      "form": "名詞 ＋（which）S ＋ V",
      "ex": "This is the book [I bought] yesterday.",
      "exja": "これは私がきのう買った本だ。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "the book",
            "名詞"
          ],
          [
            "I",
            "S"
          ],
          [
            "bought",
            "V"
          ],
          [
            "（　）",
            "O"
          ]
        ],
        "arc": [
          3,
          0,
          "ここが前へ"
        ]
      },
      "ng": {
        "bad": "This is the book I bought it yesterday.",
        "good": "This is the book I bought yesterday.",
        "why": "本はもう前に出ている。it は入れない"
      },
      "why": "the book I bought では、bought の目的語「本」が前に出ている。目的語の席はもう空いているので、it を足すと二重になる。",
      "easy": "① I bought the book.（その本を買った）② 本を前に出す→the book I bought。③ 本はもう前にあるから、後ろに it は書かない。"
    }
  ],
  "drills": [
    {
      "en": "I have an aunt [who] works at a hospital.",
      "ja": "私には病院で働いているおばがいる。",
      "alt": [
        "which",
        "whose",
        "what"
      ],
      "tip": "人 ＋ who ＋ 動詞",
      "why": "おば＝人なので who。which は物用、whose は「〜の」、what は✕。",
      "p": 0
    },
    {
      "en": "This is the dog [which] saved the boy.",
      "ja": "これがその男の子を救った犬だ。",
      "alt": [
        "who",
        "where",
        "what"
      ],
      "tip": "動物 ＋ which",
      "why": "犬＝動物なので which。who は人用、where は場所、what は✕。",
      "p": 1
    },
    {
      "en": "She is the girl [who sings] very well.",
      "ja": "彼女はとても上手に歌う女の子だ。",
      "alt": [
        "which sings",
        "who singing",
        "sings who"
      ],
      "tip": "who のうしろは動詞",
      "why": "女の子＝人なので who、動詞は sings。which は物用、singing では動詞にならない。",
      "p": 0
    },
    {
      "en": "The cake [that] my mother made was delicious.",
      "ja": "母が作ったケーキはおいしかった。",
      "alt": [
        "what",
        "who",
        "where"
      ],
      "tip": "物 ＋ that ＋ S ＋ V",
      "why": "ケーキ＝物なので that。what は名詞の後ろに✕、who は人用、where は場所。",
      "p": 1
    },
    {
      "en": "Do you know anyone [who] can speak French?",
      "ja": "フランス語を話せる人をだれか知っている？",
      "alt": [
        "which",
        "whose",
        "what"
      ],
      "tip": "anyone は人 → who",
      "why": "anyone＝人なので who。which は物用、whose は「〜の」、what は✕。",
      "p": 0
    },
    {
      "en": "The bag [I lost] was found in the classroom.",
      "ja": "私がなくしたかばんは教室で見つかった。",
      "alt": [
        "lost I",
        "I lost it",
        "which I lost it"
      ],
      "tip": "目的格は省略できる・it は不要",
      "why": "the bag I lost＝私がなくしたかばん。it を足すと二重。lost I は語順✕。",
      "p": 2
    },
    {
      "en": "I need a computer [which] is easy to use.",
      "ja": "私は使いやすいコンピューターが必要だ。",
      "alt": [
        "who",
        "whose",
        "what"
      ],
      "tip": "物 ＋ which ＋ 動詞",
      "why": "コンピュータ＝物なので which。who は人用、whose は「〜の」、what は✕。",
      "p": 1
    },
    {
      "en": "The teacher [who teaches] us math is kind.",
      "ja": "私たちに数学を教える先生はやさしい。",
      "alt": [
        "which teaches",
        "who teach",
        "teaches who"
      ],
      "tip": "先生は1人 → teaches",
      "why": "先生＝人で1人なので who teaches。which は物用、teach は形が合わない。",
      "p": 0
    },
    {
      "en": "This is the movie [I watched] last night.",
      "ja": "これは私が昨夜見た映画だ。",
      "alt": [
        "watched I",
        "I watched it",
        "which I watched it"
      ],
      "tip": "穴あき：watched のうしろは空",
      "why": "the movie I watched＝私が見た映画。it を足すと二重。watched I は語順✕。",
      "p": 2
    },
    {
      "en": "He has a sister [whose] name is Mika.",
      "ja": "彼には名前がミカというお姉さんがいる。",
      "alt": [
        "who",
        "which",
        "who's"
      ],
      "tip": "「その人の〜」は whose",
      "why": "「彼女の名前」なので「〜の」の whose。who・which は✕、who's は who is。",
      "p": 0
    },
    {
      "en": "Everything [that] he said was true.",
      "ja": "彼が言ったことはすべて本当だった。",
      "alt": [
        "what",
        "who",
        "where"
      ],
      "tip": "everything のあとは that が自然",
      "why": "Everything のあとは that がふつう。what は名詞の後ろに✕、who は人用。",
      "p": 1
    },
    {
      "en": "The students [who] passed the test were happy.",
      "ja": "テストに合格した生徒たちは喜んだ。",
      "alt": [
        "which",
        "whose",
        "what"
      ],
      "tip": "人 ＋ who ＋ 動詞",
      "why": "生徒＝人なので who。which は物用、whose は「〜の」、what は✕。",
      "p": 0
    },
    {
      "en": "I know a girl [who] can play the violin.",
      "ja": "バイオリンをひける女の子を知っている。",
      "alt": [
        "which",
        "whose",
        "what"
      ],
      "tip": "人 ＋ who",
      "why": "説明する名詞 a girl は人なので who。which は物・動物用。whose は「〜の」で、うしろに名詞が要る。",
      "p": 0
    },
    {
      "en": "The boy [who won] the race is my classmate.",
      "ja": "レースに勝った男の子は私のクラスメートだ。",
      "alt": [
        "which won",
        "who winning",
        "won who"
      ],
      "tip": "人 ＋ who ＋ 動詞",
      "why": "人なので who、そのあとに動詞 won。which は物用。who winning は動詞がなく ✕。",
      "p": 0
    },
    {
      "en": "People [who] live in the city often use trains.",
      "ja": "都会に住む人はよく電車を使う。",
      "alt": [
        "which",
        "what",
        "they"
      ],
      "tip": "人 ＋ who ＋ 動詞",
      "why": "People は人なので who。which は物用。they ではつなぐ働きがなく、文が2つになる。",
      "p": 0
    },
    {
      "en": "This is the house [which] was built 100 years ago.",
      "ja": "これは100年前に建てられた家だ。",
      "alt": [
        "who",
        "where",
        "what"
      ],
      "tip": "物 ＋ which ＋ 動詞",
      "why": "家は物なので which。who は人用。where だと was built の主語がなく ✕。",
      "p": 1
    },
    {
      "en": "I have a cat [that] has blue eyes.",
      "ja": "私は青い目をしたネコを飼っている。",
      "alt": [
        "what",
        "whose",
        "it"
      ],
      "tip": "that は人にも物にも",
      "why": "that はネコ（動物）も説明できる。what は前に名詞をとらない。whose は「〜の」。it ではつなげない。",
      "p": 1
    },
    {
      "en": "Look at the mountain [which] is covered with snow.",
      "ja": "雪におおわれた山を見て。",
      "alt": [
        "who",
        "what",
        "where"
      ],
      "tip": "物 ＋ which",
      "why": "山は物なので which。who は人用。what は名詞のうしろに置けない。where だと is の主語がない。",
      "p": 1
    },
    {
      "en": "The book [that] you lent me was interesting.",
      "ja": "君が貸してくれた本はおもしろかった。",
      "alt": [
        "what",
        "who",
        "whose"
      ],
      "tip": "物 ＋ that ＋ S ＋ V",
      "why": "本は物なので that（which も可）。what は前に名詞をとらない。who は人用。whose は「〜の」。",
      "p": 1
    },
    {
      "en": "The man [I met] yesterday was a doctor.",
      "ja": "昨日会った男の人は医者だった。",
      "alt": [
        "met I",
        "who I met him",
        "I met him"
      ],
      "tip": "名詞 ＋ S ＋ V（穴あき）",
      "why": "met の目的語（男の人）が前に出ているので、うしろは空っぽ。him を入れると二重になる。語順は I met。",
      "p": 2
    },
    {
      "en": "This is the song [we sang] at the festival.",
      "ja": "これはお祭りで私たちが歌った歌だ。",
      "alt": [
        "sang we",
        "we sang it",
        "which we sang it"
      ],
      "tip": "名詞 ＋ S ＋ V（穴あき）",
      "why": "sang の目的語は前の the song。うしろに it を入れると二重。語順は we sang。",
      "p": 2
    },
    {
      "en": "The pen [she gave] me is very nice.",
      "ja": "彼女がくれたペンはとてもすてきだ。",
      "alt": [
        "gave she",
        "she gave it",
        "which she gave it"
      ],
      "tip": "名詞 ＋ S ＋ V（穴あき）",
      "why": "gave の「物」は前の The pen。うしろに it を入れると二重。語順は she gave。",
      "p": 2
    },
    {
      "en": "Is this the key [you are looking] for?",
      "ja": "これが君のさがしているかぎ？",
      "alt": [
        "are you looking",
        "you are looking it",
        "you look it"
      ],
      "tip": "名詞 ＋ S ＋ V ＋ 前置詞",
      "why": "for の目的語（かぎ）が前に出ている。だから it は入れない。説明の中は疑問文の語順にしない。",
      "p": 2
    },
    {
      "en": "The country [I visited] last year was Italy.",
      "ja": "去年私が訪れた国はイタリアだった。",
      "alt": [
        "visited I",
        "I visited it",
        "which I visited it"
      ],
      "tip": "名詞 ＋ S ＋ V（穴あき）",
      "why": "visited の目的語（国）が前に出ているので、うしろは空っぽ。it を入れると二重。語順は I visited。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "友だち＝人なので who。which は物用、whose は「〜の」、what は名詞の後ろに✕。",
      "p": 0
    },
    {
      "why": "人なので who、そのあと is standing。which は物用、who standing は動詞がない。",
      "p": 0
    },
    {
      "why": "バス＝物なので which。who は人用、where は場所、what は名詞の後ろに✕。",
      "p": 1
    },
    {
      "why": "歌（物）を説明する that。who は人用、what は✕、they だと2文がつながらない。",
      "p": 1
    },
    {
      "why": "the book I bought＝私が買った本。it を足すと本が二重。bought I は語順✕。",
      "p": 2
    },
    {
      "why": "she took の目的語が pictures。them を足すと二重。took she は語順✕。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u11"] = {
  "core": {
    "ico": "🏗️",
    "catch": "意見は「結論 → 理由」の順で組み立てる",
    "say": "日本語は理由が先、英語は結論が先。I think 〜 と言い切ってから、because や First で理由を足そう。",
    "fig": {
      "t": "flow",
      "steps": [
        "意見",
        "理由①",
        "理由②",
        "まとめ"
      ]
    }
  },
  "points": [
    {
      "h": "まず意見を言い切る",
      "body": "I think 〜 で始める。反対なら I don't think 〜。not は think の方につけるのが英語流。",
      "form": "I think (that) S ＋ V",
      "ex": "[I think] students should read more books.",
      "exja": "生徒はもっと本を読むべきだと思う。",
      "fig": {
        "t": "vs",
        "a": [
          "I don't think it's hard.",
          "○ think に not"
        ],
        "b": [
          "I think it isn't hard.",
          "△ 不自然"
        ]
      },
      "ng": {
        "bad": "I'm agree with the idea.",
        "good": "I agree with the idea.",
        "why": "agree は動詞。be 動詞は いらない"
      },
      "why": "英語は結論を先に言う言葉。最初に I think 〜 で立場をはっきりさせると、聞き手が話についてきやすい。",
      "easy": "① まず「私は〜と思う」と答えを言う。② 理由はそのあと。③ 反対なら I don't think 〜。think の方に not をつける。"
    },
    {
      "h": "理由は because でつなぐ",
      "body": "because は文と文をつなぐ。うしろは S ＋ V。名詞だけなら because of。Because 〜. だけの文は ✕。",
      "form": "意見 ＋ because S ＋ V",
      "ex": "I like summer [because] I can swim in the sea.",
      "exja": "海で泳げるので夏が好きだ。",
      "fig": {
        "t": "vs",
        "a": [
          "because it is cheap",
          "うしろは S＋V"
        ],
        "b": [
          "because of the rain",
          "うしろは名詞"
        ]
      },
      "ng": {
        "bad": "I like summer. Because I can swim.",
        "good": "I like summer because I can swim.",
        "why": "Because 〜 だけでは文にならない"
      },
      "why": "because は文と文をつなぐ接続詞。だから後ろには S ＋ V の文が来る。名詞だけなら because of を使う。",
      "easy": "① 意見を言う。② because をはさむ。③ 後ろに「だれが・どうする」の文。例：I like summer because I can swim."
    },
    {
      "h": "First, で番号をふる",
      "body": "理由が2つあるなら First, 〜. Second, 〜. と番号をふる。読む人が迷子にならない。At first（はじめは）とはちがう。",
      "form": "First, 〜. Second, 〜.",
      "ex": "[First], walking to school is good for our health.",
      "exja": "第一に、歩いて通学するのは健康によい。",
      "fig": {
        "t": "flow",
        "steps": [
          "First,",
          "Second,",
          "だから"
        ]
      },
      "ng": {
        "bad": "At first, it is good for our health.",
        "good": "First, it is good for our health.",
        "why": "At first は「はじめは」。順番には First"
      },
      "why": "理由に番号をふると、話の区切りと数がはっきりする。At first は「最初は〜だったが」の意味なので別物。",
      "easy": "① 理由が2つある。② First, で1つ目。③ Second, で2つ目。④ For these reasons, でしめる。順番の目印になる。"
    }
  ],
  "drills": [
    {
      "en": "[I think] we should save water.",
      "ja": "私たちは水を節約すべきだと思う。",
      "alt": [
        "I think of",
        "I'm think",
        "I thinking"
      ],
      "tip": "I think ＋ S ＋ V",
      "why": "意見は I think 〜。I'm think・I thinking は形が✕、think of は「思いつく」。",
      "p": 0
    },
    {
      "en": "[In my opinion], smartphones are useful for students.",
      "ja": "私の意見では、スマホは生徒に役立つ。",
      "alt": [
        "In my opinion of",
        "On my opinion",
        "By my opinion"
      ],
      "tip": "In my opinion, ＋ 文",
      "why": "「私の意見では」は In my opinion。On・By は✕、of を足す形もない。",
      "p": 0
    },
    {
      "en": "I [don't think] it is a good idea.",
      "ja": "それはよい考えではないと思う。",
      "alt": [
        "think not",
        "not think",
        "am not think"
      ],
      "tip": "not は think につける",
      "why": "「よい考えだと思わない」は I don't think 〜。think not・not think は✕。",
      "p": 0
    },
    {
      "en": "I want to live in the city [because] it is convenient.",
      "ja": "便利なので都会に住みたい。",
      "alt": [
        "because of",
        "as for",
        "due to"
      ],
      "tip": "because ＋ S ＋ V",
      "why": "後ろが it is convenient という文なので because。because of・due to は名詞用。",
      "p": 1
    },
    {
      "en": "[First], it is cheaper than taking a taxi.",
      "ja": "第一に、タクシーに乗るより安い。",
      "alt": [
        "At first",
        "Firstly of all",
        "The first"
      ],
      "tip": "理由の1つ目は First,",
      "why": "理由の1つ目は First,。At first は「はじめは」、The first は✕。",
      "p": 2
    },
    {
      "en": "[Second], we can make new friends.",
      "ja": "第二に、新しい友だちができる。",
      "alt": [
        "Two",
        "Secondary",
        "The second of"
      ],
      "tip": "2つ目は Second,",
      "why": "2つ目の理由は Second,。Two は数、Secondary は「二次的な」で✕。",
      "p": 2
    },
    {
      "en": "[For example], we can use the library after school.",
      "ja": "たとえば、放課後に図書館を使える。",
      "alt": [
        "For examples",
        "By example",
        "Example for"
      ],
      "tip": "理由のあとに具体例",
      "why": "例を出すのは For example,。For examples・By example・Example for は✕。",
      "p": 2
    },
    {
      "en": "[That is why] I like reading books.",
      "ja": "だから私は読書が好きなのだ。",
      "alt": [
        "That is reason",
        "That why",
        "This why is"
      ],
      "tip": "That is why ＋ 結果",
      "why": "That is why＝だから〜。That is reason・That why・This why is は✕。",
      "p": 1
    },
    {
      "en": "I agree with you [because] exercise is good for our health.",
      "ja": "運動は健康によいので、あなたに賛成だ。",
      "alt": [
        "because of",
        "due to",
        "as for"
      ],
      "tip": "うしろが文なら because",
      "why": "後ろが exercise is good という文なので because。because of・due to は✕。",
      "p": 1
    },
    {
      "en": "[I believe that] online classes are useful.",
      "ja": "オンライン授業は役に立つと信じている。",
      "alt": [
        "I believing that",
        "I am believe that",
        "I believe to"
      ],
      "tip": "I believe that ＋ 文",
      "why": "「〜と信じる」は I believe that 〜。am believe・believe to は✕。",
      "p": 0
    },
    {
      "en": "[Finally], it is good for the environment.",
      "ja": "最後に、それは環境によい。",
      "alt": [
        "At final",
        "Final",
        "The finally"
      ],
      "tip": "最後の理由は Finally,",
      "why": "最後の理由は Finally,。At final・Final・The finally という言い方はない。",
      "p": 2
    },
    {
      "en": "[Therefore], I think school lunch is important.",
      "ja": "したがって、給食は大切だと思う。",
      "alt": [
        "Because",
        "Although",
        "So that"
      ],
      "tip": "Therefore,「したがって」",
      "why": "Therefore,＝だから。理由を受けて結論へ。Because・Although・So that は✕。",
      "p": 2
    },
    {
      "en": "[I think] high school students should have part-time jobs.",
      "ja": "高校生はアルバイトをすべきだと思う。",
      "alt": [
        "I think of",
        "I am think",
        "Thinking"
      ],
      "tip": "I think (that) ＋ 文",
      "why": "意見は I think ＋ 文。think of のうしろは名詞。I am think は動詞が2つで ✕。",
      "p": 0
    },
    {
      "en": "[In my opinion], we should have more holidays.",
      "ja": "私の考えでは、休日をもっと増やすべきだ。",
      "alt": [
        "In my opinion of",
        "On my opinion",
        "For my opinion"
      ],
      "tip": "In my opinion, ＝ 私の考えでは",
      "why": "決まった形は In my opinion,。前置詞は in。on・for は ✕。of をつけると続きがおかしい。",
      "p": 0
    },
    {
      "en": "I [don't think] we need more homework.",
      "ja": "もっと宿題が必要だとは思わない。",
      "alt": [
        "think not",
        "not think",
        "am not think"
      ],
      "tip": "not は think の方につける",
      "why": "英語は先に「思わない」と否定する。think not・not think・am not think は ✕。",
      "p": 0
    },
    {
      "en": "I [agree with] the idea of wearing uniforms.",
      "ja": "制服を着るという考えに賛成だ。",
      "alt": [
        "agree to with",
        "am agree with",
        "agree for"
      ],
      "tip": "agree with ＋ 考え・人",
      "why": "agree は動詞なので am はつけない。考えや人に賛成は agree with。to with・for は ✕。",
      "p": 0
    },
    {
      "en": "I like dogs [because] they are friendly.",
      "ja": "犬は人なつっこいので好きだ。",
      "alt": [
        "because of",
        "due to",
        "as for"
      ],
      "tip": "because ＋ S ＋ V",
      "why": "うしろが they are 〜 の文なので because。because of・due to のうしろは名詞。",
      "p": 1
    },
    {
      "en": "We stayed inside [because of] the heavy rain.",
      "ja": "大雨のせいで私たちは家の中にいた。",
      "alt": [
        "because",
        "because for",
        "since of"
      ],
      "tip": "because of ＋ 名詞",
      "why": "うしろが the heavy rain（名詞）なので because of。because のうしろは文。",
      "p": 1
    },
    {
      "en": "I chose this school [because] it has a good library.",
      "ja": "よい図書館があるのでこの学校を選んだ。",
      "alt": [
        "because of",
        "due to",
        "for of"
      ],
      "tip": "because ＋ S ＋ V",
      "why": "うしろが it has 〜 という文なので because。because of・due to のうしろは名詞だけ。",
      "p": 1
    },
    {
      "en": "[This is because] reading is fun.",
      "ja": "なぜなら読書は楽しいからだ。",
      "alt": [
        "This is why because",
        "Because of",
        "That because"
      ],
      "tip": "This is because ＋ 理由",
      "why": "前の文の理由は This is because ＋ 文。Because of のうしろは名詞。",
      "p": 1
    },
    {
      "en": "[First], we can save money.",
      "ja": "まず、お金を節約できる。",
      "alt": [
        "At first",
        "Firstly of all",
        "The first"
      ],
      "tip": "First, ＝ 理由の1つ目",
      "why": "理由に番号をふるのは First,。At first は「はじめは（あとで変わる）」で意味がちがう。",
      "p": 2
    },
    {
      "en": "[Second], it is good for the environment.",
      "ja": "2つ目に、環境によい。",
      "alt": [
        "Two",
        "Secondary",
        "The second of"
      ],
      "tip": "Second, ＝ 理由の2つ目",
      "why": "2つ目の理由は Second,。Two は数。Secondary は「二次的な」で意味がちがう。",
      "p": 2
    },
    {
      "en": "[In conclusion], I support the plan.",
      "ja": "結論として、私はその計画を支持する。",
      "alt": [
        "In conclude",
        "At conclusion",
        "To conclusion"
      ],
      "tip": "In conclusion, ＝ 結論として",
      "why": "決まった形は In conclusion,。conclude は動詞なので in のあとに置けない。at・to は ✕。",
      "p": 2
    },
    {
      "en": "[For these reasons], I think we should walk more.",
      "ja": "これらの理由から、もっと歩くべきだと思う。",
      "alt": [
        "By these reasons",
        "For this reasons",
        "Because these reasons"
      ],
      "tip": "For these reasons, ＝ まとめ",
      "why": "まとめは For these reasons,。this は reasons と合わない。by・because は ✕。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "意見は I think 〜。I'm thinking は「考え中」、think about は「〜について考える」。",
      "p": 0
    },
    {
      "why": "「私の意見では」は In my opinion。On・By は✕、of をつける形もない。",
      "p": 0
    },
    {
      "why": "英語は think の方を否定する。think not・not think・am not think は✕。",
      "p": 0
    },
    {
      "why": "後ろが I can swim という文なので because。because of・due to は名詞用。",
      "p": 1
    },
    {
      "why": "理由の1つ目は First,。At first は「はじめは」、The first・Firstly of all は✕。",
      "p": 2
    },
    {
      "why": "理由が複数なので these reasons、前置詞は for。this reasons・By は✕。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u12"] = {
  "core": {
    "ico": "🚥",
    "catch": "つなぎ言葉は文と文の「道路標識」",
    "say": "In addition（さらに）や For example（たとえば）を文の頭に置くと、次に何が来るかが読む人に先にわかる。",
    "fig": {
      "t": "flow",
      "steps": [
        "意見",
        "追加の理由",
        "具体例"
      ]
    }
  },
  "points": [
    {
      "h": "In addition は「＋」",
      "body": "also は文の中（一般動詞の前）。In addition, や Moreover, は文の頭に置いて「さらに」と情報を足す。",
      "form": "In addition, S ＋ V",
      "ex": "This bike is light. [In addition], it is cheap.",
      "exja": "この自転車は軽い。そのうえ安い。",
      "fig": {
        "t": "vs",
        "a": [
          "In addition, it is cheap.",
          "文の頭に置く"
        ],
        "b": [
          "It is also cheap.",
          "文の中に置く"
        ]
      },
      "ng": {
        "bad": "In addition to, it is cheap.",
        "good": "In addition, it is cheap.",
        "why": "In addition to のあとは名詞が必要"
      },
      "why": "also は動詞にくっつく言葉なので文の中。In addition, は文全体に「さらに」をつけるので文の頭に置く。",
      "easy": "① 1つ目の情報を言う。② 文の頭に In addition, と置く。③ 2つ目の情報を言う。足し算の「＋」の記号と思えばいい。"
    },
    {
      "h": "For example は例の合図",
      "body": "ふわっとした話のあとに For example, 〜. で具体例を出すと、説得力が一気に上がる。For instance, も同じ意味。",
      "form": "For example, S ＋ V",
      "ex": "[For example], you can talk with friends online.",
      "exja": "たとえば、オンラインで友だちと話せる。",
      "fig": {
        "t": "flow",
        "steps": [
          "主張",
          "たとえば",
          "具体例"
        ]
      },
      "ng": {
        "bad": "For examples, you can talk online.",
        "good": "For example, you can talk online.",
        "why": "決まった言い方。s はつけない"
      },
      "why": "ぼんやりした話だけでは相手がイメージできない。For example, で具体例を出すと、主張が本当だとわかりやすくなる。",
      "easy": "① 「スマホは便利」と言う。② For example, をはさむ。③ 「地図を見られる」と例を言う。聞く人が「なるほど」となる。"
    },
    {
      "h": "such as は名詞を並べるだけ",
      "body": "such as のうしろは名詞（apples and grapes）。文（S ＋ V）を続けたいときは For example, を使う。",
      "form": "名詞 ＋ such as A and B",
      "ex": "I like fruits [such as] apples and grapes.",
      "exja": "私はりんごやぶどうのような果物が好きだ。",
      "fig": {
        "t": "vs",
        "a": [
          "fruits such as apples",
          "うしろは名詞"
        ],
        "b": [
          "For example, I eat …",
          "うしろは文"
        ]
      },
      "ng": {
        "bad": "Such as, you can use a tablet.",
        "good": "For example, you can use a tablet.",
        "why": "such as のあとに文は続けられない"
      },
      "why": "such as は後ろに名詞を並べる言葉。文（S ＋ V）を続けたいときは、文の頭に置ける For example, を使う。",
      "easy": "① fruits such as apples＝りんごのような果物。② such as の後ろは「物の名前」だけ。③ 文で例を言うなら For example,。"
    }
  ],
  "drills": [
    {
      "en": "He can speak English. He can [also] speak Chinese.",
      "ja": "彼は英語が話せる。中国語も話せる。",
      "alt": [
        "too also",
        "and",
        "either"
      ],
      "tip": "also は動詞の前",
      "why": "can と speak の間に also。too also は二重、and は✕、either は否定文用。",
      "p": 0
    },
    {
      "en": "The room is large. [In addition], it is bright.",
      "ja": "その部屋は広い。さらに明るい。",
      "alt": [
        "In addition to",
        "In additional",
        "Addition"
      ],
      "tip": "In addition,「さらに」",
      "why": "文の頭で「さらに」は In addition,。In addition to は後ろに名詞が必要。",
      "p": 0
    },
    {
      "en": "This app is free. [Moreover], it is easy to use.",
      "ja": "このアプリは無料だ。そのうえ使いやすい。",
      "alt": [
        "More",
        "Moreover of",
        "Furthermore of"
      ],
      "tip": "Moreover,「そのうえ」",
      "why": "Moreover,＝さらに。More は✕、Moreover of・Furthermore of の形はない。",
      "p": 0
    },
    {
      "en": "[Furthermore], the hotel is near the station.",
      "ja": "さらに、そのホテルは駅に近い。",
      "alt": [
        "Further of",
        "Furthermore of",
        "Furthermores"
      ],
      "tip": "Furthermore,「さらに」",
      "why": "Furthermore,＝さらに。of をつける形や Furthermores という形はない。",
      "p": 0
    },
    {
      "en": "[For example], you can recycle plastic bottles.",
      "ja": "たとえば、ペットボトルをリサイクルできる。",
      "alt": [
        "Such as",
        "For examples",
        "As example"
      ],
      "tip": "For example, ＋ 文",
      "why": "後ろが文なので For example,。Such as は名詞用、For examples は✕。",
      "p": 1
    },
    {
      "en": "I like sports [such as] tennis and soccer.",
      "ja": "私はテニスやサッカーのようなスポーツが好きだ。",
      "alt": [
        "such like",
        "such",
        "like as"
      ],
      "tip": "such as ＋ 名詞",
      "why": "後ろが tennis and soccer（名詞）なので such as。such like・like as は✕。",
      "p": 2
    },
    {
      "en": "[For instance], some students study in cafes.",
      "ja": "たとえば、カフェで勉強する生徒もいる。",
      "alt": [
        "Such as",
        "For instances",
        "In instance"
      ],
      "tip": "For instance, ＝ For example,",
      "why": "For instance,＝たとえば。For instances・In instance は✕。",
      "p": 1
    },
    {
      "en": "We should eat vegetables [like] carrots and tomatoes.",
      "ja": "にんじんやトマトのような野菜を食べるべきだ。",
      "alt": [
        "alike",
        "likes",
        "as like"
      ],
      "tip": "like ＋ 名詞「〜のような」",
      "why": "後ろに名詞を並べる like＝〜のような。alike・likes・as like は✕。",
      "p": 2
    },
    {
      "en": "I like cats. My sister likes them, [too].",
      "ja": "私はネコが好きだ。姉も好きだ。",
      "alt": [
        "also too",
        "either",
        "so"
      ],
      "tip": "文の最後に too",
      "why": "肯定文の文末で「〜も」は too。also too は二重、either は否定文用。",
      "p": 0
    },
    {
      "en": "[Besides], it is too expensive.",
      "ja": "それに、それは高すぎる。",
      "alt": [
        "Beside",
        "Besides of",
        "In besides"
      ],
      "tip": "Besides,「それに」（s がつく）",
      "why": "Besides,＝そのうえ。Beside は「〜のそばに」、of・In をつける形はない。",
      "p": 0
    },
    {
      "en": "This phone is light. [What's more], it is cheap.",
      "ja": "この電話は軽い。おまけに安い。",
      "alt": [
        "What more",
        "What's mores",
        "That's more"
      ],
      "tip": "What's more,「おまけに」",
      "why": "What's more,＝そのうえ。What more・What's mores・That's more は✕。",
      "p": 0
    },
    {
      "en": "Many countries, [such as] Japan and Korea, use chopsticks.",
      "ja": "日本や韓国のような多くの国がはしを使う。",
      "alt": [
        "such",
        "such like",
        "as such"
      ],
      "tip": "such as ＋ 名詞を並べる",
      "why": "国の名前（名詞）を並べるので such as。such・such like・as such は✕。",
      "p": 2
    },
    {
      "en": "She is kind. She is [also] very funny.",
      "ja": "彼女はやさしい。そのうえ、とてもおもしろい。",
      "alt": [
        "too also",
        "and",
        "either"
      ],
      "tip": "also は be 動詞のあと",
      "why": "「さらに」を文の中で足すのは also。be 動詞のあとに置く。either は否定文用。and は文の中で浮く。",
      "p": 0
    },
    {
      "en": "The park is beautiful. [In addition], it is free.",
      "ja": "その公園は美しい。さらに、無料だ。",
      "alt": [
        "In addition to",
        "In additional",
        "Addition"
      ],
      "tip": "In addition, ＋ 文",
      "why": "文頭の「さらに」は In addition,。In addition to のうしろは名詞。",
      "p": 0
    },
    {
      "en": "This plan is cheap. [Moreover], it is safe.",
      "ja": "この計画は安い。そのうえ、安全だ。",
      "alt": [
        "More",
        "Moreover of",
        "Most"
      ],
      "tip": "Moreover, ＝ そのうえ",
      "why": "情報を足すのは Moreover,。More・Most だけでは「さらに」の意味にならない。of はつかない。",
      "p": 0
    },
    {
      "en": "You can study online. [Furthermore], it is free.",
      "ja": "オンラインで勉強できる。さらに、無料だ。",
      "alt": [
        "Further of",
        "Furthermore of",
        "Farther"
      ],
      "tip": "Furthermore, ＝ さらに",
      "why": "文の頭で「さらに」は Furthermore,。of はつかない。Farther は「もっと遠く」で意味がちがう。",
      "p": 0
    },
    {
      "en": "I play the guitar. My brother plays it, [too].",
      "ja": "私はギターをひく。兄もひく。",
      "alt": [
        "either",
        "so",
        "neither"
      ],
      "tip": "肯定文の「〜も」＝ too",
      "why": "「〜も」は肯定文なら文末の too。either は否定文用。so・neither は文頭で使う形。",
      "p": 0
    },
    {
      "en": "[For example], you can turn off the lights.",
      "ja": "たとえば、電気を消すことができる。",
      "alt": [
        "Such as",
        "For examples",
        "As example"
      ],
      "tip": "For example, ＋ 文",
      "why": "うしろが文なので For example,。Such as のうしろは名詞だけ。example は s をつけない。",
      "p": 1
    },
    {
      "en": "[For instance], we can walk to school.",
      "ja": "たとえば、学校へ歩いて行ける。",
      "alt": [
        "For instances",
        "In instance",
        "By instance"
      ],
      "tip": "For instance, ＝ For example,",
      "why": "例を出す決まった形は For instance,。instance に s はつけない。in・by は ✕。",
      "p": 1
    },
    {
      "en": "[For example], many people use paper bags.",
      "ja": "たとえば、多くの人が紙ぶくろを使っている。",
      "alt": [
        "For examples",
        "By example",
        "As example"
      ],
      "tip": "For example, ＋ 文",
      "why": "具体例の合図は For example,。examples と s をつけない。by・as は ✕。",
      "p": 1
    },
    {
      "en": "Some animals, [such as] bears, sleep in winter.",
      "ja": "クマのように、冬に眠る動物もいる。",
      "alt": [
        "such",
        "like as",
        "so as"
      ],
      "tip": "名詞, such as 名詞,",
      "why": "animals の例を名詞で並べるので such as。such だけ・like as・so as は形がない。",
      "p": 2
    },
    {
      "en": "I want to visit cities [such as] London and Paris.",
      "ja": "ロンドンやパリのような都市を訪れたい。",
      "alt": [
        "such",
        "as such",
        "so as"
      ],
      "tip": "such as ＋ 名詞を並べる",
      "why": "cities の例として名詞を並べるので such as。such・as such・so as では例の意味にならない。",
      "p": 2
    },
    {
      "en": "We sell fruits [like] apples and oranges.",
      "ja": "リンゴやオレンジのような果物を売っている。",
      "alt": [
        "likes",
        "liking",
        "alike"
      ],
      "tip": "like ＋ 名詞 ＝ 〜のような",
      "why": "「〜のような」は like。likes・liking は動詞の形。alike は名詞の前に置けない。",
      "p": 2
    },
    {
      "en": "Many sports, [such as] judo, started in Japan.",
      "ja": "柔道のように、日本で始まったスポーツは多い。",
      "alt": [
        "such",
        "like as",
        "so as"
      ],
      "tip": "名詞, such as 名詞,",
      "why": "sports の例を名詞で入れるので such as。such だけ・like as・so as は形がない。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "一般動詞 plays の前に also。too also は二重、and は✕、either は否定文用。",
      "p": 0
    },
    {
      "why": "文の頭で「さらに」は In addition,。In addition to は後ろに名詞が必要。",
      "p": 0
    },
    {
      "why": "Moreover,＝さらに。More だけでは✕、Moreover of・Furthermore of はない。",
      "p": 0
    },
    {
      "why": "後ろが文なので For example,。Such as は名詞用、For examples は✕。",
      "p": 1
    },
    {
      "why": "後ろが apples and grapes（名詞）なので such as。such like・like as は✕。",
      "p": 2
    },
    {
      "why": "For instance,＝たとえば。For instances・In instance は✕。",
      "p": 1
    }
  ]
};
