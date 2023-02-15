import React from "react";
import TaskContainer, { Task } from "./index.styled";
export default () => {
  /**
   * Task items are input boxes, they should be containers that include input texts
   * Dont forget to include Cross and circle icons in them.
   */
  return (
    <TaskContainer>
      <Task defaultValue="✅ Add a new task"></Task>
      {/* <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task>
      <Task defaultValue="✅ Add a new task"></Task> */}
    </TaskContainer>
  );
};
