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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95em;
  justify-content: space-between;
`;

export const Banner = styled.div`
  color: white;
  width: 90%;
  h2 {
    border-bottom: solid 2px #a6695d;
    font-size: 2.25em;
    margin-bottom: 0.8em;
    padding-bottom: 0.4em;
  }
  h4 {
    margin-top: -1.5%;
    font-size: 0.9em;
    margin-left: 5px;
  }
`;
