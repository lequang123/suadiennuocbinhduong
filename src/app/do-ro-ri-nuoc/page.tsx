import { ServicePage, landingMetadata } from "@/components/ServicePage";

const slug = "do-ro-ri-nuoc";

export const metadata = landingMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
