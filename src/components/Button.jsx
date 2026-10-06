const Button = ({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#6D5DFB] text-white hover:bg-[#5848E8] hover:-translate-y-0.5",

    secondary:
      "border border-[#E7E5E4] bg-white text-[#171717] hover:border-[#6D5DFB] hover:text-[#6D5DFB] hover:-translate-y-0.5",

    text:
      "px-0 py-0 text-[#171717] hover:text-[#6D5DFB]",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;