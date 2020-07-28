import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { ThemeProvider } from 'styled-components';
import { appTheme, NavButton, Nav, WelcomeSection, ProjectsSection, ContactSection } from 'styleComponents';
import 'App.css';

const Navbar = () => (
	<Nav id="navbar">
		<NavButton>
			<a href="#welcome-section">About</a>
		</NavButton>
		<NavButton>
			<a href="#projects">Projects</a>
		</NavButton>
		<NavButton>
			<a href="#contact">Contact</a>
		</NavButton>
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
			<Row></Row>
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
