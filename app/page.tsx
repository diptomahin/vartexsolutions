import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FloatingActions } from "@/components/ui/floating-actions";
import { StructuredData } from "@/components/ui/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Technologies />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
        <BlogPreview />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
