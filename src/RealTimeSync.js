import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const RealTimeSync = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="accd1a1b-d405-4dd1-89fa-f32239092656"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="916.48"
      height="762"
      viewBox="0 0 916.48 762"
    >
      <defs>
        <linearGradient
          id="d814b87b-5dd1-42d1-a061-ee18783e4a9d"
          x1="300.81"
          y1="541.67"
          x2="300.81"
          y2="274.21"
          gradientTransform="matrix(1, 0, 0, 1.02, -0.05, -12.24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="e2f455a5-4864-4a97-8f60-359d47eda097"
          x1="158.98"
          y1="409.32"
          x2="158.98"
          y2="343.76"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="d3dd56fe-2172-47b4-85ad-30ed5017061c"
          x1="300.75"
          y1="478.32"
          x2="300.75"
          y2="421.45"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="10299c83-101f-4074-be69-71b1ee704760"
          x1="776.75"
          y1="675.12"
          x2="776.75"
          y2="654.79"
          gradientTransform="translate(0.31 -0.31)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="9326adbe-442d-49cb-a08f-042121b25c65"
          x1="776.86"
          y1="561.94"
          x2="776.86"
          y2="194.31"
          gradientTransform="matrix(1, 0, 0, 1.04, -0.63, -19.87)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="91382b0c-5cae-467a-9ec0-764e1390d1ca"
          x1="797.19"
          y1="255.67"
          x2="797.19"
          y2="163.33"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="e5eb15fc-2b7b-4080-8b6c-aeb6913cd57f"
          x1="912.19"
          y1="283.02"
          x2="963.04"
          y2="283.02"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="faa88f3d-9fdc-4237-abec-e584cacdbc95"
          x1="797.7"
          y1="366.44"
          x2="797.7"
          y2="274.1"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="241e204d-5d0b-43ba-8a7f-393b75452fef"
          x1="939.46"
          y1="435.64"
          x2="939.46"
          y2="351.13"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="4757d4c3-ed61-4851-a6bc-256878fd2ef8"
          x1="36.3"
          y1="72.59"
          x2="36.3"
          y2="0"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="4ca8f1e7-fac6-4ad7-8b77-df7bb72626d8"
          x1="444.71"
          y1="829.36"
          x2="444.71"
          y2="406.22"
          gradientTransform="matrix(1, 0, 0, 1.02, 0.24, -11.29)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="26999ef9-b016-4120-8eb6-cba13d632155"
          x1="445.2"
          y1="793.45"
          x2="445.2"
          y2="438.54"
          gradientTransform="matrix(1, 0, 0, 1.02, 0.24, -11.29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.09" />
          <stop offset="0.55" stop-opacity="0.07" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="952d3e93-eefa-46a1-a62d-5c717fcf8300"
          x1="346.25"
          y1="674.14"
          x2="346.25"
          y2="581.8"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="d7a5f283-d15d-4302-af05-30c423bf3fa6"
          x1="462.59"
          y1="701.49"
          x2="513.44"
          y2="701.49"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="f69ab994-6efe-4013-8793-43a7c154dd65"
          x1="256.25"
          y1="673.14"
          x2="256.25"
          y2="580.8"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
        <linearGradient
          id="6e6b4257-44fa-4433-8159-1f4b524edcbe"
          x1="372.59"
          y1="700.49"
          x2="423.44"
          y2="700.49"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d814b87b-5dd1-42d1-a061-ee18783e4a9d"
        />
      </defs>
      <title>real-time sync</title>
      <rect
        x="226.09"
        y="266.58"
        width="149.32"
        height="271.94"
        rx="10"
        ry="10"
        transform="matrix(1, 0, 0, 1, -142.32, -68.58)"
        fill="url(#d814b87b-5dd1-42d1-a061-ee18783e4a9d)"
      />
      <rect
        x="229.53"
        y="271.05"
        width="142.44"
        height="261.15"
        rx="10"
        ry="10"
        transform="matrix(1, 0, 0, 1, -142.32, -68.58)"
        fill="#fff"
      />
      <rect
        x="245.6"
        y="289.52"
        width="110.28"
        height="212.52"
        transform="translate(-142.31 -68.58) rotate(-0.08)"
        fill="#e6e6e6"
      />
      <ellipse
        cx="300.9"
        cy="517.35"
        rx="8.79"
        ry="9.01"
        transform="translate(-142.48 -68.58) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <ellipse
        cx="283.88"
        cy="279.63"
        rx="1.76"
        ry="1.8"
        transform="translate(-142.15 -68.61) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="291.79"
        y="278.25"
        width="27.26"
        height="2.7"
        rx="1"
        ry="1"
        transform="translate(-142.15 -68.58) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="127.76"
        y="343.76"
        width="62.44"
        height="65.56"
        fill="url(#e2f455a5-4864-4a97-8f60-359d47eda097)"
      />
      <rect x="130.48" y="346.61" width="57.01" height="59.86" fill={color} />
      <g opacity="0.5">
        <path
          d="M305.06,442.74v-1.13h3v-5.79a9.27,9.27,0,1,0-15.75-.43v6.22h3.31v1.33a19.22,19.22,0,0,0-14.11,18.52v16.86H320V461.46A19.21,19.21,0,0,0,305.06,442.74Z"
          transform="translate(-141.76 -69)"
          fill="url(#d3dd56fe-2172-47b4-85ad-30ed5017061c)"
        />
      </g>
      <rect x="151.38" y="362" width="14.25" height="11.4" fill="#f55f44" />
      <path
        d="M154.46,374h9a12.86,12.86,0,0,1,12.86,12.86v19.78a0,0,0,0,1,0,0H141.6a0,0,0,0,1,0,0V386.84A12.86,12.86,0,0,1,154.46,374Z"
        fill="#fdd835"
      />
      <rect
        x="154.37"
        y="368.3"
        width="8.51"
        height="10.64"
        rx="3.15"
        ry="3.15"
        fill="#fda57d"
      />
      <polygon
        points="157 378.62 158.59 380.94 160.26 378.62 157 378.62"
        fill="#fda57d"
      />
      <path
        d="M289.9,456s-1.69,16.82-.6,17.91"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M310.8,456s1.69,16.82.6,17.91"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M300.39,442.47a7.06,7.06,0,0,0,4.2-1.38,4.26,4.26,0,0,0-4.2-3.59h0a4.26,4.26,0,0,0-4.2,3.59A7.06,7.06,0,0,0,300.39,442.47Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <circle cx="158.63" cy="363.55" r="8.39" fill="#f55f44" />
      <circle cx="158.63" cy="366.17" r="7.09" fill="#fda57d" />
      <ellipse cx="151.52" cy="365.71" rx="0.5" ry="0.9" fill="#fda57d" />
      <ellipse cx="165.75" cy="365.71" rx="0.5" ry="0.9" fill="#fda57d" />
      <rect x="110.86" y="234.26" width="96.24" height="4.18" fill="#fff" />
      <rect x="110.86" y="242.62" width="96.24" height="4.18" fill="#fff" />
      <rect x="110.86" y="250.99" width="54.4" height="4.18" fill="#fff" />
      <rect x="110.86" y="259.36" width="79.5" height="4.18" fill="#fff" />
      <rect x="110.86" y="267.73" width="66.95" height="4.18" fill="#fff" />
      <rect x="110.86" y="276.1" width="96.24" height="4.18" fill="#fff" />
      <rect x="115.05" y="288.65" width="83.69" height="33.47" fill="#fff" />
      <path
        d="M847.23,526.13s14,96.19,96.19,128.14l-166.3.23-166.3.23c82.06-32.18,95.85-128.41,95.85-128.41Z"
        transform="translate(-141.76 -69)"
        fill="#e0e0e0"
      />
      <rect
        x="609.17"
        y="654.5"
        width="335.74"
        height="20.32"
        transform="translate(-142.68 -67.93) rotate(-0.08)"
        fill="url(#10299c83-101f-4074-be69-71b1ee704760)"
      />
      <rect
        x="610.84"
        y="654.5"
        width="332.6"
        height="15.68"
        transform="translate(-142.67 -67.93) rotate(-0.08)"
        fill="#f5f5f5"
      />
      <path
        d="M1047,180l-540.9.75a11.1,11.1,0,0,0-10.83,11.36l.42,315.58v10.51c0,24,18.63,43.39,41.55,43.36l479.61-.66c22.91,0,41.46-19.49,41.43-43.47V506.93l-.42-315.58A11.1,11.1,0,0,0,1047,180Z"
        transform="translate(-141.76 -69)"
        fill="url(#9326adbe-442d-49cb-a08f-042121b25c65)"
      />
      <path
        d="M513,189.5h527.49a10.75,10.75,0,0,1,10.75,10.75V500.57a0,0,0,0,1,0,0h-549a0,0,0,0,1,0,0V200.25A10.75,10.75,0,0,1,513,189.5Z"
        transform="matrix(1, 0, 0, 1, -142.24, -67.93)"
        fill="#fff"
      />
      <path
        d="M1013.17,551.56l-472.36.65a38.32,38.32,0,0,1-38.37-38.27l0-13,549-.76,0,13A38.32,38.32,0,0,1,1013.17,551.56Z"
        transform="translate(-141.76 -69)"
        fill="#f5f5f5"
      />
      <rect
        x="529.35"
        y="214.7"
        width="496.81"
        height="251.12"
        transform="matrix(1, 0, 0, 1, -142.23, -67.93)"
        fill="#e6e6e6"
      />
      <rect
        x="753.22"
        y="163.33"
        width="87.94"
        height="92.34"
        fill="url(#91382b0c-5cae-467a-9ec0-764e1390d1ca)"
      />
      <rect x="757.04" y="167.35" width="80.3" height="84.31" fill={color} />
      <g opacity="0.5">
        <path
          d="M944.44,273.84l-1-.36-.06.09h-.06v-2.72a6.27,6.27,0,0,0-.08-1,10.41,10.41,0,0,0,3.57-4.71,12.27,12.27,0,1,0-19.43,0,10.41,10.41,0,0,0,3.57,4.71,6.27,6.27,0,0,0-.08,1v3h0a25.44,25.44,0,0,0-18.67,24.52v22.31H963V298.34A25.44,25.44,0,0,0,944.44,273.84Z"
          transform="translate(-141.76 -69)"
          fill="url(#e5eb15fc-2b7b-4080-8b6c-aeb6913cd57f)"
        />
      </g>
      <path
        d="M794.3,204.29h3.1a22.93,22.93,0,0,1,22.93,22.93v23a0,0,0,0,1,0,0h-49a0,0,0,0,1,0,0v-23A22.93,22.93,0,0,1,794.3,204.29Z"
        fill="#514abf"
      />
      <rect
        x="789.36"
        y="196.3"
        width="11.99"
        height="14.99"
        rx="5.62"
        ry="5.62"
        fill="#fda57d"
      />
      <polygon
        points="785.2 206.94 789.22 215.56 793.21 211.57 789.22 205.44 785.2 206.94"
        opacity="0.05"
      />
      <path
        d="M927.1,275.52l4,8.62,4-4-4-6.12-1.84.56a4.61,4.61,0,0,0-.53.2Z"
        transform="translate(-141.76 -69)"
        fill="#fff"
      />
      <polygon
        points="805.52 206.52 801.49 215.56 797.49 211.57 801.6 205.12 805.52 206.52"
        opacity="0.05"
      />
      <path
        d="M947.14,275.1l-4,9-4-4,4.11-6.45.75.22a20,20,0,0,1,2.39.85Z"
        transform="translate(-141.76 -69)"
        fill="#fff"
      />
      <polygon
        points="793.05 210.83 795.29 214.09 797.65 210.83 793.05 210.83"
        fill="#fda57d"
      />
      <path
        d="M922.33,291.64s-2.38,23.69-.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M951.77,291.64s2.38,23.69.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M937.11,272.57a10,10,0,0,0,5.92-1.94,6,6,0,0,0-5.92-5.05h0a6,6,0,0,0-5.92,5.05A10,10,0,0,0,937.11,272.57Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <circle cx="795.35" cy="189.6" r="11.81" />
      <circle cx="795.35" cy="193.3" r="9.99" fill="#fda57d" />
      <path
        d="M929.06,252.4l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <path
        d="M929.06,252.12l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
      />
      <ellipse cx="785.34" cy="192.65" rx="0.7" ry="1.26" fill="#fda57d" />
      <ellipse cx="805.38" cy="192.65" rx="0.7" ry="1.26" fill="#fda57d" />
      <rect
        x="753.73"
        y="274.1"
        width="87.94"
        height="92.34"
        fill="url(#faa88f3d-9fdc-4237-abec-e584cacdbc95)"
      />
      <rect x="757.55" y="278.11" width="80.3" height="84.31" fill={color} />
      <g opacity="0.5">
        <path
          d="M945.53,385.1V382c0-.15,0-.31,0-.46a11.07,11.07,0,0,0,3.74-5,13.05,13.05,0,0,0-5.45-20.07,4.44,4.44,0,1,0-8.73-.37,13.05,13.05,0,0,0-6.49,20.45,11.07,11.07,0,0,0,3.74,5c0,.15,0,.3,0,.46v3.28a24.48,24.48,0,0,0-19.87,24v26.31h54.1V409.33A24.48,24.48,0,0,0,945.53,385.1Z"
          transform="translate(-141.76 -69)"
          fill="url(#241e204d-5d0b-43ba-8a7f-393b75452fef)"
        />
      </g>
      <path
        d="M796.15,316.66h3.1a22.93,22.93,0,0,1,22.93,22.93v23a0,0,0,0,1,0,0h-49a0,0,0,0,1,0,0v-23a22.93,22.93,0,0,1,22.93-22.93Z"
        fill="#fff"
      />
      <rect
        x="791.2"
        y="308.67"
        width="11.99"
        height="14.99"
        rx="5.62"
        ry="5.62"
        fill="#fdb797"
      />
      <polygon
        points="794.9 323.2 797.14 326.46 799.49 323.2 794.9 323.2"
        fill="#fdb797"
      />
      <path
        d="M924.18,404s-2.38,23.69-.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M953.62,404s2.38,23.69.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M939,384.94a10,10,0,0,0,5.92-1.94,6,6,0,0,0-5.92-5.05h0A6,6,0,0,0,933,383,10,10,0,0,0,939,384.94Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <circle cx="797.2" cy="301.97" r="11.81" fill="#fdd835" />
      <circle cx="797.2" cy="305.67" r="9.99" fill="#fdb797" />
      <ellipse cx="787.18" cy="305.02" rx="0.7" ry="1.26" fill="#fdb797" />
      <ellipse cx="807.23" cy="305.02" rx="0.7" ry="1.26" fill="#fdb797" />
      <circle cx="797.7" cy="290.16" r="4.01" fill="#fdd835" />
      <path
        d="M931.43,363.17s4,8,16.06,4l-4-4Z"
        transform="translate(-141.76 -69)"
        fill="#fdd835"
      />
      <rect x="427.01" y="178.28" width="220.98" height="9.61" fill="#fff" />
      <rect x="427.01" y="197.49" width="220.98" height="9.61" fill="#fff" />
      <rect x="427.01" y="216.71" width="124.9" height="9.61" fill="#fff" />
      <rect x="427.01" y="235.92" width="182.55" height="9.61" fill="#fff" />
      <rect x="427.01" y="255.14" width="153.72" height="9.61" fill="#fff" />
      <rect x="427.01" y="274.35" width="220.98" height="9.61" fill="#fff" />
      <rect x="436.62" y="303.18" width="192.15" height="76.86" fill="#fff" />
      <polyline
        points="138.78 610.63 33.09 610.63 33.09 34.16 657.6 34.16 657.6 82.2"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="6"
        stroke-dasharray="12"
      />
      <g opacity="0.5">
        <circle
          cx="36.3"
          cy="36.3"
          r="36.3"
          fill="url(#4757d4c3-ed61-4851-a6bc-256878fd2ef8)"
        />
      </g>
      <circle cx="36.3" cy="36.3" r="34.16" fill="#69f0ae" />
      <polygon
        points="23.49 34.16 36.3 45.9 54.44 19.21 60.85 24.55 36.3 56.58 18.15 36.3 23.49 34.16"
        fill="#fff"
      />
      <rect
        x="306.35"
        y="401.2"
        width="277.16"
        height="429.64"
        rx="17.17"
        ry="17.17"
        transform="translate(-142.61 -68.38) rotate(-0.08)"
        fill="url(#4ca8f1e7-fac6-4ad7-8b77-df7bb72626d8)"
      />
      <rect
        x="325.75"
        y="434.02"
        width="239.35"
        height="360.35"
        transform="translate(-142.61 -68.38) rotate(-0.08)"
        fill="url(#26999ef9-b016-4120-8eb6-cba13d632155)"
      />
      <rect
        x="314.78"
        y="407.7"
        width="260.3"
        height="409.85"
        rx="12.68"
        ry="12.68"
        transform="translate(-142.61 -68.39) rotate(-0.08)"
        fill="#fff"
      />
      <rect
        x="332.99"
        y="439.01"
        width="224.79"
        height="343.76"
        transform="translate(-142.6 -68.38) rotate(-0.08)"
        fill="#e6e6e6"
      />
      <ellipse
        cx="446.25"
        cy="799.84"
        rx="9.26"
        ry="9.49"
        transform="matrix(1, 0, 0, 1, -142.86, -68.38)"
        fill="#dbdbdb"
      />
      <ellipse
        cx="406.24"
        cy="424.2"
        rx="3.09"
        ry="3.16"
        transform="translate(-142.35 -68.44) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="421.68"
        y="422.25"
        width="40.14"
        height="3.16"
        rx="0.76"
        ry="0.76"
        transform="translate(-142.35 -68.39) rotate(-0.08)"
        fill="#dbdbdb"
      />
      <rect
        x="302.28"
        y="581.8"
        width="87.94"
        height="92.34"
        fill="url(#952d3e93-eefa-46a1-a62d-5c717fcf8300)"
      />
      <rect x="306.1" y="585.82" width="80.3" height="84.31" fill={color} />
      <g opacity="0.5">
        <path
          d="M494.84,692.32l-1-.36-.06.09h-.06v-2.72a6.27,6.27,0,0,0-.08-1,10.41,10.41,0,0,0,3.57-4.71,12.27,12.27,0,1,0-19.43,0,10.41,10.41,0,0,0,3.57,4.71,6.27,6.27,0,0,0-.08,1v3h0a25.44,25.44,0,0,0-18.67,24.52v22.31h50.85V716.81A25.44,25.44,0,0,0,494.84,692.32Z"
          transform="translate(-141.76 -69)"
          fill="url(#d7a5f283-d15d-4302-af05-30c423bf3fa6)"
        />
      </g>
      <path
        d="M344.7,622.76h3.1a22.93,22.93,0,0,1,22.93,22.93v23a0,0,0,0,1,0,0h-49a0,0,0,0,1,0,0v-23A22.93,22.93,0,0,1,344.7,622.76Z"
        fill="#3ad29f"
      />
      <rect
        x="339.76"
        y="614.77"
        width="11.99"
        height="14.99"
        rx="5.62"
        ry="5.62"
        fill="#be7c5e"
      />
      <polygon
        points="343.45 629.3 345.69 632.56 348.05 629.3 343.45 629.3"
        fill="#be7c5e"
      />
      <path
        d="M472.73,710.11s-2.38,23.69-.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M502.17,710.11s2.38,23.69.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M487.51,691a10,10,0,0,0,5.92-1.94,6,6,0,0,0-5.92-5.05h0a6,6,0,0,0-5.92,5.05A10,10,0,0,0,487.51,691Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <circle cx="345.75" cy="608.07" r="11.81" fill="#444" />
      <circle cx="345.75" cy="611.77" r="9.99" fill="#be7c5e" />
      <path
        d="M479.46,670.87l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <path
        d="M479.46,670.59l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
        fill="#444"
      />
      <ellipse cx="335.74" cy="611.12" rx="0.7" ry="1.26" fill="#be7c5e" />
      <ellipse cx="355.78" cy="611.12" rx="0.7" ry="1.26" fill="#be7c5e" />
      <path
        d="M479.7,666.09a6,6,0,0,1,3.08-2.07c2.21-.88,4.51-1.78,6.88-1.62a1.16,1.16,0,0,1,.65.19,2.24,2.24,0,0,1,.39.57c.72,1.07,2.74,1,3,2.26.07.41-.1.85,0,1.25.26,1,1.67.9,2.5,1.47a2.28,2.28,0,0,1,.2,3.18,6,6,0,0,1-3.06,1.74,11.8,11.8,0,0,1-6.45.57C483.86,672.84,476.77,670.88,479.7,666.09Z"
        transform="translate(-141.76 -69)"
        fill="#444"
      />
      <rect
        x="212.28"
        y="580.8"
        width="87.94"
        height="92.34"
        fill="url(#f69ab994-6efe-4013-8793-43a7c154dd65)"
      />
      <rect x="216.1" y="584.82" width="80.3" height="84.31" fill={color} />
      <g opacity="0.5">
        <path
          d="M404.84,691.32l-1-.36-.06.09h-.06v-2.72a6.27,6.27,0,0,0-.08-1,10.41,10.41,0,0,0,3.57-4.71,12.27,12.27,0,1,0-19.43,0,10.41,10.41,0,0,0,3.57,4.71,6.27,6.27,0,0,0-.08,1v3h0a25.44,25.44,0,0,0-18.67,24.52v22.31h50.85V715.81A25.44,25.44,0,0,0,404.84,691.32Z"
          transform="translate(-141.76 -69)"
          fill="url(#6e6b4257-44fa-4433-8159-1f4b524edcbe)"
        />
      </g>
      <path
        d="M254.7,621.76h3.1a22.93,22.93,0,0,1,22.93,22.93v23a0,0,0,0,1,0,0h-49a0,0,0,0,1,0,0v-23A22.93,22.93,0,0,1,254.7,621.76Z"
        fill="#514abf"
      />
      <rect
        x="249.76"
        y="613.77"
        width="11.99"
        height="14.99"
        rx="5.62"
        ry="5.62"
        fill="#fda57d"
      />
      <path
        d="M382.73,709.11s-2.38,23.69-.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M412.17,709.11s2.38,23.69.84,25.23"
        transform="translate(-141.76 -69)"
        opacity="0.1"
      />
      <path
        d="M397.51,690a10,10,0,0,0,5.92-1.94,6,6,0,0,0-5.92-5.05h0a6,6,0,0,0-5.92,5.05A10,10,0,0,0,397.51,690Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <circle cx="255.75" cy="607.07" r="11.81" fill="#444" />
      <circle cx="255.75" cy="610.77" r="9.99" fill="#fda57d" />
      <path
        d="M389.46,669.87l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
        opacity="0.05"
      />
      <path
        d="M389.46,669.59l2.52,3.08s11.07,1,12.33-1.54-7.29-4.35-7.29-4.35Z"
        transform="translate(-141.76 -69)"
        fill="#444"
      />
      <ellipse cx="245.74" cy="610.12" rx="0.7" ry="1.26" fill="#fda57d" />
      <ellipse cx="265.78" cy="610.12" rx="0.7" ry="1.26" fill="#fda57d" />
      <rect x="215.64" y="413.83" width="163.33" height="7.1" fill="#fff" />
      <rect x="215.64" y="428.03" width="163.33" height="7.1" fill="#fff" />
      <rect x="215.64" y="442.23" width="92.32" height="7.1" fill="#fff" />
      <rect x="215.64" y="456.44" width="134.93" height="7.1" fill="#fff" />
      <rect x="215.64" y="470.64" width="113.62" height="7.1" fill="#fff" />
      <rect x="215.64" y="484.84" width="163.33" height="7.1" fill="#fff" />
      <rect x="222.74" y="506.15" width="142.03" height="56.81" fill="#fff" />
      <path
        d="M390.57,676a16.26,16.26,0,0,0,1.25-2.8,6.87,6.87,0,0,1,12.23-.48c.82,1.47,1.09,3.21,2,4.63a1.17,1.17,0,0,0,1.69-.31,2.22,2.22,0,0,0,.11-1.9c-.21-.62-.56-1.19-.79-1.8a14.26,14.26,0,0,0-1-2.88,5.94,5.94,0,0,0-2-1.67c-2.21-1.36-4.77-2.77-7.27-2a9.37,9.37,0,0,0-2.37,1.21l-3.18,2a10,10,0,0,0-2.7,2.21c-.69.9-2,3.59-1.39,4.75C387.87,678.28,389.94,676.83,390.57,676Z"
        transform="translate(-141.76 -69)"
        fill="#444"
      />
      <polygon
        points="253.24 628 253.24 667.73 259.11 667.73 258.24 628 253.24 628"
        fill="#fff"
      />
      <polygon
        points="252.26 627.46 255.66 632.41 259.24 627.46 252.26 627.46"
        fill="#fda57d"
      />
    </svg>
  );
};

RealTimeSync.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

RealTimeSync.defaultProps = {
  color: "primary",
  style: {}
};

export default RealTimeSync;
