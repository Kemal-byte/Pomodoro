import styled from "styled-components";
import Colors from "../../utilities/commonCss/colors";
const SetContainer = styled.section`
  /* ... */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${Colors.primaryYellow};
  border-radius: 10px;
  padding: 1rem 2rem;
`;
export const SetItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h3``;

export const SelectionColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const ColorSelections = styled.div`
  content: "";
  height: 1rem;
  width: 33%;
  background-color: ${(prop) => prop.color};
`;

export default SetContainer;
