import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgShare = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 980.986 705.663"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M930.05 482.742H524.947V0H930.05v73.542h-2V2H526.947v478.742H928.05V308.134h2v174.608zM455.79 705.396H50.688V530.787h2v172.609H453.79V224.653H52.688v71.543h-2v-73.543H455.79v482.743z"
      />
      <path
        d="M711.982 33.984c-20.743 0-37.558 18.661-37.558 41.681v29.247h8.995l5.208-10.836-1.302 10.836h57.817l4.734-9.85-1.184 9.85h6.51V81.948c0-26.49-19.35-47.964-43.22-47.964z"
        fill="#2f2e41"
      />
      <path
        d="M659.661 253.919l18.038 85.483s0 32.154 3.921 42.349 14.9 43.918 14.9 43.918l14.901-3.922-3.137-33.722s-.784-30.586-5.49-38.428l-1.568-79.993zM716.127 275.093l39.996 72.151s8.627 26.664 14.9 32.938l16.47 31.37 12.548-4.705-10.98-49.408s-8.626-23.527-16.469-31.37c0 0-10.98-64.308-23.527-68.229s-32.938 17.253-32.938 17.253z"
        fill="#ffb8b8"
      />
      <path
        d="M712.99 414.689l-20.39 4.706v23.527l-11.764 25.88s-3.662 8.41 2.352 10.195c5.642 1.675 23.368 8.226 25.88-6.274a27.78 27.78 0 013.202-9.188 40.24 40.24 0 004.632-27.546zM802.394 401.357l-18.838 2.695 3.937 40.438a6.87 6.87 0 011.569 4.706c0 3.137-1.569 16.469 10.195 15.685s15.685-6.274 15.685-9.411-6.274-24.312-6.274-24.312z"
        fill="#2f2e41"
      />
      <circle cx={705.932} cy={73.542} r={21.959} fill="#ffb8b8" />
      <path
        d="M722.4 82.953s3.138 19.607 10.196 23.528 16.469 8.626 16.469 8.626 16.47 1.569 17.253 14.117l-1.568 10.195-87.835-1.568-3.137-24.312 25.095-6.274s2.353-13.332 0-19.606 23.528-4.706 23.528-4.706z"
        fill="#ffb8b8"
      />
      <path
        d="M673.778 135.498l-43.911 3.05c-9.645.669-18.242-6.669-18.51-16.333a10.634 10.634 0 012.034-7.108c6.274-7.842 36.075-38.428 36.075-38.428s20.39-12.547 24.312-11.763-7.843 19.606-14.901 21.174-.784-.784-.784-.784L628.29 119.03l36.86-3.922z"
        fill="#ffb8b8"
      />
      <path
        d="M427.133 705.185c-.23-.375-5.641-9.41-7.517-28.172-1.72-17.213-.614-46.227 14.433-86.699 28.505-76.67-6.57-138.533-6.928-139.149l1.73-1.004c.091.156 9.142 15.929 14.489 41.044a179.061 179.061 0 01-7.416 99.807c-28.457 76.54-7.301 112.773-7.084 113.13z"
        fill="#3f3d56"
      />
      <circle cx={415.986} cy={433.663} r={13} fill={color} />
      <circle cx={456.986} cy={481.663} r={13} fill={color} />
      <circle cx={428.986} cy={513.663} r={13} fill={color} />
      <circle cx={462.986} cy={540.663} r={13} fill={color} />
      <circle cx={418.986} cy={582.663} r={13} fill={color} />
      <path
        d="M434.986 705.663s-13-32 26-56zM418.998 705.083s-5.916-34.03-51.708-33.738z"
        fill="#3f3d56"
      />
      <path
        d="M285.776 392.265l-4.116 27.393-47.045 31.82s-24.735 11.853-23.178 19.217c1.388 6.565 20.475 5.788 26.481-4.363l56.246-25.57 18.811-37.24zM292.023 653.434l2.081 29.141 20.121-1.388-3.469-27.753h-18.733z"
        fill="#a0616a"
      />
      <path
        d="M297.573 673.555s-2.775-10.407-5.55-9.713l-4.163 7.632s-18.733 17.345-24.284 18.04c0 0-18.04 5.55 0 13.876h20.815s13.876-.694 16.651 0 18.734.693 19.427-3.47-2.081-12.488-2.081-12.488-2.559-20.47-5.442-16.48a54.484 54.484 0 01-4.965 6.072z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M344.059 653.781l2.082 29.141 20.121-1.388-3.47-27.753h-18.733z"
      />
      <path
        d="M349.61 673.902s-2.775-10.407-5.55-9.713l-4.164 7.632s-18.733 17.345-24.283 18.039c0 0-18.04 5.55 0 13.876h20.814s13.877-1.387 16.652-.693 18.733.693 19.427-3.47-2.081-11.794-2.081-11.794-2.56-20.47-5.443-16.48a54.484 54.484 0 01-4.965 6.072zM264.964 474.775l-3.47 4.857v9.714l22.203 82.564 4.163 18.04s0 69.382 4.163 69.382 22.896 2.081 22.896-2.082-1.388-98.522-1.388-98.522l18.733 35.385s8.326 62.444 11.101 63.137 22.203 0 23.59-4.162l-4.163-39.548s.694-44.405-11.1-54.118c0 0-2.082-11.795-4.164-16.652s-5.55-7.632-3.469-11.101-2.775-41.63-2.775-41.63 1.388-11.794-1.388-15.264-74.932 0-74.932 0z"
        fill="#2f2e41"
      />
      <circle cx={309.368} cy={295.77} r={21.508} fill="#a0616a" />
      <path
        d="M322.898 308.605l-1.388 13.877 5.55 4.856-35.384 16.652c8.716-14.892 11.298-28.452 6.938-38.16z"
        fill="#a0616a"
      />
      <path
        d="M298.614 329.42s-5.55 11.101 1.388 8.326l21.508-15.264s23.59 9.02 31.916 19.427l-6.938 73.545-5.55 52.036s3.468 6.245 2.774 6.939-1.387-.694-.693 1.387 2.775 0 .693 2.082-4.163 0-2.081 2.081 0 2.775 0 2.775-2.775-16.651-27.06-4.163-34.69 15.958-52.73.694l20.815-79.095 1.68-29.832a122.88 122.88 0 015.281-29.359c1.591-5.15 4.363-10.212 8.997-12.967z"
        fill="#d0cde1"
      />
      <path
        d="M335.733 390.13l10.408 25.67-24.284 51.343s-5.55 6.245-2.081 13.877a91.718 91.718 0 006.244 11.795s6.244-2.775 6.244-14.57l35.385-50.65-2.775-41.629z"
        fill="#a0616a"
      />
      <path
        d="M334.346 344.337a26.517 26.517 0 00-5.55 24.978c4.162 15.264 7.631 27.059 7.631 27.059s16.652-12.49 30.528-4.857c0 0-2.081-45.098-13.876-49.261s-18.733 2.081-18.733 2.081z"
        fill="#d0cde1"
      />
      <path
        d="M327.05 277.318s-6.572-14.238-19.167-10.952-19.715 8.214-20.262 13.143a70.319 70.319 0 00.273 12.322s1.37-10.132 10.131-7.941 22.453.548 22.453.548l2.19 19.714s3.736-3.982 6.474-1.791 6.67-20.662-2.092-25.043zM684.757 115.892l-9.411-9.411-4.705 4.705-17.254 3.137s14.117 18.038 14.9 25.88l10.196 43.918s-50.976 60.387-34.507 69.798 59.603 27.448 61.171 23.527a49.348 49.348 0 002.353-9.41s-2.353 10.979 3.137 10.979 52.545-2.353 50.976-14.117-20.39-65.092-20.39-65.092l9.41-42.35s25.88 0 26.665-6.273l-9.411-7.843 3.137-15.685-16.47-.784-2.352 3.137-12.548-4.705-4.705 2.352-31.37-4.705-3.921-3.921H687.11z"
        fill="#2f2e41"
      />
      <path
        d="M590.245 449.91c5.391 19.928 23.856 32.27 23.856 32.27s9.725-19.968 4.334-39.896-23.856-32.27-23.856-32.27-9.725 19.968-4.334 39.896z"
        fill={color}
      />
      <path
        d="M598.167 445.627c14.793 14.4 16.6 36.537 16.6 36.537s-22.178-1.211-36.97-15.611-16.6-36.537-16.6-36.537 22.177 1.21 36.97 15.611z"
        fill="#3f3d56"
      />
      <path
        d="M722.66 45.466a19.698 19.698 0 00-15.543-7.932h-.737c-14.217 0-25.743 12.865-25.743 28.735h4.764l.77-5.856 1.128 5.856h28.253l2.368-4.954-.592 4.954h5.558q3.89 19.322-11.18 38.643h9.468l4.735-9.908-1.184 9.908h18.05l3.55-22.79c0-17.067-9.917-31.54-23.666-36.656z"
        fill="#2f2e41"
      />
      <path
        d="M753.378 290.386v-35.432c0-30.93 13.495-60.592 37.572-80.006 17.997-14.51 44.063-25.362 81.405-22.937L858.13 95.11l122.856 84.06-120.27 84.06 12.286-53.67s-75.007-14.225-119.624 80.827zM227.608 518.41v-35.432c0-30.93-13.494-60.591-37.572-80.006-17.997-14.51-44.063-25.361-81.405-22.937l14.225-56.901L0 407.194l120.27 84.059-12.286-53.67s75.007-14.225 119.624 80.828z"
        fill={color}
      />
      <path
        d="M766.318 142.556l-.784 47.839 3.921 56.466s6.274 32.154-7.842 26.664-8.627-29.801-8.627-29.801l-.784-57.25V143.34z"
        fill="#ffb8b8"
      />
      <path
        d="M749.457 140.705v16.73a81.892 81.892 0 0017.103-2.367l.15-16.041z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgShare.propTypes = {
  color: PropTypes.string
};
SvgShare.defaultProps = {
  color: "primary"
};
export default SvgShare;
