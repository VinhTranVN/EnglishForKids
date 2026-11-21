// Dữ liệu ngữ pháp Cambridge Pre A1 Starters (8 chuyên đề nền tảng) - tách riêng cho ./StarterKids/
window.STARTERS_GRAMMAR_LESSONS = [
  {
    "id": "to_be",
    "title": "1. Động từ To Be (am / is / are)",
    "formula": "I am ('m)  |  He / She / It is ('s)  |  We / You / They are ('re)",
    "tip": "I đi với am; 1 người/vật đi với is; nhiều người/vật hoặc you đi với are.",
    "example": "She is happy and they are friends.",
    "questions": [
      {
        "q": "I ___ a happy pupil.",
        "opts": [
          "am",
          "is",
          "are"
        ],
        "ans": 0,
        "exp": "Chủ ngữ 'I' luôn đi với 'am'."
      },
      {
        "q": "The cat ___ under the bed.",
        "opts": [
          "is",
          "are",
          "am"
        ],
        "ans": 0,
        "exp": "'The cat' là 1 con vật số ít nên dùng 'is'."
      },
      {
        "q": "We ___ playing in the park.",
        "opts": [
          "are",
          "is",
          "am"
        ],
        "ans": 0,
        "exp": "Chủ ngữ 'We' (chúng mình) đi với 'are'."
      }
    ]
  },
  {
    "id": "have_got",
    "title": "2. Have got / Has got (Có)",
    "formula": "I / We / You / They + have got ('ve got)  |  He / She / It + has got ('s got)",
    "tip": "Có 1 bạn/vật (He/She/It/tên 1 người) dùng has got; từ 2 trở lên hoặc I/You/We/They dùng have got.",
    "example": "I have got a red bike and Tom has got a dog.",
    "questions": [
      {
        "q": "I ___ got a new yellow pencil.",
        "opts": [
          "have",
          "has",
          "is"
        ],
        "ans": 0,
        "exp": "'I' đi với 'have got'."
      },
      {
        "q": "Lily ___ got two cute dolls.",
        "opts": [
          "has",
          "have",
          "are"
        ],
        "ans": 0,
        "exp": "'Lily' là 1 bạn nữ số ít nên dùng 'has got'."
      },
      {
        "q": "They ___ got a big garden.",
        "opts": [
          "have",
          "has",
          "am"
        ],
        "ans": 0,
        "exp": "'They' đi với 'have got'."
      }
    ]
  },
  {
    "id": "this_that_these_those",
    "title": "3. This / That / These / Those",
    "formula": "Gần: This (1) / These (nhiều)  |  Xa: That (1) / Those (nhiều)",
    "tip": "1 cái/con ở gần dùng This; 1 cái/con ở xa dùng That; nhiều cái/con ở gần dùng These; ở xa dùng Those.",
    "example": "This is my book, and those are birds in the tree.",
    "questions": [
      {
        "q": "___ is my red apple here.",
        "opts": [
          "This",
          "These",
          "Those"
        ],
        "ans": 0,
        "exp": "1 quả táo ở gần ('here') dùng 'This'."
      },
      {
        "q": "Look! ___ are birds flying in the sky.",
        "opts": [
          "Those",
          "This",
          "That"
        ],
        "ans": 0,
        "exp": "Nhiều con chim ở xa trên bầu trời dùng 'Those'."
      },
      {
        "q": "___ are my new crayons in my hand.",
        "opts": [
          "These",
          "That",
          "This"
        ],
        "ans": 0,
        "exp": "Nhiều cây bút ở gần trong tay dùng 'These'."
      }
    ]
  },
  {
    "id": "can_cant",
    "title": "4. Can / Can't (Biết làm / Không thể)",
    "formula": "S + can / can't + V (động từ giữ nguyên)",
    "tip": "Sau can hoặc can't luôn giữ động từ nguyên mẫu (không thêm -s hay to).",
    "example": "A frog can jump, but a fish can't walk.",
    "questions": [
      {
        "q": "A bird ___ fly in the sky.",
        "opts": [
          "can",
          "can't",
          "is"
        ],
        "ans": 0,
        "exp": "Chim biết bay -> dùng 'can fly'."
      },
      {
        "q": "A baby ___ drive a car.",
        "opts": [
          "can't",
          "can",
          "are"
        ],
        "ans": 0,
        "exp": "Em bé không thể lái ô tô -> dùng 'can't drive'."
      },
      {
        "q": "I ___ sing a happy song.",
        "opts": [
          "can",
          "cans",
          "am"
        ],
        "ans": 0,
        "exp": "Sau 'can' động từ 'sing' giữ nguyên."
      }
    ]
  },
  {
    "id": "present_continuous_kids",
    "title": "5. Hành động đang diễn ra (Be + V-ing)",
    "formula": "S + am/is/are + V-ing",
    "tip": "Diễn tả việc đang làm ngay lúc này: thêm -ing vào động từ (nhớ có am/is/are phía trước).",
    "example": "Mum is cooking and I am drawing a picture.",
    "questions": [
      {
        "q": "He is ___ a banana.",
        "opts": [
          "eating",
          "eat",
          "eats"
        ],
        "ans": 0,
        "exp": "Sau 'is' dùng động từ thêm '-ing': 'eating'."
      },
      {
        "q": "We are ___ a board game.",
        "opts": [
          "playing",
          "play",
          "plays"
        ],
        "ans": 0,
        "exp": "Sau 'are' dùng động từ thêm '-ing': 'playing'."
      },
      {
        "q": "She is ___ a story book.",
        "opts": [
          "reading",
          "read",
          "reads"
        ],
        "ans": 0,
        "exp": "Sau 'is' dùng động từ thêm '-ing': 'reading'."
      }
    ]
  },
  {
    "id": "plurals_prepositions",
    "title": "6. Số nhiều (-s / -es) & Giới từ chỉ vị trí",
    "formula": "1 -> + s / es  |  in, on, under, next to, behind, in front of",
    "tip": "In là bên trong; on là ở trên bề mặt; under là ở bên dưới; next to là ở bên cạnh.",
    "example": "The cat is under the table and two books are on the desk.",
    "questions": [
      {
        "q": "The ball is ___ the box (bên trong).",
        "opts": [
          "in",
          "under",
          "next"
        ],
        "ans": 0,
        "exp": "Bên trong cái hộp dùng giới từ 'in'."
      },
      {
        "q": "There are three ___ on the desk.",
        "opts": [
          "apples",
          "apple",
          "appless"
        ],
        "ans": 0,
        "exp": "Số 3 (nhiều hơn 1) nên danh từ thêm '-s': 'apples'."
      },
      {
        "q": "The dog is sleeping ___ the sofa (bên dưới).",
        "opts": [
          "under",
          "in",
          "on"
        ],
        "ans": 0,
        "exp": "Ở bên dưới ghế sô pha dùng 'under'."
      }
    ]
  },
  {
    "id": "imperatives_questions",
    "title": "7. Câu mệnh lệnh & Câu hỏi Wh- (What / Where / Who)",
    "formula": "Động từ nguyên mẫu!  |  What (cái gì) • Where (ở đâu) • Who (ai)",
    "tip": "Lời nhắc/yêu cầu bắt đầu bằng động từ như Open, Sit, Listen, Look! Hỏi nơi chốn dùng Where, hỏi người dùng Who.",
    "example": "Open your book, please! Where is my bag?",
    "questions": [
      {
        "q": "___ your book and look at page four!",
        "opts": [
          "Open",
          "Opens",
          "Opening"
        ],
        "ans": 0,
        "exp": "Câu yêu cầu/mệnh lệnh bắt đầu bằng động từ nguyên mẫu 'Open'."
      },
      {
        "q": "___ is your favourite toy?",
        "opts": [
          "What",
          "Where",
          "Who"
        ],
        "ans": 0,
        "exp": "Hỏi về đồ vật/sở thích dùng 'What'."
      },
      {
        "q": "___ is that boy with the red kite?",
        "opts": [
          "Who",
          "Where",
          "What"
        ],
        "ans": 0,
        "exp": "Hỏi về người ('that boy') dùng 'Who'."
      }
    ]
  },
  {
    "id": "like_love_articles",
    "title": "8. Like / Love + V-ing & Mạo từ A / An",
    "formula": "like / love + V-ing  |  an + nguyên âm (a, e, i, o, u)  |  a + phụ âm",
    "tip": "Dùng 'an' trước từ bắt đầu bằng âm nguyên âm như apple, orange, elephant; 'a' trước phụ âm như dog, book, cat.",
    "example": "I love painting, and I eat an apple every day.",
    "questions": [
      {
        "q": "I have got ___ orange and a banana.",
        "opts": [
          "an",
          "a",
          "are"
        ],
        "ans": 0,
        "exp": "'Orange' bắt đầu bằng âm nguyên âm nên dùng 'an'."
      },
      {
        "q": "I like ___ in the park.",
        "opts": [
          "running",
          "run",
          "runs"
        ],
        "ans": 0,
        "exp": "Sau 'like' trong cấu trúc sở thích dùng 'V-ing': 'running'."
      },
      {
        "q": "She has got ___ cute puppy.",
        "opts": [
          "a",
          "an",
          "is"
        ],
        "ans": 0,
        "exp": "'Cute' bắt đầu bằng phụ âm /k/ nên dùng 'a'."
      }
    ]
  }
];

window.STARTERS_GRAMMAR_SENTENCES = [
  {
    "topic": "To be",
    "vi": "Tôi là một học sinh vui vẻ.",
    "en": "I am a happy pupil."
  },
  {
    "topic": "Have got",
    "vi": "Tớ có một chiếc xe đạp màu đỏ.",
    "en": "I have got a red bike."
  },
  {
    "topic": "This / That",
    "vi": "Đây là quả táo đỏ của tớ.",
    "en": "This is my red apple."
  },
  {
    "topic": "Can / Can't",
    "vi": "Con ếch có thể nhảy cao.",
    "en": "A frog can jump high."
  },
  {
    "topic": "Đang diễn ra",
    "vi": "Mình đang vẽ một bức tranh.",
    "en": "I am drawing a picture."
  },
  {
    "topic": "Giới từ vị trí",
    "vi": "Con mèo đang ở dưới cái bàn.",
    "en": "The cat is under the table."
  },
  {
    "topic": "Câu hỏi Where",
    "vi": "Cặp sách của tớ ở đâu nhỉ?",
    "en": "Where is my school bag?"
  },
  {
    "topic": "Like + V-ing",
    "vi": "Tớ thích chạy nhảy trong công viên.",
    "en": "I like running in the park."
  },
  {
    "topic": "Mạo từ An",
    "vi": "Tớ ăn một quả táo mỗi ngày.",
    "en": "I eat an apple every day."
  },
  {
    "topic": "Câu mệnh lệnh",
    "vi": "Hãy lắng nghe cô giáo nhé!",
    "en": "Listen to the teacher!"
  }
];
