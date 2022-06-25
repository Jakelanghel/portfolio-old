import styled from "styled-components";

export const StyledCodeContainer = styled.div`
  min-width: 315px;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 3rem auto;
  margin-bottom: 5rem;

  @media screen and (min-width: 400px) {
    min-width: 385px;
  }

  @media screen and (min-width: 650px) {
    min-width: 425px;
    margin: 5rem auto;
  }

  @media screen and (min-width: 900px) {
    min-width: 525px;
    margin-bottom: 5rem;
  }
`;
