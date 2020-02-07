import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Search = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f6245ee5-e739-4f07-8284-f5c00440f05d"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="871.90856"
      height="596.59998"
      viewBox="0 0 871.90856 596.59998"
    >
      <defs>
        <linearGradient
          id="faa263ba-4d93-43f3-8f6b-5c0bfeed2f5a"
          x1="435.95428"
          y1="161.22673"
          x2="435.95428"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="e7b3f2b9-2797-469d-a8e7-bdddf2d3c493"
          x1="895.45571"
          y1="298.73532"
          x2="895.45571"
          y2="178.44409"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="#b3b3b3" stop-opacity="0.1" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient
          id="b8dc7ddd-0e76-4866-9241-0076e20120d3"
          x1="858.28282"
          y1="221.34343"
          x2="858.28282"
          y2="215.55356"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity="0.12" />
          <stop offset="0.55135" stop-opacity="0.09" />
          <stop offset="1" stop-opacity="0.02" />
        </linearGradient>
        <linearGradient
          id="febfb89e-07b1-4842-b918-627d114e5328"
          x1="884.87591"
          y1="214.70119"
          x2="884.87591"
          y2="196.99804"
          xlink:href="#b8dc7ddd-0e76-4866-9241-0076e20120d3"
        />
      </defs>
      <title>Search</title>
      <rect
        width="871.90856"
        height="161.22673"
        fill="url(#faa263ba-4d93-43f3-8f6b-5c0bfeed2f5a)"
      />
      <rect
        x="5.09144"
        y="5.27725"
        width="860.45283"
        height="147.3786"
        fill="#fff"
      />
      <rect
        x="57.93932"
        y="35.36492"
        width="500.19403"
        height="87.71321"
        fill="#f5f5f5"
      />
      <path
        d="M916.21229,192.66152a46.319,46.319,0,1,0-7.57811,70.55358l33.4839,34.82841a2.25386,2.25386,0,0,0,3.18682.06273l8.34443-8.02231a2.25386,2.25386,0,0,0,.06272-3.18681l-33.4839-34.82842A46.32213,46.32213,0,0,0,916.21229,192.66152Zm-10.42905,55.9852a33.13094,33.13094,0,1,1,.922-46.84515A33.131,33.131,0,0,1,905.78324,248.64672Z"
        transform="translate(-164.04572 -151.70001)"
        fill="url(#e7b3f2b9-2797-469d-a8e7-bdddf2d3c493)"
      />
      <path
        d="M858.28282,215.55356c-3.72547,0-3.73167,5.78987,0,5.78987C862.0083,221.34343,862.0145,215.55356,858.28282,215.55356Z"
        transform="translate(-164.04572 -151.70001)"
        fill="url(#b8dc7ddd-0e76-4866-9241-0076e20120d3)"
      />
      <path
        d="M884.25427,197.00541a27.82923,27.82923,0,0,0-24.00514,12.39878c-1.58285,2.47751,2.91112,4.66665,4.48548,2.2024,4.01726-6.28806,11.65182-10.28019,19.90217-10.07359a25.35931,25.35931,0,0,1,20.6949,12.03672c1.58209,2.60731,5.72583.2365,4.15387-2.354C904.43151,202.88689,894.61425,197.23994,884.25427,197.00541Z"
        transform="translate(-164.04572 -151.70001)"
        fill="url(#febfb89e-07b1-4842-b918-627d114e5328)"
      />
      <path
        d="M916.21229,187.57009a46.319,46.319,0,1,0-7.57811,70.55357l33.4839,34.82842a2.25387,2.25387,0,0,0,3.18682.06272l8.34443-8.0223a2.25387,2.25387,0,0,0,.06272-3.18682l-33.4839-34.82842A46.32211,46.32211,0,0,0,916.21229,187.57009Zm-10.42905,55.9852a33.13094,33.13094,0,1,1,.922-46.84516A33.131,33.131,0,0,1,905.78324,243.55529Z"
        transform="translate(-164.04572 -151.70001)"
        fill={color}
      />
      <path
        d="M858.28282,210.46212c-3.72547,0-3.73167,5.78988,0,5.78988C862.0083,216.252,862.0145,210.46212,858.28282,210.46212Z"
        transform="translate(-164.04572 -151.70001)"
        fill={color}
      />
      <path
        d="M884.25427,191.914a27.82923,27.82923,0,0,0-24.00514,12.39878c-1.58285,2.47751,2.91112,4.66665,4.48548,2.2024,4.01726-6.28806,11.65182-10.28019,19.90217-10.07358a25.3593,25.3593,0,0,1,20.6949,12.03671c1.58209,2.60731,5.72583.2365,4.15387-2.354C904.43151,197.79545,894.61425,192.1485,884.25427,191.914Z"
        transform="translate(-164.04572 -151.70001)"
        fill={color}
      />
      <rect x="4.90856" y="240.59998" width="867" height="59" fill="#e0e0e0" />
      <rect x="4.90856" y="339.59998" width="867" height="59" fill="#e0e0e0" />
      <rect x="4.90856" y="438.59998" width="867" height="59" fill="#e0e0e0" />
      <rect x="4.90856" y="537.59998" width="867" height="59" fill="#e0e0e0" />
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Search.defaultProps = {
  color: "primary",
  style: {}
};

export default Search;
