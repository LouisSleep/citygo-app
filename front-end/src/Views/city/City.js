import React from "react";
import Iframe from "react-iframe";
import style from "./City.module.css";

import CityDescription from "../../Composants/CityDescription/CityDescription.tsx";

export default function City() {
  const queryURLCityParams = new URLSearchParams(window.location.search);
  const countryParams = queryURLCityParams.get("country");
  const cityParams = queryURLCityParams.get("city");
  return (
    <div className={style.cityPage}>
      <div className={style.headCityDescription}>
        <CityDescription city={cityParams} country={countryParams} />
      </div>
      <div className={style.googleMapStatic}>
        <Iframe
          width="650"
          height="350"
          frameBorder="0"
          style="border:0"
          referrerPolicy="no-referrer-when-downgrade"
          src={
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyA2PyvD7spTT0DJhYD6g7EbfLgzBrHBSGQ&q=" +
            countryParams
          }
          allowFullScreen
        ></Iframe>
      </div>
    </div>
  );
}
