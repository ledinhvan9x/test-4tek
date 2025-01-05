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
      fill="#E3FCFF"
      fillRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M23.8 13.248V12c0-.328-.272-.6-.6-.6-.328 0-.6.272-.6.6v1.2h-5.2V12c0-.328-.272-.6-.6-.6-.328 0-.6.272-.6.6v1.248c-2.16.2-3.208 1.488-3.368 3.4a.402.402 0 0 0 .4.424h13.536c.232 0 .424-.2.4-.424-.16-1.912-1.208-3.2-3.368-3.4ZM25.6 22.4a3.2 3.2 0 0 0-3.2 3.2c0 .6.168 1.168.464 1.648A3.176 3.176 0 0 0 25.6 28.8a3.176 3.176 0 0 0 2.736-1.552c.296-.48.464-1.048.464-1.648a3.2 3.2 0 0 0-3.2-3.2Zm1.656 2.856-1.704 1.576a.61.61 0 0 1-.408.16.593.593 0 0 1-.424-.176l-.792-.792a.604.604 0 0 1 0-.848.604.604 0 0 1 .848 0l.384.384 1.28-1.184a.604.604 0 0 1 .848.032.604.604 0 0 1-.032.848Z"
    />
    <path
      fill="#000"
      d="M26.4 18.272H13.6c-.44 0-.8.36-.8.8V24c0 2.4 1.2 4 4 4h3.944a.798.798 0 0 0 .76-1.056c-.16-.464-.296-.976-.296-1.344 0-2.424 1.976-4.4 4.4-4.4.232 0 .464.016.688.056a.796.796 0 0 0 .912-.784V19.08a.816.816 0 0 0-.808-.808Zm-8.632 6.696a.841.841 0 0 1-.568.232.841.841 0 0 1-.568-.232.841.841 0 0 1-.232-.568c0-.208.088-.416.232-.568a.826.826 0 0 1 .264-.168.799.799 0 0 1 .872.168c.144.152.232.36.232.568a.841.841 0 0 1-.232.568Zm0-2.8-.12.096a.606.606 0 0 1-.144.072.508.508 0 0 1-.144.048c-.056.008-.112.016-.16.016a.841.841 0 0 1-.568-.232.841.841 0 0 1-.232-.568c0-.208.088-.416.232-.568a.808.808 0 0 1 .728-.216.508.508 0 0 1 .144.048c.048.016.096.04.144.072l.12.096c.144.152.232.36.232.568a.841.841 0 0 1-.232.568Zm2.8 0A.841.841 0 0 1 20 22.4a.841.841 0 0 1-.568-.232.841.841 0 0 1-.232-.568c0-.208.088-.416.232-.568.304-.296.84-.296 1.136 0 .144.152.232.36.232.568a.841.841 0 0 1-.232.568Z"
    />
  </svg>
);
export default SvgComponent;
