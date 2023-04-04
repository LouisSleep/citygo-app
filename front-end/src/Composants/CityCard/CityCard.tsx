import React from "react";
import style from "./CityCard.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/img/travelinfo.png";

interface PropsType {
  searchCountryName: string;
}

interface CardType {
  id: number;
  country: string;
  cityName: string;
  image: string;
}

export default function CityCard(props: PropsType) {
  // const cities = require("cities.json")
  // const countryName = require("../../Services/data.json")

  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/api/city")
      .then((response) => response.json())
      .then((data) => setCity(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const titleOfIdeasSection = "SOME IDEAS";
  const titleOfSuggestionSection = "OUR SUGGESTIONS";

  return (
    <div className={style.suggestionSection}>
      <div>
        <p className={style.h5Home}>
          {props.searchCountryName
            ? titleOfSuggestionSection
            : titleOfIdeasSection}
        </p>
      </div>
      <div className={style.cardSection}>
        {props.searchCountryName
          ? city
              .slice(0, 17)
              .filter(
                ({ country, cityName }: CardType) =>
                  country.includes(props.searchCountryName) ||
                  cityName.includes(props.searchCountryName)
              )

              .map(({ id, country, cityName, image }: CardType) => {
                return (
                  <div className={style.cityCard} id={style.id} key={id}>
                    <button className={style.suggestCard}>
                      <CardWrapper>
                        <div
                          className={style.cityCardContent}
                          onClick={() =>
                            navigate(
                              "/CitySuggest?" +
                                id +
                                "&" +
                                country +
                                "&" +
                                cityName
                            )
                          }
                        >
                          <p id={style.country}>{country}</p>
                          <p id={style.cityName}>{cityName}</p>
                          <img
                            id={style.cityImg}
                            src={
                              "https://source.unsplash.com/1980x1080/?" +
                              country
                            }
                          ></img>
                        </div>
                      </CardWrapper>
                    </button>
                  </div>
                );
              })
          : city
              .slice(0, 8)
              .filter(
                ({ country, cityName }: CardType) =>
                  country.includes(props.searchCountryName) ||
                  cityName.includes(props.searchCountryName)
              )

              .map(({ id, country, cityName, image }: CardType) => {
                return (
                  <div
                    className={style.cityCard}
                    id={"0_" + id + "_city_country"}
                    key={id}
                  >
                    <button
                      className={style.suggestCard}
                      onClick={() =>
                        navigate(
                          "/CitySuggest?" + id + "&" + country + "&" + cityName
                        )
                      }
                    >
                      <CardWrapper>
                        <div className={style.cityCardContent}>
                          <p id={style.cityName}> {cityName}</p>
                          <p id={style.country}>{country}</p>
                          <img
                            id={style.cityImg}
                            src={
                              "https://source.unsplash.com/1980x1080/?" +
                              country
                            }
                          ></img>
                        </div>
                      </CardWrapper>
                    </button>
                  </div>
                );
              })}
      </div>
      <div className={style.CTAButton}>
        {props.searchCountryName ? (
          <button
            className={style.CTAButtonSeeAllCity}
            onClick={() => navigate("/CitySuggest?show-more")}
          >
            SHOW MORE
          </button>
        ) : (
          <button
            className={style.CTAButtonSeeAllCity}
            onClick={() => navigate("/CitySuggest?all-destination")}
          >
            SEE ALL
          </button>
        )}
      </div>
    </div>
  );
}
