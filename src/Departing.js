import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDeparting = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 806.22 730.95"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Departing_svg__a"
          x1={562.87}
          y1={813.16}
          x2={562.87}
          y2={356.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Departing_svg__b"
          x1={736.95}
          y1={813.71}
          x2={736.95}
          y2={595.52}
          xlinkHref="#Departing_svg__a"
        />
      </defs>
      <g opacity={0.6}>
        <path
          fill={color}
          d="M259.93 41.01l21.41-6.04 32.67 2.65-33.65 9.48-20.43-6.09z"
        />
        <path
          opacity={0.2}
          d="M259.93 41.01l21.41-6.04 32.67 2.65-33.65 9.48-20.43-6.09z"
        />
        <path
          d="M207.51 56.12l30.6-8.64L254.79 52l124.39-35.07s18.87-3.34 19.57 3L238.11 64.96z"
          fill={color}
        />
        <path
          d="M383.9 31.75L250.33 69.41l-12.22-4.45 161.1-45.42s4.06 6.75-15.31 12.21z"
          fill={color}
        />
        <path
          d="M383.9 31.75L250.33 69.41l-12.22-4.45 161.1-45.42s4.06 6.75-15.31 12.21z"
          opacity={0.2}
        />
        <path
          fill={color}
          d="M270.6 78.84l21.41-6.03 65.86-43.61-46.91 13.23-40.36 36.41z"
        />
      </g>
      <path
        d="M670.7 410.33c-4.59-1.63-9.46-3.12-14.25-2.29-8 1.4-13.64 9-16 16.79s-2.31 16.1-3.83 24.1-5.16 16.29-12.34 20.13-15.66 2.32-23.63 1.4a149.21 149.21 0 00-31.47-.29c-8.79.85-19.1 3.82-21.68 12.26-2.11 6.9 2.08 13.92 4.88 20.57 5.23 12.43 5.65 27.14-.34 39.23-6.09 12.3-18.1 21.1-23.16 33.85-1.28 3.24-2.09 6.83-1.22 10.2a18.63 18.63 0 003.63 6.58c4 5.12 8.72 9.63 12.34 15 7.55 11.2 9.6 25.16 10.48 38.64a281.8 281.8 0 01-.22 39.79c9.84-3.24 20.72-.35 30.86-2.44 21.59-4.45 35.07-30 57.06-31.56 10.4-.73 21.59 4.16 30.87-.6 4.52-2.32 7.73-6.65 9.88-11.26a39.82 39.82 0 002.39-26.7c-1.63-6.19-4.8-12.24-4.18-18.61.53-5.45 3.79-10.26 7.55-14.24 10.69-11.35 26.21-18.29 33.89-31.86 7.2-12.72 5.38-29.93-4.31-40.86-2.54-2.87-5.56-5.33-7.78-8.45-3.69-5.19-4.87-11.75-5.31-18.11-1.05-15.25 1.54-31.38-3.39-46.19-4.47-13.47-18.12-20.59-30.72-25.08z"
        fill={color}
        opacity={0.6}
      />
      <path
        d="M670.44 410.78s-43.77 243.11-100.62 272.1M548.65 478.07s46.88 6.44 93.72 54.59M634.11 560.89s36.09-35.29 92.45-29.29M528.06 576.23s65.84 5.59 90.22 30.88M608.38 630.65s36.89-6.46 70.9 15.3"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        opacity={0.6}
      />
      <path
        d="M176.19 534.48c2.86-1 5.9-1.95 8.89-1.43 5 .87 8.51 5.61 10 10.48s1.44 10 2.39 15 3.22 10.17 7.7 12.56 9.77 1.45 14.74.87a93.08 93.08 0 0119.63-.18c5.48.53 11.92 2.38 13.53 7.65 1.32 4.3-1.3 8.69-3 12.84-3.26 7.76-3.52 16.93.21 24.47s11.29 13.16 14.45 21.12a10.44 10.44 0 01.76 6.37 11.62 11.62 0 01-2.26 4.1c-2.48 3.19-5.44 6-7.7 9.36-4.71 7-6 15.7-6.54 24.11a175.8 175.8 0 00.14 24.83c-6.14-2-12.92-.22-19.25-1.53-13.55-2.71-21.95-18.62-35.67-19.62-6.49-.46-13.47 2.6-19.26-.37a14.54 14.54 0 01-6.16-7 24.84 24.84 0 01-1.49-16.65c1-3.86 3-7.64 2.61-11.61-.33-3.4-2.37-6.4-4.71-8.89-6.67-7.08-16.35-11.41-21.14-19.88a22.65 22.65 0 012.69-25.49 66.9 66.9 0 004.85-5.27c2.3-3.24 3-7.33 3.31-11.3.66-9.51-1-19.58 2.11-28.82 2.79-8.44 11.31-12.88 19.17-15.72z"
        fill={color}
        opacity={0.6}
      />
      <path
        d="M176.35 534.8s27.31 151.68 62.76 169.76M252.33 576.78s-29.25 4-58.47 34.05M199 628.48s-22.51-22-57.68-18.27M265.18 638.02s-41.07 3.46-56.29 19.26M215.11 671.97s-23-4-44.23 9.55"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        opacity={0.6}
      />
      <path
        d="M549.98 31.84c-3.38 0-7.13 0-9.7.2a11.8 11.8 0 00-3.36.69l-17.35 6.23c14 .35 28.64.24 43 .13l80.54-.61c8.22-.06 16.85-.14 23.71-.63 4.59-.33 8-.81 12.2-1.19 15.25-1.36 37.49-1.1 57.35-1s43.84-.45 50.83-2.44h-42.63c-4.6 0-9.42 0-13.48-.23-4.74-.27-7.64-.8-11.81-1.16-6.9-.59-16.42-.66-25.27-.7-48.57-.19-96.56.96-144.03.71zM304.72 151.36c-1.16 0-2.46 0-3.35.06a4.73 4.73 0 00-1.16.2l-6 1.81c4.84.1 9.88.07 14.84 0l27.8-.18c2.84 0 5.81 0 8.18-.18 1.58-.1 2.75-.24 4.21-.35 5.26-.4 12.93-.32 19.78-.3s15.12-.13 17.54-.71h-14.7c-1.59 0-3.25 0-4.65-.07-1.64-.08-2.63-.23-4.08-.34-2.38-.17-5.66-.19-8.72-.2-16.76 0-33.3.38-49.69.26zM664.71 132.66c-2 0-4.25 0-5.79.1a8.17 8.17 0 00-2 .35l-10.35 3.13c8.37.18 17.09.12 25.65.07l48.06-.31c4.9 0 10.05-.07 14.14-.32 2.74-.16 4.76-.41 7.28-.6 9.1-.68 22.36-.55 34.21-.52s26.15-.23 30.32-1.23h-25.44c-2.74 0-5.62 0-8-.12-2.83-.14-4.55-.4-7-.58-4.11-.3-9.79-.33-15.07-.35-29.07-.07-57.7.51-86.01.38z"
        fill="#f4f4f4"
      />
      <path
        d="M646.34 493.61h.12l-6.2-33.07a17.91 17.91 0 00-5.61-13l-28.67-14-.17.39a32.47 32.47 0 01-5.11-8.57l.5-.71a17.18 17.18 0 003.3-6.72 11.38 11.38 0 00.17-1.9l.43-.22a10.62 10.62 0 0011.82-8.6c0-.24.08-.49.11-.73a10.63 10.63 0 01-9.66 8 29.2 29.2 0 0013-24.29v-1.21a10.59 10.59 0 004.88-7.11c0-.24.08-.49.11-.73a10.6 10.6 0 01-5.07 6.6 29.06 29.06 0 00-1.79-7.91h.72a10.63 10.63 0 0010.63-10.63v-.74a10.55 10.55 0 01-12 9.79l-.23-.52a17.39 17.39 0 0012.22-14.15v-.74a10.57 10.57 0 01-2.14 5.69 10.62 10.62 0 00-21-3.15q-.93-.58-1.9-1.1a10.63 10.63 0 019.61-7.77h-.74a10.63 10.63 0 00-10.16 7.17 29.22 29.22 0 00-36.8 10.54c-2.25 1.63-5.15 4-5 6.07a20.21 20.21 0 00-2.53 3.11c-4 6.37-3.33 14.47-3.31 22s-1.34 16.1-7.62 20.26a10.07 10.07 0 007.79.06 29.87 29.87 0 006.89-4c1.85-1.32 3.76-2.7 4.86-4.69.08-.15.16-.3.23-.45a24.14 24.14 0 004.39 2.32c.61 4.94.74 10.64-1.45 12.52l-.33.28-.09.07a9.38 9.38 0 01.42-.95s-5.91 5.61-18.6 5.31-19.19 12.4-19.19 12.4l-8.86 38.09h.14l-.14.62h.14l-.14.62.24-.05a2.86 2.86 0 002.13 2.1c.77.18 1.72.43 2.79.76 0 7.18-.33 16.58-1.91 19 0 0-4.13 21.85-3.25 28 .67 4.7 1.85 29.23 2.38 40.84a121 121 0 00-2.38 12l-13.29 79.72S501 734 501.54 753.28l-1.74 11.13s-27 33.87-19.05 38.64 20.11 6.88 31.76-11.11a29.14 29.14 0 017.41-11.11 10.92 10.92 0 003.67-9.3l-.79-7.89 1.42.48.08-.27.8.27s13.29-43.7 11.81-74.11c0 0 24.65-87.67 43.32-101.46v-.58a9.22 9.22 0 011.73-.86l4 84.89-4 93.57-.96 5.63s-27 33.87-19.05 38.64 20.11 6.88 31.76-11.11a29.14 29.14 0 017.41-11.11 10.92 10.92 0 003.67-9.3l-1.24-12.38c4.59-15.73 16.67-61.15 11.61-87.45l8.2-55.92c8.27-9.29 7.16-32.95 7.16-32.95 6.5-13.58 8-67 8-67l1.64-26.37a22 22 0 013.68-.29 2.46 2.46 0 00.81-.14l.52.07.23-.48a2.47 2.47 0 00.61-.7l.49.15-.12-.63h.12zm-23.1 53.62c-.74-1.83-1.56-3.65-2.47-5.45l-.66.07a5.51 5.51 0 00-.22-.66 3.21 3.21 0 01-.18-.62 3.45 3.45 0 01.21-.66 22.78 22.78 0 001-2.72 10.31 10.31 0 001.57-5.68c.98 3.86 1.11 9.49.74 15.72zm-2.47-22.58L619.08 507q.25-.72.52-1.39l2.22 22.39zM542.52 527c-1.21 1.09-1.53 3-1.48 4.8v.59a20.05 20.05 0 00.74 5.3l-2.59 11 .38-21.12a46.72 46.72 0 004.42-7.12c-.16 3.32-.61 5.79-1.47 6.55z"
        transform="translate(-196.89 -84.52)"
        fill="url(#Departing_svg__a)"
      />
      <path
        d="M362.34 306.21c-3.86 6.14-3.21 13.94-3.19 21.2s-1.29 15.51-7.34 19.52a9.7 9.7 0 007.5.05 28.78 28.78 0 006.63-3.88 14.77 14.77 0 004.68-4.52c1.48-2.68 1.15-5.95 1.08-9a95.37 95.37 0 011.41-16.1c.48-3.27 3.65-12.26-.25-14-3.52-1.55-8.95 4.22-10.52 6.73z"
        fill="#72351c"
      />
      <path
        d="M307.77 657l-2.55 16.32s-26 32.63-18.36 37.22 19.38 6.63 30.59-10.71a28.08 28.08 0 017.14-10.71 10.52 10.52 0 003.54-9l-2.52-25.2zM386 663.54l-2.55 16.32s-26.01 32.62-18.34 37.22 19.38 6.63 30.59-10.71a28.08 28.08 0 017.14-10.71 10.52 10.52 0 003.54-9l-2.54-25.18z"
        fill="#333"
      />
      <path
        d="M345.52 466.22s-12.23 8.82-16.78 39.54l-12.8 76.8s-10.83 69.7-8.83 83.07l21.62 7.4s12.8-42.1 11.38-71.4c0 0 26-92.59 44.23-99.13l3.84 81.78-4 92.16 18.49 3.7s18.77-58.6 12.8-89.6l9.67-66s11.09-35.27-4.27-65.71z"
        fill="#4d8af0"
      />
      <g opacity={0.1}>
        <path d="M382.71 503.88l-.07-1.39c-18.21 6.54-44.23 99.13-44.23 99.13 1.31 26.94-9.41 64.69-11.14 70.6l2.32.8s12.8-42.1 11.38-71.4c0 .01 23.75-84.46 41.74-97.74zM421.76 458.83l-2.44.24c15.18 30.38 4.15 65.47 4.15 65.47l-9.67 66c5.66 29.36-10.88 83.48-12.65 89.12l2.41.48s18.77-58.6 12.8-89.6l9.67-66s11.08-35.27-4.27-65.71z" />
      </g>
      <path
        d="M328.88 406.06a2.76 2.76 0 002.14 2.68 42.77 42.77 0 0116.35 7.84c9.1 7.11-9.67-14.22-9.67-14.22l-6.26 1.42-2.56 2.28z"
        fill="#f55f44"
      />
      <path
        d="M328.88 406.06a2.76 2.76 0 002.14 2.68 42.77 42.77 0 0116.35 7.84c9.1 7.11-9.67-14.22-9.67-14.22l-6.26 1.42-2.56 2.28z"
        opacity={0.1}
      />
      <path
        d="M418.2 424.84s14.75-10.33 25.74-10.18a2.39 2.39 0 002.42-2.39s-21.61-8.48-28.16 12.57z"
        fill="#f55f44"
      />
      <path
        d="M446.36 412.27s-21.62-8.49-28.16 12.56c0 0 15.93-12.23 27-10.24"
        opacity={0.1}
      />
      <circle cx={393.17} cy={312.75} r={28.16} fill="#72351c" />
      <path
        d="M373.69 332.48s4 16.5 0 19.91-11.95 9.67-6 14.51 27.59 13.09 34.7 9.1 15.36-2.84 13.37-11.09-17.65-6.5-17.9-47.43z"
        fill="#fdb797"
      />
      <path
        d="M333.86 401.08s.85 22.76-1.71 26.74c0 0-4 21-3.13 27s2.56 45.23 2.56 45.23-3.13 34.42 13.65 31.29-2.56-39.26-2.56-39.26l.85-46.94s7.68-9.67 8.53-21-18.19-23.06-18.19-23.06z"
        opacity={0.1}
      />
      <path
        d="M333.58 401.08s.85 22.76-1.71 26.74c0 0-4 21-3.13 27s2.56 45.23 2.56 45.23-3.13 34.42 13.65 31.29-2.56-39.26-2.56-39.26l.85-46.94s7.68-9.67 8.53-21-18.19-23.06-18.19-23.06z"
        fill="#fdb797"
      />
      <path
        d="M440.82 403.64l-2.28 36.7s-1.42 51.49-7.68 64.57c0 0 1.71 36.13-15.08 35.27s2.84-39.54 2.84-39.54 9-40.16 4.36-52.93l-4.36-44.07z"
        opacity={0.1}
      />
      <path
        d="M441.11 403.64l-2.28 36.7s-1.42 51.49-7.68 64.57c0 0 1.71 36.13-15.08 35.27s2.84-39.54 2.84-39.54 9-40.16 4.36-52.93l-4.36-44.07z"
        fill="#fdb797"
      />
      <path
        d="M386.49 368.09s13.59 6.25 21-12.38l27.62 13.51a17.26 17.26 0 015.4 12.52l6 31.86s-20.2-6.83-26.45 11.95l1.7 17.93.06.18a19.31 19.31 0 01-.89 13.38 3 3 0 000 2.37c1.42 3.41-.28 10.52-8 11.38s-16.21 0-22.19 1.71-23.89-3.41-29.87 0-18.49-2.56-18.49-2.56l3.41-14.51s-2.28-7.11.57-9.67 1.14-24.75-1.42-31c0 0-10.24-9.67-16.21-8l8.53-36.7s6.26-12.23 18.49-11.95 17.92-5.12 17.92-5.12-7.1 13.11 12.82 15.1z"
        opacity={0.1}
      />
      <path
        d="M387.91 367.48c3.68 1 13.62 2.1 19.59-12.87l27.61 13.48a17.26 17.26 0 015.4 12.52l6 31.86s-20.2-6.83-26.45 11.95l1.71 17.92 1.12 3.56a10.15 10.15 0 01-1.42 9.09 3.22 3.22 0 00-.55 3.28c1.42 3.41-.28 10.52-8 11.38s-16.21 0-22.19 1.71-23.89-3.41-29.87 0-18.49-2.56-18.49-2.56l3.41-14.51s-2.28-7.11.57-9.67 1.14-24.75-1.42-31c0 0-10.24-9.67-16.21-8l8.53-36.7s6.26-12.23 18.49-11.95 17.92-5.12 17.92-5.12-6.65 12.24 10.92 14.84a28.22 28.22 0 013.33.79z"
        opacity={0.1}
      />
      <path
        d="M387.91 368c3.68 1 13.62 2.1 19.59-12.87l27.61 13.53a17.26 17.26 0 015.4 12.52l6 31.86s-20.2-6.83-26.45 11.95l1.71 17.92.06.18a19.31 19.31 0 01-.89 13.38 3 3 0 000 2.37c1.42 3.41-.28 10.52-8 11.38s-16.21 0-22.19 1.71-23.89-3.41-29.87 0-18.49-2.56-18.49-2.56l3.41-14.51s-2.28-7.11.57-9.67 1.14-24.75-1.42-31c0 0-10.24-9.67-16.21-8l8.53-36.7s6.26-12.23 18.49-11.95 17.93-5.06 17.93-5.06-6.65 12.24 10.92 14.84a28.22 28.22 0 013.3.68z"
        fill="#f55f44"
      />
      <path
        d="M398.43 318.88l-24.18 15.08a78.59 78.59 0 011.4 7.85 23.25 23.25 0 008.7 1.68c6 0 11.51-3.38 15.65-7.11a94 94 0 01-1.57-17.5z"
        opacity={0.1}
      />
      <circle cx={383.79} cy={318.73} r={23.33} fill="#fdb797" />
      <circle cx={418.2} cy={290.57} r={10.24} fill="#72351c" />
      <path
        d="M420.19 301.38a10.24 10.24 0 01-10.21-9.53v.71a10.24 10.24 0 1020.48 0v-.71a10.24 10.24 0 01-10.27 9.53z"
        fill="#72351c"
      />
      <path
        d="M414.34 311.55a10.24 10.24 0 01-8.32-11.22c-.06.23-.11.46-.16.69a10.24 10.24 0 1020.14 3.71c0-.24.08-.47.1-.7a10.24 10.24 0 01-11.76 7.52zM406.38 336.02a10.24 10.24 0 01-8.32-11.22c-.06.23-.11.46-.16.69a10.24 10.24 0 1020.14 3.71c0-.24.08-.47.1-.7a10.24 10.24 0 01-11.76 7.52zM420.19 295.98a10.24 10.24 0 01-10.21-9.5v.71a10.24 10.24 0 0020.48 0v-.71a10.24 10.24 0 01-10.27 9.5z"
        fill="#72351c"
      />
      <path
        d="M405.9 290.48a10.24 10.24 0 019.64-10.11h-.71a10.24 10.24 0 10-.22 20.48h.71a10.24 10.24 0 01-9.42-10.37z"
        fill="#72351c"
      />
      <path
        d="M416.21 387c2 5.69 0 15.36 0 15.36s-1.42 13.37.85 15.65M347.11 390.13c2 5.69 0 15.36 0 15.36s-1.42 13.37.85 15.65M346.52 445.03s2 1.14 6.83 0 7.4-.28 8.25 0M349.93 424.84s13.09.85 23.61-3.7c0 0 29 7.11 37.26 2"
        opacity={0.1}
      />
      <rect
        x={328.88}
        y={547.43}
        width={17.92}
        height={11.09}
        rx={5.55}
        ry={5.55}
        fill="#fdb797"
      />
      <path
        d="M328.88 550.28s9.17-.43 9.59-.43 8.34 1.28 8.34 1.28h-2.92zM393.46 504.2s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM393.46 506.19s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM393.46 508.18s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM393.46 510.17s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM328.88 558.15s9.17-.33 9.59-.33 8.34 1 8.34 1h-2.92zM328.88 557.16s9.17-.33 9.59-.33 8.34 1 8.34 1h-2.92zM328.88 556.16s9.17-.33 9.59-.33 8.34 1 8.34 1h-2.92zM328.88 555.16s9.17-.33 9.59-.33 8.34 1 8.34 1h-2.92zM328.88 549s9.17-.43 9.59-.43 8.34 1.28 8.34 1.28h-2.92zM328.88 547.29s9.17-.43 9.59-.43 8.34 1.28 8.34 1.28h-2.92z"
        fill="#f0e4e4"
      />
      <path
        d="M387.78 303.8c-1.9 8.17 1.07 17.19 3.26 25.72s3.39 18.56-1.26 24.76a8.14 8.14 0 007.33-1.8 28.14 28.14 0 005.27-6.2 16.55 16.55 0 003.18-6.47c.63-3.52-.66-7.28-1.66-10.86a139.88 139.88 0 01-3.44-19.25c-.52-4-.13-15.33-4.44-16.4-3.91-.97-7.47 7.18-8.24 10.5z"
        opacity={0.1}
      />
      <path
        d="M388.35 303.48c-1.9 8.17 1.07 17.19 3.26 25.72s3.39 18.56-1.26 24.76a8.14 8.14 0 007.29-1.79 28.14 28.14 0 005.27-6.2 16.55 16.55 0 003.18-6.47c.63-3.52-.66-7.28-1.66-10.86a139.88 139.88 0 01-3.44-19.25c-.52-4-.13-15.33-4.44-16.4-3.9-.94-7.44 7.18-8.2 10.49z"
        fill="#72351c"
      />
      <path
        d="M378.3 309.63c1.94 2.07 2.39 5.16 4.07 7.45 2.53 3.47 7.26 4.42 11.55 4.6a6.5 6.5 0 013.36.72c1.81 1.19 1.86 3.81 3.07 5.6 2.06 3.06 7.07 2.65 9.69.05s3.39-6.51 3.71-10.18a63.57 63.57 0 00-.13-12.29c-.5-4.62-1.7-9.53-5.21-12.58-2.54-2.2-5.93-3.1-9.19-3.93-4.63-1.18-9.53-2.37-14.12-1a25.46 25.46 0 00-6.44 3.25q-4.23 2.69-8.33 5.57c-3.08 2.16-8.79 6.44-3.21 8.76 3.69 1.5 8.21.83 11.18 3.98z"
        opacity={0.1}
      />
      <path
        d="M378.87 309.35c1.94 2.07 2.39 5.16 4.07 7.45 2.53 3.47 7.26 4.42 11.55 4.6a6.5 6.5 0 013.36.72c1.81 1.19 1.86 3.81 3.07 5.6 2.06 3.06 7.07 2.65 9.69.05s3.39-6.51 3.71-10.18a63.57 63.57 0 00-.13-12.29c-.5-4.62-1.7-9.53-5.21-12.58-2.54-2.2-5.93-3.1-9.19-3.93-4.63-1.18-9.53-2.37-14.12-1a25.46 25.46 0 00-6.44 3.25q-4.23 2.69-8.33 5.57c-3.08 2.16-8.79 6.44-3.21 8.76 3.69 1.5 8.21.8 11.18 3.98z"
        fill="#72351c"
      />
      <path
        d="M394.05 504.2s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM394.05 506.19s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM394.05 508.18s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM394.05 510.17s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM389.92 619.76s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM389.92 621.75s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM389.92 623.74s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92zM389.92 625.73s9.17-.28 9.59-.28 8.34.85 8.34.85h-2.92z"
        fill="#f0e4e4"
      />
      <path
        d="M777.47 666.08h-15.95v-64.56h5.29v-6h-59.72v6H713v64.56h-16.56c-11.46 0-20.76 9-20.76 20v98.84a20 20 0 0013.16 18.62 8.67 8.67 0 00-.09 1.2 9.31 9.31 0 0018.59.19h60.51a9.32 9.32 0 0018.56-.79 8.68 8.68 0 00-.08-1.13 20 20 0 0011.9-18.09v-98.84c-.01-11.08-9.3-20-20.76-20zM718 601.52h38.57v64.56H718z"
        transform="translate(-196.89 -84.52)"
        fill="url(#Departing_svg__b)"
      />
      <path
        fill="#333"
        d="M517.05 516.98h4.78v74.12h-4.78zM558.89 516.98h4.78v74.12h-4.78z"
      />
      <path fill="#333" d="M511.37 513.39h57.39v5.98h-57.39z" />
      <rect
        x={481.18}
        y={583.74}
        width={117.76}
        height={138.46}
        rx={36.08}
        ry={36.08}
        fill={color}
      />
      <circle cx={502.67} cy={722.01} r={8.94} fill="#333" />
      <circle cx={502.67} cy={722.01} r={3.72} fill="#f0e4e4" />
      <circle cx={578.65} cy={721.42} r={8.94} fill="#333" />
      <circle cx={578.65} cy={721.42} r={3.72} fill="#f0e4e4" />
      <path
        d="M577.38 583.93h-74.63a21.5 21.5 0 00-15.2 6.27 21.47 21.47 0 0110.42-2.72h74.63a21.57 21.57 0 0121.57 21.57v95.32a21.5 21.5 0 01-6.37 15.3 21.56 21.56 0 0011.15-18.89v-95.3a21.57 21.57 0 00-21.57-21.55z"
        opacity={0.1}
      />
      <circle cx={539.77} cy={652.67} r={20.32} opacity={0.1} />
      <path
        d="M137.21 710h-34.85s-10.89-381.13 34.85-498.74h8.71S115.43 642.48 137.21 710z"
        fill={color}
      />
      <path
        d="M113.25 191.66S84.94 270.06 98 304.91c0 0 19.6-71.87 42.47-82.76s46.83 82.76 46.83 82.76 13.07-58.8-10.89-106.72c0 0 47.91 26.13 71.87 76.23 0 0 4.36-32.67-52.27-100.18 0 0 50.09 13.07 82.76 43.56 0 0 10.89-24-56.63-63.16 0 0 8.71-28.31 61-15.25 0 0 0-37-82.76-30.49 0 0 0-24 54.45-19.6 0 0 0-30.49-63.16-19.6 0 0 13.07-19.6 21.78-24 0 0-17.42-2.18-30.49 8.71 0 0 2.18-39.2-30.49-54.45l-4.36 54.52S111.5 11.34 119.8 19.63c2.18 2.18 8.71 28.31 6.53 41.38 0 0-37-30.49-82.76 2.18 0 0 56.63 4.36 65.34 24 0 0-47.91-8.71-58.8-2.18 0 0 37 13.07 34.85 21.78 0 0-65.34 0-74 24 0 0 67.52 8.71 71.87 15.25 0 0-78.4 56.63-82.76 71.87 0 0 80.58-47.91 93.65-47.91s-58.8 69.69-54.45 87.12c-.07-.12 58.73-69.81 73.98-65.46z"
        fill={color}
      />
      <g opacity={0.5} fill={color}>
        <path d="M484.82 620.82h26.09s8.2-285.34-26.09-373.45h-6.52s22.81 322.9 6.52 373.45z" />
        <path d="M502.76 232.7s21.2 58.71 11.42 84.8c0 0-14.68-53.82-31.8-62s-35.06 62-35.06 62-9.78-44 8.15-79.91c0 0-35.88 19.57-53.82 57.08 0 0-3.26-24.46 39.14-75 0 0-37.51 9.78-62 32.62 0 0-8.15-17.94 42.4-47.29 0 0-6.52-21.2-45.66-11.42 0 0 0-27.72 62-22.83 0 0 0-17.94-40.77-14.68 0 0 0-22.83 47.29-14.68 0 0-9.78-14.68-16.31-17.94 0 0 13-1.63 22.83 6.52 0 0-1.63-29.35 22.83-40.77l3.26 40.77s27.41-32.3 21.2-26.09c-1.63 1.63-6.52 21.2-4.89 31 0 0 27.72-22.83 62 1.63 0 0-42.4 3.26-48.92 17.94 0 0 35.88-6.52 44-1.63 0 0-27.72 9.78-26.09 16.31 0 0 48.92 0 55.45 17.94 0 0-50.55 6.52-53.82 11.42 0 0 58.71 42.4 62 53.82 0 0-60.34-35.88-70.12-35.88s44 52.18 40.77 65.23c-.03-.04-44.06-52.18-55.48-48.96z" />
      </g>
      <g opacity={0.3} fill={color}>
        <path d="M624.66 474.48h-15.27s-4.77-166.92 15.26-218.43h3.82s-13.36 188.86-3.81 218.43z" />
        <path d="M614.16 247.48s-12.4 34.34-6.68 49.6c0 0 8.58-31.48 18.6-36.25s20.51 36.25 20.51 36.25 5.72-25.75-4.77-46.74c0 0 21 11.45 31.48 33.38 0 0 1.91-14.31-22.89-43.88 0 0 21.94 5.72 36.25 19.08 0 0 4.77-10.49-24.8-27.66 0 0 3.82-12.4 26.71-6.68 0 0 0-16.22-36.25-13.35 0 0 0-10.49 23.85-8.58 0 0 0-13.35-27.66-8.58 0 0 5.72-8.58 9.54-10.49 0 0-7.63-1-13.35 3.82 0 0 1-17.17-13.35-23.85l-1.91 23.85s-16-18.89-12.4-15.26c1 1 3.82 12.4 2.86 18.12 0 0-16.22-13.35-36.25 1 0 0 24.8 1.91 28.62 10.49 0 0-21-3.82-25.75-1 0 0 16.22 5.72 15.26 9.54 0 0-28.62 0-32.43 10.49 0 0 29.57 3.82 31.48 6.68 0 0-34.34 24.8-36.25 31.48 0 0 35.29-21 41-21s-25.76 30.54-23.85 38.14c0 0 25.76-30.52 32.43-28.6z" />
      </g>
    </svg>
  );
};

SvgDeparting.propTypes = {
  color: PropTypes.string
};
SvgDeparting.defaultProps = {
  color: "primary"
};
export default SvgDeparting;
