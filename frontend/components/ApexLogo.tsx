import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function ApexLogo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      
      {/* Geometric Apex 'A' Emblem */}
      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800 p-[1.5px] shadow-lg shadow-teal-500/10 group-hover:shadow-teal-500/25 group-hover:scale-105 transition-all">
        <div className="w-full h-full rounded-[10.5px] bg-slate-950 flex items-center justify-center overflow-hidden relative">
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* SVG Apex Peak Emblem */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 relative z-10 text-teal-400 drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
          >
            {/* Outer Peak Frame */}
            <path
              d="M20 6L33 30H27L20 17L13 30H7L20 6Z"
              fill="url(#apex-gradient-1)"
            />
            {/* Inner Core Chevron */}
            <path
              d="M20 13L25.5 24H21.5L20 21L18.5 24H14.5L20 13Z"
              fill="#FFFFFF"
              className="opacity-90"
            />
            {/* Dynamic Accent Bar */}
            <rect
              x="12"
              y="28"
              width="16"
              height="2.5"
              rx="1.25"
              fill="url(#apex-gradient-2)"
            />

            <defs>
              <linearGradient
                id="apex-gradient-1"
                x1="7"
                y1="6"
                x2="33"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#34D399" />
                <stop offset="0.5" stopColor="#14B8A6" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>

              <linearGradient
                id="apex-gradient-2"
                x1="12"
                y1="28"
                x2="28"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              APEX
            </span>
            <span className="text-xl font-bold tracking-tight text-teal-600 dark:text-teal-400">
              GLOBAL
            </span>
          </div>
          <span className="text-[9.5px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase -mt-0.5 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
            Industries & Engineering
          </span>
        </div>
      )}

    </div>
  );
}
