import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgThoughts = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1151.63 775.89"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Thoughts_svg__a"
          x1={840.26}
          y1={833.25}
          x2={840.26}
          y2={340.73}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M1129.34 238.28a280.57 280.57 0 00-45.68-72.79l-633.76-6.24 521.8-73.3a296.17 296.17 0 00-105.89-21 296.72 296.72 0 00-354.47-12A295.41 295.41 0 00375.7 20.27c-140.81 0-258.15 97.53-284.47 226.86zM1151.62 346.75a273.84 273.84 0 00-19.75-102.37L33.48 359.67a275.56 275.56 0 00-25.72 65l340.13 50.7L0 512.37c10.46 146.41 136 262 289.3 262 77.19 0 147.32-29.31 199.28-77.08 52.13 48.66 122.93 78.66 200.94 78.66 115.75 0 215.66-65.91 262.18-161.2 93.33-29.62 165.84-104 190.65-197l-430.14-66.8h439.37c.02-1.41.04-2.8.04-4.2z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={624.71}
        cy={662.27}
        rx={33.36}
        ry={11.56}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={1043.83}
        cy={662.27}
        rx={33.36}
        ry={11.56}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={588.32}
        cy={720.19}
        rx={33.36}
        ry={11.56}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={1080.01}
        cy={721.31}
        rx={33.36}
        ry={11.56}
        fill={color}
        opacity={0.1}
      />
      <path
        fill="#b77b7f"
        d="M1068.78 710.27l7.29 15.56V610.26h-7.29v100.01zM597.89 710.27l-7.29 15.56V610.26h7.29v100.01z"
      />
      <path
        opacity={0.1}
        d="M1068.78 710.27l7.29 15.56V610.26h-7.29v100.01zM597.89 710.27l-7.29 15.56V610.26h7.29v100.01z"
      />
      <path
        fill="#b77b7f"
        d="M627.36 397.99h20.2v142.06h-20.2zM1033.73 397.99h20.2v142.06h-20.2z"
      />
      <path
        opacity={0.1}
        d="M627.36 397.99h20.2v16.56h-20.2zM1033.73 397.99h20.2v16.56h-20.2z"
      />
      <path fill="#dda2a6" d="M596.23 392.03h486.46v21.19H596.23z" />
      <path
        opacity={0.1}
        d="M627.36 422.16h20.2v21.19h-20.2zM1033.73 422.16h20.2v21.19h-20.2z"
      />
      <path fill="#dda2a6" d="M596.23 420.84h486.46v21.19H596.23z" />
      <path
        opacity={0.1}
        d="M627.36 450.97h20.2v21.19h-20.2zM1033.73 450.97h20.2v21.19h-20.2z"
      />
      <path fill="#dda2a6" d="M596.23 449.65h486.46v21.19H596.23z" />
      <path
        opacity={0.1}
        d="M627.36 479.78h20.2v21.19h-20.2zM1033.73 479.78h20.2v21.19h-20.2z"
      />
      <path fill="#dda2a6" d="M596.23 478.46h486.46v21.19H596.23z" />
      <path
        opacity={0.1}
        d="M627.36 508.59h20.2v21.19h-20.2zM1033.73 508.59h20.2v21.19h-20.2z"
      />
      <path fill="#dda2a6" d="M596.23 507.27h486.46v21.19H596.23z" />
      <g opacity={0.1}>
        <circle cx={637.46} cy={403.95} r={2.93} />
        <circle cx={637.46} cy={432.76} r={2.93} />
        <circle cx={637.46} cy={461.57} r={2.93} />
        <circle cx={637.46} cy={490.38} r={2.93} />
        <circle cx={637.46} cy={519.19} r={2.93} />
        <circle cx={1043.84} cy={403.95} r={2.93} />
        <circle cx={1043.84} cy={432.76} r={2.93} />
        <circle cx={1043.84} cy={461.57} r={2.93} />
        <circle cx={1043.84} cy={490.38} r={2.93} />
        <circle cx={1043.84} cy={519.19} r={2.93} />
      </g>
      <circle cx={637.46} cy={402.63} r={2.93} fill="#918c9e" />
      <circle cx={637.46} cy={431.44} r={2.93} fill="#918c9e" />
      <circle cx={637.46} cy={460.25} r={2.93} fill="#918c9e" />
      <circle cx={637.46} cy={489.06} r={2.93} fill="#918c9e" />
      <circle cx={637.46} cy={517.87} r={2.93} fill="#918c9e" />
      <circle cx={1043.84} cy={402.63} r={2.93} fill="#918c9e" />
      <circle cx={1043.84} cy={431.44} r={2.93} fill="#918c9e" />
      <circle cx={1043.84} cy={460.25} r={2.93} fill="#918c9e" />
      <circle cx={1043.84} cy={489.06} r={2.93} fill="#918c9e" />
      <circle cx={1043.84} cy={517.87} r={2.93} fill="#918c9e" />
      <path
        fill="#dda2a6"
        d="M1093.95 549H584.64l11.59-14.25h486.46l11.26 14.25z"
      />
      <path
        opacity={0.1}
        d="M1093.95 549H584.64l11.59-14.25h486.46l11.26 14.25z"
      />
      <path
        fill="#dda2a6"
        d="M1093.95 548.33H584.64l11.59-14.24h486.46l11.26 14.24zM1111.83 571.18l-546.4-1.32 18.55-19.54h511.96l15.89 20.86z"
      />
      <path
        opacity={0.1}
        d="M1111.83 571.18l-546.4-1.32 18.55-19.54h511.96l15.89 20.86z"
      />
      <path
        fill="#dda2a6"
        d="M1111.83 570.52l-546.4-1.32 18.55-19.54h511.96l15.89 20.86zM1129.05 591.38H545.89l17.89-20.2 549.38.66 15.89 19.54z"
      />
      <path
        fill="#b77b7f"
        d="M634.53 610.26v41.72l-7.17 13.91-2.37-49.67-.28-5.96h9.82zM1043.62 610.26l-.29 5.96-2.36 49.67-7.18-13.91v-41.72h9.83z"
      />
      <path
        opacity={0.1}
        d="M634.53 610.26v41.72l-7.17 13.91-2.37-49.67-.28-5.96h9.82zM1043.62 610.26l-.29 5.96-2.36 49.67-7.18-13.91v-41.72h9.83z"
      />
      <path
        fill="#b77b7f"
        d="M608.81 606.95h18.54v58.95h-18.54zM1040.97 606.95h18.54v58.95h-18.54z"
      />
      <path
        opacity={0.1}
        d="M627.36 610.26h7.17v5.96h-25.72v-9.27h18.55v3.31zM1059.51 606.95v9.27h-25.72v-5.96h7.18v-3.31h18.54z"
      />
      <path fill="#b77b7f" d="M584.64 600.32h498.05v14.57H584.64z" />
      <path
        fill="#b77b7f"
        d="M569.41 597.67h21.19v128.16h-21.19zM1097.27 725.83h-21.19V597.67h21.19z"
      />
      <path opacity={0.1} d="M584.64 600.32h498.05v1.32H584.64z" />
      <path fill="#dda2a6" d="M545.89 591.38h583.16v8.94H545.89z" />
      <path fill="#fff" opacity={0.1} d="M545.89 591.38h583.16v8.94H545.89z" />
      <circle cx={578.74} cy={608.27} r={2.93} opacity={0.1} />
      <circle cx={578.74} cy={606.95} r={2.93} fill="#918c9e" />
      <circle cx={1088.4} cy={607.87} r={2.93} opacity={0.1} />
      <circle cx={1088.4} cy={606.55} r={2.93} fill="#918c9e" />
      <ellipse
        cx={85.08}
        cy={647.35}
        rx={46.92}
        ry={6.44}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={264.82}
        cy={665.57}
        rx={46.92}
        ry={6.44}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={476.53}
        cy={640.91}
        rx={46.92}
        ry={6.44}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={192.88}
        cy={717.46}
        rx={33.36}
        ry={4.58}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={379.43}
        cy={712.88}
        rx={33.36}
        ry={4.58}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M265.81 664.13s-65.79-215.73 10.31-302.18c56.94-64.64 121.56-56.91 150.51-48.91a53.5 53.5 0 0134.52 28.69c10.11 21.83 8.29 57.26-63.14 98.62-119.6 69.24-127 164.23-127 164.23z"
        fill={color}
      />
      <path
        d="M416.32 343.68s-194 60.66-150.5 320.45M303.02 365.42s26.71 18 18.22 45.06M396.87 381.45s-16.33-16.62-36.21-7.45M320.19 464.95s-28.68-14.55-36.09 3.68M249.23 495.32s21.58-1.72 21.92 8.63"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M263.16 665.85s77.08-156.79 98.25-153.36c10.06 1.63 14.69 11.52 16.78 21.46a63.08 63.08 0 01-4.19 38.17c-10.94 25.09-40.31 72.73-110.84 93.73z"
        fill={color}
      />
      <path
        d="M360.81 542.25s-80.9 117.3-96.53 122.45M368.28 560.55H349.4M345.66 603.47l-29.6 1.27M327.65 569.14l3.21 15.41M296.18 616.06l.57 14.01"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M265.45 665.85s-77.07-156.79-98.24-153.36c-10.06 1.63-14.7 11.52-16.79 21.46a63.08 63.08 0 004.2 38.17c10.93 25.09 40.31 72.73 110.83 93.73z"
        fill={color}
      />
      <path
        d="M167.81 542.25s80.9 117.3 96.53 122.45M160.34 560.55h18.89M182.96 603.47l29.6 1.27M200.97 569.14l-3.21 15.41M232.45 616.06l-.58 14.01"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M397.81 702.47c2-1.84 3.82-4 4.39-6.62s-.56-5.79-3.07-6.75c-2.81-1.07-5.82.88-8.1 2.85s-4.9 4.22-7.88 3.8a12 12 0 003.66-11.23 4.8 4.8 0 00-1-2.28c-1.57-1.67-4.4-.95-6.27.36-6 4.19-7.61 12.27-7.65 19.55-.6-2.62-.09-5.36-.11-8.05s-.75-5.68-3-7.12a9.1 9.1 0 00-4.61-1.09c-2.68-.1-5.66.17-7.48 2.13-2.27 2.43-1.68 6.51.29 9.19s5 4.35 7.74 6.2a17.16 17.16 0 015.54 5.28 5.79 5.79 0 01.41.94h16.77a47 47 0 0010.37-7.16zM104.1 639.32c2-1.83 3.82-4 4.39-6.62s-.55-5.78-3.07-6.75c-2.81-1.07-5.82.88-8.1 2.85s-4.9 4.22-7.88 3.8a12 12 0 003.71-11.23 4.85 4.85 0 00-1-2.28c-1.57-1.67-4.4-.95-6.27.37-6 4.18-7.61 12.27-7.64 19.54-.6-2.62-.1-5.36-.11-8s-.76-5.68-3-7.12a9.1 9.1 0 00-4.61-1.09c-2.67-.09-5.65.17-7.48 2.13-2.27 2.43-1.68 6.51.29 9.19s5 4.35 7.75 6.2a17.23 17.23 0 015.53 5.28 5.79 5.79 0 01.41.94h16.77a47 47 0 0010.31-7.21zM201.98 702.47c2-1.84 3.82-4 4.39-6.62s-.55-5.79-3.07-6.75c-2.81-1.07-5.82.88-8.1 2.85s-4.9 4.22-7.88 3.8a12 12 0 003.71-11.23 4.8 4.8 0 00-1-2.28c-1.57-1.67-4.4-.95-6.27.36-5.95 4.19-7.61 12.27-7.64 19.55-.6-2.62-.1-5.36-.11-8.05s-.76-5.68-3-7.12a9.1 9.1 0 00-4.61-1.09c-2.67-.1-5.65.17-7.48 2.13-2.27 2.43-1.68 6.51.29 9.19s5 4.35 7.75 6.2a17.12 17.12 0 015.53 5.28 5 5 0 01.41.94h16.71a47 47 0 0010.37-7.16zM479.57 574.82s6.29 8.22-2.9 20.63-16.76 22.89-13.7 30.63c0 0 13.86-23 25.15-23.37s3.87-14.03-8.55-27.89z"
        fill={color}
      />
      <path
        d="M479.57 574.82a10.08 10.08 0 011.29 2.58c11 12.93 16.87 25 6.29 25.31-9.86.28-21.68 17.91-24.52 22.36.1.34.21.68.34 1 0 0 13.86-23 25.15-23.37s3.87-14.02-8.55-27.88z"
        opacity={0.1}
      />
      <path
        d="M491.26 585.3c0 2.89-.32 5.24-.72 5.24s-.73-2.35-.73-5.24.41-1.54.81-1.54.64-1.36.64 1.54z"
        fill="#ffd037"
      />
      <path
        d="M495.27 588.75c-2.54 1.39-4.75 2.22-5 1.87s1.72-1.76 4.26-3.14 1.54-.38 1.73 0 1.55-.11-.99 1.27z"
        fill="#ffd037"
      />
      <path
        d="M446.36 574.82s-6.28 8.22 2.91 20.63 16.76 22.89 13.7 30.63c0 0-13.87-23-25.15-23.37s-3.87-14.03 8.54-27.89z"
        fill={color}
      />
      <path
        d="M446.36 574.82a10.29 10.29 0 00-1.28 2.58c-11 12.93-16.88 25-6.29 25.31 9.86.28 21.68 17.91 24.51 22.36a9.16 9.16 0 01-.33 1s-13.87-23-25.15-23.37-3.87-14.02 8.54-27.88z"
        opacity={0.1}
      />
      <path
        d="M434.68 585.3c0 2.89.32 5.24.72 5.24s.73-2.35.73-5.24-.41-1.54-.81-1.54-.64-1.36-.64 1.54z"
        fill="#ffd037"
      />
      <path
        d="M430.67 588.75c2.54 1.39 4.75 2.22 4.94 1.87s-1.71-1.76-4.25-3.14-1.54-.38-1.73 0-1.5-.11 1.04 1.27z"
        fill="#ffd037"
      />
      <path
        d="M436.68 625.01s17.58-.54 22.87-4.32 27-8.27 28.36-2.22 26.42 30.09 6.57 30.25-46.11-3.09-51.4-6.32-6.4-17.39-6.4-17.39z"
        fill="#a8a8a8"
      />
      <path
        d="M494.81 646.61c-19.84.16-46.11-3.09-51.4-6.31-4-2.45-5.63-11.26-6.16-15.32h-.59s1.11 14.17 6.4 17.39 31.55 6.48 51.4 6.32c5.73 0 7.71-2.09 7.6-5.11-.78 1.86-2.96 3-7.25 3.03z"
        opacity={0.2}
      />
      <path
        d="M976.94 635l.59-.21s-.28-12.79-7.21-19.61-2.59-28.18-2.59-28.18.58-22.46-2.6-27.86 0-25.59 0-25.59v-30.67s-2.59-8-3.17-29.85-2.88-19-7.21-25.3c-2.24-3.25-11.78-6.64-20.56-9.08a165.23 165.23 0 00-18.9-16.65 25.41 25.41 0 019.18-6.67c3.11-1.47 6.68-3 7.95-6.14a12.13 12.13 0 00.34-5.66 33.86 33.86 0 00-1.71-8.83 11.57 11.57 0 00-5.85-6.63c-1.51-.66-3.47-1.12-3.91-2.69a3.79 3.79 0 01.08-1.89c.68-3.08 1.8-6.11 1.73-9.26-.07-3.49-1.6-6.79-3.23-9.89-4.11-7.83-9.34-15.55-17.17-19.82-9.83-5.36-22-4.31-32.86-1.61a43.19 43.19 0 01-9 1.67 39.08 39.08 0 00-5.52.13 10.45 10.45 0 00-3 1c.2-.2.4-.42.62-.61a14.77 14.77 0 00-4.78 3.56 11.73 11.73 0 00-3 5.28 7.21 7.21 0 00-.24 2 9.92 9.92 0 002 5.24 46.54 46.54 0 00-4.23 2.38 5.27 5.27 0 00-1.75 1.53 3.12 3.12 0 00-.33.75 7.94 7.94 0 00-.67 3.47c0 .15 0 .3-.07.44.12-.22.22-.44.32-.67-1.14 7-9.78 11.39-12.21 17.75a9.39 9.39 0 00-1 4.24c.11 5.12 4.64 8.92 7.1 13.42 4.11 7.53 2.27 16.68 1.11 25.15-.16 1.2-.29 2.44-.37 3.69-6.09 1-12.71 3.12-16.76 7.36-9.08 9.53-5 1.42-11.53 22.46l-6.49 21-.87 15.21s-5 5-4.61 10.38-2.16 8-2.16 8-.58 11.23 0 13.93-4.33 5.4-4 7.82a70.33 70.33 0 010 8c0 .43-4.33 1.14-3.89 6.11a78.4 78.4 0 01.28 8.82s-7.2 7.53-5.76 11.65-1.3 11.09-1.3 11.09-1.59 9.1-5.48 11.52c-3.17 2-5.67 9.39-6.49 12.09-2.9.1-44.77 1.71-43.38 7.29 1.44 5.78 40.95 7.58 45.56 7.58a4.07 4.07 0 00.6-.06c-1.08 7-3.86 20.77-9.12 23-7.07 3-19.9 15.92-19.32 21.61s-2.31 40.09-4.19 44.92c-.39 1-.61 4-.6 8.12-9.12 15.8-15.85 28.65-17.63 32.07l-.46.89-.54 1.42c-1.23-.85-10.17 10.53-10.17 10.53s-7.35 12.51-7.64 14.21-5.92 2.84-6.2 4.12-6.92 9.53-6.92 9.53-3.75 9.66-10.39 12.22-13.69 8.82-4.61 15.93S698 833.23 698 833.23s11.54-11.8 13.84-17.34 8.94-14.78 8.94-14.78 4-8 4.62-11S739.33 767 739.33 767l-1.44-.56c.55-.6 1.18-1.26 1.88-2 .49-.51 1-1.06 1.57-1.61 1.54 3.78 3.4 6.35 5.63 6.86 10.67 2.42 18.31-10.52 23.22-11.8S780.42 740 780.42 740s14.57-12.23 14.71-22c0-2.15.08-4.44.13-6.7a115.69 115.69 0 018.38-14.1c5.39-7.2 9.61-14.22 12.31-15.73 2-1.1 14.42-13.46 21-20.09l.68-.69c2 4.36 4.3 7.44 6.92 7.51 2 .06 3.62-2.85 4.9-7q.19.4.42.81c3.61 6.51 10.25 12 10.25 12s18.46 25.87 16.87 30 13.41 21.46 22 26.58c6.92 4.1 25 24.65 31.91 32.64l1 1.18a6.42 6.42 0 01-1.55.39c-2.4.09 3.37 6.44 3.37 6.44s4.51 6.16 4.32 9.2 5.67 10.33 5.67 10.33 10 17 9.33 22.84-6.44 21.32 7.21 18.29 28.26-4.55 28-11.47-6.15-19-6.15-19l-6.06-12.14s-6.05-7.86-8.75-13.26-11.05-22.75-11.05-22.75l-3 1.27-.64-1.36c-3.1-6.55-10.6-22.64-19.68-43.54a171.64 171.64 0 00-12-23.3l12-2.53c13.82 12.9 46.29 16.86 46.29 16.86s-2-32.12 1.16-41.51c1.64-4.86-.82-7.66-3.73-10 13-.75 36.18-2.84 37.28-7.24s-24.57-6.25-36.98-6.93zm-36.17-7.83c-2.57-.18-4.47-.2-4.47-.2s1.15-5.25 2.88-8.1-10.38-10.52-9.61-17.63-3.94-21.89-3.94-21.89.57-15.35 0-22.46a21.72 21.72 0 012.59-12.22s6.92 18.48 4 21 0 16.2 0 16.2 5.19 18.2 7.78 24.74c1.53 3.78 1 12.62.77 20.57z"
        transform="translate(-24.19 -62.05)"
        fill="url(#Thoughts_svg__a)"
      />
      <path
        d="M743.93 549.95s-43.72 1.49-42.32 7.19 39.8 7.47 44.28 7.47 10.92-8.21 10.92-8.21z"
        fill="#efb7b9"
      />
      <path fill="#67647e" d="M771.07 530h25.22v23.25h-25.22z" />
      <path opacity={0.12} d="M771.07 530h25.22v23.25h-25.22z" />
      <path
        fill="#67647e"
        d="M757.65 554.15l-23.2 46.84 29.41 9.54 23.74-20.37 11.22-21.74 22.72 1.85 24.25 12.07 19.6 11.97 11.86 22.18 17 9.61 36.45-7.78 5.32-24.79-29.74-19.92-10.78-16.32-43.7-6.36-12.65-18.86-43.72 10.55-37.78 11.53z"
      />
      <path
        opacity={0.12}
        d="M757.65 554.59l-23.68 51.03 29.89 5.35 23.74-20.37 11.22-21.74 22.72 1.84 24.25 12.08 19.6 11.96 11.86 22.19 17 9.6 36.45-7.78 5.32-24.79-29.74-19.91-10.78-16.33-43.7-6.35-12.65-18.87-43.72 10.55-37.78 11.54z"
      />
      <path
        d="M818.53 308.3a5.05 5.05 0 00-1.7 1.51 8.06 8.06 0 00-.66 3.44c-.89 8.44-12.73 13-12.55 21.45.1 5 4.51 8.78 6.9 13.22 4 7.42 2.2 16.45 1.08 24.8-.85 6.33-.85 13.76 4 17.92 2 1.7 4.59 2.63 6.4 4.52 3.7 3.86 2.89 10.19 5.33 15a4.36 4.36 0 001 1.36 4.17 4.17 0 001.42.73c4.71 1.55 10.09-.65 13.27-4.45s4.44-8.89 4.61-13.85-.63-9.87-1.11-14.8c-.91-9.48-.6-19-1.37-28.52a23 23 0 00-2-8.74c-.73-1.42-1.72-2.7-2.41-4.14a22 22 0 01-1.62-6.26l-2.64-16.71c-.52-3.34-1-9.33-4.83-10.62s-10 2.16-13.12 4.14z"
        fill="#e3787d"
      />
      <path
        d="M818.53 308.3a5.05 5.05 0 00-1.7 1.51 8.06 8.06 0 00-.66 3.44c-.89 8.44-12.73 13-12.55 21.45.1 5 4.51 8.78 6.9 13.22 4 7.42 2.2 16.45 1.08 24.8-.85 6.33-.85 13.76 4 17.92 2 1.7 4.59 2.63 6.4 4.52 3.7 3.86 2.89 10.19 5.33 15a4.36 4.36 0 001 1.36 4.17 4.17 0 001.42.73c4.71 1.55 10.09-.65 13.27-4.45s4.44-8.89 4.61-13.85-.63-9.87-1.11-14.8c-.91-9.48-.6-19-1.37-28.52a23 23 0 00-2-8.74c-.73-1.42-1.72-2.7-2.41-4.14a22 22 0 01-1.62-6.26l-2.64-16.71c-.52-3.34-1-9.33-4.83-10.62s-10 2.16-13.12 4.14z"
        fill="#e3787d"
      />
      <g opacity={0.1}>
        <path d="M816.97 310.61c0-.23 0-.46.06-.69a3.06 3.06 0 00-.52.62 8 8 0 00-.7 3.41c0 .14 0 .28-.06.43a10.66 10.66 0 001.22-3.77zM843.81 405.11c-3.17 3.8-8.56 6-13.26 4.45a3.53 3.53 0 01-2.42-2.09c-2.45-4.76-1.64-11.08-5.34-14.95-1.81-1.88-4.41-2.81-6.4-4.52-4.85-4.16-4.85-11.58-4-17.92 1.12-8.35 2.92-17.38-1.08-24.79-2.39-4.45-6.79-8.19-6.9-13.23a8.22 8.22 0 01.09-1.41 9.56 9.56 0 00-1.21 4.77c.1 5 4.51 8.79 6.9 13.23 4 7.42 2.2 16.44 1.08 24.79-.85 6.34-.85 13.76 4 17.93 2 1.7 4.59 2.63 6.4 4.52 3.7 3.86 2.89 10.19 5.33 14.94a4.4 4.4 0 001 1.37 4.1 4.1 0 001.43.72c4.7 1.55 10.09-.65 13.26-4.45a19.19 19.19 0 003.77-7.76 17.48 17.48 0 01-2.65 4.4z" />
      </g>
      <path
        d="M942.56 575.5s43.71 1.5 42.31 7.19-39.79 7.48-44.28 7.48-10.92-8.22-10.92-8.22z"
        fill="#efb7b9"
      />
      <path
        d="M824.89 376.2s-21.43-1.26-30.25 8.13-4.91 1.4-11.21 22.14l-6.31 20.74-.84 15s-4.9 4.9-4.48 10.23-2.11 7.85-2.11 7.85-.56 11.07 0 13.73-4.2 5.32-3.92 7.7a70.82 70.82 0 010 7.85c0 .42-4.2 1.12-3.78 6a78.83 78.83 0 01.28 8.68s-7 7.43-5.61 11.49-1.26 10.93-1.26 10.93-1.54 9-5.32 11.35-6.59 12.93-6.59 12.93 3.5 9.11 3.5 9.53-2.52 23.82-9.38 26.76-19.34 15.71-18.8 21.28-2.24 39.52-4.06 44.28.28 53.39 10.65 55.77 17.81-10.37 22.58-11.62 9.94-17.66 9.94-17.66 14.16-12.05 14.3-21.71.56-22 .56-22-16.54-28-19.9-30.13-12.75-14-5.47-24.24 11.92-23.26 11.92-23.26l7.84-7 6.64-25.1 12-39.23 11.35-38.54 9.65-40.49 25.47-17.74s4.53-11.55-7.39-13.65z"
        fill="#67647e"
      />
      <path
        d="M816.91 597.64s-1.61 1.66-4 4.11c-6.43 6.53-18.54 18.72-20.45 19.8-2.62 1.5-6.72 8.41-12 15.51s-12.33 22.42-12.33 22.42-17.56 24.66-27.83 27.28c-7 1.77-16.5 10.92-21.9 16.64-2.59 2.72-4.24 4.66-4.24 4.66l-20.2-7.85 2.62-6.91.45-.89c1.94-3.78 9.93-19.26 20.47-37.42 12.15-20.91 30.65-40.16 30.65-40.16s16.06-14.76 16.62-21.49a84 84 0 00-.17-11.2c-.3-4.84-.76-9-.76-9l24.47-15.87 18.69 7.8zM926.81 695.54l-19.9 9.81-2.65-3.14c-6.71-7.87-24.28-28.13-31-32.17-8.45-5.09-23-22.09-21.45-26.2s-16.39-29.57-16.39-29.57-6.46-5.45-10-11.87c-1.72-3.13-2.73-6.49-1.94-9.56 2.37-9.4 10.22-30 10.22-30s3.79-6.31 4.06-6.74 14.05-5.15 14.05-5.15l13.59-1.4 17.1 14.57s-.63 3.47-1.57 8.29c-2.08 10.61-5.68 27.79-7.41 28.85-2.51 1.54 11.65 13 11.65 13s9.38 8 21 35.17c8.82 20.61 16.1 36.47 19.12 42.93.95 2.07 1.52 3.18 1.52 3.18z"
        fill="#efb7b9"
      />
      <path
        d="M807.02 565.09l9.89 32.55s-1.61 1.66-4 4.11c-2.7-6.62-4.77-15.47-6.25-21.48-2.62-10.65-29.52-7.85-34.19-7.85-2.06 0-4.95 4.71-7.83 9.72-.3-4.84-.76-9-.76-9l24.47-15.87zM882.49 564.1s-.63 3.47-1.57 8.29a35.8 35.8 0 00-8.71-12.12c-13.07-11.58-30.44-1.68-30.44-1.68-1.79.66-2.66 2.51-4.6 4.8a40.71 40.71 0 00-9.42 23.89 81.65 81.65 0 01-2.3 15.12c-1.72-3.13-2.73-6.49-1.94-9.56 2.37-9.4 10.22-30 10.22-30s3.79-6.31 4.06-6.74 14.02-5.15 14.02-5.15l13.59-1.4z"
        opacity={0.1}
      />
      <path
        d="M902.86 577.28c-.19 4.67-17.57 12-17.57 12s0-19.62-13.08-31.21-30.4-1.72-30.4-1.72c-1.79.66-2.66 2.51-4.6 4.8a40.71 40.71 0 00-9.42 23.88c-.6 9.94-3.31 23.57-7.47 23.44-6.54-.18-11-19.79-13.64-30.44s-29.52-7.85-34.19-7.85-13.64 24.28-17 21.3 3.73-26.39 3.73-26.39l22.59-27.23 4.82-5.79 99.2 5.36s2.47 3.81 4.89 7.58c2.29 3.59 4.55 7.15 4.64 7.41.21.53 7.68 20.18 7.5 24.86z"
        fill="#444053"
      />
      <path
        d="M802.48 547.5c.14.21 18.22 19.83 19.06 22.77a96.4 96.4 0 011.69 10s.41-6.94 1-8.9-2.1-6.51-4.06-8-5.61-4.27-6.1-5.46-2.8-13.38-2.8-13.38l-7.57-1.68zM836.74 545.54s-11.63 13.31-11.35 15.27 11.35-15.27 11.35-15.27z"
        opacity={0.1}
      />
      <path
        d="M896.13 388.39l-13.45 18.69-36.93 7.47s-37.43-9.34-12-19.06a14.65 14.65 0 006.22-4.19c4.48-5.37 2.83-13.48-.9-21.38-5.86-12.45-16.81-24.4-16.81-24.4s52.59-23.26 46.61 1a24.46 24.46 0 00.29 12.8c3.14 11 13.06 19.66 19.95 24.57a67.79 67.79 0 007.02 4.5z"
        fill="#efb7b9"
      />
      <path
        d="M896.13 388.39l-13.45 18.69-36.93 7.47s-37.43-9.34-12-19.06a14.65 14.65 0 006.22-4.19c6 2.66 12.28 4.77 15.45 3.82 0 0 20.78-6.09 33.69-11.2a67.79 67.79 0 007.02 4.47zM890.9 546.08a142.55 142.55 0 00-15.65-3.83c-5.22-.92-10.25-1.28-12.38.09-5.23 3.36-17.93 10.84-22.42 10.84a6.42 6.42 0 01-6-3.74s-13.83-1.5-22.8 0c-6 1-20.1-6.15-28.84-11l-1-.56 4.82-5.79 99.2 5.36s2.47 3.81 4.89 7.58z"
        opacity={0.1}
      />
      <path
        d="M887.17 518.8l3.73 25a144 144 0 00-15.65-3.84c-5.22-.92-10.25-1.27-12.38.09-5.23 3.37-17.93 10.84-22.42 10.84a6.42 6.42 0 01-6-3.73s-13.83-1.5-22.8 0c-6 1-20.1-6.15-28.84-11-4.37-2.44-7.4-4.3-7.4-4.3l5.6-19.81 17.19-18.31 2.61-26.51 4.1-30.63 6.4-18.65 11.5-27.33 2.05-4.84s2.24 1.32 5.54 3.08c1.53.81 3.28 1.72 5.15 2.63 7.12 3.49 15.87 7.07 19.83 5.87 0 0 18.47-5.41 31.41-10.31 6-2.28 10.76-4.43 12-5.89a1.31 1.31 0 00.31-.61c0-.37.08-.09.16.73.8 8.25 3.58 71.38 3.58 71.38z"
        fill="#a36468"
      />
      <path
        d="M902.86 452.66l-15.69 66.14 3.73 25a144 144 0 00-15.65-3.84c-.89-10.25-1.91-27.56.8-33.34 3.92-8.41 6.16-35 6.16-35l4.6-84.57.45-8.18c.33-.23 5.35.7 11.55 2.29l.47.12c.8 8.25 3.58 71.38 3.58 71.38zM934.3 579.08c-9.78 2.94-23 6.16-24.35 2.68-1-2.4-.89-7.79-.7-13.68 4.77.34 11.93 1.29 13 3.87s7.77 4.47 12.05 7.13z"
        opacity={0.1}
      />
      <path
        d="M891.74 378.87c.84-.57 31.39 6.16 35.59 12.33s6.45 3.36 7 24.94 3.08 29.42 3.08 29.42v30.27s-3.08 19.9 0 25.22 2.52 27.46 2.52 27.46-4.2 21 2.52 27.75 7 19.33 7 19.33-32.79 11.77-35 6.17 1.12-27.46-1.4-33.91-7.57-24.38-7.57-24.38-2.8-13.45 0-16-3.92-20.74-3.92-20.74a21.59 21.59 0 00-2.52 12.05c.56 7 0 22.14 0 22.14s4.57 14.57 3.83 21.58 11 14.57 9.34 17.37-2.81 8-2.81 8 15.7.15 17.38 4.07 14.57 5.83 15.69 11.32 12.89 7.18 9.81 16.43-1.12 40.91-1.12 40.91-56.61-7-50.44-32.79 35.31-14.29 35.31-14.29-23.22-13.72-36.72-12.04-18.78-33.63-18.78-33.63-3.92-32.79 0-41.19 6.16-35 6.16-35z"
        fill="#67647e"
      />
      <path
        d="M917.52 562.14s1.4-2.66 11.35-1 15-.55 15-.55-20.18 8.98-26.35 1.55zM914.72 433.09c-.14.42 7.29 11.35 1.68 20.18s-10.23 23-11.21 25.64-2.33 6.73-2.33 6.73"
        opacity={0.1}
      />
      <path
        d="M888.38 365.41s26.34 19.76 26.2 29c0 0-2.52 2.94-8 2.94s-15.27-2.66-16.39-8.83-5.33 0-2.94 3.23 3.78 4.9 3.78 4.9 24.93 6.87 29.7 10.09-2 7-2 7-7 12.61-6.58 14.71-17.24 29.56-17.24 29.56-5.88 29.71-5.6 35.31.7 17.5.7 17.5l-11.2 15.44s-2.74-47.63-.92-54.07 6.72-46.94 6.72-46.94 5.61-24.67 3.37-27.47-3-11.49-3-11.49z"
        opacity={0.05}
      />
      <path
        d="M886.13 364.29s26.35 19.76 26.21 29c0 0-2.53 2.94-8 2.94s-15.27-2.66-16.39-8.83-5.33 0-2.95 3.23 3.79 4.9 3.79 4.9 24.93 6.87 29.7 10.09-2 7-2 7-7 12.62-6.59 14.72-17.18 29.61-17.18 29.61-5.89 29.71-5.6 35.31.7 17.5.7 17.5l-9 15.42s-5-47.63-3.16-54.08 6.72-46.94 6.72-46.94 5.61-24.66 3.36-27.46-3-11.49-3-11.49z"
        fill="#67647e"
      />
      <path
        d="M886.13 364.29s26.35 19.76 26.21 29c0 0-2.53 2.94-8 2.94s-15.27-2.66-16.39-8.83-5.33 0-2.95 3.23 3.79 4.9 3.79 4.9 24.93 6.87 29.7 10.09-2 7-2 7-7 12.62-6.59 14.72-17.18 29.61-17.18 29.61-5.89 29.71-5.6 35.31.7 17.5.7 17.5l-9 15.42s-5-47.63-3.16-54.08 6.72-46.94 6.72-46.94 5.61-24.66 3.36-27.46-3-11.49-3-11.49z"
        opacity={0.12}
      />
      <path
        d="M836.53 387.55a17.35 17.35 0 01-1 3.94c-1 3.1-2.64 7.31-4 11.61-2 6.65-8.11 18.64-11.77 30s-9.1 35.58-9.1 35.58 1.12 22.28-6.3 27.89-15.84 26.2-15.84 26.2-2.66 6.87-5.77 13.41c-4.37-2.44-7.4-4.3-7.4-4.3l5.6-19.81 17.19-18.31 2.67-26.53 4.1-30.63 6.4-18.65 11.5-27.33c3.1-.23 5.16-.41 5.16-.41s1.05-.63 2.43-1.35c2.57-1.33 6.22-2.91 6.13-1.31z"
        opacity={0.1}
      />
      <path
        d="M823.5 391.34s-26 2.21-31.81 1.54-3.36 12.47-3.36 12.47-4.52 26.76-3.52 29.6 6.3 23.82 3.08 28.87-13.17 31.25-13.17 31.25-3.22 11.63-6 23.26-9.38 33.9-11.07 35.87-16.02 27.75-14.39 31.75 23.7-34 28.15-37.4 12.72-24.66 12.72-24.66 8.4-20.6 15.83-26.2 6.31-27.89 6.31-27.89 5.46-24.24 9.1-35.59 9.76-23.34 11.77-30 4.77-13 4.91-15.56-8.55 2.69-8.55 2.69z"
        opacity={0.05}
      />
      <path
        d="M825.74 390.22s-26 2.21-31.81 1.54-3.36 12.47-3.36 12.47-4.48 26.76-3.5 29.56 6.3 23.82 3.08 28.87-13.17 31.29-13.17 31.29-3.22 11.63-6 23.26-9.39 33.91-11.07 35.88-16 27.78-14.39 31.82 23.7-34.07 28.15-37.43 12.72-24.66 12.72-24.66 8.41-20.6 15.83-26.2 6.31-27.89 6.31-27.89 5.46-24.24 9.11-35.59 9.75-23.34 11.77-30 4.76-13 4.9-15.56-8.57 2.64-8.57 2.64z"
        fill="#67647e"
      />
      <path
        d="M825.74 390.22s-26 2.21-31.81 1.54-3.36 12.47-3.36 12.47-4.48 26.76-3.5 29.56 6.3 23.82 3.08 28.87-13.17 31.29-13.17 31.29-3.22 11.63-6 23.26-9.39 33.91-11.07 35.88-16 27.78-14.39 31.82 23.7-34.07 28.15-37.43 12.72-24.66 12.72-24.66 8.41-20.6 15.83-26.2 6.31-27.89 6.31-27.89 5.46-24.24 9.11-35.59 9.75-23.34 11.77-30 4.76-13 4.9-15.56-8.57 2.64-8.57 2.64z"
        opacity={0.12}
      />
      <path
        d="M815.65 459.36s3.2 16.13-2.1 23.76.56-20.32 2.1-23.76zM873.1 512.68s-14.85 2.66-19.75 10.51 19.75-10.51 19.75-10.51zM873.1 528.65s-18.91 6-15.41 8.13 12-1.68 14.43-1 .98-7.13.98-7.13zM718.42 703.4c-2.59 2.72-4.24 4.66-4.24 4.66l-20.2-7.85 2.62-6.91.45-.89a.21.21 0 01.15 0c1.19.82 10.14 6.58 10.14 6.58z"
        opacity={0.1}
      />
      <path
        d="M706.22 701.28s-8.95-5.75-10.15-6.59-9.89 10.38-9.89 10.38-7.14 12.33-7.42 14-5.75 2.8-6 4.06-6.73 9.39-6.73 9.39-3.64 9.53-10.08 12-13.32 8.69-4.49 15.69 26.48 10.93 26.48 10.93 11.21-11.63 13.46-17.09 8.68-14.57 8.68-14.57 3.93-7.85 4.49-10.79 13.42-22.74 13.42-22.74z"
        fill="#444053"
      />
      <path
        d="M926.81 695.54l-19.9 9.81-2.65-3.14a85.37 85.37 0 009.57-4.9l11.5-4.94c.91 2.06 1.48 3.17 1.48 3.17z"
        opacity={0.1}
      />
      <path
        d="M914.91 698.43s-8.88 5.24-11.21 5.33 3.27 6.35 3.27 6.35 4.39 6.07 4.2 9.06 5.51 10.18 5.51 10.18 9.72 16.72 9.06 22.52-6.26 21 7 18 27.46-4.49 27.18-11.31-6-18.68-6-18.68l-5.88-12s-5.89-7.75-8.5-13.08-10.73-22.34-10.73-22.34z"
        fill="#444053"
      />
      <path
        d="M834.6 396.5c12.58-4.81 9.89-17.1 4-28.29a33.38 33.38 0 01-15.79-12.36c-3.78 1.63-7.21 6.18-5.79 9.93a14.2 14.2 0 002.1 3.19c5.88 7.84 5.09 19.93-1.76 26.93-1.07 1.1-2.36 2.27-2.35 3.81 0 1.9 2 3.14 3.76 3.78a24.57 24.57 0 007.2 1.44c-.97-2.62.98-5.5 8.63-8.43z"
        fill="#e3787d"
      />
      <path
        d="M914.63 568.15s13.45.53 17.93 3.52a17.81 17.81 0 016.23 7.41"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M818.98 369.23c4.39 5.85 5.05 14.09 2.25 20.8 4-7 3.77-16.51-1.13-23.05a13.54 13.54 0 01-2.1-3.19 5.58 5.58 0 010-3.78 6.58 6.58 0 00-1.12 6 13.81 13.81 0 002.1 3.22zM825.81 402.84a24.38 24.38 0 01-6-1.34c-1.78-.65-3.75-1.89-3.76-3.79a2.85 2.85 0 010-.29 3.92 3.92 0 00-1.15 2.54c0 1.9 2 3.14 3.76 3.78a24.57 24.57 0 007.2 1.44 3.31 3.31 0 01-.05-2.34zM835.53 394.51c-6 2.31-8.51 4.59-8.8 6.73 1.29-1.46 3.71-3 7.68-4.49 4.44-1.69 7-4.32 8.13-7.5a13.9 13.9 0 01-7.01 5.26z" />
      </g>
      <path
        d="M869.14 359.35c-4.5 8.31-19.22 12.23-19.72 12.23a33 33 0 01-10.37-1.63c-5.86-12.45-16.81-24.4-16.81-24.4s52.59-23.26 46.61 1a24.46 24.46 0 00.29 12.8z"
        opacity={0.1}
      />
      <path
        d="M882.68 336.08a33.26 33.26 0 01-30.59 33.15c-.87.07-1.77.11-2.67.11a33.26 33.26 0 1133.26-33.26z"
        fill="#efb7b9"
      />
      <path
        d="M882.68 336.08a33.26 33.26 0 01-30.59 33.15c-5.1-4.15-8.84-9.9-11.83-15.82-1.28-2.57-2.5-5.36-2.17-8.22.28-2.49 1.71-4.73 2.14-7.21.71-4-1.34-8.06-3.45-11.6-2-3.27-3.84-7.08-6.65-9.68a78.319 78.319 0 01-4.18-4.17 33.26 33.26 0 0156.73 23.55z"
        opacity={0.1}
      />
      <path
        d="M824.23 308.1c-1.72-2.15-3.47-4.55-3.55-7.3-.08-2.56 1.31-4.94 3-6.84a12.68 12.68 0 017-4.27 38.35 38.35 0 015.36-.13 41 41 0 008.77-1.61c10.59-2.66 22.37-3.7 31.93 1.59 7.6 4.2 12.69 11.81 16.68 19.53 1.58 3.06 3.07 6.31 3.14 9.75.07 3.1-1 6.1-1.68 9.13a3.91 3.91 0 00-.08 1.86c.43 1.54 2.33 2 3.8 2.65a11.35 11.35 0 015.69 6.53 33.38 33.38 0 011.65 8.72 12 12 0 01-.32 5.57c-1.23 3.13-4.7 4.6-7.73 6.05a24.59 24.59 0 00-8.93 6.59c-2.3 2.94-3.51 6.93-2.42 10.5a12.57 12.57 0 006.49 7.11 38.78 38.78 0 009.4 2.95 10.43 10.43 0 014 1.49c2.86 2.09 2.77 6.72.58 9.5s-5.82 4-9.32 4.53a34.09 34.09 0 01-22.4-4.74c-4.11-2.5-7.89-6.17-8.79-10.89-.57-2.93 0-6.1-1.2-8.82-1.59-3.54-5.58-5.13-8.89-7.15-6.77-4.14-11.43-11-15-18.08-1.3-2.57-2.51-5.36-2.18-8.22.28-2.49 1.71-4.73 2.14-7.2.71-4.07-1.34-8.06-3.45-11.61-2-3.27-3.83-7.08-6.65-9.69a69 69 0 01-7.04-7.5z"
        fill="#e3787d"
      />
      <g opacity={0.1}>
        <path d="M901.34 356.7a32.2 32.2 0 00-5.85 3.54q1.23-.69 2.49-1.29a23.93 23.93 0 005.88-3.47c-.84.47-1.69.83-2.52 1.22zM901.11 399.37a34.1 34.1 0 01-22.4-4.74c-4.11-2.5-7.89-6.17-8.79-10.89-.56-2.93 0-6.1-1.2-8.82-1.58-3.54-5.58-5.13-8.89-7.15-6.77-4.14-11.43-11-15-18.08-1.3-2.57-2.51-5.36-2.18-8.22.28-2.49 1.71-4.73 2.14-7.2.71-4.07-1.34-8.06-3.45-11.61-1.95-3.27-3.83-7.08-6.64-9.69a68.1 68.1 0 01-7-7.47c-1.72-2.15-3.47-4.55-3.55-7.3-.08-2.56 1.31-4.94 3-6.84a15.34 15.34 0 011.28-1.27 14.43 14.43 0 00-4.64 3.51c-1.71 1.9-3.1 4.28-3 6.84.09 2.75 1.84 5.15 3.56 7.3a66.26 66.26 0 007 7.47c2.81 2.61 4.7 6.42 6.64 9.69 2.11 3.55 4.17 7.54 3.46 11.61-.43 2.47-1.86 4.71-2.14 7.2-.33 2.86.88 5.65 2.18 8.22 3.57 7.08 8.23 13.94 15 18.08 3.3 2 7.3 3.62 8.88 7.15 1.23 2.72.64 5.89 1.2 8.82.9 4.72 4.69 8.39 8.79 10.89a34.11 34.11 0 0022.4 4.74c3.12-.45 6.32-1.49 8.54-3.67a19.65 19.65 0 01-5.19 1.43z" />
      </g>
    </svg>
  );
};

SvgThoughts.propTypes = {
  color: PropTypes.string
};
SvgThoughts.defaultProps = {
  color: "primary"
};
export default SvgThoughts;
