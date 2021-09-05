import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgPredictiveAnalytics = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 798.681 647.009"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M126.832 0L74.02 103.009h10.661v84H30.953L0 247.381l383.53 196.636 126.833-247.381L126.832 0z"
      />
      <path fill="#3f3d56" d="M115.681 67.009h588v295h-588z" />
      <path
        fill={color}
        opacity={0.3}
        d="M198.181 173.009h434v1h-434zM198.681 198.009h434v1h-434zM198.681 248.009h434v1h-434zM198.681 270.009h434v1h-434zM198.681 223.009h434v1h-434z"
      />
      <ellipse cx={566.681} cy={630.009} rx={186} ry={17} fill="#3f3d56" />
      <path
        fill={color}
        d="M210.722 270.733l-1.38-1.448 64.601-61.573 56.946 40.962 46.051-51.056 20.193 17.164 54.929-32.958 61.014 41.009 95.761-54.469.988 1.738-96.837 55.082-60.986-40.991-55.071 33.042-19.807-16.836-45.949 50.944-57.054-41.038-63.399 60.428z"
      />
      <path
        d="M396.757 595.847c4.7 17.373 20.798 28.134 20.798 28.134s8.478-17.409 3.778-34.783-20.798-28.134-20.798-28.134-8.478 17.409-3.778 34.783z"
        fill="#3f3d56"
      />
      <path
        d="M403.663 592.113c12.897 12.554 14.472 31.853 14.472 31.853s-19.335-1.055-32.231-13.61-14.472-31.853-14.472-31.853 19.334 1.055 32.23 13.61z"
        fill={color}
      />
      <circle cx={765.181} cy={53.509} r={33.5} fill={color} opacity={0.4} />
      <circle cx={703.181} cy={69.509} r={23.5} fill={color} opacity={0.4} />
      <circle cx={674.181} cy={500.509} r={12.5} fill={color} opacity={0.4} />
      <circle cx={461.181} cy={565.509} r={9.5} fill={color} opacity={0.4} />
      <circle cx={429.181} cy={439.509} r={12.5} fill={color} opacity={0.4} />
      <circle cx={608.181} cy={173.509} r={13} fill={color} />
      <path
        d="M523.714 408.974l-11.02 1.225s-4.899 22.04 0 51.429 11.02 58.776 11.02 58.776 4.898 95.51 7.347 96.735 24.49 8.572 25.714 1.225S558 443.26 558 443.26l17.143 80.817s2.449 101.634 7.347 101.634 20.816-1.225 20.816-9.796 3.674-121.226 3.674-121.226-1.225-83.266-6.123-85.715-77.143 0-77.143 0z"
        fill="#2f2e41"
      />
      <path
        d="M533.51 613.466s-11.02-1.224-13.47 0-6.122 9.796 0 14.694 22.041 12.245 26.94 12.245a25.331 25.331 0 009.795-2.449l-2.449-20.816zM582.49 619.589l1.224 17.143s15.919 2.449 17.143 0 13.47-8.572 14.694-9.796 2.45-14.694-4.898-15.919-9.796 2.449-9.796 2.449z"
        fill="#2f2e41"
      />
      <path
        d="M479.632 306.116s-29.388 28.164-25.715 42.858 33.062 57.551 33.062 57.551 28.163 14.694 31.837 0-19.592-11.02-19.592-11.02l-18.368-44.082 20.817-29.388zM610.945 263.269s26.772-17.216 26.152-29.043-16.758-49.12-16.758-49.12-12.626-26.25-17.645-15.522 6.597 22.147 6.597 22.147l7.497 36.582-20.376 19.439z"
        fill="#ffb8b8"
      />
      <circle cx={544.53} cy={216.728} r={22.041} fill="#ffb8b8" />
      <path
        d="M533.51 230.197l3.673 23.266 26.94-4.898s-1.225-23.266-1.225-25.715-29.388 7.347-29.388 7.347z"
        fill="#ffb8b8"
      />
      <path
        d="M532.285 253.463s30.613-7.347 34.286-4.898 22.041 4.898 22.041 4.898L609.43 285.3l-6.123 40.408s-1.224 64.899 1.225 75.92 15.918 12.244-12.245 14.693-33.062-1.224-52.654 3.674-35.51-2.45-30.612-7.347 13.47-83.266 3.673-90.613-13.47-45.307-13.47-45.307 33.062-17.143 33.062-23.265z"
        fill="#d0cde1"
      />
      <path
        d="M584.939 257.136l3.673-3.673 7.347-7.347s23.878 10.408 22.654 14.081-9.184 25.103-9.184 25.103l-11.02 3.673zM513.918 279.177l-14.694-2.449s-11.02 12.245-14.694 17.143-11.02 17.143-11.02 17.143l25.714 18.368 19.592-20.817z"
        fill="#d0cde1"
      />
      <path
        d="M552.222 190.025l-.226-1.766a13.88 13.88 0 00-4.41.693 7.247 7.247 0 01.272-3.173 14.108 14.108 0 00-4.083 1.775l-.89-3.222-12.242 6.033c-4.394 2.166-9.027 4.545-11.539 8.75-2.8 4.69-2.313 10.716-.398 15.83s5.095 9.642 7.645 14.471a36.154 36.154 0 003.474 5.914c4.62 5.76 13.615 6.923 20.13 3.447a11.649 11.649 0 005.577-5.74 37.302 37.302 0 001.114-4.753c.806-3.292 1.742-10.086 4.415-12.169 1.177-.916 3.509 2.122 4.484.993 2.505-2.9 1.98-7.371.423-10.873a79.34 79.34 0 00-5.223-10.188c-.84-1.313-8.55-6.234-8.523-6.022z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M12.681 115.009h64v64h-64z" />
    </svg>
  );
};

SvgPredictiveAnalytics.propTypes = {
  color: PropTypes.string
};
SvgPredictiveAnalytics.defaultProps = {
  color: "primary"
};
export default SvgPredictiveAnalytics;
