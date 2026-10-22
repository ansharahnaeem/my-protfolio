
import {
  RiArrowRightUpLine,
  RiMailLine,
} from "react-icons/ri";

import profileimage from "../assets/profileimage.jpeg";

export default function Home() {
  return (
    <section
      id="Home"
      className="relative overflow-hidden bg-[#F8F4EF] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Introduction */}
        <div className="relative z-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D8C3AD] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#765C48]">
            <span className="h-2 w-2 rounded-full bg-[#A17D60]" />
            WELCOME TO MY PORTFOLIO
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A17D60]">
            Hello, I'm Ansharah Naeem
          </p>

          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight text-[#30251F] sm:text-6xl xl:text-7xl">
            Creating
            <br />
            thoughtful
            <br />
            <span className="font-serif font-normal italic text-[#A17D60]">
              digital experiences.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#765C48]">
            A Frontend Web Developer and DevOps Aspirant passionate
            about creating responsive, modern and user-friendly
            web applications.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#30251F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#765C48]"
            >
              Explore My Work
              <RiArrowRightUpLine />
            </a>

            <a
              href="#Contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9B6A2] px-7 py-3.5 text-sm font-semibold text-[#30251F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EDE3D7]"
            >
              Get in Touch
              <RiMailLine />
            </a>

          </div>

          {/* Technologies */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#E3D6C8] pt-7">

            <span className="text-xs font-semibold uppercase tracking-widest text-[#A17D60]">
              Working with
            </span>

            {["React", "TypeScript", "Tailwind CSS"].map((item) => (
              <span
                key={item}
                className="text-sm font-semibold text-[#765C48]"
              >
                {item}
              </span>
            ))}

          </div>
        </div>

      

{/* Profile Picture */}
<div className="mx-auto w-full max-w-[430px] px-3 py-4">
  <div className="overflow-hidden rounded-xl bg-[#EDE3D7]">
    <img
      src={profileimage}
      alt="Ansharah Naeem"
      className="block h-[350px] w-full rounded-xl object-cover object-top sm:h-[420px]"
    />
  </div>
</div>


  

      </div>
    </section>
  );
}
