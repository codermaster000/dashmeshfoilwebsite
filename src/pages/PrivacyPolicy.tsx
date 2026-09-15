import { Helmet } from "react-helmet-async";
import Layout from "@/components/site/Layout";

const title = "Privacy Policy | Dashmesh Foil";
const description = "Read the Dashmesh Foil Privacy Policy to understand how we collect, use, protect and manage information when you visit our website or contact us.";
const canonical = "https://www.dashmeshfoil.com/privacy-policy";

const PrivacyPolicy = () => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={canonical} />
    </Helmet>

    <section className="gradient-primary pt-32 pb-10 md:pb-12 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-base md:text-lg leading-relaxed text-white/85 max-w-2xl">
            Learn how Dashmesh Foil collects, uses and protects information when you use our website.
          </p>
          <p className="mt-5 text-sm font-semibold text-white/85">
            Last Updated: <time dateTime="2026-09-15">15 September 2026</time>
          </p>
        </div>
      </div>
    </section>

    <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14">
      <article className="max-w-4xl mx-auto text-base leading-7 text-foreground break-words [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-9 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:pl-1 [&_li]:mb-2 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-foreground">
          <p>At <strong>Dashmesh Foil</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect information when you visit <strong>Dashmesh Foil's website</strong>, contact us, request a quotation, or interact with our online services.</p>

          <p>By using our website, you acknowledge the practices described in this Privacy Policy.</p>

          <h2>1. Information We Collect</h2>

          <p>We may collect information that you voluntarily provide to us when you:</p>

          <ul>
            <li>Submit a contact or enquiry form</li>
            <li>Request a quotation</li>
            <li>Contact us by email or telephone</li>
            <li>Communicate with our sales or support team</li>
          </ul>

          <p>This information may include:</p>

          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company or organisation name</li>
            <li>Product or packaging requirements</li>
            <li>Messages, enquiries, or other information you choose to provide</li>
          </ul>

          <p>We may also automatically collect certain technical information when you visit our website, including:</p>

          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Referring website or URL</li>
            <li>Date and time of visits</li>
            <li>General website usage and interaction information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <p>We may use the information collected through our website to:</p>

          <ul>
            <li>Respond to enquiries and quotation requests</li>
            <li>Communicate regarding our products and services</li>
            <li>Provide customer support</li>
            <li>Process business and sales enquiries</li>
            <li>Improve our website, products, and services</li>
            <li>Understand how visitors interact with our website</li>
            <li>Measure website and marketing performance</li>
            <li>Prevent fraud, misuse, or security incidents</li>
            <li>Comply with applicable legal and regulatory requirements</li>
            <li>Conduct advertising, remarketing, and marketing campaigns where permitted by applicable law</li>
          </ul>

          <p>We do not sell or rent your personal information to third parties.</p>

          <h2>3. Cookies and Tracking Technologies</h2>

          <p>Our website may use cookies and similar technologies to improve website functionality, analyse traffic, remember user preferences, and measure the effectiveness of advertising campaigns.</p>

          <p>Cookies are small files stored on your device when you visit certain websites.</p>

          <p>Depending on the services enabled on our website, cookies and similar technologies may be used for:</p>

          <ul>
            <li>Essential website functionality</li>
            <li>Website analytics</li>
            <li>Performance measurement</li>
            <li>Advertising measurement</li>
            <li>Conversion tracking</li>
            <li>Remarketing and audience measurement</li>
          </ul>

          <p>You may manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.</p>

          <p>Where required by applicable law, we may request your consent before using non-essential cookies or tracking technologies.</p>

          <h2>4. LinkedIn Advertising and Insight Tag</h2>

          <p>Dashmesh Foil may use <strong>LinkedIn Marketing Solutions</strong>, including the <strong>LinkedIn Insight Tag</strong>, for advertising, conversion tracking, campaign measurement, website audience analysis, and remarketing.</p>

          <p>When enabled, these technologies may collect information about visits and interactions with our website, such as device and browser information, IP address, pages visited, referring URLs, and timestamps.</p>

          <p>LinkedIn may process this information according to its own privacy policies, advertising settings, and applicable data protection requirements.</p>

          <p>Visitors who use LinkedIn may be able to manage how their information is used for advertising through their LinkedIn account and advertising privacy settings.</p>

          <p>Dashmesh Foil does not receive access to individual LinkedIn members' private account information through standard website audience and advertising reports.</p>

          <h2>5. Analytics and Third-Party Services</h2>

          <p>We may use third-party services to operate, secure, analyse, host, or promote our website.</p>

          <p>These services may include:</p>

          <ul>
            <li>Website hosting providers</li>
            <li>Analytics providers</li>
            <li>Advertising platforms</li>
            <li>Email and communication services</li>
            <li>Social media platforms</li>
            <li>Security and performance services</li>
          </ul>

          <p>These third parties may process limited information as necessary to provide their services and are subject to their respective privacy policies and contractual obligations.</p>

          <h2>6. How We Share Information</h2>

          <p>We may share information only when reasonably necessary with:</p>

          <ul>
            <li>Employees and authorised personnel</li>
            <li>Service providers supporting our website or business operations</li>
            <li>Marketing and advertising service providers</li>
            <li>Professional advisers</li>
            <li>Government authorities or regulatory bodies when required by law</li>
          </ul>

          <p>We do not sell personal information collected through our website.</p>

          <h2>7. Data Retention</h2>

          <p>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, maintaining business records, fulfilling contractual obligations, resolving disputes, preventing misuse, and complying with applicable legal requirements.</p>

          <p>Retention periods may vary depending on the type of information and the purpose for which it was collected.</p>

          <h2>8. Data Security</h2>

          <p>We use reasonable administrative, technical, and organisational measures designed to protect personal information against unauthorised access, misuse, loss, alteration, or disclosure.</p>

          <p>However, no internet transmission or electronic storage method can be guaranteed to be completely secure.</p>

          <h2>9. Your Privacy Rights</h2>

          <p>Depending on your location and applicable law, you may have the right to request:</p>

          <ul>
            <li>Access to personal information we hold about you</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of certain personal information</li>
            <li>Withdrawal of consent where processing is based on consent</li>
            <li>Restriction or objection to certain processing activities</li>
            <li>Information about how your personal information is being used</li>
          </ul>

          <p>To submit a privacy-related request, please contact us using the details provided below.</p>

          <p>We may need to verify your identity before processing certain requests.</p>

          <h2>10. Marketing Communications</h2>

          <p>If you receive marketing communications from Dashmesh Foil, you may request to stop receiving them at any time.</p>

          <p>You can contact us at <strong><a href="mailto:info@dashmeshfoil.com">info@dashmeshfoil.com</a></strong> to update your communication preferences.</p>

          <p>We may still send communications that are necessary for existing business relationships, transactions, enquiries, or legal purposes.</p>

          <h2>11. Third-Party Links</h2>

          <p>Our website may contain links to third-party websites, social media platforms, or other external services.</p>

          <p>Dashmesh Foil is not responsible for the privacy practices, security, or content of third-party websites. We recommend reviewing their privacy policies before providing personal information.</p>

          <h2>12. Children's Privacy</h2>

          <p>Our website and services are primarily intended for businesses and professionals and are not directed toward children.</p>

          <p>We do not knowingly collect personal information from children through our website.</p>

          <h2>13. Changes to This Privacy Policy</h2>

          <p>We may update this Privacy Policy periodically to reflect changes to our website, business practices, technologies, advertising services, or applicable legal requirements.</p>

          <p>Any updated version will be published on this page with a revised <strong>Last Updated</strong> date.</p>

          <h2>14. Contact Us</h2>

          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>

          <p><strong>Dashmesh Foil</strong><br />
            Industrial Plot No. 01-2, Industrial Plot No. 1<br />
            Village Dabua, Western Extended Industrial Area<br />
            NIT Faridabad, Haryana – 121001<br />
            India</p>

          <p><strong>Email:</strong> <a href="mailto:info@dashmeshfoil.com">info@dashmeshfoil.com</a><br />
            <strong>Phone:</strong> <a href="tel:+919218109650">+91-9218109650</a><br />
            <strong>Website:</strong> <a href="http://www.dashmeshfoil.com">www.dashmeshfoil.com</a></p>
      </article>
    </div>
  </Layout>
);

export default PrivacyPolicy;
