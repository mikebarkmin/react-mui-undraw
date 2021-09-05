import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTrueFriends = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1082 725"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="TrueFriends_svg__a"
          x1={443.56}
          y1={792.13}
          x2={443.56}
          y2={251.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="TrueFriends_svg__b"
          x1={712}
          y1={788.54}
          x2={712}
          y2={248.5}
          xlinkHref="#TrueFriends_svg__a"
        />
      </defs>
      <g opacity={0.2}>
        <path
          d="M374.55 666.42a42.59 42.59 0 002.16 6.52q20.85-8.19 42.16-15.7c-.12-.59-.24-1.21-.39-1.82a36.92 36.92 0 00-8.86-16.84c-5.68-6-13-8.9-20.12-7.13s-12.29 7.83-14.65 15.8a37.39 37.39 0 00-.3 19.17z"
          fill="#3f3d56"
        />
        <ellipse
          cx={446.94}
          cy={712.41}
          rx={22.64}
          ry={30.29}
          transform="rotate(-12.59 20.917 936.185)"
          fill="#3f3d56"
        />
        <ellipse
          cx={438.37}
          cy={676.4}
          rx={22.64}
          ry={30.29}
          transform="rotate(-12.59 12.322 900.14)"
          fill="#3f3d56"
        />
        <ellipse
          cx={429.79}
          cy={640.4}
          rx={22.64}
          ry={30.29}
          transform="rotate(-12.59 3.769 864.147)"
          fill="#3f3d56"
        />
        <ellipse
          cx={421.21}
          cy={604.4}
          rx={22.64}
          ry={30.29}
          transform="rotate(-12.59 -4.83 828.148)"
          fill="#3f3d56"
        />
        <path
          d="M385.74 249.94a111.58 111.58 0 005.26-14.38l-60 4.72 62.54-15.13a113.31 113.31 0 00-1.11-47.48 112 112 0 00-17.23-38.43L302 204.69l63.37-77.47c-25.87-27.62-65-40.76-103.89-31-58.11 14.53-93.72 74.57-79.54 134.1a110.74 110.74 0 0038.39 61 113.13 113.13 0 00-7.33 22.64l84.42 21.14-86.42-7.49a113.46 113.46 0 002.68 36 110.84 110.84 0 0038.4 61 112.85 112.85 0 00-6.64 72.27c14.18 59.53 72.78 96 130.89 81.48s93.72-74.56 79.54-134.09a110.84 110.84 0 00-38.4-61 112.85 112.85 0 006.64-72.27 110.77 110.77 0 00-38.37-61.06z"
          fill={color}
        />
        <path
          d="M213.7 363.57a110.84 110.84 0 0038.4 61 112.85 112.85 0 00-6.64 72.27c14.18 59.53 72.78 96 130.89 81.48s93.72-74.56 79.54-134.09a110.84 110.84 0 00-38.4-61c9.74-21.86-206.67-31.73-203.79-19.66z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M644.24 655.43a46.72 46.72 0 00-.43 7.86q26.15.42 52.5 1.76c.12-.69.24-1.39.34-2.1a41.67 41.67 0 00-2.45-21.73c-3.62-8.82-10.37-15.13-18.82-16.35s-16.69 2.94-22.64 10.36a41.74 41.74 0 00-8.5 20.2z"
          fill="#3f3d56"
        />
        <ellipse
          cx={735.48}
          cy={704.75}
          rx={34.66}
          ry={26.48}
          transform="rotate(-81.82 655.526 695.047)"
          fill="#3f3d56"
        />
        <ellipse
          cx={741.51}
          cy={662.82}
          rx={34.66}
          ry={26.48}
          transform="rotate(-81.82 661.55 653.118)"
          fill="#3f3d56"
        />
        <ellipse
          cx={747.53}
          cy={620.89}
          rx={34.66}
          ry={26.48}
          transform="rotate(-81.82 667.575 611.189)"
          fill="#3f3d56"
        />
        <ellipse
          cx={753.56}
          cy={578.97}
          rx={34.66}
          ry={26.48}
          transform="rotate(-81.82 673.6 569.26)"
          fill="#3f3d56"
        />
        <path
          d="M833.9 218.62a125.32 125.32 0 0011.82-13l-67.23-21.12 74.39 11.25a127.08 127.08 0 0016.69-99.12l-107.36 37.44 101.88-54.5a126.83 126.83 0 10-227.52 110.7A127.08 127.08 0 00619 211.1l82.71 59.28L611 224.7a126.9 126.9 0 003.26 120.8 126.82 126.82 0 10197.33 28.36 126.84 126.84 0 0022.31-155.24z"
          fill={color}
        />
        <path
          d="M598.55 264.02a126.31 126.31 0 0015.71 81.48 126.82 126.82 0 10197.33 28.36c19.9-18.95-211.01-123.93-213.04-109.84z"
          opacity={0.1}
        />
      </g>
      <ellipse cx={541} cy={694} rx={541} ry={31} fill={color} opacity={0.1} />
      <ellipse cx={894.7} cy={676.64} rx={25.3} ry={4.87} fill={color} />
      <ellipse cx={894.28} cy={674.58} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={669.86} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={665.15} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={660.44} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={655.72} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={651.01} rx={2.95} ry={3.86} fill="#3f3d56" />
      <ellipse cx={894.28} cy={646.3} rx={2.95} ry={3.86} fill="#3f3d56" />
      <path
        d="M905.3 614.05a13.58 13.58 0 001.1-1.62l-7.74-1.27 8.37.06a14.16 14.16 0 00.27-11.18l-11.23 5.83 10.36-7.62a14.12 14.12 0 10-23.31 15.8 14.43 14.43 0 00-1.61 2.57l10 5.22-10.71-3.6a14.09 14.09 0 002.32 13.26 14.11 14.11 0 1022.18 0 14.1 14.1 0 000-17.44z"
        fill={color}
      />
      <path
        d="M880.1 622.77a14.05 14.05 0 003 8.72 14.11 14.11 0 1022.18 0c1.91-2.4-25.18-10.3-25.18-8.72z"
        opacity={0.1}
      />
      <ellipse cx={313.7} cy={714.18} rx={33.8} ry={6.5} fill={color} />
      <ellipse cx={313.13} cy={711.42} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={705.12} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={698.82} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={692.53} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={686.23} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={679.93} rx={3.94} ry={5.15} fill="#3f3d56" />
      <ellipse cx={313.13} cy={673.64} rx={3.94} ry={5.15} fill="#3f3d56" />
      <path
        d="M327.87 630.55a19.94 19.94 0 001.46-2.16l-10.33-1.7 11.18.09a18.84 18.84 0 00.36-14.94l-15 7.78 13.83-10.12a18.85 18.85 0 10-31.14 21.1 19.29 19.29 0 00-2.15 3.44l13.43 7-14.32-4.8a18.89 18.89 0 003 17.7 18.85 18.85 0 1029.64 0 18.87 18.87 0 000-23.31z"
        fill={color}
      />
      <path
        d="M294.2 642.2a18.83 18.83 0 004 11.66 18.85 18.85 0 1029.64 0c2.55-3.21-33.64-13.77-33.64-11.66z"
        opacity={0.1}
      />
      <path
        d="M550.66 515.43c-2.55-13.34-5.4-26.71-5.87-40.28-.28-8 .28-16.14-.75-24.12-.51-3.92-1.4-7.77-2.28-11.62L538.22 424a25.73 25.73 0 00-.34-8.87 31 31 0 00-1.41-4.51 70 70 0 008.11-15c.94-2.4 1.75-4.95 1.38-7.49-.72-4.87-5.44-8.08-9.83-10.48-2.66-1.45-5.46-2.85-8.5-3.08a13.81 13.81 0 00-11.2 5 24.33 24.33 0 01.72-11.83c-2.61-1.17-5.24-2.27-7.89-3.34a72.44 72.44 0 01-.4-10.41c.06-4.17.13-8.38.37-12.56a37.1 37.1 0 0024.38-34.63v-1.27a30.08 30.08 0 002.58-23.08c-2.93-10-10.59-18.24-19.82-23.33s-19.93-7.24-30.52-7.62a43.91 43.91 0 00-10.62.67 51.24 51.24 0 00-10.82 4c-5.29 2.44-10.62 5.11-14.58 9.32-6.87 7.33-8.41 18.1-7.66 28 1 13 5.34 25.58 10.36 37.68 1.67 4 3.45 8.06 6.2 11.47 2.13 2.63 5.83 2.79 8.77.95a96 96 0 00-.22 9.6c-5.43-.19-10.72.7-15.08 3.76-2 1.43-3.9 3.68-3.46 6.1a5.67 5.67 0 015.46 4.85c.22 2.13-.85 4.16-1.89 6-.45.82-.9 1.65-1.36 2.47-4.3 4.6-8.71 10.36-9.1 16.07a20.07 20.07 0 00-2.09.31c-3.9.72-7.78 2.05-11.61 3.05l-27.72 7.3-6.85 1.9-11 2.9c-7 1.84-14.13 3.73-20.34 7.43s-11.48 9.51-12.73 16.51c-.62 3.48-.24 7.1-1 10.55 0 .16-.06.31-.1.46a33.75 33.75 0 01-2.55 6.31c-6.21 13.09-10.63 27.36-9.8 41.77.51 8.85 3 17.48 5.42 26q3.81 13.07 7.52 26.14a137.24 137.24 0 006.19 18.3 70.5 70.5 0 0018.53 24.77 32.72 32.72 0 007.4 5 26.91 26.91 0 0013 2.11c1.2-.08 2.38-.21 3.55-.4 8.59-1.36 16.6-5.5 23.95-10.16q4.61-2.92 9-6.15a57.09 57.09 0 002 9.92c.65 2.23 1.45 4.52 1.19 6.83-.36 3.22-2.7 5.86-3.91 8.88-2.57 6.38.07 13.49.5 20.33.41 6.41-1.15 12.77-2.4 19.08a199.21 199.21 0 00-3.69 31.92 96.55 96.55 0 01-.8 12.14c-.93 5.68-3.11 11.16-3.49 16.9-.58 8.94 3.28 17.69 2.93 26.64-.41 10.51-6.58 20.72-4.43 31 .27 1.29 1 2.78 2.18 3.11l-.58.53c-1.77 1.64-3.49 4.67-1.48 6a3.93 3.93 0 001.51.52c3.11.65 6.24 1.24 9.37 1.79a29 29 0 001.08 8.56c.57.41 1.15.78 1.73 1.13-.44 1.18-.41 2.32.63 3a3.93 3.93 0 001.51.52 326.47 326.47 0 0078.35 6.5c4.7-.18 9.61-.52 13.62-2.92s6.72-7.51 4.81-11.72c-1.69-3.72-6.11-5.33-10.08-6.57l-4.66-1.44a8 8 0 00.42-7c-1.69-3.72-6.11-5.33-10.08-6.57l-10.73-3.33a10.53 10.53 0 01-3.9-1.83 21.18 21.18 0 01-2.12-2.46 12 12 0 00-5.85-3.67 45.52 45.52 0 01.15-6.82l3-36.21c.67-8.2 1.33-16.56-.58-24.57-.77-3.25-2-6.58-1.25-9.84 1.17-5.32 6.77-8.28 10.59-12.23 5.76-6 7.55-14.53 8.87-22.65a457.27 457.27 0 005.12-101.41 162 162 0 0136.82-5.92c2.12-.09 3.16-1.09 3.82-3.07s.26-4.13-.13-6.18zm-59.85 1.77c.07-.35.15-.7.21-1.05l.83 1.06z"
        transform="translate(-59 -87.5)"
        fill="url(#TrueFriends_svg__a)"
      />
      <path
        d="M412.31 246.15c-.26 3.48-1.49 6.82-1.94 10.29-.51 3.82-.06 7.71-.31 11.56s-1.36 7.9-4.29 10.41a202.14 202.14 0 0149.92 10.8c-4.87-6-5-14.38-4.88-22.08.16-11.39.36-23 4.08-33.75a82.14 82.14 0 00-33.74-.44c-2.42.48-9.75.18-10.84 2.44-.79 1.66 2.18 8.25 2 10.77z"
        fill="#a1616a"
      />
      <path
        d="M412.31 246.15c-.26 3.48-1.49 6.82-1.94 10.29-.51 3.82-.06 7.71-.31 11.56s-1.36 7.9-4.29 10.41a202.14 202.14 0 0149.92 10.8c-4.87-6-5-14.38-4.88-22.08.16-11.39.36-23 4.08-33.75a82.14 82.14 0 00-33.74-.44c-2.42.48-9.75.18-10.84 2.44-.79 1.66 2.18 8.25 2 10.77z"
        opacity={0.1}
      />
      <path
        d="M432.47 660.55a20.77 20.77 0 002 2.51 10.06 10.06 0 003.81 1.83l10.48 3.33c3.89 1.24 8.21 2.84 9.86 6.56 1.86 4.2-.79 9.31-4.71 11.7s-8.72 2.74-13.31 2.92a313.13 313.13 0 01-76.59-6.49 4 4 0 01-1.47-.52c-2-1.35-.29-4.37 1.44-6 6.75-6.4 14.09-13.11 23.28-14.59 4.83-.79 9.68-.47 14.48-1.62 3.45-.83 6.71-2.26 10.15-3.11 6.41-1.57 16-2.13 20.58 3.48z"
        fill="#46455b"
      />
      <path
        d="M432.47 660.55a20.77 20.77 0 002 2.51 10.06 10.06 0 003.81 1.83l10.48 3.33c3.89 1.24 8.21 2.84 9.86 6.56 1.86 4.2-.79 9.31-4.71 11.7s-8.72 2.74-13.31 2.92a313.13 313.13 0 01-76.59-6.49 4 4 0 01-1.47-.52c-2-1.35-.29-4.37 1.44-6 6.75-6.4 14.09-13.11 23.28-14.59 4.83-.79 9.68-.47 14.48-1.62 3.45-.83 6.71-2.26 10.15-3.11 6.41-1.57 16-2.13 20.58 3.48z"
        opacity={0.1}
      />
      <path
        d="M379.85 434.37a63.56 63.56 0 00-.9 42.51c-3.49-.38-5 4.34-4.91 7.86a58.23 58.23 0 002.21 14.48c.64 2.24 1.42 4.52 1.17 6.82-.36 3.22-2.64 5.86-3.83 8.87-2.5 6.37.07 13.47.5 20.3.4 6.41-1.13 12.76-2.36 19.06a203.26 203.26 0 00-3.6 31.87 96.14 96.14 0 01-.79 12.13c-.9 5.68-3 11.15-3.4 16.88-.57 8.92 3.2 17.67 2.86 26.61-.4 10.49-6.44 20.69-4.33 31 .3 1.45 1.11 3.16 2.6 3.18 15.08.19 29.17-4 44.09-1.81 1.52-34.52 3-69.2 9.8-103.09 6-30.17 16.17-60 15.22-90.76-.55-17.59-4.73-34.84-7.27-52.26a68.75 68.75 0 00-47.06 6.35z"
        fill="#bbbdc8"
      />
      <path
        d="M379.85 434.37a63.56 63.56 0 00-.9 42.51c-3.49-.38-5 4.34-4.91 7.86a58.23 58.23 0 002.21 14.48c.64 2.24 1.42 4.52 1.17 6.82-.36 3.22-2.64 5.86-3.83 8.87-2.5 6.37.07 13.47.5 20.3.4 6.41-1.13 12.76-2.36 19.06a203.26 203.26 0 00-3.6 31.87 96.14 96.14 0 01-.79 12.13c-.9 5.68-3 11.15-3.4 16.88-.57 8.92 3.2 17.67 2.86 26.61-.4 10.49-6.44 20.69-4.33 31 .3 1.45 1.11 3.16 2.6 3.18 15.08.19 29.17-4 44.09-1.81 1.52-34.52 3-69.2 9.8-103.09 6-30.17 16.17-60 15.22-90.76-.55-17.59-4.73-34.84-7.27-52.26a68.75 68.75 0 00-47.06 6.35z"
        opacity={0.1}
      />
      <path
        d="M446.47 675.55a20.77 20.77 0 002 2.51 10.06 10.06 0 003.81 1.83l10.48 3.33c3.89 1.24 8.21 2.84 9.86 6.56 1.86 4.2-.79 9.31-4.71 11.7s-8.72 2.74-13.31 2.92a313.13 313.13 0 01-76.59-6.49 4 4 0 01-1.47-.52c-2-1.35-.29-4.37 1.44-6 6.75-6.4 14.09-13.11 23.28-14.59 4.83-.79 9.68-.47 14.48-1.62 3.45-.83 6.71-2.26 10.15-3.11 6.41-1.57 16-2.13 20.58 3.48z"
        fill="#46455b"
      />
      <path
        d="M385.05 435.36c-3.86 5-5 11.6-4.48 17.86s2.63 12.27 4.7 18.2c-2.75 2.53-2.18 6.89-1.82 10.61 1.31 13.82-3.49 27.61-2.79 41.47.29 5.83 1.56 11.58 1.86 17.41.33 6.37-.48 12.74-1.24 19.07a1137.66 1137.66 0 00-8 122.09c0 3.76-.06 7.58 1 11.18 7.27 5.35 16.4 6.07 25.2 4.07s16.83-6.46 24.72-10.86a76.33 76.33 0 0012.24-7.9 6.53 6.53 0 002.46-3.38c.84-4-4.72-5.81-7.91-8.4-4.64-3.77-4.57-10.75-4.09-16.71l2.9-36.16c.66-8.19 1.3-16.54-.56-24.54-.76-3.24-1.93-6.57-1.23-9.83 1.14-5.3 6.62-8.26 10.35-12.21 5.64-6 7.38-14.51 8.68-22.61a467.34 467.34 0 003.88-116.22c-7.35 2.55-16.06 1.16-23.81 1.76s-15.45 3.19-23.3 3.4c-6.54.15-14.74-3.46-18.76 1.7z"
        fill="#bbbdc8"
      />
      <circle cx={438} cy={220} r={37} fill="#a1616a" />
      <path
        d="M458.91 280.86A199.13 199.13 0 00422 268.12c-8.94-2.13-19.15-3.41-26.62 1.94-2 1.43-3.81 3.68-3.38 6.1a5.56 5.56 0 015.33 4.84c.22 2.12-.82 4.15-1.84 6l-8.63 16a62.53 62.53 0 00-4.25 9c-1.74 5.08-2.12 10.52-2.49 15.88l-1 14.52c-.62 9.15-1.25 18.34-.42 27.47.62 6.89 2.06 13.81 1.08 20.66-.79 5.51-3.12 10.68-4.43 16.1-2.46 10.2-1.34 21.38-6.11 30.74a9.26 9.26 0 016.19-.56c14.48 2.67 25.87 14.1 39.93 18.47 3.55-5.18 8.36-9 12.33-13.82a26.72 26.72 0 005.67-12.54c3 4 5.55 7.12 7.34 11.76a7.9 7.9 0 001.6 2.93c1.89 1.84 5 1.13 7.53.36A155.2 155.2 0 01488 437.5c2.08-.09 3.09-1.09 3.74-3.07s.29-4.12-.1-6.16c-2.49-13.33-5.27-26.68-5.73-40.23-.28-8 .27-16.11-.74-24.09-.5-3.91-1.37-7.76-2.23-11.6l-7.14-31.73c-.4-1.77-2.3-2.93-3.11-4.56-3.28-6.64-9.55-11.44-12.79-18.1a23.73 23.73 0 01-.99-17.1z"
        fill="#46455b"
      />
      <path
        d="M407 234.81a2.45 2.45 0 01.35-1.48 3.34 3.34 0 011.44-.89 7.59 7.59 0 004.23-8.11l3.5-.73.11-12.19c5.2-2.88 12.29-.7 17.18-4.09 2.75-1.92 4.16-5.18 5.84-8.08s4.18-5.82 7.52-6.06a21.42 21.42 0 001.15 18.13 20.65 20.65 0 008.43-7.88l1.74 10a2.48 2.48 0 00.74 1.63c.91.67 2.14-.17 2.94-1l4.53-4.45a62.36 62.36 0 013.89 14.89c7.44-7.22 9.75-18.82 6.89-28.78s-10.35-18.21-19.37-23.3-19.48-7.23-29.83-7.61a42.42 42.42 0 00-10.38.67 49.28 49.28 0 00-10.58 4c-5.17 2.43-10.39 5.1-14.25 9.3-6.72 7.32-8.23 18.08-7.49 28 1 13 5.22 25.55 10.13 37.63 1.63 4 3.37 8.05 6.06 11.46 4.05 5.13 14 .87 12.73-9.27-.88-7.24-7.5-4.45-7.5-11.79z"
        fill="#3f3d56"
      />
      <path
        d="M421 432.9a156.9 156.9 0 01-55.45 62.6c-7.19 4.65-15 8.79-23.41 10.15-1.15.19-2.3.32-3.47.4A25.9 25.9 0 01326 503.9a32 32 0 01-7.24-5 70.31 70.31 0 01-18.11-24.73 139.25 139.25 0 01-6.05-18.28q-3.68-13.06-7.34-26.13c-2.39-8.52-4.8-17.14-5.3-26-.81-14.39 3.51-28.64 9.58-41.71a34.4 34.4 0 002.49-6.3c0-.15.07-.3.1-.46.72-3.45.35-7.06 1-10.54 1.22-7 6.38-12.8 12.44-16.49s13-5.58 19.89-7.42l10.73-2.89 6.66-1.79 27.09-7.29c3.75-1 7.54-2.33 11.35-3 4.25-.8 4.22-.38 4.55 3.78.61 7.54.41 14.95 2 22.42 1.51 7.13 4.17 14 6.17 21 5.05 17.67 5.89 36.27 9.87 54.22.91 4.09 2.17 8.45 5.46 11 3.77 3 10.12 3.74 11.12 8.44.37 2.09-.56 4.23-1.46 6.17z"
        fill={color}
      />
      <path
        d="M342.14 505.61c-1.15.19-2.3.32-3.47.4A25.9 25.9 0 01326 503.9a32 32 0 01-7.24-5 70.31 70.31 0 01-18.11-24.73 139.25 139.25 0 01-6.05-18.28q-3.68-13.06-7.34-26.13c-2.39-8.52-4.8-17.14-5.3-26-.81-14.39 3.51-28.64 9.58-41.71a34.4 34.4 0 002.49-6.3c0-.15.07-.3.1-.46 16.32 2.87 35.9 34.09 46 75 7.44 30.59 7.76 58.76 2.01 75.32zM371.64 397.97l-2.73.47c-2.81-7.38-5.61-14.77-8.9-21.95-1.71-3.75-3.56-7.45-5-11.32-5.4-14.86-4.48-32.49-14.49-44.73a15.31 15.31 0 00-2.43-2.46l6.66-1.79a90.32 90.32 0 0112.14 30.11c1.08 5.22 1.69 10.56 3.45 15.58a107.71 107.71 0 005.13 11.14c3.8 7.79 6.66 16.3 6.17 24.95z"
        opacity={0.1}
      />
      <path
        d="M398.22 285.3c7.19-6.16 17-9.54 26.31-8 5.48.89 10.57 3.36 15.48 6 9.57 5.08 19 10.93 25.9 19.28a77.29 77.29 0 0110.22 17.2 41.7 41.7 0 013 8.41c2.44 11.3-3.55 22.53-9.32 32.55L458.71 380c-5.1 8.85-10.24 17.76-16.88 25.53-3.06 3.58-6.42 6.89-9.77 10.2l-14.71 14.52a2.2 2.2 0 01-1 .67 2.22 2.22 0 01-1.73-.69l-4.86-3.87a82.67 82.67 0 0012.42-10.53c6.36-6.58 11.59-14.15 16.79-21.69l16.18-23.46c4.73-6.87 9.67-14.43 9.14-22.75-.25-4-1.75-7.76-3.32-11.43q-4.17-9.79-9.06-19.27c-3.66-7.09-7.66-14.09-12.93-20.08s-11.93-11-19.6-13.17a16.32 16.32 0 00-7.1-.68c-5.26.87-9 5.39-12.33 9.59l-10.14 13c-2.31 2.95-4.43 6.37-4.57.77-.24-7.99 7.84-16.22 12.98-21.36z"
        fill={color}
      />
      <path
        d="M401.36 373c2 7.7 4.95 16.44 12.36 19.36 5.25 2.07 11.4.39 15.94-3s7.76-8.17 10.72-13a126.26 126.26 0 018.27-12.54c5.93-7.44 14-13.34 18-22 1.18-2.58 2-5.34 3.34-7.82a48.87 48.87 0 014.84-6.47 70.13 70.13 0 0010.91-18.94c.92-2.39 1.71-4.95 1.35-7.48-.71-4.87-5.32-8.07-9.61-10.46-2.61-1.45-5.34-2.86-8.31-3.08-4.34-.34-8.61 2-11.28 5.43a21.7 21.7 0 00-4.12 12.17c-.3 5.33.74 10.87-1 15.91a25 25 0 01-3.77 6.52 76.45 76.45 0 01-20.51 18.93 35.59 35.59 0 00-2.43-11.03c-.76-1.94-15.66 0-17.6.32-3.84.56-11.28 1-13.7 4.66s.58 9.81 1.56 13.5z"
        fill="#a1616a"
      />
      <path
        d="M401 288.97a52.65 52.65 0 00-6.16 6c-4.44 5.35-6.61 12.31-7.17 19.24s.39 13.89 1.58 20.74q1.62 9.22 3.83 18.31c.41-4.57 4.11-8.35 8.4-10s9-1.47 13.57-.8a66.33 66.33 0 0117.06 4.93l2.11-29.57a51.52 51.52 0 00-.07-12 26.45 26.45 0 00-12.34-17.95c-8.02-4.88-13.61-5.19-20.81 1.1z"
        fill="#46455b"
      />
      <path
        d="M837.78 520.36a69.83 69.83 0 00-6.9-23.05c-2.21-4.4-4.9-8.61-6.29-13.32-1.13-3.83-1.35-7.86-2.25-11.75s-2.49-7.61-3.77-11.41c-9.05-27-2.25-56.54-5.17-84.84-1.09-10.44-4.29-21.89-13.34-27.33-5.38-3.23-11.84-3.73-18.17-4l-2.89-.13-4.64-.23c-6.72-.33-13.46-.58-20 .83-8 1.75-17.48 7.38-20 15.55-1.38-.71-2.77-1.34-4.05-1.93a72.64 72.64 0 00-16.09-5 60.13 60.13 0 0013.66-5.28c10-5.82 12.32-22.82 14.36-34.19s.18-23.12-3.21-34.17a58.75 58.75 0 00-4.55-11.32 39.49 39.49 0 00-56.16-13.9c-9.33 6.11-18 15-25.12 23.59-1 1.18-5.18 5.36-3.79 7.12.78 1 3.35.2 6.05-1a36.69 36.69 0 00-3.14 14.9 37.12 37.12 0 0018.23 31.92l1 9.2v.07c.11 3.07.16 6.14.2 9.2 0 2.15 0 4.35-.06 6.55a45.16 45.16 0 01-14.92 11.1c4.7.78 9.18-.32 13.54-2.2a19.3 19.3 0 01-3.5 6.74c1.2-.42 2.4-.8 3.6-1.2a26.19 26.19 0 00-1.67 3.14 24.3 24.3 0 00-1.61 5.34 75 75 0 00-6.59 11.78c-.84 1.87-1.59 3.77-2.27 5.7v.13q-1 2.88-1.77 5.84-.36 1.42-.66 2.85v.21c-.4 1.93-.73 3.87-1 5.83v.4c-.11.91-.21 1.83-.28 2.75v.14c-.08 1-.14 1.95-.17 2.93V421.37c0 1.88.12 3.77.3 5.66 0 .23 0 .47.07.7.08.77.17 1.54.28 2.32 0 .18 0 .36.07.53.13.93.28 1.85.45 2.77 0 .2.09.41.13.61.14.74.29 1.47.46 2.21l.18.76c.22.92.45 1.83.71 2.75.15.52.3 1 .46 1.55a39 39 0 011 5.77l-5.47.18q-17.56.5-35.09 1.59c-1.46-5.63-6.44-8.88-12.71-9.65a25.08 25.08 0 00-3-.18 16.65 16.65 0 002.86-3.11 13.78 13.78 0 002.28-5 13.69 13.69 0 00-4.14 3.63c-.37.5-.7 1-1 1.46v-3a.47.47 0 00-.48-.48h-1a.47.47 0 00-.48.48v6.11h-.54c-.66.06-1.3.14-1.93.26-6.81 1.27-11.8 5.64-11.8 13a16 16 0 005.64 12.18 35.07 35.07 0 001.55 6.74c.69 2.17 1.59 4.53 3.61 5.61a8.25 8.25 0 003.94.72c11.12 0 21.64-5.13 32.71-6 6.84-.55 13.71.51 20.57.3 1 0 2-.1 3-.18-9.38 46.45-20.73 93.49-14.8 140.41.39 3.12 1 6.5 3.33 8.62 3.09 2.82 7.85 2.36 12 2a100.3 100.3 0 0133.95 2.71 10.31 10.31 0 004.78.17 8.86 8.86 0 001-.29l.28-.11c.21-.08.41-.16.6-.25l.29-.15.49-.3c.08-.06.17-.11.24-.17a3.88 3.88 0 00.49-.4l.14-.12a7.13 7.13 0 00.53-.58l.12-.18a4.87 4.87 0 00.32-.47c.05-.08.1-.16.14-.24s.16-.3.23-.45.08-.18.11-.27.13-.33.19-.5 0-.16.08-.25.14-.5.19-.75v-.16c0-.21.08-.43.11-.64s0-.22 0-.33v-.85-1.37-.32c0-.89-.1-1.79-.19-2.65a15.83 15.83 0 002.18.47 12.21 12.21 0 002.08.15h.1c.33 0 .66 0 1-.08a8.2 8.2 0 00.86-.18h.13a4.62 4.62 0 00.76-.3l.12-.07a4.07 4.07 0 00.59-.4l.09-.07a3.48 3.48 0 00.5-.58l.09-.15a3.4 3.4 0 00.35-.77c.57-1.93-.73-4.11 1.35-5.88 2 6.41 4 12.83 4.33 19.46.11 2.42 0 5 1.42 7a29.36 29.36 0 003 3.06c3.06 3.31 3.13 8.3 2.92 12.78-.09 1.81-.19 3.62-.32 5.43a268.51 268.51 0 01-14.6 70.81 38.16 38.16 0 01-3.06 7 33.89 33.89 0 01-7.51 8.26 95.27 95.27 0 01-13.35 9.49 40.85 40.85 0 00-6.79 4.51c-.08-.23-.17-.45-.23-.69-.11-.46-.26-1-.71-1.17a1.36 1.36 0 00-1 .16c-4.69 2.06-9.38 4.12-13.89 6.53a16.21 16.21 0 00-5.86 4.53c-1.44 2-1.87 5-.38 7 1.31 1.75 3.66 2.33 5.83 2.72 2.78.49 5.57.84 8.36 1.1a12.63 12.63 0 00-3.69 3.28c-1.44 2-1.87 5-.38 7 1.31 1.75 3.66 2.33 5.83 2.72 17.73 3.13 35.91 1 53.91.47 5.85-.19 11.83-.23 17.37-2.13a8.75 8.75 0 003-1.57c2.52-2.22 2.27-6.12 1.83-9.43l-1.83-13.52c-.27 0-.53.09-.79.15a199.82 199.82 0 018.21-37.4c6.1-18.95 15.18-37.62 15.06-57.45v-1.44c-.17-6.21-1.28-12.35-2-18.53-1.13-10.34-1-20.77-.93-31.16a67 67 0 01.85-12.17c0-.14.06-.27.09-.41l16.61-.44a11.71 11.71 0 005.36-1 3.52 3.52 0 001.94-4.29c7.08 3.21 16.55-1.16 18.64-8.6a15.09 15.09 0 00.35-1.59.5.5 0 010-.12c.07-.5.12-1 .14-1.49v-.25a27.88 27.88 0 00-1.57-10.1c-3.4-9.63-8.8-18.4-13.88-27.27-2.62-4.59-5.16-9.24-7.63-13.91l2.17 2.79a9.45 9.45 0 002.93 2.81c4.05 2.09 8.29-2.12 12.41-4.06 5.47-2.58 11.87-1.06 17.91-.63s13.32-1.13 15.48-6.73a14.76 14.76 0 00.39-7.06zM733.65 370.07c0 2.14.14 4.31.31 6.49a60.64 60.64 0 00-7-9.3z"
        transform="translate(-59 -87.5)"
        fill="url(#TrueFriends_svg__b)"
      />
      <path
        d="M544 348.76a13.68 13.68 0 014.09-3.61 13.72 13.72 0 01-2.25 5c-1.74 2.37-3.57 4-4.08 3.61s.48-2.63 2.24-5z"
        fill="#99d55c"
      />
      <path
        d="M544.22 348.94a10.09 10.09 0 013-2.69 10.25 10.25 0 01-1.67 3.7c-1.3 1.76-2.66 3-3 2.69s.37-1.94 1.67-3.7z"
        opacity={0.1}
      />
      <path
        d="M541.57 346.77h1a.48.48 0 01.48.48v11.33h-1.9v-11.33a.48.48 0 01.42-.48z"
        fill="#f6987e"
      />
      <path
        d="M559 366.58a16 16 0 01-32 0c0-7.33 4.93-11.67 11.66-12.94a23.51 23.51 0 014.34-.39 24.54 24.54 0 013 .18c7.4.92 13 5.34 13 13.15z"
        fill="#fc4a4a"
      />
      <path
        d="M546 353.43c-.29.55-1.86 1-3.76 1a6.63 6.63 0 01-3.58-.75 23.51 23.51 0 014.34-.39 24.54 24.54 0 013 .14z"
        opacity={0.1}
      />
      <path
        d="M545.67 382.2a16 16 0 01-16-16c0-7.2 4.75-11.51 11.29-12.86a21.57 21.57 0 00-2.3.3c-6.73 1.27-11.66 5.61-11.66 12.94a16 16 0 0016 16 15.68 15.68 0 003.59-.41c-.31.02-.59.03-.92.03z"
        opacity={0.1}
      />
      <path
        d="M616.2 678.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16v-1.43c-.17-6.18-1.26-12.29-1.93-18.44-1.11-10.29-1-20.66-.92-31a67.27 67.27 0 01.84-12.11c.63-3.25 3-6.51 1.55-9.37-2.81-5.55-13-7.59-18.48-7.79-7.38-.26-14.64 1.67-21.77 3.59-2.17.59-4.44 1.22-6.08 2.75-2.2 2.06-2.83 5.29-2.91 8.3-.38 13.35 7.31 25.77 7.92 39.1.11 2.4 0 5 1.4 7a29 29 0 003 3.05c3 3.29 3.09 8.25 2.88 12.71-.09 1.8-.19 3.6-.31 5.4a268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.35.04 9.81z"
        fill="#fda8a8"
      />
      <path
        d="M616.2 678.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16v-1.43c-.17-6.18-1.26-12.29-1.93-18.44-1.11-10.29-1-20.66-.92-31a67.27 67.27 0 01.84-12.11c.63-3.25 3-6.51 1.55-9.37-2.81-5.55-13-7.59-18.48-7.79-7.38-.26-14.64 1.67-21.77 3.59-2.17.59-4.44 1.22-6.08 2.75-2.2 2.06-2.83 5.29-2.91 8.3-.38 13.35 7.31 25.77 7.92 39.1.11 2.4 0 5 1.4 7a29 29 0 003 3.05c3 3.29 3.09 8.25 2.88 12.71-.09 1.8-.19 3.6-.31 5.4a268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.35.04 9.81z"
        opacity={0.1}
      />
      <path
        d="M616.2 678.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16a287 287 0 01-34.81 1.72 268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.39.04 9.85z"
        fill="#eeeff3"
      />
      <path
        d="M616.2 678.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16a287 287 0 01-34.81 1.72 268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.39.04 9.85z"
        opacity={0.1}
      />
      <path
        d="M646.4 674.13a51.5 51.5 0 009.42-4.5l15.07-8.5a12.77 12.77 0 014.47-1.81l1.8 13.45c.45 3.3.69 7.18-1.8 9.39a8.76 8.76 0 01-3 1.56c-5.47 1.89-11.37 1.93-17.16 2.11-17.78.57-35.74 2.65-53.26-.47-2.14-.38-4.46-1-5.75-2.7-1.47-2-1.05-4.9.37-6.93a16.08 16.08 0 015.79-4.51c4.46-2.4 9.09-4.44 13.72-6.49a1.34 1.34 0 01.95-.16c.45.15.59.7.71 1.16.81 3.28 3.45 5.87 6.46 7.42.04 0 15.55 3.1 22.21.98z"
        fill="#bbbdc8"
      />
      <path
        d="M646.4 674.13a51.5 51.5 0 009.42-4.5l15.07-8.5a12.77 12.77 0 014.47-1.81l1.8 13.45c.45 3.3.69 7.18-1.8 9.39a8.76 8.76 0 01-3 1.56c-5.47 1.89-11.37 1.93-17.16 2.11-17.78.57-35.74 2.65-53.26-.47-2.14-.38-4.46-1-5.75-2.7-1.47-2-1.05-4.9.37-6.93a16.08 16.08 0 015.79-4.51c4.46-2.4 9.09-4.44 13.72-6.49a1.34 1.34 0 01.95-.16c.45.15.59.7.71 1.16.81 3.28 3.45 5.87 6.46 7.42.04 0 15.55 3.1 22.21.98z"
        opacity={0.1}
      />
      <path
        d="M626.2 692.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16v-1.43c-.17-6.18-1.26-12.29-1.93-18.44-1.11-10.29-1-20.66-.92-31a67.27 67.27 0 01.84-12.11c.63-3.25 3-6.51 1.55-9.37-2.81-5.55-13-7.59-18.48-7.79-7.38-.26-14.64 1.67-21.77 3.59-2.17.59-4.44 1.22-6.08 2.75-2.2 2.06-2.83 5.29-2.91 8.3-.38 13.35 7.31 25.77 7.92 39.1.11 2.4 0 5 1.4 7a29 29 0 003 3.05c3 3.29 3.09 8.25 2.88 12.71-.09 1.8-.19 3.6-.31 5.4a268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.35.04 9.81z"
        fill="#fda8a8"
      />
      <path
        d="M626.2 692.35c2.21 2 5.59 1.95 8.59 1.73l13.67-1c10.86-.8 22.09-1.7 31.67-6.87a7.53 7.53 0 002.63-2 8.47 8.47 0 001.15-4.31 199.59 199.59 0 018.78-43.59c6-18.85 15-37.43 14.88-57.16a287 287 0 01-34.81 1.72 268.86 268.86 0 01-14.43 70.45 38.42 38.42 0 01-3 7 33.92 33.92 0 01-7.42 8.22 94.83 94.83 0 01-13.19 9.44c-3.11 1.84-6.43 3.6-8.56 6.52s-2.6 7.39.04 9.85z"
        fill="#eeeff3"
      />
      <path
        d="M656.4 688.13a51.5 51.5 0 009.42-4.5l15.07-8.5a12.77 12.77 0 014.47-1.81l1.8 13.45c.45 3.3.69 7.18-1.8 9.39a8.76 8.76 0 01-3 1.56c-5.47 1.89-11.37 1.93-17.16 2.11-17.78.57-35.74 2.65-53.26-.47-2.14-.38-4.46-1-5.75-2.7-1.47-2-1.05-4.9.37-6.93a16.08 16.08 0 015.79-4.51c4.46-2.4 9.09-4.44 13.72-6.49a1.34 1.34 0 01.95-.16c.45.15.59.7.71 1.16.81 3.28 3.45 5.87 6.46 7.42.04 0 15.55 3.1 22.21.98z"
        fill="#bbbdc8"
      />
      <path
        d="M606.81 286.71c4.87-6 5-14.38 4.88-22.08 0-3-.09-6.1-.2-9.15v-.07a103.15 103.15 0 00-1.77-16.7 60.69 60.69 0 00-2.1-7.8c.66-.15 1.32-.29 2-.41a81.94 81.94 0 0131.75 0c1.81.36 6.39.28 9 1.17a3 3 0 011.81 1.27c.51 1.07-.54 4.17-1.3 6.92a13.52 13.52 0 00-.7 3.84 26.37 26.37 0 00.56 3.65c.47 2.21 1.09 4.4 1.38 6.64.51 3.82.06 7.71.31 11.56s1.36 7.9 4.29 10.41a202.14 202.14 0 00-49.91 10.75z"
        fill="#fda8a8"
      />
      <path
        d="M654.73 246.91c-1.33.11-2.65.24-4 .39a201.48 201.48 0 00-39.24 8.2v-.07l-1.77-16.7v-3.05c0-1.71-.05-3.44-.09-5.16a81.94 81.94 0 0131.75 0c1.81.36 6.39.28 9 1.17 0 1.63 0 3.26.06 4.89a21.81 21.81 0 00.45 3.3 12.56 12.56 0 003.84 7.03z"
        opacity={0.1}
      />
      <circle cx={629.5} cy={214.5} r={37} fill="#fda8a8" />
      <path
        d="M597 354.01c-6.57-23.25-.57-48.22 15.12-66.58 3.49-4.09 7-8.29 11.58-10.74 5.45-2.9 11.9-3 18.07-3.06 5.45 0 11.07 0 16.08 2.17 6.77 2.89 11.44 9.17 15.38 15.4 4.2 6.64 8 13.83 8.64 21.67.34 4.65-.48 9.37.21 14 .88 5.87 4.15 11.13 5.49 16.91.73 3.12.88 6.35 1.35 9.53a89.24 89.24 0 003.08 12.84 460.75 460.75 0 0040.56 94.72c5 8.83 10.35 17.56 13.71 27.13 1.52 4.33 2.62 9 1.38 13.46-2.07 7.4-11.42 11.75-18.41 8.56a3.51 3.51 0 01-1.92 4.26 11.46 11.46 0 01-5.3 1l-61.76 1.64a22.28 22.28 0 00-4.81.65c-7.26 1.86-4.53 5-5.31 7.62-.95 3.2-5.54 2.94-8.74 2 .49 4.67.6 10.38-5.43 11.74a10.19 10.19 0 01-4.72-.16 98.42 98.42 0 00-33.54-2.7c-4.12.38-8.83.84-11.88-2-2.3-2.11-2.9-5.47-3.29-8.57-6.15-49 6.5-98.07 16-146.48 1.28-6.53.82-17.11-1.1-23.49z"
        fill="#f75842"
      />
      <path
        d="M679 320.24c1.45 4.18 3.26 8.29 3.75 12.69.39 3.52-.08 7.08.13 10.61a54.38 54.38 0 002.41 11.53 182.39 182.39 0 007.11 21.43c1.34 3.15 2.89 6.62 1.81 9.87s-4.43 5.26-5.39 8.49c-1 3.41 1 7 3.55 9.49s5.74 4.26 8.1 6.91c2.57 2.89 4 6.58 5.81 10a92.52 92.52 0 008.81 12.85l12.09 15.69a9.44 9.44 0 002.9 2.8c4 2.08 8.19-2.11 12.26-4 5.4-2.57 11.72-1.06 17.69-.63s13.16-1.12 15.29-6.7a14.72 14.72 0 00.43-7 69.74 69.74 0 00-6.82-22.93c-2.18-4.38-4.84-8.57-6.21-13.26-1.12-3.81-1.34-7.82-2.23-11.69s-2.46-7.57-3.72-11.35c-8.94-26.86-2.22-56.25-5.11-84.41-1.07-10.39-4.24-21.78-13.18-27.19-5.31-3.21-11.69-3.71-18-4l-2.85-.13-4.59-.23c-6.64-.33-13.3-.58-19.77.83-9.1 2-20.05 9.07-20.41 19.23a118.45 118.45 0 006.14 41.1z"
        fill={color}
      />
      <path
        d="M713.09 259.04a115.26 115.26 0 011.83 20.62c.18 19.74 2.31 39.4 4.45 59l1.41 13c.26 2.4.57 4.92 2 6.85s4.43 2.94 6.32 1.45c1.16-4.59.93-9.41.7-14.14q-.75-15.09-1.49-30.19c-.48-9.8-1-19.61-2.19-29.35a194.15 194.15 0 00-4.12-22.41 26.45 26.45 0 00-1.43-4.47l-2.85-.13z"
        opacity={0.1}
      />
      <path
        d="M647.75 267.5c-6.13-.88-12.55-1.33-18.37.8-5.56 2.05-10 6.26-14 10.69a37.16 37.16 0 00-6.68 9.69c-3.41 7.84-2.08 16.88 0 25.18 5.67 22.86 16.93 44.91 35 60a130.36 130.36 0 0017.51 12c8 4.69 16.26 9 25.11 11.71 2.47.76 5.1 1.4 7.63.86s4.92-2.59 5-5.18c-14.5-8.15-27.5-18.68-40.41-29.16a83.51 83.51 0 01-9.91-9c-4.58-5.15-7.81-11.37-12.25-16.64-4-4.73-9-8.72-12-14.13a37.7 37.7 0 01-3.73-11.78c-1.48-8.37-1.76-17.26 1.56-25.09s10.93-14.26 19.43-14.12c4.36.07 8.51 1.8 12.53 3.49l25.3 10.68c-.31-.14 1.45-4.53 1.37-5.14-.24-1.91-.58-1.94-2-3.39-2.42-2.42-6.18-4.12-9.25-5.53a79.14 79.14 0 00-21.84-5.94z"
        fill={color}
      />
      <path
        d="M597.39 207.5a42.83 42.83 0 0019.39-10l-5.29 27.76a136.49 136.49 0 0015.3-8.24c.71 12.7-.32 25.69-5 37.51s-13.31 22.4-24.89 27.65c10.28 1.72 19.51-5.66 28.66-10.65 6.38-3.47 17.28.1 24.26-2 5.92-1.74 12-3.26 17.34-6.37 9.92-5.79 12.17-22.7 14.18-34s.18-23-3.16-34a59.83 59.83 0 00-4.49-11.26 38.86 38.86 0 00-55.49-13.82c-9.22 6.07-17.77 15-24.81 23.47-1 1.17-5.13 5.33-3.76 7.08 1.67 2.12 11.47-3.92 13.13-4.74-.48 1.81-3.46 11.14-5.37 11.61z"
        fill="#ffd566"
      />
      <g opacity={0.1}>
        <path d="M639 530.93a10.19 10.19 0 01-4.72-.16 98.42 98.42 0 00-33.54-2.7c-4.12.38-8.83.84-11.88-2-2.3-2.11-2.9-5.47-3.29-8.57-6.15-49 6.5-98.07 16-146.48 1.28-6.53.82-17.11-1.1-23.49l-.45-1.55a70.85 70.85 0 01.63-40.33 71.39 71.39 0 00-3.65 48.36l.45 1.55c1.92 6.38 2.38 17 1.1 23.49-9.47 48.41-22.12 97.51-16 146.48.39 3.1 1 6.46 3.29 8.57 3 2.81 7.76 2.35 11.88 2a98.42 98.42 0 0133.54 2.7 10.19 10.19 0 004.72.16c4.92-1.11 5.75-5.12 5.63-9.09a7.83 7.83 0 01-2.61 1.06zM732.26 502.02a3.51 3.51 0 01-1.92 4.26 11.46 11.46 0 01-5.3 1l-61.76 1.64a22.28 22.28 0 00-4.81.65c-7.26 1.86-4.53 5-5.31 7.62-.95 3.2-5.54 2.94-8.74 2 .3 2.85.45 6.08-.84 8.48 2.81.42 5.83.05 6.58-2.48s-1.95-5.76 5.31-7.62a22.28 22.28 0 014.81-.65l61.72-1.64a11.46 11.46 0 005.3-1 3.51 3.51 0 001.92-4.26c7 3.19 16.34-1.16 18.41-8.56a14.39 14.39 0 00.52-3.44c-3.74 4.48-10.51 6.48-15.89 4z" />
      </g>
      <path
        d="M649.41 293.06a345.92 345.92 0 0114.07 34.67c3.28 9.51 6.17 19.5 5.08 29.5s-7 20.1-16.6 23.25c-4.08 1.34-8.45 1.35-12.74 1.45a269.87 269.87 0 00-30.71 2.48A135.24 135.24 0 01594.2 386c-6.78.22-13.56-.84-20.32-.29-10.94.89-21.33 6-32.31 6a8.2 8.2 0 01-3.9-.72c-2-1.08-2.89-3.42-3.57-5.58-1.53-4.88-2.73-10.48-.14-14.89 3.19-5.43 10.44-6.52 16.73-7q21.24-1.5 42.53-2.1c12.11-.34 25.23-.8 34.62-8.46a4.94 4.94 0 001.51-1.74 5.55 5.55 0 00-.12-3.57 155.52 155.52 0 01-4.74-44.55 6.6 6.6 0 011-3.82 6.27 6.27 0 013.17-1.84 46.41 46.41 0 0125.88-.72"
        fill="#fda8a8"
      />
      <path
        d="M624.24 303.09a7.51 7.51 0 00-3.62 2.67c.4-4.17-.14-8.38-.06-12.58s.86-8.58 3.51-11.84c3.37-4.16 9.1-5.65 14.46-5.79 7.78-.21 15.83 2.05 21.53 7.35a22 22 0 016.75 13c.18 1.37.78 6.51-.65 7.39-1.25.78-6-1.91-7.53-2.34a50.52 50.52 0 00-34.39 2.14z"
        fill="#f75842"
      />
      <circle cx={473} cy={60} r={7} fill={color} opacity={0.1} />
      <circle cx={520} cy={195} r={7} fill={color} opacity={0.1} />
      <circle cx={387} cy={67} r={7} fill={color} opacity={0.1} />
      <circle cx={172} cy={386} r={18} fill={color} opacity={0.1} />
      <circle cx={897} cy={100} r={7} fill={color} opacity={0.1} />
      <circle cx={905} cy={195} r={23} fill={color} opacity={0.1} />
      <circle cx={942} cy={130} r={7} fill={color} opacity={0.1} />
      <circle cx={880} cy={258} r={7} fill={color} opacity={0.1} />
      <circle cx={459} cy={116} r={7} fill={color} opacity={0.1} />
      <circle cx={197} cy={470} r={7} fill={color} opacity={0.1} />
      <circle cx={186} cy={310} r={7} fill={color} opacity={0.1} />
      <circle cx={570} cy={53} r={7} fill={color} opacity={0.1} />
      <circle cx={593} cy={116} r={7} fill={color} opacity={0.1} />
    </svg>
  );
};

SvgTrueFriends.propTypes = {
  color: PropTypes.string
};
SvgTrueFriends.defaultProps = {
  color: "primary"
};
export default SvgTrueFriends;
