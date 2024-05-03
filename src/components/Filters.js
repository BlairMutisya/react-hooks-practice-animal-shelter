import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  // Function to handle changes in the select element
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    onChangeType(selectedType); // Call onChangeType callback prop with the selected type
  };

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        {/* Bind handleTypeChange function to onChange event of select element */}
        <select name="type" id="type" aria-label="type" onChange={handleTypeChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        {/* Call onFindPetsClick callback prop when button is clicked */}
        <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
