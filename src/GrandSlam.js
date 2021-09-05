import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgGrandSlam = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1104.51 798.9"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="GrandSlam_svg__a"
          x1={778.88}
          y1={597.01}
          x2={778.88}
          y2={287.01}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="GrandSlam_svg__b"
          x1={514.35}
          y1={472.3}
          x2={514.35}
          y2={454.49}
          xlinkHref="#GrandSlam_svg__a"
        />
      </defs>
      <path
        d="M1104.12 69.19c-3.72 31.61-29.81 56.64-36 87.86a85.19 85.19 0 00-1.46 12.41c-.89 17.93 2.66 36.23.83 54.19-3.41 33.68-23.88 60-49.87 82.81-19.66 17.21-42.48 32.35-63.47 47-53.44 37.33-103.56 84.46-125.51 145.84-14.63 40.93-15.75 85.41-26.49 127.53s-35.2 85.22-76.54 98.65c-44.37 14.42-93.26-9.62-138.92-.12-49 10.2-83.75 56.51-132.1 69.59-61.43 16.62-122.65-24.22-185.71-32.73-30.28-4.09-61.1-.62-91.54-3.24a230.08 230.08 0 01-96-30.51c-10-5.87-20.11-13.08-24.76-23.74-4-9.21-3.39-19.71-2.16-29.68 4.6-37 16.24-77.22-2.07-109.74-16.89-30-57.82-51.46-51.75-85.33 3.66-20.38 23.66-33.11 42.28-42.24 38.32-18.83 79.14-33.57 113.39-59 24.5-18.22 45.6-43.64 54.6-72.23a96.31 96.31 0 004.45-35.42c-1.26-18.9-7.8-40.12 3.6-55.25 4.94-6.56 12.51-10.59 20.12-13.67 28.7-11.6 60.58-12.27 90.42-20.51a124.73 124.73 0 0029.25-12.21c18.2-10.54 32.85-26.07 36.39-46.34 2.07-11.88.23-24.85 6.16-35.35 10-17.8 29.77-25.24 51.85-27.66 27.33-3 58.28 1.69 79 4l2.07.22c26.61 2.77 53-3.12 78.93-12 28-9.51 55.37-22.45 82-31.65q3.75-1.3 7.48-2.49a383 383 0 0159.52-13.85 389.12 389.12 0 0186-3.32 381.53 381.53 0 0143.38 5.64q6.32 1.2 12.62 2.57c24.42 5.23 48.71 11.62 73.62 12h5.38c29.71-.51 60.09-8.06 88.28 1.06 12.87 4.17 25.11 12.37 30.27 24.81 2.87 6.93 3.33 14.66 2.46 22.1z"
        fill={color}
      />
      <path
        d="M1066.7 169.45h-25.67a34 34 0 00-22.34-30 24 24 0 10-23.15 0 34 34 0 00-22.34 30h-.22a34 34 0 00-22.28-29 24 24 0 10-35.17-25.41 33.93 33.93 0 00-9.83-5.59 24 24 0 10-23.15 0 34 34 0 00-22.42 32v28h-11v-22a34 34 0 00-22.42-32 24 24 0 10-23.15 0 34.1 34.1 0 00-19.6 18.44 34.09 34.09 0 00-16.27-12.44 24 24 0 10-23.15 0 34.11 34.11 0 00-17.42 14.23v-4.23a34 34 0 00-22.42-32 24 24 0 10-23.15 0 34 34 0 00-22.42 32v38h-12a34.09 34.09 0 00-19.39-18 24 24 0 10-23.15 0 33.87 33.87 0 00-6.76 3.35 34 34 0 00-22.14-27.35 24 24 0 10-23.15 0 34.07 34.07 0 00-21 22.4 34 34 0 00-13.82-9.4 24 24 0 10-23.15 0 33.93 33.93 0 00-10.08 5.8 34.1 34.1 0 00-19.8-18.8 24 24 0 10-23.15 0 34 34 0 00-22.42 32v10h-60.4a124.73 124.73 0 01-29.25 12.15c-29.84 8.24-61.72 8.91-90.42 20.51-7.61 3.08-15.18 7.11-20.12 13.67-11.4 15.13-4.86 36.35-3.6 55.25a96.31 96.31 0 01-4.46 35.42h806.79c26-22.76 46.46-49.13 49.87-82.81 1.83-17.95-1.72-36.25-.83-54.19z"
        opacity={0.2}
      />
      <path
        d="M772.26 518.52s.35 12.65-10.9 15.11 4.57 9.84 10.9 8.08 32.34-24.6 32.34-24.6-9.14-14.06-15.11-14.06c-.04.01-10.93 18.28-17.23 15.47zM721.26 511.14s.7 11.6-16.52 18.28c0 0-17.93 1.76-5.62 10.54s49.56-2.46 49.56-2.46-.7-11.25-4.92-20.39c0 .01-20.38-1.4-22.5-5.97z"
        opacity={0.05}
      />
      <path
        d="M903.39 318.88c-5.43-6.41-17 17.46-17 17.46L844.26 346a14.09 14.09 0 01-6.86-4.66 19.46 19.46 0 0017.57-9.7l-10.86-.61a8.85 8.85 0 01-3.22-.58c-2.08-.95-3-3.26-4.12-5.25A25.42 25.42 0 00823 313.5c-3.89-1.38-8.23-1.86-11.57-4.26-2.41-1.73-4.05-4.28-6-6.51-9.25-10.68-24.57-13.64-38.71-15.48-2.5-.33-5.35-.54-7.23 1.12-1.29 1.13-1.8 2.9-2.92 4.2-1.91 2.23-5.14 2.68-8.05 3.23a26.33 26.33 0 00-10.28 3.91 13 13 0 00-5.73 9c-.56 5.55 3.49 10.86 2.74 16.39-.23 1.7-.91 3.32-1 5a15.7 15.7 0 00.76 4.76c1.22 4.69 2.16 9.57 1.33 14.34s-3.75 9.42-8.32 11.19a25.17 25.17 0 0017.31-2.39c5.14-2.94 8.92-8.37 9.1-14.22v-.42l.61.24c.09.33.18.68.26 1.05l.91.26a19.35 19.35 0 010 6.31l-6.33 5.06s0 .37.08 1l-.08.06s0 .3.07.83l-12.38 7.72a49.47 49.47 0 00-17 24.23l-11.23 17.48s-7.24 6.77-11.22 7.84l-33.67 29.22s-11.66 6.35-11.61 12.69v.77q0 .18.08.36c0 .12.07.23.11.35v.06c0 .11.08.22.13.33v.07l.16.32v.08l.18.3.06.09.2.29.08.1.23.28.1.11.25.26.12.12.27.25.14.13.3.25.16.13.33.24.17.13.38.26.16.11.6.36c13 7.48 16.29-11.76 16.29-11.76l39.1-25.66s32.22-29.22 32.22-35.63l7 3-.12 1.26v1.07s-.36 15 18.46 18.89c0 0 17.21 17.27 17.73 22.76v.4c-.3 4.2 3.75 12.43 5 14.94l-6.85 5.73.07 1-.07.06.26 3.56c-7.75 8.35-19 20.74-20.17 23.52-1.81 4.28-1.81 13.54 2.53 23.16l4.71 42.4v12.35l-2.17-1v2.8a5.18 5.18 0 01-2.53-2.09v.36c-.06 2.07-1.17 12.1-17 18.15 0 0-10.5 1-10.23 5.34-.11 1.46 1.05 3.33 4.43 5.71 12.67 8.91 51-2.49 51-2.49v-.35s-.72-11.4-5.07-20.67c0 0-1-.07-2.53-.22v-2.63l-1.58-.27a69.39 69.39 0 011.47-14.87 116.31 116.31 0 002.07-34.5 43.58 43.58 0 006 6.17l22.85 36.24 2.7 5.55c-1 .72-2 1.35-2.82 1.86l4.59 4.25a4.28 4.28 0 01-3.2 0s.36 12.83-11.22 15.32c-4.62 1-4.8 2.78-2.95 4.46 2.46 2.67 10.43 5.21 14.53 4.09 6.52-1.78 33.31-24.94 33.31-24.94a69 69 0 00-8.05-9.85c-2.62-2.62-5.49-4.75-7.88-4.75 0 0-.55.91-1.48 2.3l-2.86-2.65-.29.27c-.24-.79-.46-1.59-.65-2.38 0 0-5.55-25.43-22.55-44.69 0 0-3.35-2.77 1.83-11.92 0 0 8.38-9.94 15.69-20.72 10.63 2.07 21.57 1.22 29.87-6.44l-.11-.66.47-.41-3.62-22.45s1.63-21.2-24.8-38.31c0 0-14.3-17.64-19.37-40.09h-.29l.29-3.89c3.26 2.49 38-2.14 38-2.14l46-19.24c2.61-1.43 9.88-11.34 9.85-18.52a7.19 7.19 0 00-1.52-5z"
        transform="translate(-47.74 -50.55)"
        fill="url(#GrandSlam_svg__a)"
      />
      <path
        d="M787.95 291.52a13.67 13.67 0 009.86 5.19 31.65 31.65 0 01-10.11 6.32c-10.82 4.25-23.92 3-33.24-4.08-2.19-1.67-4.29-3.66-7-4.31-2.32-.57-4.76 0-7.16-.13a14.21 14.21 0 01-12.92-10.62c-.69-2.93-.41-6-.91-9a14 14 0 00-.33-1.51c-1.4-5-7.94-10.38-13.45-8.92-5.2 1.37-7.87 9.55-7.76 14.23.11 5.15 2.6 10.07 2.44 15.22-.18 5.77-3.85 11.13-8.84 14a24.1 24.1 0 01-16.77 2.34c4.44-1.75 7.27-6.34 8.08-11s-.11-9.52-1.29-14.14a15.72 15.72 0 01-.74-4.7c.09-1.69.75-3.29 1-5 .73-5.45-3.2-10.69-2.66-16.16a12.79 12.79 0 015.56-8.85 25.32 25.32 0 0110-3.86c2.82-.54 6-1 7.82-3.19 1.09-1.28 1.58-3 2.83-4.15 1.82-1.63 4.59-1.42 7-1.1 13.73 1.82 28.59 4.73 37.58 15.27 1.88 2.2 3.47 4.72 5.81 6.42 3.24 2.37 7.45 2.84 11.23 4.2a24.79 24.79 0 0113.35 11.57c1 2 2 4.24 4 5.18a8.47 8.47 0 003.13.58l10.54.6a18.83 18.83 0 01-17.05 9.6z"
        fill="#f55f44"
      />
      <path
        d="M734.8 291.65s5.1.53 15.29-1.93 20.39 5.27 20.39 5.27l21.44 1.76 43.58-10.19s11.25-23.55 16.52-17.22-4.92 21.09-8.08 22.85l-44.68 18.96s-33.74 4.57-36.9 2.11l-.7 9.49-16.87-8.08-7.35-17.22z"
        fill="#fdb797"
      />
      <path
        d="M843.93 291.82l-44.64 19s-33.74 4.57-36.9 2.11l-.7 9.49-16.87-8.08-7.38-17.22-2.31-5.07h-.33l2.64 5.8 7.38 17.22 16.87 8.08.7-9.49c3.16 2.46 36.9-2.11 36.9-2.11l44.64-19c2.58-1.43 9.81-11.49 9.56-18.59-.23 7.02-7.06 16.49-9.56 17.86z"
        opacity={0.05}
      />
      <path
        d="M705.45 306.58l-14.41 9.14a48.71 48.71 0 00-16.52 23.9l-10.9 17.22s-7 6.68-10.9 7.73l-32.69 28.82s-19.68 10.9-7 18.28 15.82-11.6 15.82-11.6l38-25.31s31.28-28.82 31.28-35.15l11.25 4.92z"
        fill="#fdb797"
      />
      <path
        d="M698.07 338.92c0 6.33-31.28 35.15-31.28 35.15l-38 25.31s-3.16 19-15.82 11.6c-2.9-1.69-4.1-3.57-4.23-5.45-.14 2.12 1 4.25 4.23 6.16 12.65 7.38 15.82-11.6 15.82-11.6l38-25.31s31.28-28.82 31.28-35.15l11.25 4.92-.07-.74z"
        opacity={0.05}
      />
      <path
        d="M747.46 412.28s-11 34.87-10.73 39.43 4.18 12.8 12.09 19.54L771.01 507l6.83 14.26 13.43-3.7s-5-8.89-6.94-16.94c0 0-5.39-25.09-21.89-44.08 0 0-3.25-2.73 1.77-11.76 0 0 24.72-29.76 25.55-41.85z"
        fill="#fdb797"
      />
      <path
        d="M747.46 412.28s-11 34.87-10.73 39.43 4.18 12.8 12.09 19.54L771.01 507l6.83 14.26 13.43-3.7s-5-8.89-6.94-16.94c0 0-5.39-25.09-21.89-44.08 0 0-3.25-2.73 1.77-11.76 0 0 24.72-29.76 25.55-41.85z"
        opacity={0.05}
      />
      <path
        d="M745.87 403.59s-25 26.71-26.71 30.93-1.76 13.36 2.46 22.85l4.57 41.83v15.82l13.71 2.43s-.7-10.19 1.05-18.28c0 0 6-25-.7-49.21 0 0-1.76-3.87 6.68-9.84 0 0 35.15-16.17 41.12-26.71z"
        opacity={0.1}
      />
      <path
        d="M745.52 403.59s-25 26.71-26.71 30.93-1.76 13.36 2.46 22.85l4.57 41.83v15.82l13.71 2.43s-.7-10.19 1.05-18.28c0 0 6-25-.7-49.21 0 0-1.76-3.87 6.68-9.84 0 0 35.15-16.17 41.12-26.71z"
        fill="#fdb797"
      />
      <path
        d="M745.7 403.59l-.19.2 41.31 9.66c-6 10.54-41.12 26.71-41.12 26.71-8.44 6-6.68 9.84-6.68 9.84 6.68 24.25.7 49.21.7 49.21-1.62 7.45-1.15 16.67-1.07 18.09l1.07.19s-.7-10.19 1.05-18.28c0 0 6-25-.7-49.21 0 0-1.76-3.87 6.68-9.84 0 0 35.15-16.17 41.12-26.71z"
        opacity={0.05}
      />
      <path
        d="M707.26 289.36s4.92 7.73 0 17.93l4.92 25.31 20.39-2.81 9.84-11.25-7.78-27.09s-6.33 2.46-7-14.76z"
        fill="#fdb797"
      />
      <path
        d="M702.99 307.29s1.41 18.63 3.16 22.85l-1.41 14.76s-.35 14.76 17.93 18.63c0 0 17.57 17.93 17.22 22.85s5.27 15.46 5.27 15.46l-7 6 .35 4.92 4.92-4.92s42.53 31.28 65 10.19l-3.51-22.14s3-18.8-22.67-35.67c0 0-15.29-19.51-20.21-41.65 0 0-14.06-1.41-17.57-6.68l-7-21.09-5.8 1.23 5.45 23.37s-6.33 21.09-23.9 12l-4-25z"
        opacity={0.1}
      />
      <path
        d="M702.99 306.23s1.41 18.63 3.16 22.85l-1.41 14.76s-.35 14.76 17.93 18.63c0 0 17.57 17.93 17.22 22.85s5.27 15.46 5.27 15.46l-7 6 .35 4.92 4.92-4.92s42.53 31.28 65 10.19l-3.51-22.14s1.58-20.91-24.08-37.78c0 0-13.88-17.4-18.8-39.54 0 0-14.06-1.41-17.57-6.68l-7-21.09-5.8 1.23 5.45 23.37s-6.33 21.09-23.9 12l-4-25z"
        fill="#252a62"
      />
      <path
        fill="#b4abab"
        d="M516.33 394.63h56.33v.35h-56.33zM517.74 392.17h53.52v.35h-53.52zM518.79 389.71h48.95v.35h-48.95zM520.55 387.25h43.32v.35h-43.32zM523.01 384.79h37v.35h-37zM526.17 382.33h29.62v.35h-29.62zM531.09 379.87h18.37v.35h-18.37zM515.27 397.44h59.49v.35h-59.49zM515.27 400.25h60.55v.35h-60.55zM514.22 403.06h62.3v.35h-62.3zM514.22 405.87h63.12v.35h-63.12zM514.22 408.69h62.77v.35h-62.77zM514.92 411.5h61.01v.35h-61.01zM516.33 414.31h57.84v.35h-57.84zM516.33 417.12h55.38v.35h-55.38zM518.79 419.93h49.76v.35h-49.76zM521.25 422.74h43.43v.35h-43.43zM524.06 425.56h36.41v.35h-36.41zM529.69 428.37h25.86v.35h-25.86z"
      />
      <path
        fill="#b4abab"
        d="M521.57 386.25h.35v37.29h-.35zM519.46 389.06h.35v32.02h-.35zM517.35 392.22h.35v26.05h-.35zM515.24 397.14h.35v16.56h-.35zM524.38 383.79h.35V426h-.35zM527.19 382.03h.35v45.38h-.35zM530 380.62h.35v47.84H530zM532.82 379.57h.35v49.95h-.35zM535.63 378.52h.35v52.06h-.35zM538.44 378.52h.35v52.06h-.35zM541.25 378.52h.35v52.06h-.35zM544.06 378.52h.35v52.06h-.35zM546.88 379.57h.35v51h-.35zM549.69 380.27h.35v49.95h-.35zM552.5 380.98h.35v48.54h-.35zM555.31 382.38h.35v45.73h-.35zM558.12 383.79h.35v43.27h-.35zM560.93 386.25h.35v39.4h-.35zM563.75 387.3h.35v36.24h-.35zM566.56 389.41h.35v32.37h-.35zM569.37 391.87h.35v27.8h-.35zM572.18 393.98h.35v22.53h-.35zM574.99 398.55h.35v14.8h-.35z"
      />
      <path
        d="M541.9 431.63a33 33 0 01-9.26-1.27c-7.46-2.17-13.09-6.61-16.28-12.85a27.37 27.37 0 01-2-18.7c2.82-12 13.69-23.55 30.9-20.46l.58.11a42.88 42.88 0 0116.71 7.14c28.56 20.1 35 17.41 35 17.38l1.06-.61v4.46l-.77-.08c-9.38-1-24 9.74-31.94 16.2a37.69 37.69 0 01-20.86 8.55q-1.6.13-3.14.13zm-2.15-52.38c-13.28 0-21.68 9.76-24.05 19.88-2.62 11.19 1.68 25.32 17.33 29.87a32.92 32.92 0 0011.88 1.09 36.3 36.3 0 0020.08-8.24c7.86-6.43 22.33-17 32.2-16.56v-.84c-2.77.32-11.56-.9-35.48-17.74a41.48 41.48 0 00-16.17-6.91l-.57-.11a29.62 29.62 0 00-5.22-.43z"
        fill="#535461"
      />
      <path
        d="M595.79 401.13H626a3.51 3.51 0 013.51 3.51 3.51 3.51 0 01-3.51 3.51h-30.21v-7-.02z"
        fill="#535461"
      />
      <path fill="#f0e4e4" d="M595.79 401.13h4.22v7.03h-4.22z" />
      <path
        d="M568.26 421.03l-.82-1.14c6-4.31 9-9 9-14 0-8.53-8.92-15.16-9-15.22l.83-1.14c.39.29 9.61 7.1 9.59 16.36 0 5.47-3.22 10.56-9.6 15.14z"
        fill="#535461"
      />
      <path
        d="M729.06 288.95c-1.05-2.18-1.93-5.75-2.16-11.54l-20.39 12.65a15.72 15.72 0 011.75 4.7 19.68 19.68 0 0020.8-5.81z"
        opacity={0.1}
      />
      <circle cx={714.94} cy={275.3} r={19.68} fill="#fdb797" />
      <path
        d="M714.01 270.45c2 .8 3.33 2.68 5.23 3.65 2.73 1.39 6 .67 9.06 1.24 3.43.65 6.57 3 10 2.68 4.12-.36 7.13-4.68 7-8.81s-2.85-7.83-6.21-10.23-7.36-3.72-11.29-5c-5-1.65-10.4-3.31-15.57-2.12-4.82 1.11-17.8 7.49-17.13 13.53 1.09 9.71 13.89 3.06 18.91 5.06z"
        opacity={0.1}
      />
      <path
        d="M714.01 269.76c2 .8 3.33 2.68 5.23 3.65 2.73 1.39 6 .67 9.06 1.24 3.43.65 6.57 3 10 2.68 4.12-.36 7.13-4.68 7-8.81s-2.85-7.83-6.21-10.23-7.36-3.72-11.29-5c-5-1.65-10.4-3.31-15.57-2.12-4.82 1.11-17.8 7.49-17.13 13.53 1.09 9.7 13.89 3.04 18.91 5.06z"
        fill="#f55f44"
      />
      <path
        d="M743.26 386.54s1.05 8.79 3.87 11.6M779.09 358.07a11.51 11.51 0 01-1.76 7.73M762.26 335.58s-3.16 6.33-11.6 10.54"
        opacity={0.1}
      />
      <g opacity={0.05}>
        <path d="M711.08 327.32c6.15 3.2 10.92 2.69 14.53.69-3.24 1-7.22.78-12.07-1.74l-4-25-2.33 1.89zM735.33 290.77l7 21.09c3.51 5.27 17.57 6.68 17.57 6.68 4.92 22.14 18.8 39.54 18.8 39.54 25.66 16.87 24.08 37.78 24.08 37.78l3.51 22.14a26 26 0 01-6.37 4.4 25.92 25.92 0 008.83-5.46l-3.49-22.14s1.58-20.91-24.08-37.78c0 0-13.88-17.4-18.8-39.54 0 0-14.06-1.41-17.57-6.68l-7-21.09-5.8 1.23.12.51zM741.26 407.81l-2.55 2.55.09 1.31 3.28-3.28z" />
      </g>
      <path
        d="M755.89 396.74s14.76-10.19 26.71-10.19M725.66 359.83s8.44-5.27 10.9-9.49"
        opacity={0.1}
      />
      <path
        d="M618.81 397.45s-4.22 5.27-2.11 7 7.38-6 7.38-6z"
        fill="#fdb797"
      />
      <path
        d="M514.35 454.49a8.91 8.91 0 00-8.91 8.91 8 8 0 000 .88q0 .24.06.48v.13a8.83 8.83 0 003 5.27l.29.24a8.91 8.91 0 105.48-15.92z"
        transform="translate(-47.74 -50.55)"
        fill="url(#GrandSlam_svg__b)"
      />
      <path
        d="M461.5 419.39a8.31 8.31 0 10-3.2-6.54 7.42 7.42 0 000 .82q0 .22.05.45v.12a8.25 8.25 0 002.81 4.92z"
        fill="#3ad29f"
      />
      <path
        d="M461.5 419.39h.29c.11-1.16 3.34-3 6-4.49 2.79-1.59 4.52-2.61 4.8-3.47.37-1.1-.73-2.39-1.91-3.11-1.4-.87-3.4-1.28-4.82.14a43.68 43.68 0 01-7.47 5.18l.05.45v.12c.22-.12 5.41-3 7.79-5.4 1.18-1.17 2.89-.8 4.09 0s1.87 1.77 1.66 2.42-2.52 2-4.54 3.14c-2.87 1.65-5.84 3.33-6.21 4.76zM785.26 502.71s-9 8.44-14.35 11.6l4.86 4.57 15.49-2.12v-8.44zM726.89 511.85l-3.16-1.41v9.14l17.57 2.81v-8.08l-14.41-2.46z"
        fill="#f0e4e4"
      />
      <path
        d="M721.26 510.45s.7 11.6-16.52 18.28c0 0-17.93 1.76-5.62 10.54s49.56-2.46 49.56-2.46-.7-11.25-4.92-20.39c0 .03-20.38-1.36-22.5-5.97z"
        opacity={0.05}
      />
      <path
        d="M721.26 511.45s.7 11.6-16.52 18.28c0 0-17.93 1.76-5.62 10.54s49.56-2.46 49.56-2.46-.7-11.25-4.92-20.39c0 .03-20.38-1.36-22.5-5.97z"
        fill="#f0e4e4"
      />
      <path
        d="M772.58 517.87s.35 12.65-10.9 15.11 4.57 9.84 10.9 8.08 32.34-24.61 32.34-24.61-9.14-14-15.11-14c0 0-10.9 18.24-17.23 15.42z"
        opacity={0.05}
      />
      <path
        d="M772.58 518.87s.35 12.65-10.9 15.11 4.57 9.84 10.9 8.08 32.34-24.61 32.34-24.61-9.14-14-15.11-14c0 0-10.9 18.24-17.23 15.42z"
        fill="#f0e4e4"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M256.11 453.46l49.98 101.51 49.99 101.5H156.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M98.11 453.46l49.98 101.51 49.99 101.5H98.11V453.46z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M187.11 453.46l49.98 101.51 49.99 101.5h-99.97l-80-7 5.52-44.76 24.49-49.74 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M304.11 453.46l49.98 101.51 49.99 101.5H204.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M397.11 453.46l49.98 101.51 49.99 101.5H297.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M497.11 453.46l49.98 101.51 49.99 101.5H397.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M597.11 453.46l49.98 101.51 49.99 101.5H497.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M699.11 453.46l49.98 101.51 49.99 101.5H599.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M800.11 453.46l49.98 101.51 49.99 101.5H700.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M894.11 453.46l49.98 101.51 49.99 101.5H794.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M1034.78 656.47h-55.64l49.98-101.5 1.99-4.03 3.67 105.53z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M954.11 453.46l49.98 101.51 49.99 101.5H854.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M983.11 453.46l49.98 101.51 11.02 22.36v79.14H883.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M1016.11 453.46v203.01h-99.97l49.98-101.5 49.99-101.51zM453.11 453.46l49.98 101.51 49.99 101.5H353.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M650.11 453.46l49.98 101.51 49.99 101.5H550.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M847.11 453.46l49.98 101.51 49.99 101.5H747.14l49.98-101.5 49.99-101.51z"
      />
      <path
        fill="none"
        stroke="#f0e4e4"
        strokeMiterlimit={10}
        d="M1044.11 453.46l4.43 9.01-6.43 93 2 101h0-99.97l49.98-101.5 49.99-101.51zM854.11 657.47l-49.99-101.5-49.98-101.51h199.94l-49.99 101.51-49.98 101.5zM649.11 657.47l-49.99-101.5-49.98-101.51h199.94l-49.99 101.51-49.98 101.5zM444.11 657.47l-49.99-101.5-49.98-101.51h199.94l-49.99 101.51-49.98 101.5zM239.11 657.47l-49.99-101.5-49.98-101.51h199.94l-49.99 101.51-49.98 101.5z"
      />
      <path
        fill="#f0e4e4"
        d="M125.11 444.47h910v18h-910zM125.11 649.47h910v18h-910z"
      />
      <path
        fill="#535461"
        d="M96.11 429.47h36v253h-36zM1017.11 429.47h36v253h-36z"
      />
    </svg>
  );
};

SvgGrandSlam.propTypes = {
  color: PropTypes.string
};
SvgGrandSlam.defaultProps = {
  color: "primary"
};
export default SvgGrandSlam;
