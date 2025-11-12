"use client";

import { motion } from "framer-motion";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { AffiliateHowItWorks } from "./AffiliateHowItWorks";
import { AffiliateKeyTerms } from "./AffiliateKeyTerms";
import { AffiliateFAQ } from "./AffiliateFAQ";

export const AffiliatePageContent: React.FC = () => {
  return (
    <>
      <main className="relative bg-[url('/why-background.png')] bg-cover bg-top text-white">
        <div className="w-full">
          <Header transparent />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Affiliate Program Banner Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex flex-col items-center px-8 py-16 text-center md:px-16">
              <div className="relative z-10 mb-8">
                <Image src="/defi-icon.png" alt="DeFiMatrix Logo" width={80} height={80} className="mx-auto mb-6" />
              </div>

              <h2 className="relative z-10 mb-6 text-4xl font-bold">Join the DeFiMatrix Affiliate Program</h2>

              <p className="relative z-10 mb-8 max-w-2xl text-lg text-gray-300">
                Partner with DeFiMatrix and earn 10% revenue share on every successful paid referrals. Share your unique
                referral link, promote it across your network, and get paid monthly when your referrals convert.
              </p>

              <Link
                href="/coming-soon"
                className="relative z-10 rounded-full bg-white px-8 py-3 font-medium text-black transition-all hover:bg-opacity-90"
              >
                Join Now
              </Link>
            </div>
            {/* How It Works Section */}
            <AffiliateHowItWorks />
          </motion.section>

          {/* Key Terms Section */}
          <AffiliateKeyTerms />

          {/* FAQ Section */}
          <AffiliateFAQ />

          {/* Contact Section */}
          <motion.section
            className="pb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold">Have Questions?</h2>
            <p className="mb-8 text-xl text-gray-400">
              Contact our affiliate team at{" "}
              <a href="mailto:affiliates@defimatrix.io" className="text-[#C450D5] hover:text-[#C450D5]/80">
                affiliates@defimatrix.io
              </a>
            </p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
};
