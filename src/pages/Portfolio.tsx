import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string[];
  client: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "Web Development",
      image: portfolio1,
      description: "A complete e-commerce platform redesign that transformed user experience and boosted conversions by 250%.",
      results: [
        "250% increase in conversion rate",
        "40% reduction in bounce rate",
        "150% growth in mobile sales",
        "98% customer satisfaction score"
      ],
      client: "TechCorp"
    },
    {
      id: 2,
      title: "Fashion Forward Campaign",
      category: "Social Media",
      image: portfolio2,
      description: "A multi-platform social media campaign that created viral moments and built a thriving community.",
      results: [
        "5M+ total reach",
        "85% engagement increase",
        "50K new followers in 30 days",
        "200% ROI on ad spend"
      ],
      client: "FashionHub"
    },
    {
      id: 3,
      title: "Startup Branding Success",
      category: "Brand Strategy",
      image: portfolio3,
      description: "Complete brand identity development for a tech startup, establishing market presence and investor confidence.",
      results: [
        "Successfully raised $2M in funding",
        "Featured in major tech publications",
        "300% increase in brand recognition",
        "Market leader in 6 months"
      ],
      client: "TechStartup Inc"
    },
    {
      id: 4,
      title: "Food Delivery Growth",
      category: "Paid Advertising",
      image: portfolio1,
      description: "Strategic paid advertising campaign across Meta and Google that scaled a local food delivery service.",
      results: [
        "400% increase in orders",
        "ROAS of 5.2x",
        "65% reduction in CAC",
        "Expanded to 3 new cities"
      ],
      client: "FoodieDelights"
    },
    {
      id: 5,
      title: "Fitness App Launch",
      category: "Content Creation",
      image: portfolio2,
      description: "Comprehensive content strategy and creation for a fitness app launch, including video production and social content.",
      results: [
        "100K app downloads in launch month",
        "10M+ video views",
        "Featured on App Store",
        "4.8 star rating average"
      ],
      client: "FitLife"
    },
    {
      id: 6,
      title: "Travel Agency Transformation",
      category: "Full Service",
      image: portfolio3,
      description: "End-to-end digital transformation including branding, web development, and marketing for a travel agency.",
      results: [
        "500% increase in bookings",
        "New website with 2s load time",
        "85% customer retention rate",
        "Industry award winner"
      ],
      client: "TravelDreams"
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-electric-blue glow-text">Portfolio</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our success stories and see how we've helped brands achieve remarkable growth 
              through creative strategies and data-driven execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-card border border-electric-blue/20 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="text-center p-6">
                      <p className="text-electric-blue font-semibold mb-2">
                        View Case Study
                      </p>
                      <ExternalLink className="w-8 h-8 text-electric-blue mx-auto" />
                    </div>
                  </motion.div>

                  <div className="p-6">
                    <div className="text-electric-blue text-sm font-semibold mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-card border border-electric-blue/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-background/80 p-2 rounded-full hover:bg-electric-blue transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="text-electric-blue text-sm font-semibold mb-2">
                  {selectedProject.category}
                </div>
                <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-muted-foreground text-lg mb-2">
                  Client: <span className="text-foreground font-semibold">{selectedProject.client}</span>
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  {selectedProject.description}
                </p>

                <h3 className="text-2xl font-bold mb-6 text-electric-blue">
                  Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-background border border-electric-blue/20 rounded-xl p-4 flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-electric-blue rounded-full" />
                      <span>{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
