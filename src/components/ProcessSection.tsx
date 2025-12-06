import { Phone, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We start with a deep dive into your business, goals, challenges, and vision. Understanding you is our first priority.",
    details: ["Business Analysis", "Goal Setting", "Competitor Research"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Based on our discovery, we craft a tailored strategy with clear milestones, KPIs, and actionable roadmap.",
    details: ["Custom Strategy", "Timeline Creation", "Resource Allocation"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution & Optimization",
    description:
      "Our expert team brings the strategy to life, continuously testing and optimizing for peak performance.",
    details: ["Implementation", "A/B Testing", "Real-time Adjustments"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Reporting & Scaling",
    description:
      "Transparent reporting with actionable insights. When we hit targets, we scale what works for exponential growth.",
    details: ["Monthly Reports", "Performance Review", "Scale Strategy"],
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary/80 text-sm font-semibold tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
            A Roadmap Designed  
            <span className="block neon-text-gradient mt-1">For Your Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A refined, streamlined, and proven framework to transform your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-20">

          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-20" : "lg:pl-20"}`}>
                    <div
                      className={`p-8 rounded-2xl backdrop-blur-xl 
                      border border-white/10 bg-card/40 shadow-xl 
                      hover:shadow-2xl transition-all duration-300 
                      hover:bg-card/60 hover:-translate-y-1 
                      ${isEven ? "lg:ml-auto" : "lg:mr-auto"} 
                      max-w-md`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-5 ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <span className="text-primary font-semibold text-sm">
                            Step {step.number}
                          </span>
                          <h3 className="font-display text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {step.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? "lg:justify-end" : ""
                        }`}
                      >
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1 text-xs bg-muted/30 rounded-full border border-muted/40 text-muted-foreground"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-background border-4 border-primary shadow-[0_0_25px_rgba(0,200,255,0.6)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
  <p className="text-muted-foreground mb-6 text-lg">
    Ready to start your transformation journey?
  </p>
  <a
    href="tel:+917379340224"
    className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold tracking-wide shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all"
    onClick={(e) => {
      e.preventDefault();
      window.location.href = 'tel:+917379340224';
    }}
  >
    Begin With Step 1
  </a>
</div>
      </div>
    </section>
  );
};

export default ProcessSection;
