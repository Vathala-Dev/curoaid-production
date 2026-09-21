
interface GradientButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    icon?: string;
}

export default function GradientButton({
    label,
    className = "",
    onClick,
    icon,
}: GradientButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
        flex
        items-center
        gap-2
        px-8
        py-4
        rounded-xl
        text-white
        text-sm
        font-bold
        shadow-lg
        transition-opacity
        hover:opacity-90
        bg-gradient-to-r
        from-[#4cc6f0]
        to-[#74c067]
        ${className}
      `}
        >
            {label}

            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="w-[18px] h-[18px]"
                />
            )}
        </button>
    );
}