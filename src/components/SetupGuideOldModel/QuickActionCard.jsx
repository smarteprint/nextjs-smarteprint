import React from "react";

export default function QuickActionCard({ icon, label }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center w-full max-w-xs min-h-[140px] px-5 py-6 rounded-xl bg-white border border-blue-100 shadow-sm transition-all duration-300 ease-[cubic-bezier(.4,2,.6,1)] hover:scale-[1.04] hover:shadow-md hover:z-20 focus:z-20 active:scale-95 active:shadow-sm cursor-pointer"
      style={{ boxShadow: '0 1px 4px 0 rgba(30,64,175,0.07)', overflow: 'visible' }}
    >
      {/* Subtle animated floating gradient overlays for 4D effect, smaller and less likely to overflow */}
      {/* Removed floating gradients for a clean blue theme */}

      <div className="mb-2 w-12 h-12 flex items-center justify-center relative z-10">
        {icon}
      </div>

      <div className="font-extrabold text-xs sm:text-sm md:text-base text-center leading-tight whitespace-pre-line z-10 text-blue-900 group-hover:text-blue-700 transition-colors duration-200">
        {label}
      </div>

      {/* Minimal border glow on hover, no overflow */}
      <span className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_8px_2px_rgba(30,64,175,0.10)] transition-all duration-300" />
    </div>
  );
}
