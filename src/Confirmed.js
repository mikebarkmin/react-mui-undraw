import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Confirmed = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="b4f32226-de22-4831-ab78-ba30a904d18e"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="722"
      height="756.57"
      viewBox="0 0 722 756.57"
    >
      <defs>
        <linearGradient
          id="5b7f6937-2584-49b6-9aba-f63379afcef9"
          x1="635.65"
          y1="790.5"
          x2="635.65"
          y2="501.26"
          gradientTransform="translate(0.01 -0.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="726273e3-a105-41c9-bd30-f21c7a222b39"
          x1="457.34"
          y1="294.83"
          x2="457.34"
          y2="145.49"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="053cf442-696d-42d1-9951-f8212c309ade"
          x1="591.52"
          y1="654.18"
          x2="591.52"
          y2="72.22"
          gradientTransform="translate(-238.99 -72.23)"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="47e4505a-9403-4d31-a565-d5fd2c78f1d2"
          x1="771.88"
          y1="599.91"
          x2="771.88"
          y2="322.65"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="8513435b-806a-4f93-81b8-e2b88811f111"
          x1="683.94"
          y1="827.36"
          x2="683.94"
          y2="758.36"
          gradientTransform="translate(-238.99 -72.23)"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="6ed55049-a466-4083-93ca-5129091d0639"
          x1="432.87"
          y1="501.19"
          x2="432.87"
          y2="377.79"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="c0dc0d70-89dc-4268-b32c-aeecea91ae40"
          x1="428.07"
          y1="603.48"
          x2="428.07"
          y2="493.95"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="484e0702-271c-4dc9-aca2-bd1f83d5b37c"
          x1="352.52"
          y1="380.93"
          x2="352.52"
          y2="201.04"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
        <linearGradient
          id="ad7c6dc9-0e1b-446d-83eb-be41b53bfd0d"
          x1="442.05"
          y1="399.65"
          x2="442.05"
          y2="262.62"
          xlink:href="#5b7f6937-2584-49b6-9aba-f63379afcef9"
        />
      </defs>
      <title>confirmed</title>
      <circle
        cx="361"
        cy="395.57"
        r="297"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="2"
        stroke-dasharray="12"
      />
      <circle
        cx="361"
        cy="395.57"
        r="360"
        fill="none"
        stroke="#3ad29f"
        stroke-miterlimit="10"
        strokeWidth="2"
        stroke-dasharray="12"
      />
      <path
        d="M840.94,582.47a81.21,81.21,0,0,0-161-15.14l-249.59-6.77,2.74,42.88s-35.59,82.12,151.46,104v83H800.79v-138A81.16,81.16,0,0,0,840.94,582.47Z"
        transform="translate(-239 -72.21)"
        fill="url(#5b7f6937-2584-49b6-9aba-f63379afcef9)"
      />
      <path
        d="M441.66,605.24s-34.08,78.64,145.05,99.62v79.52H793.8V573.79L439,564.17Z"
        transform="translate(-239 -72.21)"
        fill="#be7c5e"
      />
      <path
        d="M545.16,277.07h0A38.18,38.18,0,0,1,492.66,289L381.47,215.73a38.18,38.18,0,0,1-11.93-52.5h0A38.18,38.18,0,0,1,422,151.3l111.19,73.27A38.18,38.18,0,0,1,545.16,277.07Z"
        transform="translate(-239 -72.21)"
        fill="url(#726273e3-a105-41c9-bd30-f21c7a222b39)"
      />
      <path
        d="M539,273.07h0a35.49,35.49,0,0,1-48.8,11.09L386.81,216a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l103.37,68.12A35.49,35.49,0,0,1,539,273.07Z"
        transform="translate(-239 -72.21)"
        fill="#be7c5e"
      />
      <circle cx="515.49" cy="512.94" r="77.77" fill="#be7c5e" />
      <rect
        x="191.32"
        width="322.42"
        height="581.96"
        rx="12.25"
        ry="12.25"
        fill="url(#053cf442-696d-42d1-9951-f8212c309ade)"
      />
      <rect
        x="195.67"
        y="7.87"
        width="313.7"
        height="566.24"
        rx="13.64"
        ry="13.64"
        fill="#fff"
      />
      <path
        d="M670.33,94.28a25.43,25.43,0,0,1-25.07,21.63H536.92a25.43,25.43,0,0,1-25.06-21.63H454.46a11.91,11.91,0,0,0-11.92,11.91v514a11.91,11.91,0,0,0,11.91,11.92H728.59a11.91,11.91,0,0,0,11.92-11.91v-514A11.91,11.91,0,0,0,728.6,94.28Z"
        transform="translate(-239 -72.21)"
        fill={color}
      />
      <rect
        x="318.01"
        y="28.84"
        width="69.91"
        height="4.37"
        rx="2"
        ry="2"
        fill="#dbdbdb"
      />
      <circle cx="402.77" cy="30.59" r="2.62" fill="#dbdbdb" />
      <path
        d="M804.76,598.87h0c-22.57,5.22-38.06-9.5-43.28-32.06L709.62,374.24a42.24,42.24,0,0,1,31.55-50.51h0a42.24,42.24,0,0,1,50.51,31.55L834,552.82C839.22,575.39,827.32,593.65,804.76,598.87Z"
        transform="translate(-239 -72.21)"
        fill="url(#47e4505a-9403-4d31-a565-d5fd2c78f1d2)"
      />
      <rect
        x="739.86"
        y="329.79"
        width="70.78"
        height="282.61"
        rx="35.39"
        ry="35.39"
        transform="translate(-325.18 114.47) rotate(-13.01)"
        fill="#be7c5e"
      />
      <rect
        x="296.93"
        y="686.15"
        width="296"
        height="69"
        fill="url(#8513435b-806a-4f93-81b8-e2b88811f111)"
      />
      <rect x="304.93" y="694.15" width="280" height="54" fill="#4d8af0" />
      <path
        d="M502,483.65h0a37.72,37.72,0,0,1-51.87,11.79l-74.57-48.25a37.72,37.72,0,0,1-11.79-51.87h0a37.72,37.72,0,0,1,51.87-11.79l74.57,48.25A37.72,37.72,0,0,1,502,483.65Z"
        transform="translate(-239 -72.21)"
        fill="url(#6ed55049-a466-4083-93ca-5129091d0639)"
      />
      <path
        d="M483.28,585.78h0a38.06,38.06,0,0,1-52.34,11.9L384.75,564a38.06,38.06,0,0,1-11.9-52.34h0a38.06,38.06,0,0,1,52.34-11.9l46.19,33.69A38.06,38.06,0,0,1,483.28,585.78Z"
        transform="translate(-239 -72.21)"
        fill="url(#c0dc0d70-89dc-4268-b32c-aeecea91ae40)"
      />
      <g opacity="0.5">
        <circle
          cx="352.52"
          cy="290.99"
          r="89.94"
          fill="url(#484e0702-271c-4dc9-aca2-bd1f83d5b37c)"
        />
      </g>
      <circle cx="352.52" cy="290.99" r="84.65" fill="#69f0ae" />
      <polygon
        points="315.78 279.69 347.52 308.79 392.49 242.66 408.37 255.89 347.52 335.25 302.55 284.99 315.78 279.69"
        fill="#fff"
      />
      <path
        d="M479.55,583.27h0a35.49,35.49,0,0,1-48.8,11.09L387.67,563a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l43.07,31.42A35.49,35.49,0,0,1,479.55,583.27Z"
        transform="translate(-239 -72.21)"
        fill="#be7c5e"
      />
      <path
        d="M497.9,481h0a35.49,35.49,0,0,1-48.8,11.09l-70.16-45.4a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l70.16,45.4A35.49,35.49,0,0,1,497.9,481Z"
        transform="translate(-239 -72.21)"
        fill="#be7c5e"
      />
      <path
        d="M521.28,382h0a37.9,37.9,0,0,1-52.11,11.84l-94.5-61.53a37.9,37.9,0,0,1-11.84-52.11h0a37.9,37.9,0,0,1,52.11-11.84l94.5,61.53A37.9,37.9,0,0,1,521.28,382Z"
        transform="translate(-239 -72.21)"
        fill="url(#ad7c6dc9-0e1b-446d-83eb-be41b53bfd0d)"
      />
      <path
        d="M516.26,378.8h0a35.49,35.49,0,0,1-48.8,11.09l-88.51-57.63a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09L505.16,330A35.49,35.49,0,0,1,516.26,378.8Z"
        transform="translate(-239 -72.21)"
        fill="#be7c5e"
      />
    </svg>
  );
};

Confirmed.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Confirmed.defaultProps = {
  color: "primary",
  style: {}
};

export default Confirmed;
