import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const AddColor = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f5860e3c-93a4-4c8c-a139-2d0f68b42f38"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1105.32845"
      height="700.70737"
      viewBox="0 0 1105.32845 700.70737"
    >
      <title>add_color</title>
      <path
        d="M100.88227,714.53373c9.70332,35.86931,42.93939,58.08407,42.93939,58.08407s17.50387-35.94087,7.80055-71.81018-42.93939-58.08407-42.93939-58.08407S91.179,678.66442,100.88227,714.53373Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <path
        d="M146.2806,773.81611l-1.32493-.07235c-.40358-.02148-40.65833-2.50289-67.28795-28.42483-26.62849-25.92193-30.1912-66.09585-30.224-66.49943l-.108-1.32154,1.32492.07235c.40358.02148,40.65833,2.50289,67.28738,28.42483,26.62906,25.92307,30.19177,66.09585,30.22456,66.49944ZM49.89971,679.99294c.8733,7.17177,6.1306,41.032,29.38347,63.66645,23.25287,22.63676,57.24023,26.9812,64.43348,27.66175-.87329-7.17291-6.1306-41.03083-29.384-63.66645h0C91.0628,685.001,57.08957,680.67009,49.89971,679.99294Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <circle cx="886.16061" cy="630.53119" r="25.53119" fill="#3f3d56" />
      <rect
        x="201.52494"
        y="378.44"
        width="348.27997"
        height="295.84998"
        fill="#d0cde1"
      />
      <path
        d="M542.85312,734.6288H190.7988V435.00206H542.85312ZM194.5787,730.84891H539.07322V438.782H194.5787Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <path
        d="M415.91078,357.04638l-7.13859,8.43564a6.8729,6.8729,0,0,1-10.18293,0l-7.13859-8.43564V298.4346h24.46011Z"
        transform="translate(-47.33578 -99.64631)"
        fill={color}
      />
      <path
        d="M442.601,250.87324H429.46179a31.10425,31.10425,0,0,0,5.47351-17.66565c0-17.26141-13.99316-47.56128-31.25457-47.56128s-31.25458,30.29987-31.25458,47.56128a31.10425,31.10425,0,0,0,5.47351,17.66565H364.7605a10.0294,10.0294,0,0,0-10,10v7.17792a10.0294,10.0294,0,0,0,10,10H442.601a10.0294,10.0294,0,0,0,10-10v-7.17792A10.0294,10.0294,0,0,0,442.601,250.87324Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <path
        d="M403.68073,375.96272a10.4577,10.4577,0,0,1-8.43653-4.21826L384.336,357.20051V256.6678h38.68945V357.20051l-10.9082,14.54395A10.4577,10.4577,0,0,1,403.68073,375.96272ZM386.336,356.53352l10.50781,14.01074a8.54614,8.54614,0,0,0,13.67383,0l10.50781-14.01074V258.6678H386.336Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <path
        d="M415.68073,408.64631a12,12,0,0,1-24,0c0-6.62741,12-20,12-20S415.68073,402.0189,415.68073,408.64631Z"
        transform="translate(-47.33578 -99.64631)"
        fill={color}
      />
      <path
        d="M542.68073,478.64631a139.001,139.001,0,0,1-278,0Z"
        transform="translate(-47.33578 -99.64631)"
        fill={color}
        opacity="0.2"
      />
      <path
        d="M518.67072,478.08632a114.9908,114.9908,0,0,1-229.98,0Z"
        transform="translate(-47.33578 -99.64631)"
        fill={color}
      />
      <circle cx="266.34495" cy="32" r="32" fill="#3f3d56" />
      <circle cx="356.34495" cy="32" r="32" fill={color} />
      <circle cx="446.34495" cy="32" r="32" fill="#d0cde1" />
      <rect
        x="35.2515"
        y="672.99633"
        width="652.89371"
        height="2.31523"
        fill="#3f3d56"
      />
      <path
        d="M957.69723,774.64631v-425h194.967v425Zm2.80528-422.19471V771.841h189.35643V352.4516Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#3f3d56"
      />
      <rect
        x="897.3837"
        y="499.72882"
        width="314.19142"
        height="126.23762"
        transform="translate(1569.99126 -591.27808) rotate(90)"
        fill="#d0cde1"
      />
      <rect
        x="1016.60812"
        y="436.61001"
        width="75.74257"
        height="75.74257"
        transform="translate(1481.62493 -679.64442) rotate(90)"
        fill={color}
      />
      <rect
        x="1065.70053"
        y="599.31628"
        width="36.46865"
        height="36.46865"
        transform="translate(2284.08949 510.75138) rotate(150)"
        fill="#ff6584"
      />
      <rect
        x="968.91835"
        y="606.32948"
        width="123.43234"
        height="36.46865"
        transform="translate(1607.86255 -505.71703) rotate(90)"
        fill="#3f3d56"
      />
      <polygon
        points="789.169 400.407 734.439 516.558 772.75 537.842 840.86 421.691 789.169 400.407"
        fill="#ffb8b8"
      />
      <polygon
        points="789.169 400.407 734.439 516.558 772.75 537.842 840.86 421.691 789.169 400.407"
        opacity="0.1"
      />
      <path
        d="M784.20679,600.393l-65.677,135.00277-37.09536,37.09535s-51.08213.60813-31.01415,20.068,82.09628-3.64872,82.09628-3.64872l-1.82436,7.29745,40.136-3.64873-1.21624-14.59489-3.64873-1.82436s2.43249-27.97355-3.64872-33.44663,10.94617-12.16242,10.94617-12.16242l69.93387-121.62411Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#2f2e41"
      />
      <path
        d="M803.05853,491.53938S744.679,525.59413,759.882,556.60828s20.068,33.44663,20.068,33.44663l31.01415-22.50046L805.491,554.78392l60.81206-35.271S819.47779,483.63381,803.05853,491.53938Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#ffb8b8"
      />
      <path
        d="M766.5713,585.79807l83.31252,133.1784,8.51368,37.09536s-30.406,38.3116-7.90556,40.74408S898.53346,763.36928,899.7497,746.95s3.04061-26.75731,3.04061-26.75731l6.0812,2.43249s18.24362-29.18979,9.12181-32.83851a141.96756,141.96756,0,0,0-16.41926-5.47309s-13.37865-8.51369-26.14918-5.47309c0,0,2.43248-9.72992,0-13.98677S808.049,553.30026,808.049,553.30026Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#2f2e41"
      />
      <circle cx="862.75198" cy="94.52209" r="33.44663" fill="#ffb8b8" />
      <path
        d="M900.96594,215.45263s12.16242,34.66287,9.12181,44.3928-27.36542,55.339-27.36542,55.339l3.0406,21.28422L946.575,242.81806s-15.203-20.068-10.94617-34.05476Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#ffb8b8"
      />
      <path
        d="M923.46641,474.512l-17.6355,72.36635s-87.56937-52.29837-111.89419-50.474c0,0,52.90649-60.20394,72.97447-60.20394S923.46641,474.512,923.46641,474.512Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#2f2e41"
      />
      <path
        d="M967.25109,247.683s-13.98678-22.50046-31.01415-3.0406-48.04153,70.542-48.04153,70.542l2.17251-14.53815s-19.19988,14.53815-20.41613,33.38988-6.0812,82.09628-6.0812,82.09628L855.965,442.88973l75.407,43.78468,12.16241-20.6761s45.609,8.51369,50.474,3.0406-28.32766-94.3926-28.32766-94.3926Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#575a89"
      />
      <path
        d="M900.96594,374.1721l-36.48723,50.474s-43.78468,17.02738-36.48724,31.01415S872.38428,434.376,872.38428,434.376l54.73085-48.04153Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#ffb8b8"
      />
      <path
        d="M936.84506,253.15611s-26.75731,42.56844-27.97355,74.79883-.91218,28.88573-.91218,28.88573L894.58068,375.6924,926.203,393.3279l16.11519-16.72332s35.87912-10.33805,31.62227-40.13595-6.68932-85.13689-12.77053-85.13689S936.84506,253.15611,936.84506,253.15611Z"
        transform="translate(-47.33578 -99.64631)"
        opacity="0.1"
      />
      <path
        d="M938.0613,247.0749s-26.75731,42.56844-27.97355,74.79883,1.82436,32.83851,1.82436,32.83851l-16.41925,21.89234,30.406,16.41926,17.63549-22.50046s35.87912-10.338,31.62228-40.136-6.68933-85.13688-12.77054-85.13688S938.0613,247.0749,938.0613,247.0749Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#575a89"
      />
      <path
        d="M871.14514,187.55912s-10.2993-49.75546,43.64341-37.30622c0,0,37.09834-9.78116,53.03652,36.34l16.26688,48.38-6.34249-2.84859-2.36423,6.42226-9.676,3.25337-4.86324-8.05772-1.26433,10.33341-80.20073,14.23683s34.5593-24.17414,32.19949-62.58309L905.243,203.5424Z"
        transform="translate(-47.33578 -99.64631)"
        fill="#2f2e41"
      />
    </svg>
  );
};

AddColor.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

AddColor.defaultProps = {
  color: "primary",
  style: {}
};

export default AddColor;
