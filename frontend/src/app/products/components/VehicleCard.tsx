"use client";

import Link from "next/link";
import { getImageUrl } from "@/utils/imageUrl";
import Icon from "@/components/ui/AppIcon";

export interface VehicleItem {
  id: string;
  brand: string;
  model: string;
  version: string;
  price: number;
  year: number;
  km: number;
  fuel: string;
  transmission: string;
  power: string;
  location: string;
  image: string;
  alt: string;
  isNew: boolean;
  isFeatured?: boolean;
  badge?: string;
  badgeType?: string;
  daysAgo: number;
}

const fuelColors: Record<string, string> = {
  Électrique: "text-green-400",
  Hybride: "text-emerald-400",
  "Hybride rechargeable": "text-teal-400",
  Essence: "text-orange-400",
  Diesel: "text-yellow-400",
  GPL: "text-blue-400",
};

interface Props {
  vehicle: VehicleItem;
  view: "grid" | "list";
}

export default function VehicleCard({ vehicle: v, view }: Props) {
  if (view === "list") {
    return (
      <div className="vehicle-card rounded-2xl flex overflow-hidden group">
        <div className="card-image relative w-72 h-48 flex-shrink-0 overflow-hidden">
          <img src={getImageUrl(v.image)} alt={v.alt} className="w-full h-full object-cover" />
          {v.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className={`badge ${v.badgeType}`}>{v.badge}</span>
            </div>
          )}
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5550]">{v.brand}</p>
                <h3 className="font-display text-xl font-bold mt-0.5">
                  {v.model}{" "}
                  <span className="text-[#A09A8E] font-light italic text-base">{v.version}</span>
                </h3>
              </div>
              <span className="font-display text-2xl font-bold text-[#E8A020]">
                {v.price.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#A09A8E] mt-3">
              <span className="flex items-center gap-1.5"><Icon name="CalendarIcon" size={13} />{v.year}</span>
              <span className="flex items-center gap-1.5"><Icon name="ChartBarIcon" size={13} />{v.km.toLocaleString("fr-FR")} km</span>
              <span className={`flex items-center gap-1.5 font-semibold ${fuelColors[v.fuel] || ""}`}>
                <Icon name="BoltIcon" size={13} />{v.fuel}
              </span>
              <span className="flex items-center gap-1.5"><Icon name="CogIcon" size={13} />{v.transmission}</span>
              <span className="flex items-center gap-1.5"><Icon name="BoltIcon" size={13} variant="solid" className="text-[#E8A020]" />{v.power}</span>
              <span className="flex items-center gap-1.5"><Icon name="MapPinIcon" size={13} />{v.location}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[rgba(245,240,232,0.06)] mt-4">
            <span className="text-[10px] text-[#5A5550] font-medium">
              {v.daysAgo === 0 ? "Ajouté aujourd'hui" : `Il y a ${v.daysAgo} jours`}
            </span>
            <div className="flex items-center gap-3">
              <button className="btn-outline px-4 py-2 text-[10px]">
                <Icon name="HeartIcon" size={14} />
                Sauvegarder
              </button>
              <Link href="/products" className="btn-primary px-4 py-2 text-[10px]">
                Voir l'annonce
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vehicle-card rounded-2xl">
      <div className="card-image relative h-52 overflow-hidden">
        <img src={getImageUrl(v.image)} alt={v.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.5)] to-transparent" />
        {v.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`badge ${v.badgeType}`}>{v.badge}</span>
          </div>
        )}
        <button
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[rgba(13,13,13,0.6)] backdrop-blur-sm flex items-center justify-center text-[#A09A8E] hover:text-red-400 transition-colors"
          aria-label="Sauvegarder"
        >
          <Icon name="HeartIcon" size={14} />
        </button>
        <div className="absolute bottom-3 right-3 text-[10px] font-bold text-[#A09A8E]">
          {v.daysAgo === 0 ? "Aujourd'hui" : `Il y a ${v.daysAgo}j`}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5550]">{v.brand}</p>
            <h3 className="font-display text-lg font-bold mt-0.5">{v.model}</h3>
            <p className="text-[12px] text-[#A09A8E] italic">{v.version}</p>
          </div>
          <span className="font-display text-lg font-bold text-[#E8A020] flex-shrink-0 ml-2">
            {v.price.toLocaleString("fr-FR")} FCFA
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#A09A8E] my-3">
          <span className="flex items-center gap-1"><Icon name="CalendarIcon" size={11} />{v.year}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Icon name="ChartBarIcon" size={11} />{v.km.toLocaleString("fr-FR")} km</span>
          <span>·</span>
          <span className={`flex items-center gap-1 font-semibold ${fuelColors[v.fuel] || ""}`}>
            <Icon name="BoltIcon" size={11} />{v.fuel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#5A5550] mb-4">
          <Icon name="MapPinIcon" size={11} />
          {v.location}
        </div>

        <Link
          href="/products"
          className="flex items-center justify-between pt-4 border-t border-[rgba(245,240,232,0.06)] text-[11px] font-bold uppercase tracking-[0.15em] text-[#A09A8E] hover:text-[#E8A020] transition-colors group"
        >
          Voir l'annonce
          <Icon name="ArrowRightIcon" size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}