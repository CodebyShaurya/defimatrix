import React from "react";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";

export default function CookiePolicy() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg prose-invert max-w-none">
          <h1>Cookie Policy</h1>
          <p className="text-gray-600">Effective Date: April 2, 2024</p>

          <h2>1. Introduction</h2>
          <p>
            DeFiMatrix.io (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar
            technologies to enhance your browsing experience, analyze site traffic, and personalize content. This Cookie
            Policy explains what cookies are, how we use them, and how you can manage your preferences.
          </p>

          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember
            your actions and preferences over time, enabling a more personalized experience.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          <h3>a. Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function correctly. They enable core functionalities such as
            security, network management, and accessibility.
          </p>

          <h3>b. Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This information helps us
            improve website performance and user experience.
          </p>

          <h3>c. Functional Cookies</h3>
          <p>
            Functional cookies allow the website to remember choices you make, such as your language preferences, to
            provide enhanced and personalized features.
          </p>

          <h3>d. Marketing Cookies</h3>
          <p>
            Marketing cookies are used to track visitors across websites. They help us deliver relevant advertisements
            and measure the effectiveness of our marketing campaigns.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            We may allow third-party service providers to place cookies on your device for analytics and marketing
            purposes. These providers include, but are not limited to:
          </p>
          <ul>
            <li>Google Analytics: To analyze website traffic and user behavior.</li>
            <li>
              Social Media Platforms: Such as Facebook, Twitter, and LinkedIn, to enable sharing and integration
              features.
            </li>
          </ul>
          <p>
            Please refer to the respective privacy policies of these third parties for more information on their cookie
            practices.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>
            You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can
            modify your browser settings to decline cookies if you prefer. However, disabling cookies may affect the
            functionality of our website.
          </p>
          <p>For more information on how to manage cookies in your browser, please visit:</p>
          <ul>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the
            latest information on our cookie practices.
          </p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions or concerns about our use of cookies, please contact us at:</p>
          <p>
            Email: support@defimatrix.io
            <br />
            Address: DeFiMatrix, Jumeirah Living, Marina Gate, Dubai, UAE
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
