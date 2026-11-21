// grammar_starters.js - Starter grammar rules and examples for English learning app
const GRAMMAR_STARTERS = [
  {
    id: 1,
    title: "Present Simple (Hiện tại đơn)",
    formula: "S + V(s/es) + O",
    usage: "Diễn tả thói quen, sự thật hiển nhiên hoặc lịch trình cố định.",
    examples: [
      {
        en: "She drinks coffee every morning.",
        vi: "Cô ấy uống cà phê mỗi sáng."
      },
      {
        en: "The sun rises in the east.",
        vi: "Mặt trời mọc ở hướng Đông."
      }
    ]
  },
  {
    id: 2,
    title: "Present Continuous (Hiện tại tiếp diễn)",
    formula: "S + am/is/are + V-ing + O",
    usage: "Diễn tả hành động đang xảy ra ngay tại thời điểm nói.",
    examples: [
      {
        en: "They are studying English right now.",
        vi: "Họ đang học tiếng Anh ngay lúc này."
      }
    ]
  },
  {
    id: 3,
    title: "Past Simple (Quá khứ đơn)",
    formula: "S + V2/ed + O",
    usage: "Diễn tả hành động đã xảy ra và kết thúc trong quá khứ.",
    examples: [
      {
        en: "I visited Da Nang last year.",
        vi: "Tôi đã đến thăm Đà Nẵng năm ngoái."
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { GRAMMAR_STARTERS };
}
