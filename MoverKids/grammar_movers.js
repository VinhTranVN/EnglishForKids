window.MOVERS_GRAMMAR_LESSONS = [
  {
    id: "past_simple",
    title: "1. Thì Quá khứ đơn (Past Simple)",
    formula: "Khẳng định: S + V2/ed  |  Phủ định: S + didn't + V  |  Nghi vấn: Did + S + V?",
    tip: "Dùng cho hành động đã xảy ra và kết thúc trong quá khứ. Thường đi với: yesterday, last night/week/year, ... ago.",
    example: "We went to the zoo last Sunday and saw lions.",
    questions: [
      { q: "She ___ a funny comic yesterday afternoon.", opts: ["read", "reads", "reading"], ans: 0, exp: "Hành động xảy ra 'yesterday afternoon' dùng quá khứ đơn ('read' viết giống hiện tại nhưng phát âm /red/)." },
      { q: "Did you ___ your homework last night?", opts: ["do", "did", "doing"], ans: 0, exp: "Sau trợ động từ 'Did', động từ chính luôn ở dạng nguyên mẫu ('do')." },
      { q: "They ___ football in the park two days ago.", opts: ["play", "played", "plays"], ans: 1, exp: "Có dấu hiệu 'two days ago' nên động từ 'play' thêm '-ed' thành 'played'." }
    ]
  },
  {
    id: "was_were",
    title: "2. Động từ To Be ở quá khứ (Was / Were)",
    formula: "I / He / She / It + was (wasn't)  |  You / We / They + were (weren't)",
    tip: "Dùng để mô tả trạng thái, tính chất hoặc vị trí của người/vật trong quá khứ (không dùng với động từ thường).",
    example: "I was tired last night, but my friends were excited.",
    questions: [
      { q: "Where ___ you yesterday morning?", opts: ["was", "were", "are"], ans: 1, exp: "Chủ ngữ là 'you' trong quá khứ ('yesterday morning') dùng 'were'." },
      { q: "The weather ___ cold and windy last winter.", opts: ["was", "were", "is"], ans: 0, exp: "'The weather' là danh từ không đếm được/số ít trong quá khứ nên dùng 'was'." }
    ]
  },
  {
    id: "present_continuous",
    title: "3. Thì Hiện tại tiếp diễn (Present Continuous)",
    formula: "S + am / is / are + V-ing  |  Phủ định: am not / isn't / aren't + V-ing",
    tip: "Dùng cho hành động đang diễn ra ngay lúc nói (now, at the moment, Look!, Listen!).",
    example: "Look! The dolphins are jumping out of the water.",
    questions: [
      { q: "Listen! Someone ___ the piano.", opts: ["play", "plays", "is playing"], ans: 2, exp: "Có 'Listen!' báo hiệu hành động đang xảy ra ngay lúc này -> dùng 'is playing'." },
      { q: "They ___ their bikes in the park right now.", opts: ["are riding", "ride", "rode"], ans: 0, exp: "'Right now' + chủ ngữ 'They' dùng 'are riding'." }
    ]
  },
  {
    id: "comparatives_superlatives",
    title: "4. So sánh hơn & So sánh nhất (Comparatives & Superlatives)",
    formula: "So sánh hơn: Adj-er + than / more + Adj + than  |  So sánh nhất: the + Adj-est / the most + Adj",
    tip: "So sánh 2 đối tượng dùng '-er than'; so sánh từ 3 đối tượng trở lên dùng 'the ...-est'. Bất quy tắc: good -> better -> best; bad -> worse -> worst.",
    example: "A whale is bigger than a dolphin, and the blue whale is the biggest.",
    questions: [
      { q: "My bag is ___ than yours.", opts: ["heavier", "heavy", "heaviest"], ans: 0, exp: "So sánh hơn giữa hai chiếc túi: tính từ kết thúc bằng phụ âm + 'y' đổi 'y' thành 'i' + '-er' -> 'heavier'." },
      { q: "Tom is the ___ runner in our class.", opts: ["fast", "faster", "fastest"], ans: 2, exp: "Nhất trong cả lớp dùng so sánh nhất -> 'the fastest'." },
      { q: "This cake is ___ than the biscuit.", opts: ["good", "better", "best"], ans: 1, exp: "So sánh hơn của 'good' là 'better'." }
    ]
  },
  {
    id: "have_to_must",
    title: "5. Bổn phận & Sự cần thiết (Have to / Must)",
    formula: "I / We / You / They + have to + V  |  He / She / It + has to + V  |  Must + V",
    tip: "Dùng khi nói về quy tắc, nhiệm vụ hoặc điều cần làm. 'Have to / Has to' chia theo chủ ngữ; 'must' giữ nguyên dạng với mọi chủ ngữ.",
    example: "We have to wear a helmet when riding a motorbike.",
    questions: [
      { q: "She ___ tidy her bedroom before going out.", opts: ["have to", "has to", "having to"], ans: 1, exp: "Chủ ngữ số ít 'She' đi với 'has to'." },
      { q: "You ___ be quiet in the library.", opts: ["must", "has", "are"], ans: 0, exp: "Sau 'must' là động từ nguyên mẫu 'be' để diễn tả quy định." }
    ]
  },
  {
    id: "adverbs_of_manner",
    title: "6. Trạng từ chỉ cách thức (Adverbs of Manner)",
    formula: "Adj + -ly -> Adv  |  Bất quy tắc: good -> well, fast -> fast, hard -> hard",
    tip: "Dùng để mô tả hành động diễn ra như thế nào (thường đứng sau động từ).",
    example: "The snail moves slowly, while the cheetah runs fast.",
    questions: [
      { q: "Please speak ___ so the baby can sleep.", opts: ["quiet", "quietly", "quieter"], ans: 1, exp: "Bổ nghĩa cho động từ 'speak' dùng trạng từ 'quietly'." },
      { q: "My sister sings very ___.", opts: ["good", "well", "best"], ans: 1, exp: "Trạng từ tương ứng của tính từ 'good' là 'well'." }
    ]
  },
  {
    id: "conjunctions_because_so_but",
    title: "7. Liên từ nối câu (Because / So / But)",
    formula: "Because + lý do  |  ... , so + kết quả  |  ... , but + ý trái ngược",
    tip: "'Because' nêu nguyên nhân; 'so' nêu kết quả; 'but' nối hai ý tương phản nhau.",
    example: "I took an umbrella because it was rainy, but the wind stopped soon.",
    questions: [
      { q: "I was hungry, ___ I ate a big sandwich.", opts: ["because", "so", "but"], ans: 1, exp: "'Đói bụng' dẫn đến kết quả 'ăn bánh mì kẹp' -> dùng 'so'." },
      { q: "He stayed home ___ he had a bad cold.", opts: ["because", "so", "but"], ans: 0, exp: "Nêu lý do bị cảm lạnh nên ở nhà -> dùng 'because'." }
    ]
  },
  {
    id: "quantifiers_some_any_alot",
    title: "8. Lượng từ (Some / Any / A lot of)",
    formula: "Some: câu khẳng định / lời mời  |  Any: câu phủ định / câu hỏi  |  A lot of: nhiều",
    tip: "Dùng được cho cả danh từ đếm được số nhiều và danh từ không đếm được.",
    example: "There are some apples in the basket, and a lot of water in the bottle.",
    questions: [
      { q: "Are there ___ bananas in the fridge?", opts: ["some", "any", "much"], ans: 1, exp: "Câu hỏi với danh từ đếm được số nhiều 'bananas' dùng 'any'." },
      { q: "We have ___ homework to do today.", opts: ["a lot of", "many", "an"], ans: 0, exp: "'Homework' không đếm được nên dùng 'a lot of'." }
    ]
  },
  {
    id: "prepositions_time_place",
    title: "9. Giới từ chỉ thời gian & nơi chốn (In / On / At)",
    formula: "In + tháng/năm/mùa/buổi (trừ night)  |  On + ngày/thứ/ngày cụ thể  |  At + giờ / at night",
    tip: "Nhớ mẹo: 'At' cho giờ cố định & night; 'On' cho ngày/thứ; 'In' cho khoảng thời gian dài hơn như tháng, mùa, năm.",
    example: "We have English on Monday at nine o'clock in the morning.",
    questions: [
      { q: "My birthday is ___ May.", opts: ["in", "on", "at"], ans: 0, exp: "Trước tên tháng ('May') dùng giới từ 'in'." },
      { q: "We go to the swimming pool ___ Saturday afternoon.", opts: ["in", "on", "at"], ans: 1, exp: "Trước thứ / ngày cụ thể ('Saturday afternoon') dùng 'on'." }
    ]
  },
  {
    id: "wh_questions_frequency",
    title: "10. Câu hỏi Wh- & Trạng từ tần suất (How often / Why / When)",
    formula: "How often + do/does + S + V?  |  Always > Usually > Often > Sometimes > Never",
    tip: "Trạng từ tần suất thường đứng trước động từ thường và sau động từ 'to be'.",
    example: "How often do you go to the library? — I go there twice a week.",
    questions: [
      { q: "___ do you visit your grandparents? — Every Sunday.", opts: ["How often", "Who", "What"], ans: 0, exp: "Câu trả lời 'Every Sunday' chỉ tần suất -> hỏi bằng 'How often'." },
      { q: "She is ___ late for school. She wakes up early.", opts: ["never", "always", "often"], ans: 0, exp: "Dậy sớm nên không bao giờ đi học muộn -> 'never'." }
    ]
  }
];