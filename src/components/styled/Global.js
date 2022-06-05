import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-dark: #1D1D1D;
        --secondary-dark: #181818;

        --dark-accent: hsla(171, 98%, 51%, .7);
        /* --dark-accent: #D19353; */

        --light-gray: #5c636c;
        --white: #FBFBFB;

        /* SYNTAX COLORS */
        --syntax-purple: #AD78DD;
        --syntax-blue: #58AFEF;
        --syntax-yellow: #E6B424;
        --syntax-whiteish: #CEB06C;

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--primary-dark);
    }

    .filter-accent {
        filter: invert(71%) sepia(97%) saturate(423%) hue-rotate(102deg) brightness(110%) contrast(98%);    }
`;

export default GlobalStyles;
