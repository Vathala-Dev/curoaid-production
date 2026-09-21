import Image from "next/image";
import { imgEllipse } from "@/lib/assets";


interface SectionBadgeProps {
  label: string;
}

export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#cff4ff] px-4 py-2 rounded-full">
      <Image
        src={imgEllipse}
        alt=""
        width={6}
        height={6}
        aria-hidden="true"
      />

      <span className="text-[#4cc6f0] text-[14px] tracking-[2px] uppercase font-bold">
        {label}
      </span>
    </div>
  );
}