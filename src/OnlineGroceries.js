import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlineGroceries = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 769.924 727.778"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M250.367 723.942h519.557v2.241H250.367z" />
      <path
        d="M672.962 342.882a11.02 11.02 0 01-2.155 16.226l-53.77 36.917-23.677 15.785a6.51 6.51 0 01-8.649-1.295 6.51 6.51 0 011.77-9.75l22.933-13.317 40.023-38.117-25.73-27.635 19.06-14.294zM546.52 690.482h-13.153l-7.812-108.635 33.353-.953-12.388 109.588z"
        fill="#a0616a"
      />
      <path
        d="M547.473 725.74c-3.507 1.601-6.445-11.367-9.403-8.46-8.275 8.132-20.946 9.903-31.991 6.352l3.866-.043a5.173 5.173 0 01-3.26-6.74 5.173 5.173 0 013.588-3.202l8.8-2.2 13.818-24.3 14.105-.953a33.7 33.7 0 016.233 28.749c-1.28 5.224-3.256 9.656-5.756 10.797z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M634.096 690.482h-13.153l-7.812-108.635 34.306-6.67-13.341 115.305z"
      />
      <path
        d="M635.049 725.74c-3.507 1.601-6.445-11.367-9.403-8.46-8.275 8.132-20.946 9.903-31.991 6.352l3.865-.043a5.173 5.173 0 01-3.26-6.74 5.173 5.173 0 013.589-3.202l8.8-2.2 13.818-24.3 15.058-1.906.38.622a38.827 38.827 0 014.161 31.749c-1.252 4.012-2.957 7.188-5.017 8.128z"
        fill="#2f2e41"
      />
      <path
        d="M649.01 309.86c-12.096 1.682-20.47 8.306-23.88 21.52l-22.234-41.05a12.155 12.155 0 013.874-15.436 12.155 12.155 0 0116.51 2.416z"
        fill={color}
      />
      <path
        d="M672.307 570.412c-54.058 23.918-109.38 26.861-165.81 11.435 20.606-79.921 44.937-152.188 44.788-211.551l55.27-4.765 8.51 13.491a299.308 299.308 0 0141.071 104.76z"
        fill="#2f2e41"
      />
      <circle cx={581.779} cy={218.779} r={28.588} fill="#a0616a" />
      <path
        fill="#a0616a"
        d="M613.225 269.284l-35.258 1.906-5.718-31.447 28.588-4.764 12.388 34.305z"
      />
      <path
        d="M609.414 370.296l-38.628 1.088-19.501 2.723c-9.573-31.62-17.632-63.17 1.905-89.576l22.87-22.87 34.307-.953.454.26a27.626 27.626 0 0112.657 32.14c-8.513 27.664-13.982 53.788-14.064 77.188z"
        fill={color}
      />
      <path
        d="M550.332 458.919l-2.396 32.746a7.294 7.294 0 01-6.79 6.746 7.294 7.294 0 01-7.777-7.452l.763-32.04 23.823-90.53.953-55.27 26.682-.952-1.906 63.846z"
        fill="#a0616a"
      />
      <path
        d="M588.45 316.931c-11.313-4.6-21.879-3.06-31.448 6.67l1.311-46.665a12.155 12.155 0 0111.083-11.422 12.155 12.155 0 0113.081 10.36z"
        fill={color}
      />
      <path
        d="M642.29 345.996h-87.67c20.452-54.157 27.047-104.539 0-147.705.464-12.965 17.093-24.205 30.007-22.963 15.252 1.466 35.747 12.674 38.604 27.727z"
        fill="#2f2e41"
      />
      <path
        d="M362.89 172.947h-4V63.402A63.402 63.402 0 00295.489 0H63.402A63.402 63.402 0 000 63.402v600.974a63.402 63.402 0 0063.402 63.402h232.086a63.402 63.402 0 0063.403-63.402V250.923h3.998z"
        fill="#3f3d56"
      />
      <path
        d="M298.047 16.495h-30.295a22.495 22.495 0 01-20.827 30.99h-132.96a22.495 22.495 0 01-20.827-30.99H64.843a47.348 47.348 0 00-47.348 47.348v600.092a47.348 47.348 0 0047.348 47.348h233.204a47.348 47.348 0 0047.348-47.348V63.843a47.348 47.348 0 00-47.348-47.348z"
        fill="#fff"
      />
      <path fill="#e6e6e6" d="M58.445 110.234h246v211h-246z" />
      <circle cx={131.445} cy={347.234} r={18} fill={color} />
      <path
        fill="#fff"
        d="M140.445 345.734h-7.5v-7.5h-3v7.5h-7.5v3h7.5v7.5h3v-7.5h7.5v-3z"
      />
      <circle cx={226.445} cy={347.234} r={18} fill={color} />
      <path fill="#fff" d="M235.444 345.734v3h-18v-3z" />
      <path
        d="M190.62 136.549h-19.44a2.577 2.577 0 00-2.578 2.577v8.533a2.577 2.577 0 002.577 2.577h3.222v12.785h12.997v-12.785h3.221a2.577 2.577 0 002.578-2.577v-8.533a2.577 2.577 0 00-2.578-2.577z"
        fill={color}
      />
      <path
        d="M210.09 214.641a99.945 99.945 0 01-17.387-59.256 2.108 2.108 0 00-1.645-2.103v-3.687h-20.531v3.635h-.283a2.107 2.107 0 00-2.104 2.11q0 .077.006.153 2.426 33.821-16.386 60.66a5.806 5.806 0 00-1.05 3.52l2.244 69.444a6.012 6.012 0 005.96 5.802h46.44a6.014 6.014 0 005.963-5.905l.865-67.425a12.168 12.168 0 00-2.091-6.948z"
        fill="#3f3d56"
      />
      <path
        d="M186.567 139.329a5.56 5.56 0 11-11.121 0"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M202.74 237.709h-5.624a14.76 14.76 0 00-29.174 0h-5.624a4.15 4.15 0 00-4.102 4.78l6.109 39.705h35.074l7.42-39.57a4.15 4.15 0 00-4.08-4.915z"
        fill={color}
      />
      <path fill="#e6e6e6" d="M58.445 407.234h246v211h-246z" />
      <circle cx={131.445} cy={644.234} r={18} fill={color} />
      <path
        fill="#fff"
        d="M140.445 642.734h-7.5v-7.5h-3v7.5h-7.5v3h7.5v7.5h3v-7.5h7.5v-3z"
      />
      <circle cx={226.445} cy={644.234} r={18} fill={color} />
      <path
        fill="#fff"
        d="M235.444 642.734v3h-18v-3zM229.873 557.131h.135a23.04 23.04 0 0021.573-14.45 75.416 75.416 0 10-100.465 41.31 22.843 22.843 0 0025.37-4.704 75.167 75.167 0 0153.387-22.156z"
      />
      <circle cx={191.13} cy={509.395} r={24.906} fill="#f9a825" />
    </svg>
  );
};

SvgOnlineGroceries.propTypes = {
  color: PropTypes.string
};
SvgOnlineGroceries.defaultProps = {
  color: "primary"
};
const MemoSvgOnlineGroceries = React.memo(SvgOnlineGroceries);
export default MemoSvgOnlineGroceries;
