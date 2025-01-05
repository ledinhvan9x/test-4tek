import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M17.748 15 29.43 3.318a1.94 1.94 0 0 0 0-2.748 1.942 1.942 0 0 0-2.748 0L15 12.252 3.318.57A1.942 1.942 0 0 0 .57.57c-.76.76-.76 1.988 0 2.748L12.252 15 .57 26.682c-.76.76-.76 1.989 0 2.748a1.938 1.938 0 0 0 2.748 0L15 17.75 26.682 29.43a1.938 1.938 0 0 0 2.748 0 1.94 1.94 0 0 0 0-2.748L17.748 15Z"
    />
  </svg>
);
export default SvgComponent;
