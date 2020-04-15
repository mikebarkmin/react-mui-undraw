import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMedicalCare = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 618.106"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M741.957 95.043l-68.503.667c-3.22-15.85-14.038-57.442-4.295-68.787a16.674 16.674 0 0117.564-14.92c10.617-16.62 28.302-14.125 40.255-3.745 12.03 4.15 16.565 11.525 14.979 21.532 8.908 7.798 10.552 17.285 6.553 28.085z"
        fill="#2f2e41"
      />
      <path
        d="M735.362 137.242L685.94 130.4l-9.885-14.446c13.616-9.032 18.434-21.647 12.166-38.778l34.215-.76c-1.603 15.255 3.442 27.066 17.488 34.215z"
        fill="#ffb9b9"
      />
      <path
        d="M674.255 583.02l-1.89 25.835a8.224 8.224 0 008.7 8.809l13.27-.804a4.195 4.195 0 003.815-5.204l-7.366-29.463zM717.216 582.193l-7.366 29.463a4.195 4.195 0 003.815 5.204l13.27.804a8.224 8.224 0 008.7-8.81l-1.89-25.835z"
        fill="#e6e6e6"
      />
      <path
        fill={color}
        d="M734.602 586.606l-17.908-1.797-17.828-190.57-6.738 189.956-17.594-.63-29.653-263.08h113.291l-23.57 266.121z"
      />
      <circle cx={707.229} cy={55.125} r={34.216} fill="#ffb9b9" />
      <path
        d="M774.9 326.568l-138.383 1.52c20.537-78.18 32.822-150.804 11.405-200.73l34.216-16.728c16.498 17.208 34.871 15.434 54.745-1.52l32.695 8.363c-5.6 65.471-3.09 135.591 5.322 209.095z"
        fill={color}
      />
      <path
        d="M598.5 245.972l85.919 34.215 19.21 5.65a6.645 6.645 0 008.321-4.763 6.645 6.645 0 00-3.783-7.7l-19.946-6.113-60.068-34.976L640.7 199.21l-26.232-14.066z"
        fill="#ffb9b9"
      />
      <path
        d="M599.26 183.623c16.347 6.378 29.35 17.262 39.538 31.935l31.935-46.381-22.81-41.82z"
        fill={color}
      />
      <path
        d="M745.792 49.58c-13.887-3.578-27.54-4.07-40.813.469-8.454 4.095-18.608 3.717-29.9.344V16.256l60.96 1.625z"
        fill="#2f2e41"
      />
      <path
        d="M684.134 206.106A10.145 10.145 0 00674 216.24l4 83.732a10.145 10.145 0 0010.134 10.134h45.732A10.145 10.145 0 00744 299.972l4-83.732a10.145 10.145 0 00-10.134-10.134z"
        fill="#3f3d56"
      />
      <path
        d="M813.89 239.646L739 269.466l-5.65 2.25c-.18.07-.36.13-.55.19l-18.93 5.57c-2.42.71-5.77-2.55-7.73-4.8a6.085 6.085 0 01-.16-7.93 6.746 6.746 0 01.86-.83 5.589 5.589 0 012.5-1.1l18.91-3.72a6.336 6.336 0 001.93-.72l8.82-5.14 45.79-26.66a6.218 6.218 0 002.69-7.58l-8.74-23.05a6.211 6.211 0 012.87-7.68l14.48-7.76a6.206 6.206 0 018.94 3.9l12.57 47.88a6.22 6.22 0 01-3.71 7.36z"
        fill="#ffb9b9"
      />
      <path
        d="M818.24 175.26c-16.347 6.377-29.35 17.26-39.538 31.934l-31.935-46.381 22.81-43.34z"
        fill={color}
      />
      <path
        d="M730 85.579c-14.968 6.226-30.663 5.973-47 0 4.754-8.114-2.352-14.47-6-22.66l61-1.813c-4.665 7.116-11.548 15.523-8 24.473z"
        fill="#fff"
      />
      <path
        fill="#fff"
        d="M737.354 62.46l-.708-.707 1-1 5.974-6.972.76.65-6 7-1.026 1.029zM672.18 58.99l.64-.769 6 5-.64.77zM728.575 84.838l10.502-16.5.844.538-10.503 16.499zM673.078 68.874l.844-.537 10.5 16.5-.844.538zM741 251.821v18.117l-6.307 2.512c-.2.078-.402.145-.614.212l-21.13 6.217c-2.701.793-6.44-2.846-8.628-5.358a6.792 6.792 0 01-.18-8.852 7.53 7.53 0 01.96-.926 6.238 6.238 0 012.791-1.228L729 258.363a7.072 7.072 0 002.155-.804z"
      />
      <path
        d="M750.14 187.202h-3.614c0-51.11-10.523-86.729-20.779-86.729l-.903-3.614c9.197 0 15.06 14.824 18.36 27.26 4.473 16.86 6.936 39.263 6.936 63.083zM667.025 174.554h-3.614c0-46.81 10.596-75.888 26.2-75.888l-.904 3.614c-10.793 0-21.682 22.348-21.682 72.274z"
        fill="#3f3d56"
      />
      <circle cx={748.333} cy={188.105} r={9.034} fill="#3f3d56" />
      <path
        d="M652.57 196.236h-3.614c0-12.952 7.295-23.489 16.262-23.489v3.614c-6.974 0-12.648 8.916-12.648 19.875z"
        fill="#3f3d56"
      />
      <path
        d="M681.48 196.236h-3.614c0-10.96-5.674-19.875-12.648-19.875v-3.614c8.967 0 16.261 10.537 16.261 23.49z"
        fill="#3f3d56"
      />
      <circle cx={679.673} cy={197.14} r={3.614} fill="#3f3d56" />
      <circle cx={650.763} cy={197.14} r={3.614} fill="#3f3d56" />
      <path
        d="M215.27 75.697l-63.465 10.748a6.424 6.424 0 01-7.27-4.613c-4.586-16.55-14.173-38.138-4.865-48.976a17.805 17.805 0 0118.756-15.933c11.337-17.747 30.222-15.083 42.986-3.999 12.845 4.433 17.688 12.307 15.994 22.993 5.55 4.857 8.459 10.328 9.072 16.334a23.59 23.59 0 01-6.453 18.35z"
        fill="#2f2e41"
      />
      <path
        d="M205.403 125.663l-49.2-2.895c4.822-11.067 6.748-21.723 4.823-31.835h36.66c-.084 7.764 3.78 21.194 7.717 34.73z"
        fill="#9f616a"
      />
      <path
        d="M146.18 580.289l-2.018 27.588a8.782 8.782 0 009.29 9.407l14.17-.859a4.48 4.48 0 004.074-5.557l-7.866-31.462zM192.055 579.406l-7.866 31.462a4.48 4.48 0 004.074 5.557l14.17.859a8.782 8.782 0 009.29-9.407l-2.018-27.588z"
        fill="#e6e6e6"
      />
      <path
        fill={color}
        d="M210.62 584.119l-19.122-1.919-19.038-203.499-7.195 202.843-18.787-.673-31.665-280.927H235.79l-25.17 284.175z"
      />
      <circle cx={180.323} cy={66.107} r={36.537} fill="#9f616a" />
      <path
        d="M221.502 48.653c-14.83-2.583-29.409-2.937-43.582.339-9.028 2.955-19.87 2.683-31.927.248V24.6l65.094 1.174z"
        fill="#2f2e41"
      />
      <path
        d="M204.639 95.423c-15.984 6.649-32.744 6.379-50.189 0 5.076-8.664-2.512-15.45-6.407-24.197l65.138-1.936c-4.98 7.599-12.331 16.576-8.542 26.133z"
        fill="#fff"
      />
      <path
        fill="#fff"
        d="M142.917 67.005l.641-.77 6.407 5.34-.64.769zM203.147 94.65l11.215-17.62.844.538-11.215 17.618zM143.883 77.568l.843-.537 11.213 17.62-.844.537z"
      />
      <path
        d="M110.861 232.746L82.885 215.38l23.859-69.879a32.965 32.965 0 0114.41-17.116l8.037-4.653.699 70.495z"
        fill={color}
      />
      <path
        d="M231.79 266.684l-4.14-35.452c-.221-18.713 2.962-36.805 10.554-53.475l3.858-52.095-42.447-17.364c-.13.865-.24 1.73-.365 2.594l-19.894 9.947-19.402-4.41.108-6.202-38.589 17.365c12.761 59.328 5.801 120.938-16.144 193.709l50.837 13.9.423-24.41 45.307-3.236c.466 7.92.841 15.699 1.059 23.305 25.565 9.412 26.443 9.256 49.736-4.22-9.276-19.503-16.62-39.797-20.902-59.956z"
        fill={color}
      />
      <path
        fill={color}
        d="M297.051 224.063l-26.047-8.682-41.664-48.503 12.722-41.215 57.883 81.036-2.894 17.364z"
      />
      <path
        d="M215.42 261.613a7.246 7.246 0 008.654 5.46l22.111-5.008-3.196-14.113-22.11 5.006a7.237 7.237 0 00-5.46 8.655z"
        fill="#e6e6e6"
      />
      <path
        d="M235.31 245.287l12.54 23.153c21.095-5.883 39.376-24.43 56.919-46.306l-4.824-15.435-29.906 7.717z"
        fill={color}
      />
      <path
        fill="#e6e6e6"
        d="M71.79 172.661l24.076 4.299 55.031 78.247-29.235-6.879-49.872-75.667z"
      />
      <path
        d="M67.52 171.703a2.048 2.048 0 00-1.68 3.173l51.439 78.046a2.041 2.041 0 001.239.865l23.933 5.631a2.044 2.044 0 002.14-3.166L88.114 175.95a2.032 2.032 0 00-1.313-.836l-18.895-3.375a2.217 2.217 0 00-.386-.035z"
        fill="#3f3d56"
      />
      <path
        d="M99.608 227.505l1.43 14.4 22.56-2.239a7.235 7.235 0 00-1.43-14.4z"
        fill="#e6e6e6"
      />
      <path
        d="M79.99 225.837a18.61 18.61 0 0018.588 18.485h3.71l2.7-22.505-22.36-8.05z"
        fill={color}
      />
      <path
        fill="#fff"
        d="M211.399 71.78l-.707-.707 1.068-1.068 6.381-7.447.759.65-6.407 7.475-1.094 1.097z"
      />
      <path fill="#3f3d56" d="M0 616.106h888v2H0z" />
      <path
        d="M339 615.106h210V360.39c0-13.488-13.285-24.46-29.614-24.46H368.614c-16.33 0-29.614 10.972-29.614 24.46z"
        fill="#e6e6e6"
      />
      <path
        d="M355 604.573h178V388.671c0-11.433-11.26-20.734-25.102-20.734H380.102c-13.842 0-25.102 9.301-25.102 20.734z"
        fill="#fff"
      />
      <path
        d="M337.414 316.106c-5.19 0-9.414 3.488-9.414 7.775v22.444c0 4.287 4.223 7.775 9.414 7.775h213.173c5.19 0 9.413-3.488 9.413-7.775v-22.444c0-4.287-4.223-7.775-9.413-7.775zM381.18 576.889a9.224 9.224 0 00-9.196 9.196 9.224 9.224 0 009.197 9.197h17.214v-18.393z"
        fill="#3f3d56"
      />
      <path
        d="M414.194 576.889h-16.742v18.393h16.742a9.224 9.224 0 009.197-9.197 9.224 9.224 0 00-9.197-9.196z"
        fill={color}
      />
      <path
        d="M420.196 579.14a9.144 9.144 0 012.252 6.002 9.224 9.224 0 01-9.197 9.197h-15.8v.943h16.743a9.224 9.224 0 009.197-9.197 9.177 9.177 0 00-3.195-6.944z"
        opacity={0.2}
      />
      <path
        d="M458.861 438.363a9.224 9.224 0 00-13-.384 9.224 9.224 0 00-.384 13l11.808 12.526 13.384-12.616z"
        fill="#3f3d56"
      />
      <path
        d="M481.507 462.385l-11.485-12.183-13.384 12.617 11.484 12.183a9.224 9.224 0 0013 .384 9.224 9.224 0 00.385-13z"
        fill={color}
      />
      <path
        d="M483.984 468.297a9.144 9.144 0 01-2.822 5.755 9.224 9.224 0 01-13-.383l-10.838-11.497-.686.647 11.484 12.183a9.224 9.224 0 0013 .384 9.177 9.177 0 002.862-7.089z"
        opacity={0.2}
      />
      <path
        d="M409.861 467.363a9.224 9.224 0 00-13-.384 9.224 9.224 0 00-.384 13l11.808 12.526 13.384-12.616z"
        fill="#3f3d56"
      />
      <path
        d="M432.507 491.385l-11.485-12.183-13.384 12.617 11.484 12.183a9.224 9.224 0 0013 .384 9.224 9.224 0 00.385-13z"
        fill={color}
      />
      <path
        d="M434.984 497.297a9.144 9.144 0 01-2.822 5.755 9.224 9.224 0 01-13-.383l-10.838-11.497-.686.647 11.484 12.183a9.224 9.224 0 0013 .384 9.177 9.177 0 002.862-7.089z"
        opacity={0.2}
      />
      <path
        d="M458.861 494.363a9.224 9.224 0 00-13-.384 9.224 9.224 0 00-.384 13l11.808 12.526 13.384-12.616z"
        fill="#3f3d56"
      />
      <path
        d="M481.507 518.385l-11.485-12.183-13.384 12.617 11.484 12.183a9.224 9.224 0 0013 .384 9.224 9.224 0 00.385-13z"
        fill={color}
      />
      <path
        d="M483.984 524.297a9.144 9.144 0 01-2.822 5.755 9.224 9.224 0 01-13-.383l-10.838-11.497-.686.647 11.484 12.183a9.224 9.224 0 0013 .384 9.177 9.177 0 002.862-7.089z"
        opacity={0.2}
      />
      <path
        d="M488.754 551.83a9.224 9.224 0 00.226-13.005 9.224 9.224 0 00-13.004-.225l-12.382 11.959 12.778 13.23z"
        fill="#3f3d56"
      />
      <path
        d="M465.008 574.765l12.043-11.632-12.779-13.23-12.042 11.632a9.224 9.224 0 00-.226 13.004 9.224 9.224 0 0013.004.226z"
        fill={color}
      />
      <path
        d="M459.127 577.314a9.144 9.144 0 01-5.79-2.752 9.224 9.224 0 01.227-13.004l11.364-10.976-.656-.678-12.042 11.631a9.224 9.224 0 00-.226 13.004 9.177 9.177 0 007.123 2.775z"
        opacity={0.2}
      />
      <path
        d="M422.754 522.83a9.224 9.224 0 00.226-13.005 9.224 9.224 0 00-13.004-.225l-12.382 11.959 12.778 13.23z"
        fill="#3f3d56"
      />
      <path
        d="M399.008 545.765l12.043-11.632-12.779-13.23-12.042 11.632a9.224 9.224 0 00-.226 13.004 9.224 9.224 0 0013.004.226z"
        fill={color}
      />
      <path
        d="M393.127 548.314a9.144 9.144 0 01-5.79-2.752 9.224 9.224 0 01.227-13.004l11.364-10.976-.656-.678-12.042 11.631a9.224 9.224 0 00-.226 13.004 9.177 9.177 0 007.123 2.775z"
        opacity={0.2}
      />
      <path
        d="M516.754 487.83a9.224 9.224 0 00.226-13.005 9.224 9.224 0 00-13.004-.225l-12.382 11.959 12.778 13.23z"
        fill="#3f3d56"
      />
      <path
        d="M493.008 510.765l12.043-11.632-12.779-13.23-12.042 11.632a9.224 9.224 0 00-.226 13.004 9.224 9.224 0 0013.004.226z"
        fill={color}
      />
      <path
        d="M487.127 513.314a9.144 9.144 0 01-5.79-2.752 9.224 9.224 0 01.227-13.004l11.364-10.976-.656-.678-12.042 11.631a9.224 9.224 0 00-.226 13.004 9.177 9.177 0 007.123 2.775z"
        opacity={0.2}
      />
      <path
        d="M495.861 560.363a9.224 9.224 0 00-13-.384 9.224 9.224 0 00-.384 13l11.808 12.526 13.384-12.616z"
        fill="#3f3d56"
      />
      <path
        d="M518.507 584.385l-11.485-12.183-13.384 12.617 11.484 12.183a9.224 9.224 0 0013 .384 9.224 9.224 0 00.385-13z"
        fill={color}
      />
      <path
        d="M520.984 590.297a9.144 9.144 0 01-2.822 5.755 9.224 9.224 0 01-13-.383l-10.838-11.497-.686.647 11.484 12.183a9.224 9.224 0 0013 .384 9.177 9.177 0 002.862-7.089z"
        opacity={0.2}
      />
      <path
        d="M430.861 559.363a9.224 9.224 0 00-13-.384 9.224 9.224 0 00-.384 13l11.808 12.526 13.384-12.616z"
        fill="#3f3d56"
      />
      <path
        d="M453.507 583.385l-11.485-12.183-13.384 12.617 11.484 12.183a9.224 9.224 0 0013 .384 9.224 9.224 0 00.385-13z"
        fill={color}
      />
      <path
        d="M455.984 589.297a9.144 9.144 0 01-2.822 5.755 9.224 9.224 0 01-13-.383l-10.838-11.497-.686.647 11.484 12.183a9.224 9.224 0 0013 .384 9.177 9.177 0 002.862-7.089z"
        opacity={0.2}
      />
      <path
        d="M449.158 526.37a13.263 13.263 0 01-10.61 12.997 13.395 13.395 0 01-5.306 0 13.266 13.266 0 010-25.996 13.397 13.397 0 015.305 0 13.263 13.263 0 0110.61 12.998z"
        fill={color}
      />
      <path
        d="M438.547 513.371v25.996a13.395 13.395 0 01-5.305 0v-25.996a13.397 13.397 0 015.305 0z"
        opacity={0.2}
      />
      <path
        d="M455.158 473.37a13.263 13.263 0 01-10.61 12.997 13.395 13.395 0 01-5.306 0 13.266 13.266 0 010-25.996 13.397 13.397 0 015.305 0 13.263 13.263 0 0110.61 12.998z"
        fill={color}
      />
      <path
        d="M444.547 460.371v25.996a13.395 13.395 0 01-5.305 0v-25.996a13.397 13.397 0 015.305 0z"
        opacity={0.2}
      />
      <path
        d="M455.158 549.37a13.263 13.263 0 01-10.61 12.997 13.395 13.395 0 01-5.306 0 13.266 13.266 0 010-25.996 13.397 13.397 0 015.305 0 13.263 13.263 0 0110.61 12.998z"
        fill={color}
      />
      <path
        d="M444.547 536.371v25.996a13.395 13.395 0 01-5.305 0v-25.996a13.397 13.397 0 015.305 0z"
        opacity={0.2}
      />
      <path
        d="M488.158 586.37a13.263 13.263 0 01-10.61 12.997 13.395 13.395 0 01-5.306 0 13.266 13.266 0 010-25.996 13.397 13.397 0 015.305 0 13.263 13.263 0 0110.61 12.998z"
        fill={color}
      />
      <path
        d="M477.547 573.371v25.996a13.395 13.395 0 01-5.305 0v-25.996a13.397 13.397 0 015.305 0z"
        opacity={0.2}
      />
      <path
        d="M517.31 518.293a13.263 13.263 0 011.995 16.66 13.395 13.395 0 01-3.682 3.82 13.266 13.266 0 01-18.717-18.04 13.397 13.397 0 013.682-3.82 13.263 13.263 0 0116.722 1.38z"
        fill={color}
      />
      <path
        d="M500.588 516.913l18.717 18.04a13.395 13.395 0 01-3.682 3.82l-18.717-18.04a13.397 13.397 0 013.682-3.82z"
        opacity={0.2}
      />
      <path
        d="M521.31 547.293a13.263 13.263 0 011.995 16.66 13.395 13.395 0 01-3.682 3.82 13.266 13.266 0 01-18.717-18.04 13.397 13.397 0 013.682-3.82 13.263 13.263 0 0116.722 1.38z"
        fill={color}
      />
      <path
        d="M504.588 545.913l18.717 18.04a13.395 13.395 0 01-3.682 3.82l-18.717-18.04a13.397 13.397 0 013.682-3.82z"
        opacity={0.2}
      />
      <path
        d="M402.31 554.293a13.263 13.263 0 011.995 16.66 13.395 13.395 0 01-3.682 3.82 13.266 13.266 0 01-18.717-18.04 13.397 13.397 0 013.682-3.82 13.263 13.263 0 0116.722 1.38z"
        fill={color}
      />
      <path
        d="M385.588 552.913l18.717 18.04a13.395 13.395 0 01-3.682 3.82l-18.717-18.04a13.397 13.397 0 013.682-3.82zM354.5 316.106h5v37h-5zM383.5 316.106h5v37h-5zM412.5 316.106h5v37h-5zM441.5 316.106h5v37h-5zM470.5 316.106h5v37h-5zM499.5 316.106h5v37h-5zM528.5 316.106h5v37h-5z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgMedicalCare.propTypes = {
  color: PropTypes.string
};
SvgMedicalCare.defaultProps = {
  color: "primary"
};
const MemoSvgMedicalCare = React.memo(SvgMedicalCare);
export default MemoSvgMedicalCare;