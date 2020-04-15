import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSocialBio = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888.048 718.666"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M354.028 85.001l5.333-21.034a273.133 273.133 0 0128.978-10.396l.673 9.775 2.73-10.77c12.212-3.487 20.52-5.023 20.52-5.023s-11.222 42.674-34.759 75.299l-27.426 4.817 21.307 3.072a110.502 110.502 0 01-9.531 10.1c-34.24 31.782-72.377 46.364-85.181 32.57s4.572-50.742 38.812-82.524c10.615-9.853 23.95-17.76 37.297-23.982z"
        fill="#e6e6e6"
      />
      <path
        d="M303.307 62.159L297 41.396a273.135 273.135 0 0119.432-23.879l5.63 8.02-3.23-10.63C327.484 5.609 333.802 0 333.802 0s12.451 42.331 9.166 82.426l-20.988 18.3 19.827-8.383a110.504 110.504 0 01-2.938 13.572c-12.882 44.906-37.992 77.102-56.084 71.911s-22.313-45.8-9.43-90.706c3.993-13.921 11.32-27.582 19.53-39.809zM717.028 609.001l5.333-21.034a273.133 273.133 0 0128.978-10.396l.673 9.775 2.73-10.77c12.213-3.487 20.52-5.023 20.52-5.023s-11.222 42.674-34.759 75.299l-27.426 4.817 21.307 3.072a110.502 110.502 0 01-9.531 10.1c-34.24 31.782-72.377 46.364-85.181 32.57s4.572-50.742 38.812-82.524c10.615-9.853 23.95-17.76 37.297-23.982z"
        fill="#e6e6e6"
      />
      <path
        d="M666.307 586.159L660 565.396a273.135 273.135 0 0119.432-23.879l5.63 8.02-3.23-10.63c8.652-9.298 14.97-14.907 14.97-14.907s12.451 42.331 9.166 82.426l-20.988 18.3 19.827-8.383a110.504 110.504 0 01-2.938 13.572c-12.882 44.906-37.992 77.102-56.084 71.911s-22.313-45.8-9.43-90.706c3.993-13.921 11.32-27.582 19.53-39.809z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M.048 700.396h888v2.241h-888z" />
      <path
        d="M529 242.076l7.584 75H599l-3-114c0-24.537-16.963-46-41.5-46s-40.5 20.463-40.5 45l-4 115h10.176z"
        fill="#2f2e41"
      />
      <path
        d="M506.5 313.576l-6 52-16 75s-12 35 0 35 12-35 12-35l16-44 11-81z"
        fill="#a0616a"
      />
      <path
        d="M504.5 402.576s-6 30 2 74 10 63 10 63-6 7-2 11 0 12 0 12l7 68 31-5-2-62s4-8 2-10 2-14 2-14l5-95 31 104s-3 4 0 7 9 18 9 18l20 70 32-6-18-80s2-5-1-8a7.833 7.833 0 01-2-7s3-3-1-7-6-20-6-20-3-107-13-113-106 0-106 0z"
        fill="#2f2e41"
      />
      <path
        d="M525.5 626.576l5 43-2 19s-23 32 5 30 19-14 19-14l8.523-5.424a4.41 4.41 0 001.98-4.495c-1.011-5.68-3.47-18.255-6.503-25.08-4-9-6-46-6-46zM645.9 624.034l5.873 42.89 6.672 17.901s30.249 25.26 2.634 30.3-21.89-8.823-21.89-8.823l-9.606-3.13a4.41 4.41 0 01-3.037-3.86c-.436-5.752-1.19-18.544.047-25.91 1.631-9.712-5.653-46.043-5.653-46.043z"
        fill="#2f2e41"
      />
      <circle cx={554.5} cy={198.576} r={28} fill="#a0616a" />
      <path
        d="M540.5 218.576s8 27 0 35-10 11-10 11l23 31 40-49s-28-8-21-30z"
        fill="#a0616a"
      />
      <path
        d="M553.5 282.576l35.676-37.619s20.324-2.38 26.324 3.62l-6 121s4 3 2 10a28.569 28.569 0 000 14s6 7 3 10-111 1-111 1-4-7 2-11 3-15 3-15-2-3 3-8 9-46 9-46l-13-50s13.086-14.771 28.043-15.886z"
        fill="#e6e6e6"
      />
      <path d="M602.5 248.576h13s3 0 6 10 7 35 7 35l-28 3z" fill="#e6e6e6" />
      <path
        d="M626.5 289.576l2 56 2 84s13 35-3 36-12-38-12-38l-13-135z"
        fill="#a0616a"
      />
      <path d="M511.5 275.576l-4-1s-9 18-10 34l-1 6 31 4z" fill="#e6e6e6" />
      <path
        d="M531 194.076c18.084-9.75 25.513-9.336 48 0l6-14.618a10.394 10.394 0 00-10.382-10.382h-40.236A10.394 10.394 0 00524 179.458z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M41.375 146.786h217.549v-41.375H0v258.924h41.375V146.786zM293.625 397.702H76.076v41.374H335V180.152h-41.375v217.55z"
      />
      <path fill={color} d="M22.689 126.766h290.956v290.956H22.689z" />
      <path
        fill="#fff"
        d="M70.873 184.156h34.594v2.883H70.873zM116.998 184.156h34.594v2.883h-34.594zM184.023 210.822h34.594v2.883h-34.594zM230.868 210.822h34.594v2.883h-34.594zM163.843 184.156h101.619v2.883H163.843zM70.873 210.822h101.619v2.883H70.873zM70.873 237.488h101.619v2.883H70.873zM194.833 237.488h70.629v2.883h-70.629zM70.873 281.586h34.594v2.883H70.873zM116.998 281.586h34.594v2.883h-34.594zM184.023 308.252h34.594v2.883h-34.594zM230.868 308.252h34.594v2.883h-34.594zM163.843 281.586h101.619v2.883H163.843zM70.873 308.252h101.619v2.883H70.873zM70.873 334.918h101.619v2.883H70.873zM194.833 334.918h70.629v2.883h-70.629z"
      />
    </svg>
  );
};

SvgSocialBio.propTypes = {
  color: PropTypes.string
};
SvgSocialBio.defaultProps = {
  color: "primary"
};
const MemoSvgSocialBio = React.memo(SvgSocialBio);
export default MemoSvgSocialBio;