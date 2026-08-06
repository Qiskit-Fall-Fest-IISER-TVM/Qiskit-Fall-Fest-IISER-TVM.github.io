import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "../assets/Hero_2_with_tile.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-fixed">
        <img 
          src={heroBg} 
          alt="Quantum Circuit Background" 
          className="w-full h-full object-cover opacity-65 dark:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background dark:from-background/30 dark:via-background/65 dark:to-background"></div>
      </div>

      {/* Animated Circuit Overlay (CSS/SVG) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated nodes could go here */}
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-mono text-xs md:text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          Fall 2026 • IISER Thiruvananthapuram
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-5xl mb-6"
        >
          IBM Qiskit <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Fall Fest 2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed"
        >
          Explore the frontier of quantum computation. A prestigious hackathon and learning event for the next generation of quantum researchers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg shadow-[0_0_20px_rgba(15,98,254,0.4)] hover:shadow-[0_0_40px_rgba(15,98,254,0.6)] transition-all">
            <a href="#register">
              Register Now <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-border hover:bg-muted">
            <a href="#about">
              Discover More
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </motion.div>
    </section>
  );
}
