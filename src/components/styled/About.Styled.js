import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  position: relative;
  margin-bottom: 3rem;

  h2 {
    max-width: 350px;
    text-align: left;
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--dark-accent);
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .about-body {
    max-width: 350px;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: left;
    line-height: 2rem;
    letter-spacing: 1px;
    color: var(--whiteish);
    margin-bottom: 1rem;
  }

  .container-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-around;
    height: 100%;
    padding: 0;

    h2 {
      margin-bottom: 1.5rem;
      max-width: 500px;
    }

    .about-body {
      font-size: 1.5rem;
      max-width: 500px;
      min-width: 400px;
    }

    .container-arrow {
      display: none;
    }
  }
`;
