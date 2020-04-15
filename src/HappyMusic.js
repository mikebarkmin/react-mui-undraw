import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHappyMusic = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 887.772 772.831"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#e6e6e6"
        d="M887.772 763.25l-635.509 9.581L0 728.121h393.817l493.955 35.129z"
      />
      <circle cx={731.822} cy={101.66} r={101.66} fill="#ff6584" />
      <path d="M179.84 733.435s1.487-31.159 31.972-27.537" fill="#3f3d56" />
      <circle cx={171.227} cy={688.526} r={15.257} fill={color} />
      <path
        fill="#3f3d56"
        d="M168.744 714.218h4.307v30.147h-4.307zM682.287 738.757s1.487-31.158 31.97-27.537"
      />
      <circle cx={673.673} cy={693.849} r={15.257} fill={color} />
      <path
        fill="#3f3d56"
        d="M671.191 719.541h4.307v30.147h-4.307zM755.738 744.08s1.487-31.159 31.97-27.537"
      />
      <circle cx={747.124} cy={699.171} r={15.257} fill={color} />
      <path
        fill="#3f3d56"
        d="M744.642 724.863h4.307v30.147h-4.307zM300.13 718.532s1.486-31.159 31.97-27.537"
      />
      <circle cx={291.516} cy={673.623} r={15.257} fill={color} />
      <path
        fill="#3f3d56"
        d="M289.033 699.315h4.307v30.147h-4.307zM73.39 723.854s1.487-31.158 31.971-27.537"
      />
      <circle cx={64.776} cy={678.946} r={15.257} fill={color} />
      <path fill="#3f3d56" d="M62.294 704.638h4.307v30.147h-4.307z" />
      <circle cx={442.277} cy={503.482} r={166.228} fill="#3f3d56" />
      <path
        d="M337.626 516.826a43.988 43.988 0 0167.519 0 48.89 48.89 0 10-67.52 0zM469.63 516.826a43.988 43.988 0 0167.52 0 48.89 48.89 0 10-67.52 0z"
        fill="#fff"
      />
      <circle cx={354.707} cy={464.814} r={16.818} fill="#3f3d56" />
      <circle cx={486.707} cy={464.814} r={16.818} fill="#3f3d56" />
      <circle cx={322.495} cy={545.039} r={19.556} fill="#ff6584" />
      <circle cx={547.392} cy={545.039} r={19.556} fill="#ff6584" />
      <path
        fill="#ff6584"
        d="M434.943 505.926l-14.667 63.558 24.445-24.445-9.778-39.113z"
      />
      <path
        fill="#3f3d56"
        d="M510.307 750.38l-16.652-13.976.388 13.976h-5.172l-.413-14.778-22.483 14.778h-9.412l31.727-20.854-1.229-43.789-.918-33.071 5.159-.142.931 33.213 1.228 43.75 24.887 20.893h-8.041zM432.076 750.38l-16.652-13.976.388 13.976h-5.158l-.414-14.778-22.483 14.778h-9.412l31.714-20.854-1.228-43.789-.918-33.071 5.171-.142.931 33.213 1.215 43.75 24.888 20.893h-8.042zM444.721 325.031c-4.56 0-8.584 3.543-11.275 8.985-2.37-8.183-7.352-13.874-13.17-13.874a8.847 8.847 0 00-1.174.197c-2.236-8.737-7.434-14.864-13.493-14.864-8.1 0-14.667 10.944-14.667 24.445s6.566 24.445 14.667 24.445a8.847 8.847 0 001.174-.197c2.236 8.737 7.434 14.865 13.493 14.865 4.561 0 8.585-3.543 11.275-8.985 2.371 8.183 7.353 13.874 13.17 13.874 8.1 0 14.668-10.945 14.668-24.446s-6.567-24.445-14.668-24.445z"
      />
      <path
        d="M286.25 566.475a48.89 48.89 0 01-48.89-48.89v-24.446a48.89 48.89 0 0148.89-48.89v122.226zM598.303 444.248a48.89 48.89 0 0148.891 48.891v24.445a48.89 48.89 0 01-48.89 48.891V444.248z"
        fill={color}
      />
      <path
        d="M623.923 496.98h-7.757c0-98.377-80.036-178.413-178.414-178.413-98.378 0-178.414 80.036-178.414 178.413h-7.757c0-102.655 83.516-186.17 186.17-186.17 102.656 0 186.172 83.516 186.172 186.17z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M131.69 367.997zM171.547 347.473l.002-.003-3.645-1.517-15.376-6.5-5.512-2.33-.423 1.067-7.404 18.694 20.837 8.82.11.099-1.405 3.31a5.862 5.862 0 00-.49.956c-.983 2.484.875 4.954 2.63 5.65s3.978-.754 4.962-3.238c.97-2.45.022-5.562-1.69-6.314l.002-.003-3.644-1.517-12.467-4.847 7.123-17.985-1.056-.418-7.126 17.992-1.541-.6 7.154-18.061.188.08 14.654 6.202.11.099-1.405 3.31a5.851 5.851 0 00-.49.956c-.983 2.484.875 4.954 2.63 5.65s3.978-.754 4.962-3.238c.97-2.45.022-5.562-1.69-6.314zM243.667 393.367c-7.564-4.324-6.05-13.815-6.05-13.815-.19-6.165-5.284-5.292-5.284-5.292l-1.854.423a5.63 5.63 0 00-2.757-.51l-2.82.475c6.422 1.508 5.894 6.88 5.894 6.88l.9 6.281-16.826-6.788 1.932-4.555a8.129 8.129 0 00.68-1.327c1.366-3.45-1.214-6.88-3.653-7.846-2.44-.966-5.524 1.047-6.89 4.496-1.348 3.403-.03 7.725 2.346 8.77l-.002.003 5.062 2.108.037-.12zm-8.544-11.036l.54 6.012a13.867 13.867 0 01-2.526-9.206 5.823 5.823 0 00-1.127-3.226 6.83 6.83 0 013.113 6.42zM115.319 304.456l.002-.004-5.062-2.108-21.154-8.223 5.34-4.75a6.744 6.744 0 019.216-1.51l-1.657-2.463s-3.115-4.124-7.475.24c0 0-5.395 7.952-13.869 5.925l28.94 12.249.152.138-1.95 4.598a8.124 8.124 0 00-.68 1.327c-1.366 3.45 1.214 6.88 3.653 7.846s5.524-1.047 6.89-4.496c1.348-3.402.03-7.725-2.346-8.77zM192.766 277.541l-1.95 4.599a8.132 8.132 0 00-.68 1.327c-1.367 3.45 1.213 6.88 3.652 7.846s5.525-1.047 6.89-4.496c1.348-3.403.031-7.725-2.346-8.77l.002-.003-5.061-2.108-17.315-6.731 9.893-24.98-1.466-.58-9.897 24.988-2.141-.832 9.935-25.087.262.111 20.353 8.614.152.138-1.95 4.598a8.137 8.137 0 00-.68 1.327c-1.367 3.45 1.214 6.881 3.653 7.847s5.524-1.047 6.89-4.496c1.347-3.403.03-7.725-2.346-8.77l.002-.004-5.062-2.107-20.685-8.745-.672-.284-7.655-3.236-10.87 27.448 28.94 12.249zm-18.81-38.35zM101.054 136.972l.003-.007-8.713-3.629-36.416-14.156 9.19-8.177s6.115-8.483 15.867-2.6l-2.852-4.239s-5.362-7.098-12.868.412c0 0-9.287 13.691-23.874 10.201l49.819 21.086.261.237-3.357 7.916a14.005 14.005 0 00-1.171 2.284c-2.352 5.938 2.09 11.845 6.289 13.508s9.509-1.803 11.86-7.74c2.32-5.858.053-13.298-4.038-15.096zM127.794 255.885c-18.085-10.34-14.466-33.03-14.466-33.03-.455-14.74-12.634-12.654-12.634-12.654l-4.433 1.012a13.458 13.458 0 00-6.59-1.22l-6.743 1.135c15.353 3.608 14.092 16.451 14.092 16.451l2.15 15.017-40.228-16.229 4.619-10.89a19.45 19.45 0 001.627-3.174c3.266-8.247-2.903-16.45-8.735-18.76s-13.208 2.504-16.474 10.75c-3.222 8.135-.073 18.47 5.61 20.967l-.005.01 12.102 5.04.09-.286zm-20.43-26.386l1.295 14.424c-7.596-10.083-6.043-22.062-6.043-22.062a13.925 13.925 0 00-2.694-7.711c8.725 5.221 7.443 15.35 7.443 15.35z"
      />
    </svg>
  );
};

SvgHappyMusic.propTypes = {
  color: PropTypes.string
};
SvgHappyMusic.defaultProps = {
  color: "primary"
};
const MemoSvgHappyMusic = React.memo(SvgHappyMusic);
export default MemoSvgHappyMusic;
