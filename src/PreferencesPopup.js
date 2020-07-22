import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPreferencesPopup = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 767 496.5"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M77.232 367.65c.933 41.245 5.526 83.559 15.28 125.535.213.943.436 1.872.66 2.815h57.024c-.061-.845-.122-1.788-.183-2.815C146.211 432.5 124.29 63.16 150.5 0c-2.292 5.124-77.688 174.83-73.268 367.65z"
        fill="#e6e6e6"
      />
      <path
        d="M81.511 493.185c.477.943.974 1.886 1.48 2.815h42.779c-.325-.802-.7-1.745-1.136-2.815-7.067-17.709-27.985-70.65-47.402-125.535-20.867-58.98-40.01-120.199-38.398-142.355-.497 4.997-14.935 157.333 42.677 267.89z"
        fill="#e6e6e6"
      />
      <path
        d="M598.6 139.16l-3.59 27.63-2.17 16.77-1.62 12.45-47.58 48.38-13.94 8.97a10.814 10.814 0 11-9.4-19.31l15.29-5.31 32.22-41.85 1.47-8.18L588.5 114c1.96-3.28 3.28 8.68 6 6 .81.9 6.28-9.96 7-9 6.72 8.93-1.43 16.82-2.9 28.16zM606.888 475.725h-14.832V331.453l33.709-.674-18.877 144.946zM678.35 475.725h14.832V331.453l-33.709-.674 18.877 144.946z"
        fill="#a0616a"
      />
      <circle cx={625.091} cy={61.111} r={24.944} fill="#a0616a" />
      <path
        d="M667.563 96.842l-4.045 24.27-47.192 2.697V94.573c9.737-4.186 7.546-10.3 0-17.282l30.338-8.764c1.135 10.046 2.923 19.39 11.284 21.657a16.758 16.758 0 019.206 6.104z"
        fill="#a0616a"
      />
      <path
        d="M699.25 334.824l-48.878 1.685-6.068-37.753-8.427 36.068-49.888 1.348 4.045-66.069 93.71-22.247a216.616 216.616 0 0115.505 86.968zM599.928 495.792l-31.557-.29a10.258 10.258 0 01-12.72-9.958 10.258 10.258 0 015.812-9.244l7.198-3.462 23.395-15.99 16.855 4.72 3.228 14.525a16.585 16.585 0 01-12.21 19.699zM684.874 495.613l-31.558-.29a10.258 10.258 0 01-12.72-9.958 10.258 10.258 0 015.812-9.244l7.199-3.462 23.395-15.99 16.854 4.72 3.228 14.526a16.585 16.585 0 01-12.21 19.698zM614.305 51.883c-9.062 6.293-20.923-2.421-17.672-12.964 2.69-8.723 9.472-17.242 25.761-16.91 33.034.675 37.302 33.744 26.404 46.873 0 0-1.46-20.58-4.83-17.21s-8.765 1.35-8.765 1.35 2.697-12.81-10.112-7.417a58.585 58.585 0 00-10.786 6.278z"
        fill="#2f2e41"
      />
      <path
        d="M686.44 253.25c-27.015 21.902-58.962 29.814-97.08 20.224 9.685-48.792 7.82-100.663 0-154.122a18.762 18.762 0 0110.536-16.863l17.105-8.344c15.182 21.564 29.154 16.064 42.472-4.045l18.873 6.905a13.296 13.296 0 018.727 12.545c-2.574 54.242-4.157 105.826-.633 143.7z"
        fill={color}
      />
      <path
        d="M604.19 191.9l-8.41-1.73-2.94-.61-23.56-4.85-10.93-2.25 18.49-53.96a45.809 45.809 0 0111.14-17.72 45.75 45.75 0 0113.51-9.22v.15z"
        fill={color}
      />
      <path
        d="M692.507 246.508l-7.871 22.372a11.418 11.418 0 009.894 15.174 11.418 11.418 0 0012.265-10.585l1.892-26.961-2.022-74.159-20.9 2.023z"
        fill="#a0616a"
      />
      <path
        d="M719.474 171l-44.495 12.81-.674-88.316a34.027 34.027 0 0130.863 24.744zM156.412 137.326a4.505 4.505 0 00-4.5 4.5v94a4.505 4.505 0 004.5 4.5h365a4.505 4.505 0 004.5-4.5v-94a4.505 4.505 0 00-4.5-4.5z"
        fill={color}
      />
      <path
        d="M521.412 496.326h-365a7.508 7.508 0 01-7.5-7.5v-346a7.508 7.508 0 017.5-7.5h365a7.508 7.508 0 017.5 7.5v346a7.508 7.508 0 01-7.5 7.5zm-365-358a4.505 4.505 0 00-4.5 4.5v346a4.505 4.505 0 004.5 4.5h365a4.505 4.505 0 004.5-4.5v-346a4.505 4.505 0 00-4.5-4.5z"
        fill="#3f3d56"
      />
      <path
        data-name="Path 40"
        d="M273.772 279.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196zM273.772 310.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196zM273.772 341.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196zM273.772 372.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196zM273.772 403.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196zM273.772 434.022a5.947 5.947 0 000 11.893h204.085a5.947 5.947 0 00.196-11.893h-.196z"
        fill="#e6e6e6"
      />
      <path
        d="M227.828 188.822a24 24 0 11-24-24 23.898 23.898 0 0124 24z"
        fill="#fff"
      />
      <path
        data-name="Path 40"
        d="M246.87 169.88a5.947 5.947 0 000 11.892h149.085a5.947 5.947 0 00.195-11.892h-.195zM246.87 195.88a5.947 5.947 0 000 11.892h245.085a5.947 5.947 0 00.195-11.892h-.195z"
        fill="#fff"
      />
      <path
        d="M235.5 296a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9zM235.5 327a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9zM235.5 357.969a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9zM235.5 388.969a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9zM235.5 419.969a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9zM235.5 450.969a11 11 0 1111-11 11.012 11.012 0 01-11 11zm0-20a9 9 0 109 9 9.01 9.01 0 00-9-9z"
        fill="#e6e6e6"
      />
      <circle cx={235.5} cy={285} r={5} fill={color} />
      <circle cx={235.5} cy={347} r={5} fill={color} />
      <circle cx={235.5} cy={378} r={5} fill={color} />
      <path fill="#2f2e41" d="M0 494.5h767v2H0z" />
    </svg>
  );
};

SvgPreferencesPopup.propTypes = {
  color: PropTypes.string
};
SvgPreferencesPopup.defaultProps = {
  color: "primary"
};
export default SvgPreferencesPopup;
