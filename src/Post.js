import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Post = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a06630f4-5a92-4acd-87f5-daab904272d6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="822"
      height="773.08"
      viewBox="0 0 822 773.08"
    >
      <defs>
        <linearGradient
          id="12db0703-a137-44d6-91a2-a2698744205c"
          x1="255.71"
          y1="773.08"
          x2="255.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="9c36067a-6324-4b3c-9cb6-e2cffff8588b"
          x1="570.12"
          y1="703.31"
          x2="570.12"
          y2="248.91"
          xlink:href="#12db0703-a137-44d6-91a2-a2698744205c"
        />
      </defs>
      <title>post2</title>
      <g opacity="0.5">
        <rect
          width="511.42"
          height="773.08"
          rx="4.5"
          ry="4.5"
          fill="url(#12db0703-a137-44d6-91a2-a2698744205c)"
        />
      </g>
      <rect
        x="6.56"
        y="5.68"
        width="498.31"
        height="757.43"
        rx="4.5"
        ry="4.5"
        fill="#fff"
      />
      <rect
        x="56.39"
        y="145.21"
        width="99.66"
        height="89.7"
        rx="4.5"
        ry="4.5"
        fill={color}
      />
      <rect
        x="185.95"
        y="145.21"
        width="269.09"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <rect
        x="185.95"
        y="175.1"
        width="223.69"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <rect
        x="56.39"
        y="284.73"
        width="99.66"
        height="89.7"
        rx="4.5"
        ry="4.5"
        fill={color}
      />
      <rect
        x="185.95"
        y="284.73"
        width="269.09"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <rect
        x="185.95"
        y="314.63"
        width="269.09"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <rect
        x="56.39"
        y="424.26"
        width="99.66"
        height="89.7"
        rx="4.5"
        ry="4.5"
        fill={color}
      />
      <rect
        x="185.95"
        y="424.26"
        width="269.09"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <rect
        x="185.95"
        y="454.16"
        width="29.9"
        height="9.97"
        rx="4.48"
        ry="4.48"
        fill="#e0e0e0"
      />
      <g opacity="0.5">
        <rect
          x="318.25"
          y="248.91"
          width="503.75"
          height="454.41"
          rx="4.5"
          ry="4.5"
          fill="url(#9c36067a-6324-4b3c-9cb6-e2cffff8588b)"
        />
      </g>
      <rect
        x="326.03"
        y="253.47"
        width="489.04"
        height="440.14"
        rx="4.5"
        ry="4.5"
        fill="#fff"
      />
      <rect
        x="374.05"
        y="348.03"
        width="105.07"
        height="94.57"
        rx="4.5"
        ry="4.5"
        fill={color}
      />
      <rect
        x="510.64"
        y="348.03"
        width="283.7"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
      <rect
        x="510.64"
        y="379.55"
        width="283.7"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
      <rect
        x="363.54"
        y="493.97"
        width="430.8"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
      <rect
        x="363.54"
        y="525.49"
        width="430.8"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
      <rect
        x="363.54"
        y="567.52"
        width="430.8"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
      <rect
        x="363.54"
        y="599.04"
        width="325.73"
        height="10.51"
        rx="4.5"
        ry="4.5"
        fill="#e0e0e0"
      />
    </svg>
  );
};

Post.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Post.defaultProps = {
  color: "primary",
  style: {}
};

export default Post;
