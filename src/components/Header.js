import React from 'react';
// Utils
import Clipboard from 'clipboard';
// Styles
import styled from 'styled-components';

export default function Header() {
  const clip = new Clipboard('.clipboard');

  clip.on('success', () => {
    alert('My email address has been copied to your clipboard.');
  });
  clip.on('error', () => {
    alert("That didn't work, sorry :(");
  });
  return (
    <>
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
export const Banner = styled.header`
  color: white;
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
  color: white;
  h1 {
    font-size: 3rem;
    margin-bottom: auto;
  }
  button {
    text-decoration: none;
  }
  span {
    display: flex;
    margin-left: 2%;
    @media (max-width: 800px) {
      margin-right: 30%;
    }
    @media (max-width: 600px) {
      margin-right: 38%;
    }
    div,
    a {
      margin: 0% 50% 10% 50%;
    }
  }
  i {
    font-size: 0.75rem;
    color: white;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
