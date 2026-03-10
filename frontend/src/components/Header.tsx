"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Véhicules", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Effet de transparence au scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll du corps de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  // Fermer le menu au changement de page
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[rgba(13,13,13,0.95)] backdrop-blur-xl border-b border-[rgba(104,75,30,0.15)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group z-[60]">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#F5F0E8] tracking-tight">
              Mig Motor
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("?")[0]));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-colors ${
                  isActive ? "text-[#E8A020]" : "text-[#A09A8E] hover:text-[#F5F0E8]"
                }`}
              >
                {link.label}
                {isActive && <span className="absolute -bottom-2 left-0 h-[2px] bg-[#E8A020] w-full" />}
              </Link>
            );
          })}
        </nav>

        {/* Toggle Mobile */}
        <div className="flex items-center gap-4">
          <Link href="/products" className="hidden lg:flex btn-primary text-[11px] py-2 px-6 rounded-full">
            <Icon name="MagnifyingGlassIcon" size={14} /> Rechercher
          </Link>
          
          <button
            className="lg:hidden p-2 text-[#A09A8E] hover:text-[#F5F0E8] transition-colors z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "XMarkIcon" : "Bars3Icon"} size={28} />
          </button>
        </div>
      </div>

      {/* Menu Mobile - Version Drawer Latéral */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0D0D0D] transition-transform duration-500 ease-in-out z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-xl font-bold uppercase tracking-[0.3em] ${
                pathname === link.href ? "text-[#E8A020]" : "text-[#A09A8E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/products" 
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full max-w-xs py-4 text-center rounded-lg flex justify-center items-center gap-3 mt-4"
          >
            <Icon name="MagnifyingGlassIcon" size={20} />
            Rechercher un véhicule
          </Link>
        </nav>
      </div>
    </header>
  );
}