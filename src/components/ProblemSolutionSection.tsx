import { Player } from '@lottiefiles/react-lottie-player';
import trafficAnimation from "../assets/animation/traffic.json";
import salesAnimation from "../assets/animation/sales.json";
import websiteAnimation from "../assets/animation/website.json";
import socialAnimation from "../assets/animation/social.json";
import adsAnimation from "../assets/animation/DigitalMarketing.json";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  TrendingDown,
  ShoppingCart,
  Globe,
  Users,
  Megaphone,
  TrendingUp,
  BarChart3,
  Palette,
  Sparkles,
  Target,
} from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Low Traffic",
    description: "Website getting no visitors?",
    solution: "SEO Growth Strategy",
    solutionIcon: TrendingUp,
    solutionDesc: "Organic traffic that converts",
    problemAnimation: trafficAnimation,
    solutionAnimation: trafficAnimation,
  },
  {
    icon: ShoppingCart,
    title: "No Sales",
    description: "Traffic but zero conversions?",
    solution: "High-Converting Ads",
    solutionIcon: BarChart3,
    solutionDesc: "ROI-focused campaigns",
    problemAnimation: salesAnimation,
    solutionAnimation: salesAnimation,
  },
  {
    icon: Globe,
    title: "Poor Website",
    description: "Outdated & non-functional site?",
    solution: "Modern Website",
    solutionIcon: Palette,
    solutionDesc: "Stunning, fast, converting",
    problemAnimation: websiteAnimation,
    solutionAnimation: websiteAnimation,
  },
  {
    icon: Users,
    title: "No Social Presence",
    description: "Invisible on social media?",
    solution: "Branding + Content",
    solutionIcon: Sparkles,
    solutionDesc: "Engaging social strategy",
    problemAnimation: socialAnimation,
    solutionAnimation: socialAnimation,
  },
  {
    icon: Megaphone,
    title: "Weak Ads",
    description: "Spending but not earning?",
    solution: "Funnel Building",
    solutionIcon: Target,
    solutionDesc: "Full-funnel optimization",
    problemAnimation: adsAnimation,
    solutionAnimation: adsAnimation,
  },
];

const ProblemCard = ({
  problem,
  index,
}: {
  problem: (typeof problems)[0];
  index: number;
}) => {
  const [showFallback, setShowFallback] = useState(false);
  const [showSolutionFallback, setShowSolutionFallback] = useState(false);
  const Icon = problem.icon;
  const SolutionIcon = problem.solutionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative h-80 perspective-1000"
    >
      <motion.div
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Problem */}
        <div
          className="absolute inset-0 glass-card-hover p-6 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Lottie Animation */}
          <div className="w-32 h-32 mb-4 flex items-center justify-center relative">
            {!showFallback ? (
              <Player
                autoplay={true}
                loop={true}
                src={problem.problemAnimation}
                style={{ width: '128px', height: '128px' }}
                onEvent={(event) => {
                  if (event === 'error') setShowFallback(true);
                }}
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-destructive/10 flex items-center justify-center border border-destructive/20">
                <Icon className="w-12 h-12 text-destructive" />
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-xl text-foreground mb-2">
            {problem.title}
          </h3>
          <p className="text-muted-foreground text-sm">{problem.description}</p>
        </div>

        {/* Back - Solution */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center border-primary/30 overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-32 h-32 mb-4 flex items-center justify-center relative">
            {!showSolutionFallback ? (
              <Player
                autoplay={true}
                loop={true}
                src={problem.solutionAnimation}
                style={{ width: '128px', height: '128px' }}
                onEvent={(event) => {
                  if (event === 'error') setShowSolutionFallback(true);
                }}
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30">
                <SolutionIcon className="w-12 h-12 text-primary" />
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-xl text-primary mb-2">
            {problem.solution}
          </h3>
          <p className="text-muted-foreground text-sm">{problem.solutionDesc}</p>
          <span className="mt-4 text-xs text-primary/70">✓ Proven solution</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Your Challenges, Our Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Struggling with Growth?
            <br />
            <span className="neon-text-gradient">We've Got You Covered</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand the pain points businesses face in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
  <a
                
                href="https://wa.me/917379340224?text=Hi%2C%20I%20want%20to%20book%20a%20strategy%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-sm"

              >
            Get Your Free Analysis
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            See how we transform these challenges into opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
