import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const ToDo = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e1f19e5c-5557-4412-8bb7-7a6312267dc8"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1145.7"
      height="817.62"
      viewBox="0 0 1145.7 817.62"
    >
      <defs>
        <linearGradient
          id="bd020c25-3c8c-4c56-bf4e-8fd3789f73bb"
          x1="625"
          y1="842.81"
          x2="625"
          y2="429.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>to do</title>
      <path
        d="M1172.85,495.29A268.06,268.06,0,0,1,862.36,759.81H437.65a364.06,364.06,0,0,1-49.5,3.38c-161.35,0-298-105.86-344.22-251.91A360.77,360.77,0,0,1,27.15,402.19c0-199.38,161.63-361,361-361C548.72,41.19,684.78,146,731.67,291A266.84,266.84,0,0,1,905,227.39C1052.91,227.39,1172.85,347.33,1172.85,495.29Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M1069.94,706.36a268.31,268.31,0,0,1-207.58,53.45H437.65a364.06,364.06,0,0,1-49.5,3.38c-161.35,0-298-105.86-344.22-251.91C78.5,437.39,167.34,384.81,271.5,384.81c101.5,0,188.45,49.94,224.81,120.87a301.82,301.82,0,0,1,54.19-4.87c105.2,0,194.77,53.65,228.59,128.71a295.63,295.63,0,0,1,86.41-12.71C951.3,616.81,1026.71,652.49,1069.94,706.36Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <rect x="275.35" y="317.62" width="474" height="37" fill="#fff" />
      <rect x="275.35" y="397.62" width="474" height="37" fill="#fff" />
      <rect x="275.35" y="477.62" width="474" height="37" fill="#fff" />
      <path
        d="M872.12,374.39l-2.52,2.52,8.1,8.1,18-18-2.52-2.52L877.7,379.88l-5.58-5.49Zm21.78,3.42A14.34,14.34,0,1,1,883.46,364l2.79-2.79a16.74,16.74,0,0,0-6.75-1.35,18,18,0,1,0,18,18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3acc6c"
      />
      <path
        d="M872.12,454.39l-2.52,2.52,8.1,8.1,18-18-2.52-2.52L877.7,459.88l-5.58-5.49Zm21.78,3.42A14.34,14.34,0,1,1,883.46,444l2.79-2.79a16.74,16.74,0,0,0-6.75-1.35,18,18,0,1,0,18,18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3acc6c"
      />
      <ellipse
        cx="573.35"
        cy="792.12"
        rx="510"
        ry="25.5"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M935.52,290.66a7.54,7.54,0,0,1-1.36-4.2c0-9.11,18.58-16.5,41.5-16.5s41.5,7.39,41.5,16.5a7.82,7.82,0,0,1-1.72,4.69c25.52,2.84,42.72,8.18,42.72,14.31,0,9.11-38.06,16.5-85,16.5s-85-7.39-85-16.5C888.16,299,907.46,293.36,935.52,290.66Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M786.45,115.64a6.23,6.23,0,0,1-1.11-3.43c0-7.44,15.16-13.46,33.85-13.46s33.86,6,33.86,13.46a6.37,6.37,0,0,1-1.39,3.82c20.81,2.33,34.84,6.68,34.84,11.68,0,7.43-31,13.46-69.34,13.46s-69.35-6-69.35-13.46C747.81,122.41,763.56,117.84,786.45,115.64Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M332.77,180.25a7.49,7.49,0,0,1-2.24-3.8c-2-8.9,14.54-20.15,36.91-25.13s42.12-1.82,44.1,7.08a7.84,7.84,0,0,1-.65,4.95c25.52-2.77,43.47-1.3,44.8,4.68,2,8.89-33.56,24.38-79.38,34.58s-84.57,11.28-86.55,2.38C288.35,198.66,306,189,332.77,180.25Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M231.73,171.81c-2.33-1.35-5.48-.06-7.08,2.11s-2.05,5-2.45,7.63c-.89,5.91-1.54,12.7,2.45,17.16-6.52-19.77-25.27-34.92-46-37.13"
        transform="translate(-27.15 -41.19)"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="3"
        opacity="0.1"
      />
      <path
        d="M434.76,265.06c-1.5-.87-3.52,0-4.55,1.36a10.83,10.83,0,0,0-1.58,4.9c-.57,3.81-1,8.17,1.58,11a35.86,35.86,0,0,0-29.55-23.87"
        transform="translate(-27.15 -41.19)"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="3"
        opacity="0.1"
      />
      <path
        d="M765.26,205.78c-1.5-.86-3.52,0-4.55,1.36a10.83,10.83,0,0,0-1.58,4.91c-.57,3.8-1,8.16,1.58,11a35.88,35.88,0,0,0-29.55-23.87"
        transform="translate(-27.15 -41.19)"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="3"
        opacity="0.1"
      />
      <path
        d="M231.65,808.24a37,37,0,0,1-.8,7.76c-.1.48-.21,1-.32,1.41-2.84,11.39-10.85,19.72-20.41,20.25-.32,0-.64,0-1,0-10.11,0-18.66-8.72-21.48-20.73-.08-.32-.15-.64-.22-1a37,37,0,0,1-.8-7.76c0-16.27,10.07-29.45,22.5-29.45S231.65,792,231.65,808.24Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M231.65,808.24a37,37,0,0,1-.8,7.76c-.1.48-.21,1-.32,1.41-.34,0-.67,0-1,0a45.76,45.76,0,0,1-7.36-1,44.92,44.92,0,0,1-6.56,1.5,45.87,45.87,0,0,1-5.14.48l-1.74,0a46.41,46.41,0,0,1-6.16-.41,45.17,45.17,0,0,1-9.67-2.4,45.56,45.56,0,0,1-5.22,1.4c-.08-.32-.15-.64-.22-1a37,37,0,0,1-.8-7.76c0-16.27,10.07-29.45,22.5-29.45S231.65,792,231.65,808.24Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M279.65,753.38a45.54,45.54,0,0,0-4.9-20.61L248.29,741l23.23-13.66a45.73,45.73,0,0,0-34.36-19.58,45.65,45.65,0,0,0-3.57-4.72l-38,11.83,31.17-18.33a45.73,45.73,0,0,0-72,24.39l32.55,37.47L152,732.86a45.74,45.74,0,0,0,40.93,80.7,45.92,45.92,0,0,0,29.28.81,45.78,45.78,0,0,0,55.62-44.66c0-1,0-2-.1-3A45.63,45.63,0,0,0,279.65,753.38Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
      />
      <path
        d="M278.86,761.86a121.9,121.9,0,0,0-42.34-.54c-15.89,2.63-32.13,8.41-47.67,4.19-9.12-2.48-17-8.22-25.91-11.41a49.18,49.18,0,0,0-26.75-1.6,45.76,45.76,0,0,0,56.69,61.06,45.92,45.92,0,0,0,29.28.81,45.78,45.78,0,0,0,55.62-44.66c0-1,0-2-.1-3A45.19,45.19,0,0,0,278.86,761.86Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M1041,758.09l40.78-24a98.35,98.35,0,0,0-20.85-25L984,733.09l60.28-35.44a98,98,0,0,0-145.08,86c0,54.12,43.88,56,98,56s98-1.88,98-56a97.65,97.65,0,0,0-8.41-39.76Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
      />
      <path
        d="M1051.33,810.7c-4.16-4.51-9.33-8-14.45-11.35-7.41-4.91-15.07-9.93-23.79-11.6-7.67-1.47-15.58-.23-23.37-.68a54.62,54.62,0,0,1-35.81-16.41c-5.57-5.76-9.95-12.83-16.65-17.23-7.22-4.74-16.38-5.76-24.94-4.58a66.11,66.11,0,0,0-7.38,1.51,97.73,97.73,0,0,0-5.79,33.25c0,54.12,43.88,56,98,56,26.26,0,50.11-.44,67.71-7.08l-2.94-5.5C1058.86,821.29,1055.74,815.49,1051.33,810.7Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M696.29,834.19a7.31,7.31,0,0,0-2.75-3.94c-.16-.11-.33-.21-.5-.31a12.33,12.33,0,0,0-4.42-1.13c-5.74-.74-11.77-1.85-16.12-5.61-1.26-1.09-2.33-2.36-3.49-3.53a62.08,62.08,0,0,0-7.93-6.41,2.84,2.84,0,0,0-2.06-.76,10,10,0,0,1-2.63-3.15,12.08,12.08,0,0,1-.86-4.89c-.58-17-4.19-34.48-.18-51a9.94,9.94,0,0,0-.34-5.61c.81-.37,1.62-.75,2.42-1.16a59.58,59.58,0,0,0,17.77-14.25,27.69,27.69,0,0,0,5.41-8.53c1.51-4.24,1.29-8.88.75-13.34a204.17,204.17,0,0,0-4.71-23.33l-4.59-19c-1-4.18-2.11-8.47-4.33-12.12l.21,0c-.15-2.11-.31-4.22-.62-6.31a89,89,0,0,0-2.7-11.25c-.4-1.4-.71-3.35-1.17-5.23.83-8.53,4.15-16.81,4.71-25.31.18.24.35.48.54.72,1.38,1.72,3.28,3,4.68,4.67,2.62,3.18,3.21,7.48,3.76,11.53a18.83,18.83,0,0,0,1.55,6.12,20.12,20.12,0,0,1,1.27,2.49c.58,1.73.15,3.61-.2,5.41-.49,2.56-.68,5.54,1.17,7.41A5.86,5.86,0,0,0,684.6,648a8.19,8.19,0,0,0,7-3.09c1.89-2.45,2.16-5.74,2.08-8.81a20.34,20.34,0,0,0-1.12-6.8,35.54,35.54,0,0,0-3.83-6.5c-2.68-4.14-4.65-8.67-6.86-13.07a74.64,74.64,0,0,0-6.09-10.31c-1.25-1.74-2.61-3.41-3.73-5.22-.37-.6-2.2-5.07-3.91-9.54.88-.18,1.79-.54,2-1.36a2.62,2.62,0,0,0-.15-1.43,86.23,86.23,0,0,1-2-39.75c.66-3.58,1.55-7.15,1.54-10.78s-1-7.45-3.67-10c-1.64-1.57-3.78-2.56-5.48-4.06-3.27-2.9-4.58-7.35-5.42-11.61a16.55,16.55,0,0,0-1.83-5.71,8.68,8.68,0,0,0-.88-1.12,57,57,0,0,0,3.54-19.91,58.13,58.13,0,0,0-2-15.1c.54,1.34,1,2.71,1.49,4.11-4.18-21.82-20.55-38.1-40.1-38.1h-.54c-22.17,0-40.25,20.93-41.11,47.14a27,27,0,0,0-12.19,26.69,26.88,26.88,0,0,0-7.87,19,27.42,27.42,0,0,0,27.61,27.22,27.76,27.76,0,0,0,13.31-3.4,45.86,45.86,0,0,0,1.21,6.68c.92,3.48,2.34,6.84,3,10.37s.62,7.41-1.3,10.47a26.64,26.64,0,0,0-3.45,7.7,37,37,0,0,0-.61,10c.09,3.06.17,6.11.26,9.17.34,12,.67,24-1.76,35.78-1.1,5.34-3.88,10.41-3.25,15.83a22.65,22.65,0,0,0,1.7,5.7c1,2.62,2.3,5.44,4.84,6.71a9.82,9.82,0,0,0,3.94.85,27.41,27.41,0,0,0,5-.22c1-.14,2.35-.81,2-1.77a1.88,1.88,0,0,0-.72-.79,11.05,11.05,0,0,1-4.2-8.61c0-4.74,3.15-9.31,2.18-14-.61-2.88-2.77-5.67-1.86-8.47,2-6.33,2.3-13.12,4-19.54.57-2.09,1.14-4.19,1.72-6.28,1-3.74,2-7.49,2.87-11.27A121.18,121.18,0,0,0,613,567.29a30.12,30.12,0,0,1,3.27,9.56c.3,2.43.14,5,1.28,7.17s3.4,3.76,4.75,5.85a33.63,33.63,0,0,1-1.89,3.69,51.24,51.24,0,0,0-3.87,5.72c-1,2-1.7,4.06-2.55,6.09-2.85,6.82-7.74,13-8.45,20.35-.58,5.91,1.66,11.69,3.93,17.18q2,4.92,4.15,9.8c.09.21.19.44.3.65.17,1.67.39,3.33.61,5l3.67,0c1.5,2,3.17,4,4.07,6.33a20.38,20.38,0,0,1,1,5.59c.73,9,.59,18.23,4,26.6,1,2.49,2,5,2.1,7.53a29.34,29.34,0,0,0,1,6.24,31.57,31.57,0,0,1,.8,6.72,105.33,105.33,0,0,1-.3,11.65c-8,5-14.66,12.22-21.86,18.47a120.3,120.3,0,0,1-33.34,20.47c0-.19,0-.39,0-.58-3.42-.16-6.68,1-9.78,2.59-1.09.54-2.15,1.12-3.2,1.69a5.33,5.33,0,0,0-1.55,1.1c-1.4,1.63-.38,4.1.69,6q5.34,9.35,10.68,18.68c.82,1.44,1.65,2.89,2.33,4.4,1.16,2.57,1.9,5.3,3.2,7.8a38.64,38.64,0,0,0,5.52,7.37q3.48,4,7,7.91a9.29,9.29,0,0,0,2.68,2.36,3.26,3.26,0,0,0,3.41-.15,3.43,3.43,0,0,0,.89-1.21,7.38,7.38,0,0,0,.72-3.61,7.69,7.69,0,0,0-2.53-5.35c-1-.83-2.2-1.51-2.61-2.7a4.86,4.86,0,0,1-.12-2c.5-5.89,1-11.84,2.76-17.48,1.32-4.22,3.37-8.56,2.39-12.87a12.09,12.09,0,0,0-2-.43,29.35,29.35,0,0,1,2.18-2.28c3.54-3.32,7.85-5.73,12.11-8.1l18.8-10.48q1.3,7.22,2.63,14.41c.31,1.66.61,3.32.91,5L637,803a50.87,50.87,0,0,1,.81,5.61c.12,1.86,0,3.72,0,5.57a41.43,41.43,0,0,1-.37,6.21,26.27,26.27,0,0,1-.89,3.41l-.14,0a2.21,2.21,0,0,0-.8,1.17,31,31,0,0,0-2.34,8.64,11,11,0,0,0,1.4,6.81,2.74,2.74,0,0,0,1,1.11,3.33,3.33,0,0,0,1.6.23l24.71-.52a54.29,54.29,0,0,1,9.11.33c2.4.36,4.76,1,7.18,1.19,5.63.34,11-2.2,16-4.67a4,4,0,0,0,2-1.54A3.21,3.21,0,0,0,696.29,834.19Z"
        transform="translate(-27.15 -41.19)"
        fill="url(#bd020c25-3c8c-4c56-bf4e-8fd3789f73bb)"
      />
      <path
        d="M564.23,506.07a27.75,27.75,0,0,1-.28-3.9,27,27,0,0,1,12.22-22.6c.84-26,18.53-46.81,40.23-46.81,22.24,0,40.27,21.83,40.27,48.75s-18,48.74-40.27,48.74a34.12,34.12,0,0,1-6.25-.58,27,27,0,1,1-45.92-23.6Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M618.52,439.12c-21.7,0-39.39,20.78-40.23,46.8a27,27,0,0,0-12.22,22.61,28,28,0,0,0,.28,3.9,26.93,26.93,0,0,0-7.7,18.88,28.42,28.42,0,0,0,.21,3.35,27,27,0,0,1,5.9-28.59,27.75,27.75,0,0,1-.28-3.9,27,27,0,0,1,12.22-22.6c.84-26,18.53-46.81,40.23-46.81,19.14,0,35.16,16.17,39.25,37.84C650.43,452.2,635.74,439.12,618.52,439.12Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M641.19,491.66a10.3,10.3,0,0,0,.52,4.72c.93,2.15,3.21,4.07,2.54,6.31-.43,1.45-2,2.25-3.38,2.73-6.76,2.29-14.14.93-21.27,1.24a68.34,68.34,0,0,1-7.15.25,11.42,11.42,0,0,1-6.65-2.32A57.08,57.08,0,0,0,616.26,498a11.82,11.82,0,0,0,2.1-2c1.52-2,1.75-4.67,1.84-7.18s.07-5,0-7.46q7.67-.09,15.31-.07c1.64,0,6.64-.4,7.21,1.37.29.88-.81,3.46-1,4.45C641.46,488.62,641.29,490.14,641.19,491.66Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
      <path
        d="M641.19,491.66a10.3,10.3,0,0,0,.52,4.72c.93,2.15,3.21,4.07,2.54,6.31-.43,1.45-2,2.25-3.38,2.73-6.76,2.29-14.14.93-21.27,1.24a68.34,68.34,0,0,1-7.15.25,11.42,11.42,0,0,1-6.65-2.32A57.08,57.08,0,0,0,616.26,498a11.82,11.82,0,0,0,2.1-2c1.52-2,1.75-4.67,1.84-7.18s.07-5,0-7.46q7.67-.09,15.31-.07c1.64,0,6.64-.4,7.21,1.37.29.88-.81,3.46-1,4.45C641.46,488.62,641.29,490.14,641.19,491.66Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M666.6,584.2a34.4,34.4,0,0,1-2,16.81,320.24,320.24,0,0,0-33.06-1.74,18.57,18.57,0,0,0,3.53-8.71,48.1,48.1,0,0,0,0-8.9l21.44-.07a19.89,19.89,0,0,1,4.69.35C663.36,582.43,664.5,583.81,666.6,584.2Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
      <path
        d="M672.61,596c1.1,1.81,2.43,3.46,3.65,5.19a74.08,74.08,0,0,1,6,10.24c2.16,4.36,4.09,8.86,6.71,13a35.44,35.44,0,0,1,3.76,6.46,20.8,20.8,0,0,1,1.09,6.75c.08,3.05-.19,6.32-2,8.75a8,8,0,0,1-6.9,3.07,5.64,5.64,0,0,1-3.59-1.56c-1.81-1.85-1.63-4.82-1.15-7.36.34-1.78.77-3.65.2-5.37a19,19,0,0,0-1.24-2.47,19.14,19.14,0,0,1-1.52-6.08c-.54-4-1.11-8.29-3.68-11.44-1.37-1.7-3.23-2.94-4.58-4.65-.71-.9-1.27-1.91-2-2.76-1.07-1.22-2.56-2.15-3.18-3.65a14.6,14.6,0,0,1-.56-3,22.17,22.17,0,0,0-1.76-4.67c-2.45-5.61-3.11-11.82-3.73-17.91a25.38,25.38,0,0,0,7.7-1.52C665,577.17,671.86,594.72,672.61,596Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
      <path
        d="M672.61,596c1.1,1.81,2.43,3.46,3.65,5.19a74.08,74.08,0,0,1,6,10.24c2.16,4.36,4.09,8.86,6.71,13a35.44,35.44,0,0,1,3.76,6.46,20.8,20.8,0,0,1,1.09,6.75c.08,3.05-.19,6.32-2,8.75a8,8,0,0,1-6.9,3.07,5.64,5.64,0,0,1-3.59-1.56c-1.81-1.85-1.63-4.82-1.15-7.36.34-1.78.77-3.65.2-5.37a19,19,0,0,0-1.24-2.47,19.14,19.14,0,0,1-1.52-6.08c-.54-4-1.11-8.29-3.68-11.44-1.37-1.7-3.23-2.94-4.58-4.65-.71-.9-1.27-1.91-2-2.76-1.07-1.22-2.56-2.15-3.18-3.65a14.6,14.6,0,0,1-.56-3,22.17,22.17,0,0,0-1.76-4.67c-2.45-5.61-3.11-11.82-3.73-17.91a25.38,25.38,0,0,0,7.7-1.52C665,577.17,671.86,594.72,672.61,596Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <circle cx="603.56" cy="430.25" r="18.01" fill="#a0616a" />
      <path
        d="M666.63,655.09c3.39,4,4.72,9.36,5.94,14.48l4.5,18.82a203.29,203.29,0,0,1,4.61,23.17c.53,4.43.75,9-.73,13.25a27.46,27.46,0,0,1-5.3,8.47,58.45,58.45,0,0,1-17.4,14.15c-3.53,1.83-7.26,3.23-10.88,4.86-5.41,2.43-10.58,5.35-15.75,8.27l-19.42,11c-4.17,2.36-8.38,4.75-11.85,8.05a29.25,29.25,0,0,0-7.26,11,5.49,5.49,0,0,1-1.71,2.83c-1.1.76-2.6.51-3.88.12A22.68,22.68,0,0,1,572,770.84a117.51,117.51,0,0,0,38.81-22.69c8.67-7.63,16.49-16.73,27.07-21.37,4.62-2,10.18-3.57,12.34-8.14a16.68,16.68,0,0,0,1.13-6.67c.19-6.27.38-12.61-.82-18.77-1-5.2-3-10.17-4.47-15.26-3-10.19-4-20.84-5-31.42a176.82,176.82,0,0,1,20.83-1.23,2.37,2.37,0,0,1,1.72.46,2.51,2.51,0,0,1,.53,1.37C664.7,649.87,664.83,653,666.63,655.09Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
      <path
        d="M666.63,655.09c3.39,4,4.72,9.36,5.94,14.48l4.5,18.82a203.29,203.29,0,0,1,4.61,23.17c.53,4.43.75,9-.73,13.25a27.46,27.46,0,0,1-5.3,8.47,58.45,58.45,0,0,1-17.4,14.15c-3.53,1.83-7.26,3.23-10.88,4.86-5.41,2.43-10.58,5.35-15.75,8.27l-19.42,11c-4.17,2.36-8.38,4.75-11.85,8.05a29.25,29.25,0,0,0-7.26,11,5.49,5.49,0,0,1-1.71,2.83c-1.1.76-2.6.51-3.88.12A22.68,22.68,0,0,1,572,770.84a117.51,117.51,0,0,0,38.81-22.69c8.67-7.63,16.49-16.73,27.07-21.37,4.62-2,10.18-3.57,12.34-8.14a16.68,16.68,0,0,0,1.13-6.67c.19-6.27.38-12.61-.82-18.77-1-5.2-3-10.17-4.47-15.26-3-10.19-4-20.84-5-31.42a176.82,176.82,0,0,1,20.83-1.23,2.37,2.37,0,0,1,1.72.46,2.51,2.51,0,0,1,.53,1.37C664.7,649.87,664.83,653,666.63,655.09Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M564.69,779.16q5.22,9.27,10.45,18.55c.81,1.43,1.62,2.87,2.29,4.37,1.13,2.55,1.85,5.26,3.13,7.74a38.54,38.54,0,0,0,5.4,7.32l6.82,7.86a9.18,9.18,0,0,0,2.63,2.34,3.14,3.14,0,0,0,3.34-.15,3.64,3.64,0,0,0,.87-1.21,7.32,7.32,0,0,0,.7-3.58,7.69,7.69,0,0,0-2.48-5.31c-.94-.82-2.15-1.5-2.55-2.68a5,5,0,0,1-.12-2c.49-5.85,1-11.75,2.71-17.35,1.29-4.19,3.29-8.5,2.33-12.78-1.82-.55-4.19-.93-5.28.63-2.12,3-2.25,1.9-5.52,1.44s-6.34-.66-8.73-3.22c-3.18-3.38-2.91-8.62-2.44-13.23-3.35-.16-6.54,1.05-9.57,2.57-1.07.54-2.11,1.11-3.14,1.68a5.16,5.16,0,0,0-1.52,1.09C562.64,774.86,563.64,777.31,564.69,779.16Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M665.29,640.06a86.27,86.27,0,0,1,2.64,11.17c.31,2.08.46,4.18.62,6.27-7.11,1.69-14.49,1.77-21.8,1.85l-30.47.33a65.51,65.51,0,0,1-.83-12.42c.43-6.83,3-13.5,2.57-20.33a188.56,188.56,0,0,1,25.3-2.76,11.79,11.79,0,0,1,4.59.44c1.38.5,2.53,1.49,3.86,2.12,3,1.42,7.46.72,10,3C664.08,631.86,664.47,637.14,665.29,640.06Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M665.29,640.06a86.27,86.27,0,0,1,2.64,11.17c.31,2.08.46,4.18.62,6.27-7.11,1.69-14.49,1.77-21.8,1.85l-30.47.33a65.51,65.51,0,0,1-.83-12.42c.43-6.83,3-13.5,2.57-20.33a188.56,188.56,0,0,1,25.3-2.76,11.79,11.79,0,0,1,4.59.44c1.38.5,2.53,1.49,3.86,2.12,3,1.42,7.46.72,10,3C664.08,631.86,664.47,637.14,665.29,640.06Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M663.56,650.14c2.3,10.84-.13,22.05-.7,33.12-.4,7.92.16,15.86.39,23.79a33.05,33.05,0,0,1-.31,6.82,34.42,34.42,0,0,1-1.81,5.85l-2.74,7.3c-2.57,6.86-5.19,14.21-2.57,21.36a10,10,0,0,1,.4,5.77c-3.92,16.39-.39,33.79.17,50.63a12.23,12.23,0,0,0,.85,4.85c1.4,3,4.85,4.4,6.66,7.13,2.2,3.31,1.41,8-1.18,11s-6.62,4.49-10.58,4.82c-4.95.41-9.91-.79-14.77-1.58l-.54-.52c-.61-3.37,1.24-6.49,1.82-9.94a42.33,42.33,0,0,0,.37-6.17c0-1.84.1-3.69,0-5.53a52.57,52.57,0,0,0-.79-5.57l-4.14-22.92-.89-4.94-3.71-20.58c-.7-3.89,1-8.24,1.46-12.16.93-8.13,1.86-16.3,1.59-24.47a32.34,32.34,0,0,0-.79-6.67,29.59,29.59,0,0,1-.93-6.2c-.06-2.52-1.07-5-2.06-7.48-3.29-8.31-3.16-17.5-3.87-26.41a20.45,20.45,0,0,0-1-5.55c-1-2.72-3.08-4.9-4.7-7.31s-2.85-5.42-1.93-8.18c1.46-4.41,7.45-5.82,11.08-7.11a31.16,31.16,0,0,1,19.37-.65A66.76,66.76,0,0,1,663.56,650.14Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
      <path
        d="M635.94,840.51a2.71,2.71,0,0,0,1,1.1,3.37,3.37,0,0,0,1.58.23l24.18-.52a52.06,52.06,0,0,1,8.92.33c2.35.35,4.65,1,7,1.18,5.5.34,10.73-2.18,15.67-4.64a4,4,0,0,0,1.92-1.53,3.25,3.25,0,0,0,0-2.36,7.26,7.26,0,0,0-2.7-3.91,5,5,0,0,0-.49-.31,11.85,11.85,0,0,0-4.32-1.12c-5.62-.74-11.53-1.84-15.79-5.58-1.23-1.07-2.27-2.33-3.41-3.5a59.28,59.28,0,0,0-7.76-6.36,2.73,2.73,0,0,0-2-.76,2.55,2.55,0,0,0-1.11.64,7.67,7.67,0,0,0-2.63,3.25,3,3,0,0,0,1.3,3.63c1,.39,2,.19,2.82.73-1.74,1.26-4.43,1.89-6.39,3.2a21.73,21.73,0,0,1-6.43,3.4c-2.36.61-5.17.19-6.71-1.7-.83-1-1.88-2.57-3-1.9a2.14,2.14,0,0,0-.79,1.15,31.12,31.12,0,0,0-2.29,8.59A11,11,0,0,0,635.94,840.51Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M642.45,587.35a16,16,0,0,1,4.15.46,17.68,17.68,0,0,1,3.7,1.7l13.25,7.34a12.36,12.36,0,0,1,2.69,1.82c1.91,1.83,2.46,4.66,2.57,7.31.45,10.3-4.2,20.18-4.79,30.48a39.12,39.12,0,0,0,1.64,13.6c.33,1.09.66,2.42-.14,3.24a3,3,0,0,1-1,.6c-4.19,1.63-8.76,2-13.24,2.33-11,.84-22.06,1.68-33,.21a3.79,3.79,0,0,1-1.56-.44,4,4,0,0,1-1.33-1.92q-2.07-4.85-4-9.72c-2.23-5.46-4.42-11.2-3.86-17.07.7-7.28,5.48-13.43,8.27-20.2.84-2,1.5-4.12,2.51-6.05a50,50,0,0,1,3.78-5.68c1.07-1.53,2.1-5,3.41-6,1.6-1.31,6.12-1.28,8.15-1.52A69,69,0,0,1,642.45,587.35Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M564.69,779.16q5.22,9.27,10.45,18.55c.81,1.43,1.62,2.87,2.29,4.37,1.13,2.55,1.85,5.26,3.13,7.74a38.54,38.54,0,0,0,5.4,7.32l6.82,7.86a9.18,9.18,0,0,0,2.63,2.34,3.14,3.14,0,0,0,3.34-.15,3.64,3.64,0,0,0,.87-1.21,7.32,7.32,0,0,0,.7-3.58,22.83,22.83,0,0,1-6.62-4.88,33.16,33.16,0,0,1-3.86-5.79q-1.4-2.47-2.81-5-7.24-12.74-14.5-25.48a28.92,28.92,0,0,1-3.86-10.83c-1.07.54-2.11,1.11-3.14,1.68a5.16,5.16,0,0,0-1.52,1.09C562.64,774.86,563.64,777.31,564.69,779.16Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M635.94,840.51a2.71,2.71,0,0,0,1,1.1,3.37,3.37,0,0,0,1.58.23l24.18-.52a52.06,52.06,0,0,1,8.92.33c2.35.35,4.65,1,7,1.18,5.5.34,10.73-2.18,15.67-4.64a4,4,0,0,0,1.92-1.53,3.25,3.25,0,0,0,0-2.36,7.26,7.26,0,0,0-2.7-3.91c-.35.22-.68.46-1,.69a28.54,28.54,0,0,1-11,5,56.65,56.65,0,0,1-11.86.86c-9.13,0-18.33.06-27.35-1.58-1.82-.33-5.51-2-7.8-1.57A11,11,0,0,0,635.94,840.51Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M609.05,500a179.66,179.66,0,0,0,26.5,2.51c2.19,0,4.84-.22,5.81-2.18.45-.92.42-2.06,1.06-2.87,1.19-1.51,3.59-.76,5.3.11,2.4,1.22,4.91,2.54,6.34,4.82a16.08,16.08,0,0,1,1.79,5.67c.84,4.23,2.11,8.65,5.32,11.53,1.66,1.49,3.75,2.46,5.35,4,2.59,2.52,3.6,6.3,3.6,9.91s-.86,7.16-1.51,10.72a86.9,86.9,0,0,0,2,39.46,2.71,2.71,0,0,1,.14,1.43c-.25.92-1.37,1.25-2.32,1.4-14.67,2.42-30.42.13-43.92,6.36-1.13-2.78-3.91-4.35-5.29-7-1.11-2.15-1-4.71-1.25-7.12-.81-6.51-5-12.06-7.32-18.19-2.07-5.37-2.79-11.28-5.68-16.26-1-1.76-2.31-3.37-3.32-5.15a39.5,39.5,0,0,1-2.37-5.46,38.54,38.54,0,0,1-2.74-10.05c-.58-7,2.67-13.69,6.51-19.53C604.54,501.87,606.39,499.55,609.05,500Z"
        transform="translate(-27.15 -41.19)"
        fill="#ff6f61"
      />
      <path
        d="M651.54,524.89c1.68.37,2.66,2.06,3.44,3.59a19,19,0,0,1,1.32,3,17.32,17.32,0,0,1,.55,5.37,12.56,12.56,0,0,1-.36,3.41,4.52,4.52,0,0,1-2,2.7"
        transform="translate(-27.15 -41.19)"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        opacity="0.1"
      />
      <ellipse
        cx="626.15"
        cy="458.43"
        rx="20.13"
        ry="9.94"
        transform="translate(-121.16 128.12) rotate(-14.34)"
        fill="#3f3d56"
      />
      <path
        d="M627.55,464.35c9.58-2.45,16.67-7.89,17.17-12.8a5.32,5.32,0,0,1,.94,1.89c1.36,5.32-6.27,11.86-17,14.62s-20.61.67-22-4.65a5,5,0,0,1-.13-1.81C609.5,465.48,618.17,466.75,627.55,464.35Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M610.12,646.39l-2.52,2.52,8.1,8.1,18-18-2.52-2.52L615.7,651.88l-5.58-5.49Zm21.78,3.42A14.34,14.34,0,1,1,621.46,636l2.79-2.79a16.74,16.74,0,0,0-6.75-1.35,18,18,0,1,0,18,18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3acc6c"
      />
      <path
        d="M617,530.19a31,31,0,0,0-5-14.11,12.2,12.2,0,0,0-4.54-4.4,5.6,5.6,0,0,0-6,.47,8.65,8.65,0,0,0-2.17,4,48,48,0,0,0-3.18,20.3c0,6.3.09,12.68,1.68,18.78.91,3.46,2.3,6.79,3,10.3s.61,7.36-1.27,10.4a26.29,26.29,0,0,0-3.37,7.65,37.27,37.27,0,0,0-.61,9.9l.26,9.11c.33,11.88.66,23.88-1.72,35.52-1.08,5.32-3.8,10.34-3.18,15.73a22.6,22.6,0,0,0,1.66,5.65c1,2.6,2.25,5.41,4.74,6.67a9.39,9.39,0,0,0,3.85.84,26.3,26.3,0,0,0,4.94-.21c1-.14,2.3-.81,2-1.77a1.94,1.94,0,0,0-.7-.78,11,11,0,0,1-4.11-8.54c0-4.72,3.08-9.25,2.13-13.87-.59-2.86-2.7-5.63-1.82-8.41,2-6.28,2.26-13,4-19.4l1.68-6.24c1-3.72,2-7.43,2.81-11.19a122.59,122.59,0,0,0,2.7-31.68c-.07-1.66.85-3.55,1-5.2.16-2,0-3.92,0-5.87C615.76,545.78,617.8,538.21,617,530.19Z"
        transform="translate(-27.15 -41.19)"
        fill="#a0616a"
      />
    </svg>
  );
};

ToDo.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

ToDo.defaultProps = {
  color: "primary",
  style: {}
};

export default ToDo;
