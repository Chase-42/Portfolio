import React from 'react';
// Components
import Skills from './Skills';
import Accordion from './accordion/Accordion';
// Styles
import styled from 'styled-components';
import '../hover.css';
// Images
import profilePic from '../images/profile-picture.jpg';

export default function About() {
	function scrollToPortfolio(e) {
		e.preventDefault();
		document.querySelector('.portfolio').scrollIntoView({
			behavior: 'smooth',
		});
	}

	return (
		<AboutSection>
			<div className='hvr-buzz-out'></div>
			<AboutBanner>
				<AboutCard>
					<h3>A LITTLE ABOUT ME</h3>
					<img src={profilePic} alt='profilePicture' />
					<p>
						Hello!
						<span role='img' aria-label='party emoji'>
							👋
						</span>
					</p>
					<p>
						I'm Chase, a Full Stack Developer with an eye for design and an obsession
						for meticulously crafted applications that solve real world problems.
					</p>
					<Accordion
						title='Learn more about me!'
						content='
            <p>Since January of 2019 I have been learning and falling in love with programming, 
            but my journey started for real in August of 2019 when I joined Lambda School to take 
            their Full-Stack Web Development & Computer Science course.</p>
            <p>My previous career as a head roaster in the specialty coffee industry has given me 
            valuable insights into managing a critical department
            of a small business through developing advanced skills in
            organization, problem-solving and communication. Preparing me well for a career in software.<p/> 
            <p> While attending Lambda School (and working a full-time job) over the past 12 months, 
            I’ve completed a great deal of coursework on cutting-edge web development technologies 
            and best practices, including Agile software development and Git Workflow. 
            I learned and applied skills, including JavaScript, 
            React, Redux, React Router, HTML/CSS, LESS, Styled-Components, Node, Express.js, 
            REST APIs, Python and SQLite in a range of web and mobile platforms, from wireframing to 
			the final product as well as client-side and server testing and data structures & 
			algorithms.</p> <p>At the end of July 2020 I joined SetPatrol as a Junior Web Developer Intern. I 
			have provided critical input on researching & selecting the tech stack for an updated 
			product and created product vision with lead developer and board members. I have 
			pair-programmed with the lead developer to fix a multitude of bugs across the beta website,
			gained valuable experience developing production PHP, JavaScript, HTML & CSS code all while 
            navigating an existing codebase in Wordpress. I also designed, developed and styled 
            <a href="https://codepen.io/ChaseOfTheCollins/pen/xxVGwae?editors=1111" target="_blank"
              rel="noopener noreferrer">double slider</a> (using HTML, CSS & JavaScript) for the 
            website that has a gear value and days you want to rent value
            and outputs an amount of money you could earn via the two other values.</p>
            <p>At the end of August 2020 I joined High Rise Media as a Full Stack Development 
            Specialist. </p>
            <p>If you’d like to know more, feel free to get in touch!</p>'
					/>
					<ButtonDiv>
						<button className='hvr-bounce-to-bottom'>
							<a
								href='https://resume.creddle.io/resume/8qf10czfrxt'
								target='_blank'
								rel='noopener noreferrer'
							>
								View My Resume
							</a>
						</button>
						<button onClick={scrollToPortfolio} className='hvr-bounce-to-bottom'>
							<span>View My Projects</span>
						</button>
					</ButtonDiv>
				</AboutCard>
				<Skills />
			</AboutBanner>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: space-evenly;
	margin-bottom: 10%;
	@media (max-width: 800px) {
		p {
			margin: 2%;
		}
	}
	@media (max-width: 500px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	@media (max-width: 500px) {
		margin-top: 20%;
		flex-direction: column;
	}
	@media (max-width: 700px) {
		margin-bottom: 2%;
	}
	button {
		text-decoration: none;
		box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
			0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2);
		background: black;
		color: white;
		text-transform: uppercase;
		padding: 0rem 0.4rem 0.2rem 0.4rem;
		border: none;
		margin: 3% 5% 0% 0%;
		transition: all 0.4s ease 0s;
		float: left;
		@media (max-width: 500px) {
			margin: 5% 10% 5% 10%;
			padding: 0.75rem;
		}
		a,
		span {
			color: white;
			font-size: 0.7rem;
			text-decoration: none;
			text-align: center;
			cursor: pointer;
			@media (max-width: 800px) {
				font-size: 0.8rem;
			}
			@media (max-width: 500px) {
				font-size: 1rem;
			}
		}
	}
`;
const AboutBanner = styled.div`
  width: 77%;
  text-align: left;
  img {
    height: 260px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 130px;
    box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
    float: left;
    margin: 0% 3% 5% 0%;
    @media (max-width: 800px) {
      margin-bottom: 12%;
      height: 200px;
    }
    @media (max-width: 500px) {
      float: none;
      display: block;
      margin: 0 auto;
      height: 150px;
    }
  }
  h3 {
    border-bottom: solid 2px white;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    @media (max-width: 500px) {
      font-size: 1.25rem;
      text-align: center;
      margin-bottom: 5%;
    }
  }
  p {
    margin-bottom: 1%;
    cursor: pointer;
    font-size: 0.7rem;
    @media (max-width: 500px) {
      font-size: .9rem;
    }
   }
  }
`;

const AboutCard = styled.section`
	background-color: rgba(120, 136, 140, 0.5);
	padding: 2%;
	width: 98%;
	border-radius: 5px;
	box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
		0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
`;
