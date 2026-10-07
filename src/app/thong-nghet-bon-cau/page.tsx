import { ServicePage, landingMetadata } from "@/components/ServicePage";

const slug = "thong-nghet-bon-cau";

export const metadata = landingMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
