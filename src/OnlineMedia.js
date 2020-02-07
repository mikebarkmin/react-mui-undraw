import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const OnlineMedia = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="b1d7f725-135f-4616-be58-aeb0ca4fa5a4"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="954.12697"
      height="712.25413"
      viewBox="0 0 954.12697 712.25413"
    >
      <title>online_media</title>
      <rect
        x="308.25394"
        y="245.86832"
        width="480"
        height="379"
        fill="#f2f2f2"
      />
      <path
        d="M844.19045,674.74125h-482v-381h482Zm-480-2h478v-377h-478Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#3f3d56"
      />
      <rect
        x="21.5409"
        y="698.16684"
        width="556.10756"
        height="2.36139"
        fill="#3f3d56"
      />
      <polygon
        points="413.254 503.238 412.973 305.238 637.113 403.921 413.254 503.238"
        fill="#d0cde1"
      />
      <path
        d="M490.66556,407.72364s21.11655-23.72955,25.50109-14.68655-21.46113,22.79079-21.46113,22.79079Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#a0616a"
      />
      <path
        d="M501.72048,417.51121s-9.39,3.45-12.11,7.64c-2.72,4.2-11.77,8.58-11.77,8.58l-.79.47-8.54,5.09-11.19,6.66-35.42,21.1-46.75,18.72c-.36-6.53-.71-13.06-1.04-19.24-.1-1.85-.12-3.69-.08-5.53.59-.18,1.19-.34,1.8-.47,13.82995-2.95,19.71-7.24,19.71-7.24l27.04-16.31s21.23-13.53,34.7-19.88c1.88995-.9,3.62994-1.65,5.12994-2.2,12.2-4.48,31.92005-11.72,31.92005-11.72l.23.45,4.88,9.45Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#d0cde1"
      />
      <path
        d="M501.72048,417.51121s-9.39,3.45-12.11,7.64c-2.72,4.2-11.77,8.58-11.77,8.58l-.79.47-8.54,5.09-11.19,6.66-35.42,21.1-46.75,18.72c-.36-6.53-.71-13.06-1.04-19.24-.1-1.85-.12-3.69-.08-5.53.59-.18,1.19-.34,1.8-.47,13.82995-2.95,19.71-7.24,19.71-7.24l27.04-16.31s21.23-13.53,34.7-19.88c1.88995-.9,3.62994-1.65,5.12994-2.2,12.2-4.48,31.92005-11.72,31.92005-11.72l.23.45,4.88,9.45Z"
        transform="translate(-122.93652 -93.87293)"
        opacity="0.1"
      />
      <polygon
        points="371.394 503.027 371.114 305.027 595.254 403.709 371.394 503.027"
        fill={color}
      />
      <polygon
        points="580.932 397.404 371.376 490.375 371.394 503.027 595.254 403.709 580.932 397.404"
        opacity="0.2"
      />
      <polygon
        points="308.754 666.368 308.754 687.368 324.754 687.368 322.754 665.368 308.754 666.368"
        fill="#a0616a"
      />
      <polygon
        points="246.754 665.368 241.754 689.368 261.754 690.368 261.754 665.368 246.754 665.368"
        fill="#a0616a"
      />
      <path
        d="M377.69045,569.24125s-5-2-6,16-2,80-2,80-10,55-6,71,4,27,4,27h18l1-10,1-27s10-25,7-48l24-73,12,78s-5,19-4,39,1,46,1,46l20-2,16-94s9-94,0-99S377.69045,569.24125,377.69045,569.24125Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#2f2e41"
      />
      <path
        d="M437.69045,774.24125s-9-12-13-3-13,21-6,27,16,8,19,6,34-18,34-18,6-17-6-18-16-4-16-4Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#2f2e41"
      />
      <path
        d="M368.69045,777.24125s0-10-4-7-7,16-7,16-24,19-1,19,38,4,36-5-5-24-5-24S377.69045,763.24125,368.69045,777.24125Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#2f2e41"
      />
      <circle cx="308.75394" cy="277.36832" r="25" fill="#a0616a" />
      <path
        d="M412.19045,379.74125s-4,29-10,33,40,5,40,5-3-23,0-29Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#a0616a"
      />
      <path
        d="M490.69045,578.24125s15,28,5,29-14-28-14-28Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#a0616a"
      />
      <path
        d="M408.59286,389.39486a18.6529,18.6529,0,0,0,22.68218-5.04267c3.36353-4.396,5.31377-10.79729,10.67748-12.16417,3.50189-.89242,7.5404.79182,10.66715-1.02011,5.83465-3.38115,1.73691-14.09869,7.15461-18.11416a9.29624,9.29624,0,0,1-9.145-8.6456c-.1385,1.87192-2.5995,2.71089-4.39492,2.16341s-3.20509-1.92838-4.88141-2.77289c-2.92887-1.47554-6.39492-1.20688-9.66037-.90305-8.34408.77637-17.34672,1.83575-23.47627,7.55021-5.75962,5.36958-7.67431,13.95588-6.55262,21.74994s3.10225,10.35234,7.29449,17.018Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#2f2e41"
      />
      <path
        d="M470.69045,423.24125l-.14,1-2.04,15.05-8.37,61.66-.45,3.29s.99,2.41,2.23,6.25c2.1,6.47,4.94,17,5.05,26.92a44.75658,44.75658,0,0,1-.28,5.83c-1.5,12.75-1.88,25.5-1.97,31.08-.03,1.86-.03,2.92-.03,2.92l-91-3a41.92906,41.92906,0,0,0,1.51-3.92,71.82288,71.82288,0,0,0,3.49-30.08c-.89-8.46-2.28-31.51-3.54-54.47-.36-6.53-.71-13.06-1.04-19.24-.1-1.85-.12-3.69-.08-5.53a73.41293,73.41293,0,0,1,27.66-55.76s1.84.08,4.74.25c9.12.53,28.76,1.91,34.93,4.18a7.41422,7.41422,0,0,1,.83.35c2.98,1.47,9.21,4.38,15.09,7.08C464.23043,420.30125,470.69045,423.24125,470.69045,423.24125Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#d0cde1"
      />
      <path
        d="M456.69045,424.24125h14s12,14,10,28,0,21,0,21l6,31s7,32,7,45v34l-16,2s0-10-3-14-4-14-4-14l-12-64Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#d0cde1"
      />
      <rect
        x="227.73355"
        y="410.85281"
        width="30.9126"
        height="29.84223"
        transform="translate(-260.14746 22.51454) rotate(-21.14419)"
        fill={color}
      />
      <path
        d="M257.77785,431.92009,227.429,443.65764l-11.33113-29.298,30.34887-11.73756Zm-29.398,9.68578,27.314-10.5638-10.198-26.36822-27.314,10.5638Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#3f3d56"
      />
      <rect
        x="963.41294"
        y="190.90244"
        width="30.9126"
        height="29.84223"
        transform="translate(732.32278 -880.65651) rotate(71.02706)"
        fill={color}
      />
      <path
        d="M972.17481,220.16823l-10.57932-30.77178,29.70627-10.213,10.57933,30.77178Zm-8.565-29.74384,9.52139,27.6946,26.73565-9.1917-9.52139-27.6946Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#3f3d56"
      />
      <path
        d="M207.43005,793.54624l-1.26718-.475c-.27845-.10493-27.99251-10.72311-40.975-34.79939-12.983-24.07742-6.62585-53.06672-6.56012-53.35613l.29921-1.32021,1.26659.475c.27846.10493,27.99194,10.72312,40.975,34.79939,12.983,24.07742,6.62584,53.06672,6.56012,53.35613ZM167.2668,757.15108c10.9762,20.35662,32.87672,30.79147,38.42564,33.17362,1.055-5.94729,4.36362-29.99705-6.60278-50.33406-10.96525-20.33472-32.87442-30.78572-38.42565-33.17363C159.60842,712.76777,156.301,736.81521,167.2668,757.15108Z"
        transform="translate(-122.93652 -93.87293)"
        fill="#3f3d56"
      />
      <path
        d="M175.10951,749.82624c23.33121,14.03683,32.31679,41.91784,32.31679,41.91784s-28.84178,5.12282-52.173-8.914-32.31679-41.91784-32.31679-41.91784S151.7783,735.78941,175.10951,749.82624Z"
        transform="translate(-122.93652 -93.87293)"
        fill={color}
      />
      <rect x="21.12697" y="25.06122" width="933" height="2" fill="#3f3d56" />
      <circle cx="40.18819" cy="9.06122" r="9.06122" fill="#3f3d56" />
      <circle cx="68.12697" cy="9.06122" r="9.06122" fill="#3f3d56" />
      <circle cx="96.06574" cy="9.06122" r="9.06122" fill="#3f3d56" />
      <rect
        x="367.47979"
        y="93.45444"
        width="213.40346"
        height="2.39779"
        fill="#3f3d56"
      />
      <rect
        x="367.47979"
        y="110.23898"
        width="213.40346"
        height="2.39779"
        fill="#3f3d56"
      />
      <rect
        x="367.47979"
        y="127.02353"
        width="213.40346"
        height="2.39779"
        fill="#3f3d56"
      />
    </svg>
  );
};

OnlineMedia.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

OnlineMedia.defaultProps = {
  color: "primary",
  style: {}
};

export default OnlineMedia;
