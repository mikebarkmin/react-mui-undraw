import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgProgrammer = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1041.32 554.17"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M961.48 438.21q-1.74 3.75-3.47 7.4-2.7 5.67-5.33 11.12c-.78 1.61-1.56 3.19-2.32 4.77-8.6 17.57-16.63 33.11-23.45 45.89a73.21 73.21 0 01-63.81 38.7l-151.65 1.65h-1.6l-13 .14-11.12.12-34.1.37h-1.38l-17.36.19h-.53l-107 1.16-95.51 1-11.11.12-69 .75h-.08l-44.75.48h-.48l-141.5 1.53-42.33.46a88 88 0 01-10.79-.54c-1.22-.14-2.44-.3-3.65-.49a87.38 87.38 0 01-51.29-27.54c-18.21-20.03-31.46-43.4-40.36-68.76q-1.93-5.49-3.6-11.12c-30.81-104.15 6.75-238.52 74.35-328.44q4.25-5.64 8.64-11l.07-.08c20.79-25.52 44.1-46.84 68.93-62 44-26.91 92.75-34.49 140.7-11.9 40.57 19.12 78.45 28.11 115.17 30.55 3.71.24 7.42.42 11.11.53 84.23 2.65 163.17-27.7 255.87-47.29 3.69-.78 7.39-1.55 11.12-2.28C763 .54 836.36-6.4 923.6 8.19a189.09 189.09 0 0126.76 6.4q5.77 1.86 11.12 4c41.64 16.94 64.35 48.24 74 87.46q1.37 5.46 2.37 11.11c17.11 94.34-33 228.16-76.37 321.05z"
        fill="#f2f2f2"
      />
      <path
        d="M497.02 445.61a95.22 95.22 0 01-1.87 11.12h93.7v-11.12zm-78.25 62.81l11.11-.09v-27.47c-3.81-.17-7.52-.34-11.11-.52zm-232.92-62.81v11.12h198.5v-11.12zm849.68-339.52h-74V18.6q-5.35-2.17-11.12-4v91.49H696.87V13.67c-3.73.73-7.43 1.5-11.12 2.28v90.14H429.88V63.24c-3.69-.11-7.4-.29-11.11-.53v43.38H162.9v-62c-24.83 15.16-48.14 36.48-68.93 62h-.07v.08q-4.4 5.4-8.64 11h8.64v328.44h-83q1.66 5.63 3.6 11.12h79.39v93.62a87 87 0 0012.2 2.79c1.21.19 2.43.35 3.65.49a88 88 0 0010.79.54l42.33-.46v-97h255.91v94.21l11.11-.12v-94.07h255.87v91.36l11.12-.12v-91.24h253.49v4.77c.76-1.58 1.54-3.16 2.32-4.77q2.63-5.45 5.33-11.12 1.73-3.64 3.47-7.4v-321h76.42q-1.01-5.69-2.37-11.12zM162.9 445.61V117.17h255.87v328.44zm267 0V117.17h255.85v328.44zm520.48 0H696.87V117.17h253.49z"
        opacity={0.1}
      />
      <path
        fill="#65617d"
        d="M863.09 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l46.65-28 93.6-.78 2-.01.66-.01 2-.03 44.94-.37 2.01-.01.64-.01 2-.01 14.41-.12.38-.01 35.55-.3h.29l277.4-2.34 6.79-.05h.68l5.18-.05 37.65-.31 2-.03 1.85-.02h.96l11.71-.09 2.32-.03 3.11-.02 9.75-.09 15.47-.13 2-.02 3.48-.02h.65l74.71-.64 56.16 28.5z"
      />
      <path
        opacity={0.2}
        d="M863.09 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l46.65-28 93.6-.78 2-.01.66-.01 2-.03 44.94-.37 2.01-.01.64-.01 2-.01 14.41-.12.38-.01 35.55-.3h.29l277.4-2.34 6.79-.05h.68l5.18-.05 37.65-.31 2-.03 1.85-.02h.96l11.71-.09 2.32-.03 3.11-.02 9.75-.09 15.47-.13 2-.02 3.48-.02h.65l74.71-.64 56.16 28.5z"
      />
      <path
        d="M296.1 483.66v24.49a6.13 6.13 0 01-3.5 5.54 6 6 0 01-2.5.6l-34.9.74a6 6 0 01-2.7-.57 6.12 6.12 0 01-3.57-5.57v-25.23z"
        fill="#3f3d56"
      />
      <path
        d="M296.1 483.66v24.49a6.13 6.13 0 01-3.5 5.54 6 6 0 01-2.5.6l-34.9.74a6 6 0 01-2.7-.57 6.12 6.12 0 01-3.57-5.57v-25.23z"
        opacity={0.1}
      />
      <path
        d="M298.1 483.66v24.49a6.13 6.13 0 01-3.5 5.54 6 6 0 01-2.5.6l-34.9.74a6 6 0 01-2.7-.57 6.12 6.12 0 01-3.57-5.57v-25.23zM680.92 483.65h47.17v31.5h-47.17z"
        fill="#3f3d56"
      />
      <path opacity={0.1} d="M680.92 483.65h47.17v31.5h-47.17z" />
      <path fill="#3f3d56" d="M678.92 483.65h47.17v31.5h-47.17z" />
      <path opacity={0.1} d="M298.09 483.65v4.97l-47.17 1.26v-6.23h47.17z" />
      <path
        d="M381.35 312.36v168.2a4 4 0 01-3.85 3.95l-191.65 5.1h-.05a4 4 0 01-3.95-3.95v-173.3a4 4 0 013.95-3.95h191.6a4 4 0 013.95 3.95z"
        fill="#65617d"
      />
      <path
        d="M185.85 308.41v181.2h-.05a4 4 0 01-3.95-3.95v-173.3a4 4 0 013.95-3.95z"
        opacity={0.1}
      />
      <path fill={color} d="M194.59 319.15h177.5V467.4l-177.5 4V319.15z" />
      <path opacity={0.1} d="M726.09 483.65v6.41l-47.17-1.26v-5.15h47.17z" />
      <path
        d="M788.35 312.36v173.3a4 4 0 01-4 3.95l-191.69-5.1a4 4 0 01-3.85-3.95v-168.2a4 4 0 013.95-3.95h191.6a4 4 0 013.99 3.95z"
        fill="#65617d"
      />
      <path
        d="M788.35 312.36v173.3a4 4 0 01-4 3.95v-181.2a4 4 0 014 3.95z"
        opacity={0.1}
      />
      <path fill={color} d="M775.59 319.15h-177.5V467.4l177.5 4V319.15z" />
      <path
        d="M583.85 312.36v168.2a4 4 0 01-3.85 3.95l-191.65 5.1a4 4 0 01-4-3.95v-173.3a4 4 0 013.95-3.95h191.6a4 4 0 013.95 3.95z"
        fill="#65617d"
      />
      <path fill={color} d="M397.09 319.15h177.5V467.4l-177.5 4V319.15z" />
      <path
        opacity={0.1}
        d="M863.09 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l202.51-1.33h.48l40.99-.28h.19l283.08-1.87h.29l.17-.01h.47l4.79-.03h1.46l74.49-.5 4.4-.02.98-.01 142.7-.95z"
      />
      <circle cx={487.26} cy={298.15} r={51.33} fill="#fbbebe" />
      <path
        d="M538.6 377.16s-99.5 12-90 0c3.44-4.34 4.39-17.2 4.2-31.85-.06-4.45-.22-9.06-.45-13.65-1.1-22-3.75-43.5-3.75-43.5s87-41 77-8.5c-4 13.13-2.69 31.57.35 48.88.89 5.05 1.92 10 3 14.7a344.67 344.67 0 009.65 33.92z"
        fill="#fbbebe"
      />
      <path
        d="M506.13 373.09c11.51-2.13 23.7-6 34.53-1.54 2.85 1.17 5.47 2.88 8.39 3.86s6.12 1.22 9.16 1.91c10.68 2.42 19.34 10.55 24.9 20s8.44 20.14 11.26 30.72l6.9 25.83c6 22.45 12 45.09 13.39 68.3a2437.62 2437.62 0 01-250.84 1.43c5.44-10.34 11-21.31 10.54-33s-7.19-23.22-4.76-34.74c1.55-7.34 6.57-13.39 9.64-20.22 8.75-19.52 1.94-45.79 17.32-60.65 6.92-6.68 17-9.21 26.63-8.89 12.28.41 24.85 4.24 37 6.11 15.56 2.36 30.26 3.76 45.94.88z"
        fill="#ff6584"
      />
      <path
        d="M637.03 484.26l-.1 1.43v.1l-.17 2.3-1.33 18.51-1.61 22.3-.46 6.28-1 13.44v.17l-107 1-175.59 1.9v.84h-.14v-1.12l.45-14.36.86-28.06.74-23.79.07-2.37a10.53 10.53 0 0111.42-10.17c4.72.4 10.85.89 18.18 1.41l3 .22c42.33 2.94 120.56 6.74 199.5 2 1.66-.09 3.33-.19 5-.31 12.24-.77 24.47-1.76 36.58-3a10.53 10.53 0 0111.6 11.23z"
        opacity={0.1}
      />
      <path
        d="M349.74 552.53v-.84l175.62-1.91 107-1h.3v-.17l1-13.44.43-6 1.64-22.61 1.29-17.9v-.44a10.62 10.62 0 00-.11-2.47.3.3 0 000-.1 10.39 10.39 0 00-2-4.64 10.54 10.54 0 00-9.42-4 937.419 937.419 0 01-36.58 3c-1.67.12-3.34.22-5 .31-78.94 4.69-157.17.89-199.5-2l-3-.22c-7.33-.52-13.46-1-18.18-1.41a10.54 10.54 0 00-11.24 8.53 11 11 0 00-.18 1.64l-.68 22.16-.93 28.07-.44 14.36v1.12z"
        fill="#3f3d56"
      />
      <path
        d="M637.33 491.27l-1.23 15.33-1.83 22.85-.46 5.72-1 12.81-.06.64v.17l-.15 1.48.11-1.48h-.29l-107 1-175.65 1.9v-.28l.49-14.36 1-28.06.64-18.65a6.36 6.36 0 013.06-5.25 6.25 6.25 0 013.78-.9c2.1.17 4.68.37 7.69.59 4.89.36 10.92.78 17.94 1.22 13 .82 29.31 1.7 48 2.42 52 2 122.2 2.67 188.88-3.17 3-.26 6.1-.55 9.13-.84a6.26 6.26 0 013.48.66 5.16 5.16 0 01.86.54 6.14 6.14 0 012 2.46 3.56 3.56 0 01.25.61 6.28 6.28 0 01.36 2.59zM298.1 504.96v3.19a6.13 6.13 0 01-3.5 5.54l-40.1.77a6.12 6.12 0 01-3.57-5.57v-3z"
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M298.59 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
      <path opacity={0.1} d="M298.59 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
      <path fill="#3f3d56" d="M300.59 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
      <path
        d="M679.22 506.96v3.19a6.13 6.13 0 003.5 5.54l40.1.77a6.12 6.12 0 003.57-5.57v-3z"
        opacity={0.1}
      />
      <path opacity={0.1} d="M678.72 517.57l52.25 1v-8.67l-52.25-1v8.67z" />
      <path
        fill="#3f3d56"
        d="M676.72 517.57l52.25 1v-8.67l-52.25-1v8.67zM454.79 313.88c.08 7-3.16 13.6-5.91 20.07a163.49 163.49 0 00-12.66 74.71c.73 11 2.58 22 .73 32.9s-8.43 21.77-19 24.9c17.53 10.45 41.26 9.35 57.76-2.66 8.79-6.4 15.34-15.33 21.75-24.11a97.86 97.86 0 01-13.31 44.75 103.43 103.43 0 0073.51-40.82c4.31-5.81 8.06-12.19 9.72-19.23 3.09-13-1.22-26.51-4.51-39.5a266.06 266.06 0 01-6.17-33c-.43-3.56-.78-7.22.1-10.7 1-4.07 3.67-7.51 5.64-11.22 5.6-10.54 5.73-23.3 2.86-34.88s-8.49-22.26-14.06-32.81c-4.46-8.46-9.3-17.31-17.46-22.28-5.1-3.1-11-4.39-16.88-5.64l-25.37-5.43c-5.55-1.19-11.26-2.38-16.87-1.51-9.47 1.48-16.14 8.32-22 15.34-4.59 5.46-15.81 15.71-16.6 22.86-.72 6.59 5.1 17.63 6.09 24.58 1.3 9 2.22 6 7.3 11.52 3.21 3.42 5.28 7.37 5.34 12.16z"
      />
      <path
        d="M300.26 333.59h-99.6a.5.5 0 010-1h99.6a.5.5 0 010 1zM300.26 342.59h-99.6a.5.5 0 010-1h99.6a.5.5 0 010 1zM300.26 351.59h-99.6a.5.5 0 010-1h99.6a.5.5 0 010 1z"
        fill="#f2f2f2"
      />
    </svg>
  );
};

SvgProgrammer.propTypes = {
  color: PropTypes.string
};
SvgProgrammer.defaultProps = {
  color: "primary"
};
export default SvgProgrammer;
