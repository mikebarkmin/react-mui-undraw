import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Statistics = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="22efa8b6-b9ff-4b9b-a3b2-71cec6386f64"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="863"
      height="769.5"
      viewBox="0 0 863 769.5"
    >
      <defs>
        <linearGradient
          id="4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
          x1="279.59"
          y1="769.5"
          x2="279.59"
          y2="175.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="9d815349-9c86-443c-8ccb-e4f40929397c"
          x1="583.59"
          x2="583.59"
          y2="175.12"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="4cdc3fff-77bb-4bd8-8d4b-e4a0e24ac1ff"
          x1="434"
          x2="434"
          y2="118.5"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="d789edb2-9260-4fe7-9b2e-c8d2cf1c50eb"
          x1="431.5"
          y1="426.5"
          x2="431.5"
          y2="23.5"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="d05d60f3-4487-4cf0-bc48-be0df6e13883"
          x1="751.69"
          y1="377.75"
          x2="751.69"
          y2="246.43"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="36694125-ef38-4129-b005-f3dbdd12d1fe"
          x1="415.98"
          y1="335.24"
          x2="415.98"
          y2="303.64"
          gradientTransform="translate(-112.25 703) rotate(-90)"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="dc57276c-937a-4b5a-afe2-156d6e915e6b"
          x1="454.87"
          y1="357.11"
          x2="454.87"
          y2="325.52"
          gradientTransform="translate(-112.25 703) rotate(-90)"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="c93c7978-2b82-4fa6-8ff4-005d931a190d"
          x1="435.42"
          y1="378.98"
          x2="435.42"
          y2="347.39"
          gradientTransform="translate(-112.25 703) rotate(-90)"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
        <linearGradient
          id="28ebadfe-69e4-4a26-9b70-9789031661f3"
          x1="489.7"
          y1="400.86"
          x2="489.7"
          y2="369.26"
          gradientTransform="translate(-112.25 703) rotate(-90)"
          xlink:href="#4d7d6e59-78ed-4d57-a529-1eaaceade2ae"
        />
      </defs>
      <title>statistics</title>
      <polygon
        points="149.58 769.31 125 769.5 414.42 175.12 434.17 184.89 149.58 769.31"
        fill="url(#4d7d6e59-78ed-4d57-a529-1eaaceade2ae)"
      />
      <polygon
        points="715.76 769.31 736 769.5 450.92 175.12 431.17 184.89 715.76 769.31"
        fill="url(#9d815349-9c86-443c-8ccb-e4f40929397c)"
      />
      <rect
        x="423"
        y="118.5"
        width="22"
        height="651"
        fill="url(#4cdc3fff-77bb-4bd8-8d4b-e4a0e24ac1ff)"
      />
      <polygon
        points="149.58 764.31 125 764.5 414.42 174.69 434.17 184.38 149.58 764.31"
        fill="#bdbdbd"
      />
      <polygon
        points="715.76 764.31 736 764.5 450.92 174.69 431.17 184.38 715.76 764.31"
        fill="#bdbdbd"
      />
      <rect x="423" y="118.5" width="22" height="646" fill="#bdbdbd" />
      <path
        d="M600,131.25a28,28,0,0,1-28-28v-10a28,28,0,0,1,56,0v10A28,28,0,0,1,600,131.25Zm0-59a21,21,0,0,0-21,21v10a21,21,0,0,0,42,0v-10A21,21,0,0,0,600,72.25Z"
        transform="translate(-168.5 -65.25)"
        fill="#bdbdbd"
      />
      <rect
        y="23.5"
        width="863"
        height="403"
        fill="url(#d789edb2-9260-4fe7-9b2e-c8d2cf1c50eb)"
      />
      <rect x="8.5" y="31" width="846" height="382" fill="#bdbdbd" />
      <rect x="23.5" y="43" width="814" height="348" fill="#fff" />
      <path
        d="M818.69,120.75l-.75,0V370.93l.75,0a125.1,125.1,0,1,0,0-250.2Z"
        transform="translate(-168.5 -65.25)"
        fill="#2196f3"
      />
      <path
        d="M817.94,120.77A125.08,125.08,0,0,0,693.61,245.1H817.94Z"
        transform="translate(-168.5 -65.25)"
        fill="#69f0ae"
      />
      <path
        d="M686.83,246.43c0,.26,0,.52,0,.79A130.54,130.54,0,0,0,816.57,377.75V246.43Z"
        transform="translate(-168.5 -65.25)"
        fill="url(#d05d60f3-4487-4cf0-bc48-be0df6e13883)"
      />
      <path
        d="M690.59,248.11c0,.25,0,.5,0,.75A125.09,125.09,0,0,0,814.92,373.95V248.11Z"
        transform="translate(-168.5 -65.25)"
        fill={color}
      />
      <rect x="47" y="67.5" width="241.4" height="17.08" fill="#bdbdbd" />
      <rect x="47" y="95.45" width="386" height="17.08" fill="#e0e0e0" />
      <rect x="47" y="123.4" width="386" height="17.08" fill="#e0e0e0" />
      <rect x="47" y="151.36" width="386" height="17.08" fill="#e0e0e0" />
      <rect x="695" y="344.5" width="27" height="27" fill="#2196f3" />
      <rect x="733" y="350.5" width="88" height="16" fill="#e0e0e0" />
      <rect x="542" y="344.5" width="27" height="27" fill={color} />
      <rect x="580" y="350.5" width="88" height="16" fill="#e0e0e0" />
      <rect x="394" y="344.5" width="27" height="27" fill="#69f0ae" />
      <rect x="432" y="350.5" width="88" height="16" fill="#e0e0e0" />
      <rect x="203.05" y="205.8" width="8.51" height="135.7" fill="#e0e0e0" />
      <rect x="224.92" y="205.8" width="8.51" height="135.7" fill="#e0e0e0" />
      <rect x="246.8" y="205.8" width="8.51" height="135.7" fill="#e0e0e0" />
      <rect x="268.67" y="205.8" width="8.51" height="135.7" fill="#e0e0e0" />
      <circle
        cx="207.19"
        cy="287.02"
        r="15.8"
        fill="url(#36694125-ef38-4129-b005-f3dbdd12d1fe)"
      />
      <circle
        cx="229.06"
        cy="248.13"
        r="15.8"
        fill="url(#dc57276c-937a-4b5a-afe2-156d6e915e6b)"
      />
      <circle
        cx="250.94"
        cy="267.58"
        r="15.8"
        fill="url(#c93c7978-2b82-4fa6-8ff4-005d931a190d)"
      />
      <circle
        cx="272.81"
        cy="213.3"
        r="15.8"
        fill="url(#28ebadfe-69e4-4a26-9b70-9789031661f3)"
      />
      <circle cx="207.19" cy="287.02" r="13.37" fill={color} />
      <circle cx="229.06" cy="248.13" r="13.37" fill="#69f0ae" />
      <circle cx="250.94" cy="267.58" r="13.37" fill="#2196f3" />
      <circle cx="272.81" cy="213.3" r="13.37" fill={color} />
    </svg>
  );
};

Statistics.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Statistics.defaultProps = {
  color: "primary",
  style: {}
};

export default Statistics;
