import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgOnTheWay = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1056.29 808.9"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1035.84 218.55a257.25 257.25 0 00-41.89-66.76l-581.3-5.73 478.6-67.22a271.88 271.88 0 00-97.11-19.26 272.17 272.17 0 00-325.12-11 271 271 0 00-124.43-30c-129.16 0-236.78 89.46-260.92 208.08zM1056.28 318.04a251.31 251.31 0 00-18.11-93.9L30.71 329.89A253 253 0 007.14 389.5l312 46.5L0 469.91C9.6 604.2 124.72 710.24 265.35 710.24c70.79 0 135.12-26.87 182.78-70.69 47.81 44.65 112.76 72.11 184.31 72.11 106.17 0 197.8-60.45 240.47-147.85 85.61-27.17 152.11-95.39 174.87-180.74l-394.54-61.19h403c.02-1.28.04-2.56.04-3.84z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={28.11}
        cy={738.8}
        rx={25.82}
        ry={3.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={127.02}
        cy={748.83}
        rx={25.82}
        ry={3.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={243.53}
        cy={735.25}
        rx={25.82}
        ry={3.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={87.43}
        cy={777.39}
        rx={18.36}
        ry={2.52}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={190.1}
        cy={774.87}
        rx={18.36}
        ry={2.52}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M127.58 748.03s-36.22-118.72 5.66-166.27c31.34-35.58 66.9-31.32 82.83-26.92a29.44 29.44 0 0119 15.79c5.57 12 4.56 31.51-34.75 54.27-65.82 38.11-69.91 90.38-69.91 90.38z"
        fill={color}
      />
      <path
        d="M210.4 571.68s-106.76 33.38-82.82 176.35M148.05 583.65s14.7 9.9 10 24.79M199.69 592.45s-9-9.14-19.92-4.1M157.49 638.45s-15.78-8-19.86 2M118.44 655.13s11.85-.94 12.07 4.73"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M126.14 748.98s42.42-86.29 54.07-84.4c5.53.9 8.08 6.34 9.24 11.81a34.8 34.8 0 01-2.31 21.06c-6 13.75-22.22 40-61 51.53z"
        fill={color}
      />
      <path
        d="M179.86 680.96s-44.52 64.56-53.12 67.39M183.96 691.03h-10.39M171.51 714.65l-16.28.7M161.6 695.76l1.77 8.48M144.28 721.58l.32 7.71"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M127.37 748.98s-42.42-86.29-54.07-84.4c-5.53.9-8.08 6.34-9.24 11.81a34.73 34.73 0 002.32 21c6.01 13.81 22.18 40.06 60.99 51.59z"
        fill={color}
      />
      <path
        d="M73.62 680.96s44.52 64.56 53.12 67.39M69.53 691.03h10.39M81.97 714.65l16.29.7M91.89 695.76l-1.77 8.48M109.21 721.58l-.32 7.71"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M200.2 769.13a7.36 7.36 0 002.42-3.64 3.24 3.24 0 00-1.69-3.71c-1.55-.6-3.21.48-4.46 1.56s-2.7 2.33-4.34 2.1a6.61 6.61 0 002-6.18 2.58 2.58 0 00-.56-1.26c-.86-.92-2.42-.52-3.45.2-3.28 2.3-4.19 6.75-4.21 10.76a20.48 20.48 0 01-.06-4.43c0-1.48-.42-3.13-1.67-3.92a4.88 4.88 0 00-2.53-.6c-1.48 0-3.11.09-4.12 1.17-1.25 1.34-.93 3.58.16 5.06a16.12 16.12 0 004.26 3.41 9.51 9.51 0 013 2.9 3 3 0 01.22.52h9.23a25.59 25.59 0 005.8-3.94zM38.57 734.38a7.34 7.34 0 002.42-3.64 3.26 3.26 0 00-1.69-3.72c-1.55-.59-3.2.49-4.46 1.57s-2.69 2.32-4.34 2.09a6.58 6.58 0 002-6.18 2.61 2.61 0 00-.57-1.25c-.86-.92-2.42-.53-3.45.2-3.28 2.3-4.19 6.75-4.21 10.76a20.57 20.57 0 01-.06-4.44c0-1.48-.41-3.12-1.66-3.91a4.92 4.92 0 00-2.54-.6c-1.47-.06-3.11.09-4.12 1.17-1.25 1.34-.92 3.58.16 5a15.85 15.85 0 004.27 3.42 9.37 9.37 0 013 2.9 3.55 3.55 0 01.23.52h9.23a25.76 25.76 0 005.79-3.89zM92.44 769.13a7.36 7.36 0 002.42-3.64 3.24 3.24 0 00-1.69-3.71c-1.55-.6-3.21.48-4.46 1.56s-2.7 2.33-4.34 2.1a6.61 6.61 0 002-6.18 2.58 2.58 0 00-.56-1.26c-.86-.92-2.42-.52-3.45.2-3.28 2.3-4.19 6.75-4.21 10.76a20.48 20.48 0 01-.06-4.43c0-1.48-.41-3.13-1.66-3.92a4.94 4.94 0 00-2.54-.6c-1.47 0-3.11.09-4.12 1.17-1.25 1.34-.93 3.58.16 5.06a16.12 16.12 0 004.26 3.41 9.51 9.51 0 013 2.9 3 3 0 01.22.52h9.23a25.59 25.59 0 005.8-3.94zM245.21 698.88s3.46 4.53-1.6 11.36-9.22 12.6-7.54 16.86c0 0 7.63-12.69 13.84-12.87s2.13-7.72-4.7-15.35z"
        fill={color}
      />
      <path
        d="M245.21 698.88a5.74 5.74 0 01.71 1.42c6.06 7.12 9.28 13.76 3.46 13.93-5.43.16-11.93 9.86-13.49 12.31.05.19.11.37.18.56 0 0 7.63-12.69 13.84-12.87s2.13-7.72-4.7-15.35z"
        opacity={0.1}
      />
      <path
        d="M251.64 704.65c0 1.59-.18 2.88-.4 2.88s-.4-1.29-.4-2.88.23-.84.45-.84.35-.75.35.84z"
        fill="#ffd037"
      />
      <path
        d="M253.85 706.55c-1.4.76-2.62 1.22-2.72 1s.94-1 2.34-1.73.84-.21.95 0 .83-.03-.57.73z"
        fill="#ffd037"
      />
      <path
        d="M226.93 698.88s-3.46 4.53 1.6 11.36 9.23 12.6 7.54 16.86c0 0-7.63-12.69-13.84-12.87s-2.09-7.72 4.7-15.35z"
        fill={color}
      />
      <path
        d="M226.93 698.88a5.55 5.55 0 00-.7 1.42c-6.06 7.12-9.29 13.76-3.47 13.93 5.43.16 11.94 9.86 13.5 12.31-.06.19-.12.37-.19.56 0 0-7.63-12.69-13.84-12.87s-2.09-7.72 4.7-15.35z"
        opacity={0.1}
      />
      <path
        d="M220.5 704.65c0 1.59.18 2.88.4 2.88s.4-1.29.4-2.88-.22-.84-.44-.84-.36-.75-.36.84z"
        fill="#ffd037"
      />
      <path
        d="M218.29 706.55c1.4.76 2.62 1.22 2.73 1s-.95-1-2.34-1.73-.85-.21-1 0-.78-.03.61.73z"
        fill="#ffd037"
      />
      <path
        d="M221.6 726.5s9.68-.29 12.59-2.37 14.88-4.56 15.61-1.23 14.53 16.56 3.61 16.65-25.37-1.7-28.28-3.47-3.53-9.58-3.53-9.58z"
        fill="#a8a8a8"
      />
      <path
        d="M253.61 738.39c-10.92.09-25.38-1.7-28.29-3.47-2.22-1.35-3.1-6.19-3.39-8.43h-.33s.62 7.81 3.53 9.58 17.36 3.56 28.28 3.47c3.16 0 4.24-1.15 4.18-2.81-.45 1.02-1.64 1.64-3.98 1.66z"
        opacity={0.2}
      />
      <ellipse
        cx={612.39}
        cy={793.96}
        rx={329.42}
        ry={14.94}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M578.83 347.29s21 39.73 22.63 45.4a7.66 7.66 0 007.08 5.66s20.92 5 25.92 5.67 48.34 4.33 48.34 4.33 11 .34 12.33-3.66c1.22-3.66 22.47-22.89 34.77-6.11a12.23 12.23 0 011.78 10.92c-2.26 7.2-6.9 18.63-11.88 11.52-7-10-15.14-7.19-15.14-1.86s-11.2 3.35-14.86 4.1c-2 .41-8.88 2.24-14.83 3.84a108 108 0 01-21.12 3.51c-11.81.77-29.22 1.41-35.39-.92-7.45-2.83-20.44-3.48-26-3.63a8.55 8.55 0 01-5.07-1.82 79.09 79.09 0 01-19.25-21.89c-8.67-15-26.5-46.06-25.3-55.06s35.99 0 35.99 0z"
        fill="#efb7b9"
      />
      <path
        d="M578.83 347.29s21 39.73 22.63 45.4a7.66 7.66 0 007.08 5.66s20.92 5 25.92 5.67 48.34 4.33 48.34 4.33 11 .34 12.33-3.66c1.22-3.66 22.47-22.89 34.77-6.11a12.23 12.23 0 011.78 10.92c-2.26 7.2-6.9 18.63-11.88 11.52-7-10-15.14-7.19-15.14-1.86s-11.2 3.35-14.86 4.1c-2 .41-8.88 2.24-14.83 3.84a108 108 0 01-21.12 3.51c-11.81.77-29.22 1.41-35.39-.92-7.45-2.83-20.44-3.48-26-3.63a8.55 8.55 0 01-5.07-1.82 79.09 79.09 0 01-19.25-21.89c-8.67-15-26.5-46.06-25.3-55.06s35.99 0 35.99 0z"
        opacity={0.05}
      />
      <path
        d="M819.74 647.45c-9.51 10.34-16.51 14.41-16.18 3.5 1-33-57-182.2-57-182.2l17.15-1.3c37.43 64.49 51.35 130.81 56.03 180z"
        fill="none"
      />
      <path
        d="M901.55 719.45a82.5 82.5 0 01-164.69 7c-.12-1.34-.21-2.68-.25-4v-.07q-.06-1.49-.06-3a82.5 82.5 0 01165 0z"
        fill="#65617d"
      />
      <circle cx={819.05} cy={719.4} r={45} fill="#dce0ed" />
      <circle cx={819.05} cy={719.4} r={27} fill="#65617d" />
      <path
        d="M602.39 562.73l-198.66 4v-29.28c1.78-23.57 26-31.84 48-34.43a137.78 137.78 0 0151.33 3.85c42.15 11.16 69 13.32 82.23 13.53a12.61 12.61 0 0112.2 10.26c.63 3.35 1.25 7 1.83 10.6.44 2.82.86 5.6 1.24 8.19 1.1 7.46 1.83 13.28 1.83 13.28z"
        fill="#65617d"
      />
      <path
        d="M760.88 724.73H348.19a16.25 16.25 0 01-15.05-9.73c-3.11-7.43 1.24-12.17 5.88-14.95a46.75 46.75 0 0020.32-24.86c4.4-13 8.7-33.34 10.39-65.12 1.74-32.87 13.64-49.12 26.5-57 16.61-10.16 34.82-6.35 34.82-6.35l167.33 1.34a32.16 32.16 0 018.17 5.33c14.91 13.88-6.83 32-6.83 32-46.67 49.33-11.34 99.33-11.34 99.33H674a78.79 78.79 0 0044.85-13.73c11.57-8 16-15.73 17.78-20.41 1.32-3.58 2.66-7.15 4.26-10.61 22.46-48.71-4.63-127.95-16.32-157.58-2.9-7.37-4.85-11.67-4.85-11.67l26.85-2 17-1.29h.17c37.42 64.54 51.33 130.86 56 180 .44 4.63.8 9.12 1.09 13.43a60 60 0 01-59.95 63.87z"
        fill={color}
      />
      <path
        d="M600.57 549.45H403.73v-8.19h195.6c.44 2.77.86 5.55 1.24 8.19z"
        opacity={0.1}
      />
      <path
        d="M606.56 553.45H397.82a4 4 0 01-1.58-.32c16.61-10.16 34.82-6.35 34.82-6.35l167.33 1.34a32.16 32.16 0 018.17 5.33z"
        opacity={0.1}
      />
      <rect
        x={320.69}
        y={543.21}
        width={291.7}
        height={8.19}
        rx={4.09}
        ry={4.09}
        fill="#dce0ed"
      />
      <path
        d="M819.74 647.45c-9.51 10.34-16.51 14.41-16.18 3.5 1-33-57-182.2-57-182.2l17.15-1.3c37.43 64.49 51.35 130.81 56.03 180z"
        opacity={0.1}
      />
      <path
        d="M901.05 710.36c-9.85 2.36-22 4.76-37 7q-8.37 1.23-18 2.36c-15.33 1.82-33.06 3.41-53.54 4.63q-8.7.52-18.07.95-17.55.8-37.57 1.22l-.25-4v-.07c18.65-7.53 48-27.62 52.72-79.95a82.54 82.54 0 01111.72 67.94z"
        opacity={0.1}
      />
      <path
        d="M721.06 724.73s94.7-10.28 62.08-154.57c0 0 46.79 42.9 75.9 66.74s81 56.71 81 56.71-30.98 28.95-218.98 31.12z"
        fill={color}
      />
      <path
        d="M721.06 724.73s94.7-10.28 62.08-154.57c0 0 46.79 42.9 75.9 66.74s81 56.71 81 56.71-30.98 28.95-218.98 31.12z"
        fill="#fff"
        opacity={0.1}
      />
      <circle cx={468.06} cy={719.4} r={82.5} fill="#65617d" />
      <circle cx={468.06} cy={719.4} r={45} fill="#dce0ed" />
      <circle cx={468.06} cy={719.4} r={27} fill="#65617d" />
      <path
        d="M560.56 694.62c0-53.27-42.31-96.46-94.5-96.46s-94.5 43.19-94.5 96.46q0 3.38.23 6.69h188.54q.23-3.31.23-6.69z"
        opacity={0.1}
      />
      <path
        d="M557.06 692.96c0-51.3-40.74-92.89-91-92.89s-91 41.59-91 92.89c0 2.17.08 4.31.22 6.44h181.56c.14-2.13.22-4.27.22-6.44z"
        fill={color}
      />
      <path
        d="M557.06 692.96c0 1.49 0 3-.11 4.44 0 .67-.07 1.33-.11 2H375.28c0-.67-.08-1.33-.11-2-.07-1.47-.11-3-.11-4.44 0-51.3 40.74-92.89 91-92.89s91 41.59 91 92.89z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M556.95 697.45c0 .67-.07 1.33-.11 2H375.28c0-.67-.08-1.33-.11-2z"
        opacity={0.1}
      />
      <rect
        x={335.25}
        y={701.4}
        width={244.48}
        height={21.33}
        rx={10.67}
        ry={10.67}
        opacity={0.1}
      />
      <rect
        x={335.25}
        y={699.4}
        width={244.48}
        height={21.33}
        rx={10.67}
        ry={10.67}
        fill="#dce0ed"
      />
      <ellipse
        cx={862.9}
        cy={578.3}
        rx={11.98}
        ry={30.16}
        transform="rotate(-24.33 721.44 722.23)"
        opacity={0.1}
      />
      <ellipse
        cx={863.9}
        cy={577.3}
        rx={11.98}
        ry={30.16}
        transform="rotate(-24.33 722.432 721.23)"
        fill="#dce0ed"
      />
      <path
        d="M763.56 467.45v15.67h-30.5a52.55 52.55 0 01-8.48-.68c-2.9-7.37-4.85-11.67-4.85-11.67l26.85-2z"
        opacity={0.1}
      />
      <path
        d="M763.56 481.08h-30.5c-26.79 0-48.5-20-48.5-44.77v-4.15c0-24.72 21.71-44.76 48.5-44.76l30.5 2.77z"
        fill={color}
      />
      <path
        d="M713.31 413.9s18.25 9.75 7.75 26.25c0 0-12.88 21.12-33.13 19.12l-7.37-45.37s24.25-2.25 32.75 0z"
        fill={color}
      />
      <path
        d="M706.3 413.02a19.4 19.4 0 0114.84 7.82c3.25 4.5 5.19 11.06-.06 19.31 0 0-12.88 21.12-33.13 19.12l-7.37-45.37s15.17-1.45 25.72-.88zM762.56 390.17h5.88a18.62 18.62 0 0118.62 18.62v53.68a18.62 18.62 0 01-18.62 18.62h-5.88v-90.92z"
        opacity={0.1}
      />
      <path
        d="M763.56 390.17h5.88a18.62 18.62 0 0118.62 18.62v53.68a18.62 18.62 0 01-18.62 18.62h-5.88v-90.92z"
        fill="#dce0ed"
      />
      <path
        d="M547.02 506.93s4.71 1.72 11 4.12c10 3.85 24.1 9.47 29 12.55s23.17 8.14 36.85 11.7a120 120 0 0031.06 3.83c10.64-.1 23.53-.2 27.09-.2a11.2 11.2 0 011.86.14c3.74.62 3.59 3.13 3.5 3.73v.13c-22 13.33-48.67 73-50.33 83-1.25 7.5-12.24 28.29-17.66 38.23-1.82 3.33-3 5.44-3 5.44l6.67 7.66 19.33 8.67 18.33 8s19.34 1 19.67 0 .33-11.33.33-11.33a54.6 54.6 0 01-6.68-5.08 110.51 110.51 0 01-12.32-12.59c-10.66-12.67 10.67-37 10.67-37l41-53.33s3.33-6 19.33-30 0-37 0-37l-28.16-11.69c-48.84-18.28-107.75-32.93-107.75-32.93l-.84-.11-12.49-1.56z"
        fill="#efb7b9"
      />
      <path
        d="M672.85 685.93s3.5 4.13.88 4.5-9.5-1.12-9.5-1.12l-43.63-23s-4.75-3.38-5.87 3.25-1.88 6-1.88 6-5.75 12.37 0 14.93 40.29 12.69 40.29 12.69 50.13 11.38 54.88-1.75-8.5-10.87-8.5-10.87-16.5-4-22.13-12c-.04 0-8.16 2.25-4.54 7.37z"
        fill="#444053"
      />
      <path
        d="M732.68 507.6l-28.16-11.69c-48.84-18.28-107.75-32.93-107.75-32.93l-.84-.11-12.49-1.56-36.42 45.62s4.71 1.72 11 4.12c10 3.85 24.1 9.47 29 12.55s23.17 8.14 36.85 11.7a120 120 0 0031.06 3.83c10.64-.1 23.53-.2 27.09-.2a11.2 11.2 0 011.86.14c3.74.62 3.59 3.13 3.5 3.73v.13c-22 13.33-48.67 73-50.33 83-1.25 7.5-12.24 28.29-17.66 38.23l-.73 1.34c-1.45-.24-3.26.28-3.9 4.06-1.13 6.62-1.88 6-1.88 6s-5.75 12.37 0 14.93 40.26 12.69 40.26 12.69 50.13 11.38 54.88-1.75-8.5-10.87-8.5-10.87-16.5-4-22.13-12a11.07 11.07 0 00-1.46.54c-.59-.48-1.22-1-1.89-1.58a110.51 110.51 0 01-12.32-12.59c-10.66-12.67 10.67-37 10.67-37l41-53.33s3.33-6 19.33-30-.04-37-.04-37z"
        opacity={0.05}
      />
      <path
        d="M513.44 283.91l1.52 1.92.85 1.07 5.3 6.67s12.65 4.06 23.74 6.69c11.55 2.73 21.4 3.92 13.57-2.61-4.86-4.05-5.18-10.83-3.41-18.1a74.9 74.9 0 016.36-16.1q.59-1.14 1.17-2.22a133.43 133.43 0 018.24-13.31 236.63 236.63 0 00-22.09-13.57c-9.16-4.74-16.68-6.81-11.91 2.57 3.06 6 2.06 12.74-.8 19.19-.22.51-.46 1-.71 1.53a68.78 68.78 0 01-9.44 13.89 109.62 109.62 0 01-12.39 12.38z"
        fill="#efb7b9"
      />
      <path
        fill="#444053"
        d="M576.78 436.24l6.78 6.19 6.55 25.2h-10.93l-12.07-15.7 9.67-15.69z"
      />
      <path
        opacity={0.1}
        d="M567.11 451.93l7.3 9.49 4.77 6.21h10.93l-1.12-4.31-4.77-18.36-.66-2.53-6.78-6.19-9.26 15.02-.41.67z"
      />
      <path
        opacity={0.1}
        d="M567.11 451.93l7.3 9.49 4.77 6.21h10.93l-1.12-4.31-4.77-18.36-.66-2.53-6.78-6.19-9.26 15.02-.41.67z"
      />
      <path
        d="M530.78 518.24s4.71 1.72 11 4.12c10 3.85 24.1 9.47 29 12.55s23.17 8.14 36.85 11.7a120 120 0 0031.06 3.84c10.64-.1 23.53-.2 27.09-.2a11.2 11.2 0 011.86.14c3.74.62 3.59 3.13 3.5 3.73v.13c-22 13.33-48.67 73-50.33 83-1.25 7.5-12.24 28.29-17.66 38.23-1.82 3.33-3 5.44-3 5.44l6.67 7.66 19.32 8.66 18.33 8s19.34 1 19.67 0 .33-11.33.33-11.33a54.6 54.6 0 01-6.68-5.08 110.51 110.51 0 01-12.32-12.59c-10.66-12.67 10.67-37 10.67-37l41-53.33s3.33-6 19.33-30 0-37 0-37l-25.66-14.67c-40-24.33-96.34-38.33-96.34-38.33l-.84-.11-12.49-1.56z"
        fill="#efb7b9"
      />
      <path
        d="M600.14 680.91l6.67 7.66 19.33 8.67 18.33 8s19.34 1 19.67 0 .33-11.33.33-11.33a54.6 54.6 0 01-6.68-5.08c-2.07 1.11-4.42 3.19-2.15 6.41 0 0 3.5 4.12.88 4.5s-9.5-1.12-9.5-1.12l-43.63-23-.25-.17-3 5.46z"
        opacity={0.1}
      />
      <path
        d="M656.61 697.24s3.5 4.12.87 4.5-9.5-1.13-9.5-1.13l-43.62-23s-4.75-3.37-5.88 3.25-1.87 6-1.87 6-5.75 12.38 0 14.94 40.25 12.65 40.25 12.65 50.12 11.37 54.87-1.75-8.5-10.88-8.5-10.88-16.5-4-22.12-12c.03.04-8.13 2.29-4.5 7.42z"
        fill="#444053"
      />
      <path
        d="M533.44 253.57c5.78 4 14.6 10.33 22.13 10.33a36.91 36.91 0 005.8-.46 135.17 135.17 0 019.41-15.53s-44-30.67-34-11c3.3 6.54.05 9.75-3.34 16.66z"
        opacity={0.1}
      />
      <path
        d="M519.57 225.9a35.94 35.94 0 0016.41 30.2 33.06 33.06 0 003.52 2 36 36 0 10-19.93-32.22z"
        fill="#efb7b9"
      />
      <path
        d="M530.78 518.24s4.71 1.72 11 4.12c3.95-3.48 8-6.84 9.69-7.45 3.67-1.34 15.67-8.34 15.34-10.34s5-9.66 9.66-11 2-8.33 2-8.33 9-3.33 11.24-8 9.1-10.67 6.76-10.33a7.26 7.26 0 01-2.84-1.11l-12.49-1.56z"
        opacity={0.1}
      />
      <path
        d="M503.44 506.24s15.34 12.67 16.05 18.33 10.95 5.34 10.95 5.34 15.34-14.67 19-16 15.67-8.34 15.34-10.34 5-9.66 9.66-11 2-8.33 2-8.33 9-3.33 11.24-8 9.1-10.67 6.76-10.33c-.66.09-2.77-1-5.45-2.59-3.29-2-7.46-4.71-10.86-7-3.6-2.44-6.35-4.38-6.35-4.38s-1.57-.28-4.26-.67c-14.51-2.1-61.77-7.46-72.74 10a26.47 26.47 0 00-3.25 7.47c-4.91 18.6 11.91 37.5 11.91 37.5z"
        fill="#444053"
      />
      <path
        d="M519.48 465.82s-15.66 8.84-21.5 8.84 21.5-8.84 21.5-8.84zM529.94 472.57s-23.32 7.84-23.32 14-2.18-16.5 23.32-14zM585.77 437.26l-.33.45a1 1 0 00.33-.45zM513.44 283.91l1.52 1.92.85 1.07 5.3 6.67s12.65 4.06 23.74 6.69c11.55 2.73 21.4 3.92 13.57-2.61-4.86-4.05-5.18-10.83-3.41-18.1l-.35-.45s.35 6.74-3.64 6.87c-5.38.17-5.45-1.64-10.41-3.73-6.39-2.7-12.94-7.21-14.78-10.72a109.62 109.62 0 01-12.39 12.39z"
        opacity={0.1}
      />
      <path
        d="M491.53 468.71a11.55 11.55 0 008.58.2c10.33-3.34 26.67-11.38 34.33-7.86 6.14 2.82 30.87 2.74 40 .37 2.27-.59 3.57-1.32 3.37-2.18a6 6 0 01.35-2.93c1.06-3.39 3.94-8.1 6.09-11.35l-.66-2.53-6.78-6.19-9.26 15c-14.51-2.1-61.77-7.46-72.74 10a26.47 26.47 0 00-3.28 7.47z"
        opacity={0.1}
      />
      <path
        d="M484.78 460.91s4 9.33 14.33 6 26.67-11.38 34.33-7.86 44.34 2.52 43.34-1.81 9-18 9-18-5.46-1-8.84-18.83c-.5-2.6-.95-5.56-1.33-8.92a113.52 113.52 0 01-.58-20.74c1.35-19.3 8.11-27.18 8.11-27.18s9.33-10.66 1.33-25.33c-4.19-7.69-21.1-29-21.33-38.5-.21-8.62-8.45-18.64-8.45-18.64s.35 6.74-3.64 6.87c-5.38.17-5.45-1.64-10.41-3.73-7.29-3.08-14.78-8.51-15.27-12.14 0 0-30.56-1.53-37.23 29.47s-4.33 48-3.33 51.67 9.66 51 2.66 71-2.69 36.67-2.69 36.67z"
        fill="#a36468"
      />
      <path
        d="M534.61 406.45a78.42 78.42 0 0021.66 23.67 150.09 150.09 0 0117.5 1.17c-.5-2.6-1-5.56-1.33-8.92a113.52 113.52 0 01-.58-20.74 7.55 7.55 0 01-3.92-4.84c-1.67-5.67-16.54-32.67-16.54-32.67s-34.79-9-36 0 10.54 27.33 19.21 42.33z"
        opacity={0.1}
      />
      <path
        d="M546.14 347.29s21 39.73 22.63 45.4a7.66 7.66 0 007.08 5.66s20.92 5 25.92 5.67 48.37 4.33 48.37 4.33 11 .34 12.33-3.66c1.22-3.66 22.47-22.89 34.77-6.11a12.23 12.23 0 011.78 10.92c-2.26 7.2-6.9 18.63-11.88 11.52-7-10-15.14-7.19-15.14-1.86s-11.2 3.35-14.86 4.1c-2 .41-8.88 2.24-14.83 3.84a108 108 0 01-21.17 3.51c-11.81.77-29.22 1.41-35.39-.92-7.44-2.83-20.43-3.48-26-3.63a8.55 8.55 0 01-5.07-1.82 79.09 79.09 0 01-19.24-21.89c-8.67-15-26.5-46.06-25.3-55.06s36 0 36 0z"
        fill="#efb7b9"
      />
      <path
        d="M539.14 292.24s11.25 18.67 16.46 32 11.54 36.67 11.54 36.67l-31.34-3.67-2.66-4.33s-22.38 14-19.71 20-6-9-5.33-26-2.41-47.34 0-54.67 23.67-5.67 31.04 0z"
        opacity={0.1}
      />
      <path
        d="M508.14 344.91c-.67 17 8 32 5.33 26s19.71-20 19.71-20l2.63 4.33 31.33 3.67s-6.33-23.34-11.54-36.67a203.94 203.94 0 00-10.72-22c-3.21-5.83-5.74-10-5.74-10-4.31-3.33-13.46-5.28-20.76-4.82a26.88 26.88 0 00-3.39.41c-3 .59-5.42 1.73-6.49 3.53a4.66 4.66 0 00-.4.88c-2.4 7.33.68 37.67.04 54.67z"
        fill="#a36468"
      />
      <path
        d="M494.14 391.45s13.25 18.25 17.25 18.75c-.03.04-17.03-3.75-17.25-18.75zM494.14 417.45s25 25.25 33 25.5-33-25.5-33-25.5zM494.14 427.99s16 18.75 17 18.75-17.28-6.5-17-18.75zM508.47 289.36a22.18 22.18 0 007.34-2.46c.86-.45 1.71-.95 2.54-1.48a60.07 60.07 0 009.12-7.5c4.6-4.47 9.19-9.35 11.09-15.48a27.87 27.87 0 00.94-4.32c1.14-7.69.18-16.18 5.68-21.41a13.08 13.08 0 013.51-2.37c7.8-3.71 19.11-1.31 24.93-8 3.7-4.24 3.61-10.13 6.45-14.74 1.24-2 3.52-3.73 5.54-5.57a36 36 0 10-49.63 50c-.22.51-.46 1-.71 1.53-6.87 14-21.83 26.28-21.83 26.28l1.52 1.92c-3.03.69-5.42 1.8-6.49 3.6z"
        opacity={0.1}
      />
      <path
        d="M571.62 225.36c-6.77 7.76-21 3.24-28.45 10.35-6.54 6.23-3.94 17.1-6.61 25.73-1.9 6.13-6.49 11-11.09 15.48-6.7 6.52-15.27 13.14-24.43 11.27-5.43-1.11-10.75-5.17-16-3.3-2.61.94-4.48 3.2-6.43 5.19a44.31 44.31 0 01-24.57 12.71 10.51 10.51 0 01-5.57-.26c-2.8-1.14-4.31-4.2-6.86-5.83-5-3.2-11.42.08-16.61 2.94a116.23 116.23 0 01-95.48 6.87l8.09-4c-1.72-3.51-6.37-4.28-9.33-6.85-6.1-5.29-2.51-15.87 3.94-20.72s14.8-6.54 21.48-11.07c1.36-.92 2.74-2.14 2.87-3.77a6 6 0 00-1.09-3.34c-3.56-6.27-7.5-13-6.7-20.17 1.22-11 13.23-17.76 24.26-18.53s21.95 2.55 33 2.74c4 .07 8.19-.32 11.62-2.39 4.79-2.88 7.2-8.37 10.11-13.14a53.67 53.67 0 0121.5-19.82c10-5.05 21.32-6.82 31.72-11 10.62-4.26 20.28-11 31.39-13.71 16.13-4 33.41 1.23 47.34 10.27 6.71 4.35 28.14 18.31 28 27.24-.11 5.3-7 8.17-9.61 12.33-2.88 4.65-2.79 10.54-6.49 14.78z"
        fill="#965d7b"
      />
      <g opacity={0.1}>
        <path d="M354.5 251.75a6.09 6.09 0 011.09 3.34 3.38 3.38 0 01-.35 1.21c-2.94-5.18-6-10.67-6.49-16.45 1.3 4.13 3.59 8.1 5.75 11.9zM327.3 290.65c2.95 2.57 7.6 3.34 9.33 6.85l-2.86 1.42a32.17 32.17 0 01-5.47-3.27 9.41 9.41 0 01-3.12-7.77 8.59 8.59 0 002.12 2.77zM424.02 294.64c5.19-2.86 11.62-6.14 16.61-2.94 2.54 1.63 4.06 4.69 6.86 5.83a10.47 10.47 0 005.56.26 44.34 44.34 0 0024.58-12.71c1.94-2 3.81-4.25 6.43-5.19 5.22-1.87 10.54 2.19 16 3.3 9.16 1.87 17.72-4.75 24.43-11.27 4.6-4.47 9.18-9.35 11.08-15.48 2.68-8.63.08-19.5 6.62-25.73 7.47-7.11 21.67-2.59 28.45-10.35 3.69-4.24 3.61-10.13 6.45-14.74 2.4-3.89 8.62-6.65 9.5-11.34a8.7 8.7 0 011.11 4c-.11 5.3-7 8.17-9.61 12.33-2.84 4.61-2.76 10.5-6.45 14.74-6.78 7.76-21 3.24-28.45 10.35-6.54 6.23-3.94 17.1-6.62 25.73-1.9 6.13-6.48 11-11.08 15.48-6.71 6.52-15.27 13.14-24.43 11.27-5.44-1.11-10.76-5.17-16-3.3-2.62.94-4.49 3.2-6.43 5.19a44.34 44.34 0 01-24.58 12.71 10.47 10.47 0 01-5.56-.26c-2.8-1.14-4.32-4.2-6.86-5.83-5-3.2-11.42.08-16.61 2.94a116.23 116.23 0 01-95.48 6.87l5.59-2.77a116.45 116.45 0 0088.89-9.09z" />
      </g>
      <path
        d="M671.14 554.11l8.41-4.07v-1.59c0-.61-6.71.74-11.91 1.89 3.74.66 3.59 3.17 3.5 3.77z"
        opacity={0.1}
      />
      <ellipse cx={678.45} cy={437.5} rx={20.26} ry={24.65} fill={color} />
      <path
        fill="#dda2a6"
        d="M483.45 405.42l-32.57 32.12-107.07-1.87 29.44-30.25h110.2z"
      />
      <path
        fill="#b77b7f"
        d="M483.45 515.3V405.42l-32.57 32.12v107.52l32.57-29.76z"
      />
      <path
        fill="#dda2a6"
        d="M343.81 435.67v109.39h107.07V437.54l-107.07-1.87z"
      />
      <path
        fill="#fff"
        opacity={0.3}
        d="M343.81 435.67v109.39h107.07V437.54l-107.07-1.87z"
      />
      <path
        fill="#dce0ed"
        d="M442.18 467.65l-79.63-13.67-10.38 52.28 81.98 15.06 8.03-53.67z"
      />
      <path
        fill={color}
        d="M426.45 479.86l-53.53-8.41-1.34 6.98 53.53 9.08 1.34-7.65zM411.73 494.79l-30.45-4.42-1.34 7.75 31.79 4.46v-7.79z"
      />
      <path
        fill="#65617d"
        d="M470.28 463.09l-1.45-43.26-8.37 8.26 1.46 43.36 8.36-8.36z"
      />
      <path
        fill="#65617d"
        d="M362.48 416.49l102.89 1.39 3.46 1.95-8.37 8.26-2.89-1.7-101.91-2.89 6.82-7.01z"
      />
    </svg>
  );
};

SvgOnTheWay.propTypes = {
  color: PropTypes.string
};
SvgOnTheWay.defaultProps = {
  color: "primary"
};
export default SvgOnTheWay;
