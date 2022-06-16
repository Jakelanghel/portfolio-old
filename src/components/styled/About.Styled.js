import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  padding: 2rem 1.5rem;
  position: relative;
  margin-bottom: 3rem;
  height: 100%;

  .container-about-copy {
    /* height: 100%; */
    text-align: center;
  }

  h2 {
    text-align: left;
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--dark-accent);
    margin-bottom: 1.5rem;
  }

  .about-body {
    font-size: 1.25rem;
    font-weight: 300;
    text-align: left;
    line-height: 2rem;
    letter-spacing: 1px;
    color: var(--whiteish);
    margin-bottom: 1.5rem;
  }

  .arrow-icon {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
