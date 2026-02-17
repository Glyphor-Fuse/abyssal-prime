
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function DepthJournal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background color interpolation based on depth
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [
      "rgba(1, 2, 4, 0)",      // Surface (blends with hero)
      "rgba(15, 22, 35, 0.8)", // Twilight Zone
      "rgba(2, 6, 23, 0.95)",  // Midnight Zone
      "rgba(0, 0, 0, 1)",      // The Abyss
      "rgba(0, 0, 0, 1)",
    ]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const depths = [
    { label: "SURFACE", depth: "0m", desc: "The descent begins.", color: "text-foreground-200" },
    { label: "TWILIGHT", depth: "200m", desc: "Light fades. Flavors intensify.", color: "text-foreground-300" },
    { label: "MIDNIGHT", depth: "1000m", desc: "Bioluminescence only.", color: "text-foreground-400" },
    { label: "ABYSS", depth: "4000m", desc: "Prime cuts. Absolute silence.", color: "text-foreground-500" },
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <motion.div 
        className="sticky top-0 left-0 h-screen w-full -z-10 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor }}
      />
      
      <div className="sticky top-1/2 left-8 md:left-24 transform -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-12 border-l-2 border-border/10 pl-6 relative">
          <motion.div 
            className="absolute left-[-2px] top-0 w-[2px] bg-background-400 h-12 box-shadow-glow"
            style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "90%"]) }}
          />
          {depths.map((d, i) => (
            <div key={i} className="flex flex-col">
              <span className={cn("text-xs tracking-[0.3em] font-medium", d.color)}>{d.depth}</span>
              <span className="text-foreground/40 text-[10px] uppercase tracking-widest">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-24 space-y-96">
        {/* Content Blocks that appear at different depths */}
        <DepthCard 
          title="The Twilight Zone" 
          subtitle="Appetizers & Cocktails"
          text="Where sunlight fades, our mixologists craft elixirs that glow with ethereal light. Pair with chilled seafood towers harvested from the coldest currents."
          align="right"
          image="/images/cocktail.png"
        />
         <DepthCard 
          title="The Midnight Zone" 
          subtitle="Main Courses"
          text="In total darkness, only the boldest flavors survive. Our A5 Wagyu is seared over binchotan charcoal, creating a beacon of warmth in the cool deep."
          align="left"
          image="/images/steak.png"
        />
         <DepthCard 
          title="The Abyss" 
          subtitle="Chef's Table"
          text="The deepest point. An exclusive 8-seat glass-walled chamber surrounded by the giants of the deep. A tasting menu known only to a few."
          align="right"
          image="/images/chef.png"
        />
      </div>
    </div>
  );
}

function DepthCard({ title, subtitle, text, align, image }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-20%" }}
      className={cn(
        "flex flex-col md:flex-row gap-12 items-center",
        align === "left" ? "md:flex-row-reverse" : ""
      )}
    >
      <div className="flex-1 space-y-6">
        <h3 className="text-foreground-400 tracking-widest text-sm uppercase font-semibold">{subtitle}</h3>
        <h2 className="text-4xl md:text-5xl font-display text-foreground">{title}</h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-light border-l border-border/20 pl-6">
          {text}
        </p>
        <button className="px-8 py-3 bg-background/5 hover:bg-background/10 border border-border/10 text-foreground tracking-widest text-xs uppercase transition-all duration-300 backdrop-blur-md">
          Explore Menu
        </button>
      </div>
      <div className="flex-1 relative group">
        <div className="absolute inset-0 bg-background-500/10 blur-3xl rounded-full group-hover:bg-background-500/20 transition-all duration-700" />
        <img 
          src={image} 
          alt={title} 
          className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-border/10"
        />
      </div>
    </motion.div>
  );
}

export default DepthJournal;
