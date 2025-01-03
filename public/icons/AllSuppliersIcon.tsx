import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <g stroke="#575B6C" strokeLinecap="round">
      <rect x={1} y={1} width={10} height={10} rx={2} />
      <rect x={1} y={15} width={10} height={10} rx={2} />
      <rect x={15} y={1} width={10} height={10} rx={2} />
      <rect x={15} y={15} width={10} height={10} rx={2} />
    </g>
  </svg>
);

export default SvgComponent;
