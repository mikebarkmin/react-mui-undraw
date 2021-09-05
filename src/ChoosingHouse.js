import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgChoosingHouse = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 876.501 650.059"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M266.682 618.264c-14.42 19.311-44.352 21.344-44.352 21.344s-6.553-29.277 7.867-48.588 44.352-21.344 44.352-21.344 6.553 29.277-7.867 48.588z"
        fill="#e6e6e6"
      />
      <path
        d="M193.226 625.524c9.515 12.742 29.266 14.084 29.266 14.084s4.325-19.32-5.19-32.062-29.267-14.084-29.267-14.084-4.324 19.319 5.19 32.062z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M257.738 640.769H0v-2.106h258.12l-.382 2.106z" />
      <path fill="#e6e6e6" d="M704.84 59.708h171.662v256.248H704.84z" />
      <path fill="#fff" d="M714.006 73.392h153.329v228.882H714.006z" />
      <path fill="#3f3d56" d="M814.329 236.255h7.421v25.69h-7.421z" />
      <path
        fill="#3f3d56"
        d="M826.808 258.178l-18.473-22.208h-35.966l-21.979 21.408.444.285h-.159v44.529h75.928v-44.529l.205.515z"
      />
      <path
        fill={color}
        d="M808.62 235.684l-22.55 26.438v40.07h40.533v-45.1l-17.983-21.408z"
      />
      <path
        fill="#3f3d56"
        d="M802.34 280.033h8.278v7.317h-8.278zM802.34 267.368h8.278v7.201h-8.278z"
      />
      <path
        fill="#fff"
        d="M802.34 280.033h8.278v7.317h-8.278zM802.34 267.368h8.278v7.201h-8.278z"
      />
      <path d="M780.449 300.887s.177-3.719 3.815-3.287" fill="#e6e6e6" />
      <circle cx={779.421} cy={295.527} r={1.821} fill={color} />
      <path
        fill="#e6e6e6"
        d="M779.125 298.593h.514v3.598h-.514zM469.738 59.708H641.4v256.248H469.738z"
      />
      <path fill="#fff" d="M478.904 73.392h153.329v228.882H478.904z" />
      <path
        d="M759.196 158.618l4.418-3.534c-3.432-.378-4.842 1.494-5.42 2.975a7.526 7.526 0 00-5.6.346l8.84 3.21a6.69 6.69 0 00-2.238-2.997zM568.419 151.699l4.418-3.534c-3.432-.379-4.843 1.493-5.42 2.975a7.526 7.526 0 00-5.6.346l8.84 3.209a6.69 6.69 0 00-2.238-2.996zM819.327 125.238l4.418-3.533c-3.432-.38-4.842 1.493-5.42 2.974a7.526 7.526 0 00-5.6.346l8.84 3.21a6.69 6.69 0 00-2.238-2.997zM584.825 210.882h7.421v25.69h-7.421z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M584.825 208.313h7.421v25.69h-7.421z" />
      <path
        fill="#3f3d56"
        d="M603.461 241.079l-25.332-30.088h-49.704l-30.374 29.586.613.394h-.219v61.538h104.93v-61.538l.086.108z"
      />
      <path
        fill={color}
        d="M578.523 210.597l-31.163 36.536v55.376h56.015v-62.327l-24.852-29.585z"
      />
      <path
        fill="#3f3d56"
        d="M561.949 270.922h11.44v11.075h-11.44zM561.949 254.383h11.44v11.075h-11.44z"
      />
      <path
        fill="#fff"
        d="M561.949 270.922h11.44v11.075h-11.44zM561.949 254.383h11.44v11.075h-11.44z"
      />
      <path
        fill="#3f3d56"
        d="M578.681 270.922h11.44v11.075h-11.44zM578.681 254.383h11.44v11.075h-11.44z"
      />
      <path
        fill="#fff"
        d="M578.681 270.922h11.44v11.075h-11.44zM578.681 254.383h11.44v11.075h-11.44z"
      />
      <circle cx={393.434} cy={44.038} r={44.038} fill="#ff6584" />
      <path fill="#e6e6e6" d="M234.636 59.708h171.662v256.248H234.636z" />
      <path fill="#fff" d="M243.802 73.392h153.329v228.882H243.802z" />
      <path
        fill="#3f3d56"
        d="M385.454 227.104l-30.914-36.816h-60.778l-37.143 36.178.751.482h-.268v75.249h128.309v-75.249l.043.156zM347.851 148.267l4.172-3.337c-3.24-.357-4.573 1.41-5.117 2.81a7.106 7.106 0 00-5.289.326l8.347 3.03a6.316 6.316 0 00-2.113-2.83z"
      />
      <path fill="#3f3d56" d="M359.847 186.841h7.008v24.257h-7.008z" />
      <path
        fill={color}
        d="M355.022 189.806l-38.107 44.676v67.715h68.496v-76.214l-30.389-36.177z"
      />
      <path d="M286.08 300.965s.168-3.511 3.603-3.103" fill="#e6e6e6" />
      <circle cx={285.109} cy={295.904} r={1.719} fill={color} />
      <path
        fill="#e6e6e6"
        d="M284.83 298.799h.485v3.397h-.485zM301.443 300.965s.167-3.511 3.602-3.103"
      />
      <circle cx={300.472} cy={295.904} r={1.719} fill={color} />
      <path
        fill="#e6e6e6"
        d="M300.193 298.799h.485v3.397h-.485zM265.057 300.965s.168-3.511 3.603-3.103"
      />
      <circle cx={264.087} cy={295.904} r={1.719} fill={color} />
      <path fill="#e6e6e6" d="M263.807 298.799h.485v3.397h-.485z" />
      <path
        fill="#3f3d56"
        d="M325.721 243.349h13.989v14.303h-13.989zM325.721 262.811h13.989v14.303h-13.989z"
      />
      <path
        fill="#fff"
        d="M325.721 243.349h13.989v14.303h-13.989zM325.721 262.811h13.989v14.303h-13.989z"
      />
      <path
        fill="#3f3d56"
        d="M345.068 243.349h13.989v14.303h-13.989zM345.068 262.811h13.989v14.303h-13.989z"
      />
      <path
        fill="#fff"
        d="M345.068 243.349h13.989v14.303h-13.989zM345.068 262.811h13.989v14.303h-13.989z"
      />
      <path
        fill="#3f3d56"
        d="M364.414 243.349h13.989v14.303h-13.989zM364.414 262.811h13.989v14.303h-13.989z"
      />
      <path
        fill="#fff"
        d="M364.414 243.349h13.989v14.303h-13.989zM364.414 262.811h13.989v14.303h-13.989z"
      />
      <path
        d="M875.035 317.26H234.9s129.97-31.296 321.4-30.941q1.61 0 3.222.009 5.728.02 11.523.078 4.536.049 9.109.12c1.317.019 2.634.042 3.958.065l1.575.027q1.82.035 3.664.074 3.455.07 6.931.157 3.046.076 6.122.166c.78.018 1.574.041 2.362.07q5.573.158 11.191.368l2.612.097c1.2.041 2.406.092 3.605.138q2.384.097 4.768.199c2.068.087 4.128.18 6.196.276q6.49.298 13.053.655 4.878.256 9.786.553c1.39.083 2.788.171 4.186.259q3.212.193 6.438.41l4.113.277c1.656.11 3.304.226 4.96.346 1.648.12 3.31.24 4.966.364q2.494.187 4.989.378c1.67.13 3.333.258 5.003.397 1.648.129 3.296.267 4.952.405q10.573.879 21.301 1.914c1.369.13 2.752.263 4.128.401q2.13.208 4.275.43 2.98.297 5.982.617 2.571.27 5.15.549c1.553.166 3.12.336 4.68.512l.485.055a1988.864 1988.864 0 0110.367 1.19q2.605.304 5.21.622c1.744.212 3.48.424 5.224.641l4.076.512c.677.088 1.354.17 2.031.258q2.185.284 4.385.572 2.627.346 5.261.696c.2.028.39.056.589.079q4.084.553 8.175 1.125c.367.05.743.106 1.118.157q2.141.297 4.282.609c1.428.207 2.855.41 4.29.622.059.005.118.014.177.023 2.023.295 4.039.595 6.07.904q1.512.221 3.024.456c1.383.208 2.76.42 4.142.637l2.723.429c.67.097 1.339.203 2.008.313q2.12.325 4.246.674 1.976.318 3.951.64a.92.92 0 01.11.019c.317.05.626.101.942.152.964.157 1.928.318 2.9.48.993.166 1.993.332 2.994.502.876.148 1.759.295 2.634.448a.332.332 0 01.074.009c.125.018.25.041.375.064 1.015.171 2.03.342 3.046.521 1.015.176 2.03.35 3.054.53.103.015.206.033.309.051q1.18.201 2.361.415s0-.004.008 0c.449.074.897.157 1.346.236q1.8.318 3.598.64c.773.139 1.553.277 2.325.42q3.234.588 6.483 1.185c2.163.402 4.334.807 6.497 1.218 1.302.244 2.597.493 3.9.747q1.832.346 3.664.705c1.824.355 3.657.71 5.481 1.075z"
        fill="#e6e6e6"
      />
      <path
        d="M874.84 318.241c-1.624-.323-3.253-.64-4.878-.956l-.6-.117q-1.83-.36-3.658-.704a529.193 529.193 0 00-3.899-.747q-3.246-.616-6.495-1.217-2.84-.527-5.677-1.04l-.801-.145c-.66-.122-1.325-.24-1.984-.358l-.339-.06q-1.636-.297-3.27-.584l-.506-.09v.011l-1.179-.214-.064-.012-.113-.02q-1.086-.197-2.173-.381c-.104-.019-.188-.035-.273-.046l-3.092-.536c-.968-.172-1.933-.334-2.897-.496l-.146-.025c-.127-.023-.242-.044-.355-.061-.87-.148-1.648-.278-2.423-.408l-7.246-1.204q-1.975-.325-3.948-.64-2.127-.346-4.237-.672c-.675-.112-1.338-.217-2-.312l-2.737-.432c-1.38-.216-2.754-.427-4.135-.635-1.01-.157-2.014-.308-3.02-.456a957.86 957.86 0 00-6.07-.903l-.178-.024q-1.38-.204-2.752-.4l-1.535-.222q-2.139-.31-4.277-.608l-1.117-.156q-4.097-.575-8.172-1.125c-.155-.018-.322-.041-.494-.065l-15.838-2.05c-1.742-.217-3.478-.429-5.221-.641q-2.602-.318-5.205-.622a1923.946 1923.946 0 00-10.36-1.189l-.49-.056a967.067 967.067 0 00-4.672-.511q-2.417-.265-4.816-.514l-.332-.034q-3.002-.318-5.978-.618-2.143-.22-4.272-.429a691.243 691.243 0 00-4.124-.4c-7-.678-14.162-1.32-21.291-1.913-1.686-.141-3.317-.278-4.947-.406-1.674-.138-3.334-.267-5.003-.396q-2.491-.193-4.985-.378c-1.483-.111-2.973-.22-4.451-.327l-.514-.037c-1.653-.12-3.3-.235-4.953-.345l-4.114-.277q-3.218-.214-6.432-.41l-.373-.024q-1.91-.12-3.812-.235-4.906-.29-9.779-.553-6.555-.36-13.047-.654a1451.44 1451.44 0 00-6.191-.277q-2.164-.093-4.325-.18l-1.657-.065c-.795-.032-1.591-.063-2.383-.09l-2.615-.097q-5.614-.208-11.182-.37c-.791-.027-1.581-.05-2.357-.068-2.057-.06-4.094-.116-6.123-.166q-3.474-.083-6.927-.157l-5.237-.101q-1.984-.035-3.954-.065c-3.054-.05-6.084-.087-9.106-.12q-5.792-.062-11.516-.078l-.293-.002q-1.463-.006-2.926-.008c-1.061-.002-2.132-.003-3.19-.003-187.409 0-316.684 30.607-317.975 30.918l-.468-1.944c1.294-.312 130.82-30.974 318.442-30.974 1.071 0 2.118.001 3.193.003q1.464 0 2.932.009h.293q5.73.022 11.53.08c3.026.032 6.059.069 9.115.119q1.973.028 3.959.065l5.244.101q3.452.07 6.932.158 3.05.075 6.127.166c.779.018 1.577.041 2.368.069q5.567.158 11.193.369l2.612.096c.793.028 1.593.06 2.39.091l1.661.066q2.165.088 4.328.18c2.07.088 4.13.18 6.2.277q6.493.297 13.06.655 4.879.257 9.79.554 1.904.114 3.82.235l.37.023q3.213.195 6.443.411l4.114.277c1.656.11 3.307.226 4.964.346l.514.038c1.48.107 2.971.215 4.456.327q2.494.187 4.99.378c1.673.13 3.337.259 5.009.397q2.444.192 4.905.402c7.185.597 14.356 1.241 21.362 1.919 1.367.128 2.753.263 4.131.4 1.419.14 2.848.283 4.277.43q2.978.298 5.986.618l.33.035q2.408.253 4.824.515c1.55.166 3.12.337 4.682.512l.487.055c1.719.19 3.45.388 5.174.586 1.728.199 3.466.402 5.196.604q2.607.305 5.214.623c1.745.213 3.481.425 5.227.642l15.869 2.054a1712.839 1712.839 0 018.663 1.19l1.113.155q2.15.3 4.292.61l1.533.222q1.377.199 2.76.402c.024.008.1.011.186.024q3.02.44 6.064.903 1.509.22 3.027.457c1.38.207 2.758.42 4.144.637l2.723.429c.664.096 1.34.203 2.017.315q2.105.323 4.242.673 1.976.317 3.953.64a1.632 1.632 0 01.19.036l7.064 1.169c.75.126 1.502.253 2.25.382l.186.03c.085.01.22.035.357.06l.13.022c.97.164 1.94.327 2.911.499l3.052.53c.072.009.187.029.302.05q1.012.171 2.02.353l.206-.115.336.209c.232.039.462.08.694.121l.796.14q1.636.29 3.273.585l.338.06c.663.118 1.33.238 1.991.36l.799.145q2.837.516 5.685 1.04c2.164.401 4.336.807 6.5 1.218 1.302.244 2.601.494 3.905.748 1.218.23 2.442.466 3.666.706l.597.117c1.628.316 3.261.633 4.886.958z"
        fill="#3f3d56"
      />
      <circle cx={675.187} cy={91.974} r={75.396} fill={color} />
      <path
        d="M731.271 41.615a75.401 75.401 0 01-125.631 79.797A75.402 75.402 0 10731.27 41.615z"
        opacity={0.2}
      />
      <path
        fill="#3f3d56"
        d="M675.394 91.974h.207l3.729 213.758h-7.871l3.935-213.758z"
      />
      <path
        fill="#3f3d56"
        d="M687.386 205.108l1.737 3.299-12.463 6.561-1.737-3.298zM495.184 307.542s.319-6.673 6.847-5.897"
      />
      <circle cx={493.34} cy={297.925} r={3.267} fill={color} />
      <path
        fill="#3f3d56"
        d="M492.808 303.427h.922v6.456h-.922zM614.157 308.925s.319-6.672 6.847-5.897"
      />
      <circle cx={612.313} cy={299.308} r={3.267} fill={color} />
      <path
        fill="#3f3d56"
        d="M611.781 304.81h.922v6.456h-.922zM418.175 297.397s.318-6.673 6.846-5.897"
      />
      <circle cx={416.33} cy={287.78} r={3.267} fill={color} />
      <path
        fill="#3f3d56"
        d="M415.799 293.282h.922v6.456h-.922zM468.439 288.635s.318-6.672 6.846-5.897"
      />
      <circle cx={466.594} cy={279.018} r={3.267} fill={color} />
      <path
        fill="#3f3d56"
        d="M466.062 284.52h.922v6.456h-.922zM594.328 301.086s.319-6.673 6.847-5.897"
      />
      <circle cx={592.484} cy={291.469} r={3.267} fill={color} />
      <path
        fill="#3f3d56"
        d="M591.952 296.971h.922v6.456h-.922zM502.858 18.2l4.245-3.396c-3.297-.364-4.652 1.435-5.207 2.858a7.23 7.23 0 00-5.381.332l8.494 3.084a6.427 6.427 0 00-2.15-2.879zM567.417 52.784l4.245-3.395c-3.297-.364-4.652 1.435-5.207 2.858a7.23 7.23 0 00-5.381.332l8.494 3.084a6.427 6.427 0 00-2.15-2.879zM497.786 82.297l4.245-3.395c-3.298-.364-4.653 1.434-5.207 2.858a7.23 7.23 0 00-5.381.332l8.493 3.084a6.427 6.427 0 00-2.15-2.88z"
      />
      <ellipse
        cx={307.263}
        cy={441.473}
        rx={8.267}
        ry={12.4}
        transform="rotate(-17.267 -185.14 911.63)"
        fill="#2f2e41"
      />
      <path
        d="M52.515 263.183s-2.48 49.6 2.48 82.666 10.747 64.48 10.747 64.48 14.053-10.747 22.32-7.44l-14.88-114.906z"
        fill={color}
      />
      <circle cx={105.008} cy={181.757} r={27.28} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M87.235 188.784l-11.573 29.76 16.533 7.44 16.533-29.76-21.493-7.44z"
      />
      <path
        d="M97.13 217.098s-16.508-10.954-23.948-6.82l-6.614 15.706s-23.146 28.933-14.053 50.426 29.76 46.292 29.76 46.292l2.48 11.574s-32.24 42.16-28.933 73.572L16.969 513.66s21.493 9.094 93.412 12.4 71.92 0 71.92 0-9.094-176.078-37.2-204.184l-4.134-13.227s5.787-37.2-7.44-52.906l-4.469-8.938a62.267 62.267 0 00-31.927-29.707z"
        fill="#2f2e41"
      />
      <path
        d="M138.487 394.622l1.654 22.32s-2.48 28.932 14.053 23.146 3.307-38.026 3.307-38.026l-2.48-9.92z"
        fill="#ffb8b8"
      />
      <path
        d="M23.582 509.527l-9.093 88.452s-11.573 6.614-5.787 24.8 4.134 27.28 4.134 27.28l5.786-1.654 2.48-22.32s9.713 12.4 18.187 14.88c5.884 1.723 11.967 3.046 15.966-1.566 4.658-5.372 2.411-13.67-4.028-16.685a13.526 13.526 0 00-2.018-.762c-5.787-1.653-11.574-23.973-11.574-23.973l9.92-40.506 14.88-44.64zM136.008 509.527l-9.094 88.452s-11.573 6.614-5.786 24.8 4.133 27.28 4.133 27.28l5.787-1.654 2.48-22.32s9.713 12.4 18.186 14.88c5.884 1.723 11.968 3.046 15.967-1.566 4.658-5.372 2.41-13.67-4.029-16.685a13.526 13.526 0 00-2.018-.762c-5.787-1.653-11.573-23.973-11.573-23.973l9.92-40.506 14.88-44.64z"
        fill="#2f2e41"
      />
      <path
        d="M101.288 232.597s-19.84 11.573-14.053 38.026 46.293 139.705 46.293 139.705a27.565 27.565 0 0127.28-6.613l-37.2-143.012s2.48-32.24-22.32-28.106z"
        opacity={0.4}
      />
      <path
        d="M104.595 227.637s-19.84 11.573-14.054 38.026 46.293 139.705 46.293 139.705a27.565 27.565 0 0127.28-6.613l-37.2-143.012s2.48-32.24-22.32-28.106z"
        fill={color}
      />
      <path
        d="M130.228 171.178s4.202-32.705-30.087-21.98c0 0-24.49-4.494-32.52 26.139l-8.133 32.11 3.963-2.157 1.848 4.04 6.422 1.626 2.748-5.455 1.33 6.624 52.6 5.244s-23.558-13.933-23.932-38.903l4.488 4.742z"
        fill="#2f2e41"
      />
      <circle cx={71.942} cy={149.518} r={13.227} fill="#2f2e41" />
      <path
        d="M85.57 146.28a13.216 13.216 0 00-13.22-12.362c.273-.035.544-.077.822-.095a13.227 13.227 0 111.698 26.399c-.279.017-.553.01-.828.011A13.216 13.216 0 0085.57 146.28z"
        fill="#2f2e41"
      />
      <ellipse cx={105.008} cy={184.237} rx={4.133} ry={5.787} fill="#ffb8b8" />
    </svg>
  );
};

SvgChoosingHouse.propTypes = {
  color: PropTypes.string
};
SvgChoosingHouse.defaultProps = {
  color: "primary"
};
export default SvgChoosingHouse;
