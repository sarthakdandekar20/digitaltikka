import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState, useEffect } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 500, label: "Clients Served", suffix: "+" },
    { value: 0, target: 1000, label: "Projects Completed", suffix: "+" },
    { value: 0, target: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 0, target: 50, label: "Team Members", suffix: "+" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.value < stat.target) {
            return {
              ...stat,
              value: Math.min(stat.value + Math.ceil(stat.target / 50), stat.target),
            };
          }
          return stat;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Creative Director",
      image: "",
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      image: "",
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "",
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emma Davis",
      role: "Creative Lead",
      image: "",
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection direction="left">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              We're <span className="text-electric-blue glow-text">DigitalTikka</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A team of creators, marketers, and storytellers dedicated to scaling your brand with passion and precision.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since 2018, we've been transforming businesses through innovative digital strategies, 
              creative content, and data-driven marketing. Our mission is simple: turn your brand's 
              potential into measurable success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Impact in <span className="text-electric-blue glow-text">Numbers</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-electric-blue mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Meet the <span className="text-electric-blue glow-text">Dream Team</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-card border border-electric-blue/20 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Flip Card Effect - Social Links */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex space-x-4">
                      <a
                        href={member.social.instagram}
                        className="bg-electric-blue/20 p-3 rounded-full hover:bg-electric-blue hover:scale-110 transition-all"
                      >
                        <Instagram className="w-5 h-5 text-electric-blue group-hover:text-background" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-electric-blue/20 p-3 rounded-full hover:bg-electric-blue hover:scale-110 transition-all"
                      >
                        <Linkedin className="w-5 h-5 text-electric-blue group-hover:text-background" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-electric-blue/20 p-3 rounded-full hover:bg-electric-blue hover:scale-110 transition-all"
                      >
                        <Twitter className="w-5 h-5 text-electric-blue group-hover:text-background" />
                      </a>
                    </div>
                  </motion.div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-electric-blue">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-electric-blue/10 via-transparent to-electric-blue/10">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-3xl md:text-5xl font-bold leading-relaxed">
              "<span className="text-electric-blue glow-text">DigitalTikka</span> — powered by passion and pixels."
            </blockquote>
            <p className="text-xl text-muted-foreground mt-8">
              Where creativity meets strategy, and data drives results.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
