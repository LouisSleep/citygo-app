import React from "react";
import NavBar from "../../Composants/NavBar/NavBar";
import style from "./Home.module.css";
import SearchBar from "../../Composants/SearchBar/SearchBar.js";
import CardWrapper from "../../Composants/CardWrapper/CardWrapper.js";
import CityCard from "../../Composants/CityCard/CityCard";
import { useState } from "react";



export default function Home() {
  const [searchValue, setSearchValue] = useState("FR");
  
  return (
    <>
      <div className={style.homeSection}>
        <div className={style.topHomeSection}>
          <div className={style.titleSection}>
            <p className={style.h1Home}> Travel wherever you want...</p>
            {/* <p className={style.h5Home}>Choose your way.</p> */}
            <div className={style.searchSection}>
              <SearchBar
                inputSearch={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <CityCard searchCountryName={searchValue} />
        </div>
      </div>
    </>
  );
}
