import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

const socialLinks = [
  { icon: "GlobeAltIcon", label: "Facebook", href: "#" },
  { icon: "CameraIcon", label: "Instagram", href: "#" },
  { icon: "ChatBubbleLeftEllipsisIcon", label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-[rgba(245,240,232,0.08)] bg-white dark:bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        {/* Pattern 1 — Linear Single-Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900 dark:text-[#F5F0E8] tracking-tight">
              Mig Motor
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-[#5A5550]">
            <Link href="/" className="hover:text-[#E8A020] transition-colors">
              Accueil
            </Link>
            <Link href="/products" className="hover:text-[#E8A020] transition-colors">
              Véhicules
            </Link>
            <Link href="#" className="hover:text-[#E8A020] transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-[#E8A020] transition-colors">
              Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#E8A020] transition-colors">
              Contact
            </Link>
          </div>

          {/* Social + Copyright */}
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-500 dark:text-[#5A5550] hover:text-[#E8A020] transition-colors"
              >
                <Icon name={s.icon as Parameters<typeof Icon>[0]["name"]} size={18} />
              </a>
            ))}
            <span className="text-[11px] text-gray-500 dark:text-[#5A5550] font-medium ml-2">
              © 2026 Mig Motor
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}