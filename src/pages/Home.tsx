import { motion } from "framer-motion";
import { RippleButton } from "@/components/RippleButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceAds from "@/assets/service-ads.jpg";
import serviceBrand from "@/assets/service-brand.jpg";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: serviceSocial,
      title: "Social Media Marketing",
      description: "Build engaging communities and drive real results",
    },
    {
      icon: serviceAds,
      title: "Paid Advertising",
      description: "Meta, Google, TikTok - we maximize your ROI",
    },
    {
      icon: serviceBrand,
      title: "Brand Strategy",
      description: "Create memorable brands that stand out",
    },
  ];

  const clients = [
    "TechCorp", "FashionHub", "FoodieDelights", "FitLife", "TravelDreams", "EcoWare"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We Scale Brands. <br />
            <span className="text-electric-blue glow-text">We Are DigitalTikka.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Creative minds turning clicks into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <RippleButton onClick={() => navigate("/contact")} variant="primary">
              Let's Talk
            </RippleButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-electric-blue rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              What We Do <span className="text-electric-blue glow-text">Best</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2} direction="up">
                <motion.div
                  className="bg-card border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue transition-all cursor-pointer group h-full flex flex-col"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 overflow-hidden rounded-lg aspect-video">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 text-electric-blue">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mt-auto">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: TrendingUp, value: "250%", label: "Avg ROI Increase" },
              { icon: Sparkles, value: "1000+", label: "Projects Completed" },
              { icon: Zap, value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Trusted By <span className="text-electric-blue glow-text">Leaders</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <motion.div
              className="flex space-x-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card border border-electric-blue/20 rounded-xl px-12 py-8 min-w-[200px] text-center"
                >
                  <span className="text-2xl font-bold text-foreground">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-electric-blue/10" />
        
        <AnimatedSection>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Scale <span className="text-electric-blue glow-text">Your Brand?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's transform your vision into reality. Join hundreds of successful brands.
            </p>
            <RippleButton onClick={() => navigate("/contact")} variant="primary">
              Start Your Journey
            </RippleButton>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
