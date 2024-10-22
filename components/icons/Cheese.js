import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Cheese = (props) => {
  return (
    <Svg
      viewBox="0 0 4320 4320"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      width={props.width}
      height={props.height}
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <Path
        d="M1988.31 345.121L3490.73 3349.96H485.889L1988.31 345.121z"
        transform="translate(-302.286 158.432) matrix(-.63279 -.56263 .8219 -.92438 1675.72 5318.61)"
        fill="#ffd100"
      />
      <Path
        d="M2863 450.728c0-101.594-5.65-184.075-12.6-184.075h-711.11c-6.95 0-12.6 82.481-12.6 184.075V818.88c0 101.594 5.65 184.08 12.6 184.08h711.11c6.95 0 12.6-82.486 12.6-184.08V450.728z"
        transform="translate(-302.286 158.432) matrix(2.68679 2.46042 -.16834 .18383 -3405.05 -5178.29)"
        fill="#ffd18b"
      />
    </Svg>
  )
}

export default Cheese
