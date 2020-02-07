import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Pilates = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e824989e-a6d8-405e-8397-15206440e926"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1134.12"
      height="790.27"
      viewBox="0 0 1134.12 790.27"
    >
      <defs>
        <linearGradient
          id="89d5e6d5-cd61-4002-8e54-0bb0b7cbdd0f"
          x1="540.2"
          y1="804.61"
          x2="540.2"
          y2="419.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>pilates</title>
      <path
        d="M1146,280.51a265.71,265.71,0,0,0-43.26-68.93l-600.18-5.91,494.15-69.4a280.38,280.38,0,0,0-100.26-19.89A281,281,0,0,0,560.73,105,279.82,279.82,0,0,0,432.26,74.06c-133.35,0-244.47,92.36-269.4,214.84Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M1167.06,383.23a259.42,259.42,0,0,0-18.7-96.94L108.17,395.47A261.06,261.06,0,0,0,83.81,457l322.11,48L76.46,540c9.91,138.65,128.78,248.14,274,248.14,73.09,0,139.5-27.75,188.72-73,49.36,46.1,116.41,74.45,190.29,74.45,109.62,0,204.22-62.41,248.28-152.65,88.39-28,157-98.49,180.55-186.61L750.93,387.2H1167C1167,385.88,1167.06,384.56,1167.06,383.23Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
        opacity="0.1"
      />
      <ellipse cx="486.58" cy="735.78" rx="416.07" ry="39.5" fill={color} />
      <path
        d="M846.28,711c-1.25,1.14-5.88,3.35-12.12,6l-1.14.48a3.68,3.68,0,0,0,1.37-2.37c0-9.6-73.09,9.59-87.25,9.59-6.49,0-13.66-1.92-19.51-4A161.74,161.74,0,0,0,696,712.85h0a111.15,111.15,0,0,0-14.54-7.59l0-.07c.29-.57.56-1.15.79-1.73,0-.09.07-.19.11-.29l.36-.92c.11-.3.22-.6.31-.9,4.29-12.65,1.8-26.82-2.74-39.49-2.25-6.25-5-12.87-3.45-19.32a18.13,18.13,0,0,1,1.24-3.47h0v0c.23-.48.48-1,.74-1.42.12-.23.26-.47.4-.7.36-.61.73-1.22,1.12-1.82.26-.39.52-.79.79-1.18.73-1.07,1.48-2.15,2.19-3.24l.09-.13c.24-.36.47-.73.69-1.1s.36-.58.53-.87l.25-.44A1.42,1.42,0,0,0,685,628c.11-.21.24-.44.35-.66l.13-.26a18.38,18.38,0,0,0,.78-1.69c.1-.27.21-.53.29-.79s.07-.25.11-.37c.1-.32.2-.63.29-1l.06-.23.06-.24c.05-.2.11-.4.15-.6a.59.59,0,0,1,0,.08c1.19-5,.64-10.49-.34-15.65A110.07,110.07,0,0,0,683,592c-1.69-5-3.77-10.26-2.81-15.48a22.78,22.78,0,0,1,1.48-4.57s0,0,0,0c.43-1,.88-2,1.29-3.06.24-.6.46-1.21.67-1.82l.18-.55c.1-.3.17-.6.25-.9l.06-.28c0-.05,0-.1,0-.14v0a32.1,32.1,0,0,0,.48-9.59c-.52-7.53-2.3-15.13-6.47-21.41a27.58,27.58,0,0,0-9.37-8.79,20.8,20.8,0,0,0-3.91-1.69c.11-.2.24-.39.35-.58a7.46,7.46,0,0,0,.79-2,11.27,11.27,0,0,0-.38-4.95c-1.67-7.07-3.39-14.26-6.81-20.67s-8.83-12.11-15.78-14.29c-3.47-1.1-7.22-1.29-10.55-2.79-1.41-.64-2.72-1.5-4.09-2.24a27,27,0,0,0-12-3.29c-.82-.05-1.62,0-2.43,0h-.51c-.66,0-1.31.11-2,.19-.83.11-1.67.2-2.45.35-1.52.3-2.79.89-3.19,2.62,0,0,0,.07,0,.11s0,.24-.07.36c-.44-.07-.89-.14-1.34-.19a44.52,44.52,0,0,0-4.92-.27A42.94,42.94,0,0,0,557,513.48a22.84,22.84,0,0,1-2.78.22A46,46,0,0,1,543,512.31l-6.42-1.84h0s.06-.16.2-.48l1.17-.89-.87.17c1.44-3.31,5.48-12.61,7.72-17.07,2.74-5.48,22.38-12.33,22.38-12.33,27-1.37,48-21,48-21S671.3,468,706,465.23s46.59,8.23,46.59,8.23,22.85,62.59,60.77,45.6c28.53-12.77-22.37-49.23-49.3-66.49,1.55.87,3.08,1.77,4.58,2.73s3.23,2.08,4.94,3.2c-3.2-2.15-6.25-4.15-9.05-5.94A92,92,0,0,0,733.91,440l-99.12-20.93-.32,0-.17,0a304.74,304.74,0,0,0-76.16,18.39c-29.39,11.25-63.57,26.84-66.83,30-8.8,8.6-21.93,16.9-21.93,16.9-9.68,1.39-22.5,10.35-31.15,17.22l-1.42,1.13c-.16-.76-.21-1.22-.21-1.22s-12.17,7.37-12.34,11.48-24.84,24-24.84,24S385.54,558.94,378,560s-18.51,24.84-18.51,24.84l-13,25.53s-6.85,7-6,11.31-5.31,9.42-5.31,9.42-9.94,8.56-9.77,11.48-5.14,6-5.14,6-7.36,13.19-9.59,20.22a2.73,2.73,0,0,0,0,1.65l-.13.06s-6.21,14-6,19.53c.12,4.2-2.25,8.69-3.37,10.57l-.46.17.37,0c-.28.47-.47.75-.48.77h0s-27.64-19-68.07-10.11S194.81,724,194.81,724s1.6,29.12,13.25,39.11,19,10.45,25.58,18,40.89,11,40.89,11,67.84,3.42,104.39,0S432,788.68,432,788.68s40.15-5,58.19-1.83,43.63,2.29,43.63,2.29a10.39,10.39,0,0,0,1-2.74h.37a10.24,10.24,0,0,0,1-2.64A182,182,0,0,1,562.58,780c18.72-.91,35.16-8.22,35.16-8.22s14.07.12,35.19,14.73S717,792.79,717,792.79l34.73-2.74s22.83-3.66,30.15,5.94,25.12,13.25,31.06,0,33.81-38.83,33.81-38.83,25.59-14.63,37-52.53S851.29,706.45,846.28,711ZM646.81,559.9c1.93-2.06,3.51-4.44,5.45-6.5,2.62-2.77,5.88-4.88,8.47-7.67a16,16,0,0,0,3.2-5l.06.11.54,1.43c.07.23.12.45.18.68s.12.53.17.8.06.3.08.45c.06.41.1.83.12,1.25,0,.17,0,.34,0,.51s0,.55,0,.83,0,.45,0,.67q0,.62-.12,1.23c0,.25-.07.5-.11.75s-.07.43-.11.64-.07.4-.12.6c0,0,0,0,0,.06-.1.44-.2.88-.31,1.32h0a30.34,30.34,0,0,1-1.11,3.46c-.75,2-1.63,4-2.4,6v0c-.21.54-.41,1.09-.6,1.63-.08.24-.16.47-.25.71s-.17.55-.26.82l0,.12a27.4,27.4,0,0,0-.73,3,1.85,1.85,0,0,0,0,.23c0,.07,0,.15,0,.22l-.09.68s0,0,0,.08,0,.28,0,.41c0,.39,0,.77-.07,1.16,0,.2,0,.39,0,.58,0,.47,0,.94.07,1.4,0,.18,0,.37.07.55s0,.44.07.66a.36.36,0,0,1,0,.1c0,.21.07.41.11.61s.11.59.17.89l.09.38c0,.2.08.41.14.61s.07.28.11.42,0,.21.08.31l.15.54c0,.15.09.3.13.44l.3,1c.1.29.19.58.28.87,1.51,4.64,3.32,9.22,2.59,13.84v0a10.83,10.83,0,0,1-.21,1.11c-.95,3.81-3.64,6.89-6.14,9.91a171,171,0,0,0-10.38,13.77,39.26,39.26,0,0,0-3.52,5.95h0c-.24.53-.46,1.07-.66,1.61l-.25.67c-1.72,5.4-.8,11.26.13,16.85l3.82,22.94c.12.71.24,1.42.35,2.14l.12.79.09.62c.14,1,.26,2.06.34,3.09,0,.1,0,.21,0,.31,0,.42,0,.83.06,1.25,0,.14,0,.28,0,.42,0,.41,0,.81,0,1.22,0,.12,0,.24,0,.36,0,.52,0,1-.11,1.55,0,0,0,.08,0,.12-.06.53-.14,1.06-.24,1.58v0a0,0,0,0,1,0,0,14.78,14.78,0,0,1-.48,1.85,30.66,30.66,0,0,1-4.07,7.63h0l-2.51-.9s-21-27-29.69-39.29-5.94-18.27-5.94-18.27c1.37-21.47-15.08-37.92-23.3-42-3.07-1.53-5.88-4.83-8.2-8.36a12.15,12.15,0,0,1,2.26.14l-.59-1.44c.2,0,.39,0,.59.07l-9.54-23.22a27.44,27.44,0,0,1,7.22-2.05c.76-.12,1.53-.23,2.29-.32a42.65,42.65,0,0,0,19.21,7.74c.43.06.86.08,1.29.13-.11.15-.21.31-.3.46l-.12.24a1.94,1.94,0,0,0-.13.3,2,2,0,0,0-.1.35c0,.08,0,.14,0,.22a2.09,2.09,0,0,0,0,.61c4.07.35,8.56.89,11.22,4a7.07,7.07,0,0,0,1.9,1.88,4.79,4.79,0,0,0,2.06.31h4.43a78.51,78.51,0,0,0,15.46-1.25C635.83,567.52,642.23,564.74,646.81,559.9Zm-84.06-2.29a9.9,9.9,0,0,1,2.08-1.33C564.61,556.41,563.88,556.87,562.75,557.61Zm29.06,151.58c-20.39-12.31-32.89-7.31-32.89-7.31h-2.28c-10,0-88.18-4.08-88.18-4.08H467.1a7.72,7.72,0,0,1,1.36,0s-.71-4.63-2.3-7.14a6.41,6.41,0,0,0-.46-.63c.93-4,2.81-13.34,2.42-20.76-.52-9.76,0-18.67,0-18.67,21.25,7.31,50.58-7.41,51-7.64,23-6.45,32-1.38,32-1.38,1.83,8.22,22.39,42.94,22.39,42.94s18.73,14.16,26,25.13a31.33,31.33,0,0,0,3.59,4.38c-1.14-.39-2.23-.78-3.26-1.17A51.43,51.43,0,0,1,591.81,709.19Z"
        transform="translate(-32.94 -54.86)"
        fill="url(#89d5e6d5-cd61-4002-8e54-0bb0b7cbdd0f)"
      />
      <path
        d="M808.9,520.58c-37.3,16.71-59.77-44.85-59.77-44.85s-11.67-10.79-45.83-8.09-89.42-6.3-89.42-6.3S593.21,480.68,566.7,482c0,0-19.32,6.74-22,12.14-2.19,4.38-6.17,13.53-7.59,16.78a6.3,6.3,0,0,1-.29.71c-.14.31-.2.48-.2.48l-1.11.52h0l-22.26,10.69-30.55,8.55-19.33,2.24-32.8-22.73s3.79-3.54,9.36-8c8.51-6.75,21.12-15.57,30.64-16.93,0,0,12.92-8.17,21.57-16.62,3.21-3.15,36.83-18.48,65.73-29.55a300,300,0,0,1,74.91-18.09l97.49,20.59a90.75,90.75,0,0,1,30.15,12.33C786.87,472.14,837,508,808.9,520.58Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <g opacity="0.1">
        <path
          d="M435.07,514.11s3.79-3.55,9.36-8c8.51-6.75,21.12-15.57,30.64-16.93,0,0,12.92-8.17,21.57-16.62,3.21-3.16,36.83-18.48,65.73-29.55A299.56,299.56,0,0,1,637.28,425l97.49,20.58a90.63,90.63,0,0,1,30.14,12.34q2.33,1.49,4.86,3.15c-3.15-2.12-6.15-4.09-8.9-5.85a90.7,90.7,0,0,0-30.14-12.33l-97.49-20.59a299.89,299.89,0,0,0-74.91,18.09c-28.91,11.07-62.53,26.4-65.73,29.55-8.66,8.45-21.57,16.62-21.57,16.62-9.52,1.36-22.14,10.18-30.64,16.93-5.57,4.43-9.36,8-9.36,8l32.8,22.73.13,0Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M753.66,478.42a19.93,19.93,0,0,0-4-2.53c.9,2.38,12.28,31.86,31.69,43.18C763.65,505.78,753.66,478.42,753.66,478.42Z"
          transform="translate(-32.94 -54.86)"
        />
      </g>
      <path
        d="M684.59,622.87a15.82,15.82,0,0,1-.45,1.53c-.08.26-.19.52-.28.77A19.19,19.19,0,0,1,683,627c-.13.27-.28.54-.41.8a1.26,1.26,0,0,1-.11.17c-.14.26-.28.5-.43.74-1,1.7-2.16,3.32-3.27,5-.37.54-.74,1.09-1.09,1.65a3,3,0,0,1-.21.33c-.19.31-.39.64-.57,1s-.32.54-.46.81-.16.28-.23.42l-.43.83A17.76,17.76,0,0,0,674.6,642c-1.54,6.35,1.18,12.86,3.39,19,4.46,12.46,6.92,26.4,2.7,38.84-.1.29-.2.59-.31.89s-.3.79-.46,1.18c-.24.6-.51,1.19-.81,1.78-2.28,4.44-6.19,8.43-11,8-6.61-.58-9.82-8.68-15.84-11.44-5.23-2.4-11.84-.44-16.77-3.4a18.93,18.93,0,0,1,1.67-3.87c.89-1.64,2-3.21,3-4.77a30.51,30.51,0,0,0,4-7.51,16.2,16.2,0,0,0,.47-1.82.58.58,0,0,0,0-.14c.05-.31.11-.6.15-.91s.08-.59.11-.91a.81.81,0,0,0,0-.16c0-.35,0-.7.07-1.06a49.62,49.62,0,0,0-1-10.06q-1.87-11.28-3.76-22.56c-.92-5.5-1.82-11.26-.12-16.57.13-.38.27-.76.41-1.13s.31-.75.48-1.11a39.27,39.27,0,0,1,3.46-5.85q4.76-7,10.21-13.55c2.46-3,5.1-6,6-9.74a8.56,8.56,0,0,0,.22-1.1c.58-3.61-.44-7.21-1.64-10.82q-.23-.63-.42-1.26c-.42-1.24-.84-2.49-1.2-3.76-.12-.41-.23-.83-.34-1.25a25.56,25.56,0,0,1-.51-2.55,18.3,18.3,0,0,1-.22-2.56c0-.4,0-.81,0-1.21s0-.6.08-.91.09-.64.14-1,.08-.48.13-.72.15-.73.25-1.08a6.28,6.28,0,0,1,.23-.85c.05-.23.12-.46.18-.68l.26-.8.41-1.16c.13-.38.28-.77.43-1.15.75-2,1.61-4,2.36-5.92a34.36,34.36,0,0,0,1.09-3.39s0,0,0,0c0-.21.11-.44.16-.66a6.58,6.58,0,0,0,.15-.67,7.34,7.34,0,0,0,.16-.84c.07-.37.14-.76.18-1.14s.08-.77.11-1.16,0-.77,0-1.15a13.15,13.15,0,0,0-.57-4,9.54,9.54,0,0,0-.58-1.54h0a11.76,11.76,0,0,0-.57-1c-1.28-2.08-3.27-3.67-4.43-5.84a9.06,9.06,0,0,1-1-4.31,8.24,8.24,0,0,1,.08-1.22,7.76,7.76,0,0,1,.28-1.22,3.24,3.24,0,0,1,.16-.47q.11-.25.21-.48a5.45,5.45,0,0,1,.33-.58c.1-.13.19-.27.29-.39,1.06-1.34,2.76-2,5.09-1.32l.57.19a21.05,21.05,0,0,1,3.84,1.67,27.16,27.16,0,0,1,9.22,8.64c4.1,6.18,5.85,13.66,6.36,21.06a32.11,32.11,0,0,1-.47,9.44c0,.13-.07.28-.09.41-.08.3-.15.6-.25.89a55.25,55.25,0,0,1-2.1,5.34s0,0,0,0a22.73,22.73,0,0,0-1.46,4.5c-.94,5.14,1.11,10.27,2.77,15.22a108.77,108.77,0,0,1,3.74,14.37C685.44,612.07,686,617.7,684.59,622.87Z"
        transform="translate(-32.94 -54.86)"
        fill="#965d7b"
      />
      <g opacity="0.1">
        <path
          d="M679.37,572.63a54.68,54.68,0,0,0,2.11-5.36c.13-.43.25-.86.35-1.3A39,39,0,0,0,679.37,572.63Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M661.35,540.8c2.22,3.6,2,8,.9,12.23.08-.22.17-.43.25-.65,1.91-5,3-11,.2-15.62-1.29-2.08-3.29-3.68-4.44-5.84a9.18,9.18,0,0,1-1-4.63c-1.69,2.1-1.81,5.86-.3,8.68C658.06,537.13,660.06,538.72,661.35,540.8Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M676,638c-.05.22-.09.44-.13.67,2.2-4.67,6.08-8.63,8-13.47a19.43,19.43,0,0,0,.95-3.13C682.25,627.58,677.38,632.05,676,638Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M681.27,697.91c-2.06,5.08-6.35,10.25-11.82,9.77-6.61-.57-9.81-8.67-15.84-11.44-5.12-2.35-11.56-.53-16.45-3.22a19.5,19.5,0,0,0-1.67,3.87c4.93,3,11.54,1,16.77,3.39,6,2.77,9.23,10.88,15.84,11.45,5.47.47,9.76-4.7,11.82-9.78a37.66,37.66,0,0,0,1.41-4.2Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M644.05,665.68c.73,4.38,1.45,8.93.59,13.24a19.28,19.28,0,0,0,.87-2.22c1.54-4.83.72-10.06-.11-15.06q-1.87-11.28-3.76-22.57c-.81-4.89-1.61-10-.58-14.77a19.85,19.85,0,0,0-.89,2.25c-1.7,5.31-.79,11.06.12,16.56Q642.18,654.41,644.05,665.68Z"
          transform="translate(-32.94 -54.86)"
        />
        <path
          d="M662.11,591.13c1.93-7.74-4-15.33-4.11-23.3a20.68,20.68,0,0,1,.79-5.48,25.94,25.94,0,0,0-2.13,9.53c.07,7.6,5.48,14.85,4.31,22.23A14.32,14.32,0,0,0,662.11,591.13Z"
          transform="translate(-32.94 -54.86)"
        />
      </g>
      <path
        d="M878.1,703.1c-11.23,37.29-36.4,51.67-36.4,51.67S814.29,779.94,808.44,793s-23.36,9.44-30.54,0-29.66-5.83-29.66-5.83l-34.16,2.69s-61.9,8.21-82.68-6.17-34.6-14.49-34.6-14.49-16.18,7.18-34.59,8.09a177.38,177.38,0,0,0-26,3.68c-4.77,1-8.94,2-11.93,2.71s-4.77,1.24-4.77,1.24l-45.76-4.61-43.22-4.37-23.36-3.16-6.13-13.34-5.9-12.82-2-4.38,2.8-45.81h73.7s76.86,4,86.73,4h2.24s12.29-4.92,32.35,7.18a51,51,0,0,0,8,3.62c31.88,11.91,121.45,27.39,121.45,27.39l58-3.6s32.61-11.88,51-19.71c6.13-2.62,10.69-4.79,11.91-5.9C846.19,704.9,889.33,665.8,878.1,703.1Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <path
        d="M421.27,741.46l3.55,12.64-12.14,6.58-11.63-1.28-5.9-12.82-2-4.38,2.8-45.81H469.6C454.23,697.77,421.27,741.46,421.27,741.46Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M419.92,741.46l3.55,12.64-12.13,6.58-30.67-3.37L364.15,744c-27-43.81-59.65-44-59.65-44s4.05-5.91,3.88-11.3,5.94-19.21,5.94-19.21l.58-.28c2.06-1,9.05-4.46,9.49-4.61,0,0,138.67,22.41,141.37,23.26a3.17,3.17,0,0,1,1.61,1.49c1.57,2.46,2.27,7,2.27,7C455,695,419.92,741.46,419.92,741.46Z"
        transform="translate(-32.94 -54.86)"
        fill="#565988"
      />
      <path
        d="M583.78,554.36a72.65,72.65,0,0,0-12.18.77c-6.71,1.09-13.14,3.64-10.29,9.57,5.39,11.23-28.76,31-28.76,31l-47.64,30.56-29.66-44.94,15.29-36.4,42.68-21.57,23.38-11.22s9.26,3.37,17.4,3.18c3.76-.08,7.29-.92,9.56-3.18C570.74,504.94,583.78,554.36,583.78,554.36Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <path
        d="M583.78,554.36a72.65,72.65,0,0,0-12.18.77,42.14,42.14,0,0,1-17.92-34.55,41.66,41.66,0,0,1,.32-5.27c3.76-.08,7.29-.92,9.56-3.18C570.74,504.94,583.78,554.36,583.78,554.36Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M640.84,520.58a42.24,42.24,0,0,1-42.23,42.25,41.74,41.74,0,0,1-5.85-.41,42.24,42.24,0,0,1,5.85-84.08,45.73,45.73,0,0,1,4.84.27A42.26,42.26,0,0,1,640.84,520.58Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <path
        d="M829.57,716.13c0,5.36-28.49,16.25-53.06,24.65A153,153,0,0,1,723,748.55a15.67,15.67,0,0,0-4.37.39c-6.74,1.79-94.36-18.88-94.36-18.88s-17.89-8.3-25.29-18.85c31.88,11.91,121.45,27.39,121.45,27.39l58-3.6s32.61-11.88,51-19.71A1.58,1.58,0,0,1,829.57,716.13Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M565.35,568.84s6.29,16.53,14.38,20.57,24.26,20.22,22.92,41.34c0,0-2.7,5.85,5.84,18s29.21,38.64,29.21,38.64,42.23,14.83,55.71,23.82h.05a157.88,157.88,0,0,1,31.09,7.75c5.76,2,12.81,3.93,19.19,3.93,13.93,0,85.83-18.87,85.83-9.44,0,5.37-28.49,16.26-53.07,24.66A153.14,153.14,0,0,1,723,745.85a16.05,16.05,0,0,0-4.37.39c-6.74,1.79-94.37-18.88-94.37-18.88S605.79,718.83,598.6,708,573,683.33,573,683.33s-20.22-34.15-22-42.24c0,0-10.33-5.84-37.3,3.14S507.83,624,507.83,624l30.11-35Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <path
        d="M573.89,581.33l-9.39-22.84a149.51,149.51,0,0,0-24.31,19.24c-11.24,11.23-18.88,18-24.27,19.32s-23.81,10.7-31.45-8.58-4.5-32.31,2.69-38.6S543,514,543,514l-6.39-.49s-44.48,15.57-58.41,8.46c0,0-24.72,4.13-30.11-4.86s-10.48-10.41-10.48-10.41l-32.66,44.11,11.69,97.51h30.1l32.35-12.58,43.14-3.6s16.18-15.28,18.43-22.47S560,579.08,573.89,581.33Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M573.89,580l-9.39-22.84a149.51,149.51,0,0,0-24.31,19.24c-11.24,11.24-18.88,18-24.27,19.32s-23.81,10.7-31.45-8.58-4.5-32.31,2.69-38.6S543,514,543,514l-6.39-1.83s-44.48,15.56-58.41,8.45c0,0-24.72,4.13-30.11-4.86s-10.48-10.41-10.48-10.41l-32.66,44.11,11.69,97.51h30.1l32.35-12.58,43.14-3.6s16.18-15.27,18.43-22.46S560,577.73,573.89,580Z"
        transform="translate(-32.94 -54.86)"
        fill="#565988"
      />
      <path
        d="M467.37,689.37c-.52,2.48-.94,4.07-.94,4.07s-1.85-.68-24.59,3.71-45.33,0-45.33,0a261.25,261.25,0,0,1-39.1-7.59c-19.54-5.56-45.16-12.14-43-19,.14-.4.28-.85.45-1.29,2.06-1,9.05-4.46,9.49-4.61,0,0,138.67,22.41,141.37,23.26A3.17,3.17,0,0,1,467.37,689.37Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M564.5,558.49l7.8,17.63s-12-6.37-27.34,19.75S527.6,625.7,527.6,625.7s-10.78,7.36-8.08,16.74c0,0-31.94,11-53,3.73,0,0-4.72,14.24-4.21,23.85a137.57,137.57,0,0,1,.08,15.41s6-4.55-16.76-.16-45.33,3.11-45.33,3.11a333,333,0,0,1-36.82-8.17c-19.55-5.56-49.88-4.13-47.69-11s9.44-19.88,9.44-19.88,5.22-3,5-5.9,9.61-11.29,9.61-11.29,6.06-5.05,5.22-9.27,5.9-11.12,5.9-11.12l12.81-25.1s10.78-23.43,18.2-24.44,21.06-22.58,21.06-22.58,24.26-19.54,24.43-23.59,12.13-11.29,12.13-11.29,1.93,16.54,18,17.22,37.3,0,37.3,0l41.69-9.8s-18.26,16.51-22.48,17.69-16.9,10.28-23.36,12S471.15,552.4,471.66,565s4.89,19,4.89,19S489.69,609,502.83,606c0,0,14.68.79,20.56-7.92S564.5,558.49,564.5,558.49Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M537.94,510.78l-1.14.87-1.31,1h0l-22.26,10.69-30.55,8.55-19.33,2.24-32.8-22.73s3.79-3.54,9.36-8c.9,4,4.57,15.24,17.71,15.79,16.05.69,37.3,0,37.3,0l42.18-8.29Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M564.5,557.14l7.8,19s-13.35-7.71-28.69,18.41-17.35,29.82-17.35,29.82-9.44,8.71-6.74,18.09c0,0-29.16,14.77-50.22,7.52,0,0-.5,8.77,0,18.37s-2.86,22.41-2.86,22.41-1.86-.67-24.61,3.71-45.32,0-45.32,0a260.48,260.48,0,0,1-39.1-7.58c-19.54-5.56-45.16-12.14-43-19s9.44-19.89,9.44-19.89,5.22-3,5.06-5.9,9.6-11.29,9.6-11.29,6.07-5,5.22-9.26,5.9-11.13,5.9-11.13l12.81-25.1s10.78-23.43,18.2-24.44,21.06-22.58,21.06-22.58S426,518.7,426.16,514.65s12.14-11.29,12.14-11.29,1.92,16.54,18,17.22,37.31,0,37.31,0l43-8.45s-19.6,15.16-23.81,16.34-16.91,10.28-23.37,12-19.6,10.62-19.1,23.26,4.89,19,4.89,19,13.14,24.94,26.29,21.91c0,0,14.67.78,20.55-7.92S564.5,557.14,564.5,557.14Z"
        transform="translate(-32.94 -54.86)"
        fill="#e8f4ff"
      />
      <path
        d="M433.75,618.28s16.51,30.67,24.09,34,6.07-2.36,6.07-2.36S436.11,625,433.75,618.28Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M401.9,641.54s16.18,25.78,28.14,25.78Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M366.34,609.69s18.88,59.65,53.59,64.37C419.93,674.06,374.6,640.7,366.34,609.69Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M369.71,661.25s31.18,24.77,50.22,21.07C419.93,682.32,387.41,676.76,369.71,661.25Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M346.57,703.75s31.17,24.77,50.22,21.06C396.79,724.81,364.26,719.25,346.57,703.75Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M354.72,717.81s31.17,24.77,50.21,21.07C404.93,738.88,372.41,733.32,354.72,717.81Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M359.43,695S390.6,719.74,409.64,716C409.64,716,377.12,710.47,359.43,695Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <polygon
        points="470.06 493.49 450.52 518.6 453.21 523.65 470.06 493.49"
        opacity="0.1"
      />
      <path
        d="M640.84,520.58a42.24,42.24,0,0,1-42.23,42.25,41.74,41.74,0,0,1-5.85-.41,10.23,10.23,0,0,0,1.55-2.36c1.25-3.49-4-7.13-2.35-10.47.85-1.78,3.14-2.23,5.11-2.28s4.16,0,5.59-1.36c1.65-1.59,1.42-4.21,1.84-6.46.66-3.42,3.06-6.27,5.67-8.6s5.53-4.34,7.78-7c3.45-4.1,5.07-9.46,5.5-14.8.28-3.45,0-7.12-1.82-10-2-3.09-5.43-4.83-8.57-6.73a23.5,23.5,0,0,1-7.46-6.51c-1.28-1.88-2.56-4.81-2.15-7.19A42.26,42.26,0,0,1,640.84,520.58Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M664,522.65a7.47,7.47,0,0,1-.79,2c-.1.18-.22.37-.33.56l-.61.93a9,9,0,0,0-1.85,4.15c-.12,1.85.89,3.54,1.55,5.3l.11.31h0a7.32,7.32,0,0,1,.23.76,8.72,8.72,0,0,1-.39,5.22h0a15.67,15.67,0,0,1-3.15,5c-2.55,2.75-5.76,4.83-8.33,7.55-1.92,2-3.47,4.37-5.37,6.39-4.5,4.76-10.8,7.49-17.21,8.79a78.33,78.33,0,0,1-15.21,1.23h-4.35a4.78,4.78,0,0,1-2-.31,7,7,0,0,1-1.87-1.85c-2.62-3-7-3.57-11-3.91a2.8,2.8,0,0,1,.66-2.13,12.31,12.31,0,0,0,1.64-2.51c1.26-3.5-4-7.13-2.34-10.49a2.86,2.86,0,0,1,.62-.84,3.48,3.48,0,0,1,.55-.45,7.81,7.81,0,0,1,3.94-1c.74,0,1.51,0,2.26-.09A5.34,5.34,0,0,0,604,546v0c1.65-1.57,1.42-4.2,1.84-6.44.66-3.44,3.06-6.28,5.67-8.6s5.53-4.34,7.78-7c3.45-4.09,5.07-9.47,5.5-14.79.28-3.45,0-7.13-1.82-10-1.74-2.7-4.6-4.37-7.39-6l-1.18-.7a27.71,27.71,0,0,1-5.91-4.57A18.3,18.3,0,0,1,607,485.8c-1.25-1.84-2.49-4.67-2.18-7a2.46,2.46,0,0,1,.08-.46c.59-2.57,3.13-2.6,5.54-2.92.65-.08,1.29-.15,1.94-.19a25.15,25.15,0,0,1,2.88,0A26.67,26.67,0,0,1,627,478.45c1.34.73,2.62,1.58,4,2.21,3.28,1.47,7,1.66,10.38,2.74,6.84,2.14,12.15,7.74,15.52,14.06s5.05,13.37,6.7,20.33A11.17,11.17,0,0,1,664,522.65Z"
        transform="translate(-32.94 -54.86)"
        fill="#965d7b"
      />
      <path
        d="M536.22,780.93a9.88,9.88,0,0,1-1,2.6s-4.46.16-11,.11c-8.93-.07-21.69-.53-32-2.35a104.26,104.26,0,0,0-18.57-1l-43.22-4.37-23.36-3.16-12-26.16c6.94.38,12.92.11,12.92.11,13.27-12.58,25.62-10.56,32.36-5.1s19.33,9.81,20.22,9.81c.6,0,20.47.42,33.25.68a59.94,59.94,0,0,1,28.26,7.56C537,768,537.22,776.72,536.22,780.93Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M314.31,696.4,304.5,700s-27.18-18.7-66.95-9.94-37.07,32.13-37.07,32.13,1.57,28.64,13,38.47,18.65,10.28,25.16,17.7,40.22,10.78,40.22,10.78,66.73,3.37,102.68,0,52.18-3.37,52.18-3.37,39.48-4.94,57.23-1.8,42.92,2.25,42.92,2.25,7.42-12.28-13.09-23.89a59.79,59.79,0,0,0-28.26-7.56c-12.77-.27-32.64-.68-33.25-.68-.9,0-13.48-4.35-20.22-9.81s-19.09-7.49-32.35,5.09c0,0-29.43,1.35-33.48-6.06s-24.94-30.67-24.94-30.67Z"
        transform="translate(-32.94 -54.86)"
        fill="#ffc1c7"
      />
      <path
        d="M363.14,740.54s-.22,4.07,8.88,3.4c8.42-.63-24.94-30.67-24.94-30.67l-34-16.25-9.81,3.61S336.18,696.73,363.14,740.54Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M364.49,739.19s-.22,4.07,8.88,3.4c8.42-.62-24.94-30.67-24.94-30.67l-34-16.25-9.82,3.61S337.53,695.38,364.49,739.19Z"
        transform="translate(-32.94 -54.86)"
        fill="#565988"
      />
      <path
        d="M267.88,711.41s9.66-4.94,23.82,1.24a114,114,0,0,0,15.58,5.41,100.12,100.12,0,0,1,24.34,10.17c9.86,5.73,23.24,12.61,30.68,12.61"
        transform="translate(-32.94 -54.86)"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        opacity="0.1"
      />
      <path
        d="M611,570.76a4.59,4.59,0,0,1-2-.31,6.72,6.72,0,0,1-1.87-1.85c-2.62-3-7.05-3.57-11-3.9-.32-1.74,1.69-3,2.29-4.64,1.27-3.5-4-7.13-2.34-10.48.86-1.77,3.15-2.22,5.12-2.27s4.16,0,5.58-1.37c1.65-1.58,1.42-4.21,1.85-6.45.65-3.43,3.05-6.28,5.66-8.6s5.54-4.34,7.79-7c3.44-4.09,5.06-9.46,5.5-14.79.28-3.46,0-7.13-1.83-10.05-2-3.08-5.43-4.82-8.57-6.73a23.5,23.5,0,0,1-7.46-6.51c-1.32-1.94-2.66-5-2.1-7.45s3.14-2.6,5.55-2.92c.71-.1,1.41-.16,2.13-.2a27.86,27.86,0,0,0-4.83.2c-2.41.32-5,.35-5.55,2.92s.78,5.51,2.11,7.45a23.5,23.5,0,0,0,7.46,6.51C617.54,494.21,621,496,623,499c1.87,2.92,2.11,6.59,1.83,10.05-.44,5.33-2,10.7-5.5,14.79-2.25,2.68-5.17,4.69-7.78,7s-5,5.17-5.67,8.6c-.43,2.24-.2,4.87-1.84,6.45-1.42,1.36-3.62,1.32-5.59,1.37s-4.26.5-5.12,2.27c-1.62,3.35,3.61,7,2.35,10.48-.61,1.66-2.61,2.9-2.3,4.64,4,.33,8.42.87,11,3.9a6.46,6.46,0,0,0,1.87,1.85,4.52,4.52,0,0,0,2,.31c1.45,0,2.91,0,4.37,0Z"
        transform="translate(-32.94 -54.86)"
        opacity="0.1"
      />
      <path
        d="M662.49,543.39v0c.4-1.28.85-2.71,1.29-4.23a81.92,81.92,0,0,0,2.93-12.31,21.05,21.05,0,0,0-3.84-1.67c.11-.19.23-.38.33-.56l-.9.37s0,.42,0,1.12c-.07,1.9-.21,5.92-.3,9.45,0,.06,0,.11,0,.16-.07,2.79-.11,5.26,0,6.14h0Z"
        transform="translate(-32.94 -54.86)"
        fill="#565988"
      />
      <ellipse
        cx="917.6"
        cy="704.66"
        rx="43.52"
        ry="5.98"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M968.19,752.07c1.83-1.7,3.54-3.7,4.07-6.14s-.52-5.37-2.85-6.26c-2.61-1-5.4.82-7.51,2.64s-4.54,3.92-7.31,3.53A11.12,11.12,0,0,0,958,735.43a4.29,4.29,0,0,0-1-2.12c-1.45-1.55-4.08-.88-5.81.34-5.52,3.88-7.06,11.38-7.09,18.13-.56-2.44-.09-5-.1-7.47s-.7-5.27-2.81-6.61a8.48,8.48,0,0,0-4.28-1c-2.48-.09-5.24.15-6.94,2-2.1,2.25-1.56,6,.28,8.52s4.61,4,7.18,5.75a16,16,0,0,1,5.13,4.9,5.31,5.31,0,0,1,.38.87h15.56A43.06,43.06,0,0,0,968.19,752.07Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
      />
      <ellipse
        cx="1056.75"
        cy="730.33"
        rx="43.52"
        ry="5.98"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M1107.34,777.74c1.83-1.7,3.54-3.7,4.07-6.14s-.52-5.37-2.85-6.26c-2.61-1-5.4.81-7.51,2.64s-4.54,3.92-7.31,3.53a11.13,11.13,0,0,0,3.44-10.42,4.3,4.3,0,0,0-1-2.11c-1.45-1.55-4.08-.89-5.81.34-5.52,3.88-7.06,11.38-7.09,18.12-.56-2.43-.09-5-.1-7.46s-.7-5.27-2.81-6.61a8.46,8.46,0,0,0-4.28-1c-2.48-.09-5.24.16-6.94,2-2.1,2.25-1.56,6,.28,8.52s4.61,4,7.18,5.75a15.91,15.91,0,0,1,5.13,4.9,4.57,4.57,0,0,1,.38.87h15.56A43.4,43.4,0,0,0,1107.34,777.74Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
      />
      <ellipse
        cx="969.7"
        cy="784.3"
        rx="43.52"
        ry="5.98"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M1020.29,831.71c1.83-1.7,3.54-3.7,4.07-6.14s-.51-5.36-2.84-6.25c-2.62-1-5.41.81-7.52,2.63s-4.54,3.92-7.31,3.53a11.12,11.12,0,0,0,3.44-10.41,4.29,4.29,0,0,0-1-2.12c-1.45-1.55-4.07-.88-5.81.34-5.52,3.88-7.06,11.38-7.09,18.13-.56-2.44-.09-5-.1-7.47s-.7-5.27-2.81-6.61a8.44,8.44,0,0,0-4.27-1c-2.49-.09-5.25.16-6.94,2-2.11,2.26-1.56,6,.27,8.52s4.62,4,7.18,5.75a15.92,15.92,0,0,1,5.13,4.9,4,4,0,0,1,.38.87h15.56A43.06,43.06,0,0,0,1020.29,831.71Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
      />
      <ellipse
        cx="87.05"
        cy="694.9"
        rx="43.52"
        ry="5.98"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M137.63,742.31c1.83-1.7,3.55-3.7,4.07-6.14s-.51-5.37-2.84-6.26c-2.61-1-5.4.81-7.52,2.64s-4.54,3.92-7.31,3.53a11.11,11.11,0,0,0,3.44-10.42,4.37,4.37,0,0,0-1-2.11c-1.45-1.55-4.08-.89-5.82.34-5.52,3.88-7.06,11.38-7.09,18.12-.55-2.43-.08-5-.1-7.46s-.7-5.27-2.8-6.61a8.48,8.48,0,0,0-4.28-1c-2.48-.09-5.25.16-6.94,2-2.11,2.25-1.56,6,.27,8.52s4.62,4,7.19,5.75a15.91,15.91,0,0,1,5.13,4.9,5.31,5.31,0,0,1,.38.87H128A43.4,43.4,0,0,0,137.63,742.31Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
      />
      <ellipse
        cx="43.52"
        cy="779.71"
        rx="43.52"
        ry="5.98"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M94.11,827.12c1.83-1.7,3.54-3.7,4.07-6.14s-.51-5.37-2.84-6.26c-2.62-1-5.41.81-7.52,2.64s-4.54,3.92-7.31,3.53A11.13,11.13,0,0,0,84,810.47a4.3,4.3,0,0,0-1-2.11c-1.45-1.55-4.07-.89-5.81.34-5.52,3.88-7.06,11.38-7.09,18.13-.56-2.44-.09-5-.1-7.47s-.7-5.27-2.81-6.61a8.34,8.34,0,0,0-4.27-1c-2.49-.1-5.25.15-6.94,2-2.11,2.25-1.56,6,.27,8.52s4.62,4,7.18,5.75a15.81,15.81,0,0,1,5.13,4.9,4,4,0,0,1,.38.87H84.49A43.4,43.4,0,0,0,94.11,827.12Z"
        transform="translate(-32.94 -54.86)"
        fill={color}
      />
    </svg>
  );
};

Pilates.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Pilates.defaultProps = {
  color: "primary",
  style: {}
};

export default Pilates;
