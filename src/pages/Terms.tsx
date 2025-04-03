
import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: June 10, 2023</p>
        </div>
        
        <div className="prose prose-honey dark:prose-invert max-w-none">
          <p>
            Welcome to BeePulse. These Terms of Service ("Terms") govern your access to and use of the BeePulse website, mobile applications, APIs, and other online products and services (collectively, the "Service") provided by BeePulse Technologies Pvt. Ltd. ("BeePulse", "we", "us", or "our").
          </p>
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service. If you are accessing and using the Service on behalf of a company, organization, or other entity, then "you" means both you and such entity, and you represent and warrant that you are authorized to bind such entity to these Terms.
          </p>
          
          <h2>2. Privacy Policy</h2>
          <p>
            Please refer to our Privacy Policy for information on how we collect, use, and disclose information from our users. By accessing or using the Service, you agree to the collection, use, and disclosure of your information as outlined in our Privacy Policy.
          </p>
          
          <h2>3. Changes to Terms or Services</h2>
          <p>
            We may modify the Terms at any time, in our sole discretion. If we make changes to the Terms, we will provide notice of such changes, such as by sending an email notification, providing notice through the Service, or updating the "Last Updated" date at the beginning of these Terms. By continuing to access or use the Service after the revisions come into effect, you agree to be bound by the revised Terms.
          </p>
          
          <h2>4. Account Registration and Security</h2>
          <p>
            To use certain features of the Service, you may be required to register for an account with BeePulse. When you register, you agree to provide accurate, current, and complete information about yourself. It is your responsibility to safeguard your account credentials and to notify us immediately if you discover or suspect any security breaches related to the Service or your account.
          </p>
          
          <h2>5. Subscription Terms</h2>
          <p>
            Some aspects of the Service may be provided on a subscription basis. Subscription fees are non-refundable except as expressly set forth in these Terms or as required by applicable law. We reserve the right to change subscription fees at any time, and we will provide you with advance notice of these changes. Changes to subscription fees will take effect at the start of the next subscription period.
          </p>
          
          <h2>6. Data Collection and Usage</h2>
          <p>
            By using our IoT devices and Service, you acknowledge that we collect data from your beehives, including but not limited to acoustic patterns, temperature, humidity, and other environmental factors. This data is used to provide swarm predictions and other features of the Service. You grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and process this data to provide and improve our Service.
          </p>
          
          <h2>7. Limitations of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall BeePulse, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, service interruption, or any similar damages arising from your use of or inability to use the Service.
          </p>
          
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India, without respect to its conflict of laws principles. Any claims arising out of or relating to these Terms or the Service will be resolved exclusively in the courts located in Bangalore, Karnataka, India.
          </p>
          
          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@beepulse.in.
          </p>
        </div>
      </div>
    </Layout>
  );
}
