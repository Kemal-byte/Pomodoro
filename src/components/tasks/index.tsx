import React from "react";
import TaskContainer, { Task } from "./index.styled";
export default () => {
  return (
    <TaskContainer>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
    </TaskContainer>
  );
};
