import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Roboto";
	}

	html, body, #app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`;

export default GlobalStyle;