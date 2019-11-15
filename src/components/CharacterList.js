import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchSetter = filteredCharacters => {
    setSearchResults(filteredCharacters)
  }
  
  useEffect(() => {
     // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
      setSearchResults(response.data.results);
    })
    .catch(error => {
      console.log("No data was returned", error)
    });
  }, []);

  return (
    
    <section className="character-list">
      <SearchForm characters={characters} searchSetter={searchSetter}/>
      <h2>
        {searchResults.map(character => {
        return <CharacterCard 
        key={character.name}
        name={character.name}
        />})}</h2>
    </section>
  );
}
