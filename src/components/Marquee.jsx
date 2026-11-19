const marqueeItems = [
  "Full-Stack Web Developer",
  "Next.js (App Router)",
  "React.js",
  "TypeScript",
  "Node.js & Express",
  "MongoDB",
  "Tailwind CSS",
  "Better Auth & REST APIs",
];

const Marquee = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/[0.07] bg-[#0B0B12] py-3 sm:py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0B0B12] to-transparent sm:w-20" />

      <div
        className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {marqueeItems.map((item, index) => (
              <div
                key={`${group}-${index}`}
                className="mx-4 flex shrink-0 items-center gap-3 sm:mx-6 sm:gap-4 md:mx-8"
              >
                <span className="whitespace-nowrap font-heading text-xs font-semibold tracking-wide text-gray-300 sm:text-sm md:text-base">
                  {item}
                </span>
                <span className="text-sm text-violet-400 sm:text-base">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0B0B12] to-transparent sm:w-20" />
    </section>
  );
};

export default Marquee;