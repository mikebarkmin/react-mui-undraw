import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const InternetOnTheGo = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="cf1d5875-955f-4eea-a065-83a6d89352b1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="625.28"
      height="730.24"
      viewBox="0 0 625.28 730.24"
    >
      <defs>
        <linearGradient
          id="aaa42a41-393e-4793-ac7b-fb485ae9f3c2"
          x1="681.66"
          y1="793.64"
          x2="681.66"
          y2="89.9"
          gradientTransform="translate(12.18 -5.36) scale(0.98 1.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="9be20a77-d28e-482c-b899-e14d6abf5818"
          x1="682.5"
          y1="733.91"
          x2="682.5"
          y2="143.66"
          gradientTransform="translate(12.18 -5.36) scale(0.98 1.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.12" />
          <stop offset="0.55" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="abf63e91-d6cf-4578-b02e-8905ced2cf4b"
          x1="443.89"
          y1="807.45"
          x2="443.89"
          y2="260.81"
          gradientTransform="translate(0.11 -13.69) scale(1 1.03)"
          xlink:href="#aaa42a41-393e-4793-ac7b-fb485ae9f3c2"
        />
      </defs>
      <title>Internet on the go</title>
      <rect
        x="449.17"
        y="85.17"
        width="463.01"
        height="708.67"
        rx="17.17"
        ry="17.17"
        transform="translate(-287.95 -83.96) rotate(-0.08)"
        fill="url(#aaa42a41-393e-4793-ac7b-fb485ae9f3c2)"
      />
      <rect
        x="481.58"
        y="139.3"
        width="399.85"
        height="594.38"
        transform="translate(-287.95 -83.96) rotate(-0.08)"
        fill="url(#9be20a77-d28e-482c-b899-e14d6abf5818)"
      />
      <rect
        x="458.46"
        y="90.09"
        width="443.39"
        height="681.66"
        rx="17.17"
        ry="17.17"
        transform="translate(-287.94 -83.96) rotate(-0.08)"
        fill="#fff"
      />
      <rect
        x="489.49"
        y="142.16"
        width="382.91"
        height="571.73"
        transform="translate(-287.94 -83.96) rotate(-0.08)"
        fill={color}
      />
      <circle
        cx="682.42"
        cy="742.29"
        r="15.78"
        transform="matrix(1, 0, 0, 1, -288.36, -83.96)"
        fill="#dbdbdb"
      />
      <circle
        cx="614.25"
        cy="117.53"
        r="5.26"
        transform="translate(-287.52 -84.05) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="640.55"
        y="114.29"
        width="68.38"
        height="5.26"
        rx="1.43"
        ry="1.43"
        transform="translate(-287.52 -83.97) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="287.73"
        y="253.95"
        width="312.56"
        height="560.98"
        rx="10"
        ry="10"
        transform="translate(-288.08 -84.28) rotate(-0.08)"
        fill="url(#abf63e91-d6cf-4578-b02e-8905ced2cf4b)"
      />
      <rect
        x="294.91"
        y="259.74"
        width="298.17"
        height="533.76"
        rx="10"
        ry="10"
        transform="translate(-288.07 -84.28) rotate(-0.08)"
        fill="#fff"
      />
      <rect
        x="328.56"
        y="297.47"
        width="230.84"
        height="434.37"
        transform="translate(-288.05 -84.28) rotate(-0.08)"
        fill={color}
      />
      <circle
        cx="444.32"
        cy="763.13"
        r="18.41"
        transform="translate(-288.39 -84.28) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <circle
        cx="408.69"
        cy="277.27"
        r="3.68"
        transform="translate(-287.74 -84.33) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="425.26"
        y="274.45"
        width="57.06"
        height="5.52"
        rx="1.5"
        ry="1.5"
        transform="translate(-287.73 -84.27) rotate(-0.08)"
        fill="#dbdbdb"
      />
    </svg>
  );
};

InternetOnTheGo.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

InternetOnTheGo.defaultProps = {
  color: "primary",
  style: {}
};

export default InternetOnTheGo;
