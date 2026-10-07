import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site } from "@/config/site";
import "./globals.css";

const font = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const title = "Sửa điện nước Bến Cát – Thợ đến tận nhà ~30 phút | Giá từ 40.000đ";
const description =
  "Thợ sửa điện nước, thông nghẹt, sửa bồn cầu tại Bến Cát, Bình Dương. Gọi là có mặt ~30 phút, báo giá trước, không phát sinh. Gọi 0336 488 140.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "thợ sửa điện nước bến cát",
    "sửa điện nước gần đây",
    "thợ điện bến cát",
    "sửa điện bến cát",
    "thợ điện gần đây",
    "thông nghẹt bến cát",
  ],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", locale: "vi_VN", images: ["/hero.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0b1f3a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={font.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
