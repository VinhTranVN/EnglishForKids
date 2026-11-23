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
| **🌟 Pre A1 Starters** | `?level=starters` | Gia đình, Con vật, Cơ thể, Quần áo & Màu sắc, Ngôi nhà, Trường học, Đồ ăn, Đồ chơi, Hoạt động hằng ngày... | 🃏 Flashcard • 🧠 Đố định nghĩa • ⌨️ Chính tả • 🔁 Ôn từ khó |
| **🚀 A1 Movers** | `?level=movers` | 12 chủ đề mở rộng: Sức khỏe, Thời tiết, Thành phố & Nông thôn, Thể thao, Nghề nghiệp, Thiên nhiên... | 🃏 Flashcard • 🧠 Đố định nghĩa • ⌨️ Chính tả • 🔁 Ôn từ khó |
| **✈️ A2 Flyers** | `?level=flyers` | 15 chủ đề nâng cao (450+ từ): Vũ trụ, Khoa học, Môi trường, Du lịch, Vật liệu, Nghệ thuật, Lịch sử... | 🃏 Flashcard • 🧠 Đố định nghĩa • ⌨️ Chính tả • 🔁 Ôn từ khó |

### 2. Phân hệ Ngữ Pháp (Grammar)
Hệ thống hóa các điểm ngữ pháp trọng tâm của từng kỳ thi Cambridge YLE:
* **📖 Thẻ Công Thức:** Tóm tắt cấu trúc, mẹo ghi nhớ nhanh và câu ví dụ có nút phát âm mẫu.
* **🎯 Trắc Nghiệm:** Bài tập chọn đáp án đúng kèm giải thích chi tiết bằng tiếng Việt ngay sau khi chọn.
* **🧱 Ghép Câu (Sentence Builder):** Sắp xếp các từ xáo trộn thành câu tiếng Anh hoàn chỉnh dựa trên câu gợi ý tiếng Việt.
* **🔁 Ôn Câu Sai:** Tự động lưu lại những câu trắc nghiệm bé làm sai để luyện lại đến khi thành thạo.

---

## 📁 Cấu trúc thư mục dự án

```text
├── index.html                  # Trang chủ chọn cấp độ & hiển thị tổng sao tích lũy
├── learn.html                  # Giao diện học tập dùng chung cho cả 3 cấp độ
├── README.md                   # Tài liệu hướng dẫn & mô tả dự án
├── StarterKids/
│   ├── vocab_starters.js       # Dữ liệu từ vựng Pre A1 Starters
│   └── grammar_starters.js     # Dữ liệu ngữ pháp Pre A1 Starters
├── MoverKids/
│   ├── vocab_movers.js         # Dữ liệu từ vựng A1 Movers
│   └── grammar_movers.js       # Dữ liệu ngữ pháp A1 Movers
└── FlyerKids/
    ├── vocab_flyers.js         # Dữ liệu từ vựng A2 Flyers
    └── grammar_flyers.js       # Dữ liệu ngữ pháp A2 Flyers
```

---

## 📊 Cấu hình Google Analytics 4 (GA4) — Lưu ý quan trọng khi Clone / Fork

Cả hai file `index.html` và `learn.html` đều đã tích hợp sẵn mã theo dõi **Google Analytics 4 (`gtag.js`)** và các sự kiện tương tác (`switch_section`, `select_topic`).

> ⚠️ **Lưu ý nếu bạn clone hoặc fork dự án này về chạy riêng:**  
> Hãy **thay đổi Measurement ID (`G-...`)** trong mã nguồn bằng **GA4 Measurement ID của chính bạn** trước khi triển khai!  
> Nếu giữ nguyên ID mặc định của tác giả, toàn bộ lượt truy cập và tương tác từ trang web của bạn sẽ gửi nhầm về hệ thống thống kê của tác giả (và ngược lại, bạn sẽ không xem được dữ liệu người dùng trên tài khoản Google Analytics của mình).

### Cách cập nhật GA4 ID của bạn:
1. Truy cập [Google Analytics](https://analytics.google.com/) → vào **Admin (Quản trị) → Data Streams (Luồng dữ liệu) → Web** và sao chép **Measurement ID** (có dạng `G-XXXXXXXXXX`).
2. Mở 2 file **`index.html`** và **`learn.html`**.
3. Tìm đoạn mã `gtag.js` ở đầu thẻ `<head>` và thay thế toàn bộ `G-XXXXXXXXXX` (hoặc ID hiện có trong file) bằng mã `G-...` của bạn:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID_HERE', {
    page_title: document.title,
    page_path: window.location.pathname + window.location.search
  });
</script>
```

---

## 🚀 Hướng dẫn triển khai & Sử dụng

1. **Chạy trực tiếp / GitHub Pages:**
   * Đưa toàn bộ thư mục lên repository GitHub.
   * Vào **Settings → Pages**, chọn nhánh `main` (thư mục `/root`) và lưu lại để nhận đường dẫn truy cập online.
2. **Cài đặt như ứng dụng trên iPhone / iPad:**
   * Mở đường dẫn trang chủ bằng trình duyệt **Safari**.
   * Nhấn nút **Chia sẻ (Share)** → chọn **Thêm vào MH chính (Add to Home Screen)**.

---

## ✉️ Liên hệ & Góp ý

Nếu bạn có góp ý về nội dung bài học, bổ sung từ vựng hoặc báo lỗi hiển thị, vui lòng liên hệ tác giả qua email:  
📧 **vlab.smartapps@gmail.com**