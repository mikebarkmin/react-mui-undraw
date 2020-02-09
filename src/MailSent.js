import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMailSent = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 788.382 719"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="MailSent_svg__a"
          x1={365}
          y1={605}
          x2={365}
          y2={286}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.551} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="MailSent_svg__b"
          x1={1117.619}
          y1={-43.058}
          x2={1117.619}
          y2={-102.405}
          gradientTransform="scale(-1 1) rotate(49.548 302.928 -1213.996)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path fill={color} d="M125 410L0 268 374 0l374 268-127 142H125z" />
      <path fill="#514abf" d="M125 410L0 268 374 0l374 268-127 142H125z" />
      <path fill={color} d="M0 286h730v319H0z" />
      <path fill="url(#MailSent_svg__a)" d="M0 286h730v319H0z" />
      <path fill={color} d="M748 719H0V268l374 226 374-226v451z" />
      <path
        fill="#3ad29f"
        d="M652.582 116.818l-79.33-60.828-210.139 274.052-116.711-89.492-60.829 79.329 156.365 119.719 40.098 30.051 270.546-352.831z"
      />
      <path
        fill="url(#MailSent_svg__b)"
        d="M3.153 166.882l-2.974 1.452.342-.608-.261.084.366-.271 40.027-71.232 20.461 17.446 17.553 16.251-5.04 2.461 5.666 9.994-76.14 24.423z"
      />
      <path
        fill={color}
        d="M59.087 115.617l16.044 14.876-72.72 36.153 38.699-49.6 17.977-1.429z"
      />
      <path
        opacity={0.2}
        d="M59.087 115.617l16.044 14.876-72.72 36.153 38.699-49.6 17.977-1.429z"
      />
      <path
        fill={color}
        d="M40.373 99.66L2.411 166.646l56.676-51.029L40.373 99.66z"
      />
      <path
        fill={color}
        d="M75.599 142.01l-73.11 24.15 61.115-45.621 11.995 21.471zM686.959 38.73l-16.017 27.769 117.44 19.123-75.64-52.673-25.783 5.781z"
      />
      <path
        opacity={0.2}
        d="M686.959 38.73l-16.017 27.769 117.44 19.123-75.64-52.673-25.783 5.781z"
      />
      <path
        fill={color}
        d="M706.247 8.293l82.135 77.329L686.959 38.73l19.288-30.437z"
      />
      <path
        fill={color}
        d="M675.274 82.821l112.788 2.155-105.293-37.4-7.495 35.245z"
      />
    </svg>
  );
};

SvgMailSent.propTypes = {
  color: PropTypes.string
};
SvgMailSent.defaultProps = {
  color: "primary"
};
const MemoSvgMailSent = React.memo(SvgMailSent);
export default MemoSvgMailSent;
