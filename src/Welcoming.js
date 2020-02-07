import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Welcoming = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a2593f0c-3437-45bc-bcbc-f89f51f04e57"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1100"
      height="673.5513"
      viewBox="0 0 1100 673.5513"
    >
      <title>welcoming</title>
      <path
        d="M580.36963,786.46579l-1.38623-1.44141c.27441-.26367,27.55469-26.97656,37.95117-76.89649,9.60156-46.09668,6.3584-121.99121-63.61523-221.76855-29.23682-41.68945-49.17481-81.07813-59.26026-117.0708-8.24072-29.40967-9.98535-56.74951-5.18554-81.25977,9.48876-48.45947,41.74072-69.73388,42.06542-69.94287l1.0835,1.68067c-.31787.20507-31.896,21.08007-41.19873,68.70849-10.67285,54.644,10.90479,120.83594,64.1333,196.73584,31.082,44.32129,51.77246,87.72071,61.49707,128.99414,7.79,33.06348,8.60156,64.84375,2.41211,94.459C608.31641,759.14059,580.648,786.19821,580.36963,786.46579Z"
        transform="translate(-64 -113.4487)"
        fill="#f2f2f2"
      />
      <circle cx="449.22826" cy="138.83504" r="77.41424" fill="#f2f2f2" />
      <path
        d="M531.48047,324.40426A105.47778,105.47778,0,1,1,636.958,218.92623,105.59766,105.59766,0,0,1,531.48047,324.40426Zm0-208.95556A103.47778,103.47778,0,1,0,634.958,218.92623,103.595,103.595,0,0,0,531.48047,115.4487Z"
        transform="translate(-64 -113.4487)"
        fill="#f2f2f2"
      />
      <circle cx="526.6425" cy="314.43319" r="64.19717" fill="#f2f2f2" />
      <circle cx="493.91453" cy="537.23514" r="64.19717" fill="#f2f2f2" />
      <rect x="528.42116" y="113.99993" width="235" height="153" fill={color} />
      <path
        d="M1140.98019,786.44862H923.33913s-4.41165-64.7041,21.69058-65.43937,23.16112,28.67568,55.88081-11.76438,72.42448-38.23424,77.57139-14.33784-9.92619,43.01352,17.64658,37.13133S1163.40605,741.59692,1140.98019,786.44862Z"
        transform="translate(-64 -113.4487)"
        fill="#f2f2f2"
      />
      <path
        d="M1028.4858,786.46334l-.73455-.02943c1.71306-42.60065,10.63508-69.972,17.818-85.43179,7.799-16.78654,15.31438-23.58208,15.38941-23.64886l.48863.54948c-.074.06606-7.50173,6.79411-15.23826,23.467C1039.06578,716.76419,1030.19259,744.02318,1028.4858,786.46334Z"
        transform="translate(-64 -113.4487)"
        fill="#fff"
      />
      <path
        d="M1107.25561,786.5513l-.70584-.20535a114.05749,114.05749,0,0,1,28.71589-47.77521l.494.54427A113.28291,113.28291,0,0,0,1107.25561,786.5513Z"
        transform="translate(-64 -113.4487)"
        fill="#fff"
      />
      <path
        d="M957.61858,786.49925l-.72845-.10125a80.08009,80.08009,0,0,0-7.20285-46.80693,64.44942,64.44942,0,0,0-11.36767-16.58782l.50874-.53063a65.2568,65.2568,0,0,1,11.51809,16.79282A80.814,80.814,0,0,1,957.61858,786.49925Z"
        transform="translate(-64 -113.4487)"
        fill="#fff"
      />
      <path
        d="M149.53786,786.23866l-.50195-1.03125c-.15284-.31347-15.188-31.74316-6.80518-62.73144,8.3833-30.98926,37.21289-50.55274,37.50293-50.7461l.95264-.63769.502,1.03125c.15283.31348,15.188,31.74316,6.80469,62.73144-8.38281,30.98926-37.2124,50.55274-37.50244,50.7461Zm30.3418-112.16308c-5.04737,3.67187-28.398,21.8623-35.71827,48.92187-7.32568,27.08106,3.67432,54.54492,6.18311,60.25782,5.04736-3.67188,28.39795-21.86231,35.71777-48.92188h0C193.38845,707.25234,182.38845,679.78847,179.87966,674.07558Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <path
        d="M110.77331,734.59419c8.38218,30.98558,37.093,50.17572,37.093,50.17572s15.12066-31.04739,6.73848-62.033-37.093-50.17573-37.093-50.17573S102.39113,703.60861,110.77331,734.59419Z"
        transform="translate(-64 -113.4487)"
        fill={color}
      />
      <path
        d="M149.9905,785.80507l-1.14453-.0625c-.34864-.01855-35.12256-2.16211-58.12647-24.55469C67.71657,738.7953,64.63893,704.0912,64.61061,703.74257l-.09326-1.1416,1.14453.0625c.34864.01855,35.12256,2.16211,58.126,24.55469,23.00342,22.39355,26.08105,57.09668,26.10937,57.44531ZM66.7322,704.75624c.75439,6.19531,5.29589,35.44531,25.38281,54.998,20.08691,19.55469,49.44678,23.30762,55.66064,23.89551-.75439-6.19629-5.2959-35.44434-25.3833-54.99805h0C102.29079,709.08241,72.94313,705.3412,66.7322,704.75624Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <path
        d="M174.71075,727.93506c-23.00082,22.39037-25.81021,56.80959-25.81021,56.80959s34.48233-1.88275,57.48315-24.27313,25.81021-56.80959,25.81021-56.80959S197.71158,705.54468,174.71075,727.93506Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <path
        d="M361.71075,533.93506c-23.00082,22.39037-25.81021,56.80959-25.81021,56.80959s34.48233-1.88275,57.48315-24.27313,25.81021-56.80959,25.81021-56.80959S384.71158,511.54468,361.71075,533.93506Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <circle cx="84.42116" cy="538.99993" r="15" fill={color} />
      <path
        d="M330.40261,785.46523l-1.38623-1.44141c.21777-.209,21.85546-21.4043,30.09667-61.00781,7.61133-36.57715,5.02637-96.80176-50.51074-175.99317-42.59424-60.73632-59.831-113.7998-51.231-157.71728,7.55468-38.582,33.24951-55.53076,33.5083-55.69727l1.08349,1.68067c-.25146.16259-25.27246,16.71191-32.6416,54.46338-8.46191,43.35156,8.66943,95.8789,50.91846,156.12207,24.70752,35.23144,41.15576,69.73339,48.88721,102.54687,6.19531,26.2959,6.84033,51.57324,1.917,75.12988C352.65016,763.71327,330.62429,785.25234,330.40261,785.46523Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <ellipse
        cx="256.42116"
        cy="239.11957"
        rx="180"
        ry="30.88036"
        fill={color}
      />
      <path
        d="M286.92116,374.44862c-124.76611,0-222.5-17.13085-222.5-39s97.73389-39,222.5-39,222.5,17.13086,222.5,39S411.68727,374.44862,286.92116,374.44862Zm0-76c-119.52344,0-220.5,16.94385-220.5,37s100.97656,37,220.5,37,220.5-16.94384,220.5-37S406.4446,298.44862,286.92116,298.44862Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <path
        d="M337.48178,183.89284s-26.67363-7.5137-34.563,28.92774-1.87843,54.85-1.87843,54.85l59.54606-6.95017S377.49222,194.97554,337.48178,183.89284Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M297.57483,341.72856s-39.12584,3.89677-32.157,19.69271,6.96879,17.18971,6.96879,17.18971L306.766,439.9364l11.15008-11.61466s-12.54384-27.41061-12.54384-36.23775-13.00842-24.1585-13.00842-24.1585l22.76474-1.85835Z"
        transform="translate(-64 -113.4487)"
        fill="#a0616a"
      />
      <path
        d="M404.79376,360.4921l13.00842,28.33978s9.75632,9.75632,20.44181,48.78159S451.25242,475.245,451.25242,475.245l-16.26053,3.25211s-18.11888-42.27738-24.15851-45.52948-13.473-32.98565-13.473-32.98565l-21.371-26.946,6.50421-14.40219Z"
        transform="translate(-64 -113.4487)"
        fill="#a0616a"
      />
      <path
        d="M388.99782,327.971,408.975,365.138s-25.08768-11.61467-28.80437,13.93759l-22.76474-17.65429S325.814,371.64218,306.766,367.92549c0,0,5.575-17.65429-14.40218-25.55227l45.06489-5.575-1.85834-9.75631,4.64586-9.29174Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M309.55351,431.57385s-12.54384-1.85835-9.29173,9.29173l6.50421,22.30015s-8.36256,22.76475,4.64587,17.65429,21.371-36.70234,21.371-36.70234,5.575-24.1585,0-24.1585-23.22933-3.71669-21.371,0S309.55351,431.57385,309.55351,431.57385Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M449.85866,468.74077s-16.26053-4.18128-19.97723,2.32294-2.78752,27.87519-2.78752,28.33978,5.575,5.11045,7.43339,5.11045,13.473,20.9064,29.26895,13.473S449.85866,468.74077,449.85866,468.74077Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <circle cx="268.78284" cy="109.06119" r="18.11888" fill="#a0616a" />
      <path
        d="M347.64961,226.22658s3.71669,19.51263,6.9688,22.30015-24.62309,6.9688-24.62309,6.9688,4.18128-13.473-.92917-20.44181S347.64961,226.22658,347.64961,226.22658Z"
        transform="translate(-64 -113.4487)"
        fill="#a0616a"
      />
      <path
        d="M396.4312,336.79818c-3.16386,0-11.21978-1.31013-20.25137-2.99658-7.81426-1.45881-16.36738-3.19171-23.11318-4.59477-7.22429-1.50526-12.38584-2.62955-12.38584-2.62955s-1.85835,11.61466-7.898,10.2209c-5.20335-1.19864-20.75305-55.51344-24.95758-70.52423a5.22182,5.22182,0,0,1,2.309-5.86773l21.357-13.041,5.47285,2.09064s9.24528-7.14535,14.61122-7.28937,14.65773-1.53778,14.65773-1.53778,10.68549.92918,12.54384,8.82715,2.78752,57.14415,9.75632,65.97129S405.25835,336.79818,396.4312,336.79818Z"
        transform="translate(-64 -113.4487)"
        fill="#d0cde1"
      />
      <path
        d="M331.38908,362.815s0,18.11888,12.07925,15.33136.92917-19.51264.92917-19.51264Z"
        transform="translate(-64 -113.4487)"
        fill="#a0616a"
      />
      <path
        d="M364.83931,364.67338s-4.18128,21.371-13.00842,18.11888,0-22.30016,0-22.30016Z"
        transform="translate(-64 -113.4487)"
        fill="#a0616a"
      />
      <path
        d="M384.352,314.03344s-4.54832,10.85274-8.17212,19.76816c-7.81426-1.45881-16.36738-3.19171-23.11318-4.59477a13.30244,13.30244,0,0,1,2.01634-3.55872c3.25211-3.7167,1.39376-4.64587,1.39376-4.64587-2.78751-5.575-.46458-13.00842-.46458-13.00842-5.575-14.86677,2.78752-33.45024,2.78752-33.45024Z"
        transform="translate(-64 -113.4487)"
        opacity="0.15"
      />
      <path
        d="M360.19345,274.54358s-8.36256,18.58347-2.78752,33.45024c0,0-2.32294,7.43338.46458,13.00842,0,0,1.85835.92917-1.39376,4.64587s-6.03962,16.72511-3.71669,19.51263-3.2521,7.898-1.85834,10.68549-2.32294,6.50422-2.32294,6.50422,13.9376,2.78752,16.26053,6.96879c0,0,2.78752-3.2521,1.39376-6.96879s-.46458-5.11046.92918-7.43339,5.575-7.43338,6.03962-9.75632,12.54384-31.1273,12.54384-31.1273l-5.66494-52.49178Z"
        transform="translate(-64 -113.4487)"
        fill="#d0cde1"
      />
      <path
        d="M311.87644,261.53516l-.868.15781a5.22217,5.22217,0,0,0-4.29024,5.1766c.03308,4.66459.29588,12.94276,1.44152,24.39913,1.85835,18.58346,8.36256,46.45866,9.75632,49.24618a148.29815,148.29815,0,0,0,7.43338,14.40218c4.18128,6.9688,5.11046,4.64587,4.18128,7.898a4.89284,4.89284,0,0,0,1.39376,5.11046s8.36256-9.29174,16.72512-4.18128a10.35217,10.35217,0,0,0,.92917-4.18128c0-2.32294,1.39376-4.64587-.92917-6.03963s1.39376-7.43338-2.32293-10.68549-4.18128-2.78752-3.7167-6.03963a13.83913,13.83913,0,0,0-.92917-6.50421Z"
        transform="translate(-64 -113.4487)"
        fill="#d0cde1"
      />
      <path
        d="M339.55674,199.23506s-7.5137,19.9113-25.92226,28.17636L310.629,209.75423Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <ellipse
        cx="286.43713"
        cy="102.09239"
        rx="2.55523"
        ry="4.87816"
        fill="#a0616a"
      />
      <circle cx="811.81316" cy="326.40599" r="32.45446" fill="#2f2e41" />
      <circle cx="807.47835" cy="283.78032" r="10.78039" fill="#2f2e41" />
      <path
        d="M859.34737,403.90543a10.7812,10.7812,0,0,1,.92132-14.42975q-.45189.29079-.8826.63121a10.78039,10.78039,0,1,0,13.41081,16.88247q.42976-.34138.81452-.71691A10.78117,10.78117,0,0,1,859.34737,403.90543Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M822.655,557.219l-18.78419,15.89432s-28.17629,8.66963-14.44938,18.06172,21.67407-11.5595,21.67407-11.5595l23.119-14.44938Z"
        transform="translate(-64 -113.4487)"
        fill="#ffb9b9"
      />
      <path
        d="M863.11331,487.862l-2.16741-1.44494s-8.66963,0-10.11457,8.66963-5.77975,26.73135-5.77975,26.73135-14.44938,8.66963-13.00444,24.56394l-15.17185,13.00445s18.06173,5.77975,14.44938,10.837L858.056,545.65953l.72247-46.96049Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <circle cx="807.78293" cy="339.01233" r="18.78419" fill="#ffb9b9" />
      <path
        d="M866.00318,465.46547s11.55951,13.00444,4.33482,20.22913-9.3921,42.62567-9.3921,42.62567l31.78864-48.40542s-8.66963-17.33926-7.94716-23.119Z"
        transform="translate(-64 -113.4487)"
        fill="#ffb9b9"
      />
      <path
        d="M863.83578,516.0383s17.33925-38.08367,26.73135-40.7159l24.56394,6.03738s-19.50666,67.18962-17.33925,73.69184,14.44938,15.89432,10.11456,72.96937c0,0,55.63012,101.86813,41.90321,119.20739s-65.02221,30.34369-65.74468,25.28641-23.84148-83.08393-20.22913-106.92541c0,0,0,103.31307-4.33482,105.48047s-73.69184,18.06173-71.52443,5.77975,36.84592-147.38367,36.84592-147.38367l26.73135-83.8064.72247-12.282s-11.5595-7.94716-2.88987-26.00888,11.5595-20.9516,11.5595-20.9516l10.4084-1.954S861.66837,510.981,863.83578,516.0383Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M902.8491,570.22347l-8.66963,18.7842s-22.39654,23.84147-6.50222,24.56394,17.33926-21.67407,17.33926-21.67407l11.5595-21.67407Z"
        transform="translate(-64 -113.4487)"
        fill="#ffb9b9"
      />
      <path
        d="M905.739,482.08225h9.39209s2.88988-4.33481,5.77976,13.72691,1.44493,45.51555,1.44493,45.51555L918.021,577.44816s-15.17185-5.77975-18.78419-4.33481,0-.72247,0-.72247l6.50222-24.564-7.94716-35.401Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <path
        d="M869.88156,424.76348c-12.26952,3.33372-20.63946,11.8383-18.69479,18.99551.87013,3.20245,3.66467,5.586,7.57924,6.95045l3.43483-4.26089.156,5.17072c.54335.09252,1.09492.17509,1.66322.2355l4.36381-9.19,2.48809,9.15725a38.64777,38.64777,0,0,0,6.05185-1.14c12.26952-3.33371,20.63946-11.8383,18.69479-18.99551S882.15107,421.42976,869.88156,424.76348Z"
        transform="translate(-64 -113.4487)"
        fill="#2f2e41"
      />
      <ellipse
        cx="826.92836"
        cy="335.03875"
        rx="2.16741"
        ry="3.61234"
        fill="#ffb9b9"
      />
      <ellipse cx="753.42116" cy="665.49993" rx="17" ry="7.5" fill="#2f2e41" />
      <ellipse
        cx="906.03022"
        cy="773.57358"
        rx="22.79462"
        ry="10"
        transform="translate(-284.5595 272.69431) rotate(-21.51295)"
        fill="#2f2e41"
      />
      <path
        d="M794.89479,581.7162c-.29785-.07324-29.95507-7.62207-41.24023-37.60547-12.86328-34.17431,2.25976-82.36621,44.94824-143.23632,52.13965-74.34717,54.9707-99.32813,48.165-107.19287-8.60937-9.94825-35.625,3.52246-35.89551,3.65966l-.90234-1.78515c1.167-.58985,28.68164-14.30616,38.30859-3.18457,10.5791,12.22168-5.584,49.11328-48.03906,109.65136-23.13184,32.98487-38.25195,62.59229-44.93848,87.99952-5.42187,20.59814-5.34961,38.54834.21387,53.354,10.89648,28.99609,39.56641,36.32617,39.85449,36.39648Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <path
        d="M811.42116,356.44862h-251v-164h251Zm-249-2h247v-160h-247Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <circle cx="600.95401" cy="172.21891" r="10.53285" fill="#3f3d56" />
      <circle cx="690.88831" cy="172.21891" r="10.53285" fill="#3f3d56" />
      <path
        d="M754.88831,328.60921c0,3.1323-20.31385,12.15328-45.37226,12.15328s-45.37226-9.021-45.37226-12.15328,20.31385.81022,45.37226.81022S754.88831,325.47691,754.88831,328.60921Z"
        transform="translate(-64 -113.4487)"
        fill="#3f3d56"
      />
      <rect y="671.5513" width="1100" height="2" fill="#3f3d56" />
    </svg>
  );
};

Welcoming.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Welcoming.defaultProps = {
  color: "primary",
  style: {}
};

export default Welcoming;
