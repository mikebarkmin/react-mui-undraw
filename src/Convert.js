import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Convert = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a1a6ab8e-bf9e-489d-a5e6-48000ca178d0"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1014"
      height="552"
      viewBox="0 0 1014 552"
    >
      <title>convert</title>
      <line
        x1="507"
        y1="26"
        x2="507"
        y2="212"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <polyline
        points="135 212 135 26 879 26 879 212"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <ellipse cx="507" cy="26" rx="135" ry="26" fill="#f2f2f2" />
      <ellipse cx="135" cy="543" rx="135" ry="9" fill="#3f3d56" />
      <ellipse cx="879" cy="543" rx="135" ry="9" fill="#3f3d56" />
      <ellipse cx="507" cy="543" rx="135" ry="9" fill="#3f3d56" />
      <circle cx="507" cy="26" r="15" fill={color} />
      <circle cx="128" cy="434" r="79" fill="#2f2e41" />
      <rect x="92" y="496" width="24" height="43" fill="#2f2e41" />
      <rect x="140" y="496" width="24" height="43" fill="#2f2e41" />
      <ellipse cx="112" cy="539.5" rx="20" ry="7.5" fill="#2f2e41" />
      <ellipse cx="160" cy="538.5" rx="20" ry="7.5" fill="#2f2e41" />
      <circle cx="130" cy="414" r="27" fill="#fff" />
      <circle cx="130" cy="414" r="9" fill="#3f3d56" />
      <path
        d="M144.36733,534.53228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S150.74622,563.09986,144.36733,534.53228Z"
        transform="translate(-93 -174)"
        fill="#3f3d56"
      />
      <circle cx="507" cy="434" r="79" fill="#2f2e41" />
      <rect x="471" y="496" width="24" height="43" fill="#2f2e41" />
      <rect x="519" y="496" width="24" height="43" fill="#2f2e41" />
      <ellipse cx="491" cy="539.5" rx="20" ry="7.5" fill="#2f2e41" />
      <ellipse cx="539" cy="538.5" rx="20" ry="7.5" fill="#2f2e41" />
      <circle cx="509" cy="414" r="27" fill="#fff" />
      <circle cx="509" cy="414" r="9" fill="#3f3d56" />
      <path
        d="M523.36733,534.53228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477S603.62111,480.43242,610,509s13.0367,39.1389-18.49544,46.17975S529.74622,563.09986,523.36733,534.53228Z"
        transform="translate(-93 -174)"
        fill="#3f3d56"
      />
      <circle cx="879" cy="434" r="79" fill="#2f2e41" />
      <rect x="843" y="496" width="24" height="43" fill="#2f2e41" />
      <rect x="891" y="496" width="24" height="43" fill="#2f2e41" />
      <ellipse cx="863" cy="539.5" rx="20" ry="7.5" fill="#2f2e41" />
      <ellipse cx="911" cy="538.5" rx="20" ry="7.5" fill="#2f2e41" />
      <circle cx="881" cy="414" r="27" fill="#fff" />
      <circle cx="881" cy="414" r="9" fill="#3f3d56" />
      <path
        d="M895.36733,534.53228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S901.74622,563.09986,895.36733,534.53228Z"
        transform="translate(-93 -174)"
        fill={color}
      />
      <path
        d="M637.5553,509.0351c-6.37226-28.53779-37.04785-45.9798-68.54553-38.99726l21.973,85.25531c.17413-.03851.34759-.07452.52179-.1134C623.03668,548.13892,643.9342,537.60266,637.5553,509.0351Z"
        transform="translate(-93 -174)"
        fill={color}
      />
      <path
        d="M585,200a15,15,0,0,0,15,15V185A15,15,0,0,0,585,200Z"
        transform="translate(-93 -174)"
        fill="#3f3d56"
      />
      <path
        d="M488,529.76553c0,58.48093-34.766,78.90029-77.652,78.90029s-77.652-20.41936-77.652-78.90029,77.652-132.8779,77.652-132.8779S488,471.2846,488,529.76553Z"
        transform="translate(-93 -174)"
        fill="#f2f2f2"
      />
      <polygon
        points="314.519 425.72 315.314 376.777 348.412 316.227 315.439 369.099 315.797 347.092 338.607 303.285 315.891 341.268 315.891 341.268 316.534 301.688 340.96 266.812 316.635 295.464 317.037 222.888 314.512 318.966 314.72 315.002 289.886 276.99 314.322 322.611 312.008 366.815 311.939 365.642 283.309 325.639 311.852 369.787 311.563 375.315 311.511 375.398 311.535 375.852 305.664 488.003 313.507 488.003 314.449 430.075 342.921 386.035 314.519 425.72"
        fill="#3f3d56"
      />
      <ellipse cx="309" cy="488" rx="27" ry="8" fill="#3f3d56" />
      <path
        d="M864,529.76553c0,58.48093-34.766,78.90029-77.652,78.90029s-77.652-20.41936-77.652-78.90029,77.652-132.8779,77.652-132.8779S864,471.2846,864,529.76553Z"
        transform="translate(-93 -174)"
        fill="#f2f2f2"
      />
      <polygon
        points="690.519 425.72 691.314 376.777 724.412 316.227 691.439 369.099 691.797 347.092 714.607 303.285 691.891 341.268 691.891 341.268 692.534 301.688 716.96 266.812 692.635 295.464 693.037 222.888 690.512 318.966 690.72 315.002 665.886 276.99 690.322 322.611 688.008 366.815 687.939 365.642 659.309 325.639 687.852 369.787 687.563 375.315 687.511 375.398 687.535 375.852 681.664 488.003 689.507 488.003 690.449 430.075 718.921 386.035 690.519 425.72"
        fill="#3f3d56"
      />
      <ellipse cx="686" cy="488" rx="27" ry="8" fill="#3f3d56" />
    </svg>
  );
};

Convert.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Convert.defaultProps = {
  color: "primary",
  style: {}
};

export default Convert;
