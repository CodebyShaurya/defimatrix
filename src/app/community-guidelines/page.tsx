"use client";

import React from "react";
import { Header } from "@/components/ui/header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="prose prose-invert mx-auto px-4 py-8 lg:prose-lg">
        <h1>Community Guidelines</h1>

        <h2>What Are These Community Guidelines?</h2>
        <p>
          These guidelines detail the rules and standards that apply to all participants on the DeFiMatrix platform...
        </p>

        <h2>The Platform</h2>
        <p>
          Users must adhere to these guidelines when using DeFiMatrix.io, whether you&apos;re an organizer, speaker,
          sponsor, or attendee...
        </p>

        <h2>How to Contact Us</h2>
        <p>
          DeFiMatrix is maintained by its dedicated community. For inquiries or support, please reach out via email at{" "}
          <a href="mailto:community@defimatrix.io">community@defimatrix.io</a>.
        </p>

        <h2>Other Terms</h2>
        <p>Usage of the Platform also subjects you to our User Terms.</p>

        <h2>Changes to the Guidelines</h2>
        <p>These guidelines are periodically updated to meet the evolving needs of our community...</p>

        <h2>Prohibited Uses</h2>
        <p>The Platform is intended for lawful use only...</p>

        <h2>Interactive Features</h2>
        <p>DeFiMatrix offers various interactive features for enhanced user engagement...</p>

        <h2>Content Standards</h2>
        <p>All user contributions must be truthful, genuine, and lawful...</p>

        <h2>Breach of These Guidelines</h2>
        <p>Failure to comply with these guidelines may result in withdrawal of your right to use the Platform...</p>

        <h2>Take-down Notices</h2>
        <p>
          If you believe that your copyrighted work has been infringed upon on our Platform, please contact us with your
          concern...
        </p>

        <p>
          By adhering to these guidelines, you help foster a secure, engaging, and respectful environment for all
          DeFiMatrix users. We thank you for your cooperation and commitment to making our community a positive space
          for everyone.
        </p>
      </main>
      <Footer />
    </>
  );
}
