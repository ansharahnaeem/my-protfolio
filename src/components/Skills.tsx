
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiGithubFill,
  RiCloudLine,
  RiCodeSSlashLine,
  RiTerminalBoxLine,
} from "react-icons/ri";

const skills = [
  {
    name: "HTML5",
    level: 100,
    icon: RiHtml5Fill,
    color: "text-orange-400",
  },
  {
    name: "CSS3",
    level: 100,
    icon: RiCss3Fill,
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    level: 100,
    icon: RiJavascriptFill,
    color: "text-yellow-400",
  },
  {
    name: "React JS",
    level: 100,
    icon: RiReactjsLine,
    color: "text-cyan-400",
  },
  {
    name: "TypeScript",
    level: 100,
    icon: RiCodeSSlashLine,
    color: "text-blue-400",
  },
  {
    name: "Git & GitHub",
    level: 85,
    icon: RiGithubFill,
    color: "text-purple-400",
  },
];

const learning = [
  {
    name: "Backend Development",
    icon: RiTerminalBoxLine,
    description: "Learning server-side development and APIs.",
  },
  {
    name: "DevOps",
    icon: RiCloudLine,
    description: "Exploring cloud, automation and deployment.",
  },
];

function Skills() {
  return (
    <section
      id="Skills"
      className="relative overflow-hidden bg-[#0d0c1b] px-6 py-20 text-white md:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Technologies I use to transform creative ideas into
            modern and responsive web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-[#131225] p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:border-fuchsia-400 hover:bg-[#1d1935] hover:shadow-xl hover:shadow-fuchsia-500/20"
              >

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    {/* Icon */}
                    <div className="rounded-xl bg-white/5 p-3 transition-all duration-300 group-hover:rotate-6 group-hover:bg-fuchsia-500/20">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </div>

                    <h3 className="text-base font-bold">
                      {skill.name}
                    </h3>
                  </div>

                  <span className="text-sm font-bold text-fuchsia-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-400 transition-transform duration-1000 ease-out group-hover:scale-x-100"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

              </div>
            );
          })}

        </div>

        {/* Currently Learning */}
        <div className="mt-16">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-fuchsia-400" />

            <h3 className="text-xl font-bold">
              Currently Learning
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {learning.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group flex items-center gap-4 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 p-5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-500/10"
                >

                  <div className="rounded-xl bg-fuchsia-500/10 p-3 text-2xl text-fuchsia-400 transition-transform duration-300 group-hover:rotate-12">
                    <Icon />
                  </div>

                  <div>
                    <h4 className="text-base font-bold">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
