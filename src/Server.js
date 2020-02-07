import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Server = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="d208afe9-d246-44b1-9723-4e792280c828"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="904"
      height="754.77"
      viewBox="0 0 904 754.77"
    >
      <defs>
        <linearGradient
          id="d0586609-2d1f-4894-831f-bc1bf1cfe805"
          x1="205.5"
          y1="458.72"
          x2="205.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="dc1a1433-8955-4fce-8d84-3a5c46e8d5cb"
          x1="347.94"
          y1="120.14"
          x2="347.94"
          y2="40.02"
          xlink:href="#d0586609-2d1f-4894-831f-bc1bf1cfe805"
        />
        <linearGradient
          id="6583b9bd-7f21-4a55-b428-c52c7257def0"
          x1="347.94"
          y1="269.14"
          x2="347.94"
          y2="189.02"
          xlink:href="#d0586609-2d1f-4894-831f-bc1bf1cfe805"
        />
        <linearGradient
          id="d5bb9150-ad00-4040-8c31-39c92932ad3e"
          x1="347.94"
          y1="417.14"
          x2="347.94"
          y2="337.02"
          xlink:href="#d0586609-2d1f-4894-831f-bc1bf1cfe805"
        />
        <linearGradient
          id="43ab44a3-beba-4304-ae82-955b08a7fed3"
          x1="660.91"
          y1="754.77"
          x2="660.91"
          y2="737.77"
          xlink:href="#d0586609-2d1f-4894-831f-bc1bf1cfe805"
        />
        <linearGradient
          id="e180fe82-c096-4b7f-a7fc-e0d67eafb4b3"
          x1="810"
          y1="732"
          x2="810"
          y2="417"
          xlink:href="#d0586609-2d1f-4894-831f-bc1bf1cfe805"
        />
      </defs>
      <title>server</title>
      <rect
        width="411"
        height="458.72"
        fill="url(#d0586609-2d1f-4894-831f-bc1bf1cfe805)"
      />
      <rect x="6.79" y="306.27" width="397.41" height="142.46" fill="#fff" />
      <rect x="39.41" y="340.06" width="15.4" height="73" fill="#64ffda" />
      <g opacity="0.7">
        <rect x="69.81" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.6">
        <rect x="100.22" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="130.62" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="161.02" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.4">
        <rect x="191.42" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.3">
        <rect x="221.83" y="340.06" width="15.4" height="73" fill="#64ffda" />
      </g>
      <circle cx="347.94" cy="376.09" r="37.16" fill={color} />
      <rect x="6.79" y="158.26" width="397.41" height="142.46" fill="#fff" />
      <rect x="39.41" y="192.05" width="15.4" height="73" fill="#64ffda" />
      <g opacity="0.7">
        <rect x="69.81" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.6">
        <rect x="100.22" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="130.62" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="161.02" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.4">
        <rect x="191.42" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.3">
        <rect x="221.83" y="192.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <circle cx="347.94" cy="228.09" r="37.16" fill={color} />
      <rect x="6.79" y="10.25" width="397.41" height="142.46" fill="#fff" />
      <rect x="39.41" y="44.05" width="15.4" height="73" fill="#64ffda" />
      <g opacity="0.7">
        <rect x="69.81" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.6">
        <rect x="100.22" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="130.62" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.5">
        <rect x="161.02" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.4">
        <rect x="191.42" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <g opacity="0.3">
        <rect x="221.83" y="44.05" width="15.4" height="73" fill="#64ffda" />
      </g>
      <circle
        cx="347.94"
        cy="80.08"
        r="40.06"
        fill="url(#dc1a1433-8955-4fce-8d84-3a5c46e8d5cb)"
      />
      <circle
        cx="347.94"
        cy="229.08"
        r="40.06"
        fill="url(#6583b9bd-7f21-4a55-b428-c52c7257def0)"
      />
      <circle
        cx="347.94"
        cy="377.08"
        r="40.06"
        fill="url(#d5bb9150-ad00-4040-8c31-39c92932ad3e)"
      />
      <circle cx="347.94" cy="80.08" r="37.16" fill={color} />
      <g opacity="0.7">
        <line
          x1="461"
          y1="158.67"
          x2="467"
          y2="158.67"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
        <line
          x1="500.38"
          y1="158.67"
          x2="667.31"
          y2="158.67"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
          stroke-dasharray="12.52 33.38"
        />
        <polyline
          points="684 158.67 690 158.67 690 164.67"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
        <line
          x1="690"
          y1="196.48"
          x2="690"
          y2="311.77"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
          stroke-dasharray="11.93 31.8"
        />
        <line
          x1="690"
          y1="327.67"
          x2="690"
          y2="333.67"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
      </g>
      <g opacity="0.7">
        <line
          x1="367.58"
          y1="611.67"
          x2="361.58"
          y2="611.64"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
        <line
          x1="328.2"
          y1="611.48"
          x2="161.28"
          y2="610.68"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
          stroke-dasharray="12.52 33.38"
        />
        <polyline
          points="144.58 610.61 138.58 610.58 138.62 604.58"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
        <line
          x1="138.82"
          y1="573.79"
          x2="139.28"
          y2="504.52"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
          stroke-dasharray="11.55 30.79"
        />
        <line
          x1="139.38"
          y1="489.12"
          x2="139.42"
          y2="483.12"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="4"
        />
      </g>
      <path
        d="M869.21,703.08s11.92,80.48,82.27,107.31h-285c70.35-26.83,82.27-107.31,82.27-107.31Z"
        transform="translate(-148 -72.62)"
        fill="#e0e0e0"
      />
      <rect
        x="517.09"
        y="737.77"
        width="287.65"
        height="17"
        fill="url(#43ab44a3-beba-4304-ae82-955b08a7fed3)"
      />
      <rect
        x="518.52"
        y="737.77"
        width="284.96"
        height="13.12"
        fill="#f5f5f5"
      />
      <path
        d="M1041.25,417H578.75A10.75,10.75,0,0,0,568,427.75V719.14A12.86,12.86,0,0,0,580.86,732h458.28A12.86,12.86,0,0,0,1052,719.14V427.75A10.75,10.75,0,0,0,1041.25,417Z"
        transform="translate(-148 -72.62)"
        fill="url(#e180fe82-c096-4b7f-a7fc-e0d67eafb4b3)"
      />
      <path
        d="M436.57,348.78H885.43a10.75,10.75,0,0,1,10.75,10.75V609a0,0,0,0,1,0,0H425.82a0,0,0,0,1,0,0V359.54A10.75,10.75,0,0,1,436.57,348.78Z"
        fill="#fff"
      />
      <path
        d="M1031.32,724.54H586.68a12.86,12.86,0,0,1-12.86-12.86V681.62h470.36v30.06A12.86,12.86,0,0,1,1031.32,724.54Z"
        transform="translate(-148 -72.62)"
        fill="#f5f5f5"
      />
      <rect x="449.07" y="369.86" width="425.65" height="210.06" fill={color} />
      <polygon
        points="465.91 383.8 874.99 383.8 874.99 369.79 449.34 369.79 449.34 579.85 465.91 579.85 465.91 383.8"
        fill="#fff"
        opacity="0.2"
      />
    </svg>
  );
};

Server.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Server.defaultProps = {
  color: "primary",
  style: {}
};

export default Server;
