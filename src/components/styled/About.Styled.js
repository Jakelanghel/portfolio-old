import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 3rem;
  position: relative;

  h2 {
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--dark-accent);
    margin-bottom: 3rem;
  }

  .about-body {
    font-size: 1.25rem;
    line-height: 2rem;
    color: var(--whiteish);
    padding: 0.75rem;
  }

  .stx {
    font-size: 1.35rem;
    color: var(--syntax-red);

    span {
      color: var(--light-gray);
    }
  }

  .stx-open {
    text-align: left;
    padding-left: 1rem;
  }
  .stx-close {
    text-align: right;
    padding-right: 1rem;
  }
`;
