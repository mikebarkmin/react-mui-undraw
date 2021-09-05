import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWebsiteSetup = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 951.84 610.17"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="WebsiteSetup_svg__a"
          x1={572.9}
          y1={755.08}
          x2={572.9}
          y2={525.34}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="WebsiteSetup_svg__b"
          x1={438.37}
          y1={495.2}
          x2={438.37}
          y2={0}
          xlinkHref="#WebsiteSetup_svg__a"
        />
        <linearGradient
          id="WebsiteSetup_svg__c"
          x1={976.2}
          y1={709.03}
          x2={976.2}
          y2={305.16}
          xlinkHref="#WebsiteSetup_svg__a"
        />
        <linearGradient
          id="WebsiteSetup_svg__d"
          x1={687.77}
          y1={477.59}
          x2={687.77}
          y2={422.25}
          xlinkHref="#WebsiteSetup_svg__a"
        />
      </defs>
      <path
        d="M1018.36 667.17c-1.72-7.1-7.37-12.45-11.53-18.46a50 50 0 01-3.07-50.73c4-7.61 10.27-15.48 8-23.79-1.52-5.59-6.57-9.42-11.53-12.42a112.83 112.83 0 00-62.57-16.09c-26.94 1.1-53.79 11.86-80.21 6.53-25.73-5.21-47.53-18.11-74.45-19.64-20.11-1.14-40 .14-60.15-2.06a891.8 891.8 0 00-149.93-3.58A891.8 891.8 0 00423 530.51c-20.1 2.2-40 .92-60.15 2.06-27 1.52-48.75 14.44-74.49 19.64-26.43 5.34-53.27-5.43-80.21-6.53a112.83 112.83 0 00-62.57 16.09c-5 3-10 6.83-11.53 12.42-2.26 8.3 4 16.17 8 23.79a50 50 0 01-3.05 50.73c-4.16 6-9.81 11.36-11.53 18.46-3.46 14.28 10.42 26.86 24 32.53 37.05 15.49 82.11 8 116 29.57 15.19 9.68 28.48 25.22 46.48 25.8 12.17.39 23.24-6.37 33.87-12.32a324.75 324.75 0 0149.71-22.57c15-5.34 30.89-9.62 46.72-7.85C468.42 715 572.9 765.48 620 735.65c32.26-20.45 57.42-20.62 81.65-23.33 15.83-1.77 31.71 2.51 46.72 7.85a324.75 324.75 0 0149.71 22.57c10.62 5.95 21.7 12.71 33.87 12.32 18-.58 31.29-16.12 46.48-25.8 33.87-21.58 78.92-14.08 116-29.57 13.51-5.69 27.4-18.23 23.93-32.52z"
        transform="translate(-124.06 -144.92)"
        opacity={0.5}
        fill="url(#WebsiteSetup_svg__a)"
      />
      <path
        d="M889.4 521.96c-1.7-7-7.29-12.32-11.4-18.26a49.49 49.49 0 01-3-50.17c4-7.53 10.16-15.31 7.92-23.52-1.51-5.53-6.5-9.32-11.4-12.28a111.59 111.59 0 00-61.88-15.92c-26.64 1.08-53.19 11.73-79.33 6.45-25.46-5.14-47-17.92-73.67-19.43-19.89-1.12-39.6.14-59.48-2a882 882 0 00-148.28-3.54 882 882 0 00-148.28 3.54c-19.88 2.18-39.59.91-59.48 2-26.66 1.5-48.21 14.28-73.67 19.43-26.13 5.28-52.69-5.37-79.33-6.45a111.59 111.59 0 00-61.88 15.92c-4.9 3-9.89 6.75-11.4 12.28-2.24 8.21 4 16 7.92 23.52a49.49 49.49 0 01-3 50.17c-4.12 5.94-9.7 11.23-11.4 18.26-3.51 14.12 10.22 26.56 23.63 32.12 36.65 15.31 81.21 7.9 114.7 29.24 15 9.57 28.17 24.95 46 25.52 12 .39 23-6.3 33.5-12.19a321.18 321.18 0 0149.17-22.33c14.85-5.29 30.55-9.52 46.21-7.77 24 2.68 127.3 52.57 173.84 23.07 31.91-20.22 56.79-20.39 80.75-23.07 15.66-1.75 31.37 2.48 46.21 7.77a321.18 321.18 0 0149.17 22.33c10.51 5.88 21.46 12.57 33.5 12.19 17.8-.57 30.95-15.94 46-25.52 33.5-21.34 78.06-13.93 114.7-29.24 13.36-5.56 27.09-18 23.66-32.12z"
        fill={color}
      />
      <path
        d="M34.94 219.22c2.86-1 5.9-1.95 8.89-1.43 5 .87 8.51 5.61 10 10.48s1.44 10 2.39 15 3.22 10.17 7.7 12.56 9.77 1.45 14.74.87a93.08 93.08 0 0119.63-.18c5.48.53 11.92 2.38 13.53 7.65 1.32 4.3-1.3 8.69-3 12.84-3.26 7.76-3.52 16.93.21 24.47s11.29 13.16 14.45 21.12a10.44 10.44 0 01.76 6.37 11.62 11.62 0 01-2.26 4.1c-2.48 3.19-5.44 6-7.7 9.36-4.71 7-6 15.7-6.54 24.11a175.8 175.8 0 00.14 24.83c-6.14-2-12.92-.22-19.25-1.53-13.47-2.78-21.88-18.72-35.6-19.69-6.49-.46-13.47 2.6-19.26-.37a14.54 14.54 0 01-6.16-7 24.84 24.84 0 01-1.58-16.7c1-3.86 3-7.64 2.61-11.61-.33-3.4-2.37-6.4-4.71-8.89-6.67-7.08-16.35-11.41-21.14-19.88a22.65 22.65 0 012.69-25.49 66.9 66.9 0 004.85-5.27c2.3-3.24 3-7.33 3.31-11.3.66-9.51-1-19.58 2.11-28.82 2.79-8.36 11.31-12.8 19.19-15.6z"
        fill={color}
        opacity={0.6}
      />
      <path
        d="M35.08 219.5s27.31 151.67 62.77 169.76M111.06 261.48s-29.25 4-58.47 34.05M57.73 313.15s-22.51-22-57.68-18.27M123.94 322.72s-41.08 3.49-56.29 19.26M73.8 356.67s-23-4-44.23 9.55"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        opacity={0.6}
      />
      <path
        d="M880.43 100.08c-4.59-1.63-9.46-3.12-14.25-2.29-8 1.4-13.64 9-16 16.79s-2.31 16.1-3.83 24.1-5.16 16.29-12.34 20.13-15.66 2.32-23.63 1.4a149.21 149.21 0 00-31.44-.33c-8.79.85-19.1 3.82-21.68 12.26-2.11 6.9 2.08 13.92 4.88 20.57 5.23 12.43 5.65 27.14-.34 39.23-6.09 12.3-18.1 21.1-23.16 33.85-1.28 3.24-2.09 6.83-1.22 10.2a18.63 18.63 0 003.63 6.58c4 5.12 8.72 9.63 12.34 15 7.55 11.2 9.6 25.16 10.48 38.64a281.8 281.8 0 01-.22 39.79c9.84-3.24 20.72-.35 30.86-2.44 21.59-4.45 35.07-30 57.06-31.56 10.4-.73 21.59 4.16 30.87-.6 4.52-2.32 7.73-6.65 9.88-11.26a39.82 39.82 0 002.39-26.7c-1.63-6.19-4.8-12.24-4.18-18.61.53-5.45 3.79-10.26 7.55-14.24 10.69-11.35 26.21-18.29 33.89-31.86 7.2-12.72 5.38-29.93-4.31-40.86-2.54-2.87-5.56-5.33-7.78-8.45-3.69-5.19-4.87-11.75-5.31-18.11-1.05-15.25 1.54-31.38-3.39-46.19-4.5-13.48-18.15-20.61-30.75-25.04z"
        fill={color}
        opacity={0.6}
      />
      <path
        d="M880.17 100.48s-43.77 243.11-100.62 272.1M758.38 167.77s46.88 6.44 93.72 54.59M843.86 250.59s36.09-35.29 92.45-29.29M737.79 265.93s65.84 5.59 90.22 30.88M818.11 320.35s36.89-6.46 70.9 15.3"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        opacity={0.6}
      />
      <path
        fill="url(#WebsiteSetup_svg__b)"
        d="M74.91 0v495.2h726.93V0H74.91z"
      />
      <path fill="#fff" d="M85.69 22.47h708.45v463.77H85.69z" />
      <path fill="#eee" d="M85.69.41h708.45v34.12H85.69z" />
      <circle cx={112.65} cy={16.95} r={8.27} fill="#ff5252" />
      <circle cx={135.4} cy={16.95} r={8.27} fill="#ff0" />
      <circle cx={158.15} cy={16.95} r={8.27} fill="#69f0ae" />
      <path
        fill={color}
        opacity={0.5}
        d="M112.84 89.18h264v11h-264zM112.84 111.18h264v11h-264zM112.84 133.18h264v11h-264zM203.84 155.18h173v11h-173zM112.84 177.18h139v11h-139zM187.84 199.18h107v11h-107zM411.84 166.18h311v179h-311z"
      />
      <path fill="#eee" d="M448.84 183.18h311v179h-311z" />
      <path
        d="M1070.88 493.24a4.71 4.71 0 001-2.89v-.08c0-.02.06-.21.09-.31v-.13a2.88 2.88 0 000-.29v-.12a2 2 0 000-.36c-.59-4-24.36-30.06-30.3-61.85a56.21 56.21 0 00-2.93-10.13 14 14 0 00-.32-4.9c-1-4.07-3-8.2-2-12.26a9.9 9.9 0 01.55-1.55 60.59 60.59 0 003.43-5.69 13.74 13.74 0 001-2c3.65-9.62-7.65-19.55-5.57-29.59.9-4.35 4.27-8.15 4.18-12.58-.11-5.07-4.77-9-9.61-10.88s-10.17-2.42-14.92-4.52c-10.41-4.61-16.11-15.74-25.61-21.93-12.07-7.85-27.82-6.45-42.29-4.42a2.93 2.93 0 00-2.22 1.64h-.14c-.11.32-.24.63-.38.94-2 3.41-5.37 6-8.7 8.39-4.06 2.86-8.41 5.68-10.89 9.92-.37.63-.68 1.23-.95 1.81-5.4 9.63 1.09 13.79 9 16.1a24.9 24.9 0 00-.36 4.17c0 14 11.71 25.43 26.14 25.43a27.07 27.07 0 003.41-.22l.84.55h.19c2.68 1.93 5 4.35 6 7.23l-8.38 6.4s.34.88.84 2.28l-32.94 15.18c-12.48.58-32.68-38.73-32.68-38.73s-3-22.54-13.67-26.59c-3.22-1.22-4.5 1.33-4.72 5.49-4.77 5 3.24 33.08 3.24 33.08l25.55 45.09c2.38 4.62 3 7.51 14.26 9.25 9.27 1.42 38.15-8.84 48.2-12.56l.47 4a23.43 23.43 0 00-1.52 9.57c0 7.37 3.29 18.09 19.35 26.63 0 0 16.58 21.43 14.74 41.66 0 0 .8.84 2.08 1.94-.18 5.7-1 12.73-3.87 15.47a1.53 1.53 0 00-.45 1.42 1.45 1.45 0 00.7 1.55l-20.93 36.65c-.78 1-1.57 2-2.38 3a107.29 107.29 0 01-12.89 13.75c-3.49 3.11-7.12 6.51-7.84 7.78-1.11 2-3.9 8.45-2.72 13.78a72 72 0 011.86 19.74l-2.71 47.41a123.66 123.66 0 01-3.75 15.65h-.41s-10.1 12.14-26.14 15-15.45 11-10.7 12.14 62.39-1.16 62.39-1.16 2.18-4.25 1.58-8.13c18.4-1.77 43.89-4.77 43.89-4.77s3.49-8.39-1.58-12.05a11.84 11.84 0 01-4.06-5.77c-.3-1.28-.63-2.74-.95-4.27-.08-.75-.08-1.21-.08-1.21h-.17c-.89-4.47-1.6-9.26-1.19-11.77 1.49-6.65 5.35-45.09-4.16-56.07-4.32-5-3.73-10.68-1.81-15.42 11.41-7.47 27.37-23.54 36.6-33.26.52.43 1 .86 1.45 1.29l.3.29s31.41-15.55 31.54-43a42.31 42.31 0 00-4.98-20.21zM970.27 686.88a16.14 16.14 0 01.11-3l-1-.11c.58-4.36 2-9.24 5.18-12.61A107.1 107.1 0 00986 639.48l5.77 21.83s.58 4.52.74 9.3h-.1s-8.05 11.49-22.14 16.27z"
        transform="translate(-124.06 -144.92)"
        opacity={0.5}
        fill="url(#WebsiteSetup_svg__c)"
      />
      <path
        d="M872.29 259.22s-14.11 5.08-22 13.55c0 0-38.39 15.24-49.12 13.55s-11.29-4.52-13.55-9l-24.28-44s-10.16-36.7 0-32.75 13 26 13 26 19.2 38.39 31.05 37.83l32.15-15.32s7.34-10.73 10.73-10.16 22.02 20.3 22.02 20.3z"
        fill="#fdb797"
      />
      <path
        d="M872.29 259.22s-14.11 5.08-22 13.55c0 0-38.39 15.24-49.12 13.55s-11.29-4.52-13.55-9l-24.28-44s-10.16-36.7 0-32.75 13 26 13 26 19.2 38.39 31.05 37.83l32.15-15.32s7.34-10.73 10.73-10.16 22.02 20.3 22.02 20.3z"
        opacity={0.05}
      />
      <path
        d="M849.11 238.41l-11.26 8.84s5.63 14.73 4.22 19.89 22.52-8.1 22.52-8.1l-9.85-22.1z"
        fill="#f9ce43"
      />
      <path
        d="M849.11 238.41l-11.26 8.84s5.63 14.73 4.22 19.89 22.52-8.1 22.52-8.1l-9.85-22.1z"
        opacity={0.05}
      />
      <path
        d="M829.67 228.57s25.12 8.19 13.55 22.58l36.13-17.5s-15.24 1.13-24.84-22zM877.09 375.93l-31.05 55.89 20.9 81.26s2.26 18.07-1.13 19.76h23.71s-4.57-16-3.39-21.45c1.41-6.49 5.08-44-4-54.76s4.52-24.84 4.52-24.84l27.1-42.91z"
        fill="#fdb797"
      />
      <path
        d="M877.09 375.93l-31.05 55.89 20.9 81.26s2.26 18.07-1.13 19.76h23.71s-4.23-16.09-3.39-21.45 5.08-44-4-54.76 4.52-24.84 4.52-24.84l27.1-42.91z"
        opacity={0.05}
      />
      <path
        d="M867.54 522.2s-8.6 12.67-23.6 16.69-13.78 11.86-9.19 12.62 59-5.83 59-5.83 3.31-8.19-1.5-11.77-4.84-11-4.84-11z"
        fill="#0d134d"
      />
      <path
        d="M878.79 353.34s1.34 18.36-3.55 23.18a1.48 1.48 0 00.3 2.38l14.54 7.75 13-24.84z"
        opacity={0.1}
      />
      <path
        d="M878.79 352.78s1.34 18.36-3.55 23.18a1.48 1.48 0 00.3 2.38l14.54 7.75 13-24.84z"
        fill="#e23553"
      />
      <path
        d="M878.79 353.78s1.34 18.36-3.55 23.18a1.48 1.48 0 00.3 2.38l14.54 7.75 13-24.84z"
        opacity={0.1}
      />
      <path
        d="M879.35 388.91s-8.39 5.6-26 28.65a103.69 103.69 0 01-12.25 13.43c-3.31 3-6.76 6.36-7.45 7.6-1.06 1.91-3.71 8.26-2.58 13.46a72.26 72.26 0 011.77 19.28l-2.57 46.31s-3.39 20.89-7.9 23.15l23.15 4s-1.69-14.68 5.08-22c0 0 15.81-27.1 11.86-57.59 0 0-1.69-13.55 13.55-20.89s46.3-42.91 46.3-42.91z"
        fill="#fdb797"
      />
      <path
        d="M826.28 532.88s-9.6 11.86-24.84 14.68-14.68 10.73-10.16 11.86 59.28-1.13 59.28-1.13 4-7.9-.56-11.86-3.39-11.29-3.39-11.29z"
        fill="#0d134d"
      />
      <path
        d="M893.47 358.99s-6.89 23.14-15.62 29.88a1.12 1.12 0 00.29 1.95c7.22 2.63 30.42 11.49 38.48 19.55l.28.28s48.27-24.56 22.3-66.34z"
        opacity={0.1}
      />
      <path
        d="M893.47 358.43s-6.89 23.14-15.62 29.88a1.12 1.12 0 00.29 1.95c7.22 2.63 30.42 11.49 38.48 19.55l.28.28s48.27-24.56 22.3-66.34z"
        fill="#e23553"
      />
      <path
        d="M853.83 243.69a44.17 44.17 0 01-11.64 5.56l3.88 34.53s-9.07 20.3 16.87 34.48c0 0 15.75 20.93 14 40.69 0 0 8.45 9.06 14.1 6.81s.56 1.13 1.69.57 3.38 4.53 20.89.05 30-16.29 29.41-20.25-23.07-29.42-28.64-60.49-38.82-53.17-38.82-53.17-1.1.61-3 1.42a131.47 131.47 0 00-18.74 9.8z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M877.41 389.08a1.1 1.1 0 00.73 1.13c6.22 2.27 24.3 9.16 34.34 16.18-8.69-7.02-27.18-14.31-35.07-17.31zM939.2 343.75l-1 .34c22.19 38.79-19.6 62.22-23.25 64.17.63.52 1.2 1 1.72 1.55l.28.28s48.22-24.56 22.25-66.34z" />
      </g>
      <path
        d="M913.79 365.2c-17.5 4.52-19.76-.56-20.89 0s4-2.82-1.69-.56-14.11-6.78-14.11-6.78c.08-1 .12-1.93.12-2.9.06-18.88-14.28-37.75-14.28-37.75-26-14.11-16.94-34.44-16.94-34.44l-1.06-9.26-2.91-25.26a44.12 44.12 0 0011.62-5.58 132.18 132.18 0 0118.71-9.84c1.91-.82 3-1.43 3-1.43s33.31 22 39 53.07 28.23 56.46 28.79 60.41-11.86 15.8-29.36 20.32z"
        fill="#f9ce43"
      />
      <path
        d="M855.07 212.2l-24.84 16.94a42.26 42.26 0 019.69 4.83c8.46-1.19 13.64-7.25 17.13-14.71-1.36-2.18-.76-4.13-1.98-7.06z"
        opacity={0.1}
      />
      <circle cx={835.88} cy={208.82} r={24.84} fill="#fdb797" />
      <path
        d="M917.74 362.38c-17.5 4.52-19.76-.56-20.89 0s4-2.82-1.69-.56-14.11-6.78-14.11-6.78c.08-1 .12-1.93.12-2.9.07-18.85-14.24-37.75-14.24-37.75-26-14.11-16.94-34.44-16.94-34.44l-1.05-9.27-2.75-23.91a27.34 27.34 0 01-4.11 1.47l2.86 25.27 1.07 9.26s-9 20.33 16.94 34.44c0 0 14.31 18.9 14.24 37.75 0 1 0 1.93-.12 2.9 0 0 8.47 9 14.11 6.78s.56 1.13 1.69.56 3.39 4.52 20.89 0a60.63 60.63 0 0021.87-10.71 61.55 61.55 0 01-17.89 7.89z"
        opacity={0.1}
      />
      <path
        d="M870.88 264.14s-14.11 5.08-22 13.55c0 0-38.39 15.24-49.12 13.55s-11.29-4.52-13.55-9l-24.28-44s-10.16-36.7 0-32.75 13 26 13 26 19.2 38.39 31.05 37.83l32.16-15.34s7.34-10.73 10.73-10.16 22.01 20.32 22.01 20.32z"
        fill="#fdb797"
      />
      <path
        d="M851.82 243.47s-11.71-1.07-15.1 13.61 26 23.71 26 23.71l15.81-22z"
        opacity={0.1}
      />
      <path
        d="M852.39 243.47s-11.71-1.07-15.1 13.61 26 23.71 26 23.71l15.81-22z"
        fill="#f9ce43"
      />
      <g opacity={0.1}>
        <path d="M847.61 246.08a30.31 30.31 0 01-5.54 2.14l.1.85a58.37 58.37 0 005.44-2.99zM943.15 344.88c-.56-4-23.15-29.36-28.79-60.41s-39-53.07-39-53.07-1.1.61-3 1.43a135.42 135.42 0 00-14.78 7.45q4.75-2.5 9.7-4.62c1.91-.82 3-1.43 3-1.43s33.31 22 39 53.07 28.23 56.46 28.79 60.41c.36 2.49-4.45 8.12-12.44 13.08 10.97-5.45 17.95-12.93 17.52-15.91z" />
      </g>
      <path
        d="M859.1 243.7s14.6 7.23 17.35 21.13"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <path
        d="M823.4 207.42c2.33.52 4.93 1.25 6.08 3.34.83 1.52.68 3.43 1.49 5 2.08 3.92 8.18 2.57 12 4.87 7 4.22 2.43 17.38 9.4 21.62 1.31.8 2.86 1.12 4.21 1.85 5.89 3.22 5.06 11.74 4 18.37s.2 15.7 6.85 16.64c3.66.51 7.77-1.91 10.85.12 1.61 1.06 2.34 3 3.69 4.41a6.72 6.72 0 007.22 1.49c2.26-.94 3.89-3.09 6.24-3.78 3.78-1.11 8 1.95 11.64.54s4.47-6.67 3.53-10.64-2.86-8-1.86-12c.83-3.3 3.53-5.82 4.71-9 3.46-9.39-7.27-19.09-5.29-28.9.86-4.25 4.06-8 4-12.29-.1-5-4.53-8.79-9.14-10.63s-9.67-2.36-14.18-4.41c-9.89-4.5-15.3-15.38-24.34-21.42a34.13 34.13 0 00-13.39-5.14 43.9 43.9 0 00-34.94 9.5c-.89.72-1.8 1.4-2.72 2.06-3.86 2.79-8 5.54-10.35 9.68-8.58 14.94 11.13 16.65 20.3 18.72z"
        opacity={0.1}
      />
      <path
        d="M824.1 206.01c2.33.52 4.93 1.25 6.08 3.34.83 1.52.68 3.43 1.49 5 2.08 3.92 8.18 2.57 12 4.87 7 4.22 2.43 17.38 9.4 21.62 1.31.8 2.86 1.12 4.21 1.85 5.89 3.22 5.06 11.74 4 18.37s.2 15.7 6.85 16.64c3.66.51 7.77-1.91 10.85.12 1.61 1.06 2.34 3 3.69 4.41a6.72 6.72 0 007.22 1.49c2.26-.94 3.89-3.09 6.24-3.78 3.78-1.11 8 1.95 11.64.54s4.47-6.67 3.53-10.64-2.86-8-1.86-12c.83-3.3 3.53-5.82 4.71-9 3.46-9.39-7.27-19.09-5.29-28.9.86-4.25 4.06-8 4-12.29-.1-5-4.53-8.79-9.14-10.63s-9.67-2.36-14.18-4.41c-9.89-4.5-15.3-15.38-24.34-21.42a33.5 33.5 0 00-12.1-4.9 43.93 43.93 0 00-36.26 9.28c-.88.71-1.79 1.39-2.69 2-3.86 2.79-8 5.54-10.35 9.68-8.58 14.98 11.14 16.7 20.3 18.76zM622.84 362.18h-174v-32.79c42.51-19.87 107.92-31.03 174 32.79z"
        fill={color}
      />
      <path
        d="M757.84 357.49v4.69h-217v-1s106.78-103.97 217-3.69z"
        opacity={0.1}
      />
      <path
        d="M759.84 357.49v4.69h-217v-1s106.78-103.97 217-3.69z"
        fill={color}
      />
      <circle cx={484.84} cy={215.18} r={16} fill={color} />
      <path
        d="M621.06 203.08c-1.83 0-3.87 0-5.26.11a6.4 6.4 0 00-1.82.37l-9.41 3.38c7.6.19 15.53.13 23.32.07l43.68-.34c4.46 0 9.14-.08 12.85-.34 2.49-.18 4.32-.44 6.62-.64 8.27-.74 20.32-.6 31.09-.56s23.77-.24 27.56-1.32h-23.12c-2.49 0-5.11 0-7.31-.12-2.57-.15-4.14-.43-6.4-.63-3.74-.32-8.9-.36-13.7-.38-26.35-.11-52.37.51-78.1.4zM646.94 222.46h-1.14a1.39 1.39 0 00-.4.08l-2 .73h5.05l9.46-.07c1 0 2 0 2.78-.07.54 0 .94-.1 1.43-.14 1.79-.16 4.4-.13 6.74-.12a36.72 36.72 0 006-.29h-6.58c-.47 0-.9-.09-1.39-.14-.81-.07-1.93-.08-3-.08-5.7 0-11.34.13-16.95.1zM579.94 250.46h-1.14a1.39 1.39 0 00-.4.08l-2 .73h5.05l9.46-.07c1 0 2 0 2.78-.07.54 0 .94-.1 1.43-.14 1.79-.16 4.4-.13 6.74-.12a36.72 36.72 0 006-.29h-6.58c-.47 0-.9-.09-1.39-.14-.81-.07-1.93-.08-3-.08-5.7 0-11.34.13-16.95.1z"
        fill="#f4f4f4"
      />
      <path
        d="M542.35 353.31h-7.52s-2.35-82.24 7.52-107.62h1.88s-6.58 93.05-1.88 107.62z"
        fill={color}
      />
      <path
        d="M537.18 241.46s-6.11 16.92-3.29 24.44c0 0 4.23-15.51 9.16-17.86s10.1 17.86 10.1 17.86 2.82-12.69-2.35-23c0 0 10.34 5.64 15.51 16.45 0 0 .94-7-11.28-21.62 0 0 10.81 2.82 17.86 9.4 0 0 2.35-5.17-12.22-13.63 0 0 1.88-6.11 13.16-3.29 0 0 0-8-17.86-6.58 0 0 0-5.17 11.75-4.23 0 0 0-6.58-13.63-4.23 0 0 2.82-4.23 4.7-5.17a9.45 9.45 0 00-6.58 1.88s.47-8.46-6.58-11.75l-.94 11.75s-7.9-9.31-6.11-7.52c.47.47 1.88 6.11 1.41 8.93 0 0-8-6.58-17.86.47 0 0 12.22.94 14.1 5.17 0 0-10.34-1.88-12.69-.47 0 0 8 2.82 7.52 4.7 0 0-14.1 0-16 5.17 0 0 14.57 1.88 15.51 3.29 0 0-16.92 12.22-17.86 15.51 0 0 17.39-10.34 20.21-10.34s-12.69 15-11.75 18.8c.04-.03 12.77-15.07 16.01-14.13zM635.1 350.23h5.74s1.8-62.83-5.74-82.22h-1.44s5.04 71.07 1.44 82.22z"
        fill={color}
      />
      <path
        d="M639.05 264.78s4.67 12.93 2.51 18.67c0 0-3.23-11.85-7-13.64s-7.72 13.64-7.72 13.64-2.15-9.69 1.8-17.59a31.21 31.21 0 00-11.85 12.57s-.72-5.39 8.62-16.52c0 0-8.26 2.15-13.64 7.18 0 0-1.8-3.95 9.34-10.41 0 0-1.44-4.67-10.05-2.51 0 0 0-6.1 13.64-5 0 0 0-3.95-9-3.23 0 0 0-5 10.41-3.23 0 0-2.15-3.23-3.59-3.95a7.22 7.22 0 015 1.44s-.36-6.46 5-9l.72 9s6-7.11 4.67-5.74a15.75 15.75 0 00-1.08 6.82s6.1-5 13.64.36c0 0-9.34.72-10.77 3.95 0 0 7.9-1.44 9.69-.36 0 0-6.1 2.15-5.74 3.59 0 0 10.77 0 12.21 3.95 0 0-11.13 1.44-11.85 2.51 0 0 12.93 9.34 13.64 11.85 0 0-13.28-7.9-15.44-7.9s9.69 11.49 9 14.36c.05-.04-9.64-11.51-12.16-10.81zM703.83 337.95h3.56s1.11-38.91-3.56-50.92h-.89s3.11 44.05.89 50.92z"
        fill={color}
      />
      <path
        d="M706.28 285.03s2.89 8 1.56 11.56c0 0-2-7.34-4.34-8.45s-4.78 8.45-4.78 8.45-1.33-6 1.11-10.9a19.33 19.33 0 00-7.34 7.78s-.44-3.34 5.34-10.23a22.56 22.56 0 00-8.45 4.45s-1.11-2.45 5.78-6.45c0 0-.89-2.89-6.23-1.56 0 0 0-3.78 8.45-3.11 0 0 0-2.45-5.56-2 0 0 0-3.11 6.45-2a9.77 9.77 0 00-2.22-2.45 4.47 4.47 0 013.11.89s-.22-4 3.11-5.56l.44 5.56s3.74-4.4 2.89-3.56a9.75 9.75 0 00-.67 4.22 6.93 6.93 0 018.45.22s-5.78.44-6.67 2.45c0 0 4.89-.89 6-.22 0 0-3.78 1.33-3.56 2.22 0 0 6.67 0 7.56 2.45 0 0-6.89.89-7.34 1.56 0 0 8 5.78 8.45 7.34 0 0-8.23-4.89-9.56-4.89s6 7.12 5.56 8.89c.02.01-5.99-7.11-7.54-6.66z"
        fill={color}
      />
      <path
        d="M697.89 438.87l-.75-4a2.17 2.17 0 00-.68-1.57l-3.47-1.7a3.93 3.93 0 01-.62-1l.06-.09a2.08 2.08 0 00.4-.81 1.38 1.38 0 000-.23h.05a1.29 1.29 0 001.43-1v-.09a1.29 1.29 0 01-1.17 1 3.54 3.54 0 001.57-2.94v-.15a1.28 1.28 0 00.59-.86v-.09a1.28 1.28 0 01-.61.8 3.52 3.52 0 00-.22-1h.09a1.29 1.29 0 001.29-1.29v-.09a1.29 1.29 0 01-1.28 1.2h-.16v-.06a2.11 2.11 0 001.48-1.71v-.09a1.28 1.28 0 01-.26.69 1.29 1.29 0 00-2.54-.38l-.23-.13a1.29 1.29 0 011.16-.94h-.09a1.29 1.29 0 00-1.23.87 3.54 3.54 0 00-4.46 1.28c-.27.2-.62.49-.61.74a2.45 2.45 0 00-.31.38 4.9 4.9 0 00-.4 2.67 2.83 2.83 0 01-.92 2.45 1.22 1.22 0 00.94 0 3.62 3.62 0 00.83-.49 1.86 1.86 0 00.59-.57v-.05a2.92 2.92 0 00.53.28c.07.6.09 1.29-.18 1.52l.05-.11a3.25 3.25 0 01-2.25.64 2.81 2.81 0 00-2.33 1.5l-1.09 4.55v.16a.35.35 0 00.26.25l.34.09a7.06 7.06 0 01-.23 2.31 19.73 19.73 0 00-.39 3.4c.08.57.22 3.54.29 4.95a14.66 14.66 0 00-.29 1.46l-1.61 9.66s-1.2 7.73-1.14 10.07l-.21 1.35s-3.27 4.1-2.31 4.68 2.44.83 3.85-1.35a3.53 3.53 0 01.9-1.35 1.32 1.32 0 00.45-1.13l-.1-1 .17.06h.1s1.61-5.29 1.43-9c0 0 3-10.62 5.25-12.29v-.07l.21-.1.48 10.29-.49 11.34-.11.68s-3.27 4.1-2.31 4.68 2.44.83 3.85-1.35a3.53 3.53 0 01.9-1.35 1.32 1.32 0 00.45-1.13l-.15-1.5c.56-1.91 2-7.41 1.41-10.6l1-6.78c1-1.13.87-4 .87-4 .79-1.65 1-8.12 1-8.12l.2-3.2a2.66 2.66 0 01.45 0h.16v-.06a.3.3 0 00.07-.09h.06v-.08zm-2.8 6.5c-.09-.22-.19-.44-.3-.66h-.08v-.08a.39.39 0 010-.08v-.08a2.76 2.76 0 00.12-.33 1.25 1.25 0 00.19-.69 6.54 6.54 0 01.07 1.92zm-.3-2.74l-.2-2.14.06-.17.27 2.72zm-9.48.29a.75.75 0 00-.18.58v.07a2.43 2.43 0 00.09.64l-.31 1.34v-2.56a5.66 5.66 0 00.54-.86 1.4 1.4 0 01-.14.79z"
        transform="translate(-124.06 -144.92)"
        fill="url(#WebsiteSetup_svg__d)"
      />
      <path
        d="M563.27 281.48a4.72 4.72 0 00-.39 2.57 2.73 2.73 0 01-.89 2.36 1.18 1.18 0 00.91 0 3.49 3.49 0 00.8-.47 1.79 1.79 0 00.57-.55 2.12 2.12 0 00.13-1.09 11.56 11.56 0 01.17-1.95c.06-.4.44-1.49 0-1.7s-1.11.53-1.3.83z"
        fill="#72351c"
      />
      <path
        d="M556.66 323.99l-.31 2s-3.15 4-2.22 4.51 2.35.8 3.71-1.3a3.4 3.4 0 01.86-1.3 1.27 1.27 0 00.43-1.09l-.31-3.05zM566.14 324.78l-.31 2s-3.15 4-2.22 4.51 2.35.8 3.71-1.3a3.4 3.4 0 01.86-1.3 1.27 1.27 0 00.43-1.09l-.31-3.05z"
        fill="#333"
      />
      <path
        d="M561.23 300.87s-1.48 1.07-2 4.79l-1.55 9.31s-1.31 8.44-1.07 10.06l2.62.9s1.55-5.1 1.38-8.65c0 0 3.15-11.22 5.36-12l.47 9.91-.5 11.15 2.24.45s2.27-7.1 1.55-10.86l1.17-8s1.34-4.27-.52-8z"
        fill="#4d8af0"
      />
      <g opacity={0.1}>
        <path d="M565.74 305.43v-.17c-2.21.79-5.36 12-5.36 12a31.51 31.51 0 01-1.35 8.56l.28.1s1.55-5.1 1.38-8.65c-.01.01 2.87-10.19 5.05-11.84zM570.47 299.98h-.3a11.84 11.84 0 01.5 7.93l-1.17 8c.69 3.56-1.32 10.11-1.53 10.8l.29.06s2.27-7.1 1.55-10.86l1.17-8s1.35-4.25-.51-7.93z" />
      </g>
      <path
        d="M559.22 293.58a.33.33 0 00.26.33 5.18 5.18 0 012 1c1.1.86-1.17-1.72-1.17-1.72l-.76.17-.31.28z"
        fill="#f55f44"
      />
      <path
        d="M559.22 293.58a.33.33 0 00.26.33 5.18 5.18 0 012 1c1.1.86-1.17-1.72-1.17-1.72l-.76.17-.31.28z"
        opacity={0.1}
      />
      <path
        d="M570.04 295.86a7 7 0 013.12-1.23.29.29 0 00.29-.29s-2.62-1.03-3.41 1.52z"
        fill="#f55f44"
      />
      <path
        d="M573.45 294.33s-2.62-1-3.41 1.52c0 0 1.93-1.48 3.27-1.24"
        opacity={0.1}
      />
      <circle cx={567} cy={282.28} r={3.41} fill="#72351c" />
      <path
        d="M564.65 284.67s.48 2 0 2.41-1.45 1.17-.72 1.76 3.34 1.59 4.21 1.1 1.86-.34 1.62-1.34-2.14-.79-2.17-5.76z"
        fill="#fdb797"
      />
      <path
        d="M559.82 292.98a12.48 12.48 0 01-.21 3.24 19 19 0 00-.38 3.27c.1.72.31 5.48.31 5.48s-.38 4.17 1.65 3.79-.31-4.76-.31-4.76l.1-5.69a5.31 5.31 0 001-2.55c.15-1.37-2.16-2.78-2.16-2.78z"
        opacity={0.1}
      />
      <path
        d="M559.79 292.98a12.48 12.48 0 01-.21 3.24 19 19 0 00-.38 3.27c.1.72.31 5.48.31 5.48s-.38 4.17 1.65 3.79-.31-4.76-.31-4.76l.1-5.69a5.31 5.31 0 001-2.55c.14-1.37-2.16-2.78-2.16-2.78z"
        fill="#fdb797"
      />
      <path
        d="M572.78 293.29l-.28 4.45s-.17 6.24-.93 7.82c0 0 .21 4.38-1.83 4.27s.34-4.79.34-4.79 1.09-4.87.53-6.41l-.53-5.34z"
        opacity={0.1}
      />
      <path
        d="M572.81 293.29l-.28 4.45s-.17 6.24-.93 7.82c0 0 .21 4.38-1.83 4.27s.34-4.79.34-4.79 1.09-4.87.53-6.41l-.53-5.34z"
        fill="#fdb797"
      />
      <path
        d="M566.2 288.98s1.65.76 2.55-1.5l3.35 1.64a2.09 2.09 0 01.65 1.52l.72 3.86s-2.45-.83-3.21 1.45l.21 2.17a2.34 2.34 0 01-.11 1.62.36.36 0 000 .29 1.06 1.06 0 01-1 1.38 20.33 20.33 0 00-2.69.21c-.72.21-2.9-.41-3.62 0s-2.24-.31-2.24-.31l.41-1.76s-.28-.86.07-1.17.14-3-.17-3.76c0 0-1.24-1.17-2-1l1-4.45a2.7 2.7 0 012.24-1.45 3.14 3.14 0 002.17-.62s-.75 1.64 1.67 1.88z"
        opacity={0.1}
      />
      <path
        d="M566.37 288.9c.45.12 1.65.25 2.37-1.56l3.35 1.64a2.09 2.09 0 01.65 1.52l.72 3.86s-2.45-.83-3.21 1.45l.21 2.17.14.43a1.23 1.23 0 01-.17 1.1.39.39 0 00-.07.4 1.06 1.06 0 01-1 1.38 20.33 20.33 0 00-2.69.21c-.72.21-2.9-.41-3.62 0s-2.24-.31-2.24-.31l.41-1.76s-.28-.86.07-1.17.14-3-.17-3.76c0 0-1.24-1.17-2-1l1-4.45a2.7 2.7 0 012.24-1.45 3.14 3.14 0 002.17-.62s-.81 1.48 1.32 1.8z"
        opacity={0.1}
      />
      <path
        d="M566.37 288.97c.45.12 1.65.25 2.37-1.56l3.35 1.64a2.09 2.09 0 01.65 1.52l.72 3.86s-2.45-.83-3.21 1.45l.21 2.17a2.34 2.34 0 01-.11 1.62.36.36 0 000 .29 1.06 1.06 0 01-1 1.38 20.33 20.33 0 00-2.69.21c-.72.21-2.9-.41-3.62 0s-2.24-.31-2.24-.31l.41-1.76s-.28-.86.07-1.17.14-3-.17-3.76c0 0-1.24-1.17-2-1l1-4.45a2.7 2.7 0 012.24-1.45 3.14 3.14 0 002.17-.62s-.81 1.48 1.32 1.8z"
        fill="#f55f44"
      />
      <path
        d="M567.64 283.02l-2.93 1.83a9.52 9.52 0 01.17 1 2.82 2.82 0 001.05.2 3 3 0 001.9-.86 11.39 11.39 0 01-.19-2.17z"
        opacity={0.1}
      />
      <circle cx={565.87} cy={283} r={2.83} fill="#fdb797" />
      <circle cx={570.04} cy={279.59} r={1.24} fill="#72351c" />
      <path
        d="M570.28 280.9a1.24 1.24 0 01-1.24-1.15v.09a1.24 1.24 0 102.48 0v-.09a1.24 1.24 0 01-1.24 1.15z"
        fill="#72351c"
      />
      <path
        d="M569.57 282.08a1.24 1.24 0 01-1-1.36v.08a1.24 1.24 0 102.44.45v-.09a1.24 1.24 0 01-1.44.92zM568.61 285.08a1.24 1.24 0 01-1-1.36v.08a1.24 1.24 0 002.44.45v-.09a1.24 1.24 0 01-1.44.92zM570.28 280.24a1.24 1.24 0 01-1.24-1.16v.09a1.24 1.24 0 102.48 0v-.09a1.24 1.24 0 01-1.24 1.16z"
        fill="#72351c"
      />
      <path
        d="M568.55 279.57a1.24 1.24 0 011.17-1.23h-.09a1.24 1.24 0 000 2.48h.09a1.24 1.24 0 01-1.17-1.25z"
        fill="#72351c"
      />
      <path
        d="M569.8 291.27a4.47 4.47 0 010 1.86s-.17 1.62.1 1.9M561.42 291.65a4.47 4.47 0 010 1.86s-.17 1.62.1 1.9M561.35 298.3a1.23 1.23 0 00.83 0 1.72 1.72 0 011 0M561.77 295.86a7.15 7.15 0 002.86-.45s3.52.86 4.52.24"
        opacity={0.1}
      />
      <rect
        x={559.21}
        y={310.72}
        width={2.17}
        height={1.34}
        rx={0.67}
        ry={0.67}
        fill="#fdb797"
      />
      <path
        d="M559.22 311.08l1.16-.05 1 .16h-.35zM567.04 305.47h1.16l1 .1h-.35zM567.04 305.71h1.16l1 .1h-.35zM567.04 305.96h1.16l1 .1h-.35zM567.04 306.2h1.16l1 .1h-.35zM559.22 312.01h1.16l1 .12h-.35zM559.22 311.89h1.16l1 .12h-.35zM559.22 311.77h1.16l1 .12h-.35zM559.22 311.65h1.16l1 .12h-.35zM559.22 310.9l1.16-.05 1 .16h-.35zM559.22 310.69l1.16-.05 1 .16h-.35z"
        fill="#f0e4e4"
      />
      <path
        d="M566.35 281.19a6.84 6.84 0 00.4 3.12 3.71 3.71 0 01-.15 3 1 1 0 00.88-.22 3.41 3.41 0 00.64-.75 2 2 0 00.39-.78 3.09 3.09 0 00-.2-1.32 17 17 0 01-.42-2.33c-.06-.48 0-1.86-.54-2s-.9.88-1 1.28z"
        opacity={0.1}
      />
      <path
        d="M566.42 281.16a6.84 6.84 0 00.4 3.12 3.71 3.71 0 01-.15 3 1 1 0 00.88-.22 3.41 3.41 0 00.64-.75 2 2 0 00.39-.78 3.09 3.09 0 00-.2-1.32 17 17 0 01-.42-2.33c-.06-.48 0-1.86-.54-2s-.9.87-1 1.28z"
        fill="#72351c"
      />
      <path
        d="M565.2 281.9c.24.25.29.62.49.9a1.77 1.77 0 001.4.56.79.79 0 01.41.09c.22.14.23.46.37.68a.8.8 0 001.17 0 1.93 1.93 0 00.45-1.23 7.7 7.7 0 000-1.49 2.28 2.28 0 00-.63-1.52 2.66 2.66 0 00-1.11-.48 3.29 3.29 0 00-1.71-.13 3.08 3.08 0 00-.78.39q-.51.33-1 .67c-.37.26-1.07.78-.39 1.06.43.2.97.11 1.33.5z"
        opacity={0.1}
      />
      <path
        d="M565.27 281.86c.24.25.29.62.49.9a1.77 1.77 0 001.4.56.79.79 0 01.41.09c.22.14.23.46.37.68a.8.8 0 001.17 0 1.93 1.93 0 00.45-1.23 7.7 7.7 0 000-1.49 2.28 2.28 0 00-.63-1.52 2.66 2.66 0 00-1.11-.48 3.29 3.29 0 00-1.71-.13 3.08 3.08 0 00-.78.39q-.51.33-1 .67c-.37.26-1.07.78-.39 1.06.43.2 1 .12 1.33.5z"
        fill="#72351c"
      />
      <path
        d="M567.11 305.47h1.16l1 .1h-.33zM567.11 305.71h1.16l1 .1h-.33zM567.11 305.96h1.16l1 .1h-.33zM567.11 306.2h1.16l1 .1h-.33zM566.61 319.47h1.16l1 .1h-.35zM566.61 319.72h1.16l1 .1h-.35zM566.61 319.96h1.16l1 .1h-.35zM566.61 320.2h1.16l1 .1h-.35z"
        fill="#f0e4e4"
      />
    </svg>
  );
};

SvgWebsiteSetup.propTypes = {
  color: PropTypes.string
};
SvgWebsiteSetup.defaultProps = {
  color: "primary"
};
export default SvgWebsiteSetup;
