export type Landing = {
  slug: string;
  icon: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  h1Accent: string;
  lead: string;
  keywords: string[];
  items: string[];
  priceRows: { label: string; price: string }[];
  steps: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "sua-dien-tai-nha",
    icon: "⚡",
    name: "Sửa điện tại nhà",
    title: "Sửa điện tại nhà Bến Cát – Thợ đến ~30 phút | Giá từ 40.000đ",
    description:
      "Thợ sửa điện tại nhà Bến Cát, Bình Dương: sửa ổ cắm, công tắc, chập điện, lắp CB. Kiểm tra và báo giá trước, không phát sinh. Gọi 0336 488 140.",
    h1: "Sửa điện tại nhà",
    h1Accent: " ổ cắm, công tắc, chập điện",
    lead: "Thợ điện đến tận nhà, kiểm tra đúng lỗi và báo giá trước. Đồng ý giá mới bắt đầu sửa.",
    keywords: ["sửa điện tại nhà bến cát", "thợ điện bến cát", "sửa chập điện", "sửa ổ cắm công tắc"],
    items: [
      "Sửa ổ cắm, công tắc hỏng, cháy",
      "Dò tìm và xử lý chập điện, nhảy CB",
      "Lắp CB – aptomat",
      "Thay bóng, sửa đèn",
      "Lắp máy nước nóng, đi dây điện",
    ],
    priceRows: [{ label: "Giá khoảng", price: "40.000 – 300.000đ" }],
    steps: [
      { t: "Gọi hoặc nhắn Zalo", d: "Mô tả sự cố điện, gửi ảnh nếu có." },
      { t: "Thợ đến kiểm tra", d: "Có mặt khoảng 30 phút, tùy khu vực." },
      { t: "Báo giá trước", d: "Đồng ý giá mới bắt đầu sửa." },
      { t: "Sửa xong, thanh toán", d: "Kiểm tra cùng bạn rồi mới thanh toán." },
    ],
    faqs: [
      { q: "Nhà bị chập điện, nhảy CB liên tục thì làm sao?", a: "Ngắt nguồn điện chính và gọi thợ. Thợ sẽ dò tìm điểm chập, báo giá rõ ràng trước khi xử lý." },
      { q: "Giá sửa điện tại nhà bao nhiêu?", a: "Từ 40.000đ đến khoảng 300.000đ tùy hạng mục. Giá tham khảo, thợ báo giá chính xác trước khi làm." },
      { q: "Có bị phát sinh chi phí không?", a: "Không. Thợ báo giá trước, bạn đồng ý mới làm và không tự ý thay thiết bị." },
    ],
  },
  {
    slug: "sua-nuoc-tai-nha",
    icon: "💧",
    name: "Sửa nước tại nhà",
    title: "Sửa nước tại nhà Bến Cát – Thợ đến ~30 phút | Giá từ 150.000đ",
    description:
      "Thợ sửa nước tại nhà Bến Cát, Bình Dương: sửa rò rỉ, thay vòi nước, đường ống, máy bơm. Hỗ trợ tận nhà nhanh chóng, báo giá trước. Gọi 0336 488 140.",
    h1: "Sửa nước tại nhà",
    h1Accent: " rò rỉ, vòi nước, đường ống",
    lead: "Hỗ trợ tận nhà nhanh chóng. Thợ kiểm tra, báo giá trước rồi mới sửa, không tự ý phát sinh.",
    keywords: ["sửa nước tại nhà bến cát", "thợ nước bến cát", "sửa ống nước rò rỉ", "thay vòi nước"],
    items: [
      "Thay vòi nước, sửa vòi rỉ",
      "Sửa ống nước rò rỉ, bể ống",
      "Thay phao, sửa máy bơm",
      "Lắp lavabo, bồn rửa chén",
    ],
    priceRows: [{ label: "Giá khoảng", price: "Từ 150.000đ" }],
    steps: [
      { t: "Gọi hoặc nhắn Zalo", d: "Mô tả sự cố nước, gửi ảnh nếu có." },
      { t: "Thợ đến tận nhà", d: "Có mặt khoảng 30 phút, tùy khu vực." },
      { t: "Báo giá trước", d: "Đồng ý giá mới bắt đầu sửa." },
      { t: "Sửa xong, thanh toán", d: "Kiểm tra cùng bạn rồi mới thanh toán." },
    ],
    faqs: [
      { q: "Ống nước bị bể, nước chảy nhiều thì làm gì?", a: "Khóa van tổng nước rồi gọi thợ ngay. Thợ đến nhanh, xử lý và báo giá rõ ràng." },
      { q: "Giá sửa nước tại nhà bao nhiêu?", a: "Từ 150.000đ tùy hạng mục. Giá tham khảo, thợ báo giá chính xác trước khi làm." },
      { q: "Thợ có đến tận nhà ở Bến Cát không?", a: "Có. Thợ đến tận nhà trong khu vực Bến Cát, thường khoảng 30 phút tùy vị trí." },
    ],
  },
  {
    slug: "thong-nghet-bon-cau",
    icon: "🚽",
    name: "Thông nghẹt bồn cầu",
    title: "Thông nghẹt bồn cầu Bến Cát – Báo giá trước | Gọi 0336 488 140",
    description:
      "Thông nghẹt bồn cầu, lavabo, bồn rửa chén, thoát sàn tại Bến Cát, Bình Dương. Thợ đến nhanh, báo giá trước khi tiến hành. Gọi 0336 488 140.",
    h1: "Thông nghẹt bồn cầu",
    h1Accent: " lavabo, bồn rửa chén",
    lead: "Xử lý bồn cầu, lavabo bị nghẹt gọn gàng. Báo giá trước khi tiến hành, không phát sinh.",
    keywords: ["thông nghẹt bồn cầu bến cát", "thông cầu bến cát", "thông nghẹt lavabo", "sửa bồn cầu"],
    items: [
      "Thông nghẹt bồn cầu",
      "Thông lavabo, bồn rửa chén",
      "Thoát sàn nhà tắm, WC",
      "Sửa, thay két, lắp bồn cầu",
    ],
    priceRows: [
      { label: "Bồn cầu", price: "250.000 – 700.000đ" },
      { label: "Thông nghẹt", price: "350.000 – 1.500.000đ" },
    ],
    steps: [
      { t: "Gọi hoặc nhắn Zalo", d: "Cho biết vị trí bị nghẹt và mức độ." },
      { t: "Thợ đến tận nhà", d: "Có mặt khoảng 30 phút, tùy khu vực." },
      { t: "Báo giá trước", d: "Đồng ý giá mới bắt đầu thông." },
      { t: "Thông xong, thanh toán", d: "Kiểm tra thoát nước cùng bạn rồi thanh toán." },
    ],
    faqs: [
      { q: "Giá thông nghẹt bồn cầu bao nhiêu?", a: "Bồn cầu 250.000 – 700.000đ, thông nghẹt 350.000 – 1.500.000đ tùy mức độ. Thợ báo giá chính xác trước khi làm." },
      { q: "Có làm bẩn nhà không?", a: "Thợ làm gọn gàng, vệ sinh khu vực sau khi thông xong." },
      { q: "Có phát sinh chi phí sau khi làm không?", a: "Không. Thợ báo giá trước, bạn đồng ý mới tiến hành." },
    ],
  },
  {
    slug: "do-ro-ri-nuoc",
    icon: "🔍",
    name: "Dò rò rỉ nước",
    title: "Dò rò rỉ nước âm tường, âm sàn Bến Cát | Báo giá trước",
    description:
      "Dò rò rỉ nước âm tường, âm sàn tại Bến Cát, Bình Dương. Xác định chính xác vị trí trước khi sửa, báo giá trước. Gọi 0336 488 140.",
    h1: "Dò rò rỉ nước",
    h1Accent: " âm tường, âm sàn",
    lead: "Xác định đúng vị trí rò rỉ trước khi sửa, hạn chế đục phá không cần thiết. Báo giá trước khi làm.",
    keywords: ["dò rò rỉ nước bến cát", "dò rỉ nước âm tường", "dò rỉ nước âm sàn", "tìm điểm rò nước"],
    items: [
      "Kiểm tra rò rỉ âm tường",
      "Kiểm tra rò rỉ âm sàn, nhà tắm",
      "Xác định vị trí trước khi sửa",
      "Sửa ống rò rỉ, chống thấm điểm rò",
    ],
    priceRows: [{ label: "Báo giá", price: "Trước khi tiến hành" }],
    steps: [
      { t: "Gọi hoặc nhắn Zalo", d: "Mô tả dấu hiệu: tiền nước tăng, tường ẩm, sàn thấm." },
      { t: "Thợ đến kiểm tra", d: "Có mặt khoảng 30 phút, tùy khu vực." },
      { t: "Xác định vị trí & báo giá", d: "Đồng ý giá mới bắt đầu sửa." },
      { t: "Sửa xong, thanh toán", d: "Kiểm tra lại cùng bạn rồi mới thanh toán." },
    ],
    faqs: [
      { q: "Làm sao biết nhà bị rò rỉ nước âm tường?", a: "Dấu hiệu: tiền nước tăng bất thường, tường ẩm, bong sơn, nghe tiếng nước chảy khi tắt hết vòi. Gọi thợ để kiểm tra chính xác." },
      { q: "Có phải đục phá nhiều không?", a: "Thợ xác định vị trí trước, chỉ xử lý đúng điểm rò để hạn chế đục phá." },
      { q: "Chi phí dò rò rỉ nước là bao nhiêu?", a: "Tùy mức độ và vị trí. Thợ báo giá rõ ràng trước khi tiến hành." },
    ],
  },
];

export function getLanding(slug: string): Landing {
  const l = landings.find((x) => x.slug === slug);
  if (!l) throw new Error(`Landing not found: ${slug}`);
  return l;
}
