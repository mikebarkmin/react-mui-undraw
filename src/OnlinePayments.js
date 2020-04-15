import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlinePayments = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888.08 534.97"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M58.235 391.7l-5.333-21.034a273.135 273.135 0 00-28.978-10.396l-.674 9.775-2.73-10.77C8.308 355.789 0 354.253 0 354.253s11.222 42.674 34.76 75.299l27.425 4.817-21.306 3.072a110.502 110.502 0 009.53 10.1c34.24 31.782 72.377 46.364 85.182 32.57s-4.573-50.742-38.813-82.524c-10.615-9.853-23.95-17.76-37.297-23.983z"
        fill="#e6e6e6"
      />
      <path
        d="M108.955 368.858l6.308-20.763a273.133 273.133 0 00-19.433-23.879l-5.63 8.02 3.23-10.63c-8.651-9.298-14.97-14.907-14.97-14.907s-12.45 42.331-9.165 82.426l20.987 18.3-19.827-8.383a110.504 110.504 0 002.938 13.572c12.883 44.906 37.992 77.102 56.084 71.911s22.314-45.8 9.431-90.706c-3.994-13.921-11.322-27.582-19.531-39.809z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M.08 487.65h888v2.241H.08z" />
      <path
        d="M140.378 255.613s-6.915 83.148-8.4 100.966a126.71 126.71 0 01-7.424 32.665s-2.97 5.939-2.97 11.878v75.723s-5.939 0-4.454 5.939 2.97 16.332 2.97 16.332h22.271s-1.485-4.454 2.97-5.939 0-13.363 0-13.363l23.756-89.086 35.634-74.238s20.787 66.814 25.242 74.238c0 0 16.332 83.147 19.302 90.571s4.454 7.424 2.97 10.394-1.486 5.939 0 7.423 29.694 0 29.694 0l-7.423-105.418-13.363-126.206-68.3-20.786z"
        fill="#2f2e41"
      />
      <path
        d="M136.432 487.238s-7.424-26.726-19.302-5.939-11.878 28.21-11.878 28.21-19.302 28.211 7.424 25.242 20.787-16.333 20.787-16.333 10.393-5.939 10.393-10.393-7.424-20.787-7.424-20.787zM256.698 484.269s7.424-26.726 19.302-5.94 11.879 28.211 11.879 28.211 19.302 28.21-7.424 25.241-20.787-16.332-20.787-16.332-10.393-5.94-10.393-10.394 7.423-20.786 7.423-20.786z"
        fill="#2f2e41"
      />
      <path
        d="M186.914 55.17s2.97 19.303-5.939 23.757 19.302 20.787 26.726 20.787 20.787-14.848 20.787-14.848-7.424-22.272-5.94-26.726z"
        fill="#a0616a"
      />
      <circle cx={203.247} cy={38.838} r={31.18} fill="#a0616a" />
      <path
        d="M264.122 102.683l-37.118-22.488s-21.119 23.973-43.967-2.753l-39.181 10.393 5.939 100.965s-8.909 40.088-5.939 47.512-7.424 10.394-4.454 11.878 0 11.879 0 11.879 57.906 29.695 121.75 7.423l-5.938-19.302a15.58 15.58 0 00-2.97-14.847s5.94-8.909-1.485-16.333c0 0 2.97-13.363-4.454-19.302l-1.485-20.786 4.455-10.394z"
        fill="#cfcce0"
      />
      <path
        d="M187.29 24.36s-3.718 8.045 11.152 4.827c0 0 5.576 3.218 5.576-1.609 0 0 7.434 8.045 9.293 3.218s5.576 1.609 5.576 1.609l3.717-8.045 3.717 4.827h13.01s3.718-32.179-40.89-28.96-22.663 54.201-22.663 54.201.36-9.152 4.077-4.325 7.435-25.743 7.435-25.743z"
        fill="#2f2e41"
      />
      <path
        d="M277.485 162.074l1.485 31.18s5.939 57.906-5.94 83.147v13.363s-2.969 34.15-17.816 32.665 4.454-48.997 4.454-48.997l-2.97-65.33-2.97-37.12z"
        fill="#a0616a"
      />
      <path
        d="M247.79 104.168l14.811-2.406a72.313 72.313 0 0120.823 38.04c4.455 23.757 5.94 28.21 5.94 28.21l-35.635 8.91-19.302-37.12z"
        fill="#cfcce0"
      />
      <path fill="#fff" d="M184.017 87.223h234.311v116.395H184.017z" />
      <path
        d="M209.602 94.223c-6.02-3.62-13.278-3.344-16.037-3.067 1.05 2.565 4.203 9.109 10.223 12.73 6.034 3.63 13.283 3.345 16.038 3.07-1.05-2.564-4.203-9.11-10.224-12.733zM237.889 166.056h-37.624a8.465 8.465 0 100 16.93h37.624a8.465 8.465 0 100-16.93z"
        fill={color}
      />
      <path
        d="M408.261 76.7H197.318a18.686 18.686 0 00-18.686 18.686V198.16a18.686 18.686 0 0018.686 18.686H408.26a18.686 18.686 0 0018.686-18.686V95.386A18.686 18.686 0 00408.261 76.7zM192.1 89.446c.416-.075 10.294-1.756 18.473 3.166 8.179 4.92 11.32 14.435 11.45 14.838l.331 1.026-1.061.188a28.175 28.175 0 01-4.578.336 27.256 27.256 0 01-13.896-3.502c-8.179-4.92-11.32-14.435-11.45-14.837l-.33-1.026zm45.79 95.421h-37.624a10.346 10.346 0 010-20.693h37.624a10.346 10.346 0 110 20.693zm171.187-1.88a11.32 11.32 0 01-11.287 11.286H369.57a11.32 11.32 0 01-11.287-11.287v-16.93a11.32 11.32 0 0111.287-11.287h28.218a11.32 11.32 0 0111.287 11.287z"
        fill={color}
      />
      <path
        d="M378.507 179.694h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.703h-12.228a1.41 1.41 0 110-2.822h12.228a1.41 1.41 0 010 2.822zM401.081 179.694h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.703h-12.228a1.41 1.41 0 110-2.822h12.228a1.41 1.41 0 010 2.822zM378.507 171.229h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.703h-12.228a1.41 1.41 0 110-2.822h12.228a1.41 1.41 0 110 2.822zM401.081 171.229h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.703h-12.228a1.41 1.41 0 110-2.822h12.228a1.41 1.41 0 110 2.822zM378.507 162.764h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.702h-12.228a1.41 1.41 0 110-2.821h12.228a1.41 1.41 0 010 2.821zM401.081 162.764h-12.228a3.292 3.292 0 000 6.584h12.228a3.292 3.292 0 000-6.584zm0 4.702h-12.228a1.41 1.41 0 110-2.821h12.228a1.41 1.41 0 010 2.821z"
        fill={color}
      />
      <path
        d="M121.584 144.257s-13.362 56.42 2.97 56.42 54.936-63.844 54.936-63.844 40.09-20.787 23.757-28.21-37.12 11.877-37.12 11.877l-23.985 33.3-1.256-16.967z"
        fill="#a0616a"
      />
      <path
        d="M152.765 96.744l-8.909-8.909s-17.817 10.394-19.302 20.787-8.909 43.058-8.909 43.058l27.469 2.228 8.908-13.363z"
        fill="#cfcce0"
      />
      <path
        d="M574.783 75.623c-1.119-3.303-15.146-14.53-6.55-16.417l7.048 9.399 32.407-32.406 3.26 3.259zM574.783 185.817c-1.119-3.303-15.146-14.53-6.55-16.417l7.048 9.398 32.407-32.406 3.26 3.26zM574.783 297.585c-1.119-3.303-15.146-14.53-6.55-16.417l7.048 9.399 32.407-32.406 3.26 3.259z"
        fill={color}
      />
      <circle cx={672.941} cy={62.223} r={10} fill="#3f3d56" />
      <path fill="#3f3d56" d="M710.441 61.223h161v2h-161z" />
      <circle cx={672.941} cy={172.417} r={10} fill="#3f3d56" />
      <path fill="#3f3d56" d="M710.441 171.417h161v2h-161z" />
      <circle cx={672.941} cy={284.185} r={10} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M710.441 283.185h161v2h-161zM600.04 312.485h-50v-51h34v2h-32v47h46v-23h2v25zM600.04 200.485h-50v-51h34v2h-32v47h46v-23h2v25zM600.04 86.485h-50v-51h34v2h-32v47h46v-23h2v25z"
      />
    </svg>
  );
};

SvgOnlinePayments.propTypes = {
  color: PropTypes.string
};
SvgOnlinePayments.defaultProps = {
  color: "primary"
};
const MemoSvgOnlinePayments = React.memo(SvgOnlinePayments);
export default MemoSvgOnlinePayments;
