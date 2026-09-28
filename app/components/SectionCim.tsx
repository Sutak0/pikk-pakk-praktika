import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  cim: string;
  leiras?: string;
  sotet?: boolean;
};

export default function SectionCim({ eyebrow, cim, leiras, sotet }: Props) {
  return (
    <Reveal className="max-w-2xl">
      <span
        className={`inline-block text-xs font-bold uppercase tracking-[0.25em] ${
          sotet ? "text-sarga" : "text-narancs"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl uppercase leading-tight sm:text-5xl ${
          sotet ? "text-white" : "text-tinta"
        }`}
      >
        <span className="marker-underline">{cim}</span>
      </h2>
      {leiras && (
        <p className={`mt-4 text-lg ${sotet ? "text-white/70" : "text-tinta/70"}`}>
          {leiras}
        </p>
      )}
    </Reveal>
  );
}
