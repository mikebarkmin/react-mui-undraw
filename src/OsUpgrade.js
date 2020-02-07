import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const OsUpgrade = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a7471a9f-044c-4cda-a4d5-ec6d0a14b11c"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1038"
      height="726.02215"
      viewBox="0 0 1038 726.02215"
    >
      <title>os_upgrade</title>
      <path
        d="M234.46917,695.55273l-1.2865-.4823c-.28271-.10652-28.41966-10.88673-41.60022-35.33038-13.18114-24.44482-6.72695-53.87647-6.66022-54.1703l.30378-1.34035,1.28592.48229c.2827.10653,28.41906,10.88674,41.60021,35.33039,13.18114,24.44482,6.72695,53.87647,6.66022,54.17029Zm-40.77609-36.95052c11.14368,20.66724,33.37838,31.26132,39.012,33.67981,1.07112-6.038,4.4302-30.45476-6.70353-51.1021-11.13257-20.645-33.376-31.25547-39.012-33.67982C185.91784,613.54165,182.55993,637.956,193.69308,658.60221Z"
        transform="translate(-81 -86.98892)"
        fill="#3f3d56"
      />
      <path
        d="M201.65545,652.36432c23.68723,14.251,32.80992,42.55746,32.80992,42.55746s-29.28187,5.201-52.96909-9.05-32.80992-42.55746-32.80992-42.55746S177.96823,638.1133,201.65545,652.36432Z"
        transform="translate(-81 -86.98892)"
        fill={color}
      />
      <ellipse
        cx="855.88011"
        cy="346.42767"
        rx="86.30724"
        ry="19.17939"
        fill="#3f3d56"
      />
      <rect
        x="676.00031"
        y="579.65992"
        width="244.85721"
        height="2.3964"
        transform="translate(-116.11694 1023.1009) rotate(-68.44806)"
        fill="#3f3d56"
      />
      <rect
        x="1071.73569"
        y="458.42952"
        width="2.3964"
        height="244.85721"
        transform="translate(-219.33283 347.5264) rotate(-21.54098)"
        fill="#3f3d56"
      />
      <rect
        x="853.48269"
        y="379.99159"
        width="2.39742"
        height="227.75521"
        fill="#3f3d56"
      />
      <rect
        x="873.34826"
        y="521.53953"
        width="2.3977"
        height="101.85523"
        transform="translate(-109.59242 1011.68184) rotate(-63.43495)"
        fill="#3f3d56"
      />
      <rect
        x="945.88808"
        y="571.26829"
        width="101.85523"
        height="2.3977"
        transform="translate(-231.77846 419.23757) rotate(-26.56505)"
        fill="#3f3d56"
      />
      <path
        d="M818.807,297.36282s-35.96135-37.16006-45.551-14.38454,35.96135,34.76264,35.96135,34.76264Z"
        transform="translate(-81 -86.98892)"
        fill="#ffb8b8"
      />
      <path
        d="M896.72327,362.09325,849.97352,429.2211l-49.14718,68.32656L786.4418,695.33508l49.14718,5.99356s-7.19227-53.942,5.99356-86.30724,13.18583-91.10208,13.18583-91.10208l85.10852-103.0892,47.94847,82.7111L1039.37,701.32864l43.15362-3.59613s-15.58325-91.10209-13.18583-100.69178-25.17294-89.90337-25.17294-89.90337L1022.588,350.10613S924.29364,335.72159,896.72327,362.09325Z"
        transform="translate(-81 -86.98892)"
        fill="#2f2e41"
      />
      <circle cx="836.0749" cy="63.48814" r="34.44769" fill="#ffb8b8" />
      <path
        d="M939.87689,161.9084l25.173,26.37166,7.19227,40.75619-63.53172,10.78841,4.79485-37.16006s-1.19871-17.98068-5.99356-21.57681S939.87689,161.9084,939.87689,161.9084Z"
        transform="translate(-81 -86.98892)"
        fill="#ffb8b8"
      />
      <path
        d="M871.55033,236.22852"
        transform="translate(-81 -86.98892)"
        fill="none"
        stroke="lime"
        stroke-miterlimit="10"
      />
      <path
        d="M907.51168,207.45944l5.84-6.59291,19.33291,17.38132,32.36522-29.96779L1014.197,353.70227s-31.16651-10.78841-61.1343,3.59613-69.52527,10.78841-69.52527,10.78841l1.19871-134.25571Z"
        transform="translate(-81 -86.98892)"
        fill="#575a89"
      />
      <path
        d="M872.749,233.8311l40.16448-36.74378s13.77755,19.96182,7.784,58.32059-10.78841,113.87761-32.36522,134.2557S858.3645,417.234,858.3645,417.234l21.57681-86.30724S863.15935,243.42079,872.749,233.8311Z"
        transform="translate(-81 -86.98892)"
        fill="#d0cde1"
      />
      <path
        d="M953.55278,176.23552s71.43264-7.13485,72.63135,1.25613-7.19227,104.28792-7.19227,104.28792,74.32012,99.49306,43.15362,118.67245c-14.534,8.944-27.09257-10.69907-44.95169-35.362-20.4378-28.224-45.43-63.64079-47.34911-80.913C966.24855,251.81178,953.55278,176.23552,953.55278,176.23552Z"
        transform="translate(-81 -86.98892)"
        fill="#d0cde1"
      />
      <path
        d="M876.34518,267.395l-5.99356,46.74975-52.74331-22.77552-16.782,34.76264,86.30724,32.36521S902.71683,275.786,876.34518,267.395Z"
        transform="translate(-81 -86.98892)"
        fill="#d0cde1"
      />
      <path
        d="M791.23665,689.34153,756.474,745.681s-65.92914,35.96135-43.15362,45.55105,77.91626-10.78841,83.90982-22.77553,8.391-14.38454,10.7884-11.98711,32.36522-7.19227,33.56393-10.78841,0-44.35233-10.78841-49.14717S791.23665,689.34153,791.23665,689.34153Z"
        transform="translate(-81 -86.98892)"
        fill="#2f2e41"
      />
      <path
        d="M1040.56867,695.33508l7.19227,44.35234,8.391,31.1665s5.99356,45.551,34.76264,41.95491c14.38454-1.79807,19.47906-11.98712,20.97745-21.72665a43.49631,43.49631,0,0,0-4.80395-26.9441l-16.1735-30.44422L1076.53,692.93766Z"
        transform="translate(-81 -86.98892)"
        fill="#2f2e41"
      />
      <path
        d="M882.6578,156.78069s-4.68107-5.05495-4.20728-11.38315a36.08331,36.08331,0,0,0-.68309-10.7574s1.4651-10.3576,3.62841-16.36129.33963-8.093,9.63892-11.37068,3.37922-15.13042,30.79632-5.683a7.50039,7.50039,0,0,0,8.15737,1.66907c5.06176-1.85377,8.11215,5.10016,8.11215,5.10016s3.15728-2.59039,4.92893.10274,10.3401-3.4451,13.4821,16.14745-7.6444,37.06447-7.6444,37.06447-1.51347-31.35274-19.31924-31.92112-37.94176-7.313-40.43923,5.88966A96.36271,96.36271,0,0,1,882.6578,156.78069Z"
        transform="translate(-81 -86.98892)"
        fill="#2f2e41"
      />
      <path
        d="M1007.35707,337.01745s-43.24347,28.35649-22.66981,42.0463,40.88857-28.806,40.88857-28.806Z"
        transform="translate(-81 -86.98892)"
        fill="#ffb8b8"
      />
      <path
        d="M1017.79315,177.49165s10.78841-5.99355,14.38454,5.99356,40.7562,104.28791,40.7562,104.28791l-46.74976,71.9227-33.56392-23.97423,40.75619-47.94847L1005.806,254.2092Z"
        transform="translate(-81 -86.98892)"
        fill="#d0cde1"
      />
      <path
        d="M793.03472,198.48562h-1.25485V164.10941a19.896,19.896,0,0,0-19.89608-19.896h-72.8306a19.896,19.896,0,0,0-19.89608,19.896V352.7a19.896,19.896,0,0,0,19.89608,19.896h72.8306A19.896,19.896,0,0,0,791.77987,352.7V222.95519h1.25485Z"
        transform="translate(-81 -86.98892)"
        fill="#3f3d56"
      />
      <path
        d="M772.216,149.86019h-9.50681a7.05905,7.05905,0,0,1-6.53572,9.72509H714.44976a7.05907,7.05907,0,0,1-6.53573-9.72509h-8.87938a14.85813,14.85813,0,0,0-14.85814,14.85811V353.0322a14.85813,14.85813,0,0,0,14.85814,14.85812H772.216a14.85813,14.85813,0,0,0,14.85814-14.85812V164.7183A14.85813,14.85813,0,0,0,772.216,149.86019Z"
        transform="translate(-81 -86.98892)"
        fill={color}
      />
      <polygon
        points="654.393 154.754 670.028 181.835 685.663 208.916 654.393 208.916 623.122 208.916 638.757 181.835 654.393 154.754"
        fill="#3f3d56"
      />
      <polygon
        points="654.319 174.36 661.412 186.645 668.504 198.93 654.319 198.93 640.134 198.93 647.227 186.645 654.319 174.36"
        fill="#d0cde1"
      />
      <polygon
        points="654.319 134.413 661.412 146.698 668.504 158.982 654.319 158.982 640.134 158.982 647.227 146.698 654.319 134.413"
        fill="#d0cde1"
      />
      <polygon
        points="348.721 250.708 451.862 429.354 555.003 608 348.721 608 142.439 608 245.58 429.354 348.721 250.708"
        fill="#3f3d56"
      />
      <polygon
        points="348.236 380.04 395.025 461.08 441.813 542.12 348.236 542.12 254.66 542.12 301.448 461.08 348.236 380.04"
        fill="#d0cde1"
      />
      <polygon
        points="348.236 116.52 395.025 197.559 441.813 278.599 348.236 278.599 254.66 278.599 301.448 197.559 348.236 116.52"
        fill="#d0cde1"
      />
      <rect y="606.54809" width="672.47723" height="2.39742" fill="#3f3d56" />
      <path
        d="M288.38882,233.94465c-4.5654-5.23617-8.87562-13.68349-11.39947-20.49165-2.52619,6.80816-6.8364,15.25548-11.4018,20.49165l10.20309-3.69052V284.177h2.39743V230.25421Z"
        transform="translate(-81 -86.98892)"
        fill="#3f3d56"
      />
      <path
        d="M617.43517,413.152c-4.56541-5.23617-8.87562-13.68348-11.39947-20.49165-2.52619,6.80817-6.8364,15.25548-11.40181,20.49165l10.2031-3.69051v53.92285h2.39742V409.4616Z"
        transform="translate(-81 -86.98892)"
        fill="#3f3d56"
      />
      <path
        d="M514.346,107.48057c-4.56541-5.23617-8.87562-13.68348-11.39947-20.49165-2.52619,6.80817-6.8364,15.25548-11.40181,20.49165l10.2031-3.69051v53.92285h2.39742V103.79013Z"
        transform="translate(-81 -86.98892)"
        fill="#3f3d56"
      />
    </svg>
  );
};

OsUpgrade.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

OsUpgrade.defaultProps = {
  color: "primary",
  style: {}
};

export default OsUpgrade;
