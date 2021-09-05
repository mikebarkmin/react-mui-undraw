import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgConvert = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1014 552"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M507 26v186M135 212V26h744v186"
      />
      <ellipse cx={507} cy={26} rx={135} ry={26} fill="#f2f2f2" />
      <ellipse cx={135} cy={543} rx={135} ry={9} fill="#3f3d56" />
      <ellipse cx={879} cy={543} rx={135} ry={9} fill="#3f3d56" />
      <ellipse cx={507} cy={543} rx={135} ry={9} fill="#3f3d56" />
      <circle cx={507} cy={26} r={15} fill={color} />
      <circle cx={128} cy={434} r={79} fill="#2f2e41" />
      <path fill="#2f2e41" d="M92 496h24v43H92zM140 496h24v43h-24z" />
      <ellipse cx={112} cy={539.5} rx={20} ry={7.5} fill="#2f2e41" />
      <ellipse cx={160} cy={538.5} rx={20} ry={7.5} fill="#2f2e41" />
      <circle cx={130} cy={414} r={27} fill="#fff" />
      <circle cx={130} cy={414} r={9} fill="#3f3d56" />
      <path
        d="M51.367 360.532c-6.379-28.567 14.012-57.434 45.544-64.474s62.265 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648z"
        fill="#3f3d56"
      />
      <circle cx={507} cy={434} r={79} fill="#2f2e41" />
      <path fill="#2f2e41" d="M471 496h24v43h-24zM519 496h24v43h-24z" />
      <ellipse cx={491} cy={539.5} rx={20} ry={7.5} fill="#2f2e41" />
      <ellipse cx={539} cy={538.5} rx={20} ry={7.5} fill="#2f2e41" />
      <circle cx={509} cy={414} r={27} fill="#fff" />
      <circle cx={509} cy={414} r={9} fill="#3f3d56" />
      <path
        d="M430.367 360.532c-6.379-28.567 14.012-57.434 45.544-64.474S510.621 306.432 517 335s13.037 39.139-18.495 46.18-61.759 7.92-68.138-20.648z"
        fill="#3f3d56"
      />
      <circle cx={879} cy={434} r={79} fill="#2f2e41" />
      <path fill="#2f2e41" d="M843 496h24v43h-24zM891 496h24v43h-24z" />
      <ellipse cx={863} cy={539.5} rx={20} ry={7.5} fill="#2f2e41" />
      <ellipse cx={911} cy={538.5} rx={20} ry={7.5} fill="#2f2e41" />
      <circle cx={881} cy={414} r={27} fill="#fff" />
      <circle cx={881} cy={414} r={9} fill="#3f3d56" />
      <path
        d="M802.367 360.532c-6.379-28.567 14.012-57.434 45.544-64.474s62.265 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648zM544.555 335.035c-6.372-28.538-37.048-45.98-68.545-38.997l21.973 85.255c.174-.038.347-.074.522-.113 31.532-7.041 52.43-17.577 46.05-46.145z"
        fill={color}
      />
      <path d="M492 26a15 15 0 0015 15V11a15 15 0 00-15 15z" fill="#3f3d56" />
      <path
        d="M395 355.766c0 58.48-34.766 78.9-77.652 78.9s-77.652-20.42-77.652-78.9 77.652-132.878 77.652-132.878S395 297.285 395 355.766z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M314.519 425.72l.795-48.943 33.098-60.55-32.973 52.872.358-22.007 22.81-43.807-22.716 37.983.643-39.58 24.426-34.876-24.325 28.652.402-72.576-2.525 96.078.208-3.964-24.834-38.012 24.436 45.621-2.314 44.204-.069-1.173-28.63-40.003 28.543 44.148-.289 5.528-.052.083.024.454-5.871 112.151h7.843l.942-57.928 28.472-44.04-28.402 39.685z"
      />
      <ellipse cx={309} cy={488} rx={27} ry={8} fill="#3f3d56" />
      <path
        d="M771 355.766c0 58.48-34.766 78.9-77.652 78.9s-77.652-20.42-77.652-78.9 77.652-132.878 77.652-132.878S771 297.285 771 355.766z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M690.519 425.72l.795-48.943 33.098-60.55-32.973 52.872.358-22.007 22.81-43.807-22.716 37.983.643-39.58 24.426-34.876-24.325 28.652.402-72.576-2.525 96.078.208-3.964-24.834-38.012 24.436 45.621-2.314 44.204-.069-1.173-28.63-40.003 28.543 44.148-.289 5.528-.052.083.024.454-5.871 112.151h7.843l.942-57.928 28.472-44.04-28.402 39.685z"
      />
      <ellipse cx={686} cy={488} rx={27} ry={8} fill="#3f3d56" />
    </svg>
  );
};

SvgConvert.propTypes = {
  color: PropTypes.string
};
SvgConvert.defaultProps = {
  color: "primary"
};
export default SvgConvert;
