import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M34.367 14.083C32.617 6.383 25.9 2.917 20 2.917h-.017c-5.883 0-12.616 3.45-14.366 11.15-1.95 8.6 3.316 15.883 8.083 20.466a9.06 9.06 0 0 0 6.3 2.55c2.267 0 4.533-.85 6.283-2.55 4.767-4.583 10.034-11.85 8.084-20.45ZM20 22.433a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5Z"
    />
  </svg>
);
export default SvgComponent;
