"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading number="04" title="Get In Touch" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-10 text-text-muted leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. Whether you
            have a project idea, a job opportunity, or just want to say hello —
            my inbox is always open.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <a
              href="mailto:maaq77483@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span className="text-accent"><FiMail size={16} /></span>
              maaq77483@gmail.com
            </a>
            <a
              href="tel:+923371694830"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span className="text-accent"><FiPhone size={16} /></span>
              +923371694830
            </a>
            <span className="flex items-center gap-2">
              <span className="text-accent"><FiMapPin size={16} /></span>
              Lahore, Pakistan
            </span>
            <a
              href="https://www.linkedin.com/in/ahmedabdullahsse-tkxel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span className="text-accent"><FiLinkedin size={16} /></span>
              LinkedIn
            </a>
          </div>

          <a
            href="mailto:maaq77483@gmail.com"
            className="inline-block rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
