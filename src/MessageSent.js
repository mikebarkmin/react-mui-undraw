import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMessageSent = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1013.449 610.281"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M689.469 348.394l8.69-1.503c.834-.146 1.661-.324 2.494-.475a71.336 71.336 0 0145.549-131.503l-11.39 27.104 26.985-23.563a1.218 1.218 0 01.184.061 71.34 71.34 0 0143.589 90.991c-.452 1.285-.99 2.512-1.505 3.754 7.618-3.828 14.927-8.284 20.886-13.99 12.066-11.561 18.677-27.516 26.064-47.173 14.636-38.952 28.728-78.469 42.257-118.071a71.308 71.308 0 01-33.339-86.355c.725-2.06 1.565-4.043 2.455-5.99.222-.488.447-.972.68-1.453.904-1.867 1.859-3.696 2.907-5.452.171-.288.363-.557.538-.842q1.368-2.22 2.886-4.31c.377-.522.753-1.044 1.142-1.554a71.079 71.079 0 013.587-4.352c.419-.466.863-.902 1.292-1.356q1.444-1.522 2.966-2.953c.535-.502 1.064-1.008 1.613-1.493.141-.124.273-.26.415-.383.007.01.012.02.02.028a71.29 71.29 0 0191.212-2.049l-14.821 35.27L983.503 27.5a70.944 70.944 0 012.637 84.02l.075.024c-.291.428-.622.82-.922 1.24q-.844 1.184-1.728 2.326a70.87 70.87 0 01-2.348 2.85c-.607.702-1.205 1.41-1.837 2.086-.923.988-1.891 1.924-2.865 2.854-.57.543-1.113 1.113-1.698 1.636q-2.3 2.055-4.76 3.9c-.575.43-1.181.81-1.768 1.223-1.152.81-2.309 1.607-3.504 2.346-.741.458-1.503.877-2.26 1.308a71.235 71.235 0 01-3.326 1.794 71.873 71.873 0 01-5.929 2.633c-.794.312-1.584.628-2.39.912a71.396 71.396 0 01-4.033 1.263c-.685.197-1.358.422-2.049.598-2.034.52-4.091.96-6.173 1.3-.391.063-.79.087-1.182.144-1.726.251-3.46.454-5.208.578-.751.053-1.507.06-2.262.09a70.402 70.402 0 01-4.25.052c-.829-.017-1.657-.06-2.489-.107q-2.077-.118-4.158-.362c-.82-.095-1.638-.19-2.459-.313a71.396 71.396 0 01-4.455-.844c-.098-.02-.195-.034-.293-.055q-8.565 25.061-17.448 50.016a71.29 71.29 0 01103.374 8.52l-24.664 27.277 33.394-13.33a71.095 71.095 0 012.855 54.308 69.978 69.978 0 01-9.062 17.533 71.312 71.312 0 01-128.853-31.287c-.628 1.676-1.234 3.373-1.863 5.048-6.52 17.34-14.63 38.922-30.918 54.525-11.04 10.576-24.625 17.285-37.657 22.958q-12.73 5.54-25.799 10.244a71.497 71.497 0 01-31.926 10.175c-13.748 3.819-27.668 7.006-41.719 9.468l-8.761 1.51c-7.874 1.349-15.947 2.737-23.96 4.337 1.154.343 2.31.67 3.457 1.073a71.363 71.363 0 0147.64 69.429l-54.926 16.858 49.7 7.893a71.373 71.373 0 01-118.925 21.106q.757 2.535 1.52 5.063c1.009 3.348 2.01 6.678 2.971 9.976 13.078 44.938 7.45 80.287-15.851 99.532l-12.644-15.305c22.678-18.734 15.642-57.336 9.434-78.682-.944-3.239-1.93-6.51-2.92-9.799-8.518-28.297-18.175-60.373-5.668-89.847 18.848-44.425 73.17-53.726 116.819-61.2z"
        fill="#f2f2f2"
      />
      <path
        d="M673.371 608.992H288.537a47.583 47.583 0 01-47.583-47.584V385.097a18.85 18.85 0 015.883-13.681L450.76 178.113a43.89 43.89 0 0160.388 0l194.43 184.304a49.274 49.274 0 0115.376 35.76v163.231a47.583 47.583 0 01-47.583 47.584z"
        fill="#3f3d56"
      />
      <path
        d="M240.954 387.992h476v192.267a28.732 28.732 0 01-28.732 28.733H269.686a28.732 28.732 0 01-28.732-28.733V387.992z"
        opacity={0.1}
      />
      <rect
        x={303.454}
        y={236.492}
        width={354}
        height={354}
        rx={26.181}
        fill={color}
      />
      <path
        opacity={0.1}
        d="M657.454 395.942v194.55h-354v-194.55l177 85.55 177-85.55z"
      />
      <path
        d="M480.454 492.492L253.66 382.875a9.202 9.202 0 00-13.206 8.284v188.6a28.732 28.732 0 0028.732 28.733h422.536a28.732 28.732 0 0028.732-28.733V394.39a11.229 11.229 0 00-16.115-10.11z"
        fill="#3f3d56"
      />
      <path
        fill="#f2f2f2"
        d="M333.954 268.992h99v14h-99zM325.954 319.992h294v8h-294zM325.954 346.992h294v8h-294zM325.954 373.992h294v8h-294z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M60.954 608.492h824"
      />
      <path d="M0 485.353c0 58.96 36.989 106.67 82.7 106.67" fill="#46455b" />
      <path
        d="M82.7 592.023c0-59.622 41.276-107.868 92.287-107.868M29.964 490.698c0 56.006 23.586 101.325 52.735 101.325"
        fill={color}
      />
      <path
        d="M82.7 592.023c0-76.184 47.71-137.832 106.67-137.832"
        fill="#46455b"
      />
      <path
        d="M65.302 592.775s11.728-.36 15.262-2.878 18.041-5.522 18.918-1.486 17.625 20.077 4.384 20.183-30.766-2.062-34.294-4.211-4.27-11.608-4.27-11.608z"
        fill="#a8a8a8"
      />
      <path
        d="M104.102 607.19c-13.24.106-30.766-2.063-34.294-4.212-2.686-1.637-3.757-7.509-4.115-10.218l-.391.015s.742 9.46 4.27 11.608 21.053 4.318 34.294 4.211c3.822-.03 5.142-1.39 5.07-3.404-.531 1.216-1.989 1.976-4.834 2z"
        opacity={0.2}
      />
      <path
        d="M719.713 162.77c-.6 5.355-4.685 9.668-6.198 14.84-2.278 7.783 1.66 16.136 7.048 22.197a49.16 49.16 0 0034.234 16.255 14.6 14.6 0 005.66-.617 12.116 12.116 0 004.306-2.943c4.057-4.074 6.235-9.718 7.103-15.402s.53-11.474.191-17.214a9.72 9.72 0 00-.636-3.472 8.896 8.896 0 00-2.234-2.747 52.07 52.07 0 00-9.59-6.966 11.009 11.009 0 01-4.019-3.075 9.937 9.937 0 01-1.242-3.682l-1.06-5.399a10.61 10.61 0 00-1.555-4.376c-1.872-2.525-5.452-2.868-8.592-2.991l-11.505-.452c-3.58-.14-8.295-1.166-11.788-.464-3.263.657-2.179 3.663-1.586 6.4a46.267 46.267 0 011.463 10.109z"
        fill="#a0616a"
      />
      <path
        d="M719.713 162.77c-.6 5.355-4.685 9.668-6.198 14.84-2.278 7.783 1.66 16.136 7.048 22.197a49.16 49.16 0 0034.234 16.255 14.6 14.6 0 005.66-.617 12.116 12.116 0 004.306-2.943c4.057-4.074 6.235-9.718 7.103-15.402s.53-11.474.191-17.214a9.72 9.72 0 00-.636-3.472 8.896 8.896 0 00-2.234-2.747 52.07 52.07 0 00-9.59-6.966 11.009 11.009 0 01-4.019-3.075 9.937 9.937 0 01-1.242-3.682l-1.06-5.399a10.61 10.61 0 00-1.555-4.376c-1.872-2.525-5.452-2.868-8.592-2.991l-11.505-.452c-3.58-.14-8.295-1.166-11.788-.464-3.263.657-2.179 3.663-1.586 6.4a46.267 46.267 0 011.463 10.109z"
        opacity={0.1}
      />
      <path
        d="M792.901 403.781l-4.89 53.609c-1.276 14.06-2.576 28.179-5.079 42.058a206.377 206.377 0 01-3.079 14.258c-3.342 13.098-8.19 25.9-9.755 39.326-.05.387-.09.782-.132 1.177a34.189 34.189 0 01-1.671 8.726c-.782 2.05-1.984 3.919-2.832 5.944-1.687 4.05-1.91 8.529-2.116 12.916a55.682 55.682 0 00-19.172-6.553c-3.252-.485-6.874-.831-9.089-3.26-2.453-2.683-2.181-6.791-1.77-10.397q1.939-16.794 3.87-33.57a87.495 87.495 0 012.444-14.26c.445-1.555.98-3.086 1.523-4.617.75-2.108 1.507-4.215 2.075-6.38a76.832 76.832 0 001.712-10.628c1.325-11.262 2.923-22.499 4.322-33.752l.074-.593c2.1-17.057 3.696-34.197 3.235-51.378a198.288 198.288 0 00-.337-7.639c-.23-3.696-.568-5.656 2.494-7.969 3.384-2.552 7.837-4.338 11.706-6.01 2.083-.905 25.018-9.047 25.553-7.26a44.688 44.688 0 011.68 11.706 130.253 130.253 0 01-.766 14.546z"
        fill="#605d82"
      />
      <path
        d="M782.932 499.448a206.377 206.377 0 01-3.079 14.258c-3.342 13.098-8.19 25.9-9.755 39.326-.05.387-.09.782-.132 1.177-10.224-14.604-18.835-30.311-28.813-45.071.75-2.108 1.507-4.215 2.075-6.38a76.832 76.832 0 001.712-10.628c1.326-11.262 2.923-22.499 4.322-33.752l.074-.593a34.964 34.964 0 002.495 6.923c6.7 13.616 22.622 20.498 30.41 33.53q.358.605.691 1.21z"
        opacity={0.1}
      />
      <path
        d="M699.967 379.719c.338 10.92 2.086 21.743 3.83 32.529l3.6 22.253c1.97 12.18 4.021 24.608 9.785 35.516 4.311 8.16 10.523 15.124 16.143 22.445 13.815 17.999 24.194 38.387 37.294 56.913 3.808 5.385 9.25 11.208 15.749 10.084 4.265-.738 7.363-4.29 10.715-7.027 3.953-3.228 8.716-5.59 11.826-9.636s3.72-10.77-.494-13.65a22.228 22.228 0 00-4.822-1.973c-6.532-2.484-10.76-8.862-13.45-15.312s-4.319-13.384-7.903-19.383c-7.787-13.031-23.71-19.913-30.413-33.534-3.754-7.629-4.112-16.422-4.4-24.92l-.73-21.662c-.08-2.368-.143-4.832.82-6.998 2.564-5.766 10.305-6.303 16.573-7.034a56.692 56.692 0 0020.31-6.408c3.61-1.95 7.137-4.435 9.068-8.055 1.763-3.303 2.006-7.176 2.212-10.914l2.17-39.258c.187-3.377.358-6.87-.833-10.036-2.989-7.95-13.028-10.548-21.514-10.169-15.79.706-30.366 7.498-45.254 12.085a115.055 115.055 0 01-11.218 2.926c-3.341.67-7.385.392-10.572 1.467-5.667 1.91-5.523 14.304-6.327 19.445a163.693 163.693 0 00-2.165 30.306z"
        fill="#605d82"
      />
      <path
        d="M784.224 561.105c1.392 1.404 1.847 3.46 2.21 5.405a184.599 184.599 0 013.126 32.692 5.338 5.338 0 00.588 2.962 3.721 3.721 0 001.538 1.236c4.025 1.918 8.696-.755 12.049-3.692 6.216-5.446 11.476-12.755 11.83-21.011a48.78 48.78 0 01.222-6.372c.546-3.109 2.361-5.817 3.96-8.538a72.053 72.053 0 006.546-14.672c.611-1.923 1.018-4.345-.49-5.687a5.482 5.482 0 00-1.79-.931l-18.18-6.75c-1.575-.585-5.495 9.484-6.117 10.585-1.522 2.693-3.035 4.222-6.088 4.843-3.117.635-6.827-.276-9.735 1.28-4.919 2.63-2.454 5.84.33 8.65zM756.174 567.318a5.574 5.574 0 00-1.384-1.754 6.259 6.259 0 00-2.79-.948c-3.462-.588-7.563-.975-9.952 1.598-2.24 2.411-1.855 6.34-3.727 9.047-.592.857-1.395 1.563-1.91 2.469a9.31 9.31 0 00-.837 4.429c-.097 4.195-.193 8.398.097 12.584.242 3.508.834 7.184 3.027 9.932 3.522 4.411 9.872 5.046 15.509 5.332l4.565.232a8.912 8.912 0 003.741-.343 6.159 6.159 0 003.227-3.55c2.377-5.907-1.387-12.271-3.705-18.2-2.664-6.816-2.186-14.384-5.861-20.828z"
        fill="#535070"
      />
      <path
        d="M718.39 132.6a3.773 3.773 0 01.257-1.76c.669-1.182 2.415-.86 3.732-.529 5.297 1.336 10.878.127 16.331.439s11.597 3.038 12.693 8.39a39.824 39.824 0 0010.07-10.346c1.513-2.265 2.832-4.86 2.626-7.576-.297-3.918-3.585-6.848-6.628-9.332l-9.074-7.407a13.673 13.673 0 00-4.062-2.583c-2.095-.716-4.38-.375-6.594-.374-6.605.005-13.647-3.001-19.521.018-2.454 1.262-4.3 3.423-6.081 5.53l-8.098 9.586a5.12 5.12 0 00-1.294 2.196c-.23 1.17.37 2.324.58 3.498.382 2.142-.54 4.427.169 6.484 1.177 3.414 5.323 3.897 7.857 5.855.944.73 2.425 3.201 3.55 3.171 2.03-.054 3.435-3.682 3.487-5.26z"
        fill="#3f3d56"
      />
      <circle cx={732.131} cy={134.925} r={25.932} fill="#a0616a" />
      <path
        d="M738.204 191.676a12.562 12.562 0 00-12.229-8.415 3.729 3.729 0 01-2.256-.286 3.11 3.11 0 01-.927-1.159 45.299 45.299 0 01-3.78-8.938c-.414-1.373-.98-2.99-2.369-3.348a3.199 3.199 0 00-3.018 1.313 26.59 26.59 0 01-2.157 2.712c-3.262 2.916-9.043.258-12.505 2.933-.565.437-1.032.997-1.626 1.395a7.594 7.594 0 01-1.904.816 182.621 182.621 0 00-19.626 7.687c2.303 13.867 4.662 27.975 10.06 40.954 2.568 6.177 5.479 12.226 7.535 18.592 4.558 14.103 4.76 29.194 4.81 44.015.036 10.144-.015 20.505-3.296 30.103a28.412 28.412 0 00-1.854 6.613c-.198 2.287.468 4.81 2.321 6.164a7.938 7.938 0 003.581 1.258c5.687.835 11.42-.679 17.02-1.975 15.008-3.476 30.314-5.465 45.591-7.449l25.6-3.324a14.862 14.862 0 005.297-1.369c4.684-2.564 5.129-9.61 2.22-14.09-1.395-2.147-3.362-3.909-4.534-6.185s-1.272-5.46.745-7.037c4.104-3.207 2.88-9.157 3.076-14.362q.82-21.829-.222-43.674a86.962 86.962 0 01-.145-9.058 80.214 80.214 0 012.823-15.115l7.78-30.628c-2.033-3.211-5.924-5.249-9.61-6.174s-7.524-1.197-11.154-2.322c-7.436-2.304-14.057-8.152-21.823-7.607a3.962 3.962 0 00-1.691.413c-1.752.992-1.474 3.517-1.586 5.527-.248 4.446-3.519 8.163-7.13 10.769s-7.738 4.506-11.055 7.477a4.933 4.933 0 00-1.962 3.774z"
        fill="#3f3d56"
      />
      <path
        d="M635.455 220.728a30.615 30.615 0 01-5.454 2.807 17.93 17.93 0 00-5.225 2.535 8.188 8.188 0 00-1.817 2.245 9.983 9.983 0 009.205 14.874 20.04 20.04 0 006.808-2.03l18.29-7.925c3.095-1.342 6.44-2.914 7.902-5.954a1.383 1.383 0 00.178-.945 1.562 1.562 0 00-.75-.79 40.867 40.867 0 01-10.65-10.042c-.751-1.019-1.67-3.424-2.73-4.035-3.871-2.23-12.658 7.249-15.757 9.26zM830.982 214.224l6.744 7.703c1.447 1.654 2.896 3.31 4.216 5.067a59.14 59.14 0 017.723 14.55c1.466 3.846 2.682 7.943 2.17 12.027a29.422 29.422 0 01-1.686 6.116 76.142 76.142 0 01-4.582 11.036 62.866 62.866 0 01-5.157 7.727 180.44 180.44 0 01-17.093 19.552c-2.306 2.282-3.272 5.972-4.276 9.057-1.85 5.69-6.255 10.12-10.514 14.323a29.237 29.237 0 01-4.515 3.885 14.705 14.705 0 01-8.216 2.34 9.018 9.018 0 01-3.7-.766c-2.915-1.384-4.397-4.754-4.7-7.967a16.946 16.946 0 011.418-8.52c3.869-8.572 13.806-12.286 20.83-18.54 4.118-3.668 7.267-8.274 10.373-12.831a44.348 44.348 0 005.247-9.197c1.569-4.185.958-9.14 2.328-13.394.58-1.798 1.61-3.422 2.232-5.206s.78-3.9-.31-5.444a7.913 7.913 0 00-3.053-2.235c-4.486-2.278-9.512-5.208-10.37-10.166a10.891 10.891 0 012.009-7.765 32.35 32.35 0 015.658-5.93c1.962-1.735 5.262-3.686 7.224-5.422z"
        fill="#a0616a"
      />
      <path
        d="M631.126 231.48c-1.19-2.405-2.68-4.859-5.082-6.054a9.364 9.364 0 00-7.387-.031 27.774 27.774 0 00-6.482 3.92l-5.813 4.284a14.307 14.307 0 00-3.45 3.185 13.445 13.445 0 00-1.797 4.931 35.246 35.246 0 00-.914 12.197c.922 6.554 4.874 12.276 9.223 17.265 2.718 3.118 6.074 6.264 10.208 6.397 1.784.058 3.768-.646 4.51-2.27a5.66 5.66 0 00.404-2.022c.446-7.31-2.17-14.451-5.219-21.11a13.536 13.536 0 01-1.682-5.674 1.556 1.556 0 01.248-.95 1.605 1.605 0 01.992-.484c4.174-.826 11.364 2.417 14.292-2.218 1.898-3.005-.702-8.64-2.051-11.365z"
        fill="#a0616a"
      />
      <path
        d="M717.03 124.44a3.773 3.773 0 01.257-1.76c.669-1.182 2.415-.86 3.732-.528 5.297 1.335 10.878.126 16.331.438s11.597 3.039 12.694 8.39a39.824 39.824 0 0010.068-10.345c1.514-2.265 2.833-4.86 2.627-7.576-.297-3.918-3.585-6.848-6.628-9.333l-9.074-7.407a13.672 13.672 0 00-4.062-2.583c-2.095-.716-4.38-.375-6.594-.373-6.605.004-13.647-3.002-19.52.018-2.455 1.26-4.302 3.422-6.082 5.53l-8.098 9.586a5.12 5.12 0 00-1.294 2.195c-.23 1.17.37 2.325.58 3.499.382 2.141-.54 4.427.17 6.483 1.176 3.414 5.322 3.898 7.856 5.855.944.73 2.425 3.202 3.55 3.172 2.03-.055 3.435-3.683 3.487-5.26zM661.954 195.505a10.541 10.541 0 00-2.714 2.527c-.951 1.437-1.144 3.252-1.961 4.77-1.748 3.247-5.835 4.402-8.385 7.067a2.64 2.64 0 00-.806 1.382 3.08 3.08 0 00.685 1.99l12.297 19.331c4.094.36 8.022-2.204 12.118-1.864 1.529.127 3.094.655 4.56.203a13.079 13.079 0 002.927-1.79c2.444-1.545 5.699-1.725 7.749-3.763 1.967-1.957 2.218-5.017 2.195-7.792a31.32 31.32 0 00-.731-7.168c-1.81-7.42-7.486-13.114-11.043-19.687-1.732-3.2-2.675-5.073-6.34-2.876-3.686 2.208-7.083 5.134-10.551 7.67zM811.295 185.729a28.769 28.769 0 016.187 5.418c1.873 2.416 2.934 5.372 4.733 7.843 1.745 2.395 4.119 4.25 6.097 6.455 3 3.345 5.033 7.426 7.029 11.451a171.065 171.065 0 01-15.906 17.978 5.13 5.13 0 01-2.416 1.587 3.896 3.896 0 01-3.414-1.392c-.886-.929-1.513-2.074-2.36-3.04a12.162 12.162 0 00-7.518-3.635 51.632 51.632 0 00-8.518-.117 3.367 3.367 0 01-1.819-.306 3.056 3.056 0 01-.992-1.139c-3.33-5.665-2.259-12.778-1.084-19.243l2.695-14.835a33.297 33.297 0 012.243-8.246c1.021-2.181 3.304-5.881 6.11-5.228 2.83.659 6.553 4.737 8.933 6.449z"
        fill="#3f3d56"
      />
      <ellipse cx={317.954} cy={242.066} rx={41} ry={41.075} fill="#fff" />
      <path
        d="M317.954 193.992a49 49 0 1049 49 49.144 49.144 0 00-49-49zm-10.059 75.125l-25.112-25.112 7.043-7.044 18.093 18.092 38.187-38.187 7.043 7.044-45.254 45.207z"
        fill="#57b894"
      />
    </svg>
  );
};

SvgMessageSent.propTypes = {
  color: PropTypes.string
};
SvgMessageSent.defaultProps = {
  color: "primary"
};
export default SvgMessageSent;
