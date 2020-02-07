import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Jogging = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="7127a552-43d6-4b16-9df2-9f0fa9637ab8"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="962.2"
      height="771.67"
      viewBox="0 0 962.2 771.67"
    >
      <defs>
        <linearGradient
          id="d20faab1-6ab6-432b-bba0-607013892761"
          x1="2028.19"
          y1="403.28"
          x2="2028.19"
          y2="402.78"
          gradientTransform="matrix(-1, 0, 0, 1, 2778, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="cabf670e-bbb1-4872-bc54-c659c98b3878"
          x1="2192.47"
          y1="835.84"
          x2="2192.47"
          y2="175.81"
          xlink:href="#d20faab1-6ab6-432b-bba0-607013892761"
        />
      </defs>
      <title>Jogging</title>
      <path
        d="M854,522.26a10.88,10.88,0,0,0-14.2,1.32,11.13,11.13,0,0,0,.44,15.51l13.58,13.5a2.26,2.26,0,0,0,3.21,0L870.57,539a11.13,11.13,0,0,0,.36-15.51,10.92,10.92,0,0,0-14.22-1.24A2.28,2.28,0,0,1,854,522.26Z"
        transform="translate(-118.9 -64.16)"
        fill={color}
      />
      <path
        d="M262,214.26a10.88,10.88,0,0,0-14.2,1.32,11.13,11.13,0,0,0,.44,15.51l13.58,13.5a2.26,2.26,0,0,0,3.21,0L278.57,231a11.13,11.13,0,0,0,.36-15.51,10.92,10.92,0,0,0-14.22-1.24A2.28,2.28,0,0,1,262,214.26Z"
        transform="translate(-118.9 -64.16)"
        fill={color}
      />
      <path
        d="M136,489.26a10.88,10.88,0,0,0-14.2,1.32,11.13,11.13,0,0,0,.44,15.51l13.58,13.5a2.26,2.26,0,0,0,3.21,0L152.57,506a11.13,11.13,0,0,0,.36-15.51,10.92,10.92,0,0,0-14.22-1.24A2.28,2.28,0,0,1,136,489.26Z"
        transform="translate(-118.9 -64.16)"
        fill={color}
      />
      <path
        d="M853,187.26a10.88,10.88,0,0,0-14.2,1.32,11.13,11.13,0,0,0,.44,15.51l13.58,13.5a2.26,2.26,0,0,0,3.21,0L869.57,204a11.13,11.13,0,0,0,.36-15.51,10.92,10.92,0,0,0-14.22-1.24A2.28,2.28,0,0,1,853,187.26Z"
        transform="translate(-118.9 -64.16)"
        fill={color}
      />
      <rect x="651" y="73.92" width="3" height="17" fill="#3ad29f" />
      <rect
        x="769.9"
        y="138.08"
        width="3"
        height="17"
        transform="translate(799.08 -688.98) rotate(90)"
        fill="#3ad29f"
      />
      <rect x="783" y="304.92" width="3" height="17" fill="#3ad29f" />
      <rect
        x="901.9"
        y="369.08"
        width="3"
        height="17"
        transform="translate(1162.08 -589.98) rotate(90)"
        fill="#3ad29f"
      />
      <rect x="193" y="515.92" width="3" height="17" fill="#3ad29f" />
      <rect
        x="311.9"
        y="580.08"
        width="3"
        height="17"
        transform="translate(783.08 211.02) rotate(90)"
        fill="#3ad29f"
      />
      <rect x="124" y="73.92" width="3" height="17" fill="#3ad29f" />
      <rect
        x="242.9"
        y="138.08"
        width="3"
        height="17"
        transform="translate(272.08 -161.98) rotate(90)"
        fill="#3ad29f"
      />
      <rect x="256" y="100.92" width="3" height="17" fill="#3ad29f" />
      <rect
        x="374.9"
        y="165.08"
        width="3"
        height="17"
        transform="translate(431.08 -266.98) rotate(90)"
        fill="#3ad29f"
      />
      <path
        d="M312,351a3.67,3.67,0,0,1-2.05-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2.05,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,312,351Z"
        transform="translate(-118.9 -64.16)"
        fill="#f55f44"
      />
      <path
        d="M879,71a3.67,3.67,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2.05,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,879,71Z"
        transform="translate(-118.9 -64.16)"
        fill="#3ad29f"
      />
      <path
        d="M527,87a3.67,3.67,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2.05,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,527,87Z"
        transform="translate(-118.9 -64.16)"
        fill="#f55f44"
      />
      <path
        d="M342,461a3.67,3.67,0,0,1-2.05-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2.05,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,342,461Z"
        transform="translate(-118.9 -64.16)"
        fill="#f55f44"
      />
      <path
        d="M784,333a3.67,3.67,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2.05,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,784,333Z"
        transform="translate(-118.9 -64.16)"
        fill="#f55f44"
      />
      <path
        d="M1080,229a3.67,3.67,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.68,3.68,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.58,1.58,0,0,0,.36.2,3.69,3.69,0,0,1,2,4.45,1.35,1.35,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.22h0a2.08,2.08,0,0,0,.2-.36,3.67,3.67,0,0,1,4.44-2,1.86,1.86,0,0,0,.41.08h0a1.85,1.85,0,0,0,1.22-3.32h0A2.08,2.08,0,0,0,1080,229Z"
        transform="translate(-118.9 -64.16)"
        fill="#f55f44"
      />
      <path
        d="M749.73,402.78l.16.5A2.66,2.66,0,0,1,749.73,402.78Z"
        transform="translate(-118.9 -64.16)"
        fill="url(#d20faab1-6ab6-432b-bba0-607013892761)"
      />
      <path
        d="M283.1,803.73c-.1-.14-.2-.28-.28-.42s-.11-.2-.16-.3a4.23,4.23,0,0,1-.22-.42l-.12-.3c-.05-.14-.11-.29-.15-.43l-.08-.29c0-.14-.07-.29-.1-.44l0-.27c0-.15,0-.31,0-.46s0-.16,0-.25,0-.32,0-.47,0-.15,0-.23l.06-.5c0-.06,0-.13,0-.19a4.87,4.87,0,0,1,.12-.52l0-.16q.07-.27.18-.54s0-.09,0-.13.15-.38.23-.57l0-.08c.09-.2.19-.4.29-.59l0,0,.35-.61h0a21.56,21.56,0,0,1,5-5.39c14.95,6.15,33.41-.88,33.41-.88s24.62-12.31,22.86-8.79c-.59,1.18-.29,3.55.38,6.18,11.8-2.47,18.3-8.81,21.85-14.55l-13.44-14.49S407.88,726.82,414,711s36-60.66,36-60.66,9.67-35.17,27.26-43.08c0,0,35.07-41.89,55.54-77.82-7.27-18.09-17.4-46.37-15.1-58.46,2.87-15-.11-43.52-1.3-53.54-9.73,8.11-49.27,40.25-64.64,39.48-5.52-.28-11.47-3.24-17-7.17-13.28-8.41-25.16-23.6-25.16-23.6,1.79.17,3.26-1.47,4.45-4.21-14.68-16-45.09-48.76-48.41-49.42-4.39-.88-28.13-42.21-14.94-51s36.92,22.86,37.8,29c.6,4.17,19,22.5,30.76,33.86,0-.29,0-.46,0-.46l1.74.87c0-.55,0-.87,0-.87l30.36,15.19,25.91-35.41s7-37.8,24.62-44,30.33-25.05,30.33-25.05a18,18,0,0,1,.39,1.87c.89-1.17,1.37-1.87,1.37-1.87s0,.15.1.42a45.93,45.93,0,0,0,1-16.55l-.25-.15c-.11-.68-.22-1.33-.34-1.95A44,44,0,0,1,516.75,222c-4.48-3.13-11-5.08-16.5-7.46-8.31-3.57-15.25-8.82-19.83-15a17.47,17.47,0,0,1,9.19.19c.37-4.06-4.32-8.7-.67-11.79,2.26-1.92,6.47-1.75,9.7-.8s6.15,2.52,9.58,2.94c6,.73,11.59-2.16,15.85-5.28s8.24-6.77,13.94-8.25c11.28-2.93,22.48,3.79,33.81,6.63,18.2,4.56,29.06,9.42,29.87,21a37.53,37.53,0,0,1,6.43,5.46,24,24,0,0,1,7.72,13.08c1.54,7.89-1.66,15.91-5.51,23-2.19,4-12.71,24.82-19.86,22.07a44,44,0,0,1-6.58,6.15c.23,2.4.56,4.82,1,7.24a16.15,16.15,0,0,0,5.17,1.78A62.77,62.77,0,0,0,601.93,284a175.79,175.79,0,0,0,18.72-1.14,157.48,157.48,0,0,1,18.19-1,90.07,90.07,0,0,1,9.07.43l.47,0c.61.07,1.21.14,1.79.23l.28,0c.68.1,1.33.2,2,.32l.21,0,1.6.31.36.08c.56.12,1.1.25,1.63.39h0q.82.21,1.59.45l.26.08,1.25.39.27.1c.94.32,1.83.66,2.67,1l.26.11,1,.45.19.09,1.18.55.1.05,1,.5.25.12,1,.51.07,0,1.25.65.75.39.35.18,1,.52c8.79,4.4,94.07,27.26,109,73l-.3.28-.07.05-.34.31c.25.67.49,1.33.71,2,0,0-1.45,1.3-3.71,3.42,4,17.49,14.76,62.16,20.41,64.28,7,2.64,14.95,56.27-3.51,54.51s-18.47-44.84-18.47-44.84-12.17-32.64-21.15-49.21a23.16,23.16,0,0,0-3.52,6.83l.06.18a1.15,1.15,0,0,1-.06-.17,4.86,4.86,0,0,0-.1,2.31c-.87-2.55-5.38-14.26-14.79-12.69-10.05,1.67-48-35.71-51.59-39.29.08,1,.19,2.18.31,3.59h0v.05c.07.82.15,1.71.22,2.66l0,.3c0,.24,0,.48.05.73s0,.32,0,.48l.06.74c0,.17,0,.35,0,.52l.06.74c0,.22,0,.45,0,.67s.06.72.08,1.09.05.59.07.88,0,.42,0,.63l.06.88c0,.2,0,.4,0,.6s0,.62.07.94,0,.41,0,.62l.06,1c0,.2,0,.39,0,.58,0,.53.07,1.06.1,1.6v.21l.09,1.48,0,.51c0,.4.05.81.07,1.22l0,.58c0,.42.05.84.07,1.26l0,.52c0,.5,0,1,.08,1.52,0,.1,0,.19,0,.29l.09,1.91v.11c0,.58,0,1.16.08,1.74,0,.17,0,.34,0,.5l.06,1.43c0,.19,0,.38,0,.57,0,.48,0,1,0,1.45,0,.16,0,.33,0,.5,0,1.32.09,2.66.13,4,0,.1,0,.2,0,.29,0,.57,0,1.14,0,1.71,0,.17,0,.35,0,.52,0,.51,0,1,0,1.54,0,.18,0,.36,0,.53l0,1.7v.34c0,1.38,0,2.77,0,4.17,0,.14,0,.29,0,.44v1.62c0,.19,0,.38,0,.56,0,.52,0,1,0,1.55v.43c.06,19.18-1.17,38.7-5.48,49.84a54.88,54.88,0,0,0-3.6,18.72A76.4,76.4,0,0,0,685.71,507h0l-1-.32c.12.22.19.33.19.33l-.57-.18c.86,1.81,1.45,2.82,1.45,2.82s-1.28-.41-3.56-1.08c3.24,11.45,5.41,29.08-.84,51.19,0,0-3.52,19.34-.88,26.38s5.28,63.3,5.28,63.3,5.27,7,14.94,2.64S829,632.74,829,632.74s.28.49.74,1.34c3.65-1.14,8.91-2.88,12.76-4.5-1.42-2-2.74-3.15-3.83-3,0,0,6.34-3.06,13.24-5.47h0l1.26-.43.05,0,1.23-.4.08,0,1.18-.36.13,0,1.08-.3.22-.07,1-.26.26-.07,1-.22.28-.06.87-.18.33-.06.79-.13.37-.06.72-.08.39,0,.66,0,.37,0h1l.54,0,.34,0,.48.1.32.07c.14,0,.27.1.4.15a2.49,2.49,0,0,1,.29.11,3.41,3.41,0,0,1,.38.21c.07,0,.15.08.21.13a2.56,2.56,0,0,1,.48.45c4.39,5.27,29,106.38,17.58,113.41-.34.21-.67.41-1,.59l-.4.23-.52.29-.5.27-.37.19-.54.26-.28.13-.56.24-.2.08c-.2.08-.4.16-.59.22l-.13,0-.6.19-.08,0c-6.37,1.72-8.49-4.18-16.22-16.82-7.57-12.39-17.29-28-25.79-33.78-.19.41-.37.84-.58,1.25,0,0-88.8,9.67-121.33,20.22s-58,24.61-79.13,0c-18.93-22.08-37.85-93.67-41.55-108.19h0v0c-.26-1-.44-1.77-.55-2.18h0l0-.18,0-.07,0-.07v0l-70.34,53.63L494,685.5S451,746.16,443.05,747s-44.84,58.9-44.84,58.9l-1.34-1.44c-.32,1.61-.56,3.09-.74,4.38,3,7,.21,15.38-2.43,20.93h0l-.11.22-.3.61-.16.32c-.1.19-.19.38-.29.56l-.15.28c-.1.2-.21.39-.31.58l-.15.28-.24.42-.12.21c-.1.19-.21.36-.3.53a1.59,1.59,0,0,0-.13.22c-.07.1-.13.21-.19.31s-.07.12-.11.17l-.23.38a1.19,1.19,0,0,0-.09.15l-.15.22-.06.1-.15.23,0,0c0,.06-.06.09-.08.13l0,0,0,0s-92.32-22-103.75-29c-.36-.22-.7-.45-1-.68l-.29-.22c-.2-.16-.4-.31-.58-.47a4,4,0,0,1-.3-.28c-.15-.14-.31-.28-.44-.42s-.18-.2-.27-.3l-.35-.41Z"
        transform="translate(-118.9 -64.16)"
        fill="url(#cabf670e-bbb1-4872-bc54-c659c98b3878)"
      />
      <path
        d="M819.26,632s20.56-6,21.41-8.57,18,47.1,18,47.1l-17.13,12s-18-10.27-27.4-8.56S819.26,632,819.26,632Z"
        transform="translate(-118.9 -64.16)"
        fill="#4c4c56"
      />
      <path
        d="M376.53,754.48S374,777.6,345.7,780.17s18.84,23.12,18.84,23.12l36,2.57s.85-14.56,6.85-25.69S376.53,754.48,376.53,754.48Z"
        transform="translate(-118.9 -64.16)"
        fill="#4c4c56"
      />
      <path
        d="M673.68,494.14S690,519,678.82,558.37c0,0-3.42,18.84-.85,25.69s5.13,61.66,5.13,61.66,5.14,6.85,14.56,2.57,125-18.84,125-18.84,18.84,32.54,8.56,52.24c0,0-86.49,9.42-118.17,19.69s-56.52,24-77.08,0-41.1-107.9-41.1-107.9l-68.51,52.24-30,35.11s-42,59.09-49.67,59.94-43.67,57.38-43.67,57.38l-43.68-47.1s53.1-30,59.09-45.39,35.11-59.08,35.11-59.08,9.42-34.26,26.55-42c0,0,61.66-73.64,67.65-107.9s102.76-18,102.76-18Z"
        transform="translate(-118.9 -64.16)"
        fill="#5f5d7e"
      />
      <path
        d="M355.12,790.44s-6-13.7-4.28-17.12-22.27,8.56-22.27,8.56-18,6.85-32.54.86c0,0-12.84,9.41-1.71,16.27s101.05,28.26,101.05,28.26,13.7-19.7,2.57-30.83Z"
        transform="translate(-118.9 -64.16)"
        fill="#986365"
      />
      <path
        d="M418.49,705.66c6-15.41,35.11-59.08,35.11-59.08s9.42-34.26,26.55-42c0,0,61.66-73.64,67.65-107.9,1.24-7.06,6.34-12,13.64-15.32q6,17.94,11.95,35.87,8.15,24.5,16.31,49c3.14,9.45,6.12,20,5.83,29.76-.41-1.63-.63-2.53-.63-2.53l-68.51,52.24-30,35.11s-42,59.09-49.67,59.94-43.67,57.38-43.67,57.38l-43.68-47.1S412.5,721.08,418.49,705.66Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M534.1,274.06s7.28,18.41-2.14,35.54,3.85,47.53,12.41,49.24,42.82-20.55,45.39-35.11-11.13-44.53-4.28-64.23Z"
        transform="translate(-118.9 -64.16)"
        fill="#fdc2cc"
      />
      <path
        d="M580.34,305.75s-26.55,53.95-55.66,15.41c0,0-29.12,59.09-19.7,68.51a197.16,197.16,0,0,0,21.41,18l15.42,107.9s87.34-30,124.17-24.83l-56.52-135.3Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M580.34,303.18s-26.55,53.95-55.66,15.41c0,0-29.12,59.09-19.7,68.51a197.16,197.16,0,0,0,21.41,18L541.81,513S629.15,483,666,488.15l-56.52-135.3Z"
        transform="translate(-118.9 -64.16)"
        fill="#d39999"
      />
      <path
        d="M769.6,365.69s14.55,66.8,21.4,69.37,14.56,54.8-3.42,53.09-18-43.67-18-43.67S750.76,394,743.05,388,769.6,365.69,769.6,365.69Z"
        transform="translate(-118.9 -64.16)"
        fill="#fdc2cc"
      />
      <path
        d="M433.05,396.52s-38.54-36-39.39-42-24-36.82-36.83-28.26,10.28,48.81,14.56,49.67,54.81,56.52,54.81,56.52Z"
        transform="translate(-118.9 -64.16)"
        fill="#fdc2cc"
      />
      <path
        d="M584.2,289.05s4.71,5.56,36.39,2.14,39.39,2.57,48,6.85,91.63,26.55,106.18,71.08c0,0-32.54,29.11-29.11,36.82,0,0-4.28-14.56-14.56-12.84s-50.53-38.54-50.53-38.54,7.71,75.36-2.56,101.91,5.13,53.09,5.13,53.09-72.79-23.12-105.33-12c0,0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M583.34,286.48s4.71,5.57,36.39,2.14,39.4,2.57,48,6.85S759.32,322,773.88,366.55c0,0-32.54,29.11-29.12,36.82,0,0-4.28-14.56-14.56-12.84S679.68,352,679.68,352s7.71,75.36-2.57,101.91S682.25,507,682.25,507s-72.79-23.12-105.33-12c0,0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M584.2,286.48s4.71,5.57,36.39,2.14,39.39,2.57,48,6.85S760.18,322,774.73,366.55c0,0-32.54,29.11-29.11,36.82,0,0-4.28-14.56-14.56-12.84S680.53,352,680.53,352s7.71,75.36-2.56,101.91S683.1,507,683.1,507s-72.79-23.12-105.33-12c0,0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8Z"
        transform="translate(-118.9 -64.16)"
        fill="#ec7580"
      />
      <path
        d="M536.24,301.89s-12.42,18.42-29.54,24.41-24,42.82-24,42.82L457,404.23,426.2,388.81s-.86,42-9.42,41.11c0,0,21.41,27.4,38.53,28.26s65.09-40.25,65.09-40.25,5.14,37.68,1.71,55.66,21.41,72.79,21.41,72.79l34.25-6.85s-18-68.51-40.25-79.64c0,0,0-46.24,3.43-57.38s-22.27-53.09-18.84-61.65c1.92-4.81,9.47-15.08,13.27-24.41A24.4,24.4,0,0,0,536.24,301.89Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M533.67,300.18s-12.42,18.41-29.54,24.41-24,42.81-24,42.81l-25.69,35.11L423.63,387.1s-.86,42-9.42,41.11c0,0,21.41,27.4,38.54,28.26s65.08-40.25,65.08-40.25,5.14,37.68,1.71,55.66S541,544.67,541,544.67l34.25-6.85s-18-68.51-40.24-79.64c0,0,0-46.25,3.42-57.38s-22.26-53.09-18.84-61.66c1.92-4.8,9.47-15.07,13.27-24.4A24.4,24.4,0,0,0,533.67,300.18Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M535.38,300.18S523,318.59,505.84,324.59s-24,42.81-24,42.81l-25.69,35.11L425.34,387.1s-.85,42-9.42,41.11c0,0,21.41,27.4,38.54,28.26s65.08-40.25,65.08-40.25,5.14,37.68,1.71,55.66,21.41,72.79,21.41,72.79l34.26-6.85s-18-68.51-40.25-79.64c0,0,0-46.25,3.42-57.38s-22.26-53.09-18.84-61.66c1.93-4.8,9.48-15.07,13.28-24.4A24.45,24.45,0,0,0,535.38,300.18Z"
        transform="translate(-118.9 -64.16)"
        fill="#ec7580"
      />
      <path
        d="M533.93,301.63S521.52,320,504.39,326s-24,42.81-24,42.81L454.72,404l-30.83-15.41s-.85,42-9.42,41.1c0,0,21.41,27.41,38.54,28.26s65.08-40.24,65.08-40.24,5.14,37.68,1.71,55.66,21.41,72.79,21.41,72.79l34.26-6.85s-18-68.51-40.25-79.64c0,0,0-46.25,3.42-57.38s-22.26-53.09-18.84-61.66c1.93-4.8,9.48-15.08,13.28-24.4A24.45,24.45,0,0,0,533.93,301.63Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.05"
      />
      <path
        d="M832.11,623.45s24.83-12,29.12-6.85,28.25,103.62,17.12,110.47-12,1.71-21.41-13.7-22.26-36-31.68-35.11c0,0,27.4-9.42,26.55-12.85S838.1,622.6,832.11,623.45Z"
        transform="translate(-118.9 -64.16)"
        fill="#986365"
      />
      <path
        d="M583.93,281.64a42.82,42.82,0,0,1-47.72,2.69,43,43,0,0,0-2.11-8.56l51.38-14.55C583.36,267.3,583.21,274.36,583.93,281.64Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M552.15,248.12c-10.44.91-23.15-1.06-27-8.17-1.11-2-1.35-4.29-2.48-6.33-3.27-5.89-12.64-8.3-20.16-11.53-8.1-3.48-14.86-8.59-19.32-14.61a17.09,17.09,0,0,1,9,.18c.37-4-4.21-8.47-.65-11.49,2.2-1.87,6.3-1.7,9.44-.77s6,2.45,9.34,2.86c5.81.71,11.29-2.1,15.44-5.14s8-6.6,13.57-8c11-2.86,21.9,3.69,32.94,6.45,22.63,5.67,33.6,11.81,27.45,31.49C595.09,237.56,571.14,246.48,552.15,248.12Z"
        transform="translate(-118.9 -64.16)"
        fill="#865a61"
      />
      <circle cx="439.17" cy="181.64" r="42.82" fill="#fdc2cc" />
      <path
        d="M591.36,239.27c-2.07-8.4-8.05-16.25-16.39-18.58-7.09-2-14.63.17-21.55,2.68s-14,5.44-21.34,5-15.06-5.5-15.62-12.84a6.15,6.15,0,0,1,.53-3.32,8.06,8.06,0,0,1,3.07-2.83c10.77-6.87,23-12.28,35.79-12.07,10.51.17,20.55,4.11,30.32,8,12.33,4.9,26.34,11.75,28.88,24.76,1.5,7.69-1.61,15.5-5.36,22.37-2.17,4-12.7,24.8-19.67,21.37C587.21,272.43,592.69,244.67,591.36,239.27Z"
        transform="translate(-118.9 -64.16)"
        opacity="0.1"
      />
      <path
        d="M589.65,237.56c-2.07-8.41-8.06-16.25-16.4-18.58-7.09-2-14.63.17-21.55,2.68s-14,5.44-21.34,5-15.06-5.51-15.62-12.85a6.19,6.19,0,0,1,.54-3.32,8.26,8.26,0,0,1,3.06-2.83c10.78-6.86,23-12.27,35.8-12.07,10.51.18,20.55,4.12,30.32,8,12.32,4.9,26.34,11.75,28.88,24.76,1.5,7.68-1.62,15.49-5.37,22.36-2.16,4-12.69,24.81-19.66,21.38C585.5,270.72,591,243,589.65,237.56Z"
        transform="translate(-118.9 -64.16)"
        fill="#865a61"
      />
      <path
        d="M875.78,727.93c11.14-6.85-12.84-105.33-17.12-110.47-1.88-2.25-7.71-1.21-13.66.66,6.76-2.36,14.08-4.09,16.23-1.52,4.28,5.14,28.25,103.62,17.12,110.47a20.13,20.13,0,0,1-6.21,2.83A30.9,30.9,0,0,0,875.78,727.93Z"
        transform="translate(-118.9 -64.16)"
        fill="#fff"
        opacity="0.5"
      />
      <path
        d="M291.19,788c-1.15,2.95-.8,6.37,4,9.31,11.13,6.85,101.05,28.26,101.05,28.26a44.63,44.63,0,0,0,2.45-4.16,46.12,46.12,0,0,1-3.31,5.88S305.45,805.86,294.32,799C288.57,795.47,289.22,791.24,291.19,788Z"
        transform="translate(-118.9 -64.16)"
        fill="#fff"
        opacity="0.5"
      />
      <g opacity="0.05">
        <path
          d="M741,394.79c7.12-11.45,26.84-29.1,26.84-29.1-14.56-44.53-97.62-66.79-106.18-71.08-4.73-2.36-9.2-5.24-17.57-6.77,13.07,1,18.54,4.7,24.42,7.63,8.56,4.28,91.63,26.55,106.18,71.08,0,0-31.27,28-29.27,36.34A26.88,26.88,0,0,0,741,394.79Z"
          transform="translate(-118.9 -64.16)"
        />
        <path
          d="M745.46,402.89l.16.48A2.46,2.46,0,0,1,745.46,402.89Z"
          transform="translate(-118.9 -64.16)"
        />
        <path
          d="M583.21,287.89l1-1.41s1.09,1.28,5.69,2.23A51.79,51.79,0,0,1,583.21,287.89Z"
          transform="translate(-118.9 -64.16)"
        />
        <path
          d="M730.13,390.57a11.35,11.35,0,0,1-3.74-1A9.33,9.33,0,0,1,730.13,390.57Z"
          transform="translate(-118.9 -64.16)"
        />
        <path
          d="M618.71,493.07c-15.32-1.69-30.28-1.71-40.94,1.93,0,0-.2-.89-.53-2.51C588.92,490.22,603.93,491,618.71,493.07Z"
          transform="translate(-118.9 -64.16)"
        />
        <path
          d="M675.51,504.74c-3-5.77-13.29-28.73-4.4-51.7,10.28-26.55,2.57-101.91,2.57-101.91s2.94,2.94,7.43,7.19C682.69,377,686.43,432,678,453.9,667.69,480.44,683.1,507,683.1,507S680.28,506.09,675.51,504.74Z"
          transform="translate(-118.9 -64.16)"
        />
      </g>
    </svg>
  );
};

Jogging.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Jogging.defaultProps = {
  color: "primary",
  style: {}
};

export default Jogging;
