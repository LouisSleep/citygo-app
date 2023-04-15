import React from "react";
import style from "./CityDescription.module.css";
import CityDescriptionImage from "./CityDescriptionImage/CityDescriptionImage";
import CityDescriptionText from "./CityDescriptionText/CityDescriptionText";

interface City {
  city: string;
  country: string;
}

export default function CityDescription(props: City) {
  return (
    <div className={style.CityHeader}>
      <div className={style.CityImage}>
        <CityDescriptionImage country={props.country} />
      </div>
      <div className={style.CityText}>
        <CityDescriptionText city={props.city} country={props.country} />
      </div>
    </div>
  );
}
