
import {
  RiCodeSSlashLine,
  RiServerLine,
  RiCloudLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const interests = [
  {
    number: "01",
    icon: RiCodeSSlashLine,
    title: "Frontend Development",
    description:
      "Creating responsive, intuitive and visually appealing web experiences with modern frontend technologies.",
  },
  {
    number: "02",
    icon: RiServerLine,
    title: "Backend Learning",
    description:
      "Expanding my knowledge of APIs, server-side development and databases.",
  },
  {
    number: "03",
    icon: RiCloudLine,
    title: "DevOps Journey",
    description:
      "Exploring Linux, automation, cloud concepts and modern deployment practices.",
  },
];

export default function About() {
  return (
    <section
      id="About"
      className="bg-[#EDE3D7] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#A17D60]">
              01 — About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#30251F] md:text-5xl">
              A little more
              <br />
              <span className="font-serif italic font-normal text-[#99765B]">
                about me.
              </span>
            </h2>

            <div className="mt-8 rounded-3xl bg-[#D8C3AD] p-8">
              <div className="flex h-48 items-center justify-center rounded-2xl border border-white/40 bg-[#C4A88E]">
                <span className="font-serif text-8xl italic text-[#F8F4EF]">
                  A.
                </span>
              </div>

              <p className="mt-6 font-serif text-2xl italic leading-9 text-[#49382D]">
                "Learning, building and improving — one project at a time."
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="mb-8 max-w-xl text-base leading-8 text-[#765C48]">
              I'm a Frontend Web Developer who enjoys transforming
              ideas into meaningful digital experiences. I work with
              React, TypeScript and modern web technologies, while
              continuously growing my skills in backend development
              and DevOps.
            </p>

            <div className="space-y-4">
              {interests.map(
                ({ number, icon: Icon, title, description }) => (
                  <article
                    key={number}
                    className="group flex gap-5 rounded-2xl border border-[#E2D3C3] bg-[#F8F4EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#BDA48B] hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDE3D7] text-2xl text-[#765C48]">
                      <Icon />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-[#30251F]">
                          {title}
                        </h3>

                        <span className="text-xs font-semibold text-[#A17D60]">
                          {number}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-[#765C48]">
                        {description}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#765C48] transition-all hover:gap-4 hover:text-[#30251F]"
            >
              Discover my projects <RiArrowRightUpLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
