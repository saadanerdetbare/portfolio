import styled, { keyframes } from 'styled-components';

export const appTheme = {
	flexboxgrid: {
		gridSize: 12, // columns
		gutterWidth: 1, // rem
		outerMargin: 0, // rem
		mediaQuery: 'only screen',
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76  // rem
		},
		breakpoints: {
			xs: 0,  // em
			sm: 48, // em
			md: 64, // em
			lg: 75  // em
		}
	}
}

export const Nav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: aquamarine;
  display: flex;
  justify-content: flex-end;
`;

export const Section = styled.div`
  width: 100%;
  background-color: #A9A9A9;
`;

export const WelcomeSection = styled(Section)`
  height: 60vh;
  padding-top: 40vh;
`;

export const ProjectsSection = styled(Section)`
  background-color: #5F9EA0;
  height: 100vh;
`;

export const ContactSection = styled(Section)`
  height: 60vh;
  padding-top: 40vh;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-weight: bold;
  border-radius: 3px;
  color: black;
  border: 2px solid blue;
  margin: 0 1em;
  padding: 0.25em 1em;

  transition: 0.5s all ease-out;

  &:hover {
    background-color: #B0C4DE;
    color: white;
  }

`;

export const NavButton = styled(Button)`
	height: 4vh;

  &:hover {
  }
`;

export const SocialButton = styled(Button)`

  border: 2px solid black;

  &:hover {
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const LoaderInner = styled.div`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #3498db;
  animation: ${spin} 2s linear infinite;

  &:before {
	content: "";
	position: absolute;
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #e74c3c;
	animation: ${spin} 3s linear infinite;
  }

  &:after {
	content: "";
	position: absolute;
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #f9c922;
	animation: ${spin} 1.5s linear infinite;
  }
`;