import { motion } from "framer-motion";
import aboutBg from "../assets/venue-bg.png";
import { SiQiskit } from "react-icons/si";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-secondary font-mono text-sm font-medium tracking-wider uppercase">
              <SiQiskit className="w-5 h-5" />
              <span>About The Event</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              The Quantum <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Frontier</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                IBM Qiskit Fall Fest is a global series of quantum computing events organized by students and supported by IBM. In 2026, IISER Thiruvananthapuram is proud to host one of the most prestigious editions in the region.
              </p>
              <p>
                Whether you're writing your first quantum circuit or researching complex entanglement, the Qiskit Fall Fest offers a deep dive into Qiskit — IBM's open-source quantum software development framework.
              </p>
              <p>
                Join us for a rigorous, intellect-driven hackathons, workshops, guided by experts from IBM Quantum and leading researchers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border">
              <div>
                <div className="text-4xl font-light text-foreground mb-2">48<span className="text-primary text-2xl font-bold">h</span></div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Hackathon</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground mb-2">15<span className="text-secondary text-2xl font-bold">+</span></div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Workshops</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
              <img 
                src={aboutBg} 
                alt="Abstract Quantum Visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-secondary/30 rounded-full blur-[1px]"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/20 rounded-full blur-[1px]"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
