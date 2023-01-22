import styled from "styled-components";

export const GridRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 2vw;

  @media (max-width: 900px) {
    display: block;
  }
`;

export default GridRow;
