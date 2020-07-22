import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgGrowthCurve = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 736.827 633.877"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M94.336 78.093s9.671 22.968-12.088 33.848 58.025 31.43 66.487 4.836c0 0-21.76-8.462-12.089-33.848zM120.327 552.567l-1.209 25.386 20.55 3.627v-25.386l-19.341-3.627zM42.96 552.567l1.209 25.386-20.55 3.627v-25.386l19.341-3.627z"
        fill="#ffb9b9"
      />
      <circle cx={117.909} cy={58.147} r={33.848} fill="#ffb9b9" />
      <path
        fill="#ffb9b9"
        d="M165.055 303.544l-1.21 9.67 6.045 22.969 8.461-20.55-13.296-12.089z"
      />
      <path
        d="M30.872 307.17L23.619 393s-8.462 15.715-3.627 29.012c0 0-7.253 18.133-4.835 24.177s3.626 12.089 1.208 14.507-3.626 70.113 0 76.157 6.045 20.55 6.045 20.55 20.55 4.836 25.386-8.461 2.417-14.506 7.253-18.133 4.835-54.398 4.835-54.398-6.044-6.045-2.418-8.462 6.045 0 2.418-6.045-9.67-6.044-3.627-8.462a57.64 57.64 0 009.671-4.835l35.057-91.873s13.297 102.753 15.715 107.588 6.044-1.209 2.418 4.835-4.836 2.418-3.627 6.045-7.253 55.607-2.418 66.487a163.823 163.823 0 017.254 19.341s19.341 8.462 21.759 2.418 1.209-16.924 4.835-18.133 7.253-3.626 7.253-13.297 7.253-56.816 7.253-56.816-8.462-3.627-6.044-9.671 2.418-4.835 1.21-9.67-3.627-6.045-1.21-9.672 2.418-14.506 2.418-14.506l14.506-95.5-11.202-32.638zM121.535 571.909s-3.626-3.627-4.835 0-1.209 37.474-1.209 37.474 9.671 7.253 9.671 10.88 7.253 15.715 24.177 13.297q.254-.036.502-.075a16.005 16.005 0 0011.9-22.655l-17.237-36.503s-12.089-12.089-22.969-2.418zM41.751 571.909s3.627-3.627 4.836 0 1.209 37.474 1.209 37.474-9.671 7.253-9.671 10.88-7.253 15.715-24.177 13.297q-.254-.036-.503-.075a16.005 16.005 0 01-11.9-22.655l17.238-36.503s12.089-12.089 22.968-2.418zM92.111 21.485l-6.047-2.422S98.709 5.143 116.3 6.353L111.353.905s12.095-4.842 23.09 7.869c5.78 6.682 12.468 14.536 16.638 23.383h6.476l-2.703 5.952 9.46 5.951-9.71-1.069a32.934 32.934 0 01-.918 15.415l.26 4.704S142.69 45.695 142.69 43.274v6.053s-6.047-5.448-6.047-9.08l-3.299 4.238-1.65-6.658-20.34 6.658 3.298-5.448-12.645 1.816 4.948-6.658s-14.294 7.869-14.844 14.527c-.55 6.657-7.696 15.131-7.696 15.131L81.116 57.8s-4.948-27.236 10.995-36.315z"
        fill="#2f2e41"
      />
      <path
        d="M169.89 133.096h13.468a4.358 4.358 0 014.253 3.4c2.078 9.202 7.434 35.29 6.456 55.834-1.21 25.386 1.208 43.518 0 47.145s0 4.835 0 8.462 3.626 1.209 0 6.044-3.627 3.627-3.627 7.253-12.088 59.234-12.088 59.234-8.311-13.66-17.453-11.06l1.737-49.383 2.418-20.55-3.626-36.266z"
        fill="#3f3d56"
      />
      <path
        d="M111.26 120.403s-20.55-.747-27.199-9.44c0 0-42.914 14.275-47.75 26.364s16.924 66.487 16.924 66.487-37.474 111.214-19.341 111.214 59.233 14.506 83.41 6.044a310.721 310.721 0 0145.937-12.088s2.418-32.64 0-38.683-8.462-2.418-4.836-10.88 2.418-9.67 1.21-13.297 2.417-8.462 2.417-13.298-1.209-15.715-1.209-15.715 32.64-76.157 25.386-83.41-44.173-21.23-44.173-21.23-10.225 12.767-30.776 7.932z"
        fill="#3f3d56"
      />
      <path
        d="M16.365 315.633s-10.88 56.816 7.253 51.98 9.671-51.98 9.671-51.98z"
        fill="#ffb9b9"
      />
      <path
        d="M44.169 133.096l-4.293 2.147a12.108 12.108 0 00-6.486 8.598L16.365 234.64s-4.835 10.88-4.835 12.088 2.418 1.209 0 4.835-6.044 2.418-3.627 4.836a7.488 7.488 0 012.418 4.835l2.418 59.234s20.55-6.044 26.595 0c0 0-6.045-18.133-2.418-24.177s3.626-14.506 3.626-14.506-2.417 0 3.627-6.045 7.253-8.462 6.044-9.67-2.417-12.089-2.417-13.298 12.088-82.202 12.088-82.202z"
        fill="#3f3d56"
      />
      <path
        d="M295.827 15.04a7.008 7.008 0 00-7 7v296a7.008 7.008 0 007 7h434a7.008 7.008 0 007-7v-296a7.008 7.008 0 00-7-7z"
        fill="#e6e6e6"
      />
      <path
        d="M305.827 25.04a7.008 7.008 0 00-7 7v276a7.008 7.008 0 007 7h414a7.008 7.008 0 007-7v-276a7.008 7.008 0 00-7-7z"
        fill="#fff"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M329.713 255l21.895-16.011 86.537-13.725 53.174-13.724 29.193 11.549 39.619-56.152 27.108 5.718 40.662-44.603 20.852 6.862L696.713 56v198.89l-367 .11z"
      />
      <path
        d="M332.213 254.5a2 2 0 010-4c92.415 0 180.55-18.504 248.17-52.104 63.408-31.506 103.814-74.231 110.857-117.22a2 2 0 113.947.647c-3.658 22.33-15.534 44.236-35.296 65.107-19.49 20.584-45.641 39.106-77.727 55.049C514 235.848 425.234 254.5 332.214 254.5z"
        fill={color}
      />
      <path fill="#e6e6e6" d="M711.827 254.904h-382V66.176h2v186.728h380v2z" />
    </svg>
  );
};

SvgGrowthCurve.propTypes = {
  color: PropTypes.string
};
SvgGrowthCurve.defaultProps = {
  color: "primary"
};
export default SvgGrowthCurve;
