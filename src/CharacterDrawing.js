import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const CharacterDrawing = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="b40c2b55-1f8d-4d18-9af5-df4559b41727"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="954.20534"
      height="648.86232"
      viewBox="0 0 954.20534 648.86232"
    >
      <title>Character_drawing</title>
      <path
        d="M1058.89746,380.26807c-31-25-62.00006,26-62.00006,26v25l-3-21-13,26-1-5c-9,9-1,52-1,52s-4-18-6-23-5-12-5-12c-1,6-11,14-17,21s-7,20-7,20l-2-3c-20,20-4,80-4,80-28-31-5-71-5-71-5,1-13,15-13,15s-24,34-22,46-3,18-3,18a28.37769,28.37769,0,0,0-7,22l-2-4c-8.67407,7.71026-6.20245,34.9165-6.012,36.87774L897,670l-11.99109-14.73193H883.8974v9c-7,2,3,10,3,10-4,6-2,8-2,8v2s0-1,3,0,0,7,0,7c0,6,10,1,10,1l7.61328,2.82946s5.38672,2.17054,9.38672,2.17054,3-2,3-3,7-1,7-3,2-1,3-2-2-4-2-4,8,1,7,0a3.73625,3.73625,0,0,1-.61285-.95087L912,683l24.554-7.944c-1.53424-1.15466-.65662-3.788-.65662-3.788,16-2,29-15,29-18s19-49,19-49l-3-2,4-3c12-7,16-30,16-30-3,5-11,7-11,7s-43,18-40,12,37-18,37-18c29-8,38.00006-56,38.00006-56l-47.00006,25,37-22c17.00006-15,24.00006-40,24.00006-40l-39.00006,17,39.00006-20,25-34S1089.89746,405.26807,1058.89746,380.26807Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#3f3d56"
      />
      <path
        d="M474.80509,297.79322a9.60429,9.60429,0,0,0,2.30224,7.86182l.19971.29248a86.71811,86.71811,0,0,1,11.17383,23.15625l.1333.43261a12.56292,12.56292,0,0,0,2.92822,5.77539c.3833.47168.76612.94336,1.11475,1.43995a13.6791,13.6791,0,0,1,.23535,15.0581l-.14258.21436a3.25282,3.25282,0,0,0-.56982,1.104c-.11524.68408.42334,1.28565,1.312,2.21094a8.82867,8.82867,0,0,1,1.60156,2.03662c1.1836,2.31543.03858,5.06152-1.7041,6.57666a12.201,12.201,0,0,1-4.61377,2.29c1.18213,2.87353.01807,6.24267-1.02393,9.25928-.40527,1.17334-.78808,2.28125-1.041,3.3374a37.49088,37.49088,0,0,0-.74854,5.377c-.11035,1.2168-.22509,2.47412-.4165,3.71485-.61328,3.97363-2.03223,6.93212-4.21729,8.79345a3.39057,3.39057,0,0,1-1.52441.81787c-1.2959.25586-2.47314-.49853-3.31494-2.08838q-.04761.11572-.09473.22754c-1.90185,4.51661-4.042,9.0044-6.11181,13.34424l-5.73194,12.019c-2.55175,5.35009-5.43554,11.397-10.09912,15.99707a229.18035,229.18035,0,0,0,4.646,32.98437c3.08008,13.74756,6.46924,30.00049,8.2539,46.31592a112.54843,112.54843,0,0,1,.0708,17.58008,127.7636,127.7636,0,0,0-.14135,14.766c5.56567-9.20874,10.58325-18.48413,10.8822-29.06989,10.23914,20.4411,11.57959,42.44391,12.56555,65.28479.71912,16.661,1.67139,33.389,5.08631,49.7121,3.71252,17.74567,10.34826,35.762,6.66418,53.51361a68.20916,68.20916,0,0,1-3.34668,10.82153c-5.65491,14.55384,7.93335,29.48468,22.91382,25.08271q.15381-.04513.30737-.09223c5.51392-1.6914,10.21509-5.07409,14.762-8.7619a58.01419,58.01419,0,0,0,8.265,16.2724,22.82141,22.82141,0,0,0,6.69885,6.69232,12.56034,12.56034,0,0,0,2.52368,1.12451l6.51709-.01574c.0343-.01331.07032-.01978.1045-.03357,4.54943-1.83545,6.5-7.26306,6.817-12.15882.58606-9.0545-2.60888-17.71618-6.545-25.708-.09986-.2027-.2107-.44544-.32642-.70423,5.99426-1.1466,12.4939-1.30884,15.64-7.77661a13.45109,13.45109,0,0,0,1.28112-5.362c.24244-6.22113-2.58728-11.66192-4.59936-17.30865-4.38916-12.31769-4.88745-25.63025-5.301-38.70014q-.61614-19.47785-1.113-38.95929c-.21656-8.49078-.42151-17.03216-2.07959-25.36224-.72571-3.64667-1.72852-7.2431-2.207-10.93036-1.78785-13.77576,3.82556-27.43872,4.17407-41.32568.39209-15.6211-.63843-31.3244-1.98609-46.89222-1.30188-15.04107-.61718-30.15039.644-45.21636,4.39233-3.6579,7.66674-8.58594,10.82007-13.40839q3.639-5.56568,7.27819-11.13141,1.28338-1.963,2.55823-3.932a15.255,15.255,0,0,0,6.71619-2.83795c.00793-.00677.01428-.01495.02209-.02179.29126,1.18573.55689,2.37891.81836,3.56653.28528,1.29608.96314,2.908,2.28809,2.83014a2.42831,2.42831,0,0,0,1.13818-.44946c2.59473-1.66864,4.06275-4.63428,4.93665-7.59278s1.28222-6.05548,2.39575-8.93243c1.59119-4.11127,5.3064-8.73621,3.28772-12.65533a13.63155,13.63155,0,0,0,5.7041-1.67975c1.67065-1.09851,2.83789-3.23627,2.17419-5.12238-.65454-1.85986-2.91626-3.34527-2.33105-5.22821a4.66954,4.66954,0,0,1,1.08166-1.56964,12.71611,12.71611,0,0,0,1.64649-13.83868c-.63818-1.23078-1.48157-2.35266-2.0398-3.62177a20.09247,20.09247,0,0,1-1.17529-4.80957,85.94254,85.94254,0,0,0-7.88635-24.16058,15.275,15.275,0,0,1-1.8136-4.79718,18.99417,18.99417,0,0,1,.52393-5.33692c1.11828-6.97033-.57605-14.15918-3.547-20.563-.2146-.46258-.44873-.91467-.67566-1.3706a17.6646,17.6646,0,0,0,.05957-3.72907,54.46179,54.46179,0,0,0-2.42615-13.18341,20.29511,20.29511,0,0,0-7.87219-10.58349c-3.66589-2.30732-8.10376-2.95-12.395-3.541q-6.932-.95462-13.8645-1.9093a5.19309,5.19309,0,0,0,1.43139-3.41736c.74061-15.16144,10.72-39.3902,1.95691-60.09753-9.1073-21.52082-32.31774-25.59674-32.31774-25.59674s-22.34717-5.97449-41.02784,22.41211c-17.412,26.45861-39.86059,51.24475-11.41382,61.82458l7.5243-15.78027.892,18.16565a115.84262,115.84262,0,0,0,12.52466,1.90753q1.13251.11573,2.2605.23572a30.33613,30.33613,0,0,1-3.717,1.79852c-2.01221.673-4.19727.78906-6.14087,1.64032-2.32642,1.01892-4.08008,2.985-5.75623,4.89313q-4.521,5.14681-9.04235,10.29358a35.377,35.377,0,0,0-5.36963,7.286c-1.636,3.2716-2.21363,6.95288-2.812,10.5614-.14771.89014-.31153,1.77746-.46412,2.66675a33.62622,33.62622,0,0,1,3.27369,14.66662C474.83878,297.0398,474.82218,297.41627,474.80509,297.79322Zm108.66528,26.48822c.0249-.15765.06006-.31293.08838-.46979a31.51494,31.51494,0,0,1,3.14185,5.50281,43.66066,43.66066,0,0,1,2.84985,26.78009c-1.95337-6.322-3.82227-12.66424-5.19068-19.13525C583.47843,332.79066,582.80606,328.49012,583.47037,324.28144Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#f2f2f2"
      />
      <path
        d="M200.94425,752.74268a87.49287,87.49287,0,0,1,25.58825-2.87085,87.97034,87.97034,0,0,0-.06781-32.56018,88.11226,88.11226,0,0,0-23.4906,14.3974A84.27392,84.27392,0,0,1,200.94425,752.74268Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#f2f2f2"
      />
      <path
        d="M236.94419,751.69178l-.09516.295c-.0874.27149-9.0166,27.32813-31.51611,40.86329a66.294,66.294,0,0,1-21.9743,8.08276c7.49023.83386,29.21435,2.0376,47.45861-8.93872,22.43842-13.49976,31.08014-40.31391,31.08014-40.31391A87.73462,87.73462,0,0,0,236.94419,751.69178Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#f2f2f2"
      />
      <path
        d="M166.88565,802.43116a85.4336,85.4336,0,0,1-11.146-.68945l-1.00244.38086-.124-.5459c-.09619-.01563-.146-.02442-.146-.02442l-1.13282-.20019.35547-1.09473s.14014-.43262.42188-1.19726c-1.18994-6.92579-3.92969-29.62793,6.6665-49.2793,12.46289-23.11133,39.06787-33.30469,39.33545-33.40527l1.07324-.40235.25342,1.11817a89.4076,89.4076,0,0,1-.49609,35.65136,89.571,89.571,0,0,1,35.12744-2.04687l1.12939.19922-.352,1.09179c-.0874.27149-9.0166,27.32813-31.51611,40.86329C192.15811,800.77686,177.13077,802.43116,166.88565,802.43116Zm-10.89892-2.67383c5.14844.69629,28.855,3.08692,48.31494-8.62012,19.28467-11.60253,28.32373-33.46582,30.24658-38.6455-4.23389-.56055-19.26562-2.04-34.70019,2.65136l-1.7085.51856.4502-1.72754c4.11621-15.80176,1.89648-30.99219,1.12793-35.23535-5.085,2.168-26.50684,12.24023-37.17872,32.03125-10.43115,19.34472-7.54394,41.82324-6.41064,48.251l.04736.26856-.0957.25586Q156.03091,799.63722,155.98673,799.75733Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#3f3d56"
      />
      <path
        d="M328.4589,800.69581a30.59424,30.59424,0,0,1-12.34278-2.23633,11.46589,11.46589,0,0,1-4.90918-3.625c-1.94677-2.69434-2.20849-6.52734-.77881-11.39258,2.01465-6.85254,7.34229-15.1914,13.51514-21.27637a48.10479,48.10479,0,0,1-12.25537-3.89941c-6.39258-3.30664-11.73389-9.17285-16.32861-17.93359-16.08252-30.66992-10.36719-68.67188-5.77442-99.207,6.05957-40.291,11.73291-81.33106,17.21924-121.02l.02783-.20313c1.89307-13.6958,3.8501-27.85791,3.93994-41.88769a69.16215,69.16215,0,0,0-1.09033-10.80518c-.88916-5.77441-1.80859-11.74561-.2749-17.55469a65.4689,65.4689,0,0,0,1.59961-13.11523,94.79328,94.79328,0,0,1,.85205-9.62891,47.79885,47.79885,0,0,1,8.43311-20.42187,6.85856,6.85856,0,0,1-3.21631-5.22608,16.60363,16.60363,0,0,1,1.25732-6.98486l14.05469-41.6626c1.24658-3.69433,2.53564-7.51416,3.43066-11.36377a108.33309,108.33309,0,0,0,2.08594-14.40429c.94922-10.06543,1.58545-20.292,1.8916-30.39551l.00928-.31006c.1084-3.59912.22021-7.32031,1.41943-10.82568a36.136,36.136,0,0,1,4.46143-8.16846l7.585-11.40967c1.38965-2.08984,2.96435-4.458,5.36377-5.91894a18.27858,18.27858,0,0,1,3.50635-1.52393,22.26986,22.26986,0,0,0,2.439-.96582c.16113-.0791.333-.17383.51367-.28125a114.76873,114.76873,0,0,1-11.646-.25147l-.76563-.05957-2.72949-14.73877L345.538,255.73682l-.89258-.20117c-7.78516-1.75732-12.686-4.98486-14.98389-9.8667-4.85742-10.3208,3.24756-26.31445,11.82813-43.24658,1.83545-3.62109,3.73242-7.36523,5.52295-11.09082,14.86133-30.92236,38.45556-28.28418,38.69238-28.25293.15381.00195,24.14307,1.187,36.18262,21.53027,8.252,13.94336,7.27246,31.09034,6.48535,44.86817a116.44106,116.44106,0,0,0-.25635,15.376,6.35372,6.35372,0,0,1-.31982,2.66749l12.35937.03466c4.20069.01172,8.9624.02539,13.16895,1.94239,4.97363,2.26757,8.01513,6.62939,9.69091,9.88964a55.01548,55.01548,0,0,1,4.251,12.97217,18.367,18.367,0,0,1,.458,3.60987l.07324.10791c.21338.31152.42627.623.6294.9414,4.36474,6.833,6.585,13.91065,6.42041,20.46778-.00928.375-.02588.75146-.043,1.12841a9.60429,9.60429,0,0,0,2.30224,7.86182l.19971.29248a86.71811,86.71811,0,0,1,11.17383,23.15625l.1333.43262a12.56292,12.56292,0,0,0,2.92822,5.77539c.3833.47168.76612.94336,1.11475,1.43994a13.67911,13.67911,0,0,1,.23535,15.05811l-.14258.21435a3.25291,3.25291,0,0,0-.56982,1.104c-.11524.68409.42334,1.28565,1.312,2.21094a8.82867,8.82867,0,0,1,1.60156,2.03662c1.1836,2.31543.03858,5.06153-1.7041,6.57666a12.201,12.201,0,0,1-4.61377,2.29c1.18213,2.87354.01807,6.24268-1.02393,9.25928-.40527,1.17334-.78808,2.28125-1.041,3.3374a37.49082,37.49082,0,0,0-.74854,5.377c-.11035,1.21679-.22509,2.47412-.4165,3.71484-.61328,3.97363-2.03223,6.93213-4.21729,8.79346a3.39076,3.39076,0,0,1-1.52441.81787c-1.2959.25586-2.47314-.49854-3.31494-2.08838q-.04761.11572-.09473.22754c-1.90185,4.5166-4.042,9.00439-6.11181,13.34424l-5.73194,12.019c-2.55175,5.3501-5.43554,11.397-10.09912,15.99707a229.18015,229.18015,0,0,0,4.646,32.98437c3.08008,13.74756,6.46924,30.00049,8.2539,46.31592a112.54843,112.54843,0,0,1,.0708,17.58008c-.38281,7.9209-.7788,16.1123,1.2876,23.78223.61963,2.30175,1.4751,4.59765,2.30274,6.81738.45215,1.21484.90478,2.42969,1.32519,3.65527,2.75928,8.04,4.12989,16.55567,5.45508,24.791l.03711.23047c2.0498,12.74023,4.17236,25.67773,6.30908,38.45508,2.01026,12.02148,4.28858,25.64648,10.32813,37.35058.57324,1.11133,1.18066,2.208,1.78808,3.30567,2.3125,4.17578,4.70362,8.49414,5.19043,13.59765a14.36826,14.36826,0,0,1-.59912,5.89356c-2.11133,6.39941-7.52148,8.07129-12.75293,9.68847q-.55371.17139-1.10644.34375c4.26367,6.39942,9.10986,14.90625,9.78662,24.63867.44775,6.44043-1.65821,11.63672-5.63379,13.89942a11.52714,11.52714,0,0,1-10.09082.208l.77832-1.8418a9.53091,9.53091,0,0,0,8.32324-.10449c4.877-2.77539,4.77539-9.9043,4.62793-12.02246-.66016-9.49024-5.55957-17.87207-9.75439-24.11426-.13184-.19629-.28125-.43262-.438-.68555l-.665-1.07324,1.19775-.40137c.78711-.26367,1.58545-.51074,2.38379-.75683,4.96582-1.53516,9.65625-2.98536,11.44434-8.40528a12.378,12.378,0,0,0,.50732-5.07715c-.44726-4.68847-2.63379-8.63769-4.94873-12.81835-.61719-1.11426-1.23389-2.22852-1.81592-3.35743-6.1831-11.98144-8.48877-25.77148-10.52343-37.9375-2.13721-12.78125-4.26075-25.72363-6.311-38.46679l-.03711-.23145c-1.312-8.15234-2.66846-16.58105-5.37207-24.46-.41455-1.208-.86133-2.40625-1.3081-3.60547-.84327-2.26269-1.71534-4.60254-2.35987-6.99609-2.14746-7.97266-1.74414-16.32324-1.354-24.39844a111.00231,111.00231,0,0,0-.061-17.26562c-1.77392-16.21778-5.14941-32.40284-8.21728-46.0962a232.17111,232.17111,0,0,1-4.72412-33.73828l-.03565-.47217.34278-.32666c4.5996-4.38427,7.47753-10.41894,10.01611-15.74316l5.7251-12.00391c2.06738-4.334,4.19726-8.80029,6.08056-13.27441a10.248,10.248,0,0,0,.8125-2.59717l.51416-4.01269,1.66065,4.44336c.124.32666.24756.65283.36719.97949.36669,1.002.98535,1.9751,1.51562,1.86133a1.67016,1.67016,0,0,0,.61084-.37745c1.80908-1.5415,2.99951-4.09033,3.5376-7.57617.18213-1.17871.29345-2.40478.40136-3.59082a39.57956,39.57956,0,0,1,.79493-5.66211c.27588-1.15088.69287-2.35742,1.0957-3.52392,1.13477-3.28369,2.20605-6.38574.62353-8.65137l-.80712-1.15527,1.35693-.38037a12.96271,12.96271,0,0,0,5.04248-2.21875c1.12793-.98047,1.94434-2.771,1.23535-4.15723a7.27813,7.27813,0,0,0-1.26269-1.56152c-.99854-1.03955-2.13037-2.21778-1.84131-3.92969a4.81625,4.81625,0,0,1,.87988-1.88379l.13232-.19873a11.79529,11.79529,0,0,0-.20019-12.811c-.32178-.458-.67627-.89257-1.02979-1.32714a14.44053,14.44053,0,0,1-3.28808-6.44971l-.13184-.42822a84.72848,84.72848,0,0,0-10.916-22.62256l-.19776-.28907a11.47329,11.47329,0,0,1-2.6499-9.08105c.01611-.36377.03272-.727.042-1.08838.15381-6.15723-1.95752-12.8457-6.10693-19.3418-.1919-.30029-.39307-.59472-.59473-.88867l-.40967-.603-.00537-.29736a16.5697,16.5697,0,0,0-.41357-3.49512,53.33933,53.33933,0,0,0-4.082-12.50927c-1.53028-2.978-4.28955-6.95459-8.74121-8.9834-3.814-1.73877-8.34619-1.75147-12.34522-1.7627l-15.93164-.04443,1.12549-1.57568a4.1965,4.1965,0,0,0,.7793-2.91211,117.71987,117.71987,0,0,1,.25293-15.65967c.77148-13.50684,1.73144-30.3169-6.21-43.73584-11.47461-19.38867-34.39844-20.54834-34.62891-20.55811-.30859-.03515-22.51611-2.43213-36.72217,27.12842-1.79932,3.74463-3.70166,7.49805-5.5415,11.12842-8.35352,16.48437-16.24365,32.0542-11.80274,41.49072,1.93262,4.10645,6.1001,6.91065,12.7251,8.55713l6.27832-19.54,3.89307,21.02442c3.53808.24365,7.50195.29638,11.79248.1582l2.21728-.0874,3.96582-.49756L368.41544,257.21a23.59749,23.59749,0,0,1-2.9541,1.91406,24.135,24.135,0,0,1-2.65576,1.05762,16.52505,16.52505,0,0,0-3.13135,1.34521c-2.02,1.23-3.46387,3.40186-4.73779,5.31836l-7.58594,11.40967a34.636,34.636,0,0,0-4.23389,7.7085c-1.102,3.21972-1.209,6.78759-1.313,10.23828l-.00927.31054c-.30762,10.14551-.94629,20.415-1.89942,30.52247A110.09639,110.09639,0,0,1,337.766,341.7046c-.917,3.94384-2.22167,7.81054-3.48339,11.55029l-14.05469,41.6626a15.09227,15.09227,0,0,0-1.16358,6.1372c.17823,1.70459,1.27393,3.62256,3.02295,3.98926l1.55176.3252-.96191,1.26025a45.82025,45.82025,0,0,0-8.84326,20.59278,93.42739,93.42739,0,0,0-.83057,9.42578,66.9997,66.9997,0,0,1-1.66309,13.51757c-1.42724,5.40625-.57959,10.91114.31787,16.73975a70.67554,70.67554,0,0,1,1.11377,11.12207c-.09082,14.16113-2.05712,28.38916-3.95849,42.14844l-.02832.20361c-5.48731,39.69434-11.16113,80.74121-17.22266,121.043-4.54883,30.24707-10.21045,67.89063,5.56836,97.98047,4.39746,8.38672,9.46,13.97559,15.47608,17.08594a47.58142,47.58142,0,0,0,12.15136,3.80468l3.39551.69043-1.4541,1.32422c-6.51318,5.93067-12.28076,14.65039-14.35254,21.69825-1.24658,4.24023-1.085,7.48925.481,9.65625a9.55593,9.55593,0,0,0,4.08691,2.96289c3.71094,1.61718,17.99951,3.11328,17.00293,3.5a9.58864,9.58864,0,0,1-3.06348.51367Q329.62614,800.69629,328.4589,800.69581ZM450.96817,407.73048l-.103-2.1294c-.023-.48193-.04541-.96387-.0752-1.44531l-.04883-.79395.9209-.27246c.16309-.04736.32715-.09424.48633-.15429a17.60214,17.60214,0,0,0,3.51269-1.9961l.59717-.39941c1.11231-.73633,2.3169-1.458,3.791-2.272l3.48877-1.92579-2.166,3.34473a15.11855,15.11855,0,0,1-6.29687,5.74609c-.83155.397-1.68262.85743-2.67823,1.44922Zm17.25733-46.96094-1.62061-3.49854c-3.10937-6.71289-5.61474-12.40332-7.73584-18.354-1.42773-4.00488-2.73437-8.32764-2.63379-12.80371.002-.11035.00879-.22119.01563-.33252l.11767-2.51123,1.61573,1.69971a32.6473,32.6473,0,0,1,3.97265,5.19287,44.62842,44.62842,0,0,1,6.55225,26.7622Zm-9.916-32.35205a39.83592,39.83592,0,0,0,2.44336,9.82763c1.6709,4.687,3.58838,9.22217,5.86084,14.24463a42.51437,42.51437,0,0,0-6.353-21.26806A33.58374,33.58374,0,0,0,458.30948,328.41749Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#3f3d56"
      />
      <polygon
        points="216 647.699 0 648.699 0 646.699 216 645.699 216 647.699"
        fill="#3f3d56"
      />
      <polygon
        points="774 587.699 361 588.699 361 586.699 774 585.699 774 587.699"
        fill="#3f3d56"
      />
      <path
        d="M1061.69742,384.488c-5.41,5.99-120.23,135.01-164.33008,345.62q-.75,3.555-1.47,7.16s-5,7-6,0c0,0,.59009-2.99,1.85-8.49C901.1774,687.45808,947.98746,504.52808,1061.69742,384.488Z"
        transform="translate(-119.89737 -153.56884)"
        fill={color}
      />
      <path
        d="M897.36734,730.108q-.75,3.555-1.47,7.16s-5,7-6,0c0,0,.59009-2.99,1.85-8.49A13.77323,13.77323,0,0,1,897.36734,730.108Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#3f3d56"
      />
      <polygon
        points="268.978 52.784 266.81 38.479 263.417 51.629 254 51.991 254 45.217 251.049 52.103 234.874 52.765 234.792 50.767 249.707 50.157 256 35.473 256 49.913 261.852 49.688 267.321 28.497 270.692 50.749 295.924 50.234 295.583 43.592 297.581 43.489 298.027 52.191 268.978 52.784"
        fill="#3f3d56"
      />
      <path
        d="M373.79532,669.75343c-.63086-3.73536-1.36279-7.43555-2.17676-10.9961-.73632-3.22461-1.56-6.49316-2.35693-9.65332-1.3042-5.1748-2.65332-10.52637-3.66748-15.87207a137.91408,137.91408,0,0,1-2.40869-24.89355,78.77555,78.77555,0,0,1,1.65478-17.93164c1.64014-7.29786,4.75635-14.36817,7.77051-21.20508,4.936-11.19824,9.59863-21.77539,8.374-33.30176l-.41992-3.95557,2.24073,3.28662c12.541,18.39356,16.918,38.73145,21.33642,63.40723,2.96777,16.57324,6.09131,32.749,11.64307,48.42871,1.31445,3.71192,2.79687,7.49317,4.23,11.14942.731,1.86328,1.46191,3.72851,2.17724,5.59668l-1.86816.71484c-.71289-1.86328-1.44238-3.72363-2.1709-5.582-1.43945-3.6709-2.92773-7.46778-4.2539-11.21094-5.60157-15.82226-8.74317-32.08594-11.72608-48.74512-4.12744-23.04785-8.21045-42.26367-18.99609-59.53125.03271,10.65723-4.41748,20.752-8.73633,30.54981-2.9751,6.75-6.05225,13.72949-7.64941,20.83691a76.868,76.868,0,0,0-1.606,17.48145,135.90954,135.90954,0,0,0,2.37353,24.53222c1.00342,5.28809,2.34473,10.60938,3.64209,15.75586.79932,3.1709,1.626,6.4502,2.36768,9.69727.82178,3.59766,1.56152,7.335,2.19824,11.10937Z"
        transform="translate(-119.89737 -153.56884)"
        fill="#3f3d56"
      />
      <circle
        cx="752.06283"
        cy="292.02436"
        r="19.4648"
        fill={color}
        opacity="0.4"
      />
      <circle
        cx="771.01386"
        cy="324.04067"
        r="13.65441"
        fill={color}
        opacity="0.4"
      />
      <circle
        cx="822.76447"
        cy="557.34938"
        r="13.65441"
        fill={color}
        opacity="0.4"
      />
    </svg>
  );
};

CharacterDrawing.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

CharacterDrawing.defaultProps = {
  color: "primary",
  style: {}
};

export default CharacterDrawing;
