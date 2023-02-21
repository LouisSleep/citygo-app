import React from "react";
import style from "./CityCard.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
// import UnsplashImg from "../../Services/UnsplashImg";
import { useEffect, useState } from "react";
export default function CityCard(props) {
  const cities = require("cities.json");
  const countryName = require("../../Services/data.json");
  return (
    <div className={style.suggestionSection}>
      <div>
        <p className={style.h5Home}>Some ideas</p>
      </div>
      <div className={style.cardSection}>
        {cities
          .filter(({ country }) => country.includes(props.searchCountryName))
          .slice(5, 15)
          .map(({ country, name }) => {
            return (
              <div className={style.cityCard}>
                <CardWrapper>
                  <div className={style.cityCardContent}>
                    <p>{country}</p>
                    <p>{name}</p>
                  </div>
                </CardWrapper>
              </div>
            );
          })}
      </div>
    </div>
  );
}

;
