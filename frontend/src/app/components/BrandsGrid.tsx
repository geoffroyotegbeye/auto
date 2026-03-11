"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { brandsAPI, vehiclesAPI } from "@/services/api";
import { getImageUrl } from "@/utils/imageUrl";

interface Brand {
  id: number;
  name: string;
  logo?: string;
  description?: string;
  is_active: boolean;
  display_order: number;
  vehicleCount?: number;
}

export default function BrandsGrid() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        // Récupérer les marques actives
        const brandsData = await brandsAPI.getAll({ active: 'true' });
        
        // Récupérer tous les véhicules pour compter par marque
        const vehiclesData = await vehiclesAPI.getAll({ status: 'available' });
        const vehiclesList = vehiclesData.vehicles || vehiclesData;
        
        // Compter les véhicules par marque
        const brandCounts: Record<string, number> = {};
        vehiclesList.forEach((vehicle: any) => {
          brandCounts[vehicle.brand] = (brandCounts[vehicle.brand] || 0) + 1;
        });
        
        // Ajouter le compte à chaque marque
        const brandsWithCount = brandsData.map((brand: Brand) => ({
          ...brand,
          vehicleCount: brandCounts[brand.name] || 0
        }));
        
        // Filtrer les marques qui ont au moins 1 véhicule et trier par ordre d'affichage
        const activeBrands = brandsWithCount
          .filter((brand: Brand) => brand.vehicleCount && brand.vehicleCount > 0)
          .sort((a: Brand, b: Brand) => a.display_order - b.display_order)
          .slice(0, 12); // Limiter à 12 marques
        
        setBrands(activeBrands);
      } catch (error) {
        console.error('Erreur lors du chargement des marques:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
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
  }, [brands]);

  if (loading) {
    return (
      <section className="py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center text-gray-600 dark:text-[#A09A8E]">
          <Icon name="ArrowPathIcon" size={48} className="text-[#E8A020] animate-spin mx-auto mb-4" />
          Chargement des marques...
        </div>
      </section>
    );
  }

  if (brands.length === 0) {
    return null; // Ne rien afficher si aucune marque
  }

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
            <span className="italic font-light text-gray-600 dark:text-[#A09A8E]">par marque.</span>
          </h2>
        </div>
        <Link href="/products" className="btn-outline reveal-hidden delay-2 self-start md:self-auto">
          Toutes les marques
          <Icon name="ArrowRightIcon" size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {brands.map((brand, i) => (
          <Link
            key={brand.id}
            href={`/products?brand=${brand.name}`}
            className={`brand-card rounded-xl reveal-hidden delay-${Math.min(i % 5 + 1, 5)} group`}
          >
            <div className="w-10 h-10 rounded-lg bg-[rgba(232,160,32,0.08)] flex items-center justify-center group-hover:bg-[rgba(232,160,32,0.2)] transition-colors overflow-hidden">
              {brand.logo ? (
                <img
                  src={getImageUrl(brand.logo)}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Icon name="TruckIcon" size={20} className="text-[#E8A020]" />
              )}
            </div>
            <span className="font-bold text-[13px] text-gray-900 dark:text-[#F5F0E8] text-center">{brand.name}</span>
            <span className="text-[10px] text-gray-500 dark:text-[#5A5550] font-medium">
              {brand.vehicleCount} {brand.vehicleCount === 1 ? 'annonce' : 'annonces'}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}