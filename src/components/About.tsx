import { RiArrowRightUpLine, RiCodeSSlashLine, RiServerLine, RiCloudLine } from "react-icons/ri";
import about from "@/assets/about.jpg";

const specialties = [
  {
    number: "01",
    title: "Frontend Developer",
    icon: RiCodeSSlashLine,
    description: "Creating modern, responsive and user-friendly interfaces with HTML, CSS, JavaScript, React and TypeScript.",
    tags: ["JS","React", "TypeScript" ],
  },
  {
    number: "02",
    title: "Backend Developer",
    icon: RiServerLine,
    description: "Learning server-side development, databases and APIs to build efficient, secure and scalable applications.",
    tags: ["APIs", "Databases", "Learning"],
  },
  {
    number: "03",
    title: "DevOps Aspirant",
    icon: RiCloudLine,
    description: "Exploring cloud technologies, automation and deployment workflows to build reliable systems.",
    tags: ["Cloud", "Automation", "Deployment"],
  },
];

 function About() {
  return (
    <section id="About" className="relative overflow-hidden bg-[#0d0c1b] px-6 py-24 text-white md:px-12">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.3em] text-fuchsia-400">GET TO KNOW ME</p>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">More Than Just <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Code.</span></h2>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-fuchsia-500/20" />
            <img src={about} alt="About Ansharah" className="relative h-[380px] w-full rounded-[1.5rem] object-cover grayscale-[15%] md:h-[480px]" />
            <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/15 bg-[#201733] px-6 py-4 shadow-2xl">
              <p className="text-2xl font-black text-fuchsia-300">∞</p>
              <p className="text-xs font-medium text-slate-300">Always learning</p>
            </div>
          </div>
          <div>
            <p className="mb-8 max-w-xl text-base leading-8 text-slate-400">
              I'm a frontend developer who loves turning ideas into clean digital experiences. Beyond interfaces, I'm growing my knowledge of backend engineering and DevOps — one project at a time.
            </p>
            <div className="space-y-4">
              {specialties.map(({ number, title, icon: Icon, description, tags }) => (
                <article key={number} className="group rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-fuchsia-400/[.06] sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-fuchsia-500/20 text-2xl text-fuchsia-300"><Icon /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
                        <span className="text-xs font-bold text-fuchsia-400">{number}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a href="#Projects" className="mt-8 inline-flex items-center gap-2 font-semibold text-fuchsia-300 transition hover:gap-4">See my projects <RiArrowRightUpLine /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;