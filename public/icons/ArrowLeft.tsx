import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M23.983.333H10.017C3.95.333.333 3.95.333 10.017v13.95c0 6.083 3.617 9.7 9.684 9.7h13.95c6.066 0 9.683-3.617 9.683-9.684V10.017c.017-6.067-3.6-9.684-9.667-9.684Zm-4 21.667a1.257 1.257 0 0 1 0 1.767c-.25.25-.566.366-.883.366-.317 0-.633-.116-.883-.366l-5.884-5.884a1.258 1.258 0 0 1 0-1.766l5.884-5.884a1.257 1.257 0 0 1 1.766 0 1.257 1.257 0 0 1 0 1.767l-5 5 5 5Z"
    />
  </svg>
);
export default SvgComponent;
