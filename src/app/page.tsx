import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Divider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent my-0"></div>
);

export default function Home() {
  return (
    <main className="flex-grow flex flex-col selection:bg-primary/30 selection:text-primary overflow-hidden relative">
      <div className="absolute inset-0 z-[-1] pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </main>
  );
}
