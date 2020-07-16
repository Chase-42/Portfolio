import React from 'react';
// Components
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// Styles
import styled from 'styled-components';
import './App.scss';

function App() {
  return (
    <AppDiv>
      <Header />
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
