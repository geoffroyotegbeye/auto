"use client";



const brands = [
  "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Peugeot",
  "Renault", "Citroën", "Toyota", "Ford", "Opel",
  "Hyundai", "Kia", "Nissan", "Volvo", "Tesla",
  "Porsche", "Alfa Romeo", "Fiat", "SEAT", "Skoda",
];

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-12 overflow-hidden border-y border-gray-200 dark:border-[rgba(245,240,232,0.06)]">
      <div className="marquee-track">
        <div className="marquee-inner">
          {doubled?.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="inline-flex items-center gap-4 px-10 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 dark:text-[#5A5550] hover:text-[#E8A020] transition-colors cursor-default"
            >
              <span className="w-1 h-1 rounded-full bg-[#E8A020] flex-shrink-0" />
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}