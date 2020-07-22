import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSetPreferences = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 845.871 569.989"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#9f616a"
        d="M760.114 287.832l-7.117 7.025 9.455 24.67 13.191-27.35 21.606-124.17-33.229-.926-3.906 120.751zM705.966 547.714h-18l-14-159h35l-3 159zM773.966 547.714h-18l-14-159h35l-3 159z"
      />
      <path
        d="M760.026 568.456l-26.28-.14a10.602 10.602 0 01-5.186-13.206 10.602 10.602 0 018.185-6.736l4.964-.827 4.325-5.505a8.19 8.19 0 0110.758-2c4.15 2.633 9.905 3.51 17 2.922l5.523 13.486c1.095 7.296-3.9 12.109-11.188 13.26a13.431 13.431 0 01-8.101-1.254zM692.026 568.456l-26.28-.14a10.602 10.602 0 01-5.186-13.206 10.602 10.602 0 018.185-6.736l4.964-.827 4.81-6.121a7.46 7.46 0 0110.016-1.551c4.168 2.763 10.014 3.69 17.257 3.089l5.523 13.486c1.095 7.296-3.9 12.109-11.188 13.26a13.431 13.431 0 01-8.101-1.254z"
        fill="#2f2e41"
      />
      <circle cx={710.966} cy={55.714} r={27} fill="#9f616a" />
      <path
        d="M749.966 107.714l-44 3c.155-14.24-.466-27.136-4-35l31-10c.297 12.537 6.874 26.785 17 42z"
        fill="#9f616a"
      />
      <path
        d="M776.966 302.714l-113-9c15.076-50.26 10.358-116.074-5-165.416a28.472 28.472 0 0118.288-26.589l28.712-10.995 36 4 30.356 15.178a27.716 27.716 0 0115.316 25.309c-11.41 45.632-12.785 104.306-10.672 167.513z"
        fill={color}
      />
      <path
        d="M691.966 179.714l-51-9 4.39-34.02a42.203 42.203 0 0130.844-35.341l9.766-2.64z"
        fill={color}
      />
      <path
        fill="#9f616a"
        d="M661.966 292.714l6 8-9 25-13-31-3-126 33 4-14 120z"
      />
      <path
        d="M747.966 181.714l51-9-4.39-34.02a42.203 42.203 0 00-30.845-35.341l-9.765-2.64z"
        fill={color}
      />
      <path
        d="M779.966 393.714l-41.839 2-12.161-59-14.768 55-44.232 1-8.842-71.066a41.097 41.097 0 018.842-30.934l110 5zM713.466 85.214l20.19-3.824 12.011-20.52a27.28 27.28 0 00-3.194-31.95 27.28 27.28 0 00-24.207-8.837l-26.167 3.738a17.279 17.279 0 00-14.644 19.669l17.625 2.998z"
        fill="#2f2e41"
      />
      <ellipse cx={701.466} cy={63.214} rx={5} ry={6} fill="#9f616a" />
      <path
        d="M126.466 12.214a11.012 11.012 0 00-11 11v201a11.012 11.012 0 0011 11h5a11.012 11.012 0 0011-11v-201a11.012 11.012 0 00-11-11z"
        fill="#e6e6e6"
      />
      <path
        d="M126.466 16.714a6.508 6.508 0 00-6.5 6.5v201a6.508 6.508 0 006.5 6.5h5a6.508 6.508 0 006.5-6.5v-201a6.508 6.508 0 00-6.5-6.5z"
        fill="#fff"
      />
      <path
        d="M208.466 12.214a11.012 11.012 0 00-11 11v201a11.012 11.012 0 0011 11h5a11.012 11.012 0 0011-11v-201a11.012 11.012 0 00-11-11z"
        fill="#e6e6e6"
      />
      <path
        d="M208.466 16.714a6.508 6.508 0 00-6.5 6.5v201a6.508 6.508 0 006.5 6.5h5a6.508 6.508 0 006.5-6.5v-201a6.508 6.508 0 00-6.5-6.5z"
        fill="#fff"
      />
      <path
        d="M290.466 12.214a11.012 11.012 0 00-11 11v201a11.012 11.012 0 0011 11h5a11.012 11.012 0 0011-11v-201a11.012 11.012 0 00-11-11z"
        fill="#e6e6e6"
      />
      <path
        d="M290.466 16.714a6.508 6.508 0 00-6.5 6.5v201a6.508 6.508 0 006.5 6.5h5a6.508 6.508 0 006.5-6.5v-201a6.508 6.508 0 00-6.5-6.5z"
        fill="#fff"
      />
      <path
        d="M372.466 12.214a11.012 11.012 0 00-11 11v201a11.012 11.012 0 0011 11h5a11.012 11.012 0 0011-11v-201a11.012 11.012 0 00-11-11z"
        fill="#e6e6e6"
      />
      <path
        d="M372.466 16.714a6.508 6.508 0 00-6.5 6.5v201a6.508 6.508 0 006.5 6.5h5a6.508 6.508 0 006.5-6.5v-201a6.508 6.508 0 00-6.5-6.5z"
        fill="#fff"
      />
      <path
        d="M454.466 12.214a11.012 11.012 0 00-11 11v201a11.012 11.012 0 0011 11h5a11.012 11.012 0 0011-11v-201a11.012 11.012 0 00-11-11z"
        fill="#e6e6e6"
      />
      <path
        d="M454.466 16.714a6.508 6.508 0 00-6.5 6.5v201a6.508 6.508 0 006.5 6.5h5a6.508 6.508 0 006.5-6.5v-201a6.508 6.508 0 00-6.5-6.5z"
        fill="#fff"
      />
      <path
        d="M145.223 77.244h-31.515a10.254 10.254 0 01-10.242-10.242v-1.576a10.254 10.254 0 0110.242-10.243h31.515a10.254 10.254 0 0110.243 10.243v1.576a10.254 10.254 0 01-10.243 10.242zM229.223 110.244h-31.515a10.254 10.254 0 01-10.242-10.242v-1.576a10.254 10.254 0 0110.242-10.243h31.515a10.254 10.254 0 0110.243 10.243v1.576a10.254 10.254 0 01-10.243 10.242zM309.223 175.244h-31.515a10.254 10.254 0 01-10.242-10.242v-1.576a10.254 10.254 0 0110.242-10.243h31.515a10.254 10.254 0 0110.243 10.243v1.576a10.254 10.254 0 01-10.243 10.242zM391.223 57.244h-31.515a10.254 10.254 0 01-10.242-10.242v-1.576a10.254 10.254 0 0110.242-10.243h31.515a10.254 10.254 0 0110.243 10.243v1.576a10.254 10.254 0 01-10.243 10.242zM473.223 135.244h-31.515a10.254 10.254 0 01-10.242-10.242v-1.576a10.254 10.254 0 0110.242-10.243h31.515a10.254 10.254 0 0110.243 10.243v1.576a10.254 10.254 0 01-10.243 10.242z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M845.475 569.989H578.074v-2.185h267.797l-.396 2.185z"
      />
      <circle cx={129.466} cy={275.214} r={13} fill="#e6e6e6" />
      <circle cx={211.466} cy={275.214} r={13} fill="#e6e6e6" />
      <circle cx={293.466} cy={275.214} r={13} fill="#e6e6e6" />
      <circle cx={375.466} cy={275.214} r={13} fill="#e6e6e6" />
      <circle cx={457.466} cy={275.214} r={13} fill="#e6e6e6" />
      <path
        d="M28.796 0a28.796 28.796 0 1028.797 28.796A28.796 28.796 0 0028.796 0zm0 53.338a24.542 24.542 0 1124.542-24.542 24.542 24.542 0 01-24.542 24.542z"
        fill="#e6e6e6"
      />
      <path
        d="M27.205 38.644a1.518 1.518 0 01-1.074-.445l-8.205-8.204a1.52 1.52 0 012.149-2.149l6.952 6.952L39.35 17.994a1.52 1.52 0 012.451 1.797l-13.37 18.233a1.52 1.52 0 01-1.11.616 1.492 1.492 0 01-.116.004z"
        fill={color}
      />
    </svg>
  );
};

SvgSetPreferences.propTypes = {
  color: PropTypes.string
};
SvgSetPreferences.defaultProps = {
  color: "primary"
};
export default SvgSetPreferences;
