import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgADayOff = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 849 798.131"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M169.957 644.109c.174 17.794-10.344 24.11-23.392 24.237q-.455.004-.905-.002-.907-.01-1.796-.065c-11.784-.719-20.998-7.16-21.16-23.71-.167-17.125 21.51-38.95 23.136-40.565l.003-.001.093-.092s23.848 22.405 24.021 40.198zM542.957 643.109c.174 17.794-10.344 24.11-23.392 24.237q-.455.004-.905-.002-.907-.01-1.796-.065c-11.785-.719-20.998-7.16-21.16-23.71-.167-17.125 21.51-38.95 23.136-40.565l.003-.001.093-.092s23.848 22.405 24.021 40.198z"
        fill={color}
      />
      <path fill="#3f3d56" d="M0 666.066h849v2H0z" />
      <circle cx={173} cy={166} r={166} fill={color} />
      <path
        d="M375 518a150 150 0 01150 150H290v-65a85 85 0 0185-85z"
        fill="#3f3d56"
      />
      <path
        d="M700.9 320.06s6.843 88.956-2.737 91.693-43.795 23.266-98.537 17.792c0 0-53.375 28.74-45.163 1.368s45.163-20.528 45.163-20.528 65.69-13.686 68.428-23.266-8.211-49.268-4.106-50.637S700.9 320.06 700.9 320.06z"
        fill="#a0616a"
      />
      <path
        d="M618.925 475.157s5.335 128.516 13.546 147.676c6.84 15.96 10.831 68.002 11.974 84.943.229 3.397.343 5.382.343 5.382s21.897 0 23.266-5.474 5.474-65.691 0-84.851 6.982-151.782 6.982-151.782z"
        fill="#2f2e41"
      />
      <path
        d="M650.263 706.315s-13.686 4.106-16.423 9.58-47.9 15.055-34.214 21.897 54.742-5.474 54.742-5.474 21.897-1.368 20.529-9.58-6.353-18.329-6.353-18.329z"
        fill="#2f2e41"
      />
      <path
        d="M688.583 721.05s-13.686 4.106-16.423 9.58-47.9 15.054-34.214 21.897 54.742-5.474 54.742-5.474 21.897-1.369 20.529-9.58-6.353-18.33-6.353-18.33z"
        fill="#2f2e41"
      />
      <path
        d="M631.103 471.97l19.16 32.846 31.976 114.198s-3.236 104.773.87 104.773 26.002 6.843 27.37 0c1.157-5.78 16.485-61.15 8.845-98.006a471.273 471.273 0 01-9.564-70.705l-3.386-63.946s13.686-24.634-1.369-28.74-73.902 9.58-73.902 9.58z"
        fill="#2f2e41"
      />
      <circle cx={648.894} cy={228.365} r={32.846} fill="#a0616a" />
      <path
        d="M644.788 250.262s5.475 43.795 4.106 46.532 32.846-30.109 32.846-30.109-12.317-19.16-9.58-28.74z"
        fill="#a0616a"
      />
      <path
        d="M721.428 294.057s-38.32-27.372-39.688-32.846L653 285.845l-4.884-5.813s-22.488 22.236-22.488 31.816-1.368 38.32 2.738 46.531-12.318 112.223-12.318 112.223 13.686 12.317 15.055 13.686 56.111-8.212 56.111-8.212 27.371-2.737 27.371-6.843-8.211-65.69-5.474-82.114 12.317-93.062 12.317-93.062z"
        fill="#575a89"
      />
      <path
        d="M729.64 332.377s6.842 88.957-2.738 91.694-43.794 23.265-98.536 17.791c0 0-53.375 28.74-45.163 1.369s45.163-20.529 45.163-20.529 65.69-13.686 68.428-23.266-8.211-49.268-4.106-50.637 36.952-16.422 36.952-16.422z"
        fill="#a0616a"
      />
      <path
        d="M634.864 211.957c4.49-1.598 9.443-2.418 14.02-1.094 6.48 1.875 10.967 7.555 15.807 12.252s11.627 8.86 18 6.652a10.553 10.553 0 012.016-7.794 7.168 7.168 0 001.79-2.98c.272-1.758-1.207-3.276-1.651-5-.777-3.02 1.354-7.157-1.266-8.85-.692-.447-1.568-.549-2.243-1.02-2.649-1.852.293-6.456-1.458-9.173a5.601 5.601 0 00-1.99-1.66c-12.7-7.41-28.23-7.43-42.932-7.243-2.047.026-4.896 1.042-4.32 3.006-2.778-1.995-6.416.806-8.655 3.39l-4.584 5.292a40.76 40.76 0 00-5.602 7.577c-1.4 2.678-1.71 6.795 1.077 7.962-2.072-.868-4.586 11.405 4.966 9.386 5.55-1.174 10.99-8.554 17.025-10.703z"
        fill="#2f2e41"
      />
      <path
        d="M699.531 296.794l21.897-2.737s21.897 42.425 9.58 49.268-43.794 12.317-43.794 9.58 12.317-56.111 12.317-56.111z"
        fill="#575a89"
      />
      <path
        d="M399.425 306.103s6.532 21.463 2.799 27.995 6.532 20.53 23.33 13.997 17.73-13.997 17.73-13.997-6.533-10.265-8.4-31.728zM314.04 516.531s-33.594 16.797-18.663 39.193c8.678 13.018 25.24 38.332 37.587 57.25a190.929 190.929 0 0123.516 51.27l2.352 8.125 9.332 11.198 19.596-22.396s-28.928-53.19-28.928-63.455-23.33-42.925-23.33-42.925l23.33-14.93s-26.129-29.862-44.792-23.33zM423.22 574.387s.933 26.129 1.867 36.394c.77 8.468-6.717 32.18-4.122 58.559a247.96 247.96 0 01-.565 51.278l-3.712 33.87 27.995 2.8 9.332-76.52s5.599-54.124 2.799-71.854l.933-37.326s-20.53-7.465-34.527 2.8z"
        fill="#ffb9b9"
      />
      <path
        d="M373.296 465.674s-65.321 41.992-66.255 55.056c0 0 37.327-3.732 38.26 28.928 0 0 22.396-8.398 27.995-10.264s35.46-21.463 35.46-21.463 12.131 9.332 12.131 24.262-.933 41.06 0 42.926 22.396-25.196 40.126-1.867l12.131-64.388s3.733-39.193-3.732-41.992l-52.257-19.597z"
        fill="#2f2e41"
      />
      <circle cx={412.955} cy={289.773} r={27.995} fill="#ffb9b9" />
      <path
        d="M405.957 338.764s31.576 8.34 35.851-7.495c0 0 38.802 7.495 45.334 32.69s-15.864 85.851-15.864 87.717 18.663 13.065 10.265 18.664-15.864-.933-12.131 6.532 10.265 9.331 4.666 11.198-39.193-27.062-65.322-19.597-39.193 1.867-39.193 1.867l-11.716-101.26a23.39 23.39 0 018.317-20.758c5.848-4.814 13.607-10.014 21.13-11.425 14.93-2.799 15.55-4.332 15.55-4.332z"
        fill="#d0cde1"
      />
      <path
        d="M376.095 502.067s8.399 47.592 19.597 41.06-2.8-41.06-2.8-41.06zM415.078 508.226s-14.552 46.084-1.603 45.468 16.498-37.704 16.498-37.704z"
        fill="#ffb9b9"
      />
      <path
        d="M363.498 670.503s-6.532-7.465-10.265 2.8-13.997 23.329-13.997 23.329-22.396 25.195-6.533 26.128 38.26-22.396 38.26-22.396l26.129-24.262s-8.66-21.09-12.729-21.276-3.135 25.009-20.865 15.677zM424.153 747.956s-6.576 1.92-6.087-6.04c0 0-23.774 12.572-17.242 21.903s13.998 18.664 13.998 18.664 34.527 19.596 37.326 14.93 2.8-13.997.933-17.73-11.198-10.265-8.398-15.864-.933-20.53-5.6-20.53-14.93 4.667-14.93 4.667zM388.525 266.051s9.005-19.512 26.266-15.01 27.017 11.258 27.768 18.012-.376 16.886-.376 16.886-1.876-13.884-13.883-10.882-30.77.75-30.77.75l-3.002 27.018s-3.377-4.879-7.13-1.877-10.88-28.893 1.127-34.897z"
        fill="#2f2e41"
      />
      <path
        d="M471.278 363.026s-22.396 60.656-20.53 68.12 0 8.4-2.799 10.266-10.265 21.462-10.265 21.462-4.666 11.198-8.398 13.998-3.733 10.265-3.733 10.265-9.332 9.331-7.465 11.198 1.866 4.665-1.867 7.465-7.465 6.532-5.599 7.465 14.931 11.198 18.664 10.265-1.867-4.666 2.8-6.532 7.465-4.666 5.598-5.6-7.465-.932-1.866-2.799 25.195-13.997 31.727-28.928 37.83-105.264 18.915-117.953c0 0-7.717-9.89-15.182 1.308zM367.697 352.761l-.379.158a23.498 23.498 0 00-13.96 16.897c-2.038 9.753-4.043 23.86-2.458 37.069 2.8 23.329 4.666 33.593 8.398 41.059s4.666 4.666 3.733 10.265-5.599.933-.933 8.398 7.465 5.599 5.599 9.332-4.666 3.732-.933 8.398 3.732 6.532 4.666 8.399 3.732 15.863 3.732 15.863 14.93-4.665 23.33-2.8c0 0-7.466-13.063-5.6-15.863s4.666-3.733 1.867-6.532-7.466-1.866-2.8-4.666-3.732-31.727-3.732-31.727z"
        fill="#d0cde1"
      />
      <path fill="#3f3d56" d="M189 666h-34l15.5-525L189 666z" />
      <path
        fill="#3f3d56"
        d="M173.5 240.5L210 190l-37 63-4-7 4.5-5.5zM169.5 291.5L133 241l37 63 4-7-4.5-5.5zM171.773 402.42l16.454-9.5 5 8.66-16.454 9.5z"
      />
    </svg>
  );
};

SvgADayOff.propTypes = {
  color: PropTypes.string
};
SvgADayOff.defaultProps = {
  color: "primary"
};
export default SvgADayOff;
