import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Yacht = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="fab417e8-a014-4924-af3a-60c14cbf464e"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="892.19463"
      height="746.42928"
      viewBox="0 0 892.19463 746.42928"
    >
      <defs>
        <linearGradient
          id="ba5dc2b7-ca42-4f2e-9a45-768e37a33bc6"
          x1="231.97829"
          y1="331.46449"
          x2="231.97829"
          y2="18.57072"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>Yacht</title>
      <circle
        cx="231.97829"
        cy="175.0176"
        r="156.44688"
        fill="url(#ba5dc2b7-ca42-4f2e-9a45-768e37a33bc6)"
      />
      <circle cx="231.97829" cy="175.0176" r="146.79226" fill="#ff5252" />
      <rect x="437.19463" width="14" height="136" fill={color} />
      <rect x="248.19463" y="128" width="398" height="204" fill="#464353" />
      <g opacity="0.5">
        <rect x="274.19463" y="169" width="84" height="67" fill={color} />
        <rect x="413.19463" y="169" width="84" height="67" fill={color} />
        <rect x="552.19463" y="169" width="84" height="67" fill={color} />
      </g>
      <path
        d="M1046.09731,353.78536a396.90116,396.90116,0,0,1-397,397h-477v-397Z"
        transform="translate(-153.90269 -76.78536)"
        fill="#464353"
      />
      <path
        d="M1046.09731,353.78536a398.47471,398.47471,0,0,1-7.87,79h-866.13v-79Z"
        transform="translate(-153.90269 -76.78536)"
        fill={color}
      />
      <path
        d="M956.69729,604.78536a399.35749,399.35749,0,0,1-86.83,79h-697.77v-79Z"
        transform="translate(-153.90269 -76.78536)"
        fill={color}
      />
      <g opacity="0.5">
        <rect x="51.19463" y="400" width="84" height="67" fill={color} />
        <rect x="190.19463" y="400" width="84" height="67" fill={color} />
        <rect x="329.19463" y="400" width="84" height="67" fill={color} />
      </g>
      <g opacity="0.5">
        <rect x="465.19463" y="400" width="84" height="67" fill={color} />
        <rect x="604.19463" y="400" width="84" height="67" fill={color} />
        <rect x="743.19463" y="400" width="84" height="67" fill={color} />
      </g>
      <rect
        y="666.12518"
        width="748.43423"
        height="10.70721"
        rx="5"
        fill={color}
      />
      <rect
        y="686.46888"
        width="277.31683"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="213.07355"
        y="711.09547"
        width="277.31683"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="444.34936"
        y="735.72207"
        width="277.31683"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="777.34371"
        y="666.12518"
        width="49.25318"
        height="10.70721"
        rx="5"
        fill={color}
      />
      <rect
        x="495.74399"
        y="686.46888"
        width="49.25318"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="70.66761"
        y="711.09547"
        width="49.25318"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="546.06789"
        y="711.09547"
        width="49.25318"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <rect
        x="39.61669"
        y="735.72207"
        width="277.31683"
        height="10.70721"
        rx="4.99999"
        fill={color}
      />
      <path
        d="M605.09731,76.78536s133,5,153,0c0,0-13,25,0,40s-10,28-10,28h-150Z"
        transform="translate(-153.90269 -76.78536)"
        fill={color}
      />
    </svg>
  );
};

Yacht.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Yacht.defaultProps = {
  color: "primary",
  style: {}
};

export default Yacht;
