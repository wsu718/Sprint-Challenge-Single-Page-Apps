import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Row, Col } from "react-bootstrap"

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
    <section>
    <Row className="justify-content-md-center">
      <SearchForm characters={characters} searchSetter={searchSetter}/>
    </Row>

    <Row className="justify-content-md-center">      
      
        {searchResults.map(character => {
        return <Col> <CharacterCard 
        key={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        image={character.image}
        /></Col>})}
      
    </Row>
    </section>
  );
}
