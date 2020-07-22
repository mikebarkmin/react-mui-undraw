import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgABetterWorld = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 840.5 735.953"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M0 728.492h840.5v2H0z" />
      <path
        d="M798.037 251.193v193.18h-502.38v-193.18a249.99 249.99 0 0150.23-150.72A251.155 251.155 0 01532.347.413q7.185-.42 14.5-.41c2.77 0 5.54.04 8.28.14a250.354 250.354 0 01169.33 73.43c1.36 1.36 2.69 2.73 4.03 4.11a253.053 253.053 0 0119.32 22.79 250.056 250.056 0 0150.23 150.72z"
        fill="#e6e6e6"
      />
      <path
        d="M555.13.145v444.226h-22.788V.414q7.194-.42 14.502-.414c2.776 0 5.542.041 8.287.145z"
        fill="#fff"
      />
      <path
        d="M747.805 100.475H345.882a251.944 251.944 0 0119.319-22.788h363.286a251.944 251.944 0 0119.318 22.788zM581.747 165.733h178.05v278.64h-178.05z"
        fill="#fff"
      />
      <path
        fill="#e6e6e6"
        d="M612.793 216.656h26.932v26.932h-26.932zM656.184 216.656h26.932v26.932h-26.932zM699.574 216.656h26.932v26.932h-26.932zM613.541 278.001h26.932v26.932h-26.932zM656.932 278.001h26.932v26.932h-26.932zM700.322 278.001h26.932v26.932h-26.932zM614.289 339.347h26.932v26.932h-26.932zM657.68 339.347h26.932v26.932H657.68zM701.071 339.347h26.932v26.932h-26.932zM615.037 400.692h26.932v26.932h-26.932zM658.428 400.692h26.932v26.932h-26.932zM701.819 400.692h26.932v26.932h-26.932z"
      />
      <path
        fill="#e6e6e6"
        d="M615.037 400.692h26.932v26.932h-26.932zM658.428 400.692h26.932v26.932h-26.932zM701.819 400.692h26.932v26.932h-26.932z"
      />
      <circle cx={355.372} cy={345.962} r={37.119} fill={color} />
      <path
        fill="#fff"
        d="M357.287 444.373h-3.62l1.13-61.3.68-37.11h.1l.65 37.11.36 21.11.04 2.05.66 38.14z"
      />
      <path fill="#fff" d="M361.378 401.66l.855 1.625-6.136 3.23-.855-1.625z" />
      <circle cx={464.502} cy={291.166} r={56.446} fill={color} />
      <path
        fill="#fff"
        d="M467.487 444.373h-5.65l1.17-63.61.61-33.16 1.04-56.44h.16l.98 56.43.56 32.11.06 3.12 1.07 61.55z"
      />
      <path fill="#fff" d="M473.634 375.866l1.3 2.47-9.33 4.912-1.301-2.47z" />
      <path
        d="M348.079 237.267l9.535-7.627c-7.407-.817-10.451 3.223-11.697 6.42-5.787-2.403-12.087.747-12.087.747l19.079 6.926a14.437 14.437 0 00-4.83-6.466zM448.554 175.117l9.536-7.627c-7.408-.817-10.452 3.223-11.697 6.42-5.788-2.402-12.088.747-12.088.747l19.08 6.926a14.437 14.437 0 00-4.83-6.466zM410.229 234.16l9.535-7.627c-7.408-.818-10.451 3.222-11.697 6.42-5.787-2.403-12.087.746-12.087.746l19.079 6.927a14.437 14.437 0 00-4.83-6.467z"
        fill={color}
      />
      <path
        d="M145.795 288.49s22.962 4.918 26.39 2.632a6.45 6.45 0 016.857 0c19.426-7.427-.178-30.08-.75-39.22s-11.998-21.712-11.998-21.712z"
        fill="#2f2e41"
      />
      <path
        d="M124.976 267.127c0 12.529-25.057 40.091-25.057 40.091l47.608 73.918s18.793-75.17 7.517-78.929 1.253-21.298 1.253-21.298zM69.85 391.159l33.827 21.298-8.77 13.782s-7.517-6.264-7.517-7.517-50.113-25.057-55.125-28.816 11.276-20.045 11.276-20.045zM204.712 389.49s-33.381 21.715-34.634 24.22 8.77 31.321 15.177 30.22-.143-21.45-.143-21.45 30.069-23.804 40.091-32.574-2.505-28.815-2.505-28.815zM217.932 674.792l7.561 27.432 17.977-.749-9.252-34.199-16.286 7.516zM106.183 669.291l6.264 27.562h12.529v-27.562h-18.793z"
        fill="#a0616a"
      />
      <circle cx={147.527} cy={260.863} r={27.563} fill="#a0616a" />
      <path
        d="M107.353 298.45s-3.676 5.01-17.457 8.768-52.62 40.091-53.872 66.401 32.574 18.793 32.574 18.793 31.32 5.011 31.32 6.264-1.252 8.77-1.252 8.77C78.621 432.503 76.115 475.1 76.115 475.1S63.586 661.774 66.092 676.808s62.642 6.264 62.642 6.264l2.506-167.881s25.057 150.341 30.068 162.87 76.424-3.76 76.424-3.76-58.884-249.315-58.884-265.602 18.793-20.046 18.793-20.046 20.045 3.759 21.298-3.758 8.77-18.793 8.77-18.793-15.034-32.574-28.815-50.114-43.85-13.78-43.85-13.78l-16.287 56.377zM222.684 693.817s-2.584 27.877-2.505 31.838c.07 3.535 25.07 4.508 27.575.75s11.276 0 11.276 2.505 25.057.736 25.057.736c32.574-15.034-4.663-19.182-4.663-19.182s-22.186-10.474-32.209-14.232-5.992-1.498-5.992-1.498c-2.506 8.77-18.539-.917-18.539-.917z"
        fill="#2f2e41"
      />
      <path
        d="M102.425 720.657c-1.253 1.253 2.505 17.54 20.045 15.034s12.528-21.298 12.528-23.804-2.505-21.298-3.758-26.31-22.551 3.76-22.551 3.76-5.012 30.067-6.264 31.32zM169.693 235.332a93.126 93.126 0 00-2.857 11.998c-.571 4.571-11.427 5.714-11.427 5.714 1.143 0 1.143-6.856 1.143-6.856 0 4-6.285 7.999-6.285 7.999a67.492 67.492 0 00-15.427 12.57c-7.999 8.57 2.285 9.712 2.285 9.712-.77 13.774-28.968 19.357-28.968 19.357C75.59 284.399 100.4 245.3 100.4 245.3c24.568-45.709 44.439-25.68 44.439-25.68 21.426-3.143 24.854 15.712 24.854 15.712z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgABetterWorld.propTypes = {
  color: PropTypes.string
};
SvgABetterWorld.defaultProps = {
  color: "primary"
};
export default SvgABetterWorld;
