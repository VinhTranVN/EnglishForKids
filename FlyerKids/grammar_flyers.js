// Bộ ngữ pháp mở rộng chuẩn Cambridge English: A2 Flyers
// Đặt file này cùng thư mục FlyerKids/ với index.html
window.FLYERS_EXTRA_GRAMMAR = [
  {
    id: "past_continuous_while",
    title: "Quá khứ tiếp diễn với When & While",
    formula: "While + S + was/were + V-ing, S + V2/ed  |  S + was/were + V-ing + when + S + V2/ed",
    tip: "Hành động dài đang xảy ra dùng was/were + V-ing (thường đi sau 'while'); hành động ngắn xen ngang dùng quá khứ đơn (thường đi sau 'when').",
    example: "While we were having a picnic in the park, it began to rain.",
    questions: [
      { q: "While I ___ my homework, my brother was playing the drums.", opts: ["was doing", "did", "do"], ans: 0, exp: "Hai hành động xảy ra song song trong quá khứ -> dùng was/were + V-ing ('was doing')." },
      { q: "They were walking along the path when they ___ a tortoise.", opts: ["saw", "were seeing", "see"], ans: 0, exp: "Hành động bất chợt bắt gặp ('saw') xen vào hành động đang đi dạo -> dùng quá khứ đơn." },
      { q: "What ___ you doing at midnight last night?", opts: ["were", "was", "did"], ans: 0, exp: "Chủ ngữ 'you' đi với 'were' trong thì Quá khứ tiếp diễn." }
    ]
  },
  {
    id: "present_perfect_signals",
    title: "Hiện tại hoàn thành (Just, Already, Yet, Ever, Never, For, Since)",
    formula: "S + have/has + V3/ed  (for + khoảng thời gian | since + mốc thời gian)",
    tip: "'Yet' dùng cuối câu hỏi/phủ định; 'just/already/never' đứng giữa have/has và V3/ed; 'for' + 3 years, 'since' + 2022/Monday.",
    example: "She has lived in this city for five years.",
    questions: [
      { q: "Have you ___ eaten octopus before?", opts: ["ever", "yet", "ago"], ans: 0, exp: "'Ever' dùng trong câu hỏi để hỏi về trải nghiệm từ trước đến nay." },
      { q: "We haven't visited the new museum ___.", opts: ["yet", "already", "just"], ans: 0, exp: "'Yet' đứng cuối câu phủ định mang nghĩa 'chưa'." },
      { q: "He has played the violin ___ he was seven.", opts: ["since", "for", "during"], ans: 0, exp: "'Since' đi kèm mốc thời gian hoặc mệnh đề quá khứ ('he was seven')." }
    ]
  },
  {
    id: "future_forms",
    title: "Diễn đạt tương lai (Will, Be going to, Hiện tại tiếp diễn)",
    formula: "Be going to + V (dự định / dấu hiệu rõ)  |  Will + V (quyết định tức thì / dự đoán)  |  am/is/are + V-ing (lịch hẹn chắc chắn)",
    tip: "Nếu đã có vé, lịch hẹn cụ thể hoặc kế hoạch chắc chắn, đề Flyers rất hay dùng 'be going to' hoặc hiện tại tiếp diễn.",
    example: "We are flying to London tomorrow morning.",
    questions: [
      { q: "I forgot my umbrella! Don't worry, I ___ lend you mine.", opts: ["will", "am going to", "did"], ans: 0, exp: "Quyết định đưa ra ngay tại thời điểm nói -> dùng 'will + V'." },
      { q: "Be careful! That glass bottle is ___ fall off the shelf.", opts: ["going to", "will be", "going"], ans: 0, exp: "Có dấu hiệu sắp xảy ra trước mắt -> dùng 'is going to'." },
      { q: "They ___ meeting their friends at the stadium at 4 p.m.", opts: ["are", "will", "have"], ans: 0, exp: "Kế hoạch/cuộc hẹn đã sắp xếp cụ thể theo giờ -> dùng 'are meeting'." }
    ]
  },
  {
    id: "modals_advice_obligation",
    title: "Động từ khiếm khuyết (Should, Must, Might, Could, Need to)",
    formula: "must / mustn't (quy tắc bắt buộc)  |  should / shouldn't (lời khuyên)  |  might / may (khả năng có thể)",
    tip: "Sau động từ khiếm khuyết luôn là động từ nguyên mẫu không 'to' (ví dụ: should go, must wear — KHÔNG dùng should to go hay musts).",
    example: "You shouldn't eat too many sweets before dinner.",
    questions: [
      { q: "Passengers ___ wear a seatbelt on the plane.", opts: ["must", "might", "could"], ans: 0, exp: "Quy định an toàn bắt buộc -> dùng 'must'." },
      { q: "You look tired. You ___ go to bed early tonight.", opts: ["should", "mustn't", "mightn't"], ans: 0, exp: "Đưa ra lời khuyên nhẹ nhàng -> dùng 'should'." },
      { q: "It's cloudy, so it ___ snow in the mountains.", opts: ["might", "mustn't", "shouldn't"], ans: 0, exp: "Nêu khả năng có thể xảy ra nhưng chưa chắc chắn -> dùng 'might'." }
    ]
  },
  {
    id: "conditionals_zero_first",
    title: "Câu điều kiện loại 0 & loại 1 (If / Unless)",
    formula: "Loại 0: If + S + V(s/es), S + V(s/es)  |  Loại 1: If + S + V(s/es), S + will/can/might + V",
    tip: "Tuyệt đối KHÔNG dùng 'will' ngay sau 'if' trong mệnh đề điều kiện loại 1 (sai: If it will rain...; đúng: If it rains...).",
    example: "If you mix red and yellow paint, you get orange.",
    questions: [
      { q: "If we arrive late, we ___ miss the start of the concert.", opts: ["might", "did", "were"], ans: 0, exp: "Câu điều kiện loại 1 diễn tả khả năng xảy ra ở kết quả -> dùng 'might/will + V'." },
      { q: "If it ___ sunny tomorrow, we will go to the beach.", opts: ["is", "will be", "was"], ans: 0, exp: "Mệnh đề 'If' của câu điều kiện loại 1 chia thì hiện tại đơn ('is')." }
    ]
  },
  {
    id: "relative_clauses_pronouns",
    title: "Đại từ quan hệ & Đại từ bất định (Who, Which, Where, Someone, Anything...)",
    formula: "who (người) | which (vật/con vật) | where (nơi chốn)  |  someone/something/anywhere...",
    tip: "Động từ đi sau đại từ bất định số ít (someone, nobody, everything) thường chia ở dạng số ít (is, has, wants).",
    example: "A castle is a place where kings and queens lived.",
    questions: [
      { q: "A mechanic is someone ___ repairs cars and machines.", opts: ["who", "which", "where"], ans: 0, exp: "'Someone' chỉ người -> dùng đại từ quan hệ 'who'." },
      { q: "Is there ___ in the classroom, or has everyone gone home?", opts: ["anybody", "nothing", "somewhere"], ans: 0, exp: "Trong câu hỏi dùng 'anybody/anyone' để hỏi có ai không." },
      { q: "This is the hotel ___ we stayed during our holiday.", opts: ["where", "who", "which"], ans: 0, exp: "Chỉ địa điểm nơi chốn xảy ra hành động -> dùng 'where'." }
    ]
  },
  {
    id: "comparatives_superlatives_adverbs",
    title: "So sánh hơn/nhất & Trạng từ thể cách (-ly / Bất quy tắc)",
    formula: "Tính từ ngắn: taller / the tallest  |  Tính từ dài: more expensive / the most expensive  |  Trạng từ: quickly, well, fast, hard",
    tip: "Cẩn thận các từ vừa là tính từ vừa là trạng từ không thêm -ly: 'fast', 'hard', 'early', 'late' (và 'good' -> 'well').",
    example: "The cheetah can run much faster than a horse.",
    questions: [
      { q: "This silver bracelet is ___ than the plastic one.", opts: ["more expensive", "expensiver", "most expensive"], ans: 0, exp: "'Expensive' là tính từ dài -> so sánh hơn dùng 'more expensive'." },
      { q: "She speaks English very ___ because she practises daily.", opts: ["well", "good", "best"], ans: 0, exp: "Bổ nghĩa cho động từ 'speaks' cần trạng từ 'well'." },
      { q: "That was the ___ horrible storm we have ever seen.", opts: ["most", "more", "much"], ans: 0, exp: "So sánh nhất với tính từ dài/nhiều âm tiết -> dùng 'the most'." }
    ]
  },
  {
    id: "question_tags_ing_infinitive",
    title: "Câu hỏi đuôi & V-ing / To-V (Enjoy, Want, Decide, Mind...)",
    formula: "enjoy / finish / mind / hate + V-ing  |  want / decide / hope / forget + to V",
    tip: "Sau 'enjoy', 'finish', 'stop', 'mind' dùng V-ing; sau 'want', 'decide', 'plan', 'learn' dùng 'to + V'.",
    example: "We decided to borrow some books from the library.",
    questions: [
      { q: "Do you mind ___ the window? It's very noisy outside.", opts: ["closing", "to close", "close"], ans: 0, exp: "Sau 'mind' trong cấu trúc 'Do you mind + V-ing?' dùng 'closing'." },
      { q: "He promised ___ his tidy bedroom before dinner.", opts: ["to tidy", "tidying", "tidy"], ans: 0, exp: "Sau 'promise' dùng động từ nguyên mẫu có 'to' ('to tidy')." },
      { q: "You can swim very well, ___?", opts: ["can't you", "don't you", "aren't you"], ans: 0, exp: "Vế trước có 'can' khẳng định -> câu hỏi đuôi phủ định là 'can't you'." }
    ]
  }
];
