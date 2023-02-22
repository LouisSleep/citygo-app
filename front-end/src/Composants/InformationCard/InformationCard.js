import React from "react";
import InformationCardWrapper from "../InformationCardWrapper/InformationCardWrapper";
import style from "./InformationCard.module.css";
import image from "../../Assets/img/travelinfo.png"
import { useNavigate } from "react-router-dom";
// import travelimage from "../../Assets/img/travelinfo.png";

export default function InformationCard() {
  return (
    <>
      <h1>INFORMATIONS</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna
        justo, tempor vitae hendrerit id, lobortis id lectus. Maecenas eleifend
        elit metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras magna justo, tempor vitae hendrerit id, lobortis id lectus.
        Maecenas eleifend elit metus. Deserunt cillum pariatur sunt ad enim quis
        in culpa aliqua dolore ut. Dolor ipsum Lorem excepteur proident. Eiusmod
        sunt laborum laboris enim elit tempor ad et magna dolor ea. Sunt ad
        exercitation do deserunt ut consectetur consectetur dolor tempor
        laboris. Qui ex fugiat non sunt id reprehenderit.
      </h4>
      <InformationCardWrapper>
        <div className={style.informationCardSection}>
          <div className={style.cardSection}>
            <div className={style.informationCardContent}>
              <h4 className={style.cardH4}>Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                magna justo, tempor vitae hendrerit id, lobortis id lectus.
                Maecenas eleifend elit metus, vel mattis lorem feugiat eget.
                Cras vel nisl cursus, feugiat nunc sit amet, scelerisque eros.
                Curabitur sit amet.
              </p>
              <button>See</button>
            </div>
            <div className={style.imageCardContent}>
              <img className={style.img} src={image}>
              
              </img>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.informationCardContent}>
              <h4 className={style.cardH4}>Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                magna justo, tempor vitae hendrerit id, lobortis id lectus.
                Maecenas eleifend elit metus, vel mattis lorem feugiat eget.
                Cras vel nisl cursus, feugiat nunc sit amet, scelerisque eros.
                Curabitur sit amet.
              </p>
              <button>See</button>
            </div>
            <div className={style.imageCardContent}>
              <img className={style.img} src={image}></img>
            </div>
          </div>
        </div>
      </InformationCardWrapper>
    </>
  );
}
