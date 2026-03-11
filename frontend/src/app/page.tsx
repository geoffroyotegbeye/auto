import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import FeaturedVehicles from "./components/FeaturedVehicules";
import BrandsMarquee from "./components/BrandsMarquee";
import StatsSection from "./components/StatsSection";
import RecentListings from "./components/RecentListings";
import BrandsGrid from "./components/BrandsGrid";
import ReviewsSection from "./components/ReviewsSection";

export const metadata: Metadata = {
  title: "VehicleMarket — Achat et vente de véhicules toutes marques",
  description:
    "Trouvez votre prochain véhicule parmi plus de 12 000 annonces. BMW, Mercedes, Renault, Toyota et bien plus. Neuf, occasion, leasing.",
  keywords: ["voiture", "vente", "occasion", "neuf", "automobile", "marché auto", "France"],
};

export default function HomepagePage() {
  return (
    <main className="bg-white dark:bg-vm-dark min-h-screen">
      <HeroSection />
      <BrandsMarquee />
      <RecentListings />
      <StatsSection />
      <BrandsGrid />
      <FeaturedVehicles />
      <ReviewsSection />
    </main>
  );
}