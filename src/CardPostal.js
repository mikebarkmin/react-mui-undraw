import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const CardPostal = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="b4dfd996-6a89-46e0-b10e-bb3b07959d40"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="995.60769"
      height="679.44815"
      viewBox="0 0 995.60769 679.44815"
    >
      <title>card_postal</title>
      <ellipse cx="805.25" cy="646.94815" rx="183" ry="32.5" fill="#3f3d56" />
      <rect y="42.80999" width="760" height="475" fill="#f2f2f2" />
      <rect x="20.5" y="63.30999" width="88" height="10" fill={color} />
      <rect x="640.5" y="63.30999" width="88" height="10" fill="#fff" />
      <rect x="20.5" y="80.30999" width="148" height="6" fill="#3f3d56" />
      <rect x="20.5" y="93.30999" width="140" height="6" fill="#3f3d56" />
      <rect x="20.5" y="106.30999" width="102" height="6" fill="#3f3d56" />
      <rect x="335.5" y="144.80999" width="383" height="271" fill="#fff" />
      <path
        d="M320.41247,390.69676a12.35505,12.35505,0,0,1-7.4502-2.40234,12.8042,12.8042,0,0,1-3.80273-14.98194,14.77235,14.77235,0,0,1,6.68115-6.82373,22.81193,22.81193,0,0,0-6.02686-1.90967,23.94109,23.94109,0,0,0-15.12793,2.60742,13.41017,13.41017,0,0,1-15.59277-2.26171,14.42542,14.42542,0,0,0-2.28467-1.79248c-3.51562-2.20459-9.05224-2.22315-11.37939,1.27441a12.93876,12.93876,0,0,0-1.33887,3.11719c-.23486.707-.47852,1.43847-.791,2.1499-3.34375,7.59912-12.582,10.522-27.45556,8.69043-1.47412-.18213-3.49268-.43164-4.87793-1.8208a7.56845,7.56845,0,0,1-1.75391-4.90625q-.12378-1.45825-.17969-2.92236a28.11794,28.11794,0,0,1-19.97461,10.52685c-2.01562.09424-4.57373.00732-6.521-1.54492a10.57215,10.57215,0,0,1-2.54688-3.459c-.31494-.58154-.61181-1.13037-.95361-1.63525-3.07178-4.5459-8.97754-5.001-14.9375-3.92285-.1626,4.82129-1.18359,10.93457-7.27734,13.50488a6.56165,6.56165,0,0,1-6.09571-.30029,6.19791,6.19791,0,0,1-2.80664-5.03809c-.27929-5.07177,5.58155-7.1499,7.78809-7.93213a54.8972,54.8972,0,0,1,6.4165-1.875c.00391-.37207.0044-.7456.00342-1.11816-.00976-3.41748-.021-7.291-1.67529-10.47559-1.44776-2.78613-4.91114-5.14648-7.97754-4.10107l-.64453-1.89355c4.12695-1.40381,8.52734,1.47607,10.39648,5.07275,1.87842,3.61523,1.89112,7.92725,1.90088,11.3916.00049.23633.00147.48.00147.73,7.84277-1.32812,13.49609.29688,16.56494,4.8374.39648.58643.731,1.20459,1.05517,1.80274a8.9529,8.9529,0,0,0,2.03516,2.84814c1.42432,1.13574,3.51758,1.18946,5.17822,1.11035A25.992,25.992,0,0,0,228.994,365.36375a63.0825,63.0825,0,0,1,.63476-8.01562,2.05165,2.05165,0,0,1,2.32325-1.76368,2.00429,2.00429,0,0,1,1.78906,2.22413,19.82675,19.82675,0,0,1-2.75244,8.07128q-.02124,2.803.21631,5.58741a5.90433,5.90433,0,0,0,1.17724,3.66406c.83057.833,2.16992,1.0581,3.70654,1.24756,13.894,1.71435,22.4336-.81494,25.3794-7.51074.27539-.62549.49365-1.28125.72461-1.97559a14.60679,14.60679,0,0,1,1.57129-3.59326c3.00683-4.52149,9.72314-4.61182,14.10693-1.86133a16.46355,16.46355,0,0,1,2.604,2.04053,11.41489,11.41489,0,0,0,13.26855,1.94433,25.96231,25.96231,0,0,1,16.40039-2.8164,24.95433,24.95433,0,0,1,7.94531,2.79541,51.79975,51.79975,0,0,1,9.71436-2.812l29.32959-6.05958.4043,1.959-29.32959,6.05957a55.74821,55.74821,0,0,0-7.99463,2.16162,26.041,26.041,0,0,1,10.20019,13.57422,7.67078,7.67078,0,0,1,.34912,4.23193,6.76327,6.76327,0,0,1-2.34863,3.38428A12.46515,12.46515,0,0,1,320.41247,390.69676Zm-2.42969-23.05225c-3.12842,1.48242-5.65381,3.51807-7.001,6.49317a10.38511,10.38511,0,0,0,16.145,12.23242,4.8455,4.8455,0,0,0,1.70068-2.35889,5.922,5.922,0,0,0-.32324-3.13183A24.10821,24.10821,0,0,0,317.98278,367.64451Zm-135.918,1.45948a54.36486,54.36486,0,0,0-5.68945,1.69482c-4.60352,1.63232-6.59571,3.46387-6.45948,5.9375A4.17313,4.17313,0,0,0,171.785,380.188a4.59268,4.59268,0,0,0,4.25879.15381C180.68493,378.38426,181.81823,373.94871,182.06481,369.104Zm49.60547-11.53467a.0935.0935,0,0,0-.05127.0122q-.178,1.23193-.30615,2.46485a16.09722,16.09722,0,0,0,.438-2.437C231.74352,357.58152,231.705,357.56932,231.67028,357.56932Z"
        transform="translate(-102.19616 -110.27593)"
        fill={color}
      />
      <path
        d="M926.8913,318.12715a21.35191,21.35191,0,0,1-2.65257-28.78818c-.42992.40313-.85019.82167-1.2525,1.26662A21.35442,21.35442,0,0,0,954.66587,319.249c.40231-.445.77654-.90512,1.13445-1.37335A21.3519,21.3519,0,0,1,926.8913,318.12715Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <circle cx="805.35265" cy="179.02742" r="43.97992" fill="#2f2e41" />
      <path
        d="M888.33766,351.1603l1.30329-3.38856-23.71989,20.07068-28.6724,16.16081s-14.59686-56.30217-15.63949-57.3448-19.81-40.66268-28.15109-21.89529,16.16081,29.715,16.16081,29.715.782,68.5531,25.80516,68.03178,56.04151-23.19858,56.56283-25.28384S888.33766,351.1603,888.33766,351.1603Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#ffb8b8"
      />
      <path
        d="M844.54709,670.20592l-3.1279,45.35452s-8.34106,9.3837-9.38369,19.81-11.99028,29.19372-11.99028,29.19372-3.1279,3.1279,6.2558,2.08527,25.5445-2.60659,27.10845-7.29843.52131-24.50187,9.905-26.58714v18.76739h4.69185l-1.564-20.33134s10.94764-15.11817-2.60659-23.98055l4.17054-34.40688Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <path
        d="M973.83355,673.85513l18.76739,34.9282s-2.60658,13.03291,0,17.20344,2.60658,18.24607,2.08526,19.81-1.04263,15.63949,11.99028,16.68213c0,0,3.1279,3.12789,6.77711-1.04264s9.3837-11.99027,7.29843-16.1608-9.38369-38.57742-9.905-39.62-15.63949-42.22662-15.63949-42.22662Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <circle cx="800.93986" cy="198.89335" r="26.06582" fill="#ffb8b8" />
      <path
        d="M900.32794,332.39291s6.77711,8.86238,4.69185,9.905-14.07554,1.564-21.374,10.42633,8.86237,31.279,8.86237,31.279l61.51534-41.184-25.02319-8.34106s-8.14543-12.695-7.62411-22.6Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#ffb8b8"
      />
      <path
        d="M966.0138,344.38319l-17.72475-6.2558s-67.77113,31.8003-66.7285,33.36425,0,12.51159,0,12.51159-9.905,6.77711-5.21316,22.41661,15.11817,16.1608,13.55422,18.24607-2.08526,14.59686-2.08526,14.59686S806.491,563.85738,813.26811,656.65169c0,0,71.94166,48.48242,81.84667,17.20344s13.03291-113.12565,13.03291-113.12565,8.86237,128.24383,29.715,127.72251,68.29244-7.29843,64.12191-23.45924-38.05609-82.8893-34.40688-130.32909-25.02318-88.62378-25.02318-88.62378,6.25579-13.03291,3.12789-15.11818l34.40688-52.13163S980.08934,349.075,966.0138,344.38319Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <path
        d="M966.26511,347.45624a4.5539,4.5539,0,0,0-6.51989,2.43824c-1.56976,4.31641-3.16073,13.31468-2.5938,32.02349,1.04264,34.40688,1.56395,57.86611,1.56395,57.86611v52.13164s-22.93792,50.04637-10.42632,50.04637,21.374-39.62,21.374-39.62,11.469-59.95139,7.81974-70.37771C977.48276,431.96434,987.77254,359.93592,966.26511,347.45624Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#ffb8b8"
      />
      <ellipse
        cx="796.98917"
        cy="174.8731"
        rx="22.37129"
        ry="15.25315"
        fill="#2f2e41"
      />
      <circle cx="832.51547" cy="141.55417" r="21.35441" fill="#2f2e41" />
      <path
        d="M949.96478,267.08325a21.3519,21.3519,0,0,1-21.27485-19.57488c-.04853.58735-.07957,1.17967-.07957,1.77953a21.35441,21.35441,0,1,0,42.70883,0c0-.59986-.031-1.19218-.07957-1.77953A21.35189,21.35189,0,0,1,949.96478,267.08325Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <ellipse
        cx="927.63789"
        cy="300.56755"
        rx="1.82461"
        ry="4.17053"
        transform="translate(-146.64304 113.45345) rotate(-13.43351)"
        fill="#ffb8b8"
      />
      <circle cx="826.22371" cy="192.89821" r="1.04263" fill="#f2f2f2" />
      <rect x="324.5" y="198.30999" width="383" height="271" fill="#3f3d56" />
      <circle cx="363.5" cy="248.30999" r="18" fill={color} />
      <circle cx="414.5" cy="255.30999" r="2" fill="#f2f2f2" />
      <circle cx="352.5" cy="310.30999" r="2" fill="#f2f2f2" />
      <circle cx="389.5" cy="278.30999" r="1" fill="#f2f2f2" />
      <circle cx="492.5" cy="366.30999" r="1" fill="#f2f2f2" />
      <circle cx="599.5" cy="350.30999" r="1" fill="#f2f2f2" />
      <circle cx="583.5" cy="433.30999" r="1" fill="#f2f2f2" />
      <circle cx="557.5" cy="248.30999" r="1" fill="#f2f2f2" />
      <circle cx="534.5" cy="309.30999" r="1" fill="#f2f2f2" />
      <circle cx="369.5" cy="356.30999" r="1" fill="#f2f2f2" />
      <circle cx="399.5" cy="416.30999" r="1" fill="#f2f2f2" />
      <circle cx="465.5" cy="333.30999" r="1" fill="#f2f2f2" />
      <circle cx="632.5" cy="236.30999" r="1" fill="#f2f2f2" />
      <circle cx="517.5" cy="414.30999" r="1" fill="#f2f2f2" />
      <circle cx="633.5" cy="279.30999" r="1" fill="#f2f2f2" />
      <rect x="474.5" y="266.30999" height="5" fill="#f2f2f2" />
      <rect x="419.5" y="377.30999" height="5" fill="#f2f2f2" />
      <rect x="582.5" y="285.30999" height="5" fill="#f2f2f2" />
      <rect x="648.5" y="366.30999" height="5" fill="#f2f2f2" />
      <polygon
        points="707.5 236.48 707.5 259.25 438.5 316.31 707.5 236.48"
        fill="#f2f2f2"
        opacity="0.1"
      />
      <polygon
        points="561.5 333.31 498.5 363.31 561.5 336.31 561.5 333.31"
        fill="#f2f2f2"
        opacity="0.1"
      />
      <polygon
        points="707.5 350.6 661.5 370.31 707.5 348.41 707.5 350.6"
        fill="#f2f2f2"
        opacity="0.1"
      />
      <circle
        cx="463.0021"
        cy="31.2479"
        r="31.2479"
        fill={color}
        opacity="0.4"
      />
      <circle
        cx="405.17017"
        cy="46.17227"
        r="21.92017"
        fill={color}
        opacity="0.4"
      />
      <path
        d="M1026.077,752.84168l-2-.03907a463.835,463.835,0,0,1,7.09961-66.28711c8.64843-46.88086,23.02929-77.66992,42.74316-91.51171l1.14844,1.63671C1029.01647,628.97449,1026.10045,751.60632,1026.077,752.84168Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <path
        d="M1051.077,752.36316l-2-.03906c.043-2.21485,1.293-54.41406,21.84277-68.8418l1.14844,1.63672C1052.34752,698.96472,1051.08678,751.83093,1051.077,752.36316Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <circle cx="984.25" cy="476.54622" r="10" fill={color} />
      <circle cx="979.29785" cy="562.54622" r="10" fill={color} />
      <path
        d="M1046.41578,602.81675c1.87936,12.004-3.0189,22.74063-3.0189,22.74063s-7.94529-8.7258-9.82465-20.72984,3.0189-22.74063,3.0189-22.74063S1044.53643,590.81271,1046.41578,602.81675Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <path
        d="M1079.103,631.9705c-11.493,3.9422-22.91879.98962-22.91879.98962s7.20793-9.34414,18.70089-13.28634,22.91878-.98962,22.91878-.98962S1090.59591,628.02831,1079.103,631.9705Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
      <path
        d="M1079.47221,708.13165a31.13411,31.13411,0,0,1-16.06421.69364A28.37373,28.37373,0,0,1,1092.58,698.819,31.13413,31.13413,0,0,1,1079.47221,708.13165Z"
        transform="translate(-102.19616 -110.27593)"
        fill="#2f2e41"
      />
    </svg>
  );
};

CardPostal.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

CardPostal.defaultProps = {
  color: "primary",
  style: {}
};

export default CardPostal;
