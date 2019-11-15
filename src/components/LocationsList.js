import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";
import { Row, Col } from "react-bootstrap"

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
     // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      setLocations(response.data.results);
      
    })
    .catch(error => {
      console.log("No data was returned", error)
    });
  }, []);

  return (
    <section>
   
    <Row className="justify-content-md-center">      
      
        {locations.map(loc => {
        return <Col> <LocationCard 
        key={loc.id}
        name={loc.name}
        type={loc.type}
        dimension={loc.dimension}
        /></Col>})}
      
    </Row>
    </section>
  );
}
