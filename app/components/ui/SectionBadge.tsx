import Image from "next/image";
import { imgEllipse } from "@/lib/assets";


interface SectionBadgeProps {
  label: string;
}

// export default function SectionBadge({ label }: SectionBadgeProps) {
//   return (
//     <div className="inline-flex items-center gap-2 bg-[#cff4ff] px-4 py-2 rounded-full">
//       <Image
//         src={imgEllipse}
//         alt=""
//         width={6}
//         height={6}
//         aria-hidden="true"
//       />

//       <span className="text-[#4cc6f0] text-[16px] tracking-[2px] uppercase font-bold">
//         {label}
//       </span>
//     </div>
//   );
// }
export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#cff4ff] px-4 py-2 rounded-full">
      <Image
        src={imgEllipse}
        alt=""
        width={7}
        height={7}
        aria-hidden="true"
      />

      <span className="text-[#4cc6f0] text-[18px] tracking-[2.2px] uppercase font-extrabold" style={{ WebkitTextStroke: '0.25px #0bb7f0'  }}> 
        {/* // #4cc6f0'  */}
        {label}
      </span>
    </div>
  );
}