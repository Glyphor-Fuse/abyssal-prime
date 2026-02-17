
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border border-border-500/30 flex items-center justify-center group-hover:border-border-400 transition-colors">
            <div className="w-2 h-2 bg-background-400 rounded-full box-shadow-glow" />
          </div>
          <span className="text-foreground font-display font-bold tracking-widest text-lg">ABYSSAL</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Experience", "Menu", "Cellar", "Private Events"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-foreground/70 hover:text-foreground-300 text-xs uppercase tracking-[0.2em] transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-background text-foreground text-xs font-bold uppercase tracking-widest hover:bg-background-100 transition-colors">
            Book
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 border-b border-border/10 backdrop-blur-xl p-6 flex flex-col gap-6">
          {["Experience", "Menu", "Cellar", "Private Events"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-foreground text-lg font-display"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 bg-background-600 text-foreground font-bold uppercase tracking-widest">
            Book Table
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
