import heroBg from "@/assets/Hero_1_without_title.png";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({
  children,
  className = "",
}: SectionBackgroundProps) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/65 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
