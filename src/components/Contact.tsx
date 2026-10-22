
import { useState, type FormEvent } from "react";

import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinFill,
  RiSendPlaneLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

// Replace these with your actual details.
const CONTACT_EMAIL = "your-email@example.com";
const GITHUB_URL = "https://github.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="Contact"
      className="bg-[#F8F4EF] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#A17D60]">
            04 — Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-[#30251F] md:text-5xl">
            Let's create{" "}
            <span className="font-serif italic font-normal text-[#99765B]">
              together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#765C48]">
            Have an idea, project or opportunity? I'd love to
            connect and hear about it.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#EDE3D7] p-8 md:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#99765B]">
                Let's Talk
              </span>

              <h3 className="mt-5 font-serif text-4xl italic leading-tight text-[#30251F]">
                Great things start
                <br />
                with a conversation.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#765C48]">
                I'm interested in frontend projects, collaboration
                and opportunities to continue learning and growing.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-9 flex items-center gap-4 rounded-2xl bg-[#F8F4EF] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="rounded-xl bg-[#E8D8C7] p-3 text-xl text-[#765C48]">
                  <RiMailLine />
                </div>

                <div>
                  <p className="text-xs text-[#99765B]">
                    Email Me
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-[#30251F]">
                    {CONTACT_EMAIL}
                  </p>
                </div>

                <RiArrowRightUpLine className="ml-auto text-xl text-[#765C48]" />
              </a>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#99765B]">
                Follow Along
              </p>

              <div className="flex gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full bg-[#F8F4EF] p-4 text-xl text-[#30251F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8C3AD]"
                >
                  <RiGithubFill />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full bg-[#F8F4EF] p-4 text-xl text-[#30251F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8C3AD]"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-[#30251F] p-8 md:p-10">
            <h3 className="mb-8 text-2xl font-bold text-[#F8F4EF]">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-[#E8D8C7]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#765C48] bg-[#49382D] px-4 py-3 text-sm text-white outline-none placeholder:text-[#B9A38F] focus:border-[#D8C3AD]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-[#E8D8C7]"
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
                  className="w-full rounded-xl border border-[#765C48] bg-[#49382D] px-4 py-3 text-sm text-white outline-none placeholder:text-[#B9A38F] focus:border-[#D8C3AD]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-[#E8D8C7]"
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
                  className="w-full resize-none rounded-xl border border-[#765C48] bg-[#49382D] px-4 py-3 text-sm text-white outline-none placeholder:text-[#B9A38F] focus:border-[#D8C3AD]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D8C3AD] px-6 py-3.5 text-sm font-bold text-[#30251F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F4EF]"
              >
                Open Email App <RiSendPlaneLine />
              </button>
            </form>

            <p className="mt-4 text-xs leading-5 text-[#C9B6A2]">
              This form opens your email application rather than
              sending messages directly.
            </p>
          </div>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#E3D6C8] pt-8 text-center text-sm text-[#99765B] md:flex-row">
          <p>
            © {new Date().getFullYear()} Ansharah Naeem.
            All rights reserved.
          </p>

          <p>Made with care & a little creativity.</p>
        </footer>
      </div>
    </section>
  );
}
