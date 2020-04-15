import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPlaylist = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 886.102 518.697"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M366.102 516.697h520v2h-520z" />
      <circle cx={621.221} cy={36.546} r={11.954} fill="#2f2e41" />
      <path
        d="M609.937 40.894a11.955 11.955 0 017.725-19.02 11.95 11.95 0 101.486 23.758 11.924 11.924 0 01-9.21-4.738z"
        fill="#2f2e41"
      />
      <circle cx={608.837} cy={78.843} r={35.114} fill="#2f2e41" />
      <path
        d="M576.119 66.052a35.107 35.107 0 0145.468-17.729c-.355-.177-.707-.357-1.07-.524a35.114 35.114 0 10-29.302 63.822c.363.167.729.317 1.094.47a35.108 35.108 0 01-16.19-46.039z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M652.693 228.404l-11.891 8.918-5.945-17.836 13.377-4.459 4.459 13.377z"
      />
      <path
        fill="#2f2e41"
        d="M646.004 255.901l23.781 123.364 31.213 92.151-50.535 10.404-49.048-184.303-1.487 176.872-63.911 1.486 14.863-105.528 7.432-118.905 87.692 4.459z"
      />
      <path
        d="M570.202 471.416v23.781l-1.486 13.377s-2.973 11.89 14.863 8.918 8.918-16.35 8.918-16.35l-5.945-11.89-2.973-19.322zM681.885 469.725l4.288 23.392 3.873 12.89s5.068 11.16-13.012 11.45-11.719-14.473-11.719-14.473l3.704-12.767-.56-19.542z"
        fill="#2f2e41"
      />
      <circle cx={608.846} cy={89.433} r={22.295} fill="#ffb8b8" />
      <path
        d="M595.47 102.81s2.972 23.781-8.918 29.726 22.294 14.864 22.294 14.864l20.809-23.781s-10.404-13.377-7.432-22.295z"
        fill="#ffb8b8"
      />
      <path
        d="M626.682 119.16s-2.972 14.863-20.808 14.863-13.377-7.432-13.377-7.432l-23.781 11.89 2.973 68.371-20.809 50.535s11.89-2.973 26.754 4.459 43.103 1.486 43.103 1.486 11.89-1.486 19.322 1.486 8.918-5.945 8.918-5.945l-8.918-43.103 13.377-47.562-2.973-41.617z"
        fill={color}
      />
      <path
        d="M541.962 267.791l-4.459 19.322s-16.35 28.24-4.459 29.726 14.863-29.726 14.863-29.726l7.432-19.322z"
        fill="#ffb8b8"
      />
      <path
        d="M638.573 131.05l7.312-5.985 4.578 1.526s7.432-1.486 14.863 10.404 40.13 52.021 35.672 56.48-40.13 32.7-40.13 32.7 1.486 4.458 0 5.945-10.405 4.458-10.405 2.972-10.094-20.426-10.094-20.426 7.122-9.3 8.608-7.814a59.258 59.258 0 005.945 4.46l11.89-11.891s-1.486-5.946 2.973-4.46 1.487-8.917 1.487-8.917l-26.754-25.268zM576.147 138.482l-4-1.96s-9.376 1.96-12.349 7.905-10.404 66.884-10.404 66.884l-5.945 40.13s-4.46 0-4.46 4.46-5.945 16.349-1.486 16.349 22.295 0 25.268-2.973 8.918-14.863 7.431-16.35-4.459-1.485-4.459-1.485l8.918-41.617z"
        fill={color}
      />
      <path
        fill="#2f2e41"
        d="M588.266 66.122v24.823h5.749l7.316-7.839-.98 7.839h25.411l-1.567-7.839 3.135 7.839h4.05V66.122h-43.114z"
      />
      <path
        d="M631.157 83.024h3.016a6.41 6.41 0 016.41 6.409v.7a6.41 6.41 0 01-6.41 6.41h-3.016v-13.52z"
        fill={color}
      />
      <path
        d="M630.413 80.791h2.728a2.729 2.729 0 012.729 2.729v12.526a2.729 2.729 0 01-2.729 2.729h-2.728V80.79zM586.536 96.542h-3.017a6.41 6.41 0 01-6.409-6.409v-.7a6.41 6.41 0 016.41-6.41h3.016v13.52z"
        fill={color}
      />
      <path
        d="M587.28 98.775h-2.728a2.729 2.729 0 01-2.729-2.729V83.52a2.729 2.729 0 012.729-2.729h2.728v17.984z"
        fill={color}
      />
      <path
        d="M634.382 83.965h-2c0-14.125-10.466-25.617-23.33-25.617-12.865 0-23.331 11.492-23.331 25.617h-2c0-15.228 11.363-27.617 25.331-27.617 13.967 0 25.33 12.39 25.33 27.617z"
        fill={color}
      />
      <path
        d="M535.808 281.867l-.176.112-3.054-4.814a3.3 3.3 0 00-4.554-1.019l-10.2 6.471a3.3 3.3 0 00-1.018 4.554l16.756 26.411a3.3 3.3 0 004.554 1.019l10.2-6.471a3.3 3.3 0 001.018-4.554l-11.528-18.17.176-.112z"
        fill="#3f3d56"
      />
      <path
        d="M531.997 277.56l16.732 26.373a2.464 2.464 0 01-.761 3.4l-10.249 6.503a2.464 2.464 0 01-3.4-.761l-16.732-26.372a2.464 2.464 0 01.76-3.401l1.244-.789a1.171 1.171 0 001.78.781l5.842-3.707a1.171 1.171 0 00.052-1.943l1.33-.844a2.464 2.464 0 013.402.76z"
        fill={color}
      />
      <path fill="#e6e6e6" d="M48.693 40.268h286.358V244.03H48.693z" />
      <path
        fill={color}
        d="M26.878 222.855h-2.067V21.869h280.366v2.083H26.878v198.903z"
      />
      <path fill={color} d="M2.068 200.986H0V0h280.366v2.083H2.068v198.903z" />
      <ellipse cx={191.872} cy={142.148} rx={59.959} ry={60.4} fill="#fff" />
      <path
        fill={color}
        d="M175.301 112.182v60.974l49.75-30.904-49.75-30.07z"
      />
    </svg>
  );
};

SvgPlaylist.propTypes = {
  color: PropTypes.string
};
SvgPlaylist.defaultProps = {
  color: "primary"
};
const MemoSvgPlaylist = React.memo(SvgPlaylist);
export default MemoSvgPlaylist;
