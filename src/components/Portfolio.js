import React from "react";
// Styles
import styled from "styled-components";
import "../hover.css";
// Images
import img1 from "../images/reducer-todo-picture.png";
import img2 from "../images/weightliftingjournal.png";
import img3 from "../images/nasaphotooftheday.png";
import img4 from "../images/savetheanimals.png";

export default function Portfolio() {
  return (
    <PortfolioDiv className="portfolio">
      <h4>Portfolio</h4>
      <p>
        Below are a handful of projects I have built while on my web-development
        journey.
      </p>
      <ProjectSection>
        <div class="hvr-float">
          <h5>WEIGHT LIFTING JOURNAL</h5>
          <img src={img2} alt="weightliftingjournal" />
          <a
            href="https://weightliftingjournal-welcome.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>
            React | Context API | React Router | Styled-Components | Formik |
            Yup
          </p>
          <ul>
            <li>A journal for keeping track of workouts and exercises.</li>
            <li>
              Collaborated with 2 other remote team members to create the
              application in 2 weeks.
            </li>
            <li>
              My contributions were building the state management (via the React
              Context API) as well as the CRUD operations for the functionality
              of the application.
            </li>
            <a
              href="https://github.com/BW-Weight-Lifting-Journal1/Front-end2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github"></i>
            </a>
          </ul>
        </div>
        <div class="hvr-float">
          <h5>NASA PHOTO OF THE DAY</h5>
          <img src={img3} alt="reducer" />
          <a
            href="https://nasa-photo-of-the-day-chase.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>React | Styled-Components</p>
          <ul>
            <li>
              An application that consumes the NASA API and then displays the
              "Astronomy Photo Of The Day" as well as a description of the
              photograph.
            </li>
            <li>Designed and built by myself over 1 day.</li>
            <a
              href="https://github.com/Chase-42/nasa-photo-of-the-day"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github"></i>
            </a>
          </ul>
        </div>
        <div class="hvr-float">
          <h5>TODO APPLICATION</h5>
          <img src={img1} alt="reducer" />
          <a
            href="https://react-reducer-todo.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>
            React | The Reducer Pattern (via useReducer hook) |
            Styled-Components.
          </p>
          <ul>
            <li>
              A todo application for adding, selecting and deleting different
              tasks.
            </li>
            <li>Designed and built by myself over 3 days.</li>
            <a
              href="https://github.com/Chase-42/reducer-todo/tree/chase-collins"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github"></i>
            </a>
          </ul>
        </div>
        <div class="hvr-float">
          <h5>SAVE THE ANIMALS</h5>
          <img src={img4} alt="reducer" />
          <a
            href="https://save-the-animals.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>Check it out</StyledButton>
          </a>
          <p>HTML | CSS(LESS)</p>
          <ul>
            <li>Fully responsive, multi-page static webpage.</li>
            <li>Designed and built by myself over 1 week.</li>
            <a
              href="https://github.com/bwpt-savetheanimals/collins-marketing-page/tree/chase-collins"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github"></i>
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
      font-size: 0.8rem;
    }
  }
`;

const ProjectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: wrap;
  @media (max-width: 800px) {
    flex-flow: column;
    margin-bottom: 5%;
    justify-content: space-between;
  }
  div {
    @media (max-width: 1920px) {
      min-height: 27.5rem;
    }
    @media (max-width: 1390px) {
      min-height: 30rem;
    }
    @media (max-width: 1172px) {
      min-height: 31.5rem;
    }
    @media (max-width: 900px) {
      min-height: 32rem;
    }
    @media (max-width: 860px) {
      min-height: 35rem;
    }
    @media (max-width: 800px) {
      width: 70%;
      margin: 2%;
      min-height: auto;
    }
    width: 40%;
    text-align: center;
    margin: 1%;
    background: #77878b;
    border-radius: 10px;
    min-height: 23rem;
    position: relative;
    h5 {
      color: white;
      font-size: 0.75rem;
      margin: 2%;
    }
    p {
      color: white;
      font-size: 0.6rem;
      font-weight: bolder;
      margin: 4% 1% 0% 1%;
      @media (max-width: 800px) {
        font-size: 0.75rem;
      }
    }
    li {
      color: white;
      text-align: left;
      font-size: 0.7rem;
      margin: 1.5%;
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
      @media (max-width: 500px) {
        font-size: 0.75rem;
        margin-right: 10%;
      }
    }
    a {
      text-decoration: none;
    }
    img {
      width: 90%;
      height: 300px;
      overflow: hidden;
      object-fit: cover;
      @media (max-width: 800px) {
        height: 150px;
      }
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
  padding: 4px 10px 4px 10px;
  border-radius: 5px;
  border: none;
  font-size: 0.75rem;
  margin-top: 2%;
  @media (max-width: 500px) {
    font-size: 0.85rem;
    padding: 7px 13px 7px 13px;
  }
  transition: all 0.4s ease 0s;
  a {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background: #77878b;
    transition: all 0.4s ease 0s;
  }
`;
