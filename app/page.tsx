import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ecosystem } from "@/components/ecosystem";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="bg-[#000000] min-h-screen">
      <Navbar />
      <Hero />
      <Ecosystem />
      <TechStack />
      <Footer />
    </main>
  );
}
