"use client";

import React from "react";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="pt-2">
      <Header />
      <main className="prose prose-invert mx-auto px-4 py-8 lg:prose-lg">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: April 2, 2024</strong>
        </p>
        <p>
          Welcome to DeFiMatrix! This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of your information when you use the Products and Service and tells you about your privacy rights
          and how the law protects you.
        </p>
        <p>
          We use your personal data to provide and improve the Service. By using the Service, you agree to the
          collection and use of information in accordance with this Privacy Policy. Individuals in the European Economic
          Area and the European Free Trade Association may have additional rights as described below in the GDPR Privacy
          Policy.
        </p>

        <h2>Definitions</h2>
        <ul>
          <li>
            <strong>Account:</strong> a unique account created for you to access our Service.
          </li>
          <li>
            <strong>Company:</strong> DeFiMatrix, Jumeirah Living, Marina Gate, Dubai, UAE.
          </li>
          <li>
            <strong>Cookies:</strong> small files stored on your device, used for browsing tracking and more.
          </li>
          <li>
            <strong>Country:</strong> United Arab Emirates.
          </li>
          <li>
            <strong>Device:</strong> any hardware used to access the Service (computer, phone, tablet).
          </li>
          <li>
            <strong>Personal Data:</strong> any information relating to an identified or identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> the Website (DeFiMatrix.io).
          </li>
          <li>
            <strong>Service Provider:</strong> individuals or companies processing data on behalf of DeFiMatrix.
          </li>
          <li>
            <strong>Usage Data:</strong> data automatically collected from the use of the Service.
          </li>
          <li>
            <strong>You:</strong> the individual or legal entity using the Service.
          </li>
        </ul>

        <h2>Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Address (including ZIP/Postal Code, City, Province, State)</li>
          <li>Proof of Identity (e.g. ID documents, utility bills)</li>
          <li>Criminal or AML/KYC records</li>
          <li>Blockchain data (wallet address, transaction size/volume)</li>
        </ul>

        <h3>Information from Contacting Us</h3>
        <p>
          Includes IP address, session details, browser type/version, location inferred from IP, device type,
          interaction data, and download/view actions.
        </p>

        <h3>Usage Data</h3>
        <p>
          Automatically collected when using the Service. Includes device IP, browser info, session duration, page
          views, and mobile identifiers.
        </p>

        <h2>Tracking Technologies and Cookies</h2>
        <ul>
          <li>Server Logs</li>
          <li>Cookies / Browser Cookies</li>
          <li>Web Beacons (clear gifs, pixel tags)</li>
          <li>Flash Cookies</li>
        </ul>
        <p>
          We use both <strong>Session</strong> and <strong>Persistent</strong> Cookies to enhance user experience.
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Needed for core site functionalities.
          </li>
          <li>
            <strong>Notice Acceptance Cookies:</strong> Tracks cookie policy acceptance.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> Remembers preferences like login or language.
          </li>
        </ul>

        <h2>Use of Your Personal Data</h2>
        <ul>
          <li>Provide, maintain, and monitor the Service</li>
          <li>Manage your Account and verify your identity</li>
          <li>Fulfill contractual obligations</li>
          <li>Contact you with updates or relevant info</li>
          <li>Send promotions or offers unless opted out</li>
          <li>Analyze, improve, and personalize Service</li>
          <li>Process legal or business transfers</li>
        </ul>

        <h2>Sharing Your Personal Data</h2>
        <ul>
          <li>With service providers for analytics or contact</li>
          <li>With business partners, affiliates, and upon consent</li>
          <li>To comply with legal obligations or investigations</li>
          <li>Cryptocurrency transaction data may be tracked for compliance</li>
        </ul>

        <h2>Retention and Transfer</h2>
        <p>
          Data is kept only as long as necessary and may be transferred across jurisdictions where data laws may differ.
        </p>

        <h2>Disclosure and Legal Requirements</h2>
        <p>
          May disclose Personal Data in response to legal obligations, fraud investigation, or protection of users and
          public interest.
        </p>

        <h2>Security</h2>
        <p>We use commercially reasonable means to protect data, but no method is 100% secure.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Service is not intended for anyone under 18. If we unknowingly collected such data, we will delete it.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          We are not responsible for third-party sites you access via our links. Review their privacy policies
          separately.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy and notify you by email or prominently on the site. Review it periodically for
          changes.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions: <a href="mailto:privacy@DeFiMatrix.io">privacy@DeFiMatrix.io</a>
        </p>

        <h2>GDPR Policy</h2>
        <p>EU residents have the following rights:</p>
        <ul>
          <li>Right to information</li>
          <li>Right to access</li>
          <li>Right to rectification</li>
          <li>Right to be forgotten</li>
          <li>Right to data portability</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to object to automated decisions</li>
        </ul>
        <p>
          Requests should be sent to <a href="mailto:privacy@DeFiMatrix.io">privacy@DeFiMatrix.io</a>. We are a data
          controller under GDPR and handle your data accordingly.
        </p>
      </main>
      <Footer />
    </div>
  );
}
