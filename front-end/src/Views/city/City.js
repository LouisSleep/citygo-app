import React from "react";
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
    </div>
  );
}
