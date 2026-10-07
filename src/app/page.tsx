import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { faqs, reviews, services, site, steps, trust, wards } from "@/config/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand,
    telephone: `+84${site.phone.slice(1)}`,
    url: site.url,
    image: `${site.url}/hero.jpg`,
    priceRange: "40.000đ - 1.500.000đ",
    areaServed: { "@type": "City", name: `${site.area}, ${site.province}` },
    address: { "@type": "PostalAddress", addressLocality: site.area, addressRegion: site.province, addressCountry: "VN" },
    openingHours: "Mo-Su 07:00-21:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="topbar">
        <div className="wrap topbar-in">
          <span className="brand">
            <span className="brand-dot">⚡</span> {site.brand}
          </span>
          <CtaLink kind="call" id="cta-top-call" className="btn btn-sm btn-yellow">
            📞 {site.phoneDisplay}
          </CtaLink>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-text">
              <span className="pill">Thợ điện nước uy tín · {site.area}</span>
              <h1>
                Sửa điện nước
                <span className="yellow"> thông nghẹt tại nhà</span> – {site.area}
              </h1>
              <p className="lead">
                Thợ sửa điện nước gần đây, đến tận nhà từ nhỏ đến lớn. Gọi là có mặt, báo giá trước, đồng ý mới làm.
              </p>
              <div className="stats">
                <div className="stat stat-y">
                  <span className="stat-ico">⏱</span>
                  <div>
                    <small>Gọi là có mặt</small>
                    <strong>~30 PHÚT</strong>
                    <small>Tùy khu vực</small>
                  </div>
                </div>
                <div className="stat stat-w">
                  <span className="stat-ico">🏷</span>
                  <div>
                    <small>Giá hợp lý · chỉ từ</small>
                    <strong>40.000đ</strong>
                    <small>Nhiều hạng mục</small>
                  </div>
                </div>
              </div>
              <div className="cta-row">
                <CtaLink kind="call" id="cta-hero-call" className="btn btn-lg btn-yellow pulse">
                  📞 Gọi ngay {site.phoneDisplay}
                </CtaLink>
                <CtaLink kind="zalo" id="cta-hero-zalo" className="btn btn-lg btn-ghost">
                  💬 Nhắn Zalo
                </CtaLink>
              </div>
            </div>
            <div className="hero-img">
              <Image src="/hero.jpg" alt="Thợ sửa điện nước Bến Cát đến tận nhà" width={1200} height={896} priority sizes="(max-width: 900px) 100vw, 520px" />
              <span className="badge">✔ Báo giá trước khi làm</span>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="wrap">
            <h2>Báo giá trước – đồng ý mới làm</h2>
            <ul className="trust-list">
              {trust.map((t) => (
                <li key={t}>
                  <span>✔</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="bang-gia">
          <div className="wrap">
            <h2 className="sec-title">Dịch vụ sửa điện nước &amp; bảng giá tại {site.area}</h2>
            <p className="sec-sub">Giá tham khảo, thay đổi theo tình trạng thực tế. Thợ báo giá chính xác trước khi làm.</p>
            <div className="cards">
              {services.map((s) => (
                <article key={s.key} className="card reveal">
                  <h3>
                    <span className="card-ico">{s.icon}</span> {s.title}
                  </h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <div className="price">
                    <small>{s.priceLabel}</small>
                    <strong>{s.price}</strong>
                    {s.price2 && (
                      <>
                        <small>{s.priceLabel2}</small>
                        <strong>{s.price2}</strong>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="center">
              <CtaLink kind="call" id="cta-price-call" className="btn btn-lg btn-yellow">
                📞 Gọi báo giá miễn phí
              </CtaLink>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2 className="sec-title">Quy trình làm việc rõ ràng</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.t} className="step reveal">
                  <span className="num">{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="sec-title">Thợ điện nước phục vụ khu vực {site.area}</h2>
            <p className="sec-sub">Nhận sửa điện, sửa nước, thông nghẹt tại nhà trong toàn thị xã {site.area}, {site.province}. Hoạt động {site.hours}.</p>
            <div className="chips">
              {wards.map((w) => (
                <span key={w} className="chip">
                  📍 {w}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2 className="sec-title">Khách hàng nói gì</h2>
            <div className="cards">
              {reviews.map((r) => (
                <figure key={r.n} className="card review reveal">
                  <div className="stars" aria-label="5 sao">★★★★★</div>
                  <blockquote>{r.t}</blockquote>
                  <figcaption>
                    <strong>{r.n}</strong> · {r.w}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2 className="sec-title">Câu hỏi thường gặp</h2>
            {faqs.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final">
          <div className="wrap final-in">
            <h2>Gọi / Zalo ngay – thợ đến tận nhà</h2>
            <p>Phục vụ tại {site.area} · {site.hours}</p>
            <div className="cta-row center">
              <CtaLink kind="call" id="cta-final-call" className="btn btn-lg btn-navy pulse">
                📞 {site.phoneDisplay}
              </CtaLink>
              <CtaLink kind="zalo" id="cta-final-zalo" className="btn btn-lg btn-outline">
                💬 Nhắn Zalo
              </CtaLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} {site.brand} – Sửa điện nước {site.area}, {site.province} · {site.phoneDisplay}
        </div>
      </footer>

      <nav className="sticky" aria-label="Liên hệ nhanh">
        <CtaLink kind="call" id="cta-sticky-call" className="btn btn-yellow">
          📞 Gọi ngay
        </CtaLink>
        <CtaLink kind="zalo" id="cta-sticky-zalo" className="btn btn-blue">
          💬 Zalo
        </CtaLink>
      </nav>
    </>
  );
}
