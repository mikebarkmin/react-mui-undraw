import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSyncFiles = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 578 675"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M383 0H13A13.014 13.014 0 000 13v500a13.015 13.015 0 0013 13h370a13.015 13.015 0 0013-13V13a13.015 13.015 0 00-13-13z"
        fill="#f2f2f2"
      />
      <path
        d="M24.43 16a9.085 9.085 0 00-8.93 9.212v475.576A9.085 9.085 0 0024.43 510h347.14a9.085 9.085 0 008.93-9.212V25.212A9.085 9.085 0 00371.57 16z"
        fill="#fff"
      />
      <path
        d="M42.5 38c-3.309 0-6 3.037-6 6.771v65.458c0 3.734 2.691 6.771 6 6.771h311c3.309 0 6-3.037 6-6.771V44.77c0-3.734-2.691-6.771-6-6.771zM42.5 148.75a6.095 6.095 0 00-6 6.172v139.906a6.095 6.095 0 006 6.172h311a6.095 6.095 0 006-6.172V154.922a6.095 6.095 0 00-6-6.172z"
        fill="#e6e6e6"
      />
      <path
        fill="#fff"
        d="M75 47.25h246v14H75zM75.5 76.75h246v6.5h-246zM75.5 88.25h246v6.5h-246zM75.5 99.75h246v6.5h-246zM221.163 301.25h113.21a3.644 3.644 0 002.578-6.221l-72.457-72.457a3.648 3.648 0 00-5.154 0l-18.018 18.018a7.643 7.643 0 01-10.81 0l-56.435-56.435a3.649 3.649 0 00-5.154 0L58.549 294.53a3.644 3.644 0 002.577 6.221h160.182z"
      />
      <circle cx={86.5} cy={181.75} r={14} fill="#fff" />
      <path
        d="M42.5 333.75a6.095 6.095 0 00-6 6.172v139.906a6.095 6.095 0 006 6.172h311a6.095 6.095 0 006-6.172V339.922a6.095 6.095 0 00-6-6.172z"
        fill="#e6e6e6"
      />
      <path
        d="M221.163 486.25h113.21a3.645 3.645 0 002.578-6.222l-72.457-72.456a3.65 3.65 0 00-5.154 0l-18.018 18.018a7.641 7.641 0 01-10.81 0l-56.435-56.435a3.65 3.65 0 00-5.154 0L58.549 479.528a3.645 3.645 0 002.577 6.222h160.182z"
        fill="#fff"
      />
      <circle cx={86.5} cy={366.75} r={14} fill="#fff" />
      <path
        d="M143 115a9.01 9.01 0 00-9 9v500a9.01 9.01 0 009 9h370a9.01 9.01 0 009-9V124a9.01 9.01 0 00-9-9z"
        fill="#e6e6e6"
      />
      <path
        d="M153.93 129a9.085 9.085 0 00-8.93 9.212v475.576a9.085 9.085 0 008.93 9.212h347.14a9.085 9.085 0 008.93-9.212V138.212a9.085 9.085 0 00-8.93-9.212z"
        fill="#fff"
      />
      <path
        d="M208.25 198.183a4.005 4.005 0 00-4 4v18.358a4.005 4.005 0 004 4h236a4.004 4.004 0 004-4v-18.358a4.004 4.004 0 00-4-4z"
        fill={color}
      />
      <path
        d="M206.75 258.939a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1.001 1.001 0 001-1v-7.167a1.001 1.001 0 00-1-1zM206.75 282.234a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1.001 1.001 0 001-1v-7.167a1.001 1.001 0 00-1-1zM206.75 305.529a1.001 1.001 0 00-1 1v7.166a1.001 1.001 0 001 1h240a1.001 1.001 0 001-1v-7.166a1.001 1.001 0 00-1-1zM206.25 352.061a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1.001 1.001 0 001-1v-7.167a1.001 1.001 0 00-1-1zM206.25 375.356a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1.001 1.001 0 001-1v-7.167a1.001 1.001 0 00-1-1zM206.25 398.65a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 422.06a1.001 1.001 0 00-1 1v7.168a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 445.355a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 468.65a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 492.06a1.001 1.001 0 00-1 1v7.168a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 515.355a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1zM206.25 538.65a1.001 1.001 0 00-1 1v7.167a1.001 1.001 0 001 1h240a1 1 0 001-1v-7.167a1 1 0 00-1-1z"
        fill="#ccc"
      />
      <circle cx={505} cy={602} r={73} fill={color} />
      <path
        fill="#fff"
        d="M498.044 632.815l-21.85-28.092 12.706-9.884 10.346 13.302 34.949-36.893 11.687 11.072-47.838 50.495z"
      />
    </svg>
  );
};

SvgSyncFiles.propTypes = {
  color: PropTypes.string
};
SvgSyncFiles.defaultProps = {
  color: "primary"
};
const MemoSvgSyncFiles = React.memo(SvgSyncFiles);
export default MemoSvgSyncFiles;
