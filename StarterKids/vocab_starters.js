// vocab_starters.js - Starter vocabulary data for English learning app
const VOCAB_STARTERS = [
  {
    id: 1,
    word: "hello",
    phonetic: "/həˈləʊ/",
    meaning: "xin chào",
    example: "Hello! Nice to meet you.",
    exampleVi: "Xin chào! Rất vui được gặp bạn."
  },
  {
    id: 2,
    word: "book",
    phonetic: "/bʊk/",
    meaning: "quyển sách",
    example: "I am reading an interesting book.",
    exampleVi: "Tôi đang đọc một quyển sách thú vị."
  },
  {
    id: 3,
    word: "travel",
    phonetic: "/ˈtræv.əl/",
    meaning: "du lịch, đi lại",
    example: "We love to travel during summer.",
    exampleVi: "Chúng tôi thích đi du lịch vào mùa hè."
  },
  {
    id: 4,
    word: "practice",
    phonetic: "/ˈpræk.tɪs/",
    meaning: "luyện tập, thực hành",
    example: "Practice speaking English every day.",
    exampleVi: "Hãy luyện nói tiếng Anh mỗi ngày."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VOCAB_STARTERS };
}
