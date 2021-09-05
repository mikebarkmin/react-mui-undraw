import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgAddDocument = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 777.805 639.552"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M730.435 594.846c13.359-15.199 76.265-90.01 31.554-102.342-33.58-9.263-37.322 41.699-36.195 75.898-5.377-23.041-15.813-49.957-34.148-38.081-26.424 17.115 23.089 54.991 36.022 64.29.212 1.89.353 2.94.353 2.94s.53-.578 1.476-1.642c.739.517 1.15.795 1.15.795s-.07-.67-.212-1.858zM53.184 636.453c15.3-17.408 87.35-103.092 36.14-117.217-38.461-10.61-42.746 47.76-41.455 86.93-6.159-26.39-18.112-57.219-39.111-43.617-30.265 19.603 26.444 62.984 41.257 73.634.243 2.165.404 3.369.404 3.369s.607-.663 1.69-1.882c.847.593 1.317.91 1.317.91s-.079-.767-.242-2.127zM221.806 51.054a5.006 5.006 0 00-5 5v535a5.006 5.006 0 005 5h431a5.006 5.006 0 005-5v-535a5.006 5.006 0 00-5-5z"
        fill="#e6e6e6"
      />
      <path
        d="M584.305 284.68h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15zM586.83 144.93H391.78c-2.748 0-4.976-3.359-4.976-7.5s2.228-7.5 4.976-7.5H586.83c2.748 0 4.975 3.357 4.975 7.5s-2.227 7.5-4.975 7.5zM586.83 187.93H391.78c-2.748 0-4.976-3.359-4.976-7.5s2.228-7.5 4.976-7.5H586.83c2.748 0 4.975 3.357 4.975 7.5s-2.227 7.5-4.975 7.5zM584.305 333.18h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15zM584.305 381.68h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15zM584.305 430.18h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15zM584.305 478.68h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15zM584.305 527.18h-294a7.5 7.5 0 010-15h294a7.5 7.5 0 010 15z"
        fill="#fff"
      />
      <circle cx={322.305} cy={159.429} r={39.5} fill="#fff" />
      <path
        d="M292.41 297.964l-58.903 31.316-.746-26.096c19.226-3.21 37.517-8.798 54.43-17.895l6.16-15.22a10.318 10.318 0 0117.537-2.678 10.318 10.318 0 01-.909 14.069z"
        fill="#ffb8b8"
      />
      <path
        d="M148.486 478.769a11.574 11.574 0 011.47-9.363l12.939-19.858a22.612 22.612 0 0129.335-7.74c-5.438 9.257-4.68 17.378 1.878 24.434a117.63 117.63 0 00-27.936 19.045 11.574 11.574 0 01-17.686-6.518z"
        fill="#2f2e41"
      />
      <path
        d="M295.093 452.805a22.203 22.203 0 01-18.871 10.779l-85.96.65-3.728-21.622 38.026-11.184-32.062-24.605 35.044-41.008 63.65 59.324a22.203 22.203 0 013.9 27.666z"
        fill="#2f2e41"
      />
      <path
        d="M176.84 600.681h-20.13c-18.076-123.897-36.475-248.142 17.894-294.515l64.122 10.438-8.202 54.43-35.789 41.008z"
        fill="#2f2e41"
      />
      <path
        d="M192.537 638.748a11.574 11.574 0 01-9.363-1.469l-19.859-12.938a22.612 22.612 0 01-7.74-29.335c9.256 5.438 17.376 4.68 24.433-1.879a117.63 117.63 0 0019.046 27.935 11.574 11.574 0 01-6.517 17.686zM264.713 220.054h-95.701c-17.674-25.003-19.748-48.913 0-71.294 0-9.896 12.782-17.918 28.55-17.918 12.352 0 23.303 4.985 27.14 12.353z"
        fill="#2f2e41"
      />
      <path
        d="M224.56 223.403l-37.28-8.947c6.19-12.674 6.7-26.776 3.727-41.754l25.35-.746c.795 18.626 3.198 36.027 8.203 51.447z"
        fill="#ffb8b8"
      />
      <path
        d="M234.805 339.054c-27.138 18.493-46.314.633-60.947-26.923 2.034-16.862-1.259-37.04-7.357-58.966a40.138 40.138 0 0124.506-48.402l32.061 13.421c27.224 22.19 32.582 46.227 22.369 71.579z"
        fill={color}
      />
      <path
        d="M156.71 242.044L126.884 257.7l52.938 31.316 7.366 18.17a9.637 9.637 0 01-5.79 12.73 9.637 9.637 0 01-12.76-8.544l-.746-12.663-67.283-22.204a15.733 15.733 0 01-9.873-9.611 15.733 15.733 0 015.902-18.303l54.105-37.118z"
        fill="#ffb8b8"
      />
      <path
        d="M186.534 245.026c-12.44-5.451-23.75.47-38.026 5.22l-2.237-39.518c14.176-7.556 27.692-9.593 40.263-3.728z"
        fill={color}
      />
      <path
        d="M262.958 220.054H241.85c-13.137-24.235-12.54-67.055-40.777-57.512-18.14-10.766-7.732 31.485-12.243 57.512h-18.357c-4.988-25.43-5.057-50.912.81-71.635a9.655 9.655 0 013.512-7.06 19.952 19.952 0 012.946-2.237c6.486-4.087 10.843-6.414 20.32-6.414a57.204 57.204 0 0115.687 2.157c.664.194 1.32.403 1.954.62.872.3 1.715.627 2.52.977 4.145 1.783 7.404 4.196 8.947 7.216 17.865 21.306 26.984 48.187 35.79 76.376z"
        fill="#2f2e41"
      />
      <circle cx={201.413} cy={167.729} r={23.802} fill="#ffb8b8" />
      <path
        d="M225.555 158.548c-7.16-9.76-25.835 1.882-48.284 10.2v-23.121c18.467-8.13 29.236-10.475 41.483-2.04z"
        fill="#2f2e41"
      />
      <circle cx={644.147} cy={57.659} r={57.659} fill={color} />
      <path
        d="M620.122 53.854a3.805 3.805 0 100 7.61h20.22v20.22a3.805 3.805 0 107.61 0v-20.22h20.22a3.805 3.805 0 000-7.61h-20.22v-20.22a3.805 3.805 0 10-7.61 0v20.22z"
        fill="#fff"
      />
    </svg>
  );
};

SvgAddDocument.propTypes = {
  color: PropTypes.string
};
SvgAddDocument.defaultProps = {
  color: "primary"
};
export default SvgAddDocument;
