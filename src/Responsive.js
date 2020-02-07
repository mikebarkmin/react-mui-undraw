import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Responsive = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a622e68e-7a65-46e9-94a9-d455de519afc"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="971.44"
      height="502"
      viewBox="0 0 971.44 502"
    >
      <defs>
        <linearGradient
          id="341b0e5e-a21f-44db-b85f-76180f33f0d3"
          x1="599.5"
          y1="668.05"
          x2="599.5"
          y2="199"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="9c19d1ba-0c1d-4cca-8c15-e6f3831a5e67"
          x1="485.72"
          y1="258.88"
          x2="485.72"
          y2="71.12"
          xlink:href="#341b0e5e-a21f-44db-b85f-76180f33f0d3"
        />
        <linearGradient
          id="fe76f7c7-2126-4e48-920d-21143a22d340"
          x1="132"
          y1="515"
          x2="303"
          y2="515"
          xlink:href="#341b0e5e-a21f-44db-b85f-76180f33f0d3"
        />
        <linearGradient
          id="2cf89a04-5a05-413b-983a-d2bc296cbb5e"
          x1="933"
          y1="568.28"
          x2="1031"
          y2="568.28"
          xlink:href="#341b0e5e-a21f-44db-b85f-76180f33f0d3"
        />
      </defs>
      <title>responsive</title>
      <g opacity="0.7">
        <path
          d="M852.69,199H346.31A16.37,16.37,0,0,0,330,215.42V563.94a16.37,16.37,0,0,0,16.31,16.42H520.47v60.16h-7.94a8.3,8.3,0,0,0-8.27,8.33v12.07h16.21v7.14H678.53v-7.14h16.21V648.85a8.3,8.3,0,0,0-8.27-8.33H679V640h-.51V580.36H852.69A16.37,16.37,0,0,0,869,563.94V215.42A16.37,16.37,0,0,0,852.69,199Z"
          transform="translate(-114.28 -199)"
          fill="url(#341b0e5e-a21f-44db-b85f-76180f33f0d3)"
        />
      </g>
      <rect x="407.72" y="371" width="156" height="92" fill="#bdbdbd" />
      <g opacity="0.1">
        <path
          d="M525.07,579H675.24c1.81-7.87,3.26-13,3.26-13h-157S523.11,571.11,525.07,579Z"
          transform="translate(-114.28 -199)"
        />
      </g>
      <path
        d="M235.82,3h499.8a16.1,16.1,0,0,1,16.1,16.1V327a0,0,0,0,1,0,0h-532a0,0,0,0,1,0,0V19.1A16.1,16.1,0,0,1,235.82,3Z"
        fill="#535461"
      />
      <path
        d="M849.9,576H350.1A16.1,16.1,0,0,1,334,559.9V526H866v33.9A16.1,16.1,0,0,1,849.9,576Z"
        transform="translate(-114.28 -199)"
        fill="#bdbdbd"
      />
      <circle cx="485.72" cy="352" r="9" fill="#535461" />
      <path
        d="M399.89,436H571.55a8.17,8.17,0,0,1,8.17,8.17V456a0,0,0,0,1,0,0h-188a0,0,0,0,1,0,0V444.17A8.17,8.17,0,0,1,399.89,436Z"
        fill="#bdbdbd"
      />
      <g opacity="0.5">
        <rect
          x="320.72"
          y="71.12"
          width="330"
          height="187.76"
          rx="4.5"
          ry="4.5"
          fill="url(#9c19d1ba-0c1d-4cca-8c15-e6f3831a5e67)"
        />
      </g>
      <rect
        x="324.95"
        y="72.5"
        width="321.54"
        height="183.96"
        rx="4.5"
        ry="4.5"
        fill="#fff"
      />
      <g opacity="0.5">
        <rect
          x="414.52"
          y="98.91"
          width="35.44"
          height="31.9"
          rx="4.5"
          ry="4.5"
          fill={color}
        />
      </g>
      <rect
        x="460.59"
        y="98.91"
        width="95.69"
        height="3.54"
        rx="1.77"
        ry="1.77"
        fill="#e0e0e0"
      />
      <rect
        x="460.59"
        y="109.55"
        width="79.54"
        height="3.54"
        rx="1.77"
        ry="1.77"
        fill="#e0e0e0"
      />
      <g opacity="0.5">
        <rect
          x="414.52"
          y="148.53"
          width="35.44"
          height="31.9"
          rx="4.5"
          ry="4.5"
          fill={color}
        />
      </g>
      <rect
        x="460.59"
        y="148.53"
        width="95.69"
        height="3.54"
        rx="1.77"
        ry="1.77"
        fill="#e0e0e0"
      />
      <rect
        x="460.59"
        y="159.16"
        width="95.69"
        height="3.54"
        rx="1.77"
        ry="1.77"
        fill="#e0e0e0"
      />
      <g opacity="0.5">
        <rect
          x="414.52"
          y="198.15"
          width="35.44"
          height="31.9"
          rx="4.5"
          ry="4.5"
          fill={color}
        />
      </g>
      <rect
        x="460.59"
        y="198.15"
        width="95.69"
        height="3.54"
        rx="1.77"
        ry="1.77"
        fill="#e0e0e0"
      />
      <rect
        x="460.59"
        y="208.78"
        width="96.33"
        height="3.54"
        rx="1.59"
        ry="1.59"
        fill="#e0e0e0"
      />
      <line
        x1="485.72"
        y1="42"
        x2="485.72"
        y2="20"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="485.72"
        y1="79"
        x2="485.72"
        y2="50.13"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="485.72" cy="79" r="4" fill={color} />
      <circle
        cx="485.72"
        cy="46"
        r="4"
        fill="none"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <line
        x1="485.72"
        y1="42"
        x2="485.72"
        y2="20"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="485.72"
        y1="79"
        x2="485.72"
        y2="50.13"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="485.72" cy="79" r="4" fill={color} />
      <circle
        cx="485.72"
        cy="46"
        r="4"
        fill="none"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <line
        x1="485.72"
        y1="279"
        x2="485.72"
        y2="310"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="485.72"
        y1="251"
        x2="485.72"
        y2="279.87"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="485.72" cy="251" r="4" fill={color} />
      <line
        x1="305.72"
        y1="168.5"
        x2="274.22"
        y2="168.5"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="333.22"
        y1="168.5"
        x2="304.35"
        y2="168.5"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="333.22" cy="168.5" r="4" fill={color} />
      <g opacity="0.1">
        <rect x="408.22" y="435.5" width="156" height="3" />
      </g>
      <g opacity="0.7">
        <path
          d="M293.48,566.06H221.08l1-8.14c20.46-18.37,33.69-67.31,33.69-67.31a6.78,6.78,0,0,0-.87.18c-12,2.42-20.54,7.35-26.51,13.28l2.54-21.66c37.8-8.14,52.79-58.14,52.79-58.14-24.12,5.35-39.16,13.63-48.5,21.49l3.72-31.82c25.56,8.77,52-37.82,52-37.82l-1-.21.5-.32-.76.27c-28.25-6.09-43.35,10.06-48.25,16.77l.37-3.12q-1.12,3-2.18,5.88h0l0,.08q-3,8.13-5.49,16.06l0,0h0q-2.17,6.77-4.06,13.4l0-.06s-1.17-28.46-31.18-35.95c0,0,3.15,62.07,26.93,51.91h0c-2.2,9-4,17.66-5.56,26.07h0q-1.49,8.21-2.6,16l-.14.16.14-.12-.06.41v0h0q-1,7.07-1.7,13.78c.46-8.62-1.11-33.52-30.45-56.92,0,0-39,68.54,27.5,82,.15.13.3.26.44.38l-.1-.31.6.13.27-3.52a369.39,369.39,0,0,0,.23,44.1h0c.07,1,.14,2,.21,2.95H141.37c-27.94,57.79,15.52,89.46,15.52,89.46h120C323.49,596.66,293.48,566.06,293.48,566.06Zm-78-65.68h0v0Z"
          transform="translate(-114.28 -199)"
          fill="url(#fe76f7c7-2126-4e48-920d-21143a22d340)"
        />
      </g>
      <path
        d="M217,588s-19-83,23-190"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M143,563H290s29,37-16,92H158S116,617,143,563Z"
        transform="translate(-114.28 -199)"
        fill={color}
      />
      <path
        d="M237.89,403.5s14.61-26,49.61-18c0,0-28.93,49.26-55,33.13Z"
        transform="translate(-114.28 -199)"
        fill="#4db6ac"
      />
      <path
        d="M228.63,431.09S227.5,404.5,198.5,397.5c0,0,3,58,26,48.5Z"
        transform="translate(-114.28 -199)"
        fill="#4db6ac"
      />
      <path
        d="M219.15,470.36s5.35-27.86,61.35-39.86c0,0-17.86,57.62-63.93,55.31Z"
        transform="translate(-114.28 -199)"
        fill="#4db6ac"
      />
      <path
        d="M214.61,501.63s5.89-29.13-29.11-56.13c0,0-38,64.67,27.48,76.83Z"
        transform="translate(-114.28 -199)"
        fill="#4db6ac"
      />
      <path
        d="M213.56,541.67S209.5,500.5,253.5,492.5c0,0-16.07,57.49-40,67.74Z"
        transform="translate(-114.28 -199)"
        fill="#4db6ac"
      />
      <path
        d="M233,419s38-29,54-34"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        opacity="0.3"
      />
      <path
        d="M216.5,485.5s46-49,64-55"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        opacity="0.3"
      />
      <path
        d="M198.5,397.5s28,38,26,48"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        opacity="0.3"
      />
      <path
        d="M185.5,445.5s15,68,27,77"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        opacity="0.3"
      />
      <path
        d="M213.5,560.5s24-66,40-68"
        transform="translate(-114.28 -199)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        opacity="0.3"
      />
      <g opacity="0.1">
        <path
          d="M290,563H143c-.33.67-.65,1.34-1,2H285s28.29,36.11-14.4,90H274C319,600,290,563,290,563Z"
          transform="translate(-114.28 -199)"
        />
      </g>
      <rect y="455.6" width="971.44" height="32.93" fill="#e0e0e0" />
      <rect x="41.16" y="488.53" width="889.11" height="13.47" fill="#e0e0e0" />
      <rect x="41.16" y="488.53" width="889.11" height="4.49" opacity="0.1" />
      <line
        x1="690.22"
        y1="168.5"
        x2="696.22"
        y2="168.5"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="637.22"
        y1="168.5"
        x2="682.1"
        y2="168.5"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="637.22" cy="168.5" r="4" fill={color} />
      <circle
        cx="686.22"
        cy="168.5"
        r="4"
        fill="none"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <g opacity="0.7">
        <path
          d="M1027,643.88l.1-.15q.31-.48.61-1l.11-.19q.29-.49.55-1l.09-.17c.2-.39.39-.78.56-1.19h0a23.79,23.79,0,0,0,.94-2.51l.1-.33c.09-.31.18-.62.26-.93l.1-.44q.1-.42.18-.85c0-.16.06-.32.09-.48s.09-.56.13-.85,0-.33.06-.49.06-.61.08-.92c0-.14,0-.29,0-.43,0-.45,0-.91,0-1.36V548h-13.85V507.52h-17V548H988.39V489.86h-17V548H965V481.55h-17V548H933V630.6c0,13.48,11.21,24.4,25,24.4H1006a25.19,25.19,0,0,0,20.24-10.06l0,0Q1026.61,644.41,1027,643.88Z"
          transform="translate(-114.28 -199)"
          fill="url(#2cf89a04-5a05-413b-983a-d2bc296cbb5e)"
        />
      </g>
      <rect x="835.72" y="321" width="16" height="100" fill="#535461" />
      <rect x="835.72" y="288" width="16" height="33" fill="#3ad29f" />
      <rect x="857.72" y="329" width="16" height="100" fill="#535461" />
      <rect x="857.72" y="296" width="16" height="33" fill="#4d8af0" />
      <rect x="884.72" y="346" width="16" height="100" fill="#535461" />
      <rect x="884.72" y="313" width="16" height="33" fill="#f55f44" />
      <path
        d="M821.72,352h92a0,0,0,0,1,0,0v79.5a23.5,23.5,0,0,1-23.5,23.5h-45a23.5,23.5,0,0,1-23.5-23.5V352A0,0,0,0,1,821.72,352Z"
        fill={color}
      />
      <g opacity="0.1">
        <path
          d="M936,551v4h88v79.5a23.39,23.39,0,0,1-5,14.49,23.45,23.45,0,0,0,9-18.49V551Z"
          transform="translate(-114.28 -199)"
        />
      </g>
    </svg>
  );
};

Responsive.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Responsive.defaultProps = {
  color: "primary",
  style: {}
};

export default Responsive;
