"use client";
import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { right } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = clientX - right + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip !== "null" ? (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-pink-500 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap z-10"
        >
          {tooltip}
        </span>
      ) : tooltip === "null" ? (
        ""
      ) : null}
    </div>
  );
};

export default ToolTip;
