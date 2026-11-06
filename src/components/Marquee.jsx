
const marqueeItems = [
  "Frontend Developer",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Web Design",
  "Modern UI Development",
  "Building Digital Experiences",
];

const Marquee = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/[0.07] bg-[#0B0B12] py-3 sm:py-3.5">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0B0B12] to-transparent sm:w-20" />

      {/* Moving content */}
      <div
        className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`${group}-${index}`}
                className="mx-4 flex shrink-0 items-center gap-3 sm:mx-6 sm:gap-4 md:mx-8"
              >
                <span className="whitespace-nowrap font-heading text-xs font-semibold tracking-wide text-gray-300 sm:text-sm md:text-base">
                  {item}
                </span>

                <span className="text-sm text-violet-400 sm:text-base">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0B0B12] to-transparent sm:w-20" />
    </section>
  );
};

export default Marquee;
