import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgVideoUpload = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 823.127 756.226"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M532.299 172.947H528.3V63.402A63.402 63.402 0 00464.898 0H232.812a63.402 63.402 0 00-63.402 63.402v600.974a63.402 63.402 0 0063.402 63.402h232.086a63.402 63.402 0 0063.402-63.402V250.923h3.999z"
        fill="#e6e6e6"
      />
      <path
        d="M467.456 16.495h-30.295a22.495 22.495 0 01-20.827 30.99h-132.96a22.495 22.495 0 01-20.826-30.99h-28.296a47.348 47.348 0 00-47.348 47.348v600.092a47.348 47.348 0 0047.348 47.348h233.204a47.348 47.348 0 0047.348-47.348V63.843a47.348 47.348 0 00-47.348-47.348z"
        fill="#fff"
      />
      <path
        fill="#3f3d56"
        d="M306.127 751.864h-3l6-401h3l-6 401zM388.127 751.864h-3l-6-401h3l6 401z"
      />
      <path
        fill="#3f3d56"
        d="M310.127 358.864h70v3h-70zM310.127 410.864h70v3h-70zM309.127 462.864h73v3h-73zM309.127 514.864h74v3h-74zM308.127 566.864h76v3h-76zM307.127 618.864h77v3h-77zM306.127 670.864h79v3h-79zM304.127 722.864h82v3h-82z"
      />
      <circle cx={341.794} cy={504.217} r={42.012} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M353.947 535.53l12.559-2.274 4.073 22.502-12.559 2.273zM328.829 540.077l12.559-2.274 4.073 22.501-12.559 2.274z"
      />
      <ellipse
        cx={525.428}
        cy={636.153}
        rx={10.636}
        ry={3.989}
        transform="rotate(-40.261 333.152 857.248)"
        fill="#2f2e41"
      />
      <ellipse
        cx={550.023}
        cy={631.7}
        rx={10.636}
        ry={3.989}
        transform="rotate(-40.261 357.747 852.796)"
        fill="#2f2e41"
      />
      <circle cx={338.853} cy={493.941} r={14.359} fill="#fff" />
      <circle cx={332.952} cy={488.794} r={4.786} fill="#3f3d56" />
      <path
        d="M374.936 458.512c.632-15.553-12.773-28.727-29.94-29.424s-31.597 11.346-32.23 26.9 11.303 19.087 28.47 19.784 33.068-1.706 33.7-17.26z"
        fill={color}
      />
      <ellipse
        cx={491.438}
        cy={568.451}
        rx={6.594}
        ry={21.006}
        transform="rotate(-77.09 352.105 650.765)"
        fill="#2f2e41"
      />
      <ellipse
        cx={573.907}
        cy={582.165}
        rx={6.594}
        ry={21.006}
        transform="rotate(-77.09 434.574 664.48)"
        fill="#2f2e41"
      />
      <path
        d="M353.333 520.774a9.572 9.572 0 11-18.835 3.429l-.004-.019c-.941-5.202 3.08-7.043 8.283-7.984s9.614-.628 10.556 4.574z"
        fill="#fff"
      />
      <path
        d="M486.655 255.24l-268.923 24.102a5.006 5.006 0 01-5.426-4.533l-5.979-66.709a5.006 5.006 0 014.534-5.426l268.922-24.102a5.006 5.006 0 015.427 4.534l5.978 66.708a5.006 5.006 0 01-4.533 5.426zm-275.616-50.574a3.003 3.003 0 00-2.72 3.256l5.979 66.708a3.003 3.003 0 003.256 2.72l268.922-24.102a3.003 3.003 0 002.72-3.255l-5.978-66.709a3.003 3.003 0 00-3.256-2.72z"
        fill="#e6e6e6"
      />
      <circle cx={249.157} cy={237.884} r={21} fill="#3f3d56" />
      <path
        d="M296.213 219.61a3.5 3.5 0 00.625 6.972l164.342-14.729a3.5 3.5 0 10-.625-6.972zM298.088 240.526a3.5 3.5 0 10.625 6.972l164.341-14.729a3.5 3.5 0 00-.625-6.972z"
        fill="#e6e6e6"
      />
      <ellipse
        cx={570.622}
        cy={340.381}
        rx={21.534}
        ry={6.76}
        transform="rotate(-69.082 424.186 441.315)"
        fill="#2f2e41"
      />
      <circle
        cx={530.815}
        cy={372.903}
        r={43.067}
        transform="rotate(-80.783 394.35 447.7)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M322.753 334.815h13.084v23.442h-13.084zM348.921 334.815h13.084v23.442h-13.084z"
      />
      <ellipse
        cx={333.656}
        cy={358.529}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <ellipse
        cx={359.824}
        cy={357.984}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <path
        d="M300.602 260.964c-3.477-15.574 7.639-31.31 24.829-35.149s33.944 5.675 37.421 21.25-7.915 21.317-25.105 25.155-33.667 4.318-37.145-11.256z"
        fill={color}
      />
      <ellipse
        cx={482.307}
        cy={352.919}
        rx={6.76}
        ry={21.534}
        transform="rotate(-64.626 331.26 465.94)"
        fill="#2f2e41"
      />
      <circle cx={82.901} cy={694.623} r={43.067} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M63.275 728.423h13.084v23.442H63.275zM89.443 728.423h13.084v23.442H89.443z"
      />
      <ellipse cx={74.178} cy={752.137} rx={10.903} ry={4.089} fill="#2f2e41" />
      <ellipse
        cx={100.346}
        cy={751.592}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <circle cx={83.991} cy={683.72} r={14.719} fill="#fff" />
      <circle cx={83.991} cy={683.72} r={4.906} fill="#3f3d56" />
      <path
        d="M41.124 654.572c-3.477-15.574 7.639-31.31 24.829-35.15s33.944 5.676 37.421 21.25-7.915 21.317-25.105 25.156-33.667 4.317-37.145-11.256z"
        fill="#e6e6e6"
      />
      <ellipse
        cx={296.425}
        cy={610.238}
        rx={21.534}
        ry={6.76}
        transform="rotate(-69.082 149.989 711.172)"
        fill="#2f2e41"
      />
      <circle
        cx={256.618}
        cy={642.76}
        r={43.067}
        transform="rotate(-80.783 120.153 717.556)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M48.556 604.672H61.64v23.442H48.556zM74.723 604.672h13.084v23.442H74.723z"
      />
      <ellipse cx={59.459} cy={628.387} rx={10.903} ry={4.089} fill="#2f2e41" />
      <ellipse cx={85.627} cy={627.841} rx={10.903} ry={4.089} fill="#2f2e41" />
      <circle cx={69.272} cy={559.969} r={14.719} fill="#fff" />
      <circle cx={69.272} cy={559.969} r={4.906} fill="#3f3d56" />
      <path
        d="M26.405 530.821c-3.478-15.574 7.639-31.31 24.828-35.149s33.945 5.675 37.422 21.25-7.915 21.317-25.105 25.155-33.668 4.318-37.145-11.256z"
        fill={color}
      />
      <ellipse
        cx={208.11}
        cy={622.776}
        rx={6.76}
        ry={21.534}
        transform="rotate(-64.626 57.063 735.797)"
        fill="#2f2e41"
      />
      <path
        d="M47.027 586.41c0 4.215 10.853 12.538 22.897 12.538s23.335-11.867 23.335-16.082-11.292.818-23.335.818-22.897-1.49-22.897 2.726z"
        fill="#fff"
      />
      <ellipse
        cx={435.473}
        cy={641.357}
        rx={21.534}
        ry={6.76}
        transform="rotate(-69.082 289.036 742.291)"
        fill="#2f2e41"
      />
      <circle
        cx={404.665}
        cy={682.879}
        r={43.067}
        transform="rotate(-80.783 268.2 757.676)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M196.604 644.792h13.083l-2.56 28.072-10.523-4.631v-23.441z"
      />
      <ellipse
        cx={390.943}
        cy={743.393}
        rx={4.089}
        ry={10.903}
        transform="rotate(-28.232 153.798 1082.1)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M225.127 644.864h13.084l-2.56 28.073-10.524-4.631v-23.442z"
      />
      <ellipse
        cx={419.467}
        cy={743.466}
        rx={4.089}
        ry={10.903}
        transform="rotate(-28.232 182.322 1082.173)"
        fill="#2f2e41"
      />
      <circle cx={217.319} cy={600.089} r={14.719} fill="#fff" />
      <circle cx={217.319} cy={600.089} r={4.906} fill="#3f3d56" />
      <path
        d="M174.452 570.94c-3.477-15.573 7.64-31.31 24.829-35.148s33.944 5.675 37.422 21.249-7.915 21.317-25.105 25.156-33.668 4.317-37.146-11.257z"
        fill="#f2f2f2"
      />
      <ellipse
        cx={359.157}
        cy={652.896}
        rx={6.76}
        ry={21.534}
        transform="rotate(-36.45 155.777 903.096)"
        fill="#2f2e41"
      />
      <path
        d="M237.242 633.198c0-3.474-8.945-10.334-18.87-10.334s-19.233 9.781-19.233 13.255 9.306-.674 19.232-.674 18.871 1.227 18.871-2.247z"
        fill="#fff"
      />
      <path
        d="M192.127 574.935a94.96 94.96 0 01-95-95c0-.198 0-.408.012-.606.29-52.026 42.903-94.393 94.988-94.393a95.015 95.015 0 0142.185 180.145 94.106 94.106 0 01-42.185 9.854zm0-188a93.198 93.198 0 00-92.99 92.456c-.01.213-.01.383-.01.545a93 93 0 00185.16 12.506 92.98 92.98 0 00-92.16-105.506z"
        fill="#3f3d56"
      />
      <path
        d="M235.15 484.535l-65.023-37.541a2 2 0 00-3 1.732v75.081a2 2 0 003 1.732L235.15 488a2 2 0 000-3.464l-65.023-37.541a2 2 0 00-3 1.732v75.081a2 2 0 003 1.732L235.15 488a2 2 0 000-3.464z"
        fill={color}
      />
      <ellipse cx={227.127} cy={747.864} rx={53} ry={2} fill="#e6e6e6" />
      <ellipse cx={770.127} cy={728.864} rx={53} ry={2} fill="#e6e6e6" />
      <path
        d="M769.873 727.18L532.208 599.057a5.006 5.006 0 01-2.028-6.774l31.782-58.954a5.006 5.006 0 016.773-2.029l237.666 128.123a5.006 5.006 0 012.028 6.774l-31.782 58.954a5.006 5.006 0 01-6.774 2.029zM567.786 533.06a3.003 3.003 0 00-4.064 1.218l-31.782 58.954a3.003 3.003 0 001.217 4.065L770.823 725.42a3.003 3.003 0 004.064-1.218l31.782-58.954a3.003 3.003 0 00-1.217-4.064z"
        fill="#e6e6e6"
      />
      <circle cx={581.28} cy={581.787} r={21} fill={color} />
      <path
        d="M630.615 592.478a3.5 3.5 0 10-3.321 6.162l145.24 78.297a3.5 3.5 0 103.321-6.162zM620.65 610.963a3.5 3.5 0 10-3.321 6.162l145.24 78.297a3.5 3.5 0 003.32-6.162z"
        fill="#e6e6e6"
      />
    </svg>
  );
};

SvgVideoUpload.propTypes = {
  color: PropTypes.string
};
SvgVideoUpload.defaultProps = {
  color: "primary"
};
export default SvgVideoUpload;