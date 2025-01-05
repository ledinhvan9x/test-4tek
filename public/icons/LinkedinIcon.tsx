import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M30.377.375H1.627c-.691 0-1.25.559-1.25 1.25v28.75c0 .691.559 1.25 1.25 1.25h28.75c.691 0 1.25-.559 1.25-1.25V1.625c0-.691-.559-1.25-1.25-1.25ZM9.647 27.004H5.01V12.09h4.637v14.914ZM7.33 10.05a2.688 2.688 0 1 1 0-5.375 2.688 2.688 0 0 1 0 5.375Zm19.676 16.953h-4.633V19.75c0-1.73-.031-3.953-2.41-3.953-2.41 0-2.781 1.883-2.781 3.828v7.379h-4.63V12.09h4.446v2.039h.063c.617-1.172 2.128-2.41 4.386-2.41 4.696 0 5.559 3.09 5.559 7.105v8.18Z"
    />
  </svg>
);
export default SvgComponent;
