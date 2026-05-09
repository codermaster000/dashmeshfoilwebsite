import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { company } from "@/data/site";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    try {
      setSubmitting(true);

      const form = e.currentTarget;
      const formData = new FormData(form);

      // Map frontend fields to backend API payload
      const payload = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        subject: String(formData.get("subject") ?? "Contact form submission"),
        message: String(formData.get("message") ?? ""),
      };

      // POST to your backend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast({
          title: "Failed to send",
          description: data?.error?.message || "Please try again later.",
        });
        return;
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. Our team will get back to you within 24 hours.",
      });

      form.reset();
    } catch (err) {
      toast({
        title: "Network error",
        description: "Could not reach the server. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const cards = [
    { icon: Phone, label: "Call us", lines: company.phones, href: `tel:${company.phones[0]}` },
    { icon: Mail, label: "Email us", lines: company.emails, href: `mailto:${company.emails[0]}` },
    { icon: Clock, label: "Working hours", lines: ["Mon – Sat: 10:00 – 18:30", "Sunday: Closed"] },
  ];

  return (
    <>
      <Helmet>


	<title>Dashmesh Foil – Contact Packaging Labels Manufacturer</title>
	<meta name="description"content="Get in touch with Dashmesh Foil in Haryana for high-quality aluminium foil lids, shrink labels, or packaging enquiries. Contact us today."/>

        <meta property="og:url" content="https://www.dashmeshfoil.com/contact-us.html/"/>
          <meta property="og:type" content="website"/>
            <meta property="og:title" content="Dashmesh Foil – Contact Packaging Labels Manufacturer"/>
              <meta property="og:description" content="Get in touch with Dashmesh Foil in Haryana for high-quality aluminium foil lids, shrink labels, or packaging enquiries. Contact us today."/>
                <meta property="og:image" content="https://www.dashmeshfoil.com/images/14.png"/>


                  <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="dashmeshfoil.com"/>
                      <meta property="twitter:url" content="https://www.dashmeshfoil.com/contact"/>
                        <meta name="twitter:title" content="Dashmesh Foil – Contact Packaging Labels Manufacturer"/>
                          <meta name="twitter:description" content="Get in touch with Dashmesh Foil in Haryana for high-quality aluminium foil lids, shrink labels, or packaging enquiries. Contact us today."/>
                            <meta name="twitter:image" content="https://www.dashmeshfoil.com/images/14.png"/>

                            

             </Helmet>
                            <Layout>
                              <PageHero
                                eyebrow="Contact"
                                title="Let's craft your"
                                highlight="next label"
                                description="Have a project in mind? Send us a message and our team will respond within one business day."
                                crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
                              />

                              {/* Quick contact cards */}
                              <section className="py-16 bg-background">
                                <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {cards.map((c) => (
                                    <a
                                      key={c.label}
                                      href={c.href}
                                      className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2 block"
                                    >
                                      <div className="w-14 h-14 rounded-xl gradient-primary grid place-items-center mb-5 shadow-elegant group-hover:scale-110 transition-smooth">
                                        <c.icon className="w-7 h-7 text-primary-foreground" />
                                      </div>
                                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{c.label}</div>
                                      {c.lines.map((l) => (
                                        <div key={l} className="font-semibold text-foreground">{l}</div>
                                      ))}
                                    </a>
                                  ))}
                                </div>
                              </section>

                              {/* Form + address */}
                              <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
                                <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
                                  <div className="lg:col-span-3 bg-card rounded-3xl shadow-card border border-border/60 p-8 md:p-10">
                                    <div className="flex items-center gap-3 mb-6">
                                      <div className="w-12 h-12 rounded-xl gradient-primary grid place-items-center shadow-elegant">
                                        <MessageSquare className="w-6 h-6 text-primary-foreground" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-bold">Send us a message</h2>
                                        <p className="text-sm text-muted-foreground">We'd love to hear about your project.</p>
                                      </div>
                                    </div>

                                    <form onSubmit={onSubmit} className="space-y-5">
                                      <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                          <Label htmlFor="name">Full name</Label>
                                          <Input id="name" name="name" required placeholder="Your name" className="h-12 rounded-xl" />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="email">Email</Label>
                                          <Input id="email" name="email" type="email" required placeholder="you@brand.com" className="h-12 rounded-xl" />
                                        </div>
                                      </div>
                                      <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                          <Label htmlFor="phone">Phone</Label>
                                          <Input id="phone" name="phone" placeholder="+91-" className="h-12 rounded-xl" />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="company">Company</Label>
                                          <Input id="company" name="company" placeholder="Company name" className="h-12 rounded-xl" />
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, label type, quantities, and timelines…" className="rounded-xl" />
                                      </div>
                                      <Button
                                        type="submit"
                                        size="lg"
                                        disabled={submitting}
                                        className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-smooth h-11 px-10 w-35"
                                      >
                                        {submitting ? "Sending…" : (<>Send message <Send className="w-4 h-4 ml-2" /></>)}
                                      </Button>
                                    </form>
                                  </div>

                                  <div className="lg:col-span-2 space-y-6">
                                    <div className="rounded-3xl overflow-hidden shadow-card border border-border/60 bg-card">
                                      <div className="aspect-square w-full">
                                        <iframe
                                          title="Dashmesh Foil location"
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.5812546104085!2d77.27938487142403!3d28.390459441565692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf005d815887%3A0xa3e68f2e922331ce!2sDashmesh%20Foils%20-%20Label%20Printing%20%26%20Packaging!5e1!3m2!1sen!2sin!4v1777973970658!5m2!1sen!2sin"
                                          className="w-full h-full border-0"
                                          loading="lazy"
                                        />


                                      </div>
                                      <div className="p-6">
                                        <div className="flex items-start gap-3">
                                          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                          <div>
                                            <div className="font-semibold mb-1">Visit our facility</div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{company.address}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </Layout>
                          </>
                          );
};
export default Contact;
