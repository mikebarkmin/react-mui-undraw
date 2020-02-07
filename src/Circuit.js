import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Circuit = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f1ba0080-3221-4c35-b110-ed68464d7aea"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="978"
      height="813.6343"
      viewBox="0 0 978 813.6343"
    >
      <title>circuit</title>
      <path
        d="M459.52874,779.69641l-1.87485,26.24794v14.99882s-3.74971,39.3719,31.87249,35.62219,5.62455-59.99528,5.62455-59.99528l-3.7497-11.24911Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <path
        d="M506.40005,721.576s-11.24912,3.7497-7.49941,28.12279c0,0,9.37426,7.4994,18.74852,11.24911a31.599,31.599,0,0,1,9.50867,6.44072A73.48525,73.48525,0,0,0,562.05589,785.985c8.88925,1.89373,17.05328,1.67952,19.33825-4.41375,5.62456-14.99882-22.49823-28.12279-22.49823-28.12279L536.39769,729.0754Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <path
        d="M626.3906,470.34577s33.74734,44.99646,16.87367,46.87131-29.99764-39.3719-29.99764-39.3719Z"
        transform="translate(-111 -43.18285)"
        fill="#fbbebe"
      />
      <path
        d="M476.40241,442.223l-3.7497,131.23966s-7.49941,24.37308-5.62456,35.6222c0,0-3.17782,12.71127-3.68252,17.65555-.04354.4265-.06719.7952-.06719,1.093,0,3.74971-14.99882,67.49469-5.62455,112.49114,0,0-9.37427,35.6222,1.87485,44.99646l35.62219,1.87485-1.87485-69.36953,18.74853-104.99174,9.37426-28.12278s-14.99882,78.7438-11.24912,104.99173c0,0-7.49941,22.49823-5.62455,35.62219,0,0,1.87485,16.87368,33.74734,5.62456l5.62456-29.99764L589.50142,465.7973l-43.72947-19.82461Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <circle cx="449.77077" cy="160.93388" r="33.74734" fill="#fbbebe" />
      <polygon
        points="420.711 165.621 407.587 193.744 441.334 216.242 458.208 186.244 420.711 165.621"
        fill="#fbbebe"
      />
      <path
        d="M558.89591,256.6126l-.54015-7.8932s-24.75381-10.22118-35.54248-20.84994l-8.91382,6.24491-52.49587,24.37308L480.15211,455.347s33.74735-3.7497,54.37072,18.74853,56.24557-9.37427,56.24557-9.37427V410.3505l-9.37426-61.87013,9.37426-67.49469Z"
        transform="translate(-111 -43.18285)"
        fill="#d0cde1"
      />
      <path
        d="M577.64444,279.11083l13.124,1.87485s5.50973,11.01945,3.80507,47.60017q-.02651.56887-.05536,1.146c-1.87485,37.49705,5.62456,50.621,5.62456,50.621l31.87249,93.74262-20.62338,11.24911-29.99764-58.12042L560.77077,307.23362Z"
        transform="translate(-111 -43.18285)"
        fill="#d0cde1"
      />
      <path
        d="M598.599,184.84745a19.23656,19.23656,0,0,0-.88559-6.88926c-1.73906-4.75065-6.31809-7.76981-10.66511-10.35753-6.09987-3.63115-12.42182-7.12651-19.35307-8.66s-14.64427-.87976-20.41548,3.25386c-3.71336,2.65968-6.35745,6.527-8.81894,10.37462a57.92718,57.92718,0,0,0-6.75676,13.169,1.82048,1.82048,0,0,0-.10427,1.14069,2.03573,2.03573,0,0,0,.80166.86129c4.63363,3.46014,8.1138,4.98446,4.93371,9.81459,7.67035-7.91157,13.12588-10.13051,20.79622-18.04208-.89907.83134.44687,2.32383,1.67019,2.26968s2.36642-.80725,3.58629-.70068c1.77719.15526,2.84334,1.96413,4.16528,3.162s4.08766,1.34925,4.31171-.42058l4.66658,6.305a5.35223,5.35223,0,0,0,2.35426-1.722l5.02846,7.60306,2.11726-2.269a39.80818,39.80818,0,0,1,2.53115,4.46927c3.93507-3.26064,5.13275,4.81552,5.13605,6.72768C597.96983,204.30017,598.55252,188.31668,598.599,184.84745Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <path
        d="M508.2749,459.09666s33.74734,44.99645,16.87367,46.87131-29.99764-39.3719-29.99764-39.3719Z"
        transform="translate(-111 -43.18285)"
        fill="#fbbebe"
      />
      <path
        d="M468.903,260.36231l-7.49941-1.87486s-20.62338,28.12279-24.37308,58.12043-7.49941,67.49468-7.49941,67.49468l63.745,89.99292,22.49823-16.87368-48.74616-84.36835,16.87367-24.37308Z"
        transform="translate(-111 -43.18285)"
        fill="#d0cde1"
      />
      <polygon
        points="364.303 343.992 403.837 413.102 368.215 338.107 364.303 343.992"
        opacity="0.1"
      />
      <polygon
        points="978 747 976 747 976 26 231 26 231 24 978 24 978 747"
        fill="#3f3d56"
      />
      <rect x="520" y="4" width="213" height="43" fill="#3f3d56" />
      <rect x="266" y="4" width="82" height="43" fill="#3f3d56" />
      <circle cx="189" cy="218" r="25" fill="#f2f2f2" />
      <circle cx="189" cy="385" r="47" fill="#f2f2f2" />
      <circle cx="189" cy="565" r="63" fill="#f2f2f2" />
      <circle cx="214" cy="593" r="10" fill="#d0cde1" />
      <circle cx="174" cy="571" r="6" fill="#d0cde1" />
      <circle cx="189" cy="539" r="6" fill="#d0cde1" />
      <path
        d="M424.48328,505.779a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,424.48328,505.779Zm0-22a10,10,0,1,0,10,10A10.01114,10.01114,0,0,0,424.48328,483.779Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <path
        d="M381.31092,195.06889H361.56977V175.32774h19.74115Zm-18.2226-1.51855h16.704v-16.704h-16.704Z"
        transform="translate(-111 -43.18285)"
        fill="#3f3d56"
      />
      <path
        d="M182.95479,340.149l-13.4651-14.43621,14.43621-13.46509,13.4651,14.43621ZM171.636,325.78746l11.39354,12.21526,12.21525-11.39354L183.8512,314.39392Z"
        transform="translate(-111 -43.18285)"
        fill="#2f2e41"
      />
      <circle cx="433" cy="25" r="25" fill={color} />
      <rect y="77" width="433" height="2" fill="#3f3d56" />
      <circle cx="77" cy="78" r="25" fill={color} />
      <rect x="520.68628" y="356.81715" width="245" height="171" fill={color} />
      <path
        d="M900.68628,536h-247V363h247Zm-245-2h243V365h-243Z"
        transform="translate(-111 -43.18285)"
        fill="#3f3d56"
      />
    </svg>
  );
};

Circuit.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Circuit.defaultProps = {
  color: "primary",
  style: {}
};

export default Circuit;
