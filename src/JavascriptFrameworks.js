import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const JavascriptFrameworks = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="e8aabfee-d00f-44c0-b6f7-c40294f8dfa6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="787.1693"
      height="730"
      viewBox="0 0 787.1693 730"
    >
      <defs>
        <linearGradient
          id="a3c4672e-2259-4d6c-8c24-5949363a8af1"
          x1="278.97312"
          y1="470.29515"
          x2="278.97312"
          y2="199.61685"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="acf699b8-10e6-407b-86e3-0f7f8fa4bdb6"
          x1="191.7952"
          y1="163.03871"
          x2="191.7952"
          y2="0"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="b28a1e8f-be05-408d-a6f5-6fd2e5b0337f"
          x1="563.67304"
          y1="215.46739"
          x2="563.67304"
          y2="0.87558"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="f1fc4b36-2829-4464-83b0-fd2af5b19fd6"
          x1="639.87752"
          y1="470.29515"
          x2="639.87752"
          y2="255.70335"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="bb60ebe1-81e2-422a-a970-aa43062904da"
          x1="453.7012"
          y1="780.90233"
          x2="453.7012"
          y2="650.04347"
          gradientTransform="matrix(-1, 0, 0, 1, 1039.58465, -85)"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="a1b2f907-b002-48c8-973d-a12b277f13d1"
          x1="488.7343"
          y1="780.90233"
          x2="488.7343"
          y2="650.04347"
          gradientTransform="matrix(-1, 0, 0, 1, 1039.58465, -85)"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="a8136d5f-4c26-4562-977f-ea29024932d1"
          x1="235.31858"
          y1="696.90233"
          x2="235.31858"
          y2="566.04347"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="eaaf4b84-3353-429f-a894-84d4b3cd89b7"
          x1="270.35167"
          y1="696.90233"
          x2="270.35167"
          y2="566.04347"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
        <linearGradient
          id="fa1ca12c-a5d3-4b88-b665-ae3e1db189da"
          x1="319.81014"
          y1="696.88015"
          x2="319.81014"
          y2="561.94405"
          xlink:href="#a3c4672e-2259-4d6c-8c24-5949363a8af1"
        />
      </defs>
      <title>JavaScript frameworks</title>
      <path
        d="M969.07624,674.78716c0,45.23881-26.89446,61.0365-60.06793,61.0365-.77234,0-1.54052-.00836-2.3045-.02923-1.53635-.0334-3.06018-.10019-4.56313-.20874-29.94213-2.11666-53.20445-18.72843-53.20445-60.79853,0-43.53546,55.62587-98.47249,59.8216-102.55134l.00836-.00418c.15865-.15862.24212-.23794.24212-.23794S969.07624,629.54417,969.07624,674.78716Z"
        transform="translate(-206.41535 -85)"
        fill="#3f3d56"
      />
      <path
        d="M906.81651,728.90173,928.78882,698.204l-22.02658,34.06687-.05843,3.52358c-1.53635-.0334-3.06018-.10019-4.56313-.20874l2.36714-45.25968-.01671-.3507.04176-.06678.22126-4.27508L882.6733,651.47889l22.14764,30.94826.05427.906,1.791-34.19632-18.90376-35.2901,19.13337,29.28247,1.862-70.89335.00836-.24212v.23794l-.309,55.90561,18.81611-22.16436-18.89543,26.978-.49679,30.61846,17.572-29.38269L907.806,668.07815l-.27553,17.02093,25.5084-40.90115-25.60441,46.842Z"
        transform="translate(-206.41535 -85)"
        fill="#f2f2f2"
      />
      <path
        d="M345,723.419c0,27.107-16.11508,36.57288-35.99252,36.57288-.46278,0-.92308-.005-1.38085-.01751-.92058-.02-1.83365-.06-2.73421-.12508-17.94123-1.26829-31.88-11.222-31.88-36.43029,0-26.08631,33.33085-59.00441,35.84492-61.44845l.005-.0025c.09506-.095.14508-.14258.14508-.14258S345,696.30954,345,723.419Z"
        transform="translate(-206.41535 -85)"
        fill="#3f3d56"
      />
      <path
        d="M307.69416,755.84428l13.16574-18.394-13.19826,20.41276-.035,2.11132c-.92058-.02-1.83365-.06-2.73421-.12508l1.41838-27.11946-.01-.21013.025-.04.13258-2.56162-13.23077-20.4653,13.2708,18.5441.03252.54285,1.07317-20.49033L296.277,686.90366l11.46466,17.546,1.1157-42.47908.005-.14508v.14258l-.18513,33.49847,11.27456-13.28082-11.32209,16.16511-.29767,18.34649,10.52908-17.606L308.287,719.399l-.1651,10.19889L323.40649,705.09,308.0644,733.15759Z"
        transform="translate(-206.41535 -85)"
        fill="#f2f2f2"
      />
      <rect
        x="136.92798"
        y="199.61685"
        width="284.09028"
        height="270.67829"
        fill="url(#a3c4672e-2259-4d6c-8c24-5949363a8af1)"
      />
      <rect
        x="143.02434"
        y="205.71321"
        width="271.89757"
        height="258.48558"
        fill="#fff"
      />
      <rect
        x="152.77851"
        y="215.46739"
        width="252.38922"
        height="238.97723"
        fill={color}
      />
      <path
        d="M531.58409,353.54981h30.79707L485.38847,486.3622,408.39578,353.54981h58.89941l18.09328,30.79707,17.70832-30.79707Z"
        transform="translate(-206.41535 -85)"
        fill="#41b883"
      />
      <path
        d="M408.39578,353.54981,485.38847,486.3622l76.99269-132.81239H531.58409l-46.19562,79.68743-46.58058-79.68743Z"
        transform="translate(-206.41535 -85)"
        fill="#41b883"
      />
      <path
        d="M438.80789,353.54981l46.58058,80.07239,46.19562-80.07239h-28.4873l-17.70832,30.79707-18.09328-30.79707Z"
        transform="translate(-206.41535 -85)"
        fill="#35495e"
      />
      <g opacity="0.5">
        <rect
          x="5.24665"
          width="373.09711"
          height="163.03871"
          fill="url(#acf699b8-10e6-407b-86e3-0f7f8fa4bdb6)"
        />
      </g>
      <rect
        x="10.12373"
        y="2.09486"
        width="363.34294"
        height="156.06676"
        fill="#fff"
      />
      <rect
        x="20.56375"
        y="11.84903"
        width="342.46291"
        height="136.55842"
        fill={color}
      />
      <path
        d="M510.99016,141.70227l10.25882.05651s-19.07316,25.84531-20.63065,27.95167A12.01631,12.01631,0,0,0,498.9545,172.04a52.04124,52.04124,0,0,0-1.99668,7.32054l-9.38667.04693s1.46075-5.24147,1.40041-8.0332c-.05267-2.43874-1.29791-4.87461-1.9962-7.32053-.706-2.47611-1.66431-7.321-1.66431-7.321h9.65056l1.331,5.32433,14.69759-20.35479"
        transform="translate(-206.41535 -85)"
        fill="#fff"
      />
      <path
        d="M491.564,147.153c1.89324,1.1413,3.05513,7.4374,3.05513,7.4374s-9.90631.14607-15.29722.14607h-4.65861l-5.6572,24.624h-8.6515s5.3842-26.76008,6.6553-31.6117c.41187-1.57091,2.82189-1.30127,6.89141-1.30127H480.4c4.19643,0,9.10122-.53593,11.164.70547m-40.2771,11.99256a5.18568,5.18568,0,0,0-.91477-3.411c-1.012-1.56038-1.9464-1.92341-4.6088-2.00674-7.51691-.23612-7.37084,5.33439-7.37084,5.33439Zm8.15245-6.37943c1.10155,3.97374-.99811,13.3106-.99811,13.3106s-10.96477-.183-16.97062,0c-1.86737.057-4.10257-.20307-4.65861.66572-.7821,1.21745.28592,3.09153,1.19111,3.88321,1.04169.91142,3.07094,1.01535,3.80036,1.10778,4.87462.61927,15.07692.16,15.07692.16l-1.76728,7.82581s-14.41741.7232-21.62876-.9981a7.34064,7.34064,0,0,1-3.66051-1.9962c-.24618-.26581-.45977-.62837-.69255-.94159a8.74491,8.74491,0,0,1-.97129-1.72082c-1.64706-4.389.193-12.79718,1.99669-17.303.2093-.522.47223-1.18441.74905-1.74716.34579-.70164.63843-1.4938.91477-1.91335.18583-.28927.41619-.47558.60921-.74857a11.17449,11.17449,0,0,1,.72175-.91477,13.71319,13.71319,0,0,1,2.32956-1.99621c3.00437-2.25,8.44173-3.99672,14.97394-3.32813,2.45935.25288,6.1735,1.13125,7.98626,3.66051a11.17055,11.17055,0,0,1,.99811,2.99479Zm-39.6813-6.34926,8.389-.04933s-4.67537,22.1781-7.05808,32.993h-9.65056c-6.74438,0-12.75072.83527-15.30632-3.99337-2.479-4.6883-.113-12.39822.9981-17.63634.78545-3.707,2.4397-11.28374,2.4397-11.28374l8.69174-.0795s-2.456,11.79619-3.478,17.68615c-.36591,2.10971-1.1207,4.09634-.33238,5.65624.74857,1.4847,1.797,1.591,4.991,1.6643,1.012.024,4.32623,0,4.32623,0l5.98958-24.95737m-39.26558,15.97253c.87836-3.12075,2.15952-6.50492,1.99668-9.31723a7.99936,7.99936,0,0,0-4.32575-6.322,11.08454,11.08454,0,0,0-11.31391,2.66193c-2.35923,2.55561-3.1581,5.54082-3.99337,9.65057-.62166,3.05082-1.13124,6.27167,0,8.651,2.00292,4.2065,8.2492,3.2879,14.97443,3.32813.9981-2.67534,1.82331-5.68019,2.66192-8.65247Zm11.64677-12.31154c.95787,6.96757-2.71844,14.65832-5.25106,21.34619,2.58242.23324,4.8454-.03592,5.00824.15661.16954.24953-1.73088,7.98291-2.39324,8.003-2.04938.05316-8.84069.10967-11.67263.10967-9.24108,0-17.88588.602-22.29449-3.99289a14.49266,14.49266,0,0,1-3.32813-7.321,31.04716,31.04716,0,0,1,.99859-11.31343,34.24223,34.24223,0,0,1,3.32765-8.65246c3.88321-6.77791,10.63812-11.80913,21.96161-10.64771a21.08953,21.08953,0,0,1,7.321,2.32907c.136.08.61257.4593.72176.52587,2.66241,1.694,5.08822,5.7367,5.60068,9.45707ZM351.253,146.45714c-.55893,2.54555-1.11784,5.43114-1.70693,7.94651h-9.31722c.72176-2.78836,1.27444-5.56045,1.99669-7.98626,2.98138,0,5.75346.03976,9.028.03976M339.896,156.7332h8.98484c-1.17483,6.502-3.501,16.99026-5.32433,24.29117-1.1413,4.56905-1.90329,7.90292-4.99147,10.31532-.27635.21648-.43584.11351-.66572.33286-.569.54264-3.20121,1.172-4.65814,1.331a66.98038,66.98038,0,0,1-7.95992-.02634c.762-2.785,1.62407-6.12943,2.30321-8.62565,7.09783.85922,7.27743-5.84972,8.6515-12.31153.795-3.73379,3.20456-13.80965,3.66-15.3068"
        transform="translate(-206.41535 -85)"
        fill="#fff"
      />
      <path
        d="M318.932,173.70382l-.19253.499c-3.28071,6.389-9.09452,10.30863-17.38682,10.48152a24.30941,24.30941,0,0,1-9.983-1.9962A25.78732,25.78732,0,0,1,279.391,171.37428c-3.4311-6.64524-4.04989-15.88919,3.08435-22.79353.11015,0-.86544,1.49715-.75529,1.49715l-.19636.6389c-5.1409,16.09513,10.698,29.8885,26.09484,28.31088a20.22475,20.22475,0,0,0,11.31343-5.32385"
        transform="translate(-206.41535 -85)"
        fill="#21609b"
      />
      <path
        d="M309.61473,167.04853a14.73176,14.73176,0,0,0,10.31581-4.32575c-2.0963,5.321-8.16586,8.74106-16.3049,7.6534-6.81526-.91189-13.30724-7.76978-13.97584-14.64156-.489-5.00105,1.25386-7.98578,4.126-11.60654a12.1451,12.1451,0,0,0-1.46411,4.28552c-1.091,10.81821,8.64192,18.57794,17.303,18.63493"
        transform="translate(-206.41535 -85)"
        fill="#21609b"
      />
      <path
        d="M319.54117,153.61149c-.602,1.38126-4.069,3.98954-5.6002,4.3157-6.06285,1.29169-9.94559-1.58336-11.97963-4.855a14.983,14.983,0,0,1-.96123-2.16239c-.78881-2.68205-.42625-6.73864,1.92676-8.83829a11.04843,11.04843,0,0,0-.43918,5.82338,12.93168,12.93168,0,0,0,1.60395,3.5039,9.21608,9.21608,0,0,0,3.66,3.23474,9.70986,9.70986,0,0,0,1.84008.88124c1.52733.44972,4.752,1.63413,9.9499-1.90329"
        transform="translate(-206.41535 -85)"
        fill="#21609b"
      />
      <rect
        x="456.37714"
        y="0.87558"
        width="214.5918"
        height="214.5918"
        fill="url(#b28a1e8f-be05-408d-a6f5-6fd2e5b0337f)"
      />
      <rect
        x="462.4735"
        y="6.97194"
        width="202.39909"
        height="202.39909"
        fill="#fff"
      />
      <rect
        x="472.22767"
        y="16.72612"
        width="182.89074"
        height="182.89074"
        fill={color}
      />
      <path
        d="M704.13566,154.52327l66.05343-23.53464,67.83225,23.11618-10.98318,87.39185-56.84907,31.48417-55.95966-31.06572Z"
        transform="translate(-206.41535 -85)"
        fill="#e23237"
      />
      <path
        d="M838.02134,154.10481l-67.83225-23.11618v141.9922l56.84907-31.43167,10.98318-87.44435Z"
        transform="translate(-206.41535 -85)"
        fill="#b52e31"
      />
      <path
        d="M770.29358,147.56762l-41.159,91.57584,15.37561-.26147,8.26351-20.6585h36.923l9.04791,20.92,14.69569.26147-43.14674-91.83732Zm.105,29.33993,13.91129,29.07794H758.16005l12.23853-29.07794Z"
        transform="translate(-206.41535 -85)"
        fill="#fff"
      />
      <rect
        x="497.83237"
        y="255.70335"
        width="284.09028"
        height="214.5918"
        fill="url(#f1fc4b36-2829-4464-83b0-fd2af5b19fd6)"
      />
      <rect
        x="503.92873"
        y="261.79971"
        width="271.89757"
        height="202.39909"
        fill="#fff"
      />
      <rect
        x="513.6829"
        y="271.55388"
        width="252.38922"
        height="182.89074"
        fill={color}
      />
      <path
        d="M770.19756,447.58909c-.03656,11.57015,11.2273,22.40646,29.01941,28.551-3.61342,17.89464-.73923,32.33659,8.99408,37.9908,10.00439,5.81222,24.94893,1.85816,39.16068-10.48612,13.77737,11.93233,27.72445,16.65507,37.48491,11.04619,10.03193-5.76518,13.12564-21.16677,9.529-39.64358,18.57135-6.0748,28.97776-15.25177,29.0148-26.97426.0357-11.30159-11.25186-21.11432-28.80445-27.219,3.99574-19.21575.70617-33.30857-9.43044-39.19647-9.77239-5.67661-23.91237-.80053-37.96876,11.35457-14.543-12.99453-28.51521-16.99177-38.678-11.15173-9.79907,5.631-12.63642,20.31748-9.12575,38.56581C782.16362,426.3723,770.23312,436.33326,770.19756,447.58909Z"
        transform="translate(-206.41535 -85)"
        fill="#fff"
      />
      <path
        d="M890.85575,426.84936q-2.1699-.752-4.37562-1.394.37069-1.48606.68624-2.98508c3.36623-16.08356,1.23949-29.05572-6.14976-33.34709-7.08451-4.11578-18.70608.11553-30.462,10.28058q-1.7376,1.50591-3.39747,3.09815-1.10448-1.06539-2.24785-2.08933c-12.25223-10.94841-24.5533-15.58407-31.96173-11.32681-7.10378,4.0824-9.24256,16.26491-6.30593,31.52659q.4383,2.267.99134,4.5096c-1.74416.48946-3.42881,1.01161-5.04071,1.56772-14.4203,4.97635-23.64468,12.81849-23.67047,20.98232-.02664,8.43239,9.82176,16.92127,24.80972,22.09651q1.823.62656,3.67545,1.16171-.60979,2.41143-1.08415,4.8541c-2.89307,14.97831-.70816,26.88546,6.35111,30.9873,7.29127,4.23506,19.56455-.05561,31.53557-10.453q1.41924-1.23292,2.84736-2.60793,1.78636,1.73446,3.66728,3.36735c11.53209,9.98692,22.93961,14.04109,30.01866,9.97306,7.3113-4.20157,9.72292-16.97813,6.69271-32.54178q-.34662-1.78316-.80441-3.63951,1.29279-.37707,2.5327-.782c15.6142-5.1183,25.78848-13.44095,25.81547-21.98593.02589-8.19334-9.44485-16.14752-24.12352-21.25254Z"
        transform="translate(-206.41535 -85)"
        fill="#53c1de"
      />
      <path
        d="M887.35313,464.56524c-.74442.24392-1.50869.47936-2.28738.70752a136.41926,136.41926,0,0,0-6.83525-17.25806,136.36111,136.36111,0,0,0,6.67541-16.96429c1.39027.40783,2.74013.83661,4.04054,1.28932,12.57709,4.37339,20.23656,10.80624,20.221,15.7438-.01662,5.25971-8.33268,12.06179-21.81368,16.48171Zm-5.62285,11.05513c1.33972,6.882,1.51456,13.10089.59719,17.95913-.82427,4.36537-2.46287,7.27218-4.48132,8.43216-4.29569,2.46848-13.45551-.78676-23.317-9.32746q-1.69613-1.46857-3.41152-3.1299A136.58707,136.58707,0,0,0,862.568,475.10883a135.68288,135.68288,0,0,0,18.4363-2.78208q.41019,1.68128.726,3.29363Zm-56.593,25.796c-4.19378,1.46623-7.53037,1.49783-9.54327.32873-4.28425-2.48836-6.0376-12.05-3.56386-24.85888q.44121-2.2706,1.00781-4.51412a136.67722,136.67722,0,0,0,18.32682,2.71217,141.43655,141.43655,0,0,0,11.63355,14.46661q-1.27041,1.22118-2.59976,2.3787c-5.29356,4.59814-10.59371,7.85467-15.26069,9.4868ZM805.6288,464.27454c-6.62724-2.28863-12.09681-5.25282-15.84221-8.48012-3.36527-2.90094-5.06026-5.77552-5.05291-8.104.01565-4.95382,7.42209-11.25,19.75487-15.50612q2.32189-.79778,4.68751-1.45864a139.39663,139.39663,0,0,0,6.5771,17.20426,141.51219,141.51219,0,0,0-6.76894,17.40657Q807.29371,464.84683,805.6288,464.27454Zm6.72047-44.76048c-2.516-13.07635-.78683-22.92865,3.49438-25.38874,4.56051-2.62059,14.61344,1.16857,25.19221,10.62138.67611.60428,1.35514,1.23688,2.03531,1.89115a139.28544,139.28544,0,0,0-11.63534,14.3064,142.02139,142.02139,0,0,0-18.16468,2.76427q-.51373-2.08559-.92188-4.19506Zm58.64314,14.67715q-1.98424-3.45258-4.11582-6.81727c4.33971.56167,8.4964,1.3034,12.39907,2.2075a123.98473,123.98473,0,0,1-4.3917,11.70211q-1.87476-3.58467-3.89155-7.09234ZM847.13273,410.8043a124.30213,124.30213,0,0,1,7.97614,9.69087q-8.03466-.40512-16.08078-.05442c2.65442-3.47745,5.37248-6.70721,8.10464-9.63645ZM822.9721,434.07925q-2.013,3.46638-3.86268,7.02389c-1.67994-4.01983-3.11562-7.97144-4.28619-11.78673,3.88475-.85663,8.02672-1.55348,12.34156-2.07876Q824.98841,430.60875,822.9721,434.07925Zm4.18535,34.74689a123.7581,123.7581,0,0,1-12.53262-2.05559c1.21352-3.8752,2.70633-7.90246,4.448-11.99758q1.83435,3.57081,3.83508,7.05242Q824.94894,465.37594,827.15745,468.82614Zm19.90045,16.55509c-2.7454-2.98147-5.48259-6.27785-8.15516-9.8227q3.90681.16589,7.95982.17929,4.1602.01314,8.21379-.1565A123.60228,123.60228,0,0,1,847.0579,485.38123Zm27.83893-30.64084a123.43714,123.43714,0,0,1,4.53124,11.9832,123.35188,123.35188,0,0,1-12.69877,2.1234q2.168-3.413,4.19892-6.91022,2.06415-3.55359,3.96861-7.19638Zm-8.99453,4.27694q-3.10849,5.36068-6.56048,10.51084c-4.03767.27567-8.20978.41122-12.4609.39779-4.23365-.01338-8.35189-.15826-12.31738-.4279q-3.50677-5.15733-6.61613-10.56873-3.09246-5.37892-5.77-10.98093,2.70393-5.58272,5.82184-10.95032v.00121q3.11489-5.36488,6.63024-10.48171c4.04736-.29311,8.19662-.44017,12.39054-.42692,4.21258.0133,8.36624.1878,12.41046.50888q3.44525,5.12715,6.52244,10.48773,3.09258,5.37138,5.831,10.93535-2.74377,5.60034-5.881,10.9947Zm12.19549-64.86815c4.5475,2.64214,6.28613,13.24362,3.37965,27.13019q-.28573,1.35695-.62032,2.70289a139.23914,139.23914,0,0,0-18.18282-2.9315,136.54214,136.54214,0,0,0-11.45556-14.39018q1.53312-1.46871,3.13779-2.85992c10.07254-8.71015,19.47143-12.132,23.74125-9.65148Z"
        transform="translate(-206.41535 -85)"
        fill="#fff"
      />
      <path
        d="M846.98892,435.73756a12.14977,12.14977,0,1,1-12.18779,12.111,12.14944,12.14944,0,0,1,12.18779-12.111"
        transform="translate(-206.41535 -85)"
        fill="#53c1de"
      />
      <g opacity="0.7">
        <g opacity="0.1">
          <polygon
            points="602.37 565.043 602.37 583.59 602.37 589.773 602.37 672.203 602.37 678.386 602.37 695.902 577.64 695.902 569.397 695.902 569.397 678.386 569.397 672.203 569.397 589.773 569.397 583.59 569.397 565.043 577.64 565.043 602.37 565.043"
            fill="url(#bb60ebe1-81e2-422a-a970-aa43062904da)"
          />
        </g>
        <g opacity="0.1">
          <polygon
            points="567.337 565.043 567.337 583.59 567.337 589.773 567.337 672.203 567.337 678.386 567.337 695.902 542.607 695.902 534.364 695.902 534.364 678.386 534.364 672.203 534.364 589.773 534.364 583.59 534.364 565.043 542.607 565.043 567.337 565.043"
            fill="url(#a1b2f907-b002-48c8-973d-a12b277f13d1)"
          />
        </g>
      </g>
      <rect
        x="56.36379"
        y="660.51622"
        width="86.63529"
        height="36.86608"
        rx="14.2973"
        fill={color}
      />
      <g opacity="0.7">
        <g opacity="0.1">
          <polygon
            points="218.832 566.043 218.832 584.59 218.832 590.773 218.832 673.203 218.832 679.386 218.832 696.902 243.562 696.902 251.805 696.902 251.805 679.386 251.805 673.203 251.805 590.773 251.805 584.59 251.805 566.043 243.562 566.043 218.832 566.043"
            fill="url(#a8136d5f-4c26-4562-977f-ea29024932d1)"
          />
        </g>
        <g opacity="0.1">
          <polygon
            points="253.866 566.043 253.866 584.59 253.866 590.773 253.866 673.203 253.866 679.386 253.866 696.902 278.595 696.902 286.838 696.902 286.838 679.386 286.838 673.203 286.838 590.773 286.838 584.59 286.838 566.043 278.595 566.043 253.866 566.043"
            fill="url(#eaaf4b84-3353-429f-a894-84d4b3cd89b7)"
          />
        </g>
        <g opacity="0.1">
          <polygon
            points="352.601 688.383 325.251 585.838 325.251 585.838 323.658 579.865 323.658 579.865 318.878 561.944 287.019 570.441 291.799 588.362 291.799 588.362 293.068 593.119 314.635 673.982 314.635 673.982 316.228 679.955 316.228 679.955 320.742 696.88 352.601 688.383"
            fill="url(#fa1ca12c-a5d3-4b88-b665-ae3e1db189da)"
          />
        </g>
      </g>
      <rect
        x="222.20723"
        y="569.24144"
        width="31.30861"
        height="124.25606"
        fill="#535461"
      />
      <rect
        x="222.20723"
        y="586.85254"
        width="31.30861"
        height="5.87037"
        fill={color}
      />
      <rect
        x="222.20723"
        y="670.99444"
        width="31.30861"
        height="5.87037"
        fill={color}
      />
      <rect
        x="245.68869"
        y="569.24144"
        width="7.82715"
        height="124.25606"
        opacity="0.1"
      />
      <rect
        x="255.47264"
        y="569.24144"
        width="31.30861"
        height="124.25606"
        fill="#535461"
      />
      <rect
        x="255.47264"
        y="586.85254"
        width="31.30861"
        height="5.87037"
        fill={color}
      />
      <rect
        x="255.47264"
        y="670.99444"
        width="31.30861"
        height="5.87037"
        fill={color}
      />
      <rect
        x="278.9541"
        y="569.24144"
        width="7.82715"
        height="124.25606"
        opacity="0.1"
      />
      <rect
        x="508.8509"
        y="652.28465"
        width="31.30861"
        height="124.25606"
        transform="translate(-372.80777 74.29859) rotate(-14.93399)"
        fill="#535461"
      />
      <rect
        x="498.13504"
        y="671.30024"
        width="31.30861"
        height="5.87037"
        transform="translate(-362.8158 70.17999) rotate(-14.93399)"
        fill={color}
      />
      <rect
        x="519.81891"
        y="752.60011"
        width="31.30861"
        height="5.87037"
        transform="translate(-383.03485 78.51409) rotate(-14.93399)"
        fill={color}
      />
      <rect
        x="531.9358"
        y="649.259"
        width="7.82715"
        height="124.25606"
        transform="translate(-371.64487 77.11985) rotate(-14.93399)"
        opacity="0.1"
      />
      <rect
        x="773.27903"
        y="654.24144"
        width="31.30861"
        height="124.25606"
        transform="translate(1371.45134 1347.73895) rotate(-180)"
        fill="#535461"
      />
      <rect
        x="773.27903"
        y="671.85254"
        width="31.30861"
        height="5.87037"
        transform="translate(1371.45134 1264.57544) rotate(-180)"
        fill={color}
      />
      <rect
        x="773.27903"
        y="755.99444"
        width="31.30861"
        height="5.87037"
        transform="translate(1371.45134 1432.85924) rotate(-180)"
        fill={color}
      />
      <rect
        x="773.27903"
        y="654.24144"
        width="7.82715"
        height="124.25606"
        transform="translate(1347.96988 1347.73895) rotate(-180)"
        opacity="0.1"
      />
      <rect
        x="740.01363"
        y="654.24144"
        width="31.30861"
        height="124.25606"
        transform="translate(1304.92053 1347.73895) rotate(-180)"
        fill="#535461"
      />
      <rect
        x="740.01363"
        y="671.85254"
        width="31.30861"
        height="5.87037"
        transform="translate(1304.92053 1264.57544) rotate(-180)"
        fill={color}
      />
      <rect
        x="740.01363"
        y="755.99444"
        width="31.30861"
        height="5.87037"
        transform="translate(1304.92053 1432.85924) rotate(-180)"
        fill={color}
      />
      <rect
        x="740.01363"
        y="654.24144"
        width="7.82715"
        height="124.25606"
        transform="translate(1281.43907 1347.73895) rotate(-180)"
        opacity="0.1"
      />
      <path
        d="M848.65412,719.16264H962.16574s22.39345,28.571-12.355,71.04128H860.23694S827.80505,760.86078,848.65412,719.16264Z"
        transform="translate(-206.41535 -85)"
        fill={color}
      />
      <g opacity="0.1">
        <path
          d="M962.16574,719.16264H848.65412c-.2586.51721-.50274,1.031-.74508,1.54438H958.3048s21.844,27.88077-11.11731,69.4969h2.62324C984.55919,747.73359,962.16574,719.16264,962.16574,719.16264Z"
          transform="translate(-206.41535 -85)"
        />
      </g>
      <rect y="692.40023" width="787.1693" height="26.68371" fill="#e0e0e0" />
      <rect
        x="33.35463"
        y="719.08394"
        width="720.46004"
        height="10.91606"
        fill="#e0e0e0"
      />
      <rect
        x="33.35463"
        y="719.08394"
        width="720.46004"
        height="3.63869"
        opacity="0.1"
      />
    </svg>
  );
};

JavascriptFrameworks.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

JavascriptFrameworks.defaultProps = {
  color: "primary",
  style: {}
};

export default JavascriptFrameworks;
