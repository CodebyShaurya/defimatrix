import PricingPlans from "@/components/PricingPlans";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";
import { AffiliateFAQ } from "@/components/AffiliateFAQ";
import EnterprisePlan from "@/components/enterprise-plan";

export default function PricingPage() {
  return (
    <>
      <main className="bg-[url('/why-background.png')] bg-cover bg-top pt-2">
        <div className="w-full">
          <Header  />
        </div>
        <PricingPlans />
        <EnterprisePlan />
        <AffiliateFAQ />
      </main>
      <Footer />
    </>
  );
}
