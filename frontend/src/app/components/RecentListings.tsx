"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import { vehiclesAPI } from "@/services/api";
import { getImageUrl } from "@/utils/imageUrl";

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuel: string;
  transmission: string;
  main_image: string;
  status: string;
  created_at: string;
}

const fuelColors: Record<string, string> = {
  Électrique: "text-green-400",
  Hybride: "text-emerald-400",
  "Hybride rechargeable": "text-teal-400",
  Essence: "text-orange-400",
  Diesel: "text-yellow-400",
  GPL: "text-purple-400"
};

export default function RecentListings() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filters = ["Tous", "Électrique", "Hybride", "Essence", "Diesel"];

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await vehiclesAPI.getAll({ status: 'available' });
        const vehiclesList = data.vehicles || data;
        // Trier par date de création (plus récents en premier) et prendre les 6 premiers
        const sorted = vehiclesList
          .filter((v: Vehicle) => v.status === 'available')
          .sort((a: Vehicle, b: Vehicle) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 6);
        setVehicles(sorted);
      } catch (error) {
        console.error('Erreur lors du chargement des véhicules:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

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
  }, [activeFilter]);

  const filtered =
    activeFilter === "Tous"
      ? vehicles
      : vehicles.filter((v) => v.fuel.includes(activeFilter));

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center text-[#A09A8E]">Chargement des annonces...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A020] mb-4 reveal-hidden">
              Dernières annonces
            </p>
            <h2 className="section-title reveal-hidden delay-1">
              Ajoutées
              <br />
              <span className="italic font-light text-[#A09A8E]">récemment.</span>
            </h2>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 reveal-hidden delay-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                  activeFilter === f
                    ? "bg-[#E8A020] border-[#E8A020] text-[#0D0D0D]"
                    : "border-[rgba(245,240,232,0.12)] text-[#A09A8E] hover:border-[#E8A020] hover:text-[#E8A020]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((v, i) => {
            const daysAgo = getDaysAgo(v.created_at);
            return (
              <div
                key={v.id}
                className={`vehicle-card rounded-2xl reveal-hidden delay-${Math.min(i + 1, 5)}`}
              >
                {/* Image */}
                <div className="card-image relative h-52">
                  <AppImage
                    src={getImageUrl(v.main_image)}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.6)] to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {daysAgo <= 7 && <span className="badge badge-new">Nouveau</span>}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09A8E]">
                      {daysAgo === 0 ? "Aujourd'hui" : `Il y a ${daysAgo}j`}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5550]">
                        {v.brand}
                      </p>
                      <h3 className="font-display text-lg font-bold mt-0.5">
                        {v.model}
                      </h3>
                    </div>
                    <span className="font-display text-lg font-bold text-[#E8A020] flex-shrink-0">
                      {v.price.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>

                  {/* Specs row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#A09A8E] mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="CalendarIcon" size={12} />
                      {v.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ChartBarIcon" size={12} />
                      {v.km.toLocaleString("fr-FR")} km
                    </span>
                    <span className={`flex items-center gap-1 font-semibold ${fuelColors[v.fuel] || "text-[#A09A8E]"}`}>
                      <Icon name="BoltIcon" size={12} />
                      {v.fuel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="CogIcon" size={12} />
                      {v.transmission}
                    </span>
                  </div>

                  <Link
                    href="/products"
                    className="flex items-center justify-between pt-4 border-t border-[rgba(245,240,232,0.06)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#A09A8E] hover:text-[#E8A020] transition-colors group"
                  >
                    Voir l'annonce
                    <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-hidden">
          <Link href="/products" className="btn-primary text-sm px-10 py-5">
            Voir toutes les annonces
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}