"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API Integration", "Server Actions"],
  },
  {
    title: "Auth, UI & Tools",
    skills: ["Better Auth", "Git & GitHub", "daisyUI & HeroUI", "Responsive Design", "Vercel / Netlify"],
  },
];

const projects = [
  {
    title: "BazarDor",
    category: "Full-Stack • Market Price Tracker",
    featured: true,
    description:
      "A real-time daily market price tracking platform for essential commodities in Bangladesh, helping consumers compare trends and track price fluctuations.",
    highlights: [
      "OAuth & Email authentication via Better Auth",
      "Dynamic price sorting, category filtering & trend indicators",
      "Full CRUD user profile & product management with MongoDB",
    ],
    image: "/image/bazar-dor.png",
    live: "https://bazar-dor-web-beta.vercel.app/",
    github: "https://github.com/riaduldev/bazar-dor-web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB", "REST API"],
  },
  {
    title: "Bangla News 24",
    category: "Full-Stack • Digital News Portal",
    featured: true,
    description:
      "A high-performance Bangla news aggregation platform delivering categorized news, breaking tickers, and authenticated reader interactions.",
    highlights: [
      "Dynamic API data fetching with skeleton loading & error boundaries",
      "Secure user authentication & MongoDB database persistence",
      "Mobile-first editorial layout with breaking news marquee",
    ],
    image: "/image/bangla-news-24.png",
    live: "https://bangla-news-24-azure.vercel.app/",
    github: "https://github.com/riaduldev/bangla-news-24",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB"],
  },
  {
    title: "Fit-Log",
    category: "Frontend • Fitness & Workout Planner",
    featured: true,
    description:
      "An interactive workout library and routine planner enabling users to browse exercises, filter by metrics, and track daily fitness goals.",
    highlights: [
      "Multi-criteria sorting by duration, calories burned & rating",
      "Custom daily workout routine builder & bookmarking system",
      "Clean, accessible UI built with modular React components",
    ],
    image: "/image/fit-log.png",
    live: "https://fit-log-workout-library-six.vercel.app",
    github: "https://github.com/riaduldev/fit-log-app",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "daisyUI", "REST API"],
  },
  {
    title: "DevStack",
    category: "Frontend • Developer Utility",
    featured: false,
    description:
      "An interactive developer tool to explore modern web technologies and architect custom project tech stacks visually.",
    highlights: [
      "Instant technology search and stack comparison",
      "Type-safe architecture powered by TypeScript",
    ],
    image: "/image/dev-stack.png",
    live: "https://dev-stack-builder2026.netlify.app",
    github: "https://github.com/riaduldev/dev-stack-builder",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Book Vibe",
    category: "Frontend • Book Discovery App",
    featured: false,
    description:
      "A curated book discovery application allowing readers to inspect book metadata, ratings, and organize personal reading wishlists.",
    highlights: [
      "Persistent Read & Wishlist state management",
      "Detailed book analytics and tag-based categorization",
    ],
    image: "/image/book-vibe.png",
    live: "https://book-vibe-seven-rho.vercel.app/",
    github: "https://github.com/riaduldev/book-vibe",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BPL Dream 11",
    category: "Frontend • Interactive Sports App",
    featured: false,
    description:
      "A fantasy cricket squad builder featuring real-time budget validation, player bidding logic, and squad constraints.",
    highlights: [
      "Dynamic coin balance & squad limit validation logic",
      "Interactive player selection and instant toast feedback",
    ],
    image: "/image/bpl-dreme.png",
    live: "https://player-bpl-dream-11.netlify.app",
    github: "https://github.com/riaduldev/BPL-Dream-11",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/riaduldev" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/riaduldev365" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState("all");

  const name = "Riadul Islam";
  const email = "riadulislam.bd.pabna@gmail.com";
  const profileImage = "/image/riadul-profile.png";
  const resume =
    "https://drive.google.com/file/d/19t2KgGrfYcib4CE6aEJ5VTMsXYrZ7cuE/view?usp=sharing";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter));

  return (
    <div className="min-h-screen overflow-x-clip bg-[#09090f] text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-32 top-12 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Full-Stack & Frontend Roles
            </div>

            <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-gray-400 uppercase sm:text-sm">
              Hi, I&apos;m {name}
            </p>

            <h1 className="font-heading text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Building scalable,{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                user-centric
              </span>{" "}
              web applications.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Full-Stack Web Developer specializing in{" "}
              <span className="font-medium text-white">Next.js, React, TypeScript,</span> and{" "}
              <span className="font-medium text-white">MongoDB</span>. I turn complex requirements into clean, fast, and production-ready digital products.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5 hover:bg-violet-500 sm:text-base"
              >
                View Selected Projects
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-heading text-sm font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.06] sm:text-base"
              >
                Resume / CV
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Quick Recruiter Links + One-Click Email Copy */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-gray-400">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition hover:text-violet-400"
                >
                  {social.name} ↗
                </a>
              ))}

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-2 font-medium text-gray-300 transition hover:text-violet-400"
                title="Copy email address"
              >
                <span>{email}</span>
                <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-violet-300">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[380px]">
            <div className="relative mx-auto aspect-[4/5]">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-violet-600/40 via-indigo-500/20 to-transparent blur-2xl" />

              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#13121d] shadow-2xl">
                <Image
                  src={profileImage}
                  alt={`${name} - Full-Stack Web Developer`}
                  width={600}
                  height={750}
                  priority
                  sizes="(min-width: 640px) 380px, 340px"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09090f] via-[#09090f]/40 to-transparent" />
              </div>

              {/* Clean Status Badge */}
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#141320]/95 px-4 py-3 backdrop-blur-md shadow-xl">
                <div>
                  <p className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
                    Core Stack
                  </p>
                  <p className="mt-0.5 font-heading text-sm font-semibold text-white">
                    Next.js • TypeScript • MERN
                  </p>
                </div>
                <span className="rounded-lg bg-violet-500/15 px-2.5 py-1 text-xs font-semibold text-violet-300">
                  6+ Apps Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & ENGINEERING APPROACH */}
      <section id="about" className="border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
                About Me
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-4xl">
                Focused on clean code, performance & real-world usability.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              <p>
                I&apos;m a developer based in Bangladesh with hands-on experience building full-stack web applications using{" "}
                <strong className="font-semibold text-white">React, Next.js, TypeScript, Node.js, and MongoDB</strong>. Rather than just building static pages, I focus on complete product workflows—from secure authentication and REST API integration to responsive, accessible UI design.
              </p>
              <p>
                Currently seeking entry-level developer roles, internships, or collaborative engineering teams where I can contribute immediately, ship reliable features, and grow under experienced mentorship.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">6+</p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">Deployed Projects</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-violet-400 sm:text-3xl">MERN</p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">& Next.js Stack</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">100%</p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">Responsive UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIZED SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
            Technical Stack
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Technologies I use to architect, build, and deploy modern web applications.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillCategories.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#101018] p-6 transition hover:border-violet-400/30"
            >
              <h3 className="font-heading text-lg font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-200 transition hover:border-violet-400/40 hover:text-violet-300 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS WITH FILTER */}
      <section id="projects" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
                Portfolio
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Projects", value: "all" },
                { label: "Full-Stack", value: "full-stack" },
                { label: "Frontend", value: "frontend" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setFilter(tab.value)}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    filter === tab.value
                      ? "bg-violet-600 text-white"
                      : "border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#101018] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#161522]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={600}
                      height={375}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wide text-violet-400">
                      {project.category}
                    </p>

                    <h3 className="mt-1.5 font-heading text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    {/* Key Engineering Highlights */}
                    <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-xs text-gray-300">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-0.5 text-violet-400">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Stack + Links */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4 text-sm font-heading font-semibold">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-violet-400 transition hover:text-violet-300"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-300 transition hover:text-white"
                    >
                      Source Code ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITER CTA / CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
          Contact
        </p>

        <h2 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-5xl">
          Looking for a dedicated developer{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            for your team?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          I&apos;m actively open to Junior Web Developer, Frontend, or Full-Stack opportunities. Reach out via email or LinkedIn—I respond promptly.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${email}?subject=Hiring%20Inquiry%20-%20Riadul%20Islam`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-500 sm:w-auto sm:text-base"
          >
            Send an Email ↗
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-heading text-sm font-semibold text-gray-200 transition hover:border-violet-400/50 hover:text-white sm:w-auto sm:text-base"
          >
            {copied ? "✓ Email Copied" : "Copy Email Address"}
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-sm font-medium text-gray-400">
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
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-gray-500 sm:text-sm">
        © {new Date().getFullYear()} {name} • Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}