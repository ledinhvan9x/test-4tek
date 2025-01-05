import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={260}
    height={100}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h260v100H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00167 0 0 .00435 .213 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={343}
        height={230}
      />
    </defs>
  </svg>
);
export default SvgComponent;
