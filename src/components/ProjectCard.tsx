
import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

interface ProjectCardProps {
  number: string;
  title: string;
  main: string;
  link?: string;
  technologies: string[];
  demo?: string;
  github?: string;
  linkedin?: string;
  image?: string;
}

export default function ProjectCard({
  number,
  title,
  main,
  technologies,
  demo,
  github,
  linkedin,
  image,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4D6C7] bg-[#FFFCF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_#30251F12] w-90 center justify-center items-center">

      {/* Project Image */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#D8C3AD]">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-serif text-8xl italic text-[#F8F4EF]">
            {number}
          </span>
        )}

      
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-[#30251F]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#765C48]">
          {main}
        </p>

        <div className="my-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#EDE3D7] px-3 py-1.5 text-xs font-semibold text-[#765C48]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[#E8DED2] pt-5">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Preview"
              aria-label="Live Preview"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#30251F] transition-colors hover:text-[#99765B]"
            >
              Live Preview <RiArrowRightUpLine />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub repository"
              className="text-[#765C48] transition-colors hover:text-[#30251F]"
            >
              <RiGithubFill size={22} />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Post"
              aria-label="LinkedIn post"
              className="text-[#765C48] transition-colors hover:text-[#30251F]"
            >
              <RiLinkedinBoxFill size={22} />
            </a>
          )}

          {!demo && !github && !linkedin && (
            <span className="text-xs text-[#A17D60]">
              Project links coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
