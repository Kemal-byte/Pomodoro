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
  ${TaskBaseStyles}
  width: 400px;
  height: auto;
  border: none;
  outline: none;
  @media screen and (max-width: 545px) {
    width: 90%;
    line-height: 35px;
  }
`;

export const TaskButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: solid 2px transparent; /* Add a transparent outline by default */
  &:hover {
    outline: solid 2px #2c2713; /* Change the color of the outline on hover */
  }
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  border: none;
`;
export const TaskRemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export default TaskContainer;
