"use client";

import React from "react";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="prose prose-invert mx-auto px-4 py-8 lg:prose-lg">
        <h1>User Agreement and Terms of Use</h1>
        <p>
          <strong>Last updated:</strong> April 2, 2024
        </p>
        <p>
          Welcome to DeFiMatrix! This is a User Agreement between you (also referred to herein as “Client,” “User,” or
          customer) and DeFiMatrix pertaining to purchase, acquisition, and use of its software and app. This User
          Agreement (&quot;Agreement&quot;) governs your use of the services, technologies, or products provided by
          DeFiMatrix Ltd (&quot;DeFiMatrix Services&quot; or &quot;Services&quot;).
        </p>
        <p>
          By using the Services, you agree that you have read, understand, and accept all of the terms and conditions
          contained in these Terms including Section 8, &quot;Arbitration; Waiver of Class Action&quot;, as well as our
          Privacy Policy.
        </p>
        <p>
          <strong>Risk Warning:</strong> Trading or holding digital currencies involves significant risks. DeFiMatrix is
          not a registered U.S. securities broker and does not solicit investments. Use at your own risk.
        </p>
        <p>
          PLEASE READ THESE TERMS CAREFULLY. THEY INCLUDE DISCLAIMERS, LIMITATIONS OF LIABILITY, AND WAIVERS OF RIGHTS
          INCLUDING JURY TRIAL AND CLASS ACTION RIGHTS.
        </p>

        <h2>1. Overview of Products and Services</h2>
        <h3>1.1 DeFiMatrix’s DeFi Yield Aggregator “Invest” and “Invest +”</h3>
        <p>Provides yield-related info across protocols. Users are solely responsible for verifying data.</p>

        <h3>1.2 APT Token</h3>
        <p>Utility and governance token for the DeFiMatrix ecosystem. Supports staking and governance features.</p>

        <h3>1.3 Exclusion of Supplemental Protocols</h3>
        <p>Excludes metacoins, side chains, forks, etc. Transactions in these may result in losses.</p>

        <h3>1.4 Operation of Digital Currency Protocols</h3>
        <p>
          Protocol changes (e.g., forks) may affect supported tokens. DeFiMatrix has full discretion on support
          decisions.
        </p>

        <h3>1.5 Other Risks</h3>
        <p>
          Possible display glitches, irreversible transactions, hacks, fraud, and smart contract risk. Use at your own
          risk.
        </p>

        <h3>1.6 Upgrades</h3>
        <p>Routine maintenance may cause temporary unavailability.</p>

        <h3>1.7 Variability of Yields</h3>
        <p>Yield rates vary with protocol conditions.</p>

        <h3>1.8 Delegation</h3>
        <p>
          DAO governance may replace DeFiMatrix. DeFiMatrix disclaims liability for DAO actions. Users agree to
          indemnify.
        </p>

        <h2>2. Payment and Right To Discontinue Services</h2>
        <h3>Freezes and Upgrades</h3>
        <p>Protocol changes may be enforced by DeFiMatrix. Reasonable notification expected.</p>

        <h3>Discontinuation of Services</h3>
        <p>May cease operations due to unforeseen events or legal constraints.</p>

        <h2>3. Licenses</h2>
        <h3>Limited License</h3>
        <p>Non-exclusive, revocable license to use Services under full compliance.</p>

        <h3>License Restrictions & User Submissions</h3>
        <p>
          Prohibited: unauthorized use, scraping, bots, spam, or illegal activity. All Feedback becomes DeFiMatrix
          property.
        </p>

        <h3>Ownership</h3>
        <p>All IP rights reserved. Site contents belong to DeFiMatrix or licensors.</p>

        <h2>4. Prohibited Conduct</h2>
        <p>
          Full list of prohibited actions including illegal activity, infringing content, reverse engineering,
          harassment, impersonation, etc.
        </p>

        <h2>5. Disclaimers</h2>
        <p>No warranties provided. Use of third-party services at your own risk.</p>

        <h2>6. No Financial Advice</h2>
        <p>All site content is informational only. No investment advice offered.</p>

        <h2>7. Duration and Modification</h2>
        <p>Terms may change anytime. Continued use implies acceptance. DeFiMatrix may terminate accounts at will.</p>

        <h2>8. Arbitration; Waiver of Class Action</h2>
        <p>Mandatory arbitration required for disputes. Users waive jury trial and class action rights.</p>

        <h2>9. Miscellaneous</h2>
        <ul>
          <li>
            <strong>Governing Law:</strong> United Arab Emirates law.
          </li>
          <li>
            <strong>Privacy Policy:</strong> Incorporated by reference.
          </li>
          <li>
            <strong>Electronic Communications:</strong> Consent implied.
          </li>
          <li>
            <strong>Monitoring:</strong> May monitor as deemed necessary.
          </li>
          <li>
            <strong>Eligibility:</strong> Must be 18+, not from OFAC-listed jurisdictions.
          </li>
        </ul>

        <h3>APPENDIX 1: OFAC Excluded Jurisdictions</h3>
        <p>
          Includes: Balkans, Belarus, Burma, Burundi, CAR, DRC, Crimea, Cuba, Iran, Lebanon, Libya, Mali, Nicaragua,
          North Korea, Somalia, South Sudan, Sudan, Syria, Venezuela, Yemen, Zimbabwe, and others as listed by OFAC.
        </p>
      </main>
      <Footer />
    </>
  );
}
