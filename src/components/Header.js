import React, { useState } from 'react';
// Utils
import Clipboard from 'clipboard';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
// Hooks
import { useDarkMode } from '../hooks/useDarkMode';
// Styles
import styled from 'styled-components';

export default function Header() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [darkModeStyle, setDarkModeStyle] = useDarkMode(false);

  const clip = new Clipboard('.btn');

  clip.destroy();
  clip.on('success', () => {
    alert('My email address has been copied to your clipboard.');
  });

  clip.on('error', () => {
    alert("That didn't work, sorry :(");
  });

  const darkSwitchStyles = {
    marginRight: '.25rem',
    marginTop: '.25rem',
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkModeStyle(!darkModeStyle);
  };
  return (
    <>
      <DarkModeDiv onClick={toggleMode}>
        <DarkModeSwitch
          style={darkSwitchStyles}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          sunColor={'black'}
          moonColor={'white'}
          size={45}
        />
      </DarkModeDiv>
      <Banner>
        <Section>
          <h1>Chase Collins</h1>
          <span>
            <div
              className='btn'
              data-clipboard-text='chaseofthecollins@gmail.com'
            >
              <i className='fas fa-envelope' />
            </div>
            <a
              href='https://www.linkedin.com/in/chase-collins42/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a
              href='https://github.com/Chase-42'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
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
  margin-top: 3%;
  padding: 1%;
  border-radius: 10px;
  background: linear-gradient(
    110deg,
    #478185 60%,
    rgba(120, 136, 140, 0.9) 60%
  );
  h4 {
    margin-left: 0.6%;
    margin-top: 2%;
    color: black;
  }
  @media (max-width: 860px) {
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
  border-bottom: solid 2px white;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
  }
  h1 {
    font-size: 3rem;
    margin: 0;
    color: black;
    @media(max-width: 600px) {
      margin-top: 5%;
    }
    @media(max-width: 395px) {
      margin-top: 7%;
      font-size: 2.8rem;
    }
    @media(max-width: 350px) {
      margin-top: 9%;
      font-size: 2.6rem;
    }
  }
  button {
    text-decoration: none;
  }
  span {
    display: flex;
    margin-left: 2%;
    @media (max-width: 860px) {
      margin-right: 34%;
    }
    @media (max-width: 705px) {
      margin-right: 36%;
    }
    @media (max-width: 605px) {
      margin-right: 40%;
    }
    @media (max-width: 505px) {
      margin-right: 43%;
    }
    @media (max-width: 455px) {
      margin-right: 46%;
    }
    @media (max-width: 380px) {
      margin-right: 50%;
    }
    div,
    a {
      margin: 5% 50% 15% 50%;
    }
  }
  i {
    color: black;
    font-size: 0.8rem;
    @media (max-width: 860px) {
      font-size: 1rem;
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
  @media (max-width: 1244px) {
    padding: 3% 4% 0% 0%;
  }
  svg {
    @media (max-width: 500px) {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;
