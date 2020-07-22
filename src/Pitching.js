import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPitching = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 920.297 567.136"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M910.386 372.27H269.797a9.922 9.922 0 01-9.91-9.911V9.91A9.922 9.922 0 01269.797 0h640.59a9.922 9.922 0 019.91 9.91V362.36a9.922 9.922 0 01-9.91 9.91z"
        fill="#e6e6e6"
      />
      <path
        d="M896.872 358.755h-613.56a9.922 9.922 0 01-9.91-9.91V23.424a9.922 9.922 0 019.91-9.91h613.56a9.922 9.922 0 019.91 9.91v325.42a9.922 9.922 0 01-9.91 9.91z"
        fill="#fff"
      />
      <path
        d="M455 214.304H339.57a4.815 4.815 0 01-4.81-4.81V89.277a4.815 4.815 0 014.81-4.81H455a4.815 4.815 0 014.81 4.81v120.217a4.815 4.815 0 01-4.81 4.81zM339.57 86.39a2.889 2.889 0 00-2.886 2.886v120.217a2.889 2.889 0 002.886 2.886H455a2.889 2.889 0 002.886-2.886V89.277A2.889 2.889 0 00455 86.391zM647.808 214.304H532.376a4.815 4.815 0 01-4.81-4.81V89.277a4.815 4.815 0 014.81-4.81h115.432a4.815 4.815 0 014.81 4.81v120.217a4.815 4.815 0 01-4.81 4.81zM532.376 86.39a2.889 2.889 0 00-2.886 2.886v120.217a2.889 2.889 0 002.886 2.886h115.432a2.889 2.889 0 002.885-2.886V89.277a2.889 2.889 0 00-2.885-2.886zM840.615 214.304H725.183a4.815 4.815 0 01-4.81-4.81V89.277a4.815 4.815 0 014.81-4.81h115.432a4.815 4.815 0 014.81 4.81v120.217a4.815 4.815 0 01-4.81 4.81zM725.183 86.39a2.889 2.889 0 00-2.885 2.886v120.217a2.889 2.889 0 002.885 2.886h115.432a2.889 2.889 0 002.886-2.886V89.277a2.889 2.889 0 00-2.886-2.886z"
        fill="#3f3d56"
      />
      <path
        d="M374.994 287.802a3.265 3.265 0 100-6.53h-29.299a3.265 3.265 0 000 6.53zM448.874 268.564a3.265 3.265 0 100-6.531H345.695a3.265 3.265 0 000 6.53zM567.802 287.802a3.265 3.265 0 000-6.53h-29.3a3.265 3.265 0 000 6.53zM641.681 268.564a3.265 3.265 0 000-6.531H538.502a3.265 3.265 0 000 6.53zM760.61 287.802a3.265 3.265 0 000-6.53h-29.3a3.265 3.265 0 100 6.53zM834.489 268.564a3.265 3.265 0 000-6.531h-103.18a3.265 3.265 0 100 6.53z"
        fill="#e6e6e6"
      />
      <path
        d="M448.874 249.643a3.265 3.265 0 100-6.53H345.695a3.265 3.265 0 000 6.53zM641.681 249.643a3.265 3.265 0 000-6.53H538.502a3.265 3.265 0 000 6.53zM834.489 249.643a3.265 3.265 0 000-6.53h-103.18a3.265 3.265 0 100 6.53z"
        fill={color}
      />
      <path
        d="M430.404 191.006a3.265 3.265 0 000-6.531h-66.24a3.265 3.265 0 100 6.53zM430.404 171.767a3.265 3.265 0 000-6.53h-66.24a3.265 3.265 0 100 6.53z"
        fill="#e6e6e6"
      />
      <circle cx={397.284} cy={128.488} r={20.722} fill={color} />
      <path
        d="M623.211 191.006a3.265 3.265 0 000-6.531h-66.239a3.265 3.265 0 000 6.53zM623.211 171.767a3.265 3.265 0 000-6.53h-66.239a3.265 3.265 0 000 6.53z"
        fill="#e6e6e6"
      />
      <circle cx={590.092} cy={128.488} r={20.722} fill={color} />
      <path
        d="M816.019 191.006a3.265 3.265 0 100-6.531h-66.24a3.265 3.265 0 000 6.53zM816.019 171.767a3.265 3.265 0 100-6.53h-66.24a3.265 3.265 0 000 6.53z"
        fill="#e6e6e6"
      />
      <circle cx={782.899} cy={128.488} r={20.722} fill={color} />
      <path
        fill="#ffb9b9"
        d="M153.95 481.518l11.102 6.055-7.065 23.213-11.101 1.009-6.056-13.12 13.12-17.157zM119.636 527.943v11.101l-17.157-1.009.239-9.143 16.918-.949z"
      />
      <path
        fill="#2f2e41"
        d="M157.987 348.297l-6.055 75.694-19.176 111.016-30.277-4.037 10.092-87.804-4.037-80.739 49.453-14.13z"
      />
      <path
        d="M77.248 291.78l72.665 1.009 8.074 55.508-49.453 23.213-12.11 44.407 61.563 65.6-24.222 30.278S99.451 465.37 74.22 439.129 61.1 333.16 61.1 333.16z"
        fill="#2f2e41"
      />
      <circle cx={120.645} cy={126.263} r={22.203} fill="#ffb9b9" />
      <path
        d="M128.719 141.402v22.204l-15.139 24.221s-23.212-17.157-18.166-21.194 6.055-35.323 6.055-35.323z"
        fill="#ffb9b9"
      />
      <path
        fill="#fff"
        d="M128.719 159.569l15.139 18.166-6.056 126.155-47.434-1.009-8.074-110.007 10.092-28.259 6.923-9.419 12.253 18.502 17.157-14.129z"
      />
      <path
        d="M152.94 225.17l11.103 42.388-11.102 42.388 18.166 24.222 16.148-76.703s-12.11-62.573-13.12-69.638-3.028-8.074-3.028-8.074l-8.074 1.01zM72.202 241.317l-7.065 13.121-2.019 22.203 4.037 25.231-14.129 23.213-14.129-63.583 15.138-81.749h6.056l12.111 61.564zM157.987 480.508s14.13 4.037 19.176 5.046-3.028 20.185-3.028 20.185-5.046 26.24-6.055 31.287-8.074 22.203-17.158 24.222-3.027-35.324-3.027-35.324-4.037-12.11-4.037-16.148 6.055-2.018 6.055-2.018c16.148-2.019 8.074-27.25 8.074-27.25zM124.682 558.22c-1.01 6.055 1.01 6.055-15.139 8.074s-12.11-11.102-12.11-11.102a84.8 84.8 0 014.036-18.166c3.028-8.074 19.176 2.018 19.176 2.018s5.046 13.12 4.037 19.176zM101.443 132.015l-.526 8.975s-6.512-14.727-7.522-29.865 16.148-18.167 26.24-19.176 27.25 6.056 27.25 14.13-18.166 6.055-25.23 4.037-10.093 15.138-10.093 15.138l-4.037 1.01z"
        fill="#2f2e41"
      />
      <path
        fill="#fff"
        d="M134.676 166.716l-5.957-7.147-17.157 14.129 17.157 12.111 5.957-19.093zM92.386 164.615l7.065-9.083 12.111 18.166L96.423 184.8l-4.037-20.185z"
      />
      <path
        d="M155.969 239.299l-4.037 38.351 8.074 23.213 5.046 22.203s0 21.194-20.185 22.203-37.342-63.582-37.342-63.582-3.028 14.13-5.046 22.203-36.333 40.37-36.333 40.37-8.074-1.009-15.139-17.157 14.13-31.286 14.13-31.286l6.055-21.195-2.018-26.24-14.13-68.629 41.884-21.698-4.542 58.031 15.139 45.416 22.708-100.42 7.57 5.551 32.295 13.12z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M257.738 567.136H0v-2.106h258.12l-.382 2.106z" />
    </svg>
  );
};

SvgPitching.propTypes = {
  color: PropTypes.string
};
SvgPitching.defaultProps = {
  color: "primary"
};
export default SvgPitching;
