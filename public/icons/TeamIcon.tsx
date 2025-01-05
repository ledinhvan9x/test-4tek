import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={51}
    fill="none"
    {...props}
  >
    <path
      fill="#E3FCFF"
      fillRule="evenodd"
      d="M25 50.516c13.807 0 25-11.309 25-25.258C50 11.308 38.807 0 25 0S0 11.308 0 25.258s11.193 25.258 25 25.258Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M30.53 20.984a.732.732 0 0 0-.21 0c-1.55-.05-2.78-1.334-2.78-2.91 0-1.606 1.29-2.92 2.89-2.92 1.59 0 2.89 1.304 2.89 2.92-.01 1.576-1.24 2.86-2.79 2.91ZM33.79 27.985c-1.12.758-2.69 1.041-4.14.849.38-.828.58-1.748.59-2.718 0-1.01-.22-1.97-.64-2.808 1.48-.203 3.05.08 4.18.838 1.58 1.05 1.58 2.778.01 3.84ZM19.44 20.984c.07-.01.14-.01.21 0 1.55-.05 2.78-1.334 2.78-2.91 0-1.616-1.29-2.92-2.89-2.92-1.59 0-2.88 1.304-2.88 2.92 0 1.576 1.23 2.86 2.78 2.91ZM19.55 26.116c0 .98.21 1.91.59 2.748-1.41.152-2.88-.151-3.96-.869-1.58-1.06-1.58-2.788 0-3.849 1.07-.727 2.58-1.02 4-.859a6.479 6.479 0 0 0-.63 2.83ZM25.12 29.167c-.08-.01-.17-.01-.26 0-1.84-.06-3.31-1.586-3.31-3.465.01-1.92 1.54-3.475 3.45-3.475 1.9 0 3.44 1.555 3.44 3.475-.01 1.88-1.47 3.405-3.32 3.465ZM21.87 31.259c-1.51 1.02-1.51 2.697 0 3.708 1.72 1.161 4.54 1.161 6.26 0 1.51-1.02 1.51-2.698 0-3.708-1.71-1.162-4.53-1.162-6.26 0Z"
    />
  </svg>
);
export default SvgComponent;
