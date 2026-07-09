import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const { title, description } = feature;

  // Configurations for each card style matching the reference image's color tones
  const cardConfigs = [
    {
      bgColor: "bg-[#eef2ff]", // Soft blue/lavender
      numColor: "text-blue-600/80",
      rotateClass: "rotate-[-1.5deg] hover:rotate-0",
      number: "01",
    },
    {
      bgColor: "bg-[#fff8eb]", // Soft peach/orange
      numColor: "text-orange-600/80",
      rotateClass: "rotate-[2deg] hover:rotate-0",
      number: "02",
    },
    {
      bgColor: "bg-[#edfcf2]", // Soft mint/green
      numColor: "text-emerald-600/80",
      rotateClass: "rotate-[-2deg] hover:rotate-0",
      number: "03",
    },
  ];

  const config = cardConfigs[index % cardConfigs.length];

  return (
    <div
      className={`h-full bg-white rounded-[2.25rem] p-4 border border-slate-100 shadow-[0_12px_24px_rgba(16,24,40,0.03),0_4px_8px_rgba(16,24,40,0.02)] transition-all duration-300 ${config.rotateClass} hover:scale-[1.02] hover:shadow-[0_20px_35px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.02)]`}
    >
      {/* Inner Card Colored Container */}
      <div className={`h-full rounded-[1.75rem] p-7 md:p-8 ${config.bgColor} flex flex-col justify-start`}>
        {/* Handwritten number */}
        <div className={`font-handwriting text-5xl font-semibold mb-4 ${config.numColor}`}>
          {config.number}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-base leading-relaxed font-medium/90">
          {description}
        </p>
      </div>
    </div>
  );
}
