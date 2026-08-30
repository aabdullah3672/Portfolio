export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Ahmed Abdullah. All rights reserved.
        </p>
        <p className="font-mono">
          Built with <span className="text-accent">Next.js</span> &amp;{" "}
          <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
