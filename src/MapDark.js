import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MapDark = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="efaf6d37-ad8b-408b-a167-fb47e2b6544c"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1142.04574"
      height="959.78855"
      viewBox="0 0 1142.04574 959.78855"
    >
      <defs>
        <linearGradient
          id="eaeac4a1-6091-43b3-af38-ae8114f9a62f"
          x1="535.45073"
          y1="779.24414"
          x2="535.45073"
          y2="104.90687"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <clipPath
          id="b609a8ad-8ad7-4296-9cf1-6f9923717ce3"
          transform="translate(-64.54927 -7.92449)"
        >
          <polygon
            points="889.286 734.556 724.703 734.556 473.645 758.825 220.644 734.556 220.644 139.96 472.596 158.162 729.989 139.96 981.786 174.341 981.786 641.525 889.286 734.556"
            fill={color}
          />
        </clipPath>
        <linearGradient
          id="eaa4df2b-8460-421b-8c86-0d729e8c7ac3"
          x1="873.18636"
          y1="742.81095"
          x2="873.18636"
          y2="620.07624"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.12" />
          <stop offset="0.55135" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
      </defs>
      <title>Map dark</title>
      <polygon
        points="829.064 752.8 669.299 752.8 397.178 779.244 122.951 752.8 122.951 104.907 396.041 124.74 675.029 104.907 947.951 142.37 940.945 639.909 829.064 752.8"
        fill="url(#eaeac4a1-6091-43b3-af38-ae8114f9a62f)"
      />
      <polygon
        points="823.856 743.794 667.586 743.794 401.418 769.524 133.19 743.794 133.19 113.412 400.306 132.709 673.19 113.412 940.142 149.863 933.289 633.955 823.856 743.794"
        fill="#fff"
      />
      <polygon
        points="824.736 726.631 660.154 726.631 409.096 750.901 156.095 726.631 156.095 132.035 408.047 150.237 665.44 132.035 917.237 166.417 917.237 633.6 824.736 726.631"
        fill={color}
      />
      <g clip-path="url(#b609a8ad-8ad7-4296-9cf1-6f9923717ce3)">
        <polygon
          points="1142.046 905.143 564.089 585.083 710.891 97.332 660.931 77.52 589.788 313.893 22.967 0 0 54.646 572.409 371.634 441.726 805.828 491.686 825.64 546.71 642.823 1119.079 959.789 1142.046 905.143"
          fill="#fff"
        />
      </g>
      <polygon
        points="813.083 742.811 815.019 620.076 933.289 624.847 813.083 742.811"
        fill="url(#eaa4df2b-8460-421b-8c86-0d729e8c7ac3)"
      />
      <polygon
        points="156.095 388.993 518.844 549.605 542.951 599.576 518.951 624.576 156.095 452.489 156.095 388.993"
        fill="#fff"
      />
      <polygon
        points="823.856 742.811 825.618 629.555 933.289 633.957 823.856 742.811"
        fill="#fff"
      />
      <polygon
        points="648.951 647.576 800.309 150.451 860.519 158.672 690.951 673.576 648.951 647.576"
        fill="#fff"
      />
      <polyline
        points="408.047 750.901 659.999 726.631 659.999 132.035 408.047 150.237"
        opacity="0.1"
      />
      <path
        d="M703.348,356.36044c0,48.0293-86.96475,184.04167-86.96475,184.04167s-86.96474-136.01237-86.96474-184.04167a86.96475,86.96475,0,1,1,173.92949,0Z"
        transform="translate(-64.54927 -7.92449)"
        fill="#ff5252"
      />
      <circle cx="551.83402" cy="342.36863" r="26.29167" fill="#fff" />
      <polygon
        points="784.67 388.993 917.237 423.009 917.237 486.505 754.951 428.576 784.67 388.993"
        fill="#fff"
      />
      <polygon
        points="279.434 510.983 245.951 742.576 283.951 750.576 334.01 536.866 333.951 506.576 279.434 510.983"
        fill="#fff"
      />
      <polygon
        points="278.084 208.643 240.514 426.371 269.604 442.076 338.951 208.576 278.084 208.643"
        fill="#fff"
      />
      <circle cx="349.95073" cy="165.57551" r="8" fill="#ff5252" />
      <circle cx="253.95073" cy="579.57551" r="8" fill="#ff5252" />
      <circle cx="245.95073" cy="638.57551" r="8" fill="#ff5252" />
      <circle cx="330.95073" cy="624.57551" r="8" fill="#ff5252" />
      <circle cx="193.95073" cy="384.57551" r="8" fill="#ff5252" />
      <circle cx="823.95073" cy="376.57551" r="8" fill="#ff5252" />
      <circle cx="754.95073" cy="654.57551" r="8" fill="#ff5252" />
    </svg>
  );
};

MapDark.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

MapDark.defaultProps = {
  color: "primary",
  style: {}
};

export default MapDark;
