import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSwipeOptions = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 494.896 727.778"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M355.03 306.32s2.403 32.439 2.403 33.64-16.82 84.102-16.82 84.102-24.03 45.655 0 44.454 16.82-43.252 16.82-43.252l25.23-69.685-10.812-49.26zM473.975 669.159l3.604 26.432-25.231 2.403 3.605-32.44 18.022 3.605zM394.679 669.159l-3.605 26.432 25.231 2.403-3.605-32.44-18.021 3.605z"
        fill="#ffb8b8"
      />
      <path
        d="M367.045 421.66l-6.008 8.41s-3.604 36.043 0 48.058 10.814 67.281 10.814 70.885 1.201 6.008 0 7.21 0 13.215 0 13.215v6.007l15.619 88.908s-9.612 10.813-2.403 10.813 33.64 0 32.439-12.014l-2.403-1.202s-3.604-79.296-2.403-82.9 2.403-26.432 2.403-26.432l10.813-73.289 20.425 70.886 4.806 105.728s-4.806 12.015 0 14.417 25.23 10.814 26.432-1.201 7.208-116.541 7.208-121.347-2.402-79.296-2.402-79.296 1.201-12.015 2.402-14.418-1.201-4.805 0-8.41-2.402-15.619-2.402-15.619l-54.066-14.417zM409.096 690.785s6.007-6.007-2.403-6.007a39.107 39.107 0 00-15.62 3.604l-6.006 21.627s-24.63 19.824 3.003 17.42 31.839-3.003 33.04-5.406c.843-1.686-.68-19.352-1.664-29.736a2.79 2.79 0 00-4.496-1.956 4.724 4.724 0 01-5.854.454zM460.758 690.785s-6.007-6.007 2.403-6.007a39.107 39.107 0 0115.62 3.604l6.006 21.627s24.63 19.824-3.003 17.42-35.443-3.003-36.645-5.406c-.836-1.674 2.407-19.088 4.453-29.501a3.438 3.438 0 015.473-2.063 4.69 4.69 0 005.693.326z"
        fill="#2f2e41"
      />
      <path
        d="M371.85 202.994s4.806 24.03 4.806 27.634 20.425 14.417 20.425 14.417l22.828-28.835s-14.418-20.425-14.418-25.23z"
        fill="#ffb8b8"
      />
      <path
        d="M389.872 234.232s-10.471-2.787-13.646-7.401c0 0-33.21 32.631-33.21 38.639l26.432 46.857s0 16.82 2.403 18.021 0 0 0 4.806-7.21 36.044-4.806 40.85 4.806 1.201 2.403 8.41-8.41 45.655-8.41 45.655 21.626-7.208 52.863 4.806 68.483-4.806 68.483-4.806-9.611-21.626-7.208-28.835-6.008-20.424-6.008-20.424l-6.007-110.534s8.41-49.26 2.403-51.663l-12.014-4.806-38.476-4.729s-9.583 23.952-25.202 25.154z"
        fill="#3f3d56"
      />
      <path
        d="M355.03 257.06l-12.014 8.41s-6.008 18.022 0 26.432 8.41 20.425 8.41 20.425l24.029-2.403z"
        fill="#3f3d56"
      />
      <path
        d="M358.89 172.947V63.402A63.402 63.402 0 00295.49 0H63.402A63.402 63.402 0 000 63.402v600.974a63.402 63.402 0 0063.402 63.402h232.086a63.402 63.402 0 0063.402-63.402V250.923z"
        fill="#e6e6e6"
      />
      <path
        d="M298.047 16.495h-30.295a22.495 22.495 0 01-20.827 30.99h-132.96a22.495 22.495 0 01-20.827-30.99H64.842a47.348 47.348 0 00-47.347 47.348v600.092a47.348 47.348 0 0047.347 47.348h233.205a47.348 47.348 0 0047.348-47.348V63.843a47.348 47.348 0 00-47.348-47.348z"
        fill="#fff"
      />
      <path
        d="M328.842 284.711H40.574a5.345 5.345 0 01-5.338-5.338v-71.507a5.345 5.345 0 015.338-5.338h288.268a5.345 5.345 0 015.338 5.338v71.507a5.345 5.345 0 01-5.338 5.338zM40.574 204.663a3.206 3.206 0 00-3.203 3.203v71.507a3.206 3.206 0 003.203 3.203h288.268a3.206 3.206 0 003.203-3.203v-71.507a3.206 3.206 0 00-3.203-3.203z"
        fill="#e6e6e6"
      />
      <circle cx={85.365} cy={240.876} r={21.745} fill="#e6e6e6" />
      <path
        d="M135.586 226.379a3.624 3.624 0 000 7.248h170.857a3.624 3.624 0 100-7.248zM135.586 248.124a3.624 3.624 0 000 7.248h73.52a3.624 3.624 0 100-7.248zM328.842 516.711H40.574a5.345 5.345 0 01-5.338-5.338v-71.507a5.345 5.345 0 015.338-5.338h288.268a5.345 5.345 0 015.338 5.338v71.507a5.345 5.345 0 01-5.338 5.338zM40.574 436.663a3.206 3.206 0 00-3.203 3.203v71.507a3.206 3.206 0 003.203 3.203h288.268a3.206 3.206 0 003.203-3.203v-71.507a3.206 3.206 0 00-3.203-3.203z"
        fill="#e6e6e6"
      />
      <circle cx={85.365} cy={472.876} r={21.745} fill="#e6e6e6" />
      <path
        d="M135.586 458.379a3.624 3.624 0 000 7.248h170.857a3.624 3.624 0 100-7.248zM135.586 480.124a3.624 3.624 0 000 7.248h73.52a3.624 3.624 0 100-7.248z"
        fill="#e6e6e6"
      />
      <path
        d="M332.176 330.866v71.51a5.343 5.343 0 01-5.33 5.34h-147.95v-80.8h151.52a5.294 5.294 0 011.76 3.95z"
        fill={color}
      />
      <path fill="#fff" d="M254.535 325.526h2v80.05h-2z" />
      <path
        d="M330.416 326.916a5.24 5.24 0 00-3.57-1.39H38.576a5.352 5.352 0 00-5.34 5.34v71.51a5.352 5.352 0 005.34 5.34h288.27a5.343 5.343 0 005.33-5.34v-71.51a5.294 5.294 0 00-1.76-3.95zm-.37 75.46a3.21 3.21 0 01-3.2 3.2H38.576a3.203 3.203 0 01-3.2-3.2v-71.51a3.197 3.197 0 013.2-3.2h288.27a3.203 3.203 0 013.2 3.2z"
        fill="#e6e6e6"
      />
      <path
        d="M130.446 363.376h-68.86a3.625 3.625 0 000 7.25h68.86a3.625 3.625 0 000-7.25z"
        fill="#e6e6e6"
      />
      <path
        d="M213.31 358.636a6.6 6.6 0 00-8.89.666 6.783 6.783 0 00.338 9.383l8.43 8.43a1 1 0 001.415 0l8.43-8.43a6.783 6.783 0 00.337-9.383 6.6 6.6 0 00-8.89-.666.952.952 0 01-1.17 0zM301.115 377.816h-12.439a1 1 0 01-.97-.758l-3.5-14a1 1 0 01.97-1.242h19.439a1 1 0 01.97 1.242l-3.5 14a1 1 0 01-.97.758z"
        fill="#fff"
      />
      <path
        d="M294.896 366.316a.5.5 0 00-.5.5v7a.5.5 0 001 0v-7a.5.5 0 00-.5-.5zM298.47 373.682a.5.5 0 00.965.269l1.885-6.74a.5.5 0 00-.963-.27zM288.953 366.575a.493.493 0 00-.135.018.501.501 0 00-.347.617l1.886 6.74a.5.5 0 00.963-.269l-1.885-6.741a.502.502 0 00-.482-.365z"
        fill={color}
      />
      <path
        d="M303.896 359.816h-7v-1a2 2 0 00-4 0v1h-7a.5.5 0 000 1h18a.5.5 0 000-1z"
        fill="#fff"
      />
      <circle cx={382.664} cy={180.166} r={31.238} fill="#ffb8b8" />
      <path
        d="M358.814 147.153l-5.419-2.169s11.33-12.473 27.093-11.389l-4.433-4.88s10.837-4.34 20.689 7.05c5.179 5.986 11.17 13.023 14.906 20.95h5.803l-2.422 5.334 8.477 5.332-8.7-.958a29.509 29.509 0 01-.823 13.812l.233 4.215s-10.085-15.604-10.085-17.773v5.423s-5.419-4.88-5.419-8.135l-2.956 3.796-1.477-5.965-18.226 5.965 2.955-4.88-11.33 1.627 4.434-5.966s-12.808 7.05-13.3 13.016-6.897 13.558-6.897 13.558l-2.955-5.423s-4.434-24.405 9.852-32.54z"
        fill="#2f2e41"
      />
      <path
        d="M443.938 267.873s-6.958 17.89-5.504 35.591a18.76 18.76 0 003.101 8.863l-85.237 40.466s-38.513 3.987-28.901 20.808 44.454-8.41 44.454-8.41 91.31-13.216 98.519-26.432 12.015-68.483 12.015-68.483z"
        fill="#ffb8b8"
      />
      <path
        d="M447.542 218.613h18.022s13.216 2.403 16.82 26.432 7.21 30.036 3.605 30.036-46.857-1.201-46.857-2.403 8.41-54.065 8.41-54.065z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgSwipeOptions.propTypes = {
  color: PropTypes.string
};
SvgSwipeOptions.defaultProps = {
  color: "primary"
};
export default SvgSwipeOptions;
