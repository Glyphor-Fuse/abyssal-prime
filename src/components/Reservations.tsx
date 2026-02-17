
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Reservations() {
  return (
    <section className="py-24 relative overflow-hidden bg-background flex items-center justify-center min-h-[80vh]">
      {/* Abstract Beams Background - simplified for stability */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-background-500/20 blur-[100px] rounded-full animate-pulse" />
           <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-background-500/20 blur-[120px] rounded-full mix-blend-screen" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4">
        <div className="bg-card/90 backdrop-blur-xl border border-border/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-foreground-400 text-xs font-bold tracking-[0.2em] uppercase">Secure Your Passage</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-4">Boarding Manifest</h2>
            <p className="text-foreground/60">Reservations are released 30 days in advance. Formal attire required.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-foreground/50 uppercase tracking-wider">Date</label>
                <input type="date" className="w-full bg-background border border-border/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-border-500/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-foreground/50 uppercase tracking-wider">Guests</label>
                <select className="w-full bg-background border border-border/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-border-500/50 transition-colors">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Event</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs text-foreground/50 uppercase tracking-wider">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-background border border-border/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-border-500/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-foreground/50 uppercase tracking-wider">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-background border border-border/10 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-border-500/50 transition-colors" />
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-background-600 to-background-500 hover:from-background-500 hover:to-background-400 text-foreground font-bold tracking-widest uppercase py-4 rounded-md transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Request Reservation
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40">
            <p>12°08'12"N 142°14'52"E • Mariana Trench</p>
            <p>+1 (555) 019-2834</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservations;
