// import Image from "next/image";
// import GradientButton from "../ui/GradientButton";
// import SectionBadge from "../ui/SectionBadge";
// import { imgWhoWeAre } from "@/lib/assets";

// // const assetPathPrefix = "/assets";

// // const imgWhoWeAre = `${assetPathPrefix}/d06a5.png`;
// export default function WhoWeAreSection() {
//     return (
//         <section className="py-20 bg-white">
//             <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-center">

//                 {/* Image */}
//                 <div className="flex-1 w-full">
//                     <Image
//                         src={imgWhoWeAre}
//                         alt="Who We Are"
//                         width={700}
//                         height={420}
//                         className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
//                     />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 w-full">
//                     <SectionBadge label="Who We Are" />


//                     <h2 className="text-3xl lg:text-[40px] leading-tight font-bold text-black mt-4 mb-6">
//                         Bringing{" "}
//                         <span
//                             className="bg-clip-text text-transparent"
//                             style={{
//                                 backgroundImage:
//                                     "linear-gradient(to right, #74c067, #4cc6f0)",
//                             }}
//                         >
//                             Quality Healthcare
//                         </span>{" "}
//                         Closer to You, Right at Home
//                     </h2>

//                     <p className="text-[#454646] text-base leading-relaxed mb-4">
//                         CuroAid is committed to making healthcare personal, accessible,
//                         and convenient by bringing professional care directly to where
//                         you are. We provide a comprehensive range of home healthcare
//                         services tailored to support individuals through recovery,
//                         ongoing care, elderly support, rehabilitation, and everyday
//                         health needs.
//                     </p>

//                     <p className="text-[#454646] text-base leading-relaxed mb-8">
//                         Our dedicated approach combines professional expertise with
//                         genuine compassion, ensuring every patient receives care with
//                         dignity, comfort, and respect. With CuroAid by your side,
//                         families can have greater confidence knowing their loved ones
//                         are supported with the right care, in the place they feel most
//                         comfortable — home.
//                     </p>

//                     <GradientButton label="Learn More About Us" />

//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";
import { imgWhoWeAre } from "@/lib/assets";

export default function WhoWeAreSection() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="who-we-are-title"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* =====================================
              IMAGE
          ====================================== */}

          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-[28px]">

              <Image
                src={imgWhoWeAre}
                alt="CuroAid healthcare professional providing care at home"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>
          </div>

          {/* =====================================
              CONTENT
          ====================================== */}

          <div className="w-full lg:w-1/2">

            <SectionBadge label="Who We Are" />

            <h2
              id="who-we-are-title"
              className="mt-5 text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-bold text-[#1b355a]"
            >
              Healthcare That Comes
              <span className="block">
                Home to You
              </span>
            </h2>

            <p className="mt-6 text-[15px] md:text-base leading-7 text-[#454646] max-w-[620px]">
              CuroAid is a trusted home healthcare platform
              connecting individuals and families with
              professional healthcare services at home.
            </p>

            <p className="mt-4 text-[15px] md:text-base leading-7 text-[#454646] max-w-[620px]">
              From doctor consultations and nursing care to
              physiotherapy and specialized home healthcare
              services, we make quality care more accessible,
              comfortable, and convenient.
            </p>

            {/* =================================
                HIGHLIGHTS
            ================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#cff4ff] flex items-center justify-center">
                  <span className="text-[#4cc6f0] text-lg font-bold">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1b355a]">
                    Professional Care
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#454646]">
                    Trusted healthcare professionals
                    delivering care at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#e4f7df] flex items-center justify-center">
                  <span className="text-[#74c067] text-lg font-bold">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1b355a]">
                    Personalized Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#454646]">
                    Care designed around your individual
                    healthcare needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#cff4ff] flex items-center justify-center">
                  <span className="text-[#4cc6f0] text-lg font-bold">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1b355a]">
                    Care at Your Doorstep
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#454646]">
                    Healthcare services delivered in the
                    comfort of your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#e4f7df] flex items-center justify-center">
                  <span className="text-[#74c067] text-lg font-bold">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1b355a]">
                    Compassionate Approach
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#454646]">
                    Putting comfort, dignity, and care first.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}