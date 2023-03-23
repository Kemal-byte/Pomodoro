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

export default PlaceHolderContainer;
