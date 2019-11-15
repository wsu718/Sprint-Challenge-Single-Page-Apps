import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap"

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.searchSetter(results)
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
<section className="search-form">
 
    <Form>
      <Form.Group>
        <Form.Label>Search by Character Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value id="name" name="textfield" value={searchTerm}
          onChange={handleChange}/>
        <Form.Text className="text-muted">
          Search will begin as you type
        </Form.Text>
      </Form.Group>
    </Form>


 

    </section>
  );
}
