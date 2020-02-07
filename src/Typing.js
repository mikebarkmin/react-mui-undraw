import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Typing = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="0d3bee8d-6283-4722-b2f5-6188c764ca3b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="885"
      height="657"
      viewBox="0 0 885 657"
    >
      <defs>
        <linearGradient
          id="e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
          x1="2330.5"
          y1="628"
          x2="2330.5"
          y2="120"
          gradientTransform="matrix(-1, 0, 0, 1, 2630, -120)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="656a49b8-0e74-4269-923d-a5cb8c729e5a"
          x1="589"
          y1="657"
          x2="589"
          y2="150"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
        />
        <linearGradient
          id="4ac03110-48b7-4c46-9a7b-750500b44d13"
          x1="483.99"
          y1="408.82"
          x2="483.99"
          y2="324.2"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
        />
        <linearGradient
          id="659745b9-c7a7-4aa8-bbf0-7b73c169c514"
          x1="589.48"
          y1="408.82"
          x2="589.48"
          y2="324.2"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
        />
        <linearGradient
          id="ee701dec-23cf-49d9-a833-d49e1cd62e17"
          x1="694.96"
          y1="408.82"
          x2="694.96"
          y2="324.2"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869"
        />
      </defs>
      <title>typing</title>
      <polygon
        points="0 0 599 0 599 434.06 218.15 434.06 177 508 133.77 434.06 0 434.06 0 0"
        fill="url(#e4e73d90-53f9-4a31-ac8c-cd2f87b1a869)"
      />
      <polygon
        points="7.57 8.33 589.48 8.33 589.48 427.95 211.79 427.95 176.81 503.3 137.52 427.95 7.57 427.95 7.57 8.33"
        fill="#f5f5f5"
      />
      <rect
        x="237.18"
        y="254.1"
        width="433.53"
        height="18.55"
        transform="translate(751.89 406.75) rotate(-180)"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="237.18"
        y="294.67"
        width="433.53"
        height="18.55"
        transform="translate(751.89 487.89) rotate(-180)"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="237.18"
        y="335.24"
        width="433.53"
        height="18.55"
        transform="translate(751.89 569.03) rotate(-180)"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="237.18"
        y="375.81"
        width="433.53"
        height="18.55"
        transform="translate(751.89 650.17) rotate(-180)"
        fill={color}
        opacity="0.3"
      />
      <polygon
        points="885 150 293 150 293 583.21 675 583 711 657 752.79 583.21 885 583.21 885 150"
        fill="url(#656a49b8-0e74-4269-923d-a5cb8c729e5a)"
      />
      <polygon
        points="880.43 156.7 298.52 156.7 298.52 576.32 676.21 576.32 711.19 651.67 750.48 576.32 880.43 576.32 880.43 156.7"
        fill="#fff"
      />
      <circle
        cx="483.99"
        cy="366.51"
        r="42.31"
        fill="url(#4ac03110-48b7-4c46-9a7b-750500b44d13)"
      />
      <circle
        cx="589.48"
        cy="366.51"
        r="42.31"
        fill="url(#659745b9-c7a7-4aa8-bbf0-7b73c169c514)"
      />
      <circle
        cx="694.96"
        cy="366.51"
        r="42.31"
        fill="url(#ee701dec-23cf-49d9-a833-d49e1cd62e17)"
      />
      <circle cx="483.99" cy="366.51" r="38.25" fill={color} />
      <circle cx="589.48" cy="366.51" r="38.25" fill={color} opacity="0.6" />
      <circle cx="694.96" cy="366.51" r="38.25" fill={color} opacity="0.3" />
    </svg>
  );
};

Typing.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Typing.defaultProps = {
  color: "primary",
  style: {}
};

export default Typing;
