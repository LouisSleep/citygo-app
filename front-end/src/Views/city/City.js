import React from "react";
import style from "./City.module.css";
import CityDescription from "../../Composants/CityDescription/CityDescription.tsx";
import CityDescriptionMap from "../../Composants/CityDescriptionMap/CityDescriptionMap.tsx";

export default function City() {
  const queryURLCityParams = new URLSearchParams(window.location.search);
  const countryParams = queryURLCityParams.get("country");
  const cityParams = queryURLCityParams.get("city");
  const apiKeyGoogle_CityDescriptionMap =
    "AIzaSyA2PyvD7spTT0DJhYD6g7EbfLgzBrHBSGQ";
  return (
    <div className={style.cityPage}>
      <div className={style.headCityDescription}>
        <CityDescription city={cityParams} country={countryParams} />
      </div>
      <div className={style.googleMapStatic}>
        <CityDescriptionMap
          apiKey={apiKeyGoogle_CityDescriptionMap}
          city={cityParams}
          country={countryParams}
        />
      </div>
    </div>
  );
}
