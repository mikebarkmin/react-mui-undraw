import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Documents = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="cc774093-8b64-45c7-8077-699a43d4914b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="814"
      height="778.22"
      viewBox="0 0 814 778.22"
    >
      <defs>
        <linearGradient
          id="29b91a8c-5031-4728-9934-4de601869dbd"
          x1="253.26"
          y1="778.22"
          x2="253.26"
          y2="105.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="1256144c-81fa-4390-be21-e94fb20836e2"
          x1="49.76"
          y1="202.38"
          x2="49.76"
          y2="112.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="#b3b3b3" stop-opacity="0.1" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient
          id="8f0ddb95-6166-4bb1-9b4d-46cd9e3d30e6"
          x1="408.68"
          y1="722.31"
          x2="408.68"
          y2="49.2"
          xlink:href="#29b91a8c-5031-4728-9934-4de601869dbd"
        />
        <linearGradient
          id="2acd927f-116a-42d0-926b-2e100ad401a0"
          x1="205.18"
          y1="146.48"
          x2="205.18"
          y2="57.02"
          xlink:href="#1256144c-81fa-4390-be21-e94fb20836e2"
        />
        <linearGradient
          id="dd98f1d5-faf2-451f-bb12-7f13808eec29"
          x1="560.74"
          y1="673.12"
          x2="560.74"
          y2="0"
          xlink:href="#29b91a8c-5031-4728-9934-4de601869dbd"
        />
        <linearGradient
          id="523444de-12f9-4e88-a28a-f69f2aefc1da"
          x1="357.24"
          y1="97.28"
          x2="357.24"
          y2="7.83"
          xlink:href="#1256144c-81fa-4390-be21-e94fb20836e2"
        />
      </defs>
      <title>files1</title>
      <polygon
        points="506.51 778.22 0 778.22 0 189.97 76.53 105.1 506.51 105.1 506.51 778.22"
        fill="url(#29b91a8c-5031-4728-9934-4de601869dbd)"
      />
      <polygon
        points="498.69 760.33 8.95 760.33 8.95 194.56 82.94 112.93 498.69 112.93 498.69 760.33"
        fill="#fafafa"
      />
      <rect x="56.76" y="182.81" width="238.59" height="40.25" fill="#e0e0e0" />
      <rect x="57.24" y="292.95" width="174.84" height="40.25" fill="#e0e0e0" />
      <rect x="57.24" y="458.43" width="392.18" height="147.59" fill={color} />
      <rect x="360.55" y="183.37" width="88.87" height="40.25" fill="#f5f5f5" />
      <rect x="360.55" y="245.99" width="88.87" height="40.25" fill="#f5f5f5" />
      <polygon
        points="90.57 112.93 90.57 202.38 8.95 202.38 8.95 194.56 82.74 112.93 90.57 112.93"
        fill="url(#1256144c-81fa-4390-be21-e94fb20836e2)"
      />
      <polygon
        points="8.75 194.56 82.74 112.93 82.74 194.56 8.75 194.56"
        fill="#eee"
      />
      <polygon
        points="661.93 722.31 155.42 722.31 155.42 134.06 231.95 49.2 661.93 49.2 661.93 722.31"
        fill="url(#8f0ddb95-6166-4bb1-9b4d-46cd9e3d30e6)"
      />
      <polygon
        points="654.11 704.42 164.37 704.42 164.37 138.65 238.36 57.02 654.11 57.02 654.11 704.42"
        fill="#fafafa"
      />
      <rect
        x="212.18"
        y="126.91"
        width="238.59"
        height="40.25"
        fill="#e0e0e0"
      />
      <rect
        x="212.66"
        y="237.04"
        width="174.84"
        height="40.25"
        fill="#e0e0e0"
      />
      <rect x="212.66" y="402.53" width="392.18" height="147.59" fill={color} />
      <rect x="515.97" y="127.47" width="88.87" height="40.25" fill="#f5f5f5" />
      <rect x="515.97" y="190.08" width="88.87" height="40.25" fill="#f5f5f5" />
      <polygon
        points="245.99 57.02 245.99 146.47 164.37 146.47 164.37 138.65 238.16 57.02 245.99 57.02"
        fill="url(#2acd927f-116a-42d0-926b-2e100ad401a0)"
      />
      <polygon
        points="164.17 138.65 238.16 57.02 238.16 138.65 164.17 138.65"
        fill="#eee"
      />
      <polygon
        points="814 673.12 307.49 673.12 307.49 84.87 384.01 0 814 0 814 673.12"
        fill="url(#dd98f1d5-faf2-451f-bb12-7f13808eec29)"
      />
      <polygon
        points="806.17 655.23 316.43 655.23 316.43 89.45 390.43 7.83 806.17 7.83 806.17 655.23"
        fill="#fff"
      />
      <rect x="364.25" y="77.71" width="238.59" height="40.25" fill="#e0e0e0" />
      <rect
        x="364.73"
        y="187.85"
        width="174.84"
        height="40.25"
        fill="#e0e0e0"
      />
      <rect x="364.73" y="353.33" width="392.18" height="147.59" fill={color} />
      <rect x="668.04" y="78.27" width="88.87" height="40.25" fill="#e0e0e0" />
      <rect x="668.04" y="140.88" width="88.87" height="40.25" fill="#e0e0e0" />
      <rect x="668.04" y="203.5" width="88.87" height="40.25" fill="#e0e0e0" />
      <polygon
        points="398.06 7.83 398.06 97.28 316.43 97.28 316.43 89.45 390.23 7.83 398.06 7.83"
        fill="url(#523444de-12f9-4e88-a28a-f69f2aefc1da)"
      />
      <polygon
        points="316.23 89.45 390.23 7.83 390.23 89.45 316.23 89.45"
        fill="#eee"
      />
    </svg>
  );
};

Documents.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Documents.defaultProps = {
  color: "primary",
  style: {}
};

export default Documents;
