import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOpenedTabs = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 512.657"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={383.376}
        cy={496.065}
        rx={144.416}
        ry={16.591}
        fill="#e6e6e6"
      />
      <path
        fill="#e6e6e6"
        d="M602.409 62.006l285.592 77.785-49.817 182.905-285.592-77.784z"
      />
      <path
        fill="#fff"
        d="M603.588 89.874l269.258 73.336-40.621 149.144-269.258-73.336z"
      />
      <path
        fill={color}
        d="M602.331 61.812l285.592 77.784-4.807 17.65-285.592-77.784z"
      />
      <circle cx={613.168} cy={74.242} r={4.424} fill="#fff" />
      <circle cx={629.369} cy={78.655} r={4.424} fill="#fff" />
      <circle cx={645.569} cy={83.067} r={4.424} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M611.637 122.15l237.784 64.763-4.317 15.853-237.785-64.764zM602.514 156.383l237.785 64.764L835.981 237l-237.785-64.764zM593.39 190.616l237.785 64.764-4.318 15.853-237.785-64.764zM.126 234.21h295.995v189.568H.126z"
      />
      <path fill="#fff" d="M8.59 260.79h279.067v154.577H8.59z" />
      <path fill={color} d="M0 234.042h295.995v18.293H0z" />
      <circle cx={13.723} cy={243.189} r={4.424} fill="#fff" />
      <circle cx={30.514} cy={243.189} r={4.424} fill="#fff" />
      <circle cx={47.304} cy={243.189} r={4.424} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M24.837 289.816h246.447v16.43H24.837zM25.03 325.242h246.447v16.43H25.03zM25.222 360.669h246.447v16.43H25.222zM536.157 292.991h317.084v203.075H536.157z"
      />
      <path fill="#fff" d="M545.224 321.464h298.95v165.59h-298.95z" />
      <path fill={color} d="M536.022 292.811h317.084v19.597H536.022z" />
      <circle cx={550.722} cy={302.609} r={4.739} fill="#fff" />
      <circle cx={568.709} cy={302.609} r={4.739} fill="#fff" />
      <circle cx={586.696} cy={302.609} r={4.739} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M562.628 352.558h264.006v17.6H562.628zM562.834 390.509H826.84v17.6H562.834zM563.041 428.46h264.006v17.6H563.041z"
      />
      <path
        d="M282.155 212.035l-4.368 8.737s-17.474 30.578-2.912 30.578 17.473-26.21 17.473-26.21l1.456-8.736zM439.416 44.581s1.456 24.754 5.825 29.123-36.403 0-36.403 0 1.456-27.667 0-29.123 30.578 0 30.578 0z"
        fill="#a0616a"
      />
      <path
        d="M366.61 204.755s-14.561 85.91-14.561 97.56-5.824 26.21-5.824 26.21l-26.336 98.65 37.993 3.08 25.672-83.176L411.75 263l16.017 85.912-2.912 99.016 29.122 2.912 16.018-107.753s10.193-129.595-8.737-132.507-94.648-5.824-94.648-5.824z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M425.655 432.309l2.112 36.003h18.93l1.456-21.841-22.498-14.162z"
      />
      <path
        d="M430.68 462.488s-4.369-16.017-7.281-7.28-7.28 18.929-7.28 18.929-11.65 11.649 2.912 16.017 24.754 2.913 24.754 7.28 49.508 14.562 46.595-1.455-23.297-23.298-23.297-23.298-12.337-23.298-17.09-21.842-6.208 7.28-6.208 7.28zM331.663 420.261l-2.912 26.21h20.386l6.692-25.458-24.166-.752z"
        fill="#2f2e41"
      />
      <circle cx={423.399} cy={31.476} r={24.754} fill="#a0616a" />
      <path
        d="M442 65.126s-15.07 11.105-34-2c0 0-6 0-16.636.385-11.082.401-30.578 11.649-30.578 11.649L359 147.126l11.979-4.985s-21.842 52.42-11.65 59.701 4.369 10.193 4.369 10.193 14.561-11.649 26.21-2.912 77.174 8.737 77.174 5.824a6.378 6.378 0 00-1.456-4.368s8.737-11.649-4.368-27.666c0 0 10.193-13.105 7.28-20.386l17.474-61.157s-4.368-16.017-16.017-20.386S442 65.126 442 65.126z"
        fill="#575a89"
      />
      <path
        d="M372.435 78.072l-11.65-2.912s-24.753 30.578-32.034 43.683-46.596 78.63-46.596 83-2.912 13.104-2.912 13.104l16.017 5.825s5.825-8.737 7.28-8.737 34.948-30.578 33.492-34.947 13.105-13.105 13.105-13.105 4.792-4.798 5.824-5.824c1.039-1.033 20.386-21.842 20.386-21.842z"
        fill="#575a89"
      />
      <path
        d="M553.753 221.277l4.368 8.737s17.473 30.578 2.912 30.578-17.473-26.21-17.473-26.21l-1.456-8.737z"
        fill="#a0616a"
      />
      <path
        d="M463.473 87.314l11.649-2.912s24.754 30.578 32.035 43.683 46.596 78.63 46.596 83 2.912 13.104 2.912 13.104l-16.018 5.825s-5.824-8.737-7.28-8.737-34.947-30.579-33.49-34.947-13.106-13.105-13.106-13.105-5.824-4.368-5.824-5.825-20.386-21.841-20.386-21.841z"
        fill="#575a89"
      />
      <path
        d="M436.155 19.587s2.99 6.468-8.966 3.88c0 0-4.483 2.588-4.483-1.293 0 0-5.978 6.468-7.473 2.587s-4.483 1.294-4.483 1.294l-2.989-6.468-2.989 3.88h-10.46S391.321-2.405 427.188.182s18.222 43.58 18.222 43.58-.29-7.358-3.278-3.477-5.978-20.698-5.978-20.698zM347.105 439.998s-2.592-16.399 3.65-9.628 14.41 14.273 14.41 14.273 15.403 5.84 3.919 15.8-21.377 12.818-19.583 16.801-39.167 33.601-43.087 17.8 11.68-30.808 11.68-30.808 1.686-26.309 6.617-26.932 8.65 4.09 8.65 4.09z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgOpenedTabs.propTypes = {
  color: PropTypes.string
};
SvgOpenedTabs.defaultProps = {
  color: "primary"
};
const MemoSvgOpenedTabs = React.memo(SvgOpenedTabs);
export default MemoSvgOpenedTabs;
