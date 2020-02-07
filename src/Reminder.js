import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Reminder = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="ab6d4b78-a8f6-485a-afcf-f519a4f8db63"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="874.07343"
      height="696.66371"
      viewBox="0 0 874.07343 696.66371"
    >
      <title>reminder</title>
      <circle cx="42.92792" cy="681.97835" r="13.68536" fill={color} />
      <rect x="230.71992" y="658.953" width="36" height="36" fill="#ff6584" />
      <circle cx="230.92792" cy="682.97835" r="13.68536" fill={color} />
      <polygon
        points="236.741 0 156.336 125.51 329.073 59.15 236.741 0"
        fill="#f1f1f1"
      />
      <polygon
        points="335.775 67.912 151.635 138.653 0 375.352 496.8 693.612 734.147 323.117 335.775 67.912"
        fill="#f1f1f1"
      />
      <polygon
        points="633.944 200.247 634.64 200.964 624.625 176.833 529.768 270.217 508.139 322.339 633.944 200.247"
        fill={color}
      />
      <polygon
        points="624.212 175.837 612.456 147.507 551.082 218.857 531.737 265.474 623.511 175.124 624.212 175.837"
        fill={color}
      />
      <polygon
        points="611.269 145.82 612.026 146.473 596.573 109.235 553.541 212.932 611.269 145.82"
        fill={color}
      />
      <polygon
        points="718.164 402.235 635.052 201.958 506.202 327.005 474.983 402.235 353.393 695.235 596.573 695.235 839.754 695.235 718.164 402.235"
        fill={color}
      />
      <line
        x1="7.80805"
        y1="695.2348"
        x2="868.3388"
        y2="695.2348"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <polygon
        points="647.508 510.235 563.073 620.65 563.073 664.898 673.283 510.235 647.508 510.235"
        fill="#3f3d56"
      />
      <polygon
        points="611.229 510.235 563.073 568.354 563.073 617.358 644.991 510.235 611.229 510.235"
        fill="#3f3d56"
      />
      <polygon
        points="608.632 510.235 563.073 510.235 563.073 565.219 608.632 510.235"
        fill="#3f3d56"
      />
      <polygon
        points="675.738 510.235 563.073 668.344 563.073 695.235 843.073 695.235 843.073 510.235 675.738 510.235"
        fill="#3f3d56"
      />
      <circle cx="795.07343" cy="405.2348" r="79" fill="#2f2e41" />
      <rect
        x="970.03671"
        y="568.90295"
        width="24"
        height="43"
        transform="translate(1801.11014 1079.13775) rotate(-180)"
        fill="#2f2e41"
      />
      <rect
        x="922.03671"
        y="568.90295"
        width="24"
        height="43"
        transform="translate(1705.11014 1079.13775) rotate(-180)"
        fill="#2f2e41"
      />
      <ellipse cx="811.07343" cy="510.7348" rx="20" ry="7.5" fill="#2f2e41" />
      <ellipse cx="763.07343" cy="509.7348" rx="20" ry="7.5" fill="#2f2e41" />
      <circle cx="793.07343" cy="385.2348" r="27" fill="#fff" />
      <circle cx="793.07343" cy="385.2348" r="9" fill="#3f3d56" />
      <path
        d="M1034.66938,433.43522c6.37889-28.56758-14.01185-57.43391-45.544-64.47476s-62.2651,10.41-68.644,38.97759S935,447.04185,966.53215,454.0827,1028.29049,462.0028,1034.66938,433.43522Z"
        transform="translate(-162.96329 -101.66814)"
        fill={color}
      />
      <line
        x1="178.07343"
        y1="394.2348"
        x2="178.07343"
        y2="695.2348"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <rect x="3.07343" y="278.2348" width="350" height="232" fill={color} />
      <rect x="43.07343" y="336.2348" width="270" height="8" fill="#f1f1f1" />
      <rect x="43.07343" y="363.2348" width="270" height="8" fill="#f1f1f1" />
      <rect x="43.07343" y="390.2348" width="270" height="8" fill="#f1f1f1" />
      <rect x="243.07343" y="444.2348" width="70" height="8" fill="#f1f1f1" />
      <ellipse cx="178.07343" cy="278.2348" rx="30" ry="16" fill="#3f3d56" />
    </svg>
  );
};

Reminder.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Reminder.defaultProps = {
  color: "primary",
  style: {}
};

export default Reminder;
