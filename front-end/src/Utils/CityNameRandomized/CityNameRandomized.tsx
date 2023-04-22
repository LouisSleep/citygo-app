import React from "react";

const cityNameRandomized = ({ city }) => {
  let cityArray = [...city];
  let currentIndex = cityArray.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cityArray[currentIndex], cityArray[randomIndex]] = [
      cityArray[randomIndex],
      cityArray[currentIndex],
    ];
  }

  return cityArray;
};

export default cityNameRandomized;
