
import { cn } from "@/lib/utils";

export function BentoMenu() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-background-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display text-foreground">Culinary Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constructed from the finest elements of land and sea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* Large Item */}
          <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl border border-border/10 bg-card">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <img 
              src="/images/steak.png" 
              alt="Signature Steak" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="text-foreground-400 text-xs tracking-widest uppercase font-semibold mb-2 block">Signature</span>
              <h3 className="text-3xl font-display text-foreground mb-2">A5 Miyazaki Wagyu</h3>
              <p className="text-foreground/70 text-sm max-w-md">
                Seared over 1,000-year-old binchotan charcoal. Served with truffle-infused ponzu and deep-sea salt.
              </p>
            </div>
          </div>

          {/* Tall Item */}
          <div className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-xl border border-border/10 bg-card">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <img 
              src="/images/wine.png" 
              alt="Wine Pairing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="text-foreground-400 text-xs tracking-widest uppercase font-semibold mb-2 block">The Cellar</span>
              <h3 className="text-2xl font-display text-foreground mb-2">Submerged Vintages</h3>
              <p className="text-foreground/70 text-sm">
                Aged 20 meters underwater for distinct pressure profiles.
              </p>
            </div>
          </div>

          {/* Small Item 1 */}
          <div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-border/10 bg-muted/30 p-8 flex flex-col justify-center items-center text-center hover:bg-background/5 transition-colors">
            <h3 className="text-4xl font-display text-foreground-200 mb-2">28<span className="text-base align-top text-foreground/50">Days</span></h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Dry Aged</p>
          </div>

           {/* Small Item 2 */}
           <div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-border/10 bg-muted/30 p-8 flex flex-col justify-center items-center text-center hover:bg-background/5 transition-colors">
             <h3 className="text-4xl font-display text-foreground-200 mb-2">240<span className="text-base align-top text-foreground/50">°F</span></h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Slow Roast</p>
          </div>

           {/* Wide Item */}
           <div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-border/10 bg-card relative">
             <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
            <img 
              src="/images/cocktail.png" 
              alt="Cocktail" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-xl font-display text-foreground">Bioluminescence</h3>
              <p className="text-xs text-foreground/60 uppercase tracking-widest">Cocktail Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoMenu;
