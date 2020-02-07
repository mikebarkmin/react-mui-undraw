import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const EatingTogether = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="d6af144a-e925-4ddf-847c-b38e3205da29"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="903.77"
      height="657.14"
      viewBox="0 0 903.77 657.14"
    >
      <defs>
        <linearGradient
          id="a8b3c97d-e0d9-42bd-b729-a4d45980fc6b"
          x1="736"
          y1="734.18"
          x2="736"
          y2="307.18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b66fe85f-ad74-4eee-9789-144feaee2a7f"
          x1="381.42"
          y1="718.18"
          x2="381.42"
          y2="312.18"
          xlink:href="#a8b3c97d-e0d9-42bd-b729-a4d45980fc6b"
        />
      </defs>
      <title>eating_together</title>
      <ellipse cx="63.87" cy="514.57" rx="45" ry="16" opacity="0.1" />
      <ellipse cx="790.85" cy="580.72" rx="45" ry="16" opacity="0.1" />
      <path
        d="M681,139.86c-68.48,26.45-142.71,27.68-211.66,2.78C371.62,107.36,244,98.33,196.71,260,116,536.21,281.12,634.8,281.12,634.8s115.28,25.84,179.11,72.53c90.67,66.32,201.71,88.49,306.31,57.39,66.89-19.89,124.22-52.52,140.61-105.91,45.84-149.32,16.74-239.07,99.7-278.44s36.8-185.22-22.2-188.53-198,30.52-241-36.77C728.32,131.18,704.87,130.63,681,139.86Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M937.14,704.42s12-40.84-2.26-70.9a64.51,64.51,0,0,1-5.22-40.47,108.49,108.49,0,0,1,5.73-19"
        transform="translate(-148.11 -121.43)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M926.51,555.06c0,5,9.06,19.52,9.06,19.52s9.06-14.51,9.06-19.52a9.06,9.06,0,0,0-18.13,0Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M911.53,582.79c2.72,4.2,18.22,11.46,18.22,11.46s-.28-17.11-3-21.31a9.06,9.06,0,1,0-15.21,9.85Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M912.18,630.16c4.47,2.25,21.51.7,21.51.7s-8.88-14.63-13.35-16.88a9.06,9.06,0,1,0-8.16,16.18Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M920.75,665.9c4,3,21.08,4.32,21.08,4.32s-6.28-15.92-10.3-18.89a9.06,9.06,0,0,0-10.78,14.57Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M948.77,595.22c-3.59,3.49-20.32,7.1-20.32,7.1s4.1-16.61,7.69-20.1a9.06,9.06,0,0,1,12.63,13Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M958.26,637.13c-4.47,2.25-21.51.7-21.51.7S945.63,623.2,950.1,621a9.06,9.06,0,0,1,8.16,16.18Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M961.89,679.14c-4,3-21.08,4.32-21.08,4.32s6.28-15.92,10.3-18.89a9.06,9.06,0,0,1,10.78,14.57Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M212,636.12S237.69,549,207.2,484.8c-12.8-26.93-17-57.15-11.13-86.37a231.54,231.54,0,0,1,12.23-40.54"
        transform="translate(-148.11 -121.43)"
        fill="none"
        stroke="#535461"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M189.33,317.34c0,10.68,19.34,41.66,19.34,41.66S228,328,228,317.34a19.34,19.34,0,1,0-38.68,0Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M157.36,376.51c5.81,9,38.88,24.46,38.88,24.46s-.6-36.52-6.41-45.48a19.34,19.34,0,0,0-32.47,21Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M158.75,477.63c9.54,4.81,45.91,1.49,45.91,1.49s-19-31.22-28.49-36a19.34,19.34,0,0,0-17.42,34.54Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M177,553.9c8.59,6.35,45,9.22,45,9.22s-13.4-34-22-40.32a19.34,19.34,0,0,0-23,31.1Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M236.85,403c-7.66,7.44-43.36,15.15-43.36,15.15s8.74-35.46,16.4-42.9a19.34,19.34,0,0,1,27,27.75Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M257.1,492.51c-9.54,4.81-45.91,1.49-45.91,1.49s19-31.22,28.49-36a19.34,19.34,0,1,1,17.42,34.54Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M264.85,582.17c-8.59,6.35-45,9.22-45,9.22s13.4-34,22-40.32a19.34,19.34,0,0,1,23,31.1Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M527.26,421.22,471.53,414c-2.26-.29-4-1.15-3.94-1.9h0c.1-.75,2-1.1,4.31-.77l55.61,8.05c1.53.22,2.69.8,2.62,1.31h0C530.06,421.17,528.78,421.42,527.26,421.22Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M527.61,422.17l-55.9-5.78c-2.27-.23-4.2.19-4.27.94h0c-.07.75,1.74,1.54,4,1.74l56,5c1.54.14,2.8-.16,2.85-.67h0C530.33,422.86,529.14,422.33,527.61,422.17Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M611.47,464.22,667.19,457c2.26-.29,4-1.15,3.94-1.9h0c-.1-.75-2-1.1-4.31-.77l-55.61,8.05c-1.53.22-2.69.8-2.62,1.31h0C608.66,464.17,609.94,464.42,611.47,464.22Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <path
        d="M611.11,465.17l55.9-5.78c2.27-.23,4.2.19,4.27.94h0c.07.75-1.74,1.54-4,1.74l-56,5c-1.54.14-2.8-.16-2.85-.67h0C608.39,465.86,609.58,465.33,611.11,465.17Z"
        transform="translate(-148.11 -121.43)"
        fill={color}
      />
      <rect
        x="265.44"
        y="402.64"
        width="13.59"
        height="194.86"
        fill="#40414d"
      />
      <rect
        x="562.26"
        y="402.64"
        width="13.59"
        height="194.86"
        fill="#40414d"
      />
      <path
        d="M260.25,386.78h314a22,22,0,0,1,22,22v2.92a0,0,0,0,1,0,0h-358a0,0,0,0,1,0,0v-2.92A22,22,0,0,1,260.25,386.78Z"
        fill="#dfe6f5"
      />
      <path
        d="M259.25,386.78h314a22,22,0,0,1,22,22v2.92a0,0,0,0,1,0,0h-358a0,0,0,0,1,0,0v-2.92A22,22,0,0,1,259.25,386.78Z"
        opacity="0.1"
      />
      <path
        d="M260.25,382.24h314a22,22,0,0,1,22,22v2.92a0,0,0,0,1,0,0h-358a0,0,0,0,1,0,0v-2.92A22,22,0,0,1,260.25,382.24Z"
        fill="#dfe6f5"
      />
      <circle
        cx="417.25"
        cy="339.19"
        r="27.19"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="417.25"
        cy="339.19"
        r="21.55"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="417.25"
        cy="339.19"
        r="16.42"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="417.25"
        cy="339.19"
        r="9.23"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="401.39"
        cy="353.92"
        r="27.19"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="401.39"
        cy="353.92"
        r="21.55"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="401.39"
        cy="353.92"
        r="16.42"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="401.39"
        cy="353.92"
        r="9.23"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="433.11"
        cy="353.92"
        r="27.19"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="433.11"
        cy="353.92"
        r="21.55"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="433.11"
        cy="353.92"
        r="16.42"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <circle
        cx="433.11"
        cy="353.92"
        r="9.23"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
      />
      <path
        d="M360.6,346H473.89a0,0,0,0,1,0,0v5.32a40,40,0,0,1-40,40H400.6a40,40,0,0,1-40-40V346A0,0,0,0,1,360.6,346Z"
        fill={color}
      />
      <path
        d="M611.78,467.42a45.31,45.31,0,0,1-45.29,44.18H544A45.42,45.42,0,0,0,554,512.74h22.66A45.32,45.32,0,0,0,622,467.42Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <rect
        x="563.1"
        y="532"
        width="13.59"
        height="294.56"
        transform="translate(1101.06 -12.05) rotate(90)"
        fill="#40414d"
      />
      <rect
        x="152.17"
        y="503.59"
        width="11.89"
        height="108.18"
        fill="#40414d"
      />
      <rect
        x="246.08"
        y="503.59"
        width="11.89"
        height="108.18"
        fill="#40414d"
      />
      <path
        d="M415.6,607.19c0,7.22-24.48,13.08-54.68,13.08s-53.49-5.85-53.49-13.08,23.29-13.08,53.49-13.08S415.6,600,415.6,607.19Z"
        transform="translate(-148.11 -121.43)"
        fill="#f6c6cd"
      />
      <path
        d="M142.66,485.75H267.48a0,0,0,0,1,0,0v10.9a10.5,10.5,0,0,1-10.5,10.5H160.66a18,18,0,0,1-18-18v-3.4A0,0,0,0,1,142.66,485.75Z"
        fill="#40414d"
      />
      <path
        d="M285.89,480h2.64a7,7,0,0,1,7,7V628.58a0,0,0,0,1,0,0h-4a12.66,12.66,0,0,1-12.66-12.66V487A7,7,0,0,1,285.89,480Z"
        transform="translate(-263.1 -44.6) rotate(-12.72)"
        fill="#40414d"
      />
      <rect
        x="820.55"
        y="626.94"
        width="11.89"
        height="108.18"
        transform="translate(1504.87 1240.63) rotate(-180)"
        fill="#40414d"
      />
      <rect
        x="726.64"
        y="626.94"
        width="11.89"
        height="108.18"
        transform="translate(1317.05 1240.63) rotate(-180)"
        fill="#40414d"
      />
      <path
        d="M717.13,609.11c0,7.22,24.48,13.08,54.68,13.08s53.49-5.85,53.49-13.08S802,596,771.81,596,717.13,601.89,717.13,609.11Z"
        transform="translate(-148.11 -121.43)"
        fill="#f6c6cd"
      />
      <path
        d="M735.13,609.11h96.32a10.5,10.5,0,0,1,10.5,10.5v10.9a0,0,0,0,1,0,0H717.13a0,0,0,0,1,0,0v-3.4A18,18,0,0,1,735.13,609.11Z"
        transform="translate(1410.96 1118.19) rotate(-180)"
        fill="#40414d"
      />
      <path
        d="M849.85,481.91h4a0,0,0,0,1,0,0V623.51a7,7,0,0,1-7,7h-2.64a7,7,0,0,1-7-7V494.57A12.66,12.66,0,0,1,849.85,481.91Z"
        transform="translate(1399.71 1163.49) rotate(-167.28)"
        fill="#40414d"
      />
      <path
        d="M829.17,567l3.51-1.11s-6-40.08-5.94-76c0-1,0-2.07,0-3.1.07-2.24.15-4.46.26-6.63.14-2.78.17-5.43.15-8,.33-34.59-13.3-49.2-13.3-49.2s-16-22.82-25.59-27.26c-.83-2.6-1.78-5.94-2.62-9.82.31-.21.61-.42.9-.64a129.45,129.45,0,0,0,11.35-9.47c4.92-4.61,9.64-10.23,9.38-16.57a12.16,12.16,0,0,0-.06-1.85c-.91-7.65-8.86-13.41-12.07-20.66-2.7-6.09-1.89-12.87-4.25-19.05s-10.6-11.93-16.82-8.68c-2.29,1.2-3.67,3.32-5.58,4.93-4.74,4-12.38,4.37-18.86,2.55s-8.4-9.24-17.46-9.26a10.53,10.53,0,0,1,2.29,1.09,14.42,14.42,0,0,0-2.29-.2,10,10,0,0,1,6.92,8.41,6.92,6.92,0,0,1-.08.72c-3.62,1.95-8.38.84-12.72.77s-9.28,2.12-8.85,5.67a3.43,3.43,0,0,0,0,1.22c.57,2.69,4.17,4.72,4.61,7.21,0,.07,0,.13,0,.2a74.76,74.76,0,0,1-25.65,7.48c-.29,0-.16.35.26.86l-.26,0c-1.63.17,9.77,9.18,11.07,9.77,4.76,2.16,10.45,3.75,15.49,5.41l.44.14a31.54,31.54,0,0,0-2.57,12.49c0,15.4,11.07,28.34,26.06,32,2.8,3.27,5.74,6.86,8.42,10.43h-.19S737.89,433.77,738.44,468a100.05,100.05,0,0,0,.68,12.84c-11.08-.63-34.89-3.55-53-16.81-24.43-17.87-51.68-12.51-46-1.79s34.77,19.65,39.46,20.55c.44.08,1.46.32,2.92.68-5.78,1.09-9.74,3-9.5,5.57.47,4.91,25.37,20.55,40.4,21.44,9.93.59,21.88,3.65,31.31,6.34.91,20.55-4.06,26.71-4.06,26.71s1.48.91,3.93,2.2l-1.05,3c-6.1,3.52-13.62,7.19-20.46,8.67a112.38,112.38,0,0,0-25.24,8.4l-33.83,16.35a19.59,19.59,0,0,0-11.2,15.39c-.74,6.93,1.35,15.59,12.67,22.46.7,5.63,4.14,12.2,13.17,18.22,17.5,11.64,63.49,46.51,69.75,51.27.12,8.51-1,25.58-11.5,28.24-13.16,3.34-2.57,16,8.07,15.5a13.94,13.94,0,0,0,7.91.58c11.28-2.68,52.62-17,55.44-38.42a20.53,20.53,0,0,0,.16-2.8,18.68,18.68,0,0,0-2.62-10.41,18.74,18.74,0,0,1,1.07,3c-3.42-7.8-11.75-12.7-18.23-15.46,0-.07,0-.15,0-.22-1-.39-2-.71-2.82-1a8.39,8.39,0,0,0-.13-1.73l-64.83-44.67s28.19-23.23,57.32-19.65S812,600.74,812,600.74s14.94-14.21,16.44-30.57l.94-.25S829.31,568.89,829.17,567Z"
        transform="translate(-148.11 -121.43)"
        fill="url(#a8b3c97d-e0d9-42bd-b729-a4d45980fc6b)"
      />
      <path
        d="M750,683.35s2.65,29.17-10.61,32.71-.88,17.68,9.72,15,49.51-16.8,52.16-38-26.52-28.29-26.52-28.29Z"
        transform="translate(-148.11 -121.43)"
        fill="#b8616e"
      />
      <path
        d="M750,683.35s2.65,29.17-10.61,32.71-.88,17.68,9.72,15,49.51-16.8,52.16-38-26.52-28.29-26.52-28.29Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.05"
      />
      <path
        d="M755.33,684.23s2.65,29.17-10.61,32.71-.88,17.68,9.72,15,49.51-16.8,52.16-38-26.52-28.29-26.52-28.29Z"
        transform="translate(-148.11 -121.43)"
        fill="#b8616e"
      />
      <path
        d="M782.73,666.55,758,685.12s.11,1.26.18,3.27c9.34-2.56,29.69-9.36,30-20A47.92,47.92,0,0,0,782.73,666.55Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <rect x="608.54" y="290.95" width="10.61" height="7.96" fill="#f8bdc5" />
      <path
        d="M757.1,541s-16.85,13.24-30.69,16.38a102.16,102.16,0,0,0-23.75,8.31l-31.83,16.18a19.34,19.34,0,0,0-10.54,15.23c-.91,9,2.71,20.84,24.31,27.88l68.07,56.58,21.22-17.68L701.4,608.2l55.7-34.48Z"
        transform="translate(-148.11 -121.43)"
        fill="#758ac8"
      />
      <path
        d="M757.1,541s-16.85,13.24-30.69,16.38a102.16,102.16,0,0,0-23.75,8.31l-31.83,16.18a19.34,19.34,0,0,0-10.54,15.23c-.91,9,2.71,20.84,24.31,27.88l68.07,56.58,21.22-17.68L701.4,608.2l55.7-34.48Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M747.37,481.78s-32.71.88-55.7-16.8-48.62-12.38-43.32-1.77,32.71,19.45,37.13,20.33,68.07,18.57,68.07,18.57Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M747.37,481.78s-32.71.88-55.7-16.8-48.62-12.38-43.32-1.77,32.71,19.45,37.13,20.33,68.07,18.57,68.07,18.57Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.05"
      />
      <path
        d="M750.91,533.06,740.3,564.89s-59.67,36.69-64.54,41.55c-3.78,3.78-8.84,18.57,8.84,30.94s66.3,51.28,66.3,51.28,37.13-8,34.48-23l-61-44.2s26.52-23,53.93-19.45,31.83-1.77,31.83-1.77S831.36,579,824.28,558.7,750.91,533.06,750.91,533.06Z"
        transform="translate(-148.11 -121.43)"
        fill="#758ac8"
      />
      <path
        d="M737.65,389s30.06,32.71,28.29,42.43,23.87-28.29,23.87-28.29-8-19.45-6.19-40.67Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M763.88,419a87.88,87.88,0,0,1,6.47-6.17,89.71,89.71,0,0,0,12.39-12.37c6.19-8,29.17,26.52,29.17,26.52s14.14,15.91,12.38,53.93,2.21,88.85,2.21,88.85l-5.35,1.49a30.63,30.63,0,0,1-27.1-3.85c-7.06-4.88-16-10-22.8-10.46-13.26-.88-25.2-8.4-25.2-8.4s5.75-13.7-3.09-57.91S756.65,415,756.65,415,758.43,424.62,763.88,419Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M829.59,565.77l-5.3,1.77-3.15,1.05a30.62,30.62,0,0,1-27.1-3.85c-7.05-4.87-16-10-22.8-10.46C758,553.39,743,543.67,743,543.67s8.84-11.49,0-55.7,13.7-75.59,13.7-75.59,1.78,9.57,7.23,3.94a86.81,86.81,0,0,1,6.46-6.16,89.71,89.71,0,0,0,12.39-12.37c6.19-8,29.17,26.52,29.17,26.52s14.14,15.91,12.38,53.93c-.19,4-.27,8.12-.28,12.29C823.92,526.11,829.59,565.77,829.59,565.77Z"
        transform="translate(-148.11 -121.43)"
        fill="#5e52ad"
      />
      <path
        d="M779.2,479.13l.88,19.45s-46.86,2.65-56.58-7.07S750,520.1,758,522.45c7.51,2.21,26.9,4.16,37.07,4.36a15,15,0,0,0,14-8.49,14.15,14.15,0,0,0,1.1-8.25c-1.77-11.49,0-36.25,0-36.25Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M779.2,477.36l.88,19.45s-46.86,2.65-56.58-7.07-44.89-7.57-44.2,0c.44,4.86,23.87,20.33,38,21.22S750,518.33,758,520.68c7.51,2.21,26.9,4.16,37.07,4.36a15,15,0,0,0,14-8.49,14.15,14.15,0,0,0,1.1-8.25c-1.77-11.49,0-36.25,0-36.25Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M789.81,420.78s-20.33,2.65-17.68,32.71,6.19,32.71,6.19,32.71,30.06-2.65,33.59-3.54,1.77-33.59,1.77-33.59S812.79,419.9,789.81,420.78Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M789.81,419.9s-20.33,2.65-17.68,32.71,6.19,32.71,6.19,32.71,30.06-2.65,33.59-3.54,1.77-33.59,1.77-33.59S812.79,419,789.81,419.9Z"
        transform="translate(-148.11 -121.43)"
        fill="#5e52ad"
      />
      <path
        d="M782.29,381.44c-1.39-7,1.46-9.16,2.21-18.12l-46,26.52s5.27,5.74,11.26,13.11a32.77,32.77,0,0,0,8.19,1C770,404,776.59,391.06,782.29,381.44Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <circle cx="608.98" cy="248.96" r="32.71" fill="#f8bdc5" />
      <path
        d="M765.34,360.46c-5,3.18-5.07,10.37-1.85,15.35s8.77,8.27,14.11,11.37c1.55.9,3.26,1.83,5,1.63a7.37,7.37,0,0,0,3.58-1.81,123.46,123.46,0,0,0,10.68-9.37c4.86-4.78,9.53-10.67,8.77-17.34-.86-7.57-8.34-13.27-11.36-20.44-2.54-6-1.78-12.73-4-18.86s-10-11.8-15.82-8.59c-2.15,1.18-3.45,3.29-5.25,4.88-4.46,3.94-11.65,4.33-17.75,2.53s-7.91-9.15-16.42-9.17c4.23,1.49,7.09,5.9,6.44,9.92-3.41,1.93-7.89.83-12,.76s-9,2.23-8.29,5.93c.62,3,4.95,5.23,4.31,8.23a67.76,67.76,0,0,1-24.14,7.4c-1.53.17,9.19,9.08,10.41,9.67,4.47,2.14,9.84,3.71,14.57,5.35C739.18,362.33,752.34,363.91,765.34,360.46Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M765.34,359.57c-5,3.18-5.07,10.37-1.85,15.35s8.77,8.27,14.11,11.37c1.55.9,3.26,1.83,5,1.63a7.37,7.37,0,0,0,3.58-1.81,123.46,123.46,0,0,0,10.68-9.37c4.86-4.78,9.53-10.67,8.77-17.34-.86-7.57-8.34-13.27-11.36-20.44-2.54-6-1.78-12.73-4-18.86s-10-11.8-15.82-8.59c-2.15,1.18-3.45,3.29-5.25,4.88-4.46,3.94-11.65,4.33-17.75,2.53s-7.91-9.15-16.42-9.17c4.23,1.49,7.09,5.9,6.44,9.92-3.41,1.93-7.89.83-12,.76s-9,2.23-8.29,5.93c.62,3,4.95,5.23,4.31,8.23a67.76,67.76,0,0,1-24.14,7.4c-1.53.17,9.19,9.08,10.41,9.67,4.47,2.14,9.84,3.71,14.57,5.35C739.18,361.45,752.34,363,765.34,359.57Z"
        transform="translate(-148.11 -121.43)"
        fill="#916168"
      />
      <path
        d="M804.29,680.89a19.51,19.51,0,0,1,1.43,10.41c-2.65,21.22-41.55,35.36-52.16,38-5.59,1.4-11.68-1.87-14.23-5.8,1.64,4.62,8.7,9.17,15.12,7.57,10.61-2.65,49.51-16.8,52.16-38A19.41,19.41,0,0,0,804.29,680.89Z"
        transform="translate(-148.11 -121.43)"
        fill="#fff"
        opacity="0.1"
      />
      <path
        d="M523.34,705h0c-.79-1.78-4.89-5.25-24.66-6-13.54-.51-18.15-7.66-19.4-14.64,4.45-.58,7.93-1.38,9.07-2.49,0,0-.06-.32-.16-.89l.16-.12A93.7,93.7,0,0,1,487,665.62a58.64,58.64,0,0,1,1.38-13,38.34,38.34,0,0,0,.69-8.57c.11-17-5.86-46.88-5.86-46.88l-.82-24.83A17.25,17.25,0,0,0,473,557.44a14.13,14.13,0,0,0-6.35-1.58s-31.34-4.94-59.55-7.63c-2-1.61-9.05-5.95-25.21-3.46l-9.3-27.22a7.73,7.73,0,0,1-.16-1c.33-3.46,2.64-8.67,13.41-9l2.25,2s.4-.79,1.07-2c13.36-.15,86.14-.89,89.89,0,4.13,1,40.31-7.06,41.35-8.06,14.06-13.71-41.35-7.06-41.35-7.06-5.45.89-23.06-.17-41.1-1.64,8.93-13.39,17.33-58.84,17.33-58.84s32-16.13,22.74-25.2-37.21,20.16-37.21,20.16-11.37,33.27-16.54,43.35c-2,4-4.59,4.82-6.9,4.36,1.05-.84,1.73-1.34,1.73-1.34s-22.74-18.15-24.81-25.2a16.84,16.84,0,0,0-1.52-3.31c-1.09-6.39-3-12.68-7.66-16.87a17.33,17.33,0,0,0-2.58-2.27c-1.26-.9-2.69-1.68-3.88-2.66l0,0c.67-3.08,1.45-6.28,2.26-9.38,16.88-2,30-16,30-33a32.55,32.55,0,0,0-.91-7.61,14.66,14.66,0,0,0,13-6.26c3.41-5.08,3.3-12,.44-17.36a21.49,21.49,0,0,0-4.58-5.78,27.09,27.09,0,0,0-10.5-6.56c-3.43-1.19-7.22-1.9-9.94-4.23a44.09,44.09,0,0,1-3.31-5,25.59,25.59,0,0,0-4-4.66c-5-5.15-12.06-8.32-19.25-9.72-8.76-1.71-17.81-1.1-26.72-.49-3.33.23-7.24.82-8.74,3.72-1.13,2.18-.39,4.79-.54,7.22-.47,7.73-9.31,12-17,13.87S302,341.22,298.29,348c-3.37,6.12-1,13.54.08,20.41A49.93,49.93,0,0,1,290.84,403c-3.38,5.17-7.74,9.77-10.41,15.32a29.21,29.21,0,0,0-1.94,19.86c.5,1.94,1.22,3.92.86,5.9a10.29,10.29,0,0,1-2.34,4.39A53,53,0,0,1,239.31,468a10.8,10.8,0,0,0,3.44,5.19,24.85,24.85,0,0,0,7.14,4.93,107.81,107.81,0,0,0,21.9,8.15c5.1,1.29,10.43,2.21,15.62,1.33s10.25-3.85,12.38-8.55c1.24-2.72,1.42-5.8,2.52-8.57,2.19-5.54,7.62-9.13,11.29-13.88a347.08,347.08,0,0,0-1.75,36.84c0,3.85,0,7.32,0,10.54,0,13.89-1,23.47-9.61,40.82a10.36,10.36,0,0,0-1.29,6,6.58,6.58,0,0,0,2.25,6.11,59.24,59.24,0,0,0-.87,10.48c-.12,12.64,4.15,29.61,26.79,33.91l40.31-2s56.85-11.09,72.35-3a5.72,5.72,0,0,1,4.53,5.58,12.83,12.83,0,0,1-.39,2.49,39.15,39.15,0,0,0-.49,7.93c-.07,17,3.59,55.58,3.59,55.58v16.36c-2.58,3.88-5.76,9.62-5.35,13.85,0,.09,0,.19,0,.28s0,.25.06.37,0,.22.07.33.06.21.09.32.08.24.13.35.07.18.11.27.13.26.2.38l.12.21a4.84,4.84,0,0,0,.4.55c5.17,6,31,17.61,39.28,17.14,8.79-.5,38.24,1,39.28-12.1A1.59,1.59,0,0,0,523.34,705Z"
        transform="translate(-148.11 -121.43)"
        fill="url(#b66fe85f-ad74-4eee-9789-144feaee2a7f)"
      />
      <path
        d="M449.86,679.68s-12,15-7,21,30,17.47,38,17c8.5-.5,37,1,38-12,0,0,2-6-24-7s-18-28-18-28Z"
        transform="translate(-148.11 -121.43)"
        fill="#594c76"
      />
      <path
        d="M306.86,553.68s-12,41,24,48l39-2s55-11,70-3c0,0,6,1,4,9s3,62,3,62v18s34,0,38-4c0,0-3-16,0-29s-5-54-5-54L479.07,574a17.16,17.16,0,0,0-9.06-14.8,13.4,13.4,0,0,0-6.14-1.56s-68-11-92-9S306.86,553.68,306.86,553.68Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M306.86,552.68s-12,41,24,48l39-2s55-11,70-3c0,0,6,1,4,9s3,62,3,62v18s34,0,38-4c0,0-3-16,0-29s-5-54-5-54L479.07,573a17.16,17.16,0,0,0-9.06-14.8,13.4,13.4,0,0,0-6.14-1.56s-68-11-92-9S306.86,552.68,306.86,552.68Z"
        transform="translate(-148.11 -121.43)"
        fill="#8b9cd1"
      />
      <path
        d="M409.86,471.68s8,10,13,0,16-43,16-43,27-29,36-20-22,25-22,25-11,61-21,62-25,0-25,0l-5-11Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M409.86,471.68s8,10,13,0,16-43,16-43,27-29,36-20-22,25-22,25-11,61-21,62-25,0-25,0l-5-11Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.05"
      />
      <path
        d="M373.86,421.68s18,21,20,28,24,25,24,25-16,12-13,18-21-20-21-20l-28-41Z"
        transform="translate(-148.11 -121.43)"
        fill="#eb6475"
      />
      <path
        d="M373.86,421.68s18,21,20,28,24,25,24,25-16,12-13,18-21-20-21-20l-28-41Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M385.86,397.68s-9,29-9,40-38-3-37-9,22-28,23-37S385.86,397.68,385.86,397.68Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M355.86,417.68s-35-9-40,42,4,57-11,88,102,4,102,4-6-7-25-4l-9-27s-3-12,14-12,9-35,9-35-9-30-14-33S367.86,419.68,355.86,417.68Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M355.86,415.68s-35-9-40,42,4,57-11,88,102,4,102,4-6-7-25-4l-9-27s-3-12,14-12,9-35,9-35-9-30-14-33S367.86,417.68,355.86,415.68Z"
        transform="translate(-148.11 -121.43)"
        fill="#eb6475"
      />
      <path
        d="M390.86,487.68s73,8,85,6c0,0,53.6-6.6,40,7-1,1-36,9-40,8s-89,0-89,0l-1-10Z"
        transform="translate(-148.11 -121.43)"
        fill="#f8bdc5"
      />
      <path
        d="M334.86,462.68l53,48s10-20,13-20-36-59-36-59-10-12-16-6S324.86,427.68,334.86,462.68Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M333.86,460.68l53,48s10-20,13-20-36-59-36-59-10-12-16-6S323.86,425.68,333.86,460.68Z"
        transform="translate(-148.11 -121.43)"
        fill="#eb6475"
      />
      <circle cx="228.75" cy="261.25" r="33" fill="#f8bdc5" />
      <path
        d="M405.76,374.39c5.6,2.21,12.46-.44,15.76-5.47s3.2-11.88.42-17.22-7.92-9.22-13.59-11.24c-3.44-1.22-7.27-1.92-9.91-4.44-1.67-1.59-2.66-3.74-3.91-5.68-4.67-7.28-13-11.58-21.47-13.27s-17.23-1.09-25.85-.49c-3.22.23-7,.81-8.46,3.69-1.09,2.16-.38,4.75-.52,7.16-.45,7.67-9,11.92-16.47,13.76s-16.13,3.57-19.77,10.33c-3.26,6.07-.93,13.43.08,20.25A50.54,50.54,0,0,1,294.79,406c-3.27,5.13-7.48,9.69-10.07,15.2a29.64,29.64,0,0,0-1.88,19.7c.49,1.93,1.18,3.89.84,5.85a10.29,10.29,0,0,1-2.26,4.35,50.88,50.88,0,0,1-36.47,19.42c1.14,4.29,5.29,7,9.24,9a102.69,102.69,0,0,0,21.18,8.08c4.93,1.28,10.09,2.19,15.11,1.32s9.91-3.82,12-8.48c1.2-2.7,1.38-5.75,2.44-8.51,2.39-6.19,8.76-9.93,12.18-15.62,3.27-5.44,4.54-6.08,5.37-12.36s2.66-13.06,7.82-16.75c5.4-3.87,13-3.13,19-.16s9.71,1.81,14.72,6.17a122,122,0,0,0,29.21,18.82c-1-8.72-2.61-18.45-9.69-23.64-2-1.49-4.53-2.63-5.59-4.91-1.69-3.63,1.2-8.06-.11-11.85s-6.29-5.19-8.5-8.63c-1.88-2.92-1.37-6.89.39-9.89s4.54-5.22,7.31-7.32q3.69-2.79,7.48-5.45a26.72,26.72,0,0,0,6.08-5.3c1-1.37,1.66-4.37,3.05-5.34C397.14,367.28,402.52,373.12,405.76,374.39Z"
        transform="translate(-148.11 -121.43)"
        opacity="0.1"
      />
      <path
        d="M404.76,373.39c5.6,2.21,12.46-.44,15.76-5.47s3.2-11.88.42-17.22-7.92-9.22-13.59-11.24c-3.44-1.22-7.27-1.92-9.91-4.44-1.67-1.59-2.66-3.74-3.91-5.68-4.67-7.28-13-11.58-21.47-13.27s-17.23-1.09-25.85-.49c-3.22.23-7,.81-8.46,3.69-1.09,2.16-.38,4.75-.52,7.16-.45,7.67-9,11.92-16.47,13.76s-16.13,3.57-19.77,10.33c-3.26,6.07-.93,13.43.08,20.25A50.54,50.54,0,0,1,293.79,405c-3.27,5.13-7.48,9.69-10.07,15.2a29.64,29.64,0,0,0-1.88,19.7c.49,1.93,1.18,3.89.84,5.85a10.29,10.29,0,0,1-2.26,4.35,50.88,50.88,0,0,1-36.47,19.42c1.14,4.29,5.29,7,9.24,9a102.69,102.69,0,0,0,21.18,8.08c4.93,1.28,10.09,2.19,15.11,1.32s9.91-3.82,12-8.48c1.2-2.7,1.38-5.75,2.44-8.51,2.39-6.19,8.76-9.93,12.18-15.62,3.27-5.44,4.54-6.08,5.37-12.36s2.66-13.06,7.82-16.75c5.4-3.87,13-3.13,19-.16s9.71,1.81,14.72,6.17a122,122,0,0,0,29.21,18.82c-1-8.72-2.61-18.45-9.69-23.64-2-1.49-4.53-2.63-5.59-4.91-1.69-3.63,1.2-8.06-.11-11.85s-6.29-5.19-8.5-8.63c-1.88-2.92-1.37-6.89.39-9.89s4.54-5.22,7.31-7.32q3.69-2.79,7.48-5.45a26.72,26.72,0,0,0,6.08-5.3c1-1.37,1.66-4.37,3.05-5.34C396.14,366.28,401.52,372.12,404.76,373.39Z"
        transform="translate(-148.11 -121.43)"
        fill="#916168"
      />
      <g opacity="0.1">
        <path
          d="M475.72,678.56a34.56,34.56,0,0,1,1.14-7.88l-.5.17A34.82,34.82,0,0,0,475.72,678.56Z"
          transform="translate(-148.11 -121.43)"
          fill="#fff"
        />
        <path
          d="M480.86,715.68c-8,.47-33-11-38-17a5.33,5.33,0,0,1-1.16-2.84,6.28,6.28,0,0,0,1.16,4.84c5,6,30,17.47,38,17,8.5-.5,37,1,38-12a1.62,1.62,0,0,0-.14-1.06C516.43,716.6,489.15,715.19,480.86,715.68Z"
          transform="translate(-148.11 -121.43)"
          fill="#fff"
        />
      </g>
      <rect
        x="372.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="373.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="374.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="375.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="376.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="377.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
      <rect
        x="378.25"
        y="295.75"
        width="1"
        height="41"
        fill="#ffd77c"
        stroke="#ffab50"
        stroke-miterlimit="10"
        strokeWidth="0.25"
      />
    </svg>
  );
};

EatingTogether.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

EatingTogether.defaultProps = {
  color: "primary",
  style: {}
};

export default EatingTogether;
