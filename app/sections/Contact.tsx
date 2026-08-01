import Reveal from "@/components/Reveal";
import { social, email } from "@/data/social";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-border-subtle bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted text-balance">
            Building something on mobile or decentralized infra? Want me to
            speak, run a workshop, or mentor your team? My inbox is open.
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            {email}
          </a>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {social.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border-subtle bg-surface-2/60 p-4 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <p className="text-sm font-semibold text-text group-hover:text-white">
                {s.label}
              </p>
              <p className="text-sm text-text-muted">{s.handle}</p>
            </a>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border-subtle pt-8 text-sm text-text-muted sm:flex-row">
          <p>Based in Nigeria 🇳🇬 · available worldwide</p>
          <p>
            © 2026 Ransom EZE. All rights reserved. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
