import type { Metadata } from "next";
import ProductsInteractive from "./components/ProductsInteractive";

export const metadata: Metadata = {
  title: "Catalogue véhicules — VehicleMarket",
  description:
    "Parcourez notre catalogue de plus de 12 000 véhicules toutes marques. Filtrez par marque, budget, carburant et plus encore.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen">
      {/* Page Header */}
      <div className="pt-32 pb-12 border-b border-[rgba(245,240,232,0.06)] bg-[#0A0A0A] grid-bg">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A020] mb-4">
            Catalogue complet
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Tous les{" "}
            <span className="italic font-light text-[#A09A8E]">véhicules.</span>
          </h1>
          <p className="text-[#A09A8E] mt-4 text-lg max-w-xl">
            Trouvez votre prochain véhicule parmi notre sélection de 12 000+ annonces — neuf, occasion et leasing.
          </p>
        </div>
      </div>

      <ProductsInteractive />
    </main>
  );
}