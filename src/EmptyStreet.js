import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgEmptyStreet = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 997.861 450.808"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#f2f2f2" d="M871.992 181.558h30.159v104.398h-30.159z" />
      <path
        fill="#f2f2f2"
        d="M922.068 266.317l-73.353-87.265-147.24 1.346-89.319 86.998 1.805 1.16h-.645v180.957h308.555V268.556l.197-2.239z"
      />
      <path
        fill="#e6e6e6"
        d="M848.792 179.238l-91.638 107.436v162.839h164.717V266.236l-73.079-86.998z"
      />
      <path
        fill="#3f3d56"
        d="M823.272 359.461h33.639v29.733h-33.639zM823.272 307.996h33.639v29.262h-33.639z"
      />
      <path
        fill="#fff"
        d="M823.272 359.461h33.639v29.733h-33.639zM823.272 307.996h33.639v29.262h-33.639zM673.777 351.571h33.639v29.733h-33.639zM673.777 300.106h33.639v29.262h-33.639z"
      />
      <path fill="#f2f2f2" d="M633.992 181.558h30.159v104.398h-30.159z" />
      <path
        fill="#f2f2f2"
        d="M684.068 266.317l-73.353-87.265-147.24 1.346-89.319 86.998 1.805 1.16h-.645v180.957h308.555V268.556l.197-2.239z"
      />
      <path
        fill="#e6e6e6"
        d="M610.792 179.238l-91.638 107.436v162.839h164.717V266.236l-73.079-86.998z"
      />
      <path
        fill="#3f3d56"
        d="M585.272 359.461h33.639v29.733h-33.639zM585.272 307.996h33.639v29.262h-33.639z"
      />
      <path
        fill="#fff"
        d="M585.272 359.461h33.639v29.733h-33.639zM585.272 307.996h33.639v29.262h-33.639zM435.777 351.571h33.639v29.733h-33.639zM435.777 300.106h33.639v29.262h-33.639z"
      />
      <path fill="#f2f2f2" d="M380.154 91.46h40.3v139.501h-40.3z" />
      <path
        fill="#f2f2f2"
        d="M447.068 204.718L349.051 88.112 152.302 89.91 32.951 206.161l2.411 1.55h-.861v241.802h412.303V207.711l.264-2.993z"
      />
      <path
        fill="#e6e6e6"
        d="M349.153 88.36L226.702 231.921v217.592h220.102V204.611L349.153 88.36z"
      />
      <path
        fill="#3f3d56"
        d="M315.053 329.181h44.95v39.731h-44.95zM315.053 260.412h44.95v39.101h-44.95z"
      />
      <path
        fill="#fff"
        d="M315.053 329.181h44.95v39.731h-44.95zM315.053 260.412h44.95v39.101h-44.95zM115.29 318.639h44.95v39.731h-44.95zM115.29 249.869h44.95v39.101h-44.95z"
      />
      <path fill="#3f3d56" d="M0 448.62h963.951v2H0z" />
      <ellipse
        cx={151.872}
        cy={352.472}
        rx={29.099}
        ry={59.374}
        fill="#3f3d56"
      />
      <path
        d="M154.56 449.658c-11.655-69.925-.118-139.598 0-140.293l2.267.384c-.117.692-11.588 69.999 0 139.532z"
        fill={color}
      />
      <path
        fill={color}
        d="M151.178 353.78l26.313-14.075 1.085 2.028-26.313 14.074zM123.406 348.783l1.085-2.028 26.31 14.083-1.085 2.027z"
      />
      <ellipse cx={81.955} cy={260.903} rx={56.915} ry={116.129} fill={color} />
      <path
        d="M88.295 450.808c-22.765-136.585-.23-272.673 0-274.032l2.267.384c-.23 1.356-22.698 137.077 0 273.27z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M81.114 264.43l51.468-27.53 1.085 2.029-51.468 27.529zM26.797 252.72l1.086-2.029 51.46 27.544-1.085 2.028z"
      />
      <ellipse
        cx={216.754}
        cy={191.008}
        rx={77.883}
        ry={158.914}
        fill={color}
      />
      <path
        d="M225.847 450.808c-31.14-186.837-.315-372.992 0-374.85l2.267.384c-.314 1.855-31.073 187.644 0 374.089z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M215.803 196.207l70.43-37.671 1.084 2.028-70.429 37.67zM141.474 179.434l1.085-2.027 70.42 37.69-1.086 2.027z"
      />
      <ellipse
        cx={871.029}
        cy={352.472}
        rx={29.099}
        ry={59.374}
        fill="#3f3d56"
      />
      <path
        d="M868.342 449.658c11.655-69.925.117-139.598 0-140.293l-2.267.384c.117.692 11.588 69.999-.001 139.532z"
        fill={color}
      />
      <path
        fill={color}
        d="M844.325 341.733l1.085-2.029 26.313 14.075-1.085 2.028zM872.1 360.838l26.31-14.083 1.085 2.028-26.31 14.082z"
      />
      <ellipse
        cx={940.946}
        cy={260.903}
        rx={56.915}
        ry={116.129}
        fill={color}
      />
      <path
        d="M934.607 450.808c22.765-136.585.23-272.673 0-274.032l-2.268.384c.23 1.356 22.699 137.077 0 273.27z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M889.234 238.928l1.085-2.028 51.468 27.53-1.085 2.028zM943.559 278.235l51.46-27.544 1.086 2.028-51.46 27.544z"
      />
      <ellipse
        cx={806.148}
        cy={191.008}
        rx={77.883}
        ry={158.914}
        fill={color}
      />
      <path
        d="M797.055 450.808c31.14-186.837.314-372.992 0-374.85l-2.268.384c.315 1.855 31.074 187.644 0 374.089z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M735.584 160.563l1.085-2.028 70.429 37.671-1.085 2.028zM809.923 215.097l70.42-37.69 1.084 2.028-70.419 37.69zM589.604 101.466l9.206-7.363c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM364.604 36.466l9.206-7.363c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM731.604 7.466L740.81.103c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM750.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM283.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM522.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM471.759 404.228H339.191v4.276h20.675v40.626h4.276v-40.626h80.527v40.626h4.277v-40.626h22.813v-4.276zM339.452 391.434H472.02v4.276H339.452zM339.452 380.743H472.02v4.276H339.452zM339.452 370.052H472.02v4.276H339.452zM678.759 404.228H546.191v4.276h20.675v40.626h4.276v-40.626h80.527v40.626h4.277v-40.626h22.813v-4.276zM546.452 391.434H679.02v4.276H546.452zM546.452 380.743H679.02v4.276H546.452zM546.452 370.052H679.02v4.276H546.452z"
      />
    </svg>
  );
};

SvgEmptyStreet.propTypes = {
  color: PropTypes.string
};
SvgEmptyStreet.defaultProps = {
  color: "primary"
};
export default SvgEmptyStreet;
