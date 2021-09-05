import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBuilding = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 907 671.95"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={698.89} cy={78.11} r={78.11} fill="#ff5252" />
      <path fill={color} d="M133.5 131.95h641v503h-641z" />
      <path opacity={0.1} d="M133.5 131.95h641v503h-641z" />
      <path fill="#464353" d="M0 200.95h907v437H0z" />
      <path
        fill={color}
        d="M189 79.95h530v592H189zM37 259.95h112v72H37zM37 381.95h112v72H37zM37 503.95h112v72H37z"
      />
      <path
        fill="#464353"
        d="M257 137.95h112v72H257zM257 259.95h112v72H257zM257 381.95h112v72H257zM651 209.95H539v-72h112zM651 331.95H539v-72h112zM651 453.95H539v-72h112z"
      />
      <path
        fill={color}
        d="M750 259.95h112v72H750zM750 381.95h112v72H750zM750 503.95h112v72H750z"
      />
      <path fill="#464353" d="M405 479.95h98v192h-98z" />
      <path
        opacity={0.1}
        d="M257 137.95h112v22H257zM539 137.95h112v22H539zM539 259.95h112v22H539zM539 381.95h112v22H539zM257 259.95h112v22H257zM257 381.95h112v22H257zM37 259.95h112v17H37zM37 381.95h112v17H37zM37 503.95h112v17H37zM750 259.95h112v17H750zM750 381.95h112v17H750zM750 503.95h112v17H750z"
      />
    </svg>
  );
};

SvgBuilding.propTypes = {
  color: PropTypes.string
};
SvgBuilding.defaultProps = {
  color: "primary"
};
export default SvgBuilding;
