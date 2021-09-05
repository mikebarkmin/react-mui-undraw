import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgImagination = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 977.716 782.417"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M977.716 357.915c0 45.97-13.23 89.54-36.9 128.54q-6.135 10.125-13.2 19.82c-20.04 27.54-45.5 52.39-75.25 73.69q-2.73 1.95-5.5 3.86c-.7.48-1.39.96-2.09 1.44q-4.365 2.955-8.83 5.82c-.94.6-1.88 1.19-2.82 1.78-.8.51-1.61 1.01-2.42 1.51q-13.005 8.04-26.9 15.21c-1.01.52-2.03 1.04-3.05 1.56-.88.44-1.76.89-2.65 1.33-.62.31-1.25.62-1.87.92-1.04.52-2.09 1.03-3.14 1.53q-4.095 1.965-8.25 3.85a223.3 223.3 0 01-3.84 1.72.076.076 0 01-.04.02c-1.28.57-2.56 1.13-3.85 1.68-1.18.51-2.37 1.02-3.56 1.51q-5.37 2.265-10.83 4.38c-.75.3-1.51.59-2.27.88-1.05.4-2.09.8-3.15 1.19-1.35.5-2.69 1-4.04 1.49-1.26.46-2.52.91-3.79 1.36l-.27.09c-1.27.45-2.54.89-3.82 1.32q-9.87 3.39-20.03 6.34c-.85.25-1.7.49-2.55.73-.38.12-.77.23-1.16.33-.99.28-1.98.56-2.98.83-1.22.35-2.45.68-3.69 1q-5.175 1.38-10.4 2.64c-1.18.29-2.35.57-3.53.84a.145.145 0 01-.07.02l-3.54.81c-1.65.38-3.32.75-4.99 1.09-1.93.42-3.87.82-5.82 1.22-1.21.24-2.42.48-3.63.71-1.21.24-2.43.47-3.64.69q-9.135 1.695-18.42 3.05c-2.3.33-4.6.65-6.92.96-1.42.19-2.85.37-4.28.54-1.25.15-2.51.3-3.76.44-1.25.15-2.5.28-3.76.42h-.01c-.12.02-.24.03-.36.04-2.05.22-4.11.42-6.17.62-1.21.12-2.42.22-3.64.32-1.09.1-2.19.19-3.29.27q-4.935.405-9.9.69-1.605.105-3.21.18c-2.28.13-4.56.23-6.85.32-.95.04-1.91.08-2.86.11-2.56.09-5.13.15-7.7.2q-2.175.045-4.35.06-2.58.03-5.16.03c-83.21 0-178.85-28.5-257.63-69.93a553.716 553.716 0 01-57.37-34.57c-10.66-7.37-20.72-14.95-30.06-22.71-69.61-57.7-99.74-124.19-43.94-174.79q10.8-9.795 23.27-20.39 9.435-8.025 19.7-16.46c97.47-80.06 246.86-185.08 346.03-265.15 167.16-134.96 389 135.21 389 302z"
        fill={color}
      />
      <path
        d="M620.716 510.415l-41.03 5.32-2.09.27-54.61 7.08-249.27 32.33c-10.66-7.37-20.72-14.95-30.06-22.71l285.26-16.86 49.34-2.92 2.07-.12zM439.716 309.415l-216.73 28.11q9.435-8.025 19.7-16.46zM940.816 486.455q-6.135 10.125-13.2 19.82l-188.3-24.42-103.6-13.44 101.91 6.03z"
        fill="#f2f2f2"
      />
      <path
        d="M852.366 579.965c-69.31 49.64-161.92 79.95-263.65 79.95-83.21 0-178.85-28.5-257.63-69.93 6.23-16.15 14.91-29.24 26.98-35.87.3-.17.61-.34.92-.49a38.144 38.144 0 0116.64-4.21c71-2 63 78 152-32 55.35-68.41 118.05-91.95 160.91-84.34.79.14 1.57.29 2.35.45 24.84 5.16 42.61 21.06 47.74 44.89 14 65-27 117 48 101a155.122 155.122 0 0165.74.55z"
        fill="#3f3d56"
      />
      <path
        d="M642.107 657.262c-34.88-19.444-56.594-45.991-64.54-78.903-5.899-24.435-4.204-51.932 5.039-81.727a218.888 218.888 0 0130.439-61.484c70.638-99.987 77.013-165.138 69.923-202.187-7.774-40.623-33.031-57.494-33.286-57.66l1.09-1.676c.261.17 26.184 17.432 34.145 58.88 4.59 23.894 2.43 51.14-6.417 80.98-11.012 37.138-32.485 78.46-63.822 122.817a216.904 216.904 0 00-30.162 60.922c-15.159 48.867-17.303 115.997 58.564 158.292zM580.402 468.12c-27.498-15.328-26.732-39.62-21.248-57.3a77.687 77.687 0 0110.805-21.826c24.746-35.028 26.982-57.783 24.501-70.704-2.695-14.03-11.341-19.79-11.428-19.847l1.09-1.677c.384.25 9.448 6.288 12.302 21.147 3.716 19.348-4.638 43.652-24.832 72.236a75.677 75.677 0 00-10.527 21.262c-5.266 16.974-6.016 40.287 20.311 54.963zM704.12 254.121l-.974-1.747c26.326-14.676 25.576-37.99 20.311-54.962a75.68 75.68 0 00-10.528-21.263c-20.193-28.584-28.548-52.888-24.831-72.236 2.854-14.859 11.918-20.898 12.302-21.147l1.091 1.676c-.087.057-8.777 5.893-11.445 19.927-2.454 12.914-.193 35.65 24.517 70.625a77.697 77.697 0 0110.804 21.825c5.485 17.68 6.25 41.973-21.248 57.302z"
        fill="#d0cde1"
      />
      <path
        d="M762.83 154.618a30 30 0 11-50.252-32.784C721.631 107.958 767.21 93 767.21 93s4.673 47.742-4.38 61.618zM751.83 61.618a30 30 0 11-50.252-32.784C710.631 14.958 756.21 0 756.21 0s4.673 47.742-4.38 61.618z"
        fill="#3f3d56"
      />
      <path
        d="M750.406 343.135c-1.92-.45-47.21-10.98-62.31-3.79a31 31 0 0013.38 58.99 30.502 30.502 0 006.7-.74 31.095 31.095 0 006.58-2.27c15.1-7.2 35.46-49 36.32-50.78l.55-1.12zm-36.51 50.38a28.998 28.998 0 01-24.94-52.36c3.52-1.68 8.9-2.31 15.04-2.31 16.8 0 39.26 4.75 44.72 5.96-3.41 6.84-21.68 42.45-34.82 48.71zM614.114 173.247a30.876 30.876 0 01-20.873-8.079c-12.36-11.27-19.698-57.186-20.004-59.136l-.194-1.232 1.246.08c1.968.125 48.366 3.204 60.726 14.474a30.986 30.986 0 01-20.901 53.893zm-38.695-66.281c1.28 7.53 8.416 46.92 19.17 56.725a29 29 0 0039.078-42.86c-10.752-9.803-50.632-13.284-58.248-13.865z"
        fill="#d0cde1"
      />
      <path
        d="M572.341 245.093a30 30 0 01-40.426 44.336c-12.243-11.163-19.69-58.552-19.69-58.552s47.873 3.053 60.116 14.216z"
        fill="#3f3d56"
      />
      <path
        d="M664.286 246.195a17.15 17.15 0 00-16.69-13.51 17.53 17.53 0 00-3.66.4c-8.94 1.94-24.83 21.41-25.5 22.23l-.79.97 1.12.56c.88.44 20.02 9.92 30.04 9.92a11.05 11.05 0 002.38-.23 17.117 17.117 0 0013.1-20.34zm-4.02 11.8a14.957 14.957 0 01-9.51 6.59c-7.18 1.56-25.24-6.73-29.96-8.98 3.36-4 16.38-19.01 23.57-20.57a15.113 15.113 0 0115.9 22.96z"
        fill="#d0cde1"
      />
      <ellipse cx={422.216} cy={715.772} rx={417.5} ry={9.697} fill="#3f3d56" />
      <ellipse
        cx={422.216}
        cy={747.848}
        rx={289.038}
        ry={6.714}
        fill="#3f3d56"
      />
      <ellipse
        cx={422.348}
        cy={776.94}
        rx={235.781}
        ry={5.477}
        fill="#3f3d56"
      />
      <path d="M7.216 410.575s-14 33-3 36 16-36 16-36z" fill="#ffb8b8" />
      <path
        fill="#575a89"
        d="M48.716 229.075l-36.5 109.5-8 59v19l21-2v-16l33-101-9.5-68.5z"
      />
      <path
        d="M75.216 318.575l-2 22 64 4v-49c0-6-62 23-62 23zM42.216 657.575l-3 28 33-3s-9-22-10-25-20 0-20 0zM152.216 606.575l-4 27 21 15-2-36-15-6z"
        fill="#ffb8b8"
      />
      <path
        d="M91.216 326.575h-18l-6 11s-39 28-39 86v128s-1 91 10 101l1.099 6.59.901 5.41 24-4s-2-8 1-15-2-46-2-46l6-61 36-89 45 64s-5 89-3 92-1 12-1 12h26l17-119-38-107s4-49-10-54-50-11-50-11z"
        fill="#2f2e41"
      />
      <path
        d="M162.216 635.575s-3.275-15-9.137-18-14.863 5-14.863 5-24 5-14 30l4 6s7-3 7 12 23 29 31 29 11-7 9-19-6-43.319-6-43.319zM61.141 674.152s-14.113-6.045-19.96-3.015-4.561 15.003-4.561 15.003-9.868 22.441 16.291 28.82l7.207.228s1.624-7.44 13.835 1.271 36.965-1.88 41.612-8.393.69-13.02-10.24-18.362-38.75-20.274-38.75-20.274z"
        fill="#2f2e41"
      />
      <circle cx={100.716} cy={162.075} r={34} fill="#ffb8b8" />
      <path fill="#ffb8b8" d="M81.216 175.575l-6 38 36 3 4-38-34-3z" />
      <path
        d="M141.44 235.017a83.423 83.423 0 00-43.508-35.152c-2.79-.969-15.605-.79-23.34-.902a23.71 23.71 0 00-22.784 16.106c-9.26 27.236-21.51 80.671 15.408 101.506l8 7 71-20s-5-12-2-16 13-28 2-45a411.783 411.783 0 01-4.775-7.558z"
        fill="#575a89"
      />
      <path
        d="M144.716 147.075s7.117-48.065-43.704-33.235c0 0-35.953-7.313-48.652 37.59L39.471 198.51l5.9-3.066 2.608 6.002 9.415 2.578 4.204-7.958 1.77 9.796 77.348 9.214s-34.314-21.193-34.158-57.992l6.477 7.113z"
        fill="#2f2e41"
      />
      <path
        d="M89.09 111.762l6.647-1.304a4.263 4.263 0 015.005 3.363l9.192 46.843-15.015 2.946-9.192-46.843a4.263 4.263 0 013.363-5.005z"
        fill={color}
      />
      <circle cx={106.716} cy={165.075} r={18} fill="#d0cde1" />
      <circle cx={106.716} cy={165.075} r={10} fill={color} />
      <path
        d="M183.184 439.348l4.85-6.363-.796-.606 3.27-4.29a9.606 9.606 0 00-1.819-13.463l-11.761-8.963a9.606 9.606 0 00-13.464 1.818L135.712 443.9a9.606 9.606 0 001.818 13.464l11.761 8.962a9.606 9.606 0 0013.464-1.818l12.967-17.016.795.606 4.849-6.363-.795-.606 1.818-2.386z"
        fill="#3f3d56"
      />
      <circle cx={173.717} cy={422.075} r={5} fill="#d0cde1" />
      <path
        d="M134.216 418.575s5 41 14 39 7-43 0-43-14 4-14 4z"
        fill="#ffb8b8"
      />
      <path
        d="M103.216 221.575s-4 12-2 31 7 83 7 83 8 69 20 74l3 14 23-4-3-17a17.313 17.313 0 000-11c-2-6-18-161-18-161s-4-24-30-9z"
        fill="#575a89"
      />
    </svg>
  );
};

SvgImagination.propTypes = {
  color: PropTypes.string
};
SvgImagination.defaultProps = {
  color: "primary"
};
export default SvgImagination;
