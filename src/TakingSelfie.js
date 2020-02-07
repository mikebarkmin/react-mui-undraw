import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const TakingSelfie = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="bb2a0322-f60c-49c8-997e-d7c4b3c4ffc5"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="836.96509"
      height="677.02669"
      viewBox="0 0 836.96509 677.02669"
    >
      <title>taking selfie</title>
      <polygon
        points="326.236 671.863 836.965 414.298 628.031 0 98.794 242.164 326.236 671.863"
        fill="#f2f2f2"
      />
      <circle
        cx="684.5042"
        cy="495.19899"
        r="31.2479"
        fill={color}
        opacity="0.4"
      />
      <circle
        cx="626.67227"
        cy="510.12336"
        r="21.92017"
        fill={color}
        opacity="0.4"
      />
      <rect
        x="239.51745"
        y="582.49033"
        width="98"
        height="98"
        transform="translate(172.88172 -171.14172) rotate(30)"
        fill="#f2f2f2"
      />
      <path
        d="M772.51745,429.49033a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,772.51745,429.49033Zm0-42a20,20,0,1,0,20,20A20.02229,20.02229,0,0,0,772.51745,387.49033Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#3f3d56"
      />
      <path
        d="M395.51745,366.49033a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,395.51745,366.49033Zm0-42a20,20,0,1,0,20,20A20.02229,20.02229,0,0,0,395.51745,324.49033Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#3f3d56"
      />
      <path
        d="M308.51745,715.49033a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,308.51745,715.49033Zm0-42a20,20,0,1,0,20,20A20.02229,20.02229,0,0,0,308.51745,673.49033Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#3f3d56"
      />
      <ellipse
        cx="495.51745"
        cy="344.01335"
        rx="34"
        ry="20.5"
        transform="translate(-272.45768 373.77159) rotate(-48.3118)"
        fill="#2f2e41"
      />
      <circle cx="378.5" cy="295.52669" r="89" fill="#2f2e41" />
      <path
        d="M299.93023,367.78868,217.20587,374.557a13.68807,13.68807,0,0,0-12.536,12.6532L201.58105,429.836a13.688,13.688,0,0,0,13.65222,14.67737h37.28418v2h15v-2h8v2h15v-2h7.99591a13.68809,13.68809,0,0,0,13.67011-12.987l2.533-49.39423A13.688,13.688,0,0,0,299.93023,367.78868Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#2f2e41"
      />
      <path
        d="M352.51745,502.51335l-117-55-21,33s60.83773,38.83772,64,42c4.5,4.5,53,36,72,31S360.51745,507.51335,352.51745,502.51335Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#9f616a"
      />
      <polygon
        points="251 643.027 236 677.027 391.28 677.027 380 641.027 251 643.027"
        fill="#2f2e41"
      />
      <path
        d="M527.51745,478.51335s6,33,0,37,40,53,40,53l19-17,6-39s-18-25-10-47S527.51745,478.51335,527.51745,478.51335Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#9f616a"
      />
      <circle cx="364" cy="313.02669" r="64" fill="#9f616a" />
      <path
        d="M562.51745,545.51335s-25-38-39-41-27-1-35,0-35-9-51-2,0,89,0,89-18,105-10,132,2,32-2,35,91,30,91,30h90s0-29,9-36,8-155,8-155l30-58s-5-22-26-23-39.74517-12.02471-39.74517-12.02471l-14.25483,41.02471Z"
        transform="translate(-181.51745 -111.48665)"
        fill={color}
      />
      <path
        d="M446.51745,507.51335l-9-5s-17,1-20,0-41-13-56-6-25-2-25-2,49,42-11,55c0,0,1,5,16,8s18,6,24,11,18,10,26,12,34,19,38,15,11-18,11-18Z"
        transform="translate(-181.51745 -111.48665)"
        fill={color}
      />
      <path
        d="M634.51745,528.51335l19,11s25,74,21,92-8,15-2,27,12,13,8,24-2,38-8,49-35,46-60-13S634.51745,528.51335,634.51745,528.51335Z"
        transform="translate(-181.51745 -111.48665)"
        fill={color}
      />
      <path
        d="M670.51745,681.51335s-14-28-17-30-17-71-17-71,22-36,2-52c0,0,37-52,25-51s-36,39-36,39-5.5-1.5-3.5-9.5,9.5-36.5,3.5-37.5-18,42-18,42-24.5,44.5-17,60a193.2208,193.2208,0,0,0,15,25l17,124S657.51745,760.51335,670.51745,681.51335Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#9f616a"
      />
      <ellipse cx="112" cy="270.02669" rx="11" ry="5" fill={color} />
      <path
        d="M226.51745,480.51335h-14s-31-10-31-33,9-70,37-69,2,63,2,63l16.95017,6.91674.04983,21.08326Z"
        transform="translate(-181.51745 -111.48665)"
        fill="#9f616a"
      />
      <ellipse cx="353.5" cy="270.52669" rx="57" ry="29" fill="#2f2e41" />
      <ellipse cx="430.5" cy="306.52669" rx="5" ry="11" fill="#9f616a" />
      <ellipse
        cx="641.51745"
        cy="360.01335"
        rx="20.5"
        ry="34"
        transform="translate(-274.33807 204.91644) rotate(-25.90207)"
        fill="#2f2e41"
      />
    </svg>
  );
};

TakingSelfie.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

TakingSelfie.defaultProps = {
  color: "primary",
  style: {}
};

export default TakingSelfie;
