import React from 'react';
// Styles
import styled from 'styled-components';
import '../hover.css';
// Images
import img1 from '../images/reducer-todo-picture.png';
import img2 from '../images/revitalize.png';
import img3 from '../images/nasaphotooftheday.png';
import img4 from '../images/savetheanimals.png';
import img5 from '../images/top-shows-and-movies.png';

export default function Portfolio() {
  return (
    <PortfolioDiv className='portfolio'>
      <h4>Portfolio</h4>
      <p>
        Below are a handful of projects I have built & worked on while on my
        web-development journey.
      </p>
      <ProjectSection>
        <div className='hvr-float'>
          <h5>ReVitalize</h5>
          <img src={img2} alt='revitalize' />
          <a
            href='https://staging.d1y2qgealrmo9w.amplifyapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>React | SASS | Apollo | Prisma | GraphQL</p>
          <ul>
            <li>
              A modern approach to building your community, ReVitalize is a
              crowdfunding platoform that creates apprenticeship opportunities
              to develop your skills to gain licensing.{' '}
            </li>
            <li>
              Collaborating with 4 remote team members in an Agile development
              enviroment to iterate through 3 release-canvasses of numerous bug
              fixes, accessibility issues and addition of several new features.
            </li>
            <li>
              Solely responsible for creating FAQ page to clearly represent the
              applications intent and answer frequently asked questions users
              might have.
            </li>
            <li>
              Solely responsible for achieving 100% test coverage for the footer
              component using Jest.
            </li>
            <li>
              Solely responsive for re-designing Dashboard component to be fully
              responsive across desktop, tablet and phone views.
            </li>
            <li>
              Pair programmed with 1 other team member to fix the footer bugs
              and make it stay at the bottom of page throughout the entire
              application.
            </li>
            <a
              href='https://github.com/Lambda-School-Labs/Revitalize-FE'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
        <div className='hvr-float'>
          <h5>Top Movies & Shows</h5>
          <img src={img5} alt='reducer' />
          <a
            href='https://top-movies-and-shows.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>React | React Router | Material-UI | Webpack </p>
          <ul>
            <li>
              A fully responsive application that shows lists of top movies & tv
              shows from the IMDB API and allows you to search for any movie or
              show from the IMDB database.
            </li>
            <li>
              Created an asynchronous custom React hook that takes in a url and
              returns data, loading & error state, making displaying each
              returned state easy and quick. I have since adopted this hook in
              my NASA Photo Of The Day application as well.
            </li>
            <li>
              Designed, built, bundled (via Webpack) & deployed by myself over 1
              week.
            </li>
            <a
              href='https://github.com/Chase-42/Top-Movies-and-Shows'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
        <div className='hvr-float'>
          <h5>NASA Photo Of The Day</h5>
          <img src={img3} alt='reducer' />
          <a
            href='https://nasa-photo-of-the-day-chase.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>React | Styled-Components</p>
          <ul>
            <li>
              A fully responsive application that shows the "Astronomy Photo Of
              The Day" from the NASA API along with a description.
            </li>
            <li>Designed, built & deployed by myself over 1 day.</li>
            <a
              href='https://github.com/Chase-42/nasa-photo-of-the-day'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
        <div className='hvr-float'>
          <h5>To Do Application</h5>
          <img src={img1} alt='reducer' />
          <a
            href='https://chase-todo.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>
            React | The Reducer Pattern (via useReducer hook) |
            Styled-Components.
          </p>
          <ul>
            <li>
              A fully responsive to do application for adding, selecting and
              deleting different tasks.
            </li>
            <li>Designed, built & deployed by myself over 3 days.</li>
            <a
              href='https://github.com/Chase-42/reducer-todo/tree/chase-collins'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
        <div className='hvr-float'>
          <h5>Save The Animals</h5>
          <img src={img4} alt='reducer' />
          <a
            href='https://save-the-animals.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>HTML | LESS</p>
          <ul>
            <li>
              Fully responsive, multi-page static webpage that provides
              information for a Wildlife Conservation application.
            </li>
            <li>Designed, built & deployed by myself over 1 week.</li>
            <a
              href='https://github.com/bwpt-savetheanimals/collins-marketing-page/tree/chase-collins'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
      </ProjectSection>
    </PortfolioDiv>
  );
}

const PortfolioDiv = styled.div`
  width: 80%;
  text-align: right;
  background: none;
  margin-top: 4rem;
  @media (max-width: 500px) {
    text-align: center;
  }
  h4 {
    @media (max-width: 500px) {
      padding-left: 0%;
      font-size: 1.25rem;
    }
    color: white;
    border-bottom: solid 2px #488286;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    margin-top: -1.5%;
    padding-left: 78%;
  }
  p {
    color: white;
    font-size: 0.7rem;
    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`;

const ProjectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: bold;
    color: black;
  }
  div {
    width: 70%;
    text-align: center;
    margin: 3%;
    background: #77878b;
    border-radius: 10px;

    @media (max-width: 500px) {
      width: 90%;
    }
    h5 {
      color: black;
      font-size: 0.9rem;
      margin: 2.5%;
    }
    p {
      color: black;
      font-weight: bolder;
      margin: 2% 5% 0% 5%;
      font-size: 0.75rem;
      @media (max-width: 800px) {
        font-size: 0.75rem;
      }
    }
    li {
      color: black;
      text-align: left;
      font-size: 0.7rem;
      margin: 3% 10% 3% 3%;
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
      @media (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
    a {
      text-decoration: none;
    }
    img {
      width: 90%;
      height: auto;
      overflow: hidden;
      object-fit: cover;
    }
    i {
      color: black;
      position: absolute;
      margin: 0% 2% 2% 0%;
      bottom: 0;
      right: 0;
    }
  }
`;

const StyledButton = styled.button`
  color: white;
  background: #191919;
  text-transform: uppercase;
  padding: 8px 14px 8px 14px;
  border-radius: 5px;
  border: none;
  font-size: 0.75rem;
  margin: 3% 0% 2% 0%;
  @media (max-width: 800px) {
    font-size: 0.85rem;
    padding: 9px 15px 9px 15px;
  }
  transition: all 0.4s ease 0s;
  a {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background: #77878b;
    transition: all 0.5s ease 0;
  }
`;
