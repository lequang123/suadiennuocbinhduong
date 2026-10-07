"use client";

import type { ReactNode } from "react";
import { site } from "@/config/site";

type Kind = "call" | "zalo";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(kind: Kind) {
  if (typeof window === "undefined" || !window.gtag || !site.gadsId) return;
  const label = kind === "call" ? site.gadsCallLabel : site.gadsZaloLabel;
  if (label) window.gtag("event", "conversion", { send_to: `${site.gadsId}/${label}` });
  window.gtag("event", kind === "call" ? "click_call" : "click_zalo");
}

export function CtaLink({
  kind,
  className,
  children,
  id,
}: {
  kind: Kind;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const href = kind === "call" ? `tel:${site.phone}` : site.zalo;
  return (
    <a
      id={id}
      href={href}
      className={className}
      onClick={() => track(kind)}
      {...(kind === "zalo" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
