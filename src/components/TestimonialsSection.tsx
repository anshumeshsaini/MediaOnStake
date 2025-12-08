import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Sonal Singh",
    role: "Director, NHRRWO",
    image: "https://www.nhrwwo.in/assets/Logopit_1690716648215-BQyKVKEg.png",
    content:
      "MediaOnStake delivered an exceptionally polished and impactful website for NHRRWO. The UI is clean, fast, and built with precision. Our engagement, member activity, and overall visibility have significantly increased.",
    rating: 5,
    metrics: "160% rise in member engagement"
  },
  {
    name: "Prathmeesh Saini",
    role: "Founder, North Indian UAE",
    image: "https://imgs.search.brave.com/y8CM0a2U9BcwZfGi_f8FubfkmrjDXEz-4wcUxeeCqik/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9kMmdq/cWg5ajI2dW5wMC5j/bG91ZGZyb250Lm5l/dC9wcm9maWxlcGlj/L2U0NzU1N2Q1ZjRj/YzEzMzA0OTBjNWQ1/OGJmODA3Nzc0",
    content:
      "We wanted a premium Indian-themed website that speaks to the UAE audience — and MediaOnStake nailed it perfectly. The design, speed, animations, and user flow feel international-level. Our customer retention and interactions have shot up massively.",
    rating: 5,
    metrics: "Customer interactions up by 3.8x"
  },
  {
    name: "Himashu Ojha",
    role: "Owner, Ohja Printing Press",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format",
    content:
      "MediaOnStake created a highly professional and visually appealing website for our printing press. It showcases our services with clarity and style. We now receive consistent leads every week — the website truly works for us.",
    rating: 5,
    metrics: "Leads increased by 240%"
  },
  {
    name: "Anshumesh Saini",
    role: "Co Founder, CyberShield",
    image: "https://avatars.githubusercontent.com/u/119862734?s=48&v=4",
    content:
      "MediaOnStake's development and UI excellence helped establish a powerful digital presence for my personal portfolio. The animations, responsiveness, and unique design language helped attract clients instantly.",
    rating: 5,
    metrics: "Client conversions increased by 300%"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation for carousel
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch functionality for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTestimonial();
    }
  };

  // Auto-play functionality
  const intervalRef = useRef<NodeJS.Timeout>();

  const startAutoPlay = () => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useState(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  });

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (isAutoPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };

  return (
    <section 
      id="testimonials" 
      className="section-padding relative overflow-hidden py-8 md:py-16 lg:py-24" 
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">
            What Our Clients
            <br className="hidden sm:block" />
            <span className="neon-text-gradient"> Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-2 sm:px-0">
            Don't just take our word for it. Here's what business owners
            and marketing leaders have to say about working with us.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Quote Icon - Hidden on mobile, visible on tablet+ */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
            </div>

            {/* Testimonial Card */}
            <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`${index === activeIndex ? 'block' : 'hidden'} space-y-4 sm:space-y-6`}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 fill-primary text-primary" 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed mb-6 sm:mb-7 md:mb-8 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 sm:pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border border-primary/30 flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-foreground text-sm sm:text-base md:text-lg truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm md:text-sm truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    {/* Metrics - Hidden on mobile, visible on tablet+ */}
                    <div className="sm:ml-auto w-full sm:w-auto">
                      <span className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 w-full sm:w-auto text-center">
                        {testimonial.metrics}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-6 sm:mt-8">
              {/* Auto-play toggle - Mobile only */}
              <div className="sm:hidden flex items-center gap-2">
                <button
                  onClick={toggleAutoPlay}
                  className={`px-3 py-1.5 rounded-full text-xs ${isAutoPlaying ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'}`}
                >
                  {isAutoPlaying ? 'Auto: ON' : 'Auto: OFF'}
                </button>
                <span className="text-xs text-muted-foreground">Swipe to navigate</span>
              </div>

              {/* Desktop auto-play toggle */}
              

              {/* Dots and Arrows */}
              <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-none">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>
                
                {/* Dots - Hidden on mobile, visible on tablet+ */}
                <div className="hidden sm:flex gap-1.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-primary w-8 h-3"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 h-3"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile dots */}
                <div className="flex sm:hidden gap-1.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeIndex
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>
              </div>

              {/* Testimonial counter - Desktop only */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono">{activeIndex + 1}</span>
                <span>/</span>
                <span className="font-mono">{testimonials.length}</span>
              </div>
            </div>

            {/* Swipe hint for mobile */}
            <div className="sm:hidden flex justify-center mt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ChevronLeft className="w-3 h-3" />
                <span>Swipe to navigate</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Alternative View: Grid for tablets and larger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <h3 className="font-display font-semibold text-foreground text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8">
            More Client Feedback
          </h3>
          
          {/* Grid Layout - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card p-5 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile alternative: Scrollable horizontal cards */}
          <div className="md:hidden mt-6">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="glass-card p-5 rounded-xl min-w-[280px] snap-start flex-shrink-0"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-foreground text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">Scroll horizontally for more</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
            Rated 5 stars on major platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {["Google Reviews", "Clutch", "Trustpilot", "UpCity"].map((platform) => (
              <div key={platform} className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-lg hover:bg-card/50 transition-colors">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-xs sm:text-sm">{platform}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;