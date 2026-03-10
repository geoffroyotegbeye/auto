"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const brandGroups = [
  { name: "BMW", country: "Allemagne", count: 284, icon: "TruckIcon" },
  { name: "Mercedes", country: "Allemagne", count: 319, icon: "TruckIcon" },
  { name: "Audi", country: "Allemagne", count: 198, icon: "TruckIcon" },
  { name: "Volkswagen", country: "Allemagne", count: 441, icon: "TruckIcon" },
  { name: "Peugeot", country: "France", count: 523, icon: "TruckIcon" },
  { name: "Renault", country: "France", count: 612, icon: "TruckIcon" },
  { name: "Citroën", country: "France", count: 287, icon: "TruckIcon" },
  { name: "Toyota", country: "Japon", count: 356, icon: "TruckIcon" },
  { name: "Ford", country: "USA", count: 231, icon: "TruckIcon" },
  { name: "Tesla", country: "USA", count: 143, icon: "BoltIcon" },
  { name: "Porsche", country: "Allemagne", count: 89, icon: "TruckIcon" },
  { name: "Volvo", country: "Suède", count: 167, icon: "TruckIcon" },
];

export default function BrandsGrid() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-hidden").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A020] mb-4 reveal-hidden">
            Catalogue
          </p>
          <h2 className="section-title reveal-hidden delay-1">
            Parcourir
            <br />
            <span className="italic font-light text-[#A09A8E]">par marque.</span>
          </h2>
        </div>
        <Link href="/products" className="btn-outline reveal-hidden delay-2 self-start md:self-auto">
          Toutes les marques
          <Icon name="ArrowRightIcon" size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {brandGroups.map((brand, i) => (
          <Link
            key={brand.name}
            href={`/products?brand=${brand.name.toLowerCase()}`}
            className={`brand-card rounded-xl reveal-hidden delay-${Math.min(i % 5 + 1, 5)} group`}
          >
            <div className="w-10 h-10 rounded-lg bg-[rgba(232,160,32,0.08)] flex items-center justify-center group-hover:bg-[rgba(232,160,32,0.2)] transition-colors">
              <Icon name={brand.icon as Parameters<typeof Icon>[0]["name"]} size={20} className="text-[#E8A020]" />
            </div>
            <span className="font-bold text-[13px] text-[#F5F0E8] text-center">{brand.name}</span>
            <span className="text-[10px] text-[#5A5550] font-medium">{brand.count} annonces</span>
          </Link>
        ))}
      </div>
    </section>
  );
}