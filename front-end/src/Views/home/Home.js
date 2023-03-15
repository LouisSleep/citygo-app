import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import style from "./Home.module.css";
import SearchBar from "../../Composants/SearchBar/SearchBar";
import CardWrapper from "../../Composants/CardWrapper/CardWrapper";
import InformationCard from "../../Composants/InformationCard/InformationCard";
import CityCard from "../../Composants/CityCard/CityCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [userValue, setUserValue] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserValue(user["user"]["firstName"]);
    }
  }, []);

  console.log(userValue);
  return (
    <>
      <div className={style.homeSection}>
        <div className={style.topHomeSection}>
          <div className={style.titleSection}>
            <p className={style.h1Home}> Travel wherever you want...</p>
            <p className={style.h5Home}>
              Find your way <span className={style.userValue}>{userValue}</span>
            </p>
            <div className={style.searchSection}>
              <SearchBar
                inputSearch={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={style.suggestionSection}>
          <CityCard searchCountryName={searchValue} />
        </div>
        <div className={style.informationSection}>
          <InformationCard />
        </div>
      </div>
    </>
  );
}
