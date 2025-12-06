import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isPast?: boolean;
  category: string;
}

const categoryColors: Record<string, string> = {
  Music: "bg-prism-pink",
  Sports: "bg-prism-emerald",
  Innovation: "bg-prism-cyan",
  Recreation: "bg-prism-amber",
  Cultural: "bg-prism-violet",
};

const EventCard = ({ title, date, time, location, description, image, isPast = false, category }: EventCardProps) => {
  return (
    <div className={cn("prism-card overflow-hidden", isPast && "opacity-70")}>
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className={cn("absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white", categoryColors[category] || "bg-prism-violet")}>
          {category}
        </div>
        {isPast && (
          <div className="absolute inset-0 bg-background/50 flex items-center justify-center rounded-xl">
            <span className="text-sm font-semibold text-muted-foreground">Event Completed</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={14} className="text-prism-cyan" />
          {date}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={14} className="text-prism-amber" />
          {time}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-prism-pink" />
          {location}
        </div>
      </div>
      {!isPast && (
        <Button variant="hero" size="sm" className="w-full">
          Register Now
        </Button>
      )}
    </div>
  );
};

export default EventCard;
