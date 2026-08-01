import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Speakers() {
  const speakers = [
    {
      name: "TBA",
      role: "Quantum Researcher",
      org: "IBM Quantum",
      initials: "IBM"
    },
    {
      name: "TBA",
      role: "Professor of Physics",
      org: "IISER Thiruvananthapuram",
      initials: "IIS"
    },
    {
      name: "TBA",
      role: "Qiskit Advocate",
      org: "Global Qiskit Community",
      initials: "QA"
    }
  ];

  return (
    <section id="speakers" className="py-24 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn directly from the experts shaping the future of quantum computation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border/60 text-center"
            >
              <Avatar className="w-32 h-32 mb-6 border-4 border-background shadow-xl">
                <AvatarFallback className="bg-muted text-2xl font-light text-muted-foreground">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1 text-foreground">{speaker.name}</h3>
              <p className="text-primary font-medium mb-1">{speaker.role}</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                {speaker.org.includes('IBM') && <span className="font-bold text-xs tracking-widest">IBM</span>}
                {speaker.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
