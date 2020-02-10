import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNotebook = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 878 470"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#575a89" d="M0 0h878v470H0z" />
      <path fill="#fff" d="M39 31h376v412H39zM839 443H463V31h376z" />
      <path
        fill={color}
        opacity={0.2}
        d="M69 83h298v10H69zM69 123h298v10H69zM69 163h298v10H69zM494 83h298v10H494zM494 123h298v10H494zM494 163h298v10H494zM69 203h298v10H69zM69 243h298v10H69zM69 283h298v10H69zM69 323h298v10H69zM69 363h298v10H69z"
      />
    </svg>
  );
};

SvgNotebook.propTypes = {
  color: PropTypes.string
};
SvgNotebook.defaultProps = {
  color: "primary"
};
const MemoSvgNotebook = React.memo(SvgNotebook);
export default MemoSvgNotebook;
