import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    category: "Corporate Website",
    title: "Cavendish Trader",
    description: "High-performance stock market and trading analytics platform with secure architecture and modern UI.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format",
    url: "https://cavendish-trader.vercel.app/",
    metrics: { performance: "+210%", userBase: "+320%" },
    tags: ["React", "Next.js", "Tailwind", "API Integration"]
  },
  {
    category: "Portfolio Website",
    title: "Anshumesh Saini — Portfolio",
    description: "Personal portfolio website showcasing skills, experience, projects, and digital footprint with smooth UX.",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&auto=format",
    url: "https://anshumeshsaini.me",
    metrics: { engagement: "+450%", retention: "+180%" },
    tags: ["JavaScript", "React", "GSAP", "Responsive Design"]
  },
  {
    category: "Organization Website",
    title: "NHRWWO Official Website",
    description: "Government/NGO website featuring informational pages, mission, welfare programs, image galleries, and announcements.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format",
    url: "https://www.nhrwwo.in/", // National Human Rights Commission
    metrics: { awareness: "+500%", trust: "+300%" },
    tags: ["HTML", "CSS", "Bootstrap", "CMS Integration"]
  },
  {
    category: "Community Portal",
    title: "North Indians in UAE",
    description: "A modern community web portal providing resources, events, news updates, registration, and contact features.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format",
    url: "https://www.northindiansinuae.com/", // Example community portal
    metrics: { communityGrowth: "+380%", interaction: "+240%" },
    tags: ["Next.js", "Tailwind", "Forms", "Content Management"]
  }
];

const caseStudies = [];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [iframeStates, setIframeStates] = useState(
    portfolioItems.reduce((acc, _, index) => {
      acc[index] = { loaded: false, error: false };
      return acc;
    }, {} as Record<number, { loaded: boolean; error: boolean }>)
  );

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const handleIframeLoad = (index: number) => {
    setIframeStates(prev => ({
      ...prev,
      [index]: { ...prev[index], loaded: true }
    }));
  };

  const handleIframeError = (index: number) => {
    setIframeStates(prev => ({
      ...prev,
      [index]: { ...prev[index], error: true, loaded: true }
    }));
  };

  const activeItem = portfolioItems[activeIndex];

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
              {/* Browser Bar with Real URL */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-background/50 rounded-lg py-2 px-4 text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  <span className="font-mono truncate">{activeItem.url}</span>
                </div>
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors"
                  title="Visit Live Website"
                >
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </a>
              </div>

              {/* Iframe Container for All Portfolio Items */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-background">
                {portfolioItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    {/* Loading State */}
                    {!iframeStates[index]?.loaded && !iframeStates[index]?.error && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                        <p className="text-muted-foreground">Loading {item.title}...</p>
                        <p className="text-sm text-muted-foreground/60 mt-2">Fetching from {item.url}</p>
                      </div>
                    )}

                    {/* Error State */}
                    {iframeStates[index]?.error && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background p-4">
                        <div className="text-destructive mb-4">
                          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L4.226 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <p className="text-center text-muted-foreground mb-4">
                          Website cannot be embedded due to security restrictions.
                        </p>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Site Directly
                        </a>
                      </div>
                    )}

                    {/* Iframe */}
                    <iframe
                      src={item.url}
                      className={`w-full h-full border-0 ${
                        iframeStates[index]?.loaded && !iframeStates[index]?.error 
                          ? 'opacity-100' 
                          : 'opacity-0'
                      }`}
                      title={`${item.title} Live Preview`}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-modals"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => handleIframeLoad(index)}
                      onError={() => handleIframeError(index)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    
                    {/* Fallback Image */}
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Laptop Base */}
            <div className="h-4 bg-gradient-to-b from-muted to-muted/50 rounded-b-lg" />
            <div className="h-2 bg-muted/30 mx-16 rounded-b-xl" />
          </div>

          {/* Project Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-6 rounded-xl glass-card"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-sm font-medium px-3 py-1 rounded-full bg-primary/10">
                    {activeItem.category}
                  </span>
                  <a
                    href={activeItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit Live Site
                  </a>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-muted-foreground mb-6">{activeItem.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:w-48 bg-background/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Results</h4>
                <div className="space-y-3">
                  {Object.entries(activeItem.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground capitalize">{key}:</span>
                      <span className="font-bold text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors group"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5 text-foreground group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4">
              {portfolioItems.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-16 h-10 rounded-lg overflow-hidden transition-all duration-300 relative ${
                    index === activeIndex 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110' 
                      : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}>
                    {/* Thumbnail Iframe */}
                    <iframe
                      src={item.url}
                      className="absolute inset-0 w-full h-full border-0 scale-[0.25] transform origin-top-left pointer-events-none"
                      title={`${item.title} thumbnail`}
                      sandbox="allow-same-origin"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`} />
                </button>
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors group"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* All Websites Grid View (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            All Live Websites
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl overflow-hidden glass-card-hover"
              >
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Open
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                </div>
                <div className="relative aspect-video">
                  <iframe
                    src={item.url}
                    className="w-full h-full border-0"
                    title={`${item.title} Preview`}
                    sandbox="allow-same-origin allow-scripts"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        {caseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
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
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;