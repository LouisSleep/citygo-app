import React from "react";
import style from "./Footer.module.css";
import FooterCardWrapper from "./FooterCard/FooterCardWrapper";

export default function Footer() {
  return (
    <>
      <FooterCardWrapper>
        <div className={style.footerModule}>© 2023 CityGo </div>
      </FooterCardWrapper>
    </>
  );
}
