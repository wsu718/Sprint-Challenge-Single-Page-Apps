import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.searchSetter(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
<section className="search-form">
 
 <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

    </section>
  );
}
