import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgProgressOverview = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 827.758 662.452"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M827.757 644.171c-5.157 25.43-275.924 23.296-275.514-.001 5.157-25.43 275.924-23.295 275.514.001zM520.879 579.336c-1.156 5.7-61.85 5.222-61.758 0 1.156-5.7 61.85-5.222 61.758 0z"
        fill="#e6e6e6"
      />
      <circle cx={677.545} cy={189.879} r={18.909} fill="#2f2e41" />
      <path
        d="M658.662 182.19l11.835-2.9a30.48 30.48 0 0029.868-36.553 39.839 39.839 0 00-39.839-39.84 39.839 39.839 0 00-39.839 39.84 31.659 31.659 0 0037.975 39.454z"
        fill="#2f2e41"
      />
      <path
        fill="#575a89"
        d="M734.789 303.376l-29.259-41.643-15.884 29.499 18.153 21.178 26.99-9.034z"
      />
      <path
        d="M719.523 299.173s9.076-3.781 14.37 3.026 14.371 21.178 11.346 23.447-12.858-6.807-12.858-6.807z"
        fill="#575a89"
      />
      <ellipse
        cx={922.662}
        cy={444.798}
        rx={6.807}
        ry={12.858}
        transform="rotate(-38.561 659.832 651.443)"
        fill="#ffb8b8"
      />
      <path
        d="M749.02 404.308s-1.512 48.407-6.807 76.392 3.026 128.581 3.026 128.581l-16.64 7.564-10.59-11.345s3.783-20.422-1.512-34.793-7.564-76.392-7.564-76.392l-9.076-83.2zM686.999 418.678l-47.65 86.982-43.113 79.418v16.64L574.3 594.91l7.564-17.397s3.782-68.072 31.01-94.545l23.448-67.316z"
        fill="#ffb8b8"
      />
      <path
        d="M715.363 301.82h8.32s45.381 62.022 43.112 99.84l-65.047 26.473-2.269-5.295s-53.702 9.833-67.316-1.512l18.909-96.815 1.513-13.614zM736.163 608.525s-10.59-13.614 2.269-14.37 12.858 7.563 12.858 7.563l28.741 19.665s47.651 17.397 13.615 22.691c0 0-14.37 3.026-32.524-3.782a107.708 107.708 0 00-34.036-6.807s-16.64-.756-16.64-9.076 8.118-22.691 8.118-22.691 13.06 9.076 17.599 6.807zM572.789 589.616s25.716-5.295 26.472 4.538 0 26.473 0 26.473-6.05 7.563-4.538 12.858-3.782 21.934-21.934 19.665-12.102-27.985-12.102-27.985l12.102-29.498z"
        fill="#2f2e41"
      />
      <circle cx={655.232} cy={146.388} r={25.338} fill="#ffb8b8" />
      <path
        d="M672.25 160.381l.378 43.49-31.01-10.588s3.781-24.96 3.025-27.23z"
        fill="#ffb8b8"
      />
      <path
        d="M677.923 191.014s-32.524-11.346-36.306-9.833-5.294 9.833-5.294 9.833-18.153-3.782-20.422 8.32 14.371 65.047 14.371 65.047l16.64 31.01s-8.32 12.859 6.05 17.397 66.56-9.833 66.56-9.833 9.077-10.589 0-10.589c0 0-3.025-9.833-6.05-12.102s2.269-6.05-.757-6.807-3.025-2.269-3.025-2.269 15.127-20.422 1.513-37.062-15.506-32.145-22.313-34.414-10.967-8.698-10.967-8.698z"
        fill="#575a89"
      />
      <ellipse
        cx={847.782}
        cy={483.372}
        rx={6.807}
        ry={12.858}
        transform="rotate(-67.908 666.524 562.194)"
        fill="#ffb8b8"
      />
      <path
        d="M627.246 197.065h-10.663s-30.936 74.88-21.86 98.327 42.356 64.29 42.356 64.29 10.59 18.91 18.153 18.91 15.883-27.23 15.883-27.23l-24.203-10.589-28.742-52.945 13.615-40.844z"
        fill="#575a89"
      />
      <path
        opacity={0.2}
        d="M710.068 270.81l16.64 29.498-3.025 1.513-13.615-31.011zM676.795 337.563l1.465-.377 21.968 85.46-1.465.377z"
      />
      <path
        d="M624.6 136.178l4.537-8.32 6.808 4.564a7.392 7.392 0 006.134 3.052l23.767-.48a7.835 7.835 0 005.648-2.572 12.386 12.386 0 017.68 8.487l2.909 11.152v-37.818H636.7z"
        fill="#2f2e41"
      />
      <path fill="#e6e6e6" d="M0 0h426.874v549.967H0z" />
      <path
        fill="#fff"
        d="M11.858 70.581h403.158v137.774H11.858zM11.858 232.07h403.158v137.774H11.858zM11.858 393.559h403.158v137.774H11.858z"
      />
      <circle cx={404.288} cy={21.457} r={11.293} fill="#fff" />
      <circle cx={48.842} cy={300.957} r={11.293} fill="#e6e6e6" />
      <path fill="#e6e6e6" d="M81.592 291.923h106.154v18.069H81.592z" />
      <circle cx={249.574} cy={301.522} r={11.293} fill="#e6e6e6" />
      <path
        fill="#e6e6e6"
        d="M282.324 292.487h106.154v18.069H282.324zM410.168 17.173l-1.597-1.597-4.283 4.284-4.284-4.284-1.597 1.597 4.284 4.284-4.284 4.283 1.597 1.597 4.284-4.284 4.283 4.284 1.597-1.597-4.283-4.283 4.283-4.284z"
      />
      <circle cx={48.842} cy={139.468} r={11.293} fill="#e6e6e6" />
      <path fill="#e6e6e6" d="M102.484 129.304h286.841v18.069H102.484z" />
      <path fill={color} d="M84.979 129.304h257.479v18.069H84.979z" />
      <circle cx={48.842} cy={462.446} r={11.293} fill="#e6e6e6" />
      <path fill="#e6e6e6" d="M102.484 452.283h286.841v18.069H102.484z" />
      <path
        fill={color}
        d="M84.979 452.283h161.207v18.069H84.979zM81.592 291.923h33.597v18.069H81.592zM282.324 292.487h66.628v18.069h-66.628z"
      />
      <path
        d="M513.392 555.1c.174 17.793-10.344 24.109-23.392 24.236q-.455.004-.905-.001-.907-.011-1.796-.065c-11.784-.72-20.998-7.161-21.16-23.71-.167-17.126 21.51-38.951 23.136-40.565l.003-.002.093-.092s23.848 22.405 24.021 40.198z"
        fill="#e6e6e6"
      />
    </svg>
  );
};

SvgProgressOverview.propTypes = {
  color: PropTypes.string
};
SvgProgressOverview.defaultProps = {
  color: "primary"
};
export default SvgProgressOverview;
