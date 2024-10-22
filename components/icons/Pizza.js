import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const Pizza = (props) => {
  return (
    <Svg
      viewBox="0 0 4320 4320"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <Path
        d="M1988.31 345.121L3490.73 3349.96H485.889L1988.31 345.121z"
        transform="translate(-302.286 158.432) matrix(-.63279 -.56263 .8219 -.92438 1675.72 5318.61)"
        fill="#ffd100"
      />
      <Circle
        cx={2499.6}
        cy={1386.62}
        r={303.688}
        transform="translate(-302.286 158.432) matrix(.83054 0 0 .83054 1150.02 708.225)"
        fill="#ff3600"
      />
      <Circle
        cx={2499.6}
        cy={1386.62}
        r={303.688}
        transform="translate(-302.286 158.432) matrix(.76197 0 0 .76197 542.769 173.171)"
        fill="#ff3600"
      />
      <Circle
        cx={2499.6}
        cy={1386.62}
        r={303.688}
        transform="translate(-302.286 158.432) matrix(.76197 0 0 .76197 -15.461 1503.25)"
        fill="#ff3600"
      />
      <Circle
        cx={2499.6}
        cy={1386.62}
        r={303.688}
        transform="translate(-302.286 158.432) matrix(.45733 -.60947 .60947 .45733 542.7 3017.19)"
        fill="#ff3600"
      />
      <Circle
        cx={2499.6}
        cy={1386.62}
        r={303.688}
        transform="translate(-302.286 158.432) matrix(.6181 0 0 .6181 -147.389 2247.84)"
        fill="#ff3600"
      />
      <Path
        d="M2863 450.728c0-101.594-5.65-184.075-12.6-184.075h-711.11c-6.95 0-12.6 82.481-12.6 184.075V818.88c0 101.594 5.65 184.08 12.6 184.08h711.11c6.95 0 12.6-82.486 12.6-184.08V450.728z"
        transform="translate(-302.286 158.432) matrix(2.68679 2.46042 -.16834 .18383 -3405.05 -5178.29)"
        fill="#ffd18b"
      />
    </Svg>
  )
}

export default Pizza