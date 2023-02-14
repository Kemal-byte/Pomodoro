import styled from "styled-components";
import Colors from "../../utilities/commonCss/colors";

const TaskContainer = styled.div`
  /* ... */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;
export const Task = styled.input`
  width: 400px;
  height: 63px;
  background-color: ${Colors.primaryYellow};
  padding: 20px 10px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-align: start !important;
  line-height: 23px;
  border-radius: 5px;
  border: none;
  &:hover {
    outline: 1px solid #fff;
  }
  &:focus {
    outline: 1px solid #000000;
  }
`;

export default TaskContainer;
