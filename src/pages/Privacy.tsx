
import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: June 10, 2023</p>
        </div>
        
        <div className="prose prose-honey dark:prose-invert max-w-none">
          <p>
            This Privacy Policy explains how BeePulse Technologies Pvt. Ltd. ("BeePulse", "we", "us", or "our") collects, uses, and discloses information about you when you access or use our website, mobile applications, IoT devices, and other online products and services (collectively, the "Service").
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you register for an account, update your profile, use interactive features, participate in surveys, request customer support, or otherwise communicate with us.
          </p>
          
          <p>
            This information may include:
          </p>
          <ul>
            <li>Basic account information (name, email, phone number)</li>
            <li>Profile information (location, number of hives)</li>
            <li>Payment information (processed by our third-party payment processors)</li>
            <li>Communications with us</li>
          </ul>
          
          <p>
            Additionally, our IoT devices collect data from your beehives, including but not limited to:
          </p>
          <ul>
            <li>Acoustic patterns and sound signatures</li>
            <li>Temperature and humidity readings</li>
            <li>Weight measurements (if applicable)</li>
            <li>Location data of installed devices</li>
          </ul>
          
          <h2>2. How We Use Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Generate swarm predictions and hive health insights</li>
            <li>Send technical notices, updates, security alerts, and administrative messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Develop new products and services</li>
            <li>Monitor and analyze trends, usage, and activities in connection with the Service</li>
          </ul>
          
          <h2>3. Data Sharing and Disclosure</h2>
          <p>
            We may share information about you in the following circumstances:
          </p>
          <ul>
            <li>With vendors, service providers, and consultants that perform services for us</li>
            <li>In response to a legal request if required by law</li>
            <li>In connection with a business transfer (merger, acquisition, reorganization)</li>
            <li>Between and among BeePulse and our current and future parents, affiliates, subsidiaries</li>
            <li>With your consent or at your direction</li>
          </ul>
          
          <p>
            We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We employ reasonable security measures designed to protect your information from unauthorized access, alteration, or destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems with 100% certainty.
          </p>
          
          <h2>5. Data Retention</h2>
          <p>
            We retain information for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, or enforce our agreements. When we no longer need personal information, we securely delete or anonymize it.
          </p>
          
          <h2>6. International Data Transfers</h2>
          <p>
            BeePulse is headquartered in India, and we process and store information in India and other countries. If you are located outside of India, we may transfer, process, and store your information in countries where data protection laws may be different or less protective than those in your country of residence.
          </p>
          
          <h2>7. Your Rights and Choices</h2>
          <p>
            You may update, correct, or delete your account information at any time by logging into your account. You may also request access to, correction of, or deletion of personal information we hold about you by contacting us at privacy@beepulse.in.
          </p>
          
          <h2>8. Changes to this Privacy Policy</h2>
          <p>
            We may modify this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, by adding an additional notice (such as an announcement on our homepage or sending you a notification).
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@beepulse.in.
          </p>
        </div>
      </div>
    </Layout>
  );
}
