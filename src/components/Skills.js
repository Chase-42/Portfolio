import React from 'react';
// Styles
import styled from 'styled-components';
// Icons
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import graphqlIcon from '@iconify/icons-cib/graphql';

export default function Skills() {
  return (
    <>
      <SkillsDiv>
        <h4>SKILLS</h4>
        <i className='fab fa-js'>
          <p className='hvr-buzz-out'>JavaScript</p>
        </i>
        <i className='fab fa-react'>
          <p className='hvr-buzz-out'>React</p>
        </i>
        <i className='fab fa-html5'>
          <p className='hvr-buzz-out'>HTML</p>
        </i>
        <i className='fab fa-css3-alt'>
          <p className='hvr-buzz-out'>CSS</p>
        </i>
        <i className='fab fa-less'>
          <p className='hvr-buzz-out'>LESS</p>
        </i>
        <span>
          <Icon icon={reduxIcon} height={'1.6rem'} />
          <p className='hvr-buzz-out'>Redux</p>
        </span>
        <i className='fab fa-git-square'>
          <p className='hvr-buzz-out'>Git</p>
        </i>
        <i className='fab fa-node'>
          <p className='hvr-buzz-out'>Node</p>
        </i>
        <span>
          <Icon icon={graphqlIcon} height={'1.6rem'} />
          <p className='hvr-buzz-out'>GraphQL</p>
        </span>
      </SkillsDiv>
    </>
  );
}

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #478185;
  height: 5rem;
  border-radius: 5px;
  box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  margin-top: 10%;
  width: 100%;
  padding: 1%;
  @media (max-width: 1065px) {
    flex-direction: column;
    height: 32rem;
    width: 6rem;
    float: none;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 6rem;
  }
  @media (max-width: 800px) {
    width: 7.5rem;
    height: 37rem;
  }
  h4 {
    font-size: 1.2rem;
    padding: 0% 3% 0.5% 3%;
    @media (max-width: 1065px) {
      padding: 7%;
      margin: 0% 0% 15% 0%;
      border-bottom: 1px solid white;
    }
  }
  i,
  span,
  p {
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
      color: #464648;
    }
    font-size: 1.6rem;
    @media (max-width: 2760px) {
      margin-left: 5%;
    }
    @media (max-width: 2575px) {
      margin-left: 4.5%;
    }
    @media (max-width: 2350px) {
      margin-left: 4%;
    }
    @media (max-width: 2155px) {
      margin-left: 3.5%;
    }
    @media (max-width: 2000px) {
      margin-left: 3%;
    }
    @media (max-width: 1820px) {
      margin-left: 2.5%;
    }
    @media (max-width: 1680px) {
      margin-left: 2%;
    }
    @media (max-width: 1390px) {
      margin-left: 1.5%;
    }
    p {
      font-size: 0.6rem;
      margin-left: 0%;
      @media (max-width: 1065px) {
        margin: 5% 0% 10% 0%;
      }
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
    }
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
