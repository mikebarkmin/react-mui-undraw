import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const BlogPost = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="148311d9-c125-4449-a148-b8fa33f3c561"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="627.45"
      height="759"
      viewBox="0 0 627.45 759"
    >
      <defs>
        <linearGradient
          id="fe24b365-19a0-4a71-abdc-76e4b2fc8dee"
          x1="313.72"
          y1="759"
          x2="313.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="f1e26e3d-9d52-4866-b24c-036458e443cc"
          x1="313.72"
          y1="455.23"
          x2="313.72"
          y2="213.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="#b3b3b3" stop-opacity="0.1" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <title>blog</title>
      <rect
        width="627.45"
        height="759"
        fill="url(#fe24b365-19a0-4a71-abdc-76e4b2fc8dee)"
      />
      <rect x="7.58" y="5.49" width="612.28" height="736.45" fill="#fff" />
      <rect x="50.71" y="52.74" width="240.74" height="19.72" fill="#64ffda" />
      <rect x="50.71" y="513.37" width="240.74" height="19.72" fill="#64ffda" />
      <rect x="50.71" y="92.18" width="526.03" height="19.72" fill="#e0e0e0" />
      <rect x="50.71" y="131.63" width="526.03" height="19.72" fill="#e0e0e0" />
      <rect
        x="46.44"
        y="213.09"
        width="534.56"
        height="242.14"
        fill="url(#f1e26e3d-9d52-4866-b24c-036458e443cc)"
      />
      <rect x="51.18" y="216.78" width="526.03" height="231.2" fill={color} />
      <rect x="50.71" y="637.59" width="526.03" height="19.72" fill="#e0e0e0" />
      <rect x="50.71" y="678.34" width="526.03" height="19.72" fill="#e0e0e0" />
      <rect x="50.71" y="597.05" width="526.03" height="19.72" fill="#e0e0e0" />
      <rect x="50.71" y="556.51" width="526.03" height="19.72" fill="#e0e0e0" />
    </svg>
  );
};

BlogPost.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

BlogPost.defaultProps = {
  color: "primary",
  style: {}
};

export default BlogPost;
