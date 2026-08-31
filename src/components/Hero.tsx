"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import TypingText from "./TypingText";
import FloatingParticles from "./FloatingParticles";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dark.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent blur-[150px]"
      />

      {/* Rocket flying along curved path */}
      <motion.div
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
        className="pointer-events-none absolute z-20"
        style={{
          offsetPath:
            "path('M -50 750 Q 300 500 500 350 Q 700 200 900 100 Q 1100 0 1500 -100')",
          offsetRotate: "auto",
        }}
      >
        <div className="absolute -left-36 top-1/2 h-1 w-36 -translate-y-1/2 bg-gradient-to-l from-accent via-accent/50 to-transparent blur-[2px]" />
        <div className="absolute -left-64 top-1/2 h-0.5 w-64 -translate-y-1/2 bg-gradient-to-l from-accent/40 via-accent/15 to-transparent blur-[3px]" />
        <span className="text-2xl sm:text-3xl" role="img" aria-label="rocket">🚀</span>
      </motion.div>

      {/* Second subtle orb bottom-right */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-mono text-sm tracking-wider text-accent"
        >
          Hi, my name is
        </motion.p>

        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          <TypingText text="Ahmed Abdullah" delay={0.4} />
        </h1>

        <h2 className="mb-6 text-2xl font-medium text-text-muted sm:text-3xl">
          <TypingText text="Full Stack Software Engineer" delay={1.0} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-text-muted"
        >
          I build scalable web applications with{" "}
          <span className="text-accent">React JS</span>,{" "}
          <span className="text-accent">Laravel</span>, and{" "}
          <span className="text-accent">WordPress</span>. Currently building
          compliance solutions at Tkxel from Lahore, Pakistan.
        </motion.p>

        {/* Social links — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mb-12 flex items-center justify-center gap-5"
        >
          <MagneticButton
            as="a"
            href="https://www.linkedin.com/in/ahmedabdullahsse-tkxel/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn"
            className="rounded-full border border-border bg-bg/40 p-3 text-text-muted backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
          >
            <FiLinkedin size={20} />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="mailto:a.abdullah3672@gmail.com"
            ariaLabel="Email"
            className="rounded-full border border-border bg-bg/40 p-3 text-text-muted backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
          >
            <FiMail size={20} />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://github.com/aabdullah3672"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub"
            className="rounded-full border border-border bg-bg/40 p-3 text-text-muted backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
          >
            <FiGithub size={20} />
          </MagneticButton>
        </motion.div>

        {/* CTA — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <MagneticButton
            as="a"
            href="#projects"
            className="rounded-md bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-md border border-border bg-bg/40 px-7 py-3 text-sm font-semibold text-text-muted backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-text-muted"
          >
            <FiArrowDown size={22} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
