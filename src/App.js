import React from "react";
import { Container } from "react-bootstrap";
import StartWarsList from "./components/StarWarsList";

function App() {
  return (
    <main className="my-3">
      <Container>
    <StartWarsList />
  </Container>
    </main>
  
  );
}

export default App;
