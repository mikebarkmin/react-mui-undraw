import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPortfolio = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 796 684"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Portfolio_svg__b"
          x1={398}
          y1={684}
          x2={398}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Portfolio_svg__a"
          x1={193}
          y1={420.5}
          x2={193}
          y2={262}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.12} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Portfolio_svg__c"
          x1={395.5}
          x2={395.5}
          y2={262}
          xlinkHref="#Portfolio_svg__a"
        />
        <linearGradient
          id="Portfolio_svg__d"
          x1={598.5}
          x2={598.5}
          y2={262}
          xlinkHref="#Portfolio_svg__a"
        />
        <linearGradient
          id="Portfolio_svg__e"
          y1={616.5}
          y2={460}
          xlinkHref="#Portfolio_svg__a"
        />
        <linearGradient
          id="Portfolio_svg__f"
          x1={395.5}
          y1={616.5}
          x2={395.5}
          y2={460}
          xlinkHref="#Portfolio_svg__a"
        />
        <linearGradient
          id="Portfolio_svg__g"
          x1={598.5}
          y1={616.5}
          x2={598.5}
          y2={460}
          xlinkHref="#Portfolio_svg__a"
        />
      </defs>
      <path fill="url(#Portfolio_svg__b)" d="M0 0h796v684H0z" />
      <path fill="#fff" d="M9.62 10.23h776.76v662.68H9.62z" />
      <path fill="#bdbdbd" d="M118.5 81.85h254v20.81h-254z" />
      <path fill="#e0e0e0" d="M118.5 123.47h555v20.81h-555z" />
      <path fill="#64ffda" d="M118.5 165.08h555v20.81h-555z" />
      <path fill="url(#Portfolio_svg__a)" d="M113 262h160v158.5H113z" />
      <path fill="url(#Portfolio_svg__c)" d="M316 262h159v158.5H316z" />
      <path fill="url(#Portfolio_svg__d)" d="M519 262h159v158.5H519z" />
      <path fill="url(#Portfolio_svg__e)" d="M113 460h160v156.5H113z" />
      <path fill="url(#Portfolio_svg__f)" d="M316 460h159v156.5H316z" />
      <path fill="url(#Portfolio_svg__g)" d="M519 460h159v156.5H519z" />
      <path
        fill={color}
        d="M118.5 265.5h149v149h-149zM321.5 265.5h149v149h-149zM524.5 265.5h149v149h-149zM118.5 461.5h149v149h-149zM321.5 461.5h149v149h-149zM524.5 461.5h149v149h-149z"
      />
    </svg>
  );
};

SvgPortfolio.propTypes = {
  color: PropTypes.string
};
SvgPortfolio.defaultProps = {
  color: "primary"
};
const MemoSvgPortfolio = React.memo(SvgPortfolio);
export default MemoSvgPortfolio;
