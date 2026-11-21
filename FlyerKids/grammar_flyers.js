// Dữ liệu ngữ pháp Cambridge A2 Flyers (14 chuyên đề) - tách riêng hoàn toàn khỏi index.html
window.FLYERS_GRAMMAR_LESSONS = [
  {
    "id": "past_simple_cont",
    "title": "1. Quá khứ đơn & Quá khứ tiếp diễn",
    "formula": "S + was/were + V-ing  WHEN / WHILE  S + V2/ed",
    "tip": "Hành động đang diễn ra dùng was/were + V-ing; hành động xen vào dùng quá khứ đơn.",
    "example": "I was reading a book when the phone rang.",
    "questions": [
      {
        "q": "She ___ dinner when her friend arrived.",
        "opts": [
          "was cooking",
          "cooked",
          "cooks"
        ],
        "ans": 0,
        "exp": "Hành động đang diễn ra (was cooking) thì có hành động khác xen vào (arrived)."
      },
      {
        "q": "While they ___ football, it started to rain.",
        "opts": [
          "play",
          "were playing",
          "played"
        ],
        "ans": 1,
        "exp": "Sau 'While' thường dùng thì Quá khứ tiếp diễn (were playing)."
      },
      {
        "q": "What ___ you doing at 8 o'clock last night?",
        "opts": [
          "were",
          "was",
          "did"
        ],
        "ans": 0,
        "exp": "Chủ ngữ 'you' đi với 'were' trong thì Quá khứ tiếp diễn."
      }
    ]
  },
  {
    "id": "present_perfect",
    "title": "2. Thì Hiện tại hoàn thành",
    "formula": "S + have/has + V3/ed  (just, already, yet, ever, never, for, since)",
    "tip": "Dùng 'ever' trong câu hỏi trải nghiệm và 'yet' ở cuối câu phủ định/nghi vấn.",
    "example": "Have you ever seen a real dinosaur bone?",
    "questions": [
      {
        "q": "Have you finished your homework ___?",
        "opts": [
          "already",
          "yet",
          "never"
        ],
        "ans": 1,
        "exp": "'Yet' đứng cuối câu hỏi để hỏi việc đã hoàn thành chưa."
      },
      {
        "q": "Tom has ___ visited London twice.",
        "opts": [
          "already",
          "yet",
          "ever"
        ],
        "ans": 0,
        "exp": "'Already' đứng giữa have/has và V3/ed trong câu khẳng định."
      },
      {
        "q": "She has lived in this city ___ five years.",
        "opts": [
          "for",
          "since",
          "yet"
        ],
        "ans": 0,
        "exp": "'For' đi với khoảng thời gian (five years)."
      }
    ]
  },
  {
    "id": "future_will_going",
    "title": "3. Tương lai với Will & Be going to",
    "formula": "S + will + V  |  S + am/is/are + going to + V",
    "tip": "'Be going to' dùng cho dự định đã lên kế hoạch hoặc dự đoán có dấu hiệu; 'Will' dùng cho quyết định tức thì/dự đoán chung.",
    "example": "Look at those dark clouds! It is going to rain.",
    "questions": [
      {
        "q": "Look at the black clouds! It ___ rain soon.",
        "opts": [
          "is going to",
          "will be",
          "going"
        ],
        "ans": 0,
        "exp": "Dự đoán có căn cứ rõ ràng trước mắt (mây đen) dùng 'is going to'."
      },
      {
        "q": "I think robots ___ help us clean houses in the future.",
        "opts": [
          "will",
          "are going",
          "did"
        ],
        "ans": 0,
        "exp": "Sau 'I think...' dùng 'will + V' để nêu dự đoán tương lai."
      },
      {
        "q": "We ___ visit the museum tomorrow morning. We have tickets.",
        "opts": [
          "are going to",
          "were going",
          "will going"
        ],
        "ans": 0,
        "exp": "Đã có kế hoạch/vé từ trước -> dùng 'are going to'."
      }
    ]
  },
  {
    "id": "modals_obligation_advice",
    "title": "4. Động từ khiếm khuyết (Must, Should, Might, Could)",
    "formula": "S + should / must / might / could + V (nguyên mẫu)",
    "tip": "'Must' là bắt buộc/quy tắc; 'Should' là lời khuyên; 'Might' là có thể xảy ra (không chắc).",
    "example": "You must wear a helmet when you ride a motorbike.",
    "questions": [
      {
        "q": "You ___ whisper in the library.",
        "opts": [
          "must",
          "mustn't",
          "might"
        ],
        "ans": 0,
        "exp": "Trong thư viện, bạn phải nói thầm ('must whisper')."
      },
      {
        "q": "Take an umbrella. It ___ rain later.",
        "opts": [
          "might",
          "mustn't",
          "can't"
        ],
        "ans": 0,
        "exp": "'Might' diễn tả khả năng có thể xảy ra."
      },
      {
        "q": "You ___ eat too many sweets before dinner.",
        "opts": [
          "shouldn't",
          "should",
          "must"
        ],
        "ans": 0,
        "exp": "Lời khuyên không nên ăn quá nhiều đồ ngọt -> 'shouldn't'."
      }
    ]
  },
  {
    "id": "conditionals_0_1",
    "title": "5. Câu điều kiện loại 0 & loại 1",
    "formula": "If + S + V(s/es),  S + will + V",
    "tip": "Mệnh đề có 'If' chia hiện tại đơn, mệnh đề kết quả chia 'will + V' (loại 1) hoặc hiện tại đơn (loại 0).",
    "example": "If it rains tomorrow, we will stay inside and play chess.",
    "questions": [
      {
        "q": "If she studies hard, she ___ pass the Flyers exam.",
        "opts": [
          "will",
          "would",
          "did"
        ],
        "ans": 0,
        "exp": "Câu điều kiện loại 1: If + hiện tại đơn, S + will + V."
      },
      {
        "q": "If you heat ice, it ___ into water.",
        "opts": [
          "turns",
          "turned",
          "will turning"
        ],
        "ans": 0,
        "exp": "Sự thật hiển nhiên (loại 0): cả hai vế chia hiện tại đơn."
      },
      {
        "q": "If we miss the bus, we ___ late for school.",
        "opts": [
          "will be",
          "are being",
          "were"
        ],
        "ans": 0,
        "exp": "Mệnh đề chính của câu điều kiện loại 1 dùng 'will + V'."
      }
    ]
  },
  {
    "id": "relative_clauses",
    "title": "6. Đại từ quan hệ (Who, Which, Where)",
    "formula": "person + who + V  |  thing + which + V  |  place + where + S + V",
    "tip": "Dùng 'who' cho người, 'which' cho vật/động vật, 'where' cho địa điểm.",
    "example": "An astronaut is a person who travels into space.",
    "questions": [
      {
        "q": "A dictionary is a book ___ explains the meanings of words.",
        "opts": [
          "who",
          "which",
          "where"
        ],
        "ans": 1,
        "exp": "'A book' là đồ vật nên dùng đại từ quan hệ 'which'."
      },
      {
        "q": "A castle is a place ___ kings and queens lived.",
        "opts": [
          "where",
          "who",
          "which"
        ],
        "ans": 0,
        "exp": "Chỉ nơi chốn -> dùng đại từ quan hệ 'where'."
      },
      {
        "q": "A journalist is someone ___ writes news stories.",
        "opts": [
          "who",
          "which",
          "where"
        ],
        "ans": 0,
        "exp": "Chỉ người -> dùng đại từ quan hệ 'who'."
      }
    ]
  },
  {
    "id": "question_tags",
    "title": "7. Câu hỏi đuôi (Question Tags)",
    "formula": "Khẳng định , trợ động từ phủ định + đại từ?  |  Phủ định , trợ động từ khẳng định + đại từ?",
    "tip": "Vế trước khẳng định thì đuôi phủ định; thì hiện tại đơn dùng do/does, quá khứ đơn dùng did.",
    "example": "You can swim very well, can't you?",
    "questions": [
      {
        "q": "You like strawberry yoghurt, ___?",
        "opts": [
          "don't you",
          "aren't you",
          "didn't you"
        ],
        "ans": 0,
        "exp": "Vế trước dùng động từ thường 'like' (hiện tại đơn) -> đuôi là 'don't you'."
      },
      {
        "q": "She wasn't late for the concert, ___?",
        "opts": [
          "was she",
          "wasn't she",
          "did she"
        ],
        "ans": 0,
        "exp": "Vế trước phủ định với 'wasn't' -> đuôi khẳng định 'was she'."
      },
      {
        "q": "They visited the museum yesterday, ___?",
        "opts": [
          "didn't they",
          "don't they",
          "weren't they"
        ],
        "ans": 0,
        "exp": "Động từ quá khứ đơn 'visited' -> đuôi phủ định 'didn't they'."
      }
    ]
  },
  {
    "id": "comparisons",
    "title": "8. So sánh hơn, So sánh nhất & So sánh bằng",
    "formula": "adj/adv-er + than  |  more + long adj + than  |  the most + long adj  |  as + adj + as",
    "tip": "Tính từ ngắn thêm -er/-est; tính từ dài dùng more/the most; bất quy tắc: good -> better -> best.",
    "example": "This silver bracelet is more expensive than the plastic one.",
    "questions": [
      {
        "q": "The cheetah is one of the ___ animals in the world.",
        "opts": [
          "fastest",
          "faster",
          "most fast"
        ],
        "ans": 0,
        "exp": "So sánh nhất với tính từ ngắn 'fast' -> 'the fastest'."
      },
      {
        "q": "This book is ___ interesting than that comic.",
        "opts": [
          "more",
          "most",
          "much"
        ],
        "ans": 0,
        "exp": "So sánh hơn với tính từ dài 'interesting' -> 'more interesting than'."
      },
      {
        "q": "My bag is not as ___ as yours.",
        "opts": [
          "heavy",
          "heavier",
          "heaviest"
        ],
        "ans": 0,
        "exp": "Cấu trúc so sánh ngang bằng dùng tính từ nguyên mẫu: as + adj + as."
      }
    ]
  },
  {
    "id": "adverbs_manner_freq",
    "title": "9. Trạng từ chỉ cách thức & Tần suất",
    "formula": "adj + -ly -> adv  (careful -> carefully, good -> well, fast -> fast)",
    "tip": "Trạng từ cách thức thường đứng sau động từ hoặc tân ngữ; 'good' đổi thành 'well', còn 'fast' và 'hard' giữ nguyên.",
    "example": "She speaks English very well now.",
    "questions": [
      {
        "q": "She speaks English very ___ now.",
        "opts": [
          "well",
          "good",
          "best"
        ],
        "ans": 0,
        "exp": "Bổ nghĩa cho động từ 'speaks' cần trạng từ 'well'."
      },
      {
        "q": "Please read the instructions ___ before you start.",
        "opts": [
          "carefully",
          "careful",
          "care"
        ],
        "ans": 0,
        "exp": "Cần trạng từ chỉ cách thức 'carefully' để bổ nghĩa cho động từ 'read'."
      },
      {
        "q": "The tortoise moves very ___ on the grass.",
        "opts": [
          "slowly",
          "slow",
          "slower"
        ],
        "ans": 0,
        "exp": "Dùng trạng từ 'slowly' để miêu tả cách di chuyển."
      }
    ]
  },
  {
    "id": "gerunds_infinitives",
    "title": "10. Danh động từ (V-ing) & Động từ nguyên mẫu (To-V)",
    "formula": "enjoy / finish / practise + V-ing  |  decide / want / hope / learn + to + V",
    "tip": "Sau 'decide, want, hope, learn, forget' dùng 'to + V'; sau 'enjoy, finish, practise, mind' dùng 'V-ing'.",
    "example": "We decided to borrow some books from the library.",
    "questions": [
      {
        "q": "They decided ___ a picnic by the stream.",
        "opts": [
          "to have",
          "having",
          "have"
        ],
        "ans": 0,
        "exp": "'Decide' đi kèm với 'to + V' ('to have')."
      },
      {
        "q": "Do you enjoy ___ cartoons after school?",
        "opts": [
          "watching",
          "to watch",
          "watch"
        ],
        "ans": 0,
        "exp": "'Enjoy' đi kèm với danh động từ 'V-ing' ('watching')."
      },
      {
        "q": "I hope ___ a pilot when I grow up.",
        "opts": [
          "to become",
          "becoming",
          "become"
        ],
        "ans": 0,
        "exp": "'Hope' đi kèm với 'to + V' ('to become')."
      }
    ]
  },
  {
    "id": "quantifiers_determiners",
    "title": "11. Lượng từ & Từ hạn định (Much, Many, Few, Little, Some, Any)",
    "formula": "many / a few + danh từ đếm được số nhiều  |  much / a little + danh từ không đếm được",
    "tip": "Dùng 'some' trong câu khẳng định/lời mời; 'any' trong câu phủ định và câu hỏi thông thường.",
    "example": "We don't have much time before the train leaves.",
    "questions": [
      {
        "q": "There aren't ___ olives left in the jar.",
        "opts": [
          "many",
          "much",
          "a little"
        ],
        "ans": 0,
        "exp": "'Olives' là danh từ đếm được số nhiều trong câu phủ định -> dùng 'many'."
      },
      {
        "q": "We only need ___ sugar for the pancake batter.",
        "opts": [
          "a little",
          "a few",
          "many"
        ],
        "ans": 0,
        "exp": "'Sugar' là danh từ không đếm được -> dùng 'a little'."
      },
      {
        "q": "Would you like ___ apple juice with your snack?",
        "opts": [
          "some",
          "any",
          "few"
        ],
        "ans": 0,
        "exp": "Dùng 'some' trong lời mời lịch sự ('Would you like some...?')."
      }
    ]
  },
  {
    "id": "prepositions_time_place",
    "title": "12. Giới từ chỉ thời gian & nơi chốn (In, On, At, During, Until)",
    "formula": "AT + giờ/noon/midnight  |  ON + thứ/ngày tháng  |  IN + tháng/năm/mùa/buổi",
    "tip": "Chú ý 'in the morning/afternoon/evening' nhưng 'at night'; 'during' đi với khoảng sự kiện; 'until' chỉ mốc thời gian dừng lại.",
    "example": "Our first English lesson starts at 8:30 a.m.",
    "questions": [
      {
        "q": "The school holiday starts ___ Monday morning.",
        "opts": [
          "on",
          "in",
          "at"
        ],
        "ans": 0,
        "exp": "Dùng giới từ 'on' trước thứ trong tuần ('on Monday morning')."
      },
      {
        "q": "Wait here ___ the rain stops.",
        "opts": [
          "until",
          "during",
          "on"
        ],
        "ans": 0,
        "exp": "'Until' có nghĩa là 'cho đến khi' một sự việc diễn ra."
      },
      {
        "q": "We stayed indoors ___ the heavy storm.",
        "opts": [
          "during",
          "until",
          "at"
        ],
        "ans": 0,
        "exp": "'During' diễn tả sự việc xảy ra suốt trong một giai đoạn/sự kiện."
      }
    ]
  },
  {
    "id": "passive_basics",
    "title": "13. Câu bị động cơ bản (Present & Past Simple)",
    "formula": "S + am/is/are/was/were + V3/ed (+ by + agent)",
    "tip": "Dùng câu bị động khi muốn nhấn mạnh hành động hoặc vật chịu tác động hơn là người thực hiện.",
    "example": "That bridge was built more than a century ago.",
    "questions": [
      {
        "q": "This old castle ___ hundreds of years ago.",
        "opts": [
          "was built",
          "is build",
          "built"
        ],
        "ans": 0,
        "exp": "Lâu đài được xây dựng trong quá khứ -> bị động quá khứ đơn 'was built'."
      },
      {
        "q": "Paper and plastic ___ in many schools today.",
        "opts": [
          "are recycled",
          "is recycle",
          "recycled"
        ],
        "ans": 0,
        "exp": "Chủ ngữ số nhiều ('Paper and plastic') ở hiện tại -> 'are recycled'."
      },
      {
        "q": "The letter ___ yesterday morning.",
        "opts": [
          "was sent",
          "were send",
          "is sent"
        ],
        "ans": 0,
        "exp": "'The letter' số ít, quá khứ đơn -> 'was sent'."
      }
    ]
  },
  {
    "id": "reported_speech_basics",
    "title": "14. Câu gián tiếp cơ bản (Say & Tell)",
    "formula": "S + said (that) + mệnh đề lùi thì  |  S + told + tân ngữ + (that) + mệnh đề",
    "tip": "'Tell' luôn có tân ngữ theo sau (told me/him/us), còn 'say' thường không có tân ngữ trực tiếp.",
    "example": "Tom said he was tired after the football match.",
    "questions": [
      {
        "q": "Anna ___ me that she wanted to visit the museum.",
        "opts": [
          "told",
          "said",
          "spoke"
        ],
        "ans": 0,
        "exp": "Có tân ngữ 'me' ngay sau động từ tường thuật -> dùng 'told'."
      },
      {
        "q": "He said he ___ play chess very well.",
        "opts": [
          "could",
          "can",
          "may"
        ],
        "ans": 0,
        "exp": "Lùi thì 'can' thành 'could' trong câu tường thuật quá khứ."
      },
      {
        "q": "The teacher ___ we had a quiz on Friday.",
        "opts": [
          "said",
          "told",
          "asked"
        ],
        "ans": 0,
        "exp": "Không có tân ngữ trực tiếp theo sau -> dùng 'said'."
      }
    ]
  }
];

window.FLYERS_GRAMMAR_SENTENCES = [
  {
    "topic": "Quá khứ tiếp diễn",
    "vi": "Tôi đang đọc sách thì điện thoại reo.",
    "en": "I was reading a book when the phone rang."
  },
  {
    "topic": "Hiện tại hoàn thành",
    "vi": "Bạn đã bao giờ nhìn thấy xương khủng long thật chưa?",
    "en": "Have you ever seen a real dinosaur bone?"
  },
  {
    "topic": "Tương lai Be going to",
    "vi": "Nhìn những đám mây đen kia! Trời sắp mưa rồi.",
    "en": "Look at those dark clouds! It is going to rain."
  },
  {
    "topic": "Động từ khiếm khuyết",
    "vi": "Bạn phải đội mũ bảo hiểm khi đi xe máy.",
    "en": "You must wear a helmet when you ride a motorbike."
  },
  {
    "topic": "Câu điều kiện loại 1",
    "vi": "Nếu ngày mai trời mưa, chúng tôi sẽ ở trong nhà chơi cờ vua.",
    "en": "If it rains tomorrow, we will stay inside and play chess."
  },
  {
    "topic": "Đại từ quan hệ",
    "vi": "Phi hành gia là người bay vào vũ trụ.",
    "en": "An astronaut is a person who travels into space."
  },
  {
    "topic": "Quá khứ tiếp diễn (While)",
    "vi": "Trong khi chúng tôi đang dã ngoại ở công viên, trời bắt đầu mưa.",
    "en": "While we were having a picnic in the park, it began to rain."
  },
  {
    "topic": "Hiện tại hoàn thành (For)",
    "vi": "Cô ấy đã sống ở thành phố này được năm năm rồi.",
    "en": "She has lived in this city for five years."
  },
  {
    "topic": "Nơi chốn với Where",
    "vi": "Lâu đài là nơi các vị vua và hoàng hậu từng sinh sống.",
    "en": "A castle is a place where kings and queens lived."
  },
  {
    "topic": "Động từ + To-V",
    "vi": "Chúng tôi quyết định mượn một vài cuốn sách từ thư viện.",
    "en": "We decided to borrow some books from the library."
  },
  {
    "topic": "So sánh hơn",
    "vi": "Chiếc vòng tay bạc này đắt hơn chiếc vòng nhựa.",
    "en": "This silver bracelet is more expensive than the plastic one."
  },
  {
    "topic": "Câu hỏi đuôi",
    "vi": "Bạn có thể bơi rất giỏi, phải không?",
    "en": "You can swim very well, can't you?"
  },
  {
    "topic": "Trạng từ cách thức",
    "vi": "Cô ấy nói tiếng Anh rất giỏi bây giờ.",
    "en": "She speaks English very well now."
  },
  {
    "topic": "Danh động từ V-ing",
    "vi": "Bạn có thích xem phim hoạt hình sau giờ học không?",
    "en": "Do you enjoy watching cartoons after school?"
  },
  {
    "topic": "Giới từ thời gian",
    "vi": "Hãy đợi ở đây cho đến khi trời tạnh mưa.",
    "en": "Wait here until the rain stops."
  },
  {
    "topic": "Lượng từ",
    "vi": "Chúng tôi không còn nhiều thời gian trước khi tàu chạy.",
    "en": "We don't have much time before the train leaves."
  },
  {
    "topic": "Câu bị động",
    "vi": "Cây cầu đó được xây dựng hơn một thế kỷ trước.",
    "en": "That bridge was built more than a century ago."
  },
  {
    "topic": "Câu gián tiếp",
    "vi": "Tom nói rằng cậu ấy mệt sau trận bóng đá.",
    "en": "Tom said he was tired after the football match."
  }
];
