import styled from 'styled-components';

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
`;

export const WelcomeSection = styled(Section)`
  background-color: #e74c3c;
  height: 60vh;
  padding-top: 40vh;
`;

export const ProjectsSection = styled(Section)`
  background-color: green;
  height: 100vh;
`;

export const ContactSection = styled(Section)`
  background-color: blue;
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
    background-color: palevioletred;
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