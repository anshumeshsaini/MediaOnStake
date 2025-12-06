import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  
    {
      category: "Corporate Website",
      title: "Cavendish Trader",
      description: "High-performance stock market and trading analytics platform with secure architecture and modern UI.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format",
      metrics: { performance: "+210%", userBase: "+320%" },
      tags: ["React", "Next.js", "Tailwind", "API Integration"]
    },
  
    {
      category: "Portfolio Website",
      title: "Anshumesh Saini — Portfolio",
      description: "Personal portfolio website showcasing skills, experience, projects, and digital footprint with smooth UX.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&auto=format",
      metrics: { engagement: "+450%", retention: "+180%" },
      tags: ["JavaScript", "React", "GSAP", "Responsive Design"]
    },
  
    {
      category: "Organization Website",
      title: "NHRWWO Official Website",
      description: "Government/NGO website featuring informational pages, mission, welfare programs, image galleries, and announcements.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format",
      metrics: { awareness: "+500%", trust: "+300%" },
      tags: ["HTML", "CSS", "Bootstrap", "CMS Integration"]
    },
  
    {
      category: "Community Portal",
      title: "North Indians in UAE",
      description: "A modern community web portal providing resources, events, news updates, registration, and contact features.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format",
      metrics: { communityGrowth: "+380%", interaction: "+240%" },
      tags: ["Next.js", "Tailwind", "Forms", "Content Management"]
    }
  
  
];

const caseStudies = [
  {
    client: "TechCorp Inc.",
    goal: "Increase organic traffic by 300%",
    strategy: "Comprehensive SEO overhaul with content marketing",
    execution: "12-month roadmap with weekly optimizations",
    result: "412% traffic increase, 180% more conversions",
  },
  {
    client: "Fashion Brand X",
    goal: "Launch e-commerce with strong ROAS",
    strategy: "Full-funnel performance marketing approach",
    execution: "Multi-channel campaigns with dynamic creative",
    result: "5.2x ROAS in first quarter, 1M+ impressions",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work That
            <br />
            <span className="neon-text-gradient">Speaks For Itself</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest projects and see how we've helped businesses
            achieve extraordinary results.
          </p>
        </motion.div>

        {/* Portfolio Showcase - Laptop Mockup Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          {/* Laptop Frame */}
          <div className="relative">
            {/* Screen */}
            <div className="relative bg-muted rounded-t-2xl p-4 border border-border">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-background/50 rounded-lg py-1 px-3 text-xs text-muted-foreground text-center">
                  www.example.com
                </div>
              </div>

              {/* Portfolio Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {portfolioItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-primary text-sm font-medium">
                        {item.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Laptop Base */}
            <div className="h-4 bg-gradient-to-b from-muted to-muted/50 rounded-b-lg" />
            <div className="h-2 bg-muted/30 mx-16 rounded-b-xl" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Case Studies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover p-6"
              >
                <h4 className="font-display font-bold text-xl text-foreground mb-4">
                  {study.client}
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-primary font-medium w-20 shrink-0">Goal:</span>
                    <span className="text-muted-foreground">{study.goal}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium w-20 shrink-0">Strategy:</span>
                    <span className="text-muted-foreground">{study.strategy}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium w-20 shrink-0">Execution:</span>
                    <span className="text-muted-foreground">{study.execution}</span>
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-border">
                    <span className="text-primary font-medium w-20 shrink-0">Result:</span>
                    <span className="text-foreground font-semibold">{study.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
