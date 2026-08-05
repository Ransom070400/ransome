"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  XIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TelegramIcon,
  MediumIcon,
} from "@/components/BrandIcons";
import { social, email } from "@/data/social";

const ease = [0.22, 1, 0.36, 1] as const;

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const meta: Record<
  string,
  { icon: IconType; tone: string; dark: boolean; span: string }
> = {
  x: {
    icon: XIcon,
    tone: "bg-purple text-white",
    dark: true,
    span: "col-span-2 md:col-start-3 md:col-span-2 md:row-start-1",
  },
  github: {
    icon: GithubIcon,
    tone: "bg-bg-dark text-white",
    dark: true,
    span: "md:col-start-3 md:row-start-2",
  },
  linkedin: {
    icon: LinkedinIcon,
    tone: "bg-mint text-ink",
    dark: false,
    span: "md:col-start-4 md:row-start-2",
  },
  telegram: {
    icon: TelegramIcon,
    tone: "bg-yellow text-ink",
    dark: false,
    span: "col-span-2 md:col-start-1 md:col-span-2 md:row-start-3",
  },
  youtube: {
    icon: YoutubeIcon,
    tone: "bg-pink text-ink",
    dark: false,
    span: "md:col-start-2 md:row-start-3",
  },
  medium: {
    icon: MediumIcon,
    tone: "bg-purple-light text-white",
    dark: true,
    span: "col-span-2 md:col-start-3 md:col-span-2 md:row-start-3",
  },
};

function Tile({
  href,
  label,
  handle,
  icon: Icon,
  tone,
  dark,
  span,
  delay,
}: {
  href: string;
  label: string;
  handle: string;
  icon: IconType;
  tone: string;
  dark: boolean;
  span: string;
  delay: number;
}) {
  const arrow = dark
    ? "bg-white/15 text-white group-hover:bg-white group-hover:text-ink"
    : "bg-ink/[0.08] text-ink group-hover:bg-ink group-hover:text-white";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease, delay }}
      whileHover={{ y: -4 }}
      className={`group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[26px] p-6 ${tone} ${span}`}
    >
      <span
        className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${arrow}`}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>
      <Icon className="h-7 w-7" />
      <div>
        <p className="font-display text-lg font-semibold">{label}</p>
        <p className="text-sm opacity-70">{handle}</p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 pb-12 pt-24 sm:pt-28">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[160px]">
        {/* Big CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="col-span-2 flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[26px] bg-bg-dark p-8 text-white md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 md:min-h-0"
        >
          <div>
            <span className="label text-white/50">Contact</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Let&apos;s build the next chapter.
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Building on mobile or decentralized infra? Want me to speak, run a
              workshop, or mentor your team? My inbox is open.
            </p>
          </div>
          <a
            href={`mailto:${email}`}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            {email}
          </a>
        </motion.div>

        {social.map((s, i) => {
          const m = meta[s.id];
          if (!m) return null;
          return (
            <Tile
              key={s.id}
              href={s.href}
              label={s.label}
              handle={s.handle}
              icon={m.icon}
              tone={m.tone}
              dark={m.dark}
              span={m.span}
              delay={i * 0.05}
            />
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>Based in Nigeria 🇳🇬 · available worldwide</p>
        <p>© 2026 Ransom Eze. Built with intention.</p>
      </div>
    </footer>
  );
}
