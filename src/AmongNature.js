import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAmongNature = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 870.661 688.953"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M80.859 603l-9.5 71h19l-9.5-71z" />
      <path fill="#3f3d56" d="M70.859 609l-9.5 71h19l-9.5-71z" />
      <path
        fill="#3f3d56"
        d="M58.859 609l-9.5 71h19l-9.5-71zM652.859 581l-9.5 71h19l-9.5-71z"
      />
      <path fill="#3f3d56" d="M665.859 581l-9.5 71h19l-9.5-71z" />
      <path fill="#3f3d56" d="M675.859 596l-9.5 71h19l-9.5-71z" />
      <path
        fill="#3f3d56"
        d="M688.859 596l-9.5 71h19l-9.5-71zM744.859 607l-9.5 71h19l-9.5-71z"
      />
      <path fill="#3f3d56" d="M757.859 607l-9.5 71h19l-9.5-71z" />
      <path
        fill="#3f3d56"
        d="M775.889 682h-16.06l.54-4 3.38-25.26.11-.87 4-29.87 4.38 32.75 2.12 15.83 1.53 11.42z"
      />
      <path
        fill="#3f3d56"
        d="M788.889 682h-16.06l1.53-11.42 1.99-14.84 4.51-33.74 4.82 36.04v.01l1.41 10.53 1.8 13.42z"
      />
      <path
        fill="#3f3d56"
        d="M802.419 682h-17.12l1.79-13.42 1.32-9.85 5.45-40.73 5.84 43.62.66 4.96 2.06 15.42z"
      />
      <path
        fill="#3f3d56"
        d="M815.419 682h-17.12l2.06-15.42.62-4.63 5.88-43.95 6 44.87.32 2.34 2.24 16.79z"
      />
      <path
        fill="#3f3d56"
        d="M823.419 682h-13.12l2.27-16.95.29-2.18 4-29.87 4.61 34.49 1.89 14.09.06.42z"
      />
      <path
        fill="#3f3d56"
        d="M836.419 682h-13.12l.06-.42 1.75-13.08 4.75-35.5 5.13 38.31 1.43 10.69z"
      />
      <circle cx={95.859} cy={95.5} r={95.5} fill="#ff6584" />
      <path
        d="M870.359 688h-870s176.64-67.87 436.81-67.1c1.46 0 2.92.01 4.38.02q7.785.045 15.66.17 6.165.105 12.38.26c1.79.04 3.58.09 5.38.14l2.14.06c1.65.05 3.31.1 4.98.16 3.13.1 6.27.22 9.42.34q4.14.165 8.32.36c1.06.04 2.14.09 3.21.15q7.575.345 15.21.8l3.55.21c1.63.09 3.27.2 4.9.3q3.24.21 6.48.43c2.81.19 5.61.39 8.42.6q8.82.645 17.74 1.42c4.42.37 8.85.78 13.3 1.2q2.835.27 5.69.56 4.365.42 8.75.89l5.59.6c2.25.24 4.49.49 6.74.75 2.24.26 4.5.52 6.75.79q3.39.405 6.78.82c2.27.28 4.53.56 6.8.86 2.24.28 4.48.58 6.73.88q14.37 1.905 28.95 4.15c1.86.28 3.74.57 5.61.87q2.895.45 5.81.93 4.05.645 8.13 1.34c2.33.39 4.66.78 7 1.19 2.11.36 4.24.73 6.36 1.11l.66.12c2.34.41 4.69.84 7.03 1.27 2.35.43 4.71.87 7.06 1.31q3.54.66 7.08 1.35c2.37.46 4.73.92 7.1 1.39l5.54 1.11c.92.19 1.84.37 2.76.56q2.97.615 5.96 1.24 3.57.75 7.15 1.51c.27.06.53.12.8.17q5.55 1.2 11.11 2.44c.5.11 1.01.23 1.52.34q2.91.645 5.82 1.32c1.94.45 3.88.89 5.83 1.35a2.048 2.048 0 01.24.05c2.75.64 5.49 1.29 8.25 1.96q2.055.48 4.11.99c1.88.45 3.75.91 5.63 1.38 1.23.31 2.46.62 3.7.93.91.21 1.82.44 2.73.68q2.88.705 5.77 1.46 2.685.69 5.37 1.39a.834.834 0 01.15.04l1.28.33c1.31.34 2.62.69 3.94 1.04 1.35.36 2.71.72 4.07 1.09 1.19.32 2.39.64 3.58.97a.296.296 0 01.1.02c.17.04.34.09.51.14 1.38.37 2.76.74 4.14 1.13 1.38.38 2.76.76 4.15 1.15.14.03.28.07.42.11q1.605.435 3.21.9s0-.01.01 0c.61.16 1.22.34 1.83.51q2.445.69 4.89 1.39c1.05.3 2.11.6 3.16.91 2.93.85 5.87 1.7 8.81 2.57s5.89 1.75 8.83 2.64c1.77.53 3.53 1.07 5.3 1.62q2.49.75 4.98 1.53c2.48.77 4.97 1.54 7.45 2.33z"
        fill="#e6e6e6"
      />
      <path
        d="M870.057 688.953c-246.232-77.947-469.509-73.795-613.454-56.585C100.655 651.013 1.699 688.557.718 688.934L0 687.066c.984-.378 100.173-38.01 256.365-56.684a1486.92 1486.92 0 01276.89-7.083 1444.325 1444.325 0 01337.406 63.748z"
        fill="#3f3d56"
      />
      <circle cx={706.859} cy={199.451} r={163.5} fill={color} />
      <path
        d="M828.48 90.245A163.513 163.513 0 01556.041 263.29a163.514 163.514 0 10272.44-173.044z"
        opacity={0.2}
      />
      <path
        fill="#3f3d56"
        d="M707.308 199.451h.449L715.842 663h-17.068l8.534-463.549z"
      />
      <path
        fill="#3f3d56"
        d="M733.312 444.79l3.767 7.153-27.027 14.23-3.767-7.155z"
      />
      <path
        fill="#2f2e41"
        d="M422.456 287.501l48.875 11.185 20.65-38.948-41.792-16.316-27.733 44.079z"
      />
      <path
        d="M448.423 497.164s-15.711 36.004-15.711 46.478c0 0 6.219 28.476 4.255 36.331l-6.874 14.73-14.401-5.892-3.928-39.278.655-62.843zM457.26 281.793s1.31 21.603-1.309 28.15 9.82 18.983 9.82 18.983l19.638-25.53s-13.092-13.093-9.82-27.494zM419.292 333.508v34.695l-2.945 63.171s-18.984 35.35-.655 32.731 12.11-33.713 12.11-33.713l6.22-61.861-.328-37.641z"
        fill="#ffb9b9"
      />
      <path
        d="M412.091 584.228l28.15-11.128 3.272 55.642s5.892 17.02 3.928 23.567c0 0 1.31 11.128-1.964 11.783s-12.438 1.964-13.092 1.31-.655-2.62-.655-2.62-6.546 4.583-7.2 9.82c0 0-27.495 8.51-28.15.655s13.748-14.402 13.748-14.402l11.128-17.02z"
        fill="#2f2e41"
      />
      <path
        d="M507.011 497.164s-15.71 36.004-15.71 46.478c0 0 6.218 28.476 4.255 36.331l-6.874 14.73-14.402-5.892-3.927-39.278.654-62.843z"
        fill="#ffb9b9"
      />
      <path
        d="M471.662 584.228L499.81 573.1l3.273 55.642s5.891 17.02 3.927 23.567c0 0 1.31 11.128-1.963 11.783s-12.438 1.964-13.093 1.31-.654-2.62-.654-2.62-6.547 4.583-7.201 9.82c0 0-27.494 8.51-28.149.655s13.747-14.402 13.747-14.402l11.129-17.02z"
        fill="#2f2e41"
      />
      <circle cx={463.806} cy={266.737} r={20.948} fill="#ffb9b9" />
      <path
        d="M466.425 308.633l16.256-8.442 7.31 5.823s17.675-.654 24.221 7.201 10.147 27.822 10.147 27.822-21.603-4.583-18.984 13.747l-3.928-10.474-3.6 8.837-43.86 15.056-19.638-33.385s-13.093-3.928-17.675 5.237c0 0 .982-33.059 13.747-34.04 8.585-.661 15.056-.655 15.056-.655l7.2-1.31 4.612-1.636z"
        fill={color}
      />
      <path
        d="M502.33 306.477s-10.014 27.98 1.589 40.598l-9.673 33.239s34.368 103.103 24.549 117.504c0 0-36.66 18.33-109.977-6.546l29.786-115.54-4.255-48.77 5.891-22.912 13.093-1.309s-7.856 29.458 6.546 34.04 28.451-33.304 28.451-33.304z"
        fill="#2f2e41"
      />
      <path
        d="M502.756 333.508v34.695l-2.945 63.171s-18.984 35.35-.655 32.731 12.11-33.713 12.11-33.713l4.583-62.189 1.31-37.313z"
        fill="#ffb9b9"
      />
      <path
        d="M524.359 341.037s-2.327-33.619-21.784-33.503v38.879s14.583-8.65 21.784-5.376z"
        fill={color}
      />
      <path
        d="M451.98 237.417s-10.828 2.037-13.332 15.54a24.79 24.79 0 00-.212 6.895c.25 2.599-.112 8.089-5.756 14.553a141.512 141.512 0 00-10.276 13.198l11.313 3.011 5.055-18.744a95.887 95.887 0 0111.204-25.752l.104-.167s3.758 10.04 13.829 11.417l-3.106-4.089s11.774 6.806 18.444 8.885a4.383 4.383 0 011.414 7.62q-.07.057-.144.112c-4.907 3.727-14.915 12.618-10.961 21.22s-.657 10.169-.657 10.169l8.503-3.235 3.892-1.666-.394 2.877 18.999.398s5.134-.031-3.986-13.735c0 0-2.2-5.138-.394-9.064a20.853 20.853 0 002.106-9.555c-.574-13.816-6.394-41.924-45.646-29.888z"
        fill="#2f2e41"
      />
      <ellipse
        cx={629.842}
        cy={369.998}
        rx={6.546}
        ry={5.892}
        transform="rotate(-82.218 487.044 411.588)"
        fill="#2f2e41"
      />
      <ellipse
        cx={614.925}
        cy={367.959}
        rx={6.546}
        ry={5.892}
        transform="rotate(-82.218 472.127 409.55)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M470.387 263.539l13.327-.825.123 1.997-13.326.824zM454.013 263.96l.27-1.982 6.487.886-.27 1.982z"
      />
      <path d="M316.512 666.924s.69-14.47 14.847-12.788" fill="#3f3d56" />
      <circle cx={312.512} cy={646.069} r={7.085} fill={color} />
      <path
        fill="#3f3d56"
        d="M311.359 658h2v14h-2zM574.512 669.924s.69-14.47 14.847-12.788"
      />
      <circle cx={570.512} cy={649.069} r={7.085} fill={color} />
      <path
        fill="#3f3d56"
        d="M569.359 661h2v14h-2zM149.512 644.924s.69-14.47 14.847-12.788"
      />
      <circle cx={145.512} cy={624.069} r={7.085} fill={color} />
      <path
        fill="#3f3d56"
        d="M144.359 636h2v14h-2zM258.512 625.924s.69-14.47 14.847-12.788"
      />
      <circle cx={254.512} cy={605.069} r={7.085} fill={color} />
      <path
        fill="#3f3d56"
        d="M253.359 617h2v14h-2zM531.512 652.924s.69-14.47 14.847-12.788"
      />
      <circle cx={527.512} cy={632.069} r={7.085} fill={color} />
      <path
        fill="#3f3d56"
        d="M526.359 644h2v14h-2zM333.153 39.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM473.153 114.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM322.153 178.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243z"
      />
    </svg>
  );
};

SvgAmongNature.propTypes = {
  color: PropTypes.string
};
SvgAmongNature.defaultProps = {
  color: "primary"
};
const MemoSvgAmongNature = React.memo(SvgAmongNature);
export default MemoSvgAmongNature;