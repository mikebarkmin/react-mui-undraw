import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Building = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a829b389-c410-4f7b-96e4-605d098a680d"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="907"
      height="671.95"
      viewBox="0 0 907 671.95"
    >
      <title>Building</title>
      <circle cx="698.89" cy="78.11" r="78.11" fill="#ff5252" />
      <rect x="133.5" y="131.95" width="641" height="503" fill={color} />
      <rect x="133.5" y="131.95" width="641" height="503" opacity="0.1" />
      <rect y="200.95" width="907" height="437" fill="#464353" />
      <rect x="189" y="79.95" width="530" height="592" fill={color} />
      <rect x="37" y="259.95" width="112" height="72" fill={color} />
      <rect x="37" y="381.95" width="112" height="72" fill={color} />
      <rect x="37" y="503.95" width="112" height="72" fill={color} />
      <rect x="257" y="137.95" width="112" height="72" fill="#464353" />
      <rect x="257" y="259.95" width="112" height="72" fill="#464353" />
      <rect x="257" y="381.95" width="112" height="72" fill="#464353" />
      <rect
        x="685.5"
        y="251.98"
        width="112"
        height="72"
        transform="translate(1336.5 461.93) rotate(-180)"
        fill="#464353"
      />
      <rect
        x="685.5"
        y="373.98"
        width="112"
        height="72"
        transform="translate(1336.5 705.93) rotate(-180)"
        fill="#464353"
      />
      <rect
        x="685.5"
        y="495.98"
        width="112"
        height="72"
        transform="translate(1336.5 949.93) rotate(-180)"
        fill="#464353"
      />
      <rect x="750" y="259.95" width="112" height="72" fill={color} />
      <rect x="750" y="381.95" width="112" height="72" fill={color} />
      <rect x="750" y="503.95" width="112" height="72" fill={color} />
      <rect x="405" y="479.95" width="98" height="192" fill="#464353" />
      <rect x="257" y="137.95" width="112" height="22" opacity="0.1" />
      <rect x="539" y="137.95" width="112" height="22" opacity="0.1" />
      <rect x="539" y="259.95" width="112" height="22" opacity="0.1" />
      <rect x="539" y="381.95" width="112" height="22" opacity="0.1" />
      <rect x="257" y="259.95" width="112" height="22" opacity="0.1" />
      <rect x="257" y="381.95" width="112" height="22" opacity="0.1" />
      <rect x="37" y="259.95" width="112" height="17" opacity="0.1" />
      <rect x="37" y="381.95" width="112" height="17" opacity="0.1" />
      <rect x="37" y="503.95" width="112" height="17" opacity="0.1" />
      <rect x="750" y="259.95" width="112" height="17" opacity="0.1" />
      <rect x="750" y="381.95" width="112" height="17" opacity="0.1" />
      <rect x="750" y="503.95" width="112" height="17" opacity="0.1" />
    </svg>
  );
};

Building.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Building.defaultProps = {
  color: "primary",
  style: {}
};

export default Building;
