"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-hidden")?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-20">
      {/* Background accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 70%)"
        }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Typography + Search */}
          <div className="lg:col-span-7 space-y-10">
            {/* Eyebrow */}
            <div className="reveal-hidden flex items-center gap-4">
              <span className="badge badge-accent">Nouveau</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A09A8E]">
                + de 12 000 véhicules disponibles
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title reveal-hidden delay-1" ref={titleRef}>
              Trouvez
              <br />
              <span className="italic text-[#E8A020] accent-glow">Votre</span>
              <br />
              Voiture.
            </h1>

            {/* Sub */}
            <p className="reveal-hidden delay-2 text-lg text-[#A09A8E] leading-relaxed max-w-md font-medium">
              Toutes les marques, tous les budgets. Neuf, occasion, leasing — VehicleMarket rassemble le meilleur du marché automobile en un seul endroit.
            </p>

            {/* Search Glass Card */}
            <div className="reveal-hidden delay-3 search-glass rounded-2xl p-6 max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5A5550] mb-4">
                Recherche rapide
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                <select className="search-input rounded-lg px-4 py-3 text-sm w-full">
                  <option value="">Marque</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                  <option>Peugeot</option>
                  <option>Renault</option>
                  <option>Volkswagen</option>
                  <option>Toyota</option>
                  <option>Ford</option>
                </select>
                <select className="search-input rounded-lg px-4 py-3 text-sm w-full">
                  <option value="">Budget max</option>
                  <option>10 000 €</option>
                  <option>20 000 €</option>
                  <option>30 000 €</option>
                  <option>50 000 €</option>
                  <option>+ 50 000 €</option>
                </select>
                <select className="search-input rounded-lg px-4 py-3 text-sm w-full">
                  <option value="">Carburant</option>
                  <option>Essence</option>
                  <option>Diesel</option>
                  <option>Hybride</option>
                  <option>Électrique</option>
                </select>
              </div>
              <Link href="/products" className="btn-primary w-full justify-center rounded-lg">
                <Icon name="MagnifyingGlassIcon" size={16} />
                Rechercher
              </Link>
            </div>

            {/* Quick stats */}
            <div className="reveal-hidden delay-4 flex items-center gap-8">
              {[
              { value: "12K+", label: "Annonces" },
              { value: "48", label: "Marques" },
              { value: "98%", label: "Clients satisfaits" }]?.
              map((stat) =>
              <div key={stat?.label}>
                  <span className="font-display text-2xl font-bold text-[#E8A020]">
                    {stat?.value}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5550] mt-1">
                    {stat?.label}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Floating Cards */}
          <div className="lg:col-span-5 hidden lg:block relative h-[600px]">
            {/* Main car image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden float-animation">
              <AppImage
                src="https://images.unsplash.com/photo-1567570067374-205aef1e8a57"
                alt="BMW Série 5 blanche sur route ouverte, vue de côté"
                fill
                className="object-cover" />
              
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)"
                }} />
              
              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="search-glass rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09A8E]">
                        Offre du moment
                      </p>
                      <p className="font-display text-xl font-bold mt-1">BMW Série 5</p>
                      <p className="text-[#E8A020] font-bold text-lg">38 900 €</p>
                    </div>
                    <Link
                      href="/products"
                      className="w-12 h-12 rounded-full bg-[#E8A020] flex items-center justify-center flex-shrink-0 hover:bg-[#F0B840] transition-colors">
                      
                      <Icon name="ArrowRightIcon" size={18} className="text-[#0D0D0D]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card top-right */}
            <div
              className="absolute -top-4 -right-4 search-glass rounded-2xl p-4 z-10 float-animation-2 w-44"
              style={{ animationDelay: "1s" }}>
              
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5550]">
                Livraison
              </p>
              <p className="font-bold text-sm mt-1 text-[#F5F0E8]">Partout en France</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-[10px] text-[#A09A8E]">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A09A8E]">
          Défiler
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#A09A8E] to-transparent" />
      </div>
    </section>);

}