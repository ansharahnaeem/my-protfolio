import { RiArrowRightUpLine, RiDownloadLine, RiCodeSSlashLine, RiSparkling2Line } from "react-icons/ri";
import profileimage from "@/assets/profileimage.jpeg";

 function Home() {
  return (
    <section id="Home" className="relative isolate overflow-hidden bg-[#080814] px-6 py-20 text-white md:px-12 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-violet-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-fuchsia-300">
            <RiSparkling2Line className="text-base" /> WELCOME TO MY WORLD
          </div>
          <p className="mb-3 text-lg text-slate-300">Hello, I'm Ansharah Naeem 👋</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Building Digital <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Experiences.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Frontend Web Developer & DevOps Aspirant. I create responsive, engaging web experiences with React and TypeScript, while exploring backend development, cloud and automation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#Projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-600/20 transition hover:-translate-y-1 hover:shadow-fuchsia-500/40">
              Explore My Work <RiArrowRightUpLine className="text-lg" />
            </a>
            <a href="#Contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-fuchsia-400">
              Contact Me <RiDownloadLine className="text-lg" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-slate-300">
            {["HTML", "CSS","JS", "REACT", "TYPESCRIPT", "DEVOPS LEARNER"].map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{skill}</span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-12">
          <div className="absolute h-80 w-80 rounded-full border border-fuchsia-400/20 sm:h-96 sm:w-96" />
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-violet-600/60 to-pink-500/40 blur-3xl" />
          <div className="relative h-64 w-64 overflow-hidden rounded-[3rem] border-4 border-white/15 bg-violet-950 shadow-2xl shadow-fuchsia-600/20 rotate-3 transition duration-500 hover:rotate-0 sm:h-80 sm:w-80">
            <img src={profileimage} alt="Ansharah Naeem" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-2 top-8 flex items-center gap-2 rounded-2xl border border-white/15 bg-[#19172c]/95 px-4 py-3 text-sm font-semibold shadow-xl sm:-left-5">
            <RiCodeSSlashLine className="text-xl text-fuchsia-400" /> Web Developer
          </div>
          <div className="absolute -right-1 bottom-7 rounded-2xl border border-white/15 bg-[#19172c]/95 px-5 py-3 text-sm font-semibold shadow-xl sm:-right-5">
            <span className="text-fuchsia-400">✦</span> DevOps Aspirant
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;