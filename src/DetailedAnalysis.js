import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDetailedAnalysis = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1171 834.689"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M1124.08 191.421L652.66 394.045l67.93 187.334 48.549 133.864 12.205 33.668 108.634 41.233 3.928 1.489 113.479 43.056 54.474-23.298 74.21-31.898L1171 764.479l-46.92-573.058z"
      />
      <path
        fill="#2f2e41"
        d="M1136.436 760.209l-.097 4.856-.27 14.428-74.21 31.898-50.114 21.539-2.115-7.068-2.245 8.827-113.479-43.056-1.759-41.568v-.01l-.388-9.238 222.307-14.924 4.36 6.68.863 1.327 17.147 26.309z"
      />
      <path
        d="M975.31 318.593s-14.92 53.71-17.903 53.71 28.347 41.775 28.347 41.775l46.25 25.363 16.412-68.63s-14.92-37.299-11.936-56.694z"
        fill="#ffb8b8"
      />
      <circle cx={999.181} cy={284.278} r={55.202} fill="#ffb8b8" />
      <path
        d="M1006.641 399.158l-44.106-38.303-26.016 12.94-56.694 35.807s14.92 322.262 7.46 334.198c0 0 16.411 37.299 113.388 14.92s122.34-25.364 122.34-25.364l-20.887-196.938 25.363-123.832-85.195-59.575-26.701 46.147z"
        fill={color}
      />
      <path
        d="M842.526 524.483s-22.38 70.122-5.968 77.581 29.84 4.476 29.84 4.476l25.363-61.17zM1152.853 512.547l13.427 62.662v126.816s-19.395 80.566-34.315 59.678-14.611-27.501-14.611-27.501l19.087-29.193-8.952-119.356-23.785-56.937z"
        fill="#ffb8b8"
      />
      <path
        d="M1051.4 229.076s-17.904-38.791-52.219-29.84-53.71 22.38-55.202 35.807.746 33.57.746 33.57 3.73-27.602 27.601-21.634 61.17 1.492 61.17 1.492l5.968 53.71s6.714-9.697 14.174-3.73 21.633-57.44-2.238-69.375z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M1104.095 524.866l5.396 28.057 52.876-14.029-9.712-25.898-48.56 11.87zM841.544 523.987l-8.43 27.299 53.263 12.481 3.606-27.424-48.439-12.356z"
      />
      <path
        d="M1093.174 409.602l34.315 2.984s38.791 105.929 34.315 108.913-58.186 20.887-65.646 16.411-2.984-128.308-2.984-128.308zM891.76 412.586l-11.935-2.984s-22.38 28.347-29.84 61.17-17.903 65.646-11.935 65.646 59.678 20.888 59.678 20.888z"
        fill={color}
      />
      <circle cx={1012.371} cy={409.401} r={10.791} fill="#3f3d56" />
      <path
        d="M1095.686 600.197l-115.269 36.338-47.045-149.231q66.623-9.342 115.268-36.338c6.011 50.903 21.37 100.686 47.046 149.23z"
        fill="#e6e6e6"
      />
      <path
        d="M1084.895 616.383l-115.269 36.339-47.045-149.231q66.623-9.342 115.268-36.339c6.011 50.904 21.37 100.686 47.046 149.231z"
        fill="#fff"
      />
      <path
        d="M849.986 558.798s-17.904 32.823-13.428 43.266 41.775 16.412 46.25 16.412 58.187-11.936 58.187-11.936 82.058-38.79 58.186-58.186-68.63 26.855-68.63 26.855h-35.807l-19.395-13.428z"
        fill="#ffb8b8"
      />
      <path fill="#f2f2f2" d="M1 134.833h195V222H1z" />
      <path fill="#3f3d56" d="M676 418h34v30h-34zM608 418h34v30h-34z" />
      <path fill={color} d="M744 352h34v34h-34z" />
      <path fill="#3f3d56" d="M710 386h34v32h-34zM642 386h34v32h-34z" />
      <path fill={color} d="M239 446h34v30h-34z" />
      <path
        fill="#3f3d56"
        d="M545 414h34v32h-34zM341 414h34v32h-34zM307 380h34v34h-34zM477 414h34v32h-34zM443 380h34v34h-34zM409 414h34v32h-34zM273 414h34v32h-34z"
      />
      <path fill={color} d="M511 380h34v34h-34z" />
      <path
        d="M664.741 327.495l-17.664-18.938 18.938-17.664 17.664 18.938zm-14.848-18.84l14.946 16.024 16.025-14.946-14.947-16.024zM425.66 249.583h-25.897v-25.897h25.897zm-23.905-1.992h21.913v-21.913h-21.913zM906.66 199.583h-25.897v-25.897h25.897zm-23.905-1.992h21.913V175.68h-21.913zM254.431 464.068l-1.53-1.494a78.184 78.184 0 0015.68-27.432c5.204-15.66 7.746-40.392-9.698-69.282-17.846-29.56-18.65-53.568-16.181-68.504 2.687-16.251 9.54-25.36 9.83-25.74l1.7 1.298c-.068.09-6.862 9.15-9.44 24.918-2.38 14.556-1.55 37.983 15.922 66.922 17.89 29.629 15.24 55.047 9.867 71.153-5.822 17.45-15.73 27.732-16.15 28.161zM524.431 396.068l-1.53-1.494a78.184 78.184 0 0015.68-27.432c5.204-15.66 7.746-40.392-9.698-69.282-17.846-29.56-18.65-53.568-16.181-68.504 2.687-16.251 9.54-25.36 9.83-25.74l1.7 1.298c-.068.09-6.862 9.15-9.44 24.918-2.38 14.556-1.55 37.983 15.922 66.922 17.89 29.629 15.24 55.047 9.867 71.153-5.822 17.45-15.73 27.732-16.15 28.161zM759.431 370.068l-1.53-1.494a78.184 78.184 0 0015.68-27.432c5.204-15.66 7.746-40.392-9.698-69.282-17.846-29.56-18.65-53.568-16.181-68.504 2.687-16.251 9.54-25.36 9.83-25.74l1.7 1.298c-.068.09-6.862 9.15-9.44 24.918-2.38 14.556-1.55 37.983 15.922 66.922 17.89 29.629 15.24 55.047 9.867 71.153-5.822 17.45-15.73 27.732-16.15 28.161zM51.444 162.347h94.111v2.139H51.444zM51.444 177.347h94.111v2.139H51.444zM51.444 192.347h94.111v2.139H51.444zM578.444 19.347h94.111v2.139h-94.111zM578.444 34.347h94.111v2.139h-94.111zM578.444 49.347h94.111v2.139h-94.111zM799.444 351.347h94.111v2.139h-94.111zM799.444 366.347h94.111v2.139h-94.111zM799.444 381.347h94.111v2.139h-94.111zM208.444 501.347h94.111v2.139h-94.111zM208.444 516.347h94.111v2.139h-94.111zM208.444 531.347h94.111v2.139h-94.111z"
        fill="#3f3d56"
      />
      <path
        d="M137.86 110.62c16.26-36.473 40.767-60.465 72.84-71.31 23.812-8.053 51.351-8.814 81.851-2.263a218.889 218.889 0 0163.951 24.84c105.882 61.45 171.342 61.997 207.612 51.634 39.77-11.361 54.323-38.021 54.465-38.29l1.768.937c-.146.275-15.031 27.633-55.604 39.254-23.391 6.7-50.721 6.977-81.231.822-37.971-7.66-81.041-25.365-128.014-52.626a216.904 216.904 0 00-63.366-24.616c-50.024-10.744-117.078-6.9-152.446 72.433z"
        fill="#2f2e41"
      />
      <circle cx={256} cy={237} r={36} fill="#3f3d56" />
      <circle cx={528} cy={174} r={36} fill="#3f3d56" />
      <circle cx={763} cy={142} r={36} fill="#3f3d56" />
      <path d="M223 223H0V109h223zM2 221h219V111H2z" fill="#3f3d56" />
      <path fill="#f2f2f2" d="M282 59.833h195V147H282z" />
      <path
        fill="#3f3d56"
        d="M332.444 87.347h94.111v2.139h-94.111zM332.444 102.347h94.111v2.139h-94.111zM329.444 114.347h94.111v2.139h-94.111z"
      />
      <path d="M504 148H281V34h223zm-221-2h219V36H283z" fill="#3f3d56" />
      <path fill="#f2f2f2" d="M785 25.833h195V113H785z" />
      <path
        fill="#3f3d56"
        d="M835.444 53.347h94.111v2.139h-94.111zM835.444 68.347h94.111v2.139h-94.111zM835.444 83.347h94.111v2.139h-94.111z"
      />
      <path d="M1007 114H784V0h223zm-221-2h219V2H786z" fill="#3f3d56" />
    </svg>
  );
};

SvgDetailedAnalysis.propTypes = {
  color: PropTypes.string
};
SvgDetailedAnalysis.defaultProps = {
  color: "primary"
};
export default SvgDetailedAnalysis;
