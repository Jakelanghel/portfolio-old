import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-dark: #1D1D1D;
        --secondary-dark: #181818;
        --white: #DBDBDB;

        --dark-accent: #58AFEF;

        --light-gray: #5c636c;
        --whiteish: #abb2ad;;

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
        filter: invert(55%) sepia(86%) saturate(463%) hue-rotate(176deg) brightness(102%) contrast(87%);
    }
    `;

export default GlobalStyles;
