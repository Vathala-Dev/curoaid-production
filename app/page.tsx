
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



export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">

      <main>
        <Navbar/>


        <CuroAidHero />
        <WhoWeAreSection />
        <ServicesSection />
        <HowToBookSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <BlogsSection />
        <CTABannerSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
