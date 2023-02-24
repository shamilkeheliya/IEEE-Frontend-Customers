import React from "react";
import "./HomeStyles.css";

function SearchCard({ pharmacy }) {
  return (
    <div className="search-card">
      <div className="Typography">
        <h2>{pharmacy.name}</h2>
        <h4 className="active">{pharmacy.district}</h4>
        <h4>{pharmacy.contact}</h4>
        <h4>{pharmacy.address}</h4>
      </div>
      <div className="Mapbox-container"></div>
    </div>
  );
}

export default SearchCard;
