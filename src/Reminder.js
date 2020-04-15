import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgReminder = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 874.073 696.664"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={42.928} cy={681.978} r={13.685} fill={color} />
      <path fill="#ff6584" d="M230.72 658.953h36v36h-36z" />
      <circle cx={230.928} cy={682.978} r={13.685} fill={color} />
      <path
        fill="#f1f1f1"
        d="M236.741 0l-80.405 125.51 172.737-66.36L236.741 0zM335.775 67.912l-184.14 70.741L0 375.352l496.8 318.26 237.347-370.495L335.775 67.912z"
      />
      <path
        fill={color}
        d="M633.944 200.247l.696.717-10.015-24.131-94.857 93.384-21.629 52.122 125.805-122.092zM624.212 175.837l-11.756-28.33-61.374 71.35-19.345 46.617 91.774-90.35.701.713zM611.269 145.82l.757.653-15.453-37.238-43.032 103.697 57.728-67.112zM718.164 402.235l-83.112-200.277-128.85 125.047-31.219 75.23-121.59 293h486.361l-121.59-293z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M7.808 695.235h860.531"
      />
      <path
        fill="#3f3d56"
        d="M647.508 510.235L563.073 620.65v44.248l110.21-154.663h-25.775zM611.229 510.235l-48.156 58.119v49.004l81.918-107.123h-33.762zM608.632 510.235h-45.559v54.984l45.559-54.984zM675.738 510.235L563.073 668.344v26.891h280v-185H675.738z"
      />
      <circle cx={795.073} cy={405.235} r={79} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M831.073 510.235h-24v-43h24zM783.073 510.235h-24v-43h24z"
      />
      <ellipse cx={811.073} cy={510.735} rx={20} ry={7.5} fill="#2f2e41" />
      <ellipse cx={763.073} cy={509.735} rx={20} ry={7.5} fill="#2f2e41" />
      <circle cx={793.073} cy={385.235} r={27} fill="#fff" />
      <circle cx={793.073} cy={385.235} r={9} fill="#3f3d56" />
      <path
        d="M871.706 331.767c6.379-28.567-14.012-57.434-45.544-64.475s-62.265 10.41-68.644 38.978 14.519 39.104 46.05 46.145 61.76 7.92 68.138-20.648z"
        fill={color}
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M178.073 394.235v301"
      />
      <path fill={color} d="M3.073 278.235h350v232h-350z" />
      <path
        fill="#f1f1f1"
        d="M43.073 336.235h270v8h-270zM43.073 363.235h270v8h-270zM43.073 390.235h270v8h-270zM243.073 444.235h70v8h-70z"
      />
      <ellipse cx={178.073} cy={278.235} rx={30} ry={16} fill="#3f3d56" />
    </svg>
  );
};

SvgReminder.propTypes = {
  color: PropTypes.string
};
SvgReminder.defaultProps = {
  color: "primary"
};
export default SvgReminder;
