"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

const stats: Stat[] = [
  {
    value: 12000,
    suffix: "+",
    label: "Annonces actives",
    description: "Véhicules disponibles à la vente partout en France",
    icon: "TruckIcon",
  },
  {
    value: 48,
    suffix: "",
    label: "Marques référencées",
    description: "Des plus grandes marques mondiales aux spécialistes européens",
    icon: "StarIcon",
  },
  {
    value: 98,
    suffix: "%",
    label: "Clients satisfaits",
    description: "Note moyenne de satisfaction sur nos 5 dernières années",
    icon: "HeartIcon",
  },
  {
    value: 7,
    suffix: "j",
    label: "Délai moyen de vente",
    description: "Votre véhicule trouvé et livré en moins d'une semaine",
    icon: "ClockIcon",
  },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function StatCard({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const count = useCountUp(stat.value, 1800, triggered);
  const display = stat.value >= 1000 ? `${(count / 1000).toFixed(1)}K` : count.toString();

  return (
    <div className="p-8 border border-[rgba(245,240,232,0.08)] bg-[#141414] rounded-2xl hover:border-[#E8A020] transition-colors group">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-[rgba(232,160,32,0.1)] flex items-center justify-center group-hover:bg-[rgba(232,160,32,0.2)] transition-colors">
          <Icon name={stat.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-[#E8A020]" />
        </div>
        <span className="badge badge-outline">{stat.label}</span>
      </div>
      <div className="stat-number">
        {stat.value >= 1000 ? display : count}
        {stat.suffix}
      </div>
      <p className="text-[13px] text-[#A09A8E] leading-relaxed mt-3">{stat.description}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-[#0D0D0D]" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A020]">
              Pourquoi nous
            </p>
            <h2 className="section-title">
              Le marché
              <br />
              <span className="italic font-light text-[#A09A8E]">auto en chiffres.</span>
            </h2>
            <p className="text-[#A09A8E] leading-relaxed">
              VehicleMarket est la référence française pour l'achat et la vente de véhicules toutes marques. Transparence, rapidité et confiance.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              {[
                "Garantie satisfait ou remboursé 30 jours",
                "Financement en ligne en 5 minutes",
                "Livraison à domicile disponible",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[13px] text-[#A09A8E]">
                  <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-[#E8A020] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} triggered={triggered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}