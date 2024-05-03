import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, age, weight, gender, isAdopted } = pet;

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/* Render the gender symbol based on the pet's gender */}
          {gender === "male" ? "♂" : "♀"} {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {/* Render the appropriate button based on the adoption status */}
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={() => onAdoptPet(id)}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
