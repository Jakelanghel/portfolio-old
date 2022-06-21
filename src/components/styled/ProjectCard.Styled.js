import styled from "styled-components";

export const StyledProjectCard = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--white);
  border-radius: 15px;
  box-shadow: var(--dark-accent) 0px 0px 100px -20px;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
    color: var(--secondary-dark);
  }

  .container-project:hover {
    cursor: pointer;
  }

  .project-img {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    border-radius: 15px;
    margin-bottom: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  h2 {
    color: var(--primary-dark);
    font-size: 1.25rem;
    padding: 0.25rem 0;
  }

  p {
    padding: 0.5rem 0;
    color: var(--primary-dark);
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
