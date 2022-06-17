import styled from "styled-components";

export const StyledSkills = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h2 {
    margin-bottom: 3rem;
  }

  .container-flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .container-skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill-img {
    width: 75px;
  }
`;
