
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DepthJournal } from "@/components/DepthJournal";
import { BentoMenu } from "@/components/BentoMenu";
import { Reviews } from "@/components/Reviews";
import { Reservations } from "@/components/Reservations";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navbar />
          <Hero />
          <DepthJournal />
          <BentoMenu />
          <Reviews />
          <Reservations />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
