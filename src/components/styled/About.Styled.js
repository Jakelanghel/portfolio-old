import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  padding: 2rem 1.5rem;
  position: relative;
  margin-bottom: 3rem;

  .container-about-copy {
    margin-bottom: 3rem;
  }

  h2 {
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
    line-height: 2.25rem;
    letter-spacing: 1px;
    color: var(--whiteish);
    margin-bottom: 1.5rem;
  }

  .stx {
    font-size: 1.25rem;
    color: var(--syntax-red);

    span {
      color: var(--light-gray);
      margin: 0;
    }
  }

  .stx-open {
    text-align: left;
  }
  .stx-close {
    text-align: left;
  }
`;
