import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { ThemeProvider } from 'styled-components';
import { Twitter, Github } from '@styled-icons/boxicons-logos'
import { FreeCodeCamp } from '@styled-icons/fa-brands'
import { Link } from "react-scroll";
import Iframe from 'react-iframe'
import { appTheme, NavButton, Nav, WelcomeSection, ProjectsSection, ContactSection, SocialButton, LoaderWrapper, LoaderInner } from 'styleComponents';
import 'App.css';

const Navbar = () => (
	<Nav id="navbar">
		<Link activeClass="active" to="welcome-section" spy={true} smooth={true} offset={0} duration={500} >
			<NavButton>About</NavButton>
		</Link>
		<Link to="projects" spy={true} smooth={true} offset={-40} duration={500} >
			<NavButton>Projects</NavButton>
		</Link>
		<Link to="contact" spy={true} smooth={true} offset={-40} duration={500} >
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
	<ProjectsSection id="projects">
		<Grid>
			<Row>
				<Col xs></Col>
				<Col xs>
					<h1> Some of my projects</h1>
				</Col>
				<Col xs></Col>
			</Row>
			<Row>
				<Col xs><Iframe url="https://aarhusnordhavn.dk/"
					width="350vw"
					height="350vh"
					id="aarhusnordhavn"
					className="project-tile"
					display="initial"
					position="relative" />
				</Col>
				<Col xs><Iframe url="https://techdoc.jakobdahl.me/"
					width="350vw"
					height="350vh"
					className="project-tile"
					display="initial"
					position="relative" /></Col>
				<Col xs><Iframe url="https://jakobdahl.me/"
					width="350vw"
					height="350vh"
					id="personal-site"
					className="project-tile"
					display="initial"
					position="relative" /></Col>
			</Row>
		</Grid>
	</ProjectsSection>
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
						<SocialButton><Twitter size="34" /> Me on Twitter</SocialButton>
					</a>
				</Col>
				<Col xs>
					<a href="https://www.freecodecamp.org/saadanerdetbare" target="_blank" rel="noopener noreferrer">
						<SocialButton><FreeCodeCamp size="34" /> My profile on freeCodeCamp</SocialButton>
					</a>
				</Col>
				<Col xs>
					<a id="profile-link" href="https://github.com/saadanerdetbare" target="_blank" rel="noopener noreferrer">
						<SocialButton><Github size="34" /> Visit me on Github</SocialButton>
					</a>
				</Col>
			</Row>
		</Grid>
	</ContactSection>
)


const Loader = () => (
	<LoaderWrapper>
		<LoaderInner />
	</LoaderWrapper>
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
