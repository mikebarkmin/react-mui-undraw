import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const EverydayLife = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f3c1e264-8f84-4af2-9302-889b00530a9c"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1020"
      height="721.09221"
      viewBox="0 0 1020 721.09221"
    >
      <title>everyday_life</title>
      <rect y="718.09221" width="1020" height="3" fill="#2f2e41" />
      <path
        d="M477,683.54611H121v-456H477Zm-354-2H475v-452H123Z"
        transform="translate(-90 -89.45389)"
        fill="#2f2e41"
      />
      <rect x="55" y="166.09221" width="308" height="195" fill="#f2f2f2" />
      <rect x="55" y="353.09221" width="308" height="209" fill="#f2f2f2" />
      <rect x="201" y="165.09221" width="16" height="196" fill="#2f2e41" />
      <rect x="347" y="165.09221" width="16" height="196" fill="#2f2e41" />
      <rect
        x="291"
        y="288.54611"
        width="16"
        height="308"
        transform="translate(651.54611 54.09221) rotate(90)"
        fill="#2f2e41"
      />
      <polygon
        points="98.528 271.092 71 289.596 71 304.903 112.701 271.092 98.528 271.092"
        fill="#fff"
      />
      <polygon
        points="143.882 271.092 71 328.147 71 341.187 165.992 271.092 143.882 271.092"
        fill="#fff"
      />
      <rect x="55" y="165.09221" width="16" height="196" fill="#2f2e41" />
      <polygon
        points="318.496 181.092 257 259.092 276 261.092 329 178.092 318.496 181.092"
        fill="#fff"
      />
      <rect
        x="291"
        y="108.54611"
        width="16"
        height="308"
        transform="translate(471.54611 -125.90779) rotate(90)"
        fill="#2f2e41"
      />
      <rect
        x="291"
        y="198.54611"
        width="16"
        height="308"
        transform="translate(561.54611 -35.90779) rotate(90)"
        fill="#2f2e41"
      />
      <path
        d="M373.39,616.17611a79.55946,79.55946,0,0,1-4.33,15.17,78.41226,78.41226,0,0,1-11.77,20.2c-.33.42-.67.83-1.01,1.23-.39-.41-.76-.82-1.12006-1.23H234.05a79.16433,79.16433,0,0,1-14.12-26.85,78.37475,78.37475,0,0,1-3.26-24.49,79.00409,79.00409,0,1,1,156.72,15.97Z"
        transform="translate(-90 -89.45389)"
        fill="#2f2e41"
      />
      <circle cx="211.18761" cy="493.32919" r="27" fill="#fff" />
      <circle cx="219.06352" cy="507.18286" r="9" fill="#3f3d56" />
      <path
        d="M233.337,516.16339c-1.188-29.247,24.01865-54.01935,56.30068-55.33066s59.41489,21.335,60.60291,50.582-21.2521,35.89213-53.53414,37.20344S234.525,545.41036,233.337,516.16339Z"
        transform="translate(-90 -89.45389)"
        fill={color}
      />
      <path
        d="M396.53,675.64608c-4.84,4.84-21.27-3.74-36.7-19.16-1.23-1.23-2.42005-2.47-3.55-3.71-.39-.41-.76-.82-1.12006-1.23-12.42-13.85-18.81994-27.43-14.49-31.76,3.97-3.97,15.76,1.09,28.39,11.56,2.75,2.29,5.55,4.84,8.31,7.6a116.98814,116.98814,0,0,1,10.97,12.6C396.48,662.48611,400.06,672.12606,396.53,675.64608Z"
        transform="translate(-90 -89.45389)"
        fill="#2f2e41"
      />
      <ellipse
        cx="213.76689"
        cy="600.52534"
        rx="12.40027"
        ry="39.5"
        transform="translate(-512.9697 540.96266) rotate(-73.09372)"
        fill="#2f2e41"
      />
      <path
        d="M309.38,639.65609a17.90275,17.90275,0,0,1-7.91,11.89h-19.6a18.00373,18.00373,0,0,1-7.91-18.31c1.77-9.78,10.07-10.37,19.85-8.6S311.15,629.86611,309.38,639.65609Z"
        transform="translate(-90 -89.45389)"
        fill="#fff"
      />
      <path
        d="M324.5,771.04611l5,15,5,19s13,7,14,2-5-6-5-6l-2-10,15-27Z"
        transform="translate(-90 -89.45389)"
        fill="#3f3d56"
      />
      <path
        d="M409.5,765.04611l9,41s7,4,12,2-3-7-3-7,3-25,18-28S409.5,765.04611,409.5,765.04611Z"
        transform="translate(-90 -89.45389)"
        fill="#3f3d56"
      />
      <path
        d="M468.5,717.04611s-20,7-38,3c0,0-35-5-38-6s-37-3-55,0c0,0-50-39-22-56,0,0,12,6,15,2,1.125-1.5.5625-3.42188-.58008-5.23828a14.5215,14.5215,0,0,0-11.83255-6.571c-10.45-.39123-29.17528,3.3637-20.67577,37.52915a66.445,66.445,0,0,0,13.07473,25.70908c4.55273,5.614,9.26367,13.38355,7.01367,19.57105-4,11-5,28-5,28l-14,21s-8,26-8,27,10.87868,3.12132,13,1c2-2-3-6-3-6s4-8,11-10,26-9,29-12,67-21,85-4a339.49193,339.49193,0,0,0,32,27s5,7,11,7,7-9,0-10-17-25-17-25-3-18,12-21c8.26891-1.65378,13.195-1.78813,15.95107-1.57568a8.22809,8.22809,0,0,0,6.1058-2.0128,35.18658,35.18658,0,0,0,4.7687-5.66681,3.98479,3.98479,0,0,0,.49333-3.62494A94.95075,94.95075,0,0,1,487.5,730.04611c-1-5-9-9-9-9s-2-14-5-10A61.2236,61.2236,0,0,1,468.5,717.04611Z"
        transform="translate(-90 -89.45389)"
        fill="#3f3d56"
      />
      <path
        d="M1024,588.54611H668v-456h356Zm-354-2h352v-452H670Z"
        transform="translate(-90 -89.45389)"
        fill="#2f2e41"
      />
      <rect x="602" y="71.09221" width="308" height="195" fill="#f2f2f2" />
      <rect x="602" y="258.09221" width="308" height="209" fill="#f2f2f2" />
      <rect x="748" y="70.09221" width="16" height="196" fill="#2f2e41" />
      <rect x="894" y="70.09221" width="16" height="196" fill="#2f2e41" />
      <rect
        x="838"
        y="193.54611"
        width="16"
        height="308"
        transform="translate(1103.54611 -587.90779) rotate(90)"
        fill="#2f2e41"
      />
      <polygon
        points="645.528 176.092 618 194.596 618 209.903 659.701 176.092 645.528 176.092"
        fill="#fff"
      />
      <polygon
        points="690.882 176.092 618 233.147 618 246.187 712.992 176.092 690.882 176.092"
        fill="#fff"
      />
      <rect x="602" y="70.09221" width="16" height="196" fill="#2f2e41" />
      <polygon
        points="865.496 86.092 804 164.092 823 166.092 876 83.092 865.496 86.092"
        fill="#fff"
      />
      <rect
        x="838"
        y="13.54611"
        width="16"
        height="308"
        transform="translate(923.54611 -767.90779) rotate(90)"
        fill="#2f2e41"
      />
      <rect
        x="838"
        y="103.54611"
        width="16"
        height="308"
        transform="translate(1013.54611 -677.90779) rotate(90)"
        fill="#2f2e41"
      />
      <ellipse
        cx="849.2105"
        cy="314.9526"
        rx="18.3947"
        ry="11.09092"
        transform="translate(-40.7783 650.2004) rotate(-48.3118)"
        fill="#ff6584"
      />
      <circle cx="794.10632" cy="259.583" r="48.15082" fill="#ff6584" />
      <path
        d="M743.39381,327.81554l-44.75558,3.6618A7.40553,7.40553,0,0,0,691.856,338.323l-1.67111,23.06143a7.40549,7.40549,0,0,0,7.38614,7.94075h20.1715v1.082h8.11531v-1.082H730.186v1.082h8.11531v-1.082h4.326a7.40554,7.40554,0,0,0,7.39581-7.02623l1.37041-26.72329A7.40548,7.40548,0,0,0,743.39381,327.81554Z"
        transform="translate(-90 -89.45389)"
        fill="#3f3d56"
      />
      <path
        d="M771.84457,400.70435l-63.2994-29.75613L697.18374,388.8019s32.91446,21.012,34.62531,22.72286c2.4346,2.43459,28.67409,19.47674,38.95348,16.77164S776.17273,403.40945,771.84457,400.70435Z"
        transform="translate(-90 -89.45389)"
        fill="#ffb8b8"
      />
      <polygon
        points="725.126 447.588 717.011 465.982 801.02 465.982 794.918 446.506 725.126 447.588"
        fill="#2f2e41"
      />
      <path
        d="M866.52316,387.71986s3.24612,17.85368,0,20.01776S888.164,436.4117,888.164,436.4117l10.27939-9.19735,3.24612-21.09979s-9.73837-13.52552-5.41021-25.428S866.52316,387.71986,866.52316,387.71986Z"
        transform="translate(-90 -89.45389)"
        fill="#ffb8b8"
      />
      <circle cx="786.26153" cy="269.05086" r="34.62531" fill="#ffb8b8" />
      <path
        d="M885.45887,423.96823s-13.52551-20.55878-21.0998-22.18184-14.60755-.541-18.93571,0-18.93572-4.86918-27.592-1.082,0,48.15082,0,48.15082-9.73837,56.80716-5.4102,71.41471,1.082,17.31266-1.082,18.93572,49.23286,16.23061,49.23286,16.23061h48.69185s0-15.68959,4.86918-19.47674,4.32816-83.85817,4.32816-83.85817l16.23062-31.37919s-2.7051-11.90245-14.06653-12.44347-21.503-6.50561-21.503-6.50561l-7.71215,22.1952Z"
        transform="translate(-90 -89.45389)"
        fill={color}
      />
      <path
        d="M822.7005,403.40945l-4.86919-2.7051s-9.19735.541-10.82041,0-22.18184-7.03327-30.29714-3.24612-13.52552-1.082-13.52552-1.082,26.51,22.72286-5.95122,29.75612c0,0,.541,2.70511,8.65633,4.32817s9.73836,3.24612,12.98449,5.95122,9.73837,5.41021,14.06653,6.49225,18.3947,10.27939,20.55878,8.11531,5.95122-9.73837,5.95122-9.73837Z"
        transform="translate(-90 -89.45389)"
        fill={color}
      />
      <path
        d="M924.41235,414.77088l10.27939,5.95123s13.52551,40.03552,11.36143,49.77388-4.32816,8.11531-1.082,14.60756,6.49224,7.03326,4.32816,12.98449-1.082,20.55878-4.32816,26.51-18.93572,24.887-32.46123-7.03326S924.41235,414.77088,924.41235,414.77088Z"
        transform="translate(-90 -89.45389)"
        fill={color}
      />
      <path
        d="M943.88909,497.547s-7.57429-15.14858-9.19735-16.23062-9.19735-38.41245-9.19735-38.41245,11.90245-19.47674,1.082-28.13307c0,0,20.01776-28.13306,13.52551-27.592s-19.47673,21.0998-19.47673,21.0998-2.97562-.81153-1.89358-5.1397,5.1397-19.74724,1.89358-20.28827-9.73837,22.72287-9.73837,22.72287-13.255,24.07541-9.19735,32.46122a104.53578,104.53578,0,0,0,8.11531,13.52552l9.19734,67.08654S936.85582,540.28764,943.88909,497.547Z"
        transform="translate(-90 -89.45389)"
        fill="#ffb8b8"
      />
      <ellipse
        cx="649.92436"
        cy="245.78698"
        rx="5.95123"
        ry="2.7051"
        fill={color}
      />
      <path
        d="M703.676,388.8019H696.1017s-16.77163-5.4102-16.77163-17.85368,4.86918-37.87143,20.01775-37.33041,1.08205,34.08429,1.08205,34.08429l9.17038,3.7421.027,11.40647Z"
        transform="translate(-90 -89.45389)"
        fill="#ffb8b8"
      />
      <ellipse
        cx="780.58081"
        cy="246.05749"
        rx="30.83817"
        ry="15.68959"
        fill="#ff6584"
      />
      <ellipse
        cx="822.23939"
        cy="265.53423"
        rx="2.7051"
        ry="5.95123"
        fill="#ffb8b8"
      />
      <ellipse
        cx="928.19949"
        cy="323.60893"
        rx="11.09092"
        ry="18.3947"
        transform="translate(-138.1184 348.52465) rotate(-25.90207)"
        fill="#ff6584"
      />
      <rect x="601.2485" y="550" width="140" height="2" fill="#f2f2f2" />
      <rect x="701.2485" y="551.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="640.2485" y="551.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="487.2485" width="140" height="2" fill="#f2f2f2" />
      <rect x="587.2485" y="1.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="526.2485" y="1.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="428.2485" y="251" width="140" height="2" fill="#f2f2f2" />
      <rect x="528.2485" y="252.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="467.2485" y="252.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="123.2485" y="35" width="140" height="2" fill="#f2f2f2" />
      <rect x="223.2485" y="36.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="162.2485" y="36.5" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="658.2485" y="624" width="140" height="2" fill="#f2f2f2" />
      <rect x="696.2485" y="606" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="757.2485" y="606" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="440.2485" y="663" width="140" height="2" fill="#f2f2f2" />
      <rect x="478.2485" y="645" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="539.2485" y="645" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="458.2485" y="524" width="140" height="2" fill="#f2f2f2" />
      <rect x="496.2485" y="506" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="557.2485" y="506" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="397.2485" y="324" width="140" height="2" fill="#f2f2f2" />
      <rect x="435.2485" y="306" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="496.2485" y="306" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="299.2485" y="104" width="140" height="2" fill="#f2f2f2" />
      <rect x="337.2485" y="86" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="398.2485" y="86" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="33.2485" y="653" width="140" height="2" fill="#f2f2f2" />
      <rect x="71.2485" y="635" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="132.2485" y="635" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="864.2485" y="580" width="140" height="2" fill="#f2f2f2" />
      <rect x="902.2485" y="562" width="2" height="18.5" fill="#f2f2f2" />
      <rect x="963.2485" y="562" width="2" height="18.5" fill="#f2f2f2" />
      <circle cx="487" cy="415.54611" r="9" fill="#f2f2f2" />
      <circle cx="812" cy="543.54611" r="9" fill="#f2f2f2" />
      <circle cx="496" cy="190.54611" r="17" fill="#f2f2f2" />
    </svg>
  );
};

EverydayLife.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

EverydayLife.defaultProps = {
  color: "primary",
  style: {}
};

export default EverydayLife;
