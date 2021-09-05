import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCoding = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 900.94 787"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Coding_svg__a"
          x1={611.05}
          y1={646}
          x2={611.05}
          y2={103.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        fill={color}
        opacity={0.2}
        d="M763.63 283h52v27h-52zM767.63 316h52v27h-52zM724.63 87h52v27h-52zM761.63 118h52v27h-52zM661.63 89h52v27h-52zM828.63 149h52v27h-52zM765.63 151h52v27h-52zM698.63 120h52v27h-52zM825.63 357h52v27h-52zM762.63 359h52v27h-52z"
      />
      <path
        d="M130.75 276s73.29 73.29 31.92 182 70.91 289.64 70.91 289.64-1.2-.18-3.43-.57C79.63 720.5 4.84 548.35 88.58 420.5c31.08-47.59 56.62-103.36 42.17-144.5z"
        fill={color}
      />
      <path
        d="M130.75 276s41.37 89.84 0 163.12-7.09 279 102.84 308.52"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M.21 572.42s83.63-13.32 91.25 61.63 160.82 85.34 160.82 85.34-1 .68-2.87 1.91c-126.49 83-247.4 52.89-229.17-57.36 6.77-40.99 6.21-82.16-20.03-91.52z"
        fill={color}
      />
      <path
        d="M.21 572.42s83.63-13.32 91.25 61.63 160.82 85.34 160.82 85.34-1 .68-2.87 1.91c-126.49 83-247.4 52.89-229.17-57.36 6.77-40.99 6.21-82.16-20.03-91.52z"
        fill="#f5f5f5"
        opacity={0.2}
      />
      <path
        d="M.21 572.42s64.91 14.25 59.58 73.27 96.4 129.81 192.49 73.7"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill={color}
        opacity={0.2}
        d="M.63 284h52v27h-52zM37.63 315h52v27h-52zM318.63 0h52v27h-52zM728.63 498h52v27h-52zM41.63 348h52v27h-52zM355.63 31h52v27h-52zM165.63 214h52v27h-52zM202.63 245h52v27h-52zM301.63 228h52v27h-52zM206.63 278h52v27h-52zM798.63 498h52v27h-52z"
      />
      <path
        d="M870.07 447.61a412.25 412.25 0 01-6.18-56.71 76 76 0 00-53.46-69.38c-5.46-1.68-11.47-3.25-18.11-4.66-58.2-12.36-75.88-1.57-77.89-.15a74.63 74.63 0 01-4.43-9.61c-.1-.34-.19-.68-.29-1a74.51 74.51 0 0019.91-44.89c9.71-9.84 15.38-21.72 15.38-34.51 0-11-4.2-21.32-11.55-30.25v-17.38a75.57 75.57 0 00-75.57-75.57h-6.13a75.57 75.57 0 00-75.57 75.57v18.73c-6.67 8.61-10.45 18.44-10.45 28.88 0 12.52 5.44 24.16 14.78 33.88a74.52 74.52 0 0020.74 46.34c.41 2.84.83 5.89 1.24 9.11L498.39 338s-40.14 1.65-66 55c-21.87 45.19-65.39 161.29-78.28 195.85-2.33 6.26-3.65 9.85-3.65 9.85s.43-.43 1.24-1.17l-1.24 3.37s.63-.64 1.83-1.69c-1.82 14.46-2.08 39.29 16.86 42.38 15.88 2.59 56.8 3.66 87.71 4.09H459c20.49.27 36.08.27 36.08.27v-.27h332.44v-3.41a22.91 22.91 0 00-1.83-9l.46-.56a18.25 18.25 0 013.45 8 8 8 0 01-.16.84l.2-.51a8.56 8.56 0 01-.2 2.71s42.65-109.89 42.19-175.51a111.17 111.17 0 00-1.56-20.63zM604.22 330.86a76.25 76.25 0 01-1.06-9.48v-.09c.37 3.09.73 6.29 1.06 9.57zM475 566.9v26.19l-16.4 3.51z"
        transform="translate(-149.42 -56.5)"
        fill="url(#Coding_svg__a)"
      />
      <path
        d="M503.71 57.57a75.57 75.57 0 0175.57 75.57v32.24H428.14v-32.24a75.57 75.57 0 0175.57-75.57z"
        fill="#e14b5a"
      />
      <ellipse cx={504.24} cy={175.95} rx={86.14} ry={59.19} fill="#e14b5a" />
      <path
        d="M449.02 233.29s18 94.07 0 119.44 55 35.41 55 35.41l75.56-27.48 10.57-67.65s-46-25.9-36.47-78.22zM672.04 550.39S676.8 571 650.9 574.7a146.45 146.45 0 01-46.08-.55l-5.71-51.77h60.25zM214.7 524.01s-11.44 46.49 14.46 50.69 121 4.23 121 4.23v-55l-43.06 9.2-40.42-38.76z"
        fill="#f7c4a7"
      />
      <path
        d="M454.58 263.68l-101.21 21.4s-38.58 1.59-63.42 52.85-78.75 197.66-78.75 197.66 46-46.51 99.89 3.17l35.94-65-7.93 103.06h278.48v-48.63s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5 73 73 0 00-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08-18.75-61.58-15.03-72.15z"
        opacity={0.1}
      />
      <path
        d="M454.58 261.57l-101.21 21.4s-38.58 1.59-63.42 52.85-78.76 197.68-78.76 197.68 46-46.51 99.89 3.17l35.94-65-7.93 103.03h278.49v-48.62s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5 73 73 0 00-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08-18.75-61.58-15.03-72.15z"
        fill="#575988"
      />
      <path
        d="M558 257.08a71.53 71.53 0 01-2.76-37.52l-104.66 18.49s1.51 7.91 3.22 19.76a71.86 71.86 0 00104.18-.73z"
        opacity={0.1}
      />
      <path
        d="M575.85 203.17a71.88 71.88 0 01-143.73 1.74v-1.74a71.89 71.89 0 0140.29-64.59q3.23-1.58 6.64-2.84a72.39 72.39 0 0137-3.44 71.82 71.82 0 0159.61 66.1q.19 2.37.19 4.77z"
        fill="#f7c4a7"
      />
      <g opacity={0.1}>
        <path d="M478.94 137.43l.1-.06q-3.41 1.26-6.64 2.84a71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.25 2.91-13.29 8.22-16.91z" />
        <path d="M533.95 139.44a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89q15.34 5.92 31 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z" />
      </g>
      <path
        d="M478.94 135.8l.1-.06q-3.41 1.26-6.64 2.84a71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.21 2.91-13.28 8.22-16.91z"
        fill="#632652"
      />
      <path
        d="M533.95 137.82a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89q15.34 5.92 31 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z"
        fill="#632652"
      />
      <path
        d="M423.91 191.32s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46-56.55 21.67-56.55 21.67z"
        opacity={0.1}
      />
      <path
        d="M423.91 189.69s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46-56.55 21.67-56.55 21.67z"
        fill="#e14b5a"
      />
      <path
        d="M363.13 387.88s-15.85 42.28 6.34 80.33-19.55 53.91-19.55 53.91M619.98 349.83s27.48 34.88 9.51 66.06-16.91 106.23-16.91 106.23"
        opacity={0.1}
      />
      <path
        d="M338.82 553.3h305.47a25.37 25.37 0 0125.37 25.37h-356.2a25.37 25.37 0 0125.36-25.37z"
        fill="#535461"
      />
      <path
        d="M369.9 378.89h243.32a39 39 0 0139 39v141.22H330.9V417.89a39 39 0 0139-39z"
        fill="#535461"
      />
      <circle cx={491.29} cy={476.93} r={19.03} fill="#fff" />
      <path
        d="M428.14 148.2s72.72-72.68 151.15-1.33"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <path fill="#6a5c99" d="M590.36 143.57h7.3v41.39h-7.3z" />
      <path
        d="M580.62 170.35a25.16 25.16 0 0125.16 25.16v1.62a25.16 25.16 0 01-25.16 25.16v-51.94z"
        fill="#ffd037"
      />
      <rect
        x={575.75}
        y={167.92}
        width={11.36}
        height={56.81}
        rx={5.68}
        ry={5.68}
        fill="#6a5c99"
      />
      <path fill="#6a5c99" d="M416.32 185.77h-7.3v-41.39h7.3z" />
      <path
        d="M426.06 223.1a25.16 25.16 0 01-25.16-25.16v-1.62a25.16 25.16 0 0125.16-25.16v51.94z"
        fill="#ffd037"
      />
      <rect
        x={568.99}
        y={225.23}
        width={11.36}
        height={56.81}
        rx={5.68}
        ry={5.68}
        transform="rotate(-180 499.96 225.38)"
        fill="#6a5c99"
      />
      <path
        d="M589.5 99.33c-9.89-20.56-31.43-45.42-77.86-47.41v-.06h-.56l-16.45.78v.08c-46.12 2.12-67.56 26.89-77.42 47.38a106.59 106.59 0 00-10.22 44.4l5.68-.14 5.68-.13a96.65 96.65 0 019.23-39.52c12.52-25.72 35.56-39.39 68.47-40.66l14.55-.81c32.93 1.26 55.98 14.95 68.49 40.66a96.65 96.65 0 019.25 39.54l5.68.13 5.68.14a106.59 106.59 0 00-10.2-44.38z"
        fill="#ffd037"
      />
      <path fill="#d6d6e3" d="M74.28 579h774.71v208H74.28z" />
      <path opacity={0.1} d="M74.28 593h774.71v27H74.28z" />
      <path fill="#d6d6e3" d="M22.31 576h878.63v27H22.31z" />
    </svg>
  );
};

SvgCoding.propTypes = {
  color: PropTypes.string
};
SvgCoding.defaultProps = {
  color: "primary"
};
export default SvgCoding;
