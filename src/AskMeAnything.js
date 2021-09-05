import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgAskMeAnything = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1116 787.445"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill={color}
        d="M867.476 509.927L108.575 611.833v-499.94h900.371l-141.47 398.034z"
      />
      <path
        d="M584.537 259.357H176.912v-92.315h407.625zM179.31 256.96h402.829v-87.52h-402.83z"
        fill="#3f3d56"
      />
      <path fill="#cfcce0" d="M209.282 198.214h45.558v45.558h-45.558z" />
      <path
        d="M248.846 237.777H200.89v-47.956h47.956zm-45.558-2.398h43.16v-43.16h-43.16zM324.376 199.413h213.403v2.398H324.376zM324.376 216.197h213.403v2.398H324.376zM324.376 232.982h213.403v2.398H324.376zM584.537 520.717H176.912v-92.315h407.625zm-405.227-2.398h402.829v-87.52h-402.83z"
        fill="#3f3d56"
      />
      <path fill="#cfcce0" d="M209.282 459.573h45.558v45.558h-45.558z" />
      <path
        d="M248.846 499.137H200.89V451.18h47.956zm-45.558-2.398h43.16v-43.16h-43.16zM324.376 460.772h213.403v2.398H324.376zM324.376 477.556h213.403v2.398H324.376zM324.376 494.341h213.403v2.398H324.376zM730.802 390.037H323.177v-92.315h407.625zm-405.227-2.398h402.83v-87.52h-402.83z"
        fill="#3f3d56"
      />
      <path fill="#cfcce0" d="M698.432 374.451h-45.558v-45.558h45.558z" />
      <path
        d="M706.824 368.457h-47.956V320.5h47.956zm-45.558-2.398h43.16V322.9h-43.16zM369.934 330.092h213.403v2.398H369.934zM369.934 346.877h213.403v2.398H369.934zM369.934 363.661h213.403v2.398H369.934z"
        fill="#3f3d56"
      />
      <circle cx={646.977} cy={213.065} r={19.084} fill="#cfcce0" />
      <circle cx={674.552} cy={478.021} r={19.084} fill="#cfcce0" />
      <circle cx={247.745} cy={343.745} r={19.084} fill="#cfcce0" />
      <path
        d="M980.465 74.04c-13.252-22.392-39.471-23.435-39.471-23.435s-25.55-3.267-41.939 30.837c-15.276 31.787-36.359 62.48-3.394 69.92l5.955-18.533 3.687 19.913a128.986 128.986 0 0014.105.241c35.303-1.14 68.924.334 67.841-12.334-1.439-16.841 5.968-45.062-6.784-66.608zM859.556 710.412l-3.352 16.76-4.19 14.667s-36.455 42.74-7.962 44.835 40.227-11.732 40.227-11.732v-20.114l8.38 5.867 11.733-4.61V706.64zM1051.47 673.118l18.018 51.121s-1.676 38.97 12.99 38.97 31.846-43.16 29.75-49.864-16.76-30.17-16.76-30.17l18.856-.419 1.676-13.828-38.97-30.17z"
        fill="#2f2e41"
      />
      <path
        d="M820.168 227.694s-15.085-10.894 0-36.036 37.293-54.892 37.293-54.892 10.895-42.74 23.047-37.294-8.8 46.093-8.8 46.093l-22.627 47.77z"
        fill="#ffb9b9"
      />
      <circle cx={940.428} cy={101.149} r={33.522} fill="#ffb9b9" />
      <path
        d="M920.734 124.195l12.152 41.483 41.064-18.437s-18.856-18.437-11.732-31.846z"
        fill="#ffb9b9"
      />
      <path
        fill="#ffb9b9"
        d="M934.981 158.974l-3.352 16.761-23.047 23.466 18.438 28.493 49.864-75.005-5.672-8.425-36.231 14.71z"
      />
      <path
        d="M927.02 153.946s39.388-18.018 46.93-13.409 9.219 6.285 9.219 6.285-45.156 21.715-50.024 21.333-6.125-14.21-6.125-14.21zM918.639 205.905s-9.219-10.476 0-18.437l-21.37 11.314-6.705 42.321 8.38 25.98 46.094-50.283 18.856-22.628-10.476-15.923s-18.018 26.399-34.779 27.656z"
        fill="#cfcce0"
      />
      <path
        d="M1084.992 642.949c-22.627 51.959-134.926 89.671-134.926 89.671l-51.121-225.017L909 721.725 764.02 698.68s5.866-111.46 42.74-245.968c28.083-102.435 60.294-160.395 74.063-182.213 4.308-6.83 6.81-10.12 6.81-10.12q-.529-1.508-1.007-3.008a127.14 127.14 0 01-4.022-57.331l24.303-10.895s12.571-7.543 16.761-13.828 9.638-7.123 9.638-7.123c2.933 11.313-31.846 37.712-31.846 37.712v52.797s3.352-1.676 11.314-31.008 43.997-62.435 53.635-73.748 26.818-7.962 26.818-7.962l-21.027 128.18-.763 4.651 1.345 10.074 27.987 209.915z"
        fill="#2f2e41"
      />
      <path
        d="M885.955 201.296h-3.352s-9.638-5.448-13.828-2.095-11.733 2.095-11.733 2.095v-23.047s-32.265 5.448-38.55 44.417-48.188 53.635-48.188 53.635 73.33 56.15 93.862 48.188 40.645-102.661 21.789-123.193z"
        fill="#2f2e41"
      />
      <path
        d="M880.822 270.498c4.308-6.83 6.81-10.12 6.81-10.12q-.529-1.508-1.007-3.008l12.11 6.15 73.464 10.644-.763 4.651 1.345 10.074-75.303-19.083z"
        fill="#cfcce0"
      />
      <path
        d="M959.284 303.957s7.543 78.777 56.15 80.453l-5.866-126.127-22.209 8.8z"
        fill="#2f2e41"
      />
      <path
        d="M959.284 303.957s7.543 78.777 56.15 80.453l-5.866-126.127-22.209 8.8z"
        opacity={0.1}
      />
      <path
        d="M1005.377 277.14l-19.694 38.969s-14.247 55.311-34.78 49.864 12.99-57.595 12.99-57.595l10.895-31.239z"
        fill="#ffb9b9"
      />
      <path
        d="M986.521 150.175l6.705-4.61s27.655-2.095 28.074 28.494 5.448 139.117 0 155.459 0 54.892 0 54.892l-10.056 4.61-10.476-103.5s-3.771-3.771-9.219.838S953 316.947 953 316.947z"
        fill="#2f2e41"
      />
      <path
        fill="#cfcce0"
        d="M903.345 264.778l-87.996 173.896 16.761 24.722 71.235-198.618z"
      />
      <path
        fill="#cfcce0"
        d="M899.045 264.698l7.206 194.759-25.564 15.447 18.358-210.206z"
      />
      <circle cx={899.154} cy={268.13} r={5.866} fill="#cfcce0" />
      <circle cx={944.203} cy={50.718} r={18.958} fill="#2f2e41" />
      <path
        d="M923.25 45.73a18.958 18.958 0 0116.962-18.852 18.958 18.958 0 100 37.702 18.958 18.958 0 01-16.963-18.85z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M974.606 71.882l-25.903-13.568-35.771 5.551-7.401 32.687 18.423-.709 5.147-12.009v11.811l8.501-.327 4.934-19.119 3.083 20.353 30.22-.617-1.233-24.053z"
      />
      <path
        d="M177.12 476.405l.608-1.315c-.25-.115-25.239-11.949-44.158-43.659-17.472-29.28-33.197-81.994-8.896-166.833 10.154-35.448 14.487-67.122 12.88-94.142-1.314-22.078-6.584-41.204-15.665-56.845-17.953-30.925-45.058-37.86-45.33-37.927l-.344 1.407c.266.065 26.816 6.886 44.445 37.286 20.226 34.878 21.108 85.286 2.622 149.822-10.795 37.686-14.695 72.283-11.592 102.832 2.486 24.473 9.445 46.417 20.684 65.224 19.157 32.055 44.492 44.032 44.746 44.15z"
        fill="#cfcce0"
      />
      <circle cx={96.768} cy={94.903} r={56.059} fill="#cfcce0" />
      <path
        d="M4.192 101.328a76.382 76.382 0 1197.136 47.255 76.468 76.468 0 01-97.136-47.255zm1.37-.473A74.933 74.933 0 1051.92 5.56 75.018 75.018 0 005.56 100.855z"
        fill="#cfcce0"
      />
      <circle cx={85.301} cy={233.398} r={46.488} fill="#cfcce0" />
      <circle cx={160.384} cy={378.158} r={46.488} fill="#cfcce0" />
      <path fill="#3f3d56" d="M675 785.445h355v2H675z" />
    </svg>
  );
};

SvgAskMeAnything.propTypes = {
  color: PropTypes.string
};
SvgAskMeAnything.defaultProps = {
  color: "primary"
};
export default SvgAskMeAnything;
