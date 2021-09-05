import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMention = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1083 758.562"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={406.163} cy={389.544} r={350.304} fill="#f2f2f2" />
      <path
        d="M463.203 443.645C385.789 562.363 407 713.357 407 713.357s146.725-41.486 224.14-160.204 56.202-269.712 56.202-269.712-146.725 41.486-224.139 160.204z"
        fill="#3f3d56"
      />
      <path
        d="M406.589 711.977s-1.885-.301-5.353-1.003a348.139 348.139 0 01-11.228-2.466c-41.58-9.804-152.128-42.944-224.404-130.075-90.459-109.104-86.65-261.534-86.65-261.534S217.27 339.373 308.41 437.35q5.925 6.315 11.528 13.092c78.711 94.93 86.049 222.66 86.63 254.236.08 4.731.02 7.298.02 7.298z"
        fill={color}
      />
      <path
        d="M350.798 443.645C428.212 562.363 407 713.357 407 713.357s-146.724-41.486-224.138-160.204-56.203-269.712-56.203-269.712 146.725 41.486 224.139 160.204z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M406.568 704.679a439.932 439.932 0 01-5.333 6.295c-3.287 3.75-5.152 5.714-5.152 5.714s-2.265-2.847-6.075-8.18c-20.91-29.15-88.173-132.802-82.98-252.532q.42-9.413 1.383-18.625 5.924 6.315 11.527 13.092c78.711 94.93 86.049 222.66 86.63 254.236z"
        opacity={0.1}
      />
      <path
        d="M521.353 464.635c-6.119 141.596-111.229 252.054-111.229 252.054s-95.189-119.114-89.07-260.71 111.23-252.055 111.23-252.055 95.188 119.114 89.07 260.71z"
        fill={color}
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M410.125 712.68l23.108-502.981"
      />
      <ellipse cx={541.5} cy={725.092} rx={541.5} ry={33.469} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M89.884 712.792v-135.18"
      />
      <circle cx={89.884} cy={577.612} r={19.116} fill="#3f3d56" />
      <path d="M89.884 660.927s-2.731-58.737-58.715-51.91" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M555.451 492.105V113.532"
      />
      <circle cx={555.451} cy={113.532} r={26.294} fill="#3f3d56" />
      <path d="M555.451 220.616s-3.756-80.79-80.76-71.4" fill="#3f3d56" />
      <path
        d="M871.294 282.604l-22.825 43.016s-165.042 31.604-143.973 80.766 44.772 121.148 57.062 119.392 79.888-40.383 82.521-51.795-60.574-64.964-60.574-64.964l104.469-20.191s14.924 70.23-4.39 118.514-30.726 179.089-17.558 180.844 46.528 12.29 61.452 2.634 21.947-221.227 21.947-221.227 31.604-138.705 12.29-154.507-90.421-32.482-90.421-32.482z"
        fill="#2f2e41"
      />
      <path
        d="M907.16 666.858s-20.172-10.618-24.42-2.124c0 0 3.186 25.482-9.555 28.667s-18.05 25.482 0 27.605 29.729-4.247 36.099-4.247 0-22.296 0-22.296zM810.945 490.623s-21.958-6.124-24.318 3.074c0 0 8.487 24.237-3.295 30.038s-12.27 28.715 5.821 26.984 28.165-10.42 34.392-11.764-4.702-21.795-4.702-21.795z"
        fill="#2f2e41"
      />
      <path
        d="M920.016 131.17s.878 32.48-5.267 35.114 34.237 18.436 34.237 18.436l7.024-12.29s-7.901-43.895-6.146-47.406-29.848 6.145-29.848 6.145z"
        fill="#9f616a"
      />
      <circle cx={934.665} cy={84.728} r={53.826} fill="#2f2e41" />
      <circle cx={938.377} cy={34.338} r={22.273} fill="#2f2e41" />
      <path
        d="M908.68 22.273A22.275 22.275 0 01928.633.12a22.52 22.52 0 00-2.32-.12 22.273 22.273 0 000 44.546 22.52 22.52 0 002.32-.12 22.275 22.275 0 01-19.953-22.153z"
        fill="#2f2e41"
      />
      <circle cx={933.185} cy={110.978} r={36.871} fill="#9f616a" />
      <path
        d="M959.082 158.822s-31.604 9.657-47.406 0-53.55 18.436-59.696 30.726 22.825 24.581 22.825 24.581-8.272 23.734-6.584 35.554c1.756 12.29-1.317 37.31-1.317 37.31s77.558 51.098 94.812 28.093c2.633-3.512 24.58-86.033 24.58-86.033l30.726-30.726s-19.313-28.092-30.725-30.726-27.215-8.779-27.215-8.779z"
        fill="#d0cde1"
      />
      <path
        d="M747.073 339.228s-59.696 30.725-47.405 39.504 62.33-34.237 62.33-34.237zM981.468 317.28s-26.562-17.933-30.838-8.966 29.082 29.158 36.105 21.257-5.267-12.29-5.267-12.29z"
        fill="#9f616a"
      />
      <path
        d="M1001.22 188.67l15.802 9.657s53.551 73.742 35.116 90.422-65.841 50.04-65.841 50.04-15.802-22.825-10.535-23.703 47.406-35.993 47.406-35.993l-36.871-68.475zM862.515 185.159l-11.412 4.39-29.848 53.55-79.01 95.69s10.535 16.68 19.313 13.168 74.62-77.254 74.62-77.254l43.017-66.719z"
        fill="#d0cde1"
      />
      <ellipse cx={934.665} cy={67.17} rx={37.122} ry={22.273} fill="#2f2e41" />
      <path fill={color} d="M685 543.238h173v173H685z" />
      <path
        d="M835 622.545c0 24.507-11.476 39.952-29.633 39.952-9.294 0-16.371-4.961-17.595-12.337h-1.323c-3.274 7.673-10.021 11.874-19.083 11.874-16.14 0-26.921-12.932-26.921-32.18 0-18.488 10.847-31.353 26.69-31.353 8.135 0 15.048 4.1 18.09 10.814h1.323v-9.194h13.196v42.763c0 5.325 2.944 8.533 8.235 8.533 9.162 0 14.982-11.112 14.982-28.376 0-27.55-20.637-45.972-51.13-45.972-30.163 0-51.66 21.994-51.66 53.115 0 31.817 21.266 52.123 54.372 52.123a100.383 100.383 0 0017.991-1.521 5.23 5.23 0 012.216 10.22 92.424 92.424 0 01-20.736 2.248c-40.25-.033-66.014-24.903-66.014-63.5 0-37.67 26.293-63.533 64.624-63.533 36.844 0 62.376 22.986 62.376 56.324zm-80.301 7.606c0 12.237 5.755 19.646 15.114 19.646 9.856 0 16.074-7.607 16.074-19.646s-6.218-19.48-15.908-19.48c-9.625 0-15.28 7.21-15.28 19.48z"
        fill="#fff"
      />
    </svg>
  );
};

SvgMention.propTypes = {
  color: PropTypes.string
};
SvgMention.defaultProps = {
  color: "primary"
};
export default SvgMention;
