import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Hiring = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="27b24c83-6930-4149-a780-3773eb0b718f"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="874.47"
      height="747.94"
      viewBox="0 0 874.47 747.94"
    >
      <defs>
        <linearGradient
          id="267af776-2606-4521-bdeb-63ce55981a74"
          x1="769.97"
          y1="1002.12"
          x2="769.97"
          y2="454.75"
          gradientTransform="translate(1528.99 -393.78) rotate(90)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="1fcd4820-0a7c-4847-8840-19b179cc7b2e"
          x1="683.95"
          y1="639.26"
          x2="683.95"
          y2="526.2"
          gradientTransform="translate(147.82 -458.92) rotate(8.58)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
        <linearGradient
          id="206f4f91-e50e-44b0-9342-2d65f420a366"
          x1="475.23"
          y1="384.44"
          x2="475.23"
          y2="-162.93"
          gradientTransform="translate(-72.73 343.57)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
        <linearGradient
          id="d34e425e-14d9-4818-8053-17a79178d3b1"
          x1="393.32"
          y1="20.38"
          x2="393.32"
          y2="-95.86"
          gradientTransform="translate(-84.38 421.89) rotate(-9.31)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
        <linearGradient
          id="769baff5-4c30-4a3c-b602-35bea0051736"
          x1="480.71"
          y1="712.84"
          x2="480.71"
          y2="165.47"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
        <linearGradient
          id="435858fe-786b-4ccc-9937-2ef148119b2b"
          x1="-513.22"
          y1="427.6"
          x2="-513.22"
          y2="308.75"
          gradientTransform="matrix(-1, 0, 0, 1, 48, 0)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
        <linearGradient
          id="8c5c6193-e47d-4d82-a8e6-773c48c7bbd6"
          x1="652.07"
          y1="747.94"
          x2="652.07"
          y2="579.17"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#267af776-2606-4521-bdeb-63ce55981a74"
        />
      </defs>
      <title>hiring</title>
      <g opacity="0.5">
        <rect
          x="526.87"
          y="178.11"
          width="547.37"
          height="396.16"
          transform="translate(146.42 1035.67) rotate(-81.42)"
          fill="url(#267af776-2606-4521-bdeb-63ce55981a74)"
        />
      </g>
      <rect
        x="533.22"
        y="181.16"
        width="535.27"
        height="386.08"
        transform="translate(148.65 1034.27) rotate(-81.42)"
        fill="#f5f5f5"
      />
      <rect
        x="663.37"
        y="338.64"
        width="278.65"
        height="16.89"
        transform="translate(-102.03 -191.85) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="657.07"
        y="380.39"
        width="278.65"
        height="16.89"
        transform="translate(-95.87 -190.45) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="817.86"
        y="215.12"
        width="143.55"
        height="16.89"
        transform="translate(-119.48 -206.2) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="824.23"
        y="256.87"
        width="118.22"
        height="16.89"
        transform="translate(-113.32 -204.79) rotate(8.58)"
        fill={color}
      />
      <rect
        x="650.96"
        y="419.62"
        width="244.88"
        height="16.89"
        transform="translate(-90.28 -186.58) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="644.85"
        y="458.85"
        width="211.1"
        height="16.89"
        transform="translate(-84.69 -182.71) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="638.7"
        y="498.71"
        width="185.77"
        height="16.89"
        transform="translate(-78.96 -179.46) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="632.12"
        y="544.23"
        width="236.43"
        height="16.89"
        transform="translate(-71.96 -181.74) rotate(8.58)"
        fill="#e0e0e0"
      />
      <rect
        x="626.63"
        y="575.28"
        width="92.88"
        height="16.89"
        transform="translate(-68.19 -169.88) rotate(8.58)"
        fill={color}
      />
      <g opacity="0.5">
        <path
          d="M793,227.53a56.36,56.36,0,1,0-93.8,33.16c0,.08,0,.17,0,.25a19.29,19.29,0,0,0,5.71,5l.11-.24c2.27,2.63,12.72,7.87,25.35,9.74l.28,0c8,1.22,16.89,1.11,25.14-1.87,0,0,.09-.14.24-.4a20.08,20.08,0,0,0,5.8-2.81l.18-.62A56.3,56.3,0,0,0,793,227.53Z"
          transform="translate(-162.77 -76.03)"
          fill="url(#1fcd4820-0a7c-4847-8840-19b179cc7b2e)"
        />
      </g>
      <circle
        cx="736.97"
        cy="217.05"
        r="54.67"
        transform="translate(249.68 837.38) rotate(-81.42)"
        fill="#f5f5f5"
      />
      <path
        d="M712.1,235.08s-13-.89-13.17,23.09a18.71,18.71,0,0,0,5.54,4.83l10.94-23.43Z"
        transform="translate(-162.77 -76.03)"
        fill="#fda57d"
      />
      <path
        d="M753.9,241.39s12.72,3,5.78,25.95a18.71,18.71,0,0,1-6.72,3l-3.55-25.61Z"
        transform="translate(-162.77 -76.03)"
        fill="#fda57d"
      />
      <path
        d="M718.46,196.72s-8.82,16.91-11.91,14.73c0,0,28.06,32.73,60.75,9.16a85.9,85.9,0,0,0-9.82-18Z"
        transform="translate(-162.77 -76.03)"
        fill="#333"
      />
      <circle
        cx="739.39"
        cy="198.16"
        r="24.23"
        transform="translate(270.42 823.71) rotate(-81.42)"
        fill="#333"
      />
      <path
        d="M753.65,241.35l-41.8-6.3-6.42,16.13s-3.46,7.39-1.12,11.23,27.79,15.59,49,8a22.05,22.05,0,0,0,2.66-13.85c-1.05-8.14-.47-.64-.47-.64Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <path
        d="M754.21,241.44l-41.8-6.3L706,251.26s-3.46,7.39-1.12,11.23,27.79,15.59,49,8a22.05,22.05,0,0,0,2.66-13.85c-1.05-8.14-.47-.64-.47-.64Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <path
        d="M753.9,241.39l-41.8-6.3-6.42,16.13s-3.46,7.39-1.12,11.23,27.79,15.59,49,8a22.05,22.05,0,0,0,2.66-13.85c-1.05-8.14-.47-.64-.47-.64Z"
        transform="translate(-162.77 -76.03)"
        fill="#fdd835"
      />
      <path
        d="M725.28,224.29h16.91a0,0,0,0,1,0,0v15.26a6.73,6.73,0,0,1-6.73,6.73H732a6.73,6.73,0,0,1-6.73-6.73V224.29A0,0,0,0,1,725.28,224.29Z"
        transform="translate(-119.47 -182.82) rotate(8.58)"
        opacity="0.1"
      />
      <path
        d="M725.37,223.67h16.91a0,0,0,0,1,0,0v15.26a6.73,6.73,0,0,1-6.73,6.73H732.1a6.73,6.73,0,0,1-6.73-6.73V223.67A0,0,0,0,1,725.37,223.67Z"
        transform="translate(-119.57 -182.84) rotate(8.58)"
        fill="#fda57d"
      />
      <path
        d="M726.77,224.94a24.33,24.33,0,0,0,16.71,2.57l.31-2.05-16.72-2.52Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <circle
        cx="738.61"
        cy="203.36"
        r="24.23"
        transform="translate(264.61 827.36) rotate(-81.42)"
        fill="#fda57d"
      />
      <path
        d="M717.07,190.81l45.7,6.89s-1.12-19-18.57-20.47S717.07,190.81,717.07,190.81Z"
        transform="translate(-162.77 -76.03)"
        fill="#333"
      />
      <ellipse
        cx="715.3"
        cy="198.8"
        rx="4.23"
        ry="2.25"
        transform="translate(249.28 800.42) rotate(-81.42)"
        fill="#fda57d"
      />
      <ellipse
        cx="762.11"
        cy="205.86"
        rx="4.23"
        ry="2.25"
        transform="translate(282.13 852.72) rotate(-81.42)"
        fill="#fda57d"
      />
      <path
        d="M717,191.43l45.7,6.89s-1.12-19-18.57-20.47S717,191.43,717,191.43Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <g opacity="0.5">
        <rect
          x="204.42"
          y="180.64"
          width="396.16"
          height="547.37"
          transform="matrix(0.99, -0.16, 0.16, 0.99, -230.95, -4.95)"
          fill="url(#206f4f91-e50e-44b0-9342-2d65f420a366)"
        />
      </g>
      <rect
        x="209.14"
        y="184.7"
        width="386.08"
        height="535.27"
        transform="translate(-230.63 -5.02) rotate(-9.31)"
        fill="#f5f5f5"
      />
      <rect
        x="256.27"
        y="417.52"
        width="278.65"
        height="16.89"
        transform="translate(-226.45 -6.44) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="263.1"
        y="459.18"
        width="278.65"
        height="16.89"
        transform="translate(-233.1 -4.78) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="368.64"
        y="273.27"
        width="143.55"
        height="16.89"
        transform="translate(-202.53 -1.09) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="388.13"
        y="314.93"
        width="118.22"
        height="16.89"
        transform="translate(-209.18 0.57) rotate(-9.31)"
        fill={color}
      />
      <rect
        x="270.15"
        y="503.58"
        width="244.88"
        height="16.89"
        transform="translate(-240.41 -5.79) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="277.2"
        y="547.97"
        width="211.1"
        height="16.89"
        transform="translate(-247.72 -6.8) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="284.2"
        y="591.69"
        width="185.77"
        height="16.89"
        transform="translate(-254.87 -7.14) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="290.69"
        y="629.25"
        width="236.43"
        height="16.89"
        transform="translate(-260.52 -1.5) rotate(-9.31)"
        fill="#e0e0e0"
      />
      <rect
        x="298.47"
        y="682.53"
        width="92.88"
        height="16.89"
        transform="translate(-269.98 -11.15) rotate(-9.31)"
        fill={color}
      />
      <g opacity="0.5">
        <path
          d="M354.81,311.49a57.94,57.94,0,1,0-81.3,62.06l.08.25a19.83,19.83,0,0,0,7.16,3.06l0-.27c3.05,1.86,14.93,3.69,27.88,1.53l.28,0c8.21-1.33,16.87-4.25,24-9.77,0,0,0-.16.1-.46a20.64,20.64,0,0,0,4.79-4.58q0-.34,0-.66A57.88,57.88,0,0,0,354.81,311.49Z"
          transform="translate(-162.77 -76.03)"
          fill="url(#d34e425e-14d9-4818-8053-17a79178d3b1)"
        />
      </g>
      <circle
        cx="297.63"
        cy="320.86"
        r="56.2"
        transform="translate(-210.74 -23.67) rotate(-9.31)"
        fill="#f5f5f5"
      />
      <path
        d="M277.19,346.48s-13,3.25-5.6,26.75a19.24,19.24,0,0,0,6.95,3l3.31-26.38Z"
        transform="translate(-162.77 -76.03)"
        fill="#4d8af0"
      />
      <path
        d="M320.07,339.45s13.39-1.09,13.84,23.57a19.24,19.24,0,0,1-5.63,5l-11.56-23.94Z"
        transform="translate(-162.77 -76.03)"
        fill="#4d8af0"
      />
      <circle
        cx="292.23"
        cy="301.74"
        r="24.91"
        transform="translate(-207.72 -24.79) rotate(-9.31)"
        fill="#333"
      />
      <path
        d="M319.82,339.49l-42.88,7-1.19,17.81s-1,8.33,2.45,11.34,32.12,6.48,50.41-7.68a22.67,22.67,0,0,0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48Z"
        transform="translate(-162.77 -76.03)"
        fill="#4d8af0"
      />
      <path
        d="M320.39,339.4l-42.88,7-1.19,17.81s-1,8.33,2.45,11.34,32.12,6.48,50.41-7.68a22.67,22.67,0,0,0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48Z"
        transform="translate(-162.77 -76.03)"
        fill="#4d8af0"
      />
      <path
        d="M320.07,339.45l-42.88,7L276,364.29s-1,8.33,2.45,11.34,32.12,6.48,50.41-7.68a22.67,22.67,0,0,0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48Z"
        transform="translate(-162.77 -76.03)"
        fill="#4d8af0"
      />
      <path
        d="M289.72,328.54h17.38a0,0,0,0,1,0,0v15.87a6.73,6.73,0,0,1-6.73,6.73h-3.93a6.73,6.73,0,0,1-6.73-6.73V328.54A0,0,0,0,1,289.72,328.54Z"
        transform="translate(-213.8 -23.29) rotate(-9.31)"
        opacity="0.1"
      />
      <path
        d="M289.62,327.9H307a0,0,0,0,1,0,0v15.87a6.73,6.73,0,0,1-6.73,6.73h-3.93a6.73,6.73,0,0,1-6.73-6.73V327.9A0,0,0,0,1,289.62,327.9Z"
        transform="translate(-213.7 -23.31) rotate(-9.31)"
        fill="#fda57d"
      />
      <path
        d="M288.34,331.92a25,25,0,0,0,17.16-2.76l-.35-2.11L288,329.87Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <circle
        cx="293.11"
        cy="307.08"
        r="24.91"
        transform="translate(-208.57 -24.58) rotate(-9.31)"
        fill="#fda57d"
      />
      <path
        d="M268.18,302.22l46.89-7.68s-7.11-18.28-24.63-14.16S268.18,302.22,268.18,302.22Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <path
        d="M268.07,301.59,315,293.9s-7.11-18.28-24.63-14.16S268.07,301.59,268.07,301.59Z"
        transform="translate(-162.77 -76.03)"
        fill="#333"
      />
      <ellipse
        cx="268.86"
        cy="309.97"
        rx="2.32"
        ry="4.35"
        transform="matrix(0.99, -0.16, 0.16, 0.99, -209.36, -28.46)"
        fill="#fda57d"
      />
      <ellipse
        cx="316.89"
        cy="302.1"
        rx="2.32"
        ry="4.35"
        transform="translate(-207.46 -20.8) rotate(-9.31)"
        fill="#fda57d"
      />
      <g opacity="0.5">
        <rect
          x="282.63"
          y="165.47"
          width="396.16"
          height="547.37"
          fill="url(#769baff5-4c30-4a3c-b602-35bea0051736)"
        />
      </g>
      <rect x="287.67" y="169.5" width="386.08" height="535.27" fill="#fff" />
      <g opacity="0.5">
        <path
          d="M502,368a59.24,59.24,0,1,1,92.29,49.17l0,.26a20.28,20.28,0,0,1-6.72,4.28l-.08-.26c-2.77,2.38-14.45,6.19-27.87,6.15h-.29c-8.5,0-17.72-1.5-25.84-5.89,0,0-.07-.16-.18-.45a21.1,21.1,0,0,1-5.59-3.83l-.09-.67A59.18,59.18,0,0,1,502,368Z"
          transform="translate(-162.77 -76.03)"
          fill="url(#435858fe-786b-4ccc-9937-2ef148119b2b)"
        />
      </g>
      <circle cx="398.46" cy="291.97" r="57.46" fill="#f5f5f5" />
      <path
        d="M538.69,389.89S525,391,528.62,416a19.67,19.67,0,0,0,6.52,4.15l7.7-26.07Z"
        transform="translate(-162.77 -76.03)"
        fill="#be7c5e"
      />
      <path
        d="M583.12,389.89S596.81,391,593.19,416a19.67,19.67,0,0,1-6.52,4.15L579,394Z"
        transform="translate(-162.77 -76.03)"
        fill="#be7c5e"
      />
      <path
        d="M539.28,349s-1.05,3.07-2.55,6.62c-3.26,7.76.46,37.58,8.26,40.76,8.75,3.57,20.26,5.85,32.21,1.49,10.39-3.79,13.59-37.73,6.25-46-.86-1-1.76-1.93-2.7-2.87Z"
        transform="translate(-162.77 -76.03)"
        fill="#333"
      />
      <circle cx="398.5" cy="271.2" r="25.47" fill="#333" />
      <path
        d="M582.86,389.89H538.43l-4.15,17.77s-2.44,8.23.59,11.85,31.33,11.85,52.13.59a23.18,23.18,0,0,0,.59-14.81c-2.37-8.29-.59-.59-.59-.59Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <path
        d="M583.45,389.89H539l-4.15,17.77s-2.44,8.23.59,11.85,31.33,11.85,52.13.59a23.18,23.18,0,0,0,.59-14.81c-2.37-8.29-.59-.59-.59-.59Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <path
        d="M583.12,389.89H538.69l-4.15,17.77s-2.44,8.23.59,11.85,31.33,11.85,52.13.59a23.18,23.18,0,0,0,.59-14.81c-2.37-8.29-.59-.59-.59-.59Z"
        transform="translate(-162.77 -76.03)"
        fill="#3ad29f"
      />
      <path
        d="M389.55,299.11h17.77a0,0,0,0,1,0,0v16.38a6.73,6.73,0,0,1-6.73,6.73h-4.32a6.73,6.73,0,0,1-6.73-6.73V299.11a0,0,0,0,1,0,0Z"
        opacity="0.1"
      />
      <path
        d="M389.55,298.45h17.77a0,0,0,0,1,0,0v16.38a6.73,6.73,0,0,1-6.73,6.73h-4.32a6.73,6.73,0,0,1-6.73-6.73V298.45a0,0,0,0,1,0,0Z"
        fill="#be7c5e"
      />
      <path
        d="M552.35,377a25.58,25.58,0,0,0,17.77,0v-2.18H552.35Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <circle cx="398.5" cy="276.73" r="25.47" fill="#be7c5e" />
      <path
        d="M536.91,343.09h48.58s-4.15-19.62-22.51-18.36S536.91,343.09,536.91,343.09Z"
        transform="translate(-162.77 -76.03)"
        fill="#333"
      />
      <ellipse cx="373.56" cy="275.65" rx="2.37" ry="4.44" fill="#be7c5e" />
      <ellipse cx="423.32" cy="275.65" rx="2.37" ry="4.44" fill="#be7c5e" />
      <path
        d="M536.91,343.74h48.58s-4.15-19.62-22.51-18.36S536.91,343.74,536.91,343.74Z"
        transform="translate(-162.77 -76.03)"
        opacity="0.1"
      />
      <rect x="339.15" y="401.6" width="278.65" height="16.89" fill="#e0e0e0" />
      <rect
        x="339.15"
        y="443.82"
        width="278.65"
        height="16.89"
        fill="#e0e0e0"
      />
      <rect x="474.26" y="266.5" width="143.55" height="16.89" fill="#e0e0e0" />
      <rect x="486.92" y="308.72" width="118.22" height="16.89" fill={color} />
      <rect
        x="339.15"
        y="486.04"
        width="244.88"
        height="16.89"
        fill="#e0e0e0"
      />
      <rect x="339.15" y="528.26" width="211.1" height="16.89" fill="#e0e0e0" />
      <rect
        x="339.15"
        y="570.49"
        width="185.77"
        height="16.89"
        fill="#e0e0e0"
      />
      <rect
        x="339.15"
        y="612.71"
        width="236.43"
        height="16.89"
        fill="#e0e0e0"
      />
      <rect x="339.15" y="654.93" width="92.88" height="16.89" fill={color} />
      <g opacity="0.5">
        <circle
          cx="652.07"
          cy="663.56"
          r="84.39"
          fill="url(#8c5c6193-e47d-4d82-a8e6-773c48c7bbd6)"
        />
      </g>
      <circle cx="652.07" cy="663.56" r="79.42" fill="#69f0ae" />
      <polygon
        points="617.6 652.96 647.38 680.26 689.57 618.22 704.47 630.63 647.38 705.08 605.19 657.93 617.6 652.96"
        fill="#fff"
      />
    </svg>
  );
};

Hiring.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Hiring.defaultProps = {
  color: "primary",
  style: {}
};

export default Hiring;
