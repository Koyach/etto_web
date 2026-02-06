import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Concept from "@/components/Concept";
import Steps from "@/components/Steps";
import Design from "@/components/Design";
import Variations from "@/components/Variations";
import RingCase from "@/components/RingCase";
import Select from "@/components/Select";
import Reason from "@/components/Reason";
import ShoppingGuide from "@/components/ShoppingGuide";
import Privilege from "@/components/Privilege";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Intro />
      <Concept />
      {/* <Steps /> */}
      {/* <Design /> */}
      <Variations />
      {/* <RingCase /> */}
      {/* <Select /> */}
      {/* <Reason /> */}
      {/* <ShoppingGuide /> */}
      {/* <Privilege /> */}
      <Footer />
    </main>
  );
}
