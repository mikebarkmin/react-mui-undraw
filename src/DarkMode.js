import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDarkMode = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 769.001 771.636"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M769.001 0H310.286a400.77 400.77 0 00-5.285 65c0 219.81 178.191 398 398 398a400.7 400.7 0 0066-5.45z"
        fill="#2f2e41"
      />
      <path
        d="M574.85 248.809a57.4 57.4 0 01-20.163-3.64 3 3 0 112.106-5.617 52.393 52.393 0 0051.263-8.531c-22.038.234-43.595-10.18-54.32-26.893-6.894-10.743-9.148-23.384-6.52-36.558a65.225 65.225 0 0112.09-26.277 52.051 52.051 0 00-36.024 54.65 3 3 0 11-5.971.592 58.044 58.044 0 0149.792-63.138 3 3 0 012.55 5.076C554.31 154.06 545 179.402 558.787 200.888c10.878 16.95 34.283 26.644 56.928 23.58a3 3 0 012.642 4.968 58.387 58.387 0 01-43.507 19.373z"
        fill={color}
      />
      <path
        d="M527.001 250a22 22 0 1122-22 22.025 22.025 0 01-22 22zm0-38a16 16 0 1016 16 16.018 16.018 0 00-16-16z"
        fill={color}
      />
      <path
        d="M8.69 567.078A10.276 10.276 0 01.42 554.027l7.788-26.48 11.835 2.218.509 26.967a10.276 10.276 0 01-11.86 10.346z"
        fill="#9f616a"
      />
      <path
        fill="#2f2e41"
        d="M76.996 736.132l-14.793-2.219 3.698-144.235-20.71 62.132-11.095 87.281-14.054-3.698-2.959-90.979 16.273-107.252 81.363 18.492-37.723 180.478z"
      />
      <path
        d="M70.205 771.636a10.873 10.873 0 01-10.873-10.873q0-.533.052-1.064l2.297-23.354a3.428 3.428 0 011.784-2.678c4.36-2.352 8.845-1.782 13.434 1.288a3.407 3.407 0 011.48 2.429l2.623 22.098a10.873 10.873 0 01-10.797 12.154zM9.82 769.898a9.794 9.794 0 01-4.754-14.662l15.78-23.457c5.689-4.082 9.12-2.094 10.454 5.534l3.19-7.993 2.404 2.622a7.647 7.647 0 01.404 9.854l-16.368 24.91a9.794 9.794 0 01-11.11 3.192z"
        fill="#2f2e41"
      />
      <circle cx={109.542} cy={375.915} r={22.19} fill="#9f616a" />
      <path
        d="M123.595 416.596L85.872 409.2c4.86-10.364 8.75-13.87 4.438-25.15h30.327c-2.675 11.683-.09 22.648 2.958 32.546z"
        fill="#9f616a"
      />
      <path
        d="M119.157 566.009l-88.76-25.149c17.78-39.13 21.503-82.09 16.232-127.504a8.217 8.217 0 017.207-9.116q.15-.017.3-.03c11.578-.953 23.648-2.177 36.174-3.886l14.054 9.615 16.273-3.698c5.221 2.53 10.48 4.636 15.227 6.734a19.038 19.038 0 0110.35 23.414c-14.462 43.677-24.143 86.94-27.057 129.62z"
        fill="#e6e6e6"
      />
      <path
        d="M22.261 532.724l-17.012-2.22L45.55 414.38c2.05-5.907 7.134-9.104 13.323-9.988l5.918.74-4.438 68.788zM155.525 510.524a13.484 13.484 0 01-13.487-8.271l-16.224-39.058 13.314-48.078 3.52 2.24q.509.323 1.004.663a31.653 31.653 0 0113.002 31.471l-3.472 20.361 14.323 30.753a13.484 13.484 0 01-11.98 9.92z"
        fill="#e6e6e6"
      />
      <path
        d="M111.248 343.027a23.564 23.564 0 0110.766 3.17c.755.439.406 2.022 1.103 2.539.878.65 2.785.255 3.563 1.017a23.615 23.615 0 017.022 19.026l-1.238 12.311-2.921-3.194a30.448 30.448 0 00-20.305-9.97q-.497-.033-.996-.052l2.247-3.933-3.905 3.906a38.03 38.03 0 00-5.321.433l2.988-5.23-5.734 5.734a15.331 15.331 0 00-10.713 8.738l-.637 1.411-.713-11.745a23.674 23.674 0 0123.154-24.182q.82-.018 1.64.02z"
        fill="#2f2e41"
      />
      <ellipse cx={131.877} cy={380.205} rx={1.782} ry={4.233} fill="#9f616a" />
      <ellipse cx={87.319} cy={378.868} rx={1.782} ry={4.233} fill="#9f616a" />
      <path
        d="M174.034 435.42a10.276 10.276 0 017.134 13.706L171.16 474.85l-11.604-3.216 1.782-26.913a10.276 10.276 0 0112.696-9.302z"
        fill="#9f616a"
      />
      <path
        fill="#e6e6e6"
        d="M160.579 509.055l-18.492-11.835 15.533-31.806 19.231 7.397-9.615 28.107-6.657 8.137z"
      />
      <path
        d="M173.001 409.101V284h-2v125.101a5 5 0 102 0zm-1 7.899a3 3 0 113-3 3.003 3.003 0 01-3 3z"
        fill="#3f3d56"
      />
      <path
        d="M170.435 164.57a4.314 4.314 0 01-4.314-4.315v-12.941a4.314 4.314 0 018.627 0v12.941a4.314 4.314 0 01-4.313 4.314zM170.435 263.787a4.314 4.314 0 01-4.314-4.313v-12.942a4.314 4.314 0 118.627 0v12.942a4.314 4.314 0 01-4.313 4.313zM200.939 177.203a4.314 4.314 0 01-3.05-7.364l9.15-9.15a4.314 4.314 0 016.1 6.1l-9.15 9.15a4.3 4.3 0 01-3.05 1.264zM130.78 247.362a4.314 4.314 0 01-3.05-7.364l9.15-9.15a4.314 4.314 0 016.1 6.1l-9.15 9.151a4.3 4.3 0 01-3.05 1.263zM226.514 207.708h-12.941a4.314 4.314 0 010-8.628h12.941a4.314 4.314 0 110 8.628zM127.296 207.708h-12.941a4.314 4.314 0 110-8.628h12.941a4.314 4.314 0 010 8.628zM210.09 247.362a4.3 4.3 0 01-3.05-1.263l-9.152-9.15a4.314 4.314 0 116.101-6.101l9.15 9.15a4.314 4.314 0 01-3.05 7.365zM139.93 177.203a4.3 4.3 0 01-3.05-1.263l-9.15-9.15a4.314 4.314 0 016.1-6.102l9.15 9.151a4.314 4.314 0 01-3.05 7.364zM170.435 229.277a25.883 25.883 0 1125.883-25.883 25.912 25.912 0 01-25.883 25.883zm0-43.139a17.255 17.255 0 1017.255 17.256 17.275 17.275 0 00-17.255-17.256z"
        fill={color}
      />
    </svg>
  );
};

SvgDarkMode.propTypes = {
  color: PropTypes.string
};
SvgDarkMode.defaultProps = {
  color: "primary"
};
export default SvgDarkMode;
