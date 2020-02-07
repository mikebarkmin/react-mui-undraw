import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const JasonMask = ({ color, style }) => {
  const theme = useTheme();
  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      style={{ width: "100%", height: "auto", ...style }}
      id="f557f327-f18a-4117-b611-648a13f47aad"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1156"
      height="853.87"
      viewBox="0 0 1156 853.87"
    >
      <defs>
        <radialGradient
          id="aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
          cx="513.55"
          cy="208.68"
          r="10.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#212149" />
          <stop offset="0.27" stop-color="#201f45" stop-opacity="0.95" />
          <stop offset="0.63" stop-color="#1c183b" stop-opacity="0.81" />
          <stop offset="1" stop-color="#170f2c" stop-opacity="0.6" />
        </radialGradient>
        <radialGradient
          id="f75c1103-dbdd-40e9-8416-4e642e18aa3d"
          cx="517.23"
          cy="248.39"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="ec36dd4b-0cc3-4d86-81db-93869b0f2b53"
          cx="513.55"
          cy="283.69"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="a08c9c89-6c7b-4448-9345-21cfa6153722"
          cx="491.25"
          cy="277.34"
          r="10.92"
          gradientTransform="translate(85.29 -23.07) scale(0.73 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="f46b9fb5-5ad5-4ca4-9cd1-b2bf013e2a18"
          cx="491.25"
          cy="314.84"
          r="10.92"
          gradientTransform="translate(85.29 -23.07) scale(0.73 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="fc3266a2-4bdb-4538-8728-bd62083ffd21"
          cx="536.66"
          cy="331.02"
          r="10.92"
          gradientTransform="translate(205.65 -23.07) scale(0.36 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="fa09a408-e8f2-48b5-9115-b1d0155c2f4f"
          cx="504.16"
          cy="378.09"
          r="10.92"
          gradientTransform="translate(205.65 -23.07) scale(0.36 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="fca221e4-dacf-4335-8ab4-56b46fb39daf"
          cx="445.26"
          cy="533.25"
          r="10.92"
          gradientTransform="translate(205.65 -23.07) scale(0.36 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="f2997733-82f7-43b3-b4a2-9aeda5f60e4b"
          cx="481.82"
          cy="601.64"
          r="10.92"
          gradientTransform="translate(205.65 -23.07) scale(0.36 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="ec2ecb09-d4ef-422b-ae79-01558496b342"
          cx="569.16"
          cy="670.77"
          r="10.92"
          gradientTransform="translate(205.65 -23.07) scale(0.36 1)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="af02bd59-7446-488a-b8fc-bdc2c13ac0e6"
          cx="422.57"
          cy="533.25"
          r="10.92"
          gradientTransform="matrix(-0.36, 0, 0, 1, 959.68, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b5addac3-d630-47be-b564-26fd2b071e44"
          cx="459.13"
          cy="601.64"
          r="10.92"
          gradientTransform="matrix(-0.36, 0, 0, 1, 959.68, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="e2b10429-1806-4563-a497-43955a3c409a"
          cx="546.46"
          cy="670.77"
          r="10.92"
          gradientTransform="matrix(-0.36, 0, 0, 1, 959.68, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b449913b-a3bd-4b7e-b74e-3a16dce6057b"
          cx="480.03"
          cy="277.34"
          r="10.92"
          gradientTransform="matrix(-0.73, 0, 0, 1, 1080.03, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="bce6c7e1-aabc-4c98-abcc-29250c8d974d"
          cx="480.03"
          cy="314.84"
          r="10.92"
          gradientTransform="matrix(-0.73, 0, 0, 1, 1080.03, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b10cd907-f59d-4772-b6f8-ffb2d28c9e39"
          cx="513.96"
          cy="331.02"
          r="10.92"
          gradientTransform="matrix(-0.36, 0, 0, 1, 959.68, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="a28a0d57-7e7e-49a6-bfc5-af83b54b7f1a"
          cx="481.47"
          cy="378.09"
          r="10.92"
          gradientTransform="matrix(-0.36, 0, 0, 1, 959.68, -23.07)"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b67486d2-28a2-4f82-9a1f-909f0b144cbf"
          cx="558.41"
          cy="294.72"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="f76811de-0b5d-4efb-a2df-9fe3ccd8d456"
          cx="653.27"
          cy="285.89"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b7b52b38-6a72-4f89-b212-7aab327f5f79"
          cx="653.27"
          cy="217.5"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="f0303255-e146-4596-9c51-c51b560eb4fb"
          cx="610.62"
          cy="294.72"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b13687c7-cd46-4f44-ab29-b845786a55b0"
          cx="653.27"
          cy="252.07"
          r="10.92"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="e4017582-7cc3-4ac4-be99-2b4943951817"
          cx="551.26"
          cy="647.79"
          r="11.66"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="ad01df78-22d8-4ee7-8853-2fc7c66e3b71"
          cx="479.24"
          cy="650.56"
          r="11.43"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="e5a5dc48-fbd4-48c2-9cbf-92bd2991bcf4"
          cx="507.5"
          cy="647.79"
          r="11.43"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="e602db05-3e75-4048-afe7-67e8fbe7b2d8"
          cx="547.94"
          cy="692.66"
          r="11.66"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="a676eb09-aa41-45f8-978f-be6c5f3689b5"
          cx="614.98"
          cy="692.66"
          r="11.43"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="a937236e-0e06-4591-b47e-3dd295b2bcb0"
          cx="614.98"
          cy="724.8"
          r="12.53"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="b39e97d1-ca86-432b-bd97-52352e7b3773"
          cx="551.26"
          cy="724.8"
          r="12.21"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="fc474cf9-3058-4652-a3eb-1b903cb1f5bb"
          cx="614.98"
          cy="647.79"
          r="11.43"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="ad9ade79-bd55-4960-b46c-c177ee8625dc"
          cx="659.3"
          cy="650.56"
          r="11.66"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
        <radialGradient
          id="e263ef8a-1c9f-4b4d-bc1b-0aff5b6a28d8"
          cx="687.55"
          cy="664.41"
          r="11.98"
          xlink:href="#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20"
        />
      </defs>
      <title>jason mask</title>
      <path
        d="M693.65,163.85C619.54,161,549,134.6,481.55,105.72s-134.16-60.9-206.49-76.2c-46.53-9.85-99.73-11.24-137.22,16.29C101.77,72.3,90.11,118,83.85,160.46c-4.72,31.92-7.49,65.52,5.43,95.41,9,20.75,24.89,38.19,35.91,58.06,38.32,69.15,11.23,154.43-30.3,222-19.48,31.68-42.07,61.89-57.11,95.61S15.8,703.84,29,738.24c13,34.09,44.1,59.7,77.75,77.71,68.35,36.58,148.89,47,227.43,53,173.85,13.12,348.63,7.44,522.94,1.75,64.51-2.11,129.3-4.24,192.76-15.25,35.24-6.12,71.63-15.82,97.21-39.24,32.48-29.74,40.53-80.09,18.77-117.38-36.51-62.54-137.44-78.07-163-145.19-14-37,.38-78.1,20.79-112.37,43.79-73.5,117.18-138,121-222,2.66-57.71-32.62-115.5-87.17-142.8-57.18-28.62-136.47-25-178.66,22.36C835.42,147.59,759.08,166.35,693.65,163.85Z"
        transform="translate(-22 -23.07)"
        fill={color}
      />
      <path
        d="M800.22,486.3V414.24h36c-24.29-121.53-100.55-214.5-194.83-233.3v50.92H569.31V181.24c-93.61,19.47-169.2,112.1-193.36,233h34.52V486.3H368c-.09,3.67-.16,7.34-.16,11,0,176.68,106.68,319.9,238.27,319.9S844.34,674,844.34,497.33c0-3.69-.06-7.36-.15-11Z"
        transform="translate(-22 -23.07)"
        fill="#fff"
      />
      <path
        d="M558.28,426.74a58.83,58.83,0,0,1-117.66,0c0-32.49,26.34-48.54,58.83-48.54S558.28,394.25,558.28,426.74Z"
        transform="translate(-22 -23.07)"
        opacity="0.1"
      />
      <path
        d="M551.66,426.74a52.22,52.22,0,0,1-104.43,0c0-28.84,23.38-41.92,52.22-41.92S551.66,397.9,551.66,426.74Z"
        transform="translate(-22 -23.07)"
        fill={color}
      />
      <circle
        cx="513.55"
        cy="208.68"
        r="10.92"
        fill="url(#aa9bbbd4-ef44-4ca3-807a-29cf227bcd20)"
      />
      <path
        d="M652.41,426.74a58.83,58.83,0,0,0,117.66,0c0-32.49-26.34-48.54-58.83-48.54S652.41,394.25,652.41,426.74Z"
        transform="translate(-22 -23.07)"
        opacity="0.1"
      />
      <path
        d="M659,426.74a52.21,52.21,0,1,0,104.42,0c0-28.84-23.38-41.92-52.21-41.92S659,397.9,659,426.74Z"
        transform="translate(-22 -23.07)"
        fill={color}
      />
      <circle
        cx="517.23"
        cy="248.39"
        r="10.92"
        fill="url(#f75c1103-dbdd-40e9-8416-4e642e18aa3d)"
      />
      <circle cx="513.4" cy="208.91" r="8.74" fill={color} />
      <circle cx="516.64" cy="248.09" r="8.74" fill={color} />
      <circle
        cx="513.55"
        cy="283.69"
        r="10.92"
        fill="url(#ec36dd4b-0cc3-4d86-81db-93869b0f2b53)"
      />
      <circle cx="513.4" cy="283.39" r="8.74" fill={color} />
      <ellipse
        cx="445.18"
        cy="254.27"
        rx="8"
        ry="10.92"
        fill="url(#a08c9c89-6c7b-4448-9345-21cfa6153722)"
      />
      <ellipse cx="445.07" cy="253.97" rx="6.41" ry="8.74" fill={color} />
      <ellipse
        cx="445.18"
        cy="291.78"
        rx="8"
        ry="10.92"
        fill="url(#f46b9fb5-5ad5-4ca4-9cd1-b2bf013e2a18)"
      />
      <ellipse cx="445.07" cy="291.47" rx="6.41" ry="8.74" fill={color} />
      <ellipse
        cx="399.96"
        cy="307.96"
        rx="3.95"
        ry="10.92"
        fill="url(#fc3266a2-4bdb-4538-8728-bd62083ffd21)"
      />
      <ellipse cx="399.9" cy="307.65" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="388.19"
        cy="355.02"
        rx="3.95"
        ry="10.92"
        fill="url(#fa09a408-e8f2-48b5-9115-b1d0155c2f4f)"
      />
      <ellipse cx="388.14" cy="354.72" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="366.86"
        cy="510.19"
        rx="3.95"
        ry="10.92"
        fill="url(#fca221e4-dacf-4335-8ab4-56b46fb39daf)"
      />
      <ellipse cx="366.81" cy="509.88" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="380.1"
        cy="578.58"
        rx="3.95"
        ry="10.92"
        fill="url(#f2997733-82f7-43b3-b4a2-9aeda5f60e4b)"
      />
      <ellipse cx="380.05" cy="578.27" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="411.72"
        cy="647.7"
        rx="3.95"
        ry="10.92"
        fill="url(#ec2ecb09-d4ef-422b-ae79-01558496b342)"
      />
      <ellipse cx="411.67" cy="647.4" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="806.68"
        cy="510.19"
        rx="3.95"
        ry="10.92"
        fill="url(#af02bd59-7446-488a-b8fc-bdc2c13ac0e6)"
      />
      <ellipse cx="806.73" cy="509.88" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="793.44"
        cy="578.58"
        rx="3.95"
        ry="10.92"
        fill="url(#b5addac3-d630-47be-b564-26fd2b071e44)"
      />
      <ellipse cx="793.49" cy="578.27" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="761.82"
        cy="647.7"
        rx="3.95"
        ry="10.92"
        fill="url(#e2b10429-1806-4563-a497-43955a3c409a)"
      />
      <ellipse cx="761.87" cy="647.4" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="728.36"
        cy="254.27"
        rx="8"
        ry="10.92"
        fill="url(#b449913b-a3bd-4b7e-b74e-3a16dce6057b)"
      />
      <ellipse cx="728.47" cy="253.97" rx="6.41" ry="8.74" fill={color} />
      <ellipse
        cx="728.36"
        cy="291.78"
        rx="8"
        ry="10.92"
        fill="url(#bce6c7e1-aabc-4c98-abcc-29250c8d974d)"
      />
      <ellipse cx="728.47" cy="291.47" rx="6.41" ry="8.74" fill={color} />
      <ellipse
        cx="773.58"
        cy="307.96"
        rx="3.95"
        ry="10.92"
        fill="url(#b10cd907-f59d-4772-b6f8-ffb2d28c9e39)"
      />
      <ellipse cx="773.64" cy="307.65" rx="3.17" ry="8.74" fill={color} />
      <ellipse
        cx="785.35"
        cy="355.02"
        rx="3.95"
        ry="10.92"
        fill="url(#a28a0d57-7e7e-49a6-bfc5-af83b54b7f1a)"
      />
      <ellipse cx="785.4" cy="354.72" rx="3.17" ry="8.74" fill={color} />
      <circle
        cx="558.41"
        cy="294.72"
        r="10.92"
        fill="url(#b67486d2-28a2-4f82-9a1f-909f0b144cbf)"
      />
      <circle
        cx="653.27"
        cy="285.89"
        r="10.92"
        fill="url(#f76811de-0b5d-4efb-a2df-9fe3ccd8d456)"
      />
      <circle
        cx="653.27"
        cy="217.5"
        r="10.92"
        fill="url(#b7b52b38-6a72-4f89-b212-7aab327f5f79)"
      />
      <circle
        cx="610.62"
        cy="294.72"
        r="10.92"
        fill="url(#f0303255-e146-4596-9c51-c51b560eb4fb)"
      />
      <circle
        cx="653.27"
        cy="252.07"
        r="10.92"
        fill="url(#b13687c7-cd46-4f44-ab29-b845786a55b0)"
      />
      <circle cx="558.41" cy="294.72" r="8.74" fill={color} />
      <circle cx="610.87" cy="294.72" r="8.74" fill={color} />
      <circle cx="653.29" cy="285.98" r="8.74" fill={color} />
      <circle cx="653.29" cy="252.3" r="8.74" fill={color} />
      <circle cx="653.29" cy="217.65" r="8.74" fill={color} />
      <polygon
        points="517.08 320.57 585.25 332.76 649.61 326.67 586.77 363.23 517.08 320.57"
        opacity="0.1"
      />
      <polygon
        points="517.08 319.1 585.25 331.29 649.61 325.19 586.77 361.75 517.08 319.1"
        fill="#ee1559"
      />
      <circle
        cx="551.26"
        cy="647.79"
        r="11.66"
        fill="url(#e4017582-7cc3-4ac4-be99-2b4943951817)"
      />
      <circle
        cx="479.24"
        cy="650.56"
        r="11.43"
        fill="url(#ad01df78-22d8-4ee7-8853-2fc7c66e3b71)"
      />
      <circle
        cx="507.5"
        cy="647.79"
        r="11.43"
        fill="url(#e5a5dc48-fbd4-48c2-9cbf-92bd2991bcf4)"
      />
      <circle
        cx="547.94"
        cy="692.66"
        r="11.66"
        fill="url(#e602db05-3e75-4048-afe7-67e8fbe7b2d8)"
      />
      <circle
        cx="614.98"
        cy="692.66"
        r="11.43"
        fill="url(#a676eb09-aa41-45f8-978f-be6c5f3689b5)"
      />
      <circle
        cx="614.98"
        cy="724.8"
        r="12.53"
        fill="url(#a937236e-0e06-4591-b47e-3dd295b2bcb0)"
      />
      <circle
        cx="551.26"
        cy="724.8"
        r="12.21"
        fill="url(#b39e97d1-ca86-432b-bd97-52352e7b3773)"
      />
      <circle
        cx="614.98"
        cy="647.79"
        r="11.43"
        fill="url(#fc474cf9-3058-4652-a3eb-1b903cb1f5bb)"
      />
      <circle
        cx="659.3"
        cy="650.56"
        r="11.66"
        fill="url(#ad9ade79-bd55-4960-b46c-c177ee8625dc)"
      />
      <circle
        cx="687.55"
        cy="664.41"
        r="11.98"
        fill="url(#e263ef8a-1c9f-4b4d-bc1b-0aff5b6a28d8)"
      />
      <circle cx="551.26" cy="647.79" r="10.2" fill={color} />
      <circle cx="507.34" cy="647.79" r="10.2" fill={color} />
      <circle cx="479.49" cy="650.53" r="10.2" fill={color} />
      <circle cx="615.19" cy="647.79" r="10.2" fill={color} />
      <circle cx="659.12" cy="650.53" r="10.2" fill={color} />
      <circle cx="687.35" cy="664.65" r="10.2" fill={color} />
      <circle cx="615.19" cy="692.5" r="10.2" fill={color} />
      <circle cx="615.19" cy="724.66" r="10.2" fill={color} />
      <circle cx="547.73" cy="692.5" r="10.2" fill={color} />
      <circle cx="551.26" cy="724.66" r="10.2" fill={color} />
      <path
        d="M447.63,592.61l19.6,15.77s20.89-72,26-75C493.23,533.37,448.91,584.09,447.63,592.61Z"
        transform="translate(-22 -23.07)"
        opacity="0.1"
      />
      <path
        d="M446.89,591.87l19.61,15.77s20.88-72,26-75C492.49,532.63,448.17,583.35,446.89,591.87Z"
        transform="translate(-22 -23.07)"
        fill="#ee1559"
      />
      <path
        d="M765.26,587.46l-19.6,15.77s-20.88-72-26-75C719.66,528.22,764,578.94,765.26,587.46Z"
        transform="translate(-22 -23.07)"
        opacity="0.1"
      />
      <path
        d="M766,586l-19.61,15.77s-20.88-72-26-75C720.4,526.75,764.72,577.47,766,586Z"
        transform="translate(-22 -23.07)"
        fill="#ee1559"
      />
    </svg>
  );
};

JasonMask.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
};

JasonMask.defaultProps = {
  color: "primary",
  style: {}
};

export default JasonMask;
