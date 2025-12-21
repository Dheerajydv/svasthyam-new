const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-md flex items-center justify-center gap-2 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles =
    variant === "primary"
      ? "bg-green-500 text-white hover:bg-green-600"
      : variant === "secondary"
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : variant === "outline"
          ? "border border-gray-600 text-white hover:bg-gray-700"
          : variant === "danger"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "";

  const sizeStyles =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "md"
        ? "px-4 py-2 text-base"
        : size === "lg"
          ? "px-6 py-3 text-lg"
          : "";

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
