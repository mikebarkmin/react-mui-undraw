import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Setup = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="d0a49112-1639-4682-9529-9d2abcda4fd6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="907.03"
      height="730"
      viewBox="0 0 907.03 730"
    >
      <defs>
        <linearGradient
          id="266ddccd-2bf2-4e28-b2e5-5ae966d4800f"
          x1="219.02"
          y1="323.78"
          x2="219.02"
          y2="74.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="626d076d-6f89-411f-83f5-9b8674077322"
          x1="33.88"
          y1="206.96"
          x2="182.23"
          y2="206.96"
          xlink:href="#266ddccd-2bf2-4e28-b2e5-5ae966d4800f"
        />
        <linearGradient
          id="e2ac2573-f441-4fda-b2ca-fa87ebeba1c3"
          x1="749.04"
          y1="221.83"
          x2="749.04"
          y2="112.64"
          xlink:href="#266ddccd-2bf2-4e28-b2e5-5ae966d4800f"
        />
        <linearGradient
          id="bb3d1d29-a72a-47e9-9ad6-cff955e05eb4"
          x1="628.36"
          y1="671.95"
          x2="628.36"
          y2="527.93"
          xlink:href="#266ddccd-2bf2-4e28-b2e5-5ae966d4800f"
        />
        <linearGradient
          id="69187472-cad7-4cbf-a29f-e953f1d019d9"
          x1="499.83"
          y1="650.24"
          x2="499.83"
          y2="549.64"
          xlink:href="#266ddccd-2bf2-4e28-b2e5-5ae966d4800f"
        />
      </defs>
      <title>setup</title>
      <circle
        cx="423.15"
        cy="365"
        r="363"
        fill="none"
        stroke="#64ffda"
        stroke-miterlimit="10"
        strokeWidth="4"
        stroke-dasharray="12.07 15.09"
      />
      <rect
        x="76.24"
        y="109.89"
        width="381.98"
        height="242.97"
        fill={color}
        opacity="0.2"
      />
      <rect
        y="74.96"
        width="438.05"
        height="248.81"
        fill="url(#266ddccd-2bf2-4e28-b2e5-5ae966d4800f)"
      />
      <rect x="4.67" y="111.18" width="427.54" height="206.76" fill="#fff" />
      <rect
        x="33.88"
        y="128.7"
        width="148.35"
        height="156.53"
        fill="url(#626d076d-6f89-411f-83f5-9b8674077322)"
      />
      <rect x="38.55" y="132.2" width="140.18" height="149.52" fill={color} />
      <path
        d="M294.27,276.24c-1.1-8.88-2.61-17.81-6-26.09s-8.86-15.94-16.46-20.66a18.81,18.81,0,0,0-9.1-3.15c-6-.21-11.45,3.8-14.52,8.91a41.57,41.57,0,0,0-2.71,5.51,12.83,12.83,0,0,0-10.65,11.75,32.72,32.72,0,0,0,4.63,61.78v5.58a32.84,32.84,0,0,0-24.53,31.67v15.19h65.42V351.54a32.84,32.84,0,0,0-24.53-31.67v-5.58a32.72,32.72,0,0,0,24.53-31.68c0-.08,0-.15,0-.23l3.68,8.19c3.5,7.8,7.09,16.18,5.73,24.62C296.46,303.71,295.9,289.46,294.27,276.24Z"
        transform="translate(-146.48 -85)"
        fill="#fff"
      />
      <rect x="4.67" y="79.64" width="427.54" height="31.54" fill={color} />
      <rect
        x="235.96"
        y="176.01"
        width="162.37"
        height="10.51"
        fill="#e0e0e0"
      />
      <rect x="235.96" y="220.4" width="162.37" height="10.51" fill="#f5f5f5" />
      <rect
        x="234.79"
        y="198.2"
        width="95.79"
        height="10.51"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="234.79"
        y="242.59"
        width="65.42"
        height="10.51"
        fill="#69f0ae"
        opacity="0.2"
      />
      <rect x="311.89" y="242.59" width="65.42" height="10.51" fill="#69f0ae" />
      <rect
        x="667.36"
        y="136.67"
        width="215.55"
        height="100.52"
        fill="#ff6e40"
        opacity="0.2"
      />
      <rect
        x="633.47"
        y="112.64"
        width="231.14"
        height="109.19"
        fill="url(#e2ac2573-f441-4fda-b2ca-fa87ebeba1c3)"
      />
      <rect x="641.97" y="115.24" width="215.55" height="100.52" fill="#fff" />
      <rect
        x="674.63"
        y="137.22"
        width="125.74"
        height="11.93"
        fill="#ff6e40"
        opacity="0.3"
      />
      <rect x="674.63" y="164.52" width="65.21" height="11.93" fill="#ff6e40" />
      <rect
        x="404.2"
        y="557.44"
        width="502.83"
        height="135.25"
        fill={color}
        opacity="0.2"
      />
      <rect
        x="373.29"
        y="527.93"
        width="510.15"
        height="144.01"
        fill="url(#bb3d1d29-a72a-47e9-9ad6-cff955e05eb4)"
      />
      <rect x="376.95" y="532.81" width="502.83" height="134.25" fill="#fff" />
      <circle
        cx="499.83"
        cy="599.94"
        r="50.3"
        fill="url(#69187472-cad7-4cbf-a29f-e953f1d019d9)"
      />
      <circle cx="499.83" cy="599.94" r="44.71" fill={color} />
      <g opacity="0.2">
        <rect x="587.85" y="566.41" width="79.64" height="13.97" fill={color} />
        <rect
          x="587.85"
          y="592.95"
          width="219.35"
          height="13.97"
          fill={color}
        />
        <rect x="587.85" y="619.5" width="219.35" height="13.97" fill={color} />
      </g>
      <polygon
        points="529.17 582.01 519.35 574.52 493.47 608.43 479.03 597.41 471.54 607.22 490.9 622 490.95 621.93 495.85 625.67 529.17 582.01"
        fill="#fff"
      />
    </svg>
  );
};

Setup.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Setup.defaultProps = {
  color: "primary",
  style: {}
};

export default Setup;
