import { AnimatedSection } from "@/components/AnimatedSection";
import { RippleButton } from "@/components/RippleButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Share2, 
  Target, 
  Lightbulb, 
  Video, 
  Code,
  TrendingUp,
  Users,
  Sparkles
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience across all platforms. We create engaging content that drives conversations and conversions.",
      features: [
        "Content Strategy & Planning",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Analytics",
      ],
      color: "from-electric-blue/20 to-electric-blue/5",
    },
    {
      icon: Target,
      title: "Paid Ads (Meta, Google, TikTok)",
      description: "Maximize your ROI with targeted advertising campaigns that reach the right audience at the right time.",
      features: [
        "Campaign Strategy & Setup",
        "A/B Testing & Optimization",
        "Audience Targeting",
        "Performance Tracking",
      ],
      color: "from-glow-blue/20 to-glow-blue/5",
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Create a memorable brand identity that resonates with your target market and stands out from competitors.",
      features: [
        "Brand Identity Development",
        "Market Research",
        "Positioning Strategy",
        "Brand Guidelines",
      ],
      color: "from-electric-blue/20 to-electric-blue/5",
    },
    {
      icon: Video,
      title: "Content Creation & Reels",
      description: "Produce high-quality, engaging content that captures attention and tells your brand's story.",
      features: [
        "Video Production",
        "Photography",
        "Graphic Design",
        "Short-form Content",
      ],
      color: "from-glow-blue/20 to-glow-blue/5",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Build stunning, high-performance websites that convert visitors into customers.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "SEO Optimization",
        "Ongoing Maintenance",
      ],
      color: "from-electric-blue/20 to-electric-blue/5",
    },
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const title = "What We Do";

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 flex justify-center flex-wrap">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={char === " " ? "w-4" : char === "W" || char === "D" ? "text-electric-blue glow-text" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <AnimatedSection delay={0.5}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From social media to web development, we offer comprehensive digital solutions 
              tailored to scale your brand and drive measurable results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className={`bg-gradient-to-br ${service.color} border border-electric-blue/20 rounded-3xl p-8 md:p-12 hover:border-electric-blue transition-all cursor-pointer`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                      <motion.div
                        className="inline-block p-4 bg-electric-blue/20 rounded-2xl mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-12 h-12 text-electric-blue" />
                      </motion.div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {service.title}
                      </h2>

                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-electric-blue rounded-full" />
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                      <div className="relative">
                        <motion.div
                          className="absolute -inset-4 bg-electric-blue/10 rounded-3xl blur-2xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative grid grid-cols-2 gap-4">
                          {[TrendingUp, Users, Sparkles, Target].map((Icon, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-card border border-electric-blue/30 rounded-2xl p-6 flex items-center justify-center aspect-square"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-12 h-12 text-electric-blue" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="text-electric-blue glow-text">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how our services can help scale your brand to new heights.
            </p>
            <RippleButton onClick={() => navigate("/contact")} variant="primary">
              Book a Consultation
            </RippleButton>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;
