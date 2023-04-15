import React from "react";
import style from "./CityDescriptionImage.module.css";

export default function CityDescriptionImage(props) {
  return (
    <div className={style.imageComponent}>
      <div className={style.imgSection}>
        <img
          className={style.countryImg}
          src={"https://source.unsplash.com/1980x1080/?" + props.country}
          alt="countryImage"
        ></img>
      </div>
    </div>
  );
}
