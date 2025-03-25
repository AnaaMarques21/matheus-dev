import { ReactNode } from "react";
import AnimatedText from "./AnimatedText";
import { useIsMobile } from "../hooks/use-mobile";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) => {
  const isMobile = useIsMobile();

  return (
    <AnimatedText
      className={`glass-panel rounded-lg p-5 sm:p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-500 ${
        isMobile
          ? "active:scale-99 active:-translate-y-1"
          : "hover:-translate-y-2"
      } ${className}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 rounded-lg"></div>

      {/* Icon with animation */}
      <div className="rounded-full bg-purple-800/30 p-2 sm:p-3 w-fit mb-3 sm:mb-4 text-purple-400 relative z-10 transition-all duration-500 group-hover:bg-purple-700/40 group-hover:text-purple-300 group-hover:scale-110 group-hover:shadow-md group-active:bg-purple-700/40 group-active:text-purple-300 group-active:scale-110">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10 transition-all duration-500 group-hover:text-gradient group-active:text-gradient">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground relative z-10 transition-all duration-500 group-hover:text-foreground/90 group-active:text-foreground/90">
        {description}
      </p>

      {/* Decorative corner element that appears on hover */}
      <div className="absolute -bottom-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
    </AnimatedText>
  );
};

export default ServiceCard;
