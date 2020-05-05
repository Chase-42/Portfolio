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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

export const Banner = styled.div`
  color: white;
  width: 90%;
  margin-bottom: 10%;
  h2 {
    border-bottom: solid 2px #488286;
    font-size: 2.25rem;
    margin-bottom: 0.8rem;
    padding-bottom: 0.4rem;
  }
  h4 {
    margin-top: -0.5%;
    font-size: 0.9rem;
    margin-left: 5px;
  }
  @media (max-width: 500px) {
    text-align: center;
    h2 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.25rem;
    }
  }
`;
