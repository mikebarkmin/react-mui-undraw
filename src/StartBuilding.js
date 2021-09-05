import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgStartBuilding = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1032 703.27"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M439.04 170.628c-8.382 30.985-37.093 50.176-37.093 50.176s-15.12-31.048-6.738-62.033 37.093-50.176 37.093-50.176 15.12 31.047 6.738 62.033z"
        fill={color}
      />
      <path
        d="M362.786 170.628c8.382 30.985 37.093 50.176 37.093 50.176s15.12-31.048 6.738-62.033-37.093-50.176-37.093-50.176-15.12 31.047-6.738 62.033z"
        fill={color}
      />
      <path
        d="M375.103 163.969c23 22.39 25.81 56.81 25.81 56.81s-34.482-1.883-57.483-24.274-25.81-56.81-25.81-56.81 34.482 1.883 57.483 24.274zM426.723 163.969c-23 22.39-25.81 56.81-25.81 56.81s34.482-1.883 57.483-24.274 25.81-56.81 25.81-56.81-34.482 1.883-57.483 24.274z"
        fill="#3f3d56"
      />
      <path
        d="M978.752 627.787c5.391 19.928 23.856 32.27 23.856 32.27s9.725-19.967 4.334-39.896-23.856-32.27-23.856-32.27-9.725 19.968-4.334 39.896z"
        fill={color}
      />
      <path
        d="M986.674 623.504c14.793 14.4 16.6 36.537 16.6 36.537s-22.178-1.21-36.97-15.61-16.6-36.538-16.6-36.538 22.177 1.211 36.97 15.611zM115.594 212.041v447.745h570.638V212.041zm374.618 226.88a101.783 101.783 0 01-.722 12.104l-2.488-.298a97.576 97.576 0 01-2.12 11.635l2.435.597a100.053 100.053 0 01-3.607 11.592l-2.344-.89a97.447 97.447 0 01-4.861 10.789l2.22 1.166a100.694 100.694 0 01-6.287 10.38l-2.062-1.427a98.395 98.395 0 01-7.3 9.308l1.875 1.663a101.235 101.235 0 01-8.574 8.577l-1.664-1.876a98.394 98.394 0 01-9.302 7.3l1.426 2.062a100.835 100.835 0 01-10.37 6.284l-1.167-2.218a97.44 97.44 0 01-10.781 4.864l.89 2.343a99.857 99.857 0 01-11.584 3.61l-.598-2.434a97.568 97.568 0 01-11.634 2.125l.3 2.488a101.993 101.993 0 01-12.103.728l-.002-2.5h-.047a98.939 98.939 0 01-11.758-.705l-.298 2.489a100.956 100.956 0 01-11.934-2.166l.596-2.437a97.2 97.2 0 01-11.302-3.51l-.888 2.344a100.203 100.203 0 01-11.068-4.981l1.166-2.219a97.943 97.943 0 01-10.122-6.124l-1.425 2.062a101.48 101.48 0 01-9.549-7.48l1.663-1.878a98.58 98.58 0 01-8.369-8.358l-1.875 1.665a101.348 101.348 0 01-7.491-9.536l2.061-1.428a97.957 97.957 0 01-6.133-10.108l-2.218 1.168a100.344 100.344 0 01-4.993-11.056l2.343-.891a97.203 97.203 0 01-3.525-11.29l-2.434.6a100.425 100.425 0 01-2.184-11.932l2.487-.3a98.928 98.928 0 01-.72-11.853l-2.501.048v-.133a101.646 101.646 0 01.71-11.969l2.49.297a97.587 97.587 0 012.107-11.638l-2.436-.596a99.953 99.953 0 013.596-11.594l2.345.887a97.44 97.44 0 014.85-10.793l-2.22-1.165a100.866 100.866 0 016.276-10.385l2.064 1.424a98.385 98.385 0 017.291-9.315l-1.878-1.661a101.373 101.373 0 018.566-8.585l1.666 1.875a98.398 98.398 0 019.296-7.31l-1.428-2.061A100.93 100.93 0 01342.927 350l1.17 2.218a97.44 97.44 0 0110.777-4.874l-.893-2.343a99.745 99.745 0 0111.58-3.62l.6 2.433a97.58 97.58 0 0111.633-2.137l-.303-2.487a101.641 101.641 0 0112.104-.739l.003 2.501.143-.001a98.941 98.941 0 0111.663.693l.295-2.489a100.623 100.623 0 0111.937 2.155l-.594 2.436a97.19 97.19 0 0111.306 3.5l.886-2.347a100.047 100.047 0 0111.073 4.971l-1.164 2.22a97.945 97.945 0 0110.128 6.115l1.423-2.064a101.676 101.676 0 019.556 7.471l-1.66 1.88a98.56 98.56 0 018.375 8.35l1.874-1.666a101.376 101.376 0 017.5 9.527l-2.06 1.43a97.952 97.952 0 016.143 10.103l2.217-1.172a100.35 100.35 0 015.005 11.052l-2.343.894a97.188 97.188 0 013.536 11.286l2.434-.603a100.563 100.563 0 012.196 11.93l-2.487.303a98.92 98.92 0 01.73 11.804h2.502z"
        fill="#3f3d56"
      />
      <circle cx={141} cy={234.709} r={10} fill={color} />
      <circle cx={172} cy={234.709} r={10} fill={color} />
      <circle cx={203} cy={234.709} r={10} fill={color} />
      <path
        fill="#e6e6e6"
        d="M141 255.709h518v2H141zM289 576.709h199v2H289zM289 597.709h199v2H289zM289 618.709h199v2H289z"
      />
      <path fill="#3f3d56" d="M0 658.709h1032v2H0z" />
      <path
        d="M765.366 197.483c-19.72 0-35.706 17.742-35.706 39.627v27.805h8.551l4.951-10.302-1.238 10.302h54.967l4.501-9.365-1.125 9.365h6.189v-21.832c0-25.184-18.397-45.6-41.09-45.6z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M765.634 614.389l16.329 43.83 19.766 10.312-15.469-54.142h-20.626zM855.871 617.827l24.922 50.704 12.891-7.734-18.906-51.564-18.907 8.594z"
      />
      <circle cx={759.619} cy={232.818} r={24.063} fill="#ffb8b8" />
      <path
        d="M756.181 251.725s8.594 22.344 3.438 28.36 32.657-9.454 32.657-9.454-16.329-19.766-15.47-28.36z"
        fill="#ffb8b8"
      />
      <path
        d="M786.26 268.912l12.89-2.578 12.892-15.469s6.015-21.485 13.75-27.5v-2.579s-39.532-25.782-51.564-24.922c0 0-40.391 12.031-32.657 0 2.176-3.384 5.914-6.088 10.165-8.227a49.89 49.89 0 0139.521-1.955l56.02 20.495a22.284 22.284 0 01-.86 18.906c-5.156 10.313-23.203 63.596-23.203 63.596a238.62 238.62 0 00-11.172 26.64c-4.297 12.892-7.735 21.486-7.735 21.486l-73.048-.86 6.015-26.64s-6.015-11.173-14.61-12.032c0 0-61.876-24.064-64.454-38.673 0 0-.86-5.157 2.578-7.735s42.11-44.688 42.11-44.688 17.188-22.345 25.782-15.47-15.469 24.064-15.469 24.064-24.922 37.813-28.36 40.391c0 0 24.063 14.61 30.938 16.329s23.204 0 30.939 6.875a27.082 27.082 0 0020.625-2.578c10.313-6.016 18.907-6.876 18.907-6.876z"
        fill="#ffb8b8"
      />
      <path
        d="M750.165 274.928l-12.89 34.376s-11.173 10.313-6.876 34.376c0 0 1.719 22.344-3.437 29.22s-76.487 85.08-8.594 250.083c0 0 45.548-8.594 79.923 6.016s91.096-15.469 91.096-15.469L800.01 393.525s-2.578-45.548 12.032-66.174l-9.454-7.734s-11.172-27.5-9.453-36.095c0 0 3.438-17.188 5.156-18.906h-6.875l-9.453 22.344s-15.47 29.22-28.36 26.641-2.578-20.625-2.578-20.625l4.297-17.188zM801.729 660.797s-19.523-7.986-20.933-5.712-8.287 16.024-8.287 16.024-26.64 27.501-5.156 30.939 24.063-8.594 24.063-8.594.86-.86 4.297-.86 17.188-5.156 16.329-7.734-10.313-24.063-10.313-24.063zM894.544 654.781s-18.048 4.297-18.907 7.735-6.875 26.64-1.719 28.36 12.891 4.297 15.47 3.437 8.593 11.172 21.484 8.594 18.907-4.297 18.047-5.156-4.297-13.75-14.61-18.907-19.765-24.063-19.765-24.063z"
        fill="#2f2e41"
      />
      <path
        d="M775.517 208.399a18.727 18.727 0 00-14.776-7.54h-.7c-13.517 0-24.474 12.23-24.474 27.318h4.529l.731-5.567 1.073 5.567h26.86l2.251-4.71-.562 4.71h5.284q3.699 18.369-10.63 36.738h9.003l4.5-9.42-1.125 9.42h17.16l3.375-21.666c0-16.226-9.427-29.985-22.499-34.85z"
        fill="#2f2e41"
      />
      <path
        d="M827.937 100.28c0-.08.003-.159.003-.239a98.954 98.954 0 00-.677-11.52l2.861-.348a100.484 100.484 0 00-2.195-11.93l-2.74.678a97.196 97.196 0 00-3.462-11.272l2.576-.983a100.24 100.24 0 00-5.005-11.051l-2.376 1.255a97.938 97.938 0 00-6.073-10.125l2.148-1.49a101.35 101.35 0 00-7.5-9.53l-1.9 1.69a98.566 98.566 0 00-8.325-8.4l1.635-1.852a101.41 101.41 0 00-9.556-7.473l-1.36 1.975a97.974 97.974 0 00-10.107-6.184l1.08-2.061a100.492 100.492 0 00-11.072-4.97l-.799 2.112a97.198 97.198 0 00-11.318-3.573l.52-2.13A100.37 100.37 0 00742.357.705l-.25 2.113a98.914 98.914 0 00-11.852-.744L730.253 0a101.818 101.818 0 00-12.104.74l.245 2.014a97.592 97.592 0 00-11.7 2.105l-.476-1.93A100.063 100.063 0 00694.64 6.55l.695 1.826a97.425 97.425 0 00-10.85 4.878l-.9-1.704a100.875 100.875 0 00-10.362 6.295l1.087 1.57a98.4 98.4 0 00-9.358 7.346l-1.262-1.42a101.397 101.397 0 00-8.567 8.585l1.424 1.26a98.377 98.377 0 00-7.33 9.376l-1.57-1.084a100.677 100.677 0 00-6.277 10.385l1.706.895a97.445 97.445 0 00-4.855 10.866l-1.826-.691a100.015 100.015 0 00-3.596 11.595l1.931.472a97.611 97.611 0 00-2.075 11.704l-2.017-.24a102.051 102.051 0 00-.71 12.007v.095l2.076-.04a98.9 98.9 0 00.77 11.89l-2.111.256a100.533 100.533 0 002.183 11.932l2.128-.525a97.209 97.209 0 003.598 11.303l-2.111.804a100.451 100.451 0 004.994 11.056l2.06-1.086a97.99 97.99 0 006.202 10.086l-1.971 1.365a101.493 101.493 0 007.49 9.537l1.848-1.64a98.58 98.58 0 008.42 8.307l-1.686 1.903a101.127 101.127 0 009.548 7.482l1.486-2.151a97.913 97.913 0 0010.144 6.053l-1.249 2.38a100.44 100.44 0 0011.068 4.98l.977-2.577a97.192 97.192 0 0011.289 3.437l-.672 2.74a100.427 100.427 0 0011.935 2.168l.342-2.864a98.973 98.973 0 0011.283.65c.16 0 .318-.005.477-.006l.001 2.936a101.904 101.904 0 0012.105-.728l-.358-2.96a97.547 97.547 0 0011.568-2.157l.723 2.94a100.214 100.214 0 0011.582-3.611l-1.087-2.862a97.45 97.45 0 0010.708-4.859l1.438 2.733a100.824 100.824 0 0010.37-6.285l-1.767-2.554a98.399 98.399 0 009.24-7.263l2.066 2.33a101.387 101.387 0 008.575-8.577l-2.33-2.065a98.39 98.39 0 007.263-9.245l2.554 1.765a100.982 100.982 0 006.286-10.378l-2.733-1.437a97.454 97.454 0 004.856-10.715l2.864 1.086a100.146 100.146 0 003.606-11.59l-2.94-.722a97.559 97.559 0 002.152-11.568l2.96.355a102.004 102.004 0 00.722-12.104v-.19z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgStartBuilding.propTypes = {
  color: PropTypes.string
};
SvgStartBuilding.defaultProps = {
  color: "primary"
};
export default SvgStartBuilding;
