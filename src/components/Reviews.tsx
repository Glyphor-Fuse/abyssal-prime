
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Eleanor V.",
    role: "Michelin Guide",
    quote: "A masterclass in atmospheric dining. The descent feels real, and the steak is otherworldly.",
  },
  {
    name: "Marcus T.",
    role: "Sommelier Weekly",
    quote: "The underwater aging process gives their Cabernet a salinity that is impossible to replicate on land.",
  },
  {
    name: "Sarah Jenkins",
    role: "Verified Guest",
    quote: "Eating dinner while a hammerhead shark glides past your table is an experience I will never forget.",
  },
  {
    name: "Dr. Aris Thorne",
    role: "Marine Biologist",
    quote: "Surprisingly accurate depictions of the zones. The 'Midnight Zone' tasting menu is a triumph.",
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-t border-border/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-display text-foreground text-center mb-16 tracking-wide">
          Voices from the Deep
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-muted/40 border border-border/5 p-8 rounded-lg backdrop-blur-sm hover:bg-muted/60 transition-colors duration-300 flex flex-col gap-4"
            >
              <div className="flex gap-1 text-foreground-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-foreground/80 font-light italic leading-relaxed">"{review.quote}"</p>
              <div className="mt-auto pt-4 border-t border-border/5">
                <p className="text-foreground font-display text-sm">{review.name}</p>
                <p className="text-foreground/40 text-xs uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
