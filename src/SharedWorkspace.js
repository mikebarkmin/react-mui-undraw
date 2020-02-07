import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SharedWorkspace = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="af24c1d2-8586-4e6b-81b3-4cf1a6f0777f"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="961.84535"
      height="436.79521"
      viewBox="0 0 961.84535 436.79521"
    >
      <title>shared_workspace</title>
      <path
        d="M586.94651,565.13609c14.37595,15.42642,15.119,38.1,15.119,38.1s-22.565-2.33763-36.94091-17.764-15.119-38.1-15.119-38.1S572.57055,549.70967,586.94651,565.13609Z"
        transform="translate(-116.15465 -202)"
        fill={color}
      />
      <path
        d="M632.20353,589.215c-15.42642,14.376-38.1,15.119-38.1,15.119s2.33763-22.56495,17.764-36.94091,38.1-15.119,38.1-15.119S647.63,574.839,632.20353,589.215Z"
        transform="translate(-116.15465 -202)"
        fill={color}
      />
      <path
        d="M628.36957,635H571.63043a5.8034,5.8034,0,0,1-5.21862-3.26461l-12.35345-25.3932A5.8034,5.8034,0,0,1,559.277,598h81.446a5.8034,5.8034,0,0,1,5.21862,8.34219l-12.35345,25.3932A5.8034,5.8034,0,0,1,628.36957,635Z"
        transform="translate(-116.15465 -202)"
        fill="#3f3d56"
      />
      <circle cx="767.02733" cy="76.06979" r="47.24351" fill="#ffb8b8" />
      <path
        d="M847.9205,301.69155s8.90094,67.09951-4.7928,74.631,81.47795,8.21627,81.47795,8.21627-21.22534-58.19851-11.63973-76.00045Z"
        transform="translate(-116.15465 -202)"
        fill="#ffb8b8"
      />
      <path
        d="M994.10076,384.87826l-7.915,36.04167-16.73591,76.25281-.50113,4.176L963.173,549.69332l-3.84186,32.11625-2.57625,21.5736c-15.663,8.04992-27.01516,13.60716-27.01516,13.60716s-.97654-4.89549-2.55056-11.15941c-10.99237,3.29579-31.33243,8.76307-48.56947,9.85521,6.27678,6.99633,9.16139,13.56862,5.24883,18.41917-11.8083,14.62221-60.55768-16.01-77.60838-27.43277a46.15393,46.15393,0,0,0-.44973,8.26194l-13.04823-10.03512,1.29134-23.08978,2.17793-39.0676,2.73686-48.99351a51.43841,51.43841,0,0,1-2.16511-6.44379c-3.996-14.21107-8.84656-42.58827-12.56639-66.38474-2.99381-19.15154-5.2424-35.33494-5.71781-38.77849-.06427-.44972-.09638-.681-.09638-.681l72.231-31.91713c5.13324,11.90468,29.10318,15.48315,29.10318,15.48315,19.85822-1.36843,35.42486-11.84041,35.42486-11.84041Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M935.21988,603.29965s-3.05809,1.0472-8.03067,2.53127c-10.99237,3.29579-31.33243,8.76307-48.56947,9.85521-14.8407.95086-27.38137-1.33627-29.67493-11.01805-.983-4.16313.41118-7.58738,3.45-10.40133,9.07144-8.40973,32.76513-11.42284,51.5569-12.45718,5.30667-.28911,10.215-.424,14.301-.47541,6.93849-.09,11.48707.05141,11.48707.05141l.10921.424Z"
        transform="translate(-116.15465 -202)"
        fill="#ffb8b8"
      />
      <path
        d="M843.87976,233.38179l-8.83338-3.5364s18.46975-20.33416,44.167-18.5659l-7.22751-7.95692s17.66676-7.07268,33.72744,11.49321c8.44279,9.75966,18.21118,21.23169,24.30075,34.15476H939.474l-3.94822,8.69355,13.8188,8.69355L935.161,264.79609a48.58061,48.58061,0,0,1,.3849,14.41987,18.65731,18.65731,0,0,1-6.83212,12.20528h0s-10.955-22.67579-10.955-26.21219v8.841s-8.83338-7.95681-8.83338-13.26134l-4.81816,6.18866-2.40908-9.72508-29.71221,9.72508,4.81815-7.95682-18.46975,2.65227,7.22751-9.72509s-20.87883,11.49321-21.682,21.2183c-.80293,9.72494-6.91426,18.94-6.91426,18.94S820.59179,246.64313,843.87976,233.38179Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <path
        d="M1045.45207,550.57348c-4.812,5.21672-16.73591,13.07391-31.19111,21.58-5.37734,3.1609-11.10162,6.41815-16.9415,9.6561-13.93482,7.72873-28.525,15.38677-40.56453,21.5736-15.663,8.04992-27.01516,13.60716-27.01516,13.60716s-.97654-4.89549-2.55056-11.15941c-2.10723-8.384-5.28095-19.22224-8.5896-24.02135-.11564-.16705-.23128-.32123-.34691-.47541-.96368-1.26565-1.93379-2.00445-2.891-2.00445L963.173,549.69332l20.66133-12.81052-14.88568-35.53411L950.279,456.77526l11.26866-35.85533,11.32646-36.04167h21.22665s7.02845,15.3418,16.01636,36.73553c1.34275,3.19941,2.73043,6.53374,4.14384,9.97729C1032.75075,476.56282,1055.802,539.36266,1045.45207,550.57348Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M883.86857,634.1053c-11.8083,14.62221-60.55768-16.01-77.60838-27.43277-3.7134-2.48629-5.92344-4.06031-5.92344-4.06031l15.59879-20.80265,4.94047-6.58515s4.42008,2.345,10.95382,6.16115c.23771.14132.47541.28268.71955.424,5.63433,3.30865,12.70775,7.63235,19.8454,12.45718,9.84882,6.66224,19.80685,14.26248,26.225,21.41938C884.89652,622.68246,887.78113,629.25475,883.86857,634.1053Z"
        transform="translate(-116.15465 -202)"
        fill="#ffb8b8"
      />
      <path
        d="M831.82983,581.38557a30.69786,30.69786,0,0,0-5.20385.424c-14.77,2.5377-19.12586,15.90716-20.36579,24.863a46.15393,46.15393,0,0,0-.44973,8.26194l-13.04823-10.03512-4.75413-3.65556c-11.44213-3.98965-21.63787-11.07589-30.478-19.43422A153.2131,153.2131,0,0,1,737.00371,557.467a214.67612,214.67612,0,0,1-15.88148-27.24,20.03409,20.03409,0,0,1-.27625-16.99291l16.15773-36.00951,23.61659-52.62982q.26016-1.87914.57176-3.67482c4.68351-26.85455,17.23061-38.77849,17.23061-38.77849h9.58543l6.41168,38.77849,7.9664,48.17759-5.58293,18.20715-12.90044,42.04855L796.2315,542.742Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M842.67851,469.136l8.19442,9.56022c3.04445-.58046,6.22372-1.26259,9.49825-2.02864l-2.35359-7.53158,5.75478,6.71392c34.69082-8.53229,77.68983-25.12082,77.68983-25.12082s-46.42186,3.40385-81.08294-4.16863c-15.33585-3.35046-31.1145,4.25182-37.4077,18.63269-3.65786,8.35873-3.08339,15.60054,9.88993,15.60054a85.688,85.688,0,0,0,13.07567-1.2299Z"
        transform="translate(-116.15465 -202)"
        fill={color}
      />
      <path
        d="M1029.48711,626.26736v3.8997a8.57062,8.57062,0,0,1-.58465,3.12875,8.79588,8.79588,0,0,1-.62316,1.2849,8.633,8.633,0,0,1-7.42037,4.2145H733.9713a8.6329,8.6329,0,0,1-7.42033-4.2145,8.79181,8.79181,0,0,1-.62316-1.2849,8.57062,8.57062,0,0,1-.58465-3.12875v-3.8997a8.62584,8.62584,0,0,1,8.62814-8.62814h16.53675v-1.81816a.35918.35918,0,0,1,.35977-.35977H759.496a.35918.35918,0,0,1,.35977.35977v1.81816h5.39016v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62819a.35918.35918,0,0,1,.35977.35977v1.81816h5.39659v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62814a.35919.35919,0,0,1,.35978.35977v1.81816h5.39019v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.3902v-1.81816a.35918.35918,0,0,1,.35977-.35977H818.454a.35918.35918,0,0,1,.35977.35977v1.81816h5.39662v-1.81816a.35919.35919,0,0,1,.35978-.35977h8.62814a.35919.35919,0,0,1,.35978.35977v1.81816h5.39019v-1.81816a.35918.35918,0,0,1,.35977-.35977h67.58612a.35919.35919,0,0,1,.35978.35977v1.81816h5.39658v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62819a.36334.36334,0,0,1,.35977.35977v1.81816h5.39016v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35919.35919,0,0,1,.35981.35977v1.81816h5.39015v-1.81816a.35919.35919,0,0,1,.35978-.35977h8.62814a.35919.35919,0,0,1,.35978.35977v1.81816h5.39662v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35786.35786,0,0,1,.35334.35977v1.81816h5.39663v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.39019v-1.81816a.35919.35919,0,0,1,.35978-.35977h8.62814a.35918.35918,0,0,1,.35977.35977v1.81816h25.1649A8.62585,8.62585,0,0,1,1029.48711,626.26736Z"
        transform="translate(-116.15465 -202)"
        fill="#3f3d56"
      />
      <path
        d="M1006.38721,462.0373H899.45538v-2.204h-48.487v2.204H743.59571a7.23313,7.23313,0,0,0-7.23313,7.23314V615.693a7.23315,7.23315,0,0,0,7.23313,7.23316h262.7915a7.23315,7.23315,0,0,0,7.23313-7.23316V469.27044A7.23313,7.23313,0,0,0,1006.38721,462.0373Z"
        transform="translate(-116.15465 -202)"
        fill="#3f3d56"
      />
      <circle
        cx="759.04723"
        cy="311.15699"
        r="16.06134"
        fill="none"
        stroke="#d0cde1"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="753.9076" cy="316.93907" r="16.06134" fill="#d0cde1" />
      <circle cx="282.31137" cy="165.70501" r="23.38258" fill="#2f2e41" />
      <path
        d="M404.98047,344.96607a23.38583,23.38583,0,0,1,20.58382,34.47973,23.377,23.377,0,1,0-38.83913-25.68688A23.32489,23.32489,0,0,1,404.98047,344.96607Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <circle cx="238.61766" cy="96.96916" r="68.68632" fill="#2f2e41" />
      <path
        d="M300.86471,256.35257a68.674,68.674,0,0,1,95.19052-7.2019c-.56166-.53391-1.11739-1.07215-1.701-1.591a68.68632,68.68632,0,0,0-91.27085,102.66876c.58363.51883,1.18326,1.00769,1.77929,1.50294A68.674,68.674,0,0,1,300.86471,256.35257Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <circle cx="238.03557" cy="120.83474" r="44.23864" fill="#a0616a" />
      <path
        d="M322.7575,336.80484s5.82087,53.552-3.49253,59.37292,53.55205,13.9701,53.55205,13.9701-9.3134-58.20875,13.9701-73.343Z"
        transform="translate(-116.15465 -202)"
        fill="#a0616a"
      />
      <path
        d="M378.63789,386.86436s17.335-8.095-7.631-5.21169-46.50585-8.17632-46.50585-8.17632-7.56447-7.56714-8.72864.58209,3.49252,23.28349-22.11932,25.61184-48.89535-4.6567-58.20874,12.80593-4.6567,93.134-4.6567,93.134,17.46262,62.86545,31.43272,72.17884,136.20845-3.49252,136.20845-3.49252l34.92525-62.86544v-73.343s-4.6567-25.61184-37.2536-18.6268c0,0-20.95514-4.65669-19.791-15.13427S378.63789,386.86436,378.63789,386.86436Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M266.84049,622.27771c.71954-3.13517,1.20138-4.90835,1.20138-4.90835l-.37259-2.55052-3.83547-26.04506-1.61256-10.986c13.96693-5.82062,17.46188-32.59808,17.46188-32.59808l.52682-.3148,2.38351-1.42627v-.00639L291.151,538.309l.17344-.10277,3.4564,2.3,7.022,4.68348a82.57225,82.57225,0,0,0,65.02274,14.8985,71.58121,71.58121,0,0,0,15.30325-4.42009l16.93506-5.64715.52682-.17348.52039.0771,9.93234,1.50335.17987.03212.82236.12207-2.3,15.90072-3.33433,23.109c8.80805,4.66422,16.63956,13.42729,23.4881,24.22694q2.27427,3.58485,4.40722,7.45887c1.85027,3.34077,3.617,6.81642,5.30024,10.37564.20559.424.40475.85448.60391,1.28491.64888,1.39411,1.29134,2.80109,1.91454,4.21449H263.75672c.23127-1.41983.46255-2.7754.68743-4.0796a.995.995,0,0,0,.02568-.13489c.08353-.43686.16062-.86091.23128-1.28491C265.48492,628.41314,266.243,624.87325,266.84049,622.27771Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <path
        d="M259.89206,398.50611S272.698,421.7896,268.04128,450.894s13.9701,101.28321,13.9701,101.28321l13.9701-3.49253s-9.3134-60.53709-6.98505-74.50719,2.32835-68.68631-9.3134-75.67136S259.89206,398.50611,259.89206,398.50611Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <path
        d="M395.28165,422.70233l4.89348,128.89277,9.3134,5.82087s13.388-141.44724,6.403-141.44724H401.67878A6.40554,6.40554,0,0,0,395.28165,422.70233Z"
        transform="translate(-116.15465 -202)"
        fill="#2f2e41"
      />
      <circle cx="172.25969" cy="341.44588" r="5.82087" fill={color} />
      <circle cx="288.67718" cy="347.26675" r="5.82087" fill={color} />
      <polygon
        points="200.2 65.536 200.2 109.775 210.445 109.775 223.483 95.805 221.737 109.775 267.024 109.775 264.23 95.805 269.818 109.775 277.035 109.775 277.035 65.536 200.2 65.536"
        fill="#2f2e41"
      />
      <ellipse
        cx="193.21484"
        cy="111.52134"
        rx="3.49252"
        ry="6.40296"
        fill="#a0616a"
      />
      <ellipse
        cx="282.8563"
        cy="111.52134"
        rx="3.49252"
        ry="6.40296"
        fill="#a0616a"
      />
      <path
        d="M422.87654,548.68466s-52.97-9.89548-56.46248,7.56714,58.79083,9.89549,58.79083,9.89549Z"
        transform="translate(-116.15465 -202)"
        fill="#a0616a"
      />
      <path
        d="M421.71236,428.77465S548.60742,530.05787,525.32392,554.50554s-111.76078,17.46262-111.76078,17.46262l5.82087-29.10437,51.2237-5.82088-25.61185-25.61184-23.2835,2.32835Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M234.28021,597.58l16.29845,12.80592s11.64175,36.08942,29.10437,25.61185-16.29845-47.73117-16.29845-47.73117l-19.791-6.98505Z"
        transform="translate(-116.15465 -202)"
        fill="#a0616a"
      />
      <path
        d="M250.57866,410.14786l-16.2545,4.89151S121.35525,498.62514,116.69855,521.90864s22.11932,36.08942,22.11932,36.08942l101.28321,47.73117,10.47758-27.9402-47.73117-24.44767s3.49252-6.98505-10.47757-8.14922-16.29845-16.29845-16.29845-16.29845,27.94019-43.07447,43.07447-33.76107,19.791,16.29845,19.791,16.29845Z"
        transform="translate(-116.15465 -202)"
        fill="#d0cde1"
      />
      <path
        d="M482.41577,626.26736v3.8997a8.5704,8.5704,0,0,1-.58462,3.12875,8.79,8.79,0,0,1-.6232,1.2849,8.63285,8.63285,0,0,1-7.42033,4.2145H186.9a8.6329,8.6329,0,0,1-7.42033-4.2145,8.794,8.794,0,0,1-.6232-1.2849,8.57123,8.57123,0,0,1-.58462-3.12875v-3.8997A8.62585,8.62585,0,0,1,186.9,617.63922h16.53675v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.39019v-1.81816a.35919.35919,0,0,1,.35978-.35977h8.62814a.35918.35918,0,0,1,.35977.35977v1.81816H232.919v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.3902v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.39019v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816H277.139v-1.81816a.35918.35918,0,0,1,.35977-.35977H286.127a.35918.35918,0,0,1,.35977.35977v1.81816h5.3902v-1.81816a.35918.35918,0,0,1,.35977-.35977h67.58612a.35918.35918,0,0,1,.35977.35977v1.81816h5.39659v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.36332.36332,0,0,1,.35977.35977v1.81816h5.39019v-1.81816a.35919.35919,0,0,1,.35978-.35977H389.305a.35918.35918,0,0,1,.35977.35977v1.81816h5.3902v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.39663v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62814a.35787.35787,0,0,1,.35335.35977v1.81816h5.39662v-1.81816a.35918.35918,0,0,1,.35977-.35977h8.62815a.35918.35918,0,0,1,.35977.35977v1.81816h5.3902v-1.81816a.35918.35918,0,0,1,.35977-.35977H448.263a.35918.35918,0,0,1,.35977.35977v1.81816h25.16489A8.62581,8.62581,0,0,1,482.41577,626.26736Z"
        transform="translate(-116.15465 -202)"
        fill="#3f3d56"
      />
      <path
        d="M459.31475,462.03428H352.38292v-2.204H303.89587v2.204H196.52325a7.23313,7.23313,0,0,0-7.23313,7.23313V615.69a7.23315,7.23315,0,0,0,7.23313,7.23316h262.7915a7.23315,7.23315,0,0,0,7.23313-7.23316V469.26741A7.23313,7.23313,0,0,0,459.31475,462.03428Z"
        transform="translate(-116.15465 -202)"
        fill="#3f3d56"
      />
      <circle
        cx="211.97477"
        cy="311.15396"
        r="16.06134"
        fill="none"
        stroke="#d0cde1"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="206.83514" cy="316.93605" r="16.06134" fill="#d0cde1" />
      <rect x="11.84535" y="432" width="950" height="2" fill="#3f3d56" />
    </svg>
  );
};

SharedWorkspace.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

SharedWorkspace.defaultProps = {
  color: "primary",
  style: {}
};

export default SharedWorkspace;
