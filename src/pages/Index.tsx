import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MediaOnStake - Digital Growth Agency | Performance Marketing & Web Development</title>
        <meta
          name="description"
          content="MediaOnsStake is a premium digital agency specializing in performance marketing, SEO, web development, and brand strategy. We help businesses grow, scale, and dominate their market."
        />
        <meta
          name="keywords"
          content="digital agency, performance marketing, SEO, web development, brand strategy, social media marketing"
        />
        <link rel="canonical" href="https://www.mediaonstake.com/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSolutionSection />
          <ServicesSection />
          <ResultsSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
