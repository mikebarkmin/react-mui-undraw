import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgHappyNews = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 915.112 600.53"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M189.473 260.295c-46.277.213-83.944.897-83.944.897s44.773-59.308 83.776-37.335 83.807 36.562 83.807 36.562-37.362-.338-83.64-.124z"
        fill="#f2f2f2"
      />
      <circle cx={708.362} cy={268.224} r={9.694} fill="#ff6584" />
      <path
        fill="#3f3d56"
        d="M637.396 419.773l72.483-83.234 2.238 1.948-72.484 83.234z"
      />
      <circle cx={710.999} cy={337.513} r={15.608} fill="#3f3d56" />
      <path
        d="M666.326 388.812s29.812-37.63-8.32-63.445M179.855 454.887c53.69 99.57 167.638 142.313 167.638 142.313s26.9-118.691-26.789-218.26-167.638-142.314-167.638-142.314-26.9 118.692 26.789 218.261z"
        fill="#3f3d56"
      />
      <path
        d="M216.758 422.13C313.69 480.447 351.02 596.282 351.02 596.282s-119.826 21.283-216.758-37.035S0 385.096 0 385.096s119.826-21.284 216.758 37.034z"
        fill={color}
      />
      <path
        d="M602.431 422.954c-97.444 57.458-135.798 172.957-135.798 172.957s119.633 22.343 217.077-35.115 135.798-172.958 135.798-172.958-119.633-22.342-217.077 35.116z"
        fill="#3f3d56"
      />
      <path
        d="M636.576 458.577c-54.568 99.091-168.89 140.825-168.89 140.825s-25.85-118.925 28.718-218.016 168.89-140.824 168.89-140.824 25.85 118.924-28.718 218.015z"
        fill={color}
      />
      <path
        d="M438.547 185.845a30.283 30.283 0 01-3.762-40.83 30.598 30.598 0 00-1.777 1.797 30.287 30.287 0 0044.931 40.624 30.601 30.601 0 001.61-1.948 30.283 30.283 0 01-41.002.357z"
        fill="#2f2e41"
      />
      <circle cx={411.114} cy={144.965} r={62.376} fill="#2f2e41" />
      <path
        d="M393.979 225.111l1.848-4.806-33.641 28.466-40.666 22.921s-20.702-79.853-22.181-81.331-28.096-57.672-39.927-31.054 22.921 42.144 22.921 42.144 1.11 97.228 36.6 96.489 79.482-32.902 80.222-35.86-5.176-36.969-5.176-36.969z"
        fill="#ffb8b8"
      />
      <circle cx={403.591} cy={171.876} r={36.969} fill="#ffb8b8" />
      <path
        d="M410.985 198.494s9.612 12.57 6.654 14.048-19.963 2.218-30.314 14.787 12.569 44.363 12.569 44.363l87.246-58.41-35.49-11.83s-24.399-13.31-23.66-27.358z"
        fill="#ffb8b8"
      />
      <path
        d="M528.748 600.53h-98.51c-5.58-40.8-8.16-78.19-8.16-78.19s-1.44 37.61-5.27 78.19h-126.56c17.94-120.16 102.99-250.46 102.99-250.46s.74-17.75 2.96-20.71c2.22-2.95-12.57-3.69-19.23-25.87-4.06-13.54-.41-22.4 3.06-27.24a19.572 19.572 0 014.34-4.56s1.48-15.52 0-17.74c-.19-.29 1.27-1.31 3.97-2.86 2.25-1.3 5.36-2.97 9.08-4.89 21.31-11.05 62.56-30.6 76.69-37.26 3.1-1.47 4.9-2.31 4.9-2.31l25.14 8.87c19.96 6.65 19.96 48.8 19.96 48.8l-1.13 1.72-30.17 45.7-17.5 26.52c4.44 2.95-4.43 21.44-4.43 21.44s12.64 18.16 22.92 45.88a208.67 208.67 0 0111.81 47.85 163.687 163.687 0 01.76 31.96c-2.74 35.62 9.44 78.91 22.38 115.16z"
        fill="#2f2e41"
      />
      <path
        d="M504.503 219.858a6.459 6.459 0 00-9.248 3.458c-2.226 6.122-4.482 18.884-3.678 45.419 1.478 48.798 2.218 82.07 2.218 82.07v73.938s-32.533 70.98-14.788 70.98 30.315-56.192 30.315-56.192 16.266-85.029 11.09-99.816c0 0 14.594-102.157-15.91-119.857z"
        fill="#ffb8b8"
      />
      <ellipse
        cx={399.252}
        cy={139.073}
        rx={31.729}
        ry={21.633}
        fill="#2f2e41"
      />
      <circle cx={449.638} cy={91.817} r={30.287} fill="#2f2e41" />
      <path
        d="M471.272 113.45a30.283 30.283 0 01-30.174-27.763 30.601 30.601 0 00-.113 2.524 30.287 30.287 0 0060.573 0c0-.85-.044-1.69-.112-2.524a30.283 30.283 0 01-30.174 27.763z"
        fill="#2f2e41"
      />
      <ellipse
        cx={580.786}
        cy={309.411}
        rx={2.588}
        ry={5.915}
        transform="rotate(-13.434 -126.148 839.303)"
        fill="#ffb8b8"
      />
      <circle cx={439.451} cy={163.373} r={1.479} fill="#f2f2f2" />
      <path
        d="M87.918 290.03a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10zM607.418 202.53h-26v-26h26zm-24-2h22v-22h-22z"
        fill="#3f3d56"
      />
      <path
        d="M831.473 342.295c-46.277.213-83.944.897-83.944.897s44.773-59.308 83.776-37.335 83.807 36.562 83.807 36.562-37.362-.338-83.64-.124zM689.473 142.295c-46.277.213-83.944.897-83.944.897s44.773-59.308 83.776-37.335 83.807 36.562 83.807 36.562-37.362-.338-83.64-.124zM250.827 167.899L143.82 112.875a14.878 14.878 0 01-6.427-20.035l25.21-49.025a5.894 5.894 0 013.591-2.963l84.342-24.592a13.723 13.723 0 0116.79 8.634l27.712 79.047a15.406 15.406 0 01-.838 12.142l-23.339 45.388a14.878 14.878 0 01-20.034 6.428z"
        fill="#f2f2f2"
      />
      <path
        d="M255.078 148.469l-108.045-46.127c-3.481-1.79-.217.962 1.573-2.52l13.582-55.202 132.356 68.06-33.46 41.373c-1.79 3.482-2.525-3.794-6.006-5.584z"
        opacity={0.1}
      />
      <rect
        x={312.24}
        y={180.347}
        width={110.684}
        height={110.684}
        rx={8.186}
        transform="rotate(-62.787 173.676 277.532)"
        fill={color}
      />
      <path
        opacity={0.1}
        d="M276.863 106.382l-27.817 54.097-98.433-50.616 27.817-54.096 36.985 49.096 61.448 1.519z"
      />
      <path
        d="M213.842 107.921l-47.389-62.907a2.877 2.877 0 00-4.857.415L134.63 97.871a8.984 8.984 0 003.881 12.098l117.49 60.414a8.984 8.984 0 0012.097-3.88l26.505-51.544a3.51 3.51 0 00-3.036-5.115zM205.063 24.829l27.527 14.155-2.001 3.892-27.528-14.155zM195.546 37.865l81.75 42.037-1.144 2.224-81.75-42.037zM191.686 45.373l81.75 42.037-1.144 2.224-81.75-42.036z"
        fill="#f2f2f2"
      />
      <path
        fill="#f2f2f2"
        d="M187.825 52.88l81.75 42.037-1.144 2.224-81.75-42.037z"
      />
      <ellipse
        cx={346.908}
        cy={164.789}
        rx={12.843}
        ry={12.819}
        transform="rotate(-62.787 153.002 206.631)"
        fill="#fff"
      />
      <path
        d="M211.337 1.686a15.32 15.32 0 106.62 20.631 15.366 15.366 0 00-6.62-20.63zM197.8 21.137l-3.392-10.573 2.965-.952 2.444 7.618 16.078-5.158.952 2.965-19.047 6.1z"
        fill="#57b894"
      />
    </svg>
  );
};

SvgHappyNews.propTypes = {
  color: PropTypes.string
};
SvgHappyNews.defaultProps = {
  color: "primary"
};
export default SvgHappyNews;
