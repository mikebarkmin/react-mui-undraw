import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const Explore = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f486ee6e-de1e-45cd-adbe-5aa880982aa3"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="758"
      viewBox="0 0 1200 758"
    >
      <title>explore</title>
      <path
        d="M1200,0V758h-93.24a1145.82626,1145.82626,0,0,0-280.45-81.82c-174.89-27.79-339.65-14.16-475.33,12.7A1569.71216,1569.71216,0,0,0,107.29,758H0V0Z"
        fill={color}
      />
      <path
        d="M827,658q0,9.18-.69,18.18c-174.89-27.79-339.65-14.16-475.33,12.7A240.26611,240.26611,0,0,1,349,658c0-132,107-239,239-239S827,526,827,658Z"
        fill="#3f3d56"
      />
      <polygon
        points="964.48 705.871 968.591 722.314 950.504 727.247 948.86 709.982 964.48 705.871"
        fill="#fbbebe"
      />
      <polygon
        points="898.709 726.425 898.709 742.045 880.622 745.334 877.334 737.112 883.911 723.136 898.709 726.425"
        fill="#fbbebe"
      />
      <path
        d="M934.88324,556.24308l-2.4664,22.1976,1.64426,42.75095a2.41556,2.41556,0,0,1,2.4664,2.4664c0,2.4664-2.4664,1.64427,0,3.28854a42.71383,42.71383,0,0,0,4.11067,2.4664l26.30828,79.747s-6.57707,8.22133-18.90908,5.75493l-2.4664-8.22133s-4.9328-4.9328-4.9328-7.3992,1.64427-3.28854,0-5.75494-26.30827-52.61655-26.30827-52.61655L902.82,620.3695,899.53149,648.322s6.57707,35.35175,4.9328,51.79442-4.9328,33.70748-4.9328,33.70748l-19.73121-3.28854a13.72713,13.72713,0,0,0-2.4664-7.3992c-2.4664-3.28853-5.75493-2.4664-2.4664-4.9328s7.39921,0,4.11067-3.28854a10.18491,10.18491,0,0,1-3.28853-6.57707v-2.4664l-4.93281-63.30428-9.04347-83.0355Z"
        fill="#2f2e41"
      />
      <circle cx="878.97815" cy="384.41715" r="22.19761" fill="#fbbebe" />
      <polygon
        points="898.298 384.828 907.342 407.026 885.966 422.646 872.812 399.627 898.298 384.828"
        fill="#fbbebe"
      />
      <path
        d="M899.53149,401.68195l8.22134-4.11066,4.9328,11.50987s32.06321,9.8656,29.59681,55.08295-8.22134,62.48215-8.22134,62.48215,13.97627,29.59682,5.75494,32.88535-78.1027,15.62054-79.747,4.11067,5.75493-78.92483,5.75493-78.92483-2.4664-48.50588,18.08694-58.37149l-4.11067-9.04347Z"
        fill="#d0cde1"
      />
      <path
        d="M854.31414,561.17588s-18.90907,19.7312-8.22133,24.664,17.2648-22.19761,17.2648-22.19761Z"
        fill="#fbbebe"
      />
      <path
        d="M892.95442,737.93461l9.04347-3.28854s9.86561,22.19761,1.64427,22.19761H882.26669s-12.332-4.11067-18.90908-4.11067-18.90907-12.332-9.8656-18.08694,20.55334-4.11067,20.55334-4.11067l3.28853-7.3992,4.11067,11.50987S886.37735,742.86741,892.95442,737.93461Z"
        fill="#2f2e41"
      />
      <path
        d="M959.54725,719.84767s5.14833-3.24856,7.918-2.03535,4.414,14.36735,4.414,14.36735,8.22134,9.8656-9.8656,11.50987-22.19761-1.64427-23.84188-6.57707,1.64427-9.8656,1.64427-9.8656l4.9328-1.64427s5.75494-4.11067,4.11067-5.75493,0-4.93281,0-4.93281S954.61444,726.42473,959.54725,719.84767Z"
        fill="#2f2e41"
      />
      <path
        d="M886.57062,384.06144a10.893,10.893,0,0,0-.48282-2.11225c-1.193-2.503-5.848-1.77242-6.67746-4.41822-.16233-.51781-.12838-1.08108-.28745-1.59991a3.24611,3.24611,0,0,0-3.3439-1.91561,18.06369,18.06369,0,0,0-4.008,1.032c-3.25223.923-6.7123.57066-10.07377.21084a10.1355,10.1355,0,0,1-4.30111-1.11969,3.46593,3.46593,0,0,1-1.72678-3.78049c.44433-1.36237,1.93519-2.111,2.60552-3.37752,1.06443-2.01115-.23674-4.60862.62678-6.71387,1.38521-3.37715,6.6274-2.699,9.29069-5.19521.64646-.60589,1.112-1.38044,1.7316-2.01376,1.83835-1.879,4.7416-2.24271,7.35749-1.98349s5.18645,1.02737,7.81474.98089c2.49256-.04408,5.10535-.80312,7.40205.16638a10.557,10.557,0,0,1,3.477,2.8564l5.89084,6.46079a7.26046,7.26046,0,0,1,1.82077,2.74255c.35442,1.23792.0282,2.567.1794,3.84574.34483,2.91636,3.07512,5.11915,3.44351,8.03263a10.44516,10.44516,0,0,1-.12993,2.70526l-.82518,6.0841a4.5276,4.5276,0,0,1-.46492,1.70489c-.24.41-.60279.73378-.87294,1.12454-.76276,1.10331-.69312,2.5617-1.07219,3.84832s-1.73827,2.55973-2.92728,1.93965c-.7757-.40453-1.28891-3.74994-2.23121-4.6185-1.31253-1.20979-1.99822-1.06069-3.61828-1.04022C891.92322,387.94873,887.60881,388.22692,886.57062,384.06144Z"
        fill="#2f2e41"
      />
      <path
        d="M890.488,432.1009s24.664,9.8656,17.26481,32.06321-27.13041,90.4347-27.13041,90.4347l-11.50987,5.75493-3.28854,9.04347-15.62054-5.75493,2.4664-12.332s.82214-.82213.82214-4.11066-3.28854-4.11067.82213-4.11067,4.11067-4.11067,4.11067-4.11067l14.79841-92.079S873.22322,431.27876,890.488,432.1009Z"
        fill="#d0cde1"
      />
      <polygon
        points="908.986 468.686 883.5 555.832 872.812 566.52 878.978 555.421 908.986 468.686"
        opacity="0.1"
      />
      <path
        d="M248.608,442.38193a7.83243,7.83243,0,0,1,7.68317-6.005c5.20129.05747,11.495,1.34515,10.07737,7.48807-2.34543,10.16353-19.15434,54.33578-19.15434,54.33578l41.045,5.08176s32.0542-4.69086,21.89067,6.25448-23.45429,4.69086-23.45429,4.69086-52.77216,1.418-52.77216-7.4272c0-2.34543.436-5.48147,2.1169-12.4343Z"
        fill="#a0616a"
      />
      <circle cx="279.65931" cy="408.68359" r="20.32705" fill="#a0616a" />
      <path
        d="M265.97764,420.01983s1.56362,15.6362-3.90905,21.89067h29.70877s-7.03629-6.25447-1.56362-18.76343S265.97764,420.01983,265.97764,420.01983Z"
        fill="#a0616a"
      />
      <path
        d="M246.4324,479.43737c.555,2.43924,1.11011,4.58922,1.65743,6.46554v.00782c2.07181,7.15358,3.97938,10.4841,5.10524,11.96168a4.62853,4.62853,0,0,0,1.05542,1.11021l47.6904-13.29077s-1.56362-16.418-5.47267-20.327-2.34543-25.01792-2.34543-25.01792l-12.509-3.909s-11.60986-.39091-19.58438-.33618c-2.50175.00778-4.6439.06251-5.95729.18763a7.73957,7.73957,0,0,0-1.03987.14855C251.90507,437.21965,242.52335,462.23756,246.4324,479.43737Z"
        fill="#a0616a"
      />
      <path
        d="M267.93217,486.86456s10.55443-48.08129,14.46348-49.64491c3.70133-1.48054,10.94533,2.34543,10.94533,2.34543s-13.05553-7.4272-19.62308,47.29948Z"
        fill="#2f2e41"
      />
      <path
        d="M248.08983,485.90291v.00782c2.07181,7.15358,3.97938,10.4841,5.10524,11.96168,2.73633-15.59706,8.381-48.98818,8.83439-61.77075-2.50175.00778-4.6439.06251-5.95729.18763C255.55606,445.9837,251.49851,462.71445,248.08983,485.90291Z"
        fill="#2f2e41"
      />
      <path
        d="M300.37727,476.31013s-6.64538,9.77262-12.118,8.99082-36.13448,2.5709-37.61248,7.93083l8.68552,30.37784V534.555s-11.10639,8.58221-12.22424,32.23736a80.35919,80.35919,0,0,0,3.87378,28.2529l3.6596,11.43624s-44.95406,114.53512-21.49977,120.00779,47.29949,15.24529,48.0813.39091,5.47267-115.70785,5.47267-115.70785-4.69086,113.36242,13.29076,115.70785,52.38126,18.76343,53.94488-.78181-39.8723-180.598-39.8723-180.598.78181-24.23611-12.509-33.61782l-3.12723-12.509S307.41356,481.001,300.37727,476.31013Z"
        fill="#2f2e41"
      />
      <polygon
        points="297.25 457.547 301.55 479.828 301.55 482.422 294.847 461.451 297.25 457.547"
        fill="#2f2e41"
      />
      <path
        d="M264.20078,714.69736s-1.86488,20.68932,4.13572,22.61872,35.34484,1.45376,26.2275,12.20193c-6.64621,7.835-58.93784,2.62017-56.67765-.50007,4.15309-5.73339,12.56576-38.1301,12.56576-38.1301Z"
        fill="#2f2e41"
      />
      <path
        d="M331.43642,716.261s-1.86488,20.68932,4.13571,22.61872,33.81755.32593,26.22752,12.2019c-3.62018,5.66443-56.14584-.033-56.67767-.5-5.31958-4.6715,12.56576-38.13014,12.56576-38.13014Z"
        fill="#2f2e41"
      />
      <path
        d="M283.78945,444.72736a7.83243,7.83243,0,0,1,7.68317-6.005c5.20129.05747,11.495,1.34515,10.07736,7.48807-2.34543,10.16352-13.29076,57.85392-13.29076,57.85392l35.18144,1.56362s32.0542-4.69086,21.89067,6.25448-23.45429,4.69085-23.45429,4.69085-38.69958,5.86358-44.95406-.3909q-.09382-.09381-.18658-.18565a20.39042,20.39042,0,0,1-5.51463-19.28494Z"
        fill="#a0616a"
      />
      <path
        d="M272.22857,376.35741h0c12.9853,0,23.512,14.58967,23.512,32.58694v22.86573h-5.631l-3.26-8.47193.815,8.47193H251.47031l-2.96369-7.70176.74091,7.70176h-4.07507V413.85639C245.17246,393.1463,257.28589,376.35741,272.22857,376.35741Z"
        fill="#2f2e41"
      />
      <path
        d="M269.75676,381.425a15.39974,15.39974,0,0,1,12.15084-6.20066h.57649c11.11514,0,20.1257,10.05792,20.1257,22.465v0H298.8854l-.60148-4.57826-.88189,4.57826H275.31288l-1.85066-3.87329.46268,3.87329h-4.34557q-3.0417,15.10582,8.74082,30.21164h-7.40257l-3.70127-7.74657.92531,7.74657H254.03051l-2.776-17.81717C251.25455,396.74045,259.00746,385.4255,269.75676,381.425Z"
        fill="#2f2e41"
      />
      <path
        d="M1003.36035,373.1658l-26.28613-21.56543,21.56543-26.28613,26.28613,21.56543ZM979.88867,351.323l23.19434,19.02832,19.02832-23.19434L998.917,328.12869Z"
        fill="#3f3d56"
      />
      <path
        d="M109.36035,495.1658,83.07422,473.60037l21.56543-26.28613,26.28613,21.56543ZM85.88867,473.323,109.083,492.35135,128.11133,469.157,104.917,450.12869Z"
        fill="#3f3d56"
      />
      <rect x="97.5" y="64" width="1005" height="2" fill="#3f3d56" />
      <path
        d="M189.89593,308.13454a12,12,0,1,1,12-12A12.01344,12.01344,0,0,1,189.89593,308.13454Zm0-22a10,10,0,1,0,10,10A10.01146,10.01146,0,0,0,189.89593,286.13454Z"
        fill="#3f3d56"
      />
      <path
        d="M1083.89593,150.13454a12,12,0,1,1,12,12A12.01344,12.01344,0,0,1,1083.89593,150.13454Zm2,0a10,10,0,1,0,10-10A10.01146,10.01146,0,0,0,1085.89593,150.13454Z"
        fill="#3f3d56"
      />
      <path
        d="M1024.89593,552.13454a12,12,0,1,1,12-12A12.01344,12.01344,0,0,1,1024.89593,552.13454Zm0-22a10,10,0,1,0,10,10A10.01146,10.01146,0,0,0,1024.89593,530.13454Z"
        fill="#3f3d56"
      />
      <path d="M157,173H131V147h26Zm-24-2h22V149H133Z" fill="#3f3d56" />
      <rect
        x="1112.14759"
        y="399.36947"
        width="2"
        height="357.65039"
        fill="#3f3d56"
      />
      <ellipse cx="1113.53333" cy="637.36947" rx="39" ry="89" fill="#3f3d56" />
      <ellipse cx="1113.53333" cy="434.36947" rx="39" ry="89" fill="#3f3d56" />
      <path
        d="M1114.49134,361.65658l-1.916-.57422c.1211-.4043,11.87891-40.69678-7.42724-66.63526-10.9043-14.64941-29.61573-22.07763-55.61475-22.07763v-2c26.66992,0,45.92285,7.70166,57.22461,22.89111C1126.66175,320.012,1114.61536,361.24349,1114.49134,361.65658Z"
        fill="#3f3d56"
      />
      <circle cx="1049.53333" cy="271.36947" r="25" fill="#d0cde1" />
    </svg>
  );
};

Explore.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

Explore.defaultProps = {
  color: "primary",
  style: {}
};

export default Explore;
