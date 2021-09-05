import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMobileFeed = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 582.54 727.778"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M582.54 172.947h-3.998V63.402A63.402 63.402 0 00515.14 0H283.053a63.402 63.402 0 00-63.402 63.402v600.974a63.402 63.402 0 0063.402 63.402H515.14a63.402 63.402 0 0063.402-63.402V250.923h3.998z"
        fill="#3f3d56"
      />
      <path
        d="M517.698 16.495h-30.295a22.495 22.495 0 01-20.827 30.99h-132.96a22.495 22.495 0 01-20.827-30.99h-28.295a47.348 47.348 0 00-47.348 47.348v600.092a47.348 47.348 0 0047.347 47.348h233.205a47.348 47.348 0 0047.348-47.348V63.843a47.348 47.348 0 00-47.348-47.348z"
        fill="#fff"
      />
      <path
        fill="#e6e6e6"
        d="M265.088 128.247h135.604v231.657H265.088zM423.99 378.051h112.706v262.268H423.99zM424.1 128.247h113.004v63.766H424.1zM424.1 209.771h113.004v68.609H424.1zM424.1 296.138h113.004v63.766H424.1z"
      />
      <path fill={color} d="M265.256 378.051H400.86v100.955H265.256z" />
      <path fill="#e6e6e6" d="M265.256 498.576H400.86v141.955H265.256z" />
      <path
        d="M240.127 387.29l18.876 9.585c6.737 3.421 13.238 2.837 15.728-4.297a12.48 12.48 0 00-9.493-16.382l-17.94-3.349-76.829-25.49-46.54-33-17.06 27.18 53.776 29.018zM152.018 705.436l14.441-2.407-1.605-27.278h-15.243l2.407 29.685zM11.857 678.794l13.976 4.359 10.862-25.073-13.608-6.87-11.23 27.584z"
        fill="#ffb8b8"
      />
      <path
        d="M78.286 296.546c27.497-11.695 61.744-4.285 95.19.858.312-6.228 4.085-13.808.133-18.153-4.801-5.279-4.36-10.826-1.47-16.404 7.388-14.265-3.197-29.444-13.885-42.065a23.67 23.67 0 00-19.755-8.291l-19.797 1.414a23.71 23.71 0 00-21.053 16.946c-4.728 6.429-7.258 12.84-5.665 19.218-7.08 4.84-8.27 10.68-5.088 17.265 2.698 4.146 2.67 8.181-.123 12.105a55.891 55.891 0 00-8.31 16.506zM19.64 654.892l17.65 7.22 84.24-110.715 26.476 129.97 17.65-3.209c11.323-112.052 20.556-226.344 9.227-280.4l-65.386-2.808-29.685 94.67-14.441 64.183zM152.812 727.497a12.672 12.672 0 007.856-.835l8.578-3.86c7.194-.37 12.091 1.063 16.097-4.164a10.496 10.496 0 001.225-10.581 10.569 10.569 0 00-8.631-6.28l-11.783-7.425-.619 5.566c-5.385 3.051-11.779 1.733-18.554-1.237l-3.698 12.944a12.672 12.672 0 009.53 15.872zM6.139 700.945a12.672 12.672 0 007.7 1.762l9.368-.866c6.923 1.987 11.09 4.932 16.576 1.29a10.496 10.496 0 004.595-9.61 10.569 10.569 0 00-6.124-8.743l-8.734-10.849-2.392 5.064c-6.084 1.137-11.703-2.186-17.147-7.195l-7.7 11.041a12.672 12.672 0 003.858 18.106z"
        fill="#2f2e41"
      />
      <circle cx={133.565} cy={252.143} r={28.882} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M98.264 313.117l37.708-8.023 4.814-31.289-26.476-5.616-16.046 44.928z"
      />
      <path
        d="M108.694 398.962h67.392l-15.19-38.138c1.104-13.123-4.458-22.774-12.418-31.177l-10.1-25.355c-16.317-10.74-28.618-9.937-41.718 4.011-15.532 21.991-4.78 55.048 12.034 90.659z"
        fill={color}
      />
      <path
        d="M139.181 479.993l1.917 21.082c.684 7.525 4.635 12.721 12.001 11.037a12.48 12.48 0 008.828-16.75l-6.7-16.974-19.255-78.624 3.21-56.962H107.09l4.011 60.974z"
        fill="#ffb8b8"
      />
      <path
        d="M88.577 290.446c3.105-28.136 11.062-52.096 24.87-71.017l2.067-.07v-.51l6.711.285 18.664-.627c-.437.454-.854.91-1.276 1.367l13.608.579 12.837 26.475a85.266 85.266 0 00-37.995-2.157 9.087 9.087 0 00-7.1 5.658 3.38 3.38 0 00.023 2.974c5.395 9.41 5.126 19.743-.357 30.593-1.196 2.369 1.102 5.22 1.822 7.833z"
        fill="#2f2e41"
      />
      <path
        d="M104.683 344.406h36.905l-2.587-24.074a16.7 16.7 0 00-15.853-16 16.7 16.7 0 00-17.522 16.026z"
        fill={color}
      />
    </svg>
  );
};

SvgMobileFeed.propTypes = {
  color: PropTypes.string
};
SvgMobileFeed.defaultProps = {
  color: "primary"
};
export default SvgMobileFeed;
