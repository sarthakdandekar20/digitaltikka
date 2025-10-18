import { AnimatedSection } from "@/components/AnimatedSection";
import { RippleButton } from "@/components/RippleButton";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@digitaltikka.com",
      href: "mailto:hello@digitaltikka.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 12345 67890",
      href: "tel:+911234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Build Something <span className="text-electric-blue glow-text">Great</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Ready to scale your brand? Get in touch and let's start your success story today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-card border border-electric-blue/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-input border-2 border-transparent focus:border-electric-blue rounded-lg px-4 py-3 transition-all outline-none glow-border-on-focus"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-input border-2 border-transparent focus:border-electric-blue rounded-lg px-4 py-3 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-input border-2 border-transparent focus:border-electric-blue rounded-lg px-4 py-3 transition-all outline-none"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-input border-2 border-transparent focus:border-electric-blue rounded-lg px-4 py-3 transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <RippleButton variant="primary" className="w-full flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </RippleButton>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <AnimatedSection direction="right">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                  
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 bg-card border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue transition-all group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-electric-blue/20 p-4 rounded-xl group-hover:bg-electric-blue transition-colors">
                        <info.icon className="w-6 h-6 text-electric-blue group-hover:text-background transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-lg font-semibold">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} direction="right">
                <div className="bg-card border border-electric-blue/20 rounded-3xl overflow-hidden h-80">
                  {/* Animated Globe/Map Placeholder */}
                  <div className="w-full h-full relative bg-gradient-to-br from-background to-card flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-48 h-48 rounded-full border-4 border-electric-blue/30 relative">
                        <motion.div
                          className="absolute top-1/2 left-1/2 w-4 h-4 bg-electric-blue rounded-full -translate-x-1/2 -translate-y-1/2"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-electric-blue/20" />
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-electric-blue/20" />
                      </div>
                    </motion.div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-electric-blue mx-auto mb-2" />
                        <p className="text-lg font-semibold"> India </p>
                        <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prefer to <span className="text-electric-blue glow-text">chat</span> first?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Book a free 30-minute consultation to discuss your goals and see if we're the right fit.
            </p>
            <RippleButton variant="outline">
              Schedule a Call
            </RippleButton>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Contact;
