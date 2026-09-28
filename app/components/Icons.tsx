import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function KulcsIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="7" />
      <circle cx="16" cy="16" r="2.4" />
      <path d="M21 21 L38 38" />
      <path d="M32 32 l4 -4" />
      <path d="M36 36 l4 -4" />
    </svg>
  );
}

export function KesIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 38 31 17" />
      <path d="m29 15 5-5 4 4-5 5" />
      <path d="M9 39c4 1 8-1 11-4l11-11-7-7-11 11c-3 3-5 7-4 11Z" />
      <path d="m14 34 6-6" />
    </svg>
  );
}

export function CsavarIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 8 h12 l-2 6 h-8 z" />
      <path d="M22 14 h4 v6 h-4 z" />
      <path d="M20 20 h8 v4 l-4 3 -4 -3 z" />
      <path d="M22 27 l2 13 2 -13" />
    </svg>
  );
}

export function TipliIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 8 h12 v6 l-3 3 3 3 -3 3 3 3 -3 3 3 3 v3 h-12 v-3 l3 -3 -3 -3 3 -3 -3 -3 3 -3 -3 -3 z" />
    </svg>
  );
}

export function HazIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 22 L24 10 L38 22" />
      <path d="M14 20 V38 H34 V20" />
      <path d="M21 38 v-9 h6 v9" />
    </svg>
  );
}

export function AutoIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 30 l3 -9 a4 4 0 0 1 4 -3 h18 a4 4 0 0 1 4 3 l3 9" />
      <path d="M6 30 h36 v6 h-4 v-3 H10 v3 H6 z" />
      <circle cx="15" cy="33" r="3" />
      <circle cx="33" cy="33" r="3" />
    </svg>
  );
}

export function CegIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 40V18l12-6v28" />
      <path d="M20 40V8l20 8v24" />
      <path d="M13 24h2M13 30h2M26 20h3M34 20h2M26 27h3M34 27h2M26 34h3M34 34h2" />
      <path d="M5 40h38" />
    </svg>
  );
}

export const ikonMap = {
  kulcs: KulcsIcon,
  kes: KesIcon,
  csavar: CsavarIcon,
  tipli: TipliIcon,
  haz: HazIcon,
  auto: AutoIcon,
} as const;

export type IkonNev = keyof typeof ikonMap;
