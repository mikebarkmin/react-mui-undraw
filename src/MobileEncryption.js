import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMobileEncryption = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg viewBox="0 0 874.576 673.081" width="100%" height="auto" {...props}>
      <g data-name="Group 14" transform="translate(-203 -155.811)">
        <path
          data-name="Rectangle 22"
          fill="#2f2e41"
          d="M203 827.148h874.576v1.627H203z"
        />
        <path
          data-name="Path 96"
          d="M1008.616 315.76h-3.7V214.448a58.637 58.637 0 00-58.635-58.64H731.636a58.637 58.637 0 00-58.637 58.637v555.81a58.637 58.637 0 0058.637 58.637h214.645a58.637 58.637 0 0058.637-58.637V387.876h3.7z"
          fill="#3f3d56"
        />
        <path
          data-name="Path 97"
          d="M992.437 214.857v554.99a43.792 43.792 0 01-43.791 43.791H732.972a43.792 43.792 0 01-43.791-43.791v-554.99a43.792 43.792 0 0143.79-43.788h26.165a20.815 20.815 0 0019.265 28.661h122.967a20.815 20.815 0 0019.264-28.661h28.014a43.792 43.792 0 0143.791 43.791z"
          fill="#fff"
        />
        <g data-name="Group 11" transform="translate(746.713 292.765)">
          <path
            data-name="Path 66"
            d="M58.687 8.63s-1.918-6.9-4.8-8.631V8.63s-11.508-1.726-19.66 6.9l7.672 1.726s-11.269 3.74-13.666 19.851l4.8-2.3L45.98 62.426l8.152-14.96 16.3 16.686-3.836-9.206 6.234 2.877-4.316-7.48 19.181 8.631-1.439-4.6 7.028 11.776s24.141-25.01-2.233-51.478c.003 0-11.985-12.659-32.364-6.042z"
            fill="#2f2e41"
          />
          <path
            data-name="Path 67"
            d="M56.473 70.079s7.148 27.164 5 30.738 20.73 22.875 20.73 22.875l22.16-4.289 1.43-30.738S85.777 71.509 90.067 58.642z"
            fill="#ffb9b9"
          />
          <path
            data-name="Path 68"
            d="M56.473 70.079s7.148 27.164 5 30.738 20.73 22.875 20.73 22.875l22.16-4.289 1.43-30.738S85.777 71.509 90.067 58.642z"
            opacity={0.1}
          />
          <path
            data-name="Path 69"
            d="M37.887 241.644s-5.719 35.742-1.43 65.05 6.434 50.753 4.289 55.042-4.289 3.574-2.859 8.578 4.289 2.859 1.43 7.863-2.144 13.582-2.144 15.726-3.574 48.609 0 53.613 5 4.289 5 4.289l4.289 25.734 22.875-3.574-3.574-23.59s8.578-4.289 5-7.148-5.719-2.859-3.574-2.859 5.719-.715 2.859-2.145-.715-40.031-.715-40.031 5-70.769 25.019-68.624 35.746 43.606 35.746 43.606l5.719 18.586s2.144 35.027 3.574 37.886.715 3.574 0 5-5.719-2.145-.715 3.574 5 7.863 5 7.863l3.217 37.529 23.239-14.646v-22.16s4.289-7.148 2.859-12.867-1.43-32.883 0-37.886.715-6.434-.715-8.578-5-.715-2.145-5.719 5-17.871.715-27.164-27.879-100.792-37.886-105.8-95.073-7.148-95.073-7.148z"
            fill="#2f2e41"
          />
          <path
            data-name="Path 70"
            d="M69.34 461.813s-16.441-2.859-17.156 1.43a48.947 48.947 0 000 10.722s-5.719.715-5 5.719 1.43 18.586 1.43 18.586-8.935 21.088-3.932 26.092c.05.05 9.871-.357 15.516-.357h20.583s2.859-10.008 0-11.437-9.293-14.3-8.578-17.156 0-23.59 0-23.59l-3.157.178z"
            fill="#3f3d56"
          />
          <path
            data-name="Path 71"
            d="M152.976 474.68l-8.578 6.434s3.574 12.152 1.43 14.3-6.791 26.807-2.5 28.236 30.738-.715 30.738-.715 29.666 1.072 30.38-.357 2.145-10.008-6.433-12.867-13.582-2.144-16.441-10.723-9.293-21.445-9.293-21.445l-1.43-15.726s-8.578 1.43-10.008 1.43-8.578 3.574-7.863 6.434a9.728 9.728 0 01-.002 4.999z"
            fill="#3f3d56"
          />
          <circle
            data-name="Ellipse 12"
            cx={29.666}
            cy={29.666}
            transform="translate(38.959 19.686)"
            fill="#ffb9b9"
            r={29.666}
          />
          <path
            data-name="Path 72"
            d="M87.926 100.106l10.723-18.742s25.019-1.274 26.449 1.586 13.582 144.4 13.582 144.4 5.719 7.863 2.144 12.867l-3.574 5v10.008s-17.871 14.3-42.175 11.437-55.042-15.726-55.042-15.726l6.434-40.031-.715-117.948 14.4-7.02s16.335 11.309 19.194 14.883 8.58-.714 8.58-.714z"
            fill={color}
          />
          <path
            data-name="Path 73"
            d="M62.906 100.106l-3.217-18.943-43.963 31.1 24.3 71.484s-15.012 27.164-12.152 37.172 4.289 25.019 4.289 25.019 38.6 10.008 37.886 5 0-27.164 0-27.164 12.5-92.574 6.249-106.691-13.392-16.977-13.392-16.977z"
            fill="#e6e6e6"
          />
          <path
            data-name="Path 74"
            d="M102.222 90.813l-6.791-13.225c0-.414 48.249 6.26 50.4 10.365l-5.722 110.086s.715 15.726 4.289 20.015 2.859 11.437 1.43 12.152-25.019 7.863-25.019 7.863-22.875-39.316-20.73-86.5 2.143-60.756 2.143-60.756z"
            fill="#e6e6e6"
          />
          <path
            data-name="Path 75"
            d="M137.25 88.668l7.571-1.612a16.011 16.011 0 016.726 7.33c2.145 5 27.164 58.617 27.164 62.191s.715 30.023-15.012 30.023-27.879-67.195-27.879-67.195z"
            fill="#e6e6e6"
          />
          <path
            data-name="Path 76"
            d="M30.024 273.811l12.867 19.3 7.148-24.3-5-7.148z"
            fill="#ffb9b9"
          />
          <path
            data-name="Path 77"
            d="M22.16 112.972l-6.433-.714L0 196.608l27.164 84.351 23.59-17.871-16.441-56.472 5.718-43.605z"
            fill="#e6e6e6"
          />
          <path
            data-name="Path 78"
            d="M99.596 40.982c-3.928-14.318-16.212-24.768-30.767-24.768a31.329 31.329 0 00-25.655 13.814l7.34 14.066 7.319-12.066L72.47 45.486l-3.444-7.425 5.6 2.32-3.875-6.033 17.22 6.961-1.292-3.713 8.18 10.674a32.176 32.176 0 004.737-7.288z"
            fill="#2f2e41"
          />
          <path
            data-name="Path 79"
            d="M132.603 123.338l19.261 16.793-9.968-21.8z"
            opacity={0.1}
          />
          <path
            data-name="Path 81"
            d="M124.382 120.836s-9.293-28.594-20.73-23.59 4.289 35.027 4.289 35.027l10.008 6.434z"
            fill="#ffb9b9"
          />
          <path
            data-name="Path 82"
            d="M173.706 157.293l-50.039-39.316-17.871 26.45s47.179 50.039 57.9 40.031 10.01-27.165 10.01-27.165z"
            fill="#e6e6e6"
          />
        </g>
        <g data-name="Group 13" fill={color}>
          <path
            data-name="Rectangle 55"
            d="M343.84 334.438h47.52v11.44h-47.52z"
          />
          <path
            data-name="Rectangle 56"
            d="M539.2 334.438h16.72v11.44H539.2z"
          />
          <path
            data-name="Rectangle 57"
            d="M572.64 334.438h16.72v11.44h-16.72z"
          />
          <path
            data-name="Rectangle 58"
            d="M408.08 334.438H521.6v11.44H408.08z"
          />
          <path data-name="Rectangle 59" d="M284 408.358h47.52v11.44H284z" />
          <path
            data-name="Rectangle 60"
            d="M479.36 408.358h16.72v11.44h-16.72z"
          />
          <path
            data-name="Rectangle 61"
            d="M512.8 408.358h16.72v11.44H512.8z"
          />
          <path
            data-name="Rectangle 62"
            d="M348.24 408.358h113.52v11.44H348.24z"
          />
          <path
            data-name="Rectangle 63"
            d="M480.24 359.958h47.52v11.44h-47.52z"
          />
          <path
            data-name="Rectangle 64"
            d="M544.48 359.958H592v11.44h-47.52z"
          />
          <path data-name="Rectangle 66" d="M284 359.958h16.72v11.44H284z" />
          <path
            data-name="Rectangle 67"
            d="M317.44 359.958h16.72v11.44h-16.72z"
          />
          <path
            data-name="Rectangle 68"
            d="M350.88 359.958H464.4v11.44H350.88z"
          />
          <path
            data-name="Rectangle 69"
            d="M429.2 396.038h-47.52v-11.44h47.52z"
          />
          <path
            data-name="Rectangle 70"
            d="M364.96 396.038h-47.52v-11.44h47.52z"
          />
          <path
            data-name="Rectangle 71"
            d="M300.72 396.038H284v-11.44h16.72z"
          />
          <path data-name="Rectangle 73" d="M592 396.038h-16.72v-11.44H592z" />
          <path
            data-name="Rectangle 74"
            d="M558.56 396.038H445.04v-11.44h113.52z"
          />
        </g>
        <path
          data-name="Path 156"
          d="M265.685 827.285l-.94-.352c-.207-.078-20.767-7.955-30.4-25.817s-4.916-39.37-4.867-39.584l.222-.979.94.352c.207.078 20.767 7.955 30.4 25.817s4.916 39.37 4.867 39.584zm-29.8-27c8.143 15.1 24.391 22.844 28.507 24.611.783-4.412 3.237-22.255-4.9-37.342s-24.389-22.84-28.507-24.611c-.779 4.414-3.232 22.254 4.903 37.341z"
          fill="#3f3d56"
        />
        <path
          data-name="Path 157"
          d="M241.707 794.85c17.309 10.414 23.975 31.1 23.975 31.1s-21.4 3.8-38.706-6.613-23.975-31.1-23.975-31.1 21.397-3.801 38.706 6.613z"
          fill={color}
        />
        <path
          data-name="Path 158"
          d="M727.895 806.515l22-30.948-22.048 34.338-.048 3.546q-2.32-.043-4.592-.2c0-.805 2.288-45.086 2.218-45.888.107-.029.209-4.188.253-4.37l-22.32-34.284 22.376 31.061.059.912 1.69-34.4-19.126-35.44 19.341 29.394c.012-.468 1.641-71.126 1.655-71.562l-.134 56.477 18.855-22.356-18.922 27.2-.4 30.8 17.591-29.611c-22.01 43.224-17.083 28.071-17.867 51.271l25.527-41.225-25.609 47.2z"
          fill="#d0cde1"
        />
        <path
          data-name="Path 188"
          d="M957.617 808.677l15.144-21.3-15.174 23.633-.033 2.44q-1.6-.029-3.16-.136c0-.554 1.575-31.03 1.527-31.582.074-.02.144-2.882.174-3.007l-15.361-23.6 15.4 21.377.04.628 1.163-23.678-13.164-24.391 13.311 20.23c.008-.322 1.13-48.952 1.139-49.252 0 .159-.093 38.708-.092 38.87l12.977-15.387-13.023 18.72-.278 21.2 12.1-20.382c-15.148 29.749-11.757 19.319-12.3 35.287l17.569-28.373-17.614 32.49z"
          fill="#d0cde1"
        />
        <circle
          data-name="Ellipse 14"
          cx={2.178}
          cy={2.178}
          transform="translate(717.106 222.058)"
          fill="#3f3d56"
          r={2.178}
        />
        <circle
          data-name="Ellipse 15"
          cx={2.178}
          cy={2.178}
          transform="translate(725.092 222.058)"
          fill="#3f3d56"
          r={2.178}
        />
        <circle
          data-name="Ellipse 16"
          cx={2.178}
          cy={2.178}
          transform="translate(733.079 222.058)"
          fill="#3f3d56"
          r={2.178}
        />
        <path
          data-name="Rectangle 24"
          fill="#3f3d56"
          d="M940.736 218.428h22.508v2.904h-22.508z"
        />
        <path
          data-name="Rectangle 25"
          fill="#3f3d56"
          d="M940.736 222.784h22.508v2.904h-22.508z"
        />
        <path
          data-name="Rectangle 26"
          fill="#3f3d56"
          d="M940.736 227.141h22.508v2.904h-22.508z"
        />
      </g>
    </svg>
  );
};

SvgMobileEncryption.propTypes = {
  color: PropTypes.string
};
SvgMobileEncryption.defaultProps = {
  color: "primary"
};
const MemoSvgMobileEncryption = React.memo(SvgMobileEncryption);
export default MemoSvgMobileEncryption;
