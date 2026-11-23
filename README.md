# 🎓 Cambridge English For Kids (Starters • Movers • Flyers)

Ứng dụng web tĩnh (HTML5 / CSS3 / Vanilla JavaScript) hỗ trợ trẻ em luyện **Từ vựng** và **Ngữ pháp** theo lộ trình chuẩn **Cambridge Young Learners English (YLE)** gồm 3 cấp độ: **Pre A1 Starters**, **A1 Movers**, và **A2 Flyers**.

Dự án được thiết kế nhẹ, không cần cài đặt backend hay thư viện ngoài, chạy mượt mà trên **GitHub Pages**, trình duyệt máy tính và **Safari trên iPhone / iPad** (hỗ trợ lưu ra màn hình chính như ứng dụng độc lập).

---

## ✨ Tính năng nổi bật

* **Kiến trúc 1 giao diện dùng chung (`learn.html`):** Cả 3 cấp độ dùng chung một lõi giao diện và logic thông qua tham số URL (`?level=starters`, `?level=movers`, `?level=flyers`), giúp việc bảo trì, nâng cấp tính năng hoặc gắn mã thống kê cực kỳ gọn nhẹ.
* **Tách biệt hoàn toàn dữ liệu học liệu (`.js`):** Toàn bộ kho từ vựng và chuyên đề ngữ pháp của từng cấp độ được lưu trong các file `.js` độc lập, dễ dàng thêm từ mới hoặc mở rộng cấp độ tiếp theo (như KET / PET).
* **Phát âm tiếng Anh 2 tốc độ (Web Speech API):**
  * 🔊 **Nghe chuẩn:** Luyện nghe phát âm tự nhiên theo ngữ điệu bản xứ.
  * 🐢 **Nghe chậm:** Đọc chậm rõ từng âm tiết giúp bé dễ nghe và lặp lại.
* **Hệ thống khen thưởng & lưu tiến độ tự động (`localStorage`):**
  * Tích lũy **Sao (⭐)** và **Chuỗi trả lời đúng (🔥)** riêng biệt cho từng cấp độ, đồng thời tự động cộng dồn tổng sao trên trang chủ `index.html`.
  * Tự động ghi nhớ các từ vựng và câu ngữ pháp bé làm sai để đưa vào danh sách **Ôn tập lại**.

---

## 📚 Tóm tắt nội dung học tập

### 1. Phân hệ Từ Vựng (Vocabulary)
Mỗi từ vựng bao gồm: **Từ tiếng Anh**, **Phiên âm IPA**, **Nghĩa tiếng Việt**, **Biểu tượng minh họa (Emoji)**, **Câu ví dụ song ngữ Anh – Việt**, và **Câu đố định nghĩa (Riddle)**.

| Cấp độ | Tham số URL | Chủ đề tiêu biểu | Chế độ luyện tập |
| :--- | :--- | :--- | :--- |
| **🌟 Pre A1 Starters** | `?level=starters` | Gia đình, Con vật, Cơ thể, Quần áo & Màu sắc, Ngôi nhà, Trường học, Đồ ăn, Đồ chơi, Hoạt động hằng ngày... | • **Flashcard lật thẻ** (nghe từ & nghe ví dụ)<br>• **Đố định nghĩa** (chọn từ theo gợi ý)<br>• **Chính tả (Spelling)** (ghép chữ cái)<br>• **Ôn từ khó** |
| **🚀 A1 Movers** | `?level=movers` | Hoạt động hằng ngày, Địa điểm thị trấn, Sức khỏe & Cảm xúc, Thời tiết & Bốn mùa, Thực phẩm & Mua sắm, Thể thao, Động vật hoang dã... | • Đầy đủ 4 chế độ tương tác như trên với kho từ mở rộng nâng cao từ Starters |
| **✈️ A2 Flyers** | `?level=flyers` | Nghề nghiệp, Du lịch & Phương tiện, Thời tiết & Thiên nhiên, Tính từ miêu tả, Đồ vật & Công nghệ, Môi trường & Đời sống... | • Đầy đủ 4 chế độ tương tác chuẩn định dạng Reading & Writing Part 1 của Cambridge Flyers |

### 2. Phân hệ Ngữ Pháp (Grammar)
* **Pre A1 Starters:** Động từ *To Be (am/is/are)*, *Have got / Has got*, Mạo từ *A/An* & Danh từ số nhiều, *This/That/These/Those*, *There is/There are*, Hiện tại đơn, Hiện tại tiếp diễn, *Can/Can't*, Giới từ chỉ vị trí (*in, on, under, behind, next to*), Sở hữu cách & Câu hỏi *Wh-*.
* **A1 Movers:** Thì quá khứ đơn (*Past Simple*), *Was/Were*, So sánh hơn & So sánh nhất, *Have to / Mustn't*, Trạng từ cách thức, Liên từ (*because, so, but*), Lượng từ (*some, any, a lot of*), Giới từ thời gian/nơi chốn (*in, on, at*), *Like/Enjoy + V-ing* & *Want + to V*.
* **A2 Flyers:** Quá khứ đơn & Quá khứ tiếp diễn (*when / while*), Thì hiện tại hoàn thành (*just, already, yet, ever, never, for, since*), Tương lai với *Will* & *Be going to*, Động từ khiếm khuyết (*should, must, might, may, could*), Câu điều kiện loại 0 & loại 1, Đại từ quan hệ (*who, which, where*) & Câu hỏi đuôi (*Tag questions*).
* **4 chế độ luyện ngữ pháp:**
  1. 📖 **Thẻ công thức & Mẹo nhớ:** Tóm tắt cấu trúc, cách dùng và ví dụ có phát âm.
  2. 🎯 **Trắc nghiệm ngữ pháp:** Chấm điểm tức thì kèm giải thích chi tiết bằng tiếng Việt.
  3. 🧱 **Ghép câu hoàn chỉnh (Sentence Builder):** Sắp xếp các từ xáo trộn thành câu tiếng Anh đúng ngữ pháp.
  4. 🔁 **Ôn câu sai:** Tự động lưu lại các câu làm sai để bé luyện lại đến khi thành thạo.

---

## 🗂️ Cấu trúc thư mục dự án

```text
EnglishForKids/
├── index.html                  # Trang chủ chọn cấp độ & tổng hợp sao tích lũy
├── learn.html                  # Trang học tập dùng chung cho cả 3 cấp độ (?level=...)
├── README.md                   # Tài liệu giới thiệu & hướng dẫn dự án
├── StarterKids/
│   ├── vocab_starters.js       # Dữ liệu từ vựng Pre A1 Starters (window.STARTERS_VOCAB_TOPICS)
│   └── grammar_starters.js     # Dữ liệu ngữ pháp Pre A1 Starters (window.STARTERS_GRAMMAR_LESSONS)
├── MoverKids/
│   ├── vocab_movers.js         # Dữ liệu từ vựng A1 Movers (window.MOVERS_VOCAB_TOPICS)
│   └── grammar_movers.js       # Dữ liệu ngữ pháp A1 Movers (window.MOVERS_GRAMMAR_LESSONS)
└── FlyerKids/
    ├── vocab_flyers.js         # Dữ liệu từ vựng A2 Flyers (window.FLYERS_VOCAB_TOPICS)
    └── grammar_flyers.js       # Dữ liệu ngữ pháp A2 Flyers (window.FLYERS_GRAMMAR_LESSONS)
```

---

## 🚀 Hướng dẫn sử dụng & Triển khai

### 1. Chạy trực tiếp hoặc đưa lên GitHub Pages
1. Đẩy toàn bộ thư mục dự án lên repository GitHub.
2. Vào **Settings → Pages** trên GitHub, chọn nhánh nguồn (ví dụ `main` / thư mục `/root`) và lưu lại.
3. Truy cập đường dẫn GitHub Pages của bạn:
   * Trang chủ: `https://<username>.github.io/<repo>/`
   * Vào thẳng từng cấp độ:
     * `.../learn.html?level=starters`
     * `.../learn.html?level=movers`
     * `.../learn.html?level=flyers`

### 2. Cài đặt như App trên iPhone / iPad
1. Mở trang web bằng trình duyệt **Safari**.
2. Bấm biểu tượng **Chia sẻ (Share)** ở thanh dưới cùng → chọn **Thêm vào MH chính (Add to Home Screen)**.
3. Ứng dụng sẽ hiển thị toàn màn hình và tự động lưu tiến độ học tập trên thiết bị.

---

## 🛠️ Hướng dẫn mở rộng & Tùy chỉnh

* **Thêm từ vựng hoặc bài ngữ pháp mới:** Mở file `vocab_*.js` hoặc `grammar_*.js` của cấp độ tương ứng và thêm phần tử mới theo đúng định dạng JSON có sẵn, không cần chỉnh sửa `learn.html`.
* **Thêm cấp độ mới (ví dụ: A2 Key / KET):**
  1. Tạo thư mục mới (ví dụ `KetKids/`) chứa `vocab_ket.js` và `grammar_ket.js`.
  2. Khai báo thêm khóa `ket` trong đối tượng `LEVEL_CONFIG` ở đầu thẻ `<script>` của `learn.html`.
  3. Thêm thẻ cấp độ mới vào mảng `LEVELS` trong `index.html`.
* **Theo dõi lượt truy cập (Google Analytics 4):** Chỉ cần dán đoạn mã `gtag.js` một lần duy nhất vào thẻ `<head>` của `index.html` và `learn.html` để thống kê đầy đủ lượt học theo từng cấp độ.