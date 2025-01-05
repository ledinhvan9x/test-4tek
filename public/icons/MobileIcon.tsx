import * as React from 'react';
import { SVGProps } from 'react';

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
      d="M27.067 3.333H12.933c-4.6 0-6.266 1.667-6.266 6.35v20.634c0 4.683 1.666 6.35 6.266 6.35H27.05c4.617 0 6.283-1.667 6.283-6.35V9.684c0-4.684-1.666-6.35-6.266-6.35ZM20 32.167a2.93 2.93 0 0 1-2.917-2.917A2.93 2.93 0 0 1 20 26.334a2.93 2.93 0 0 1 2.917 2.916A2.93 2.93 0 0 1 20 32.167Zm3.333-21.75h-6.666a1.26 1.26 0 0 1-1.25-1.25c0-.684.566-1.25 1.25-1.25h6.666c.684 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
    />
  </svg>
);
export default SvgComponent;
