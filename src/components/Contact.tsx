
import { useState, type FormEvent } from "react";

import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinFill,
  RiSendPlaneFill,
  RiArrowRightUpLine,
  RiMapPinLine,
} from "react-icons/ri";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Replace with your actual email address
    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden bg-[#080814] px-6 py-20 text-white md:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Connect.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Have a project in mind or want to collaborate?
            Feel free to reach out. I'd love to hear from you!
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 bg-[#131225] p-6">

              <h3 className="mb-3 text-2xl font-bold">
                Let's build something
                <span className="text-fuchsia-400"> amazing!</span>
              </h3>

              <p className="text-sm leading-7 text-slate-400">
                I'm always interested in new opportunities,
                creative projects and connecting with fellow
                developers.
              </p>

            </div>

            {/* Email */}
            <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#131225] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-500/10">

              <div className="rounded-xl bg-fuchsia-500/10 p-3 text-2xl text-fuchsia-400">
                <RiMailLine />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Email Me
                </p>

                <p className="mt-1 text-sm font-semibold">
                  your-email@example.com
                </p>
              </div>

            </div>

            {/* Location */}
            <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#131225] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/50">

              <div className="rounded-xl bg-violet-500/10 p-3 text-2xl text-violet-400">
                <RiMapPinLine />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Pakistan
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-white/10 bg-[#131225] p-6">

              <h4 className="mb-5 font-bold">
                Find Me Online
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-2xl transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-400"
                >
                  <RiGithubFill />
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-2xl transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-400"
                >
                  <RiLinkedinFill />
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="rounded-3xl border border-white/10 bg-[#131225] p-6 shadow-xl md:p-8">

            <div className="mb-7 flex items-center justify-between">

              <h3 className="text-xl font-bold">
                Send a Message
              </h3>

              <RiArrowRightUpLine className="text-2xl text-fuchsia-400" />

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0c1b] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0c1b] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0c1b] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-500/30"
              >
                Send Message
                <RiSendPlaneFill className="text-lg" />
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ansharah Naeem.
            Crafted with React & Tailwind CSS.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;
