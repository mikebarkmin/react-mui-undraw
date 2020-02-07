import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const IconDesign = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a8f551aa-2ecb-4789-b025-118d372e52a2"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1074.51172"
      height="670.78003"
      viewBox="0 0 1074.51172 670.78003"
    >
      <title>icon_design</title>
      <polygon
        points="1064 213.31 827.56 670.78 224.36 556.51 223.17 556.29 188.98 549.81 35.34 520.7 0 514.01 48.97 414.57 57.23 397.8 64.99 382.06 65.69 380.63 78.69 354.23 133.64 242.66 136.4 237.05 140.23 229.28 141.11 227.49 143.07 223.5 154.22 200.87 174.26 160.19 177.75 153.1 193.59 120.93 253.15 0 1064 213.31"
        fill="#3f3d56"
      />
      <path
        d="M584.27611,295.03311A142.72963,142.72963,0,0,0,382.42593,496.88329L584.27611,698.73348,786.1263,496.88329A142.72963,142.72963,0,1,0,584.27611,295.03311Z"
        transform="translate(-62.74414 -114.60999)"
        fill={color}
      />
      <polygon
        points="781.082 387.365 779.668 385.951 783.204 382.414 779.668 378.879 781.082 377.465 786.032 382.414 781.082 387.365"
        fill="#d0cde1"
      />
      <path
        d="M658.86816,686.93262l-1.41406-1.41407,8.40723-8.40722,1.41406,1.41406Zm16.81446-16.81446-1.41407-1.41406,8.40723-8.40722,1.41406,1.41406Zm16.81445-16.81445-1.41406-1.41406,8.40722-8.40723,1.41407,1.41406Zm16.81445-16.81445-1.41406-1.41406,8.40723-8.40723,1.41406,1.41406ZM726.126,619.6748l-1.41407-1.41406,8.40723-8.40722,1.41406,1.41406Zm16.81445-16.81445-1.41406-1.41406,8.40722-8.40723,1.41407,1.41407Zm16.81445-16.81445-1.41406-1.41406,8.40625-8.40625,1.41406,1.41406Zm16.81348-16.81348-1.41406-1.41406,8.40722-8.40723,1.41407,1.41407ZM793.38281,552.418l-1.41406-1.41406,8.40723-8.40723,1.41406,1.41406Zm16.81446-16.81445-1.41407-1.41407,8.40723-8.40722,1.41406,1.41406Zm16.81445-16.81446-1.41406-1.41406,8.40722-8.40723,1.41407,1.41407Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <polygon
        points="582.768 585.679 577.818 580.73 579.232 579.316 582.768 582.851 586.303 579.316 587.717 580.73 582.768 585.679"
        fill="#d0cde1"
      />
      <path
        d="M632.15527,686.93262l-8.40722-8.40723,1.41406-1.41406,8.40723,8.40722Zm-16.81445-16.81446-8.40723-8.40722,1.41407-1.41406,8.40722,8.40722Zm-16.814-16.81445-8.40723-8.40723,1.41406-1.41406,8.40723,8.40723ZM581.7124,636.48926l-8.40722-8.40723,1.41406-1.41406,8.40722,8.40723ZM564.898,619.6748l-8.40723-8.40722,1.41407-1.41406,8.40722,8.40722ZM548.0835,602.86035l-8.40674-8.40625,1.41406-1.41406,8.40674,8.40625Zm-16.814-16.81347-8.40723-8.40723,1.41407-1.41406,8.40722,8.40722Zm-16.81445-16.81446-8.40723-8.40722,1.41406-1.41407,8.40723,8.40723ZM497.64063,552.418l-8.40723-8.40723,1.41406-1.41406,8.40723,8.40723Zm-16.81446-16.81445-8.40674-8.40723,1.41407-1.41406,8.40673,8.40722Zm-16.814-16.81446-8.40723-8.40722,1.41406-1.41407,8.40723,8.40723Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <polygon
        points="384.453 387.365 379.503 382.414 384.453 377.465 385.867 378.879 382.332 382.414 385.867 385.951 384.453 387.365"
        fill="#d0cde1"
      />
      <path
        d="M457.01855,485.082l-1.41406-1.41406,8.40723-8.40723,1.41406,1.41406ZM473.833,468.26758l-1.41406-1.41406,8.40722-8.40723,1.41406,1.41406Zm16.81445-16.81445-1.41406-1.41407,8.40674-8.40674,1.41406,1.41407Zm16.814-16.814-1.41407-1.41406,8.40723-8.40723,1.41406,1.41406Zm16.81445-16.81445-1.41406-1.41407,8.40722-8.40722,1.41407,1.41406Zm16.81445-16.81446-1.41406-1.41406,8.40723-8.40723,1.41406,1.41407Zm16.81446-16.81445-1.41407-1.41406,8.40723-8.40723,1.41406,1.41406Zm16.814-16.814-1.41406-1.41407,8.40722-8.40722,1.41407,1.41406Zm16.81445-16.81446-1.41406-1.41406,8.40723-8.40723,1.41406,1.41407Zm16.81446-16.81445-1.41407-1.41406,8.40723-8.40723,1.41406,1.41406Zm16.81445-16.81445-1.41406-1.41407,8.40722-8.40722,1.41407,1.41406Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <polygon
        points="586.303 185.515 582.768 181.979 579.232 185.515 577.818 184.1 582.768 179.151 587.717 184.1 586.303 185.515"
        fill="#d0cde1"
      />
      <path
        d="M834.00488,485.08105l-8.40722-8.40722,1.41406-1.41406L835.419,483.667ZM817.19043,468.2666l-8.40723-8.40674,1.41407-1.41406,8.40722,8.40674Zm-16.81445-16.814-8.40723-8.40723,1.41406-1.41406,8.40723,8.40722Zm-16.81446-16.814-8.40625-8.40722,1.41407-1.41407,8.40625,8.40723Zm-16.81347-16.81445-8.40723-8.40723,1.41406-1.41406,8.40723,8.40723Zm-16.81446-16.81445-8.40722-8.40723,1.41406-1.41406,8.40723,8.40722Zm-16.81445-16.814-8.40723-8.40723,1.41407-1.41406,8.40722,8.40723Zm-16.81445-16.81445-8.40723-8.40723,1.41406-1.41406,8.40723,8.40723Zm-16.81446-16.81446-8.40722-8.40722,1.41406-1.41406,8.40723,8.40722Zm-16.81445-16.814-8.40723-8.40723,1.41407-1.41406,8.40722,8.40723Zm-16.81445-16.81445-8.40723-8.40723,1.41406-1.41406,8.40723,8.40722Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <path
        d="M541.56787,539.79883c-4.04736-.084-8.14355-.34278-12.17432-.76953l.21-1.98828c3.97509.41992,8.01464.6748,12.00634.75781Zm12.19678-.26074-.12695-1.9961c3.98486-.25293,8.01025-.68066,11.96435-1.27051L565.897,538.25C561.8877,538.84766,557.80566,539.28125,553.76465,539.53809Zm-36.4375-2.30176c-3.98047-.76563-7.97461-1.71-11.87061-2.8086l.543-1.92578c3.8418,1.084,7.77979,2.01563,11.70459,2.76953Zm60.55029-1.29395-.46191-1.94531c3.89355-.92383,7.78955-2.02441,11.5791-3.27148l.625,1.90039C585.77637,533.88965,581.82568,535.00586,577.87744,535.94238Zm-84.00976-5.32226c-3.791-1.42578-7.5669-3.03418-11.22168-4.7793l.86132-1.80469c3.604,1.72071,7.32666,3.30567,11.06446,4.71289Zm107.17138-2.29883-.78467-1.83984c3.67725-1.56934,7.32959-3.31543,10.855-5.19043l.93945,1.76562C608.47363,524.958,604.76953,526.72949,601.03906,528.32129ZM471.875,520.12012c-3.48828-2.04785-6.93408-4.27442-10.24268-6.61719l1.15625-1.63281c3.26172,2.31054,6.65967,4.50586,10.09913,6.52539Zm150.69336-3.249-1.08594-1.67968c3.35059-2.168,6.65235-4.51172,9.81543-6.96289l1.22461,1.58007C629.31543,512.29492,625.9668,514.6709,622.56836,516.87109ZM451.99268,506.04c-3.08692-2.60547-6.10889-5.38184-8.98243-8.25293l1.41309-1.41406c2.83447,2.83105,5.81494,5.56933,8.85937,8.13867Zm189.85107-4.11133-1.35352-1.47266c1.44922-1.333,2.90137-2.72558,4.31446-4.13867,1.41308-1.41211,2.82226-2.88183,4.19043-4.37011l1.47265,1.35351c-1.38672,1.50879-2.8164,2.999-4.249,4.43067C644.78613,499.16406,643.31348,500.57617,641.84375,501.92871ZM434.74756,488.81348c-2.624-3.10059-5.1416-6.34571-7.48193-9.64356l1.63085-1.1582c2.30811,3.25293,4.79,6.45215,7.37745,9.51074Zm223.59228-4.834-1.582-1.22461c2.4502-3.16308,4.78907-6.46289,6.95215-9.80859l1.67969,1.08594C663.19531,477.42578,660.82324,480.77246,658.33984,483.97949ZM420.63232,468.92383c-2.05712-3.49512-3.98632-7.11963-5.73339-10.773l1.80371-.86328c1.72314,3.60205,3.625,7.17578,5.65332,10.62256Zm250.93409-5.40625-1.76563-.93848c1.87207-3.52441,3.61621-7.17529,5.1836-10.85058l1.83984.78418C675.23535,456.24023,673.46582,459.94287,671.56641,463.51758ZM410.10693,446.92822c-1.43115-3.793-2.71533-7.69238-3.81689-11.58984l1.9248-.54395c1.08594,3.84278,2.35205,7.6875,3.76319,11.42774Zm271.01612-5.83008-1.90039-.625c1.24707-3.792,2.3457-7.687,3.26757-11.57568l1.94532.46094C683.502,433.30225,682.3877,437.252,681.12305,441.09814ZM403.47119,423.46729c-.76709-3.97413-1.37353-8.03418-1.80273-12.06641l1.98877-.21192c.42334,3.97657,1.02148,7.98047,1.77783,11.89942Zm283.27-6.0879-1.97851-.29394c.58789-3.95361,1.01464-7.97852,1.26757-11.96338l1.9961.12695C687.76953,409.28955,687.33691,413.37061,686.74121,417.37939Zm-285.85107-18.1538q-.03369-1.56227-.03369-3.126c0-3.01318.0957-6.06494.28466-9.07031l1.9961.125c-.18653,2.96435-.28076,5.97412-.28076,8.94531q0,1.541.03369,3.083Zm285.395-6.13135c-.084-3.9917-.33985-8.03125-.76075-12.00684l1.98829-.21094c.42773,4.03174.6875,8.12793.77246,12.17579ZM404.398,375.19043l-1.97852-.29346c.59424-4.00634,1.36817-8.03711,2.29932-11.98l1.94629.46C405.74658,367.26514,404.98389,371.23975,404.398,375.19043ZM683.751,369.187c-.75489-3.92627-1.6875-7.86474-2.77246-11.70752l1.9248-.543c1.10059,3.89649,2.0459,7.89112,2.8125,11.87256ZM409.92529,351.79883l-1.90039-.62305c1.26367-3.85156,2.708-7.69287,4.29346-11.41748l1.83984.7832C412.59521,344.21387,411.1709,348.00146,409.92529,351.79883Zm267.29737-5.74951c-1.40918-3.74024-2.9961-7.46436-4.71875-11.06836l1.80468-.86231c1.74707,3.65528,3.35645,7.43213,4.78516,11.22559ZM419.33643,329.68848l-1.76661-.9375c1.89649-3.57422,3.97315-7.1128,6.17139-10.51807l1.68067,1.085C423.25391,322.67529,421.20654,326.16455,419.33643,329.68848Zm247.519-5.33252c-2.02344-3.44434-4.22266-6.84424-6.53418-10.105l1.63086-1.15723c2.3457,3.30762,4.57519,6.75537,6.62793,10.24854ZM432.36816,309.50488l-1.582-1.22363c2.47315-3.19629,5.11963-6.3335,7.86621-9.32422l1.47266,1.35254C437.4165,303.25928,434.80664,306.353,432.36816,309.50488Zm220.58106-4.76806c-2.5752-3.04688-5.31543-6.02588-8.14453-8.855l-.10449-.10547,1.40429-1.42383.13281.13428c2.84961,2.84912,5.62793,5.86963,8.23926,8.959ZM448.626,291.79492l-1.35547-1.4707c2.9873-2.75244,6.12207-5.40527,9.31689-7.88574l1.22656,1.58007C454.66309,286.46436,451.57178,289.08057,448.626,291.79492ZM635.832,287.63818c-3.05664-2.57763-6.25683-5.05175-9.51074-7.354l1.1543-1.63281c3.30078,2.335,6.54589,4.84375,9.6455,7.45752ZM467.62646,277.05029l-1.08789-1.67871c3.39844-2.20166,6.93653-4.28467,10.51661-6.19238l.94043,1.76562C474.46582,272.8252,470.97705,274.87939,467.62646,277.05029Zm148.59229-3.28564c-3.44434-2.02051-7.01855-3.916-10.624-5.63428l.86132-1.80566c3.65528,1.74316,7.28028,3.66552,10.77442,5.71435ZM488.84863,265.749l-.78613-1.83886c3.72363-1.59082,7.56445-3.041,11.416-4.311l.626,1.89942C496.30713,262.75049,492.51953,264.18066,488.84863,265.749Zm105.68067-2.32568c-3.7378-1.4043-7.583-2.66455-11.42969-3.74707l.542-1.92481c3.90039,1.09717,7.80029,2.37549,11.59082,3.79981Zm-82.84815-5.20117-.4624-1.9458c3.94141-.937,7.97168-1.71582,11.97949-2.31543l.2959,1.97754C519.54248,256.53027,515.56787,257.29834,511.68115,258.22217Zm59.71094-1.3086c-3.92334-.75146-7.92676-1.34472-11.8999-1.7622l.209-1.98926c4.02881.42383,8.08887,1.0249,12.0669,1.7876Zm-35.93457-2.251-.12793-1.9961c4.04541-.25976,8.14111-.34912,12.19678-.2666l-.041,2C543.48682,254.31787,539.44678,254.40625,535.45752,254.6626Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <path
        d="M743.419,539.79883c-4.04786-.084-8.14356-.34278-12.17579-.76953l.21094-1.98828c3.97559.41992,8.01465.6748,12.00586.75781Zm12.19726-.26074-.127-1.9961c3.98535-.25293,8.00976-.68066,11.96387-1.27051l.29492,1.97852C763.73926,538.84766,759.65723,539.28125,755.61621,539.53809Zm-36.4375-2.30176c-3.98144-.76563-7.97558-1.71-11.87109-2.8086l.543-1.92578c3.84082,1.084,7.77929,2.01563,11.70507,2.76953Zm60.54981-1.29395-.46094-1.94531c3.89355-.92383,7.78906-2.02441,11.57812-3.27148l.625,1.90039C787.62793,533.88965,783.67773,535.00586,779.72852,535.94238Zm-84.01075-5.32226c-3.78906-1.42578-7.56543-3.03418-11.22168-4.7793l.86133-1.80469c3.60547,1.72071,7.32813,3.30664,11.06543,4.71289Zm107.1709-2.29785-.78515-1.83985c3.67773-1.56836,7.33007-3.31543,10.85546-5.19043l.93946,1.76563C810.32227,524.96,806.61816,526.73145,802.88867,528.32227Zm-129.16406-8.20215c-3.48926-2.04883-6.93555-4.27539-10.24121-6.61719l1.15625-1.63281c3.25976,2.30957,6.65723,4.50488,10.09765,6.52539Zm150.69336-3.25-1.08594-1.67969c3.34766-2.166,6.65039-4.50879,9.81543-6.96191l1.22461,1.58007C831.16309,512.29785,827.81348,514.67285,824.418,516.87012ZM653.84277,506.04c-3.083-2.60254-6.10449-5.37891-8.98242-8.25195l1.41406-1.416c2.83789,2.834,5.81836,5.57324,8.85938,8.14063Zm189.85157-4.11133-1.35352-1.47266c1.44922-1.333,2.90137-2.72558,4.31445-4.13867,1.42383-1.42383,2.834-2.89453,4.19043-4.37011l1.47266,1.35351c-1.376,1.49707-2.80566,2.98731-4.249,4.43067C846.63672,499.16406,845.16406,500.57617,843.69434,501.92871ZM636.59766,488.81348c-2.624-3.10059-5.14063-6.34571-7.48145-9.64356l1.63086-1.1582c2.30762,3.25293,4.79,6.45215,7.37793,9.51074Zm223.59179-4.834-1.582-1.22461c2.4502-3.16308,4.78906-6.46289,6.95215-9.80859l1.67969,1.08594C865.04492,477.42578,862.67285,480.77246,860.18945,483.97949Zm-237.708-15.05566c-2.05372-3.49072-3.98243-7.11524-5.7334-10.773l1.80468-.86328c1.72559,3.60644,3.62793,7.18017,5.65332,10.62256ZM873.416,463.51807l-1.76563-.93848c1.87207-3.52441,3.61621-7.17529,5.18359-10.85059l1.83985.78418C877.085,456.24121,875.31543,459.94336,873.416,463.51807ZM611.957,446.92871c-1.42969-3.78955-2.71484-7.689-3.81738-11.58984l1.92383-.54395c1.08789,3.84619,2.35449,7.69092,3.76465,11.42774Zm271.01563-5.83008-1.90039-.625c1.24707-3.792,2.3457-7.687,3.26757-11.57568l1.94532.46094C885.35156,433.30273,884.2373,437.25244,882.97266,441.09863ZM605.32227,423.46729c-.76758-3.97217-1.374-8.03223-1.80372-12.06641l1.98829-.21192c.42382,3.97852,1.02246,7.98194,1.77832,11.89942Zm283.26855-6.0879-1.97852-.29394c.5879-3.95361,1.01465-7.97852,1.26758-11.96338l1.9961.12695C889.61914,409.28955,889.18652,413.37061,888.59082,417.37939ZM602.74121,399.22607q-.03369-1.56225-.03418-3.12548c0-3.00879.0957-6.06055.28516-9.07129l1.99609.125c-.18652,2.96972-.28125,5.979-.28125,8.94531q.00147,1.541.03418,3.0835Zm285.39356-6.13134c-.085-4.00342-.34082-8.043-.76075-12.00733l1.98828-.21094c.42579,4.02.68555,8.1167.77247,12.1753ZM606.249,375.19141l-1.97851-.29395c.59472-4.01172,1.36914-8.04248,2.29883-11.98l1.94726.46C607.59863,367.25977,606.83594,371.23486,606.249,375.19141Zm279.35254-6.0044c-.75488-3.92627-1.6875-7.86474-2.77148-11.70752l1.9248-.543c1.09961,3.89649,2.04492,7.89112,2.81153,11.87256ZM611.77539,351.79932l-1.90039-.62305c1.26367-3.85352,2.709-7.69482,4.29395-11.41748l1.83984.7832C614.44629,344.21289,613.02148,348.00049,611.77539,351.79932Zm267.29688-5.75049c-1.40723-3.73682-2.99414-7.46045-4.71778-11.06787l1.80469-.86231c1.74805,3.65869,3.3584,7.43555,4.78418,11.22608ZM621.18652,329.68848l-1.76757-.9375c1.89746-3.57569,3.9746-7.11426,6.17285-10.51807l1.67968,1.085C625.10449,322.67383,623.05664,326.16309,621.18652,329.68848ZM868.70605,324.356c-2.02539-3.44678-4.22363-6.84668-6.53417-10.105l1.63085-1.15723c2.34375,3.30518,4.57325,6.75293,6.62793,10.24854Zm-234.4873-14.85157-1.582-1.22363c2.47558-3.19971,5.12207-6.33691,7.86621-9.32422l1.47266,1.35254C639.26953,303.25537,636.66016,306.34912,634.21875,309.50439Zm220.58105-4.76806c-2.57617-3.04737-5.3164-6.02637-8.14453-8.85449l-.10644-.106,1.4043-1.42383.11621.11572c2.86718,2.86719,5.6455,5.8877,8.25781,8.97754ZM650.47656,291.79492l-1.35547-1.4707c2.98536-2.751,6.12012-5.40381,9.31739-7.88574l1.22656,1.58007C656.5127,286.46582,653.4209,289.08252,650.47656,291.79492Zm187.20508-4.15674c-3.05664-2.57763-6.25684-5.05175-9.51074-7.354l1.1543-1.63281c3.30078,2.335,6.54589,4.84375,9.6455,7.45752Zm-168.2041-10.58789-1.08789-1.67871c3.40137-2.20361,6.93945-4.28662,10.51758-6.19238l.93945,1.76562C676.31934,272.82324,672.83105,274.87744,669.47754,277.05029Zm148.5918-3.28613c-3.44043-2.01807-7.01465-3.91357-10.624-5.63379l.86133-1.80566c3.66016,1.74511,7.28516,3.668,10.77441,5.71484Zm-127.3711-8.01562-.78515-1.83887c3.72461-1.59131,7.56543-3.04151,11.415-4.31055l.62695,1.89942C698.1582,262.74951,694.37109,264.17969,690.69824,265.74854Zm105.67969-2.3252c-3.73438-1.40332-7.58008-2.66406-11.42871-3.74707l.541-1.92481c3.9043,1.09766,7.80372,2.37647,11.59082,3.79981Zm-82.8457-5.20117-.46289-1.9458c3.94433-.9375,7.97461-1.71631,11.97949-2.31494l.29492,1.97753C721.39551,256.52979,717.4209,257.29785,713.53223,258.22217Zm59.71-1.3086c-3.92383-.75195-7.92774-1.34472-11.89942-1.7622l.209-1.98926c4.02832.42383,8.08789,1.0249,12.06738,1.7876Zm-35.93457-2.251-.12891-1.9961c4.0459-.25976,8.14649-.35107,12.19824-.2666l-.041,2C745.33984,254.31738,741.2959,254.40625,737.30762,254.6626Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <rect x="90.18359" y="583.68494" width="6" height="2" fill="#d0cde1" />
      <path
        d="M1119.251,700.29492h-12.00391v-2H1119.251Zm-24.00782,0h-12.0039v-2h12.0039Zm-24.00781,0h-12.0039v-2h12.0039Zm-24.00781,0h-12.00488v-2h12.00488Zm-24.00879,0h-12.00391v-2h12.00391Zm-24.00781,0H987.207v-2h12.00391Zm-24.00781,0H963.19922v-2h12.00391Zm-24.00782,0H939.19043v-2h12.00488Zm-24.00879,0h-12.0039v-2h12.0039Zm-24.00781,0H891.1748v-2h12.00391Zm-24.00781,0H867.166v-2H879.1709Zm-24.00879,0H843.1582v-2h12.00391Zm-24.00781,0H819.15039v-2H831.1543Zm-24.00782,0h-12.0039v-2h12.0039Zm-24.00781,0H771.13379v-2h12.00488Zm-24.00879,0H747.126v-2h12.0039Zm-24.00781,0H723.11816v-2h12.00391Zm-24.00781,0H699.10938v-2h12.00488Zm-24.00879,0H675.10156v-2h12.00391Zm-24.00781,0H651.09375v-2h12.00391Zm-24.00782,0h-12.0039v-2h12.0039Zm-24.00781,0H603.07715v-2H615.082Zm-24.00879,0h-12.0039v-2h12.0039Zm-24.00781,0H555.06152v-2h12.00391Zm-24.0083,0H531.05322v-2h12.00391Zm-24.00781,0h-12.0044v-2h12.0044Zm-24.0083,0H483.03711v-2H495.041Zm-24.00782,0H459.02881v-2H471.0332Zm-24.0083,0H435.021v-2h12.0039Zm-24.0083,0H411.0127v-2h12.0039Zm-24.00781,0H387.00488v-2h12.00391Zm-24.0083,0H362.99658v-2h12.00391Zm-24.00781,0h-12.0044v-2h12.0044Zm-24.0083,0H314.98047v-2h12.00391Zm-24.00831,0h-12.0039v-2h12.0039Zm-24.00781,0H266.96387v-2h12.00439Zm-24.0083,0H242.95605v-2H254.96Zm-24.00781,0h-12.0044v-2h12.0044Zm-24.0083,0H194.93994v-2h12.00391Zm-24.0083,0H170.93164v-2h12.00391Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#d0cde1"
      />
      <rect x="1068.51172" y="583.68494" width="6" height="2" fill="#d0cde1" />
      <polygon
        points="223.02 556.75 223.17 556.29 226.04 547.56 188.98 549.81 223.02 556.75"
        fill="#ffb9b9"
      />
      <path
        d="M243.74081,500.43223l22.521,57.32607s-2.04736,49.13664,24.56832,45.04192-4.09472-53.23136-4.09472-53.23136l-16.37888-59.37343S249.88289,486.10071,243.74081,500.43223Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#ffb9b9"
      />
      <circle cx="143.12052" cy="165.73107" r="36.85248" fill="#ffb9b9" />
      <path
        d="M178.2253,291.60154s-12.28416,40.94719-20.4736,40.94719,55.27872,24.56832,55.27872,24.56832-16.37888-16.37888,0-47.08927Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#ffb9b9"
      />
      <path
        d="M285.76414,671.36c.45-.08.9-.16,1.34-.24,10.76-1.94,17.62-4.23,18.06-6.9.85-5.11-6.45-31.84-15.26-61.31-9.88-33.01-21.65-69.46-26.01-82.85-1.1-3.39-1.73-5.3-1.73-5.3l-3.94-24.65-4.25-26.53-100.32,26.62-14.33,24.56-3.05,8.9v.01l-4.49,13.13-8.85,25.87-24.85,72.64,153.64,29.11Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#2f2e41"
      />
      <path
        d="M170.03586,328.454s28.38975,7.53728,36.71583,16.0528l14.46817,8.51552,18.42623,38.89984s14.33152,6.14207,14.33152,32.75775,20.4736,71.65759,20.4736,71.65759,14.33152,12.28416,4.09472,18.42624-22.521,6.14208-22.521,6.14208,10.2368-38.89984-10.2368-40.9472-30.71039-4.09472-32.75775,0-57.32608,63.46815-79.847,57.32608-10.2368-67.56288-10.2368-67.56288l18.42624-143.31518s14.33151-2.04736,22.521,0S170.03586,328.454,170.03586,328.454Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#575a89"
      />
      <circle cx="133.87046" cy="501.09403" r="6.1897" fill="#cfcce0" />
      <path
        d="M172.59448,619.43822l6.16716,5.46914,60.12514,19.22137.90134-1.62349L204.904,623.138a11.14147,11.14147,0,1,1,2.40357-4.3293l34.88414,19.36722.90134-1.62349-48.1073-40.86786-7.68612-2.73321,2.15324-3.8784-5.41163-3.00446L179.835,593.6448l-31.92857-17.72632-10.81606,19.48184,31.92857,17.72632-4.20625,7.57628,5.41163,3.00446Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#cfcce0"
      />
      <path
        d="M100.42563,500.43223l22.521,57.32607s-2.04736,49.13664,24.56832,45.04192-4.09472-53.23136-4.09472-53.23136l-16.37888-59.37343S106.56771,486.10071,100.42563,500.43223Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#ffb9b9"
      />
      <path
        d="M145.46755,328.454l-4.09472-2.04736s-12.28416-12.28415-26.61568,4.09472-28.663,102.368-28.663,102.368V459.485S69.71524,482.006,84.04675,494.29015s16.37888,14.33152,16.37888,14.33152,14.33152-20.4736,30.7104-10.2368l2.04736-8.18944a25.33784,25.33784,0,0,0,4.09472-6.14208c2.04736-4.09472,6.14208,2.04736,4.09472-4.09472s0-8.18944,0-10.2368,2.04736-12.28415,2.04736-12.28415l-2.04736-63.46816Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#575a89"
      />
      <path
        d="M251.78233,271.61s29.93825-65.27287-48.304-65.20275c0,0-48.00291-25.21748-84.5576,33.26425l-37.72258,61.489,9.638-1.91572,1.22331,9.59454,12.29781,7.54452,9.24963-9.55912-1.52992,14.63356,105.9618,45.00041s-39.949-44.23864-24.5388-96.39628l6.25576,12.76811Z"
        transform="translate(-62.74414 -114.60999)"
        fill="#2f2e41"
      />
      <ellipse
        cx="124.52661"
        cy="176.17205"
        rx="5.17272"
        ry="10.34544"
        fill="#ffb9b9"
      />
    </svg>
  );
};

IconDesign.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

IconDesign.defaultProps = {
  color: "primary",
  style: {}
};

export default IconDesign;
