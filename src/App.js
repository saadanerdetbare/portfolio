import React, { Fragment } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { ThemeProvider } from 'styled-components';
import { Twitter, Github } from '@styled-icons/boxicons-logos'
import { FreeCodeCamp } from '@styled-icons/fa-brands'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { appTheme, NavButton, Nav, WelcomeSection, ProjectsSection, ContactSection, SocialButton } from 'styleComponents';
import 'App.css';

const Navbar = () => (
	<Nav id="navbar">
		<Link to="welcome-section" spy={true} smooth={true} offset={0} duration={500} >
			<NavButton>About</NavButton>
		</Link>
		<Link to="projects" spy={true} smooth={true} offset={0} duration={500} >
			<NavButton>Projects</NavButton>
		</Link>
		<Link to="contact" spy={true} smooth={true} offset={0} duration={500} >
			<NavButton>Contact</NavButton>
		</Link>
		<a href="#contact">
			<NavButton>Test button</NavButton>
		</a>
	</Nav>
)

const Welcome = () => (
	<WelcomeSection id="welcome-section">
		<Grid>
			<Row></Row>
			<Row middle="xs">
				<Col xs />
				<Col xs>
					<h1>En header</h1>
				</Col>
				<Col xs />
			</Row>
			<Row></Row>
		</Grid>
	</WelcomeSection>
)

const Projects = () => (
	<ProjectsSection id="projects"></ProjectsSection>
)

const Contact = () => (
	<ContactSection id="contact">
		<Grid>
			<Row></Row>
			<Row middle="xs">
				<Col xs />
				<Col xs>
					<h1>En header</h1>
				</Col>
				<Col xs />
			</Row>
			<Row>
				<Col xs>
					<a href="https://twitter.com/jakob_dahl" target="_blank" rel="noopener noreferrer">
						<SocialButton><Twitter size="36" /> Me on Twitter</SocialButton>
					</a>
				</Col>
				<Col xs>
					<a href="https://www.freecodecamp.org/saadanerdetbare" target="_blank" rel="noopener noreferrer">
						<SocialButton><FreeCodeCamp size="36" /> My profile on freeCodeCamp</SocialButton>
					</a>
				</Col>
				<Col xs>
					<a id="profile-link" href="https://github.com/saadanerdetbare" target="_blank" rel="noopener noreferrer">
						<SocialButton><Github size="36" /> Visit me on Github</SocialButton>
					</a>
				</Col>
			</Row>
		</Grid>
	</ContactSection>
)


const Loader = () => (
	<div id="loader-wrapper">
		<div id="loader"></div>
	</div>
)

const App = () => (
	<>
		<Navbar id="navbar" />
		<ThemeProvider theme={appTheme}>
			<Grid fluid={true}>
				<Row>
					<Col xs>
						<Welcome />
					</Col>
				</Row>
				<Row>
					<Col xs>
						<Projects />
					</Col>
				</Row>
				<Row>
					<Col xs>
						<Contact />
					</Col>
				</Row>
			</Grid>
		</ThemeProvider>
	</>
)

export default App;
