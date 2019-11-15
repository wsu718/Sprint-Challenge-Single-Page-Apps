import React from "react";

export default function CharacterCard(props) {
  return (
  <div key={props.name}>
    <span>{props.name}</span>
  </div>
  )
}
