import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export const RippleButton = ({ 
  children, 
  onClick, 
  className,
  variant = "primary",
  href
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    if (onClick) onClick();
  };

  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block";
  
  const variantClasses = {
    primary: "bg-electric-blue text-primary hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:scale-105",
    secondary: "bg-card border-2 border-electric-blue text-foreground hover:bg-electric-blue/10 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]",
    outline: "bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]"
  };

  const Element = href ? "a" : "button";

  return (
    <Element
      href={href}
      onClick={handleClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-electric-blue/50 rounded-full"
          initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y }}
          animate={{ width: 300, height: 300, x: ripple.x - 150, y: ripple.y - 150 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ pointerEvents: "none" }}
        />
      ))}
    </Element>
  );
};
