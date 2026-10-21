
import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiCodeSSlashLine,
} from "react-icons/ri";

import banner from "../assets/about.jpg";

interface ProjectCardProps {
  number: string;
  title: string;
  main: string;
  technologies: string[];
  demo?: string;
  github?: string;
}

function ProjectCard({
  number,
  title,
  main,
  technologies,
  demo,
  github,
}: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#131225] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:shadow-2xl hover:shadow-fuchsia-500/10">

      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={banner}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-bold text-fuchsia-300 backdrop-blur-md">
          PROJECT {number}
        </span>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col pt-6">

        <div className="mb-3 flex items-center gap-3">
          <RiCodeSSlashLine className="text-2xl text-fuchsia-400" />

          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-fuchsia-300">
            {title}
          </h3>
        </div>

        <p className="mb-5 text-sm leading-7 text-slate-400">
          {main}
        </p>

        {/* Technologies */}
        <div className="mb-7 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5">

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
            >
              Live Demo
              <RiArrowRightUpLine />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-fuchsia-400 hover:text-fuchsia-300"
            >
              <RiGithubFill className="text-lg" />
              Source Code
            </a>
          )}

          {!demo && !github && (
            <span className="text-xs text-slate-500">
              Project links coming soon
            </span>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
