import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Tabs = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e9df7128-f90d-48f2-af2a-c80f8452c1a7"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="882.5"
      height="686.51"
      viewBox="0 0 882.5 686.51"
    >
      <defs>
        <linearGradient
          id="d3725588-c4fd-46f1-8fb5-ebcc261083dd"
          x1="-121.09"
          y1="464.11"
          x2="-121.09"
          y2="77.38"
          gradientTransform="translate(704.36 124.53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="da1505d0-619f-48d6-a73e-4cfaad838d3f"
          x1="-402.3"
          y1="269.44"
          x2="-402.3"
          y2="170.67"
          gradientTransform="translate(628.78 102.2) rotate(-15.27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.12" />
          <stop offset="0.55" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="5d761051-c348-43d0-93b7-379d4f184fd5"
          x1="-402.3"
          y1="252.79"
          x2="-402.3"
          y2="231.21"
          gradientTransform="translate(706.72 199.61)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="70351dd3-b09b-481d-a2da-53703193d5a7"
          x1="-402.26"
          y1="234.11"
          x2="-402.26"
          y2="194.99"
          gradientTransform="translate(699.49 200.57)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="f5e2603e-b2ae-400c-9f3a-64890d48fe6d"
          x1="-402.3"
          y1="272.44"
          x2="-402.3"
          y2="239.1"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="ab4a4443-1c70-44d3-aff5-44a51c26d915"
          x1="-402.26"
          y1="216.85"
          x2="-402.26"
          y2="180.15"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="527ca708-8ae8-4e8c-9e20-7508688a6ac8"
          x1="-261.96"
          y1="207"
          x2="-229.82"
          y2="207"
          gradientTransform="translate(691.98 159.65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.09" />
          <stop offset="0.55" stop-opacity="0.07" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="e3abb234-bd9a-4a29-b4d9-95543465e731"
          x1="-91.63"
          y1="207"
          x2="-59.49"
          y2="207"
          gradientTransform="translate(685.97 114.79)"
          xlink:href="#527ca708-8ae8-4e8c-9e20-7508688a6ac8"
        />
        <linearGradient
          id="b220ada1-bec5-4763-adaf-46a2a991a6ea"
          x1="84.06"
          y1="207"
          x2="116.2"
          y2="207"
          gradientTransform="translate(679.76 68.52)"
          xlink:href="#527ca708-8ae8-4e8c-9e20-7508688a6ac8"
        />
        <linearGradient
          id="e945889a-4c72-453f-ae2a-9cca0c2e387b"
          x1="-261.96"
          y1="370.91"
          x2="-229.82"
          y2="370.91"
          gradientTransform="translate(735.15 153.86)"
          xlink:href="#527ca708-8ae8-4e8c-9e20-7508688a6ac8"
        />
        <linearGradient
          id="48e64a96-e766-456a-a55d-dc778a4c4106"
          x1="-91.63"
          y1="370.91"
          x2="-59.49"
          y2="370.91"
          gradientTransform="translate(729.13 109)"
          xlink:href="#527ca708-8ae8-4e8c-9e20-7508688a6ac8"
        />
        <linearGradient
          id="5c985564-a56b-468d-93e7-1bf457bee9db"
          x1="84.06"
          y1="370.91"
          x2="116.2"
          y2="370.91"
          gradientTransform="translate(722.93 62.73)"
          xlink:href="#527ca708-8ae8-4e8c-9e20-7508688a6ac8"
        />
        <linearGradient
          id="6780986a-9034-4c28-8b6c-a48891ce2ded"
          x1="495.23"
          y1="686.51"
          x2="495.23"
          y2="299.78"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#d3725588-c4fd-46f1-8fb5-ebcc261083dd"
        />
        <linearGradient
          id="7d79de41-ff5b-423b-9456-aacc3d645f9d"
          x1="372.77"
          y1="598.59"
          x2="372.77"
          y2="499.81"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="19fb9e96-cad3-456a-87b2-74caa7f769f0"
          x1="214.02"
          y1="475.19"
          x2="214.02"
          y2="453.62"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="b984d742-9cb1-45a0-b729-f1d2914abd3a"
          x1="214.05"
          y1="456.51"
          x2="214.05"
          y2="417.4"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="6fa8e8f2-d7ff-4ce3-810a-2e6bc68d564d"
          x1="372.77"
          y1="601.58"
          x2="372.77"
          y2="568.25"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
        <linearGradient
          id="8fad6a4c-d66f-4e6f-b11b-537b5bb0a550"
          x1="372.81"
          y1="545.99"
          x2="372.81"
          y2="509.29"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#da1505d0-619f-48d6-a73e-4cfaad838d3f"
        />
      </defs>
      <title>tabs</title>
      <rect
        x="200.21"
        y="202.4"
        width="764.9"
        height="377.49"
        transform="translate(-241.19 60.52) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="196.01"
        y="201.91"
        width="774.54"
        height="386.73"
        transform="translate(-242.26 60.83) rotate(-15.27)"
        fill="url(#d3725588-c4fd-46f1-8fb5-ebcc261083dd)"
      />
      <rect
        x="205.2"
        y="239.82"
        width="764.9"
        height="339.15"
        transform="translate(-245.83 62.48) rotate(-15.27)"
        fill="#fff"
      />
      <circle
        cx="186.41"
        cy="322.7"
        r="9.64"
        transform="matrix(0.96, -0.26, 0.26, 0.96, -237.16, -46.26)"
        fill="#ff5252"
      />
      <circle
        cx="214.31"
        cy="315.08"
        r="9.64"
        transform="translate(-234.17 -39.18) rotate(-15.27)"
        fill="#ff0"
      />
      <circle
        cx="242.22"
        cy="307.46"
        r="9.64"
        transform="translate(-231.18 -32.1) rotate(-15.27)"
        fill="#69f0ae"
      />
      <rect
        x="215.08"
        y="313.58"
        width="201.4"
        height="339.6"
        transform="translate(-274.91 -6.51) rotate(-15.27)"
        fill={color}
      />
      <path
        d="M350.71,407.77c-7.4-27.11-36.54-42.77-65.07-35S240,408.88,247.36,436c5.81,21.28,25,35.5,46.79,36.87l-3.45-12.65c-2.5-9.14,3.34-18.77,13-21.4h0c9.62-2.63,19.54,2.7,22,11.85l3.45,12.65C347.21,451.05,356.52,429,350.71,407.77Z"
        transform="translate(-158.75 -106.74)"
        fill="url(#da1505d0-619f-48d6-a73e-4cfaad838d3f)"
      />
      <rect
        x="301.2"
        y="430.82"
        width="6.44"
        height="21.58"
        rx="2.86"
        ry="2.86"
        transform="translate(-264.31 -10.98) rotate(-15.27)"
        fill="url(#5d761051-c348-43d0-93b7-379d4f184fd5)"
      />
      <ellipse
        cx="297.22"
        cy="415.12"
        rx="20.59"
        ry="19.56"
        transform="translate(-257.59 -13.81) rotate(-15.27)"
        fill="url(#70351dd3-b09b-481d-a2da-53703193d5a7)"
      />
      <path
        d="M303.66,438.81h0c-9.62,2.63-15.45,12.26-13,21.4l3.45,12.65a56.43,56.43,0,0,0,35-9.55l-3.45-12.65C323.2,441.52,313.28,436.19,303.66,438.81Z"
        transform="translate(-158.75 -106.74)"
        fill="url(#f5e2603e-b2ae-400c-9f3a-64890d48fe6d)"
      />
      <path
        d="M276.91,419.54a18.18,18.18,0,0,1-4.71-8.91,12.92,12.92,0,0,1,2.05-9.81c2.25-3.13,6-5,9.66-6.35s7.6-2.2,11.14-3.91a24.69,24.69,0,0,0,12.5-13.91,29.89,29.89,0,0,1,2.18,8.33,10.56,10.56,0,0,1-2.65,8.1c2.65-2.15,3.18,1,3,3.09,2,1.31,5.67.6,6.46,2.77a13.8,13.8,0,0,1,1,6.76c-.35,2.29,1.61,5.64-.68,6.43"
        transform="translate(-158.75 -106.74)"
        fill="url(#ab4a4443-1c70-44d3-aff5-44a51c26d915)"
      />
      <path
        d="M346.11,401.25A50.89,50.89,0,1,0,293,465.4l-3.45-12.65a17.28,17.28,0,0,1,12.08-21.16h0a17.28,17.28,0,0,1,21.16,12.08l3.45,12.65A50.9,50.9,0,0,0,346.11,401.25Z"
        transform="translate(-158.75 -106.74)"
        fill={color}
      />
      <rect
        x="299.35"
        y="423.6"
        width="6.12"
        height="21.58"
        rx="2.86"
        ry="2.86"
        transform="translate(-262.48 -11.76) rotate(-15.27)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <circle
        cx="295.21"
        cy="407.9"
        r="19.56"
        transform="translate(-255.76 -14.59) rotate(-15.27)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M301.64,431.59h0a17.28,17.28,0,0,0-12.08,21.16L293,465.4a51.08,51.08,0,0,0,33.24-9.08l-3.45-12.65A17.28,17.28,0,0,0,301.64,431.59Z"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M275.89,412a19,19,0,0,1-4.6-8.94,13.16,13.16,0,0,1,1.83-9.75c2.11-3.09,5.61-4.94,9.13-6.21s7.22-2.09,10.57-3.76a23.39,23.39,0,0,0,11.74-13.71,31.45,31.45,0,0,1,2.19,8.33,10.61,10.61,0,0,1-2.43,8c2.5-2.11,3,1.08,2.93,3.12,1.89,1.33,5.42.67,6.2,2.84a14.47,14.47,0,0,1,1.07,6.75c-.31,2.28,1.61,5.64-.57,6.4"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M305.24,385.31s13.48-2.45,9.44,19.65"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
      />
      <rect
        x="236.86"
        y="480.53"
        width="201.4"
        height="169.26"
        transform="translate(-295.68 2.11) rotate(-15.27)"
        opacity="0.1"
      />
      <rect
        x="264.45"
        y="521.88"
        width="98.56"
        height="9.64"
        transform="translate(-286.39 -5.52) rotate(-15.27)"
        fill="#fff"
      />
      <rect
        x="269.96"
        y="540.48"
        width="122.13"
        height="9.64"
        transform="translate(-290.68 -0.31) rotate(-15.27)"
        fill="#fff"
      />
      <rect
        x="413.68"
        y="283.64"
        width="145.69"
        height="71.78"
        transform="translate(-225.73 32.67) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="432.02"
        y="350.81"
        width="145.69"
        height="71.78"
        transform="translate(-242.77 39.87) rotate(-15.27)"
        fill="#e0e0e0"
      />
      <rect
        x="747.49"
        y="192.51"
        width="145.69"
        height="71.78"
        transform="translate(-189.94 117.37) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="765.83"
        y="259.68"
        width="145.69"
        height="71.78"
        transform="translate(-206.99 124.57) rotate(-15.27)"
        fill="#e0e0e0"
      />
      <rect
        x="580.07"
        y="238.21"
        width="145.69"
        height="71.78"
        transform="translate(-207.89 74.89) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="598.4"
        y="305.39"
        width="145.69"
        height="71.78"
        transform="translate(-224.93 82.09) rotate(-15.27)"
        fill="#e0e0e0"
      />
      <rect
        x="456.56"
        y="440.72"
        width="145.69"
        height="71.78"
        transform="matrix(0.96, -0.26, 0.26, 0.96, -265.58, 49.51)"
        fill="#e0e0e0"
      />
      <rect
        x="474.9"
        y="507.9"
        width="145.69"
        height="71.78"
        transform="translate(-282.63 56.71) rotate(-15.27)"
        fill="#bdbdbd"
      />
      <rect
        x="790.37"
        y="349.59"
        width="145.69"
        height="71.78"
        transform="translate(-229.8 134.21) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="808.71"
        y="416.77"
        width="145.69"
        height="71.78"
        transform="translate(-246.84 141.41) rotate(-15.27)"
        fill="#bdbdbd"
      />
      <rect
        x="622.95"
        y="395.3"
        width="145.69"
        height="71.78"
        transform="translate(-247.75 91.73) rotate(-15.27)"
        fill="#f5f5f5"
      />
      <rect
        x="641.29"
        y="462.47"
        width="145.69"
        height="71.78"
        transform="translate(-264.79 98.93) rotate(-15.27)"
        fill="#bdbdbd"
      />
      <ellipse
        cx="446.09"
        cy="366.65"
        rx="16.07"
        ry="15"
        transform="translate(-239.57 23.69) rotate(-15.27)"
        fill="url(#527ca708-8ae8-4e8c-9e20-7508688a6ac8)"
      />
      <circle
        cx="445.81"
        cy="365.62"
        r="13.93"
        transform="matrix(0.96, -0.26, 0.26, 0.96, -239.31, 23.58)"
        fill={color}
      />
      <ellipse
        cx="610.41"
        cy="321.79"
        rx="16.07"
        ry="15"
        transform="translate(-221.95 65.38) rotate(-15.27)"
        fill="url(#e3abb234-bd9a-4a29-b4d9-95543465e731)"
      />
      <circle
        cx="610.13"
        cy="320.76"
        r="13.93"
        transform="translate(-221.69 65.27) rotate(-15.27)"
        fill={color}
      />
      <ellipse
        cx="779.9"
        cy="275.52"
        rx="16.07"
        ry="15"
        transform="translate(-203.78 108.38) rotate(-15.27)"
        fill="url(#b220ada1-bec5-4763-adaf-46a2a991a6ea)"
      />
      <circle
        cx="779.62"
        cy="274.49"
        r="13.93"
        transform="translate(-203.52 108.27) rotate(-15.27)"
        fill={color}
      />
      <ellipse
        cx="489.26"
        cy="524.77"
        rx="16.07"
        ry="15"
        transform="translate(-279.69 40.64) rotate(-15.27)"
        fill="url(#e945889a-4c72-453f-ae2a-9cca0c2e387b)"
      />
      <circle
        cx="488.97"
        cy="523.74"
        r="13.93"
        transform="translate(-279.42 40.53) rotate(-15.27)"
        fill="#2196f3"
      />
      <ellipse
        cx="653.58"
        cy="479.91"
        rx="16.07"
        ry="15"
        transform="translate(-262.07 82.33) rotate(-15.27)"
        fill="url(#48e64a96-e766-456a-a55d-dc778a4c4106)"
      />
      <circle
        cx="653.29"
        cy="478.88"
        r="13.93"
        transform="translate(-261.81 82.22) rotate(-15.27)"
        fill="#2196f3"
      />
      <ellipse
        cx="823.06"
        cy="433.64"
        rx="16.07"
        ry="15"
        transform="translate(-243.9 125.33) rotate(-15.27)"
        fill="url(#5c985564-a56b-468d-93e7-1bf457bee9db)"
      />
      <circle
        cx="822.78"
        cy="432.61"
        r="13.93"
        transform="translate(-243.64 125.22) rotate(-15.27)"
        fill="#2196f3"
      />
      <rect
        x="113.28"
        y="300.25"
        width="764.9"
        height="377.49"
        fill="#f5f5f5"
      />
      <rect
        x="107.96"
        y="299.78"
        width="774.54"
        height="386.73"
        fill="url(#6780986a-9034-4c28-8b6c-a48891ce2ded)"
      />
      <rect x="113.28" y="338.35" width="764.9" height="339.15" fill="#fff" />
      <circle cx="131.49" cy="318.61" r="9.64" fill="#ff5252" />
      <circle cx="160.41" cy="318.61" r="9.64" fill="#ff0" />
      <circle cx="189.34" cy="318.61" r="9.64" fill="#69f0ae" />
      <rect x="113.28" y="337.9" width="201.4" height="339.6" fill={color} />
      <path
        d="M426.33,550.7c0-28.1-24-50.89-53.56-50.89S319.2,522.59,319.2,550.7c0,22.06,14.77,40.83,35.43,47.89V585.48c0-9.48,8.16-17.23,18.14-17.23h0c10,0,18.14,7.75,18.14,17.23v13.11C411.56,591.53,426.33,572.75,426.33,550.7Z"
        transform="translate(-158.75 -106.74)"
        fill="url(#7d79de41-ff5b-423b-9456-aacc3d645f9d)"
      />
      <rect
        x="210.79"
        y="453.62"
        width="6.44"
        height="21.58"
        rx="2.86"
        ry="2.86"
        fill="url(#19fb9e96-cad3-456a-87b2-74caa7f769f0)"
      />
      <ellipse
        cx="214.05"
        cy="436.96"
        rx="20.59"
        ry="19.56"
        fill="url(#b984d742-9cb1-45a0-b729-f1d2914abd3a)"
      />
      <path
        d="M372.77,568.25h0c-10,0-18.14,7.75-18.14,17.23v13.11a56.43,56.43,0,0,0,36.27,0V585.48C390.9,576,382.74,568.25,372.77,568.25Z"
        transform="translate(-158.75 -106.74)"
        fill="url(#6fa8e8f2-d7ff-4ce3-810a-2e6bc68d564d)"
      />
      <path
        d="M352,542.61a18.18,18.18,0,0,1-2.2-9.84,12.92,12.92,0,0,1,4.56-8.92c3-2.43,7.07-3.29,11-3.59s7.91-.12,11.78-.84a24.69,24.69,0,0,0,15.72-10.13,29.89,29.89,0,0,1-.09,8.61,10.56,10.56,0,0,1-4.69,7.11c3.13-1.37,2.79,1.85,2.11,3.78,1.55,1.78,5.32,2.07,5.51,4.37a13.8,13.8,0,0,1-.79,6.8c-.95,2.12.07,5.86-2.35,6"
        transform="translate(-158.75 -106.74)"
        fill="url(#8fad6a4c-d66f-4e6f-b11b-537b5bb0a550)"
      />
      <path
        d="M423.61,543.2a50.89,50.89,0,1,0-68.12,47.89V578a17.28,17.28,0,0,1,17.23-17.23h0A17.28,17.28,0,0,1,390,578v13.11A50.9,50.9,0,0,0,423.61,543.2Z"
        transform="translate(-158.75 -106.74)"
        fill={color}
      />
      <rect
        x="210.92"
        y="446.12"
        width="6.12"
        height="21.58"
        rx="2.86"
        ry="2.86"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <circle
        cx="214.01"
        cy="429.46"
        r="19.56"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M372.73,560.75h0A17.28,17.28,0,0,0,355.5,578v13.11a51.08,51.08,0,0,0,34.46,0V578A17.28,17.28,0,0,0,372.73,560.75Z"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M353,535.12a19,19,0,0,1-2.09-9.84,13.16,13.16,0,0,1,4.34-8.92c2.85-2.43,6.71-3.29,10.44-3.59s7.51-.12,11.19-.84a23.39,23.39,0,0,0,14.94-10.13,31.45,31.45,0,0,1-.08,8.61,10.61,10.61,0,0,1-4.46,7.11c3-1.37,2.65,1.85,2,3.78,1.47,1.78,5,2.07,5.23,4.37a14.47,14.47,0,0,1-.75,6.8c-.9,2.12.06,5.86-2.23,6"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M388.39,517s13.65,1.19,3.93,21.45"
        transform="translate(-158.75 -106.74)"
        fill="#fff"
      />
      <rect x="112.74" y="507.7" width="201.4" height="169.26" opacity="0.1" />
      <rect x="151.31" y="544.12" width="98.56" height="9.64" fill="#fff" />
      <rect x="390.2" y="395.21" width="98.56" height="9.64" fill="#bdbdbd" />
      <rect x="390.2" y="453.06" width="352.45" height="9.64" fill="#e0e0e0" />
      <rect x="390.2" y="510.91" width="352.45" height="9.64" fill="#e0e0e0" />
      <rect x="390.2" y="568.76" width="98.56" height="9.64" fill="#64ffda" />
      <rect x="516.61" y="568.76" width="98.56" height="9.64" fill="#f5f5f5" />
      <rect x="644.1" y="568.76" width="98.56" height="9.64" fill="#64ffda" />
      <rect x="151.31" y="566.62" width="122.13" height="9.64" fill="#fff" />
    </svg>
  );
};

Tabs.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Tabs.defaultProps = {
  color: "primary",
  style: {}
};

export default Tabs;
