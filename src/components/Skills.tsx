
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiGithubFill,
  RiCodeSSlashLine,
  RiTerminalBoxLine,
  RiCloudLine,
} from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: RiHtml5Fill, category: "Structure" },
  { name: "CSS3", icon: RiCss3Fill, category: "Styling" },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    category: "Programming",
  },
  { name: "React", icon: RiReactjsLine, category: "Frontend" },
  {
    name: "TypeScript",
    icon: RiCodeSSlashLine,
    category: "Programming",
  },
  {
    name: "Git & GitHub",
    icon: RiGithubFill,
    category: "Version Control",
  },
];

export default function Skills() {
  return (
    <section
      id="Skills"
      className="bg-[#F8F4EF] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#A17D60]">
            02 — My Expertise
          </p>

          <h2 className="text-4xl font-bold text-[#30251F] md:text-5xl">
            Skills &{" "}
            <span className="font-serif italic font-normal text-[#99765B]">
              Technologies.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765C48]">
            Technologies I use and continue to explore throughout
            my development journey.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, icon: Icon, category }) => (
            <article
              key={name}
              className="group rounded-3xl border border-[#E6D9CC] bg-[#FFFCF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9B29A] hover:shadow-[0_12px_30px_#30251F0C]"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDE3D7] text-3xl text-[#765C48] transition-transform duration-300 group-hover:rotate-6">
                <Icon />
              </div>

              <h3 className="text-xl font-bold text-[#30251F]">
                {name}
              </h3>

              <p className="mt-2 text-sm text-[#99765B]">
                {category}
              </p>

              <div className="mt-6 h-px bg-[#E8DED2]" />

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#A17D60]">
                In My Toolkit
              </p>
            </article>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-16 rounded-3xl bg-[#EDE3D7] p-7 md:p-10">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#A17D60]">
              Always Growing
            </p>

            <h3 className="text-2xl font-bold text-[#30251F]">
              Currently Learning
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl bg-[#F8F4EF] p-5">
              <div className="rounded-xl bg-[#E8D8C7] p-3 text-2xl text-[#765C48]">
                <RiTerminalBoxLine />
              </div>

              <div>
                <h4 className="font-bold text-[#30251F]">
                  Backend Development
                </h4>

                <p className="mt-1 text-sm text-[#765C48]">
                  APIs and server-side technologies
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-[#F8F4EF] p-5">
              <div className="rounded-xl bg-[#E8D8C7] p-3 text-2xl text-[#765C48]">
                <RiCloudLine />
              </div>

              <div>
                <h4 className="font-bold text-[#30251F]">
                  DevOps
                </h4>

                <p className="mt-1 text-sm text-[#765C48]">
                  Linux, cloud and deployment practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
