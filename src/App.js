import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import 'App.css';



const Navbar = () => (
	<div id="navbar">
		<a href="#welcome-section">About</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact</a>
	</div>
)

const Welcome = () => (
	<div id="welcome-section">

	</div>
)

const Projects = () => (
	<div id="projects"></div>
)

const Contact = () => (
	<div id="contact"></div>
)


const Loader = () => (
	<div id="loader-wrapper">
		<div id="loader"></div>
	</div>
)

const App = () => (
	<>
		<Navbar />
		<Grid>
			<Row>
				<Col xs={12} md={12} lg={12}>
					<Welcome />
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12} lg={12}>
					<Projects />
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12} lg={12}>
					<Contact />
				</Col>
			</Row>
		</Grid>
	</>
)

export default App;
