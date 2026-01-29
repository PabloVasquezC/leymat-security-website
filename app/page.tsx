import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
