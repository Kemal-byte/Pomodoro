import { TaskRemoveButton, TaskStyled, TaskWrapper } from "./index.styled";
import Circle from "@/assets/Circle.svg";
const TaskItem = ({ index, task, onRemove }) => {
  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <TaskWrapper>
      <TaskRemoveButton onClick={handleRemove}>
        <img src={Circle} alt="" />
      </TaskRemoveButton>
      <TaskStyled>{task}</TaskStyled>
    </TaskWrapper>
  );
};

export default TaskItem;
