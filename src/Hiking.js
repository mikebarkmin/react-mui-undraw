import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Hiking = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a6f2a3fe-ee7b-4c46-9096-1e4866052bb7"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1145.7"
      height="817.62"
      viewBox="0 0 1145.7 817.62"
    >
      <defs>
        <linearGradient
          id="f537df86-fe7c-46a4-b2c3-f27b90264000"
          x1="625"
          y1="842.81"
          x2="625"
          y2="429.81"
          gradientTransform="matrix(-1, 0, 0, 1, 1262.36, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>hiking</title>
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
      <ellipse
        cx="573.35"
        cy="792.12"
        rx="510"
        ry="25.5"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M566.07,834.19a7.37,7.37,0,0,1,2.75-3.94c.16-.11.33-.21.5-.31a12.33,12.33,0,0,1,4.42-1.13c5.74-.74,11.77-1.85,16.13-5.61,1.25-1.09,2.32-2.36,3.48-3.53a62.08,62.08,0,0,1,7.93-6.41,2.84,2.84,0,0,1,2.06-.76,10,10,0,0,0,2.63-3.15,12.08,12.08,0,0,0,.86-4.89c.58-17,4.19-34.48.18-51a9.94,9.94,0,0,1,.34-5.61c-.81-.37-1.62-.75-2.41-1.16a59.49,59.49,0,0,1-17.78-14.25,27.69,27.69,0,0,1-5.41-8.53c-1.51-4.24-1.29-8.88-.75-13.34a204.17,204.17,0,0,1,4.71-23.33l4.59-19c1-4.18,2.11-8.47,4.33-12.12l-.21,0c.15-2.11.31-4.22.62-6.31a89,89,0,0,1,2.7-11.25c.4-1.4.71-3.35,1.17-5.23-.83-8.53-4.15-16.81-4.71-25.31-.18.24-.35.48-.54.72-1.38,1.72-3.28,3-4.68,4.67-2.62,3.18-3.21,7.48-3.76,11.53a18.83,18.83,0,0,1-1.55,6.12,20.12,20.12,0,0,0-1.27,2.49c-.58,1.73-.15,3.61.2,5.41.5,2.56.68,5.54-1.16,7.41a5.89,5.89,0,0,1-3.68,1.57,8.19,8.19,0,0,1-7-3.09c-1.89-2.45-2.16-5.74-2.08-8.81a20.59,20.59,0,0,1,1.12-6.8,35.54,35.54,0,0,1,3.83-6.5c2.68-4.14,4.65-8.67,6.86-13.07a74.64,74.64,0,0,1,6.09-10.31c1.25-1.74,2.61-3.41,3.73-5.22.37-.6,2.2-5.07,3.91-9.54-.88-.18-1.79-.54-2-1.36a2.62,2.62,0,0,1,.15-1.43,86.23,86.23,0,0,0,2.05-39.75c-.66-3.58-1.55-7.15-1.54-10.78s1-7.45,3.67-10c1.64-1.57,3.78-2.56,5.48-4.06,3.28-2.9,4.58-7.35,5.42-11.61a16.55,16.55,0,0,1,1.83-5.71,8.68,8.68,0,0,1,.88-1.12,57,57,0,0,1-3.54-19.91,58.13,58.13,0,0,1,2-15.1c-.54,1.34-1,2.71-1.49,4.11,4.18-21.82,20.55-38.1,40.1-38.1h.54c22.17,0,40.25,20.93,41.11,47.14A27,27,0,0,1,701,503.64a26.88,26.88,0,0,1,7.87,19,27.42,27.42,0,0,1-27.61,27.22,27.76,27.76,0,0,1-13.31-3.4,44.56,44.56,0,0,1-1.21,6.68c-.92,3.48-2.34,6.84-3.05,10.37s-.62,7.41,1.3,10.47a26.64,26.64,0,0,1,3.45,7.7,37,37,0,0,1,.61,10c-.09,3.06-.17,6.11-.26,9.17-.34,12-.67,24,1.76,35.78,1.1,5.34,3.88,10.41,3.25,15.83a22.65,22.65,0,0,1-1.7,5.7c-1,2.62-2.3,5.44-4.84,6.71a9.82,9.82,0,0,1-3.94.85,27.41,27.41,0,0,1-5-.22c-1-.14-2.35-.81-2-1.77a2,2,0,0,1,.72-.79,11.05,11.05,0,0,0,4.2-8.61c0-4.74-3.15-9.31-2.18-14,.61-2.88,2.77-5.67,1.86-8.47-2-6.33-2.3-13.12-4-19.54-.57-2.09-1.14-4.19-1.72-6.28-1-3.74-2-7.49-2.87-11.27a121.18,121.18,0,0,1-2.88-27.51,30.12,30.12,0,0,0-3.27,9.56c-.3,2.43-.14,5-1.28,7.17s-3.4,3.76-4.75,5.85a33.63,33.63,0,0,0,1.89,3.69,51.24,51.24,0,0,1,3.87,5.72c1,2,1.7,4.06,2.55,6.09,2.85,6.82,7.74,13,8.45,20.35.58,5.91-1.66,11.69-3.93,17.18q-2,4.92-4.15,9.8c-.09.21-.19.44-.3.65-.17,1.67-.39,3.33-.61,5l-3.67,0c-1.5,2-3.17,4-4.07,6.33a20.38,20.38,0,0,0-1,5.59c-.73,9-.59,18.23-4,26.6-1,2.49-2,5-2.1,7.53a29.34,29.34,0,0,1-1,6.24,31.57,31.57,0,0,0-.8,6.72,107.84,107.84,0,0,0,.3,11.65c8,5,14.66,12.22,21.86,18.47a120.35,120.35,0,0,0,33.35,20.47l-.06-.58c3.42-.16,6.68,1,9.78,2.59,1.09.54,2.15,1.12,3.2,1.69a5.33,5.33,0,0,1,1.55,1.1c1.4,1.63.38,4.1-.69,6q-5.34,9.35-10.68,18.68c-.82,1.44-1.65,2.89-2.33,4.4-1.16,2.57-1.9,5.3-3.2,7.8a38.64,38.64,0,0,1-5.52,7.37q-3.48,4-7,7.91a9.29,9.29,0,0,1-2.68,2.36,3.26,3.26,0,0,1-3.41-.15,3.43,3.43,0,0,1-.89-1.21,7.38,7.38,0,0,1-.72-3.61,7.69,7.69,0,0,1,2.53-5.35c1-.83,2.2-1.51,2.61-2.7a4.86,4.86,0,0,0,.12-2c-.49-5.89-1-11.84-2.76-17.48-1.32-4.22-3.37-8.56-2.39-12.87a12.09,12.09,0,0,1,2-.43,29.35,29.35,0,0,0-2.18-2.28c-3.54-3.32-7.85-5.73-12.11-8.1l-18.8-10.48q-1.3,7.22-2.63,14.41c-.31,1.66-.61,3.32-.91,5q-2.11,11.55-4.22,23.08a48.62,48.62,0,0,0-.82,5.61c-.12,1.86-.05,3.72,0,5.57a41.43,41.43,0,0,0,.37,6.21,26.27,26.27,0,0,0,.89,3.41l.14,0a2.21,2.21,0,0,1,.8,1.17,31,31,0,0,1,2.34,8.64,11,11,0,0,1-1.39,6.81,2.76,2.76,0,0,1-1.06,1.11,3.33,3.33,0,0,1-1.6.23l-24.71-.52a54.29,54.29,0,0,0-9.11.33c-2.4.36-4.76,1-7.18,1.19-5.63.34-11-2.2-16-4.67a4,4,0,0,1-2-1.54A3.21,3.21,0,0,1,566.07,834.19Z"
        transform="translate(-27.15 -41.19)"
        fill="url(#f537df86-fe7c-46a4-b2c3-f27b90264000)"
      />
      <path
        d="M698.13,506.07a27.75,27.75,0,0,0,.28-3.9,27,27,0,0,0-12.22-22.6c-.84-26-18.53-46.81-40.23-46.81-22.24,0-40.27,21.83-40.27,48.75s18,48.74,40.27,48.74a34.12,34.12,0,0,0,6.25-.58,27,27,0,1,0,45.92-23.6Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M643.84,439.12c21.7,0,39.39,20.78,40.23,46.8a27,27,0,0,1,12.22,22.61,26.53,26.53,0,0,1-.28,3.9,26.93,26.93,0,0,1,7.7,18.88,28.42,28.42,0,0,1-.21,3.35,27,27,0,0,0-5.9-28.59,27.75,27.75,0,0,0,.28-3.9,27,27,0,0,0-12.22-22.6c-.84-26-18.53-46.81-40.23-46.81-19.14,0-35.16,16.17-39.25,37.84C611.93,452.2,626.62,439.12,643.84,439.12Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M621.17,491.66a10.3,10.3,0,0,1-.52,4.72c-.93,2.15-3.21,4.07-2.54,6.31.43,1.45,2,2.25,3.38,2.73,6.76,2.29,14.14.93,21.27,1.24a68.34,68.34,0,0,0,7.15.25,11.42,11.42,0,0,0,6.65-2.32A57.08,57.08,0,0,1,646.1,498a11.82,11.82,0,0,1-2.1-2c-1.52-2-1.75-4.67-1.84-7.18s-.07-5,0-7.46q-7.66-.09-15.31-.07c-1.64,0-6.64-.4-7.21,1.37-.29.88.81,3.46,1,4.45C620.9,488.62,621.07,490.14,621.17,491.66Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M621.17,491.66a10.3,10.3,0,0,1-.52,4.72c-.93,2.15-3.21,4.07-2.54,6.31.43,1.45,2,2.25,3.38,2.73,6.76,2.29,14.14.93,21.27,1.24a68.34,68.34,0,0,0,7.15.25,11.42,11.42,0,0,0,6.65-2.32A57.08,57.08,0,0,1,646.1,498a11.82,11.82,0,0,1-2.1-2c-1.52-2-1.75-4.67-1.84-7.18s-.07-5,0-7.46q-7.66-.09-15.31-.07c-1.64,0-6.64-.4-7.21,1.37-.29.88.81,3.46,1,4.45C620.9,488.62,621.07,490.14,621.17,491.66Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M595.76,584.2a34.4,34.4,0,0,0,2,16.81,320.24,320.24,0,0,1,33.06-1.74,18.57,18.57,0,0,1-3.53-8.71,48.1,48.1,0,0,1,0-8.9l-21.44-.07a19.89,19.89,0,0,0-4.69.35C599,582.43,597.86,583.81,595.76,584.2Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M589.75,596c-1.1,1.81-2.43,3.46-3.65,5.19a74.08,74.08,0,0,0-6,10.24c-2.16,4.36-4.09,8.86-6.71,13a35.44,35.44,0,0,0-3.76,6.46,20.8,20.8,0,0,0-1.09,6.75c-.08,3.05.19,6.32,2,8.75a8,8,0,0,0,6.9,3.07,5.69,5.69,0,0,0,3.6-1.56c1.8-1.85,1.62-4.82,1.14-7.36-.34-1.78-.77-3.65-.2-5.37a19,19,0,0,1,1.24-2.47,18.87,18.87,0,0,0,1.52-6.08c.54-4,1.11-8.29,3.68-11.44,1.37-1.7,3.23-2.94,4.58-4.65.71-.9,1.27-1.91,2-2.76,1.08-1.22,2.56-2.15,3.18-3.65a14.6,14.6,0,0,0,.56-3,21.67,21.67,0,0,1,1.77-4.67c2.44-5.61,3.1-11.82,3.72-17.91a25.26,25.26,0,0,1-7.69-1.52C597.33,577.17,590.5,594.72,589.75,596Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M589.75,596c-1.1,1.81-2.43,3.46-3.65,5.19a74.08,74.08,0,0,0-6,10.24c-2.16,4.36-4.09,8.86-6.71,13a35.44,35.44,0,0,0-3.76,6.46,20.8,20.8,0,0,0-1.09,6.75c-.08,3.05.19,6.32,2,8.75a8,8,0,0,0,6.9,3.07,5.69,5.69,0,0,0,3.6-1.56c1.8-1.85,1.62-4.82,1.14-7.36-.34-1.78-.77-3.65-.2-5.37a19,19,0,0,1,1.24-2.47,18.87,18.87,0,0,0,1.52-6.08c.54-4,1.11-8.29,3.68-11.44,1.37-1.7,3.23-2.94,4.58-4.65.71-.9,1.27-1.91,2-2.76,1.08-1.22,2.56-2.15,3.18-3.65a14.6,14.6,0,0,0,.56-3,21.67,21.67,0,0,1,1.77-4.67c2.44-5.61,3.1-11.82,3.72-17.91a25.26,25.26,0,0,1-7.69-1.52C597.33,577.17,590.5,594.72,589.75,596Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <circle cx="604.5" cy="430.25" r="18.01" fill="#fbbebe" />
      <path
        d="M595.73,655.09c-3.39,4-4.72,9.36-5.94,14.48l-4.5,18.82a205.49,205.49,0,0,0-4.61,23.17c-.53,4.43-.75,9,.73,13.25a27.46,27.46,0,0,0,5.3,8.47,58.45,58.45,0,0,0,17.4,14.15c3.53,1.83,7.26,3.23,10.88,4.86,5.41,2.43,10.58,5.35,15.75,8.27l19.42,11c4.17,2.36,8.38,4.75,11.85,8.05a29.25,29.25,0,0,1,7.26,11,5.49,5.49,0,0,0,1.71,2.83c1.1.76,2.6.51,3.88.12a22.68,22.68,0,0,0,15.49-22.7,117.61,117.61,0,0,1-38.81-22.69c-8.67-7.63-16.49-16.73-27.07-21.37-4.62-2-10.18-3.57-12.34-8.14A16.68,16.68,0,0,1,611,712c-.19-6.27-.38-12.61.82-18.77,1-5.2,3-10.17,4.47-15.26,3-10.19,4-20.84,5-31.42a176.82,176.82,0,0,0-20.83-1.23,2.37,2.37,0,0,0-1.72.46,2.51,2.51,0,0,0-.53,1.37C597.66,649.87,597.53,653,595.73,655.09Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M595.73,655.09c-3.39,4-4.72,9.36-5.94,14.48l-4.5,18.82a205.49,205.49,0,0,0-4.61,23.17c-.53,4.43-.75,9,.73,13.25a27.46,27.46,0,0,0,5.3,8.47,58.45,58.45,0,0,0,17.4,14.15c3.53,1.83,7.26,3.23,10.88,4.86,5.41,2.43,10.58,5.35,15.75,8.27l19.42,11c4.17,2.36,8.38,4.75,11.85,8.05a29.25,29.25,0,0,1,7.26,11,5.49,5.49,0,0,0,1.71,2.83c1.1.76,2.6.51,3.88.12a22.68,22.68,0,0,0,15.49-22.7,117.61,117.61,0,0,1-38.81-22.69c-8.67-7.63-16.49-16.73-27.07-21.37-4.62-2-10.18-3.57-12.34-8.14A16.68,16.68,0,0,1,611,712c-.19-6.27-.38-12.61.82-18.77,1-5.2,3-10.17,4.47-15.26,3-10.19,4-20.84,5-31.42a176.82,176.82,0,0,0-20.83-1.23,2.37,2.37,0,0,0-1.72.46,2.51,2.51,0,0,0-.53,1.37C597.66,649.87,597.53,653,595.73,655.09Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M697.67,779.16l-10.45,18.55c-.81,1.43-1.62,2.87-2.29,4.37-1.13,2.55-1.85,5.26-3.13,7.74a38.54,38.54,0,0,1-5.4,7.32L669.58,825a9.18,9.18,0,0,1-2.63,2.34,3.14,3.14,0,0,1-3.34-.15,3.64,3.64,0,0,1-.87-1.21,7.32,7.32,0,0,1-.7-3.58,7.69,7.69,0,0,1,2.48-5.31c.94-.82,2.15-1.5,2.55-2.68a5,5,0,0,0,.12-2c-.49-5.85-1-11.75-2.71-17.35-1.29-4.19-3.29-8.5-2.33-12.78,1.82-.55,4.19-.93,5.28.63,2.12,3,2.25,1.9,5.52,1.44s6.34-.66,8.73-3.22c3.18-3.38,2.91-8.62,2.44-13.23,3.35-.16,6.54,1.05,9.57,2.57,1.07.54,2.11,1.11,3.14,1.68a5.16,5.16,0,0,1,1.52,1.09C699.72,774.86,698.72,777.31,697.67,779.16Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M597.07,640.06a86.27,86.27,0,0,0-2.64,11.17c-.31,2.08-.46,4.18-.62,6.27,7.11,1.69,14.49,1.77,21.8,1.85l30.47.33a65.51,65.51,0,0,0,.83-12.42c-.43-6.83-3-13.5-2.57-20.33a188.56,188.56,0,0,0-25.3-2.76,11.79,11.79,0,0,0-4.59.44c-1.38.5-2.53,1.49-3.86,2.12-3,1.42-7.46.72-10,3C598.28,631.86,597.89,637.14,597.07,640.06Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M597.07,640.06a86.27,86.27,0,0,0-2.64,11.17c-.31,2.08-.46,4.18-.62,6.27,7.11,1.69,14.49,1.77,21.8,1.85l30.47.33a65.51,65.51,0,0,0,.83-12.42c-.43-6.83-3-13.5-2.57-20.33a188.56,188.56,0,0,0-25.3-2.76,11.79,11.79,0,0,0-4.59.44c-1.38.5-2.53,1.49-3.86,2.12-3,1.42-7.46.72-10,3C598.28,631.86,597.89,637.14,597.07,640.06Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M598.8,650.14c-2.3,10.84.13,22.05.7,33.12.4,7.92-.16,15.86-.39,23.79a33.05,33.05,0,0,0,.31,6.82,34.42,34.42,0,0,0,1.81,5.85L604,727c2.57,6.86,5.19,14.21,2.57,21.36a10,10,0,0,0-.4,5.77c3.92,16.39.39,33.79-.17,50.63a12.23,12.23,0,0,1-.85,4.85c-1.4,3-4.85,4.4-6.66,7.13-2.2,3.31-1.41,8,1.18,11s6.62,4.49,10.58,4.82c4.95.41,9.91-.79,14.77-1.58l.54-.52c.61-3.37-1.24-6.49-1.82-9.94a42.33,42.33,0,0,1-.37-6.17c0-1.84-.1-3.69,0-5.53a52.57,52.57,0,0,1,.79-5.57l4.14-22.92.89-4.94,3.71-20.58c.7-3.89-1-8.24-1.46-12.16-.93-8.13-1.86-16.3-1.59-24.47a32.34,32.34,0,0,1,.79-6.67,29.59,29.59,0,0,0,.93-6.2c.06-2.52,1.07-5,2.06-7.48,3.29-8.31,3.16-17.5,3.87-26.41a20.45,20.45,0,0,1,1-5.55c1-2.72,3.08-4.9,4.7-7.31s2.85-5.42,1.94-8.18c-1.47-4.41-7.45-5.82-11.09-7.11a31.16,31.16,0,0,0-19.37-.65A66.76,66.76,0,0,0,598.8,650.14Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M626.42,840.51a2.65,2.65,0,0,1-1,1.1,3.37,3.37,0,0,1-1.58.23l-24.18-.52a52.06,52.06,0,0,0-8.92.33c-2.35.35-4.65,1-7,1.18-5.5.34-10.73-2.18-15.67-4.64a4,4,0,0,1-1.92-1.53,3.2,3.2,0,0,1,0-2.36,7.19,7.19,0,0,1,2.69-3.91,5,5,0,0,1,.49-.31,11.85,11.85,0,0,1,4.32-1.12c5.62-.74,11.53-1.84,15.79-5.58,1.23-1.07,2.27-2.33,3.41-3.5a59.28,59.28,0,0,1,7.76-6.36,2.73,2.73,0,0,1,2-.76,2.55,2.55,0,0,1,1.11.64,7.67,7.67,0,0,1,2.63,3.25,3,3,0,0,1-1.3,3.63c-1,.39-2,.19-2.82.73,1.74,1.26,4.43,1.89,6.39,3.2a21.73,21.73,0,0,0,6.43,3.4c2.36.61,5.17.19,6.71-1.7.83-1,1.88-2.57,3-1.9a2.14,2.14,0,0,1,.79,1.15,31.12,31.12,0,0,1,2.29,8.59A11,11,0,0,1,626.42,840.51Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M619.91,587.35a16,16,0,0,0-4.15.46,17.68,17.68,0,0,0-3.7,1.7l-13.25,7.34a12.36,12.36,0,0,0-2.69,1.82c-1.91,1.83-2.46,4.66-2.57,7.31-.45,10.3,4.2,20.18,4.79,30.48a39.12,39.12,0,0,1-1.64,13.6c-.33,1.09-.66,2.42.14,3.24a3,3,0,0,0,1,.6c4.19,1.63,8.76,2,13.24,2.33,11,.84,22.06,1.68,33,.21a3.79,3.79,0,0,0,1.56-.44,4,4,0,0,0,1.33-1.92q2.07-4.85,4-9.72c2.23-5.46,4.42-11.2,3.86-17.07-.7-7.28-5.48-13.43-8.27-20.2-.84-2-1.5-4.12-2.51-6.05a50,50,0,0,0-3.78-5.68c-1.07-1.53-2.1-5-3.41-6-1.6-1.31-6.12-1.28-8.15-1.52A69,69,0,0,0,619.91,587.35Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M697.67,779.16l-10.45,18.55c-.81,1.43-1.62,2.87-2.29,4.37-1.13,2.55-1.85,5.26-3.13,7.74a38.54,38.54,0,0,1-5.4,7.32L669.58,825a9.18,9.18,0,0,1-2.63,2.34,3.14,3.14,0,0,1-3.34-.15,3.64,3.64,0,0,1-.87-1.21,7.32,7.32,0,0,1-.7-3.58,22.83,22.83,0,0,0,6.62-4.88,33.16,33.16,0,0,0,3.86-5.79q1.4-2.47,2.81-5,7.24-12.74,14.5-25.48a28.92,28.92,0,0,0,3.86-10.83c1.07.54,2.11,1.11,3.14,1.68a5.16,5.16,0,0,1,1.52,1.09C699.72,774.86,698.72,777.31,697.67,779.16Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M626.42,840.51a2.65,2.65,0,0,1-1,1.1,3.37,3.37,0,0,1-1.58.23l-24.18-.52a52.06,52.06,0,0,0-8.92.33c-2.35.35-4.65,1-7,1.18-5.5.34-10.73-2.18-15.67-4.64a4,4,0,0,1-1.92-1.53,3.2,3.2,0,0,1,0-2.36,7.19,7.19,0,0,1,2.69-3.91c.35.22.68.46,1,.69a28.54,28.54,0,0,0,11,5,56.65,56.65,0,0,0,11.86.86c9.13,0,18.33.06,27.35-1.58,1.82-.33,5.51-2,7.8-1.57A11,11,0,0,1,626.42,840.51Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M653.31,500a179.66,179.66,0,0,1-26.5,2.51c-2.19,0-4.84-.22-5.81-2.18-.45-.92-.42-2.06-1.06-2.87-1.19-1.51-3.58-.76-5.3.11-2.4,1.22-4.91,2.54-6.34,4.82a16.08,16.08,0,0,0-1.79,5.67c-.84,4.23-2.11,8.65-5.32,11.53-1.66,1.49-3.75,2.46-5.35,4-2.59,2.52-3.6,6.3-3.6,9.91s.86,7.16,1.51,10.72a86.9,86.9,0,0,1-2,39.46,2.71,2.71,0,0,0-.14,1.43c.25.92,1.37,1.25,2.32,1.4,14.67,2.42,30.42.13,43.92,6.36,1.13-2.78,3.91-4.35,5.29-7,1.11-2.15,1-4.71,1.25-7.12.81-6.51,5-12.06,7.32-18.19,2.07-5.37,2.79-11.28,5.68-16.26,1-1.76,2.31-3.37,3.32-5.15a39.5,39.5,0,0,0,2.37-5.46,38.15,38.15,0,0,0,2.74-10.05c.58-7-2.67-13.69-6.51-19.53C657.82,501.87,656,499.55,653.31,500Z"
        transform="translate(-27.15 -41.19)"
        fill="#ff6f61"
      />
      <path
        d="M610.82,524.89c-1.68.37-2.66,2.06-3.44,3.59a19,19,0,0,0-1.32,3,17.32,17.32,0,0,0-.55,5.37,12.56,12.56,0,0,0,.36,3.41,4.52,4.52,0,0,0,2,2.7"
        transform="translate(-27.15 -41.19)"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        opacity="0.1"
      />
      <ellipse
        cx="636.21"
        cy="458.43"
        rx="9.94"
        ry="20.13"
        transform="translate(7.38 920.13) rotate(-75.66)"
        fill="#3f3d56"
      />
      <path
        d="M634.81,464.35c-9.58-2.45-16.66-7.89-17.17-12.8a5.32,5.32,0,0,0-.94,1.89c-1.36,5.32,6.27,11.86,17,14.62s20.61.67,22-4.65a5.22,5.22,0,0,0,.12-1.81C652.86,465.48,644.19,466.75,634.81,464.35Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M645.34,530.19a31,31,0,0,1,5-14.11,12.2,12.2,0,0,1,4.54-4.4,5.62,5.62,0,0,1,6,.47,8.72,8.72,0,0,1,2.16,4,48,48,0,0,1,3.18,20.3c0,6.3-.09,12.68-1.68,18.78-.91,3.46-2.3,6.79-3,10.3s-.61,7.36,1.28,10.4a26.54,26.54,0,0,1,3.36,7.65,37.27,37.27,0,0,1,.61,9.9l-.26,9.11c-.33,11.88-.66,23.88,1.72,35.52,1.08,5.32,3.8,10.34,3.18,15.73a22.6,22.6,0,0,1-1.66,5.65c-1,2.6-2.25,5.41-4.74,6.67a9.39,9.39,0,0,1-3.85.84,26.3,26.3,0,0,1-4.94-.21c-1-.14-2.29-.81-1.95-1.77a1.94,1.94,0,0,1,.7-.78,11,11,0,0,0,4.11-8.54c0-4.72-3.08-9.25-2.13-13.87.59-2.86,2.71-5.63,1.82-8.41-2-6.28-2.26-13-4-19.4l-1.68-6.24c-1-3.72-2-7.43-2.81-11.19a122.59,122.59,0,0,1-2.7-31.68c.07-1.66-.85-3.55-1-5.2-.16-2,0-3.92,0-5.87C646.6,545.78,644.56,538.21,645.34,530.19Z"
        transform="translate(-27.15 -41.19)"
        fill="#fbbebe"
      />
      <path
        d="M342,176.94a28.9,28.9,0,0,0-16.77,1.83,24.71,24.71,0,0,1-20.14-.05,28.26,28.26,0,0,0-23.68.46,14.64,14.64,0,0,1-6.82,1.71c-9.6,0-17.59-9.67-19.25-22.43a18.58,18.58,0,0,0,4.8-5.18c5.63-9.07,14.35-14.89,24.14-14.89s18.4,5.75,24,14.73a18.53,18.53,0,0,0,15.95,8.76h.25C332.11,161.88,338.73,168,342,176.94Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M371.2,136.89l-15.52,9.85,9.42-17.14a15.4,15.4,0,0,0-9.39-3.35h-.25a18.16,18.16,0,0,1-3.22-.23L347,129.35l2.26-4.1a18.68,18.68,0,0,1-9.2-7l-9.42,6,5.95-10.81c-5.51-6.61-12.93-10.67-21.09-10.67-9.79,0-18.51,5.83-24.14,14.9a18,18,0,0,1-16,8.6h-.53c-10.81,0-19.57,12.26-19.57,27.37S264,181,274.85,181a14.72,14.72,0,0,0,6.82-1.7,28.22,28.22,0,0,1,23.68-.47,24.71,24.71,0,0,0,20.14.05,28.29,28.29,0,0,1,23.48.45,14.65,14.65,0,0,0,6.74,1.67c10.81,0,19.57-12.25,19.57-27.37A34.76,34.76,0,0,0,371.2,136.89Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M885.5,710.11v8a30,30,0,1,0,60,0v-8a30,30,0,0,0-60,0Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M945.5,582.11v-8a30,30,0,0,0-60,0v8a29.63,29.63,0,0,0,1.29,8.67,30,30,0,0,0,58.71-8.67Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M885.5,642.11v8a30,30,0,1,0,60,0v-8a30,30,0,0,0-60,0Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M915.5,748.11a30.09,30.09,0,0,0-30,30v8a30,30,0,1,0,60,0v-8A30.09,30.09,0,0,0,915.5,748.11Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M945.5,574.88v7.23a30,30,0,0,1-58.71,8.67Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M945.5,642.88v7.23a30,30,0,0,1-58.71,8.67Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M945.5,710.88v7.23a30,30,0,0,1-58.71,8.67Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M945.5,778.88v7.23a30,30,0,0,1-58.71,8.67Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M1008.13,650.62l-2.39,1.85A11.33,11.33,0,0,1,989.6,636.9a11.2,11.2,0,0,1,2.29-2.38l2.4-1.85a11.33,11.33,0,0,1,13.84,18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M973.94,648.36l-2.39,1.85a11.34,11.34,0,0,0,13.85,17.95l2.39-1.85a11.34,11.34,0,0,0-13.85-17.95Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M953.6,664.06l-2.39,1.84a11.34,11.34,0,0,0,13.85,18l2.39-1.84a11.34,11.34,0,1,0-13.85-18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M933.26,679.75l-2.39,1.85a11.33,11.33,0,0,0,13.84,17.95l2.4-1.85a11.34,11.34,0,1,0-13.85-18Z"
        transform="translate(-27.15 -41.19)"
        fill="#3f3d56"
      />
      <path
        d="M1007.9,650.8l-2.16,1.67A11.33,11.33,0,0,1,989.6,636.9Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M987.56,666.49l-2.16,1.67a11.33,11.33,0,0,1-16.14-15.56Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M967.22,682.18l-2.16,1.67a11.33,11.33,0,0,1-16.15-15.56Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M997.5,278.11a34,34,0,0,1,0,68,34,34,0,0,1,0,68,34,34,0,0,1,0,68,34,34,0,0,1,0,68h-164a34,34,0,0,1,0-68,34,34,0,0,1,0-68,34,34,0,0,1,0-68,34,34,0,0,1,0-68,34,34,0,0,1,0-68,34,34,0,0,1,0-68H841c4.31-29.25,37.36-52,77.51-52s73.2,22.75,77.51,52h1.49a34,34,0,0,1,0,68,34,34,0,0,1,0,68Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
      />
      <path
        d="M1031.5,176.11a34.1,34.1,0,0,1-34,34h-164l163-68h1A34.1,34.1,0,0,1,1031.5,176.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M800.5,244.11a34.1,34.1,0,0,0,34,34h164l-163-68h-1A34.1,34.1,0,0,0,800.5,244.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M800.5,380.11a34.1,34.1,0,0,0,34,34h164l-163-68h-1A34.1,34.1,0,0,0,800.5,380.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M800.5,516.11a34.1,34.1,0,0,0,34,34h164l-163-68h-1A34.1,34.1,0,0,0,800.5,516.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M1031.5,312.11a34.1,34.1,0,0,1-34,34h-164l163-68h1A34.1,34.1,0,0,1,1031.5,312.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M1031.5,448.11a34.1,34.1,0,0,1-34,34h-164l163-68h1A34.1,34.1,0,0,1,1031.5,448.11Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M1012.71,685.71l-54-29.07a12.71,12.71,0,0,1,12-22.39,12.72,12.72,0,1,1,12.06-22.39l2.46,1.32c6.61-8.86,21.52-10.5,34.75-3.38s20.07,20.47,16.3,30.86l.49.27a12.71,12.71,0,1,1-12,22.39,12.72,12.72,0,0,1-12.06,22.39Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
      />
      <path
        d="M1042,658.15a12.75,12.75,0,0,1-17.22,5.17l-54-29.07,65.73,6.5.33.18A12.75,12.75,0,0,1,1042,658.15Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M953.87,639.59A12.76,12.76,0,0,0,959,656.82l54,29.07L971.42,634.6l-.33-.18A12.76,12.76,0,0,0,953.87,639.59Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M369.3,814.24l-80.64.08a16.72,16.72,0,0,1,0-33.44,16.72,16.72,0,1,1,0-33.43h3.69c2.1-14.38,18.34-25.58,38.08-25.6s36,11.15,38.14,25.53h.73a16.72,16.72,0,1,1,0,33.43,16.72,16.72,0,0,1,0,33.44Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
      />
      <path
        d="M386,764.07a16.76,16.76,0,0,1-16.7,16.73l-80.64.08,80.11-33.51h.49A16.77,16.77,0,0,1,386,764.07Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M272.42,797.62a16.77,16.77,0,0,0,16.73,16.7l80.64-.08-80.18-33.36h-.49A16.76,16.76,0,0,0,272.42,797.62Z"
        transform="translate(-27.15 -41.19)"
        opacity="0.1"
      />
      <path
        d="M654,266.42a20.32,20.32,0,0,0-11.74,1.28,17.27,17.27,0,0,1-14.1,0,19.8,19.8,0,0,0-16.58.32,10.29,10.29,0,0,1-4.77,1.2c-6.72,0-12.31-6.77-13.47-15.71a12.94,12.94,0,0,0,3.36-3.62c3.94-6.35,10-10.42,16.89-10.42s12.89,4,16.83,10.31a13,13,0,0,0,11.16,6.13h.18C647.06,255.88,651.69,260.17,654,266.42Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M674.42,238.39l-10.86,6.89,6.59-12a10.69,10.69,0,0,0-6.57-2.35h-.17a12,12,0,0,1-2.25-.16l-3.69,2.33,1.58-2.87a13.13,13.13,0,0,1-6.44-4.89L646,229.53l4.16-7.57c-3.85-4.62-9-7.46-14.76-7.46-6.85,0-13,4.07-16.9,10.42a12.65,12.65,0,0,1-11.17,6H607c-7.56,0-13.7,8.58-13.7,19.16s6.14,19.16,13.7,19.16a10.17,10.17,0,0,0,4.77-1.2,19.8,19.8,0,0,1,16.58-.32,17.5,17.5,0,0,0,7.09,1.52,17.29,17.29,0,0,0,7-1.49,19.79,19.79,0,0,1,16.43.32,10.24,10.24,0,0,0,4.72,1.17c7.57,0,13.7-8.58,13.7-19.16A24.35,24.35,0,0,0,674.42,238.39Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M438.62,327.42a20.32,20.32,0,0,1,11.74,1.28,17.24,17.24,0,0,0,14.09,0A19.8,19.8,0,0,1,481,329a10.32,10.32,0,0,0,4.77,1.2c6.72,0,12.32-6.77,13.48-15.71a12.79,12.79,0,0,1-3.36-3.62c-3.94-6.35-10.05-10.42-16.9-10.42s-12.88,4-16.82,10.31A13,13,0,0,1,451,316.88h-.17C445.51,316.88,440.87,321.17,438.62,327.42Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M418.14,299.39,429,306.28l-6.6-12a10.71,10.71,0,0,1,6.57-2.35h.18a12,12,0,0,0,2.25-.16l3.68,2.33-1.58-2.87a13.15,13.15,0,0,0,6.45-4.89l6.59,4.18L442.38,283c3.86-4.62,9.05-7.46,14.77-7.46,6.85,0,13,4.07,16.9,10.42a12.64,12.64,0,0,0,11.17,6h.36c7.57,0,13.7,8.58,13.7,19.16s-6.13,19.16-13.7,19.16a10.23,10.23,0,0,1-4.77-1.2,19.8,19.8,0,0,0-16.58-.32,17.45,17.45,0,0,1-7.08,1.52,17.22,17.22,0,0,1-7-1.49,19.81,19.81,0,0,0-16.44.32,10.21,10.21,0,0,1-4.72,1.17c-7.56,0-13.7-8.58-13.7-19.16A24.35,24.35,0,0,1,418.14,299.39Z"
        transform="translate(-27.15 -41.19)"
        fill={color}
        opacity="0.1"
      />
    </svg>
  );
};

Hiking.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Hiking.defaultProps = {
  color: "primary",
  style: {}
};

export default Hiking;
