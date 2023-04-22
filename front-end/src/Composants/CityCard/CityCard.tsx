import React from "react";
import style from "./CityCard.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import CityNameRandomized from "../../Utils/CityNameRandomized/CityNameRandomized.tsx";
import img from "../../Assets/img/travelinfo.png";

interface PropsType {
  searchCountryName: string;
}

interface CardType {
  id: number;
  country_name: string;
  city_name: string;
  state_name: string;
  image: string;
}

export default function CityCard(props: PropsType) {
  // const cities = require("cities.json")
  // const countryName = require("../../Services/data.json")

  const [city, setCity] = useState([]);
  const [cityRandomized, setCityNameRandomized] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/api/city/allcity")
      .then((response) => response.json())
      .then((data) => setCity(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const titleOfIdeasSection = "Some ideas";
  const titleOfSuggestionSection = "Your research";

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
          ? CityNameRandomized({ city: city })
              .slice(0, 17)
              .filter(
                ({ country_name, city_name }: CardType) =>
                  country_name.includes(props.searchCountryName) ||
                  city_name.includes(props.searchCountryName)
              )

              .map(({ id, country_name, city_name, image }: CardType) => {
                return (
                  <div
                    className={style.cityCard}
                    id={"0_" + id + "_city_country"}
                    key={id}
                  >
                    <button className={style.suggestCard}>
                      <div
                        className={style.cityCardContent}
                        onClick={() =>
                          navigate(
                            "/City?id=" +
                              id +
                              "&country=" +
                              country_name +
                              "&city=" +
                              city_name
                          )
                        }
                      >
                        <img
                          id={style.cityImg}
                          src={
                            "https://source.unsplash.com/1980x1080/?" +
                            city_name
                          }
                        ></img>
                        <p id={style.cityName}>
                          {" "}
                          {city_name}, {country_name}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })
          : CityNameRandomized({ city: city })
              .slice(0, 6)
              .filter(
                ({ country_name, city_name }: CardType) =>
                  country_name.includes(props.searchCountryName) ||
                  city_name.includes(props.searchCountryName)
              )

              .map(({ id, country_name, city_name, image }: CardType) => {
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
                          "/City?id=" +
                            id +
                            "&country=" +
                            country_name +
                            "&city=" +
                            city_name
                        )
                      }
                    >
                      <div className={style.cityCardContent}>
                        <img
                          id={style.cityImg}
                          src={
                            "https://source.unsplash.com/1980x1080/?" +
                            city_name
                          }
                        ></img>
                        <p id={style.cityName}>
                          {" "}
                          {city_name}, {country_name}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
      </div>
      <div className={style.CTAButton}>
        {props.searchCountryName ? (
          <button
            className={style.CTAButtonSeeAllCity}
            onClick={() =>
              navigate("/CitySuggest?show-more" + props.searchCountryName)
            }
          >
            Show more
          </button>
        ) : (
          <button
            className={style.CTAButtonSeeAllCity}
            onClick={() => navigate("/CitySuggest?all-destination&")}
          >
            See all
          </button>
        )}
      </div>
    </div>
  );
}
