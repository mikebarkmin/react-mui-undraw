import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCircuitBoard = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 476.815"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M552.642 164.076a75.14 75.14 0 00-147.426-15.843c-.91-.032-1.82-.069-2.738-.069a75.158 75.158 0 00-72.096 53.97 53.104 53.104 0 00-63.012 15.673h234.388c28.796 0 52.111-23.851 50.937-52.623q-.023-.553-.053-1.108zM.096 70.892A75.14 75.14 0 01147.522 55.05c.91-.032 1.82-.069 2.738-.069a75.158 75.158 0 0172.095 53.969 53.104 53.104 0 0163.012 15.674H50.979C22.183 124.624-1.13 100.773.042 72q.023-.554.054-1.109z"
        fill="#e6e6e6"
      />
      <path
        fill={color}
        d="M336.372 145.025H151.746L59.433 304.916l92.313 159.891h184.626l92.313-159.891-92.313-159.891z"
      />
      <path
        d="M167.2 438.04h153.718l76.859-133.124-76.86-133.124H167.2L90.341 304.916z"
        fill="#fff"
      />
      <path fill="#3f3d56" d="M0 463.686h888v2.241H0z" />
      <path
        fill="#a0616a"
        d="M697.681 58.277l8.023 22.731-13.372 26.743-22.731-38.777 28.08-10.697z"
      />
      <path
        d="M765.207 333.06c-4.4 6.165-38.323 41.84-61.014 65.534a20123.845 20123.845 0 01-15.417 16.06c-3.236 3.356-5.135 5.321-5.135 5.321l-10.256-21.448-4.453-9.306.067-.08 2.795-3.57 26.65-34.098 27.986-35.795-22.732-45.463 28.08-4.012 18.667 1.097 4.065.24s17.383 56.16 10.697 65.52z"
        fill="#2f2e41"
      />
      <path
        d="M686.315 442.707c-1.738 1.738-4.76-.481-8.036-4.279-6.78-7.862-14.695-22.464-14.695-22.464l-9.36-20.057c1.002-5.99 10.175-6.753 14.775-6.766 1.565 0 2.608.08 2.608.08l.775 1.15 16.394 24.282s2.888 22.705-2.46 28.054z"
        fill="#2f2e41"
      />
      <path
        d="M688.776 414.653s2.888 22.705-2.46 28.054c-1.74 1.738-4.761-.481-8.037-4.279l-4.894-39.9-1.003-8.157-.588-4.8 26.65-34.098 5.749 47.121a20201.877 20201.877 0 01-15.417 16.06zM707.295 277.409l-3.597-7.194 28.08-4.012 18.667 1.097.053.24-43.203 9.869z"
        opacity={0.2}
      />
      <path
        fill="#2f2e41"
        d="M671.607 208.706h-9.361l2.675 88.252 18.72 152.435h30.754l-13.371-109.647 6.686-61.508 46.8-10.698-13.372-61.508-69.531 2.674z"
      />
      <path
        d="M686.315 445.381s-2.674 18.72-1.337 20.057 2.674 2.675 2.674 5.349 16.046 9.36 24.069 4.011 2.674-13.371 2.674-13.371l-8.023-16.046z"
        fill="#2f2e41"
      />
      <circle cx={680.967} cy={52.26} r={22.732} fill="#a0616a" />
      <path
        fill="#e6e6e6"
        d="M694.338 88.363l-17.489-7.025-10.591 131.379 73.543 5.349-25.406-135.052-11.365-10.671-8.692 16.02z"
      />
      <path
        d="M674.522 77.37L660.91 88.363l-25.405 13.371 9.36 84.24 1.337 48.138s-17.383 42.789-4.012 53.486 28.08 6.685 25.406-16.046-8.023-38.777 17.383-62.846 3.157-136.98-10.456-131.336zM701.648 69.516l16.759 10.824 22.731 12.034 17.383 192.55-38.777 12.034S698.26 74.738 701.648 69.516z"
        fill="#2f2e41"
      />
      <path
        d="M745.15 228.763s-20.058 30.755-5.349 30.755 18.72-25.406 18.72-25.406zM662.246 228.763s20.058 30.755 5.35 30.755-18.721-25.406-18.721-25.406z"
        fill="#a0616a"
      />
      <path
        d="M682.304 18.83l-6.686-4.01 1.337 2.674-5.348-1.337 1.337 1.337-6.686-1.337 2.674 2.674s-10.697 0-12.034 10.697l-6.686 1.337 2.674 4.012v4.011l2.675 2.674v4.012l2.674 6.686 2.674-9.36s12.035 2.674 17.383-8.023c0 0 1.337 4.011 8.023 2.674l10.697 18.72s1.337-8.299 6.018-9.498 2.005-11.896 2.005-11.896-4.011-4.012-4.011-6.686-4.012-5.349-6.686-5.349-9.36-5.348-9.36-5.348zM646.2 103.071l-6.224-3.691-4.472 2.354s-5.35 2.674-6.686 12.034-14.709 66.858-14.709 66.858-1.337 9.36 5.349 25.406 32.091 44.126 32.091 44.126l24.069-20.058-36.103-44.126 9.36-36.103zM730.441 92.374h10.697l17.383 65.52 5.349 81.566-25.406-9.36v-58.834l-8.023-78.892z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M184.701 171.594h2v82.555h-2z" />
      <circle cx={185.701} cy={258.894} r={5.693} fill={color} />
      <path fill="#3f3d56" d="M227.402 171.594h2v82.555h-2z" />
      <circle cx={228.402} cy={258.894} r={5.693} fill="#3f3d56" />
      <path fill="#3f3d56" d="M302.366 171.594h2v82.555h-2z" />
      <circle cx={303.366} cy={258.894} r={5.693} fill="#3f3d56" />
      <circle cx={272.052} cy={340.5} r={5.693} fill="#3f3d56" />
      <circle cx={156.285} cy={288.31} r={5.693} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M273.052 335.755h-2v-99.479h-42.65v-2h44.65v101.479z"
      />
      <circle cx={198.986} cy={376.558} r={5.693} fill={color} />
      <path
        fill="#3f3d56"
        d="M199.986 371.814h-2v-99.48h-42.65v-2h44.65v101.48z"
      />
      <circle cx={330.884} cy={331.96} r={5.693} fill={color} />
      <path
        fill="#3f3d56"
        d="M331.884 327.215h-2v-99.479h-27.467v-2h29.467v101.479zM157.285 282.616h-2v-49.461h30.416v2h-28.416v47.461z"
      />
      <circle cx={228.876} cy={398.858} r={5.693} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M229.876 393.164h-2v-47.461H199.46v-2h30.416v49.461z"
      />
      <circle cx={301.468} cy={356.631} r={5.693} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M302.468 350.938h-2v-49.461h30.416v2h-28.416v47.461z"
      />
    </svg>
  );
};

SvgCircuitBoard.propTypes = {
  color: PropTypes.string
};
SvgCircuitBoard.defaultProps = {
  color: "primary"
};
export default SvgCircuitBoard;
