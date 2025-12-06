import { cn } from "@/lib/utils";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  colorClass?: string;
}

const MemberCard = ({ name, role, image, colorClass = "from-prism-violet to-prism-cyan" }: MemberCardProps) => {
  return (
    <div className="prism-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300", colorClass)} />
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
        />
        <div className={cn("absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r", colorClass)} />
      </div>
      <h3 className="font-semibold text-foreground text-lg">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default MemberCard;
