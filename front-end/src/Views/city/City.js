import React from "react";

export default function City() {
  const queryURLCityParams = new URLSearchParams(window.location.search);
  const countryParams = queryURLCityParams.get("country");
  const cityParams = queryURLCityParams.get("city");
  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}
