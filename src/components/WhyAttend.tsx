import { motion } from "framer-motion";
import { Code2, BookOpen, Network, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBackground } from "@/components/SectionBackground";

export function WhyAttend() {
  const reasons = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Master Qiskit",
      description: "Learn IBM's quantum SDK from the ground up through expert-led workshops and hands-on tutorials."
    },
    {
      icon: <Code2 className="w-8 h-8 text-secondary" />,
      title: "Quantum Hackathon",
      description: "Compete in a 48-hour challenge. Build real quantum circuits and run them on IBM quantum hardware."
    },
    {
      icon: <Network className="w-8 h-8 text-accent" />,
      title: "Elite Networking",
      description: "Connect with IBM Quantum researchers, IISER faculty, and peers from across the country."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Prizes & Recognition",
      description: "Win exclusive IBM Quantum swag, certificates, and recognition for your innovative quantum solutions."
    }
  ];

  return (
    <SectionBackground className="py-24 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Why Attend?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Step into the quantum era. This isn't just a hackathon—it's an accelerator for your journey into quantum computing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-sm border border-border/50">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}
