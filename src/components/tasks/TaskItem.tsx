import { Typography } from "@mui/material";
import { TaskRemoveButton, TaskStyled, TaskWrapper } from "./index.styled";

const TaskItem = ({ index, task, onRemove }) => {
  const handleRemove = () => {
    onRemove(index);
  };
  console.log("Inside the racoon", task);

  return (
    <TaskWrapper>
      <TaskRemoveButton onClick={handleRemove}>X</TaskRemoveButton>
      <TaskStyled>{task}</TaskStyled>
    </TaskWrapper>
  );
};

export default TaskItem;
