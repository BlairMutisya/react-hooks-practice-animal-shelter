import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      {/* Map through the pets array and render a Pet component for each pet */}
      {pets.map((pet) => (
        // Pass necessary props to each Pet component
        <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
      ))}
    </div>
  );
}

export default PetBrowser;
