import styled from "styled-components";
import Colors from "../../utilities/commonCss/colors";
const TimerContainer = styled.div`
  /* ... */
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Timer = styled.div`
  font-size: 128px !important;
  font-weight: 900;
`;
export const TimerStart = styled.button`
  font-size: 24px;
  font-weight: 700;
  width: 157px;
  height: 54px;
  line-height: 29px;
  letter-spacing: 6px;
  background-color: ${Colors.primaryYellow};
  border-radius: 37px;
  cursor: pointer;
`;

export default TimerContainer;
