# Cambridge English For Kids (Starters, Movers, Flyers)

Ứng dụng web học tiếng Anh tương tác theo chuẩn **Cambridge Young Learners English (YLE)** dành cho trẻ em, triển khai dưới dạng web tĩnh trên **GitHub Pages** (`https://vinhtranvn.github.io/EnglishForKids`), tương thích tốt trên trình duyệt máy tính và **Safari trên iPhone/iPad**.

🔗 **Trang web demo:** [https://vinhtranvn.github.io/EnglishForKids](https://vinhtranvn.github.io/EnglishForKids)

---

## Tổng quan nội dung học

Dự án chia làm 3 cấp độ nối tiếp nhau để bé làm quen và nâng cao dần:

* **Pre A1 Starters (`./learn.html?level=starters`):** Làm quen từ vựng cơ bản hằng ngày, hình ảnh trực quan, phát âm chuẩn, đố vui, chính tả và ngữ pháp nền tảng.
* **A1 Movers (`./learn.html?level=movers`):** Mở rộng vốn từ theo các chủ đề đời sống, luyện thì quá khứ đơn, so sánh hơn/nhất, động từ khiếm khuyết và ghép câu.
* **A2 Flyers (`./learn.html?level=flyers`):** Luyện kho từ vựng nâng cao, đố định nghĩa chuẩn đề thi, chính tả, công thức ngữ pháp, trắc nghiệm, ghép câu và tự động gom từ khó / câu sai để ôn tập.

---

## Chế độ luyện tập

### 1. Phân hệ Từ Vựng (Vocabulary)
* **Chọn Chủ Đề:** Theo dõi tiến độ đã thuộc theo từng chủ đề (`%` hoàn thành).
* **Flashcard:** Lật thẻ xem nghĩa tiếng Việt, câu ví dụ kèm bản dịch và nghe phát âm 2 tốc độ (**Nghe chuẩn** & **Nghe chậm**), cũng như nghe riêng câu ví dụ.
* **Đố Định Nghĩa:** Đọc/nghe gợi ý mô tả và chọn từ vựng tương ứng.
* **Chính Tả:** Nghe phát âm, nhìn gợi ý và ghép từng chữ cái tạo thành từ hoàn chỉnh.
* **Ôn Từ Khó:** Tự động lưu các từ bé trả lời sai để luyện lại.

### 2. Phân hệ Ngữ Pháp (Grammar)
* **Thẻ Công Thức:** Tóm tắt công thức, mẹo tránh bẫy và ví dụ minh họa có nút nghe phát âm.
* **Trắc Nghiệm:** Luyện chọn đáp án đúng kèm giải thích chi tiết sau mỗi câu.
* **Ghép Câu:** Sắp xếp các mảnh từ thành câu tiếng Anh hoàn chỉnh theo gợi ý tiếng Việt.
* **Ôn Câu Sai:** Tự động lưu các câu trắc nghiệm làm sai để bé ôn tập lại.

Tiến độ (**Sao ⭐**, **Chuỗi đúng 🔥**, từ đã thuộc, từ khó, câu sai) được lưu tự động trên trình duyệt thiết bị qua `localStorage` và có thể đặt lại bất cứ lúc nào.

---

## Cấu trúc thư mục

```text
EnglishForKids/
├── index.html                  # Trang chủ chọn cấp độ (Starters / Movers / Flyers)
├── learn.html                  # Trang học dùng chung cho cả 3 cấp độ
├── README.md                   # Tài liệu hướng dẫn dự án
├── StarterKids/
│   ├── vocab_starters.js       # Dữ liệu từ vựng Pre A1 Starters
│   └── grammar_starters.js     # Dữ liệu ngữ pháp Pre A1 Starters
├── MoverKids/
│   ├── vocab_movers.js         # Dữ liệu từ vựng A1 Movers
│   └── grammar_movers.js       # Dữ liệu ngữ pháp A1 Movers
└── FlyerKids/
    ├── vocab_flyers.js         # Dữ liệu từ vựng A2 Flyers
    └── grammar_flyers.js       # Dữ liệu ngữ pháp A2 Flyers