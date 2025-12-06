import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
}

const SectionTitle = ({ title, subtitle, className, gradient = true }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", gradient && "gradient-text")}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
