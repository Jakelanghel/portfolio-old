import styled from "styled-components";

export const StyledSkills = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;

  h2 {
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    color: var(--whiteish);
  }

  .container-flex {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .container-skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-skill {
    width: 40%;
    margin-bottom: 2.5rem;
    border-radius: 10%;
  }

  .skill-img {
    width: 70%;
    max-width: 75px;
  }

  @media screen and (min-width: 900px) {
    margin: 0;

    h3 {
      min-width: 100px;
      display: flex;
      justify-content: center;
    }

    .container-flex {
      min-width: 350px;
      max-width: 600px;
    }

    .container-skill {
      width: 25%;
      margin-bottom: 2.5rem;
      border-radius: 10%;
    }

    .skill-img {
      max-width: 50px;
    }
  }
`;
