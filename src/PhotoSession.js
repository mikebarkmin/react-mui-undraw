import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const PhotoSession = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a16eab0f-bf37-4f1b-963b-005ab00945e2"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="993"
      height="742"
      viewBox="0 0 993 742"
    >
      <title>photo_session</title>
      <path
        d="M1096.5,775.5c0,4.1-3.75,8.08-10.77,11.86C1049.71973,806.74,927.60986,821,782.5,821q-8.56494,0-17.00977-.07C599.98,819.65,468.5,799.8,468.5,775.5c0-25.13,140.58008-45.5,314-45.5,47.49023,0,92.50977,1.53,132.85986,4.26q15.21021,1.035,29.5,2.29,5.93994.51,11.71,1.08c18.13038,1.75,34.93018,3.77,50.13038,6.02q11.06982,1.635,20.96972,3.42005c17.18994,3.11,31.61035,6.55,42.75,10.24C1087.18994,762.89,1096.5,769.04,1096.5,775.5Z"
        transform="translate(-103.5 -79)"
        fill="#f0f0f0"
      />
      <path
        d="M731.5,545c0,16.57-140.58008,30-314,30-28.65991,0-56.41992-.37-82.8-1.06C232.96,571.3,151.79,563.88,119.1001,554.36,108.98,551.42,103.5,548.27,103.5,545c0-3.74,7.17993-7.33,20.29-10.63,7.6499-1.93,17.31982-3.76,28.76-5.48.09009-.01.18994-.02.29-.04,26.2-3.91,61.6499-7.21,103.3999-9.59C303.37012,516.55,358.54,515,417.5,515,590.91992,515,731.5,528.43,731.5,545Z"
        transform="translate(-103.5 -79)"
        fill="#f0f0f0"
      />
      <path
        d="M717.23345,397.70567l-22.92777-6.38356s-8.98068-1.79283-3.49321-19.33227,16.37089-12.63067,16.37089-12.63067l20.33925,5.90906,8.03009,2.47988L724.254,383.59924l-.94709,10.56509Z"
        transform="translate(-103.5 -79)"
        fill="#3f3d56"
      />
      <polygon
        points="658.036 272.364 665.23 301.097 628.372 336.819 625.203 337.613 616.75 335.238 609.556 306.505 616.843 298.843 609.394 296.891 625.289 281.461 633.583 283.201 640.236 276.596 635.745 274.801 635.322 273.111 640.762 268.83 658.036 272.364"
        fill="#3f3d56"
      />
      <polygon
        points="623.504 312.892 628.265 331.906 650.232 311.139 644.732 291.86 623.504 312.892"
        fill={color}
      />
      <polygon
        points="658.036 272.364 659.045 276.393 622.394 312.047 619.225 312.84 611.037 310.625 610.585 310.614 609.556 306.505 616.843 298.843 609.394 296.891 625.289 281.461 633.583 283.201 640.236 276.596 635.745 274.801 635.322 273.111 640.762 268.83 658.036 272.364"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <ellipse
        cx="744.60604"
        cy="350.99977"
        rx="3.04917"
        ry="2.06908"
        transform="translate(-166.45443 112.35928) rotate(-14.05652)"
        fill={color}
      />
      <ellipse
        cx="721.32165"
        cy="381.75144"
        rx="3.04917"
        ry="2.06908"
        transform="translate(-174.62058 107.6248) rotate(-14.05652)"
        fill={color}
      />
      <path
        d="M702,433.5l5-17s-13-31,2-34,16,29,16,29l-6,19Z"
        transform="translate(-103.5 -79)"
        fill="#ffb6b6"
      />
      <circle cx="691.33168" cy="281.72277" r="39.72277" fill="#ffb6b6" />
      <path
        d="M781.9802,388.76238s-2.33664,29.20792-8.17822,31.54455S836.89109,439,836.89109,439l-17.52475-19.86139s-3.505-30.37623,4.67326-37.38613Z"
        transform="translate(-103.5 -79)"
        fill="#ffb6b6"
      />
      <path
        d="M726,424.5l-16-2s-19,10-19,23-11,34-11,34-8,28,10,30,34-30,34-30Z"
        transform="translate(-103.5 -79)"
        fill="#f0f0f0"
      />
      <path
        d="M717,583.5s-35-33-45-31-30,5-30,20,33,50,33,50,25,55,49,57a414.1672,414.1672,0,0,1,47,7s-11,40-5,51,29,24,31,23,30-27,42-64,20-65,9-67S717,583.5,717,583.5Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M645,569.5s-7-1-6,16,4,78,9,90,6,26,4,31-6,13,1,14,36-3,39-4,6-18,4-18-7-1-5-8,3-7,0-9-11-5-9-7,4-49,4-49Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M655,717.5s-17-5-19,6c0,0-3,17,10,23a160.65433,160.65433,0,0,1,24,14s21,8,22-2-4-46-4-46Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M768,729.5l32-26s-6,32,2,38l3.65429,10.68355-10.233,8.37077S764,755.5,768,729.5Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M813,685.5s-21,6-18,27,6.84646,43.815,6.84646,43.815S803,812.5,818,816.5s19-4,19-4,17.05078-43.90466,12-57c-6.11377-15.85077-14.92334-33.6488-12-39C839.87646,711.2345,835,682.5,813,685.5Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M825,409.5s-8,1-21,3-22-8-29-6-65,16-65,16l9,69s-11,80-9,94-24,12-9,29,41,32,94,27,60-4,60-12-12-76-8-82,12-13,8-20-8-11-2-17,9-12,9-15,14-52,14-52-6-24-13-25-13-6-18-6-8,1-11,0Z"
        transform="translate(-103.5 -79)"
        fill="#f0f0f0"
      />
      <path
        d="M737.74429,353.5844c4.60835-.606,9.36034-3.36806,11.9118-5.0596,2.90247,2.80533,20.77529,18.98269,51.48838,23.67727,0,0,.06829-.60847.24437-1.63773l10.52495,1.79625,19.4674-1.895c-.09787.33082-.1578.51211-.1578.51211s2.7836-.75054,3.74947-7.04214q.27764-1.80849.67148-3.59706c1.5661-7.14253,5.364-32.88562-16.18915-50.08948-15.69151-12.525-33.77759-8.57268-45.2119-3.79273A37.35446,37.35446,0,0,0,753.749,327.34685a28.85367,28.85367,0,0,0-1.85628,7.2994l-.44755,1.27151c-3.47166.48344-10.44188-2.43088-14.188-1.05157-5.12013,1.88524-7.63855,9.61268-8.153,11.92408S730.99506,354.47184,737.74429,353.5844Zm66.30436,7.26463c2.77256-7.13508,8.00439-14.92789,17.58941-14.5395,9.9412.40283,11.68455,8.29685,11.33394,15.04767l-24.732.89959Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <ellipse
        cx="802.05554"
        cy="302.90093"
        rx="1.6555"
        ry="4.37524"
        transform="translate(265.03874 963.56656) rotate(-80.31484)"
        fill="#2f2e41"
      />
      <circle cx="371" cy="26" r="26" fill={color} />
      <path
        d="M431.53027,270.24268c-.08789-.35108-8.793-35.52832-10.27929-72.57764-.876-21.814.88476-40.01563,5.23144-54.10059,5.49219-17.79785,15.15039-29.07422,28.70606-33.51465l.623,1.9004c-29.36718,9.6206-33.917,51.87841-32.5625,85.63476,1.47852,36.84619,10.13379,71.82373,10.22071,72.17236Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <path
        d="M541.92376,466.9125c-13.8186,18.13035,2.0203,53.4381,2.0203,53.4381s38.24327,5.91263,52.06187-12.21773-2.02029-53.4381-2.02029-53.4381S555.74236,448.78214,541.92376,466.9125Z"
        transform="translate(-103.5 -79)"
        fill="#3f3d56"
      />
      <path
        d="M279.07064,496.58724c11.44135,13.33856,40.6106,7.087,40.6106,7.087s10.61917-27.8776-.82219-41.21615-40.6106-7.087-40.6106-7.087S267.62929,483.24868,279.07064,496.58724Z"
        transform="translate(-103.5 -79)"
        fill="#3f3d56"
      />
      <path
        d="M592.02246,544.87891C480.209,484.07715,392.09277,487.30469,337.86523,500.7207c-58.70117,14.52149-91.37011,43.72657-91.69335,44.01953l-1.34375-1.48046c.32617-.29688,33.37109-29.83887,92.55664-44.48047,34.73925-8.59375,71.56933-10.46094,109.47851-5.55274,47.34863,6.13379,96.50879,22.9209,146.11426,49.89453Z"
        transform="translate(-103.5 -79)"
        fill="#2f2e41"
      />
      <rect x="314.5" y="287" width="2" height="125.55566" fill="#2f2e41" />
      <circle cx="316" cy="323" r="72" fill="#3f3d56" />
      <circle cx="316" cy="202" r="54" fill="#3f3d56" />
      <circle cx="316" cy="112" r="42" fill="#3f3d56" />
    </svg>
  );
};

PhotoSession.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

PhotoSession.defaultProps = {
  color: "primary",
  style: {}
};

export default PhotoSession;
