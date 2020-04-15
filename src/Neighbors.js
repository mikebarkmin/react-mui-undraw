import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNeighbors = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 423.679"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#e6e6e6"
        d="M442.753 354.387l-4.352 4.461-.421-8.848-.521 13.064-4.01-4.112 3.974 5.014L436.107 397h4.109l-1.769-37.181 4.306-5.432z"
      />
      <path
        fill="#e6e6e6"
        d="M450.852 365.387l-4.352 4.461-.421-8.848-.521 13.064-4.011-4.112 3.975 5.014L444.206 408h4.108l-1.768-37.181 4.306-5.432zM463 359.387l-4.352 4.461-.421-8.848-.521 13.064-4.011-4.112 3.975 5.014L456.354 402h4.108l-1.768-37.181 4.306-5.432zM433.305 364.387l-4.353 4.461-.421-8.848-.52 13.064-4.011-4.112 3.975 5.014L426.658 407h4.109l-1.769-37.181 4.307-5.432zM13 0h328v420H13z"
      />
      <path fill="#fff" d="M34.772 25.326h283.775v179.663H34.772z" />
      <path fill="#fff" d="M34.77 197.62h283.78v192.56H34.77z" />
      <path
        fill="#3f3d56"
        d="M169.289 24.404h14.742v180.584h-14.742zM303.805 24.404h14.742v180.584h-14.742z"
      />
      <path fill="#3f3d56" d="M34.772 190.247h283.775v14.742H34.772z" />
      <path
        fill="#fff"
        d="M74.876 122.067l-25.362 17.048v14.104l38.421-31.152H74.876z"
      />
      <path
        fill="#e6e6e6"
        d="M116.663 122.067l-67.149 52.567v12.015l87.52-64.582h-20.371z"
      />
      <path fill="#3f3d56" d="M34.772 24.404h14.742v180.584H34.772z" />
      <path
        fill="#e6e6e6"
        d="M277.543 39.146l-56.659 71.865 17.506 1.842 48.831-76.471-9.678 2.764z"
      />
      <path
        fill="#3f3d56"
        d="M34.772 24.404h283.775v14.742H34.772zM34.772 107.326h283.775v14.742H34.772z"
      />
      <path fill="#e6e6e6" d="M550 0h328v420H550z" />
      <path fill="#fff" d="M571.749 24.798h283.775v179.663H571.749z" />
      <path fill="#fff" d="M571.75 197.09h283.77v192.56H571.75z" />
      <path
        fill="#3f3d56"
        d="M706.265 23.876h14.742V204.46h-14.742zM840.782 23.876h14.742V204.46h-14.742z"
      />
      <path fill="#3f3d56" d="M571.749 189.719h283.775v14.742H571.749z" />
      <path
        fill="#e6e6e6"
        d="M611.853 121.539l-25.363 17.049v14.103l38.421-31.152h-13.058zM653.64 121.539l-67.15 52.567v12.015l87.521-64.582H653.64z"
      />
      <path fill="#3f3d56" d="M571.749 23.876h14.742V204.46h-14.742z" />
      <path
        fill="#e6e6e6"
        d="M814.52 38.618l-56.659 71.865 17.505 1.842 48.832-76.471-9.678 2.764z"
      />
      <path
        fill="#3f3d56"
        d="M571.749 23.876h283.775v14.742H571.749zM571.749 106.798h283.775v14.742H571.749z"
      />
      <path
        d="M707.36 240.744s1.08 3.598-5.038 6.837-7.916 15.473-.72 19.071 9.356 8.276 5.758 11.515-10.075 11.875-1.44 14.034 9.716 6.477 7.197 8.276 5.758-3.239 5.758-3.239 1.44 8.637 8.996 6.478 28.787-43.181 17.992-48.938-38.503-14.034-38.503-14.034z"
        fill="#2f2e41"
      />
      <path
        d="M697.54 322.81l-34.527 24.262s-26.128-27.061-26.128-42.925-13.997-45.724-20.53-33.593 7.466 41.059 7.466 41.059L649.95 373.2s14.93 2.799 23.33-3.733 31.726-19.596 31.726-19.596z"
        fill="#ffb9b9"
      />
      <circle cx={731.6} cy={256.09} r={26.128} fill="#ffb9b9" />
      <path
        d="M718.07 274.286s9.33 24.262 5.598 29.861-8.398 5.6-12.13 7.466c-1.867.933-21.463 8.398-21.463 13.997a22.269 22.269 0 002.8 10.264l2.799 15.864 23.329 14.93 30.794-3.732 23.328-13.064s3.733-34.527-6.532-40.126-22.395-18.663-21.462-23.329 1.866-15.863 1.866-15.863z"
        fill="#ffb9b9"
      />
      <path
        d="M767.53 345.21v.03l-.84 8.24-1.07 10.57L764.4 376l-1.38 13.65H695.4c-.91-7.46-2.52-15.37-5.33-20.18a15.483 15.483 0 01-2.24-9.57c.63-6.25 5.04-10.61 5.04-11.89 0-1.4-7.86-9.61-11.79-13.64-1.32-1.35-2.2-2.23-2.2-2.23l12.13-9.33.17.29 1.7 2.98 5.59 9.79-1.86 7.47s2.89.5 6.91 1.14c6.95 1.09 17.29 2.59 22.01 2.59 4.38 0 9.73 2.25 14.15 3.54.14.04.27.08.4.12 2.78.78 5.16 1.14 6.66.24a2.323 2.323 0 00.26-.17 11.02 11.02 0 012.52-1.27h.01a73.328 73.328 0 019.9-2.74c3.78-.83 7.1-1.41 7.91-1.55a.014.014 0 01.02 0l.17-.03z"
        fill={color}
      />
      <path
        d="M770.44 343.79c-.07.5-.13 1.01-.19 1.51-.29 2.2-.53 4.4-.74 6.6q-.87 8.76-1.05 17.57a36.689 36.689 0 01-.69 6.53 101.634 101.634 0 01-3.74 13.65h-26.42c.7-5.2 1.64-13.2 2.1-21.58v-.01c.07-1.3.12-2.61.17-3.92a125.103 125.103 0 00-.18-13.21c-.01-.11-.01-.22-.02-.32-.05-.57-.1-1.12-.15-1.67-1.86-18.66 9.33-39.19 9.33-39.19 3.79 0 7.49 2.09 10.79 4.97a33.185 33.185 0 0110.79 29.07z"
        fill="#ffb9b9"
      />
      <path
        d="M768.46 369.47a36.689 36.689 0 01-.69 6.53 101.634 101.634 0 01-3.74 13.65h-26.62a189.552 189.552 0 00.75-25.3c-.05-1.24-.12-2.5-.22-3.75v-.02q-.105-1.62-.27-3.24a10.216 10.216 0 01.2-3.74v-.02a4.401 4.401 0 011.45-2.38 2.6 2.6 0 01.38-.27 1.974 1.974 0 01.38-.2 2.588 2.588 0 01.38-.17 7.037 7.037 0 013.24-.28 14.93 14.93 0 013.04.69 43.505 43.505 0 0112.19 6.86 44.32 44.32 0 016.69 6.22c1.76 2.08 2.84 4 2.84 5.42z"
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M736.732 355.47l2.975 12.598L756.33 376h13.997l6.532-29.86s-11.533-2.44-17.431.646-19.748 3.824-19.748 3.824z"
        fill={color}
      />
      <path
        d="M731.814 229.866s1.196 3.986-5.581 7.574-8.77 17.14-.797 21.127 10.364 9.168 6.378 12.756-11.162 13.155-1.595 15.547 10.763 7.175 7.973 9.168 6.378-3.588 6.378-3.588 1.594 9.568 9.966 7.176 16.723-45.869 7.392-57.067c-8.677-10.412-30.114-12.693-30.114-12.693z"
        fill="#2f2e41"
      />
      <path
        d="M729.267 225.763c.002-5.84 36.3.57 43.791 8.725 5.188 5.646 13.067 14.142 6.465 20.13s-7.509 11.623-2.703 14.003 14.295 9.658 5.727 14.541-8.43 9.812-5.205 10.978-7.11-1.735-7.11-1.735 1.045 9.643-7.661 9.597-33.683-47.892-27.717-61.191c5.548-12.366-5.587-15.048-5.587-15.048z"
        fill="#2f2e41"
      />
      <path
        d="M733.052 224.483c-23.365-1.407-25.71 16.18-25.71 16.18.161 10.179 16.324 5.22 20.814 6.737 5.416-3.897 15.855-11.268 23.321-16.53a35.312 35.312 0 00-18.425-6.387z"
        fill="#2f2e41"
      />
      <path
        d="M416.173 384L418 395.5a25.5 25.5 0 0051 0l.013-.158L470.827 384z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M0 419.839h888v2H0z" />
      <path
        d="M92.234 387.428v5.879s-3.919 30.372-14.696 30.372-1.96-31.352-1.96-31.352v-4.899zM255.85 276.718l-1.96-4.899s-12.736-18.615-3.918-23.513 19.595 19.594 19.595 19.594l1.96 7.838z"
        fill="#9e616a"
      />
      <circle cx={215.191} cy={244.877} r={25.862} fill="#9e616a" />
      <path
        fill="#9e616a"
        d="M196.576 247.816l-17.634 13.716 24.493 20.574 13.715-16.655-20.574-17.635z"
      />
      <path
        d="M212.67 390.18h-90.06l6.83-72.43 5.07-53.79v-.01a8.815 8.815 0 019.62-7.95l37.37 3.54 27.5 15.81.8 7.25 27.44 19.59-18.65 35.48L206.86 360z"
        fill={color}
      />
      <path
        d="M135.343 310.03l-25.474 33.31-15.675 47.028H70.68l16.656-69.562 43.964-60.114a8.855 8.855 0 0110.135-3.086 8.047 8.047 0 001.746.497zM215.681 336.482l61.234 24.983 10.776-10.776-15.185-78.87-19.595 3.92 7.838 47.027-23.513-20.574-7.839-1.96-13.716 36.25z"
        fill={color}
      />
      <path
        d="M189.868 253.253a67.353 67.353 0 013.366-30.499c5.738-15.402 24.032-10.76 34.45-7.267s24.22 18.103 20.63 26.078-20.638-2.1-26.718-7.236-16.703 10.463-16.703 10.463z"
        fill="#2f2e41"
      />
      <ellipse
        cx={361.548}
        cy={481.197}
        rx={5.06}
        ry={2.811}
        transform="rotate(-70.023 113.555 473.465)"
        fill="#9e616a"
      />
    </svg>
  );
};

SvgNeighbors.propTypes = {
  color: PropTypes.string
};
SvgNeighbors.defaultProps = {
  color: "primary"
};
const MemoSvgNeighbors = React.memo(SvgNeighbors);
export default MemoSvgNeighbors;