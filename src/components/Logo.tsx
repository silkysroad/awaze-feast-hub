import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 200 140" 
      className={cn("text-primary", className)}
      fill="currentColor"
      aria-label="Awaze"
    >
      {/* Gazelle silhouette - simplified geometric shape */}
      <path d="
        M 160 20 
        L 175 5 
        L 178 8 
        L 168 22 
        L 175 25 
        L 180 18 
        L 183 20 
        L 176 30 
        L 170 28 
        L 165 35 
        L 170 50 
        L 175 55 
        L 180 50 
        L 185 55 
        L 178 65 
        L 170 60 
        L 165 70 
        L 170 85 
        L 175 95 
        L 180 115 
        L 178 118 
        L 170 100 
        L 165 105 
        L 168 125 
        L 165 128 
        L 158 108 
        L 150 100 
        L 140 95 
        L 130 100 
        L 125 115 
        L 128 130 
        L 125 133 
        L 118 115 
        L 115 100 
        L 105 95 
        L 95 100 
        L 90 115 
        L 92 130 
        L 88 132 
        L 82 115 
        L 80 95 
        L 70 85 
        L 55 80 
        L 40 82 
        L 25 88 
        L 20 85 
        L 35 75 
        L 50 70 
        L 65 72 
        L 80 75 
        L 95 70 
        L 110 65 
        L 125 60 
        L 140 55 
        L 150 45 
        L 155 35 
        L 160 20
        Z
        M 165 32 
        L 162 35 
        L 165 38 
        L 168 35 
        Z
      " 
      strokeWidth="3"
      stroke="currentColor"
      strokeLinejoin="round"
      />
    </svg>
  );
}
