import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Mobile = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e040bbb4-af39-4832-90eb-f6c83b79a36e"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="392.94"
      height="715"
      viewBox="0 0 392.94 715"
    >
      <defs>
        <linearGradient
          id="014c1da1-8fbc-4b78-b7b6-4af1b8694bf8"
          x1="196.47"
          y1="715"
          x2="196.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>mobile</title>
      <rect
        width="392.94"
        height="715"
        rx="24.73"
        ry="24.73"
        fill="url(#014c1da1-8fbc-4b78-b7b6-4af1b8694bf8)"
      />
      <rect
        x="9.05"
        y="9.95"
        width="374.84"
        height="688.43"
        rx="24.73"
        ry="24.73"
        fill="#fff"
      />
      <rect x="51.37" y="58.61" width="290.2" height="560.24" fill={color} />
      <ellipse cx="196.47" cy="659.21" rx="23.14" ry="23.74" fill="#dbdbdb" />
      <ellipse cx="152.51" cy="32.5" rx="4.63" ry="4.75" fill="#dbdbdb" />
      <rect
        x="173.33"
        y="28.94"
        width="71.73"
        height="7.12"
        rx="1.5"
        ry="1.5"
        fill="#dbdbdb"
      />
    </svg>
  );
};

Mobile.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Mobile.defaultProps = {
  color: "primary",
  style: {}
};

export default Mobile;
