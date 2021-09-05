import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWatchApplication = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 812.484 497.68"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={431.425}
        cy={693.325}
        rx={5.513}
        ry={98.066}
        transform="rotate(-89.908 233.805 689.78)"
        fill="#e6e6e6"
      />
      <path
        d="M290.132 225.57l12.125 3.22a8.728 8.728 0 0010.932-7.634 8.728 8.728 0 00-10.485-9.344l-12.911 2.712-41.438-1.326-12.382-21.48-13.725 13.408 18.162 23.325z"
        fill="#a0616a"
      />
      <path
        d="M219.627 206.87l28.971-10.258-10.168-19.323a16.423 16.423 0 00-24.092-5.707 16.423 16.423 0 00-3.678 23.077z"
        fill="#575a88"
      />
      <path
        d="M250.634 235.115l8.01 37.681 43.44 169.65-32.874 9.979-38.156-135.015-41.092 135.602-36.982-10.567 36.395-93.336 4.11-47.549s-13.453-38.898 13.232-66.998z"
        fill="#2f2e41"
      />
      <path
        d="M153.544 491.742l12.908 1.062 1.499-15.438c2.935 11.268 8.465 17.113 16.41 17.917a10.063 10.063 0 009.608-5.047q.25-.427.455-.873a6.32 6.32 0 00-2.52-7.84c-8.612-5.712-7.609-23.287-5.882-41.755l-16.115-.376-2.193 13.335c-11.53 10.958-14.471 23.723-14.17 39.015zM266.976 493.89l12.942-.486-.354-15.506c4.259 10.837 10.447 15.98 18.43 15.83a10.063 10.063 0 008.938-6.157q.197-.454.348-.922a6.32 6.32 0 00-3.438-7.482c-9.232-4.645-10.333-22.213-10.823-40.755l-16.044 1.549-.586 13.501c-10.14 12.256-11.537 25.28-9.413 40.428z"
        fill="#2f2e41"
      />
      <circle cx={203.996} cy={130.071} r={20.821} fill="#a0616a" />
      <path
        d="M195.833 211.746l30.525-31.699-14.676-21.72-.587-21.132H186.44l2.29 18.176c-15.467 17.58-6.7 36.807 7.103 56.375z"
        fill="#a0616a"
      />
      <path
        d="M204.344 236.695l49.897 5.283c-5.027-36.063-15.841-64.731-33.167-70.736l-40.504 9.392z"
        fill="#575a88"
      />
      <path
        d="M206.783 259.642l5.716 11.168a8.728 8.728 0 0012.987 3.02 8.728 8.728 0 00-.067-14.044l-10.651-7.784-26.731-31.69 7.685-23.572-19.147-1.235-5.191 29.103z"
        fill="#a0616a"
      />
      <path
        d="M173.526 194.723l27.003 14.675 7.563-20.483a16.423 16.423 0 00-11.873-21.727 16.423 16.423 0 00-19.615 12.701z"
        fill="#575a88"
      />
      <path
        d="M198.644 132.68c3.078.943 6.075-1.746 7.708-4.521s2.87-6.066 5.669-7.658c3.626-2.063 8.718-.532 11.938-3.185 3.052-2.515 2.509-7.698-.205-10.575s-6.833-3.921-10.76-4.382c-8.857-1.037-18.232.351-25.67 5.27s-12.573 13.704-11.794 22.587c.335 3.819 1.693 7.463 2.53 11.204s1.11 7.83-.613 11.253c-2.273 4.515-7.588 6.825-12.64 6.988s-9.973-1.432-14.811-2.899-9.87-2.835-14.886-2.207a20.78 20.78 0 00-16.356 13.204 23.608 23.608 0 002.7 21.095c4.288 6.376 11.41 10.494 18.888 12.258s15.319 1.355 22.9.1a104.997 104.997 0 0028.836-9.208c5.545-2.705 11.151-6.22 13.792-11.797 2.614-5.52 1.789-12.182-.788-17.72s-6.726-10.169-10.878-14.649c-2.107-2.274-4.28-4.61-5.403-7.5s-.953-6.511 1.248-8.696 6.61-1.9 7.847.943"
        fill="#2f2e41"
      />
      <ellipse
        cx={239.289}
        cy={657.277}
        rx={45.531}
        ry={3.473}
        transform="rotate(-.092 -125190.558 121277.804)"
        fill="#e6e6e6"
      />
      <ellipse
        cx={648.266}
        cy={690.999}
        rx={94.977}
        ry={5.339}
        transform="translate(-194.866 -200.119)"
        fill="#e6e6e6"
      />
      <ellipse
        cx={911.266}
        cy={690.999}
        rx={94.977}
        ry={5.339}
        transform="translate(-194.866 -199.697)"
        fill="#e6e6e6"
      />
      <path
        d="M484.125 448.73s-93.135-46.568-79.83-177.402 8.87-117.528 8.87-117.528 22.175-73.178 62.09-99.788c0 0-95.353-97.57-170.748 79.83 0 0-19.958 106.441-4.435 177.401s51.002 128.616 51.002 128.616 33.263 33.263 70.96 33.263 62.091-24.393 62.091-24.393z"
        fill="#ccc"
      />
      <path
        d="M638.243 370.008s-53.22 141.92-219.534 115.31-121.964-314.887-121.964-314.887-18.584 215.047 78.654 278.29c26.942 17.523 62.133 17.68 87.87-1.571 17.054-12.757 31.667-35.01 29.726-73.816z"
        fill="#e6e6e6"
      />
      <path
        d="M633.057 99.995S557.303-36.906 393.207 9.66C291.487 53 293.382 164.59 293.382 164.59c-12.265 185.02 119.746 182.032 150.828-15.225 5.457-34.635-5.544-54.33-5.544-54.33s-15.522 46.569-63.199 56.547c-47.75 9.995-55.915-5.903-54.33-29.936l.05-.716a90.653 90.653 0 0121.536-52.824c27.335-31.827 86.916-78.303 150.272 19.168l4.435 10.968s78.33 21.125 135.627 1.753z"
        fill="#e6e6e6"
      />
      <path
        d="M510.714 96.145a43.268 43.268 0 00-43.22 43.22v203.387a45.047 45.047 0 0044.996 44.996h107.008a54.287 54.287 0 0054.225-54.225V150.792a54.709 54.709 0 00-54.648-54.648z"
        fill="#3f3d56"
      />
      <path
        d="M529.27 105.015a22.996 22.996 0 00-22.97 22.97v229.031a22.995 22.995 0 0022.97 22.97h101.761a46.07 46.07 0 0046.018-46.017V145.558a40.59 40.59 0 00-40.543-40.543z"
        fill={color}
      />
      <path
        d="M525.518 106.288a22.925 22.925 0 00-9.239 18.37V353.69a22.995 22.995 0 0022.97 22.97H641.01a45.79 45.79 0 0011.437-1.497 45.692 45.692 0 01-22.524 5.932H528.162a22.995 22.995 0 01-22.97-22.97V129.093a22.995 22.995 0 0120.326-22.805z"
        opacity={0.2}
      />
      <ellipse cx={475.255} cy={188.171} rx={22.175} ry={27.719} fill={color} />
      <path
        d="M490.778 188.171c0-13.41-7.619-24.593-17.74-27.162a17.994 17.994 0 014.435-.557c12.247 0 22.175 12.41 22.175 27.72s-9.928 27.718-22.175 27.718a17.994 17.994 0 01-4.435-.556c10.121-2.569 17.74-13.753 17.74-27.163z"
        opacity={0.2}
      />
      <path
        d="M470.82 259.132v57.655a7.761 7.761 0 0015.523 0v-57.655a7.761 7.761 0 00-15.523 0z"
        fill={color}
      />
      <path
        d="M483.017 316.787v-57.655a7.747 7.747 0 00-5.544-7.4 7.65 7.65 0 012.217-.361 7.77 7.77 0 017.762 7.76v57.656a7.77 7.77 0 01-7.762 7.762 7.65 7.65 0 01-2.217-.362 7.747 7.747 0 005.544-7.4z"
        opacity={0.2}
      />
      <circle cx={359.944} cy={366.681} r={11.088} fill="#fff" />
      <path
        d="M366.597 366.681a11.09 11.09 0 00-8.87-10.864 11.088 11.088 0 110 21.728 11.09 11.09 0 008.87-10.864z"
        opacity={0.3}
      />
      <circle cx={354.944} cy={322.681} r={11.088} fill="#fff" />
      <path
        d="M361.597 322.681a11.09 11.09 0 00-8.87-10.864 11.088 11.088 0 110 21.728 11.09 11.09 0 008.87-10.864z"
        opacity={0.3}
      />
      <circle cx={366.597} cy={120.537} r={11.088} fill="#fff" />
      <path
        d="M373.25 120.537a11.09 11.09 0 00-8.87-10.864 11.088 11.088 0 110 21.728 11.09 11.09 0 008.87-10.864z"
        opacity={0.3}
      />
      <ellipse
        cx={595.986}
        cy={248.868}
        rx={22.175}
        ry={27.719}
        fill="#fff"
        opacity={0.2}
      />
      <ellipse
        cx={595.986}
        cy={248.868}
        rx={41.435}
        ry={51.794}
        fill="#fff"
        opacity={0.2}
      />
      <ellipse
        cx={595.986}
        cy={248.868}
        rx={62.426}
        ry={78.033}
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M9.73 308.31c12.122 17.134 15.323 114.654 16.037 145.913.018.705.037 1.372.046 2.004h30.683c.375-.668.722-1.327 1.052-2.004 18.186-35.897 8.096-78.94 7.565-81.117 1.382 6.843-4.866 26.676-11.929 45.888-4.309-59.07-41.148-107.702-43.454-110.684z"
        fill="#e6e6e6"
      />
      <path
        d="M797.515 306.379l1.495 10.217a9.035 9.035 0 01-10.188 10.257 9.035 9.035 0 01-7.18-12.205l5.073-13.13-2.7-88.559 15.66-5.94z"
        fill="#ffb8b8"
      />
      <circle cx={753.235} cy={137.9} r={21.6} fill="#ffb8b8" />
      <path
        d="M779.155 178.4l-39.96-1.62c4.437-9.716 6.197-19.114 4.32-28.08h26.46c-1.391 8.455 2.45 18.608 9.18 29.7z"
        fill="#ffb8b8"
      />
      <path
        d="M772.675 262.639l-58.86 4.32 2.14-33.26c-6.783-16.135-5.7-27.786 2.284-35.504l.723-11.238a17.237 17.237 0 0112.735-15.541l10.198-2.737c13.206 7.736 23.733 7.63 31.32-1.08l12.138 6.218a16.284 16.284 0 018.761 16.291z"
        fill="#575a88"
      />
      <path
        d="M682.496 265.879l-16.614 8.722a7.162 7.162 0 01-8.706-1.61 7.162 7.162 0 013.941-11.747l11.659-2.385 36.18-14.04 5.94-42.12 16.74 4.32-3.24 49.68z"
        fill="#ffb8b8"
      />
      <path
        d="M800.755 209.72l-18.36 10.8-1.08-43.2 3.166-1.08a16.274 16.274 0 0116.274 16.274z"
        fill="#575a88"
      />
      <path
        d="M788.065 474.587l-15.612-2.442c-3.152-53.34-9.502-103.137-20.838-147.407-26.215 34.738-48.19 85.934-66.96 149.58l-18.36-4.86 48.06-209.52 57.24-1.08c23.41 32.053 16.556 131.043 16.47 215.73z"
        fill="#2f2e41"
      />
      <path
        d="M676.548 493.023l-27.126-3.803a5.349 5.349 0 01-4.418-6.704 5.349 5.349 0 014.396-3.886l4.82-.696 15.241-9.309 12.608 3.362 3.738 11.033a8.3 8.3 0 01-9.259 10.003zM782.928 493.023L755.8 489.22a5.349 5.349 0 01-4.417-6.704 5.349 5.349 0 014.395-3.886l4.82-.696 15.242-9.309 12.607 3.362 3.738 11.033a8.3 8.3 0 01-9.258 10.003z"
        fill="#2f2e41"
      />
      <path
        d="M734.875 217.82c-4.91-10.793-13.388-14.974-27.54-8.64l1.909-14.073a27.343 27.343 0 0119.691-22.648z"
        fill="#575a88"
      />
      <path
        d="M727.743 126.817s-3.398-26.445 24.328-17.773c0 0 19.802-3.633 26.295 21.136l6.576 25.964-3.205-1.745-1.494 3.266-5.193 1.315-2.222-4.41-1.075 5.356-42.532 4.24s19.05-11.266 19.352-31.457l-3.629 3.835z"
        fill="#2f2e41"
      />
      <circle cx={774.872} cy={109.303} r={10.695} fill="#2f2e41" />
      <path
        d="M763.852 106.685a10.686 10.686 0 0110.69-9.996c-.22-.028-.44-.062-.665-.077a10.695 10.695 0 10-1.372 21.346c.225.014.446.008.669.009a10.686 10.686 0 01-9.322-11.282z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgWatchApplication.propTypes = {
  color: PropTypes.string
};
SvgWatchApplication.defaultProps = {
  color: "primary"
};
export default SvgWatchApplication;
