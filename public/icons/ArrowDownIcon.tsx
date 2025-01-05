import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={88}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#fff"
        d="M44 6.667C62.41 6.667 77.333 21.59 77.333 40c0 18.41-14.923 33.333-33.333 33.333-18.41 0-33.333-14.923-33.333-33.333C10.667 21.59 25.59 6.667 44 6.667Z"
      />
    </g>
    <path
      fill="#000"
      d="M55.767 33.3c-.634 0-1.267.233-1.767.733l-10 10-10-10a2.515 2.515 0 0 0-3.533 0 2.515 2.515 0 0 0 0 3.534l11.766 11.766a2.515 2.515 0 0 0 3.534 0l11.766-11.766a2.515 2.515 0 0 0 0-3.534c-.5-.5-1.133-.733-1.766-.733Z"
    />
    <defs>
      <filter
        id="a"
        width={86.667}
        height={86.667}
        x={0.667}
        y={0.667}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_12916" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_12916"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
