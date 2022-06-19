import styled from "styled-components";

export const StyledProjects = styled.main`
  width: 100%;

  .container-filter {
    width: 65%;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    margin: 0 auto;
    border-radius: 25px;
  }

  .filter-btn {
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--light-gray);
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
  }

  .active {
    background-color: var(--dark-accent);
    color: var(--primary-dark);
  }
`;
