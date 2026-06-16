"use client";

import { useRef, useState, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.4)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState({
    background: "transparent",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowStyle({
        background: `radial-gradient(300px circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`,
      });
    },
    [glowColor]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setGlowStyle({ background: "transparent" });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Mouse-tracking glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          ...glowStyle,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
