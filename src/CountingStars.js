import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCountingStars = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 922.185 747.357"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M282.004 237.246c-2.68 100.756 131.629 203.61 299.277 203.61s434.629-198.637 307.83-203.61c-244.325-9.584-328.052-110.77-303.554-182.5 43.875-128.462-298.276-15.89-303.553 182.5z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M505.004 157.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM657.004 305.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM411.004 287.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM595.004 383.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM424.004 346.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM836.004 297.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557zM382.004 176.445l-2.044-1.301 1.301-2.044-.558-.354-1.3 2.044-2.044-1.301-.355.557 2.044 1.301-1.301 2.044.558.355 1.3-2.044 2.044 1.3.355-.557z"
      />
      <path
        fill="#fff"
        d="M553.004 198.924l-2.862-1.82 1.821-2.862-.78-.496-1.821 2.861-2.861-1.821-.497.781 2.862 1.82-1.821 2.862.78.497 1.821-2.862 2.861 1.821.497-.781z"
      />
      <circle cx={450.004} cy={233.746} r={3} fill={color} />
      <circle cx={333.004} cy={233.746} r={3} fill={color} />
      <circle cx={537.004} cy={123.746} r={3} fill={color} />
      <circle cx={509.004} cy={306.746} r={3} fill={color} />
      <circle cx={507.004} cy={243.746} r={2} fill={color} />
      <circle cx={712.004} cy={331.746} r={2} fill="#ff6584" />
      <circle cx={406.004} cy={222.746} r={2} fill="#ff6584" />
      <circle cx={531.004} cy={60.746} r={2} fill="#ff6584" />
      <circle cx={449.004} cy={153.746} r={2} fill={color} />
      <circle cx={474.004} cy={86.746} r={2} fill="#fff" />
      <circle cx={773.004} cy={266.746} r={3} fill={color} />
      <circle cx={574.004} cy={277.746} r={3} fill={color} />
      <circle cx={523.004} cy={348.746} r={10} fill={color} />
      <circle cx={644.004} cy={239.746} r={3} fill="#fff" />
      <path
        d="M91.928 720.614s-5.597 23.406-.508 24.423 30.02.69 36.126 1.707 18.826-.689 18.826-5.268-13.23-7.632-13.23-7.632-18.826-10.177-19.334-10.686-21.88-2.544-21.88-2.544z"
        fill="#2f2e41"
      />
      <path
        d="M97.921 553.492s1.825 20.683 1.825 22.508-10.95 97.944-8.517 117.411-.225 25.684-.225 29.335 19.692 2.3 19.692 2.3L131.988 590.6l-10.95-40.151z"
        fill="#2f2e41"
      />
      <path
        d="M99.052 725.738s-5.088 18.317 0 19.335 30.02-1.166 36.126-.148 18.826 1.165 18.826-3.414-13.23-7.632-13.23-7.632-18.825-10.177-19.334-10.685-22.388 2.544-22.388 2.544z"
        fill="#2f2e41"
      />
      <path
        d="M92.446 529.158s-7.3 17.642 1.217 26.767 18.25 27.375 18.25 28.592-17.034 122.278-14.6 130.186 1.825 12.775 1.216 13.992 6.084 7.909 13.384 7.909 18.25-5.475 19.467-10.342-1.825-46.843-1.217-54.751 24.943-134.445 21.9-137.486-59.617-4.867-59.617-4.867z"
        fill="#2f2e41"
      />
      <circle cx={138.68} cy={368.554} r={20.684} fill="#9f616a" />
      <path
        d="M125.905 378.896s4.258 22.51 1.217 24.943 23.117 6.083 23.117 6.083 3.042-29.809 3.65-32.85-27.984 1.824-27.984 1.824z"
        fill="#9f616a"
      />
      <path
        d="M153.889 408.097s3.924-21.435-25.885-15.351c0 0-27.217 22.316-26 43s-9.558 80.636-8.341 84.895-7.3 9.733-3.65 11.558 69.351 12.776 71.176 0-.608-45.017.608-51.1 0-57.185-3.65-63.268-4.258-9.734-4.258-9.734z"
        fill={color}
      />
      <path
        d="M141.114 556.533s-9.126 34.676 2.433 34.676 10.95-35.892 10.95-35.892z"
        fill="#9f616a"
      />
      <path
        d="M147.107 372.006c-.264 1.745-2.957 2.47-6.911 2.13l-.006-.001a33.145 33.145 0 01-4.966-.85c-2.468-.607-3.858 1.588-4.755 4.627-1.472 5.014-1.583 12.337-2.878 13.292-9.04 4.996-35.75-28.504-22.063-37.178 4.875-3.089 21.285-14.623 32.623-12.292s6.748 16.402 6.748 16.402.415 1.847.887 4.22a63.446 63.446 0 011.359 9.078 4.42 4.42 0 01-.038.572z"
        fill="#2f2e41"
      />
      <path
        d="M148.414 414.18s-20.684-1.216-22.509 29.201-1.217 59.01-1.217 59.618 8.517 58.401 16.426 58.401 13.992-1.217 15.817-4.258-4.867-46.843-4.867-46.843-3.042-46.234 1.825-60.835 5.475-33.459-5.475-35.284z"
        fill={color}
      />
      <path
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
        d="M125.004 451.746l-6 65 20 45-13-46-1-65M154.004 458.746l1.528 76.629-5.528-41.629 4-35z"
      />
      <path fill="#3f3d56" d="M257.738 747.357H0v-2.106h258.12l-.382 2.106z" />
    </svg>
  );
};

SvgCountingStars.propTypes = {
  color: PropTypes.string
};
SvgCountingStars.defaultProps = {
  color: "primary"
};
export default SvgCountingStars;
