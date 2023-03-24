import styled from "styled-components";

const PlaceHolderContainer = styled.div`
  /* ... */
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: 500px;
  z-index: 2;
`;
export const PlaceHolderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: 1;
`;
export const PieFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PieLegend = styled.ul`
  list-style: none;
  font-weight: 900;
  text-align: left;
`;
export const PieLegendItem = styled.li`
  font-weight: 900;
`;
export const PieLegendContainer = styled.div`
  width: 40%;
  min-width: 150px;
  margin-top: 2rem;
`;
export const DonutContainer = styled.div`
  width: 60%;
`;

export default PlaceHolderContainer;
