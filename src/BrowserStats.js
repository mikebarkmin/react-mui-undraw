import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const BrowserStats = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e4476520-1cdd-4de1-b4a4-c2e57e044eb7"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="788.34151"
      height="651.41333"
      viewBox="0 0 788.34151 651.41333"
    >
      <defs>
        <linearGradient
          id="b78b9e48-caff-40cd-bfac-697dfd386121"
          x1="569.54692"
          y1="675.39356"
          x2="569.54692"
          y2="211.36546"
          gradientTransform="matrix(0.95081, -0.30978, 0.30978, 0.95081, -284.7082, 80.56906)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="a7a990f4-c21b-418a-bc7f-4acb261d3bf8"
          x1="361.53244"
          y1="303.19441"
          x2="361.53244"
          y2="284.79096"
          gradientTransform="translate(-5.45241 78.23636) rotate(0.02701)"
          xlink:href="#b78b9e48-caff-40cd-bfac-697dfd386121"
        />
        <linearGradient
          id="aeed7e2d-a8b9-4ff2-bd4e-181cb0d9c778"
          x1="278.36505"
          y1="499.96609"
          x2="278.36505"
          y2="452.65777"
          gradientTransform="translate(55.20266 95.07048) rotate(0.02701)"
          xlink:href="#b78b9e48-caff-40cd-bfac-697dfd386121"
        />
        <linearGradient
          id="e6ca6cde-461e-46f7-87b0-8c45073014c9"
          x1="278.32552"
          y1="583.86068"
          x2="278.32552"
          y2="536.55236"
          gradientTransform="translate(81.23268 90.95594) rotate(0.02701)"
          xlink:href="#b78b9e48-caff-40cd-bfac-697dfd386121"
        />
      </defs>
      <title>Browser stats</title>
      <polygon
        points="0 210.447 8.716 237.242 143.438 651.413 788.342 440.966 653.619 26.795 644.904 0 0 210.447"
        fill="url(#b78b9e48-caff-40cd-bfac-697dfd386121)"
      />
      <rect
        x="206.99715"
        y="235.99691"
        width="656.26785"
        height="26.69374"
        transform="matrix(0.95066, -0.31022, 0.31022, 0.95066, -256.78017, 54.01895)"
        fill="#f5f5f5"
      />
      <rect
        x="274.94143"
        y="251.91795"
        width="656.26785"
        height="412.60892"
        transform="translate(-317.99265 84.728) rotate(-18.01873)"
        fill="#fff"
      />
      <ellipse
        cx="237.5604"
        cy="346.04703"
        rx="7.62874"
        ry="7.6202"
        transform="translate(-352.03779 391.76806) rotate(-79.42443)"
        fill="#ff5252"
      />
      <ellipse
        cx="257.8495"
        cy="339.42621"
        rx="7.62874"
        ry="7.6202"
        transform="translate(-328.96404 406.30684) rotate(-79.42443)"
        fill="#ff0"
      />
      <ellipse
        cx="278.1386"
        cy="332.8054"
        rx="7.62874"
        ry="7.6202"
        transform="translate(-305.89029 420.84563) rotate(-79.42443)"
        fill="#69f0ae"
      />
      <rect
        x="250.75561"
        y="363.2473"
        width="210.37158"
        height="18.30428"
        transform="translate(-303.79559 4.50114) rotate(-18.07273)"
        fill="url(#a7a990f4-c21b-418a-bc7f-4acb261d3bf8)"
      />
      <rect
        x="251.28191"
        y="364.04738"
        width="208.84714"
        height="15.25356"
        transform="translate(-303.58223 4.39218) rotate(-18.07273)"
        fill={color}
      />
      <rect
        x="646.91939"
        y="234.94149"
        width="208.84714"
        height="15.25356"
        transform="translate(-244.0111 120.7588) rotate(-18.07273)"
        fill={color}
      />
      <rect
        x="646.91939"
        y="234.94149"
        width="208.84714"
        height="15.25356"
        transform="translate(-244.0111 120.7588) rotate(-18.07273)"
        opacity="0.2"
      />
      <rect
        x="286.87747"
        y="492.35955"
        width="9.14659"
        height="9.15214"
        transform="translate(-345.61145 -9.36122) rotate(-18.07273)"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="876.71064"
        y="299.88299"
        width="9.14659"
        height="9.15214"
        transform="translate(-256.80028 164.12309) rotate(-18.07273)"
        fill={color}
        opacity="0.5"
      />
      <ellipse
        cx="327.6813"
        cy="485.11273"
        rx="16.78323"
        ry="16.76443"
        transform="translate(-415.16046 593.90082) rotate(-79.42443)"
        fill={color}
        opacity="0.2"
      />
      <ellipse
        cx="846.50262"
        cy="315.80902"
        rx="16.78323"
        ry="16.76443"
        transform="translate(174.86832 965.67825) rotate(-79.42443)"
        fill={color}
        opacity="0.5"
      />
      <rect
        x="354.33422"
        y="456.41798"
        width="94.51477"
        height="9.15214"
        transform="translate(-329.02755 23.03389) rotate(-18.07273)"
        fill={color}
        opacity="0.5"
      />
      <rect
        x="380.28516"
        y="536.19801"
        width="94.51477"
        height="9.15214"
        transform="translate(-352.4969 35.02056) rotate(-18.07273)"
        fill={color}
        opacity="0.8"
      />
      <rect
        x="749.83665"
        y="415.60459"
        width="94.51477"
        height="9.15214"
        transform="translate(-296.85354 143.71466) rotate(-18.07273)"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="529.41993"
        y="575.78023"
        width="94.51477"
        height="9.15214"
        transform="translate(-357.41847 83.2386) rotate(-18.07273)"
        fill={color}
        opacity="0.7"
      />
      <rect
        x="652.60376"
        y="535.58242"
        width="94.51477"
        height="9.15214"
        transform="translate(-338.87068 119.46997) rotate(-18.07273)"
        fill={color}
        opacity="0.5"
      />
      <rect
        x="477.51805"
        y="416.22017"
        width="94.51477"
        height="9.15214"
        transform="translate(-310.47976 59.26525) rotate(-18.07273)"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="600.70188"
        y="376.02236"
        width="94.51477"
        height="9.15214"
        transform="translate(-291.93197 95.49662) rotate(-18.07273)"
        fill="#64ffda"
      />
      <rect
        x="723.88571"
        y="335.82456"
        width="94.51477"
        height="9.15214"
        transform="translate(-273.38418 131.72799) rotate(-18.07273)"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="309.71445"
        y="547.87055"
        width="47.25738"
        height="47.28605"
        transform="translate(-366.68051 7.31422) rotate(-18.07273)"
        fill="url(#aeed7e2d-a8b9-4ff2-bd4e-181cb0d9c778)"
      />
      <rect
        x="335.66539"
        y="627.65058"
        width="47.25738"
        height="47.28605"
        transform="translate(-390.14986 19.3009) rotate(-18.07273)"
        fill="url(#e6ca6cde-461e-46f7-87b0-8c45073014c9)"
      />
      <rect
        x="312.0011"
        y="550.15859"
        width="42.68409"
        height="42.70998"
        transform="translate(-366.68051 7.31422) rotate(-18.07273)"
        fill={color}
      />
      <rect
        x="337.95204"
        y="629.93862"
        width="42.68409"
        height="42.70998"
        transform="translate(-390.14986 19.3009) rotate(-18.07273)"
        fill={color}
      />
      <rect
        x="233.34127"
        y="336.58628"
        width="259.15339"
        height="6.10143"
        transform="translate(-293.2877 5.04906) rotate(-18.07273)"
        fill={color}
        opacity="0.1"
      />
      <rect
        x="903.86182"
        y="345.6928"
        width="7.62216"
        height="158.63707"
        transform="translate(-292.89655 178.25721) rotate(-18.07273)"
        fill={color}
        opacity="0.1"
      />
    </svg>
  );
};

BrowserStats.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

BrowserStats.defaultProps = {
  color: "primary",
  style: {}
};

export default BrowserStats;
