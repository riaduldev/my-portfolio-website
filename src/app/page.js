"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git & GitHub",
];

const projects = [
  
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
      "A book discovery experience to explore books, view details and manage reading lists.",
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
  { name: "GitHub", href: "https://github.com/riaduldev" },
  { name: "LinkedIn", href: "www.linkedin.com/in/riaduldev365" },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=riadulislam.bd.pabna@gmail.com" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Change your personal information here.
  const name = "Riadul Islam";
  const role = "Frontend Developer";
  const profileImage = "/image/riadul-profile.png";
  const resume = "/resume.pdf";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#09090f] p-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-300 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-violet-600 px-4 py-3 text-center font-semibold"
              >
                Let's Talk ↗
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[690px] lg:px-8"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[110px]" />

        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Intro */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
              Hello, I'm
            </p>

            <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
              {name.split(" ")[0]}
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                {name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl">
              {role}
              <span className="text-violet-400">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I build modern, responsive and user-friendly web experiences with
              React and Next.js. I enjoy turning creative ideas into clean,
              functional and meaningful digital products.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
              >
                Explore My Work <span>↗</span>
              </Link>

              <Link
                href={resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-violet-400 hover:text-violet-300"
              >
                Download CV <span>↓</span>
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                  className="transition hover:text-violet-400"
                >
                  {social.name} ↗
                </Link>
              ))}
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="mx-auto w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[420px]">
            <div className="relative mx-auto aspect-[4/5] max-h-[490px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-600/50 via-fuchsia-500/20 to-transparent blur-2xl" />

              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#201735] via-[#15121f] to-[#0d0d15]">
                <Image
                  src={profileImage}
                  alt={`${name} - ${role}`}
                  width={600}
                  height={750}
                  className="h-full w-full object-cover object-center"
                />

                {/* Remove this overlay if your photo already looks good */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090f]/80 to-transparent" />
              </div>

              <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-[#171420]/95 px-3 py-3 shadow-xl sm:-right-5 sm:px-4">
                <p className="text-xs text-gray-400">Currently learning</p>
                <p className="mt-1 text-sm font-semibold text-violet-300">
                  React & Next.js
                </p>
              </div>

              <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/10 bg-[#171420]/95 px-4 py-3 shadow-xl sm:-left-5 sm:px-5">
                <p className="text-xs text-gray-400">My focus</p>
                <p className="mt-1 text-sm font-semibold">
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
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
              Turning ideas into
              <span className="text-violet-400"> digital experiences.</span>
            </h2>

            <div>
              <p className="text-sm leading-8 text-gray-400 sm:text-base">
                I'm a web development learner passionate about creating
                beautiful interfaces and useful web applications. I focus on
                responsive design, reusable components and writing maintainable
                code while continuously improving my skills.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-400 hover:text-violet-300"
              >
                Let's connect <span>→</span>
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
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
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
              className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center text-sm font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300 sm:px-5 sm:py-7 sm:text-base"
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
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="https://github.com/riaduldev"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-violet-400 hover:text-violet-300"
            >
              More on GitHub ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101018] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-950 to-[#181321]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={600}
                    height={750}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs font-medium tracking-wide text-violet-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

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

                  <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm font-semibold">
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-violet-400 hover:text-violet-300"
                      >
                        Live Demo ↗
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub ↗
                    </Link>
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

        <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-5xl">
          Let's build something
          <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text py-1 text-transparent">
            amazing together.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          I'm always interested in learning, collaborating and exploring new
          opportunities. Feel free to reach out.
        </p>

        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=riadulislam.bd.pabna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-500"
        >
          Get in Touch ↗
        </Link>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={social.name === "Email" ? undefined : "noreferrer"}
              className="transition hover:text-violet-400"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-gray-500 sm:text-sm">
        © {new Date().getFullYear()} {name}. Built with passion and React.
      </footer>
    </main>
  );
}
