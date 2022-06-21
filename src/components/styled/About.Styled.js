import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
  position: relative;
  margin-bottom: 3rem;

  .container-about-copy {
    height: 85vh;
  }

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

  .arrow-icon {
  }
`;
