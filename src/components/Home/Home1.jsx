// Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import NavBar from './Navbar';
import baseUrl from '../../Api';
import SearchBar from './Searchbar';

const Home1 = () => {
  const [petList, setPetList] = useState();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl + '/pet/tfetch')
      .then((response) => {
        console.log(response.data);
        setPetList(response.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here based on the searchTerm
    console.log('Searching for:', searchTerm);
    // You can update the state, make an API call, or perform any other action based on the search term
  };

  return (
    <div className="home-page">
      <NavBar />
      <div className="welcome-section">
        <h1>Welcome to Our Pet Store</h1>
        <h1>PET HUB</h1>
        <p>Find your new furry friend with us!</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="featured-pets-section">
        <h2>Featured Pets</h2>
        <div className="featured-pets">
          {petList ? (
            petList.map((pet) => (
              <div key={pet.id} className="featured-pet-card">
                <img src={`data:${pet.Image.contentType};base64,${pet.Image.data}`} alt="petImage" />
                <h3>{pet.PetName}</h3>
                <p>{pet.Breed}</p>
                <button>View Details</button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home1;
