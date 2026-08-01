import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyAttend } from "./components/WhyAttend";
import { Schedule } from "./components/Schedule";
import { Speakers } from "./components/Speakers";
import { Registration } from "./components/Registration";
import { Venue } from "./components/Venue";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="qiskit-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyAttend />
          <Schedule />
          <Speakers />
          <Registration />
          <Venue />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
