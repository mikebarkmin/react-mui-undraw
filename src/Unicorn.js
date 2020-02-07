import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Unicorn = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f2456a0d-5629-424d-81f1-cb25f2706be0"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="758.80551"
      height="848"
      viewBox="0 0 758.80551 848"
    >
      <title>unicorn</title>
      <ellipse
        cx="503.12413"
        cy="812.81671"
        rx="205.08154"
        ry="35.18329"
        fill="#f2f2f2"
      />
      <path
        d="M685.55342,863.74592c-142.15126,0-253.50357-19.5179-253.50357-44.43433s111.35231-44.43433,253.50357-44.43433S939.057,794.39516,939.057,819.31159,827.70468,863.74592,685.55342,863.74592Zm0-86.59c-136.17806,0-251.22488,19.30484-251.22488,42.15565s115.04682,42.15565,251.22488,42.15565,251.22489-19.30484,251.22489-42.15565S821.73148,777.15594,685.55342,777.15594Z"
        transform="translate(-220.59724 -26)"
        fill="#f2f2f2"
      />
      <path
        d="M979.40276,481.005a345.64136,345.64136,0,0,1-6.67653,67.8364q-1.02547,5.16125-2.22173,10.27688-.70065,3.0762-1.46973,6.12967-.49567,1.9824-1.02543,3.96488A345.97332,345.97332,0,0,1,786.2615,790.9971a339.57239,339.57239,0,0,1-45.07236,18.30924q-3.52056,1.14512-7.07527,2.22173h-.01141a344.83865,344.83865,0,0,1-99.92029,14.69753q-7.28041,0-14.35568-.33045a286.19959,286.19959,0,0,1-38.06545-4.22691C427.16373,793.73155,351.43171,641.4927,288.96158,481.005q-2.32424-5.96444-4.56877-11.84918-.5469-1.45261-1.09373-2.90531C117.13743,26.8747,297.33571-84.31363,634.18217,135.78442,793.7926,240.06835,979.40276,290.34751,979.40276,481.005Z"
        transform="translate(-220.59724 -26)"
        fill="#f2f2f2"
      />
      <path
        d="M740.79036,687.16685l-1.57939-1.64226c.24812-.2381,24.90085-24.38681,34.29041-69.50875,8.6719-41.67388,5.72675-110.2903-57.549-200.51639C667.423,346.3,647.78435,285.84257,657.5828,235.80555c8.60737-43.95813,37.88256-63.26853,38.17741-63.45823l1.23447,1.91485c-.2865.18525-28.794,19.04058-37.18994,62.05241-9.641,49.39225,9.87745,109.23885,58.01353,177.87641,28.15031,40.14066,46.89048,79.45018,55.69924,116.83595,7.05858,29.96,7.79348,58.75955,2.18411,85.59862C766.13794,662.38394,741.04293,686.92429,740.79036,687.16685Z"
        transform="translate(-220.59724 -26)"
        fill="#f2f2f2"
      />
      <path
        d="M314.28913,420.06163a422.34281,422.34281,0,0,0-29.89632,49.0942q-.5469-1.45261-1.09373-2.90531a432.14071,432.14071,0,0,1,29.12158-47.49916c48.13719-68.64535,67.654-128.48361,58.01527-177.874-8.397-43.02156-36.9033-61.87766-37.18814-62.06l1.23051-1.91409c.29624.19374,29.57727,19.50553,38.17936,63.46136C382.456,290.40447,362.81373,350.85794,314.28913,420.06163Z"
        transform="translate(-220.59724 -26)"
        fill="#f2f2f2"
      />
      <path
        d="M499.21231,793.12628l-1.57939-1.64226c.31265-.30041,31.39421-30.73552,43.23936-87.61138,10.93946-52.51988,7.24439-138.9897-72.4795-252.6702-33.31073-47.49854-56.02691-92.37571-67.51769-133.38367-9.389-33.50767-11.37673-64.6571-5.90811-92.58265,10.811-55.21191,47.557-79.45074,47.92691-79.68885l1.23447,1.91485c-.36217.23366-36.34045,24.01742-46.93944,78.28247-12.16,62.25825,12.42428,137.67345,73.06975,224.14938,35.41306,50.4971,58.98654,99.94387,70.06619,146.96843,8.87552,37.6706,9.80012,73.8792,2.74822,107.62108C531.05325,761.99354,499.52941,792.82141,499.21231,793.12628Z"
        transform="translate(-220.59724 -26)"
        fill="#fff"
      />
      <circle cx="202.1181" cy="158.51029" r="88.20128" fill="#fff" />
      <path
        d="M443.51084,266.68023a120.17526,120.17526,0,1,1,120.175-120.17553A120.31184,120.31184,0,0,1,443.51084,266.68023Zm0-238.07183a117.89658,117.89658,0,1,0,117.8963,117.8963A118.03008,118.03008,0,0,0,443.51084,28.6084Z"
        transform="translate(-220.59724 -26)"
        fill="#fff"
      />
      <circle cx="290.31938" cy="358.57662" r="73.14253" fill="#fff" />
      <circle cx="253.03103" cy="612.42422" r="73.14253" fill="#fff" />
      <path
        d="M969.03475,565.24795q-1.145-5.91318-2.35844-11.66686a.01116.01116,0,0,1-.0114-.01139c-10.23129-48.54736-24.01732-88.356-40.34409-120.82721L883.06,417.86269l32.608-4.65991c-13.18218-22.36528-27.70879-40.6859-43.14687-55.55431L793.06339,366.729l59.975-25.70355C742.81842,258.11556,598.31568,324.7101,558.94,345.63981c-5.40048,2.85974-8.81851,4.87638-9.91227,5.5258-.0114,0-.0114,0-.02279.0114-.23926.14811-.3532.21647-.3532.21647l22.35389,11.6099h.01139L968.00934,569.21286Z"
        transform="translate(-220.59724 -26)"
        fill={color}
      />
      <path
        d="M969.03475,565.24795q.769-3.05913,1.46975-6.12966c-1.16213-1.69762-2.43819-3.55474-3.82819-5.5372a.01116.01116,0,0,1-.0114-.01139c-45.77875-65.45519-213.581-279.33245-406.87037-206.73359h-.0114q-5.3663,2.01664-10.75538,4.3295c-.0114,0-.0114,0-.02279.0114q-4.90486,2.10208-9.82113,4.46622c-1.66344.78614-3.31548,1.60647-4.97892,2.43819-1.447.72918-2.88254,1.46975-4.3295,2.23311,0,0-8.226,2.06221-17.44333,9.83252-18.10414,15.29-40.04786,52.649-10.97186,139.877,0,0,25.81749,72.26846,12.90875,105.83347-12.90875,33.54222,67.13,72.25706,90.33841,0,23.23118-72.27985,30.9901-141.97339,30.9901-141.97339s26.70618,56.27209,24.0743,112.7037c-1.08238,23.12864.97983,46.28006,7.212,68.5542.638,2.33565,1.333,4.6713,2.028,7.04113,8.397,28.19871,21.49938,64.47536,40.79983,99.55569a335.91344,335.91344,0,0,0,31.37748,47.56753,339.57858,339.57858,0,0,0,45.07236-18.30923A345.97431,345.97431,0,0,0,968.00934,569.21286Z"
        transform="translate(-220.59724 -26)"
        fill="#3f3d56"
      />
      <polygon
        points="317.011 360.127 306.686 274.949 350.566 336.896 317.011 360.127"
        fill="#3f3d56"
      />
      <polygon
        points="294.512 366.263 284.187 281.085 328.067 343.032 294.512 366.263"
        fill="#3f3d56"
      />
      <polygon
        points="272.037 445.634 161.79 302.333 273.446 402.595 272.037 445.634"
        fill={color}
      />
      <circle cx="513.84701" cy="71.0468" r="17.09013" fill="#f2f2f2" />
    </svg>
  );
};

Unicorn.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Unicorn.defaultProps = {
  color: "primary",
  style: {}
};

export default Unicorn;
