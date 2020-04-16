import React from "react";
// Components
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// Styles
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <AppDiv>
      <Banner>
        <h2>Chase Collins</h2>
        <h4>Full Stack Developer</h4>
      </Banner>
      <About />
      <Portfolio />
      <Contact />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background: rgb(71, 72, 82);
  width: 100%;
  height: 90em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Banner = styled.div`
  color: white;
  margin: 0 auto;
  width: 50em;
  position: absolute;
  top: 0;
  h2 {
    padding-right: 70%;
    border-bottom: solid 2px #a6695d;
    font-size: 2.25em;
    margin-bottom: 0.8em;
    padding-bottom: 0.4em;
  }
  h4 {
    margin-top: -1.5%;
    padding-right: 78%;
    font-size: 0.9em;
  }
`;
