import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Posts = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="7114f287-f455-48fa-b22d-74c46c20e1b4"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="880"
      height="708.57"
      viewBox="0 0 880 708.57"
    >
      <defs>
        <linearGradient
          id="f3037a3a-ca9c-44ad-820d-2abf4b00aaf0"
          x1="440"
          y1="126.86"
          x2="440"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
          x1="87.3"
          y1="109.38"
          x2="87.3"
          y2="20.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="#b3b3b3" stop-opacity="0.1" />
          <stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient
          id="4fd672ca-49a1-4acc-8871-0fd2bc3af50b"
          x1="255.5"
          y1="42.07"
          x2="255.5"
          y2="30.42"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="527de121-8fb9-4e9a-bfeb-6bf3b12ddf98"
          x1="292.17"
          y1="69.25"
          x2="292.17"
          y2="57.6"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="76703a65-20bd-40ee-b936-a2314b4e65bc"
          x1="440"
          y1="321.14"
          x2="440"
          y2="194.29"
          xlink:href="#f3037a3a-ca9c-44ad-820d-2abf4b00aaf0"
        />
        <linearGradient
          id="7e06630c-c107-466d-ba5a-d39eb4869e22"
          x1="87.3"
          y1="303.67"
          x2="87.3"
          y2="214.35"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="64024240-2bee-44a2-98f2-c3338fae8d96"
          x1="255.5"
          y1="236.36"
          x2="255.5"
          y2="224.71"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="df6f1b6e-a3ce-456d-88f8-a973e60fd6c1"
          x1="292.17"
          y1="263.54"
          x2="292.17"
          y2="251.89"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="7d6446ca-5878-45bd-af0f-8e2754606c00"
          x1="440"
          y1="514.29"
          x2="440"
          y2="387.43"
          xlink:href="#f3037a3a-ca9c-44ad-820d-2abf4b00aaf0"
        />
        <linearGradient
          id="f86c7a62-0867-4bdc-be80-f22c48d46d50"
          x1="87.3"
          y1="496.81"
          x2="87.3"
          y2="407.49"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="34d7a9d4-14f7-4477-9569-e99019787794"
          x1="255.5"
          y1="429.5"
          x2="255.5"
          y2="417.85"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="d49810fe-7d94-46b3-98b2-9fba8eecb6ae"
          x1="292.17"
          y1="456.68"
          x2="292.17"
          y2="445.03"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="2744f56f-2e61-4887-afdf-980f321917da"
          x1="440"
          y1="708.57"
          x2="440"
          y2="581.71"
          xlink:href="#f3037a3a-ca9c-44ad-820d-2abf4b00aaf0"
        />
        <linearGradient
          id="695e60e5-3aad-46fe-856e-ca0324095340"
          x1="87.3"
          y1="691.1"
          x2="87.3"
          y2="601.78"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="3817817f-905c-4d93-a739-792a114f5d6c"
          x1="255.5"
          y1="623.78"
          x2="255.5"
          y2="612.13"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
        <linearGradient
          id="dc613b25-7b46-43c8-b008-a384c95d9aa8"
          x1="292.17"
          y1="650.97"
          x2="292.17"
          y2="639.32"
          xlink:href="#a70f8c99-35f5-49a6-8b7d-4f5214e4d387"
        />
      </defs>
      <title>Posts</title>
      <rect
        width="880"
        height="126.86"
        rx="18.52"
        ry="18.52"
        fill="url(#f3037a3a-ca9c-44ad-820d-2abf4b00aaf0)"
      />
      <rect
        x="41.32"
        y="20.06"
        width="91.96"
        height="89.32"
        rx="8.35"
        ry="8.35"
        fill="url(#a70f8c99-35f5-49a6-8b7d-4f5214e4d387)"
      />
      <rect
        x="167.04"
        y="30.42"
        width="176.93"
        height="11.65"
        fill="url(#4fd672ca-49a1-4acc-8871-0fd2bc3af50b)"
      />
      <rect
        x="167.04"
        y="57.6"
        width="250.26"
        height="11.65"
        fill="url(#527de121-8fb9-4e9a-bfeb-6bf3b12ddf98)"
      />
      <rect
        y="194.29"
        width="880"
        height="126.86"
        rx="18.52"
        ry="18.52"
        fill="url(#76703a65-20bd-40ee-b936-a2314b4e65bc)"
      />
      <rect
        x="41.32"
        y="214.35"
        width="91.96"
        height="89.32"
        rx="8.35"
        ry="8.35"
        fill="url(#7e06630c-c107-466d-ba5a-d39eb4869e22)"
      />
      <rect
        x="167.04"
        y="224.71"
        width="176.93"
        height="11.65"
        fill="url(#64024240-2bee-44a2-98f2-c3338fae8d96)"
      />
      <rect
        x="167.04"
        y="251.89"
        width="250.26"
        height="11.65"
        fill="url(#df6f1b6e-a3ce-456d-88f8-a973e60fd6c1)"
      />
      <rect
        y="387.43"
        width="880"
        height="126.86"
        rx="18.52"
        ry="18.52"
        fill="url(#7d6446ca-5878-45bd-af0f-8e2754606c00)"
      />
      <rect
        x="41.32"
        y="407.49"
        width="91.96"
        height="89.32"
        rx="8.35"
        ry="8.35"
        fill="url(#f86c7a62-0867-4bdc-be80-f22c48d46d50)"
      />
      <rect
        x="167.04"
        y="417.85"
        width="176.93"
        height="11.65"
        fill="url(#34d7a9d4-14f7-4477-9569-e99019787794)"
      />
      <rect
        x="167.04"
        y="445.03"
        width="250.26"
        height="11.65"
        fill="url(#d49810fe-7d94-46b3-98b2-9fba8eecb6ae)"
      />
      <rect
        y="581.71"
        width="880"
        height="126.86"
        rx="18.52"
        ry="18.52"
        fill="url(#2744f56f-2e61-4887-afdf-980f321917da)"
      />
      <rect
        x="41.32"
        y="601.78"
        width="91.96"
        height="89.32"
        rx="8.35"
        ry="8.35"
        fill="url(#695e60e5-3aad-46fe-856e-ca0324095340)"
      />
      <rect
        x="167.04"
        y="612.13"
        width="176.93"
        height="11.65"
        fill="url(#3817817f-905c-4d93-a739-792a114f5d6c)"
      />
      <rect
        x="167.04"
        y="639.32"
        width="250.26"
        height="11.65"
        fill="url(#dc613b25-7b46-43c8-b008-a384c95d9aa8)"
      />
      <rect
        x="8"
        y="4.57"
        width="864"
        height="112"
        rx="18.52"
        ry="18.52"
        fill="#fff"
      />
      <rect
        x="48.57"
        y="22.29"
        width="90.29"
        height="78.86"
        rx="8.35"
        ry="8.35"
        fill={color}
      />
      <rect x="172" y="31.43" width="173.71" height="10.29" fill="#bdbdbd" />
      <rect x="172" y="55.43" width="245.71" height="10.29" fill="#e0e0e0" />
      <rect
        x="8"
        y="198.86"
        width="864"
        height="112"
        rx="18.52"
        ry="18.52"
        fill="#fff"
      />
      <rect
        x="48.57"
        y="216.57"
        width="90.29"
        height="78.86"
        rx="8.35"
        ry="8.35"
        fill={color}
      />
      <rect x="172" y="225.71" width="173.71" height="10.29" fill="#bdbdbd" />
      <rect x="172" y="249.71" width="245.71" height="10.29" fill="#64ffda" />
      <rect
        x="8"
        y="393.14"
        width="864"
        height="112"
        rx="18.52"
        ry="18.52"
        fill="#fff"
      />
      <rect
        x="48.57"
        y="410.86"
        width="90.29"
        height="78.86"
        rx="8.35"
        ry="8.35"
        fill={color}
      />
      <rect x="172" y="420" width="173.71" height="10.29" fill="#bdbdbd" />
      <rect x="172" y="444" width="245.71" height="10.29" fill="#e0e0e0" />
      <rect
        x="8"
        y="587.43"
        width="864"
        height="112"
        rx="18.52"
        ry="18.52"
        fill="#fff"
      />
      <rect
        x="48.57"
        y="605.14"
        width="90.29"
        height="78.86"
        rx="8.35"
        ry="8.35"
        fill={color}
      />
      <rect x="172" y="614.29" width="173.71" height="10.29" fill="#bdbdbd" />
      <rect x="172" y="638.29" width="245.71" height="10.29" fill="#64ffda" />
    </svg>
  );
};

Posts.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Posts.defaultProps = {
  color: "primary",
  style: {}
};

export default Posts;
