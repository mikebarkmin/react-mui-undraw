import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Notebook = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e7cc9005-4a43-4f79-bfdb-124f36e96ace"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="878"
      height="470"
      viewBox="0 0 878 470"
    >
      <title>Notebook</title>
      <rect width="878" height="470" fill="#575a89" />
      <rect x="39" y="31" width="376" height="412" fill="#fff" />
      <rect
        x="648"
        y="234"
        width="376"
        height="412"
        transform="translate(1487 677) rotate(-180)"
        fill="#fff"
      />
      <rect x="69" y="83" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="123" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="163" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="494" y="83" width="298" height="10" fill={color} opacity="0.2" />
      <rect
        x="494"
        y="123"
        width="298"
        height="10"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="494"
        y="163"
        width="298"
        height="10"
        fill={color}
        opacity="0.2"
      />
      <rect x="69" y="203" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="243" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="283" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="323" width="298" height="10" fill={color} opacity="0.2" />
      <rect x="69" y="363" width="298" height="10" fill={color} opacity="0.2" />
    </svg>
  );
};

Notebook.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Notebook.defaultProps = {
  color: "primary",
  style: {}
};

export default Notebook;
