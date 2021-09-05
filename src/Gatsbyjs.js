import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgGatsbyjs = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 995.745 657.038"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M891.872 449.638a361.65 361.65 0 01-16.894 99.972c-.235.75-.482 1.49-.728 2.242h-63.046c.067-.673.135-1.424.202-2.242 4.204-48.327 28.44-342.458-.538-392.758 2.533 4.08 85.892 139.23 81.004 292.786z"
        fill="#e6e6e6"
      />
      <path
        d="M887.141 549.61a76.171 76.171 0 01-1.636 2.242h-47.296c.359-.64.774-1.39 1.256-2.242 7.813-14.103 30.94-56.264 52.407-99.972 23.07-46.97 44.235-95.723 42.453-113.368.55 3.98 16.512 125.295-47.184 213.34zM176.355 555.85h-88.74c-.11-.34-.22-.67-.33-1-.22-.67-.44-1.33-.65-2-.02-.05-.03-.11-.05-.16-.66-2.05-1.31-4.11-1.94-6.16q-4.965-16.14-8.72-32.32a97.761 97.761 0 0047.84 15.13c-.8-1.46-1.61-2.96-2.45-4.51l-53.31-52.82q-1.965-13.575-3.18-27.07l81.99 81.99c1.21-.27 2.41-.57 3.6-.89a90.62 90.62 0 0022.65-9.5c.87 10.84 1.63 20.04 2.24 27.28.3 3.4.55 6.37.77 8.87 0 .05.01.11.01.16.06.71.12 1.38.18 2 .03.35.06.68.09 1z"
        fill="#e6e6e6"
      />
      <path
        d="M171.625 498.07q-2.205 1.665-4.54 3.14a72.253 72.253 0 01-15.27 7.38l-81.54-81.54-7.16-7.16q-.195-3.96-.31-7.92-.21-6.45-.26-12.88a75.436 75.436 0 0157.49-36.11c2.22-.21 4.48-.31 6.76-.31a74.294 74.294 0 0122.92 3.62 75.177 75.177 0 0113.55 5.87c1.28 23.03 2.66 45.12 4.03 65.56h-7.14v16.67h8.27c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95zM161.905 346.66l.33 6.38a91.362 91.362 0 00-99.34 19.29q.6-16.92 2.1-33.52C81.235 156.03 172.235 7.27 176.735 0c-23.06 40.4-22.07 190.96-15.82 326.1q.48 10.35.99 20.56z"
        fill="#e6e6e6"
      />
      <path
        d="M70.275 427.05l-7.16-7.16-7.19-7.19a76.847 76.847 0 013.41-7.83q1.725 3.555 3.47 7.1 3.72 7.575 7.47 15.08z"
        fill="#e6e6e6"
      />
      <path
        d="M138.345 555.85h-66.57c-.25-.33-.5-.66-.75-1-.49-.66-.98-1.33-1.45-2-.04-.05-.07-.11-.11-.16q-8.535-11.805-15.75-24.12l-.01-.01c-20.98-35.63-34.05-73.8-42.04-110.06-18.94-85.99-9.28-161.18-8.62-166-1.8 18.49 14.14 61.03 35.74 108.74 3.83 8.47 7.84 17.1 11.96 25.78a91.294 91.294 0 00-13.16 30.68l57.11 57.11c9.92 18.99 19.12 36.17 26.62 50.02l-53.31-52.82-32.93-32.63a90.506 90.506 0 0026.69 63.37 87.009 87.009 0 0014.16 11.46 97.761 97.761 0 0047.84 15.13 3087.647 3087.647 0 0012.9 23.51c.22.39.43.76.63 1.12.17.31.33.6.49.88.19.35.38.68.56 1z"
        fill="#e6e6e6"
      />
      <path fill="#2f2e41" d="M6.748 552.852h984v2h-984z" />
      <path d="M561.325 483.22h-58.36v23.34h30.85c-5.01 15.85-16.68 26.69-38.36 26.69-24.18 0-41.69-20.02-41.69-44.2s16.68-45.02 40.86-45.02a45.063 45.063 0 0135.02 17.51l19.18-12.51a66.023 66.023 0 00-54.2-27.52c-36.69 0-66.71 30.02-66.71 67.54 0 29.67 17.73 54.66 44.13 63.8a63.97 63.97 0 006.96 2 70.934 70.934 0 0031.23 0 64.145 64.145 0 006.97-2c26.39-9.14 44.12-34.13 44.12-63.8.84-2.5 0-4.17 0-5.83zm407.74-14.18l-23.35 47.53-22.75-41.84-3.09-5.69h-27.52l20.02 35.46 20 35.42-6.84 12.93-1.06 2-22.11 41.77h26.68l21.84-41.77 1.04-2 43.82-83.81zm-80.3 19.05a40.247 40.247 0 00-9.91-12.49 39.372 39.372 0 00-25.69-9.06c-6.67 0-18.34 1.67-26.68 13.34v-67.54h-23.35v140.08h22.51v-10.84a32.025 32.025 0 0012.28 10.27c.8.38 1.6.71 2.39 1a33.364 33.364 0 009.65 2c.91.06 1.7.07 2.37.07.85 0 1.68-.02 2.51-.07a43.013 43.013 0 0011.05-2c.94-.3 1.85-.63 2.74-1a38.1 38.1 0 006.76-3.55c11.67-7.69 18.63-21.41 18.63-37.57a49.164 49.164 0 00-5.26-22.64zm-40.76 45.97c-.22.02-.45.02-.68.02-14.17 0-23.34-10.01-23.34-23.35s9.17-23.34 23.34-23.34c9.08 0 16.1 4.1 19.97 10.55a24.546 24.546 0 013.38 12.79c0 13.11-9.67 23.01-22.67 23.33zm-60.71-23.33c-4.17-6.67-14.18-9.17-20.85-11.67l-5.83-1.67c-6.67-2.5-7.51-5-7.51-7.5 0-4.17 3.34-6.67 9.17-6.67 2.51 0 7.51.83 13.34 5.83l11.68-13.34a41.994 41.994 0 00-26.68-9.17c-6.67 0-15.01.83-21.68 5.84a27.45 27.45 0 00-8.34 19.17 21.365 21.365 0 006.67 15.85c5 5 11.67 7.5 17.51 10l5 1.67c3.34.83 7.51 3.34 7.51 8.34 0 5.84-5.01 9.17-11.68 9.17s-13.34-5-18.34-10.01l-12.51 14.18c4.03 4.03 9.66 9.26 18.52 12.1a44.155 44.155 0 0011.26 2c.89.05 1.8.07 2.74.07.79 0 1.58-.02 2.35-.07a37.407 37.407 0 0010.46-2 36.155 36.155 0 0012.21-7.1 26.732 26.732 0 009.17-20.84 23.88 23.88 0 00-4.17-14.18zm-82.55-41.69v-28.35h-23.35v28.35h-9.17v20.01h9.17v63.37h23.35v-63.37h15.84v-20.01zm-70.04 0v10.84c-7.5-12.51-20.01-13.34-26.68-13.34-24.18 0-40.86 19.18-40.86 44.19 0 19.58 10.93 36.42 28.82 42.12a43.632 43.632 0 0011.14 2c.85.05 1.7.07 2.57.07.89 0 1.85-.01 2.87-.07a30.148 30.148 0 009.65-2c4.51-1.79 9.23-5.11 13.32-11.27v10.84h23.35v-83.38zm-19.18 65.04c-14.17 0-23.35-10.01-23.35-23.35s10.01-23.34 23.35-23.34c14.18 0 23.35 10 23.35 23.34s-10.01 23.35-23.35 23.35z" />
      <path
        d="M168.425 454.39c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4zm-105.62-42.42q-.21-6.45-.26-12.88-1.725 2.805-3.21 5.78a76.847 76.847 0 00-3.41 7.83l7.19 7.19q-.195-3.96-.31-7.92zm105.62 42.42c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4zm0 0c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4zm-105.88-55.3q-1.725 2.805-3.21 5.78a76.847 76.847 0 00-3.41 7.83l7.19 7.19q-.195-3.96-.31-7.92-.21-6.45-.26-12.88zm172.42-5.13a117.747 117.747 0 00-74.05-67.86 116.096 116.096 0 00-95.92 12.71 118.007 118.007 0 00-26.21 22.43 116.289 116.289 0 0014.92 167.32l.01.01a116.943 116.943 0 0030.93 17.96 115.741 115.741 0 0042.15 7.92q5.31 0 10.5-.48 4.395-.39 8.69-1.12a114.27 114.27 0 0029.32-9.03 117.787 117.787 0 0061.17-66.23 114.656 114.656 0 005.86-23.2 116.112 116.112 0 00-7.37-60.43zM75.925 514.21a87.009 87.009 0 01-14.16-11.46 90.506 90.506 0 01-26.69-63.37l32.93 32.63 53.31 52.82 4.65 4.61c-.73-.03-1.47-.06-2.2-.1a97.761 97.761 0 01-47.84-15.13zm141.04-59.82a91.415 91.415 0 01-25.45 47.9 93.126 93.126 0 01-12.74 10.61c-1.85 1.28-3.76 2.5-5.71 3.64a90.62 90.62 0 01-22.65 9.5c-1.19.32-2.39.62-3.6.89L37.585 417.7a91.294 91.294 0 0113.16-30.68 93.094 93.094 0 0112.15-14.69 91 91 0 0163.9-26.33 91.201 91.201 0 0153.4 17.05 93.562 93.562 0 0120.81 20.47l-12.5 10.84a79.252 79.252 0 00-25.24-22.2 75.177 75.177 0 00-13.55-5.87 74.294 74.294 0 00-22.92-3.62c-2.28 0-4.54.1-6.76.31a75.436 75.436 0 00-57.49 36.11q-1.725 2.805-3.21 5.78a76.847 76.847 0 00-3.41 7.83l7.19 7.19 7.16 7.16 81.54 81.54a72.253 72.253 0 0015.27-7.38q2.34-1.47 4.54-3.14a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4h-40.02v-16.67h58.36a89.897 89.897 0 01-1.55 16.67zm-48.54 0c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4zm0 0c.66 9.36 1.3 18.3 1.92 26.73q.66 8.865 1.28 16.95a73.591 73.591 0 008.39-7.28 76.403 76.403 0 0020.16-36.4z"
        fill="#639"
      />
      <path
        fill="#ffb8b8"
        d="M332.398 648.706l33.6-5.27-13.836-14.494h-19.764v19.764z"
      />
      <path
        d="M338.83 656.707l33.236-10.933a6.464 6.464 0 003.762-9.03 6.464 6.464 0 00-6.217-3.56l-7.54.51-2.954-1.663a1.719 1.719 0 00-2.432 2.152l2.724 6.618-27.67-1.977-1.366 10.922a6.481 6.481 0 008.457 6.96z"
        fill="#2f2e41"
      />
      <path
        d="M240.931 632.156l34.918 9.223c-6.431-13.341-10.391-25.146-7.906-32.941l-16.47-1.977z"
        fill="#ffb8b8"
      />
      <path
        d="M243.078 643.864l36.129 2.343a6.689 6.689 0 007.1-7.217 6.689 6.689 0 00-4.595-5.817l-7.434-2.423-2.194-2.738a1.778 1.778 0 00-3.166 1.127l.06 7.405-25.8-12.586-5.53 9.957a6.707 6.707 0 005.43 9.95z"
        fill="#2f2e41"
      />
      <circle cx={357.423} cy={201.969} r={24.377} fill="#ffb8b8" />
      <path
        d="M318.744 233.705l28.177 21.305c4.554-17.387 10.02-29.807 17.182-32.988l-28.178-16.494z"
        fill="#ffb8b8"
      />
      <path
        fill="#2f2e41"
        d="M245.895 606.197l24.054 10.309 55.667-131.265 4.468 146.041 24.054-1.374 26.802-228.856-2.061-13.058-91.062 20.274-1.374 73.536-40.548 124.393zM385.064 194.875s-15.807-14.432-20.618-8.247-6.185 7.56-8.934 7.56-9.622 7.56-9.622 7.56-3.436-6.873-7.56-1.375-4.81 13.746-4.81 13.746-15.12-35.05 11.683-41.923 46.046 14.432 39.861 22.68z"
      />
      <path
        d="M281.632 419.264c13.058-5.718 13.443-1.23 32.301 6.185 23.752 2.949 38.85 3.327 46.39-6.528 3.086-19.567 5.615-38.329 7.175-56.17q.484-5.515.838-10.92c2.75-41.971-.618-78.457-15.917-107.817l-27.49-20.618-8.968 6.509c-21.422 15.545-18.09 39.428-20.934 65.743z"
        fill={color}
      />
      <path
        fill="#ffb8b8"
        d="M364.79 413.079l14.432-12.371-1.374-12.37H364.79v24.741z"
      />
      <path
        d="M326.7 289.03s-40.603 52.918-11.6 76.972 45.223 39.173 45.223 39.173S358.602 301.4 326.7 289.03z"
        opacity={0.2}
      />
      <path
        d="M342.454 341.948l25.044 20.803q.484-5.515.838-10.92l-16.947-75.86z"
        opacity={0.2}
      />
      <path
        d="M360.666 404.832l19.93-15.807-26.115-65.977-.593-68.77a15.66 15.66 0 00-10.412-14.62 15.66 15.66 0 00-20.904 14.543l-1.08 79.844z"
        fill={color}
      />
    </svg>
  );
};

SvgGatsbyjs.propTypes = {
  color: PropTypes.string
};
SvgGatsbyjs.defaultProps = {
  color: "primary"
};
export default SvgGatsbyjs;
