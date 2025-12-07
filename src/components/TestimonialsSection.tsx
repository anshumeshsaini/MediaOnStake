import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
        "MediaOnStake’s development and UI excellence helped establish a powerful digital presence for my personal portfolio. The animations, responsiveness, and unique design language helped attract clients instantly.",
      rating: 5,
      metrics: "Client conversions increased by 300%"
    }

  

  
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients
            <br />
            <span className="neon-text-gradient">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what business owners
            and marketing leaders have to say about working with us.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Testimonial Card */}
            <div className="glass-card p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 20,
                    position: index === activeIndex ? "relative" : "absolute",
                  }}
                  transition={{ duration: 0.4 }}
                  className={index === activeIndex ? "" : "inset-0 p-8 md:p-12"}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        {testimonial.metrics}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
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
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground text-sm mb-6">
            Rated 5 stars on major platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Google Reviews", "Clutch", "Trustpilot", "UpCity"].map((platform) => (
              <div key={platform} className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">{platform}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
