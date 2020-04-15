import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPortfolioFeedback = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 765.554"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M655.933 18.19H624.36a23.444 23.444 0 01-21.706 32.299H464.086A23.444 23.444 0 01442.38 18.19h-29.49a49.345 49.345 0 00-49.345 49.345v625.409a49.345 49.345 0 0049.345 49.345h243.043a49.345 49.345 0 0049.345-49.345V67.536a49.345 49.345 0 00-49.345-49.345z"
        fill="#e6e6e6"
      />
      <path
        d="M653.267 760.481H411.389a67.153 67.153 0 01-67.077-67.077V67.077A67.153 67.153 0 01411.39 0h241.878a67.152 67.152 0 0167.076 67.077v113.167h4.168v83.265h-4.168v429.895a67.152 67.152 0 01-67.076 67.077zM411.389 2a65.15 65.15 0 00-65.077 65.077v626.327a65.15 65.15 0 0065.077 65.077h241.878a65.15 65.15 0 0065.076-65.077V261.51h4.168v-79.265h-4.168V67.077A65.15 65.15 0 00653.267 2z"
        fill="#e6e6e6"
      />
      <path
        d="M280.16 406.386l16.001 24.783 52.034-.415s21.874-12.353 26.272 3.934c1.507 5.578-21.39 7.088-23.547 7.219-5.39.326-59.15 9.654-62.469 4.877s-20.777-21.463-20.777-21.463z"
        fill="#ffb8b8"
      />
      <path
        d="M431.417 117.669a3.504 3.504 0 00-3.5 3.5v206a3.504 3.504 0 003.5 3.5h206a3.504 3.504 0 003.5-3.5v-206a3.504 3.504 0 00-3.5-3.5z"
        fill="#fff"
      />
      <path
        d="M619.353 360.153H581.46c-2.37-21.08 2.859-36.791 0-45.472h37.893a237.224 237.224 0 000 45.472z"
        fill={color}
      />
      <path fill="#ccc" d="M374.912 411.169h319v144h-319z" />
      <path
        d="M600.417 221.559a65.82 65.82 0 11-65.82-65.82 65.79 65.79 0 0165.82 65.82z"
        fill={color}
      />
      <path
        d="M367.616 403.418a2.503 2.503 0 00-2.5 2.5v138a2.503 2.503 0 002.5 2.5h313a2.502 2.502 0 002.5-2.5v-138a2.503 2.503 0 00-2.5-2.5z"
        fill="#fff"
      />
      <path
        d="M588.548 433.363a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h42.824a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM426.397 433.363a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h12.475a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM393.447 433.363a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h12.475a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM460.214 433.363a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h107.859a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM485.36 506.2a1.502 1.502 0 00-1.5 1.5v7.274a1.502 1.502 0 001.5 1.5h12.476a1.502 1.502 0 001.5-1.5V507.7a1.502 1.502 0 00-1.5-1.5zM452.41 506.2a1.502 1.502 0 00-1.5 1.5v7.274a1.502 1.502 0 001.5 1.5h12.476a1.502 1.502 0 001.5-1.5V507.7a1.502 1.502 0 00-1.5-1.5zM519.178 506.2a1.502 1.502 0 00-1.5 1.5v7.274a1.502 1.502 0 001.5 1.5h107.858a1.502 1.502 0 001.5-1.5V507.7a1.502 1.502 0 00-1.5-1.5zM454.145 458.509a1.502 1.502 0 00-1.5 1.5v7.272a1.502 1.502 0 001.5 1.5h42.824a1.502 1.502 0 001.5-1.5v-7.272a1.502 1.502 0 00-1.5-1.5zM390.845 458.509a1.502 1.502 0 00-1.5 1.5v7.272a1.502 1.502 0 001.5 1.5h42.824a1.502 1.502 0 001.5-1.5v-7.272a1.502 1.502 0 00-1.5-1.5zM644.91 458.509a1.502 1.502 0 00-1.5 1.5v7.272a1.502 1.502 0 001.5 1.5h12.476a1.502 1.502 0 001.5-1.5v-7.272a1.502 1.502 0 00-1.5-1.5zM516.577 458.509a1.502 1.502 0 00-1.5 1.5v7.272a1.502 1.502 0 001.5 1.5h107.858a1.502 1.502 0 001.5-1.5v-7.272a1.502 1.502 0 00-1.5-1.5zM551.262 482.788a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h42.824a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM614.562 482.788a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h42.824a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM390.845 482.788a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h12.476a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5zM423.796 482.788a1.502 1.502 0 00-1.5 1.5v7.273a1.502 1.502 0 001.5 1.5h107.858a1.502 1.502 0 001.5-1.5v-7.273a1.502 1.502 0 00-1.5-1.5z"
        fill={color}
      />
      <path
        d="M541.32 191.425s12.882-4.6 21.163 13.802 21.164 38.647 21.164 38.647l-7.361 1.84s-1.84-12.882-6.441-14.722l1.84 16.562s-55.21 19.323-80.053-1.84l.92-6.441s-3.68.92-3.68 6.441l-2.761-2.76s2.76-5.521 11.042-12.883c5.435-4.831 7.303-14.023 7.945-19.77a23.925 23.925 0 015.508-13.029c5.504-6.378 15.531-13.157 30.714-5.847z"
        fill="#2f2e41"
      />
      <circle cx={533.455} cy={224.374} r={23.819} fill="#ffb8b8" />
      <path
        d="M561.91 227.264c-9.171-6.028-16.595-12.971-21.506-21.23 0 0-16.832 16.984-27.117 17.833s-.935-20.381-.935-20.381l18.701-4.246 17.766 1.698 14.026 8.492z"
        fill="#2f2e41"
      />
      <path fill="#ffb8b8" d="M524.417 243.169h18v18h-18z" />
      <path
        d="M568.757 277.829a65.85 65.85 0 01-71.74-2.23 27.038 27.038 0 0124.4-15.43h22a27.006 27.006 0 0125.34 17.66z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M0 761.497h888v2.241H0z" />
      <path
        d="M626.79 583.179h37.894c2.37-17.488-2.86-33.814 0-45.472H626.79q-10.701 22.736 0 45.472z"
        fill="#ff6584"
      />
      <path
        d="M597.055 574.914H559.16c1.421-17.484 6.002-33.81 0-45.472h37.894q10.701 22.736 0 45.472z"
        fill={color}
      />
      <path
        d="M286.63 316.073s13.023-4.65 21.394 13.952 21.393 39.066 21.393 39.066l-7.44 1.86s-1.861-13.022-6.512-14.882l1.86 16.743s-55.808 19.533-80.922-1.86l.93-6.512s-3.72.93-3.72 6.511l-2.79-2.79s2.79-5.581 11.16-13.022c5.495-4.884 7.384-14.176 8.032-19.985a24.185 24.185 0 015.568-13.17c5.564-6.448 15.7-13.3 31.048-5.911z"
        fill="#2f2e41"
      />
      <path
        d="M211.283 674.68l-32.43 48.088 30.194 30.194 3.914-7.828-6.71-15.656s1.118-14.538 5.032-18.452 21.248-27.399 21.248-27.399z"
        fill="#ffb8b8"
      />
      <path
        d="M252.66 519.235s-6.149 9.733 6.712 51.67c0 0-59.987 101.243-50.482 107.953s35.229 21.56 41.939 17.086 55.51-156.02 55.51-156.02zM184.723 714.101l-9.785 9.785c-5.032 5.033-8.387 12.302 1.118 18.452s42.496 29.077 53.68 21.807-13.42-13.978-13.42-13.978-4.068-15.084-6.228-11.736-2.16 10.058-2.16 10.058z"
        fill="#2f2e41"
      />
      <path
        d="M302.985 700.96s17.893 32.991 17.893 36.905-1.119 15.097-1.119 15.097l34.109 8.388 11.742-5.592-3.914-10.065s-21.248-7.269-25.721-21.248-9.506-28.517-9.506-28.517z"
        fill="#ffb8b8"
      />
      <circle cx={282.296} cy={349.252} r={23.485} fill="#ffb8b8" />
      <path
        d="M288.447 369.381l-11.212 32.216-24.574-10.968s16.774-25.72 16.774-29.076z"
        fill="#ffb8b8"
      />
      <path
        d="M291.802 484.008h-29.636s-21.247 32.431-8.946 66.54a176.816 176.816 0 015.62 21.19c4.293 19.893 8.566 46.84 12.946 71.603 6.152 34.782 12.513 65.253 19.428 65.806 13.979 1.118 41.162.932 41.162-4.66s-18.208-167.359-18.208-167.359l-3.914-6.71-.74-29.227a17.629 17.629 0 00-17.712-17.183zM321.157 737.586s-6.43 10.903-4.752 18.731 4.473 6.71 16.774 7.828 54.238 1.119 54.238-6.71-32.714-17.994-32.852-14.868-1.256 9.277 2.099 10.395.28.28.28.28z"
        fill="#2f2e41"
      />
      <path
        d="M264.387 499.592c4.373 0 13.778-11.232 18.7-6.31 3.58 3.58 6.617 7.02 9.297 10.053 7.694 8.71 14.42 16.691 19.093 10.964.706-.865-1.669 1.134.312-.214a4.792 4.792 0 001.931-5.2c-6.781-21.245-11.004-41.599-5.612-58.6a13.793 13.793 0 00.567-4.16q.001-.308.03-.617c.284-3.138.213-14.374-12.662-27.248-11.766-11.767-14.023-18.997-14.32-22.26-.07-.76-19.038-20.438-19.038-20.438a4.769 4.769 0 00-5.711 1.603l-6.075 8.353a79.905 79.905 0 00-8.333 42.32c1.645 18.956 4.501 56.442 6.846 69.963a4.94 4.94 0 001.83 3.116 4.71 4.71 0 004.82.57 20.306 20.306 0 018.325-1.895z"
        fill="#2f2e41"
      />
      <path
        opacity={0.2}
        d="M271.168 645.108l-11.02-73.426 8.963 79.266 2.057-5.84z"
      />
      <path
        d="M285.16 427.386l16.001 24.783 52.034-.415s21.874-12.353 26.272 3.934c1.507 5.578-21.39 7.088-23.547 7.219-5.39.326-59.15 9.654-62.469 4.877s-20.777-21.463-20.777-21.463z"
        fill="#ffb8b8"
      />
      <path
        d="M261.23 410s9.086-5.923 21.56 4.61 14.968 19.958 14.968 19.958l-29.382 17.462s-28.704-30.563-7.145-42.03zM307.445 350.3c-9.271-6.093-16.776-13.111-21.74-21.46 0 0-17.014 17.168-27.412 18.027s-.945-20.602-.945-20.602l18.904-4.292 17.96 1.716 14.178 8.585z"
        fill="#2f2e41"
      />
      <ellipse cx={258.917} cy={348.669} rx={2.5} ry={4.5} fill="#ffb8b8" />
    </svg>
  );
};

SvgPortfolioFeedback.propTypes = {
  color: PropTypes.string
};
SvgPortfolioFeedback.defaultProps = {
  color: "primary"
};
const MemoSvgPortfolioFeedback = React.memo(SvgPortfolioFeedback);
export default MemoSvgPortfolioFeedback;
