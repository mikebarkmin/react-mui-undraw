import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFirmware = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1124.677 770.768"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Firmware_svg__a"
          x1={969.14}
          y1={556.311}
          x2={969.14}
          y2={137.116}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Firmware_svg__b"
          x1={355.664}
          y1={691.671}
          x2={355.664}
          y2={298.978}
          xlinkHref="#Firmware_svg__a"
        />
      </defs>
      <path
        d="M1060.812 437.402c-37.663 47.884-23.031 117.836.901 173.86 8.013 18.757 17.076 38.602 13.695 58.717-4.134 24.597-26.087 42.584-49.136 52.116-42.018 17.377-92.298 13.236-130.907-10.782-33.364-20.756-57.258-54.51-91.192-74.32-56.789-33.155-129.072-20.635-190.736 2.203-43.627 16.157-91.323 37.17-134.673 20.284-30.503-11.881-51.588-40.8-63.076-71.453-5.547-14.8-9.572-30.82-20.164-42.55-6.297-6.974-14.515-11.925-22.934-16.099-76.871-38.114-173.96-17.703-248.625-59.977-50.426-28.55-82.708-82.406-97.002-138.563s-12.629-115.042-9-172.876c2.58-41.1 7.207-84.978 33.468-116.699C79.21 7.707 126.889-4.77 169.983 1.607s82.156 29.11 116.52 55.885c42.948 33.462 82.778 75.131 135.51 88.686 35.91 9.23 73.685 4.182 110.721 2.433 61.916-2.923 123.858 3.577 185.433 10.696 58.948 6.814 118.32 14.314 174.477 33.49 39.74 13.57 71.6 38.204 109.126 55.413 24.46 11.217 51.133 14.315 74.292 28.602 28.529 17.6 54.683 48.213 47.373 84.035-6.95 34.058-42.633 51.14-62.623 76.555z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M735.045 146.859s-60.54-17.93-64.54 33.07 16 135 0 162-73.094 66.01-43.047 69.505 45.046 8.495 36.046 26.495-56 35-46 48 15 29 5 45-45 26-39 37 28 17 17 29-42.888 39.296-30.444 39.148"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <rect
        x={682.842}
        y={112.881}
        width={153.612}
        height={71.24}
        rx={12.97}
        fill={color}
      />
      <path opacity={0.1} d="M695.087 173.188H824.21v1.336H695.087z" />
      <path opacity={0.3} d="M695.087 124.012H824.21v48.978H695.087z" />
      <circle cx={725.141} cy={149.523} r={17.81} opacity={0.1} />
      <circle cx={794.155} cy={149.523} r={17.81} opacity={0.1} />
      <path fill={color} d="M746.29 184.119h26.714v15.588H746.29z" />
      <path
        fill={color}
        d="M703.992 195.253h111.313v89.05H703.992zM701.765 302.113h115.766v11.131H701.765zM720.689 339.96v51.204h20.036v-66.788h-20.036v15.584zM780.798 324.376v66.788h20.036v-66.788h-20.036zM688.83 215.29v20.59a30.119 30.119 0 00-14.8 7.135 35.014 35.014 0 00-8.812 12.92 65.632 65.632 0 00-4.339 19.722 112.766 112.766 0 001.232 26.459h-22.262a151.97 151.97 0 01.582-31.932 84.744 84.744 0 017.145-25.308c6.45-13.528 15.624-20.867 23.683-24.854a43.74 43.74 0 0117.57-4.732z"
      />
      <path
        opacity={0.3}
        d="M720.689 324.376h20.036v15.584h-20.036zM720.689 353.317h20.036v20.036h-20.036zM720.689 384.485h20.036v6.679h-20.036zM780.798 324.376h20.036v15.584h-20.036zM780.798 353.317h20.036v20.036h-20.036zM780.798 384.485h20.036v6.679h-20.036zM688.83 215.29v20.59a30.119 30.119 0 00-14.8 7.135l-2.77-22.993a43.74 43.74 0 0117.57-4.732zM665.218 255.935a65.632 65.632 0 00-4.339 19.722l-20.448-5.473a84.744 84.744 0 017.145-25.308z"
      />
      <path
        d="M830.466 215.29v20.59a30.119 30.119 0 0114.801 7.135 35.014 35.014 0 018.81 12.92 65.632 65.632 0 014.34 19.722 112.766 112.766 0 01-1.232 26.459h22.262a151.97 151.97 0 00-.582-31.932 84.744 84.744 0 00-7.145-25.308c-6.45-13.528-15.623-20.867-23.683-24.854a43.74 43.74 0 00-17.57-4.732z"
        fill={color}
      />
      <path
        d="M830.466 215.29v20.59a30.119 30.119 0 0114.801 7.135l2.77-22.993a43.74 43.74 0 00-17.57-4.732zM854.078 255.935a65.632 65.632 0 014.339 19.722l20.448-5.473a84.744 84.744 0 00-7.145-25.308z"
        opacity={0.3}
      />
      <path
        opacity={0.1}
        d="M746.29 184.119h26.714v1.845H746.29zM817.283 211.12v37.282a7.768 7.768 0 01-2.07-5.284v-26.72a7.755 7.755 0 012.07-5.279zM704.387 213.578v27.91a7.76 7.76 0 01-2.075 4.721v-37.354a7.76 7.76 0 012.075 4.723zM709.559 284.305h100.18v1.319h-100.18zM707.331 313.247h48.976v1.022h-48.976zM760.763 313.247h48.976v1.022h-48.976z"
      />
      <path
        fill={color}
        d="M712.794 46.953h7.666v65.928h-7.666zM800.698 46.953h7.666v65.928h-7.666z"
      />
      <circle cx={716.372} cy={47.464} r={8.688} opacity={0.1} />
      <circle cx={716.372} cy={46.953} r={8.688} fill={color} />
      <circle cx={804.787} cy={47.464} r={8.688} opacity={0.1} />
      <circle cx={804.787} cy={46.953} r={8.688} fill={color} />
      <path
        d="M624.005 428.925c-3.418 3.422-4.197 8.122-5.412 12.48-3.467 12.444-11.63 23.922-23.008 32.352-8.333 6.176-19.506 13.013-17.53 22.227.472 2.202 1.72 4.257 2.047 6.477 1.419 9.61-13.272 14.674-18.96 23.083-4.235 6.265-3.103 14.026-1.844 21.161 1.54 8.734 3.405 18.052 10.57 24.482 1.934 1.735 4.238 3.24 5.587 5.333 3.023 4.688.396 10.832 3.143 15.64 3.664 6.41 15.203 6.688 21.9 2.366s9.79-11.429 12.758-18.091c8.02-18.008 17.88-36.074 34.549-49.187 15.982-12.573 39.231-22.326 41.973-40.627 1.176-7.846-1.803-16.446 2.747-23.359 2.15-3.267 5.744-5.688 8.178-8.81 7.252-9.3 1.853-22.752-8.764-29.357-16.031-9.97-53.99-10.132-67.934 3.83z"
        fill="#dee3f3"
        opacity={0.5}
      />
      <path
        fill={color}
        d="M834.346 116.668L904.98 94.6l2.684 8.59-70.633 22.07z"
      />
      <path
        d="M936.425 428.945s-38.724-7.745-49.05-18.071-56.795-28.398-61.958-15.49-69.703 56.795-25.816 64.54 103.263 10.326 116.171 5.163 20.653-36.142 20.653-36.142z"
        fill="#a8a8a8"
      />
      <path
        d="M799.6 455.128c43.888 7.745 103.264 10.327 116.172 5.163 9.83-3.932 16.66-22.824 19.362-31.615.817.173 1.29.269 1.29.269s-7.744 30.979-20.652 36.142-72.284 2.582-116.171-5.163c-12.669-2.236-16.291-7.486-14.927-14.13 1.083 4.335 5.498 7.67 14.927 9.334z"
        opacity={0.2}
      />
      <path
        d="M1060.083 156.703a11.375 11.375 0 00-3.205-4.441c-10.39-9.47-27.197-6.6-40.099-12.385-2.972-1.333-6.02-3.182-9.248-2.675-4.506.707-8.696 5.838-12.625 3.562l.281.857a4.51 4.51 0 01-.281-.147l2.89 8.802c1.109 3.379 2.279 6.857 4.436 9.67a25.319 25.319 0 006.123 42.112c.136.295.272.59.403.89.122.054.249.102.372.156a29.562 29.562 0 011.907 6.13c-3.344.463-9.174 4.16-14.908 9.621l-11.467-.392a37.499 37.499 0 01-20.602-7.004l-34.288-24.652a11.476 11.476 0 00-6.57 2.904c-4.258-4.436-7.871-9.07-7.564-11.786 0 0-15.945-29.844-21.744-14.922s10.872 30.555 10.872 30.555l10.576 13.7a57.635 57.635 0 00-.79 7.262c13.046 14.922 58.708 28.424 58.708 28.424l7.12.344.04.35a24.244 24.244 0 00-.636 5.7l.014.854c-.002.189-.017.38-.014.568.362 23.804 3.624 96.64 3.624 96.64.635-.284 1.29-.542 1.957-.786l-.508 6.47s-30.442 4.263-52.91 12.79-23.194 18.476-23.194 18.476v87.78c-6.42 3.294-16.546 7.623-21.745 5.306-5.642-2.515-8.74-.402-9.3 1.803a2.8 2.8 0 00-.025 1.326l.007.027a2.376 2.376 0 00.216.563l.022.041a2.257 2.257 0 00.383.503c2.174 2.132 49.287 20.607 60.159 17.765a7.515 7.515 0 00.985-.332c.104-.043.197-.1.298-.148.202-.095.405-.187.593-.298.112-.067.212-.147.32-.219.162-.109.328-.214.48-.335.106-.084.2-.18.302-.27.14-.126.282-.247.412-.382.095-.099.18-.208.27-.312.123-.141.249-.28.363-.432.082-.108.156-.226.233-.34.11-.16.221-.317.322-.486.07-.116.132-.24.197-.36.098-.178.196-.355.285-.542.057-.12.108-.245.161-.369.087-.197.173-.395.25-.6.046-.12.087-.245.13-.368.075-.218.15-.436.217-.661.035-.117.066-.236.098-.355.066-.24.13-.48.187-.727.025-.11.048-.22.071-.331.056-.262.11-.526.156-.794l.048-.299c.047-.286.09-.573.126-.865l.029-.25c.036-.312.068-.625.094-.94l.016-.198q.038-.505.062-1.013l.006-.135q.022-.543.03-1.086v-.068a59.5 59.5 0 00-1.399-12.604l2.63-74.784a407.789 407.789 0 0042.654-1.57l1.56 35.678s0 23.45 7.973 34.108c6.823 9.122 14.707 49.465 16.839 60.911-2.93 5.585-8.533 12.492-18.29 12.28 0 0-18.357-1.588-17.321 3.462l.002.008a2.603 2.603 0 00.115.387l.012.033a3.586 3.586 0 00.2.423l.016.028c.073.13.158.265.254.403l.058.084c.107.15.224.301.357.459l.034.038a10.002 10.002 0 00.524.563c.164.165.337.333.529.506 9.422 8.527 64.508 9.949 64.508 9.949v-.055l-.001-.107v-.03l-.002-.199v-.029c-.033-2.467-.36-15.415-3.66-25.161h.764s-7.973-71.77-14.497-80.296c0 0-1.733-37.843 2.18-61.56.24-.087.482-.172.72-.26 18.272-6.825 19.569-23.632 17.687-35.98 3.457 1.11 5.506 1.871 5.506 1.871s-.063-.537-.18-1.487l.18.066s-.348-2.257-.922-5.78c-1.306-9.682-3.84-26.603-6.535-34.592-.436-1.756-.853-3.257-1.24-4.395a75.118 75.118 0 01-3.192-14.76 174.943 174.943 0 01-1.12-19.574 187.885 187.885 0 012.004-26.111c1.107-7.553 2.103-16.142 2.019-22.14a29.522 29.522 0 00-.436-6.238c-.968-4.428-5.24-7.308-9.681-9.14-.286-.118-.58-.215-.868-.324.108-1.679.25-3.58.433-5.586a4.775 4.775 0 003.694.748c1.91-.418 3.279-2.012 4.5-3.51 6.423-7.89 13.02-16.114 15.487-25.915a55.99 55.99 0 001.358-13.344q.003-.368 0-.738a14.512 14.512 0 00-.581-4.982z"
        transform="translate(-37.662 -65.366)"
        fill="url(#Firmware_svg__a)"
      />
      <path
        d="M963.933 129.798s9.732 14.599 7.647 21.55 22.94 2.781 22.94 2.781.696-27.112 5.562-33.368-36.15 9.037-36.15 9.037zM899.628 139.183s-20.16-16.684-19.465-22.941c0 0-15.294-29.198-20.855-14.599s10.428 29.893 10.428 29.893l19.465 25.722z"
        fill="#f7c4a7"
      />
      <path
        d="M879.12 400.919s-18.77 11.818-26.416 8.342-10.428 2.085-8.342 4.17 47.272 20.161 57.7 17.38 5.124-25.553 5.124-25.553zM978.532 451.667s-4.52 19.117-20.16 18.77c0 0-23.637-2.086-14.6 6.256s61.872 9.733 61.872 9.733 0-28.502-9.733-34.76-17.38 0-17.38 0z"
        fill="#535461"
      />
      <path
        d="M950.03 316.802l2.085 48.662s0 22.941 7.647 33.37 16.684 62.565 16.684 62.565h26.417s-7.647-70.213-13.904-78.555c0 0-2.78-61.871 6.952-75.775z"
        fill="#575988"
      />
      <path
        d="M950.03 316.802l2.085 48.662s0 22.941 7.647 33.37 16.684 62.565 16.684 62.565h26.417s-7.647-70.213-13.904-78.555c0 0-2.78-61.871 6.952-75.775z"
        opacity={0.1}
      />
      <path
        d="M1004.948 273.005s15.99 38.235-13.208 49.358-82.031 9.733-82.031 9.733l-2.781 80.64s-32.674 4.172-33.369-6.256v-88.288s.695-9.732 22.246-18.075 50.748-12.513 50.748-12.513l1.39-18.075z"
        fill="#575988"
      />
      <path
        d="M979.33 147.05a33.266 33.266 0 0116.333 2.309c4.26 1.792 8.357 4.61 9.285 8.941 1.1 5.131-.12 16.638-1.518 26.372a181.635 181.635 0 00-.847 46.085c.717 6.387 1.705 11.956 3.06 14.441 4.172 7.647 8.343 43.797 8.343 43.797s-45.882-17.38-68.823-6.952c0 0-3.128-71.256-3.476-94.545-.27-18.032 22.593-38.582 30.24-39.278 4.482-.407 2.95-.709 7.402-1.17z"
        opacity={0.1}
      />
      <path
        d="M979.33 145.659a33.266 33.266 0 0116.333 2.31c4.26 1.792 8.357 4.609 9.285 8.941 1.1 5.131-.12 16.638-1.518 26.372a181.635 181.635 0 00-.847 46.085 74.75 74.75 0 003.06 14.44c3.129 9.386 8.343 43.797 8.343 43.797s-45.882-17.38-68.823-6.952c0 0-3.128-71.256-3.476-94.544-.27-18.033 22.593-38.583 30.24-39.278 4.482-.407 2.95-.709 7.402-1.171z"
        fill="#e14b5a"
      />
      <path
        d="M991.74 184.022l-49.358-2.78s-3.141-24.199 3.984-23.95l48.85 1.704s10.428 12.513-3.476 25.026z"
        opacity={0.1}
      />
      <path
        d="M991.74 182.632l-56.31-2.78s-43.796-13.21-56.31-27.808c0 0 .696-25.722 14.6-27.112l32.886 24.117a35.507 35.507 0 0019.76 6.852l48.85 1.704s10.428 12.514-3.476 25.027z"
        fill="#e14b5a"
      />
      <path
        d="M994.173 132.926c.826-6.592 3.816-8.778 5.91-11.47 4.865-6.257-36.15 9.037-36.15 9.037a73.743 73.743 0 015.544 10.229 24.923 24.923 0 0010.445 2.284c6.047 0 9.925-6.51 14.251-10.08z"
        opacity={0.1}
      />
      <circle cx={979.922} cy={117.285} r={25.027} fill="#f7c4a7" />
      <path
        d="M964.118 99.743c-2.665-2.91-3.946-6.794-5.155-10.551l-2.772-8.611c3.769 2.227 7.787-2.792 12.11-3.484 3.095-.496 6.019 1.313 8.87 2.617 12.374 5.66 28.494 2.85 38.46 12.116a11.123 11.123 0 013.073 4.345 14.537 14.537 0 01.558 4.9 55.834 55.834 0 01-1.303 13.055c-2.366 9.589-8.693 17.634-14.855 25.353-1.17 1.467-2.484 3.026-4.315 3.435-3.577.799-6.345-3.068-7.73-6.462a68.753 68.753 0 01-4.033-13.952 18.28 18.28 0 00-1.652-5.896c-2.154-3.82-7.463-7.433-10.692-10.39-3.174-2.908-7.599-3.237-10.564-6.475z"
        opacity={0.1}
      />
      <path
        d="M964.118 99.048c-2.665-2.911-3.946-6.794-5.155-10.551l-2.772-8.611c3.769 2.227 7.787-2.792 12.11-3.484 3.095-.496 6.019 1.313 8.87 2.616 12.374 5.66 28.494 2.851 38.46 12.117a11.123 11.123 0 013.073 4.345 14.537 14.537 0 01.558 4.9 55.834 55.834 0 01-1.303 13.055c-2.366 9.589-8.693 17.634-14.855 25.353-1.17 1.467-2.484 3.026-4.315 3.435-3.577.798-6.345-3.068-7.73-6.462a68.753 68.753 0 01-4.033-13.952 18.28 18.28 0 00-1.652-5.897c-2.154-3.818-7.463-7.432-10.692-10.39-3.174-2.907-7.599-3.236-10.564-6.474z"
        fill="#632652"
      />
      <ellipse cx={986.526} cy={120.065} rx={2.086} ry={4.519} fill="#f7c4a7" />
      <path
        d="M999.04 240.68s-1.391 4.17-8.343 3.475-27.112-2.085-27.112 0"
        opacity={0.1}
      />
      <path
        d="M943.773 475.998a5.889 5.889 0 01-2.023-2.9c-.182.903.376 2.075 2.023 3.595 9.037 8.343 61.87 9.733 61.87 9.733s0-.246-.007-.695c-.334-.01-52.855-1.417-61.863-9.733zM902.062 429.421c-10.428 2.78-55.615-15.294-57.7-17.38a2.257 2.257 0 01-.579-1.016 2.5 2.5 0 00.579 2.407c2.085 2.085 47.272 20.16 57.7 17.38 5.367-1.432 6.563-8.158 6.463-14.35-.102 5.774-1.496 11.635-6.463 12.96z"
        fill="#fff"
        opacity={0.5}
      />
      <path
        d="M543.16 548.066a298.407 298.407 0 01-4.477-41.049 54.99 54.99 0 00-38.698-50.218c-3.949-1.215-8.304-2.351-13.106-3.37-42.128-8.949-54.926-1.136-56.38-.11a54.018 54.018 0 01-3.19-6.965c-.07-.243-.137-.491-.206-.737a53.933 53.933 0 0014.41-32.494c7.027-7.126 11.132-15.722 11.132-24.978 0-7.96-3.04-15.431-8.359-21.9v-12.561a54.705 54.705 0 00-54.705-54.706h-4.437a54.705 54.705 0 00-54.705 54.706v13.56a33.96 33.96 0 00-7.563 20.901c0 9.061 3.938 17.49 10.696 24.526a53.942 53.942 0 0015.014 33.545c.296 2.054.6 4.265.9 6.597l-75.373 15.94s-29.06 1.195-47.768 39.807c-15.839 32.689-47.367 116.725-56.67 141.744-1.685 4.534-2.642 7.133-2.642 7.133s.308-.312.9-.845l-.9 2.437s.457-.462 1.327-1.223c-1.32 10.47-1.509 28.44 12.207 30.68 11.497 1.877 41.112 2.648 63.492 2.964v.022h1.552c14.83.199 26.113.199 26.113.199v-.2h240.631v-2.465a16.586 16.586 0 00-1.326-6.518q.174-.2.336-.403a13.208 13.208 0 012.497 5.79 5.796 5.796 0 01-.113.611l.141-.368a6.196 6.196 0 01-.141 1.96s30.872-79.547 30.543-127.045a80.473 80.473 0 00-1.133-14.967zm-192.44-84.512a55.192 55.192 0 01-.764-6.86l.002-.063c.266 2.233.523 4.55.762 6.923zm-93.525 170.863v18.958l-11.885 2.538z"
        transform="translate(-37.662 -65.366)"
        fill="url(#Firmware_svg__b)"
      />
      <path
        d="M348.466 241.263a54.705 54.705 0 0154.705 54.706v23.336h-109.41v-23.336a54.705 54.705 0 0154.705-54.706z"
        fill="#e14b5a"
      />
      <ellipse
        cx={348.848}
        cy={326.956}
        rx={62.356}
        ry={42.846}
        fill="#e14b5a"
      />
      <path
        d="M308.871 368.463s13.007 68.095 0 86.457 39.786 25.631 39.786 25.631l54.705-19.892 7.651-48.967s-33.282-18.746-26.396-56.619zM470.31 597.996s3.442 14.92-15.303 17.597a106.009 106.009 0 01-33.356-.397l-4.134-37.476h43.611zM139.262 578.899s-8.279 33.634 10.467 36.694 87.605 3.06 87.605 3.06v-39.785l-31.173 6.658-29.271-28.081z"
        fill="#f7c4a7"
      />
      <path
        d="M312.888 390.46l-73.26 15.493s-27.926 1.148-45.906 38.256-57 143.075-57 143.075 33.282-33.665 72.302 2.296l26.014-47.055-5.738 74.598h201.606v-35.195s42.081 22.571 39.02 35.195c0 0 36.01-92.78 28.266-134.948a286.777 286.777 0 01-4.303-39.45 52.847 52.847 0 00-37.19-48.261c-3.794-1.168-7.98-2.259-12.595-3.24-43.228-9.18-54.322 0-54.322 0s-8.374 27.247-8.225 39.595c.191 15.876-22.571 26.397-22.571 26.397s-33.665-8.034-35.195-14.537-13.58-44.568-10.903-52.22z"
        opacity={0.1}
      />
      <path
        d="M312.888 388.93l-73.26 15.493s-27.926 1.148-45.906 38.256-57 143.075-57 143.075 33.282-33.665 72.302 2.295l26.014-47.054-5.738 74.598h201.606v-35.195s42.081 22.571 39.02 35.195c0 0 36.01-92.78 28.266-134.948a286.777 286.777 0 01-4.303-39.45 52.847 52.847 0 00-37.19-48.261c-3.794-1.168-7.98-2.26-12.595-3.24-43.228-9.18-54.322 0-54.322 0s-8.374 27.247-8.225 39.595c.191 15.876-22.571 26.396-22.571 26.396s-33.665-8.033-35.195-14.537-13.58-44.567-10.903-52.218z"
        fill="#575988"
      />
      <path
        d="M387.761 385.679a51.781 51.781 0 01-1.996-27.163l-75.746 13.39s1.093 5.724 2.329 14.3a52.019 52.019 0 0075.413-.527z"
        opacity={0.1}
      />
      <path
        d="M400.684 346.657a52.027 52.027 0 01-104.04 1.263c-.01-.421-.014-.842-.014-1.263a52.04 52.04 0 0129.166-46.752q2.34-1.142 4.808-2.058a52.399 52.399 0 0126.798-2.486.029.029 0 00.02.003 51.987 51.987 0 0143.148 47.846q.114 1.71.114 3.447z"
        fill="#f7c4a7"
      />
      <g opacity={0.1}>
        <path d="M330.532 299.068a.767.767 0 01.072-.046q-2.467.912-4.808 2.058a52.04 52.04 0 00-29.166 46.752c0 .42.003.842.015 1.262a11.557 11.557 0 004.667-1.12c12.685-5.919 20.295-24.032 23.282-36.664 1.071-4.522 2.097-9.618 5.938-12.242z" />
        <path d="M370.355 300.53a51.597 51.597 0 00-12.934-3.99 16.69 16.69 0 019.289 5.833 23.786 23.786 0 012.843 5.069 52.167 52.167 0 00-43.757.907c3.267 7.157 13.393 11.063 20.153 13.676q11.103 4.287 22.467 7.839-3.346-2.72-6.691-5.433 7.552 1.2 15.107 2.403a26.17 26.17 0 00-1.054-8.906c2.875 2.333 6.731 3.114 9.872 5.095 5.888 3.711 8.336 10.873 11.546 17.047a11.01 11.01 0 003.374 4.315 52.049 52.049 0 00-30.215-43.856z" />
      </g>
      <path
        d="M330.532 297.893a.767.767 0 01.072-.046q-2.467.912-4.808 2.058a52.04 52.04 0 00-29.166 46.752c0 .421.003.842.015 1.263a11.557 11.557 0 004.667-1.121c12.685-5.918 20.295-24.032 23.282-36.664 1.071-4.522 2.097-9.618 5.938-12.242z"
        fill="#632652"
      />
      <path
        d="M370.355 299.354a51.597 51.597 0 00-12.934-3.99 16.69 16.69 0 019.289 5.834 23.786 23.786 0 012.843 5.07 52.167 52.167 0 00-43.757.906c3.267 7.157 13.393 11.063 20.153 13.676q11.103 4.287 22.467 7.839-3.346-2.72-6.691-5.433 7.552 1.2 15.107 2.403a26.17 26.17 0 00-1.054-8.906c2.875 2.333 6.731 3.114 9.872 5.096 5.888 3.71 8.336 10.872 11.546 17.046a11.01 11.01 0 003.374 4.315 52.049 52.049 0 00-30.215-43.856z"
        fill="#632652"
      />
      <path
        d="M290.7 338.077s53.558-66.565 115.531 0l-5.355-14.92s-29.074-42.463-49.732-33.282-40.934 15.685-40.934 15.685z"
        opacity={0.1}
      />
      <path
        d="M290.7 336.902s53.558-66.564 115.531 0l-5.355-14.92s-29.074-42.463-49.732-33.282-40.934 15.685-40.934 15.685z"
        fill="#e14b5a"
      />
      <path
        d="M246.706 480.36s-11.477 30.605 4.59 58.148-14.154 39.021-14.154 39.021M432.628 452.816s19.893 25.249 6.886 47.82-12.242 76.893-12.242 76.893"
        opacity={0.1}
      />
      <path
        d="M229.109 600.1h221.116a18.363 18.363 0 0118.363 18.362H210.746a18.363 18.363 0 0118.363-18.362z"
        fill="#535461"
      />
      <path
        d="M262.37 473.857h154.594a39 39 0 0139 39v91.45H223.37v-91.45a39 39 0 0139-39z"
        fill="#535461"
      />
      <circle cx={339.476} cy={544.821} r={13.772} fill="#fff" />
      <path
        d="M293.76 306.867s52.64-52.61 109.411-.96"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <path fill="#6a5c99" d="M411.186 303.516h5.287v29.959h-5.287z" />
      <path
        d="M404.137 322.9a18.21 18.21 0 0118.21 18.21v1.176a18.21 18.21 0 01-18.21 18.21V322.9z"
        fill="#ffd037"
      />
      <rect
        x={400.613}
        y={321.138}
        width={8.224}
        height={41.12}
        rx={4.112}
        fill="#6a5c99"
      />
      <path fill="#6a5c99" d="M285.205 334.062h-5.287v-29.96h5.287z" />
      <path
        d="M292.255 361.083a18.21 18.21 0 01-18.21-18.21v-1.175a18.21 18.21 0 0118.21-18.21v37.595z"
        fill="#ffd037"
      />
      <rect
        x={325.217}
        y={387.092}
        width={8.224}
        height={41.12}
        rx={4.112}
        transform="rotate(-180 310.498 374.969)"
        fill="#6a5c99"
      />
      <path
        d="M410.56 271.494c-7.159-14.884-22.749-32.88-56.357-34.316l.003-.041-.403.02-.026-.002v.002l-11.907.567.002.059c-33.387 1.537-48.904 19.462-56.04 34.299a77.157 77.157 0 00-7.38 32.122l4.11-.1 4.111-.095a69.963 69.963 0 016.695-28.62c9.064-18.614 25.74-28.516 49.563-29.43v-.006l10.53-.583v.002c23.824.914 40.499 10.815 49.563 29.43a69.963 69.963 0 016.695 28.62l4.11.094 4.111.1a77.157 77.157 0 00-7.38-32.122z"
        fill="#ffd037"
      />
      <path fill="#d6d6e3" d="M37.615 618.704h560.778v150.562H37.615z" />
      <path opacity={0.1} d="M37.615 628.838h560.778v19.544H37.615z" />
      <path fill="#d6d6e3" d="M0 616.533h636.004v19.544H0z" />
      <path
        d="M435.504 567.929s24 44 84 32 31 111 31 111-9.817 58.675-2.908 58.338"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
    </svg>
  );
};

SvgFirmware.propTypes = {
  color: PropTypes.string
};
SvgFirmware.defaultProps = {
  color: "primary"
};
export default SvgFirmware;
