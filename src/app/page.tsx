import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Concept from "@/components/Concept";
import Origin from "@/components/Origin";
import Editions from "@/components/Editions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Hero />
      <Intro />
      <Concept />
      <Origin />
      <Editions />
      <Footer />
    </main>
  );
}
