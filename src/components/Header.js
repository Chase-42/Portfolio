import React, { useState } from 'react';
// Utils
import Clipboard from 'clipboard';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
// Components
import ScrollToTop from './ScrollToTop';
// Hooks
import { useDarkMode } from '../hooks/useDarkMode';
// Styles
import styled from 'styled-components';
import { ReactComponent as YourSvg } from '../images/code_logo.svg';

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
					<div className='code-logo'>
						<YourSvg />
						<h1>Chase Collins</h1>
					</div>
					<span>
						<div className='btn' data-clipboard-text='chaseofthecollins@gmail.com'>
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
						<a
							href='https://dev.to/chase42'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i class='fab fa-dev'></i>
						</a>
					</span>
				</Section>
				<h4>Full Stack Developer</h4>
			</Banner>
			<ScrollToTop />
		</>
	);
}

const Banner = styled.header`
	width: 90%;
	margin-bottom: 10%;
	margin-top: 3%;
	padding: 1%;
	border-radius: 5px;
	box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
		0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2);
	background: linear-gradient(
		110deg,
		rgb(71, 129, 133, 0.9) 60%,
		rgba(120, 136, 140, 0.5) 60%
	);
	h4 {
		margin-left: 0.6%;
		margin-top: 2%;
	}
	@media (max-width: 1000px) {
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
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  }
  h1 {
    font-size: 3rem;
    margin: 0;
    @media(max-width: 1000px) {
      margin-top: 3%;
    }
    @media(max-width: 600px) {
      margin-top: -7%;
    }
    @media(max-width: 395px) {
      font-size: 2.8rem;
      margin-top: -5%;
    }
    @media(max-width: 350px) {
      margin-top: -5%;
      font-size: 2.6rem;
    }
  }
  button {
    text-decoration: none;
  }
  span {
  display: flex;
  justify-content: space-around;
  width: 30%;
    @media(max-width: 1000px) {
      justify-content: space-between;
      width: 63%;
    }
  }
  i {
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
