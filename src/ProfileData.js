import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const ProfileData = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="a02257e8-5dd7-45a0-b624-c586cf0fa49a"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="918.57304"
      height="684"
      viewBox="0 0 918.57304 684"
    >
      <title>contact details</title>
      <circle cx="355.57304" cy="328" r="328" fill="#f2f2f2" />
      <path
        d="M317.26733,229.41668l-6.79177,54.92172c8.33646,16.31521,17.1664,34.86291,25.58739,54.8697l15.99428-82.81618.80831.73749C341.17184,245.29754,328.87105,235.666,316.446,228.755Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M309.008,281.479l6.57962-53.201c-13.97723-7.62928-28.09733-11.79766-41.675-11.72281-.70641.00393-1.4043.02827-2.10113.05494C274.53858,220.77855,290.38105,245.35176,309.008,281.479Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M417.70679,367.169l.73211.9879q-3.64578-11.087-8.037-21.72234l-41.2471,92.40184-.35238-.43813q1.56556,6.81928,2.885,13.50691Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M389.77662,305.766l.77948.88a258.75251,258.75251,0,0,0-36.88253-48.68557l-16.29975,84.394q11.7106,28.18142,20.1829,55.01806Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M207.04412,301.44269a216.0521,216.0521,0,0,0,1.14738,43.53064L352.04779,385.3686c-5.21169-15.42006-10.8208-30.01121-16.40168-43.39061L207.21769,302.65852Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M210.791,361.7l-.196-1.21747,145.96058,38.77008q-1.77867-5.71809-3.642-11.30711L208.52642,347.40114l-.18769-1.21778Q209.30992,353.81416,210.791,361.7Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M409.08043,344.13141l.75571.93964a309.00213,309.00213,0,0,0-18.5971-37.27056L358.58361,400.6459q5.54777,17.92709,9.59343,35.1173Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M378.3638,503.34039c1.48968,26.51061-.44,51.00056-5.78952,73.19548,11.339-16.23116,55.49734-83.95926,55.48717-154.18693Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M229.08531,417.93531a298.92614,298.92614,0,0,0,20.38832,34.43143l-.13722-1.33906,127.17638,49.89345a371.62958,371.62958,0,0,0-5.57319-44.18855Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M307.71644,282.17228c-20.16294-39.082-37.00936-64.49191-37.252-64.85589l.46552-.66962c-20.6074,1.07811-36.938,12.15252-48.01347,30.35094Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M372.34755,455.35967c.26231,1.38449.53258,2.77347.77906,4.1492a369.22065,369.22065,0,0,1,4.993,39.86551l49.22634-80.22373.69374.98637a146.38026,146.38026,0,0,0-4.97307-36.60867q-1.91608-7.03093-4.15065-13.91473Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M334.52635,339.31088c-8.33926-19.77374-17.07137-38.09986-25.3133-54.22374l-86.74548-35.98229-.1093-1.19206c-8.19741,13.86708-13.40549,31.74213-15.21438,52.39882Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M376.65624,503.27638,250.41061,453.74787C295.70933,519.77228,365.25385,576.417,369.69738,580.00571,376.29048,555.5005,378.10521,529.47352,376.65624,503.27638Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M370.41283,454.25206l.04408-.08115a501.53716,501.53716,0,0,0-13.11641-52.3697L211.02077,362.93555q2.05416,10.67468,5.05648,21.73413a179.71208,179.71208,0,0,0,11.67063,30.56364Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M563.91869,460.94434l-40.26085,37.96825c-3.98543,17.88292-9.01471,37.8-15.28958,58.58009l65.14-53.58277.15218,1.08356c-1.45983-16.5712-4.7906-31.835-9.95228-45.08262Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M524.35133,495.77423l39-36.77828c-5.899-14.79088-14.11556-27.00733-24.62064-35.60969-.54657-.44753-1.0996-.87391-1.6533-1.29782C536.519,427.03831,533.04752,456.0689,524.35133,495.77423Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M553.41559,631.10156l-.06623,1.22783q4.26352-10.86446,7.66478-21.85647l-90.70337,44.85891.008-.5622q-3.14365,6.2507-6.39289,12.243Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M571.06785,565.99529l.03908,1.17493a258.75326,258.75326,0,0,0,2.64585-61.02136l-66.3817,54.6032q-8.95514,29.17423-19.54668,55.24729Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M433.08665,446.116a216.05149,216.05149,0,0,0-26.88081,34.25866l85.03191,122.86571c5.82116-15.20046,10.80754-30.016,15.04278-43.88022l-73.83568-112.197Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M397.53943,494.91534l.62558-1.06269,87.68918,122.95616q2.27718-5.53847,4.40682-11.03152L404.9153,482.45816l.63217-1.05764Q401.42843,487.89714,397.53943,494.91534Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M561.46539,607.8562l-.01727,1.20571a309.003,309.003,0,0,0,9.44843-40.5669l-84.36907,50.68044q-7.16133,17.3457-15.00958,33.16581Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M436.26189,710.88578c-15.76153,21.36833-32.86778,38.99949-51.14421,52.68175,19.08568-5.26887,96.294-29.26751,141.07839-83.36261Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M375.7618,549.89561a298.92371,298.92371,0,0,0-6.258,39.52271l.74839-1.11886L436.3793,707.84188A371.62923,371.62923,0,0,0,460.271,670.25366Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M522.91437,495.48446c9.39782-42.96081,12.62969-73.27612,12.675-73.71124l.78563-.21882c-16.55924-12.31336-36.20031-14.19985-56.33776-7.24773Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M462.23106,670.09427c-.681,1.23362-1.35878,2.47579-2.0464,3.69257a369.21949,369.21949,0,0,1-21.58128,33.8886l89.08152-30.39018-.09482,1.20216a146.37982,146.37982,0,0,0,19.51935-31.36751q3.0087-6.63726,5.67824-13.36432Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M507.11922,556.59178c6.18918-20.54844,11.15248-40.23249,15.08869-57.90777l-43.86043-83.04075.67614-.98783c-15.15819,5.45185-30.57038,15.89723-45.13872,30.65306Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M434.98757,709.74737l-65.643-118.6677c-7.22276,79.74352,10.21084,167.72724,11.34427,173.32536C401.39654,749.73655,419.39462,730.84831,434.98757,709.74737Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M461.44744,668.00716l.08572-.03439a501.54092,501.54092,0,0,0,23.30005-48.70043L396.92837,496.01351q-5.22637,9.53169-9.9679,19.9645a179.711,179.711,0,0,0-10.50534,30.9835Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M227.52032,462.83485l10.517,54.33155c12.97121,12.93949,27.10178,27.84961,41.29444,44.27378l-10.38718-83.7045.99669.45153c-14.77826-7.638-29.45378-12.99577-43.40653-15.72782Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M235.75772,514.90059l-10.18684-52.62953c-15.651-2.93535-30.368-2.53512-43.25764,1.73286-.6706.22208-1.32679.46094-1.98126.7017C184.214,467.82705,206.87613,486.30006,235.75772,514.90059Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M365.62014,562.796l1.00161.71324q-6.89421-9.41721-14.35778-18.17438L341.59783,645.96119l-.47055-.30775q3.59673,6.00144,6.9187,11.95373Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M320.0782,513.033l1.01331.596a258.75319,258.75319,0,0,0-50.125-34.90119l10.58438,85.29953q19.84794,23.18167,36.20047,46.08538Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M144.95769,565.40344a216.05212,216.05212,0,0,0,14.54638,41.04432l149.29778-6.0484c-9.72277-13.054-19.56728-25.19691-29.0104-36.19608l-134.29287,2.30281Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M167.14641,621.55182l-.56271-1.09728,150.79669-8.24444q-3.459-4.88829-6.95864-9.62767L160.573,608.65316l-.55491-1.10014Q163.30039,614.51,167.14641,621.55182Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M350.29534,543.55292l1.00915.66a309.00183,309.00183,0,0,0-29.20663-29.69712l-2.35808,98.39251q10.81731,15.33441,19.9783,30.43233Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M370.29389,704.45994c9.61109,24.75194,15.34571,48.63908,17.11849,71.40066,5.76677-18.94119,26.82812-97.00188,5.1113-163.7874Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M201.92705,669.37862A298.92569,298.92569,0,0,0,231.95961,695.822l-.5444-1.23108,136.37053,8.14037a371.63091,371.63091,0,0,0-18.95882-40.302Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M234.74372,515.95919c-31.25571-30.93591-55.13128-49.8943-55.47457-50.16545l.23575-.78072c-19.265,7.395-31.37285,22.97484-36.28089,43.70549Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M349.74156,660.68841c.67741,1.23561,1.36377,2.473,2.02342,3.70521a369.22066,369.22066,0,0,1,17.07079,36.37l22.01884-91.51092.96465.72363a146.38048,146.38048,0,0,0-16.04517-33.2788q-3.99549-6.09438-8.24839-11.95038Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M277.90213,562.01289c-14.04289-16.22779-28.01194-30.95743-40.83411-43.74418l-93.61962-7.40749-.47241-1.09991c-3.50971,15.72182-2.93764,34.33134,1.727,54.5356Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M368.65017,704.92686l-135.37256-8.081c63.48841,48.78953,147.13608,81.16441,152.47127,83.20388C384.44463,754.70665,378.12564,729.39328,368.65017,704.92686Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M347.55923,660.2331l.01684-.09081a501.53908,501.53908,0,0,0-28.66142-45.75094L167.74687,622.6559q5.25307,9.517,11.52682,19.10687a179.71155,179.71155,0,0,0,20.54625,25.4596Z"
        transform="translate(-140.71348 -108)"
        fill={color}
      />
      <path
        d="M242.28652,792s212-84,468,0"
        transform="translate(-140.71348 -108)"
        fill="#2f2e41"
      />
      <path
        d="M396.41742,727.55273a66.75614,66.75614,0,0,0,.83191,6.70623s18.24329,12.40544,19.70275-1.45946c.94864-9.03408-1.19677-13.1133-2.81675-14.85732l-.02557-.02783a5.61754,5.61754,0,0,1-1.53607-3.805V697.77238L396.5196,702.8805l.72973,13.86491C396.16934,719.62785,396.15473,723.93324,396.41742,727.55273Z"
        transform="translate(-140.71348 -108)"
        fill="#ffb9b9"
      />
      <path
        d="M396.41742,727.55273a66.75614,66.75614,0,0,0,.83191,6.70623s18.24329,12.40544,19.70275-1.45946c.94864-9.03408-1.19677-13.1133-2.81675-14.85732a4.359,4.359,0,0,0-4.48056-.467c-2.91893-1.29895-6.12977.86838-8.786,3.67052A25.79721,25.79721,0,0,0,396.41742,727.55273Z"
        transform="translate(-140.71348 -108)"
        opacity="0.05"
      />
      <path
        d="M409.65477,718.9346s8.027-4.37839,9.48651,15.32436,2.18919,17.51356,2.18919,17.51356,7.29732,17.51356-8.027,15.32437-22.62168-3.64866-21.892-12.40544c.43984-5.278,1.675-12.94184,2.58691-18.1981a26.75764,26.75764,0,0,1,6.86757-13.89107C403.52862,719.79947,406.73584,717.6373,409.65477,718.9346Z"
        transform="translate(-140.71348 -108)"
        fill="#2f2e41"
      />
      <path
        d="M495.38373,743.98175l8.36579,4.03484s26.1359,4.01222,17.8462-10.87058a60.39259,60.39259,0,0,1-5.45114-14.08092,93.79437,93.79437,0,0,1-2.89406-20.87938l-22.11136,3.08471c7.21046,9.60169,6.29714,25.17883,5.18108,33.33682C495.86862,741.89544,495.38373,743.98175,495.38373,743.98175Z"
        transform="translate(-140.71348 -108)"
        fill="#ffb9b9"
      />
      <path
        d="M495.38373,743.98175l8.36579,4.03484s26.1359,4.01222,17.8462-10.87058a60.39259,60.39259,0,0,1-5.45114-14.08092c-5.0772.97706-8.94015,8.28572-8.94015,8.28572-4.09451,14.21471-7.77774,10.66237-10.88419,7.25643C495.86862,741.89544,495.38373,743.98175,495.38373,743.98175Z"
        transform="translate(-140.71348 -108)"
        opacity="0.05"
      />
      <path
        d="M507.68564,732.72866s6.517-12.32453,13.74557-7.11955,3.642,12.64123,27.05514,19.92327,7.94009,22.73448-6.3854,21.554-44.86845-6.74531-44.86845-6.74531-7.94009-22.73448-4.25486-23.2486S501.74855,753.35317,507.68564,732.72866Z"
        transform="translate(-140.71348 -108)"
        fill="#2f2e41"
      />
      <path
        d="M541.13851,764.33073c9.30056.76637,19.0803-5.47809,18.393-11.94579,4.44449,7.30392-6.806,15.577-17.43052,14.70149-14.3255-1.18044-44.86845-6.74531-44.86845-6.74531s-.37365-1.07013-.92032-2.748C497.20153,757.75481,527.02724,763.168,541.13851,764.33073Z"
        transform="translate(-140.71348 -108)"
        fill="#fff"
        opacity="0.3"
      />
      <path
        d="M391.44929,754.27158c.84143,6.56482,8.12272,7.94474,21.85413,9.90638,6.98314.99759,9.26239-2.09811,9.68173-5.76156.45648,4.69213-.87609,9.93845-9.68173,8.68049-15.32436-2.1892-22.62168-3.64866-21.892-12.40544C391.42283,754.5552,391.43691,754.41094,391.44929,754.27158Z"
        transform="translate(-140.71348 -108)"
        fill="#fff"
        opacity="0.3"
      />
      <path
        d="M358.07072,469.44027l-2.42235,36.33531s-1.93789,36.81979,13.08071,39.72661,0-46.99367,0-46.99367v-32.944Z"
        transform="translate(-140.71348 -108)"
        fill="#fbbebe"
      />
      <path
        d="M370.667,337.17973,368.72908,341.54s.48447,30.52166,0,32.944-6.78259,21.31672-6.78259,23.2546-4.84471,58.1365-5.81365,61.5278-5.32918,14.04966-1.45341,15.50307,11.14283-4.36024,14.04965,0,5.32918,0,5.32918-1.45341.96894-29.06826,6.78259-36.81979,11.14283-25.19248,12.11177-28.58378,2.42236-52.32285,2.90683-53.29179-1.93789-14.04966-1.93789-14.04966Z"
        transform="translate(-140.71348 -108)"
        fill="#3f3d56"
      />
      <path
        d="M398.2818,388.53364s-5.81365,22.77013-9.68941,27.13037-23.2546,36.81978-17.441,79.93768S387.139,594.91822,387.139,594.91822s1.45342,19.8633-.48447,25.19248,8.72048,90.11158,8.72048,90.11158,15.01859,11.6273,23.2546-2.90683c0,0-1.93789-31.4906,0-34.39743s0-55.22967,0-55.22967,1.45341-130.32266,9.20494-124.99348,31.49061,95.92522,31.49061,95.92522,10.17389,34.88191,9.68941,37.78873S477.735,665.651,477.735,665.651s8.72047,50.385,12.11177,51.35391,24.22354,1.45341,26.16143-3.87577l-5.81365-45.54026s-5.81365-51.83838-8.72048-59.10544-7.75153-110.45935-21.80119-140.981c0,0-5.32918-48.93155-9.20494-56.19861,0,0-2.27369-9.98371.532-19.30377C471,392,403.611,392.4094,398.2818,388.53364Z"
        transform="translate(-140.71348 -108)"
        fill="#2f2e41"
      />
      <ellipse
        cx="286.39434"
        cy="138.09921"
        rx="40.69555"
        ry="51.59614"
        fill="#2f2e41"
      />
      <path
        d="M510.679,306.65807l-6.29812,13.56518-74.60851,21.80119s-51.83838,15.01859-57.16756-9.205,20.34777-26.64589,20.34777-26.64589,9.68942-6.7826,21.80119-13.56519c4.05017-2.27217,5.39216-5.94931,5.38246-9.8396a20.35976,20.35976,0,0,0-.32461-3.44943,29.19,29.19,0,0,0-.96894-3.88547,44.52972,44.52972,0,0,0-4.08891-8.98692s31.97508-12.59625,31.49061-5.81365a19.28242,19.28242,0,0,0,.77514,7.24766,28.53029,28.53029,0,0,0,2.6598,5.87663c.54254.935,1.14813,1.904,1.82155,2.93108.87207,1.33229,1.8652,2.75179,2.97951,4.2924,6.29812,8.72048,27.13037,8.72048,27.13037,8.72048C498.0828,287.7637,510.679,306.65807,510.679,306.65807Z"
        transform="translate(-140.71348 -108)"
        fill="#fbbebe"
      />
      <path
        d="M587.7099,384.1734s34.8819,25.677,41.66449,25.19248,46.5092-2.90682,37.30426,6.29813-50.86944,3.39129-50.86944,3.39129L577.536,394.83176Z"
        transform="translate(-140.71348 -108)"
        fill="#fbbebe"
      />
      <path
        d="M447.01956,267.881a27.63276,27.63276,0,0,1-28.17684,7.55291,44.52972,44.52972,0,0,0-4.08891-8.98692s31.97508-12.59625,31.49061-5.81365A19.28242,19.28242,0,0,0,447.01956,267.881Z"
        transform="translate(-140.71348 -108)"
        opacity="0.1"
      />
      <circle cx="286.1521" cy="137.61474" r="27.61484" fill="#fbbebe" />
      <path
        d="M392.46815,326.0369s120.14877-27.13037,120.63324-23.2546,5.32918,11.6273,5.32918,11.6273l-28.09931,31.97508s3.3913,15.50306-3.39129,18.89436-7.75154,29.06825-14.04966,29.55272-79.93769-.48447-80.42216-4.36024,1.93789-6.29812,0-7.26706-4.84471-.96894-2.42235-5.81365,2.42235-25.19248,2.42235-25.19248L369.698,341.54s-3.12264-9.02751,2.55668-10.56964S392.46815,326.0369,392.46815,326.0369Z"
        transform="translate(-140.71348 -108)"
        fill="#3f3d56"
      />
      <path
        d="M514.07033,313.44066h4.36024s13.08071,8.72047,16.472,16.472,15.50307,17.92542,18.40989,20.83224,42.63343,30.52167,42.149,34.39743-11.6273,7.75154-12.11177,12.11177,4.84471,6.29812,1.45342,6.29812-24.22355-12.11177-31.97508-16.472-23.73907-16.95648-25.67695-20.34778-15.0186-9.20495-16.472-11.6273S486.45549,341.54,486.45549,341.54Z"
        transform="translate(-140.71348 -108)"
        fill="#3f3d56"
      />
      <circle cx="245.69879" cy="106.85084" r="15.50307" fill="#2f2e41" />
      <circle cx="314.00917" cy="86.50307" r="15.50307" fill="#2f2e41" />
      <ellipse
        cx="290.02787"
        cy="119.68932"
        rx="28.82601"
        ry="17.68319"
        fill="#2f2e41"
      />
      <path
        d="M449.67931,273.75765c-13.28419,5.22744-23.78267,5.84756-29.86762,5.56173a20.36289,20.36289,0,0,1,.32459,3.44943c.70733.02907,1.46795.0436,2.277.0436,6.71962,0,16.75785-1.16757,29.08763-6.12371Z"
        transform="translate(-140.71348 -108)"
        fill="#2f2e41"
      />
      <rect
        x="497.57304"
        y="310"
        width="421"
        height="252"
        rx="21.43307"
        fill="#3f3d56"
      />
      <rect
        x="542.9663"
        y="486.75"
        width="330"
        height="12"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="543.17978"
        y="455.25"
        width="330"
        height="12"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="814.17978"
        y="412.25"
        width="59"
        height="12"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="657.17978"
        y="380.25"
        width="216"
        height="12"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="542.9663"
        y="518.75"
        width="165.21348"
        height="12"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="543.17978"
        y="341.25"
        width="83"
        height="83"
        rx="10.16535"
        fill={color}
      />
    </svg>
  );
};

ProfileData.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

ProfileData.defaultProps = {
  color: "primary",
  style: {}
};

export default ProfileData;
