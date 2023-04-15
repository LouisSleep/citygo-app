import React from "react";
import style from "./CityDescriptionText.module.css";

export default function CityDescriptionText(props) {
  return (
    <div className={style.cityDescriptionComponent}>
      <div className={style.title}>
        <p>
          <span id={style.cityName}>{props.city}, </span>
          <span id={style.countryName}>{props.country}</span>
        </p>
      </div>
      <div className={style.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cumque
          repellendus impedit? Voluptates ex eum sit voluptatum porro qui
          laboriosam placeat, minus recusandae ab, itaque vitae minima.
          Exercitationem, veniam recusandae? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quos sed maxime quo voluptate fugiat
          porro iste atque, nihil ipsam accusantium commodi, eius eos debitis in
          ut, possimus architecto nisi consequatur. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nisi quidem in deleniti facilis
          laboriosam repellat numquam, laborum sequi similique enim saepe
          adipisci, aliquam molestiae non incidunt pariatur possimus sapiente
          aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          minima voluptatem nostrum iste quasi vel quibusdam dignissimos esse,
          repellat repellendus eaque fugiat earum repudiandae tempora autem
          voluptatum deserunt eligendi necessitatibus!
        </p>
      </div>
    </div>
  );
}
