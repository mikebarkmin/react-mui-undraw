import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Flowers = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="effa29f7-1903-425a-b28d-f3a5dd58d661"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="930.25869"
      height="652"
      viewBox="0 0 930.25869 652"
    >
      <defs>
        <linearGradient
          id="a876bd90-f878-4b77-89d3-57d6c6545783"
          x1="795.53026"
          y1="278.26925"
          x2="795.53026"
          y2="266.10985"
          gradientTransform="translate(168)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.53514" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <title>flowers</title>
      <polygon points="560 652 0 652 0 4 560 178 560 652" fill="#f2f2f2" />
      <rect x="52.12934" y="423" width="440" height="205" fill="#3f3d56" />
      <circle cx="396.83866" cy="323.46296" r="61.18574" fill={color} />
      <line
        x1="396.28445"
        y1="434.11356"
        x2="396.7858"
        y2="323.12613"
        fill="#3f3d56"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="396.7858" cy="323.12613" r="15.69535" fill="#3f3d56" />
      <path
        d="M531.34747,515.53s-2.02434-48.23445-48.01415-42.83665"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <circle cx="140.52351" cy="200.62056" r="61.18574" fill={color} />
      <line
        x1="137.059"
        y1="426.50259"
        x2="140.5804"
        y2="200.55291"
        fill="#3f3d56"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="140.5804" cy="200.55291" r="15.69535" fill="#3f3d56" />
      <path
        d="M274.455,388.46531s-1.49043-48.2539-47.53716-43.36537"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M271.99689,546.18878s11.53376-92.56819-46.68631-97.96047"
        transform="translate(-134.87066 -124)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="90.43993" cy="324.22831" r="15.69535" fill="#3f3d56" />
      <circle cx="272.10295" cy="64.78526" r="61.18574" fill={color} />
      <line
        x1="272.14133"
        y1="435.21584"
        x2="272.14133"
        y2="65.01003"
        fill="#3f3d56"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="272.14133" cy="64.83464" r="15.69535" fill="#3f3d56" />
      <circle cx="223.93418" cy="332.68044" r="15.69535" fill="#3f3d56" />
      <path
        d="M407.012,269.00726s-2.24219-48.2248-48.20715-42.61932"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M407.012,405.71915s-2.24219-48.22481-48.20715-42.61933"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M407.012,554.9015s10.08987-93.73668-48.20715-98.22106"
        transform="translate(-134.87066 -124)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="321.31139" cy="185.45226" r="15.69535" fill="#3f3d56" />
      <path
        d="M407.97489,402.67332S397.885,313.93664,456.182,309.45226"
        transform="translate(-134.87066 -124)"
        fill="none"
        stroke="#3f3d56"
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M537.87066,274a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,537.87066,274Zm0-42a20,20,0,1,0,20,20A20.02291,20.02291,0,0,0,537.87066,232Z"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M191.87066,168a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,191.87066,168Zm0-42a20,20,0,1,0,20,20A20.02291,20.02291,0,0,0,191.87066,126Z"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M694.87066,494a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,694.87066,494Zm0-42a20,20,0,1,0,20,20A20.02291,20.02291,0,0,0,694.87066,452Z"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <circle cx="467" cy="185" r="13" fill="#3f3d56" />
      <circle cx="569" cy="422" r="13" fill="#3f3d56" />
      <path
        d="M694.87066,776V547h-93c0,107.14325-86.85676,194-194,194s-194-86.85675-194-194h-79V776Z"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M407.87066,741c107.14324,0,194-86.85675,194-194h-388C213.87066,654.14325,300.72741,741,407.87066,741Z"
        transform="translate(-134.87066 -124)"
        fill={color}
      />
      <path
        d="M958.65376,628.55657c95.60775-48.36148,133.90842-165.07159,85.54694-260.67934L697.97441,543.00963C746.33589,638.61739,863.046,676.91805,958.65376,628.55657Z"
        transform="translate(-134.87066 -124)"
        fill="#3f3d56"
      />
      <path
        d="M965.66657,267.50313c.64438-.4376,1.267-.90492,1.87258-1.39328a28.71667,28.71667,0,0,1-5.97125,10.20038h0c-.62606.68951-1.29436,1.33483-1.98093,1.959-.01356-.1581-.02883-.31625-.0371-.47421-.08-1.52987.03149-3.13979.05247-4.71533A20.11536,20.11536,0,0,0,965.66657,267.50313Z"
        transform="translate(-134.87066 -124)"
        fill="url(#a876bd90-f878-4b77-89d3-57d6c6545783)"
      />
      <path
        d="M975.04868,211.71081a17.64909,17.64909,0,1,0-32.53453-5.80218,28.33744,28.33744,0,0,0-16.1198,26.95992,28.3726,28.3726,0,1,0,52.14589,15.48492c0-.45238-.0132-.90162-.03413-1.34881a28.36938,28.36938,0,0,0-3.45743-35.29385Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <g opacity="0.1">
        <path
          d="M942.27984,201.42853c.079-.03871.15488-.08313.23431-.12113-.05654-.30556-.09525-.61625-.13569-.92639-.00857.06482-.0205.12839-.02837.19345C942.31555,200.86054,942.30043,201.14418,942.27984,201.42853Z"
          transform="translate(-134.87066 -124)"
        />
        <path
          d="M982.90252,230.31443a28.2502,28.2502,0,0,1-4.39641,12.089c.02093.44719.03413.89643.03413,1.34881a28.37037,28.37037,0,0,1-56.64874,2.2869c-.06192.76388-.09979,1.53445-.09979,2.31433a28.37426,28.37426,0,1,0,56.74853,0c0-.45238-.0132-.90162-.03413-1.34881a28.28662,28.28662,0,0,0,4.49953-17.81526C982.97526,229.56394,982.948,229.93806,982.90252,230.31443Z"
          transform="translate(-134.87066 -124)"
        />
        <path
          d="M977.37673,200.36177a17.5815,17.5815,0,0,1-2.328,6.74781c.49606.50953.96505,1.0435,1.42127,1.58809a17.65508,17.65508,0,0,0,.90678-8.3359Z"
          transform="translate(-134.87066 -124)"
        />
      </g>
      <path
        d="M860.7076,516.13452a12.9424,12.9424,0,0,0,1.28943,4.64236,5.13438,5.13438,0,0,0,3.76177,2.75411,7.59114,7.59114,0,0,0,4.15009-1.20318c2.52613-1.31934,5.14805-2.85275,6.46657-5.37931,1.27662-2.44625,1.09294-5.36533.87725-8.11621l-1.6964-21.63629c-4.08633-.11246-8.19213-.11056-12.275.11193-4.04432.2204-4.75445,1.17279-4.1915,5.12134C860.2101,500.28733,859.66452,508.26976,860.7076,516.13452Z"
        transform="translate(-134.87066 -124)"
        fill="#fbbebe"
      />
      <path
        d="M980.6,530.7578l9.72395,15.70981a3.84118,3.84118,0,0,0,2.11476,1.98853,3.31892,3.31892,0,0,0,2.03177-.3529c3.24281-1.41722,5.725-4.10854,8.1066-6.7262,1.616-1.77618,3.2862-3.64957,3.89285-5.973a7.61068,7.61068,0,0,0-1.94278-7.15966,23.55856,23.55856,0,0,0-3.66592-2.62c-7.68675-5.18454-11.15583-15.03411-18.74391-20.362a2.95911,2.95911,0,0,0-1.53688-.66116,3.17947,3.17947,0,0,0-1.57931.52962q-5.18669,2.84309-10.37337,5.68619c-4.492,2.45726-3.06811,2.74575.34323,5.39268C973.99607,520.10874,977.1346,525.5597,980.6,530.7578Z"
        transform="translate(-134.87066 -124)"
        fill="#fbbebe"
      />
      <path
        d="M881.81406,503.62145c-1.42432-.449-3.02018-.85329-4.36305-.19989a4.81185,4.81185,0,0,0-2.27371,3.58541c-.27087,1.44365-.238,2.94212-.63884,4.3552-.676,2.38293-2.49168,4.24466-4.24173,5.99756a6.1849,6.1849,0,0,1-2.66265,1.85358c-1.40206.359-2.89333-.29764-4.319-.04825a4.70184,4.70184,0,0,0-3.40744,3.4727,13.83493,13.83493,0,0,0-.16642,5.09517l1.10379,12.059a18.27368,18.27368,0,0,1,.04491,4.431c-.40681,2.65091-1.94754,4.97737-2.80236,7.51944s-.80721,5.78752,1.33217,7.40489a5.358,5.358,0,0,0,5.11862.451A11.89768,11.89768,0,0,0,868.778,556.379c6.54944-7.14192,9.4734-16.81531,14.56733-25.05875a48.79517,48.79517,0,0,0,3.48086-5.97438c.699-1.60154,1.14321-3.30022,1.709-4.95353a49.459,49.459,0,0,1,2.805-6.43485c.60583-1.18755,2.92539-4.04686,2.43818-5.373C892.947,506.32176,884.02,504.31682,881.81406,503.62145Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <path
        d="M999.90528,536.88306a12.46585,12.46585,0,0,1-6.88961,5.90484,6.219,6.219,0,0,0-2.34176,1.21176,3.62457,3.62457,0,0,0-.40971,3.972,12.736,12.736,0,0,0,2.60509,3.3258,42.98877,42.98877,0,0,1,11.1664,22.50185c.34814,2.13082.57577,4.39566,1.85093,6.138,2.49086,3.40336,7.79327,3.18074,11.53818,1.24092a7.45991,7.45991,0,0,0,2.886-2.34,9.37985,9.37985,0,0,0,1.16666-3.55906,49.06406,49.06406,0,0,0,1.11468-9.44361c-.07252-5.99537-2.32461-11.72672-3.40025-17.62525-1.5266-8.37135-.76156-17.38812-4.66015-24.95193a5.56633,5.56633,0,0,0-1.77984-2.23792,6.24846,6.24846,0,0,0-3.17044-.71145q-5.28309-.21645-10.57281-.09319c-.98793.023-2.14312.14736-2.65487.99273-.52337.86458-.06591,1.968.39392,2.868C998.92959,528.34691,1002.46649,531.76064,999.90528,536.88306Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <path
        d="M916.24215,386.83514a5.43983,5.43983,0,0,0-1.27637,6.86792c.78116,1.29395,2.182,2.49846,1.875,3.9784-.31866,1.53612-2.20742,2.0578-3.75677,2.30424-13.65535,2.172-26.94412,6.1697-40.184,10.156l-13.8878,4.18141c-4.00436,1.20565-8.07855,2.44393-11.53859,4.79268a20.76846,20.76846,0,0,0-7.25826,8.67076c-1.58761,3.56-2.13341,7.48112-2.70023,11.33769-2.0858,14.19162-4.74883,28.52365-11.08114,41.39434l33.68292,11.04458a49.48452,49.48452,0,0,0,10.09225,2.53987,37.61163,37.61163,0,0,0,9.8298-.47571c-.20917-7.52125-.33643-15.269-.5456-22.79021a63.97657,63.97657,0,0,0-.46215-7.10662c-.50507-3.6042-1.62347-7.11057-1.972-10.73327,1.55385-1.28167,3.8125-.96295,5.82589-.90429,4.59491.13387,9.08086-1.46335,13.16723-3.56876s7.88636-4.72939,11.95-6.87832c6.7707-3.58046,14.47067-5.98877,19.639-11.64125-2.63256,10.03367-8.852,18.77686-10.05514,29.08013-1.21555,10.4098,3.02129,20.5973,7.16865,30.22232L938.006,520.05986c1.463,3.39533,3.41148,7.21212,7.0188,8.022,2.24755.50459,4.56627-.3388,6.65231-1.3158,12.19618-5.71208,21.95349-16.45045,34.97585-19.88452-.97043-6.44861-6.06588-11.77962-8.95163-17.62759-2.43381-4.93209-3.22857-10.48612-4.85024-15.74151s-4.40818-10.58105-9.30806-13.07906c-2.32662-1.18613-5.46094-2.21828-5.67815-4.82076a5.45341,5.45341,0,0,1,.51783-2.42035,31.55767,31.55767,0,0,1,7.92611-11.53817,3.50507,3.50507,0,0,0,1.042-1.30385,3.9321,3.9321,0,0,0,.07741-1.55209c-.24577-4.18721,1.99616-8.1042,4.49755-11.47114s5.39133-6.57162,6.80146-10.5219c2.42462-6.79217.01817-14.25643-2.37883-21.0584-.9688-2.74915-1.988-5.58336-3.97827-7.713-3.12078-3.33942-7.98148-4.30191-12.52493-4.8C945.15485,381.62325,927.91546,377.77236,916.24215,386.83514Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <g opacity="0.1">
        <path
          d="M914.71251,388.86624a2.81894,2.81894,0,0,0,2.12828-1.921,2.05365,2.05365,0,0,0,.03421-.573c-.21137.15329-.42495.30153-.63281.46292A5.04241,5.04241,0,0,0,914.71251,388.86624Z"
          transform="translate(-134.87066 -124)"
        />
      </g>
      <path
        d="M939.45606,280.38528c.17528,3.35518-.8378,6.946-3.41718,9.09883-.82751.69067-1.78791,1.214-2.584,1.94064a6.983,6.983,0,0,0,1.0213,10.60751c2.6783,1.63421,6.08376,1.19328,9.1751.657a53.6008,53.6008,0,0,0,12.04268-3.14239,19.98676,19.98676,0,0,0,9.49182-7.77438c-3.366-1.87668-5.199-5.81866-5.40339-9.667-.20462-3.85352.85181-8.22637-1.58853-11.21572-2.35011-2.87881-6.77273-2.85778-10.3552-1.86958-1.79806.496-3.53906,1.182-5.33968,1.66734-.91241.24594-3.92633.25243-4.5225.92432C936.89245,272.83354,939.35465,278.444,939.45606,280.38528Z"
        transform="translate(-134.87066 -124)"
        fill="#fbbebe"
      />
      <path
        d="M939.45606,280.38528c.17528,3.35518-.8378,6.946-3.41718,9.09883-.82751.69067-1.78791,1.214-2.584,1.94064a6.983,6.983,0,0,0,1.0213,10.60751c2.6783,1.63421,6.08376,1.19328,9.1751.657a53.6008,53.6008,0,0,0,12.04268-3.14239,19.98676,19.98676,0,0,0,9.49182-7.77438c-3.366-1.87668-5.199-5.81866-5.40339-9.667-.20462-3.85352.85181-8.22637-1.58853-11.21572-2.35011-2.87881-6.77273-2.85778-10.3552-1.86958-1.79806.496-3.53906,1.182-5.33968,1.66734-.91241.24594-3.92633.25243-4.5225.92432C936.89245,272.83354,939.35465,278.444,939.45606,280.38528Z"
        transform="translate(-134.87066 -124)"
        opacity="0.1"
      />
      <circle cx="814.91188" cy="136.23999" r="19.93867" fill="#fbbebe" />
      <path
        d="M886.8218,413.2129a13.61718,13.61718,0,0,1-1.87717,4.42689,20.743,20.743,0,0,0-2.37994,13.60708,14.36,14.36,0,0,0,8.38119,10.59433c1.86648.7348,4.17868.92871,5.71776-.35773-2.66376-3.46526-2.805-8.196-2.64555-12.56387a4.16645,4.16645,0,0,1,.55909-2.33222,1.465,1.465,0,0,1,2.10554-.37388,18.96508,18.96508,0,0,0,1.55746,8.00637c.42167.97095,1.14243,2.04315,2.20063,2.01555,1.51824-.03959,1.92833-2.09584,1.87073-3.6135-.23471-6.18391-.53755-12.62474-3.51873-18.04769-1.09127-1.98509-2.54566-3.84916-2.96057-6.0761a3.60673,3.60673,0,0,0-.76216-2.12659,2.71886,2.71886,0,0,0-1.12172-.52259c-1.71649-.485-5.77921-1.9953-7.19589-.38724C885.23372,407.18563,887.09665,411.15177,886.8218,413.2129Z"
        transform="translate(-134.87066 -124)"
        fill="#fbbebe"
      />
      <path
        d="M916.43317,307.27486c-2.28671-.25724-4.09194,1.8356-5.34485,3.76574a72.847,72.847,0,0,0-9.92327,23.5275c-.966,4.26984-1.57269,8.70471-3.59967,12.58494a12.19614,12.19614,0,0,0-1.17172,2.5607,25.27141,25.27141,0,0,0-.18255,4.12666c-.21139,2.49147-1.683,4.70453-2.17735,7.1556-.29462,1.46073-.23505,2.97307-.49708,4.44-.459,2.5693-1.87083,4.85445-2.774,7.30317-1.59017,4.31135-1.57608,9.04493-2.74616,13.48872a4.66125,4.66125,0,0,1-.92395,2.00452c-.79335.87127-2.06143,1.08417-3.0991,1.64252a6.715,6.715,0,0,0-3.11313,4.59562,19.89489,19.89489,0,0,0-.10611,5.70725l.91669,11.79408c.94457-.39621,1.56143-1.46536,2.34905-2.12021,1.44157-1.19858,3.55868-.92978,5.40338-.59539l2.68729.48713c2.74871.49825,5.73805,1.1332,7.50137,3.29984,1.40093-2.191.6-5.42047,2.75352-6.87832.70049-.4742,1.56781-.63458,2.30645-1.04686a5.1463,5.1463,0,0,0,2.34664-4.13827,15.20022,15.20022,0,0,0-.67507-4.88505c3.452-1.45755,5.59271-4.95239,6.94328-8.4476a69.83731,69.83731,0,0,0,3.21047-13.0302c3.118-17.52708,5.9685-35.17969,6.25146-52.9797a25.43492,25.43492,0,0,0-.97072-8.8301C920.81521,309.99682,919.39174,307.60769,916.43317,307.27486Z"
        transform="translate(-134.87066 -124)"
        fill="#d0cde1"
      />
      <path
        d="M966.70076,288.1867a25.10779,25.10779,0,0,1-12.12691,7.04322,74.89114,74.89114,0,0,1-14.04266,2.06867,8.737,8.737,0,0,1-4.343-.37507c-1.33885-.60664-2.35634-2.192-1.81148-3.55714a3.79384,3.79384,0,0,0,.52409-1.3833c-.02322-1.21453-1.8104-1.31512-2.97092-.95619-7.67552,2.3739-15.03643,7.075-18.57876,14.28616-2.001,4.07346-2.66139,8.65412-3.29579,13.148-1.66857,11.81952-3.33295,23.89629-1.09628,35.62158,1.19267,6.25238,3.487,12.34691,3.63012,18.71042.08021,3.56586-.52135,7.11814-.49327,10.68479a5.36976,5.36976,0,0,0,.945,3.52509c.55219.64131,1.385,1.04588,1.77011,1.79949.644,1.26025-.21679,2.99045.631,4.12365,1.04413,1.3956,3.2246.39352,4.663-.59085a37.10749,37.10749,0,0,1,24.67231-6.21118c10.45016,1.12146,20.834,6.691,30.96885,3.90753a14.92871,14.92871,0,0,1-1.3451-2.41226c-5.0538-16.60635-4.71157-35.16877,2.85171-50.79273,2.58384-5.3376,6.01275-10.42456,7.00253-16.27148a30.98034,30.98034,0,0,0,.09354-8.254c-.53256-5.308-1.79659-10.65993-4.68132-15.14736S972.00948,288.71219,966.70076,288.1867Z"
        transform="translate(-134.87066 -124)"
        fill="#d0cde1"
      />
      <path
        d="M918.46266,418.34444a18.16093,18.16093,0,0,0-1.14811,6.78661,39.715,39.715,0,0,0,.33,6.62638,10.55278,10.55278,0,0,0,1.93691,5.20484,4.7637,4.7637,0,0,0,4.97786,1.76957,5.22174,5.22174,0,0,0,3.00294-3.33908,30.51913,30.51913,0,0,0,.94237-4.54668c.87422-4.52578,3.25062-8.7736,3.292-13.38286a3.7638,3.7638,0,0,0-.2536-1.60379c-.86438-1.89464-5.09934-4.02066-7.16862-3.70171C921.78581,412.55672,919.402,416.15632,918.46266,418.34444Z"
        transform="translate(-134.87066 -124)"
        fill="#fbbebe"
      />
      <path
        d="M976.00177,305.02012c-.39451,3.96432,3.44061,6.9523,4.95665,10.63646a17.90587,17.90587,0,0,1,1.04628,5.35142c1.06527,12.67583.23789,25.4258-.58983,38.11935a71.78078,71.78078,0,0,1-1.56631,12.56373c-2.14025,8.67422-7.40513,16.19349-12.56459,23.48751a15.117,15.117,0,0,1-7.69321,6.34494l-17.70353,8.57605a34.2699,34.2699,0,0,0-6.2885,3.61622,17.20149,17.20149,0,0,0-5.20552,6.77757c-3.43459-1.75511-7.00092-3.33081-10.4355-5.08592-.80388-.41079-1.70281-.94689-1.84156-1.83891-.18618-1.19685,1.06465-2.04207,1.92563-2.894,1.61072-1.59387,2.10752-3.95594,2.97965-6.0474,2.84916-6.83256,10.015-11.20587,12.59977-18.14276.99336-2.66592,1.297-5.67861,3.05839-7.91277a19.622,19.622,0,0,1,3.37776-2.9809,57.45985,57.45985,0,0,0,7.48821-7.66586,12.99729,12.99729,0,0,0,2.44909-3.58615c.77373-1.96871.54209-4.16387.58235-6.27879.1318-6.92378,3.26229-13.381,5.17892-20.03552,1.805-6.26678,2.55811-12.84057,4.92582-18.91712S969.68817,306.65382,976.00177,305.02012Z"
        transform="translate(-134.87066 -124)"
        opacity="0.1"
      />
      <path
        d="M978.30238,305.02012c-.3945,3.96432,3.44061,6.9523,4.95666,10.63646a17.90586,17.90586,0,0,1,1.04627,5.35142c1.06528,12.67583.23789,25.4258-.58982,38.11935a71.78079,71.78079,0,0,1-1.56632,12.56373c-2.14025,8.67422-7.40512,16.19349-12.56459,23.48751a15.11706,15.11706,0,0,1-7.6932,6.34494l-17.70354,8.57605a34.27015,34.27015,0,0,0-6.28849,3.61622,17.20161,17.20161,0,0,0-5.20553,6.77757c-3.43459-1.75511-7.00091-3.33081-10.4355-5.08592-.80387-.41079-1.7028-.94689-1.84156-1.83891-.18617-1.19685,1.06466-2.04207,1.92563-2.894,1.61073-1.59387,2.10752-3.95594,2.97966-6.0474,2.84916-6.83256,10.015-11.20587,12.59976-18.14276.99336-2.66592,1.297-5.67861,3.05839-7.91277a19.62274,19.62274,0,0,1,3.37776-2.9809,57.45931,57.45931,0,0,0,7.48822-7.66586,12.99773,12.99773,0,0,0,2.44909-3.58615c.77373-1.96871.54209-4.16387.58235-6.27879.13179-6.92378,3.26229-13.381,5.17891-20.03552,1.805-6.26678,2.55811-12.84057,4.92582-18.91712S971.98879,306.65382,978.30238,305.02012Z"
        transform="translate(-134.87066 -124)"
        fill="#d0cde1"
      />
      <path
        d="M959.67034,229.41645a28.24459,28.24459,0,0,0-17.70363,3.66516c.78676.02944,1.57736.08313,2.373.17927a28.37213,28.37213,0,0,1,10.89671,52.67367,28.37069,28.37069,0,0,0,4.4339-56.5181Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <path
        d="M968.39877,245.19011a12.96867,12.96867,0,0,1,.22427,9.938,12.6485,12.6485,0,0,0-.46523-1.20992c-3.50723-7.80385-14.3112-11.03408-24.13135-7.21491-5.7851,2.2499-9.93565,6.44481-11.65487,11.10735-2.50049-7.54389,2.57789-16.21158,11.89584-19.83543C954.08757,234.156,964.89155,237.38626,968.39877,245.19011Z"
        transform="translate(-134.87066 -124)"
        fill="#2f2e41"
      />
      <g opacity="0.1">
        <path
          d="M968.4537,254.50905a28.40506,28.40506,0,0,0-18.96113-24.4784,28.35092,28.35092,0,0,0-7.52586,3.051c.78676.02944,1.57736.08313,2.373.17927A28.37877,28.37877,0,0,1,968.4537,254.50905Z"
          transform="translate(-134.87066 -124)"
        />
        <path
          d="M973.05493,233.8035a28.40505,28.40505,0,0,0-18.96113-24.4784,28.35128,28.35128,0,0,0-7.52586,3.051c.78676.02944,1.57736.08313,2.373.17926A28.37877,28.37877,0,0,1,973.05493,233.8035Z"
          transform="translate(-134.87066 -124)"
        />
        <path
          d="M973.17213,202.87715a17.14276,17.14276,0,0,0-11.44324-14.773,17.11069,17.11069,0,0,0-4.54195,1.84129c.47482.01777.952.05017,1.43215.10819A17.1269,17.1269,0,0,1,973.17213,202.87715Z"
          transform="translate(-134.87066 -124)"
        />
        <path
          d="M983.7843,250.66462a28.39508,28.39508,0,0,1-21.98035,29.977,28.54951,28.54951,0,0,1-6.56751,5.29288,28.36866,28.36866,0,0,0,28.54786-35.26993Z"
          transform="translate(-134.87066 -124)"
        />
      </g>
      <line
        x1="760.65583"
        y1="308.46877"
        x2="756.98675"
        y2="197.54087"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        strokeWidth="2"
      />
      <circle cx="756.98675" cy="197.54087" r="15.69535" fill={color} />
      <path
        d="M894.11873,389.908s-3.83519-48.12433-49.58972-41.0024"
        transform="translate(-134.87066 -124)"
        fill={color}
      />
    </svg>
  );
};

Flowers.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Flowers.defaultProps = {
  color: "primary",
  style: {}
};

export default Flowers;
