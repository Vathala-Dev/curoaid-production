
"use client";
import CuroAidHero from "./components/home/CuroAidHero";
import Navbar from "./components/home/Navbar";
import WhoWeAreSection from "./components/home/WhoWeAreSection";
import ServicesSection from "./components/home/ServiceSection";
import HowToBookSection from "./components/home/HowToBookSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogsSection from "./components/home/BlogsSection";
import CTABannerSection from "./components/home/CTABAnnerSection";
import FAQSection from "./components/home/FAQSection";
import Footer from "./components/home/Footer";
import { homeCTA, homeFAQ, homeHowToBook, homeWhyChoose } from "./components/home/homehowtobook";



export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">

      <Navbar />
      <main>
        <CuroAidHero />
        <WhoWeAreSection />
        <ServicesSection />
        <HowToBookSection {...homeHowToBook} />
        <WhyChooseSection {...homeWhyChoose} />
        <TestimonialsSection />
        <BlogsSection />
        <CTABannerSection {...homeCTA} />
        <FAQSection {...homeFAQ} />
      </main>
      <Footer />
    </div>
  );
}
