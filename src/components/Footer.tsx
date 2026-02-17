
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="text-foreground font-display font-bold tracking-widest text-xl">ABYSSAL</span>
        </div>
        
        <div className="text-foreground/40 text-xs flex gap-6">
          <a href="#" className="hover:text-foreground-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground-400 transition-colors">Press</a>
        </div>

        <p className="text-foreground/20 text-[10px] uppercase tracking-wider">
          © 2024 Abyssal Prime. All depths reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
