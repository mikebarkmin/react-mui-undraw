import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Upvote = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a1c85ec2-14a6-4651-ae43-a1d11b962a73"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="884.93"
      height="613.66"
      viewBox="0 0 884.93 613.66"
    >
      <defs>
        <linearGradient
          id="573ecdfd-5ff6-4890-b409-fb0c4abc2893"
          x1="442.47"
          y1="613.66"
          x2="442.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>upvote</title>
      <g opacity="0.5">
        <polygon
          points="0 0 0 30.96 0 613.66 884.93 613.66 884.93 30.96 884.93 0 0 0"
          fill="url(#573ecdfd-5ff6-4890-b409-fb0c4abc2893)"
        />
      </g>
      <rect x="13.13" y="38.18" width="862.43" height="564.57" fill="#fff" />
      <rect x="13.13" y="11.33" width="862.43" height="41.54" fill="#f5f5f5" />
      <circle cx="45.95" cy="31.47" r="10.07" fill="#ff5252" />
      <circle cx="73.64" cy="31.47" r="10.07" fill="#ff0" />
      <circle cx="101.33" cy="31.47" r="10.07" fill="#69f0ae" />
      <rect x="180.54" y="158.51" width="289.13" height="28.28" fill={color} />
      <rect x="179.49" y="219.26" width="645.3" height="28.28" fill="#e0e0e0" />
      <rect x="179.49" y="280.02" width="645.3" height="28.28" fill="#e0e0e0" />
      <rect
        x="180.54"
        y="338.91"
        width="289.13"
        height="28.28"
        fill={color}
        opacity="0.5"
      />
      <rect
        x="179.49"
        y="399.67"
        width="645.3"
        height="28.28"
        fill={color}
        opacity="0.5"
      />
      <rect x="179.49" y="460.42" width="645.3" height="28.28" fill="#e0e0e0" />
      <line
        x1="131.11"
        y1="158.33"
        x2="131.11"
        y2="183.99"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 170.28 131.11 160.11 141.28 170.28 141.28 161.65 131.11 151.47 120.94 161.65 120.94 170.28"
        fill="#3ad29f"
      />
      <line
        x1="131.11"
        y1="223.37"
        x2="131.11"
        y2="249.02"
        fill="none"
        stroke="#e0e0e0"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 235.32 131.11 225.14 141.28 235.32 141.28 226.68 131.11 216.51 120.94 226.68 120.94 235.32"
        fill="#e0e0e0"
      />
      <line
        x1="131.11"
        y1="288.4"
        x2="131.11"
        y2="314.06"
        fill="none"
        stroke="#e0e0e0"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 300.35 131.11 290.17 141.28 300.35 141.28 291.71 131.11 281.54 120.94 291.71 120.94 300.35"
        fill="#e0e0e0"
      />
      <line
        x1="131.11"
        y1="342.59"
        x2="131.11"
        y2="368.25"
        fill="none"
        stroke="#e0e0e0"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 354.54 131.11 344.37 141.28 354.54 141.28 345.91 131.11 335.74 120.94 345.91 120.94 354.54"
        fill="#e0e0e0"
      />
      <line
        x1="131.11"
        y1="407.62"
        x2="131.11"
        y2="433.28"
        fill="none"
        stroke="#e0e0e0"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 419.58 131.11 409.4 141.28 419.58 141.28 410.94 131.11 400.77 120.94 410.94 120.94 419.58"
        fill="#e0e0e0"
      />
      <line
        x1="131.11"
        y1="472.66"
        x2="131.11"
        y2="498.32"
        fill="none"
        stroke="#e0e0e0"
        stroke-miterlimit="10"
        strokeWidth="6"
      />
      <polygon
        points="120.94 484.61 131.11 474.43 141.28 484.61 141.28 475.97 131.11 465.8 120.94 475.97 120.94 484.61"
        fill="#e0e0e0"
      />
    </svg>
  );
};

Upvote.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Upvote.defaultProps = {
  color: "primary",
  style: {}
};

export default Upvote;
