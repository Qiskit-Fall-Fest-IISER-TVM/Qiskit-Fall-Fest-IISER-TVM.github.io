import { motion } from "framer-motion";
import { MapPin, Calendar, Mail } from "lucide-react";
import iiserLogo from "@assets/Logo_1782481254440.png";
import venueBg from "@assets/venue-bg.png";

export function Venue() {
  return (
    <section id="venue" className="relative py-24 overflow-hidden">
      {/* Background image with reduced brightness */}
      <div className="absolute inset-0 z-0">
        <img
          src={venueBg}
          alt="Venue background"
          className="w-full h-full object-cover opacity-70 dark:opacity-70"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Venue</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hosted at the stunning campus of Indian Institute of Science Education and Research (IISER), Thiruvananthapuram — nestled in the lush Western Ghats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IISER Logo card */}
          <motion.div
            initial={{ opacity: 0.1, x: -30 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative p-12 rounded-3xl border border-border/50 bg-card/70 backdrop-blur-md flex flex-col items-center gap-6 max-w-sm w-full shadow-xl">
              <img
                src={iiserLogo}
                alt="IISER Thiruvananthapuram"
                className="h-24 w-auto object-contain dark:brightness-0 dark:invert"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">IISER Thiruvananthapuram</h3>
                <p className="text-sm text-muted-foreground">Indian Institute of Science Education and Research</p>
              </div>
              <div className="w-full h-px bg-border"></div>
              <p className="text-center text-sm text-muted-foreground leading-relaxed">
                Maruthamala PO, Vithura<br />
                Thiruvananthapuram, Kerala 695551<br />
                India
              </p>
            </div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0.1, x: 30 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary mt-1 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Event Dates</h3>
                <p className="text-muted-foreground">Fall 2026 — Exact dates to be announced. Stay tuned!</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent mt-1 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Contact</h3>
                <a
                  href="mailto:qiskitfallfest@iisertvm.ac.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  qiskitfallfest@iisertvm.ac.in
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
