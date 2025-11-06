"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const PricingFaqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I join the affiliate program?",
      answer:
        "Click “Join Now” and complete the sign-up form. Once approved, you'll receive your unique referral link.",
    },
    {
      question: "How and when do I get paid?",
      answer:
        "We process payments monthly via PayPal for commissions earned in the previous month. Minimum payout is $50.",
    },
    {
      question: "What is the commission rate?",
      answer: "A fixed 10% on every successful referral.",
    },
    {
      question: "How long is the referral tracking period?",
      answer: "Referrals are tracked for 6 months from the first click.",
    },
    {
      question: "Do you provide marketing materials?",
      answer: "Yes, including banners, email templates, product images, and promotional copy.",
    },
    {
      question: "Are there terms and conditions?",
      answer: "Yes, please review our terms and conditions for the affiliate program.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <motion.section
      className="mx-auto max-w-7xl px-4 py-24 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-3xl font-bold text-white">FAQs - Your Questions, Answered</h2>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-white/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)]"
              >
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base font-medium text-white">{faq.question}</h3>
                  <div className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-purple-500/30">
                    {openIndex === index ? (
                      <Minus className="h-3 w-3 text-[#C450D5]" />
                    ) : (
                      <Plus className="h-3 w-3 text-[#C450D5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-purple-500/10 p-5 text-gray-400">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
