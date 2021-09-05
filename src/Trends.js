import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTrends = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 921.97 726.746"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={211} cy={709.225} rx={141} ry={17} fill="#f2f2f2" />
      <ellipse cx={508} cy={709.225} rx={141} ry={17} fill="#f2f2f2" />
      <path
        d="M691.67 407.99L704 333.667 550.052 301.05l6.32-189.589h-75.34l-5.792 173.74-207.238-43.906 4.328-129.834h-75.34l-3.8 113.984-151.416-32.079-12.33 74.325 161.2 34.152-4.912 147.353L12.33 412.46 0 486.784l183.185 38.81-6.113 183.395h75.34l5.585-167.546 207.238 43.906-4.121 123.64h75.34l3.593-107.79 122.18 25.885 12.33-74.325-131.963-27.958 4.912-147.353zM467.782 508.953l-207.238-43.906 4.911-147.354 207.238 43.906z"
        fill="#3f3d56"
      />
      <path
        opacity={0.2}
        d="M488.565 508.952l4.912-147.354-207.238-43.906-.146 4.373 186.6 39.533-4.766 142.981 20.638 4.373zM496.024 285.201l5.791-173.74h-20.784l-5.645 169.367 20.638 4.373zM568.289 377.448l-.146 4.372 123.527 26.171.706-4.254-124.087-26.289zM213.974 225.445l3.799-113.984h-20.784l-3.653 109.612 20.638 4.372zM560.831 601.199l-.146 4.372 101.541 21.513.706-4.254-102.101-21.631zM278.781 541.443l-.146 4.373 186.6 39.533-4.121 123.64h20.783l4.122-123.64-207.238-43.906zM185.877 444.824l20.638 4.372 4.912-147.353-161.2-34.152 11.624-70.071-20.077-4.254-12.331 74.325 161.2 34.152-4.766 142.981zM20.784 486.784l11.624-70.071-20.078-4.254L0 486.784l183.185 38.81-6.113 183.395h20.783l6.114-183.395-183.185-38.81z"
      />
      <path fill="#2f2e41" d="M733.96 116.347h76.449v130.562H733.96z" />
      <path
        d="M825.687 110.863c-8.26 24.456-20.926 46.739-46.74 46.739s-45.284-20.967-46.738-46.74c-1.858-32.93 20.33-46.874 46.739-46.738 31.197.161 56.541 17.716 46.739 46.739z"
        fill="#2f2e41"
      />
      <path
        d="M747.754 294.382l-26.994 101.55s-35.993 8.999-32.137 17.997 42.42-6.428 42.42-6.428l34.707-84.84zM769.607 628.599s24.423 24.424 8.998 41.134h32.136l-20.567-51.418z"
        fill="#ffb9b9"
      />
      <path
        d="M794.789 668.914s0-10.556-10.296-4.222-43.474 23.224-43.474 23.224-22.88 12.668 10.296 14.78 65.21-5.279 65.21-9.501-3.431-24.443-3.431-24.443-6.865 7.552-18.305.162z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb9b9"
        d="M799.172 649.166l-1.285 42.42 24.423 3.856v-41.134l-23.138-5.142z"
      />
      <circle cx={776.034} cy={132.415} r={34.707} fill="#ffb9b9" />
      <path
        d="M763.822 160.052s16.711 38.564 3.857 51.418 19.281 0 19.281 0 16.711-24.423 29.566-25.709c0 0-19.282-10.283-17.997-37.278z"
        fill="#ffb9b9"
      />
      <path
        d="M741.327 347.085l-2.571 60.416s-46.276 120.833-28.28 149.113 60.416 79.698 60.416 79.698 24.424-11.57 24.424-17.997c0 0-24.424-60.416-44.991-74.556 0 0 1.285-24.423 20.567-50.132l17.997 62.987 7.712 96.409s21.853 7.712 29.566 3.856c0 0 16.71-61.702 5.141-97.694l-2.57-98.98s33.421-48.847-8.999-106.692l-6.427-20.568s-65.558 6.428-71.985 14.14zM801.743 685.159s0-12.855-11.569-5.142-48.847 28.28-48.847 28.28-25.71 15.425 11.569 17.996 73.27-6.427 73.27-11.569-3.856-29.763-3.856-29.763-7.712 9.196-20.567.198z"
        fill="#2f2e41"
      />
      <path
        d="M774.106 207.614l40.395-23.162s59.87 1.31 56.014 32.16c0 0-11.57 39.849-15.426 35.993l-7.712-7.713s-28.28 57.845-28.28 69.414a70.04 70.04 0 01-3.857 21.853l-69.414 10.284s7.713-43.706-3.856-51.418-15.426-28.28-3.857-46.277a149.408 149.408 0 0011.429-21.709 38.543 38.543 0 0121.347-20.61z"
        fill={color}
      />
      <path
        d="M864.087 212.756s68.13 55.274 56.56 66.843-74.556 57.845-74.556 57.845-6.427 38.564-19.282 37.278 2.571-47.561 2.571-47.561l53.99-51.418-29.566-30.851z"
        fill="#ffb9b9"
      />
      <circle cx={778.948} cy={55.514} r={18.45} fill="#2f2e41" />
      <path
        d="M756.808 45.674a18.45 18.45 0 0116.605-18.356 18.655 18.655 0 00-1.845-.093 18.45 18.45 0 100 36.899c.623 0 1.238-.033 1.845-.093a18.45 18.45 0 01-16.605-18.357zM757.664 95.38s-.385-2.145-15.452 3.505-24.098 47.345-16.565 71.828c3.036 9.867.566 16.98-3.465 21.958-15.126 18.679-9.171 46.734 12.861 56.339q.933.406 1.904.804l9.417 5.65s-12.004-15.795-5.997-36a103.593 103.593 0 001.87-53.033 190.664 190.664 0 00-2.362-9.121c-7.533-26.367-3.87-23.322 22.497-49.69 0 0 15.067 11.3 28.25 16.95s24.484 11.301 15.067 30.135-32.017 35.783-16.95 60.267 16.95 15.067 15.067 24.483l-1.883 9.417 11.3-11.3-7.534 15.067s24.484 0 32.017-18.834l3.767 3.767s15.067-26.367-13.183-50.85c0 0-9.417-5.65 3.766-24.484s3.059-59.326-13.891-66.859-60.501 0-60.501 0z"
        fill="#2f2e41"
      />
      <path
        fill="#f2f2f2"
        d="M386.429 40.573l-19.079-7.528-19.079-7.528 16.059-12.758L380.389 0l3.02 20.287 3.02 20.286zM371.248 183.963l-19.078-7.528-19.079-7.529 15.149-10.453L363.389 148l3.93 17.981 3.929 17.982zM338.429 376.573l-19.079-7.528-19.079-7.528 16.059-12.758L332.389 336l3.02 20.287 3.02 20.286zM138.374 594.33l-18.019 9.797-18.019 9.798.524-20.504.525-20.503 17.494 10.706 17.495 10.706zM120.374 134.33l-18.019 9.797-18.019 9.798.524-20.504.525-20.503 17.494 10.706 17.495 10.706zM211.847 677.81c12.31 20.992 37.137 29.303 37.137 29.303s4.869-25.724-7.441-46.717-37.137-29.303-37.137-29.303-4.868 25.724 7.441 46.716z"
      />
      <path
        d="M219.529 670.483c21.288 11.79 30.206 36.405 30.206 36.405s-25.597 5.5-46.885-6.291-30.207-36.406-30.207-36.406 25.597-5.499 46.886 6.292zM604.02 660.421c-14.298 19.693-11.96 45.769-11.96 45.769s25.518-5.851 39.816-25.544 11.96-45.768 11.96-45.768-25.519 5.85-39.816 25.543z"
        fill={color}
      />
      <path
        d="M613.811 664.521c-2.268 24.23-21.244 42.267-21.244 42.267s-15.299-21.246-13.03-45.475 21.244-42.267 21.244-42.267 15.299 21.246 13.03 45.475zM855 202.225l-5 38 5 12s22-27 15-42-15-8-15-8z"
        fill={color}
      />
    </svg>
  );
};

SvgTrends.propTypes = {
  color: PropTypes.string
};
SvgTrends.defaultProps = {
  color: "primary"
};
export default SvgTrends;
