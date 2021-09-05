import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgInRealLife = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 596.672 728.998"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M6.609 553.002a22.049 22.049 0 00-.45 31.026l135.38 138.258a22 22 0 0031.344.302L590.194 299.12a22.002 22.002 0 00-3.516-34.024l-155.242-102.93a21.871 21.871 0 00-27.378 2.695z"
        fill="#3f3d56"
      />
      <path
        d="M565.73 282.747l-17.307-11.036a16.49 16.49 0 01-23.734 21.652l-112-77a16.48 16.48 0 014.358-29.301l-8.917-5.685a6 6 0 00-7.494.842L23.86 552.487a6 6 0 00.152 8.583l136.836 133.331a6 6 0 008.351-.116l397.542-402.23a6 6 0 00-1.01-9.308z"
        fill="#fff"
      />
      <path
        fill="#e6e6e6"
        d="M130.873 470.728l115.583 108.978 274.923-271.62-139.526-90.815-250.98 253.457z"
      />
      <path
        d="M510.693 375.12a4.097 4.097 0 005.657 0l24.042-24.041a4.006 4.006 0 000-5.657 4.097 4.097 0 00-5.657 0l-24.042 24.041a4.006 4.006 0 000 5.657zM470.193 415.62a4.007 4.007 0 005.657 0l24.042-24.041a4 4 0 10-5.657-5.658l-24.042 24.042a4.006 4.006 0 000 5.658z"
        fill="#3f3d56"
      />
      <circle cx={133.543} cy={564.271} r={27} fill={color} />
      <ellipse cx={286.043} cy={434.771} rx={74.5} ry={40.5} fill="#fff" />
      <path
        d="M190.007 83.658l-.89 8.087-.524 4.786-2.578 23.408s-1.966 3.65-5.48 8.767c-5.846 8.504-16.005 21.06-28.611 27.667-20.2 10.585-28.168-65.436-28.168-65.436s-4.364-29.474 6.36-30.556 7.035 11.614 7.85 32.502 14.822 38.557 14.822 38.557 14.908-20.685 21.459-34.564c3.412-7.23 7.55-10.516 10.725-11.996l.009-.004a13.145 13.145 0 013.299-1.074 7.81 7.81 0 011.727-.144z"
        fill="#ffb8b8"
      />
      <path
        d="M156.828 116.923l32.881 19.116 17.905-31.903-4.044-14.39a24.729 24.729 0 00-32.313 1.585z"
        fill={color}
      />
      <path
        d="M168.861 2.967c-19.034 7.869-27.385 31.372-18.653 52.496L161.302 82.3l8.255-3.412.668-11.92 2.916 10.438 53.055-21.932.607-10.836 2.65 9.49 5.974-2.47-8.71-21.073C216.666 6.278 190.764-6.088 168.86 2.967z"
        fill="#2f2e41"
      />
      <path
        d="M187.784 140.432l3.346 24.31 52.64-23.994-8.448-17.733s-44.41 6.07-47.538 17.417z"
        fill="#a0616a"
      />
      <path
        fill="#ffb8b8"
        d="M172.549 249.504l32.948 31.063 7.938-26.74-24.4-21.192-16.486 16.869zM273.458 372.003l20.05 43.098 20.99-8.676-21.005-42.704-20.035 8.282z"
      />
      <path
        d="M174.111 201.94l22.556 27.54 77.414 146.734s14.935-1.705 22.503-10.42l-6.768-21.778-45.878-121.79s14.183-17.034 6.754-29.602-19.694-28.723-19.694-28.723zM292.032 403.424l-5.724 2.366s-9.12 23.878-14.056 28.152-27.807 32.72-2.772 25.722 35.173-25.71 35.173-25.71 9.604 1.615 18.521-6.54-1.54-17.237-1.54-17.237-12.54-15.247-12.682-15.027-2.316 11.173-16.92 8.274z"
        fill="#2f2e41"
      />
      <circle
        cx={479.317}
        cy={128.465}
        r={23.745}
        transform="rotate(-22.459 113.166 845.402)"
        fill="#ffb8b8"
      />
      <path
        d="M221.923 58.176l-6.615 12.588-.89 1.686 3.78 11.843-37.21 15.381s3.258-6.496 6.09-12.995c.052-.145.11-.303.18-.455.384-.884.72-1.693 1.022-2.422.158-.4.315-.778.45-1.124.222-.572.442-1.121.662-1.67a.036.036 0 00.002-.023 40.294 40.294 0 001.414-4.36l.006-.014a12 12 0 00.249-1.209c.89-5.954-9.732-12.733-9.732-12.733l16.65-19.172c5.01 10.039 16.615 13.33 21.6 14.307 1.456.28 2.342.372 2.342.372z"
        fill="#ffb8b8"
      />
      <path
        d="M339.701 197.162c-12.733 9.732-25.519-18.496-25.519-18.496l-35.68-30.99a97.753 97.753 0 01-19.25-22.728l-16.159-26.37-.69 2.195.004.01-1.947 2.234-24.762-17.69-6.94-4.952-3.155-7.632 11.55-12.595 5.724-2.366s.117-.07.328-.18c2.519-1.366 19.18-9.594 26.972 6.768 3.06 6.421 5.277 11.872 6.863 16.213a136.33 136.33 0 0017.845 33.744c2.723 3.726 5.313 6.87 7.212 8.342 6.577 5.101 41.626 52.053 41.626 52.053s28.712 12.707 15.978 22.44z"
        fill="#ffb8b8"
      />
      <path
        d="M190.808 76.624c.006.12-.092 1.155-2.077 6.054a49.827 49.827 0 002.077-6.054z"
        fill="#d0cde1"
      />
      <path
        d="M242.813 99.252l-.406 1.53-.294 31.489s-12.476 22.572-26.621 26.186c-8.042 1.807-23.12-6.114-24.468 2.018l-5.607-25.767-4.883-6.002c-.57-.703-1.213-1.476-1.923-2.356-6.806-8.357-.65-23.19-.65-23.19l7.01-18.28.01-.004a13.145 13.145 0 013.299-1.074c-.303.729-.638 1.538-1.021 2.422-.071.152-.129.31-.181.455-2.112 5.24.216 5.496 2.039 5.066a9.093 9.093 0 001.743-.62c4.215-1.072 11.482-8.165 16.667-13.727 3.53-3.782 6.103-6.856 6.103-6.856l5.174-11.076.776-1.662c1.457.28 2.343.372 2.343.372l.954-.394s.117-.07.328-.18l-3.011 5.019a17.476 17.476 0 00-.712 16.672z"
        fill={color}
      />
      <path
        d="M202.057 147.937l-11.696 11.213s-87.846 2.009-89.435 30.593 73.595 64.531 73.595 64.531l18.559-19.96-21.373-24.678s74.661 23.874 86.91-11.351-18.073-65.339-18.073-65.339-18.974-5.363-38.487 14.991zM204.976 268.495l-5.826 10.228s20.253 27.375 19.363 33.328-1.093 21.677 9.007 16.385 14.844-26.245 13.432-32.363-1.833-26.053-1.833-26.053.406-31.447-8.575-28.851-22.921 7.61-22.921 7.61zM183.015 9.453a19.559 19.559 0 00-17.27-1.382l-.677.28c-13.047 5.392-18.742 21.57-12.722 36.132l4.37-1.807-1.515-5.665 3.257 4.946 25.927-10.718.293-5.444 1.336 4.77 5.1-2.108q10.9 16.254 4.4 39.702l8.688-3.592.586-10.888 2.673 9.54 16.562-6.846-5.386-22.26c-6.475-15.661-21.064-25.18-35.622-24.66z"
        fill="#2f2e41"
      />
      <path
        d="M281.077 91.874l-50.132 20.724-16.08-38.895 6.592-15.882a28.45 28.45 0 0136.693 6.238z"
        fill={color}
      />
    </svg>
  );
};

SvgInRealLife.propTypes = {
  color: PropTypes.string
};
SvgInRealLife.defaultProps = {
  color: "primary"
};
export default SvgInRealLife;
