interface FillLinkButtonProps {
  href: string;
  text?: string;
}

const FillLinkButton = ({
  href,
  text = "Todos los detalles técnicos",
}: FillLinkButtonProps) => {
  return (
    <a
      href={href}
      className="
    group relative inline-flex items-center justify-center
    px-4 py-2 rounded-xl
    border border-black
    text-black font-medium
    overflow-hidden

    transition-all duration-300 ease-out
    hover:text-white hover:-translate-y-0.5 hover:shadow-lg
  "
    >
      <span
        className="
      absolute inset-0 bg-black
      translate-y-full
      transition-transform duration-300 ease-out
      group-hover:translate-y-0
    "
      />
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default FillLinkButton;
