import React from "react";
import Card from "react-bootstrap/Card";

export default function LocationCard( props ) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>NAME: {props.name}</Card.Text>
      <Card.Text>TYPE: {props.type}</Card.Text>
      <Card.Text>DIMENSION: {props.dimension}</Card.Text>
    </Card.Body>
  </Card>
  )
}

