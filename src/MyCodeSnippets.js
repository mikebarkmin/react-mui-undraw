import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMyCodeSnippets = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 708.735 770.409"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#2f2e41"
        d="M648.308 262.418l-68.625 15.704-28.996-54.686 58.68-22.91 38.941 61.892z"
      />
      <path
        d="M483.605 334.874l-9.499-18.545a11.11 11.11 0 016.469-15.636 11.11 11.11 0 0114.424 9.035l2.585 18.525 24.278 38.257v-22.807l27.22 2.943-3.81 40.645a15.343 15.343 0 01-5.635 10.504 15.343 15.343 0 01-23.003-4.395z"
        fill="#a0616a"
      />
      <path
        d="M689.601 703.46l-21.335 1.472-13.978-131.69-80.927-79.456-8.093 211.146H540.99c-14.807-129.643-50.318-267.626-4.414-300.902l12.507-21.335 75.777 13.978 2.943 29.428 13.605 34.184 51.255 86.111a32.296 32.296 0 014.496 18.275z"
        fill="#2f2e41"
      />
      <path
        d="M554.667 761.58a17.484 17.484 0 01-17.436-18.775l3.023-40.816c8.957-9.178 17.266-7.978 25.014 2.207l6.607 36.812a17.484 17.484 0 01-17.208 20.572zM697.457 770.409a11.269 11.269 0 01-8.384-3.74l-40.594-45.2a12.631 12.631 0 011.474-18.277l16.106-12.974 23.542 10.3 18.535 55.025a11.269 11.269 0 01-10.679 14.866z"
        fill={color}
      />
      <circle cx={592.254} cy={232.065} r={26.766} fill="#a0616a" />
      <path
        d="M607.57 346.278H573.73l-7.725-67.317c8.237-11.61 10.915-23.74 7.725-36.417h33.842c-5.218 11.385-4.322 22.784 9.196 34.21z"
        fill="#a0616a"
      />
      <path
        d="M623.388 398.145c-26.511 9.728-51.367 6.721-74.305-11.036-.554-21.26-5.747-47.64-13.016-76.308a20.182 20.182 0 019.662-22.55l21.746-12.232 24.278 57.384 22.071-58.856 14.677 3.261a16.7 16.7 0 0112.995 14.86c3.847 43.651 2.697 83.009-18.108 105.477z"
        fill="#e6e6e6"
      />
      <path
        d="M552.026 361.36c-15.354 1.485-26.382-4.857-33.843-17.657l5.15-23.581a36.085 36.085 0 0125.22-34.41l2.737-.865z"
        fill="#e6e6e6"
      />
      <path
        d="M662.38 466.565l3.638 16.37a11.77 11.77 0 01-13.235 14.193 11.77 11.77 0 01-9.745-14.185l3.972-17.929-11.85-114.69 23.542-10.3z"
        fill="#a0616a"
      />
      <path
        d="M631.481 355.474c15.354 1.486 26.382-4.857 33.842-17.657l-5.15-23.58a36.085 36.085 0 00-25.218-34.411l-2.738-.865z"
        fill="#e6e6e6"
      />
      <path
        d="M606.854 192.094s15.202 2.86 18.718 21.82a34.807 34.807 0 01.298 9.681c-.351 3.65.158 11.358 8.082 20.434a198.701 198.701 0 0114.43 18.531l-15.886 4.229-7.097-26.319a134.635 134.635 0 00-15.732-36.159l-.146-.234s-5.276 14.097-19.417 16.03l4.36-5.74s-16.531 9.555-25.897 12.475a6.154 6.154 0 00-1.985 10.7l.203.157c6.888 5.232 20.942 17.716 15.39 29.793s.922 14.28.922 14.28l-11.939-4.543-5.464-2.34.552 4.04-26.676.56s-7.209-.044 5.596-19.286c0 0 3.09-7.215.553-12.727a29.279 29.279 0 01-2.957-13.416c.806-19.4 8.979-58.865 64.092-41.966z"
        fill="#2f2e41"
      />
      <path
        d="M503.494 262.42l-3.792-1.27 34.796-103.872a63.402 63.402 0 00-39.979-80.257L274.452 3.3a63.402 63.402 0 00-80.258 39.979L3.301 613.13a63.402 63.402 0 0039.979 80.258l220.067 73.72a63.402 63.402 0 0080.258-39.98l131.329-392.04 3.792 1.27z"
        fill="#3f3d56"
      />
      <path
        d="M491.705 93.474l-28.726-9.623a22.495 22.495 0 01-29.592 22.77L307.313 64.388a22.495 22.495 0 01-9.904-36.001l-26.83-8.988a47.348 47.348 0 00-59.936 29.856L20.029 618.27a47.348 47.348 0 0029.856 59.935l221.128 74.075a47.348 47.348 0 0059.935-29.856L521.56 153.409a47.348 47.348 0 00-29.856-59.935z"
        fill="#fff"
      />
      <path
        d="M436.405 284.372L200.42 205.32a4.614 4.614 0 01-2.907-5.834l19.61-58.538a4.614 4.614 0 015.834-2.906l235.986 79.052a4.614 4.614 0 012.906 5.834l-19.61 58.538a4.614 4.614 0 01-5.834 2.906zM222.371 139.79a2.768 2.768 0 00-3.5 1.743l-19.61 58.538a2.768 2.768 0 001.744 3.5l235.986 79.053a2.768 2.768 0 003.5-1.743l19.61-58.538a2.768 2.768 0 00-1.744-3.5zM358.817 515.987L122.83 436.935a4.614 4.614 0 01-2.906-5.834l36.298-108.357a4.614 4.614 0 015.834-2.906l235.986 79.052a4.614 4.614 0 012.906 5.834l-36.298 108.357a4.614 4.614 0 01-5.834 2.906zM161.472 321.586a2.768 2.768 0 00-3.5 1.743l-36.299 108.357a2.768 2.768 0 001.744 3.5l235.985 79.053a2.768 2.768 0 003.5-1.743l36.299-108.357a2.768 2.768 0 00-1.744-3.5z"
        fill="#3f3d56"
      />
      <path
        d="M404.207 374.685L299.325 339.55a4.614 4.614 0 01-2.907-5.834l19.61-58.538a4.614 4.614 0 015.834-2.906l104.883 35.135a4.614 4.614 0 012.906 5.834l-19.61 58.538a4.614 4.614 0 01-5.834 2.906zm-82.93-100.665a2.768 2.768 0 00-3.501 1.744l-19.61 58.538a2.768 2.768 0 001.744 3.5l104.883 35.135a2.768 2.768 0 003.5-1.744l19.61-58.538a2.768 2.768 0 00-1.744-3.5zM180.282 613.66L75.4 578.526a4.614 4.614 0 01-2.907-5.834l36.592-109.231a4.614 4.614 0 015.834-2.906L219.8 495.689a4.614 4.614 0 012.907 5.834l-36.592 109.231a4.614 4.614 0 01-5.834 2.906zm-65.949-151.357a2.768 2.768 0 00-3.5 1.743L74.242 573.277a2.768 2.768 0 001.743 3.5l104.883 35.135a2.768 2.768 0 003.5-1.743l36.592-109.231a2.768 2.768 0 00-1.744-3.5zM309.637 656.993l-104.883-35.135a4.614 4.614 0 01-2.906-5.834l36.591-109.23a4.614 4.614 0 015.834-2.907l104.883 35.135a4.614 4.614 0 012.906 5.834l-36.59 109.23a4.614 4.614 0 01-5.835 2.907zm-65.95-151.358a2.768 2.768 0 00-3.5 1.744l-36.59 109.23a2.768 2.768 0 001.743 3.501l104.883 35.135a2.768 2.768 0 003.5-1.744l36.591-109.231a2.768 2.768 0 00-1.743-3.5zM229.206 371.825a3.129 3.129 0 10-2.023 5.922l.036.012 139.868 46.854a3.129 3.129 0 102.02-5.923l-.032-.01zM223.243 389.626a3.129 3.129 0 10-2.023 5.922l.035.012 60.186 20.162a3.129 3.129 0 001.988-5.934zM158.943 399.74c-2.257-.757-4.54-.04-5.088 1.595s.843 3.582 3.1 4.338l192.975 64.645c2.257.756 4.54.04 5.088-1.596s-.843-3.582-3.1-4.338zM152.98 417.54c-2.258-.755-4.54-.04-5.088 1.597s.843 3.582 3.1 4.338l192.975 64.644c2.257.756 4.54.04 5.087-1.595s-.842-3.582-3.1-4.338zM294.196 183.623a3.129 3.129 0 00-2 5.93l.013.003 139.868 46.855a3.129 3.129 0 001.988-5.934zM288.233 201.424a3.129 3.129 0 10-2 5.93l.012.004 60.186 20.161a3.129 3.129 0 001.988-5.933zM274.756 331.332l-98.389-32.96 36.589-32.348a4.986 4.986 0 018.19 2.743l4.152 20.446 26.577-23.496a6.243 6.243 0 0110.253 3.435zm-94.776-33.693l92.334 30.93-11.993-59.05a4.399 4.399 0 00-7.225-2.421l-28.97 25.611-4.787-23.575a3.142 3.142 0 00-5.162-1.729z"
        fill="#e6e6e6"
      />
      <path
        d="M400.615 373.493l-98.39-32.96 36.59-32.348a4.986 4.986 0 018.19 2.744l4.151 20.445 26.577-23.496a6.243 6.243 0 0110.254 3.435zM305.839 339.8l92.334 30.93-11.993-59.05a4.399 4.399 0 00-7.225-2.42l-28.97 25.61-4.788-23.574a3.142 3.142 0 00-5.16-1.73zM274.852 331.352L169.97 296.218a4.614 4.614 0 01-2.906-5.834l19.61-58.538a4.614 4.614 0 015.833-2.906l104.883 35.134a4.614 4.614 0 012.906 5.834l-19.61 58.538a4.614 4.614 0 01-5.834 2.906zm-82.93-100.664a2.768 2.768 0 00-3.5 1.743l-19.61 58.538a2.768 2.768 0 001.743 3.5l104.883 35.135a2.768 2.768 0 003.5-1.744l19.61-58.537a2.768 2.768 0 00-1.744-3.5zM129.721 490.566a3.129 3.129 0 00-2.018 5.924l.03.01 60.186 20.162a3.129 3.129 0 101.988-5.934zM123.866 508.047a3.129 3.129 0 00-1.988 5.934l60.186 20.161a3.129 3.129 0 001.987-5.934zM135.387 573.568a19.695 19.695 0 1124.931-12.42 19.718 19.718 0 01-24.931 12.42zm11.926-35.603a17.852 17.852 0 1011.257 22.598 17.873 17.873 0 00-11.257-22.598zM294.834 626.98a3.129 3.129 0 102.019-5.923l-.03-.01-60.187-20.162a3.129 3.129 0 00-2.018 5.924l.03.01zM300.69 609.5a3.129 3.129 0 101.988-5.933l-60.186-20.162a3.129 3.129 0 00-2.018 5.924l.03.01zM289.169 543.98a19.695 19.695 0 11-24.932 12.419 19.718 19.718 0 0124.932-12.42zm-11.927 35.602a17.852 17.852 0 10-11.256-22.598 17.873 17.873 0 0011.256 22.598z"
        fill="#e6e6e6"
      />
      <path
        data-name="Path 37"
        d="M245.441 163.249l-21.245 11.533 11.8 21.099 4.793-2.642-8.877-16.112 16.245-8.951z"
        fill={color}
      />
      <path
        data-name="Path 38"
        d="M258.98 167.167l11.798 21.1-21.245 11.532-2.641-4.793 16.112-8.878-8.953-16.246z"
        fill={color}
      />
      <path
        data-name="Path 37"
        d="M184.441 352.249l-21.245 11.533 11.8 21.099 4.793-2.642-8.877-16.112 16.245-8.951z"
        fill={color}
      />
      <path
        data-name="Path 38"
        d="M197.98 356.167l11.798 21.1-21.245 11.532-2.641-4.793 16.112-8.878-8.953-16.246z"
        fill={color}
      />
    </svg>
  );
};

SvgMyCodeSnippets.propTypes = {
  color: PropTypes.string
};
SvgMyCodeSnippets.defaultProps = {
  color: "primary"
};
export default SvgMyCodeSnippets;
