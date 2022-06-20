import styled from "styled-components";

export const StyledProjects = styled.main`
  width: 100%;

  .container-filter {
    width: 80%;
    display: flex;
    justify-content: space-around;
    background-color: var(--white);
    margin: 0 auto;
    border-radius: 25px;
  }

  .filter-btn {
    width: 100%;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--light-gray);
    background: transparent;
    border: none;
    padding: 0.75rem 1.75rem;
    border-radius: 25px;
  }

  .active {
    background-color: var(--dark-accent);
    color: var(--primary-dark);
    color: var(--white);
  }

  .container-projects {
    width: 80%;
    margin-top: 3rem;
    padding: 1rem;
    background-color: white;
    margin: 3rem auto;
    border-radius: 15px;
    box-shadow: var(--dark-accent) 0px 0px 100px -20px;
  }

  a {
    text-decoration: none;
    color: var(--secondary-dark);
  }

  .container-project {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .container-project:hover {
    cursor: pointer;
  }

  .project-img {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.25rem;
    padding: 0.25rem 0;
  }

  p {
    padding: 0.5rem 0;
  }

  .container-links {
    display: flex;
    justify-content: space-between;
  }

  .repo-link {
    width: 135px;
    color: var(--dark-accent);
    letter-spacing: 1px;
    border: solid 2px var(--dark-accent);
    background-color: var(--dark-accent);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    margin-top: 1rem;
    color: white;
  }
`;
