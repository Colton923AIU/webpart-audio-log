import * as React from "react";
import type { ISVGProps } from "./svg.types";
import styles from "./SVG.module.scss";

const Pause: ({ onClick, styleProps }: ISVGProps) => JSX.Element = ({
  onClick,
  styleProps,
}: ISVGProps) => {
  const w: () => string | number = () => {
    let w: string | number = "50px";
    if (styleProps?.width) {
      w = styleProps.width;
    }
    return w;
  };
  const h: () => string | number = () => {
    let h: string | number = "50px";
    if (styleProps?.height) {
      h = styleProps.height;
    }
    return h;
  };
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={w()}
      height={h()}
      viewBox={`0 0 ${w()} ${h()}`}
      preserveAspectRatio="xMidYMid meet"
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : () => null
      }
      className={styles.svgStyles}
    >
      <g
        transform="translate(0,50) scale(0.1,-0.1)"
        fill={"#A30000"}
        stroke="none"
      >
        <path
          d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
-223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"
        />
        <path
          d="M160 250 l0 -100 35 0 35 0 0 100 0 100 -35 0 -35 0 0 -100z m50 0
c0 -64 -3 -80 -15 -80 -12 0 -15 16 -15 80 0 64 3 80 15 80 12 0 15 -16 15
-80z"
        />
        <path
          d="M270 250 l0 -100 35 0 35 0 0 100 0 100 -35 0 -35 0 0 -100z m50 0
c0 -64 -3 -80 -15 -80 -12 0 -15 16 -15 80 0 64 3 80 15 80 12 0 15 -16 15
-80z"
        />
      </g>
    </svg>
  );
};

export default Pause;
