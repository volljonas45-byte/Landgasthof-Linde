import Hero        from "@/components/sections/Hero";
import Kueche      from "@/components/sections/Kueche";
import Speisekarte from "@/components/sections/Speisekarte";
import Galerie     from "@/components/sections/Galerie";
import Aktuelles   from "@/components/sections/Aktuelles";
import Reservierung from "@/components/sections/Reservierung";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Kueche />
      <Speisekarte />
      <Galerie />
      <Aktuelles />
      <Reservierung />
    </>
  );
}
