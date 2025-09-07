// components/GradientMask.tsx
import React from "react";

interface GradientMaskProps {
  background?: string;
  color?: string;
  colorDark?: string;
  height?: string;
  width?: string;
  fadeStop?: string;
  offset?: string;
  className?: string;
}

const GradientMask: React.FC<GradientMaskProps> = ({
  background = "#ffffff",
  color = "rgba(0, 0, 0, 0.2)",
  colorDark = "rgba(255, 255, 255, 0.2)",
  height = "5px",
  width = "1px",
  fadeStop = "90%",
  offset = "80px",
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] -left-4 ${className}`}
      style={
        {
          "--background": background,
          "--color": color,
          "--height": height,
          "--width": width,
          "--fade-stop": fadeStop,
          "--offset": offset,
          "--color-dark": colorDark,
          "mask-composite": "exclude",
        } as React.CSSProperties
      }
    />
  );
};

export default GradientMask;
