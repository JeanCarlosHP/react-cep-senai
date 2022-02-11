import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

	body {
		background: #f0f0f5;
	}

	body, input, button {
		font: 16px Roboto, sans-serif;
	}

	#root {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	button {
		cursor: pointer;
	}
`;
