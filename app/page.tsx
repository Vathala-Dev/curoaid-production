
"use client";
import { useState } from "react";
import CuroAidHero from "./components/CuroAidHero";

const assetPathPrefix = "/assets";

const imgFinalisedLogo1 = `${assetPathPrefix}/57aec.png`;
const imgHero = `${assetPathPrefix}/33e15.png`;
const imgWhoWeAre = `${assetPathPrefix}/d06a5.png`;
const imgDoctorAtHome = `${assetPathPrefix}/2c7d9.png`;
const imgHomeNursing = `${assetPathPrefix}/908e9.png`;
const imgPhysiotherapy = `${assetPathPrefix}/77cee.png`;
const imgHowToBook = `${assetPathPrefix}/3e0f7.png`;
const imgWhyChoose = `${assetPathPrefix}/7764f.png`;
const imgBlog = `${assetPathPrefix}/8a183.png`;
const imgCtaBanner = `${assetPathPrefix}/4b732.png`;
const imgArrowRight = `${assetPathPrefix}/c7110.svg`;
const imgEllipse = `${assetPathPrefix}/af2bc.svg`;
const imgStepIcon1 = `${assetPathPrefix}/9713b.png`;
const imgStepIcon2 = `${assetPathPrefix}/d6bf7.png`;
const imgStepIcon3 = `${assetPathPrefix}/b85af.png`;
const imgStepIcon4 = `${assetPathPrefix}/9f214.png`;
const imgGroup35 = `${assetPathPrefix}/c9832.svg`;
const imgGroup38 = `${assetPathPrefix}/62e8a.svg`;
const imgGroup39 = `${assetPathPrefix}/9e2fc.svg`;
const imgGroup37 = `${assetPathPrefix}/2d27d.svg`;
const imgGroup40 = `${assetPathPrefix}/32dc6.svg`;
const imgGroup41 = `${assetPathPrefix}/f573c.svg`;
const imgGroup43 = `${assetPathPrefix}/a6756.svg`;
const imgStars = `${assetPathPrefix}/1bb85.png`;
const imgVector = `${assetPathPrefix}/3f08b.svg`;
const imgVectorWhite = `${assetPathPrefix}/a6d98.svg`;
const imgEmail = `${assetPathPrefix}/eebec.png`;
const imgLocation = `${assetPathPrefix}/428a4.png`;
const imgPhoneContact = `${assetPathPrefix}/ad58e.png`;
const imgFacebook = `${assetPathPrefix}/e136c.png`;
const imgInstagram = `${assetPathPrefix}/fdfb4.png`;
const imgLinkedin = `${assetPathPrefix}/f108b.png`;
const imgFAQArrow = `${assetPathPrefix}/49fe1.png`;
const imgDoctorIcon = `${assetPathPrefix}/4d0fa.svg`;
const imgPhysioIcon = `${assetPathPrefix}/9f1c8.svg`;
const imgEllipseStep = `${assetPathPrefix}/94eca.svg`;

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#cff4ff] px-4 py-2 rounded-full">
      <img src={imgEllipse} alt="" className="w-[6px] h-[6px]" />
      <span
        className="text-[#4cc6f0] text-[14px] tracking-[2px] uppercase"
        style={{ fontFamily: "'Poppins:Bold'" }}
      >
        {label}
      </span>
    </div>
  );
}

function GradientButton({
  label,
  className = "",
  onClick,
}: {
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-8 py-4 rounded-xl text-white text-sm shadow-lg hover:opacity-90 transition-opacity ${className}`}
      style={{
        backgroundImage: "linear-gradient(130deg, #4cc6f0 12.67%, #74c067 85.05%)",
        fontFamily: "'Poppins:Bold'",
      }}
    >
      {label}
      <img src={imgArrowRight} alt="" className="w-[18px] h-[18px]" />
    </button>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">

        <a href="#" className="flex items-center gap-4">
          {/* Logo Icon */}
          <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img
              src={imgFinalisedLogo1}
              alt="CuroAid Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col justify-center">
            <span
              className="text-[30px] leading-[32px] font-bold text-black"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              CuroAid
            </span>

            <span
              className="text-[14px] leading-[18px] font-semibold text-black"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Healthcare at Home
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Services", "Blogs", "About Us"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#1b355a] text-[15px] hover:text-[#4cc6f0] transition-colors"
              style={{ fontFamily: "'Poppins:Medium'" }}
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          className="hidden md:flex items-center justify-center px-8 py-3 rounded-lg text-white text-[15px] hover:opacity-90 transition-opacity shadow-md"
          style={{
            backgroundImage: "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
            fontFamily: "'Poppins:SemiBold'",
          }}
        >
          Contact Us
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
          <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
          <div className="w-6 h-0.5 bg-[#1b355a]" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {["Home", "Services", "Blogs", "About Us"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#1b355a] text-[15px]"
              style={{ fontFamily: "'Poppins:Medium'" }}
            >
              {link}
            </a>
          ))}
          <button
            className="self-start px-6 py-2.5 rounded-lg text-white text-sm"
            style={{
              backgroundImage: "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
              fontFamily: "'Poppins:SemiBold'",
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={imgHero} alt="Home Healthcare" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/10" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <p
            className="text-sm text-[#4cc6f0] tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Poppins:SemiBold'" }}
          >
            Trusted Home Healthcare
          </p>
          <h1
            className="text-4xl lg:text-5xl xl:text-[54px] text-[#1b355a] leading-tight mb-5"
            style={{ fontFamily: "'Poppins:Bold'" }}
          >
            Trusted Home{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #4cc6f0, #74c067)" }}
            >
              Healthcare
            </span>{" "}
            Services
          </h1>
          <p
            className="text-[#454646] text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Poppins:Regular'" }}
          >
            CuroAid provides professional, compassionate home healthcare services — from doctor visits and nursing to physiotherapy and elder care, delivered right to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <GradientButton label="Book a Service" />
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-[#4cc6f0] text-sm border-2 border-[#4cc6f0] hover:bg-[#4cc6f0] hover:text-white transition-colors"
              style={{ fontFamily: "'Poppins:Bold'" }}
            >
              Book a Test
            </button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-4 items-end">
          {[
            { label: "Doctor at Home", icon: imgDoctorIcon },
            { label: "Home Nursing", icon: imgGroup38 },
            { label: "Elder Care", icon: imgGroup37 },
            { label: "Physiotherapy", icon: imgPhysioIcon },
            { label: "Nursing Care", icon: imgGroup40 },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 rounded-full shadow-md"
              style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}
            >
              <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
              <span
                className="text-[#1b355a] text-sm whitespace-nowrap"
                style={{ fontFamily: "'Poppins:SemiBold'" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative border-t border-white/20 py-4"
        style={{ background: "rgba(255,255,255,0.78)", backdropFilter: "blur(6px)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap gap-6 justify-center lg:justify-start">
          {[
            { label: "Quality", value: "ISO Certified" },
            { label: "Trusted", value: "10,000+ Patients" },
            { label: "Care", value: "24/7 Support" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(to right, #4cc6f0, #74c067)" }}
              />
              <span className="text-[#1b355a] text-sm" style={{ fontFamily: "'Poppins:Bold'" }}>
                {stat.label}:
              </span>
              <span className="text-[#454646] text-sm" style={{ fontFamily: "'Poppins:Regular'" }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <img
            src={imgWhoWeAre}
            alt="Who We Are"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <SectionBadge label="Who We Are" />
          <h2
            className="text-3xl lg:text-[40px] leading-tight text-black mt-4 mb-6"
            style={{ fontFamily: "'Poppins:Bold'" }}
          >
            Bringing{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #74c067, #4cc6f0)" }}
            >
              Quality Healthcare
            </span>{" "}
            Closer to You, Right at Home
          </h2>
          <p
            className="text-[#454646] text-base leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins:Regular'" }}
          >
            CuroAid is committed to making healthcare personal, accessible, and convenient by bringing professional care directly to where you are. We provide a comprehensive range of home healthcare services tailored to support individuals through recovery, ongoing care, elderly support, rehabilitation, and everyday health needs.
          </p>
          <p
            className="text-[#454646] text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Poppins:Regular'" }}
          >
            Our dedicated approach combines professional expertise with genuine compassion, ensuring every patient receives care with dignity, comfort, and respect. With CuroAid by your side, families can have greater confidence knowing their loved ones are supported with the right care, in the place they feel most comfortable — home.
          </p>
          <GradientButton label="Learn More About Us" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Doctor at Home", subtitle: "Professional medical consultation and care at your doorstep.", image: imgDoctorAtHome, icon: imgDoctorIcon },
    { title: "Home Nursing Services", subtitle: "Professional medical consultation and care delivered conveniently at your doorstep.", image: imgHomeNursing, icon: imgGroup38 },
    { title: "Physiotherapy at Home", subtitle: "Professional rehabilitation and physiotherapy services at home.", image: imgPhysiotherapy, icon: imgPhysioIcon },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <SectionBadge label="Services" />
            <h2
              className="text-3xl lg:text-[40px] leading-tight text-black mt-4"
              style={{ fontFamily: "'Poppins:Bold'" }}
            >
              Our Home Healthcare
              <br />
              Services
            </h2>
          </div>
          <div className="lg:max-w-sm lg:pt-4 lg:text-right">
            <p
              className="text-black text-[18px] leading-relaxed mb-2"
              style={{ fontFamily: "'Poppins:SemiBold'" }}
            >
              Complete Care, Designed Around Your Needs
            </p>
            <p
              className="text-[#454646] text-sm leading-relaxed"
              style={{ fontFamily: "'Poppins:Regular'" }}
            >
              Explore CuroAid's comprehensive range of home healthcare services designed to meet different patient and family needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden shadow-md h-[380px] group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-full"
                style={{
                  background: "rgba(68,68,68,0.66)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(226,216,216,0.24)",
                }}
              >
                <img src={service.icon} alt="" className="w-10 h-10 flex-shrink-0 object-contain" />
                <span className="text-white text-base" style={{ fontFamily: "'Poppins:Bold'" }}>
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToBookSection() {
  const steps = [
    { num: "01", title: "Choose Your Service", desc: "Select the home healthcare service you or your loved one needs.", icon: imgStepIcon1 },
    { num: "02", title: "Share Your Details", desc: "Tell us about your requirements, preferred date, time, and location.", icon: imgStepIcon2 },
    { num: "03", title: "Speak With Our Team", desc: "Our care team will connect with you, understand your needs, and guide you through the next steps.", icon: imgStepIcon3 },
    { num: "04", title: "Get Care at Home", desc: "We arrange the appropriate healthcare professional or service and deliver care at your doorstep.", icon: imgStepIcon4 },
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={imgHowToBook} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/52" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionBadge label="How to Book" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mt-4 mb-12">
          <h2
            className="text-3xl lg:text-[40px] leading-tight text-white max-w-xl"
            style={{ fontFamily: "'Poppins:Bold'" }}
          >
            Book Home Healthcare Services in Just a Few Simple Steps
          </h2>
          <p
            className="text-white/90 text-base leading-relaxed lg:max-w-sm lg:text-right"
            style={{ fontFamily: "'Poppins:Regular'" }}
          >
            Whether you need a Doctor at Home, Home Nursing Services, Physiotherapy at Home, Elder Care at Home, or any of our other healthcare services, booking with CuroAid is simple and convenient.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] right-0 h-px bg-gray-200" />
                )}
                <div className="relative mb-4 w-[68px] h-[68px]">
                  <img src={imgEllipseStep} alt="" className="w-full h-full" />
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="absolute inset-0 m-auto w-9 h-9 object-contain"
                  />
                </div>
                <span
                  className="text-white text-xs px-4 py-1 rounded-full mb-3"
                  style={{ background: "#4cc6f0", fontFamily: "'Poppins:Bold'" }}
                >
                  Step {step.num}
                </span>
                <h3 className="text-black text-base mb-2" style={{ fontFamily: "'Poppins:SemiBold'" }}>
                  {step.title}
                </h3>
                <p className="text-[#454646] text-sm leading-relaxed" style={{ fontFamily: "'Poppins:Regular'" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <GradientButton label="Book a Service" />
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    { icon: imgGroup35, title: "Personalized Care", desc: "Every patient is different. We provide care based on individual health needs, preferences, and requirements." },
    { icon: imgGroup37, title: "Professional Healthcare Support", desc: "Get access to trained healthcare professionals who are committed to providing dependable care at home." },
    { icon: imgGroup38, title: "Complete Home Healthcare", desc: "From Doctor at Home and nursing to physiotherapy, elder care, wound care, diagnostics, and more — access a wide range of services in one place." },
    { icon: imgGroup40, title: "Comfort & Convenience", desc: "Receive the care you need without the unnecessary stress of travelling to hospitals or clinics." },
    { icon: imgGroup39, title: "Compassionate & Patient-Centered Care", desc: "We treat every patient with empathy, respect, and dignity while keeping their comfort and wellbeing at the center of care." },
    { icon: imgGroup41, title: "Support for Families", desc: "We help families feel more confident knowing their loved ones have access to professional support at home." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionBadge label="Why Choose" />
        <div className="flex flex-col lg:flex-row gap-14 mt-6">
          <div className="flex-shrink-0 lg:w-[420px]">
            <h2
              className="text-3xl lg:text-[40px] leading-tight text-black mb-3"
              style={{ fontFamily: "'Poppins:Bold'" }}
            >
              Why Choose Curoaid?
            </h2>
            <p className="text-[#454646] text-base leading-relaxed mb-4" style={{ fontFamily: "'Poppins:Regular'" }}>
              At CuroAid, we believe healthcare should be more than just a service — it should provide{" "}
              <strong className="text-black" style={{ fontFamily: "'Poppins:SemiBold'" }}>
                comfort, trust, dignity, and peace of mind
              </strong>
              . Our home healthcare services are designed to bring professional care closer to patients while making the experience easier for families.
            </p>
            <p className="text-black text-[18px] mb-6" style={{ fontFamily: "'Poppins:SemiBold'" }}>
              Care You Can Trust, Right at Home
            </p>
            <img
              src={imgWhyChoose}
              alt="Why Choose CuroAid"
              className="w-full h-[380px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 content-start pt-12">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <img src={f.icon} alt="" className="w-6 h-6 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-black text-base mb-1" style={{ fontFamily: "'Poppins:SemiBold'" }}>
                    {f.title}
                  </h3>
                  <p className="text-[#454646] text-sm leading-relaxed" style={{ fontFamily: "'Poppins:Regular'" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Suresh", location: "Chennai", text: "\"I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home. Highly recommend!\"" },
  { name: "Priya Rajesh", location: "Chennai", text: "\"The home nursing service from CuroAid was exceptional. The nurse was professional, caring, and always on time.\"" },
  { name: "Ramesh Kumar", location: "Chennai", text: "\"Outstanding physiotherapy sessions at home. The therapist helped my father recover quickly after surgery. Great service!\"" },
];

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionBadge label="Testimonial" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mt-4 mb-10">
          <h2 className="text-3xl lg:text-[40px] leading-tight text-black" style={{ fontFamily: "'Poppins:Bold'" }}>
            Testimonials
          </h2>
          <p className="text-[#454646] text-base leading-relaxed lg:max-w-lg lg:text-right" style={{ fontFamily: "'Poppins:Regular'" }}>
            Real experiences from patients and families who have trusted CuroAid for their home healthcare needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 shadow-md"
              style={{ background: "rgba(207,244,255,0.26)", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <img src={imgStars} alt="5 stars" className="h-5 w-auto object-contain mb-4" />
              <div className="flex items-center gap-3 mb-4">
                <img src={imgGroup43} alt="" className="w-14 h-14 object-contain flex-shrink-0" />
                <div>
                  <p className="text-black text-base" style={{ fontFamily: "'Poppins:SemiBold'" }}>{t.name}</p>
                  <p className="text-[#4cc6f0] text-xs" style={{ fontFamily: "'Poppins:Bold'" }}>{t.location}</p>
                </div>
              </div>
              <p className="text-[#454646] text-sm leading-relaxed" style={{ fontFamily: "'Poppins:Regular'" }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-3.5 h-3.5 rounded-full bg-[#4cc6f0]" />
          <div className="w-3.5 h-3.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

const blogPosts = [
  { title: "The careful way to choose a caregiver", excerpt: "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.", accent: false },
  { title: "The careful way to choose a caregiver", excerpt: "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.", accent: true },
  { title: "The careful way to choose a caregiver", excerpt: "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.", accent: false },
];

// function BlogsSection() {
//   return (
//     <section className="py-20 bg-[#f0fafe]">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
//         <SectionBadge label="Latest Blog" />
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mt-4 mb-10">
//           <h2 className="text-3xl lg:text-[40px] leading-tight text-black" style={{ fontFamily: "'Poppins:Bold'" }}>
//             Blogs | Home Healthcare
//           </h2>
//           <p className="text-[#454646] text-base leading-relaxed lg:max-w-lg lg:text-right" style={{ fontFamily: "'Poppins:Regular'" }}>
//             Stay informed with practical healthcare tips, expert guidance, and useful information to help you make better decisions for yourself and your loved ones.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogPosts.map((post, i) => (
//             <div
//               key={i}
//               className="rounded-xl overflow-hidden shadow-md flex flex-col"
//               style={{ background: post.accent ? "#74c067" : "white" }}
//             >
//               <img src={imgBlog} alt={post.title} className="w-full h-[220px] object-cover rounded-t-xl" />
//               <div className="p-5 flex flex-col flex-1">
//                 <h3
//                   className={`text-base mb-3 leading-snug ${post.accent ? "text-white" : "text-black"}`}
//                   style={{ fontFamily: "'Poppins:SemiBold'" }}
//                 >
//                   {post.title}
//                 </h3>
//                 <p
//                   className={`text-sm leading-relaxed mb-5 flex-1 ${post.accent ? "text-white/95" : "text-[#454646]"}`}
//                   style={{ fontFamily: "'Poppins:Regular'" }}
//                 >
//                   {post.excerpt}
//                 </p>
//                 {post.accent ? (
//                   <button
//                     className="self-start flex items-center gap-2 bg-white text-black text-sm px-5 py-2.5 rounded-xl shadow hover:shadow-md transition-shadow"
//                     style={{ fontFamily: "'Poppins:Bold'" }}
//                   >
//                     Read More
//                     <img src={imgVector} alt="" className="w-[18px] h-[18px]" />
//                   </button>
//                 ) : (
//                   <button
//                     className="self-start flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition-opacity"
//                     style={{
//                       backgroundImage: "linear-gradient(130deg, #4cc6f0 12.67%, #74c067 85.05%)",
//                       fontFamily: "'Poppins:Bold'",
//                     }}
//                   >
//                     Read More
//                     <img src={imgVectorWhite} alt="" className="w-[18px] h-[18px]" />
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function BlogsSection() {
  // Middle card active by default
  const [activeBlog, setActiveBlog] = useState(1);

  return (
    <section className="py-20 bg-[#f0fafe]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <SectionBadge label="Latest Blog" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mt-4 mb-10">
          <h2 className="text-3xl lg:text-[40px] leading-tight text-black" style={{ fontFamily: "'Poppins:Bold'" }}>
            Blogs | Home Healthcare
          </h2>
          <p className="text-[#454646] text-base leading-relaxed lg:max-w-lg lg:text-right" style={{ fontFamily: "'Poppins:Regular'" }}>
            Stay updated with the latest news and insights in home healthcare.
          </p>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-6 lg:px-12">
        {blogPosts.map((post, i) => {
          const isActive = activeBlog === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setActiveBlog(i)}
              onClick={() => setActiveBlog(i)}
              className={`
              rounded-xl
              overflow-hidden
              shadow-md
              flex
              flex-col
              cursor-pointer
              transition-all
              duration-300
              transform
              ${isActive
                  ? "bg-[#74c067] scale-[1.02] shadow-lg"
                  : "bg-white hover:shadow-lg"
                }
            `}
            >
              {/* Blog Image */}
              <img
                src={imgBlog}
                alt={post.title}
                className="
                w-full
                h-[200px]
                sm:h-[220px]
                object-cover
                rounded-t-xl
              "
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">

                {/* Title */}
                <h3
                  className={`
                  text-[15px]
                  sm:text-base
                  mb-3
                  leading-snug
                  transition-colors
                  duration-300
                  ${isActive ? "text-white" : "text-black"}
                `}
                  style={{ fontFamily: "'Poppins:SemiBold'" }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                  text-[13px]
                  sm:text-sm
                  leading-relaxed
                  mb-5
                  flex-1
                  transition-colors
                  duration-300
                  ${isActive ? "text-white/95" : "text-[#454646]"}
                `}
                  style={{ fontFamily: "'Poppins:Regular'" }}
                >
                  {post.excerpt}
                </p>

                {/* Button */}
                {isActive ? (
                  <button
                    type="button"
                    className="
                    self-start
                    flex
                    items-center
                    gap-2
                    bg-white
                    text-black
                    text-sm
                    px-5
                    py-2.5
                    rounded-xl
                    shadow
                    hover:shadow-md
                    transition-all
                  "
                    style={{ fontFamily: "'Poppins:Bold'" }}
                  >
                    Read More

                    <img
                      src={imgVector}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="
                    self-start
                    flex
                    items-center
                    gap-2
                    text-white
                    text-sm
                    px-5
                    py-2.5
                    rounded-xl
                    shadow
                    hover:opacity-90
                    transition-opacity
                  "
                    style={{
                      backgroundImage:
                        "linear-gradient(130deg, #4cc6f0 12.67%, #74c067 85.05%)",
                      fontFamily: "'Poppins:Bold'",
                    }}
                  >
                    Read More

                    <img
                      src={imgVectorWhite}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section >
  );
}



function CTABannerSection() {
  return (
    <section className="relative py-20 overflow-hidden mx-4 lg:mx-12 my-12 rounded-2xl">
      <div className="absolute inset-0">
        <img src={imgCtaBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,101,135,0.66)" }} />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-3xl lg:text-[40px] leading-tight text-white mb-4 mx-auto max-w-2xl"
          style={{ fontFamily: "'Poppins:Bold'" }}
        >
          Your Health Deserves Care That Comes Home
        </h2>
        <p
          className="text-white/90 text-base leading-relaxed mb-8 mx-auto max-w-2xl"
          style={{ fontFamily: "'Poppins:Regular'" }}
        >
          It's emotional without being overly dramatic, and it naturally reinforces CuroAid's{" "}
          <strong style={{ fontFamily: "'Poppins:Bold'" }}>home healthcare</strong> positioning.
        </p>
        <button
          className="inline-flex items-center gap-2 bg-[#4cc6f0] text-white text-sm px-10 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Poppins:Bold'" }}
        >
          Book Free Consultation
          <img src={imgVectorWhite} alt="" className="w-[18px] h-[18px]" />
        </button>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Is home healthcare better than visiting a hospital?", a: "For many non-emergency medical needs, home healthcare provides a comfortable and convenient alternative while maintaining professional care standards." },
  { q: "What home healthcare services does CuroAid offer?", a: "CuroAid offers Doctor at Home, Home Nursing Services, Physiotherapy at Home, Elder Care at Home, Yoga at Home, Wound Care, Veterinary Doctor at Home, Blood Test at Home, NRI Elder Care, and Medical Equipment Rental." },
  { q: "How quickly can I book a home healthcare appointment?", a: "You can book an appointment online or by phone, and our team will confirm your booking promptly. We strive to provide same-day or next-day service wherever possible." },
  { q: "Is home healthcare safe for elderly patients?", a: "Yes. Home healthcare is often the preferred choice for elderly patients as it avoids hospital-acquired infections, reduces stress, and allows care in a familiar, comfortable environment." },
  { q: "How does CuroAid ensure quality of care?", a: "All our healthcare professionals are thoroughly vetted, credentialed, and trained. We conduct regular quality checks and actively collect patient feedback to continually improve our services." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="flex justify-center">
          <SectionBadge label="FAQ" />
        </div>

        {/* Heading */}
        <h2
          className="
        text-center
        text-[28px]
        sm:text-[32px]
        md:text-[36px]
        lg:text-[40px]
        leading-[1.2]
        text-black
        mt-4
        mb-8
        sm:mb-10
      "
          style={{ fontFamily: "'Poppins:Bold'" }}
        >
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="w-full max-w-[800px] mx-auto divide-y divide-gray-200">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="py-4 sm:py-5"
            >
              {/* Question */}
              <button
                type="button"
                className="
              w-full
              flex
              items-center
              justify-between
              gap-4
              text-left
              group
            "
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                <span
                  className="
                text-black
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                leading-6
                pr-2
              "
                  style={{ fontFamily: "'Poppins:SemiBold'" }}
                >
                  {faq.q}
                </span>

                <img
                  src={imgFAQArrow}
                  alt=""
                  className={`
                w-4
                h-4
                sm:w-5
                sm:h-5
                flex-shrink-0
                transition-transform
                duration-300
                ${openIndex === i ? "rotate-180" : ""}
              `}
                />
              </button>

              {/* Answer */}
              {openIndex === i && (
                <p
                  className="
                text-[#454646]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                leading-6
                mt-3
                pr-6
                sm:pr-10
              "
                  style={{ fontFamily: "'Poppins:Regular'" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-14 pb-6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={imgFinalisedLogo1} alt="CuroAid" className="h-14 w-auto object-contain mb-4" />
            <p className="text-black text-base mb-2" style={{ fontFamily: "'Poppins:SemiBold'" }}>
              Better Care Starts at Home
            </p>
            <p className="text-[#454646] text-sm leading-relaxed" style={{ fontFamily: "'Poppins:Regular'" }}>
              Professional, personalized, and compassionate healthcare services delivered to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="text-black text-base mb-1" style={{ fontFamily: "'Poppins:SemiBold'" }}>Quick Links</h4>
            <div className="w-20 h-0.5 bg-[#3fbebc] mb-4" />
            <ul className="space-y-2">
              {["Home", "Services", "Blogs", "About Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#454646] text-sm hover:text-[#4cc6f0] transition-colors" style={{ fontFamily: "'Poppins:Regular'" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-black text-base mb-1" style={{ fontFamily: "'Poppins:SemiBold'" }}>Services</h4>
            <div className="w-20 h-0.5 bg-[#3fbebc] mb-4" />
            <ul className="space-y-2">
              {["Doctor at Home", "Home Nursing Services", "Physiotherapy at Home", "Elder Care at Home", "Yoga at Home", "Wound Care at Home", "Blood Test at Home"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-[#454646] text-sm hover:text-[#4cc6f0] transition-colors" style={{ fontFamily: "'Poppins:Regular'" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-black text-base mb-1" style={{ fontFamily: "'Poppins:SemiBold'" }}>Contact</h4>
            <div className="w-20 h-0.5 bg-[#3fbebc] mb-4" />
            <ul className="space-y-3">
              {[
                { icon: imgPhoneContact, label: "+91 9150064364" },
                { icon: imgEmail, label: "support@vathala.com" },
                { icon: imgLocation, label: "Chennai, India" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <img src={item.icon} alt="" className="w-5 h-5 object-contain flex-shrink-0" />
                  <span className="text-[#454646] text-sm" style={{ fontFamily: "'Poppins:Regular'" }}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#454646] text-sm" style={{ fontFamily: "'Poppins:Regular'" }}>
            © 2026 curoaid. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[imgFacebook, imgInstagram, imgLinkedin].map((icon, i) => (
              <a key={i} href="#" className="hover:opacity-70 transition-opacity">
                <img src={icon} alt="" className="w-7 h-7 object-contain" />
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#454646] text-sm hover:text-[#4cc6f0]" style={{ fontFamily: "'Poppins:Regular'" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-[#454646] text-sm hover:text-[#4cc6f0]" style={{ fontFamily: "'Poppins:Regular'" }}>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      {/* <HeroSection /> */}
      <CuroAidHero />
      <WhoWeAreSection />
      <ServicesSection />
      <HowToBookSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BlogsSection />
      <CTABannerSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
