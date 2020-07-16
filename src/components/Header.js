import React, { useState } from 'react';
// Utils
import Clipboard from 'clipboard';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
// Hooks
import { useDarkMode } from "../hooks/useDarkMode";
// Styles
import styled from 'styled-components';

export default function Header() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [darkModeStyle, setDarkModeStyle] = useDarkMode(false);

  const clip = new Clipboard('.clipboard');

  clip.on('success', () => {
    alert('My email address has been copied to your clipboard.');
  });
  clip.on('error', () => {
    alert("That didn't work, sorry :(");
  });
  const darkSwitchStyles = {
    marginRight: ".5rem",
    marginTop: ".5rem"
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    
  };

  const toggleMode = e => {
    e.preventDefault();
    setDarkModeStyle(!darkModeStyle);
  }
  return (
    <>
    <DarkModeDiv onClick={toggleMode}>
      <DarkModeSwitch
      style={darkSwitchStyles}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        sunColor={"white"}
        moonColor={"black"}
        size={50}
      />
      </DarkModeDiv>
      <Banner>
        <Section>
          <h1>Chase Collins</h1>
          <span>
            <div
              class='clipboard'
              data-clipboard-text='chaseofthecollins@gmail.com'
            >
              <i class='fas fa-envelope'></i>
            </div>
            <a
              href='https://www.linkedin.com/in/chase-collins42/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-linkedin-in'></i>
            </a>
            <a
              href='https://github.com/Chase-42'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-github'></i>
            </a>
          </span>
        </Section>
        <h4>Full Stack Developer</h4>
      </Banner>
    </>
  );
}



 const Banner = styled.header`
  width: 90%;
  margin-bottom: 10%;
  h4 {
    margin-left: 0.6%;
    margin-top: 2%;
  }
  @media (max-width: 800px) {
    text-align: center;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    h4 {
      margin-top: 0.75rem;
      font-size: 1.25rem;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: start;
  border-bottom: solid 2px #488286;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  }
  h1 {
    font-size: 3rem;
    margin-bottom: auto;
    @media(max-width: 395px) {
      font-size: 2.8rem;
    }
    @media(max-width: 350px) {
      font-size: 2.5rem;
    }
  }
  button {
    text-decoration: none;
  }
  span {
    display: flex;
    margin-left: 2%;
    @media (max-width: 800px) {
      margin-right: 26%;
    }
    @media (max-width: 675px) {
      margin-right: 28%;
    }
    @media (max-width: 600px) {
      margin-right: 38%;
    }
    @media (max-width: 500px) {
      margin-right: 40%;
    }
    @media (max-width: 450px) {
      margin-right: 42%;
    }
    @media (max-width: 350px) {
      margin-right: 44%;
    }
    div,
    a {
      margin: 5% 50% 15% 50%;
    }
  }
  i {
    font-size: 0.75rem;
    @media (max-width: 600px) {
      font-size: .9rem;
    }
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;


const DarkModeDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
