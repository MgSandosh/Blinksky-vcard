import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Globe,
  Download,
  ArrowUpRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/brand-icons";
import logoUrl from "@/assets/BS_LOGO.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blink Sky Production — Contact" },
      {
        name: "description",
        content:
          "Official contact card for Blink Sky Production — WhatsApp, phone, email, website and social media.",
      },
      { property: "og:title", content: "Blink Sky Production — Contact" },
      {
        property: "og:description",
        content:
          "Official contact card for Blink Sky Production — WhatsApp, phone, email, website and social media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const quickActions = [
  { label: "Call", href: "tel:+94760047671", Icon: Phone },
  { label: "WhatsApp", href: "https://wa.me/94760047671", Icon: WhatsAppIcon },
  { label: "Email", href: "mailto:blinkskyproduction@gmail.com", Icon: Mail },
];

const socials = [
  {
    label: "Facebook",
    value: "Blink Sky Production",
    href: "https://www.facebook.com/profile.php?id=61552347156079",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    value: "@blink_sky_production",
    href: "https://www.instagram.com/blink_sky_production",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    value: "@blinkskyproduction",
    href: "https://www.tiktok.com/@blinkskyproduction",
    Icon: TikTokIcon,
  },
  {
    label: "YouTube",
    value: "Blink Sky Production",
    href: "https://www.youtube.com/channel/UCIFUSn7VLWURlpkR_-6PIkA",
    Icon: YouTubeIcon,
  },
];

function saveContactCard() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Blink Sky Production",
    "ORG:Blink Sky Production",
    "TEL;TYPE=CELL:+94760047671",
    "EMAIL:blinkskyproduction@gmail.com",
    "URL:https://blinkskyproduction.com",
    "X-SOCIALPROFILE;TYPE=facebook:https://www.facebook.com/profile.php?id=61552347156079",
    "X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/blink_sky_production",
    "X-SOCIALPROFILE;TYPE=tiktok:https://www.tiktok.com/@blinkskyproduction",
    "X-SOCIALPROFILE;TYPE=youtube:https://www.youtube.com/channel/UCIFUSn7VLWURlpkR_-6PIkA",
    "END:VCARD",
  ].join("\r\n");
  const blob = new Blob([vcf], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "blink-sky-production.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function Index() {
  return (
    <main className="min-h-screen bg-background bg-glow flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          {/* gold accent hairline */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

          {/* Header */}
          <header className="flex flex-col items-center px-6 pb-5 pt-7 text-center sm:px-8">
            <div className="rounded-full border border-border p-3 shadow-inner">
              <img
                src={logoUrl}
                alt="Blink Sky Production logo"
                className="h-20 w-20 object-contain"
              />
            </div>
            <h1 className="mt-4 font-display text-[clamp(0.88rem,4.5vw,1.5rem)] uppercase leading-tight tracking-[0.03em]">
              Blink Sky Production
            </h1>
            <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Media Production
            </p>
          </header>

          <div className="mx-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Quick actions */}
          <section className="grid grid-cols-3 gap-2.5 px-6 pt-5">
            {quickActions.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-background/40 px-3 py-3.5 transition hover:-translate-y-0.5 hover:border-primary/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 text-primary transition group-hover:bg-primary group-hover:text-background">
                  <Icon size={20} />
                </span>
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em]">
                  {label}
                </span>
              </a>
            ))}
          </section>

          {/* Website */}
          <section className="px-6 pt-2.5">
            <a
              href="https://blinkskyproduction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/12 via-primary/5 to-transparent px-4 py-3.5 transition-all duration-300 hover:border-primary/70 hover:from-primary/20"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-background/70 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  <Globe size={16} />
                </span>
                <span className="whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Official website
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </a>
          </section>

          {/* Socials */}
          <section className="px-6 pb-2 pt-3.5">
            <p className="px-1 pb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Follow us
            </p>
            <ul className="grid gap-1.5">
              {socials.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-3.5 py-2.5 transition hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    <span className="text-foreground/80 transition group-hover:text-primary">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="block truncate text-[0.68rem] text-muted-foreground">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Save contact */}
          <section className="px-6 pb-6 pt-3.5">
            <button
              type="button"
              onClick={saveContactCard}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-border px-4 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.25em] transition hover:border-primary hover:text-primary"
            >
              <Download size={16} />
              Save contact
            </button>
            <p className="mt-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-muted-foreground/60">
              Blink Sky Production
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
