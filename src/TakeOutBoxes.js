import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTakeOutBoxes = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 996.312 510.676"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill={color}
        d="M496.326 126.028l-.026.174-.071.503-7.327 52.578-44.864 16.461-.703-.336-25.118-11.929-12.988-49.834-.89-3.421.271-.104 55.566-20.876 36.117 16.764.033.02z"
      />
      <path
        fill={color}
        d="M443.335 195.408l-25.118-11.929-13.878-53.255.271-.104 36.201 15.273 2.524 50.015z"
      />
      <path
        opacity={0.2}
        d="M443.965 194.8l-19.106-36.614 2.454-10.38-11.557-13.609-.984.836 11.134 13.111-8.317 35.186 1.257.298 5.559-23.521 18.415 35.29 1.145-.597z"
      />
      <path
        fill="#3f3d56"
        d="M496.326 126.673l-.097.032-55.418 19.334-35.582-12.394-.89-3.421.271-.104 55.566-20.876 36.117 16.764.007.194.026.471z"
      />
      <path
        fill={color}
        d="M441.779 147.007l-11.297-8.714 2.582-9.683 32.276-11.62 21.948 1.291 8.715 7.424.645 1.936-54.869 19.366z"
      />
      <path
        fill={color}
        d="M404.984 130.224l25.498-.969 13.813-4.688 21.536-7.577 4.028-5.809-10.05-1.799-54.825 20.842z"
      />
      <path
        fill="#ccc"
        d="M442.49 124.502l13.295-4.666.427 1.219-13.295 4.665z"
      />
      <path
        fill="#9f616a"
        d="M280.668 44.344l-6.233 31.163 29.086 21.815 13.505-40.513-36.358-12.465z"
      />
      <circle cx={304.041} cy={44.863} r={28.047} fill="#9f616a" />
      <path
        d="M243.272 257.373c.128 9.049 39.539 109.758 34.067 122.871-8.626 8.817-27.18 55.747-35.107 68.267-1.038 0-6.232 15.581-6.232 15.581s12.466 19.737 25.97 11.427c16.98-39.937 59.506-62.212 60.257-114.264 2.052 16.443 8.112 121.99 8.112 121.99s-1.163.493 25 3c4.061-61.258 20.66-165.476-16.5-230.95-11.426-5.193-95.567 2.078-95.567 2.078z"
        fill="#2f2e41"
      />
      <path
        d="M330.337 481.19c-1.215 2.335-9.924 23.893-1.998 26.054 9.14 2.493 18-1 18-1s16 5 25.791-1.355c4.57-4.57 3.532-8.724 1.35-11.736a12.723 12.723 0 00-9.438-5.088c-4.969-.354-6.547-1.275-7.116-3.552-.831-3.323-26.59-3.323-26.59-3.323zM244.864 462.365s-22.327 7.05-17.626 15.276a30.913 30.913 0 0012.838 11.838s4.656 19.197 17.582 19.197c6.463 0 8.666-3.673 9.254-7.345a12.723 12.723 0 00-3.077-10.271c-3.263-3.764-3.727-5.531-2.52-7.544 1.763-2.937-16.451-21.151-16.451-21.151z"
        fill="#2f2e41"
      />
      <path
        d="M344.039 260.414s-4.16 8.31-20.78 5.19c-16.62-3.11-82.06 0-82.06 0s3.63-74.27-4.68-118.94 24.41-70.12 24.41-70.12l10.39-10.39c10.39-1.03 32.33 31.21 32.33 31.21 7.22 1.21 13.96 31.9 19.71 60.94.34 1.66.66 3.3.98 4.94 2.65 13.54 6.34 28.61 8.55 42.14.16.96.31 1.91.45 2.86a494.563 494.563 0 0010.7 52.17z"
        fill="#e6e6e6"
      />
      <path
        d="M271.229 27.4s-5.244-11.537 8.39-16.781c0 0 11.537-18.878 34.61-6.293 0 0 15.732 6.293 15.732 23.073s5.243 19.927 5.243 19.927-7.809-8.011-9.906-14.304-18.41-7.72-24.703-1.428-22.025 5.244-22.025 5.244l1.05 23.073s-5.245-13.634-7.342-13.634-4.195-18.878-1.049-18.878z"
        fill="#2f2e41"
      />
      <path
        d="M332.889 205.384c-24.78-13.47-64.92-43.01-77.87-58.99-17.07-21.05 1.55-37.05 1.55-37.05 21.11-13.32 46.35 32.38 46.35 32.38l20.44 16.58c.34 1.66.66 3.3.98 4.94 2.65 13.54 6.34 28.61 8.55 42.14z"
        opacity={0.2}
      />
      <path
        d="M406.862 189.861s36.84 14.956 42.904-1.856-29.086-16.524-29.086-16.524l-13.8 1.956z"
        fill="#9f616a"
      />
      <path
        d="M251.847 102.503s-18.611 16.01-1.554 37.052 95.451 66.005 95.451 66.005l51.064-13.805 14.45 2.645 2.725-27.13-21.289 2.077-54.04-11.507-34.46-27.96s-31.243-40.69-52.347-27.377z"
        fill="#e6e6e6"
      />
      <path opacity={0.2} d="M319.646 295.362l3.256 76.081-8.256-76.081h5z" />
      <path
        d="M671.182 240.939l-29.559 6.849a9.017 9.017 0 01-10.758-6.5 9.017 9.017 0 018.513-11.3l28.551-.664z"
        fill="#ffb9b9"
      />
      <path
        d="M668.043 245.276l-6.564-19.694 39.355-13.442-10.445-91.986c18.806 3.42 27.756 18.208 26.918 37.304l5.092 62.768z"
        fill="#3f3d56"
      />
      <path
        d="M695.235 99.874h64.298V67.898a32.8 32.8 0 00-9.417-23.088 31.69 31.69 0 00-22.734-9.566 32.199 32.199 0 00-32.137 31.8c-.005.293-.01.571-.01.854zM786.418 475.63l-20.554-2.358-24.597-166.114-50.878 166.787-22.239.674 25.271-205.199-3.706-46.835 63.008-19.88c44.627 31.153 43.704 141.188 33.695 272.925z"
        fill="#2f2e41"
      />
      <circle cx={721.725} cy={69.275} r={24.26} fill="#ffb9b9" />
      <path
        d="M745.985 113.078l-41.108 10.782c6.926-13.319 9.143-25.752 5.392-37.063l28.977-4.718a42.278 42.278 0 006.739 31z"
        fill="#ffb9b9"
      />
      <path
        d="M759.8 211.803c-23.057 14.663-49.914 31.507-69.748 15.162l-9.435-45.824c-7.498-6.679-4.173-27.288 5.964-56.664a12.994 12.994 0 018.055-8.047l15.633-5.373c6.928 5.826 18.284 2.35 31.672-5.392l15.5 4.044 6.739 50.541c-9.728 14.575-8.029 33.982-4.38 51.553z"
        fill="#3f3d56"
      />
      <path
        d="M740.592 231.504l-29.558 6.85a9.017 9.017 0 01-10.759-6.5 9.017 9.017 0 018.514-11.3l28.55-.664z"
        fill="#ffb9b9"
      />
      <path
        d="M782.845 507.389c-3.452 1.575-6.343-8.19-9.255-5.328-8.145 8.004-27.683 6.21-27.683 6.21a5.091 5.091 0 01-3.21-6.635 5.091 5.091 0 013.533-3.151l8.662-2.166 13.6-23.918 14.822-1.876.375.612a38.217 38.217 0 014.095 31.25c-1.232 3.95-2.91 4.076-4.939 5.002zM685.132 507.389c-3.452 1.575-6.344-8.19-9.256-5.328-8.144 8.004-27.683 6.21-27.683 6.21a5.091 5.091 0 01-3.21-6.635 5.091 5.091 0 013.533-3.151l8.662-2.166 13.6-23.918 14.823-1.876.374.612a38.217 38.217 0 014.095 31.25c-1.232 3.95-2.91 4.076-4.938 5.002zM750.165 49.04l-6.11 19.44-52.826-.939a32.656 32.656 0 0158.936-18.5z"
        fill="#2f2e41"
      />
      <path
        d="M737.454 235.842l-6.565-19.694 39.356-13.443-14.888-93.979a38.237 38.237 0 0131.36 39.297l5.092 62.769z"
        fill="#3f3d56"
      />
      <path
        fill="#ccc"
        d="M643.455 182.748l-40.933 8.803-8.363-40.273 15.405-20.687 13.864-2.641 15.405 15.625 4.622 39.173z"
      />
      <path
        fill="#e6e6e6"
        d="M624.529 184.504h-24.65l-3.36-16.59-3.68-18.18 5.5-7.92 10.57 3.3 11.44 15.85 2.87 16.15.2 1.15 1.11 6.24z"
      />
      <path
        fill="#ccc"
        d="M665.902 174.825l-28.389 3.301 5.062-36.091 11.443-10.344 9.903 2.421 6.603 15.185-4.622 25.528z"
      />
      <path
        fill="#e6e6e6"
        d="M669.639 153.474l-2.64 14.53-8.58 49.51-33.01 10.57-1.14-.62-17.79-9.73-10.01-49.84.05.02 26.47 10.65.23-1.45.16-1.05 2.03-12.9 9.02-9.69 30.15-7.26 5.06 7.26z"
      />
      <circle cx={648.737} cy={144.896} r={7.042} fill="#e6e6e6" />
      <path fill="#fff" d="M615.358 151.39l16.065-2.86.077.433-16.065 2.86z" />
      <path
        fill="#f2f2f2"
        d="M624.269 227.464l-17.79-9.73-10.01-49.84.05.02-3.68-18.18 5.5-7.92 10.57 3.3 11.44 15.85 2.87 16.15.16-1.05.04 2.2.11 6.24.74 42.96z"
      />
      <path
        fill="#ccc"
        d="M606.696 217.796l-.426-.114 8.775-32.906-10.048-13.247.351-.266 10.178 13.418-8.83 33.115z"
      />
      <path
        fill="#ccc"
        d="M611.253 199.202l.397-.191 13.957 28.976-.396.191z"
      />
      <path
        d="M667.907 164.988l-1.653 9.131-.083.009-7.4 42.685-33.01 10.563-.198.095-.132-.275-18.596-10.163-.213-.057.114-.432-9.914-49.357.05.02-1.098-5.418.821-1.182 2.538-3.653 10.563 3.3L621.14 176.1l.167.942 1.202 6.76.482 2.716 1.019 5.737.968-6.164.348-2.218.875-5.572 9.023-9.684 4.012-.966 2.793-.673 3.842-.924a7.042 7.042 0 119.655-2.327l9.848-2.372 2.427 3.484z"
        opacity={0.2}
      />
      <path
        fill="#e6e6e6"
        d="M625.321 201.848h-24.648l-7.042-34.771 5.502-7.923 10.563 3.301L621.14 178.3l4.181 23.548z"
      />
      <path
        fill="#e6e6e6"
        d="M659.212 234.859l-33.011 10.563-18.926-10.343-10.013-49.846 26.519 10.673 2.42-15.405 9.023-9.683 30.15-7.262 5.062 7.262-2.641 14.525-8.583 49.516z"
      />
      <circle cx={649.529} cy={162.235} r={7.042} fill="#e6e6e6" />
      <path
        fill="#f2f2f2"
        d="M625.079 244.464l-17.79-9.73-10.01-49.84.05.02-3.68-18.18 5.5-7.92 10.57 3.3 11.44 15.85 2.87 16.15.16-1.05.04 2.2.11 6.24.74 42.96z"
      />
      <path
        fill="#ccc"
        d="M607.488 235.135l-.425-.113 8.775-32.907-10.049-13.247.351-.266 10.179 13.419-8.831 33.114z"
      />
      <path
        fill="#ccc"
        d="M612.046 216.54l.396-.19 13.958 28.976-.397.191zM901.455 465.094l-40.933 8.803-8.363-40.273 15.405-20.687 13.864-2.641 15.405 15.625 4.622 39.173z"
      />
      <path
        fill="#e6e6e6"
        d="M882.529 466.85h-24.65l-3.36-16.59-3.68-18.18 5.5-7.92 10.57 3.3 11.44 15.85 2.87 16.15.2 1.15 1.11 6.24z"
      />
      <path
        fill="#ccc"
        d="M923.902 457.171l-28.389 3.302 5.062-36.092 11.443-10.343 9.903 2.42 6.603 15.185-4.622 25.528z"
      />
      <path
        fill="#e6e6e6"
        d="M927.639 435.82l-2.64 14.53-8.58 49.51-33.01 10.57-1.14-.62-17.79-9.73-10.01-49.84.05.02 26.47 10.65.23-1.45.16-1.05 2.03-12.9 9.02-9.69 30.15-7.26 5.06 7.26z"
      />
      <circle cx={906.737} cy={427.242} r={7.042} fill="#e6e6e6" />
      <path fill="#fff" d="M873.358 433.737l16.065-2.86.077.433-16.065 2.86z" />
      <path
        fill="#f2f2f2"
        d="M882.269 509.81l-17.79-9.73-10.01-49.84.05.02-3.68-18.18 5.5-7.92 10.57 3.3 11.44 15.85 2.87 16.15.16-1.05.04 2.2.11 6.24.74 42.96z"
      />
      <path
        fill="#ccc"
        d="M864.696 500.142l-.426-.113 8.775-32.907-10.048-13.247.351-.266 10.178 13.418-8.83 33.115z"
      />
      <path
        fill="#ccc"
        d="M869.253 481.548l.397-.191 13.957 28.976-.397.191z"
      />
      <path fill="#e6e6e6" d="M982.339 506.59h-27l-4-52h35l-4 52z" />
      <path fill="#f2f2f2" d="M950.839 475.59h36v8h-36z" />
      <path
        fill="#ccc"
        d="M996.089 458.323l-5.756-1.695-.074-2.107-25.58-7.535-1.205 1.73-5.755-1.695-3.614 5.19 42.207 12.433-.223-6.321z"
      />
      <path
        fill={color}
        d="M149.326 440.959l-.026.174-.071.504-7.327 52.578-44.864 16.461-.703-.336-25.118-11.929-12.988-49.835-.89-3.421.271-.103 55.566-20.876 36.117 16.764.033.019z"
      />
      <path
        fill={color}
        d="M96.335 510.34l-25.118-11.929-13.878-53.256.271-.103 36.201 15.273 2.524 50.015z"
      />
      <path
        opacity={0.2}
        d="M96.965 509.731l-19.106-36.614 2.454-10.379-11.557-13.61-.984.836 11.134 13.112-8.317 35.186 1.257.297 5.559-23.52 18.415 35.29 1.145-.598z"
      />
      <path
        fill="#3f3d56"
        d="M149.326 441.605l-.097.032-55.418 19.333-35.582-12.394-.89-3.421.271-.103 55.566-20.876 36.117 16.764.007.193.026.472z"
      />
      <path
        fill={color}
        d="M94.779 461.939l-11.297-8.715 2.582-9.683 32.276-11.619 21.948 1.291 8.715 7.423.645 1.937-54.869 19.366z"
      />
      <path
        fill={color}
        d="M57.984 445.155l25.498-.968 13.813-4.689 21.536-7.576 4.028-5.81-10.05-1.798-54.825 20.841z"
      />
      <path
        fill="#ccc"
        d="M95.49 439.433l13.295-4.666.427 1.219-13.295 4.665z"
      />
      <path fill={color} d="M36 507.786H9l-4-52h35l-4 52z" />
      <path fill="#e6e6e6" d="M4.5 476.786h36v8h-36z" />
      <path
        fill="#3f3d56"
        d="M42 452.786h-6l-.667-2H8.667l-.667 2H2l-2 6h44l-2-6zM202.243 507.173h606.096v2H202.243z"
      />
    </svg>
  );
};

SvgTakeOutBoxes.propTypes = {
  color: PropTypes.string
};
SvgTakeOutBoxes.defaultProps = {
  color: "primary"
};
export default SvgTakeOutBoxes;
