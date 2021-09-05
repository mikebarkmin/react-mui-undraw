import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgStepToTheSun = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1004 764.131"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M745.884 143.964a83.006 83.006 0 007.06-9.027l-44.834-10.484 49.004 3.651a82.971 82.971 0 005.967-65.375l-68.065 29.713 63.651-40.525a82.832 82.832 0 10-142.693 83.34 82.876 82.876 0 00-10.435 14.44l56.796 34.515-61.334-25.263a82.875 82.875 0 008.124 78.498 82.838 82.838 0 0040.837 135.658 28.495 28.495 0 00-2.277 9.488 27.287 27.287 0 002.676 14.044 28.315 28.315 0 00-1.85 27.604 28.315 28.315 0 00-1.85 27.604 28.315 28.315 0 00-1.85 27.605 27.288 27.288 0 00-4.527 13.56c-.836 12.474 6.21 23.103 15.74 23.742s17.93-8.955 18.766-21.429a27.287 27.287 0 00-2.676-14.043 28.315 28.315 0 001.85-27.605 28.315 28.315 0 001.85-27.604 28.315 28.315 0 001.85-27.604 27.286 27.286 0 004.526-13.561 28.47 28.47 0 00-1.028-9.843 82.838 82.838 0 0057.873-128.909 82.837 82.837 0 006.85-102.19z"
        fill="#f2f2f2"
      />
      <path
        d="M836.365 509.203c0 12.214-86.116 54.057-188.707 54.057s-182.81-41.843-182.81-54.057 80.219 9.829 182.81 9.829 188.707-22.042 188.707-9.829z"
        fill="#3f3d56"
      />
      <path
        d="M836.365 509.203c0 12.214-86.116 54.057-188.707 54.057s-182.81-41.843-182.81-54.057 80.219 9.829 182.81 9.829 188.707-22.042 188.707-9.829z"
        opacity={0.1}
      />
      <ellipse
        cx={650.606}
        cy={509.203}
        rx={185.758}
        ry={22.114}
        fill="#3f3d56"
      />
      <ellipse cx={655} cy={512.066} rx={63} ry={18} opacity={0.1} />
      <path
        d="M668.822 392.53a27.287 27.287 0 003.61-13.833c0-12.501-7.742-22.636-17.292-22.636s-17.291 10.135-17.291 22.636a27.287 27.287 0 003.609 13.834 28.315 28.315 0 000 27.666 28.315 28.315 0 000 27.666 28.315 28.315 0 000 27.666 27.288 27.288 0 00-3.61 13.833c0 12.502 7.742 22.636 17.292 22.636s17.292-10.134 17.292-22.636a27.287 27.287 0 00-3.61-13.833 28.315 28.315 0 000-27.666 28.315 28.315 0 000-27.666 28.315 28.315 0 000-27.666z"
        fill="#3f3d56"
      />
      <ellipse
        cx={655.14}
        cy={351.031}
        rx={17.291}
        ry={22.636}
        fill="#3f3d56"
      />
      <ellipse
        cx={655.14}
        cy={323.365}
        rx={17.291}
        ry={22.636}
        fill="#3f3d56"
      />
      <path
        d="M719.87 134.036a83.013 83.013 0 006.44-9.48l-45.435-7.461 49.14.365a82.971 82.971 0 001.58-65.628l-65.925 34.2L726.47 41.34a82.832 82.832 0 10-136.8 92.696 82.874 82.874 0 00-9.446 15.105l58.977 30.64-62.886-21.106a82.875 82.875 0 0013.355 77.78 82.826 82.826 0 10130.201 0 82.837 82.837 0 000-102.42z"
        fill={color}
      />
      <path
        d="M571.943 185.246a82.47 82.47 0 0017.726 51.21 82.826 82.826 0 10130.201 0c11.102-14.094-147.927-60.507-147.927-51.21z"
        opacity={0.1}
      />
      <path
        d="M950.083 266.696l18.655-16.636c-37.034-6.89-74.203 25.69-83.902 73.122a9.628 9.628 0 00-.957.238l-21.036-68.995a119.971 119.971 0 00-2.053 24.9l-16.405-31.858c-6.63 35.638 9.156 68.75 35.657 76.687a45.362 45.362 0 01-6.613-.475l-.17-.025a21.248 21.248 0 00.15 5.278 4.733 4.733 0 001.195 2.624c.81.726 3.09 1.729 6.08 2.763q.346.12.703.24c1.904.638 4.055 1.283 6.274 1.875 2.774.741 5.654 1.402 8.295 1.87.286.052.55.084.798.104.08.007.15.006.226.01.16.007.318.011.462.005.079-.003.151-.012.225-.019a3.478 3.478 0 00.36-.05c.067-.014.131-.03.193-.047a2.312 2.312 0 00.297-.105c.051-.022.103-.044.15-.069a1.756 1.756 0 00.254-.167c.032-.026.069-.048.098-.076a1.603 1.603 0 00.244-.28c.007-.009.016-.017.023-.027a1.82 1.82 0 00.19-.387c.004-.01.005-.02.008-.029a2.416 2.416 0 00.1-.404c0-.01.004-.017.006-.027l-.004.005c.482-3.18-3.974-9.91-4.031-11.816-.055-1.822-4.525-2.312-8.177-2.065l68.645-55.413a51.967 51.967 0 00-5.94-.751z"
        fill="#f2f2f2"
      />
      <path
        d="M1004 333.118c0 8.281-58.39 36.653-127.952 36.653s-123.954-28.372-123.954-36.653 54.392 6.664 123.954 6.664S1004 324.837 1004 333.118z"
        fill="#3f3d56"
      />
      <path
        d="M1004 333.118c0 8.281-58.39 36.653-127.952 36.653s-123.954-28.372-123.954-36.653 54.392 6.664 123.954 6.664S1004 324.837 1004 333.118z"
        opacity={0.1}
      />
      <ellipse
        cx={878.047}
        cy={333.118}
        rx={125.953}
        ry={14.994}
        fill="#3f3d56"
      />
      <ellipse cx={878} cy={333.066} rx={27} ry={9} opacity={0.1} />
      <path
        d="M821.86 258.47c0 38.212 23.972 69.132 53.597 69.132"
        fill="#3f3d56"
      />
      <path
        d="M875.457 327.602c0-38.641 26.751-69.91 59.811-69.91M841.279 261.934c0 36.297 15.286 65.668 34.178 65.668"
        fill={color}
      />
      <path
        d="M875.457 327.602c0-49.375 30.92-89.328 69.133-89.328"
        fill="#3f3d56"
      />
      <path
        d="M864.181 328.09s7.601-.234 9.892-1.866 11.692-3.579 12.26-.962 11.423 13.01 2.842 13.08-19.94-1.337-22.226-2.73-2.768-7.522-2.768-7.522z"
        fill="#a8a8a8"
      />
      <path
        d="M889.328 337.431c-8.581.07-19.94-1.336-22.226-2.729-1.74-1.06-2.435-4.866-2.667-6.622l-.254.01s.482 6.13 2.768 7.523 13.644 2.798 22.226 2.73c2.477-.02 3.333-.902 3.286-2.208-.344.79-1.29 1.282-3.133 1.296z"
        opacity={0.2}
      />
      <path
        d="M205.74 228.15l9.641 15.27c-3.227 4.32-5.518 9.011-4.049 12.115 3.622 7.649 11.942 17.537 16.38 22.81s5.056 19.39 35.162 17.702 42.285-15.314 42.285-15.314 2.668 24.718 15.467 33.564a10.664 10.664 0 01-4.224 3.454c-13.525 6.314-28.286 56.746-38.516 84.45-11.162 30.223 5.8 24.957 5.8 24.957 5.682.094 10.903.395 15.694.85 5.573 14.757 14.413 46.31 4.046 78.808-7.25 22.729-5.725 46.684-2.484 64.726l-6.769 7.24c-7.544 2.407-9.783 7.106-9.783 7.106l-17.369 24.185 2.879 2.082 10.41-14.39s2.27 2.03 5.39 8.413-5.752 31.3-5.909 33.12 7.903 14.744 19.173 18.772a5.815 5.815 0 002.415.365l-1.032 11.982 6.122-.084 1.88-21.85s4.724 30.367 5.676 33.506c.953 3.14 10.768 2.762 21.034 4.257s20.467-10.467 10.013-16.87-11.765-26.693-11.765-26.693c4.948-14.86-6.23-34.166-6.23-34.166l-1.279-13.561a4.033 4.033 0 01-2.64 2.258l1.528-17.745c11.667-13.42 26.916-31.332 34.812-42.145 13.863-18.984 13.12-24.55 13.12-24.55l14.211-63.023a75.196 75.196 0 0014.166-.264c9.619-1.45 6.03-33.046.468-58.522 1.459-6.034 3.767-14.34 7.4-25.76a80.6 80.6 0 003.43-16.911c2.197-23.252-5.835-42.695-9.327-49.874l1.209-3.048s11.107-12.13 2.414-32.656a47.275 47.275 0 001.029-6.591 49.343 49.343 0 00-6.23-28.19c-.058-.099-.116-.2-.177-.29l-.063-.098-.017-.001a3.229 3.229 0 00-.26-.329c-3.531-3.595-21.54-10.403-25.207-11.765a1.75 1.75 0 00-.663-.245c-1.35-.116.07-6.043 1.596-11.283a25.7 25.7 0 004.995-5.148 48.717 48.717 0 0014.99-80.591 25.597 25.597 0 00-8.298-37.232 25.594 25.594 0 014.761 34.202q-.819-.637-1.664-1.24a25.586 25.586 0 10-49.194-4.236 48.723 48.723 0 00-8.595 82.693 33.955 33.955 0 01-30.912-1.136 33.972 33.972 0 0035.753 4.735 25.693 25.693 0 009.23 9.654 15.207 15.207 0 01-1.641 3.305l-1.557-1.243-6.748 7.367-17.413 3.393s-11.134 1.487-23.815 13.847-33.997 18.473-33.997 18.473l-16.733-4.497s-19.245-10.829-19.036-13.257c.033-.386-.43-.269-1.21.226l-9.414-18.872s-17.637-43.708-28.948-33.064 18.59 46.847 18.59 46.847zm124.25 289.707l.435-5.047c5.706-8.06 8.908-27.937 10.695-46.361l-2.596 44.612a30.102 30.102 0 00-8.534 6.796zm-23.288 94.376l-.093 6.751a41.6 41.6 0 00-4.117 10.517c-.532-3.225 1.693-10.474 4.21-17.268z"
        fill="#f2f2f2"
      />
      <path
        d="M616.173 674.476c0 20.256-142.825 89.655-312.977 89.655S0 694.732 0 674.476s133.045 16.301 303.196 16.301 312.977-36.557 312.977-16.3z"
        fill="#3f3d56"
      />
      <path
        d="M616.173 674.476c0 20.256-142.825 89.655-312.977 89.655S0 694.732 0 674.476s133.045 16.301 303.196 16.301 312.977-36.557 312.977-16.3z"
        opacity={0.1}
      />
      <ellipse
        cx={308.087}
        cy={674.476}
        rx={308.087}
        ry={36.677}
        fill="#3f3d56"
      />
      <ellipse cx={310} cy={668.066} rx={102} ry={22} opacity={0.1} />
      <path
        d="M299.616 190.116a33.943 33.943 0 00-1.203-54.92 33.943 33.943 0 11-33.312 58.832 33.933 33.933 0 0034.515-3.912z"
        fill="#2f2e41"
      />
      <path
        d="M360.838 221.759h5.482a48.809 48.809 0 017.31 40.206c-6.091 23.15-1.218 27.414-1.218 27.414s21.931 31.068 13.402 68.838-6.091 42.034-6.091 42.034l-15.23-30.46-8.529-80.412z"
        fill={color}
      />
      <path
        d="M360.838 221.79h5.482a48.809 48.809 0 017.31 40.206c-6.091 23.15-1.218 27.414-1.218 27.414s21.931 31.068 13.402 68.838-6.091 42.034-6.091 42.034l-15.23-30.46-8.529-80.412z"
        opacity={0.1}
      />
      <circle cx={322.154} cy={151.398} r={48.735} fill="#2f2e41" />
      <path
        d="M341.648 192.213s-4.873 19.494-2.436 19.494 10.965 10.357 10.965 10.357l5.483 20.103-4.265 14.62-14.62-3.046-18.276-20.103-5.482-5.483-4.874-17.666s6.092-7.31 1.828-13.402 31.677-4.874 31.677-4.874z"
        fill="#fbbebe"
      />
      <path
        d="M341.648 192.213s-4.873 19.494-2.436 19.494 10.965 10.357 10.965 10.357l5.483 20.103-4.265 14.62-14.62-3.046-18.276-20.103-5.482-5.483-4.874-17.666s6.092-7.31 1.828-13.402 31.677-4.874 31.677-4.874z"
        opacity={0.1}
      />
      <path
        d="M194.225 246.431l-13.402-21.93S166.356 192.49 156 204.065s15.685 35.055 15.685 35.055l13.402 17.666zM372.108 437.107l-9.747 71.274s1.218 5.483-10.966 25.586-45.08 63.965-45.08 63.965l-9.746-18.276s11.574-57.872 31.677-70.056l-2.437-87.723z"
        fill="#fbbebe"
      />
      <path
        d="M372.108 437.107l-9.747 71.274s1.218 5.483-10.966 25.586-45.08 63.965-45.08 63.965l-9.746-18.276s11.574-57.872 31.677-70.056l-2.437-87.723z"
        opacity={0.1}
      />
      <path
        d="M296.569 572.346l13.402 25.586S299.005 629 303.27 632.046s9.747 30.46-1.828 27.414-20.712-15.23-20.712-17.058 6.7-27.413 3.046-33.505-6.092-7.92-6.092-7.92l-9.138 15.23-3.046-1.827 15.23-25.586s1.827-4.873 9.137-7.92z"
        fill="#2f2e41"
      />
      <path
        d="M296.569 572.346l13.402 25.586S299.005 629 303.27 632.046s9.747 30.46-1.828 27.414-20.712-15.23-20.712-17.058 6.7-27.413 3.046-33.505-6.092-7.92-6.092-7.92l-9.138 15.23-3.046-1.827 15.23-25.586s1.827-4.873 9.137-7.92z"
        opacity={0.1}
      />
      <path
        d="M325.952 426.994s4.731 67.376-5.625 85.043v87.722l-14.011 1.828s-23.759-47.517-13.403-93.206-15.23-86.504-15.23-86.504z"
        fill="#fbbebe"
      />
      <circle cx={322.459} cy={181.553} r={25.586} fill="#fbbebe" />
      <path
        d="M348.35 248.868l-25.586-32.287-14.62-9.747-6.093 7.92-17.057 4.873s-10.965 2.437-22.54 15.839-32.287 21.321-32.287 21.321l-17.057-3.046s-20.103-9.137-20.103-11.574-17.667 16.448-13.402 23.758 13.402 16.448 18.275 21.322 6.701 18.884 36.552 14.62 40.815-18.885 40.815-18.885 5.483 28.023 21.322 33.506 67.62 9.137 67.62 9.137l10.965-36.55s12.183-15.84-4.265-38.989c0 0-.315-12.946-2.084-21.562-.687-3.35-1.595-6.046-2.79-7.07-4.263-3.655-26.803-9.747-26.803-9.747s3.655 12.184 5.482 12.793 6.092 21.322 3.655 24.368z"
        fill={color}
      />
      <path
        d="M266.414 430.71c30.678-2.132 48.54 2.894 56.508 6.725a20.2 20.2 0 014.155 2.522c.584.494.865.878.865 1.11 0 1.827 42.034 5.482 57.263 1.827s-10.356-82.24-17.057-88.941-3.089-31.227-3.089-31.227-13.359-2.888-17.014-1.67-22.54-1.827-29.241-5.482-15.23-1.219-20.713-2.437c-2.448-.542-3.685.372-4.3 1.553a10.534 10.534 0 01-4.167 4.21c-12.933 7.45-23.314 58.963-31.13 87.443-8.528 31.068 7.92 24.367 7.92 24.367zM322.764 594.277l2.436 13.402s12.793 18.275 9.138 33.505c0 0 3.046 20.103 14.011 25.586s1.828 18.276-8.528 17.666-20.103.61-21.322-2.436-8.528-32.896-8.528-32.896v21.93l-6.092.61V644.23s-4.874-9.138 1.827-24.367l-1.69-23.378s16.92 3.884 18.748-2.208z"
        fill="#2f2e41"
      />
      <circle cx={322.154} cy={102.663} r={25.586} fill="#2f2e41" />
      <path
        d="M341.836 118.21a25.588 25.588 0 00-.906-41.402 25.588 25.588 0 11-25.113 44.35 25.58 25.58 0 0026.02-2.948z"
        fill="#2f2e41"
      />
      <ellipse
        cx={322.764}
        cy={161.145}
        rx={26.195}
        ry={20.712}
        fill="#2f2e41"
      />
      <path
        d="M322.922 437.435a20.2 20.2 0 014.155 2.522c.322-5.756 2.187-40.571-.05-40.01z"
        opacity={0.1}
      />
      <circle cx={108} cy={146.066} r={86} fill="#ff6584" />
      <ellipse
        cx={257}
        cy={282}
        rx={3}
        ry={7}
        transform="rotate(-65.099 154.784 324.8)"
        fill="#fbbebe"
      />
    </svg>
  );
};

SvgStepToTheSun.propTypes = {
  color: PropTypes.string
};
SvgStepToTheSun.defaultProps = {
  color: "primary"
};
export default SvgStepToTheSun;
