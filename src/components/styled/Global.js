import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-dark: #1D1D1D;
        --secondary-dark: #181818;
        --white: #DBDBDB;

        --dark-accent: hsla(171, 98%, 51%, .7);
        --dark-accent: #E06C75;
        --dark-accent: #14A76C;
        --dark-accent: #58AFEF;
        /* --dark-accent: #D19353; */

        --light-gray: #5c636c;
        --whiteish: #abb2ad;;

        /* SYNTAX COLORS */
        --syntax-purple: #AD78DD;
        --syntax-blue: #58AFEF;
        --syntax-yellow: #E6B424;
        --syntax-whiteish: #CEB06C;
        --syntax-red: #E0665A;
    }

    #root {
        height: 100%;
    }

    html, body {
        height: 100%;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--secondary-dark);
    }

    .filter-gray {
        filter: brightness(0) saturate(100%) invert(39%) sepia(8%) 
                saturate(547%) hue-rotate(174deg) brightness(94%) contrast(91%);    
    }

    .filter-accent {
        filter: brightness(0) saturate(100%) invert(64%) sepia(74%) 
                saturate(6943%) hue-rotate(136deg) brightness(102%) contrast(84%);
    }
    `;

export default GlobalStyles;
