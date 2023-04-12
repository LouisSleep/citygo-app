import React from "react";
import InformationCardWrapper from "../InformationCardWrapper/InformationCardWrapper";
import style from "./InformationCard.module.css";
import image1 from "../../Assets/img/informative-card-n1.png";
import image2 from "../../Assets/img/informative-card-n2.png";
import { useNavigate } from "react-router-dom";
// import travelimage from "../../Assets/img/travelinfo.png";

export default function InformationCard() {
  return (
    <>
      {/* <h1 className={style.informationTitle}>INFORMATIONS</h1> */}

      <h4 className={style.titleInformation}>
        <span className={style.spanCorpName}>CityGo</span>, the breath of adventure for intrepid travelers who want to explore the world!
      </h4>
      <InformationCardWrapper>
        <div className={style.informationCardSection}>
          <div className={style.cardSection}>
            <div className={style.informationCardContent}>
              <h4 className={style.cardH4}>Let the current carry you</h4>
              <p>
                Wondering what to do in Bangkok, New York, Paris or Sydney?
                Don't worry, we've got your back! With our collection of
                hilarious and informative travel guides, you'll find out
                everything there is to know about the best activities, must-see
                spots and well-kept secrets of each city.
              </p>
              <button>See</button>
            </div>
            <div className={style.imageCardContent}>
              <img className={style.img} src={image1}></img>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.informationCardContent}>
              <h4 className={style.cardH4}>Find what fits you </h4>
              <p>
                Dive into lively neighborhoods, devour locals specialities, and
                lost yourself through narrow streets full of charm and why not
                learn some local expressions to melt into inhabitant. You are
                reaching for museum, a park or a lively party ? Don’t worry, we
                have all what you need to satisfying your thirst for urban
                adventure.
              </p>
              <button>See</button>
            </div>
            <div className={style.imageCardContent}>
              <img className={style.img} src={image2}></img>
            </div>
          </div>
        </div>
      </InformationCardWrapper>
    </>
  );
}
