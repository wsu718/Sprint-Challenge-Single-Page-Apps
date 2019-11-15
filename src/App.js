import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import Container from "react-bootstrap/Container";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  

  return (
    <Container>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path ="/characters" component={CharacterList} />
      <Route path ="/locations" component={LocationsList} />
      {/* <Route path ="/episodes" component={EpisodeList} /> */}
    </Container>
  );
}
