
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background/90" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 max-w-4xl"
        >
          <span className="inline-block py-4 px-3 border border-border/20 rounded-full text-xs font-medium tracking-[0.3em] text-foreground-300 bg-background/40 backdrop-blur-sm">
            EST. 2024 • MARIANA TRENCH
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground tracking-tight leading-[0.9]">
            ABYSSAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-background-200 to-background-400">PRIME</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Dining at the edge of the world. Where the intense heat of charcoal meets the eternal cold of the deep.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-background-600 hover:bg-background-500 text-foreground font-semibold tracking-widest text-sm uppercase transition-all duration-300 w-full md:w-auto">
              Reserve Table
            </button>
            <button className="px-8 py-4 bg-transparent border border-border/20 hover:bg-background/5 text-foreground font-medium tracking-widest text-sm uppercase transition-all duration-300 backdrop-blur-sm w-full md:w-auto">
              View Cellar
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Begin Descent</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </div>
  );
}

export default Hero;
