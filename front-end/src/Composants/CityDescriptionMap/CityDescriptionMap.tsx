import React from "react";
import Iframe from "react-iframe";
import style from "./CityDescriptionMap.module.css";

interface IframeHTMLAttributes {
  allow?: string;
  allowFullScreen?: boolean;
  allowTransparency?: boolean;
  frameBorder?: number | string;
  height?: number | string;
  marginHeight?: number;
  marginWidth?: number;
  name?: string;
  sandbox?: string;
  scrolling?: string;
  seamless?: boolean;
  src?: string;
  srcDoc?: string;
  width?: number | string;
}

export default function CityDescriptionMap(props) {
  const frameBorder = 0;
  return (
    <div className={style.googleMapIframe}>
      <Iframe
        height="350"
        frameBorder={frameBorder}
        referrerpolicy="no-referrer-when-downgrade"
        className={style.iframe}
        src={
          "https://www.google.com/maps/embed/v1/place?key=" +
          props.apiKey +
          "&q=" +
          props.country
        }
        url=""
        allowFullScreen
      ></Iframe>
    </div>
  );
}
