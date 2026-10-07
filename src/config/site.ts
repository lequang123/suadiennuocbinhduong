export const site = {
  brand: "Thợ điện nước Bình Dương",
  area: "Bến Cát",
  province: "Bình Dương",
  phone: "0336488140",
  phoneDisplay: "0336 488 140",
  zalo: "https://zalo.me/0336488140",
  hours: "7h – 21h hằng ngày",
  eta: "~30 phút",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://suadiennuocbencat.vercel.app",
  gadsId: process.env.NEXT_PUBLIC_GADS_ID || "AW-18450878021",
  gadsCallLabel: process.env.NEXT_PUBLIC_GADS_CALL_LABEL ?? "",
  gadsZaloLabel: process.env.NEXT_PUBLIC_GADS_ZALO_LABEL ?? "",
};

export const services = [
  {
    key: "dien",
    title: "Điện",
    icon: "⚡",
    items: [
      "Thay bóng, sửa đèn",
      "Ổ cắm, công tắc",
      "Lắp CB – aptomat",
      "Dò tìm chập điện",
      "Máy nước nóng, đi dây",
    ],
    priceLabel: "Giá khoảng",
    price: "40.000 – 300.000đ",
  },
  {
    key: "nuoc",
    title: "Nước",
    icon: "💧",
    items: [
      "Thay vòi nước",
      "Sửa ống rò rỉ, bể",
      "Thay phao, máy bơm",
      "Lắp lavabo, bồn rửa chén",
    ],
    priceLabel: "Giá khoảng",
    price: "Từ 150.000đ",
  },
  {
    key: "boncau",
    title: "Bồn cầu & thông nghẹt",
    icon: "🚽",
    items: [
      "Sửa, thay két, lắp bồn cầu",
      "Thông lavabo, bồn rửa chén",
      "Thoát sàn nhà tắm, WC",
    ],
    priceLabel: "Bồn cầu",
    price: "250.000 – 700.000đ",
    priceLabel2: "Thông nghẹt",
    price2: "350.000 – 1.500.000đ",
  },
];

export const trust = [
  "Không tự ý phát sinh chi phí",
  "Không tự ý thay thiết bị",
  "Kiểm tra đúng lỗi, tư vấn rõ",
];

export const steps = [
  { t: "Gọi hoặc nhắn Zalo", d: "Mô tả sự cố, gửi ảnh nếu có." },
  { t: "Thợ đến tận nhà", d: "Có mặt khoảng 30 phút, tùy khu vực." },
  { t: "Báo giá trước", d: "Đồng ý giá mới bắt đầu sửa." },
  { t: "Sửa xong, thanh toán", d: "Kiểm tra cùng bạn rồi mới thanh toán." },
];

export const wards = [
  "Mỹ Phước",
  "Chánh Phú Hòa",
  "An Điền",
  "An Tây",
  "Thới Hòa",
  "Phú An",
  "Hòa Lợi",
  "Tân Định",
  "Mỹ Phước 1, 2, 3, 4",
  "Khu công nghiệp Mỹ Phước",
];

export const reviews = [
  { n: "Chị Lan", w: "Mỹ Phước", t: "Gọi là thợ đến nhanh, báo giá rõ ràng trước khi sửa. Vòi nước hết rò ngay." },
  { n: "Anh Tuấn", w: "Chánh Phú Hòa", t: "Nhà bị chập điện buổi tối, thợ tìm ra lỗi nhanh, giá đúng như báo." },
  { n: "Cô Hạnh", w: "An Điền", t: "Thông nghẹt bồn rửa chén gọn gàng, không phát sinh thêm tiền." },
];

export const faqs = [
  { q: "Thợ sửa điện nước ở Bến Cát có đến tận nhà không?", a: "Có. Thợ đến tận nhà trong khu vực Bến Cát, thường có mặt khoảng 30 phút tùy vị trí." },
  { q: "Giá sửa điện nước ở Bến Cát bao nhiêu?", a: "Phần sửa điện từ 40.000đ, sửa nước từ 150.000đ, bồn cầu 250.000 – 700.000đ, thông nghẹt 350.000 – 1.500.000đ. Giá tham khảo, thợ báo giá chính xác trước khi làm." },
  { q: "Có bị phát sinh chi phí sau khi sửa không?", a: "Không. Thợ báo giá trước, bạn đồng ý mới làm và không tự ý thay thiết bị." },
  { q: "Tôi liên hệ thợ điện Bến Cát bằng cách nào?", a: `Gọi ${"0336 488 140"} hoặc nhắn Zalo cùng số này, mô tả sự cố để thợ tư vấn nhanh.` },
];
