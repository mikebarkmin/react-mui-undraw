import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const DesignProcess = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a37f41ca-a9f0-4efa-9f9e-7b2dee25605c"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="637.47673"
      height="720.35649"
      viewBox="0 0 637.47673 720.35649"
    >
      <defs>
        <linearGradient
          id="a2a467ad-a868-48f0-b809-0f1bf7ec3347"
          x1="386.02204"
          y1="468.01644"
          x2="386.02204"
          y2="89.82811"
          gradientTransform="translate(-281.25106 -89.83469)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b8ddb56a-ebcb-4608-bcb5-c685400f6827"
          x1="789.8804"
          y1="643.23839"
          x2="789.8804"
          y2="265.05005"
          xlink:href="#a2a467ad-a868-48f0-b809-0f1bf7ec3347"
        />
      </defs>
      <title>Design process</title>
      <path
        d="M7.962.0022H201.56727a7.95786,7.95786,0,0,1,7.95786,7.95786V370.23264a7.9579,7.9579,0,0,1-7.9579,7.9579H7.962a7.95786,7.95786,0,0,1-7.95786-7.95786V7.96007A7.95786,7.95786,0,0,1,7.962.0022Z"
        fill="url(#a2a467ad-a868-48f0-b809-0f1bf7ec3347)"
      />
      <rect
        x="2.83549"
        y="5.11286"
        width="203.85828"
        height="367.96703"
        rx="13.63528"
        fill="#fff"
      />
      <path
        d="M437.24137,104.16058a16.52717,16.52717,0,0,1-16.28865,14.05669l-70.41344-.0016a16.52719,16.52719,0,0,1-16.288-14.05744l-37.2967-.00085a7.7428,7.7428,0,0,0-7.743,7.74262L289.204,445.93184a7.74282,7.74282,0,0,0,7.74263,7.743l178.15137.00405a7.74279,7.74279,0,0,0,7.743-7.74262l.00761-334.03184a7.74279,7.74279,0,0,0-7.74262-7.743Z"
        transform="translate(-281.26163 -89.82176)"
        fill="#fafafa"
      />
      <rect
        x="82.33839"
        y="18.74127"
        width="45.42803"
        height="2.83925"
        rx="1.41962"
        fill="#dbdbdb"
      />
      <circle cx="137.41988" cy="19.87771" r="1.70355" fill="#dbdbdb" />
      <path
        d="M411.81636,175.23335H605.42165a7.95786,7.95786,0,0,1,7.95786,7.95786V545.46382a7.95786,7.95786,0,0,1-7.95786,7.95786H411.8164a7.9579,7.9579,0,0,1-7.9579-7.9579V183.19121a7.95786,7.95786,0,0,1,7.95786-7.95786Z"
        fill="url(#b8ddb56a-ebcb-4608-bcb5-c685400f6827)"
      />
      <rect
        x="406.68987"
        y="180.344"
        width="203.85828"
        height="367.96703"
        rx="13.63528"
        fill="#fff"
      />
      <path
        d="M841.09575,279.39172a16.52718,16.52718,0,0,1-16.28866,14.0567l-70.41344-.0016a16.52718,16.52718,0,0,1-16.288-14.05744l-37.29671-.00085a7.74279,7.74279,0,0,0-7.743,7.74262L693.05835,621.163a7.74279,7.74279,0,0,0,7.74262,7.743l178.15138.00406a7.7428,7.7428,0,0,0,7.743-7.74262l.00761-334.03184a7.74281,7.74281,0,0,0-7.74262-7.743Z"
        transform="translate(-281.26163 -89.82176)"
        fill="#fafafa"
      />
      <rect
        x="486.19276"
        y="193.97242"
        width="45.42803"
        height="2.83925"
        rx="1.41962"
        fill="#dbdbdb"
      />
      <circle cx="541.27425" cy="195.10886" r="1.70355" fill="#dbdbdb" />
      <g opacity="0.8">
        <polyline
          points="495.932 291.914 495.932 297.914 489.932 297.914"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="480.63461"
          y1="297.91408"
          x2="448.0942"
          y2="297.91408"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="9.29725 9.29725"
        />
        <polyline
          points="443.446 297.914 437.446 297.914 437.446 291.914"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="437.44558"
          y1="278.36822"
          x2="437.44558"
          y2="258.0494"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="13.54588 13.54588"
        />
        <polyline
          points="437.446 251.276 437.446 245.276 443.446 245.276"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="452.74282"
          y1="245.27645"
          x2="485.28323"
          y2="245.27645"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="9.29725 9.29725"
        />
        <polyline
          points="489.932 245.276 495.932 245.276 495.932 251.276"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="495.93185"
          y1="264.82235"
          x2="495.93185"
          y2="285.14117"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="13.54588 13.54588"
        />
      </g>
      <g opacity="0.8">
        <polyline
          points="583.011 490.767 583.011 496.767 577.011 496.767"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="567.71413"
          y1="496.76736"
          x2="535.17379"
          y2="496.76736"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="9.29725 9.29725"
        />
        <polyline
          points="530.525 496.767 524.525 496.767 524.525 490.767"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="524.52517"
          y1="477.22152"
          x2="524.52517"
          y2="456.90267"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="13.54588 13.54588"
        />
        <polyline
          points="524.525 450.13 524.525 444.13 530.525 444.13"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="539.82241"
          y1="444.12972"
          x2="572.36275"
          y2="444.12972"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="9.29725 9.29725"
        />
        <polyline
          points="577.011 444.13 583.011 444.13 583.011 450.13"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="583.01138"
          y1="463.67562"
          x2="583.01138"
          y2="483.99447"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="13.54588 13.54588"
        />
      </g>
      <g opacity="0.8">
        <line
          x1="437.12067"
          y1="325.53261"
          x2="583.33633"
          y2="325.53261"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="12"
        />
        <line
          x1="437.12067"
          y1="354.77574"
          x2="583.33633"
          y2="354.77574"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="12"
        />
        <line
          x1="437.12067"
          y1="384.01887"
          x2="583.33633"
          y2="384.01887"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="12"
        />
        <line
          x1="437.12067"
          y1="413.262"
          x2="583.33633"
          y2="413.262"
          fill="none"
          stroke={color}
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke-dasharray="12"
        />
      </g>
      <polyline
        points="232.953 40.713 509.953 40.713 509.953 142.713"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="2"
        stroke-dasharray="12"
      />
      <polyline
        points="104.477 438.356 104.477 626.356 508.477 626.356 508.477 594.356"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="2"
        stroke-dasharray="12"
      />
      <rect
        x="205.47673"
        y="513.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="453.47673"
        y="58.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="115.47673"
        y="450.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="196.47673"
        y="675.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="421.47673"
        y="711.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="309.47673"
        y="310.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="560.47673"
        y="590.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
      <rect
        x="628.47673"
        y="99.35649"
        width="9"
        height="9"
        fill="#f55f44"
        opacity="0.5"
      />
    </svg>
  );
};

DesignProcess.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

DesignProcess.defaultProps = {
  color: "primary",
  style: {}
};

export default DesignProcess;
