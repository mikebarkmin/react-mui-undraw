import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMedicalResearch = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 854.557 577.897"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#ccc" d="M151.557 268h110v123h-110z" />
      <path
        fill="#e6e6e6"
        d="M95.557 576h-56l-6-48h68l-6 48zM208.007 541.232l-1.89 25.835a8.224 8.224 0 008.7 8.81l13.27-.804a4.195 4.195 0 003.815-5.205l-7.365-29.462zM319.003 556.51c15.617 3.653 26.774 8.846 34.103 15.874a15.035 15.035 0 009.623 4.125c4.597.242 8.355-.273 11.18-1.535a4.43 4.43 0 002.625-3.65 4.508 4.508 0 00-1.889-4.168l-37.04-26.354-15.732 6.294-3.67 3.67a3.634 3.634 0 00.8 5.743z"
      />
      <path
        d="M270.94 134.695l-105.873-.98c.266-15.421 3.854-30.564 11.697-44.115 5.15-8.899 5.04-18.584 3.798-26.744-1.916-12.592 2.539-25.475 12.437-33.491a39.916 39.916 0 0126.843-8.881l2.055.085a40.008 40.008 0 0132.87 19.77 33.327 33.327 0 013.962 20.3c-.67 6.602.935 13.27 4.69 20.003 6.48 14.782 7.884 33.698 7.521 54.053z"
        fill="#2f2e41"
      />
      <path
        d="M341.775 542.176l-20.779 5.42-101.184-220.435 6.324 215.015h-20.778c-22.204-101.158-62.29-217.906-44.268-254.766l107.507-6.324z"
        fill={color}
      />
      <circle cx={218.909} cy={69.685} r={28.006} fill="#ffb9b9" />
      <path
        d="M243.302 121.18l-46.075-2.71c4.515-10.364 6.319-20.344 4.517-29.813h34.33c-.078 7.27 3.54 19.847 7.228 32.523z"
        fill="#ffb9b9"
      />
      <path
        fill={color}
        d="M272.211 289.217l-101.183 7.228 10.389-179.33 17.617-4.969 19.875 4.517 19.875-9.938 12.648 4.518 20.779 177.974z"
      />
      <path
        d="M188.193 418.407l-69.112-15.81c20.55-68.148 57.573-224.051 45.623-279.61l36.137-16.261z"
        fill="#e6e6e6"
      />
      <path
        d="M154.766 221.46l-26.2-16.261 22.344-65.44a30.871 30.871 0 0113.494-16.028l7.527-4.358-4.517 65.95zM332.289 403.5c-21.813 12.62-76.34 19.656-100.28 10.842-1.762-61.573-5.217-235.74 5.872-309.423l39.75 16.261-3.613 48.785c-19.004 41.733 36.18 187.089 58.27 233.536z"
        fill="#e6e6e6"
      />
      <path
        fill="#e6e6e6"
        d="M329.127 213.33l-24.393-8.131-32.523-37.041 5.421-46.978 54.205 75.888-2.71 16.262z"
      />
      <path
        d="M252.681 248.494a6.785 6.785 0 008.105 5.112l20.706-4.689L278.5 235.7l-20.707 4.689a6.777 6.777 0 00-5.112 8.105z"
        fill="#ffb9b9"
      />
      <path
        d="M243.302 62.458c-15.556-6.397-30.92-6.86-46.075-.904l-6.324-22.585h57.82z"
        fill="#2f2e41"
      />
      <path
        d="M271.308 233.205l11.744 21.682c19.754-5.51 36.874-22.879 53.302-43.364l-4.517-14.455-28.006 7.227z"
        fill="#e6e6e6"
      />
      <path
        d="M262.725 188.485h-3.614c0-51.11-10.523-86.728-20.778-86.728l-.904-3.614c9.197 0 15.06 14.824 18.36 27.26 4.473 16.86 6.936 39.263 6.936 63.082zM179.61 175.837h-3.614c0-46.809 10.597-75.887 26.2-75.887l-.904 3.613c-10.792 0-21.682 22.348-21.682 72.274z"
        fill="#3f3d56"
      />
      <circle cx={260.918} cy={189.389} r={9.034} fill="#3f3d56" />
      <path
        d="M165.155 197.52h-3.613c0-12.952 7.294-23.49 16.261-23.49v3.614c-6.974 0-12.648 8.916-12.648 19.876zM194.065 197.52h-3.614c0-10.96-5.674-19.876-12.648-19.876v-3.613c8.967 0 16.262 10.537 16.262 23.489z"
        fill="#3f3d56"
      />
      <circle cx={192.258} cy={198.423} r={3.614} fill="#3f3d56" />
      <circle cx={163.348} cy={198.423} r={3.614} fill="#3f3d56" />
      <path
        fill={color}
        d="M118.177 165.193l22.547 4.026 51.534 73.276-27.378-6.442-46.703-70.86z"
      />
      <path
        d="M114.178 164.296a1.918 1.918 0 00-1.574 2.97l48.172 73.089a1.911 1.911 0 001.16.81l22.413 5.273a1.914 1.914 0 002.004-2.964l-52.89-75.202a1.903 1.903 0 00-1.228-.783l-17.696-3.16a2.076 2.076 0 00-.361-.033z"
        fill="#3f3d56"
      />
      <path
        d="M144.227 216.553l1.34 13.485 21.126-2.097a6.776 6.776 0 00-1.339-13.485z"
        fill="#ffb9b9"
      />
      <path
        d="M125.857 214.99a17.427 17.427 0 0017.406 17.312h3.474l2.529-21.076-20.94-7.538zM442.557 0h412v217h-412z"
        fill="#e6e6e6"
      />
      <path d="M454.557 205h388V12h-388z" fill="#fff" />
      <path fill="#3f3d56" d="M484.557 40h138v138h-138z" />
      <circle cx={589.557} cy={99} r={4} fill={color} />
      <circle cx={574.557} cy={85} r={4} fill={color} />
      <path
        d="M572.557 99a7.95 7.95 0 00-4.168 1.181 25.124 25.124 0 00-3.865-4.536c.017-.213.033-.427.033-.645a7.994 7.994 0 00-13.547-5.757 24.507 24.507 0 00-6.463-.056c.002-.063.01-.124.01-.187a8 8 0 10-13.26 6.018 25.14 25.14 0 00-3.624 3.834A8 8 0 10522.557 113l.025-.001a25.32 25.32 0 00-.025 1.001 25.045 25.045 0 00.723 5.973 14.994 14.994 0 1019.57 18.578 24.971 24.971 0 0016.342-2.424 8 8 0 1010.492-10.492 24.857 24.857 0 002.847-10.636l.026.001a8 8 0 000-16z"
        fill={color}
      />
      <path fill="#e6e6e6" d="M530.557 37h40v6h-40z" />
      <path fill="#3f3d56" d="M660.557 40h138v138h-138z" />
      <circle cx={755.757} cy={131.8} r={1.8} fill={color} />
      <circle cx={749.007} cy={125.5} r={1.8} fill={color} />
      <path
        d="M748.107 131.8a3.577 3.577 0 00-1.876.531 11.306 11.306 0 00-1.739-2.04 3.62 3.62 0 00.015-.291 3.597 3.597 0 00-6.096-2.59 11.028 11.028 0 00-2.909-.026c.001-.028.005-.056.005-.084a3.6 3.6 0 10-5.967 2.708 11.313 11.313 0 00-1.631 1.725 3.6 3.6 0 10-2.302 6.367h.011c-.006.15-.011.299-.011.45a11.27 11.27 0 00.325 2.688 6.747 6.747 0 108.806 8.36 11.237 11.237 0 007.354-1.09 3.6 3.6 0 104.722-4.722 11.186 11.186 0 001.281-4.787l.012.001a3.6 3.6 0 000-7.2z"
        fill={color}
      />
      <circle cx={769.878} cy={97.642} r={1.8} fill={color} />
      <circle cx={774.113} cy={89.437} r={1.8} fill={color} />
      <path
        d="M767.805 90.278a3.578 3.578 0 00-1.02-1.661 11.306 11.306 0 001.493-2.227c.095-.02.19-.038.283-.065a3.597 3.597 0 00.842-6.57 11.028 11.028 0 00-.764-2.806c.027-.007.054-.011.082-.019a3.6 3.6 0 10-4.224-5.01 11.313 11.313 0 00-2.103-1.101 3.6 3.6 0 10-6.753-.49l.004.01c-.146.035-.291.07-.437.111a11.27 11.27 0 00-2.499 1.042 6.747 6.747 0 10-5.66 10.743 11.237 11.237 0 003.044 6.783 3.6 3.6 0 105.824 3.265 11.186 11.186 0 004.955-.064l.002.01a3.6 3.6 0 106.93-1.95z"
        fill={color}
      />
      <circle cx={700.162} cy={73.181} r={1.8} fill={color} />
      <circle cx={690.958} cy={73.919} r={1.8} fill={color} />
      <path
        d="M695.004 78.831a3.578 3.578 0 00-.872 1.744 11.306 11.306 0 00-2.68-.092 3.619 3.619 0 00-.205-.207 3.597 3.597 0 00-6.023 2.756 11.028 11.028 0 00-1.98 2.13l-.059-.06a3.6 3.6 0 10-2.023 6.233 11.314 11.314 0 00.175 2.368 3.6 3.6 0 103.15 5.993l.007-.01c.106.106.213.211.325.313a11.27 11.27 0 002.204 1.572 6.747 6.747 0 1012.112-.867 11.237 11.237 0 004.152-6.167 3.6 3.6 0 10-.303-6.67 11.186 11.186 0 00-2.67-4.173l.007-.008a3.6 3.6 0 10-5.317-4.855z"
        fill={color}
      />
      <path
        fill="#e6e6e6"
        d="M706.557 37h40v6h-40zM25.176 510.243c14.42 19.311 44.352 21.344 44.352 21.344s6.554-29.277-7.866-48.588-44.352-21.344-44.352-21.344-6.553 29.277 7.866 48.588z"
      />
      <path
        d="M98.633 517.503c-9.515 12.742-29.266 14.084-29.266 14.084s-4.325-19.32 5.19-32.062 29.267-14.084 29.267-14.084 4.324 19.319-5.19 32.062z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M0 575.657h519.557v2.241H0z" />
    </svg>
  );
};

SvgMedicalResearch.propTypes = {
  color: PropTypes.string
};
SvgMedicalResearch.defaultProps = {
  color: "primary"
};
export default SvgMedicalResearch;
