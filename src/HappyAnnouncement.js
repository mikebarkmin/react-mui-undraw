import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHappyAnnouncement = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 951.571 665.128"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M42.385 255.25c.91 56.174 21.905 62.256 47.688 56.397 29.455-6.693 53.63-27.671 65.545-55.427l8.217-19.142a52.217 52.217 0 00-27.384-68.58 52.217 52.217 0 00-68.58 27.384c-26.442 10.387-31.665 31.891-25.486 59.368z"
        fill="#2f2e41"
      />
      <path
        d="M208.174 142.19l7.914-13.391a12.58 12.58 0 00-7.109-18.417 12.58 12.58 0 00-16.295 12.423l.466 14.394-37.191 101.922 20.28 4.234zM12.516 393.443l-9.74 12.128a12.58 12.58 0 004.411 19.241 12.58 12.58 0 0017.899-9.975l1.59-14.314 51.332-95.583-19.47-7.08z"
        fill="#9f616a"
      />
      <path
        d="M72.698 494.336l1.433 17.223.337 4.018 95.335-9.169a21.02 21.02 0 0016.833-29.471L155.89 410.93l-10.62-22.798-46.021-10.62c-37.95 29.046-3.806 61.102 39.153 93.53q2.523 1.911 5.098 3.823z"
        fill="#2f2e41"
      />
      <path
        d="M40.574 553.975a6.85 6.85 0 006.25-2.418l31.184-37.75-1.77-17.7-10.633-6.38a6.987 6.987 0 00-10.094 3.426l-20.34 51.526a6.85 6.85 0 005.403 9.296z"
        fill="#2f2e41"
      />
      <path
        d="M67.388 490.796l1.77 21.241 4.973-.478 90.362-8.69a21.02 21.02 0 0016.833-29.472l-25.436-56.943v-5.523l-10.62-22.798-46.021-10.62c-37.95 29.046-3.806 61.102 39.153 93.53l-.212.283z"
        opacity={0.2}
      />
      <path
        d="M31.724 546.895a6.85 6.85 0 006.25-2.418l31.184-37.75-1.77-17.7-10.633-6.38a6.987 6.987 0 00-10.094 3.425L26.32 537.6a6.85 6.85 0 005.403 9.296z"
        fill="#2f2e41"
      />
      <path
        d="M63.847 487.256l1.77 21.24 95.336-9.17a21.023 21.023 0 0016.84-29.468l-25.443-56.944v-31.861l-61.952-10.62c-39.443 30.186-1.012 63.627 44.252 97.353z"
        fill="#2f2e41"
      />
      <circle cx={124.029} cy={211.127} r={26.551} fill="#9f616a" />
      <path
        d="M88.628 255.379l37.171 24.78 31.861-7.08-17.7-17.7v-26.551l-28.321-1.77c-.595 10.603-6.67 20.305-23.01 28.32z"
        fill="#9f616a"
      />
      <path
        d="M83.318 379.283l69.032 8.85 15.93-74.342c7.402-19.734 3.155-37.169-10.547-52.737a11.824 11.824 0 00-11.236-9.5l-6.537.285c.74 23.475-16.556 17.821-42.481-1.77l-3.13.939a17.583 17.583 0 00-12.342 19.418l2.855 19.268a131.83 131.83 0 005.619 22.465c7.077 21.153 4.548 43.545-7.163 67.124z"
        fill={color}
      />
      <path
        d="M51.457 299.63l31.861 10.62 14.16-51.331-4.797-2.18a17.204 17.204 0 00-22.284 7.537zM145.27 251.839l17.701 19.47 21.24-33.631-26.551-14.16-12.39 28.321z"
        fill={color}
      />
      <path
        d="M93.053 203.162c16.685 6.292 34.49 5.64 53.102 0v-21.24H93.053zM921.132 567.779l-18.305 7.627-122.029-166.265-88.471 169.316-22.88-4.576L736.563 340.5h77.793l106.776 227.279z"
        fill="#2f2e41"
      />
      <path
        d="M945.689 606.565a7.976 7.976 0 01-6.079-.782l-38.602-22.226a7.833 7.833 0 01-1.63-12.328l3.45-3.45 18.304-1.525 27.982 26.863a7.976 7.976 0 01-3.425 13.448zM646.415 612.667a7.976 7.976 0 006.078-.783l38.603-22.226a7.833 7.833 0 001.63-12.327l-3.45-3.45-18.304-1.526-27.982 26.863a7.976 7.976 0 003.425 13.449z"
        fill="#2f2e41"
      />
      <path
        d="M684.7 97.967l-7.626 4.576-15.805-25.683a11.55 11.55 0 017.457-17.357 11.55 11.55 0 0113.9 10.45zM895.973 297.924l3.165-8.312 28.302 10.411a11.55 11.55 0 014.872 18.253 11.55 11.55 0 01-17.385.382z"
        fill="#ffb9b9"
      />
      <circle cx={776.222} cy={166.609} r={22.88} fill="#ffb9b9" />
      <path
        fill="#ffb9b9"
        d="M796.052 215.42h-32.033v-35.083l27.457-3.051 4.576 38.134z"
      />
      <path
        d="M818.932 349.652h-86.945c3.065-48.512 5.493-95.393 0-122.029l5.055-24.267a13.672 13.672 0 0115.081-10.778l11.896 1.487c8.057 14.164 17.793 14.027 28.982 1.526h14.33a14.365 14.365 0 0114.362 14.65 181.465 181.465 0 013.687 52.08z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M672.497 97.967l12.203-6.101 65.591 108.301-18.304 27.456-59.49-129.656zM896.146 302.264l10.429-8.796-55.413-77.649a49.111 49.111 0 00-48.844-19.775l-1.748.321 20.953 36.668 27.597 20.895z"
      />
      <path
        d="M802.683 153.102s4.276-9.406-6.84-13.682c0 0-9.406-15.391-28.218-5.13 0 0-12.827 5.13-12.827 18.812s-4.275 16.247-4.275 16.247 6.367-6.532 8.077-11.663 15.01-6.294 20.14-1.164 17.958 4.276 17.958 4.276l-.855 18.812s4.275-11.116 5.985-11.116 3.42-15.392.855-15.392z"
        fill="#2f2e41"
      />
      <ellipse cx={800.571} cy={657.836} rx={140} ry={7.292} fill="#e6e6e6" />
      <ellipse cx={101.571} cy={657.836} rx={74} ry={3.854} fill="#e6e6e6" />
      <path
        d="M666.954 128.289l-449.868 40.319a8.374 8.374 0 01-9.078-7.585L198.007 49.43a8.374 8.374 0 017.584-9.077L655.46.033a8.374 8.374 0 019.077 7.585l10.002 111.593a8.374 8.374 0 01-7.585 9.078z"
        fill={color}
      />
      <circle cx={269.655} cy={99.253} r={35.13} fill="#fff" />
      <path
        d="M348.374 68.684a5.855 5.855 0 001.045 11.663l274.919-24.639a5.855 5.855 0 10-1.045-11.663zM351.51 103.674a5.855 5.855 0 101.045 11.663l274.919-24.64a5.855 5.855 0 10-1.045-11.662z"
        fill="#fff"
      />
    </svg>
  );
};

SvgHappyAnnouncement.propTypes = {
  color: PropTypes.string
};
SvgHappyAnnouncement.defaultProps = {
  color: "primary"
};
export default SvgHappyAnnouncement;