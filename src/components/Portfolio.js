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
              crowdfunding platform that creates apprenticeship opportunities to
              help tradesmen develop skills to gain licensing.
            </li>
            <li>
              Collaborating with 4 remote team members in an Agile development
              environment to iterate through 3 client approved release-canvasses
              of numerous bug fixes, accessibility issues and addition of
              several new features.
            </li>
            <li>
              Solely responsible for:
              <ul>
                <li>
                  Constructing the FAQ page to clearly represent the
                  application's intent and answer frequently asked questions
                  users might have while also integrating styles with the
                  application's existing dark mode.
                </li>
                <li>
                  Achieving 100% test coverage for the footer component using
                  Jest.
                </li>
                <li>
                  Re-designing the dashboard component to fully responsive
                  across desktop, tablet and phone views and dark mode
                  compatible.
                </li>
              </ul>
            </li>
            <li>
              Pair programmed with several other team member to fix the footer
              bugs and make it stay at the bottom of page throughout the entire
              application and fix state managment issue in the dashboard
              component.
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
          <p>React | React Router | Material-UI | Webpack | Babel </p>
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
              Learned in 1 day how to configure Webpack & Babel to bundle the
              application.
            </li>
            <li>Designed, built, bundled & deployed by myself over 1 week.</li>
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
              href='https://github.com/Chase-42/reducer-todo'
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
    @media (max-width: 800px) {
      padding-left: 0%;
      font-size: 1.7rem;
    }
    border-bottom: solid 2px #488286;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    margin-top: -1.5%;
    padding-left: 78%;
  }
  p {
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
  }
  div {
    width: 70%;
    text-align: center;
    margin: 3%;
    background: rgba(120, 136, 140, 0.9);
    border-radius: 5px;
    box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12),
      0px 11px 15px -7px rgba(0, 0, 0, 0.2);
    @media (max-width: 800px) {
      width: 95%;
      margin: 5%;
    }
    h5 {
      font-size: 0.9rem;
      margin: 2.5%;
      @media (max-width: 800px) {
        font-size: 1.25rem;
      }
    }
    p {
      font-weight: bolder;
      margin: 2% 5% 0% 5%;
      font-size: 0.75rem;
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
    }
    li {
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
      box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12),
        0px 11px 15px -7px rgba(0, 0, 0, 0.2);
    }
    i {
      position: absolute;
      margin: 0% 2% 2% 0%;
      bottom: 0;
      right: 0;
      &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.3);
      }
    }
  }
`;

const StyledButton = styled.button`
  color: white;
  background: #191919;
  text-transform: uppercase;
  padding: 8px 14px 8px 14px;
  border-radius: 5px;
  box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 0.75rem;
  margin: 3% 0% 2% 0%;
  @media (max-width: 800px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
  }
  @media (max-width: 500px) {
    font-size: 0.95rem;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  }
  transition: all 0.4s ease 0s;
  a {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    color: black;
    background: #478185;
    transition: all 0.5s ease 0;
  }
`;
