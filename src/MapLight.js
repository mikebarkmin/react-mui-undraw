import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MapLight = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e6acf613-1465-4206-8e97-2c0e8d4b1ea6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="887.59053"
      height="794.69949"
      viewBox="0 0 887.59053 794.69949"
    >
      <defs>
        <linearGradient
          id="e7432531-051f-4229-a0a7-c46f90e1c00c"
          x1="148.90523"
          y1="794.69949"
          x2="148.90523"
          y2="65.63373"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b47202c6-c1c9-40b8-92af-db2c55bf8bd1"
          x1="446.71569"
          y1="794.69949"
          x2="446.71569"
          y2="65.63373"
          xlink:href="#e7432531-051f-4229-a0a7-c46f90e1c00c"
        />
        <linearGradient
          id="adbec034-83c8-4647-bb3b-2a01b75562b1"
          x1="741.60573"
          y1="794.69949"
          x2="741.60573"
          y2="65.63373"
          xlink:href="#e7432531-051f-4229-a0a7-c46f90e1c00c"
        />
        <linearGradient
          id="eb6a4cdb-41e1-4fe3-bddb-eac7508f621d"
          x1="889.89998"
          y1="291.93722"
          x2="889.89998"
          y2="71.20644"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="#b3b3b3" stop-opacity="0.1" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient
          id="f829b744-a02a-4a2c-9fed-3f5da7d4212f"
          x1="733.69525"
          y1="105.86015"
          x2="733.69525"
          y2="63.03179"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.12" />
          <stop offset="0.55135" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="ae45afba-725c-45f7-9e29-49ac6fec796e"
          x1="311.1462"
          y1="736.28097"
          x2="311.1462"
          y2="513.98983"
          xlink:href="#eb6a4cdb-41e1-4fe3-bddb-eac7508f621d"
        />
        <linearGradient
          id="f4c06303-04ff-41d3-ad1f-a3b84d982f8e"
          x1="154.94147"
          y1="549.2607"
          x2="154.94147"
          y2="506.12958"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00541" stop-opacity="0.12" />
          <stop offset="0.55135" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <title>Map light</title>
      <polygon
        points="297.81 766.722 0 794.699 0 93.611 297.81 65.634 297.81 766.722"
        fill="url(#e7432531-051f-4229-a0a7-c46f90e1c00c)"
      />
      <polygon
        points="297.81 766.722 595.621 794.699 595.621 93.611 297.81 65.634 297.81 766.722"
        fill="url(#b47202c6-c1c9-40b8-92af-db2c55bf8bd1)"
      />
      <polygon
        points="887.591 766.722 595.621 794.699 595.621 93.611 887.591 65.634 887.591 766.722"
        fill="url(#adbec034-83c8-4647-bb3b-2a01b75562b1)"
      />
      <polygon
        points="298.865 747.261 9.488 774.143 9.488 100.511 298.865 73.629 298.865 747.261"
        fill="#f5f5f5"
      />
      <polygon
        points="298.865 747.261 588.242 774.143 588.242 100.511 298.865 73.629 298.865 747.261"
        fill="#fff"
      />
      <polygon
        points="877.618 747.261 588.242 774.143 588.242 100.511 877.618 73.629 877.618 747.261"
        fill="#f5f5f5"
      />
      <polygon
        points="298.865 135.494 79.065 143.206 79.065 173.251 79.065 214.364 79.065 244.409 265.657 244.409 265.657 207.817 298.865 206.652 349.466 222.271 349.466 151.113 298.865 135.494"
        fill={color}
        opacity="0.3"
      />
      <polygon
        points="298.865 701.403 52.183 725.123 52.183 634.989 298.865 611.269 298.865 701.403"
        fill={color}
        opacity="0.3"
      />
      <polygon
        points="271.865 422.403 25.183 446.123 25.183 355.989 271.865 332.269 271.865 422.403"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="444.34375"
        y="631.82616"
        width="107.52802"
        height="82.22731"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="409.34375"
        y="438.82616"
        width="107.52802"
        height="82.22731"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="453.34375"
        y="181.82616"
        width="107.52802"
        height="82.22731"
        fill={color}
        opacity="0.3"
      />
      <polygon
        points="836.505 676.102 668.888 690.334 668.888 581.225 836.505 566.993 836.505 676.102"
        fill={color}
        opacity="0.3"
      />
      <polygon
        points="816.505 292.102 648.888 306.334 648.888 197.225 816.505 182.993 816.505 292.102"
        fill={color}
        opacity="0.3"
      />
      <path
        d="M958.28172,142.038c0,39.11917-68.38174,149.89926-68.38174,149.89926S821.51824,181.15713,821.51824,142.038,852.13379,71.20644,889.9,71.20644,958.28172,102.91879,958.28172,142.038Z"
        transform="translate(-156.20473 -52.65025)"
        fill="url(#eb6a4cdb-41e1-4fe3-bddb-eac7508f621d)"
      />
      <ellipse
        cx="733.69525"
        cy="84.44597"
        rx="20.67355"
        ry="21.41418"
        fill="url(#f829b744-a02a-4a2c-9fed-3f5da7d4212f)"
      />
      <path
        d="M953.17715,142.165c0,34.947-63.27717,133.91214-63.27717,133.91214S826.62281,177.112,826.62281,142.165a63.27717,63.27717,0,1,1,126.55434,0Z"
        transform="translate(-156.20473 -52.65025)"
        fill={color}
      />
      <circle cx="733.69525" cy="85.10003" r="19.13031" fill="#fff" />
      <path
        d="M381.55767,585.32206c0,39.39571-70.41147,150.95891-70.41147,150.95891s-70.41146-111.5632-70.41146-150.95891,31.52429-71.33223,70.41146-71.33223S381.55767,545.92636,381.55767,585.32206Z"
        transform="translate(-156.20473 -52.65025)"
        fill="url(#ae45afba-725c-45f7-9e29-49ac6fec796e)"
      />
      <ellipse
        cx="154.94147"
        cy="527.69514"
        rx="21.28719"
        ry="21.56556"
        fill="url(#f4c06303-04ff-41d3-ad1f-a3b84d982f8e)"
      />
      <path
        d="M374.42337,584.92742c0,34.947-63.27717,133.91214-63.27717,133.91214S247.869,619.87443,247.869,584.92742a63.27717,63.27717,0,1,1,126.55433,0Z"
        transform="translate(-156.20473 -52.65025)"
        fill={color}
      />
      <circle cx="154.94147" cy="527.86248" r="19.13031" fill="#fff" />
      <path
        d="M717.42337,589.92742c0,34.947-63.27717,133.91214-63.27717,133.91214S590.869,624.87443,590.869,589.92742a63.27717,63.27717,0,1,1,126.55433,0Z"
        transform="translate(-156.20473 -52.65025)"
        fill={color}
      />
      <circle cx="497.94147" cy="532.86248" r="19.13031" fill="#fff" />
      <path
        d="M965.42337,549.92742c0,34.947-63.27717,133.91214-63.27717,133.91214S838.869,584.87443,838.869,549.92742a63.27716,63.27716,0,1,1,126.55433,0Z"
        transform="translate(-156.20473 -52.65025)"
        fill={color}
      />
      <circle cx="745.94147" cy="492.86248" r="19.13031" fill="#fff" />
      <path
        d="M406.42337,115.92742c0,34.947-63.27717,133.91214-63.27717,133.91214S279.869,150.87443,279.869,115.92742a63.27717,63.27717,0,1,1,126.55433,0Z"
        transform="translate(-156.20473 -52.65025)"
        fill={color}
      />
      <circle cx="186.94147" cy="58.86248" r="19.13031" fill="#fff" />
    </svg>
  );
};

MapLight.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

MapLight.defaultProps = {
  color: "primary",
  style: {}
};

export default MapLight;
