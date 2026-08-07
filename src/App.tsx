import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SpeakersPage from "./pages/SpeakersPage";
import SchedulePage from "./pages/SchedulePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="qiskit-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">

        <Navbar />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/speakers"
              element={<SpeakersPage />}
            />

            <Route
              path="/schedule"
              element={<SchedulePage />}
            />

            <Route
              path="/register"
              element={<RegisterPage />}
            />

          </Routes>
        </main>

        <Footer />

        <Toaster />

      </div>
    </ThemeProvider>
  );
}

export default App;