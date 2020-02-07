import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Portfolio = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="d5877239-1383-4003-a1e0-bdbc61205e57"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="796"
      height="684"
      viewBox="0 0 796 684"
    >
      <defs>
        <linearGradient
          id="4825a168-f1ac-4091-8125-48717fd16bcb"
          x1="398"
          y1="684"
          x2="398"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="cf06029e-a620-46ae-8a5a-e28a71109481"
          x1="193"
          y1="420.5"
          x2="193"
          y2="262"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="#b3b3b3" stop-opacity="0.12" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="f75d8251-2390-4c7d-bebb-e5abb3a9a322"
          x1="395.5"
          x2="395.5"
          y2="262"
          xlink:href="#cf06029e-a620-46ae-8a5a-e28a71109481"
        />
        <linearGradient
          id="86b5c316-e7be-414e-8e69-87fdc1a5b05b"
          x1="598.5"
          x2="598.5"
          y2="262"
          xlink:href="#cf06029e-a620-46ae-8a5a-e28a71109481"
        />
        <linearGradient
          id="2f11c360-24e1-4900-b40c-5c209eaa65b6"
          y1="616.5"
          y2="460"
          xlink:href="#cf06029e-a620-46ae-8a5a-e28a71109481"
        />
        <linearGradient
          id="a08a9646-6964-4d51-a19c-612d0b797ffc"
          x1="395.5"
          y1="616.5"
          x2="395.5"
          y2="460"
          xlink:href="#cf06029e-a620-46ae-8a5a-e28a71109481"
        />
        <linearGradient
          id="4d2cc3a6-d454-4a71-a7fe-6c89e03b8d14"
          x1="598.5"
          y1="616.5"
          x2="598.5"
          y2="460"
          xlink:href="#cf06029e-a620-46ae-8a5a-e28a71109481"
        />
      </defs>
      <title>portfolio</title>
      <rect
        width="796"
        height="684"
        fill="url(#4825a168-f1ac-4091-8125-48717fd16bcb)"
      />
      <rect x="9.62" y="10.23" width="776.76" height="662.68" fill="#fff" />
      <rect x="118.5" y="81.85" width="254" height="20.81" fill="#bdbdbd" />
      <rect x="118.5" y="123.47" width="555" height="20.81" fill="#e0e0e0" />
      <rect x="118.5" y="165.08" width="555" height="20.81" fill="#64ffda" />
      <rect
        x="113"
        y="262"
        width="160"
        height="158.5"
        fill="url(#cf06029e-a620-46ae-8a5a-e28a71109481)"
      />
      <rect
        x="316"
        y="262"
        width="159"
        height="158.5"
        fill="url(#f75d8251-2390-4c7d-bebb-e5abb3a9a322)"
      />
      <rect
        x="519"
        y="262"
        width="159"
        height="158.5"
        fill="url(#86b5c316-e7be-414e-8e69-87fdc1a5b05b)"
      />
      <rect
        x="113"
        y="460"
        width="160"
        height="156.5"
        fill="url(#2f11c360-24e1-4900-b40c-5c209eaa65b6)"
      />
      <rect
        x="316"
        y="460"
        width="159"
        height="156.5"
        fill="url(#a08a9646-6964-4d51-a19c-612d0b797ffc)"
      />
      <rect
        x="519"
        y="460"
        width="159"
        height="156.5"
        fill="url(#4d2cc3a6-d454-4a71-a7fe-6c89e03b8d14)"
      />
      <rect x="118.5" y="265.5" width="149" height="149" fill={color} />
      <rect x="321.5" y="265.5" width="149" height="149" fill={color} />
      <rect x="524.5" y="265.5" width="149" height="149" fill={color} />
      <rect x="118.5" y="461.5" width="149" height="149" fill={color} />
      <rect x="321.5" y="461.5" width="149" height="149" fill={color} />
      <rect x="524.5" y="461.5" width="149" height="149" fill={color} />
    </svg>
  );
};

Portfolio.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Portfolio.defaultProps = {
  color: "primary",
  style: {}
};

export default Portfolio;
