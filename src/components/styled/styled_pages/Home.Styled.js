import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  .container-hero {
    display: flex;
    flex-direction: column;
  }

  .container-stx {
    margin-right: 0.5rem;
  }

  .line-indent-1 {
    margin-left: 1.5rem;
  }

  .line-indent-2 {
    margin-left: 2rem;
  }

  @media screen and (min-width: 400px) {
    .line-indent-1 {
      margin-left: 2.5rem;
    }

    .line-indent-2 {
      margin-left: 4rem;
    }
  }

  button {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--dark-accent);
    background-color: transparent;
    border: none;
    border-top: solid 1px var(--dark-accent);
    border-bottom: solid 1px var(--dark-accent);
    border: solid 3px var(--dark-accent);
    border-radius: 10px;
    padding: 1rem 2rem;
    align-self: center;
  }
`;
