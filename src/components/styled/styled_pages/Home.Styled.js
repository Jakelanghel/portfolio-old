import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-stx {
    margin-right: 0.5rem;
  }

  .stx-indent-1 {
    margin-left: 1rem;
  }

  .line-indent-1 {
    margin-left: 1.5rem;
  }

  .line-indent-2 {
    margin-left: 2rem;
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
