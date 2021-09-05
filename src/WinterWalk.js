import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWinterWalk = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 771.513"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={416.646} cy={118.287} r={98} fill="#e6e6e6" />
      <path
        d="M78.677 755.853l47.826-71.122-47.728 78.773.1 8.003q-5.237.04-10.373-.174l2.372-102.873-.065-.794.088-.153.227-9.72-52.375-76.043 52.313 68.767.186 2.054 1.791-77.724-45.237-78.838 45.366 65.184-.473-161.024v-.536l.016.527 3.003 126.909 41.229-51.55-41.094 62.483.9 69.522 37.939-67.851-37.8 78.072.501 38.658 55.173-94.516L77.557 669.89z"
        fill="#e6e6e6"
      />
      <path
        d="M184.124 311.82l-10.75 23.385 33.798 14.851s2.495-28.08 6.024-30.442z"
        fill="#a0616a"
      />
      <circle cx={200.015} cy={306.291} r={25.026} fill="#ffb9b9" />
      <path
        d="M213.924 292.602a56.016 56.016 0 00-9.066 1.478 8.29 8.29 0 00-3.473 1.507c-1.635 1.398-2.035 3.728-2.331 5.859l-1.455 10.473a3.549 3.549 0 01-.67 1.93 4.12 4.12 0 01-2.142.958 12.958 12.958 0 00-7.075 4.802c-2.346 3.184-3.235 7.45-6.264 9.994-.796-7.05-6.424-12.47-9.381-18.92a26.253 26.253 0 01-2.29-13.012 20.366 20.366 0 01.935-4.791 16.902 16.902 0 019.633-10.201c2.193-.875 4.592-1.293 6.59-2.552 1.085-.684 2.016-1.597 3.115-2.261 2.22-1.343 4.93-1.564 7.525-1.563a54.045 54.045 0 0116.051 2.448c2.356.735 4.831 1.77 6.104 3.883a6.537 6.537 0 01-1.294 7.828 8.638 8.638 0 01-8.004 1.833"
        fill="#2f2e41"
      />
      <path
        d="M173.527 313.805s30.369-29.707 53.764-13.853c0 0 2.505-22.975-12.819-28.048s-23.19-11.732-23.19-11.732l-15.108 4.154-3.692 18.658s-6.034 25.339 1.045 30.821z"
        fill={color}
      />
      <circle cx={177.917} cy={252.936} r={14.015} fill={color} />
      <path
        d="M143.854 492.128s15.581 34.718 28.757 45.489l35.887 76.493-19.852 121.177s-17.057 31.105 31 10l40.858-141.297-36.739-108.295z"
        fill="#2f2e41"
      />
      <path
        d="M188.646 735.287s-23.219 31.867-1.101 33.944 35.4 1.202 43.426 1.127c7.675-.071 23.021.018 20.675-12.071s-30-14-30-14zM79.324 694.958s-30.784 24.637-9.992 32.46 33.838 10.471 41.601 12.51c7.423 1.95 22.206 6.073 23.122-6.208s-25.26-21.399-25.26-21.399z"
        fill="#2f2e41"
      />
      <path
        d="M137.75 449.556s.53 38.05 8.35 53.164l2.596 84.453-71.05 107.114s-16.486 22.307 36 22l86.802-117.77 9.241-113.984z"
        fill="#2f2e41"
      />
      <path
        d="M236.764 510.378c-.53 9.59-1.038 16.537-1.289 17.789-.383 1.959-10.069 3.528-23.695 3.97-20.61.663-50.25-1.245-70.358-8.294-3.911-1.37-6.924-4.847-9.207-9.605-6.902-14.356-7.24-40.35-6.025-55.339a184.374 184.374 0 013.1-21.154c.914-4.515 1.88-8.64 2.778-12.124 1.745-6.843 3.182-11.218 3.182-11.218l.154-9.944.185-12.02.331-21.06.03-1.738c-16.912-12.536 6.172-51.847 6.953-55.773.773-3.926 23.968 7.807 23.968 7.807l6.268-5.907 14.739 8.021 18.952-5.885 11.91 25.257s4.015 10.091 8.316 24.86a314.23 314.23 0 015.318 20.837c.84 3.882 1.62 7.89 2.298 11.948.906 5.384 1.636 10.879 2.085 16.33.133 1.517.243 3.049.354 4.603.272 3.89.5 7.918.67 11.999.31 6.938.486 14.054.574 21.022.2 16.602-.714 39.745-1.59 55.618z"
        fill="#3f3d56"
      />
      <path
        d="M132.064 425.618c1.751-6.837 3.19-11.216 3.19-11.216l.15-9.94 99.27-3.655c.904 5.383 1.633 10.875 2.084 16.332a345.4 345.4 0 01.355 4.6zM238.355 454.763l-112.161 4.134a184.697 184.697 0 013.093-21.154l108.493-4.003c.31 6.94.484 14.055.575 21.023zM236.764 510.378c-.53 9.59-1.038 16.537-1.289 17.789-.383 1.959-10.069 3.528-23.695 3.97-20.61.663-50.25-1.245-70.358-8.294-3.911-1.37-6.924-4.847-9.207-9.605z"
        fill={color}
      />
      <path
        d="M249.23 467.568s21.011 2.117 13.974 17.052-28.662.451-28.662.451z"
        fill="#ffb9b9"
      />
      <path
        d="M258.651 466.371l-18.401 25.953s-4.429-2.734-11.134-6.908c-2.072-1.287-4.362-2.71-6.806-4.234-1.252-.789-2.551-1.597-3.876-2.43-2.19-1.363-4.468-2.793-6.792-4.253l-3.865-2.438c-2.239-1.423-4.507-2.851-6.764-4.288-16.528-10.485-32.692-21.01-35.858-23.984-4.715-4.433-15.393-36.854-21.642-56.846a44.544 44.544 0 016.156-39.468c7.965-10.956 16.465-11.937 23.51-9.584a23.02 23.02 0 0115.397 22.65l-1.502 49.828 36.221 28.342 6.283 4.917 3.589 2.802 6.282 4.916 3.58 2.8 6.282 4.917z"
        fill="#3f3d56"
      />
      <path
        d="M141.03 359.419s18.77-38.125 42.747-25.217c0 0-25.727-4.07-42.747 25.217z"
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M239.45 451.346l-21.016 27.405c-2.19-1.362-4.468-2.792-6.792-4.252l21.525-28.07zM249.31 459.063l-20.194 26.353c-2.072-1.287-4.362-2.71-6.806-4.234l20.718-27.035z"
        fill={color}
      />
      <path
        d="M357.032 746.758l67.5-100.38-67.362 111.178.14 11.296q-7.391.056-14.64-.246l3.349-145.193-.092-1.12.124-.216.32-13.72-73.92-107.324 73.833 97.055.262 2.9 2.528-109.698-63.847-111.27 64.03 91.999-.669-227.268.001-.756.022.744 4.238 179.117 58.19-72.757-57.999 88.188 1.27 98.122 53.546-95.764-53.35 110.19.708 54.561 77.87-133.398-77.634 152.433zM808.677 755.853l47.826-71.122-47.728 78.773.1 8.003q-5.237.04-10.373-.174l2.372-102.873-.065-.794.088-.153.227-9.72-52.375-76.043 52.313 68.767.186 2.054 1.791-77.724-45.237-78.838 45.366 65.184-.473-161.024v-.536l.016.527 3.003 126.909 41.229-51.55-41.094 62.483.9 69.522 37.939-67.851-37.8 78.072.501 38.658 55.173-94.516-55.005 108.002zM623.677 755.853l47.826-71.122-47.728 78.773.1 8.003q-5.237.04-10.373-.174l2.372-102.873-.065-.794.088-.153.227-9.72-52.375-76.043 52.313 68.767.186 2.054 1.791-77.724-45.237-78.838 45.366 65.184-.473-161.024v-.536l.016.527 3.003 126.909 41.229-51.55-41.094 62.483.9 69.522 37.939-67.851-37.8 78.072.501 38.658 55.173-94.516-55.005 108.002z"
        fill="#e6e6e6"
      />
      <path
        d="M493.157 737.83l99.06-147.312-98.858 163.16.207 16.576q-10.848.083-21.485-.361l4.913-213.078-.134-1.644.181-.317.47-20.135L369.03 377.216 477.383 519.65l.385 4.256 3.71-160.989-93.698-163.295 93.966 135.014-.981-333.526.002-1.11.032 1.092 6.22 262.863 85.396-106.775-85.116 129.42 1.863 144 78.582-140.538-78.293 161.71 1.038 80.07 114.279-195.768-113.932 223.702zM734.676 744.2L657.52 629.46l77 127.083-.161 12.912q8.449.064 16.734-.282l-3.827-165.964.105-1.28-.141-.248-.367-15.682 84.496-122.679-84.396 110.941-.3 3.315-2.89-125.393 72.982-127.189-73.19 105.161.764-259.78-.002-.865-.024.85-4.845 204.743-66.514-83.167 66.296 100.805-1.451 112.16-61.207-109.464 60.982 125.954-.809 62.367-89.01-152.483 88.74 174.24z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M0 768.685h888v2.241H0z" />
    </svg>
  );
};

SvgWinterWalk.propTypes = {
  color: PropTypes.string
};
SvgWinterWalk.defaultProps = {
  color: "primary"
};
export default SvgWinterWalk;
