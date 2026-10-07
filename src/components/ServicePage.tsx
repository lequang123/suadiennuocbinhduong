import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { site, trust } from "@/config/site";
import { getLanding, landings } from "@/config/landing";

export function landingMetadata(slug: string): Metadata {
  const l = getLanding(slug);
  return {
    title: l.title,
    description: l.description,
    keywords: l.keywords,
    alternates: { canonical: `/${l.slug}` },
    openGraph: {
      title: l.title,
      description: l.description,
      type: "website",
      locale: "vi_VN",
      images: ["/hero.jpg"],
    },
  };
}

export function ServicePage({ slug }: { slug: string }) {
  const l = getLanding(slug);
  const others = landings.filter((x) => x.slug !== slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: l.name,
      serviceType: l.name,
      provider: {
        "@type": "LocalBusiness",
        name: site.brand,
        telephone: `+84${site.phone.slice(1)}`,
        url: site.url,
      },
      areaServed: { "@type": "City", name: `${site.area}, ${site.province}` },
      url: `${site.url}/${l.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: l.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="topbar">
        <div className="wrap topbar-in">
          <Link href="/" className="brand">
            <span className="brand-dot">⚡</span> {site.brand}
          </Link>
          <CtaLink kind="call" id="cta-top-call" className="btn btn-sm btn-yellow">
            📞 {site.phoneDisplay}
          </CtaLink>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-text">
              <span className="pill">
                {l.icon} {l.name} · {site.area}
              </span>
              <h1>
                {l.h1}
                <span className="yellow">{l.h1Accent}</span> – {site.area}
              </h1>
              <p className="lead">{l.lead}</p>
              <div className="cta-row">
                <CtaLink kind="call" id="cta-hero-call" className="btn btn-lg btn-yellow pulse">
                  📞 Gọi ngay {site.phoneDisplay}
                </CtaLink>
                <CtaLink kind="zalo" id="cta-hero-zalo" className="btn btn-lg btn-ghost">
                  💬 Nhắn Zalo
                </CtaLink>
              </div>
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

        <section className="section">
          <div className="wrap">
            <h2 className="sec-title">
              {l.name} tại {site.area} – hạng mục &amp; giá
            </h2>
            <p className="sec-sub">Giá tham khảo, thay đổi theo tình trạng thực tế. Thợ báo giá chính xác trước khi làm.</p>
            <div className="cards">
              <article className="card">
                <h3>
                  <span className="card-ico">{l.icon}</span> Hạng mục xử lý
                </h3>
                <ul>
                  {l.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="price">
                  {l.priceRows.map((p) => (
                    <span key={p.label}>
                      <small>{p.label}</small>
                      <strong>{p.price}</strong>
                    </span>
                  ))}
                </div>
              </article>
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
              {l.steps.map((s, i) => (
                <li key={s.t} className="step">
                  <span className="num">{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2 className="sec-title">Câu hỏi thường gặp</h2>
            {l.faqs.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2 className="sec-title">Dịch vụ khác</h2>
            <div className="chips">
              {others.map((o) => (
                <Link key={o.slug} href={`/${o.slug}`} className="chip">
                  {o.icon} {o.name}
                </Link>
              ))}
              <Link href="/" className="chip">
                🏠 Trang chủ
              </Link>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap final-in">
            <h2>Gọi / Zalo ngay – thợ đến tận nhà</h2>
            <p>
              Phục vụ tại {site.area} · {site.hours}
            </p>
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
          © {new Date().getFullYear()} {site.brand} – {l.name} {site.area}, {site.province} · {site.phoneDisplay}
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
