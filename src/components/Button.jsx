import PropTypes from "prop-types";

function Button({
  children = "Botón",
  variant = "primary",
  size = "normal",
  href,
  target,
  icon,
  onClick,
  isLoading,
  type = "button",
}) {
  let variantStyles;
  let sizeStyles;

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-primary disabled:hover:bg-primary disabled:text-cyan-300 shadow-md text-mainblack hover:bg-primaryLight active:bg-primaryLight transition-all";
      break;
    case "secondary":
      variantStyles =
        "bg-transparent shadow-md border border-primary hover:bg-primaryLight active:bg-primaryLight hover:text-mainblack active:text-mainblack hover:border-primaryLight active:border-primaryLight";
      break;
    case "tertiary":
      variantStyles =
        "bg-transparent text-primary hover:bg-primary active:bg-primary hover:bg-opacity-10 active:bg-opacity-10";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "h-10 md:h-8";
      break;
    case "normal":
      sizeStyles = "h-12 md:h-10";
      break;
    case "large":
      sizeStyles = "h-14 md:h-12";
      break;
  }

  return href ? (
    <a
      href={href}
      target={target && "_blank"}
      className={`outline-none flex items-center justify-center gap-2 transition-all rounded-full w-full ${variantStyles} ${sizeStyles}`}
    >
      {!isLoading && (
        <>
          <span className="text-lg">{icon}</span>
          <span>{children}</span>
        </>
      )}
    </a>
  ) : (
    <button
      disabled={isLoading}
      onClick={onClick}
      type={type}
      className={`outline-none flex items-center justify-center gap-2 transition-all rounded-full w-full ${variantStyles} ${sizeStyles}`}
    >
      {!isLoading && (
        <>
          <span className="text-lg">{icon}</span>
          <span>{children}</span>
        </>
      )}
      {isLoading && <span>Enviando...</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.any,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
