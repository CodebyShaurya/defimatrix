import PricingPlans from "@/components/PricingPlans";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";
import { AffiliateFAQ } from "@/components/AffiliateFAQ";
import EnterprisePlan from "@/components/enterprise-plan";

export default function PricingPage() {
  return (
    <>
      <main className="bg-[url('/why-background.png')] bg-cover bg-top">
        <div className="w-full">
          <Header transparent />
        </div>
        <PricingPlans />
        <EnterprisePlan />
        <AffiliateFAQ />
      </main>
      <Footer />
    </>
  );
}
