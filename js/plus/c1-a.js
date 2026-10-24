/* 追加教材：論理表現Ⅰ 1〜6 単元（わかりやすい説明・図・まちがい例・演習 12 文） */
window.LX = window.LX || { courses: [] };
window.LX.plus = window.LX.plus || {};

window.LX.plus["c1-u01"] = {
  "core": {
    "ico": "🧱",
    "catch": "英語は「動詞の右側」で型が決まる",
    "say": "日本語は語順が自由。英語は置く場所で役目が決まる。動詞の右に何が来るかを見れば、文の型がわかる。",
    "fig": {
      "t": "slots",
      "parts": [
        [
          "The news",
          "S"
        ],
        [
          "made",
          "V"
        ],
        [
          "me",
          "O"
        ],
        [
          "happy",
          "C"
        ]
      ],
      "arc": [
        3,
        2,
        "me の様子"
      ]
    }
  },
  "points": [
    {
      "h": "SVC は「S ＝ C」のイコール",
      "body": "become・look・get は「＝」の働き。became a nurse なら「姉＝看護師」。C には名詞か形容詞が入る。",
      "form": "S ＋ V ＋ C（S＝C）",
      "ex": "My sister [became] a nurse.",
      "exja": "姉は看護師になった。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "She",
            "S"
          ],
          [
            "looks",
            "V"
          ],
          [
            "tired",
            "C"
          ]
        ],
        "arc": [
          2,
          0,
          "She の様子"
        ]
      },
      "ng": {
        "bad": "She looks happily.",
        "good": "She looks happy.",
        "why": "C は S の様子。様子を表すのは形容詞（-ly は不可）"
      },
      "why": "look・become は「どんなか・何か」を言う動詞。後ろの語は主語そのものを説明するので、S＝C の関係になる。動作をする相手（目的語）ではない。",
      "easy": "① She looks tired. を見る。② 「彼女＝つかれている」と＝でつなげる？ ③ つなげられたら、その形がSVC。looks は「〜に見える」というイコールの記号だと思えばOK。"
    },
    {
      "h": "SVOO は「人に・物を」の順",
      "body": "give・show・tell・buy は「人」→「物」の順。物を先に言うなら give a watch to me と to で人をつなぐ。",
      "form": "S ＋ V ＋ 人 ＋ 物",
      "ex": "My father [gave me] a watch.",
      "exja": "父は私に時計をくれた。",
      "fig": {
        "t": "vs",
        "a": [
          "He gave me a watch.",
          "人 → 物 の順"
        ],
        "b": [
          "He gave a watch to me.",
          "物 → to ＋ 人"
        ]
      },
      "ng": {
        "bad": "He gave to me a watch.",
        "good": "He gave me a watch.",
        "why": "人を先に置くときは to を入れない"
      },
      "why": "give・send などは「だれに・何を」の2つが必要。英語は先に「人」、次に「物」と並べるのがきまり。順番を逆にするなら to で人をつなぐ。",
      "easy": "プレゼントを渡す場面を思いうかべよう。① まず「だれに？」→ me。② 次に「何を？」→ a watch。③ gave me a watch。人→物の順に、手渡すように並べる。"
    },
    {
      "h": "SVOC の C は O の説明",
      "body": "make・keep のあとの O と C は「O＝C」。made me happy は「me＝happy」。O を C の状態にする。",
      "form": "S ＋ V ＋ O ＋ C（O＝C）",
      "ex": "The news made me [happy].",
      "exja": "その知らせで私はうれしくなった。",
      "ng": {
        "bad": "Please keep clean the room.",
        "good": "Please keep the room clean.",
        "why": "O（the room）が先、その様子 C（clean）があと"
      },
      "why": "make・keep・find は「O を C の状態にする・だと思う」動詞。C は O の様子を説明するので、O＝C が成り立つ。だから C には形容詞・名詞が入る。",
      "easy": "① made me happy から me と happy を取り出す。② 「私＝うれしい」とイコールでつなぐ。③ つながれば SVOC。happily（うれしそうに）は様子を表す言葉ではないので×。"
    }
  ],
  "drills": [
    {
      "en": "Tom [looks] very sleepy.",
      "ja": "トムはとても眠そうだ。",
      "alt": [
        "looks at",
        "sees",
        "watches"
      ],
      "tip": "look ＋ 形容詞「〜に見える」",
      "why": "「トム＝とても眠そう」なので look＋形容詞。looks at・sees・watches は「〜を見る」で×。",
      "p": 0
    },
    {
      "en": "This soup [tastes] good.",
      "ja": "このスープはおいしい。",
      "alt": [
        "tastes of",
        "eats",
        "tasted to"
      ],
      "tip": "taste ＋ 形容詞「〜な味がする」",
      "why": "taste＋形容詞で「〜な味がする」。スープ＝おいしい。eats は「食べる」で意味が合わない。",
      "p": 0
    },
    {
      "en": "It [got] dark outside.",
      "ja": "外が暗くなった。",
      "alt": [
        "got to",
        "became to",
        "turned to"
      ],
      "tip": "get ＋ 形容詞「〜になる」",
      "why": "get＋形容詞で「〜になる」。外＝暗い。get・become のあとに to は入らないので×。",
      "p": 0
    },
    {
      "en": "My brother [became] a famous singer.",
      "ja": "兄は有名な歌手になった。",
      "alt": [
        "became to",
        "got to",
        "was become"
      ],
      "tip": "become ＋ 名詞「〜になる」",
      "why": "become＋名詞で「〜になる」。to は不要。was become という形はない。",
      "p": 0
    },
    {
      "en": "She [sent me] a long letter.",
      "ja": "彼女は私に長い手紙を送ってくれた。",
      "alt": [
        "sent to me",
        "sent for me",
        "sent me to"
      ],
      "tip": "send ＋ 人 ＋ 物",
      "why": "send＋人＋物の順。sent to me にすると後ろに a long letter を置けないので×。",
      "p": 1
    },
    {
      "en": "Can you [tell me] your phone number?",
      "ja": "電話番号を教えてくれますか。",
      "alt": [
        "tell to me",
        "say me",
        "tell for me"
      ],
      "tip": "tell ＋ 人 ＋ 物「人に物を伝える」",
      "why": "tell＋人＋物で「人に〜を伝える」。say は人を直後に置けないので say me は×。",
      "p": 1
    },
    {
      "en": "My mother [bought me] a new bike.",
      "ja": "母は私に新しい自転車を買ってくれた。",
      "alt": [
        "bought to me",
        "bought me to",
        "buy me for"
      ],
      "tip": "buy ＋ 人 ＋ 物",
      "why": "buy＋人＋物の順。buy の前に to は置かない。物を先に言うなら for を使う形になる。",
      "p": 1
    },
    {
      "en": "Mr. Sato [teaches us] English.",
      "ja": "佐藤先生は私たちに英語を教えている。",
      "alt": [
        "teaches to us",
        "teach us",
        "teaches for us"
      ],
      "tip": "teach ＋ 人 ＋ 教科",
      "why": "teach＋人＋教科の順。主語 Mr. Sato は3人称単数で teaches。teach us は×。",
      "p": 1
    },
    {
      "en": "We [call our dog] Pochi.",
      "ja": "私たちは犬をポチと呼んでいる。",
      "alt": [
        "call to our dog",
        "call our dog as",
        "calls our dog"
      ],
      "tip": "call ＋ O ＋ C「O を C と呼ぶ」",
      "why": "call＋O＋C で「O を C と呼ぶ」。as や to は不要。主語 we なので calls は×。",
      "p": 2
    },
    {
      "en": "This song always makes me [sad].",
      "ja": "この歌を聞くといつも悲しくなる。",
      "alt": [
        "sadly",
        "sadness",
        "to sad"
      ],
      "tip": "make ＋ O ＋ 形容詞",
      "why": "make me sad で「私＝悲しい」。C は形容詞。sadly（副詞）・sadness（名詞）は×。",
      "p": 2
    },
    {
      "en": "I found the test [easy].",
      "ja": "そのテストは簡単だとわかった。",
      "alt": [
        "easiness",
        "to easy",
        "easy to"
      ],
      "tip": "find ＋ O ＋ C「O が C だとわかる」",
      "why": "find＋O＋C で「テスト＝簡単だった」。C は形容詞 easy。easiness や to easy は×。",
      "p": 2
    },
    {
      "en": "Please leave the door [open].",
      "ja": "ドアを開けたままにしておいてください。",
      "alt": [
        "opening",
        "openly",
        "to open"
      ],
      "tip": "leave ＋ O ＋ C「O を C のままに」",
      "why": "leave＋O＋C で「ドア＝開いたまま」。open は形容詞にもなる。openly は副詞で×。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "「彼女＝つかれている」なので look＋形容詞。looks at・sees・watches は「〜を見る」で×。",
      "p": 0
    },
    {
      "why": "become＋名詞で「〜になる」。became to・got to・turned to は to が余計で×。",
      "p": 0
    },
    {
      "why": "give＋人＋物で「人に物をあげる」。gave to me にすると後ろに物を置けない。for も me to も×。",
      "p": 1
    },
    {
      "why": "show＋人＋物の順。show to me や show for me だと、後ろの the way とつながらない。",
      "p": 1
    },
    {
      "why": "made me happy で「私＝うれしい」。C は形容詞。happily（副詞）・happiness は×。",
      "p": 2
    },
    {
      "why": "keep＋O＋C で「部屋をきれいなままに」。clean the room の順は「部屋を掃除する」で×。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u02"] = {
  "core": {
    "ico": "🎞",
    "catch": "時制は「カメラでどこを映すか」",
    "say": "現在形は「いつも」の写真、過去形は「もう終わった」写真、進行形は「その瞬間」の動画。",
    "fig": {
      "t": "time",
      "marks": [
        {
          "from": -4,
          "to": 4,
          "label": "いつも（現在形）"
        },
        {
          "at": -2,
          "label": "過去の一点"
        },
        {
          "at": 0,
          "label": "今まさに"
        }
      ]
    }
  },
  "points": [
    {
      "h": "現在形は「いつもの事実」",
      "body": "現在形は「今この瞬間」ではなく、毎日の習慣や変わらない事実を表す。主語が he・she・it なら動詞に -s を付ける。",
      "form": "主語が3単現 → 動詞 ＋ s",
      "ex": "My brother [walks] to school every day.",
      "exja": "弟は毎日歩いて学校へ行く。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "from": -4,
            "to": 4,
            "label": "毎日くり返す"
          }
        ]
      },
      "ng": {
        "bad": "He walk to school every day.",
        "good": "He walks to school every day.",
        "why": "he・she・it が主語の現在形は 動詞に -s"
      },
      "why": "現在形は「いつもそうだ」という時間の幅のない事実・習慣を表す。今だけでなく昨日も明日も同じなので、every day などと合う。",
      "easy": "① 毎朝のことか？ ずっと変わらないことか？ を考える。② そうなら現在形。③ 主語が he・she・it・1人の名前なら動詞に s を付ける。「彼は歩く」→ he walks。"
    },
    {
      "h": "過去形は「終わった写真」",
      "body": "過去形は、もう終わったことを過去の一点で切り取る。yesterday・last ～・～ ago が目印。今とのつながりは言わない。",
      "form": "動詞の過去形（-ed／不規則）",
      "ex": "I [visited] Kyoto last summer.",
      "exja": "私は去年の夏、京都を訪れた。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "at": -2,
            "label": "去年の夏"
          }
        ]
      },
      "ng": {
        "bad": "I have visited Kyoto last summer.",
        "good": "I visited Kyoto last summer.",
        "why": "last summer は過去の一点。現在完了とは使えない"
      },
      "why": "過去形は、今とは切りはなされた過去の一点のできごとを表す。yesterday・ago は過去の一点を指す言葉なので、過去形と組む。",
      "easy": "アルバムの写真を思いうかべよう。① 写っているのはもう終わった場面。② 「いつ？」と聞かれて昨日・去年と答えられる。③ それなら過去形。went・bought のように形を変える。"
    },
    {
      "h": "進行形は「その瞬間の動画」",
      "body": "be動詞 ＋ -ing で「ちょうど〜している最中」。過去進行形なら「その時〜していた」。when ～ の瞬間に続いていた動作を表す。",
      "form": "be動詞 ＋ 動詞の -ing 形",
      "ex": "I [was taking] a bath when you called.",
      "exja": "あなたが電話したとき、私は風呂に入っていた。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "from": -3,
            "to": -1,
            "label": "風呂に入っていた"
          },
          {
            "at": -2,
            "label": "電話が鳴る"
          }
        ]
      },
      "ng": {
        "bad": "I am knowing the answer.",
        "good": "I know the answer.",
        "why": "know・like など「状態」の動詞は ふつう進行形にしない"
      },
      "why": "進行形は「動作の途中」を切り取る。be動詞が「いつの時点か」を、-ing が「途中」を表すので、Look! や when～ の一瞬と合う。",
      "easy": "動画を一時停止したところを思いうかべよう。① その瞬間、まだ動作が続いている？ ② 続いていれば be動詞＋ing。③ 今なら is/are、過去なら was/were にする。"
    }
  ],
  "drills": [
    {
      "en": "My father [drinks] coffee every morning.",
      "ja": "父は毎朝コーヒーを飲む。",
      "alt": [
        "drink",
        "is drink",
        "drinking"
      ],
      "tip": "every morning＝習慣 → 現在形",
      "why": "every morning は習慣＝現在形。主語 my father は3人称単数なので drinks。",
      "p": 0
    },
    {
      "en": "Water [boils] at 100 degrees.",
      "ja": "水は100度で沸騰する。",
      "alt": [
        "boil",
        "is boil",
        "boiling"
      ],
      "tip": "変わらない事実は現在形",
      "why": "水が100度で沸くのは変わらない事実＝現在形。主語 water なので boils。",
      "p": 0
    },
    {
      "en": "We [went] to the beach yesterday.",
      "ja": "私たちは昨日、海へ行った。",
      "alt": [
        "go",
        "have gone",
        "are going"
      ],
      "tip": "yesterday は過去形",
      "why": "yesterday は過去の一点＝過去形 went。have gone は yesterday と使えない。",
      "p": 1
    },
    {
      "en": "She [bought] a new phone two days ago.",
      "ja": "彼女は2日前に新しい電話を買った。",
      "alt": [
        "buys",
        "has bought",
        "is buying"
      ],
      "tip": "～ ago は過去形の目印",
      "why": "two days ago は過去の一点＝過去形 bought。has bought は ago と使えない。",
      "p": 1
    },
    {
      "en": "Be quiet! The baby [is sleeping].",
      "ja": "静かに！赤ちゃんが眠っている。",
      "alt": [
        "sleep",
        "are sleeping",
        "is sleep"
      ],
      "tip": "今まさに → 現在進行形",
      "why": "Be quiet! と言うのは今眠っている最中だから＝現在進行形。主語 the baby なので is。",
      "p": 2
    },
    {
      "en": "Listen! Someone [is knocking] at the door.",
      "ja": "聞いて！だれかがドアをノックしている。",
      "alt": [
        "knock",
        "are knocking",
        "is knock"
      ],
      "tip": "Listen! は「今」の合図",
      "why": "Listen! は「今」の合図＝現在進行形。someone は単数あつかいなので is knocking。",
      "p": 2
    },
    {
      "en": "They [were watching] TV when I came home.",
      "ja": "私が帰宅したとき、彼らはテレビを見ていた。",
      "alt": [
        "watch",
        "are watching",
        "was watching"
      ],
      "tip": "when ～ の時点で最中 → 過去進行形",
      "why": "私が帰ったその時にテレビを見ている最中＝過去進行形。主語 they なので were。",
      "p": 2
    },
    {
      "en": "What [are you doing] now?",
      "ja": "今、何をしているの？",
      "alt": [
        "do you doing",
        "you are doing",
        "did you doing"
      ],
      "tip": "疑問文は be動詞を前に",
      "why": "now の最中をたずねる＝現在進行形の疑問文。are を主語 you の前に出す。",
      "p": 2
    },
    {
      "en": "Ken [does not like] spicy food.",
      "ja": "ケンは辛い食べ物が好きではない。",
      "alt": [
        "do not like",
        "is not like",
        "not likes"
      ],
      "tip": "3単現の否定は does not ＋ 原形",
      "why": "主語 Ken は3人称単数。否定は does not＋原形 like。not likes は形がない。",
      "p": 0
    },
    {
      "en": "[Did you see] the movie last night?",
      "ja": "昨夜その映画を見ましたか。",
      "alt": [
        "Do you saw",
        "Did you saw",
        "Were you see"
      ],
      "tip": "過去の疑問文は Did ＋ 原形",
      "why": "last night は過去＝Did＋主語＋原形。Did のあとは saw でなく原形 see。",
      "p": 1
    },
    {
      "en": "It [was raining] hard at that time.",
      "ja": "その時、雨が激しく降っていた。",
      "alt": [
        "is raining",
        "rains",
        "were raining"
      ],
      "tip": "at that time の最中 → 過去進行形",
      "why": "at that time の最中＝過去進行形。主語 it なので was raining。were は×。",
      "p": 2
    },
    {
      "en": "I [was studying] in my room when the phone rang.",
      "ja": "電話が鳴ったとき、私は部屋で勉強していた。",
      "alt": [
        "am studying",
        "were studying",
        "was study"
      ],
      "tip": "電話が鳴った瞬間の「最中」",
      "why": "電話が鳴った瞬間に勉強の最中＝過去進行形。主語 I なので was studying。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "毎日のこと＝現在形。主語 my brother は3人称単数で walks。walk・is walk は×。",
      "p": 0
    },
    {
      "why": "太陽が東から昇るのは変わらない事実＝現在形。主語 the sun で -s が付く。rose は過去で×。",
      "p": 0
    },
    {
      "why": "last summer は過去の一点なので過去形。have visited は過去の一点を表す語と使えない。",
      "p": 1
    },
    {
      "why": "Look! は「今まさに」の合図＝現在進行形。主語 children は複数なので are。is playing は×。",
      "p": 2
    },
    {
      "why": "電話が来た瞬間に入浴中だった＝過去進行形。主語 I なので was。were・am は×。",
      "p": 2
    },
    {
      "why": "昨夜8時の「最中」をたずねる＝過去進行形の疑問文。be動詞 were を主語の前に出す。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u03"] = {
  "core": {
    "ico": "🏹",
    "catch": "現在完了は「過去から今に刺さる矢」",
    "say": "過去のできごとが、今とつながっている。だから話の中心は「今」。過去の一点を表す言葉とは使えない。",
    "fig": {
      "t": "time",
      "marks": [
        {
          "from": -3,
          "to": 0,
          "label": "過去 → 今もつながる"
        }
      ]
    }
  },
  "points": [
    {
      "h": "継続「ずっと〜している」",
      "body": "過去に始まって、今も続いている。期間は for（〜の間）、始まった時点は since（〜から）で表す。",
      "form": "have ＋ 過去分詞 ＋ for／since",
      "ex": "I [have lived] in Osaka for ten years.",
      "exja": "私は10年間大阪に住んでいる。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "from": -3,
            "to": 0,
            "label": "10年間 住んでいる"
          }
        ]
      },
      "ng": {
        "bad": "I have lived in Osaka since ten years.",
        "good": "I have lived in Osaka for ten years.",
        "why": "期間（10年間）は for、始まった時点は since"
      },
      "why": "have は「今もっている」。have＋過去分詞は「過去からの状態を今も持っている」こと。だから「今まで続いている」を表せる。",
      "easy": "① 「10年前に住み始めた」。② 「今も住んでいる」。③ この①と②を1本の矢でつなぐのが have lived。期間の長さなら for、スタートの日なら since。"
    },
    {
      "h": "経験「〜したことがある」",
      "body": "生まれてから今までをふり返って「ある・ない」を言う。ever（今までに）・never（一度も〜ない）・〜 times（〜回）が目印。",
      "form": "have ＋ (ever／never) ＋ 過去分詞",
      "ex": "I [have never seen] snow.",
      "exja": "私は雪を一度も見たことがない。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "from": -4,
            "to": 0,
            "label": "生まれてから今まで"
          },
          {
            "at": -2,
            "label": "1回目"
          }
        ]
      },
      "ng": {
        "bad": "I have seen him yesterday.",
        "good": "I saw him yesterday.",
        "why": "yesterday は過去の一点。今とつながらないので過去形"
      },
      "why": "経験は「生まれてから今まで」をふり返る話。ふり返るのは今なので、過去形でなく現在完了を使う。",
      "easy": "思い出の箱を今開けるイメージ。① 「中に『北海道』の思い出はある？」② あれば have been to、なければ have never been to。③ 回数は twice・three times。"
    },
    {
      "h": "完了「もう〜した」",
      "body": "さっき終わって、その結果が今にある。just（ちょうど）・already（もう）・yet（否定文で「まだ」、疑問文で「もう」）が目印。",
      "form": "have ＋ just／already ＋ 過去分詞",
      "ex": "I [have just finished] my homework.",
      "exja": "私はちょうど宿題を終えたところだ。",
      "fig": {
        "t": "vs",
        "a": [
          "I have lost my key.",
          "今も見つからない"
        ],
        "b": [
          "I lost my key.",
          "今はわからない"
        ]
      },
      "ng": {
        "bad": "When have you finished your homework?",
        "good": "When did you finish your homework?",
        "why": "When（いつ）は過去の一点をたずねる。過去形で"
      },
      "why": "完了は「やり終えた結果を今もっている」。宿題が終わった結果、今ひまだ、のように今の様子につながる。",
      "easy": "① 宿題を「やり終えた」。② その結果、今「終わった状態」を持っている。③ だから have finished。just（たった今）・already（もう）は have のすぐ後ろ。"
    }
  ],
  "drills": [
    {
      "en": "We [have known] each other for five years.",
      "ja": "私たちは知り合って5年になる。",
      "alt": [
        "know",
        "have know",
        "are knowing"
      ],
      "tip": "for ＋ 期間 → 継続",
      "why": "for five years で今も続く＝have known。know は進行形にしないので×。",
      "p": 0
    },
    {
      "en": "It has been cold [since] last week.",
      "ja": "先週からずっと寒い。",
      "alt": [
        "for",
        "from",
        "ago"
      ],
      "tip": "since ＋ 始まった時点",
      "why": "last week は始まった時点なので since。for は期間の長さ、ago は過去形と使う。",
      "p": 0
    },
    {
      "en": "He has played tennis [for] three years.",
      "ja": "彼は3年間テニスをしている。",
      "alt": [
        "since",
        "during",
        "ago"
      ],
      "tip": "for ＋ 期間の長さ",
      "why": "three years は期間の長さなので for。since は始まった時点を置くので×。",
      "p": 0
    },
    {
      "en": "My sister [has been] sick since Friday.",
      "ja": "姉は金曜日から体調が悪い。",
      "alt": [
        "is",
        "was",
        "has be"
      ],
      "tip": "be動詞の現在完了は has been",
      "why": "since Friday から今まで＝継続。be動詞の現在完了は has been。is・was は×。",
      "p": 0
    },
    {
      "en": "I [have visited] Okinawa twice.",
      "ja": "私は沖縄に2回行ったことがある。",
      "alt": [
        "visit",
        "am visiting",
        "have visit"
      ],
      "tip": "twice・～ times は経験",
      "why": "twice は回数＝経験の have visited。visit や am visiting は回数と合わない。",
      "p": 1
    },
    {
      "en": "Have you ever [eaten] natto?",
      "ja": "納豆を食べたことがありますか。",
      "alt": [
        "ate",
        "eat",
        "eating"
      ],
      "tip": "ever ＋ 過去分詞で経験をたずねる",
      "why": "ever＋過去分詞で「今までに〜したことある？」。eat の過去分詞は eaten。ate は過去形。",
      "p": 1
    },
    {
      "en": "She [has never been] abroad.",
      "ja": "彼女は一度も海外に行ったことがない。",
      "alt": [
        "never has been",
        "has never be",
        "has been never"
      ],
      "tip": "never は have と過去分詞の間",
      "why": "never は has と過去分詞の間に入る。has never been abroad で「一度も行ったことがない」。",
      "p": 1
    },
    {
      "en": "How many times [have you read] this book?",
      "ja": "この本を何回読んだことがありますか。",
      "alt": [
        "did you have read",
        "have you reading",
        "you have read"
      ],
      "tip": "回数をたずねる経験の疑問文",
      "why": "回数をたずねる経験の疑問文＝How many times have you＋過去分詞。did you have は×。",
      "p": 1
    },
    {
      "en": "The bus [has already left].",
      "ja": "バスはもう出てしまった。",
      "alt": [
        "has already leave",
        "have already left",
        "is already left"
      ],
      "tip": "already は have と過去分詞の間",
      "why": "もう出発した結果、今いない＝has already left。主語 the bus は単数なので have は×。",
      "p": 2
    },
    {
      "en": "Have you finished your lunch [yet]?",
      "ja": "もう昼食を食べ終わりましたか。",
      "alt": [
        "still",
        "ago",
        "since"
      ],
      "tip": "疑問文の yet は「もう」",
      "why": "疑問文の yet は「もう」。still・ago・since はこの位置で「もう」の意味にならない。",
      "p": 2
    },
    {
      "en": "I [haven't decided] my future job yet.",
      "ja": "将来の仕事はまだ決めていない。",
      "alt": [
        "didn't decided",
        "haven't decide",
        "don't decided"
      ],
      "tip": "否定文の yet は「まだ」",
      "why": "まだ決めていない＝haven't＋過去分詞 decided。didn't のあとは原形なので×。",
      "p": 2
    },
    {
      "en": "He [has lost] his wallet, so he can't buy lunch.",
      "ja": "彼は財布をなくしてしまったので、昼食が買えない。",
      "alt": [
        "has lose",
        "have lost",
        "is losing"
      ],
      "tip": "なくした結果が今も続く",
      "why": "なくした結果、今お金がない＝完了の has lost。主語 he なので have は×。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "for ten years は今まで続く期間＝継続の have lived。lived だと今住んでいるか不明になる。",
      "p": 0
    },
    {
      "why": "last Monday は始まった日なので since。for は期間の長さ、ago は過去形と使うので×。",
      "p": 0
    },
    {
      "why": "一度もない経験＝have never seen。never は have と過去分詞の間。saw は過去形で×。",
      "p": 1
    },
    {
      "why": "have been to で「行ったことがある」。went・go は have の後ろに置けない。being も×。",
      "p": 1
    },
    {
      "why": "たった今終わった＝have just finished。just の位置は have と過去分詞の間。",
      "p": 2
    },
    {
      "why": "否定文の「まだ」は文末の yet。already は「もう」、still は否定の前に置くので×。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u04"] = {
  "core": {
    "ico": "🎚",
    "catch": "助動詞は「気持ちのダイヤル」",
    "say": "動詞の前に置いて、話し手の気持ち（できる・すべき・かもしれない）を足す。後ろの動詞はいつも原形。",
    "fig": {
      "t": "scale",
      "left": "弱い",
      "right": "強い",
      "items": [
        [
          "may",
          35
        ],
        [
          "should",
          65
        ],
        [
          "must",
          95
        ]
      ]
    }
  },
  "points": [
    {
      "h": "助動詞 ＋ 動詞の原形",
      "body": "助動詞は動詞にかぶせる「帽子」。帽子をかぶった動詞は原形にもどる。主語が he でも -s は付かず、to も入らない。",
      "form": "助動詞 ＋ 動詞の原形",
      "ex": "She [can speak] three languages.",
      "exja": "彼女は3か国語を話すことができる。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "She",
            "S"
          ],
          [
            "can",
            "助動詞"
          ],
          [
            "speak",
            "原形"
          ],
          [
            "three languages",
            "O"
          ]
        ]
      },
      "ng": {
        "bad": "She can speaks English.",
        "good": "She can speak English.",
        "why": "助動詞のあとは原形。-s は付けない"
      },
      "why": "助動詞が「時・人」の情報を引き受けるので、後ろの動詞は何も付けない原形になる。だから -s・-ing・to は付かない。",
      "easy": "助動詞は動詞にかぶせる帽子。① 帽子（can）をかぶる。② すると動詞は「すっぴん」（原形）になる。③ can speaks のように飾りを付けたら×。"
    },
    {
      "h": "禁止 と 不要 は正反対",
      "body": "must not は「してはいけない」（赤信号）。don't have to は「しなくてもいい」（青信号）。形は似ても意味は逆。",
      "form": "must not 禁止／don't have to 不要",
      "ex": "You [don't have to] come tomorrow.",
      "exja": "あなたは明日来なくてもよい。",
      "fig": {
        "t": "vs",
        "a": [
          "You must not run here.",
          "禁止：だめ"
        ],
        "b": [
          "You don't have to run.",
          "不要：しなくていい"
        ]
      },
      "ng": {
        "bad": "You must not hurry. We have time.",
        "good": "You don't have to hurry. We have time.",
        "why": "「急がなくていい」は不要。禁止の must not ではない"
      },
      "why": "must not は「しないこと」を強く求める＝禁止。don't have to は「しなければならない、ではない」＝しなくてよい。否定のかかる所がちがう。",
      "easy": "信号でおぼえよう。① must not は赤信号「やっちゃダメ」。② don't have to は青信号「やらなくても大丈夫」。③ どっちの気持ちか考えて選ぶ。"
    },
    {
      "h": "should と may",
      "body": "should は「〜したほうがいい」というアドバイス。may は「〜かもしれない」（半分くらいの確信）や「〜してもよい」（許可）。",
      "form": "should ＋ 原形／may ＋ 原形",
      "ex": "You [should see] a doctor.",
      "exja": "あなたは医者にみてもらったほうがいい。",
      "fig": {
        "t": "vs",
        "a": [
          "You should rest.",
          "アドバイス"
        ],
        "b": [
          "It may rain.",
          "かもしれない"
        ]
      },
      "ng": {
        "bad": "You should to see a doctor.",
        "good": "You should see a doctor.",
        "why": "should のあとに to は入らない"
      },
      "why": "should は「そのほうが良い」という話し手の考え、may は「〜かもしれない・〜してよい」という弱い可能性や許可を表す。",
      "easy": "① 友だちにアドバイスするなら should。② 天気予報のように半分くらいの予想なら may。③ どちらも後ろは原形。"
    }
  ],
  "drills": [
    {
      "en": "My grandfather [can use] a smartphone.",
      "ja": "祖父はスマートフォンを使うことができる。",
      "alt": [
        "can uses",
        "can to use",
        "cans use"
      ],
      "tip": "can ＋ 原形「〜できる」",
      "why": "can＋原形 use。主語が3人称でも can uses にはならない。cans という形もない。",
      "p": 0
    },
    {
      "en": "[Can I] borrow your pen?",
      "ja": "ペンを借りてもいいですか。",
      "alt": [
        "Do I can",
        "Can I to",
        "Am I can"
      ],
      "tip": "Can I ～?「〜してもいい？」",
      "why": "許可をたずねる Can I＋原形。Do I can のように do と助動詞は重ねない。",
      "p": 0
    },
    {
      "en": "You [must wear] a helmet on a bike.",
      "ja": "自転車ではヘルメットをかぶらなければならない。",
      "alt": [
        "must wearing",
        "must to wear",
        "musts wear"
      ],
      "tip": "must ＋ 原形「〜しなければならない」",
      "why": "義務の must＋原形 wear。must wearing・must to wear は×。",
      "p": 1
    },
    {
      "en": "Students [must not] eat in the library.",
      "ja": "生徒は図書館で食べてはいけない。",
      "alt": [
        "don't must",
        "must to not",
        "not must"
      ],
      "tip": "must not ＝ 禁止",
      "why": "図書館で食べてはいけない＝禁止の must not。not は must のすぐ後ろ。",
      "p": 1
    },
    {
      "en": "We [have to] leave at six.",
      "ja": "私たちは6時に出なければならない。",
      "alt": [
        "have",
        "has to",
        "must to"
      ],
      "tip": "have to ＝「〜しなければならない」",
      "why": "have to＋原形で「〜しなければならない」。主語 we なので has to は×。",
      "p": 1
    },
    {
      "en": "She [doesn't have to] work on Sunday.",
      "ja": "彼女は日曜日は働かなくてもよい。",
      "alt": [
        "don't have to",
        "doesn't has to",
        "isn't have to"
      ],
      "tip": "3単現は doesn't have to",
      "why": "日曜は働かなくてよい＝doesn't have to。主語 she なので don't は×、has も×。",
      "p": 1
    },
    {
      "en": "You [should drink] more water.",
      "ja": "あなたはもっと水を飲んだほうがいい。",
      "alt": [
        "should drinking",
        "should to drink",
        "should drank"
      ],
      "tip": "should ＋ 原形「〜したほうがいい」",
      "why": "助言の should＋原形 drink。should drinking・should to drink は×。",
      "p": 2
    },
    {
      "en": "We [shouldn't stay] up so late.",
      "ja": "私たちはそんなに夜ふかしすべきではない。",
      "alt": [
        "shouldn't to stay",
        "don't should stay",
        "shouldn't staying"
      ],
      "tip": "should not ＝「〜すべきでない」",
      "why": "「〜すべきでない」＝shouldn't＋原形 stay。don't should のように重ねられない。",
      "p": 2
    },
    {
      "en": "He [may be] at the gym now.",
      "ja": "彼は今ジムにいるかもしれない。",
      "alt": [
        "may is",
        "may being",
        "mays be"
      ],
      "tip": "may ＋ 原形「〜かもしれない」",
      "why": "今ジムにいるかもしれない＝may＋原形 be。may is・may being は×。",
      "p": 2
    },
    {
      "en": "[May I] use the bathroom?",
      "ja": "お手洗いを使ってもいいですか。",
      "alt": [
        "Do I may",
        "May I to",
        "Am I may"
      ],
      "tip": "May I ～? はていねいな許可",
      "why": "ていねいに許可を求める May I＋原形。Do I may・May I to は×。",
      "p": 2
    },
    {
      "en": "[Will you] help me with my homework?",
      "ja": "宿題を手伝ってくれませんか。",
      "alt": [
        "Do you will",
        "Will you to",
        "Are you will"
      ],
      "tip": "Will you ～?「〜してくれる？」",
      "why": "「手伝ってくれる？」の依頼は Will you＋原形。Do you will は×。",
      "p": 0
    },
    {
      "en": "It [will be] sunny tomorrow.",
      "ja": "明日は晴れるだろう。",
      "alt": [
        "will is",
        "wills be",
        "will being"
      ],
      "tip": "will ＋ 原形「〜だろう」",
      "why": "未来の予想は will＋原形 be。will is・wills・will being は×。",
      "p": 0
    }
  ],
  "swhy": [
    {
      "why": "助動詞 can のあとは原形 speak。can speaks・cans・can to はどれも助動詞のルール違反。",
      "p": 0
    },
    {
      "why": "ここで使ってはいけない＝禁止の must not。don't have to だと「使わなくてよい」で逆の意味。",
      "p": 1
    },
    {
      "why": "明日は来なくてよい＝不要の don't have to。must not だと「来てはいけない」で意味が逆。",
      "p": 1
    },
    {
      "why": "助言の should＋原形 see。should to・seeing・saw は助動詞のあとに置けない。",
      "p": 2
    },
    {
      "why": "雨が降るかもしれない＝may＋原形 rain。may rains・raining・to rain は×。",
      "p": 2
    },
    {
      "why": "「〜してくれる？」は Will you＋原形。Do you will のように助動詞を重ねられない。",
      "p": 0
    }
  ]
};

window.LX.plus["c1-u05"] = {
  "core": {
    "ico": "🔄",
    "catch": "受動態は「主役を入れかえるカメラ」",
    "say": "「だれがしたか」より「何がされたか」を主役にしたいときに使う。する側は by ～ で後ろに回すか、言わない。",
    "fig": {
      "t": "vs",
      "a": [
        "Many people love it.",
        "する側が主役"
      ],
      "b": [
        "It is loved by many.",
        "される側が主役"
      ]
    }
  },
  "points": [
    {
      "h": "be ＋ 過去分詞で「される」",
      "body": "される側を文の先頭に出し、動詞を be ＋ 過去分詞にする。する側は by ～ で後ろへ。だれがしたか大事でなければ by は省く。",
      "form": "be動詞 ＋ 過去分詞（＋ by ～）",
      "ex": "This song [is loved] by many people.",
      "exja": "この歌は多くの人に愛されている。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "This song",
            "S"
          ],
          [
            "is loved",
            "V"
          ],
          [
            "by many people",
            "M"
          ]
        ]
      },
      "ng": {
        "bad": "This song is love by many people.",
        "good": "This song is loved by many people.",
        "why": "be動詞のあとは過去分詞（loved）"
      },
      "why": "受動態は話の主役を「される側」にかえる言い方。動詞を be＋過去分詞にすると「される状態」を表せる。",
      "easy": "① 主役を決める（この歌）。② 「愛される」＝ is loved。③ だれに？ を言いたければ by many people を後ろに付ける。言わなくてよければ省略。"
    },
    {
      "h": "時制は be動詞が引き受ける",
      "body": "過去分詞はいつも同じ形。いつの話かは be動詞が決める。is（今）・was（過去）・will be（未来）と be動詞だけ変える。",
      "form": "was／were・will be ＋ 過去分詞",
      "ex": "This temple [was built] in 1603.",
      "exja": "この寺は1603年に建てられた。",
      "fig": {
        "t": "time",
        "marks": [
          {
            "at": -3,
            "label": "was built"
          },
          {
            "at": 0,
            "label": "is used"
          },
          {
            "at": 3,
            "label": "will be held"
          }
        ]
      },
      "ng": {
        "bad": "The results will announced next week.",
        "good": "The results will be announced next week.",
        "why": "未来の受動態は will be ＋ 過去分詞"
      },
      "why": "過去分詞は「される」の意味だけを持ち、時は表さない。いつの話かは be動詞の is・was・will be が決める。",
      "easy": "① 過去分詞は「されるカード」で、形は変えない。② 「いつ？」は be動詞の係。③ 今は is、昔は was、これからは will be と be動詞だけ取りかえる。"
    },
    {
      "h": "by 以外の前置詞と組む形",
      "body": "気持ちや状態の受動態は by 以外の前置詞と組む。interested in・surprised at などセットで覚える。",
      "form": "be interested in など",
      "ex": "I [am interested in] Japanese history.",
      "exja": "私は日本の歴史に興味がある。",
      "ng": {
        "bad": "I am interesting in history.",
        "good": "I am interested in history.",
        "why": "人は「興味をもたされている」側なので -ed 形"
      },
      "why": "気持ちや状態の受動態は「何かによって」より「何に・何で」が大事。だから by ではなく in・at・with などがセットになる。",
      "easy": "セットで丸ごと覚えるのがいちばん早い。① interested in（〜に興味）。② surprised at（〜に驚く）。③ covered with（〜でおおわれる）。3つ声に出そう。"
    }
  ],
  "drills": [
    {
      "en": "This room [is cleaned] every day.",
      "ja": "この部屋は毎日そうじされる。",
      "alt": [
        "cleans",
        "is cleaning",
        "cleaned is"
      ],
      "tip": "be ＋ 過去分詞「〜される」",
      "why": "部屋は「掃除される」側＝is cleaned。cleans だと部屋が掃除することになり×。",
      "p": 0
    },
    {
      "en": "Baseball [is played] all over Japan.",
      "ja": "野球は日本中でされている。",
      "alt": [
        "plays",
        "is playing",
        "is play"
      ],
      "tip": "be ＋ 過去分詞",
      "why": "野球は「行われる」側＝is played。is play は過去分詞でないので×。",
      "p": 0
    },
    {
      "en": "These cookies [were made] by my sister.",
      "ja": "これらのクッキーは姉が作った。",
      "alt": [
        "made",
        "were make",
        "was made"
      ],
      "tip": "複数の過去は were ＋ 過去分詞",
      "why": "クッキーは「作られた」側。主語が複数で過去なので were made。was は単数用で×。",
      "p": 1
    },
    {
      "en": "The window [was broken] by the wind.",
      "ja": "窓は風で割れた。",
      "alt": [
        "broke",
        "was break",
        "is broke"
      ],
      "tip": "break → broken",
      "why": "窓は「割られた」側。break の過去分詞は broken。broke は過去形で×。",
      "p": 1
    },
    {
      "en": "This book [was written] by a high school student.",
      "ja": "この本は高校生によって書かれた。",
      "alt": [
        "wrote",
        "was wrote",
        "is writing"
      ],
      "tip": "write → written",
      "why": "本は「書かれた」側。write の過去分詞は written。wrote は過去形で×。",
      "p": 1
    },
    {
      "en": "The new stadium [will be built] next year.",
      "ja": "新しいスタジアムは来年建てられる。",
      "alt": [
        "will build",
        "will be build",
        "is built will"
      ],
      "tip": "未来は will be ＋ 過去分詞",
      "why": "来年建てられる＝will be＋過去分詞 built。will be build は過去分詞でないので×。",
      "p": 1
    },
    {
      "en": "[Is English taught] at your school?",
      "ja": "あなたの学校では英語が教えられていますか。",
      "alt": [
        "Does English taught",
        "Is English teach",
        "Is English teaching"
      ],
      "tip": "疑問文は be動詞を前に",
      "why": "受動態の疑問文は be動詞を前に。Is English taught。Does は be動詞の文に使えない。",
      "p": 0
    },
    {
      "en": "The bag [wasn't found] anywhere.",
      "ja": "そのかばんはどこにも見つからなかった。",
      "alt": [
        "didn't found",
        "wasn't find",
        "isn't founded"
      ],
      "tip": "否定は be動詞 ＋ not",
      "why": "受動態の否定は be動詞＋not。wasn't found。didn't found は形がない。",
      "p": 1
    },
    {
      "en": "We [were surprised at] the news.",
      "ja": "私たちはその知らせに驚いた。",
      "alt": [
        "were surprising at",
        "surprised at",
        "were surprised of"
      ],
      "tip": "be surprised at「〜に驚く」",
      "why": "「〜に驚く」は be surprised at。surprising は「驚かせる」で×。of は使わない。",
      "p": 2
    },
    {
      "en": "The singer [is known to] young people.",
      "ja": "その歌手は若者に知られている。",
      "alt": [
        "is knowing to",
        "knows to",
        "is know to"
      ],
      "tip": "be known to「〜に知られている」",
      "why": "「〜に知られている」は be known to。is knowing・knows to は×。",
      "p": 2
    },
    {
      "en": "The street [was filled with] people.",
      "ja": "通りは人でいっぱいだった。",
      "alt": [
        "was filling with",
        "filled with of",
        "was filled of"
      ],
      "tip": "be filled with「〜でいっぱい」",
      "why": "「〜でいっぱい」は be filled with。of では言わない。was filling は能動で×。",
      "p": 2
    },
    {
      "en": "My grandmother [is satisfied with] her new house.",
      "ja": "祖母は新しい家に満足している。",
      "alt": [
        "is satisfying with",
        "satisfies with",
        "is satisfied of"
      ],
      "tip": "be satisfied with「〜に満足」",
      "why": "「〜に満足している」は be satisfied with。satisfying は「満足させる」で×。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "歌は「愛される」側＝is loved。loves だと「歌が愛する」になり、is loving も能動で×。",
      "p": 0
    },
    {
      "why": "英語は「話される」側＝is spoken。speaks・is speaking は「英語が話す」で×。",
      "p": 0
    },
    {
      "why": "1603年は過去＝was＋過去分詞 built。is built は今のこと、was build は形がない。",
      "p": 1
    },
    {
      "why": "来週発表される＝will be＋過去分詞。will announce は「結果が発表する」で×。",
      "p": 1
    },
    {
      "why": "「〜に興味がある」は be interested in。interesting は「おもしろい」で×、by も×。",
      "p": 2
    },
    {
      "why": "「〜でおおわれていた」は be covered with。of は×。covered with は be が足りない。",
      "p": 2
    }
  ]
};

window.LX.plus["c1-u06"] = {
  "core": {
    "ico": "➡️",
    "catch": "to 不定詞は「これから向かう矢印」",
    "say": "to はもともと「〜へ向かって」。だから to ＋ 動詞は「これからすること・目的・ねらい」を表すことが多い。",
    "fig": {
      "t": "slots",
      "parts": [
        [
          "I",
          "S"
        ],
        [
          "went",
          "V"
        ],
        [
          "to the library",
          "M"
        ],
        [
          "to study",
          "目的"
        ]
      ],
      "arc": [
        3,
        1,
        "何のため？"
      ]
    }
  },
  "points": [
    {
      "h": "名詞のはたらき「〜すること」",
      "body": "to ＋ 動詞で「〜すること」というひとかたまりの名詞になる。want・hope・decide の目的語や、文の主語・補語になれる。",
      "form": "want／hope／decide ＋ to ＋ 原形",
      "ex": "I [want to be] a teacher.",
      "exja": "私は先生になりたい。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "I",
            "S"
          ],
          [
            "want",
            "V"
          ],
          [
            "to be a teacher",
            "O"
          ]
        ]
      },
      "ng": {
        "bad": "I want being a teacher.",
        "good": "I want to be a teacher.",
        "why": "want は「これから」を見る動詞なので to 不定詞"
      },
      "why": "to は「〜へ向かう」矢印。to＋動詞は「これからすること」というひとかたまりになり、名詞のように want の目的語や主語になれる。",
      "easy": "① want は「ほしい」。② 何がほしい？ → 「先生になること」。③ 「〜すること」を作る道具が to＋原形。だから want to be。"
    },
    {
      "h": "形容詞のはたらき「〜するための」",
      "body": "名詞のすぐ後ろに to ＋ 動詞を置くと「〜するための・〜すべき」と名詞を説明する。日本語と順番が逆なので注意。",
      "form": "名詞 ＋ to ＋ 原形",
      "ex": "I have a lot of [homework to do].",
      "exja": "私にはやるべき宿題がたくさんある。",
      "fig": {
        "t": "slots",
        "parts": [
          [
            "homework",
            "名詞"
          ],
          [
            "to do",
            "説明"
          ]
        ],
        "arc": [
          1,
          0,
          "どんな宿題？"
        ]
      },
      "ng": {
        "bad": "I want something drink.",
        "good": "I want something to drink.",
        "why": "「飲むための何か」は to が必要"
      },
      "why": "英語は大事な名詞を先に言い、説明は後ろから付ける。だから「するための宿題」は homework to do の順になる。",
      "easy": "① まず「宿題」と言う。② 「どんな宿題？」と聞かれる。③ 「やるべき」と後ろに足す → homework to do。日本語と逆に、名詞が先。"
    },
    {
      "h": "副詞のはたらき「〜するために」",
      "body": "動詞の後ろの to ＋ 動詞は「〜するために」。感情の言葉のあとなら「〜して」。It is ～ to … は主語を後ろに回す形。",
      "form": "動詞 ＋ to ＋ 原形／It is ～ to …",
      "ex": "I went to the library [to study].",
      "exja": "私は勉強するために図書館へ行った。",
      "ng": {
        "bad": "It is important get enough sleep.",
        "good": "It is important to get enough sleep.",
        "why": "It is ～ のあとの「〜すること」は to が必要"
      },
      "why": "to の「向かう」イメージから、動作の目的「〜するために」になる。感情の言葉の後ろなら「その気持ちになった原因」を表す。",
      "easy": "① 図書館に行った。② 何のため？ → to study（勉強するため）。③ 驚いた。なぜ？ → to hear the news（聞いて）。to は「理由・目的」へつなぐ橋。"
    }
  ],
  "drills": [
    {
      "en": "I [hope to see] you again soon.",
      "ja": "またすぐに会えるといいな。",
      "alt": [
        "hope seeing",
        "hope see",
        "hope to seeing"
      ],
      "tip": "hope to ＋ 原形",
      "why": "hope to＋原形 see。hope seeing・hope see・hope to seeing は×。",
      "p": 0
    },
    {
      "en": "She [decided to study] abroad.",
      "ja": "彼女は留学することに決めた。",
      "alt": [
        "decided studying",
        "decided study",
        "decided to studying"
      ],
      "tip": "decide to ＋ 原形",
      "why": "decide to＋原形 study。decided studying・decided study は×。",
      "p": 0
    },
    {
      "en": "My goal is [to win] the tournament.",
      "ja": "私の目標は大会で優勝することだ。",
      "alt": [
        "win",
        "to winning",
        "won"
      ],
      "tip": "to ＋ 原形「〜すること」が補語に",
      "why": "目標＝「優勝すること」なので to＋原形 win。to winning は×。",
      "p": 0
    },
    {
      "en": "[To learn] a new language is fun.",
      "ja": "新しい言語を学ぶことは楽しい。",
      "alt": [
        "Learn",
        "To learning",
        "Learned"
      ],
      "tip": "to ＋ 原形が主語になる",
      "why": "「新しい言語を学ぶこと」が主語。to＋原形 learn。To learning は×。",
      "p": 0
    },
    {
      "en": "Do you have anything [to drink]?",
      "ja": "何か飲むものはありますか。",
      "alt": [
        "drink",
        "drinking to",
        "to drinking"
      ],
      "tip": "anything to ＋ 原形「飲むためのもの」",
      "why": "anything を後ろから to drink で説明「飲むためのもの」。drinking to は×。",
      "p": 1
    },
    {
      "en": "Kyoto has many places [to visit].",
      "ja": "京都には訪れるべき場所がたくさんある。",
      "alt": [
        "visit",
        "to visiting",
        "visited to"
      ],
      "tip": "名詞 ＋ to ＋ 原形「訪れるべき」",
      "why": "places を後ろから to visit で説明「訪れるべき場所」。visited to は×。",
      "p": 1
    },
    {
      "en": "I had no time [to eat] breakfast.",
      "ja": "朝食を食べる時間がなかった。",
      "alt": [
        "eat",
        "eating to",
        "to eating"
      ],
      "tip": "time to ＋ 原形「〜する時間」",
      "why": "time を後ろから to eat で説明「食べる時間」。eating to・to eating は×。",
      "p": 1
    },
    {
      "en": "He got up early [to catch] the first train.",
      "ja": "彼は始発電車に乗るために早起きした。",
      "alt": [
        "catch",
        "catching to",
        "to catching"
      ],
      "tip": "目的「〜するために」",
      "why": "早起きした目的＝to＋原形 catch。catching to・to catching は×。",
      "p": 2
    },
    {
      "en": "We went to the park [to play] soccer.",
      "ja": "私たちはサッカーをするために公園へ行った。",
      "alt": [
        "play",
        "to playing",
        "for play"
      ],
      "tip": "目的「〜するために」",
      "why": "公園に行った目的＝to play。for play は「〜するために」にならない。",
      "p": 2
    },
    {
      "en": "I was glad [to get] your letter.",
      "ja": "あなたの手紙を受け取ってうれしかった。",
      "alt": [
        "get",
        "getting to",
        "to getting"
      ],
      "tip": "感情 ＋ to ＋ 原形「〜して」",
      "why": "うれしい原因＝glad to＋原形 get。getting to・to getting は×。",
      "p": 2
    },
    {
      "en": "[It is] difficult to answer this question.",
      "ja": "この質問に答えるのは難しい。",
      "alt": [
        "That is",
        "This is",
        "There is"
      ],
      "tip": "It は後ろの to ～ を指す",
      "why": "It は後ろの to answer… を指す仮の主語。That・This・There では指せない。",
      "p": 2
    },
    {
      "en": "It is fun [to talk] with friends online.",
      "ja": "オンラインで友だちと話すのは楽しい。",
      "alt": [
        "talk",
        "talking to",
        "to talking"
      ],
      "tip": "It is ～ to ＋ 原形",
      "why": "It is fun to＋原形 talk。to talking・talking to は形が×。",
      "p": 2
    }
  ],
  "swhy": [
    {
      "why": "want to＋原形 be で「〜になりたい」。want be は to がなく×。being も×。",
      "p": 0
    },
    {
      "why": "夢＝「旅すること」なので to＋原形。to traveling は to のあとが原形でなく×。",
      "p": 0
    },
    {
      "why": "名詞 homework を先に、後ろから to do で説明。to do homework は「宿題をすること」で×。",
      "p": 1
    },
    {
      "why": "行った目的＝to＋原形 study。for study・to studying は「〜するために」にならない。",
      "p": 2
    },
    {
      "why": "驚いた原因＝感情＋to＋原形 hear。hearing・heard では理由を表せない。",
      "p": 2
    },
    {
      "why": "It は後ろの to get enough sleep を指す仮の主語。That・This・There では指せない。",
      "p": 2
    }
  ]
};

/* ===== 追加：演習文 12 文ずつ（計 24 文）と 絵の図 ===== */
(function () {
  var P = window.LX.plus;
  function D(en, ja, alt, tip, why, p) { return { en: en, ja: ja, alt: alt, tip: tip, why: why, p: p }; }
  function add(id, arr) { P[id].drills = P[id].drills.concat(arr); }

  add("c1-u01", [
    D("The flowers [smell] sweet.", "花は甘い香りがする。", ["smell at", "smells", "smelling"], "smell ＋ 形容詞「〜のにおいがする」", "「花＝甘い香り」で smell＋形容詞。複数なので smells は×。smell at・smelling も×。", 0),
    D("Your idea [sounds] interesting.", "あなたの考えはおもしろそうだ。", ["sounds like", "hears", "listens"], "sound ＋ 形容詞「〜に聞こえる」", "「考え＝おもしろい」で sound＋形容詞。sounds like の後は名詞。hears・listens は×。", 0),
    D("My grandmother [felt] happy at the party.", "祖母はパーティーで幸せな気分だった。", ["felt to", "feels to", "feeling"], "feel ＋ 形容詞「〜と感じる」", "「祖母＝幸せ」で feel＋形容詞。to は不要。feeling だけでは文の動詞にならない。", 0),
    D("He [kept] quiet during the meeting.", "彼は会議の間ずっと黙っていた。", ["kept to", "keeps to", "keeping"], "keep ＋ 形容詞「〜のままでいる」", "「彼＝静か」の状態が続く keep＋形容詞。to は不要。keeping だけでは文の動詞にならない。", 0),
    D("Grandma [made us] a big cake.", "おばあちゃんは私たちに大きなケーキを作ってくれた。", ["made to us", "made for us", "made us to"], "make ＋ 人 ＋ 物「人に物を作る」", "SVOO は「人→物」の順で前置詞なし。made for us は物の後ろなら可。to us・us to は×。", 1),
    D("Could you [lend me] your eraser?", "消しゴムを貸してくれませんか。", ["lend to me", "lend for me", "lend me to"], "lend ＋ 人 ＋ 物「人に物を貸す」", "lend me your eraser は「人→物」の順。人の前に to・for を入れると×。me to も×。", 1),
    D("The guide [showed us] an old map.", "ガイドは私たちに古い地図を見せてくれた。", ["showed to us", "showed for us", "showed us to"], "show ＋ 人 ＋ 物「人に物を見せる」", "show＋人＋物で「人に物を見せる」。人を先に置くなら前置詞なし。to us・for us は×。", 1),
    D("I'll [send you] the photos tonight.", "今夜、写真を送るね。", ["send to you", "send for you", "send you to"], "send ＋ 人 ＋ 物「人に物を送る」", "send＋人＋物の形。人の前に to は付けない。物を先に言うなら send the photos to you。", 1),
    D("Everyone [calls him] Taku.", "みんなは彼をタクと呼ぶ。", ["calls to him", "calls him as", "call him"], "call ＋ O ＋ C「O を C と呼ぶ」", "him＝Taku の SVOC。as や to は不要。Everyone は単数なので call は×。", 2),
    D("The hot weather made us [tired].", "暑さで私たちは疲れた。", ["tiredly", "tiredness of", "to tired"], "make ＋ O ＋ 形容詞「O を〜にする」", "us＝tired で O＝C。tiredly は副詞で×。tiredness of・to tired も×。", 2),
    D("Please keep your hands [clean].", "手をきれいにしておいてください。", ["cleanly", "cleaning", "to clean"], "keep ＋ O ＋ 形容詞「O を〜のままにする」", "hands＝clean の状態を保つ。cleanly は副詞で×。cleaning・to clean も×。", 2),
    D("We [named our baby] Hana.", "私たちは赤ちゃんをハナと名づけた。", ["named to our baby", "named for our baby", "name our baby to"], "name ＋ O ＋ C「O を C と名づける」", "our baby＝Hana の SVOC。O の前に to・for は付けない。name … to も×。", 2)
  ]);
  add("c1-u02", [
    D("My sister [plays] the piano every evening.", "姉は毎晩ピアノを弾く。", ["play", "is play", "playing"], "毎日の習慣は現在形。3単現の s", "every evening は習慣で現在形。主語が単数で plays。play・is play・playing は×。", 0),
    D("The museum [opens] at nine.", "その博物館は9時に開く。", ["open", "opening", "is opens"], "決まった予定・事実は現在形", "いつも9時に開く「いつもの事実」なので現在形 opens。museum は単数で open は×。", 0),
    D("My father usually [goes] to bed at eleven.", "父はふだん11時に寝る。", ["go", "going", "is go"], "usually ＋ 現在形で習慣", "usually は習慣の目印で現在形。主語が単数なので goes。go・going・is go は×。", 0),
    D("I [watched] a soccer game last night.", "昨夜サッカーの試合を見た。", ["watch", "have watched", "am watching"], "last night は過去形", "last night は終わった過去の一点なので過去形。have watched は過去の点と使えないので×。", 1),
    D("He [left] home an hour ago.", "彼は1時間前に家を出た。", ["leaves", "has left", "is leaving"], "〜 ago は過去形", "an hour ago は過去の一点なので過去形 left。has left は ago と使えない。今形も×。", 1),
    D("[Did she call] you yesterday?", "彼女は昨日あなたに電話をしましたか。", ["Does she call", "Has she called", "Is she calling"], "過去の疑問文は Did ＋ 主語 ＋ 原形", "yesterday は過去で Did＋主語＋原形。Has she called・現在形は×。", 1),
    D("We [didn't go] out last Sunday.", "この前の日曜日は出かけなかった。", ["don't go", "didn't went", "haven't gone"], "過去の否定は didn't ＋ 原形", "過去の否定は didn't＋原形。didn't went は過去が2回で×。haven't gone も×。", 1),
    D("Look! A cat [is climbing] the tree.", "見て！ネコが木に登っている。", ["climbs", "climb", "climbing"], "Look! ＝ 今まさに → 進行形", "Look! は今その瞬間の目印で進行形。climbs は「いつも」の意味。climb・climbing は形が×。", 2),
    D("Mom [is cooking] dinner right now.", "母はちょうど今夕食を作っている。", ["cooks", "cook", "was cooking"], "right now は現在進行形", "right now は今の瞬間で is cooking。was cooking は過去で×。cooks も×。", 2),
    D("[Are you listening] to me?", "私の話を聞いてる？", ["Do you listening", "Are you listen", "Is you listening"], "進行形の疑問文は be ＋ 主語 ＋ -ing", "進行形の疑問文は be を前に出す。Do と -ing は組めない。Are you listen・Is you は×。", 2),
    D("I [was reading] a book at ten last night.", "昨夜10時には本を読んでいた。", ["am reading", "read at", "were reading"], "過去のその瞬間は過去進行形", "昨夜10時という過去の瞬間の動作は was＋-ing。I には were は×。am reading は今で×。", 2),
    D("The students [were running] when it started to rain.", "雨が降り出したとき、生徒たちは走っていた。", ["are running", "was running", "run"], "when ＋ 過去 → その時していた", "雨が降り出した過去の瞬間にしていた動作で were running。students は複数で was は×。", 2)
  ]);
  add("c1-u03", [
    D("They [have been] friends since childhood.", "彼らは子どもの頃からずっと友だちだ。", ["are", "were", "have be"], "since ＋ 起点 → 現在完了の継続", "since childhood（子どもの頃から今まで）は継続で have been。are・were は×。", 0),
    D("She has studied Spanish [for] two years.", "彼女は2年間スペイン語を勉強している。", ["since", "from", "during"], "期間の長さは for", "two years は期間の長さなので for。since は始まった時点、from・during はここでは×。", 0),
    D("We have lived in this town [since] 2015.", "私たちは2015年からこの町に住んでいる。", ["for", "from", "ago"], "始まった時点は since", "2015 は始まった時点なので since。for は期間の長さ。from・ago は現在完了と使えない。", 0),
    D("How long [have you known] Ken?", "ケンとはどれくらいの付き合いですか。", ["do you know", "have you know", "are you knowing"], "How long ＋ 現在完了で「どれくらいずっと」", "今まで続く長さを聞くので have you known。know は進行形にしない。have you know も×。", 0),
    D("I [have seen] this movie three times.", "この映画を3回見たことがある。", ["have saw", "see", "am seeing"], "回数は経験の現在完了", "three times は経験の回数で have＋過去分詞 seen。saw は過去形なので have saw は×。", 1),
    D("Have you ever [climbed] Mt. Fuji?", "富士山に登ったことがありますか。", ["climb", "climbing", "to climb"], "Have you ever ＋ 過去分詞？", "経験を聞く Have you ever の後は過去分詞。climb・climbing・to climb は形が×。", 1),
    D("He [has never eaten] sushi.", "彼はすしを一度も食べたことがない。", ["never ate has", "has never eat", "has eaten never"], "never は have と過去分詞の間", "経験の否定は has never＋過去分詞。never の位置は has の後ろ。eat は原形で×。", 1),
    D("I [have been] to Kyoto many times.", "京都には何度も行ったことがある。", ["have be", "has been", "was"], "have been to 〜「〜へ行ったことがある」", "経験の「行ったことがある」は have been to。I に has は×。was to・have be も×。", 1),
    D("She [has already done] her homework.", "彼女はもう宿題を終えた。", ["already did has", "has already do", "have already done"], "already は has と過去分詞の間", "完了「もう〜した」は has already＋過去分詞。She に have は×。do は原形で×。", 2),
    D("I [haven't read] the email yet.", "まだそのメールを読んでいない。", ["didn't read have", "haven't readed", "hasn't read"], "否定＋yet「まだ〜していない」", "完了の否定は haven't＋過去分詞。read の過去分詞は read。I に hasn't は×。", 2),
    D("The game [has just started].", "試合はちょうど始まったところだ。", ["has just start", "have just started", "is just started"], "just は has と過去分詞の間", "「ちょうど〜したところ」は has just＋過去分詞。game は単数で have は×。is は×。", 2),
    D("Has the movie started [yet]?", "映画はもう始まりましたか。", ["ago", "still", "since"], "疑問文の「もう」は yet", "疑問文の最後で「もう〜した？」は yet。ago は過去形用、still・since はここでは×。", 2)
  ]);
  add("c1-u04", [
    D("My dog [can swim] very well.", "うちの犬はとても上手に泳げる。", ["can swims", "cans swim", "can to swim"], "can ＋ 動詞の原形", "助動詞の後は必ず原形。can swims・can to swim は×。can に s は付かない。", 0),
    D("[Could you] say that again?", "もう一度言っていただけますか。", ["Could you to", "Do you could", "Could to you"], "Could you 〜? ＝ ていねいなお願い", "ていねいなお願いは Could you＋原形。助動詞に to や do は組み合わせない。", 0),
    D("[Shall I] carry your bag?", "かばんを持ちましょうか。", ["Shall I to", "Do I shall", "Shall to I"], "Shall I 〜?「〜しましょうか」", "申し出の Shall I＋原形。助動詞の後に to は不要。do と shall は重ねない。", 0),
    D("We [must finish] this by Friday.", "金曜日までにこれを終えなければならない。", ["must to finish", "must finishing", "musts finish"], "must ＋ 原形「〜しなければならない」", "must の後は原形。to や -ing は付けない。助動詞に s は付かない。", 1),
    D("You [must not] run in the hallway.", "廊下を走ってはいけない。", ["don't have to", "have not to", "need"], "must not ＝ 禁止", "「〜してはいけない」は禁止の must not。don't have to は「しなくてよい」で意味が反対。", 1),
    D("He [has to] get up at five tomorrow.", "彼は明日5時に起きなければならない。", ["have to", "has", "must to"], "has to ＝ must（3人称単数）", "主語 He なので has to＋原形。have to は形が×。has だけ・must to は×。", 1),
    D("You [don't have to] bring lunch tomorrow.", "明日はお弁当を持ってこなくてよい。", ["must not", "have not", "doesn't have to"], "don't have to ＝ 不要", "「しなくてよい」は不要の don't have to。must not は禁止。You に doesn't は×。", 1),
    D("You [should try] this cake.", "このケーキを食べてみるべきだよ。", ["should to try", "should trying", "should tried"], "should ＋ 原形「〜したほうがいい」", "should の後は原形。to・-ing・過去形は付けない。おすすめの気持ちを表す。", 2),
    D("She [may know] the answer.", "彼女なら答えを知っているかもしれない。", ["may knows", "may to know", "may knowing"], "may ＋ 原形「〜かもしれない」", "may の後は原形。主語が She でも may knows とはしない。to・-ing も×。", 2),
    D("We [shouldn't eat] too much sugar.", "砂糖をとりすぎるべきではない。", ["shouldn't to eat", "don't should eat", "shouldn't eating"], "shouldn't ＋ 原形「〜すべきでない」", "否定は shouldn't＋原形。to・-ing は×。don't should のように do を重ねない。", 2),
    D("It [might snow] tonight.", "今夜は雪が降るかもしれない。", ["might snows", "might to snow", "mights snow"], "might ＋ 原形「ひょっとすると〜」", "might は may より弱い推量。後ろは原形。s・to は付けない。", 2),
    D("You [had better] see a dentist.", "歯医者に行ったほうがいい。", ["had better to", "have better", "had best to"], "had better ＋ 原形「〜したほうがいい」", "had better の後は原形で to は不要。have better という形はない。", 2)
  ]);
  add("c1-u05", [
    D("This car [is washed] every Sunday.", "この車は毎週日曜日に洗われる。", ["washes", "is washing", "washed"], "be ＋ 過去分詞「〜される」", "車は洗われる側なので is washed。washes・is washing は車が洗う意味で×。", 0),
    D("Japanese [is studied] by many students.", "日本語は多くの学生に勉強されている。", ["studies", "is studying", "is study"], "される側が主語 → 受動態", "日本語は勉強される側なので is studied。is study は過去分詞でないので×。", 0),
    D("[Was this cake] made by you?", "このケーキはあなたが作ったのですか。", ["Did this cake", "Is this cakes", "Were this cake"], "受動態の疑問文は be を前に", "受動態の疑問文は be を主語の前へ。Did は made と組めない。cake は単数で Were は×。", 0),
    D("The door [isn't locked] now.", "ドアは今、鍵がかかっていない。", ["doesn't locked", "isn't lock", "not locked"], "受動態の否定は be ＋ not", "否定は isn't＋過去分詞。doesn't と過去分詞は組めない。lock は原形で×。", 0),
    D("The letter [was sent] last week.", "その手紙は先週送られた。", ["sent", "is sent", "was send"], "過去の受動態は was ＋ 過去分詞", "last week は過去なので was＋過去分詞。手紙は送る側でないので sent だけは×。", 1),
    D("These pictures [were taken] in Hokkaido.", "これらの写真は北海道で撮られた。", ["took", "were took", "was taken"], "複数の主語は were", "写真は撮られる側で過去なので were taken。took は過去形で×。複数なので was は×。", 1),
    D("The castle [was destroyed] in a fire.", "その城は火事で焼失した。", ["destroyed", "was destroy", "is destroyed"], "be ＋ 過去分詞（過去）", "城は壊される側で過去の出来事なので was destroyed。destroy は原形で×。", 1),
    D("The concert [will be held] next month.", "コンサートは来月開かれる。", ["will hold", "will be hold", "is held will"], "未来の受動態は will be ＋ 過去分詞", "未来の受動態は will be＋過去分詞。hold は原形で×。will hold はコンサートが開く意味で×。", 1),
    D("I [was born] in Nagoya.", "私は名古屋で生まれた。", ["born", "was bear", "am born"], "「生まれる」は be born", "「生まれた」は受動態の was born。born だけ・am born（今）は×。bear は原形で×。", 1),
    D("The box [is filled with] toys.", "その箱はおもちゃでいっぱいだ。", ["is filled of", "is filling with", "filled with is"], "be filled with 〜「〜でいっぱい」", "be filled with はセットの形。of は×。is filling は箱が満たす意味で×。", 2),
    D("She [is known as] a great writer.", "彼女はすばらしい作家として知られている。", ["is knowing as", "knows as", "is known to as"], "be known as 〜「〜として知られている」", "「〜として知られる」は be known as。know は進行形にしない。knows as・to as は×。", 2),
    D("He [is worried about] his test.", "彼はテストのことを心配している。", ["worried about is", "is worried of", "is worry about"], "be worried about 〜「〜を心配する」", "気持ちの受動態 be worried about。of は×。worry は動詞の原形なので is と組めない。", 2)
  ]);
  add("c1-u06", [
    D("I [want to go] to Canada someday.", "いつかカナダに行きたい。", ["want go", "want going", "want to going"], "want to ＋ 原形「〜したい」", "want の後は to＋原形。want go・want going は×。to の後に -ing は×。", 0),
    D("He [plans to buy] a new bike.", "彼は新しい自転車を買う予定だ。", ["plans buy", "plans buying", "plans to buying"], "plan to ＋ 原形「〜するつもり」", "plan はこれからのことなので to＋原形。to は必要。to の後に -ing は×。", 0),
    D("Her job is [to teach] children.", "彼女の仕事は子どもたちに教えることだ。", ["teach", "to teaching", "taught"], "is ＋ to 不定詞「〜すること」", "is の後の「〜すること」は to＋原形。teach だけ・taught は×。to teaching も×。", 0),
    D("I [would like to] try it.", "それをやってみたいです。", ["would like", "would like to to", "would liking to"], "would like to ＝ want to のていねい形", "「〜したい」のていねい形 would like to＋原形。to が無い・2つ・liking は×。", 0),
    D("I need something [to write] with.", "何か書くものが必要だ。", ["write", "writing to", "to writing"], "名詞 ＋ to ＋ 原形「〜するための」", "something を後ろから説明して「書くための」で to write。write だけ・to writing は×。", 1),
    D("There are many things [to do] today.", "今日はやることがたくさんある。", ["do", "to doing", "doing to"], "things to do「するべきこと」", "things を説明して「するべき」で to do。do だけ・to doing・doing to は×。", 1),
    D("I want a friend [to talk] with.", "話し相手になる友だちがほしい。", ["talk", "to talking", "talking to"], "名詞 ＋ to ＋ 原形 ＋ 前置詞", "a friend を説明して「話すための」で to talk with。talk だけ・to talking は×。", 1),
    D("She saved money [to buy] a guitar.", "彼女はギターを買うためにお金をためた。", ["for buy", "to buying", "for to buy"], "目的「〜するために」は to ＋ 原形", "お金をためた目的なので to buy。for の後に原形は×。to buying・for to buy も×。", 2),
    D("I came here [to see] you.", "あなたに会うためにここに来た。", ["for see", "seeing", "to seeing"], "目的の to 不定詞", "来た目的「会うために」で to see。for see は×。seeing・to seeing では目的を表せない。", 2),
    D("I was happy [to meet] you.", "あなたに会えてうれしかった。", ["for meet", "to meeting", "met"], "感情 ＋ to 不定詞「〜して」", "うれしい原因「会えて」は感情＋to＋原形。for meet・to meeting・met は×。", 2),
    D("[It is] easy to make this dish.", "この料理を作るのはかんたんだ。", ["That is", "There is", "This is"], "It is 〜 to …「…するのは〜だ」", "It が後ろの to make this dish を指す仮の主語。That・There・This では指せない。", 2),
    D("It is important [to listen] to others.", "人の話を聞くことは大切だ。", ["listen", "listening", "to listening"], "It is 〜 to ＋ 原形", "It is important の後の「〜すること」は to＋原形。listen・listening などは×。", 2)
  ]);

  /* 絵の図：イメージで覚えると効く所だけ */
  P["c1-u01"].points[2].fig = { t: "pic",
    items: [{ e: "📰", x: 18, y: 58, l: "The news" }, { e: "😊", x: 72, y: 58, l: "me ＝ happy", b: "うれしい！" }],
    arrows: [[0, 1, "made"]], cap: "me＝happy：O を C の状態にする" };
  P["c1-u05"].core.fig = { t: "pic",
    items: [{ e: "⚽", x: 22, y: 62, l: "The ball", s: 0.8 }, { e: "👦", x: 78, y: 58, l: "by Ken" }],
    arrows: [[1, 0, "was kicked", "dash"]], cap: "される側が主役。する側は by で後ろへ" };
  P["c1-u05"].points[2].fig = { t: "pic",
    items: [{ e: "🏯", x: 20, y: 60, l: "history" }, { e: "🧑", x: 76, y: 58, l: "I", b: "おもしろい！" }],
    arrows: [[0, 1, "interests"]], cap: "人は興味をもたされる側 → interested" };
  P["c1-u06"].core.fig = { t: "pic",
    items: [{ e: "🧑", x: 18, y: 60, l: "I" }, { e: "🎯", x: 80, y: 58, l: "これからすること" }],
    arrows: [[0, 1, "to ＋ 動詞"]], cap: "to は これから向かう矢印 → 目的・予定" };
  P["c1-u06"].points[2].fig = { t: "pic",
    items: [{ e: "🧑", x: 14, y: 60, l: "I" }, { e: "🏫", x: 50, y: 60, l: "the library" }, { e: "📖", x: 86, y: 60, l: "to study" }],
    arrows: [[0, 1, "went"], [1, 2, "何のため？", "dash"]], cap: "to ＝ 行った先で これからすること" };
})();
