import type { FC } from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const Spinner: FC<Props> = ({ size = "md", color = "aqua", className }) => {
  const sizeMap = {
    sm: "size-4",
    md: "size-8",
    lg: "size-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeMap[size]} animate-spin`}
        style={{
          borderRadius: "50%",
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid transparent`,
          borderBottom: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
