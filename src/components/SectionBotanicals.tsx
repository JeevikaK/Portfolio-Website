type BotanicalVariant = "about" | "experience" | "projects" | "achievements" | "contact";

const LeafBranch = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 360 520" fill="none">
    <path d="M337 9C224 126 160 270 118 506" stroke="currentColor" strokeWidth="1.35" />
    <path d="M297 83c-49-15-83 10-97 33 39 10 72-1 97-33ZM255 160c40-35 80-25 99-10-31 27-64 32-99 10ZM209 246c-50-3-77 31-82 55 40 1 70-16 82-55ZM170 340c38-35 77-26 98-11-30 27-63 33-98 11ZM138 423c-48 4-70 38-71 62 38-5 64-25 71-62Z" fill="currentColor" />
    <path d="M270 48c-2-34-29-51-47-52 3 27 20 47 47 52ZM229 120c-39-15-70 2-84 21 31 11 59 4 84-21Z" fill="currentColor" />
  </svg>
);

const FlowerSprig = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 390" fill="none">
    <path d="M46 380c56-94 97-194 116-354M113 231c-22-24-43-38-73-50M139 145c24-27 50-43 84-48M95 278c32-17 61-22 99-18" stroke="currentColor" strokeWidth="1.2" />
    {[
      [163, 28], [224, 97], [39, 180], [194, 260], [80, 276],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
        <ellipse cx="0" cy="-11" rx="6" ry="11" fill="currentColor" opacity=".7" />
        <ellipse cx="10" cy="-3" rx="6" ry="11" transform="rotate(72 10 -3)" fill="currentColor" opacity=".58" />
        <ellipse cx="6" cy="10" rx="6" ry="11" transform="rotate(144 6 10)" fill="currentColor" opacity=".66" />
        <ellipse cx="-7" cy="9" rx="6" ry="11" transform="rotate(216 -7 9)" fill="currentColor" opacity=".52" />
        <ellipse cx="-10" cy="-4" rx="6" ry="11" transform="rotate(288 -10 -4)" fill="currentColor" opacity=".62" />
        <circle r="3.2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

const SeedHeads = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 420 430" fill="none">
    <path d="M38 429c26-116 44-211 65-325M116 429c17-108 53-218 112-341M220 429c-1-122 27-231 83-326M308 429c-4-84 10-164 58-241" stroke="currentColor" strokeWidth="1.05" />
    <g stroke="currentColor" strokeWidth=".9">
      <path d="m101 105-30-25m32 23 6-41m-7 42 39-15" />
      <path d="m228 88-35-28m34 27 8-49m-7 50 43-16" />
      <path d="m303 104-27-28m28 27 16-44m-16 45 41-4" />
      <path d="m366 189-28-20m28 19 10-38m-10 39 34-7" />
    </g>
    {[101, 228, 303, 366].map((x, index) => (
      <g key={x} fill="currentColor" opacity={0.5 + index * 0.08}>
        <circle cx={x} cy={[104, 87, 103, 188][index]} r="5" />
        <circle cx={x - 30} cy={[80, 60, 76, 169][index]} r="3" />
        <circle cx={x + [6, 8, 16, 10][index]} cy={[62, 38, 59, 150][index]} r="3" />
        <circle cx={x + [39, 43, 41, 34][index]} cy={[89, 72, 100, 182][index]} r="3" />
      </g>
    ))}
  </svg>
);

const ContourBloom = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 420 420" fill="none">
    <path d="M211 358c-22-73-15-130 21-173 35-41 91-38 109 0 18 39-6 88-51 95-55 8-102-39-88-96 13-55 78-91 130-63 61 33 68 121 16 174-62 62-171 46-211-27-39-72-4-165 69-198 91-41 195 15 210 111" stroke="currentColor" strokeWidth="1.15" />
    <path d="M209 357c-83-8-142-47-167-108-25-62 6-126 62-127 51-1 83 54 58 97-29 50-106 54-141 5-41-58-13-143 54-173 80-35 171 15 184 101M209 357c-50 4-84 26-103 62M209 357c51 3 92 23 125 61" stroke="currentColor" strokeWidth="1.15" />
    <circle cx="209" cy="356" r="8" fill="currentColor" opacity=".35" />
  </svg>
);

const BotanicalBackdrop = ({ variant }: { variant: BotanicalVariant }) => {
  if (variant === "about") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-[#89977d]">
        <LeafBranch className="botanical-sway absolute -left-24 -top-24 h-[470px] w-[330px] rotate-[122deg] opacity-[.2] sm:-left-12" />
        <LeafBranch className="botanical-sway absolute -right-20 top-24 h-[650px] w-[470px] opacity-[.26]" />
        <FlowerSprig className="botanical-float absolute right-[8%] top-[14%] h-[285px] w-[220px] text-[#bd9b78] opacity-[.2]" />
        <FlowerSprig className="absolute -bottom-28 left-[3%] h-[390px] w-[300px] -rotate-12 text-[#b6906e] opacity-[.15]" />
      </div>
    );
  }

  if (variant === "experience") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-[#97724d]">
        <SeedHeads className="absolute -bottom-20 -left-20 h-[500px] w-[490px] -rotate-6 opacity-[.28]" />
        <SeedHeads className="botanical-sway absolute -right-20 -top-12 h-[430px] w-[420px] rotate-[162deg] opacity-[.2]" />
        <FlowerSprig className="absolute bottom-[4%] right-[26%] h-52 w-40 rotate-12 text-[#b28b68] opacity-[.16]" />
        <div className="absolute left-[29%] top-[11%] h-28 w-28 rounded-full border border-current opacity-[.12]" />
      </div>
    );
  }

  if (variant === "projects") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-[#8e795c]">
        <ContourBloom className="absolute -left-36 top-8 h-[520px] w-[520px] -rotate-12 opacity-[.2]" />
        <ContourBloom className="botanical-float absolute -right-28 bottom-0 h-[470px] w-[470px] rotate-[22deg] opacity-[.18]" />
        <FlowerSprig className="absolute right-[5%] top-2 h-60 w-48 text-[#b88d66] opacity-[.2]" />
      </div>
    );
  }

  if (variant === "achievements") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-[#7d8b73]">
        <LeafBranch className="botanical-sway absolute -left-36 bottom-[-7rem] h-[560px] w-[400px] rotate-[38deg] opacity-[.16]" />
        <LeafBranch className="absolute -right-24 -top-28 h-[500px] w-[360px] rotate-[155deg] opacity-[.17]" />
        <FlowerSprig className="botanical-float absolute right-[4%] top-[38%] h-[300px] w-[230px] -rotate-6 text-[#b38a67] opacity-[.18]" />
        <FlowerSprig className="absolute bottom-[2%] left-[23%] h-52 w-40 rotate-[18deg] text-[#b38a67] opacity-[.12]" />
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-[#7f907a]">
        <LeafBranch className="botanical-sway absolute -right-20 -top-20 h-[590px] w-[430px] opacity-[.2]" />
        <LeafBranch className="absolute -bottom-52 -left-24 h-[520px] w-[380px] rotate-[76deg] opacity-[.15]" />
        <FlowerSprig className="botanical-float absolute left-[8%] top-[7%] h-[260px] w-[200px] -rotate-12 text-[#b78468] opacity-[.2]" />
        <FlowerSprig className="absolute -bottom-12 right-[30%] h-[270px] w-[210px] rotate-[14deg] text-[#b78468] opacity-[.14]" />
      </div>
    );
  }

  return null;
};

export default BotanicalBackdrop;
