import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSteps = [
  {
    title: "What do you need?",
    options: [
      "Website Design & Development",
      "Performance Marketing",
      "SEO & Content",
      "Social Media Management",
      "Complete Digital Transformation",
    ],
  },
  {
    title: "What's your budget range?",
    options: [
      "$1,000 - $5,000",
      "$5,000 - $15,000",
      "$15,000 - $50,000",
      "$50,000+",
      "Let's discuss",
    ],
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = (value: string) => {
    if (currentStep === 0) {
      setFormData({ ...formData, service: value });
    } else if (currentStep === 1) {
      setFormData({ ...formData, budget: value });
    }
    setCurrentStep(currentStep + 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setCurrentStep(3); // Show success state
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
            <br />
            <span className="neon-text-gradient">Extraordinary Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Book a free 15-minute strategy call and discover how we can
            accelerate your growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {[0, 1, 2].map((step) => (
                <div
                  key={step}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    step <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            {/* Step 1 & 2: Multiple Choice */}
            {currentStep < 2 && (
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  {formSteps[currentStep].title}
                </h3>
                <div className="space-y-3">
                  {formSteps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center justify-between"
                    >
                      <span className="text-foreground">{option}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-4 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    ← Go back
                  </button>
                )}
              </div>
            )}

            {/* Step 3: Contact Details */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Almost there! Your details
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Tell us more (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-foreground resize-none"
                      placeholder="Share your goals, challenges, or any specific requirements..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={goBack}
                      className="px-6 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neon flex-1 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Success State */}
            {currentStep === 3 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/30">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours
                  with a personalized strategy.
                </p>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setFormData({
                      service: "",
                      budget: "",
                      name: "",
                      email: "",
                      company: "",
                      message: "",
                    });
                  }}
                  className="btn-ghost-neon"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="glass-card p-6">
              <h4 className="font-display font-bold text-lg text-foreground mb-4">
                Prefer to talk directly?
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium block">
                      +91 7379340224
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Call us anytime
                    </span>
                  </div>
                </a>
                <a
                  href="https://wa.me/7379340224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/30">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium block">
                      WhatsApp Us
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Quick response guaranteed
                    </span>
                  </div>
                </a>
                <a
                  href="mailto:hello@nexus.agency"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium block">
                      hello@MediaOnStake.agency
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Email us anytime
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Info */}
            <div className="glass-card p-6">
              <h4 className="font-display font-bold text-lg text-foreground mb-4">
                Our Office
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <span className="text-foreground block">
                      MVD Valley GLA University Mathura
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Chaumuha Mathura India 
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <span className="text-foreground block">Business Hours</span>
                    <span className="text-muted-foreground text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM (PST)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-2 h-48 overflow-hidden">
              <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Interactive Map
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
