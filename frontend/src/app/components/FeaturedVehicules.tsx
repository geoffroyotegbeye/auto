"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
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
  body_style: string;
  main_image: string;
  status: string;
  is_featured: boolean;
  badge?: string;
  badge_type?: string;
}

export default function FeaturedVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await vehiclesAPI.getAll({ status: 'available' });
        const vehiclesList = data.vehicles || data;
        // Filtrer les véhicules en vedette (is_featured = true)
        const featured = vehiclesList.filter((v: Vehicle) => v.status === 'available' && v.is_featured);
        setVehicles(featured.slice(0, 5));
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
  }, [vehicles]);

  if (loading) {
    return (
      <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center text-gray-600 dark:text-[#A09A8E]">Chargement des véhicules...</div>
      </section>
    );
  }

  if (vehicles.length === 0) {
    return (
      <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center text-gray-600 dark:text-[#A09A8E]">Aucun véhicule disponible</div>
      </section>
    );
  }

  return (
    <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A020] mb-4 reveal-hidden">
            Sélection
          </p>
          <h2 className="section-title reveal-hidden delay-1">
            Véhicules
            <br />
            <span className="italic font-light text-gray-600 dark:text-[#A09A8E]">en vedette.</span>
          </h2>
        </div>
        <Link href="/products" className="btn-outline reveal-hidden delay-2 self-start md:self-auto">
          Voir tout le catalogue
          <Icon name="ArrowRightIcon" size={14} />
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        {/* Large card — premier véhicule */}
        {vehicles[0] && (
          <div className="vehicle-card rounded-2xl lg:row-span-2 reveal-hidden">
            <div className="card-image h-[340px] lg:h-[calc(100%-120px)] relative overflow-hidden">
              <img
                src={getImageUrl(vehicles[0].main_image)}
                alt={`${vehicles[0].brand} ${vehicles[0].model}`}
                className="w-full h-full object-cover"
              />
              {vehicles[0].badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`badge ${vehicles[0].badge_type || 'badge-new'}`}>
                    {vehicles[0].badge}
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-[#5A5550]">
                    {vehicles[0].brand}
                  </p>
                  <p className="font-display text-xl font-bold mt-1">{vehicles[0].model}</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-600 dark:text-[#A09A8E]">
                    <span>{vehicles[0].year}</span>
                    <span>·</span>
                    <span>{vehicles[0].km.toLocaleString()} km</span>
                    <span>·</span>
                    <span>{vehicles[0].fuel}</span>
                  </div>
                </div>
                <span className="font-display text-xl font-bold text-[#E8A020]">
                  {vehicles[0].price.toLocaleString()} FCFA
                </span>
              </div>
              <Link
                href="/products"
                className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-[#A09A8E] hover:text-[#E8A020] transition-colors"
              >
                Voir détails
                <Icon name="ArrowRightIcon" size={12} />
              </Link>
            </div>
          </div>
        )}

        {/* Medium cards — véhicules 2 et 3 */}
        {vehicles.slice(1, 3).map((v, i) => (
          <div key={v.id} className={`vehicle-card rounded-2xl reveal-hidden delay-${i + 2}`}>
            <div className="card-image h-44 relative overflow-hidden">
              <img
                src={getImageUrl(v.main_image)}
                alt={`${v.brand} ${v.model}`}
                className="w-full h-full object-cover"
              />
              {v.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`badge ${v.badge_type || 'badge-new'}`}>
                    {v.badge}
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-[#5A5550]">
                    {v.brand}
                  </p>
                  <p className="font-display text-lg font-bold mt-1">{v.model}</p>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-600 dark:text-[#A09A8E]">
                    <span>{v.year}</span>
                    <span>·</span>
                    <span>{v.km.toLocaleString()} km</span>
                  </div>
                </div>
                <span className="font-display text-lg font-bold text-[#E8A020]">
                  {v.price.toLocaleString()} FCFA
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Small cards — véhicules 4 et 5 */}
        {vehicles.slice(3, 5).map((v, i) => (
          <div key={v.id} className={`vehicle-card rounded-2xl flex overflow-hidden reveal-hidden delay-${i + 4}`}>
            <div className="card-image w-40 h-full flex-shrink-0 relative overflow-hidden">
              <img
                src={getImageUrl(v.main_image)}
                alt={`${v.brand} ${v.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-[#5A5550]">
                {v.brand}
              </p>
              <p className="font-display text-lg font-bold mt-1">{v.model}</p>
              <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-600 dark:text-[#A09A8E]">
                <span>{v.year}</span>
                <span>·</span>
                <span>{v.fuel}</span>
              </div>
              <span className="font-display text-lg font-bold text-[#E8A020] mt-2">
                {v.price.toLocaleString()} FCFA
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}