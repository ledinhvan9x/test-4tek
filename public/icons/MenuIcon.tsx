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
      d="M35 12.916H5a1.26 1.26 0 0 1-1.25-1.25c0-.683.567-1.25 1.25-1.25h30c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25ZM35 21.25H5A1.26 1.26 0 0 1 3.75 20c0-.683.567-1.25 1.25-1.25h30c.683 0 1.25.567 1.25 1.25A1.26 1.26 0 0 1 35 21.25ZM35 29.584H5a1.26 1.26 0 0 1-1.25-1.25c0-.684.567-1.25 1.25-1.25h30c.683 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
    />
  </svg>
);
export default SvgComponent;
