import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SocialUpdate = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a62754ec-3789-432d-a213-a89383acadf6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1092.65368"
      height="613.5"
      viewBox="0 0 1092.65368 613.5"
    >
      <title>social update</title>
      <circle cx="130.09659" cy="18.5" r="7" fill="#7d7b8c" />
      <circle cx="154.09659" cy="18.5" r="7" fill="#7d7b8c" />
      <circle cx="178.09659" cy="18.5" r="7" fill="#7d7b8c" />
      <rect x="173.09659" y="401.5" width="669" height="79" fill="#f2f2f2" />
      <rect x="503.59659" y="129" width="398" height="202" fill="#f2f2f2" />
      <polyline points="573.455 312.5 663.597 162 757.097 312.5" fill={color} />
      <polygon
        points="710.097 235.5 728.097 188.5 830.097 312.5 709.597 312.5 710.097 235.5"
        fill={color}
      />
      <path
        d="M744.8187,360.07587a25.00091,25.00091,0,1,0-26.13562-42.62757"
        transform="translate(-53.67316 -143.25)"
        fill={color}
      />
      <path
        d="M1067.70776,594.90689a19.51177,19.51177,0,0,0-1.16958,6.72343,18.81539,18.81539,0,0,0,2.48853,9.53826,19.52374,19.52374,0,0,0,0,19.07648,19.52362,19.52362,0,0,0,0,19.07642,19.52372,19.52372,0,0,0,0,19.07647,18.81507,18.81507,0,0,0-2.48853,9.53821c0,8.62006,5.33808,15.608,11.92279,15.608s11.92279-6.988,11.92279-15.608a18.81516,18.81516,0,0,0-2.48852-9.53821,19.52378,19.52378,0,0,0,0-19.07647,19.52369,19.52369,0,0,0,0-19.07642,19.5238,19.5238,0,0,0,0-19.07648,18.81549,18.81549,0,0,0,2.48852-9.53826,19.53206,19.53206,0,0,0-1.13618-6.632"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M1033.82807,432.93116a57.23893,57.23893,0,0,1-4.44019-6.536L1060.716,421.25l-33.8822.252a57.21052,57.21052,0,0,1-1.09062-45.25182l45.457,23.58083-41.922-30.81568a57.11458,57.11458,0,1,1,94.32669,63.91584,57.14269,57.14269,0,0,1,6.51324,10.41508l-40.66612,21.12729,43.36142-14.55285a57.14429,57.14429,0,0,1-9.20854,53.63078,57.11033,57.11033,0,1,1-89.77687,0,57.11806,57.11806,0,0,1,0-70.6203Z"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M1077.70776,593.90689a19.51177,19.51177,0,0,0-1.16958,6.72343,18.81539,18.81539,0,0,0,2.48853,9.53826,19.52374,19.52374,0,0,0,0,19.07648,19.52362,19.52362,0,0,0,0,19.07642,19.52372,19.52372,0,0,0,0,19.07647,18.81507,18.81507,0,0,0-2.48853,9.53821c0,8.62006,5.33808,15.608,11.92279,15.608s11.92279-6.988,11.92279-15.608a18.81516,18.81516,0,0,0-2.48852-9.53821,19.52378,19.52378,0,0,0,0-19.07647,19.52369,19.52369,0,0,0,0-19.07642,19.5238,19.5238,0,0,0,0-19.07648,18.81549,18.81549,0,0,0,2.48852-9.53826,19.53206,19.53206,0,0,0-1.13618-6.632"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M1043.82807,431.93116a57.23893,57.23893,0,0,1-4.44019-6.536L1070.716,420.25l-33.8822.252a57.21052,57.21052,0,0,1-1.09062-45.25182l45.457,23.58083-41.922-30.81568a57.11458,57.11458,0,1,1,94.32669,63.91584,57.14269,57.14269,0,0,1,6.51324,10.41508l-40.66612,21.12729,43.36142-14.55285a57.14429,57.14429,0,0,1-9.20854,53.63078,57.11033,57.11033,0,1,1-89.77687,0,57.11806,57.11806,0,0,1,0-70.6203Z"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect
        x="111.09659"
        y="0.5"
        width="840"
        height="546"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <line
        x1="111.09659"
        y1="30.83505"
        x2="951.09659"
        y2="30.83505"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <circle
        cx="132.09659"
        cy="15.5"
        r="7"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <circle
        cx="156.09659"
        cy="15.5"
        r="7"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <circle
        cx="180.09659"
        cy="15.5"
        r="7"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect x="127.09659" y="151" width="290" height="21" fill="#f2f2f2" />
      <rect x="127.09659" y="201" width="290" height="21" fill="#f2f2f2" />
      <rect x="127.09659" y="251" width="290" height="21" fill="#f2f2f2" />
      <rect
        x="137.09659"
        y="144"
        width="290"
        height="21"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect
        x="137.09659"
        y="194"
        width="290"
        height="21"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect
        x="137.09659"
        y="244"
        width="290"
        height="21"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect
        x="527.09659"
        y="103.5"
        width="398"
        height="202"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <rect
        x="196.59659"
        y="383.5"
        width="669"
        height="79"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <polyline
        points="578.455 305.5 668.597 155 762.097 305.5"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <polyline
        points="713.097 226.5 731.097 179.5 833.097 305.5"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M751.8187,346.07587a25.00091,25.00091,0,1,0-26.13562-42.62757"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M74.77742,574.26643a21.61922,21.61922,0,1,0-9.55588-40.44875l3.81914,10.46548L61.1831,536.739a21.53764,21.53764,0,0,0-6.98389,14.92195,21.19986,21.19986,0,0,0,.54809,5.95365A21.61508,21.61508,0,0,0,74.77742,574.26643Z"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M137.95529,689.78c-4.58322-8.48548.617-18.887,6.59456-26.45521s13.26293-15.44314,13.10818-25.086c-.22239-13.85854-14.93241-22.042-26.68538-29.38889a130.15653,130.15653,0,0,1-23.96136-19.266c-2.88553-2.94577-5.67507-6.09572-7.36281-9.85808-2.43054-5.41822-2.36293-11.58254-2.20966-17.519q.76587-29.664,2.93121-59.26981"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M74.77742,571.26643a21.61922,21.61922,0,1,0-9.55588-40.44875l3.81914,10.46548L61.1831,533.739a21.53764,21.53764,0,0,0-6.98389,14.92195,21.19986,21.19986,0,0,0,.54809,5.95365A21.61508,21.61508,0,0,0,74.77742,571.26643Z"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M78.02811,505.85642A21.594,21.594,0,0,1,88.819,488.14684l4.83932,9.57362-.14581-11.5891a21.61656,21.61656,0,1,1-15.4844,19.72506Z"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M78.02811,501.85642A21.594,21.594,0,0,1,88.819,484.14684l4.83932,9.57362-.14581-11.5891a21.61656,21.61656,0,1,1-15.4844,19.72506Z"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M127.41226,610.1809a21.61661,21.61661,0,0,0,6.85748-42.40329l.11228,8.90576-4.89363-9.68732a.37593.37593,0,0,0-.05874-.0036,21.61777,21.61777,0,1,0-2.01739,43.18845Z"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M127.24626,606.1809a21.61662,21.61662,0,0,0,6.85748-42.40329l.11228,8.90576-4.89363-9.68732a.376.376,0,0,0-.05874-.0036,21.61777,21.61777,0,1,0-2.01739,43.18845Z"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M116.57462,651.14518a21.60757,21.60757,0,1,0-1.04587-17.40273l13.50068,10.98573-14.85174-3.4422A21.41561,21.41561,0,0,0,116.57462,651.14518Z"
        transform="translate(-53.67316 -143.25)"
        fill="#57b894"
      />
      <path
        d="M116.57462,648.14518a21.60757,21.60757,0,1,0-1.04587-17.40273l13.50068,10.98573-14.85174-3.4422A21.41561,21.41561,0,0,0,116.57462,648.14518Z"
        transform="translate(-53.67316 -143.25)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <line
        x1="137.59659"
        y1="613"
        x2="380.59659"
        y2="613"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
      />
      <path
        d="M252.07807,699.37287a26.65094,26.65094,0,0,1-5.054,2.16454c-3.13868.85739-6.49335.54284-9.66364,1.27476-1.298.29966-2.7107.92647-3.12348,2.193a4.60648,4.60648,0,0,0,.342,2.85709c3.50311,10.271,5.61456,21.17627,11.20123,30.47969a46.12723,46.12723,0,0,0,8.64737,10.49824,8.24465,8.24465,0,0,0,4.40963,2.44411,4.479,4.479,0,0,0,4.55494-6.29239c-.50092-1.11306-1.43205-1.97522-2.03259-3.03785a11.59184,11.59184,0,0,1-1.12442-4.32021c-.55194-4.39288-1.08365-8.98415.43842-13.14171,1.02086-2.7885,2.89348-5.16576,4.4535-7.69246s2.85618-5.421,2.50906-8.3701a14.537,14.537,0,0,0-2.25569-5.59529c-1.03913-1.7444-3.09288-6.43229-5.18055-7.01443C258.03284,695.21562,253.968,698.40427,252.07807,699.37287Z"
        transform="translate(-53.67316 -143.25)"
        fill="#f2f2f2"
      />
      <path
        d="M309.20219,734.851a8.66378,8.66378,0,0,1-.40986,2.93257c-.65357,1.72576-2.27481,2.90832-3.11241,4.55265-1.16492,2.28695-.63692,5.0513.13487,7.49905a7.68421,7.68421,0,0,0,2.41787,4.08043,7.96758,7.96758,0,0,0,3.67942,1.17862c11.14628,1.54263,22.46892.65756,33.71679.98073,2.05007.05891,4.22054.13069,6.01011-.87118s2.89592-3.52058,1.67878-5.17129c-1.093-1.48228-3.254-1.46848-5.09355-1.55583a20.95736,20.95736,0,0,1-12.92405-5.32387,9.33914,9.33914,0,0,1-1.81279-2.0867,12.82549,12.82549,0,0,1-.94822-2.17383,96.89993,96.89993,0,0,0-5.61356-12.43312,6.58635,6.58635,0,0,0-2.41386-2.88993,6.37944,6.37944,0,0,0-2.61986-.572c-2.80341-.18167-10.06289-1.13578-12.23068,1.04418C307.65817,726.05573,309.24659,732.29262,309.20219,734.851Z"
        transform="translate(-53.67316 -143.25)"
        fill="#f2f2f2"
      />
      <circle cx="272.77979" cy="324.76443" r="17.9063" fill="#fbbebe" />
      <path
        d="M310.28317,482.80021a13.46017,13.46017,0,0,1-5.50037,7.06362l24.76579,5.05188a26.23582,26.23582,0,0,1-.3472-11.04293,6.36528,6.36528,0,0,0,.14817-2.7247c-.46569-1.79679-2.48832-2.66165-4.29807-3.0742-4.52-1.03038-8.51723-1.58293-12.71761-3.57924C311.05,476.69256,311.22974,480.26608,310.28317,482.80021Z"
        transform="translate(-53.67316 -143.25)"
        fill="#fbbebe"
      />
      <path
        d="M304.57592,483.15927a19.367,19.367,0,0,1,16.87929.44105,38.20815,38.20815,0,0,1,8.38709,6.69067c2.3809,2.29689,4.92073,4.92686,5.08971,8.23078a23.06106,23.06106,0,0,1-.66994,4.74856,15.923,15.923,0,0,0,8.51591,16.35792c1.96744,3.27745,2.37349,7.24824,2.40366,11.07076.11433,14.48322-4.45519,29.1451-1.193,43.2566.76591,3.31316,1.95384,6.52224,2.61552,9.85777.857,4.32038.81473,8.76288,1.26312,13.14456a58.87457,58.87457,0,0,0,3.15993,13.902c-1.07777,1.71413-3.32082,2.37141-5.34086,2.23259a15.08582,15.08582,0,0,1-5.71143-1.93782c-8.72807-4.4664-16.72236-10.35588-25.76223-14.15175-5.98071-2.51131-12.3521-4.07558-18.15407-6.976s-11.19795-7.50363-12.972-13.74289a32.1681,32.1681,0,0,1-.85616-8.34479c-.17634-11.81215-.34018-23.75325,2.231-35.28353,2.26739-10.16821,6.63813-19.89552,7.59165-30.26974.31037-3.37686.317-6.99183,2.20372-9.80959C296.92363,488.59365,302.68163,487.56221,304.57592,483.15927Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
      <path
        d="M316.26892,468.26719c1.05513-1.37616,3.09011-1.56384,4.77576-1.15677s3.23991,1.27584,4.94232,1.6059a2.88934,2.88934,0,0,0,2.31329-.32491,3.36443,3.36443,0,0,0,.99835-2.2064,42.12449,42.12449,0,0,0,.41461-10.741,3.18054,3.18054,0,0,1,.09811-1.50632c.42147-1.01561,1.70733-1.25734,2.75754-1.58315a8.229,8.229,0,0,0,5.5699-8.42513,3.35006,3.35006,0,0,0-1.02383-2.31164,4.21112,4.21112,0,0,0-2.67967-.6357q-7.22-.058-14.44038.00349a10.48691,10.48691,0,0,0-5.19692.94723,25.24754,25.24754,0,0,0-3.01609,2.5409c-2.67357,2.15748-6.28983,2.59646-9.54252,3.70221a9.46031,9.46031,0,0,0-4.18228,2.494,4.406,4.406,0,0,0-.92243,4.56856,16.22393,16.22393,0,0,0,1.16607,1.79459c1.91864,3.06781.64133,7.047.92784,10.654.35777,4.50416,7.02345,11.8108,11.54335,12.87664C318.069,482.28444,313.85329,471.22383,316.26892,468.26719Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
      <path
        d="M306.16023,665.74863a53.44035,53.44035,0,0,1,.89316,9.90595c-.2204,4.631-1.89051,9.093-2.19926,13.719-.2306,3.45509.30274,6.94755-.17707,10.37693-.30724,2.19588-1.0233,4.31266-1.46659,6.48517a26.81776,26.81776,0,0,0,4.3093,20.55779,3.36687,3.36687,0,0,0,1.25044,1.21188,3.53128,3.53128,0,0,0,1.54985.205,111.20814,111.20814,0,0,0,15.555-1.41365,1.49207,1.49207,0,0,0,.99881-.4407,1.4,1.4,0,0,0,.21691-.58956c.954-4.90439-1.22162-9.82194-1.77488-14.78754-.59076-5.30218.68147-10.61546,1.94428-15.79883a70.17228,70.17228,0,0,1,2.14281-7.55664c.61039-1.66694,1.34756-3.28825,1.8766-4.98277a37.98227,37.98227,0,0,0,1.36079-8.15912q.551-6.53541.58386-13.10077a54.9758,54.9758,0,0,0-1.029-12.366c-1.16057-5.15281-3.53726-9.93772-5.89312-14.66512a9.28739,9.28739,0,0,0-3.47178,1.65009,77.48324,77.48324,0,0,1-9.48616,5.24092c-2.2041,1.02387-6.50249,1.751-7.90137,3.88456-1.37954,2.104-.48944,6.39672-.38405,8.71722Q305.33007,659.81692,306.16023,665.74863Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
      <path
        d="M306.16023,665.74863a53.44035,53.44035,0,0,1,.89316,9.90595c-.2204,4.631-1.89051,9.093-2.19926,13.719-.2306,3.45509.30274,6.94755-.17707,10.37693-.30724,2.19588-1.0233,4.31266-1.46659,6.48517a26.81776,26.81776,0,0,0,4.3093,20.55779,3.36687,3.36687,0,0,0,1.25044,1.21188,3.53128,3.53128,0,0,0,1.54985.205,111.20814,111.20814,0,0,0,15.555-1.41365,1.49207,1.49207,0,0,0,.99881-.4407,1.4,1.4,0,0,0,.21691-.58956c.954-4.90439-1.22162-9.82194-1.77488-14.78754-.59076-5.30218.68147-10.61546,1.94428-15.79883a70.17228,70.17228,0,0,1,2.14281-7.55664c.61039-1.66694,1.34756-3.28825,1.8766-4.98277a37.98227,37.98227,0,0,0,1.36079-8.15912q.551-6.53541.58386-13.10077a54.9758,54.9758,0,0,0-1.029-12.366c-1.16057-5.15281-3.53726-9.93772-5.89312-14.66512a9.28739,9.28739,0,0,0-3.47178,1.65009,77.48324,77.48324,0,0,1-9.48616,5.24092c-2.2041,1.02387-6.50249,1.751-7.90137,3.88456-1.37954,2.104-.48944,6.39672-.38405,8.71722Q305.33007,659.81692,306.16023,665.74863Z"
        transform="translate(-53.67316 -143.25)"
        opacity="0.1"
      />
      <path
        d="M281.95155,595.50478c-2.37789,6.402,1.11743,13.32005,4.15412,19.43715,7.48139,15.07045,12.67667,31.15141,17.8442,47.16348a5.78282,5.78282,0,0,1,.34232,3.69206,4.83608,4.83608,0,0,1-1.74382,2.06844c-3.563,2.70628-8.09988,3.67009-12.34423,5.086a55.73268,55.73268,0,0,0-11.70641,5.48774c-3.07562,1.90581-5.95677,4.10585-8.83228,6.302l-9.15372,6.991a6.11982,6.11982,0,0,0-1.53,1.48106c-.88287,1.38511-.52124,3.19338-.08169,4.776A81.22394,81.22394,0,0,0,263.3818,710.221a4.27089,4.27089,0,0,0,1.62529,2.13c1.42875.7678,3.1763-.2503,4.26733-1.45052s2.03468-2.69379,3.57266-3.209c1.53617-.51465,3.2269.1086,4.83126-.11662,2.59474-.36426,4.31742-2.75454,6.18779-4.58951,7.64168-7.49707,20.4-6.95318,28.80613-13.58176a36.602,36.602,0,0,1,3.85067-3.0081c1.4211-.84,3.03269-1.30108,4.50712-2.04353,4.48454-2.25821,7.30384-6.92679,8.81408-11.7153s1.94095-9.84329,3.02622-14.74562a64.11062,64.11062,0,0,0,1.54915-7.62506,40.84481,40.84481,0,0,0-.1564-7.20956L331.23,605.5347c-.24694-3.05494-.49431-6.11342-.97379-9.14058-9.00825.322-18.01.68445-27.02343.791C296.06064,597.26992,288.7567,597.77131,281.95155,595.50478Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
      <path
        d="M278.64,604.28216c1.222,1.96528,4.19626,1.92469,6.24436.84722s3.63923-2.88763,5.69214-3.95588c2.75864-1.43549,6.023-1.38151,9.13156-1.29371,4.92143.139,9.90327.287,14.63833,1.63565,4.8975,1.395,9.66521,4.0808,14.72924,3.545a3.02965,3.02965,0,0,0,2.32431-1.09108,3.42644,3.42644,0,0,0,.38295-1.75251l.16558-4.42422a3.99476,3.99476,0,0,0-.35226-2.24043,3.75836,3.75836,0,0,0-1.67839-1.28508c-7.20788-3.48926-15.42792-4.139-23.43124-4.41312q-6.10242-.20905-12.21-.172c-3.45521.02107-7.60319-.47886-10.9624.44437C278.80583,591.36545,276.35274,600.60374,278.64,604.28216Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
      <path
        d="M323.89969,488.41141c-9.44425-.08366-18.00273-6.31743-27.44614-6.46929a7.11575,7.11575,0,0,0-3.33261.575,12.408,12.408,0,0,0-3.18067,3.0271c-2.79226,3.02374-6.83574,4.63823-9.70436,7.58962-2.68971,2.76733-4.18558,6.89034-3.12367,10.60047s5.06971,6.556,8.82433,5.664a22.74268,22.74268,0,0,1,8.86005-12.03816,45.04392,45.04392,0,0,1,6.92481-3.63508c4.24432-1.923,8.99042-3.88274,13.42148-2.44127a18.93453,18.93453,0,0,1,4.57881,2.4969l7.38741,4.96248C326.24834,495.348,325.47431,491.54019,323.89969,488.41141Z"
        transform="translate(-53.67316 -143.25)"
        fill={color}
      />
      <path
        d="M284.84873,506.11589c-1.25409,1.56449.55246,3.83133.276,5.81726-.18371,1.31949-1.26955,2.327-1.72173,3.58011-.46838,1.298-.22,2.73583-.39764,4.10429a17.6045,17.6045,0,0,1-.788,2.92287,52.51352,52.51352,0,0,0-1.66016,8.66781L278.9041,543.553a46.77161,46.77161,0,0,0-.52281,5.61006,16.75216,16.75216,0,0,1-.2794,4.19418,30.98117,30.98117,0,0,1-1.72182,3.81639,4.47214,4.47214,0,0,0-.06141,4.032,7.04783,7.04783,0,0,0-1.47535,8.79709,4.88194,4.88194,0,0,1,.76021,1.39987,3.59659,3.59659,0,0,1-.3348,2.0643l-1.67148,4.45366c-.42785,1.14-.56317,2.8756.62634,3.13583a10.50969,10.50969,0,0,0-2.25649,3.56384,4.24323,4.24323,0,0,0,.601,4.0204,5.12252,5.12252,0,0,1,1.04713,1.27078,3.382,3.382,0,0,1-.121,2.00424,7.35763,7.35763,0,0,0,.91031,5.768,5.17347,5.17347,0,0,0,5.20254,2.23c3.34362-.75414,6.34818-1.94464,9.71951-1.326a173.63829,173.63829,0,0,1,21.57174,4.9143c8.024,2.56182,15.79345,6.31861,24.17948,7.10719a2.347,2.347,0,0,0,1.61705-.25153,2.42912,2.42912,0,0,0,.74778-1.53733l2.59189-12.1527a125.05959,125.05959,0,0,0,2.38251-13.61292c.295-2.95477.37915-5.92607.46307-8.89435l.668-23.6265a23.60578,23.60578,0,0,0-1.3596-10.27079l-3.84235-12.2661c-2.19272-6.9999-7.22293-13.20726-9.01389-20.32057-1.1335-4.502-1.97086-9.33349-5.01061-12.84251-4.33359-5.00259-11.83128-5.78072-18.39376-4.92059a21.97558,21.97558,0,0,0-8.51916,2.59665c-2.96528,1.77786-5.14977,4.57847-7.26317,7.31475C288.4037,502.0797,286.6309,503.89261,284.84873,506.11589Z"
        transform="translate(-53.67316 -143.25)"
        fill={color}
      />
      <path
        d="M300.1718,575.60883c.54068,2.33141,1.67619,4.4811,2.37125,6.77124,1.16453,3.837,1.06569,7.96939,2.22793,11.80706.48783,1.61077,1.19461,3.15731,1.54474,4.80351.81631,3.83808-.37557,7.8087-1.85614,11.44259s-3.28368,7.21688-3.76431,11.11127c-.33853,2.74294.14778,5.8401,2.262,7.62015,2.19491,1.848,5.38462,1.72288,8.24336,1.477a8.66192,8.66192,0,0,0,2.99183-.623c2.18625-1.03428,3.10706-3.62134,3.61811-5.98529,1.71263-7.92211,1.22335-16.13343.72566-24.22326l-1.30158-21.15647a49.51825,49.51825,0,0,0-1.77414-12.14135c-.45656-1.42264-1.25234-4.2974-2.55179-5.20578-1.287-.8997-4.96244-.93977-6.556-1.0146C298.87632,559.94085,298.96013,570.376,300.1718,575.60883Z"
        transform="translate(-53.67316 -143.25)"
        fill="#fbbebe"
      />
      <path
        d="M308.45538,497.49462a5.14663,5.14663,0,0,0-4.92651.43535,15.18272,15.18272,0,0,0-3.69058,3.58323c-3.29942,4.02738-6.79218,8.64858-6.30284,13.83187a35.08032,35.08032,0,0,0,1.43212,5.66839c2.21206,8.26851-.23406,17.01341.04661,25.5681a80.05647,80.05647,0,0,0,2.309,14.63372c.21861.9854.56876,2.12611,1.522,2.45793a3.30534,3.30534,0,0,0,2.19829-.34068,17.533,17.533,0,0,1,16.045,2.02228c1.77056-.94472,1.10711-3.93205.71016-5.89923-1.17939-5.84476.42158-11.87434,2.3659-17.511s4.27069-11.2662,4.59282-17.22006c.365-6.74606-1.87174-13.33054-4.07866-19.71583a6.33968,6.33968,0,0,0-5.3404-5.2871C312.99419,499.02875,310.62083,498.62859,308.45538,497.49462Z"
        transform="translate(-53.67316 -143.25)"
        fill="#3f3d56"
      />
    </svg>
  );
};

SocialUpdate.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

SocialUpdate.defaultProps = {
  color: "primary",
  style: {}
};

export default SocialUpdate;
