import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Gardening = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="b4a83183-0e56-418f-b042-c525b5329012"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="826.55709"
      height="848.66119"
      viewBox="0 0 826.55709 848.66119"
    >
      <title>Gardening</title>
      <path
        d="M863.62834,259.673s-15.49325,8.93842-10.7261,21.4522c0,0,16.08915,4.76716,22.644,16.685s57.20587,54.82229,57.20587,54.82229l36.94546-18.47273s-12.85237-17.15722-53.50185-29.137c0,0-23.96443-25.68532-32.30695-30.45248S863.62834,259.673,863.62834,259.673Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#cbcdda"
      />
      <path
        d="M863.62834,259.673s-15.49325,8.93842-10.7261,21.4522c0,0,16.08915,4.76716,22.644,16.685s57.20587,54.82229,57.20587,54.82229l36.94546-18.47273s-12.85237-17.15722-53.50185-29.137c0,0-23.96443-25.68532-32.30695-30.45248S863.62834,259.673,863.62834,259.673Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.05"
      />
      <path
        d="M327.97522,830.09883c-7.95511,1.96569-16.27659-.32894-24.47038-.42633s-17.75326,3.34632-19.76147,11.2908c-2.69729,10.67053,9.77654,18.7153,20.45687,21.37353,41.45295,10.31725,85.334-3.07372,127.701,2.38809,17.85354,2.30162,35.21563,7.93352,53.16674,9.27668,41.088,3.07435,81.23349-16.4665,122.3774-14.26392,20.6127,1.10347,40.6476,7.6497,61.26307,8.69992,49.325,2.51279,97.98721-26.44356,146.27406-16.06815,13.63487,2.92973,26.4363,8.903,39.94654,12.36229,34.15595,8.74561,70.11371.95051,104.49815-6.84854,6.82762-1.54864,15.05846-4.563,15.89982-11.51327.92839-7.66928-7.87766-12.4786-15.20407-14.92881-80.114-26.793-165.88709-40.98729-249.45-28.60352-19.01624,2.81815-37.97789,7.006-57.19983,6.72926-42.5445-.61248-81.63878-22.80549-123.40611-30.92334-79.14208-15.382-158.27113,20.50462-230.92445,55.45556"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
        opacity="0.1"
      />
      <path
        d="M437.66563,602.73538h-24.228v204.8364s156.38048,50.65846,308.35587,0V602.73538Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#3f3d56"
      />
      <ellipse
        cx="378.6916"
        cy="578.16725"
        rx="151.97539"
        ry="23.12669"
        fill="#3f3d56"
      />
      <ellipse
        cx="378.6916"
        cy="578.16725"
        rx="151.97539"
        ry="23.12669"
        opacity="0.1"
      />
      <path
        d="M742.07464,358.00235C703.73624,499.7241,572.41858,587.496,572.41858,587.496s-69.15885-142.00451-30.82045-283.72626S711.2542,74.27609,711.2542,74.27609,780.413,216.2806,742.07464,358.00235Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#3f3d56"
      />
      <path
        d="M393.30216,358.00235C431.64056,499.7241,562.95822,587.496,562.95822,587.496s69.15884-142.00451,30.82045-283.72626S424.1226,74.27609,424.1226,74.27609,354.96376,216.2806,393.30216,358.00235Z"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
      />
      <path
        d="M449.63773,327.54482C554.83885,429.95386,567.6884,587.3804,567.6884,587.3804S409.97324,578.76908,304.77212,476.36,186.72145,216.52445,186.72145,216.52445,344.43661,225.13578,449.63773,327.54482Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#3f3d56"
      />
      <path
        d="M685.73907,327.54482C580.538,429.95386,567.6884,587.3804,567.6884,587.3804S725.40356,578.76908,830.60468,476.36,948.65535,216.52445,948.65535,216.52445,790.94019,225.13578,685.73907,327.54482Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#3f3d56"
      />
      <circle cx="380.89414" cy="48.45592" r="48.45592" fill={color} />
      <path
        d="M277.44882,417.28049c3.43579,12.46725,15.37265,20.05192,15.37265,20.05192s6.36635-12.62875,2.93057-25.096-15.37264-20.05192-15.37264-20.05192S274.013,404.81323,277.44882,417.28049Z"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
      />
      <path
        d="M341.75829,486.71308c-3.69823,12.39194,2.4001,25.15228,2.4001,25.15228s12.09432-7.331,15.79255-19.72291-2.4001-25.15229-2.4001-25.15229S345.45651,474.32113,341.75829,486.71308Z"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
      />
      <path
        d="M805.61765,566.42866c-9.07688,9.21127-9.6736,23.34137-9.6736,23.34137s14.11981-.80431,23.19669-10.01557,9.6736-23.34137,9.6736-23.34137S814.69453,557.2174,805.61765,566.42866Z"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
      />
      <path
        d="M960.16325,767.971s1.78768,26.21936,4.76716,29.19883-26.81525,4.76716-26.81525,4.76716l4.17126-33.966Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#ffb9b9"
      />
      <path
        d="M960.16325,767.971s1.78768,26.21936,4.76716,29.19883-26.81525,4.76716-26.81525,4.76716l4.17126-33.966Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.05"
      />
      <path
        d="M966.71809,788.23145s-4.17126,0-19.06862,7.74663c0,0-10.13021-1.78768-14.30147-16.08915,0,0-12.51379,21.4522-20.85631,22.644S888.06,804.9165,898.78612,819.218s73.89092,7.74662,73.89092,7.74662S974.46472,792.40271,966.71809,788.23145Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#cbcdda"
      />
      <path
        d="M966.71809,788.23145s-4.17126,0-19.06862,7.74663c0,0-10.13021-1.78768-14.30147-16.08915,0,0-12.51379,21.4522-20.85631,22.644S888.06,804.9165,898.78612,819.218s73.89092,7.74662,73.89092,7.74662S974.46472,792.40271,966.71809,788.23145Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.05"
      />
      <path
        d="M957.77967,808.49187l-4.17126,11.322-27.41114-7.74663,1.56124-11.23856.37541-2.71135,1.04282-7.50229s23.23988-5.95894,23.23988-2.97947a46.231,46.231,0,0,0,1.52553,7.25795c.95334,3.66477,2.1511,7.842,2.95561,10.58906C957.42215,807.30008,957.77967,808.49187,957.77967,808.49187Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#ffb9b9"
      />
      <path
        d="M942.82274,653.08259c-1.87709,3.17609-4.00447,9.135-.05361,16.58372a28.87381,28.87381,0,0,0,4.28444,5.94108c13.10968,14.30147,16.685,46.47977,16.685,46.47977V773.93l-8.93842.68525-14.30147,1.10243-21.4522-88.19239s-12.51378-64.3566-6.55484-75.6786,11.322-82.23344,11.322-82.23344l4.946-5.12471,11.73909-12.15623h33.966a22.84074,22.84074,0,0,1,6.60852,7.38907c5.70261,9.439,10.82139,29.06775-4.82084,65.31006-24.43167,56.61-31.58241,65.5484-31.58241,65.5484A13.73024,13.73024,0,0,0,942.82274,653.08259Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#4c4c78"
      />
      <path
        d="M942.82274,653.08259c-1.87709,3.17609-4.00447,9.135-.05361,16.58372a28.87381,28.87381,0,0,0,4.28444,5.94108c13.10968,14.30147,16.685,46.47977,16.685,46.47977V773.93l-8.93842.68525-14.30147,1.10243-21.4522-88.19239s-12.51378-64.3566-6.55484-75.6786,11.322-82.23344,11.322-82.23344l4.946-5.12471,11.73909-12.15623h33.966a22.84074,22.84074,0,0,1,6.60852,7.38907c5.70261,9.439,10.82139,29.06775-4.82084,65.31006-24.43167,56.61-31.58241,65.5484-31.58241,65.5484A13.73024,13.73024,0,0,0,942.82274,653.08259Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.05"
      />
      <path
        d="M953.94215,794.89351l-25.80823,3.22381,1.04282-7.50229s23.23988-5.95894,23.23988-2.97947A46.231,46.231,0,0,0,953.94215,794.89351Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.1"
      />
      <path
        d="M941.09463,576.68891s1.48377,46.9088,1.72811,76.39368c.05361,6.66806.04764,12.44821-.05361,16.58372a36.73834,36.73834,0,0,1-.48271,6.537c-1.78769,5.363,1.78768,17.28094,1.78768,17.28094,14.89736,39.329,10.7261,73.89092,10.7261,73.89092V793.5945l-28.60293,3.57537s4.76715-3.57537-8.34253-38.13725c-7.53211-19.85521-9.16486-39.31118-9.18864-52.27785a55.94454,55.94454,0,0,0-4.18319-20.68347,25.516,25.516,0,0,1-1.52553-6.88854c-1.19179-11.91789-6.55484-26.81525-6.55484-26.81525s-14.30147-42.30851-17.87683-73.295a170.67312,170.67312,0,0,1,.8283-44.3286,110.62549,110.62549,0,0,1,2.15117-11.08959s58.25465-36.65944,80.24906-11.322a28.691,28.691,0,0,1,4.96385,8.34253,55.06147,55.06147,0,0,1,2.81261,9.284C976.37752,563.5852,941.09463,576.68891,941.09463,576.68891Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#4c4c78"
      />
      <circle cx="752.58549" cy="259.6271" r="30.39062" fill="#ffb9b9" />
      <path
        d="M922.6219,304.36513s12.51378,35.15777,0,53.6305,39.92493,12.51379,39.92493,12.51379l20.26041-24.43168s-23.83578,0-25.02757-41.71261S922.6219,304.36513,922.6219,304.36513Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#ffb9b9"
      />
      <path
        d="M982.80724,526.63377a78.20342,78.20342,0,0,1-13.27654,3.32507c-7.41886,1.14414-16.17252,1.18586-21.28534-3.32507-3.03315-2.67556-10.50562-3.00333-19.48572-2.14524-18.91368,1.81154-44.51336,8.86691-49.40563,10.25536a110.62549,110.62549,0,0,1,2.15117-11.08959s58.25465-36.65944,80.24906-11.322h12.71048a22.84074,22.84074,0,0,1,6.60852,7.38907C982.16959,524.46471,982.80724,526.63377,982.80724,526.63377Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.1"
      />
      <path
        d="M957.77967,808.49187l-4.17126,11.322-27.41114-7.74663,1.56124-11.23856c4.70758,10.41623,12.74022,11.83446,12.74022,11.83446,8.66433-4.505,13.69961-6.388,16.399-7.18056C957.42215,807.30008,957.77967,808.49187,957.77967,808.49187Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.1"
      />
      <path
        d="M959.56736,805.51239s-4.17126,0-19.06863,7.74663c0,0-10.1302-1.78768-14.30146-16.08915,0,0-12.51379,21.4522-20.85631,22.644s-24.43168,2.38358-13.70558,16.68505,73.89092,7.74663,73.89092,7.74663S967.314,809.68365,959.56736,805.51239Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#cbcdda"
      />
      <path
        d="M818.19361,291.11677s1.16344-23.20863,25.5543-20.93717a4.16968,4.16968,0,0,1,3.29031,6.10473l-5.00089,9.41341Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#ffb9b9"
      />
      <path
        d="M958.97146,353.22848s-29.19883-4.76716-36.94546-10.72611c0,0-5.95894,11.322-16.685,5.36306s-35.75367-5.36306-35.75367-5.36306-20.85631-11.322-25.02757-36.94545c0,0-4.17126-15.49326-2.97947-19.66452,0,0-15.49326-16.08915-23.23989,5.363,2.97948,14.89736,5.363,13.70557,4.76716,25.62346l9.53431,26.21936s.59589,8.93842,17.87684,20.85631,36.94545,30.39062,36.94545,30.39062-10.42815,5.661-6.55484,31.5824c4.73421,31.68278-2.38357,76.87039-2.38357,76.87039v29.19883s59.58945-17.28094,69.71965-8.34252,34.56188,0,34.56188,0-2.97947-10.13021-7.15073-34.56188.59589-48.26745.59589-48.26745,15.49326-41.11672,22.644-57.80177-5.36305-39.329-17.87683-47.67156-17.17451-3.33375-17.17451-3.33375S985.78671,347.86543,958.97146,353.22848Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#cbcdda"
      />
      <path
        d="M906.4396,277.86435a10.53592,10.53592,0,0,0,.61763,3.64037,11.4789,11.4789,0,0,0,2.79467,3.47243c4.46247,4.36085,8.37721,9.54316,9.94755,15.58176,1.06317,4.08833,1.006,8.373.942,12.59687-.25949,17.10982-.97626,35.57729-11.54417,49.03584-3.88392,4.94629-8.87634,8.87969-13.56991,13.06549a4.09266,4.09266,0,0,0-1.42568,1.90943,3.57334,3.57334,0,0,0,.44218,2.35828c2.17758,4.52942,6.77041,7.30741,11.11822,9.82813,1.98727,1.15216,4.08087,2.33612,6.37677,2.41048,5.41806.17548,8.99859-5.54789,13.92979-7.79942,7.17809-3.27743,15.23435,1.28445,22.359,4.6765A78.79217,78.79217,0,0,0,964.57,394.26975c7.62675,1.75948,16.25043,2.19164,22.67147-2.28422a17.31344,17.31344,0,0,0,7.0622-11.051c.51556-2.9118.43562-6.292,2.6396-8.26348,1.13542-1.01565,2.68528-1.43733,3.91415-2.33765,1.9058-1.39626,2.81268-3.74582,3.62413-5.96464l7.33991-20.07027a16.49386,16.49386,0,0,0,1.43468-6.74069c-.352-4.83243-4.80921-8.34061-9.284-10.19865s-9.42434-2.77409-13.35918-5.60134c-6.654-4.781-8.70779-13.70934-9.30553-21.881a105.33953,105.33953,0,0,1,.11984-16.85411c.72711-8.31334,2.35188-17.16542-1.34617-24.64637-3.9495-7.98966-12.81046-12.069-21.01518-15.54978-3.1507-1.33665-6.38609-2.69323-9.80525-2.84415-3.61807-.15969-7.14161,1.0426-10.56332,2.2291-5.43719,1.88538-10.954,4.32674-16.56721,5.60552-3.15313.71834-6.60878.18083-9.64994,1.32149C901.30677,253.32943,906.4396,268.86819,906.4396,277.86435Z"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.1"
      />
      <path
        d="M906.4396,276.67256a10.53588,10.53588,0,0,0,.61763,3.64037,11.4789,11.4789,0,0,0,2.79467,3.47243c4.46247,4.36085,8.37721,9.54316,9.94755,15.58176,1.06317,4.08833,1.006,8.373.942,12.59688-.25949,17.10981-.97626,35.57728-11.54417,49.03583-3.88392,4.94629-8.87634,8.87969-13.56991,13.06549a4.09266,4.09266,0,0,0-1.42568,1.90943,3.57333,3.57333,0,0,0,.44218,2.35828c2.17758,4.52942,6.77041,7.30741,11.11822,9.82814,1.98727,1.15215,4.08087,2.33611,6.37677,2.41047,5.41806.17548,8.99859-5.54789,13.92979-7.79942,7.17809-3.27743,15.23435,1.28445,22.359,4.6765A78.79217,78.79217,0,0,0,964.57,393.078c7.62675,1.75948,16.25043,2.19164,22.67147-2.28422a17.31344,17.31344,0,0,0,7.0622-11.051c.51556-2.9118.43562-6.292,2.6396-8.26348,1.13542-1.01565,2.68528-1.43732,3.91415-2.33765,1.9058-1.39625,2.81268-3.74582,3.62413-5.96464l7.33991-20.07027a16.49386,16.49386,0,0,0,1.43468-6.74069c-.352-4.83243-4.80921-8.34061-9.284-10.19864s-9.42434-2.7741-13.35918-5.60135c-6.654-4.781-8.70779-13.70934-9.30553-21.881a105.33953,105.33953,0,0,1,.11984-16.85411c.72711-8.31333,2.35188-17.16542-1.34617-24.64637-3.9495-7.98966-12.81046-12.069-21.01518-15.54978-3.1507-1.33665-6.38609-2.69323-9.80525-2.84414-3.61807-.1597-7.14161,1.04259-10.56332,2.22909-5.43719,1.88538-10.954,4.32674-16.56721,5.60552-3.15313.71835-6.60878.18083-9.64994,1.3215C901.30677,252.13765,906.4396,267.6764,906.4396,276.67256Z"
        transform="translate(-186.72145 -25.66941)"
        fill="#b96b6b"
      />
      <path
        d="M882.41224,439.29515s4.75394-1.15171,28.58972-4.72708,65.54839,4.76716,65.54839,4.76716"
        transform="translate(-186.72145 -25.66941)"
        opacity="0.05"
      />
      <path
        d="M227.44882,537.28049c3.43579,12.46725,15.37265,20.05192,15.37265,20.05192s6.36635-12.62875,2.93057-25.096-15.37264-20.05192-15.37264-20.05192S224.013,524.81323,227.44882,537.28049Z"
        transform="translate(-186.72145 -25.66941)"
        fill={color}
      />
    </svg>
  );
};

Gardening.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Gardening.defaultProps = {
  color: "primary",
  style: {}
};

export default Gardening;
