import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const AbsorbedIn = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a07b0c17-3700-4c07-9cd3-d5e614437a2a"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="938.74658"
      height="806.92451"
      viewBox="0 0 938.74658 806.92451"
    >
      <title>absorbed in</title>
      <circle cx="33.24658" cy="54.42451" r="33" fill="#ff6584" />
      <polygon
        points="200.747 204.425 200.747 191.425 150.747 191.425 150.747 204.425 140.747 204.425 140.747 21.425 33.747 21.425 33.747 328.425 121.747 328.425 140.747 328.425 228.747 328.425 228.747 204.425 200.747 204.425"
        fill="#e6e6e6"
      />
      <path
        d="M702.26489,217.54191s-.06787.0653-.18555.17968l.001-.17968-.00488.18341c-2.52942,2.45984-30.69214,30.24908-41.61829,58.43518-3.62695-4.03528-6.19226-6.49713-6.19226-6.49713s-.04443.04278-.12158.1178l.00073-.1178-.00317.12024c-2.06128,2.00439-30.0965,29.6701-30.0965,51.5932,0,21.16638,11.70294,29.51971,26.76617,30.58569l-1.09277,20.8783h3.05249l.33753-20.772c.38415.00867.7694.01447,1.1571.01447,11.13049,0,20.84888-3.54236,26.093-12.64691a53.91208,53.91208,0,0,0,16.63672,3.67138l-1.66748,31.85456h4.65734l.5149-31.69239c.58606.01319,1.174.022,1.7655.022,25.46509,0,46.1084-12.12464,46.1084-46.84955S702.26489,217.54191,702.26489,217.54191Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <path
        d="M592.37329,239.23344V220.96226h-56v18.27118h-26V166.96226h-25v-28h-56v28h-26V280.41843A154.53181,154.53181,0,0,0,391.265,266.96226s-.04456.04278-.12164.11779l.00067-.11779-.00317.12024c-2.06122,2.00439-30.09644,29.6701-30.09644,51.5932,0,21.16638,11.70294,29.51971,26.76623,30.58569l-1.09289,20.8783h3.05261l.33747-20.772c.38409.00867.76947.01447,1.15716.01447a40.12728,40.12728,0,0,0,12.10834-1.71106v27.2912h214V239.23344Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <path
        d="M1023.26489,218.8408s-.06787.0653-.18555.17968l.001-.17968-.00488.18341c-2.618,2.546-32.69825,32.2276-42.70215,61.39856V265.96226l-96-145-96,145v109h192V318.60532c6.13525,17.15589,20.44482,24.58576,37.62134,25.80127l-1.66748,31.85456h4.65734l.5149-31.69239c.58606.01319,1.174.022,1.7655.022,25.46509,0,46.1084-12.12464,46.1084-46.84955S1023.26489,218.8408,1023.26489,218.8408Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <ellipse
        cx="152.74658"
        cy="356.08501"
        rx="126.5"
        ry="11.66049"
        fill="#f2f2f2"
      />
      <ellipse
        cx="854.24829"
        cy="503.79488"
        rx="56.41661"
        ry="5.20036"
        fill="#f2f2f2"
      />
      <ellipse
        cx="250.24829"
        cy="412.79488"
        rx="56.41661"
        ry="5.20036"
        fill="#f2f2f2"
      />
      <path
        d="M1008.87329,529.4333c0,14.58087-8.6676,19.672-19.36056,19.672q-.37157,0-.742-.00825c-.49543-.01062-.98615-.03421-1.471-.06724-9.65019-.683-17.14765-6.03595-17.14765-19.59648,0-14.03354,17.93326-31.74149,19.28034-33.052l.00236-.00235c.05191-.05072.07786-.0755.07786-.0755S1008.87329,514.85243,1008.87329,529.4333Z"
        transform="translate(-130.62671 -46.53774)"
        fill={color}
      />
      <path
        d="M988.80734,546.87467l7.08105-9.89437-7.09875,10.98077-.01886,1.136c-.49543-.01062-.98615-.03421-1.471-.06724l.76321-14.58795-.00591-.11324.013-.02123.072-1.37776-7.11645-11.0079,7.13886,9.97458.01653.29254.5768-11.02206L982.66524,509.792l6.16687,9.44024.6004-22.851.00236-.07785v.0755l-.10026,18.01937,6.06544-7.14358-6.0902,8.69591-.16043,9.86842,5.6632-9.4709-5.68678,10.923-.08965,5.48625,8.22171-13.18188-8.25238,15.09635Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#3f3d56"
      />
      <ellipse
        cx="105.24829"
        cy="683.9269"
        rx="105.24829"
        ry="9.70156"
        fill="#f2f2f2"
      />
      <path
        d="M280.64513,691.47581c0,27.20142-16.16989,36.69915-36.11819,36.69915q-.69318,0-1.38415-.01541c-.92426-.01981-1.83971-.06381-2.74415-.12544-18.003-1.27413-31.98988-11.26038-31.98988-36.5583,0-26.18034,33.45548-59.2155,35.96853-61.66036l.00441-.00439c.09684-.09463.14524-.14084.14524-.14084S280.64513,664.2744,280.64513,691.47581Z"
        transform="translate(-130.62671 -46.53774)"
        fill={color}
      />
      <path
        d="M243.211,724.01364l13.21008-18.45848L243.178,726.04039l-.03519,2.11916c-.92426-.01981-1.83971-.06381-2.74415-.12544l1.4238-27.21461-.011-.21126.0242-.03961.13423-2.57028L228.69372,677.4625l13.31794,18.60813.03084.54574,1.07606-20.56224-11.366-21.22024,11.50463,17.61128,1.12009-42.62972.00441-.14523v.14084l-.187,33.61612,11.31541-13.32674-11.36161,16.2227-.29928,18.41008,10.565-17.66848-10.609,20.37741-.16725,10.23491L258.976,673.08553l-15.39527,28.16308Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#3f3d56"
      />
      <path
        d="M426.87329,272.86561c0,57.42488-34.13818,77.47551-76.24976,77.47551s-76.24976-20.05063-76.24976-77.47551,76.24976-130.47839,76.24976-130.47839S426.87329,215.44073,426.87329,272.86561Z"
        transform="translate(-130.62671 -46.53774)"
        fill={color}
      />
      <polygon
        points="217.219 295.019 218 246.96 250.5 187.503 218.122 239.421 218.473 217.811 240.872 174.795 218.566 212.092 218.566 212.093 219.198 173.227 243.183 138.981 219.297 167.115 219.692 95.849 217.212 190.193 217.416 186.301 193.03 148.974 217.025 193.772 214.753 237.178 214.685 236.026 186.573 196.746 214.6 240.096 214.316 245.524 214.265 245.606 214.288 246.052 208.524 356.177 216.226 356.177 217.15 299.295 245.108 256.051 217.219 295.019"
        fill="#3f3d56"
      />
      <path
        d="M293.15614,272.86561c0,57.42488-34.13818,77.47551-76.24976,77.47551s-76.24976-20.05063-76.24976-77.47551,76.24976-130.47839,76.24976-130.47839S293.15614,215.44073,293.15614,272.86561Z"
        transform="translate(-130.62671 -46.53774)"
        fill={color}
      />
      <polygon
        points="83.502 295.019 84.283 246.96 116.782 187.503 84.405 239.421 84.756 217.811 107.155 174.795 84.849 212.092 84.849 212.093 85.481 173.227 109.465 138.981 85.58 167.115 85.974 95.849 83.495 190.193 83.699 186.301 59.313 148.974 83.308 193.772 81.036 237.178 80.968 236.026 52.856 196.746 80.883 240.096 80.599 245.524 80.548 245.606 80.571 246.052 74.807 356.177 82.509 356.177 83.433 299.295 111.391 256.051 83.502 295.019"
        fill="#3f3d56"
      />
      <path
        d="M395.87329,222.97645c0,77.65249-46.16317,104.76584-103.10833,104.76584S189.65662,300.62894,189.65662,222.97645,292.765,46.53774,292.765,46.53774,395.87329,145.324,395.87329,222.97645Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <polygon
        points="158.382 269.326 159.438 204.338 203.385 123.938 159.604 194.143 160.078 164.922 190.367 106.754 160.204 157.189 160.204 157.189 161.058 104.633 193.491 58.324 161.192 96.369 161.725 0 158.373 127.575 158.648 122.312 125.673 71.838 158.12 132.415 155.047 191.111 154.956 189.553 116.941 136.436 154.841 195.057 154.456 202.397 154.387 202.507 154.419 203.11 146.624 352.026 157.039 352.026 158.288 275.108 196.095 216.632 158.382 269.326"
        fill="#3f3d56"
      />
      <path
        d="M393.87329,447.96226a12.93882,12.93882,0,0,1-.74455,4.355,13.10619,13.10619,0,0,1-3.5218,5.28273,12.96623,12.96623,0,0,1-5.90909,3.04908,12.73165,12.73165,0,0,1-2.82456.3132,13.13718,13.13718,0,0,1-6.72455-1.8673,13.10833,13.10833,0,0,1-4.54409-4.64453,13.00143,13.00143,0,1,1,24.26864-6.48817Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#3f3d56"
      />
      <polygon
        points="240.449 392.88 241.613 392.732 243.829 395.645 242.417 399.02 238.789 399.48 237.696 398.039 240.449 392.88"
        fill="#f2f2f2"
      />
      <polygon
        points="247.734 406.701 244.104 407.163 241.889 404.25 243.305 400.875 246.934 400.414 249.149 403.326 247.734 406.701"
        fill="#f2f2f2"
      />
      <path
        d="M375.04693,456.95588l-.89819,2.13908a13.10833,13.10833,0,0,1-4.54409-4.64453l3.22637-.40773Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <polygon
        points="251.87 396.655 248.241 397.117 246.026 394.204 247.441 390.83 251.071 390.368 253.285 393.281 251.87 396.655"
        fill="#f2f2f2"
      />
      <polygon
        points="257.189 404.337 253.559 404.799 251.344 401.886 252.759 398.512 256.389 398.05 258.604 400.963 257.189 404.337"
        fill="#f2f2f2"
      />
      <path
        d="M384.50148,458.7286l-.80363,1.92046a12.73165,12.73165,0,0,1-2.82456.3132,12.86362,12.86362,0,0,1-2.87773-.325l-.75046-.98684,1.41228-3.37407,3.62819-.46092Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <path
        d="M392.43738,442.02363l-3.52183.44906-2.21591-2.91318,1.09321-2.60589A13.00752,13.00752,0,0,1,392.43738,442.02363Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <path
        d="M393.12874,452.31725a13.10619,13.10619,0,0,1-3.5218,5.28273l-1.13457-1.495,1.41228-3.37406Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <ellipse
        cx="546.74658"
        cy="792.67451"
        rx="243"
        ry="14.25"
        fill="#f2f2f2"
      />
      <path
        d="M557.98668,798.31313,506.71959,844.3096c-22.987-10.07991-38.24936-27.23282-45.99647-51.26709L511.99021,747.046C512.31325,777.26912,527.96313,794.08009,557.98668,798.31313Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#e6e6e6"
      />
      <rect
        x="466.56383"
        y="782.42699"
        width="45.54119"
        height="0.99944"
        transform="translate(-521.85128 458.83126) rotate(-40.49916)"
        fill="#3f3d56"
      />
      <rect
        x="470.97451"
        y="788.87618"
        width="44.94441"
        height="0.99898"
        transform="translate(-532.34089 487.31772) rotate(-42.05889)"
        fill="#3f3d56"
      />
      <path
        d="M583.22592,631.301l-68.49423,7.2478c-12.72573-21.63472-15.04771-44.477-7.24781-68.49423l68.49423-7.2478C558.536,587.491,561.37227,610.28318,583.22592,631.301Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#f2f2f2"
      />
      <rect
        x="513.82756"
        y="578.11615"
        width="45.54119"
        height="0.99944"
        transform="translate(-175.68704 -1.2204) rotate(-4.64128)"
        fill="#3f3d56"
      />
      <rect
        x="513.6812"
        y="585.75197"
        width="44.94441"
        height="0.99898"
        transform="translate(-190.81475 14.80599) rotate(-6.20101)"
        fill="#3f3d56"
      />
      <path
        d="M520.58543,486.12415l-45.789-51.4525c10.1727-22.94606,27.38713-38.139,51.45251-45.789l45.789,51.45251C541.8138,440.53612,524.93973,456.118,520.58543,486.12415Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#e6e6e6"
      />
      <rect
        x="535.74937"
        y="394.76403"
        width="0.99944"
        height="45.54119"
        transform="translate(-273.43086 399.01378) rotate(-40.26768)"
        fill="#3f3d56"
      />
      <rect
        x="529.28408"
        y="399.14862"
        width="0.99898"
        height="44.94441"
        transform="translate(-276.78941 414.2161) rotate(-41.8274)"
        fill="#3f3d56"
      />
      <rect
        x="554.87329"
        y="246.96226"
        width="54"
        height="133"
        transform="translate(-209.4016 286.39488) rotate(-30)"
        fill="#3f3d56"
      />
      <rect
        x="540.22187"
        y="281.3292"
        width="43.38195"
        height="0.99952"
        transform="translate(-195.58161 282.3065) rotate(-30.92535)"
        fill={color}
      />
      <rect
        x="546.14276"
        y="289.5958"
        width="43.38195"
        height="0.99952"
        transform="translate(-198.98826 286.52458) rotate(-30.92535)"
        fill={color}
      />
      <rect
        x="550.14276"
        y="296.5958"
        width="43.38195"
        height="0.99952"
        transform="translate(-202.01706 289.5754) rotate(-30.92535)"
        fill={color}
      />
      <rect
        x="556.14276"
        y="305.5958"
        width="43.38195"
        height="0.99952"
        transform="translate(-205.78937 293.93839) rotate(-30.92535)"
        fill={color}
      />
      <rect
        x="565.14264"
        y="318.59604"
        width="43.3822"
        height="0.99952"
        transform="translate(-211.19101 300.41182) rotate(-30.92535)"
        fill={color}
      />
      <path
        d="M741.62,388.30406s25.74126-12.38061,44.05859-7.76585L741.62,261.71352V249.512l62.36214,148.379h0c15.59183,29.38982,35.304,96.37434,1.69573,101.75169-38.12968,6.10075-106.76311,28.97856-106.76311,28.97856L683.66288,395.93Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
      <path
        d="M591.38906,348.64919s-41.18006-51.85636-51.85637-33.55412S587.48,364.18318,587.48,364.18318Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#ffb9b9"
      />
      <path
        d="M605.11574,350.17438l-16.77706-9.15113s-10.67631,27.45337-10.67631,32.02893,16.77706,6.10075,16.77706,6.10075Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#d0cde1"
      />
      <circle cx="538.54689" cy="148.06754" r="39.65487" fill="#ffb9b9" />
      <path
        d="M699.67735,190.02972s16.77706,50.33118,28.97855,53.38155-47.2808,25.92819-47.2808,25.92819-18.30225-42.70525-27.45337-53.38156S699.67735,190.02972,699.67735,190.02972Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#ffb9b9"
      />
      <path
        d="M795.00155,484.39085c32.8753-5.26,14.73-69.47263-.671-99.77977a20.195,20.195,0,0,1,3.72137,3.693c15.25187,19.82743,45.75562,105.23791,7.62594,111.33866s-106.76311,28.97856-106.76311,28.97856l-2.075-18.0524C716.45143,504.27311,765.10214,489.17475,795.00155,484.39085Z"
        transform="translate(-130.62671 -46.53774)"
        opacity="0.1"
      />
      <path
        d="M847.6205,746.723s38.12968,30.50375,35.07931,33.55412-35.07931,51.85637-62.53268,56.43193-39.65486,4.57556-39.65486,0,7.62593-15.25187,21.35262-19.82744,15.25187-35.0793,13.72668-41.18005S847.6205,746.723,847.6205,746.723Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
      <path
        d="M733.23146,519.47015l24.403,114.389s100.66235,112.86385,97.612,114.389-33.55412,32.02893-39.65487,32.02893-111.33866-118.9646-111.33866-118.9646l-38.12968-99.13717Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
      <path
        d="M733.23146,519.47015l24.403,114.389s100.66235,112.86385,97.612,114.389-33.55412,32.02893-39.65487,32.02893-111.33866-118.9646-111.33866-118.9646l-38.12968-99.13717Z"
        transform="translate(-130.62671 -46.53774)"
        opacity="0.1"
      />
      <path
        d="M757.63446,482.86566S745.433,534.722,711.87884,569.80133s-48.806,106.7631-48.806,106.7631L629.51874,819.932s-59.4823-7.62594-56.43193-22.87781l32.02893-126.59054s36.60449-175.39652,56.43193-187.598S757.63446,482.86566,757.63446,482.86566Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
      <path
        d="M626.46836,807.73053s9.15112,28.97856,3.05038,32.02893S515.1297,848.91059,509.029,827.558c0,0-3.05038-10.67631,21.35262-10.67631s50.33118-22.8778,50.33118-22.8778Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
      <path
        d="M672.224,263.23871s39.65486-39.65487,50.33117-36.6045,10.67631,18.30225,10.67631,18.30225,33.55412,4.57556,30.50375,114.389,27.45337,122.015,16.77706,128.11572S647.821,520.99534,643.24542,493.542s-3.05037-132.69128,9.15112-166.2454S679.84991,272.38983,672.224,263.23871Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#575a89"
      />
      <path
        d="M722.55515,272.38983s45.75562,21.35262,19.82744,62.53267S696.627,420.333,669.1736,418.8078s-70.15861-27.45337-82.36011-27.45337,4.57557-44.23043,13.72669-45.75562,51.85636,24.403,51.85636,24.403S667.64842,266.28908,722.55515,272.38983Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#575a89"
      />
      <path
        d="M692.0502,198.9873c-3.38281-.20184-6.68589.94138-10.04523,1.38738-12.01878,1.59566-24.522-7.12574-27.17572-18.956a14.54469,14.54469,0,0,0-1.38995-4.52877c-1.84974-3.02-6.06244-3.59583-9.53519-2.90138s-6.7646,2.31978-10.30124,2.50534c-5.46064.28652-10.70312-3.07527-13.61328-7.7047s-3.73416-10.32591-3.3413-15.77993l2.6178,2.74749a13.29656,13.29656,0,0,0,1.18532-7.22646,8.38565,8.38565,0,0,1,7.943,2.03245c2.30828.24565.56616-4.28146,2.28105-5.846.71808-.65512,1.819-.53152,2.791-.52215,4.91058.04735,8.883-3.70861,12.75264-6.73218a54.19076,54.19076,0,0,1,22.88765-10.44c5.545-1.08153,11.4414-1.25533,16.70007.80949,4.31867,1.69572,7.93346,4.78419,11.27782,8,8.23294,7.91654,15.52333,17.21819,18.94841,28.11414a47.32786,47.32786,0,0,1,.22667,27.44358c-1.38012,4.65808-5.53945,20.61076-11.62861,20.98227C696.97994,212.83881,701.57364,199.55554,692.0502,198.9873Z"
        transform="translate(-130.62671 -46.53774)"
        fill="#2f2e41"
      />
    </svg>
  );
};

AbsorbedIn.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

AbsorbedIn.defaultProps = {
  color: "primary",
  style: {}
};

export default AbsorbedIn;
