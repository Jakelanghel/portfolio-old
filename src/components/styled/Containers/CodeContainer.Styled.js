import styled from "styled-components";

export const StyledCodeContainer = styled.div`
  min-width: 315px;
  min-height: 275px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 3rem auto;
  margin-bottom: 5rem;

  @media screen and (min-width: 400px) {
    min-width: 345px;
  }
`;
