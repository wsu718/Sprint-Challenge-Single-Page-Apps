import React from "react";
import Card from "react-bootstrap/Card";


export default function CharacterCard(props) {
  
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>STATUS: {props.status}</Card.Text>
      <Card.Text>GENDER: {props.gender}</Card.Text>
      <Card.Text>SPECIES: {props.species}</Card.Text>
    </Card.Body>
  </Card>
  )
}

