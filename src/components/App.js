import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // Callback to update filters.type state
  const onChangeType = (type) => {
    setFilters({ ...filters, type });
  };

  // Callback to fetch pets based on filter type
  const onFindPetsClick = () => {
    let url = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPets(data));
  };

  // Callback to set isAdopted property of a pet to true
  const onAdoptPet = (id) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  // Fetch initial pet data when component mounts
  useEffect(() => {
    onFindPetsClick();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            {/* Pass callback props to Filters component */}
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            {/* Pass pets data and callback prop to PetBrowser component */}
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
