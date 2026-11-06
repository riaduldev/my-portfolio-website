"use client";

import Image from "next/image";
import Link from "next/link";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Better Auth",
  "Git & GitHub",
];

const projects = [
  {
  title: "BazarDor",
  category: "Bangla Market Price Tracker",
  description:
    "A modern, responsive Bangla market-price web application built with Next.js. Explore everyday product prices, compare market trends, browse products by category, view detailed price information, and discover rising and falling prices. Features secure authentication with Google and GitHub, MongoDB integration, profile management, numeric price sorting, and a user-friendly responsive interface.",
  image: "/image/bazar-dor.png",
  live: "https://bazar-dor-web-beta.vercel.app/",
  github: "https://github.com/riaduldev/bazar-dor-web",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "daisyUI",
    "HeroUI",
    "Better Auth",
    "MongoDB",
    "React Toastify",
    "React Marquee Text",
    "REST API",
  ],
},
  {
    title: "Bangla News 24",
    category: "Bangla News Platform",
    description:
      "A modern, responsive Bangla news platform built with Next.js. Explore news content through a user-friendly interface with secure authentication, MongoDB integration, responsive layouts, loading states, error handling, and toast notifications.",
    image: "/image/bangla-news-24.png",
    live: "https://bangla-news-24-azure.vercel.app/",
    github: "https://github.com/riaduldev/bangla-news-24",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "Better Auth",
      "MongoDB",
      "React Toastify",
      "React Marquee Text",
      "REST API",
    ],
  },
  {
    title: "Fit-Log",
    category: "Workout Library",
    description:
      "A modern, responsive workout platform built with Next.js. Explore exercises, view workout details, sort workouts, create daily plans, save favorite exercises, and track completed workouts.",
    image: "/image/fit-log.png",
    live: "https://fit-log-workout-library-six.vercel.app",
    github: "https://github.com/riaduldev/fit-log-app",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "daisyUI",
      "Lucide React",
      "React Toastify",
      "REST API",
    ],
  },
  {
    title: "DevStack",
    category: "Technology Explorer",
    description:
      "A modern platform to explore development technologies and build your ideal tech stack.",
    image: "/image/dev-stack.png",
    live: "https://dev-stack-builder2026.netlify.app",
    github: "https://github.com/riaduldev/dev-stack-builder",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Book Vibe",
    category: "Book Discovery App",
    description:
      "A book discovery experience to explore books, view details, and manage reading lists.",
    image: "/image/book-vibe.png",
    live: "https://book-vibe-seven-rho.vercel.app/",
    github: "https://github.com/riaduldev/book-vibe",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BPL Dream 11",
    category: "Fantasy Cricket App",
    description:
      "An interactive cricket player selection application with a dynamic team-building experience.",
    image: "/image/bpl-dreme.png",
    live: "https://player-bpl-dream-11.netlify.app",
    github: "https://github.com/riaduldev/BPL-Dream-11",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/riaduldev",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/riaduldev365",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=riadulislam.bd.pabna@gmail.com",
  },
];

export default function Home() {
  const name = "Riadul Islam";
  const role = "Frontend Developer";
  const profileImage = "/image/riadul-profile.png";

  const resume ="https://drive.google.com/uc?export=download&id=19t2KgGrfYcib4CE6aEJ5VTMsXYrZ7cuE";

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[690px] lg:px-8"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[110px]" />

        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Intro */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
              Hello, I&apos;m
            </p>

            <h1 className="font-heading text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
              {name.split(" ")[0]}
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                {name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <h2 className="mt-5 font-heading text-xl font-semibold text-gray-200 sm:text-2xl">
              {role}
              <span className="text-violet-400">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I build modern, responsive, and user-friendly web experiences with
              React and Next.js. I enjoy turning creative ideas into clean,
              functional, and meaningful digital products.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-heading font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
              >
                Explore My Work <span aria-hidden="true">↗</span>
              </Link>

              <a
                href={resume}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-heading font-semibold text-gray-200 transition hover:-translate-y-1 hover:border-violet-400 hover:text-violet-300"
              >
                Download Resume <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-violet-400"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="mx-auto w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[420px]">
            <div className="relative mx-auto aspect-[4/5] max-h-[490px]">
              {/* Glow Effect */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-600/50 via-fuchsia-500/20 to-transparent blur-2xl" />

              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#201735] via-[#15121f] to-[#0d0d15]">
                <Image
                  src={profileImage}
                  alt={`${name} - ${role}`}
                  width={600}
                  height={750}
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 400px, 350px"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090f]/80 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-[#171420]/95 px-3 py-3 shadow-xl sm:-right-5 sm:px-4">
                <p className="text-xs text-gray-400">Currently learning</p>

                <p className="mt-1 font-heading text-sm font-semibold text-violet-300">
                  React & Next.js
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/10 bg-[#171420]/95 px-4 py-3 shadow-xl sm:-left-5 sm:px-5">
                <p className="text-xs text-gray-400">My focus</p>

                <p className="mt-1 font-heading text-sm font-semibold">
                  Building for the web ✦
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] text-violet-400 uppercase">
            Get to know me
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-heading text-3xl leading-tight font-bold sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-violet-400">digital experiences.</span>
            </h2>

            <div>
              <p className="text-sm leading-8 text-gray-400 sm:text-base">
                I&apos;m a web developer passionate about creating beautiful
                interfaces and useful web applications. I focus on responsive
                design, reusable components, and writing maintainable code while
                continuously improving my skills.
              </p>

              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-heading font-semibold text-violet-400 transition hover:text-violet-300"
              >
                Let&apos;s connect <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-violet-400 uppercase">
            My toolkit
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            The tools I use to create responsive interfaces and modern web
            applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center font-heading text-sm font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300 sm:px-5 sm:py-7 sm:text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/5 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-violet-400 uppercase">
                Selected work
              </p>

              <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>
            </div>

            <a
              href="https://github.com/riaduldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-semibold text-violet-400 transition hover:text-violet-300"
            >
              More on GitHub ↗
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101018] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                {/* Project Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-950 to-[#181321]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={600}
                    height={375}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-medium tracking-wide text-violet-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm font-heading font-semibold">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 transition hover:text-violet-300"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 transition hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28"
      >
        <p className="text-sm font-semibold tracking-[0.2em] text-violet-400 uppercase">
          Have a project in mind?
        </p>

        <h2 className="mt-4 font-heading text-3xl leading-tight font-bold sm:text-5xl">
          Let&apos;s build something
          <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text py-1 text-transparent">
            amazing together.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          I&apos;m always interested in learning, collaborating, and exploring
          new opportunities. Feel free to reach out.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=riadulislam.bd.pabna@gmail.com&su=Let's%20Work%20Together"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-heading font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
        >
          Get in Touch ↗
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={social.name === "Email" ? undefined : "noopener noreferrer"}
              className="transition hover:text-violet-400"
            >
              {social.name}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-gray-500 sm:text-sm">
        © {new Date().getFullYear()} {name}. Built with passion and React.
      </footer>
    </div>
  );
}
