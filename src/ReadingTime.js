import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgReadingTime = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 882.951 612.148"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M102.896 530.318s-112.306-51.7-72.853-87.552 72.853 87.552 72.853 87.552z"
        fill="#e6e6e6"
      />
      <path
        d="M100.941 542.382s-51.62-169.607 24.393-161.496-24.393 161.496-24.393 161.496z"
        fill="#e6e6e6"
      />
      <path
        d="M63.305 527.34l2.166 28.371.035.49a130.356 130.356 0 00.67 13.266c2.94 28.94 15.579 42.128 30.35 42.128s26.858-13.189 29.798-42.128a130.353 130.353 0 00.67-13.266l.018-.395.008-.095 2.176-28.371z"
        fill="#e6e6e6"
      />
      <path
        d="M127.02 555.711l-.008.095-.017.395a130.353 130.353 0 01-.671 13.266H66.176a130.356 130.356 0 01-.67-13.266l-.035-.49z"
        fill="#fff"
      />
      <path
        d="M835.384 547.669s-86.949-40.027-56.404-67.784 56.404 67.784 56.404 67.784z"
        fill="#e6e6e6"
      />
      <path
        d="M833.87 557.009s-39.964-131.312 18.886-125.032-18.885 125.032-18.885 125.032z"
        fill="#e6e6e6"
      />
      <path
        d="M804.732 545.363l1.677 21.966.027.38a100.924 100.924 0 00.519 10.27c2.276 22.405 12.061 32.616 23.497 32.616s20.794-10.211 23.07-32.616a100.92 100.92 0 00.52-10.27l.013-.307.006-.073 1.685-21.966z"
        fill="#e6e6e6"
      />
      <path
        d="M854.061 567.329l-.006.073-.013.306a100.92 100.92 0 01-.52 10.27h-46.567a100.924 100.924 0 01-.52-10.27l-.026-.38z"
        fill="#fff"
      />
      <path d="M292.716 182.587V144h-6v38.587a8 8 0 106 0z" fill="#e6e6e6" />
      <path
        d="M306.716 572h-41V74h-16v498h-41a37 37 0 00-37 37h172a37 37 0 00-37-37z"
        fill="#e6e6e6"
      />
      <path
        d="M171.8 148h171.833L333.125 16.66A18.198 18.198 0 00315.08 0H200.353a18.198 18.198 0 00-18.046 16.66z"
        fill={color}
      />
      <path
        d="M411.055 378.52a12.37 12.37 0 00-14.258 10.339l-4.838 31.748 16.46 4.366 12.061-29.58a12.37 12.37 0 00-9.425-16.873z"
        fill="#a0616a"
      />
      <path
        d="M410.747 420.548c9.135 36.302 5.204 69.506-28.812 95.576-40.8-11.246-67.935-38.381-84.491-77.818a19.684 19.684 0 0111.353-26.092 19.674 19.674 0 0121.658 5.582L370.487 464l18.78-46.589z"
        fill={color}
      />
      <path
        d="M619.788 611.007c-37.253-1.979-60.395-14.77-66-41l6-11 68.695 31.294a9.609 9.609 0 01-.676 17.766z"
        fill="#e6e6e6"
      />
      <path
        d="M591.003 611.27c-19.356-.587-37.97-.404-55.609.79a11.781 11.781 0 01-12.547-10.816l-1.059-13.237-15-24 13-13c21.847 21.759 45.807 40.035 74.263 50.9a5.132 5.132 0 01-3.048 9.363z"
        fill="#e6e6e6"
      />
      <path
        d="M485.788 517.007c-24.716 44.226-49.025 74.04-81 90-39.34 12.984-68.09-4.218-90.5-39.5l65-43 9.5 9.5 86.098-65.518a10.993 10.993 0 0115.464.343l73.438 90.175-9 15z"
        fill="#2f2e41"
      />
      <path fill="#2f2e41" d="M507.788 569.007l-34-52 8-15 45 47-19 20z" />
      <circle cx={311.788} cy={369.007} r={34} fill="#a0616a" />
      <path
        d="M320.788 432.007l-38-13a47.195 47.195 0 007-30h31c-1.763 15.258-2.027 29.73 0 43z"
        fill="#a0616a"
      />
      <path
        d="M401.788 523.007c-5.697 2.339-6.113 9.923-11.5 12.5-26.04 12.459-53.589 22.568-72.5 40.5-44.193-30.01-85.155-123.218-32-164 18.144 10.617 34.35 18.215 34 0z"
        fill={color}
      />
      <path
        d="M378.788 483.007l-18.5-6.5-36.5 28.5-16.362-58.903c-1.135-4.086-2.973-2.015-5.614.823a19.664 19.664 0 00-33.002 13.557c-1.947 42.726 10.938 78.873 42.978 106.523 41.907-8.973 59.692-37.286 67-74l-1.981-1.32q1.095-4.257 1.981-8.68z"
        opacity={0.2}
      />
      <path
        d="M316.363 324.28c11.215 2.563 23.98 6.194 24.696 9.568 11.537 2.907 20.244 9.87 22.022 20.487a6.358 6.358 0 01-6.378 7.373c-6.274-.08-15.693-.682-21.912-3.28-18.067 11.642-21.1 41.919-13.21 62.528l-12.415-1.138-12.845-37.602-3.281 36.124-28.333-3.746 3.65-46.065a68.631 68.631 0 0110.778-30.433 25.92 25.92 0 012.028-2.627 36.01 36.01 0 0135.2-11.188z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M380.285 438.428l31.117 36.583 46.676-55.086-31.538-38.266-46.255 56.769z"
      />
      <path
        d="M450.088 421.187l-37.004-30.277c2.102-5.046 12.194-3.364 12.194-3.364l28.967 29.366a15.85 15.85 0 012.571 3.434z"
        fill="#f2f2f2"
      />
      <path
        d="M451.77 419.084l-42.05-32.799-46.676 70.645 43.943 29.645c4.205 1.682 8.41-1.261 8.41-1.261l42.891-65.599z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M414.566 397.076l.398-.553 26.914 19.34-.397.553zM406.913 476.506l35.322-53.405.57.376-35.323 53.405zM374.199 457.62l.404-.549 28.588 21.034-.404.55zM373.276 450.007l36.584-52.563.56.389-36.585 52.563z"
      />
      <path
        fill="#b3b3b3"
        d="M420.877 387.44l.284-.31 33.274 30.539-.284.31zM418.11 387.707l.28-.316 34.775 30.701-.278.316zM415.944 388.327l.27-.324 36.1 30.092-.27.323z"
      />
      <path
        d="M397.081 449.168a12.37 12.37 0 00-17.313 3.229l-17.98 26.61 13 11 23.576-21.556a12.37 12.37 0 00-1.283-19.283z"
        fill="#a0616a"
      />
      <path
        d="M378.788 487.007c-7.308 36.714-25.093 65.027-67 74-32.04-27.65-44.925-63.797-42.978-106.523a19.684 19.684 0 0121.441-18.708 19.674 19.674 0 0117.175 14.328l16.362 58.903 36.937-34.042z"
        fill={color}
      />
      <path fill="#3f3d56" d="M882.556 612.148H0v-2.182h882.951l-.395 2.182z" />
      <path
        d="M461.288 91.507a2.002 2.002 0 00-2 2v156a2.002 2.002 0 002 2h130a2.002 2.002 0 002-2v-156a2.002 2.002 0 00-2-2z"
        fill="#e6e6e6"
      />
      <path d="M474.788 236.007h103v-129h-103z" fill="#fff" />
      <path
        d="M677.72 132.507a1.195 1.195 0 00-1.193 1.194v77.612a1.195 1.195 0 001.194 1.194h93.134a1.195 1.195 0 001.194-1.194V133.7a1.195 1.195 0 00-1.194-1.194z"
        fill="#e6e6e6"
      />
      <path d="M685.78 141.76v61.493h77.015v-61.492z" fill="#fff" />
      <path
        d="M544.475 102.507h-36.373a4.989 4.989 0 01-4.33-7.5l18.186-31.5.045-.078a4.94 4.94 0 013.787-2.398l.026-.003a5.2 5.2 0 01.472-.021 4.949 4.949 0 014.33 2.5l18.187 31.5a5 5 0 01-4.33 7.5zm-37.377-5.005a1.028 1.028 0 00.137.505.983.983 0 00.866.5h36.373a.982.982 0 00.867-.5 1.027 1.027 0 00.137-.504.985.985 0 00-.137-.496l-18.187-31.5a1 1 0 00-1.732 0l-18.187 31.5a.981.981 0 00-.137.495z"
        fill="#e6e6e6"
      />
      <circle cx={526.288} cy={67.507} r={3} fill="#e6e6e6" />
      <path
        d="M734.148 135.007h-19.72a2.705 2.705 0 01-2.348-4.066l9.86-17.079.025-.042a2.679 2.679 0 012.053-1.3l.014-.001c.084-.008.17-.012.256-.012a2.683 2.683 0 012.348 1.355l9.86 17.079a2.711 2.711 0 01-2.348 4.066zm-20.265-2.714a.557.557 0 00.075.274.533.533 0 00.47.271h19.72a.533.533 0 00.47-.27.557.557 0 00.074-.274.534.534 0 00-.074-.269l-9.86-17.078a.542.542 0 00-.94 0l-9.86 17.078a.532.532 0 00-.075.268z"
        fill="#e6e6e6"
      />
      <circle cx={724.288} cy={116.031} r={1.627} fill="#e6e6e6" />
      <path
        d="M475.966 186.888a26.49 26.49 0 0115.262-14.327 26.181 26.181 0 0121.812 1.357c7.804 4.141 14.043 10.653 21.968 14.616a56.179 56.179 0 0024.786 5.84 55.478 55.478 0 0027.793-7.215 1.501 1.501 0 00-1.514-2.59 53.343 53.343 0 01-50.43.925c-7.951-4.169-14.251-10.9-22.351-14.807a28.88 28.88 0 00-22.23-1.248 29.846 29.846 0 00-17.989 16.651c-.728 1.787 2.173 2.565 2.893.798zM473.596 214.93a114.204 114.204 0 0150.54.176c14.767 3.424 30.01 9.585 45.234 4.99 6.802-2.053 13.035-6.158 16.53-12.477.935-1.69-1.655-3.206-2.59-1.514-6.58 11.897-21.993 13.904-34.167 11.952-8.134-1.304-15.974-3.92-23.98-5.791a116.877 116.877 0 00-52.365-.228c-1.883.42-1.086 3.313.798 2.893zM472.515 147.872a118.628 118.628 0 0148.042 1.71c14.695 3.6 29.059 11.825 44.597 10.404 7.194-.657 14.316-3.303 19.203-8.806 1.278-1.44-.837-3.569-2.122-2.122-4.215 4.748-10.287 7.208-16.518 7.873-7.182.766-14.238-.722-21.074-2.836-7.566-2.34-14.917-5.304-22.61-7.238a121.5 121.5 0 00-50.316-1.878c-1.899.324-1.094 3.216.798 2.893zM699.192 140.747a52.3 52.3 0 0113.722 25.587 51.655 51.655 0 01-11.168 43.862c-1.243 1.463.87 3.595 2.122 2.12a55.414 55.414 0 0012.698-28.672 54.693 54.693 0 00-15.253-45.018c-1.354-1.38-3.474.741-2.121 2.121zM744.203 134.346c-9.194 6.743-14.342 17.627-15.066 28.885-.753 11.713 3.714 23.026 10.908 32.12a62.463 62.463 0 0014.848 13.404c1.62 1.06 3.125-1.536 1.514-2.59-9.184-6.01-17.044-14.547-21.217-24.791a40.117 40.117 0 01-.087-30.738 32.842 32.842 0 0110.614-13.7c1.54-1.13.046-3.734-1.514-2.59z"
        fill="#e6e6e6"
      />
      <circle cx={533.288} cy={150.507} r={14} fill="#e6e6e6" />
    </svg>
  );
};

SvgReadingTime.propTypes = {
  color: PropTypes.string
};
SvgReadingTime.defaultProps = {
  color: "primary"
};
export default SvgReadingTime;