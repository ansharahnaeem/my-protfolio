

import ProjectCard from "./ProjectCard";
function Project() {
  return (
    <section
      id="Projects"
      className="relative overflow-hidden bg-[#080814] px-6 py-24 text-white md:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
            MY CREATIVE WORK
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            A collection of projects where creativity meets
            clean code and modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard
            number="01"
            title="Landing Page"
            main="A modern and responsive landing page built with React and Tailwind CSS."
            technologies={["React", "Tailwind CSS"]}
          />

          <ProjectCard
            number="02"
            title="Shopping Quality Tracker"
            main="An interactive tracking application with a clean interface and dynamic functionality."
            technologies={["React", "TypeScript"]}
          />

          <ProjectCard
            number="03"
            title="Attendance Tracker"
            main="A responsive application for tracking student attendance with interactive controls."
            technologies={["React", "TypeScript"]}
          />

        </div>
      </div>
    </section>
  );
}

export default Project;
