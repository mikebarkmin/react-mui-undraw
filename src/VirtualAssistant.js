import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const VirtualAssistant = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a925cca1-fa72-4afa-8f48-18ebd70d8ee6"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="766"
      height="800.87072"
      viewBox="0 0 766 800.87072"
    >
      <title>virtual_assistant</title>
      <rect y="766.43536" width="766" height="2" fill="#3f3d56" />
      <rect
        x="706.17122"
        y="743.71649"
        width="23.36134"
        height="23.36134"
        fill={color}
      />
      <rect
        x="319.10399"
        y="789.83575"
        width="23.36134"
        height="23.36134"
        transform="translate(-647.52641 336.91863) rotate(-38.97687)"
        fill={color}
      />
      <rect x="382" y="91.07167" width="2" height="328" fill="#3f3d56" />
      <rect x="495" y="122.07167" width="132" height="2" fill="#3f3d56" />
      <rect x="139" y="122.07167" width="132" height="2" fill="#3f3d56" />
      <path
        d="M356.41016,68.54842l-.82032-1.82422c50.90674-22.8999,95.63233-22.87891,132.93409.06006l-1.04786,1.7041C450.77344,45.91707,406.67676,45.93807,356.41016,68.54842Z"
        transform="translate(-217 -49.56464)"
        fill="#3f3d56"
      />
      <path
        d="M708.41016,68.54842l-.82032-1.82422c50.90723-22.89941,95.63184-22.87842,132.9336.06006l-1.04688,1.7041C802.77246,45.91658,758.67773,45.9366,708.41016,68.54842Z"
        transform="translate(-217 -49.56464)"
        fill="#3f3d56"
      />
      <circle cx="205" cy="91.07167" r="31" fill="#3f3d56" />
      <circle cx="561" cy="91.07167" r="31" fill="#3f3d56" />
      <circle cx="68" cy="322.07167" r="58" fill={color} />
      <circle cx="698" cy="322.07167" r="58" fill={color} />
      <path
        d="M609.54492,669.30232c-4.71875,0-9.626-.168-14.61133-.498a233.60672,233.60672,0,0,1-30.57373-4.18848c-82.22168-16.77344-142.45263-73.68359-143.05127-74.25684l1.38282-1.44531c.59472.56934,60.42822,57.08789,142.06836,73.74317a231.646,231.646,0,0,0,30.30859,4.15136c5.45019.36231,10.80859.53321,15.92383.48828a206.0128,206.0128,0,0,0,31.84668-2.65722c48.29687-7.87988,93.53027-33.34863,134.44238-75.69727l1.4375,1.38867c-41.21777,42.667-86.82617,68.332-135.55762,76.28321a208.07737,208.07737,0,0,1-32.15527,2.68261C610.52148,669.30037,610.0332,669.30232,609.54492,669.30232Z"
        transform="translate(-217 -49.56464)"
        fill="#3f3d56"
      />
      <path
        d="M285,430.63631a68,68,0,1,1,68-68A68.07728,68.07728,0,0,1,285,430.63631Zm0-134a66,66,0,1,0,66,66A66.07468,66.07468,0,0,0,285,296.63631Z"
        transform="translate(-217 -49.56464)"
        fill="#3f3d56"
      />
      <path
        d="M915,430.63631a68,68,0,1,1,68-68A68.07728,68.07728,0,0,1,915,430.63631Zm0-134a66,66,0,1,0,66,66A66.07468,66.07468,0,0,0,915,296.63631Z"
        transform="translate(-217 -49.56464)"
        fill="#3f3d56"
      />
      <circle cx="351" cy="423.07167" r="9" fill="#3f3d56" />
      <circle cx="415" cy="423.07167" r="9" fill="#3f3d56" />
      <ellipse cx="383" cy="681.07167" rx="25" ry="9" fill="#f2f2f2" />
      <path
        d="M809.44085,634.96076c-10.24521-17.31123-30.51453-18.118-30.51453-18.118s-19.7513-2.52578-32.42164,23.83944c-11.80977,24.57455-28.10875,48.30178-2.624,54.0545l4.60329-14.32748,2.85079,15.39414a99.71338,99.71338,0,0,0,10.904.18636c27.2921-.88115,53.2837.2578,52.44681-9.53575C813.573,673.43481,819.29879,651.61762,809.44085,634.96076Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M742.42556,786.56345a40.41363,40.41363,0,0,1-1.30691,5.626c-.64111,1.80275-1.6309,3.47-2.21709,5.29131-1.8685,5.80566.7218,12.27883,4.85891,16.76005a27.34922,27.34922,0,0,0,13.33428,7.91792,54.40353,54.40353,0,0,0,11.45907,1.20419c10.65043.36115,21.57488.68426,31.6668-2.73851a55.01962,55.01962,0,0,0,9.20015-4.17956,6.888,6.888,0,0,0,2.38724-1.87968,6.5693,6.5693,0,0,0,.86147-3.85612c-.02265-4.515-.938-9.007-.72065-13.51679.12037-2.498.58788-4.994.35776-7.4843a13.807,13.807,0,0,0-10.552-11.89336,28.661,28.661,0,0,0-8.74688.00048,223.018,223.018,0,0,1-22.76406,1.01786c-7.76567-.04957-15.48339-1.235-23.21041-1.35879-2.2851-.03661-2.23894.66786-2.96644,2.87942A53.8738,53.8738,0,0,0,742.42556,786.56345Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M764.4639,675.07714a13.55615,13.55615,0,0,1-1.95082,5.58535c-1.351,1.84753-3.55383,2.90317-5.00724,4.67128-2.18769,2.66139-2.31326,6.40639-2.32227,9.85151-.00831,3.17371.05615,6.55882,1.826,9.19324a16.06642,16.06642,0,0,0,4.60448,4.05954c6.63725,4.47292,13.80948,9.02614,21.81187,9.17365,3.31569.06112,6.87085-.79516,9.05253-3.29271a13.592,13.592,0,0,0,2.19176-3.91028,51.92525,51.92525,0,0,0,3.67563-15.80748,18.561,18.561,0,0,0-.69972-7.59358c-.97215-2.71048-2.93783-4.94065-4.237-7.51048a16.71994,16.71994,0,0,1-1.60934-9.894,1.068,1.068,0,0,0-.05648-.717,1.04445,1.04445,0,0,0-.86073-.34877l-15.86745-1.14227a34.53089,34.53089,0,0,1-4.40559-.504c-.85537-.17392-3.11461-1.38875-3.93022-1.06572C765.1696,666.42332,764.77336,673.45674,764.4639,675.07714Z"
        transform="translate(-217 -49.56464)"
        fill="#ffb8b8"
      />
      <path
        d="M764.4639,675.07714a13.55615,13.55615,0,0,1-1.95082,5.58535c-1.351,1.84753-3.55383,2.90317-5.00724,4.67128-2.18769,2.66139-2.31326,6.40639-2.32227,9.85151-.00831,3.17371.05615,6.55882,1.826,9.19324a16.06642,16.06642,0,0,0,4.60448,4.05954c6.63725,4.47292,13.80948,9.02614,21.81187,9.17365,3.31569.06112,6.87085-.79516,9.05253-3.29271a13.592,13.592,0,0,0,2.19176-3.91028,51.92525,51.92525,0,0,0,3.67563-15.80748,18.561,18.561,0,0,0-.69972-7.59358c-.97215-2.71048-2.93783-4.94065-4.237-7.51048a16.71994,16.71994,0,0,1-1.60934-9.894,1.068,1.068,0,0,0-.05648-.717,1.04445,1.04445,0,0,0-.86073-.34877l-15.86745-1.14227a34.53089,34.53089,0,0,1-4.40559-.504c-.85537-.17392-3.11461-1.38875-3.93022-1.06572C765.1696,666.42332,764.77336,673.45674,764.4639,675.07714Z"
        transform="translate(-217 -49.56464)"
        opacity="0.1"
      />
      <circle cx="562.63834" cy="604.3608" r="23.27941" fill="#ffb8b8" />
      <path
        d="M767.729,706.06569a14.27705,14.27705,0,0,0,4.08892,3.26734,12.84845,12.84845,0,0,0,5.10823.97261c4.19633.118,8.74543-.65087,11.66461-3.66775,3.763-3.88891,3.639-10.16136,6.58854-14.6983a3.2741,3.2741,0,0,1,.95044-1.03947,3.08094,3.08094,0,0,1,1.61657-.37168c3.72516-.03483,6.97013,2.38121,9.89872,4.68369a13.03882,13.03882,0,0,1,3.48415,3.5492,12.02953,12.02953,0,0,1,1.17493,3.59811,158.0771,158.0771,0,0,1,2.39107,21.57467c.258,3.99157.51614,7.987.497,11.98684-.06317,13.17783-3.12613,26.13528-6.172,38.95643-.39247,1.652-.92954,3.49855-2.43187,4.28984a5.99655,5.99655,0,0,1-2.122.51793,259.68707,259.68707,0,0,1-26.24911,2.18565q-5.14129.07918-10.27812-.24891a5.53667,5.53667,0,0,1-1.7314-.30183,4.8825,4.8825,0,0,1-1.88755-1.60294c-4.75082-5.98665-5.03124-14.26329-5.00088-21.90589q.11138-28.02825,2.00283-56.01171c.10411-1.53982.12684-3.4099-.98268-4.62122A57.85137,57.85137,0,0,0,767.729,706.06569Z"
        transform="translate(-217 -49.56464)"
        fill="#d0cde1"
      />
      <path
        d="M762.79792,679.18607c-.78625,1.42325-6.58293,4.95742-7.702,6.137-6.25263,6.59065-17.66459,6.34335-23.38307,13.40245a21.99463,21.99463,0,0,0-3.826,8.70672c-1.08732,4.38789-1.6679,9.17328.15356,13.31068,1.75266,3.98111,5.4422,6.73342,7.94715,10.28957,2.75041,3.90461,3.987,8.6456,5.17216,13.27229.875,3.41618,1.75731,6.917,1.41653,10.42694-.38746,3.99074-2.31862,7.64486-3.45883,11.48883s-1.337,8.4222,1.29933,11.44311c1.93684,2.21936,4.97481,3.0992,7.87859,3.59415a90.515,90.515,0,0,0,11.22941.97758c3.31943.14666,6.9784.17517,9.53021-1.95281a9.5818,9.5818,0,0,0,3.0019-7.02314,45.32755,45.32755,0,0,0-.77305-7.81482c-.35386-2.69469-.48985-5.41286-.60363-8.1283q-.7658-18.27578-.209-36.57506a31.126,31.126,0,0,0-.3702-7.58964c-.71189-3.26343-2.47562-6.17992-3.94729-9.17841a34.73315,34.73315,0,0,1-3.851-18.34818C762.74831,679.09577,765.59572,674.12142,762.79792,679.18607Z"
        transform="translate(-217 -49.56464)"
        fill={color}
      />
      <path
        d="M795.48815,679.68138c1.19759,1.23086,5.267,1.63663,6.79041,2.42932a23.79328,23.79328,0,0,0,4.46382,1.54552,57.95092,57.95092,0,0,1,15.6813,7.19715,9.51682,9.51682,0,0,1,2.62235,2.26509,10.38289,10.38289,0,0,1,1.45059,4.09637,46.48658,46.48658,0,0,1,1.328,11.2005c-.17793,3.99742-1.382,7.86892-2.57656,11.68784l-4.46336,14.26941c-3.3316,10.65113-6.68432,21.40712-7.62178,32.5277a76.51379,76.51379,0,0,0,.68672,18.47453,2.1902,2.1902,0,0,1-.22512,1.78935,1.76235,1.76235,0,0,1-1.093.50292c-2.15422.33684-4.239-.76156-6.19076-1.73349a68.55554,68.55554,0,0,0-18.89849-6.18372,43.935,43.935,0,0,0,5.86981-12.10027,73.23121,73.23121,0,0,0,1.77346-8.3218l2.07631-12.00878a117.998,117.998,0,0,0,1.7811-13.27973,16.62451,16.62451,0,0,0-.289-5.00247,24.26762,24.26762,0,0,0-1.89635-4.51134c-3.42186-7.11782-5.02741-15.24054-3.681-23.02256.58922-3.40564,1.73423-6.81584,1.25678-10.23894-.45905-3.29116.018-5.849-.82641-9.10607C790.03978,668.78463,793.23507,677.36574,795.48815,679.68138Z"
        transform="translate(-217 -49.56464)"
        fill={color}
      />
      <path
        d="M731.6536,709.97941c-1.56,3.2372-4.168,5.995-5.05569,9.4771a20.70466,20.70466,0,0,0-.44081,4.95327,23.52918,23.52918,0,0,0,.73483,7.44809c.49543,1.53555,1.30144,2.95167,1.8821,4.45706a16.16092,16.16092,0,0,1,1.05862,6.60316c-.15666,3.11823-1.216,6.1451-1.29879,9.26616-.13019,4.90814,2.14,9.52219,4.3551,13.904a10.22128,10.22128,0,0,1,14.85706-4.864,3.04681,3.04681,0,0,0,.66962-2.221q.24559-8.5413.47381-17.08308c.23978-8.807.46821-17.73158-1.55773-26.30571a24.81724,24.81724,0,0,0-4.94717-10.73013c-1.37388-1.581-6.03783-5.74553-8.29309-3.97437-1.01421.79651-.77717,2.96468-.93787,4.06259A17.236,17.236,0,0,1,731.6536,709.97941Z"
        transform="translate(-217 -49.56464)"
        fill={color}
      />
      <path
        d="M828.28063,700.65059a23.82522,23.82522,0,0,1,.79665,7.16569q.045,7.3837-.19571,14.76547a27.52615,27.52615,0,0,1-.95915,7.47548c-.50378,1.58418-1.2812,3.06973-1.80148,4.64856-1.55924,4.73168-.70732,9.86363-.57361,14.8438a16.86611,16.86611,0,0,1-.40846,4.80173c-.82287,3.08732-3.03424,5.582-4.57768,8.37954-1.46584,2.65693-2.35032,5.63506-4.101,8.11358s-4.78134,4.44243-7.71886,3.68156c-2.22573-.5765-3.80724-2.54658-4.90116-4.56885a22.4096,22.4096,0,0,1-2.317-14.53633c1.09824-6.04451,4.64876-11.40678,5.92923-17.41533,1.75837-8.25106-.914-16.7655-.83453-25.20147a12.18211,12.18211,0,0,1,.531-3.90653,16.3495,16.3495,0,0,1,3.44677-5.01117,63.26786,63.26786,0,0,0,4.63243-6.07952c.954-1.4228,2.24974-5.08224,3.94115-5.38651C822.94554,691.741,827.34373,697.73309,828.28063,700.65059Z"
        transform="translate(-217 -49.56464)"
        fill={color}
      />
      <path
        d="M712.05894,782.89392a22.97784,22.97784,0,0,0-6.39178-.67948,15.95286,15.95286,0,0,0-14.81073,18.80607,26.79507,26.79507,0,0,0,2.53276,6.921c1.69511,3.44,3.72817,6.87219,6.86627,9.07665a26.74309,26.74309,0,0,0,6.05967,2.88444l16.52773,6.22629c2.43142.916,4.8632,1.832,7.31868,2.68137a143.1529,143.1529,0,0,0,38.22637,7.59948,41.39213,41.39213,0,0,0,11.8689-.60142,3.86377,3.86377,0,0,0,2.43073-1.31321,4.16285,4.16285,0,0,0,.5431-1.79385l1.017-7.11984a5.96383,5.96383,0,0,0-.08644-3.00142,5.74865,5.74865,0,0,0-2.74721-2.58885c-10.86582-6.24079-23.553-9.68378-32.69888-18.24916-2.15309-2.01643-3.95489-5.21267-6.57087-6.58239-2.9665-1.55324-6.46011-2.43973-9.5264-3.871C725.9146,788.15961,719.324,784.56394,712.05894,782.89392Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M728.55948,792.4925c5.84186,1.83053,30.5062,14.51254,34.73374,18.94042-.56666.20416-19.793-10.57055-20.36986-10.74369A116.16524,116.16524,0,0,1,727.426,795.2279c-1.00185-.46336-6.50859-2.64126-6.25921-3.90531C721.4482,789.89619,727.52239,792.16753,728.55948,792.4925Z"
        transform="translate(-217 -49.56464)"
        opacity="0.1"
      />
      <path
        d="M801.44035,840.10231a1.37222,1.37222,0,0,0,.92608-.27255,1.43039,1.43039,0,0,0,.28946-1.06568l-.02721-9.69976a29.81514,29.81514,0,0,0-8.97174-2.16427L779.368,824.99011c.32829.04388-2.23415,6.15435-1.84125,6.97012.69249,1.43779,5.98465,2.71207,7.47823,3.39094C790.19718,837.71115,795.59254,840.30566,801.44035,840.10231Z"
        transform="translate(-217 -49.56464)"
        fill="#ffb8b8"
      />
      <path
        d="M756.60905,829.03076c-2.69788.4297-5.70906.80955-7.45624,2.90967-2.21567,2.66324-1.27244,6.63347-.2155,9.9327a3.22042,3.22042,0,0,0,3.75695,2.68726c2.46042.1558,5.07881.27785,7.22858-.929a31.68262,31.68262,0,0,0,2.808-2.08722,18.00348,18.00348,0,0,1,5.16275-2.36034,52.20561,52.20561,0,0,1,10.36334-2.1357,16.11794,16.11794,0,0,0,4.08254-.71966,4.52365,4.52365,0,0,0,2.87509-2.79138c.498-1.76273-.52653-3.55989-1.50909-5.10578a20.36917,20.36917,0,0,0-4.34568-5.371c-2.66247-2.06816-3.97951-.48052-6.66144.84294A56.51851,56.51851,0,0,1,756.60905,829.03076Z"
        transform="translate(-217 -49.56464)"
        fill="#ffb8b8"
      />
      <path
        d="M749.55869,831.46086l-17.13052-5.06318a22.6741,22.6741,0,0,0-6.37488-1.23533,7.653,7.653,0,0,0-5.85442,2.36757c-1.32836,1.559-1.70856,3.6898-2.03971,5.711l-.70839,4.32374a21.71572,21.71572,0,0,0-.39663,6.63967,7.34123,7.34123,0,0,0,3.40314,5.47007c2.37053,1.29332,5.27592.66162,7.92157.12065a86.24332,86.24332,0,0,1,16.23372-1.74083c2.05043-.02452,4.20108.00117,6.01292-.9591a7.50715,7.50715,0,0,0,3.66377-5.98243C754.62636,837.41928,753.39528,832.59483,749.55869,831.46086Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M808.17409,827.04861c2.22071-.38921,4.18062-1.65133,6.30854-2.39631,2.99517-1.04861,6.241-1.04859,9.41438-1.037a6.04384,6.04384,0,0,1,3.37523.676c1.39783.9306,1.75609,2.79294,1.99377,4.4553l1.434,10.02977a15.73922,15.73922,0,0,1,.11715,5.68213,5.34557,5.34557,0,0,1-3.532,4.13c-2.24.58235-4.436-.8486-6.55106-1.78859-5.28635-2.34944-11.43143-1.749-16.9434-3.50494a3.79747,3.79747,0,0,1-2.53575-1.81332,4.12577,4.12577,0,0,1-.19728-1.73321c.09439-3.22387-.58557-7.62611.385-10.70721C802.31563,826.27025,805.69521,827.04861,808.17409,827.04861Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M844.426,778.857a29.74787,29.74787,0,0,1,10.47918-.716c2.8015.30863,5.6879,1.08818,7.7333,3.02723,2.48956,2.36011,3.28946,6.01007,3.35619,9.43987a29.49225,29.49225,0,0,1-6.41019,18.835,17.0901,17.0901,0,0,1-3.66484,3.528,24.12312,24.12312,0,0,1-4.76818,2.2978L814.13828,829.868c-9.73735,3.84069-19.50907,7.69252-29.66564,10.2245a2.312,2.312,0,0,1-3.11106-1.12792,76.6826,76.6826,0,0,1-8.11226-14.83941.99995.99995,0,0,1,.442-1.57665L799.871,807.50646a26.47048,26.47048,0,0,0,5.32852-3.67144,13.2284,13.2284,0,0,0,2.73569-3.80864c.54267-1.13345.59329-3.80823,1.28645-4.646.67866-.82027,3.00025-.88573,4.07248-1.20836a36.952,36.952,0,0,0,4.43352-1.67594c5.85621-2.61987,11.07107-6.42642,16.685-9.494A42.81126,42.81126,0,0,1,844.426,778.857Z"
        transform="translate(-217 -49.56464)"
        fill="#2f2e41"
      />
      <path
        d="M829.58444,790.09031c-4.49777,3.37813-10.32158,6.48341-14.77934,9.95056-1.52138,1.1833-26.88325,15.442-27.24185,17.33573,4.15883.70073,30.651-17.83256,34.4414-19.68189a61.21338,61.21338,0,0,0,10.47992-7.046c.8485-.65971,4.44442-2.6429,2.00865-3.38C833.12107,786.85357,830.59745,789.415,829.58444,790.09031Z"
        transform="translate(-217 -49.56464)"
        opacity="0.1"
      />
      <polygon
        points="587.911 583.727 567.886 573.238 540.232 577.529 534.511 602.799 548.753 602.251 552.732 592.967 552.732 602.098 559.304 601.845 563.118 587.065 565.502 602.799 588.865 602.322 587.911 583.727"
        fill="#2f2e41"
      />
      <rect
        x="540.34955"
        y="635.56511"
        width="43.09167"
        height="52.00719"
        fill="#3f3d56"
      />
      <path
        d="M736.89266,775.5839a10.4056,10.4056,0,0,0,3.73789,3.71863,7.31,7.31,0,0,0,6.42558-.17222,11.31031,11.31031,0,0,0,4.63713-4.64922c2.17633-3.84308,2.627-8.44174,2.35547-12.84991s-1.21281-8.74882-1.6294-13.14566c-.30282-3.1962-.32745-6.41146-.35184-9.62188a3.19972,3.19972,0,0,1,.40435-1.94591,3.82059,3.82059,0,0,1,2.14674-1.072c4.39232-1.305,7.30783-5.422,9.398-9.49957,1.3957-2.72272,2.60937-5.699,2.34022-8.74675s-2.45983-6.11807-5.5036-6.429c-2.50937-.25633-4.82638,1.3375-6.6365,3.09423a28.45778,28.45778,0,0,0-8.33238,16.6523c-.39734,3.09888-.28353,6.28208-1.1264,9.29048-1.79968,6.4235-7.43055,10.36179-10.23665,16.14179C731.4293,762.71815,733.13585,769.94869,736.89266,775.5839Z"
        transform="translate(-217 -49.56464)"
        fill="#ffb8b8"
      />
      <path
        d="M819.75416,751.04347a12.13947,12.13947,0,0,1-6.8077,6.54134,9.4022,9.4022,0,0,1-5.91806.36245,6.56246,6.56246,0,0,1-4.33536-3.87777,10.44641,10.44641,0,0,1-.48833-2.91273c-.28161-4.33174-.17279-8.79548,1.40065-12.84116.60688-1.56042,1.42514-3.04029,1.90409-4.64461a23.29365,23.29365,0,0,0,.717-5.66834l.51724-11.81917a7.692,7.692,0,0,0-.17557-2.56274c-.51592-1.71017-2.11425-2.82155-3.58078-3.84141-3.54176-2.463-7.04175-5.33714-8.758-9.29507a6.51922,6.51922,0,0,1-.60516-3.85018c.48392-2.347,2.85242-3.86635,5.19344-4.37823a11.61683,11.61683,0,0,1,13.927,9.36126c.23161,1.33382.22843,2.69627.364,4.04324.28756,2.85725,1.19463,5.61148,1.76209,8.42655,1.39775,6.9341.67347,14.102,2.05568,21.03488C818.08212,740.91849,822.44,744.70089,819.75416,751.04347Z"
        transform="translate(-217 -49.56464)"
        fill="#ffb8b8"
      />
      <circle cx="563" cy="654.07167" r="7" fill={color} />
      <circle cx="212" cy="104.07167" r="8" fill="#f2f2f2" />
      <circle cx="571" cy="104.07167" r="8" fill="#f2f2f2" />
    </svg>
  );
};

VirtualAssistant.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

VirtualAssistant.defaultProps = {
  color: "primary",
  style: {}
};

export default VirtualAssistant;
