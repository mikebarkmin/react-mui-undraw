import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCollaborators = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 880.44 572.995"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M821.087 308.342l-2.327 31.813a7.086 7.086 0 01-6.596 6.553 7.086 7.086 0 01-7.556-7.239l.741-31.127 27.385-87.834-3.314-53.811 25.921-.926-1.851 62.028z"
        fill="#a0616a"
      />
      <path
        d="M860.698 176.701c-11.56-2.666-21.457.442-29.134 11.251l-5.943-44.963a11.809 11.809 0 018.867-12.666 11.809 11.809 0 0114.146 7.918z"
        fill={color}
      />
      <path
        d="M862.062 123.927c-26.713-11.362-54.156-4.163-86.65.833-.302-6.05-3.967-13.414-.127-17.636 4.664-5.128 4.235-10.516 1.428-15.936-7.178-13.858 3.106-28.605 13.488-40.866a22.995 22.995 0 0119.193-8.056l19.233 1.374c9.584.685 11.908 7.247 14.624 16.464 4.593 6.246 7.05 12.474 5.503 18.67 6.88 4.701 8.035 10.376 4.944 16.773-2.621 4.028-2.593 7.948.119 11.76a54.298 54.298 0 018.073 16.036z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M766.709 538.607h-12.778l-7.589-105.539 32.402-.926-12.035 106.465z"
      />
      <path
        d="M767.635 572.861c-3.407 1.555-6.261-11.043-9.135-8.219-8.04 7.9-27.324 6.13-27.324 6.13a5.025 5.025 0 01-3.168-6.55 5.025 5.025 0 013.487-3.11l8.55-2.138 13.423-23.607 13.704-.926a32.74 32.74 0 016.055 27.93c-1.243 5.076-3.163 9.382-5.592 10.49z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M851.79 538.607h-12.779l-7.589-105.539 33.328-6.48-12.96 112.019z"
      />
      <path
        d="M852.715 572.861c-3.407 1.555-6.26-11.043-9.135-8.219-8.039 7.9-27.324 6.13-27.324 6.13a5.025 5.025 0 01-3.167-6.55 5.025 5.025 0 013.486-3.11l8.55-2.138 13.424-23.607 14.63-1.852.369.605a37.72 37.72 0 014.042 30.844c-1.217 3.898-2.873 6.984-4.875 7.897zM880.44 437.835c-20.652 9.137-33.021-.752-54.044 2.237-6.003.854-13.073-87.416-19.105-87.048-7.678.47-14.328 89.427-22.053 89.123a255.42 255.42 0 01-57.412-9.079c20.02-77.644 43.657-147.852 43.512-205.523l60.056-4.63 8.267 13.107c13.255 31.098 26.794 65.633 33.541 101.775z"
        fill="#2f2e41"
      />
      <circle cx={800.963} cy={80.345} r={27.773} fill="#a0616a" />
      <path
        fill="#a0616a"
        d="M831.514 129.412l-34.254 1.851-5.555-30.551 27.774-4.628 12.035 33.328z"
      />
      <path
        d="M834.171 227.545l-43.887 1.057-18.946 2.646c-9.3-30.72-17.13-61.37 1.852-87.024l22.218-22.219 33.328-.925.442.252a26.838 26.838 0 0112.296 31.224c-8.27 26.876-7.222 52.256-7.303 74.989z"
        fill={color}
      />
      <path
        d="M832.491 80.205a33.769 33.769 0 00-8.539-22.49v-9.866h-30.116a17.487 17.487 0 00-17.487 17.487h20.074c-5.414 9.965-7.748 20.413-2.535 30.478 3.144 6.072 3.284 18.135-1.024 23.927a59.673 59.673 0 006.8 0c9.304 0 34.678 1.21 40.804-4.858 6.204-6.144-7.977-25.256-7.977-34.678z"
        fill="#2f2e41"
      />
      <path
        d="M785.792 311.255H607.88a4.253 4.253 0 00-4.24 4.24v186.743a4.253 4.253 0 004.24 4.24h177.912a4.253 4.253 0 004.24-4.24V315.495a4.253 4.253 0 00-4.24-4.24z"
        fill="#e6e6e6"
      />
      <path
        d="M781.551 316.556h-169.43a3.192 3.192 0 00-3.18 3.18v178.261a3.19 3.19 0 003.18 3.18h169.43a3.19 3.19 0 003.18-3.18V319.736a3.19 3.19 0 00-3.18-3.18z"
        fill="#fff"
      />
      <path
        d="M770.412 313.642l-2.328 31.814a7.086 7.086 0 01-6.596 6.553 7.086 7.086 0 01-7.555-7.24l.74-31.127 23.145-87.949.926-53.695 25.922-.926-1.851 62.027z"
        fill="#a0616a"
      />
      <path
        d="M807.443 175.7c-10.99-4.468-21.254-2.972-30.55 6.481l1.273-45.336a11.809 11.809 0 0110.767-11.097 11.809 11.809 0 0112.709 10.065z"
        fill={color}
      />
      <path
        d="M768.978 361.647a1.826 1.826 0 011.827 1.827v3.652a1.826 1.826 0 01-1.827 1.827H624.693a1.826 1.826 0 01-1.826-1.827v-3.652a1.826 1.826 0 011.826-1.827h144.285M768.978 378.998a1.826 1.826 0 011.827 1.826v3.653a1.826 1.826 0 01-1.827 1.827H624.693a1.826 1.826 0 01-1.826-1.827v-3.653a1.826 1.826 0 011.826-1.826h144.285"
        fill="#e6e6e6"
      />
      <path
        d="M768.978 396.349a1.826 1.826 0 011.827 1.826v3.653a1.826 1.826 0 01-1.827 1.826H624.693a1.826 1.826 0 01-1.826-1.826v-3.653a1.826 1.826 0 011.826-1.826h144.285"
        fill={color}
      />
      <path
        d="M768.978 414.08a1.826 1.826 0 011.827 1.826v3.652a1.826 1.826 0 01-1.827 1.827H624.693a1.826 1.826 0 01-1.826-1.827v-3.652a1.826 1.826 0 011.826-1.827h144.285M768.978 431.43a1.826 1.826 0 011.827 1.826v3.653a1.826 1.826 0 01-1.827 1.826H624.693a1.826 1.826 0 01-1.826-1.826v-3.653a1.826 1.826 0 011.826-1.826h144.285M768.978 448.78a1.826 1.826 0 011.827 1.827v3.653a1.826 1.826 0 01-1.827 1.826H624.693a1.826 1.826 0 01-1.826-1.826v-3.653a1.826 1.826 0 011.826-1.826h144.285"
        fill="#e6e6e6"
      />
      <path
        d="M132.226 533.647l-14.167.787-32.27-217.229L55.489 534.04 40.14 530.5c-8.523-93.471-19.62-190.086-11.806-232.183h107.828c16.012 41.847 5.323 140.099-3.936 235.33z"
        fill="#2f2e41"
      />
      <path
        d="M44.085 572.978a12.684 12.684 0 01-11.667-15.7l6.447-26.19c5.39-6.695 10.213-6.402 14.544 0l4.427-1.897 3.161 22.765-4.36 12.74a12.684 12.684 0 01-12.552 8.282zM129.855 572.978a12.684 12.684 0 0011.667-15.7l-6.447-26.19c-5.389-6.695-10.213-6.402-14.544 0l-4.426-1.897-3.162 22.765 4.36 12.74a12.684 12.684 0 0012.552 8.282z"
        fill="#2f2e41"
      />
      <circle cx={88.938} cy={44.882} r={31.482} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M107.827 103.124h-40.14l2.361-41.714h37.779v41.714z"
      />
      <path
        d="M150.329 303.038H22.825c18.59-62.684 15.322-129.834 1.574-199.127l34.63-11.018 9.445-7.871c11.852 14.435 24.958 14.316 39.353-.787l11.806 8.658 34.631 11.806c-18.266 66.759-21.237 132.935-3.935 198.339z"
        fill={color}
      />
      <path
        d="M55.314 36.747a28.49 28.49 0 011.932-23.149C61.093 6.776 68.502.38 82.745.02c31.076-.787 44.542 22.644 42.791 29.515s-8.015 23.218-8.015 23.218 3.885-15.74-3.884-17.315-37.874-7.87-46.614-.787a17.764 17.764 0 00-6.798 16.528z"
        fill="#2f2e41"
      />
      <path
        d="M182.576 312.315H4.665a4.271 4.271 0 00-4.24 4.24v186.743a4.253 4.253 0 004.24 4.24h177.911a4.253 4.253 0 004.24-4.24V316.556a4.253 4.253 0 00-4.24-4.24z"
        fill="#e6e6e6"
      />
      <path
        d="M178.336 317.616H8.906a3.19 3.19 0 00-3.181 3.18v178.261a3.19 3.19 0 003.18 3.18h169.43a3.19 3.19 0 003.18-3.18v-178.26a3.19 3.19 0 00-3.18-3.181z"
        fill="#fff"
      />
      <path
        d="M146.2 327.537a12.893 12.893 0 01-7.19-17.065l10.532-24.75-1.574-78.706-5.51-26.76 28.334-11.019 5.51 36.992-10.232 85.003-2.36 25.477a12.893 12.893 0 01-17.51 10.828zM30.101 327.537a12.893 12.893 0 007.19-17.065l-10.53-24.75 1.573-78.706 5.51-26.76-28.335-11.018L0 206.229l10.232 85.003 2.359 25.477a12.893 12.893 0 0017.51 10.828z"
        fill="#ffb8b8"
      />
      <path
        d="M173.153 171.599a100.467 100.467 0 00-31.482 14.167l-7.084-21.25 18.103-60.605a25.857 25.857 0 0117.629 22.897 246.554 246.554 0 002.834 44.79zM3.148 171.599a100.467 100.467 0 0131.483 14.167l7.083-21.25-15.741-61.392c-9.99 3.33-19.325 13.174-19.99 23.684a246.555 246.555 0 01-2.835 44.79z"
        fill={color}
      />
      <path
        d="M165.763 361.722a1.826 1.826 0 011.826 1.827v3.653a1.826 1.826 0 01-1.826 1.826H21.478a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.827h144.285M165.763 379.073a1.826 1.826 0 011.826 1.827v3.652a1.826 1.826 0 01-1.826 1.827H21.478a1.826 1.826 0 01-1.827-1.827V380.9a1.826 1.826 0 011.827-1.827h144.285"
        fill="#e6e6e6"
      />
      <path
        d="M165.763 396.424a1.826 1.826 0 011.826 1.826v3.653a1.826 1.826 0 01-1.826 1.827H21.478a1.826 1.826 0 01-1.827-1.827v-3.653a1.826 1.826 0 011.827-1.826h144.285"
        fill={color}
      />
      <path
        d="M165.763 414.154a1.826 1.826 0 011.826 1.827v3.653a1.826 1.826 0 01-1.826 1.826H21.478a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.827h144.285M165.763 431.505a1.826 1.826 0 011.826 1.827v3.652a1.826 1.826 0 01-1.826 1.827H21.478a1.826 1.826 0 01-1.827-1.827v-3.652a1.826 1.826 0 011.827-1.827h144.285M165.763 448.856a1.826 1.826 0 011.826 1.826v3.653a1.826 1.826 0 01-1.826 1.826H21.478a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.826h144.285M525.826 186.583H347.914a4.246 4.246 0 00-4.24 4.24V502.26a4.253 4.253 0 004.24 4.24h177.912a4.253 4.253 0 004.24-4.24V190.824a4.246 4.246 0 00-4.24-4.24z"
        fill="#e6e6e6"
      />
      <path
        d="M524.691 194.386a3.418 3.418 0 00-.445-1.07 3.21 3.21 0 00-2.66-1.432H352.154a3.183 3.183 0 00-3.18 3.18V498.02a3.19 3.19 0 003.18 3.18h169.43a3.19 3.19 0 003.18-3.18V195.064a2.895 2.895 0 00-.074-.678z"
        fill="#fff"
      />
      <path
        d="M509.013 356.422a1.826 1.826 0 011.826 1.826v3.653a1.826 1.826 0 01-1.826 1.826H364.728a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.826h144.285M509.013 373.773a1.826 1.826 0 011.826 1.826v3.653a1.826 1.826 0 01-1.826 1.826H364.728a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.826h144.285"
        fill="#e6e6e6"
      />
      <path
        d="M509.013 391.123a1.826 1.826 0 011.826 1.827v3.653a1.826 1.826 0 01-1.826 1.826H364.728a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.827h144.285"
        fill={color}
      />
      <path
        d="M509.013 408.854a1.826 1.826 0 011.826 1.826v3.653a1.826 1.826 0 01-1.826 1.826H364.728a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.826h144.285M509.013 426.204a1.826 1.826 0 011.826 1.827v3.653a1.826 1.826 0 01-1.826 1.826H364.728a1.826 1.826 0 01-1.827-1.826v-3.653a1.826 1.826 0 011.827-1.827h144.285M509.013 443.555a1.826 1.826 0 011.826 1.827v3.652a1.826 1.826 0 01-1.826 1.827H364.728a1.826 1.826 0 01-1.827-1.827v-3.652a1.826 1.826 0 011.827-1.827h144.285"
        fill="#e6e6e6"
      />
      <path
        d="M365.772 220.987a2.122 2.122 0 00-2.12 2.12v98.503a2.123 2.123 0 002.12 2.12h142.196a2.123 2.123 0 002.12-2.12v-98.503a2.122 2.122 0 00-2.12-2.12z"
        fill={color}
      />
      <path
        d="M586.604 144.488a155.412 155.412 0 0111.417 5.411l.986-1.877a157.752 157.752 0 00-11.572-5.486zM630.508 169.867l-1.414 1.58a153.116 153.116 0 019.057 8.802l1.539-1.458a155.395 155.395 0 00-9.182-8.924zM608.96 156.225a154.555 154.555 0 0110.38 7.198l1.279-1.692a156.917 156.917 0 00-10.525-7.297zM562.654 136.536c4.08.996 8.163 2.17 12.137 3.49l.669-2.013a158.9 158.9 0 00-12.303-3.537zM678.992 257.883l-2.093.336c.662 4.13 1.154 8.348 1.46 12.536l2.115-.155a149.16 149.16 0 00-1.482-12.717zM670.754 233.761c1.371 3.96 2.583 8.03 3.604 12.096l2.056-.517a147.774 147.774 0 00-3.655-12.273zM660.487 210.73a148.42 148.42 0 015.631 11.295l1.936-.864a150.309 150.309 0 00-5.712-11.457zM646.445 189.772a150.563 150.563 0 017.465 10.183l1.762-1.18a152.832 152.832 0 00-7.57-10.327zM543.594 121.73c-4.81 3.823-12.447 7.29-18.563 9.246 5.913 2.506 13.202 6.655 17.644 10.9l-2.845-9.15c3.498.324 7.002.76 10.445 1.311l.336-2.093a160.906 160.906 0 00-10.693-1.34zM206.026 221.162l1.936.863c1.704-3.82 3.599-7.621 5.63-11.295l-1.854-1.026a149.916 149.916 0 00-5.712 11.458zM197.665 245.34l2.056.516a145.74 145.74 0 013.604-12.096l-2.004-.693a148.01 148.01 0 00-3.656 12.273zM193.605 270.6l2.115.155c.306-4.188.797-8.405 1.46-12.536l-2.093-.337c-.673 4.191-1.171 8.47-1.482 12.718zM218.408 198.774l1.76 1.18a150.756 150.756 0 017.467-10.182l-1.656-1.324a152.365 152.365 0 00-7.571 10.326zM275.071 148.022l.986 1.877a155.848 155.848 0 0111.417-5.411l-.83-1.952a158.098 158.098 0 00-11.573 5.486zM298.621 138.013l.668 2.013a156.267 156.267 0 0112.137-3.49l-.503-2.06c-4.136 1.01-8.275 2.2-12.302 3.537zM234.389 178.79l1.54 1.458a153.157 153.157 0 019.056-8.8l-1.413-1.582a155.044 155.044 0 00-9.183 8.925zM253.46 161.73l1.28 1.692c3.345-2.529 6.838-4.95 10.38-7.197l-1.135-1.79a156.788 156.788 0 00-10.524 7.296zM349.049 130.976c-6.117-1.958-13.754-5.425-18.564-9.247l3.676 8.875c-3.58.33-7.168.775-10.692 1.34l.336 2.093c3.443-.552 6.947-.987 10.444-1.311l-2.845 9.147c4.442-4.244 11.732-8.393 17.645-10.897z"
        fill="#ccc"
      />
      <path
        d="M436.87 163.84a32.864 32.864 0 1132.864-32.864 32.902 32.902 0 01-32.864 32.864zm0-63.608a30.744 30.744 0 1030.744 30.744 30.779 30.779 0 00-30.744-30.744z"
        fill={color}
      />
      <path fill={color} d="M433.69 115.074h6.361v31.804h-6.361z" />
      <path fill={color} d="M452.772 127.796v6.36h-31.804v-6.36z" />
    </svg>
  );
};

SvgCollaborators.propTypes = {
  color: PropTypes.string
};
SvgCollaborators.defaultProps = {
  color: "primary"
};
const MemoSvgCollaborators = React.memo(SvgCollaborators);
export default MemoSvgCollaborators;