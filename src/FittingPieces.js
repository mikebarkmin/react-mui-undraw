import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const FittingPieces = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a4fbd1e2-edc2-431c-b11d-f5395f4f8a37"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="836.27"
      height="674.20539"
      viewBox="0 0 836.27 674.20539"
    >
      <title>fitting_pieces</title>
      <circle cx="123" cy="428" r="123" fill="#f2f2f2" />
      <circle cx="143" cy="410" r="123" fill={color} />
      <rect x="58" y="72" width="108" height="108" fill="#f2f2f2" />
      <rect x="73" y="56" width="108" height="108" fill={color} />
      <rect
        x="171.85751"
        y="664.67556"
        width="158.41249"
        height="1.8747"
        fill="#3f3d56"
      />
      <path
        d="M415.865,254.8973h-142v-142h142Zm-140-2h138v-138h-138Z"
        transform="translate(-181.865 -112.8973)"
        fill="#3f3d56"
      />
      <rect x="301" y="275" width="28" height="28" fill="#f2f2f2" />
      <rect x="307" y="268" width="28" height="28" fill={color} />
      <path
        d="M543.865,398.8973h-46v-46h46Zm-44-2h42v-42h-42Z"
        transform="translate(-181.865 -112.8973)"
        fill="#3f3d56"
      />
      <path
        d="M432.865,779.8973c-84.36426,0-153-68.63574-153-153s68.63574-153,153-153,153,68.63575,153,153S517.22926,779.8973,432.865,779.8973Zm0-304c-83.26172,0-151,67.73828-151,151s67.73828,151,151,151,151-67.73828,151-151S516.12672,475.8973,432.865,475.8973Z"
        transform="translate(-181.865 -112.8973)"
        fill="#3f3d56"
      />
      <rect
        x="528.85751"
        y="669.67556"
        width="158.41249"
        height="1.8747"
        fill="#3f3d56"
      />
      <rect
        x="677.85751"
        y="499.67556"
        width="158.41249"
        height="1.8747"
        fill="#3f3d56"
      />
      <path
        d="M809.17884,171.36015l-.00008,0c-30.18128,8.176-47.29252,41.9566-38.219,75.45119l11.528,42.55524,13.088-3.54547,3.306-17.81969,2.37689,16.28022,84.1249-22.789,3.00548-16.19972,2.16084,14.80019,9.47155-2.56579-9.05153-33.4135C880.52871,185.57046,843.90959,161.95178,809.17884,171.36015Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <path
        d="M747.365,692.3973l13,46-2,17,38-8s-16-27-14-41Z"
        transform="translate(-181.865 -112.8973)"
        fill="#ffb8b8"
      />
      <polygon
        points="737.5 414.5 727.5 468.5 760.5 463.5 762 407 737.5 414.5"
        fill="#ffb8b8"
      />
      <circle cx="638.5" cy="118.5" r="36" fill="#ffb8b8" />
      <polygon
        points="627 145 625 165 609 174 651 267 683 190 662 174 660 136 627 145"
        fill="#ffb8b8"
      />
      <path
        d="M838.365,357.3973l-40.95518-74.18146S764.365,285.3973,756.365,292.3973l16,102-5,13s-41,42-33,133,8,162,8,162,29,34,89,0v-181l85-7v22s88-22,90-55l-22.63818-39.31894a38.93708,38.93708,0,0,0-44.86638-17.88643L864.365,446.3973l-8-30,8-22s21-16,21-37,6-46,6-46l-38.899-17.94683Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <path
        d="M909.365,349.3973l16,39s17,20,20,42l5,26s12,46-7,44-14-46-14-46l-3-13-17-28L884.28047,365.717Z"
        transform="translate(-181.865 -112.8973)"
        fill="#ffb8b8"
      />
      <path
        d="M912.365,572.3973s28.61453,2.807,34.30727-10.09651L975.365,585.3973s51.96539,13.91669,23,26c-26.99951,11.26325-53.9997-.7619-54,2,0,0-8-7-17-2s-36,0-35-8S897.365,566.3973,912.365,572.3973Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <path
        d="M759.365,743.3973s28.61453,2.807,34.30727-10.09651L822.365,756.3973s52.16589,14.40906,23,26c-26.97193,10.719-53.98621-.59723-54,2,0,0-8-7-17-2s-36,0-35-8S744.365,737.3973,759.365,743.3973Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <polygon
        points="696.5 194.5 709.5 198.5 737.5 240.5 686.5 274.5 696.5 194.5"
        fill="#2f2e41"
      />
      <path
        d="M829.24,183.858c-7.40081-5.57865-16.70584-7.86134-25.74-5.41405l-1.0729.29064c-20.68632,5.60381-32.385,28.86531-26.12984,51.95607l0,.00009,6.93144-1.87769-1.18876-8.8238,3.94944,8.07594,41.11-11.13647,1.49148-8.14157,1.09168,7.44181,8.08751-2.19086q13.27661,26.57984-1.036,60.63345l13.77687-3.73208,2.98288-16.28313,2.18344,14.8836,26.26208-7.11426-3.81639-34.55894C871.39573,203.03344,851.2623,185.884,829.24,183.858Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <circle cx="656" cy="49" r="18" fill="#2f2e41" />
      <path
        d="M836.865,171.8973a17.98986,17.98986,0,0,1-6.33332-34.83185,17.98911,17.98911,0,1,0,8.66663,34.6637A18.06953,18.06953,0,0,1,836.865,171.8973Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <ellipse cx="661.5" cy="118.5" rx="4.5" ry="6.5" fill="#ffb8b8" />
      <path
        d="M756.865,581.8973c-24.75452-3.68489-54.74231-2.82755-87,0q20.17327-36.98952,0-65a360.88535,360.88535,0,0,0,87,0C744.47633,537.52338,745.56861,559.28178,756.865,581.8973Z"
        transform="translate(-181.865 -112.8973)"
        fill={color}
      />
      <path
        d="M745.365,352.3973l-3,40s-14,22-17,69l-1,29s-21,41-4,40,16-39,16-39l30-87v-42Z"
        transform="translate(-181.865 -112.8973)"
        fill="#ffb8b8"
      />
      <path
        d="M763.365,293.3973h-7s-11,7-20,37-10,31-10,31l47,11Z"
        transform="translate(-181.865 -112.8973)"
        fill="#2f2e41"
      />
      <rect x="518" y="424" width="28" height="28" fill="#d0cde1" />
    </svg>
  );
};

FittingPieces.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

FittingPieces.defaultProps = {
  color: "primary",
  style: {}
};

export default FittingPieces;
