
import ProjectCard from "@/components/ProjectCard";
import workoutImage from "@/assets/workout.png";
import kidsmathsolution from "@/assets/kids-math-solution.png";
import flowandbee from "@/assets/flow-and-bee.png";

function Projects() {
  return (
    <section id="projects" className="p-6 md:p-16 text-white scroll-mt-24 ">
      <h1 className="mb-8 text-3xl font-bold text-[#765C48]">My Projects</h1>

      <div className="flex flex-wrap gap-6">
        <ProjectCard
          number="01"
          title="Workout Tracker"
          main="🏋️ A simple and interactive Workout Tracker to track sets, monitor progress, and stay motivated toward your fitness goals! 💪"
          technologies={["React", "TypeScript", "Tailwind CSS"]}
          image={workoutImage}
          demo="https://workout-tracker-khaki-ten.vercel.app/"
          github="https://github.com/ansharahnaeem/workout-tracker"
          linkedin="https://lnkd.in/p/drc33cih"
        />

        <ProjectCard
          number="02"
          title="Kids Math Solution"
          main="🧮 A fun and interactive Kids Math Solver that makes learning math easy, engaging, and enjoyable! 🎉"
          technologies={["HTML", "CSS", "JS"]}
          image={kidsmathsolution}
          demo="https://kids-math-solution.vercel.app/"
          github="https://github.com/ansharahnaeem/js-assignment-04"
          linkedin="https://lnkd.in/p/db7zFqqN"
        />

        <ProjectCard
          number="03"
          title="Shopping Quality Tracker"
          main="Flow & Bee is a creative, modern website designed to deliver a smooth  user experience with beautiful visuals , user-friendly interface! ✨."
          technologies={["HTML", "CSS"]}
          image={flowandbee}
          demo="https://flow-and-bee.vercel.app/"
          github="https://github.com/ansharahnaeem/Assignment-16"
          linkedin="https://lnkd.in/p/dCF3Kz_E"
        />
      </div>
    </section>
  );
}

export default Projects;
