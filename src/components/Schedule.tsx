import { motion } from "framer-motion";

export function Schedule() {
  const scheduleData = [
    {
      day: "Day 1: Fundamentals",
      date: "Friday, Fall 2026",
      events: [
        { time: "09:00 AM", title: "Registration & Breakfast", type: "logistic" },
        { time: "10:30 AM", title: "Opening Keynote", type: "keynote" },
        { time: "11:30 AM", title: "Intro to Quantum Computing", type: "workshop" },
        { time: "02:00 PM", title: "Getting Started with Qiskit", type: "workshop" },
        { time: "05:00 PM", title: "Hackathon Team Formation", type: "logistic" },
      ]
    },
    {
      day: "Day 2: Deep Dive",
      date: "Saturday, Fall 2026",
      events: [
        { time: "09:00 AM", title: "Hackathon Kickoff", type: "keynote" },
        { time: "11:00 AM", title: "Advanced Quantum Algorithms", type: "workshop" },
        { time: "03:00 PM", title: "Running on Real Hardware", type: "workshop" },
        { time: "08:00 PM", title: "Mentorship Office Hours", type: "logistic" },
      ]
    },
    {
      day: "Day 3: Innovation",
      date: "Sunday, Fall 2026",
      events: [
        { time: "12:00 PM", title: "Hacking Ends & Submissions", type: "logistic" },
        { time: "01:00 PM", title: "Project Presentations", type: "keynote" },
        { time: "04:00 PM", title: "Closing Ceremony & Awards", type: "keynote" },
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'text-primary border-primary bg-primary/10';
      case 'workshop': return 'text-secondary border-secondary bg-secondary/10';
      default: return 'text-muted-foreground border-border bg-muted';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Event Schedule</h2>
          <p className="text-lg text-muted-foreground">Three days of intense learning and building.</p>
        </motion.div>

        <div className="space-y-16">
          {scheduleData.map((day, dayIndex) => (
            <motion.div 
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.1 }}
            >
              <div className="border-b border-border pb-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">{day.day}</h3>
                <p className="text-muted-foreground font-mono text-sm mt-1">{day.date}</p>
              </div>
              
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 group">
                    <div className="w-32 font-mono text-sm text-muted-foreground shrink-0">
                      {event.time}
                    </div>
                    <div className="flex-1 flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 group-hover:border-border transition-colors">
                      <div className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded border ${getTypeColor(event.type)}`}>
                        {event.type}
                      </div>
                      <div className="font-medium text-foreground">{event.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
