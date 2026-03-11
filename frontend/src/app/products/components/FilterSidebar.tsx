"use client";

import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface Filters {
  brands: string[];
  priceMin: number;
  priceMax: number;
  yearMin: number;
  yearMax: number;
  fuels: string[];
  bodyStyles: string[];
  transmissions: string[];
  kmMax: number;
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
  priceRange?: { minPrice: number; maxPrice: number };
  currency?: string;
}

const brandOptions = [
  "Audi", "BMW", "Citroën", "Ford", "Hyundai", "Kia",
  "Mercedes", "Nissan", "Peugeot", "Porsche", "Renault",
  "Skoda", "Tesla", "Toyota", "Volkswagen", "Volvo",
];
const fuelOptions = ["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Électrique", "GPL"];
const bodyOptions = ["Berline", "SUV", "Break", "Coupé", "Cabriolet", "Monospace", "Citadine", "Pick-up"];
const transmissionOptions = ["Manuelle", "Automatique", "Semi-automatique"];

export default function FilterSidebar({ filters, onChange, onReset, isOpen, onClose, priceRange, currency = 'FCFA' }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["brand", "price", "fuel"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const toggleBrand = (brand: string) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({ ...filters, brands: updated });
  };

  const toggleFuel = (fuel: string) => {
    const updated = filters.fuels.includes(fuel)
      ? filters.fuels.filter((f) => f !== fuel)
      : [...filters.fuels, fuel];
    onChange({ ...filters, fuels: updated });
  };

  const toggleBody = (body: string) => {
    const updated = filters.bodyStyles.includes(body)
      ? filters.bodyStyles.filter((b) => b !== body)
      : [...filters.bodyStyles, body];
    onChange({ ...filters, bodyStyles: updated });
  };

  const toggleTransmission = (t: string) => {
    const updated = filters.transmissions.includes(t)
      ? filters.transmissions.filter((x) => x !== t)
      : [...filters.transmissions, t];
    onChange({ ...filters, transmissions: updated });
  };

  const sectionHeader = (id: string, label: string) => (
    <button
      className="flex items-center justify-between w-full py-3 text-left"
      onClick={() => toggleSection(id)}
    >
      <span className="filter-group-title">{label}</span>
      <Icon
        name={expandedSections.includes(id) ? "ChevronUpIcon" : "ChevronDownIcon"}
        size={14}
        className="text-gray-500 dark:text-[#5A5550]"
      />
    </button>
  );

  const content = (
    <div className="w-72 flex-shrink-0 filter-panel h-fit sticky top-24 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-[rgba(245,240,232,0.08)]">
        <h3 className="font-bold text-[13px] uppercase tracking-[0.2em] text-gray-900 dark:text-[#F5F0E8]">Filtres</h3>
        <button
          onClick={onReset}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A020] hover:text-[#F0B840] transition-colors"
        >
          Réinitialiser
        </button>
      </div>

      <div className="p-6 space-y-1">
        {/* Brand */}
        <div className="border-b border-gray-200 dark:border-[rgba(245,240,232,0.06)] pb-4">
          {sectionHeader("brand", "Marque")}
          {expandedSections.includes("brand") && (
            <div className="mt-2 space-y-2 max-h-52 overflow-y-auto pr-1">
              {brandOptions.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="filter-checkbox w-4 h-4 rounded"
                    checked={filters.brands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span className="text-[12px] font-medium text-gray-600 dark:text-[#A09A8E] group-hover:text-gray-900 dark:text-[#F5F0E8] transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="border-b border-gray-200 dark:border-[rgba(245,240,232,0.06)] pb-4">
          {sectionHeader("price", "Budget")}
          {expandedSections.includes("price") && (
            <div className="mt-3 space-y-4">
              <div className="flex items-center justify-between text-[12px] text-gray-600 dark:text-[#A09A8E]">
                <span>{filters.priceMin.toLocaleString("fr-FR")} {currency}</span>
                <span>{filters.priceMax.toLocaleString("fr-FR")} {currency}</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-[#5A5550] mb-2">Prix minimum</p>
                <input
                  type="range"
                  min={priceRange?.minPrice || 0}
                  max={priceRange?.maxPrice || 100000000}
                  step={100000}
                  value={filters.priceMin}
                  onChange={(e) => onChange({ ...filters, priceMin: Number(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-[#5A5550] mb-2">Prix maximum</p>
                <input
                  type="range"
                  min={priceRange?.minPrice || 0}
                  max={priceRange?.maxPrice || 100000000}
                  step={100000}
                  value={filters.priceMax}
                  onChange={(e) => onChange({ ...filters, priceMax: Number(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Year */}
        <div className="border-b border-gray-200 dark:border-[rgba(245,240,232,0.06)] pb-4">
          {sectionHeader("year", "Année")}
          {expandedSections.includes("year") && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] text-gray-500 dark:text-[#5A5550] mb-1">De</p>
                <select
                  className="search-input rounded-lg px-3 py-2 text-sm w-full"
                  value={filters.yearMin}
                  onChange={(e) => onChange({ ...filters, yearMin: Number(e.target.value) })}
                >
                  {Array.from({ length: 15 }, (_, i) => 2010 + i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-[#5A5550] mb-1">À</p>
                <select
                  className="search-input rounded-lg px-3 py-2 text-sm w-full"
                  value={filters.yearMax}
                  onChange={(e) => onChange({ ...filters, yearMax: Number(e.target.value) })}
                >
                  {Array.from({ length: 15 }, (_, i) => 2010 + i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Fuel */}
        <div className="border-b border-gray-200 dark:border-[rgba(245,240,232,0.06)] pb-4">
          {sectionHeader("fuel", "Carburant")}
          {expandedSections.includes("fuel") && (
            <div className="mt-2 space-y-2">
              {fuelOptions.map((fuel) => (
                <label key={fuel} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="filter-checkbox w-4 h-4 rounded"
                    checked={filters.fuels.includes(fuel)}
                    onChange={() => toggleFuel(fuel)}
                  />
                  <span className="text-[12px] font-medium text-gray-600 dark:text-[#A09A8E] group-hover:text-gray-900 dark:text-[#F5F0E8] transition-colors">
                    {fuel}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="border-b border-gray-200 dark:border-[rgba(245,240,232,0.06)] pb-4">
          {sectionHeader("body", "Carrosserie")}
          {expandedSections.includes("body") && (
            <div className="mt-2 flex flex-wrap gap-2">
              {bodyOptions.map((body) => (
                <button
                  key={body}
                  onClick={() => toggleBody(body)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] border rounded transition-all ${
                    filters.bodyStyles.includes(body)
                      ? "bg-[#E8A020] border-[#E8A020] text-[#0D0D0D]"
                      : "border-[rgba(245,240,232,0.12)] text-gray-600 dark:text-[#A09A8E] hover:border-[#E8A020]"
                  }`}
                >
                  {body}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Transmission */}
        <div className="pb-4">
          {sectionHeader("transmission", "Boîte")}
          {expandedSections.includes("transmission") && (
            <div className="mt-2 space-y-2">
              {transmissionOptions.map((t) => (
                <label key={t} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="filter-checkbox w-4 h-4 rounded"
                    checked={filters.transmissions.includes(t)}
                    onChange={() => toggleTransmission(t)}
                  />
                  <span className="text-[12px] font-medium text-gray-600 dark:text-[#A09A8E] group-hover:text-gray-900 dark:text-[#F5F0E8] transition-colors">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">{content}</div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative z-10 w-80 h-full overflow-y-auto bg-gray-50 dark:bg-[#141414] border-r border-gray-200 dark:border-[rgba(245,240,232,0.08)]">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-[rgba(245,240,232,0.08)]">
              <h3 className="font-bold text-[13px] uppercase tracking-[0.2em]">Filtres</h3>
              <button onClick={onClose} className="text-gray-600 dark:text-[#A09A8E] hover:text-gray-900 dark:text-[#F5F0E8]">
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>
            <div className="p-6">{/* Reuse same filter groups */}</div>
          </div>
        </div>
      )}
    </>
  );
}