import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMyDocuments = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 758.697 683.657"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M728.113 271c0 118.6-76.18 219.4-182.28 256.14a272.758 272.758 0 01-132.97 11.26q-6.345-1.035-12.6-2.38-8.475-1.8-16.75-4.14c-113.91-32.06-197.4-136.72-197.4-260.88 0-149.67 121.33-271 271-271s271 121.33 271 271z"
        fill="#e6e6e6"
      />
      <path
        d="M287.376 354.643a2.043 2.043 0 00-.839 2.761l101.889 190.84a2.043 2.043 0 002.762.839l144.03-76.897a2.043 2.043 0 00.838-2.762l-101.888-190.84a2.043 2.043 0 00-2.762-.838z"
        fill="#3f3d56"
      />
      <path
        d="M300.764 360.22l93.239 174.634 127.826-68.245-93.238-174.636zm-8.1 4.323l.018-.009-.02.01z"
        fill="#fff"
      />
      <path
        d="M332.994 379.419c-1.986 1.06-2.409 4.155-.944 6.898s4.272 4.114 6.257 3.054l93.62-49.983c1.986-1.06 2.408-4.156.944-6.899s-4.272-4.114-6.258-3.053zM344.529 401.023c-1.986 1.06-2.409 4.155-.944 6.899s4.271 4.113 6.257 3.053l93.62-49.983c1.985-1.06 2.408-4.155.943-6.898s-4.271-4.114-6.257-3.054zM356.063 422.628c-1.986 1.06-2.408 4.155-.944 6.898s4.272 4.114 6.258 3.054l93.619-49.983c1.986-1.06 2.409-4.156.944-6.899s-4.272-4.114-6.257-3.054zM367.598 444.232c-1.986 1.06-2.409 4.155-.944 6.899s4.271 4.113 6.257 3.053l93.62-49.983c1.985-1.06 2.408-4.155.944-6.898s-4.272-4.114-6.258-3.054zM379.132 465.837c-1.986 1.06-2.408 4.155-.944 6.898s4.272 4.114 6.258 3.054l93.62-49.984c1.985-1.06 2.408-4.155.943-6.898s-4.271-4.114-6.257-3.054z"
        fill={color}
      />
      <path
        fill="#2f2e41"
        d="M397.312 272.193l84.83 5.18 23.757-70.848-74.405-15.721-34.182 81.389z"
      />
      <circle cx={458.491} cy={220.351} r={33.927} fill="#ffb8b8" />
      <path fill="#ffb8b8" d="M513.613 288.5l-55 9-14.5-57.5 38.5-3.5 31 52z" />
      <path
        d="M545.613 524.5l.22 2.64a272.758 272.758 0 01-132.97 11.26l-.29 4.69a16.05 16.05 0 01-21.79 13.94l9.48-21.01 11.99-26.59 7.86-17.43-2.83-60.3-.3-6.24-.37-7.96 5.12-.03 36.4-.22 34.69-.22 5.29-.03c33.17 40.8 60.54 73.96 47.5 107.5z"
        fill="#2f2e41"
      />
      <path
        d="M497.613 416.5l-81 9-3-56c-9.506-24.244-3.23-45.884 16.498-65.303l4.01-15.876a23.504 23.504 0 0117.362-17.112c13.259-7.604 28.278-11.229 45.13-10.709a33.676 33.676 0 0121.325 33.987c-3.486 44.01-9.743 85.206-20.325 122.013z"
        fill={color}
      />
      <path
        d="M474.613 322.5l-.65 4.91-10.35 78.09-5.48 11.75-1.79 3.84-41.73 89.41-1.75 27.9-.29 4.69a16.03 16.03 0 11-30.73-7.28l1.67-3.93 9.1-21.38 24.67-78.8 2.03-6.5 2.42-7.73 6.88-21.97 10.96-67.56 1.04-6.44z"
        fill="#ffb8b8"
      />
      <path
        d="M480.613 329.5c-15.716-5.647-30.792-6.248-45 0l4.638-40.195a19.17 19.17 0 0118.152-19.794 19.17 19.17 0 0120.155 18.203z"
        fill={color}
      />
      <path
        d="M432.826 180.266s-17.543 6.402-17.994 29.676a42.02 42.02 0 001.554 11.59c1.137 4.277 2.05 13.558-5.6 25.93a239.877 239.877 0 00-13.533 24.915l19.753 1.906 3.266-32.745a162.534 162.534 0 0111.612-46.167l.127-.308s9.062 15.75 26.286 15.265l-6.325-5.978s21.572 8.124 33.302 9.755a7.429 7.429 0 014.474 12.353q-.103.113-.21.227c-7.174 7.59-21.452 25.228-12.459 38.518s1.716 17.189 1.716 17.189l13.324-7.763 6.047-3.864.139 4.921 31.882-4.592s8.577-1.472-10.466-21.866c0 0-5.101-7.985-3.167-15.05a35.346 35.346 0 00.878-16.561c-4.784-22.946-22.295-68.34-84.606-37.351z"
        fill="#2f2e41"
      />
      <ellipse cx={457.113} cy={674.157} rx={122} ry={7} fill="#e6e6e6" />
      <path
        d="M.743 322.533a1.001 1.001 0 00-.71 1.223l27.291 102.427a1.001 1.001 0 001.224.71l77.303-20.597a1.001 1.001 0 00.709-1.224L79.27 302.645a1.001 1.001 0 00-1.224-.709z"
        fill="#f2f2f2"
      />
      <path
        d="M19.738 339.449c-1.066.284-1.613 1.713-1.22 3.185s1.577 2.44 2.643 2.156l50.247-13.388c1.066-.284 1.614-1.713 1.221-3.185s-1.578-2.44-2.644-2.156zM22.828 351.044c-1.066.284-1.614 1.713-1.221 3.186s1.578 2.44 2.644 2.156l50.247-13.388c1.066-.284 1.613-1.713 1.22-3.186s-1.578-2.44-2.643-2.155zM25.917 362.64c-1.066.284-1.613 1.713-1.221 3.185s1.578 2.44 2.644 2.156l50.247-13.388c1.066-.284 1.614-1.713 1.221-3.185s-1.578-2.44-2.644-2.156zM29.006 374.235c-1.065.284-1.613 1.713-1.22 3.186s1.578 2.44 2.644 2.156l50.247-13.388c1.066-.284 1.613-1.713 1.22-3.186s-1.578-2.44-2.643-2.155zM32.096 385.83c-1.066.285-1.613 1.714-1.221 3.186s1.578 2.44 2.644 2.156l50.247-13.388c1.066-.284 1.613-1.713 1.221-3.185s-1.578-2.44-2.644-2.156zM35.185 397.426c-1.066.284-1.613 1.713-1.22 3.186s1.578 2.44 2.643 2.156l50.248-13.388c1.065-.284 1.613-1.713 1.22-3.186s-1.578-2.44-2.644-2.156z"
        fill="#fff"
      />
      <path
        d="M198.297 683.426c0 .127.448.231 1 .231h106c.551 0 1-.104 1-.231v-18.537c0-.128-.449-.232-1-.232h-106c-.552 0-1 .104-1 .232z"
        fill="#f2f2f2"
      />
      <path
        d="M219.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463zM231.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463zM243.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463zM255.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463zM267.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463zM279.533 680.182c0 .255 1.24.463 2.764.463s2.764-.208 2.764-.463v-12.049c0-.255-1.24-.463-2.764-.463s-2.764.208-2.764.463z"
        fill="#fff"
      />
      <path
        d="M3.578 248.617a1.001 1.001 0 00-.41 1.354l49.923 93.507a1.001 1.001 0 001.353.411l70.571-37.678a1.001 1.001 0 00.412-1.353l-49.924-93.507a1.001 1.001 0 00-1.353-.412z"
        fill="#e6e6e6"
      />
      <path
        d="M10.138 251.35l45.685 85.567 62.633-33.438L72.77 217.91zm-3.969 2.118l.01-.004-.01.005z"
        fill="#fff"
      />
      <path
        d="M25.93 260.757c-.973.52-1.18 2.036-.463 3.38s2.093 2.016 3.066 1.496l45.872-24.49c.973-.52 1.18-2.036.463-3.38s-2.093-2.016-3.066-1.497zM31.582 271.343c-.973.52-1.18 2.036-.463 3.38s2.093 2.016 3.066 1.496l45.872-24.49c.973-.52 1.18-2.037.462-3.38s-2.093-2.016-3.066-1.497zM37.233 281.929c-.973.52-1.18 2.036-.462 3.38s2.093 2.015 3.066 1.496l45.872-24.49c.973-.52 1.18-2.037.462-3.38s-2.093-2.017-3.066-1.497zM42.885 292.514c-.973.52-1.18 2.036-.462 3.38s2.093 2.016 3.066 1.497L91.36 272.9c.973-.52 1.18-2.036.463-3.38s-2.093-2.016-3.066-1.496zM48.537 303.1c-.973.52-1.18 2.036-.463 3.38s2.093 2.016 3.066 1.496l45.872-24.49c.973-.52 1.18-2.036.462-3.38s-2.093-2.016-3.066-1.497zM54.189 313.686c-.973.52-1.18 2.036-.463 3.38s2.093 2.016 3.066 1.496l45.872-24.49c.973-.52 1.18-2.037.462-3.38s-2.093-2.016-3.066-1.497z"
        fill={color}
      />
      <path
        d="M689.333 487.575a1.001 1.001 0 00-1.37.352l-53.927 91.257a1.001 1.001 0 00.352 1.37l68.873 40.7a1.001 1.001 0 001.37-.352l53.927-91.257a1.001 1.001 0 00-.352-1.37z"
        fill="#e6e6e6"
      />
      <path
        d="M690.409 494.6l-49.348 83.508 61.124 36.121 49.349-83.509zm-3.873-2.29l.008.005-.01-.005z"
        fill="#fff"
      />
      <path
        d="M690.582 512.98c-.95-.561-2.353.05-3.128 1.362s-.634 2.836.315 3.397l44.768 26.455c.95.561 2.353-.05 3.128-1.362s.634-2.836-.316-3.397zM684.477 523.31c-.95-.56-2.353.051-3.128 1.363s-.634 2.836.315 3.397l44.768 26.455c.95.561 2.353-.05 3.128-1.362s.634-2.836-.316-3.397zM678.372 533.642c-.95-.561-2.353.05-3.128 1.362s-.634 2.836.315 3.397l44.768 26.455c.95.561 2.353-.05 3.128-1.362s.634-2.836-.316-3.397zM672.267 543.973c-.95-.561-2.353.05-3.128 1.362s-.634 2.836.315 3.397l44.768 26.455c.95.56 2.353-.05 3.128-1.362s.634-2.836-.316-3.397zM666.162 554.304c-.95-.561-2.353.05-3.128 1.362s-.634 2.836.315 3.397l44.768 26.455c.95.56 2.353-.05 3.128-1.362s.634-2.836-.316-3.397zM660.057 564.635c-.95-.561-2.353.05-3.128 1.362s-.634 2.836.315 3.397l44.768 26.455c.95.56 2.353-.05 3.128-1.362s.634-2.836-.316-3.397z"
        fill={color}
      />
    </svg>
  );
};

SvgMyDocuments.propTypes = {
  color: PropTypes.string
};
SvgMyDocuments.defaultProps = {
  color: "primary"
};
export default SvgMyDocuments;
