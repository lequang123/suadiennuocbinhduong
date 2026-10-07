import { ServicePage, landingMetadata } from "@/components/ServicePage";

const slug = "sua-dien-tai-nha";

export const metadata = landingMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
