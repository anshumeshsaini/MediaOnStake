import { Zap, Twitter, Linkedin, Instagram, Facebook, ArrowUp, Sparkles, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import logo from '../assets/logo.jpg'

const footerLinks = {
  services: [
    { name: "Performance Marketing", href: "#services", icon: TrendingUp },
    { name: "SEO & Content", href: "#services", icon: Sparkles },
    { name: "Web Development", href: "#services", icon: Zap },
    { name: "Brand Strategy", href: "#services", icon: Shield },
    { name: "Social Media", href: "#services", icon: "🌐" },
  ],
  company: [
    { name: "About Us", href: "#", badge: "New" },
    { name: "Case Studies", href: "#portfolio", badge: "12+" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Free Audit", href: "#contact", highlight: true },
    { name: "ROI Calculator", href: "#", highlight: false },
    { name: "Marketing Guide", href: "#", highlight: false },
    { name: "SEO Checklist", href: "#", highlight: false },
    { name: "Help Center", href: "#", highlight: false },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", gradient: "from-blue-400 to-sky-600" },
  { icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
  { icon: Instagram, href: "https://www.instagram.com/mediaonstake/", label: "Instagram", gradient: "from-purple-500 to-pink-600" },
  { icon: Facebook, href: "#", label: "Facebook", gradient: "from-blue-500 to-blue-700" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden pt-20 pb-12 border-t border-border/50 bg-gradient-to-b from-background via-background to-background/95">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-primary/20 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/25 animate-pulse delay-700"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <a href="#" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                    <img src={logo} alt="" />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-md -z-10 group-hover:bg-primary/20 transition-colors"></div>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    MediaOnStake
                  </span>
                  <span className="text-primary animate-pulse">.</span>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent mt-1 rounded-full"></div>
                </div>
              </a>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md relative pl-4 border-l-2 border-primary/30">
                We build brands that grow, scale, and dominate. Your success is our mission.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative w-11 h-11 rounded-xl bg-muted/50 backdrop-blur-sm border border-border flex items-center justify-center group-hover:bg-transparent group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Trust Badge */}
              
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services with Icons */}
            <div className="space-y-6">
              <h4 className="font-display font-semibold text-lg text-foreground relative inline-block">
                Services
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => {
                  const Icon = link.icon as any;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          {typeof Icon === 'string' ? (
                            <span className="text-sm">{Icon}</span>
                          ) : (
                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {link.name}
                        </span>
                        <ArrowUp className="w-3 h-3 ml-auto rotate-45 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company with Badges */}
            <div className="space-y-6">
              <h4 className="font-display font-semibold text-lg text-foreground relative inline-block">
                Company
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
                    >
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          link.badge === 'New' 
                            ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                            : link.badge === 'Hiring'
                            ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                            : 'bg-primary/10 text-primary border border-primary/20'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                      <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div className="space-y-6">
              <h4 className="font-display font-semibold text-lg text-foreground relative inline-block">
                Resources
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`group flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                        link.highlight 
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <span className={`text-sm ${
                        link.highlight 
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground group-hover:text-foreground'
                      } transition-colors`}>
                        {link.name}
                      </span>
                      {link.highlight && (
                        <Sparkles className="w-4 h-4 text-primary" />
                      )}
                      {!link.highlight && (
                        <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} MediaOnStake. All rights reserved.
            </p>
            <div className="hidden md:flex items-center gap-6">
              <div className="h-4 w-px bg-border"></div>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative text-sm text-muted-foreground group-hover:text-foreground">
              Back to Top
            </span>
            <div className="relative w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
            </div>
          </button>
        </div>

        {/* Achievement Badges */}
      

      </div>
    </footer>
  );
};

export default Footer;