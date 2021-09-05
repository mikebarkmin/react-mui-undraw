import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCreativeExperiment = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 974 757.15"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#f2f2f2" d="M264 27h248v272H264z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M289 1h248v272H289z"
      />
      <path fill={color} d="M302 242.314h13.371v13.371H302z" />
      <path fill="#3f3d56" d="M321.314 242.314h13.371v13.371h-13.371z" />
      <path fill="#575a89" d="M340.629 242.314H354v13.371h-13.371z" />
      <path
        fill="#3f3d56"
        d="M452 248.122h52v2.108h-52zM452 254.446h52v2.108h-52zM452 260.77h52v2.108h-52zM413 49v22a66 66 0 0146.67 112.67l15.555 15.555A88 88 0 00413 49z"
      />
      <path
        d="M475.225 199.225L459.67 183.67a65.983 65.983 0 01-86.6 5.872l-13.316 17.52a87.998 87.998 0 00115.472-7.836z"
        fill="#575a89"
      />
      <path
        d="M347 137a66 66 0 0166-66V49a88 88 0 00-53.247 158.061l13.316-17.52A65.885 65.885 0 01347 137z"
        fill={color}
      />
      <path
        d="M578.122 576.9A50.122 50.122 0 01528 526.778V468.4c0-116.808 94.692-211.5 211.5-211.5S951 351.592 951 468.4v45.894a62.606 62.606 0 01-62.606 62.606"
        fill="#f2f2f2"
      />
      <path
        d="M909.394 639.9v-2A61.676 61.676 0 00971 576.294V456.4c0-116.07-94.43-210.5-210.5-210.5S550 340.33 550 456.4v132.378a49.178 49.178 0 0049.122 49.122v2A51.18 51.18 0 01548 588.778V456.4c0-117.173 95.327-212.5 212.5-212.5S973 339.227 973 456.4v119.894a63.68 63.68 0 01-63.606 63.606z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M547 562.9h427v176H547z" />
      <path
        fill={color}
        d="M784.999 410.966l40.751-28.971 28.971 40.751-40.751 28.971z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M788.279 400.045l40.751-28.97 28.971 40.75-40.751 28.972z"
      />
      <circle cx={750} cy={341.9} r={21} fill={color} />
      <circle
        cx={744}
        cy={338.9}
        r={21}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill={color}
        d="M687.934 425.82l25.134 14.467 25.133 14.467-25.096 14.533-25.095 14.533-.038-29-.038-29z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M683.895 436.803l25.133 14.468 25.134 14.467-25.096 14.533-25.096 14.532-.038-29-.037-29z"
      />
      <path
        d="M585.435 378.724a87.84 87.84 0 0155.558-59.227c3.63-1.248 2.07-7.046-1.595-5.786a94.081 94.081 0 00-59.749 63.418c-1.03 3.727 4.758 5.318 5.786 1.595zM574.055 411.49c3.86 0 3.867-6 0-6-3.86 0-3.867 6 0 6z"
        fill="#fff"
      />
      <path
        fill="#f2f2f2"
        d="M231.442 319.89l93.41 29.64-36.294 114.38-93.41-29.64z"
      />
      <path
        fill="#3f3d56"
        d="M245.139 346.158l36.678 11.638-.644 2.03-36.678-11.639zM243.95 349.904l53.378 16.937-.644 2.029-53.378-16.937zM241.078 358.956l36.678 11.638-.644 2.03-36.678-11.639zM236.323 373.939l36.678 11.638-.644 2.03-36.678-11.639zM239.89 362.702l53.377 16.937-.644 2.029-53.378-16.937zM238.7 366.447l53.378 16.937-.644 2.03-53.378-16.937zM237.512 370.194l53.377 16.937-.643 2.029-53.378-16.937z"
      />
      <path
        fill={color}
        d="M233.451 382.992l19.197 6.091-1.684 5.307-19.196-6.092z"
      />
      <ellipse cx={131} cy={740.15} rx={131} ry={17} fill="#3f3d56" />
      <path
        d="M69.123 269.526l-4.351 10.335 4.895 66.905s-2.72 3.807 0 6.527 2.176 3.808 2.176 3.808-4.352 0-2.176 3.263 2.176 4.896 2.176 4.896l-1.088 3.263s2.176 2.72 2.176 4.896 14.142 69.08 14.142 69.08l13.599-26.653-7.615-106.068z"
        fill={color}
      />
      <path
        d="M208.758 439.662s29.699-1.2 39.168 9.277-37.202 2.897-39.842-.054.674-9.223.674-9.223z"
        fill="#ffb9b9"
      />
      <path
        d="M62.052 703.59l-5.983 19.582s-8.703 19.038 3.263 21.758 23.39-7.615 23.39-7.615V724.26l4.351-20.67zM159.961 703.59s-2.72 36.988 3.264 39.164 27.197 2.72 27.74 0 7.072-5.44 2.177-9.247-8.16-26.109-8.16-26.109z"
        fill="#2f2e41"
      />
      <path
        d="M105.023 353.293v16.318s-17.95 37.532-24.477 96.822-28.829 239.877-23.39 243.14 64.185 5.44 65.817 1.089 3.264-131.634 3.264-131.634l20.126-89.75s3.807 32.093 7.07 37.532-5.439 182.22 0 184.94 78.872 7.615 77.784-1.088-25.565-244.773-25.565-244.773-12.51-111.508-16.318-112.596-38.62-2.176-44.06-1.088-40.25 1.088-40.25 1.088z"
        fill="#2f2e41"
      />
      <circle cx={146.363} cy={187.391} r={31.005} fill="#ffb9b9" />
      <path
        d="M152.89 213.5s-15.774 24.478-11.967 31.005-40.251-6.527-40.251-6.527 26.653-32.637 26.109-36.444S152.89 213.5 152.89 213.5z"
        fill="#ffb9b9"
      />
      <path
        d="M185.526 249.944s-28.828-9.247-32.636-13.054a52.318 52.318 0 01-6.527-8.16s-34.813-4.895-35.9-4.895-9.247 9.791-11.423 11.967-29.917 16.862-29.917 20.67-4.351 23.389-4.351 23.389 9.79 20.126 15.774 24.477 7.615 3.264 8.16 10.335 8.158 18.494 8.158 18.494 4.896 12.51 3.808 16.318-5.984 7.072 5.44 5.984 67.992 2.176 67.992-3.808-10.88-63.097-10.88-63.097z"
        fill={color}
      />
      <path
        d="M175.192 251.032l10.334-1.088s3.808 2.176 4.352 23.39.544 72.344 4.351 76.695 19.582 71.8 19.582 71.8 4.352 1.088 4.352 4.896 4.895 7.071 2.72 11.423 2.175 3.263-.544 5.983-15.775 8.16-16.319 4.895 1.632-3.807-.544-4.895-2.175-1.632-2.72-5.44-5.439-7.615-4.895-9.246-23.933-48.955-23.933-50.587-1.632-7.615-3.808-8.703-5.44-2.176-3.807-4.895-4.352-84.311-4.352-84.311z"
        fill={color}
      />
      <path
        d="M172.581 167.729c-9.507-10.321-24.438-15.799-38.13-12.729s-25.223 15.226-26.293 29.218c-.22 2.862-.037 5.785-.778 8.558-1.245 4.665-4.952 8.362-6.258 13.01-.875 3.112-.616 6.464-1.544 9.562-1.713 5.724-7.018 9.456-11.062 13.855a14.02 14.02 0 00-3.54 5.795 21.852 21.852 0 00-.269 5.896A41.057 41.057 0 0173.7 269.536a70.652 70.652 0 0113.698-7.963c-2.404 7.655-.207 16.713 5.842 21.986s15.737 6.09 22.277 1.442c3.886-2.762 6.41-7 8.82-11.113l9.125-15.57c1.65-2.817 3.374-5.715 6.012-7.64 2.096-1.528 4.642-2.341 6.752-3.851 5.322-3.808 6.751-11.261 5.76-17.73s-3.9-12.475-5.568-18.803c-1.32-5.005-1.734-10.74 1.235-14.98 3.94-5.63 12.039-6.347 17.393-10.652 2.016-1.621 2.917-3.593 4.36-5.622 1.334-1.873 1.673-1.202 3.739-1.288 5.67-.235 1.538-7.742-.564-10.023z"
        fill="#2f2e41"
      />
      <ellipse cx={145.5} cy={198.15} rx={2.5} ry={6} fill="#ffb9b9" />
      <circle cx={421} cy={598.9} r={32} fill="#f2f2f2" />
      <circle cx={101} cy={48.9} r={32} fill="#f2f2f2" />
      <circle cx={771} cy={123.9} r={32} fill="#f2f2f2" />
    </svg>
  );
};

SvgCreativeExperiment.propTypes = {
  color: PropTypes.string
};
SvgCreativeExperiment.defaultProps = {
  color: "primary"
};
export default SvgCreativeExperiment;
