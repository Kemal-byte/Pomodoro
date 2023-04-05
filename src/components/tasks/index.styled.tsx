import styled, { css } from "styled-components";
import Colors from "../../utilities/commonCss/colors";

const TaskContainer = styled.div`
  /* ... */
  display: flex;
  padding-top: 63px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  position: relative;
  top: -63px;
  height: auto;
`;
export const TaskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  &:hover {
    outline: 1px solid #fff;
  }
  /* &:focus {
    outline: 1px solid #000000;
  } */
  background-color: ${Colors.primaryYellow};
`;
const TaskBaseStyles = css`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  text-align: start !important;
  line-height: 25px;
  padding: 2px 10px;
  background-color: transparent;
`;
export const TaskStyled = styled.div`
  ${TaskBaseStyles}
`;
export const TaskInput = styled.input`
  width: 400px;
  height: auto;
  background-color: transparent;
  padding: 2px 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  text-align: start !important;
  line-height: 25px;
  border: none;
  outline: none;
  @media screen and (max-width: 545px) {
    width: 90%;
    /* height: 50px; */
    line-height: 35px;
  }

  /* &:hover {
    outline: 1px solid #fff;
  }
  &:focus {
    outline: 1px solid #000000;
  } */
`;
// export Task

export const TaskButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #000000;
`;
export const TaskRemoveButton = styled(TaskButton)`
  border: 2px solid #df0000;
`;

export default TaskContainer;
