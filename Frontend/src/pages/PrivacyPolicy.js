import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2 className="mb-4">Privacy Policy</h2>
              <p className="text-muted mb-4">
                <strong>Last Updated:</strong> December 1, 2025
              </p>

              <section className="mb-4">
                <h3 className="mb-3">1. Introduction</h3>
                <p>
                  Welcome to Avexia. We are committed to safeguarding your personal
                  information and respecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and secure your data
                  when you use our website or services. By accessing Avexia, you
                  agree to the terms outlined in this policy.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">2. Information We Collect</h3>
                <p>
                  We collect information that you provide directly, such as your
                  name, email address, shipping details, payment information, and
                  account credentials. We also collect information automatically,
                  including IP address, device type, browser information, and
                  browsing activity through cookies and similar technologies.
                  Additionally, we may receive information from third-party
                  platforms such as analytics or social media services.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">3. How We Use Your Information</h3>
                <p>
                  Your information is used to process orders, manage user accounts,
                  provide customer support, send notifications, personalize your
                  experience, improve website performance, detect fraud, and
                  comply with legal obligations. Marketing communications are sent
                  only with your consent, and you may opt out at any time.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">4. Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies and tracking technologies to enhance website
                  functionality, remember preferences, and analyze usage patterns.
                  You may choose to disable cookies in your browser settings, but
                  certain features of the site may not work properly as a result.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">5. Information Sharing</h3>
                <p>
                  We do not sell your personal information. However, we may share
                  your data with trusted service providers such as payment
                  processors, shipping partners, analytics companies, and marketing
                  services. We may also disclose information to comply with legal
                  obligations or during business transfers such as mergers or
                  acquisitions.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">6. Data Security</h3>
                <p>
                  We use administrative, technical, and physical security measures
                  to protect your personal data, including encrypted transmissions,
                  secure servers, and restricted access. While we strive to protect
                  your information, no method of online transmission is 100% secure.
                  Please keep your account credentials confidential at all times.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">7. Your Rights</h3>
                <p>
                  You may request access, updates, or deletion of your personal
                  data. You may opt out of marketing communications at any time. If
                  you are located in regions such as the EU/UK (GDPR) or California
                  (CCPA), additional rights may apply, including data portability
                  and the right to restrict certain processing activities.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">8. Children's Privacy</h3>
                <p>
                  Avexia does not knowingly collect personal information from
                  children under the age of 13. If we discover that a child has
                  provided information without parental consent, we will remove it
                  from our systems promptly.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">9. International Data Transfers</h3>
                <p>
                  Your information may be transferred and processed in countries
                  outside your region. We take steps to ensure such transfers follow
                  applicable data protection laws and maintain appropriate
                  safeguards.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">10. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. Significant
                  changes will be communicated through the website or via email. By
                  continuing to use our services after updates, you accept the
                  revised policy.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="mb-3">11. Contact Us</h3>
                <p>
                  For questions or requests related to this Privacy Policy,
                  please reach out to us:
                </p>
                <div className="mt-3">
                  <p><strong>Avexia</strong></p>
                  <p>Email: privacy@avexia.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Commerce Street, Suite 100, Your City, ST 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;