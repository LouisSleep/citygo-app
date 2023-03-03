import React from "react"
import style from "./CityCard.module.css"
import CardWrapper from "../CardWrapper/CardWrapper"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import img from "../../Assets/img/travelinfo.png"
// import UnsplashImg from "../../Services/UnsplashImg"

interface PropsType {
  searchCountryName: string
}

interface CardType {
  id: number
  country: string
  cityName: string
  image: string
}

export default function CityCard(props: PropsType) {
  // const cities = require("cities.json")
  // const countryName = require("../../Services/data.json")

  const [city, setCity] = useState([])
  const navigate = useNavigate()

  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/api/city")
      .then((response) => response.json())
      .then((data) => setCity(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const titleOfIdeasSection = "Some Ideas"
  const titleOfSuggestionSection = "Our Suggestions"

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
                  <div className={style.cityCard} key={id}>
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
                          <p>{country}</p>
                          <p>{cityName}</p>
                          <img src={img}></img>
                        </div>
                      </CardWrapper>
                    </button>
                  </div>
                )
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
                  <div className={style.cityCard} key={id}>
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
                          <p>{country}</p>
                          <p>{cityName}</p>
                          <img src={img}></img>
                        </div>
                      </CardWrapper>
                    </button>
                  </div>
                )
              })}
      </div>
      <div className={style.CTAButton}>
        {props.searchCountryName ? (
          <button className={style.CTAButtonSeeAllCity}>SHOW MORE</button>
        ) : (
          <button className={style.CTAButtonSeeAllCity}>SEE ALL</button>
        )}
      </div>
    </div>
  )
}
