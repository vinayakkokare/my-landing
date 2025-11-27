import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import { Contact } from "../components/PricingOrContact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
