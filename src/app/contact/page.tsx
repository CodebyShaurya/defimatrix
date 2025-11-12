"use client";

import { motion } from "framer-motion";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { useState } from "react";
import Xicon from "@/components/Xicon";
import DiscordIcon from "@/components/DiscordIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import CoinMarketIcon from "@/components/icons/CoinMarketIcon";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    referral: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        referral: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactForm = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="w-full pt-4">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black pt-20 text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#FF00FF]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Contact Header */}
          <div className="mb-16 text-center">
            <motion.h1
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Need help, have a question, or want to collaborate? The DeFiMatrix team is here to support you every step
              of the way. Whether you&apos;re exploring partnerships, technical issues, or media opportunities—reach out
              to the right department below.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              variants={contactForm}
              initial="initial"
              animate="animate"
              className="rounded-2xl bg-[#1A1F2F]/80 p-8 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50"
                      placeholder="John Carter"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50"
                      placeholder="example@youremail.com"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50"
                      placeholder="Your Company"
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">Referred By</label>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50"
                      placeholder="How did you hear about us?"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50"
                    placeholder="Type your message here..."
                    required
                    disabled={status === "loading"}
                  />
                </div>
                {status === "success" && (
                  <p className="text-sm text-green-400">Message sent successfully! We&apos;ll get back to you soon.</p>
                )}
                {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#FF00FF]/80 to-[#C450D5] px-8 py-3 text-center font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
              <motion.div variants={fadeIn} className="rounded-2xl bg-[#1A1F2F]/80 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-semibold">Office Hours</h3>
                <p className="text-gray-400">
                  Sunday to Thursday, 9:00 AM - 6:00 PM and
                  <br />
                  half day on Friday 9:00 AM - 12:00 PM (Gulf Standard Time)
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="rounded-2xl bg-[#1A1F2F]/90 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold">Primary Social Contact</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/DeFiMatrixOS" className="text-[#C450D5] hover:text-[#FF00FF]/80">
                    <Xicon className="size-10" />
                  </a>
                  <a href="https://discord.gg/nGEQuEbVcN" className="text-[#C450D5] hover:text-[#FF00FF]/80">
                    <DiscordIcon className="size-10" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/defimatrix/?viewAsMember=true"
                    className="text-[#C450D5] hover:text-[#FF00FF]/80"
                  >
                    <LinkedinIcon className="size-10" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCKD_C5QKTdapXBORI_-OTbQ"
                    className="text-[#C450D5] hover:text-[#FF00FF]/80"
                  >
                    <YoutubeIcon className="size-10" />
                  </a>
                  <a href="https://github.com" className="text-[#C450D5] hover:text-[#FF00FF]/80">
                    <GithubIcon className="size-10" />
                  </a>
                  <a href="https://coinmarketcap.com" className="text-[#C450D5] hover:text-[#FF00FF]/80">
                    <CoinMarketIcon className="size-10" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Department Cards */}
          <motion.div
            className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "Support Team",
                icon: "🛠️",
                email: "support@defimatrix.io",
                description:
                  "Need help with your DeFiMatrix account or facing technical issues? Our support team is ready to assist you with timely and effective resolutions.",
              },
              {
                title: "Marketing Team",
                icon: "📢",
                email: "marketing@defimatrix.io",
                description:
                  "Interested in promoting our platform or collaborating on campaigns? For brand partnerships, influencer activations, or marketing inquiries, connect with our team.",
              },
              {
                title: "Sales Team",
                icon: "💼",
                email: "sales@defimatrix.io",
                description:
                  "Looking for a tailored solution or platform demo? Our sales experts can walk you through product features, enterprise offerings, and custom integrations.",
              },
              {
                title: "Human Resources",
                icon: "🧑‍💼",
                email: "careers@defimatrix.io",
                description:
                  "Want to join the DeFiMatrix collective? We're always looking for passionate contributors. Get in touch with our HR team to explore open roles or send a speculative application.",
              },
              {
                title: "Compliance Team",
                icon: "⚖️",
                email: "compliance@defimatrix.io",
                description:
                  "Have questions about regulations or legal matters? Our compliance experts ensure DeFiMatrix operates transparently and within global regulatory frameworks.",
              },
              {
                title: "Public Relations",
                icon: "🗞️",
                email: "pr@defimatrix.io",
                description:
                  "For media inquiries, interviews, or official statements. Please reach out to our PR team for press kits, speaker engagements, or story coverage.",
              },
              {
                title: "Research & Development",
                icon: "🧪",
                email: "r&d@defimatrix.io",
                description:
                  "Have an idea or want to collaborate on innovation initiatives? We&apos;re building the future of AI + DeFi and love working with fellow researchers and pioneers.",
              },
              {
                title: "Partnership Opportunities",
                icon: "🤝",
                email: "partners@defimatrix.io",
                description:
                  "Let&apos;s build the next frontier of finance—together. From ecosystem collaborations to cross-chain integrations, we&apos;re open to impactful partnerships.",
              },
              {
                title: "General Inquiries",
                icon: "💬",
                email: "hello@defimatrix.io",
                description:
                  "For any questions or general information about our services, feel free to reach out to us. We'll get back to you as soon as possible.",
              },
            ].map((dept) => (
              <motion.div
                key={dept.title}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl bg-[#1A1F2F]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-[#1A1F2F]"
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[20px] transition-opacity duration-300 group-hover:opacity-100" />
                <span className="mb-4 block text-3xl">{dept.icon}</span>
                <h3 className="mb-3 text-xl font-semibold">{dept.title}</h3>
                <p className="mb-6 text-gray-400">{dept.description}</p>
                <div className="flex flex-wrap items-center space-x-4">
                  <div className="flex items-center text-[#C450D5]">
                    <Mail className="mr-2 h-4 w-4" />
                    <a href={`mailto:${dept.email}`} className="text-sm hover:text-[#FF00FF]/80">
                      {dept.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
