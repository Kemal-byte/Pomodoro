import React, { memo, useState } from "react";
import TaskContainer, {
  TaskButton,
  TaskInput,
  TaskWrapper,
} from "./index.styled";
import TaskItem from "./TaskItem";
import Cross from "@/assets/Cross.svg";

const TaskComponent = () => {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [task, setTask] = useState<string>("");

  /**
   * Task items are input boxes, they should be containers that include input texts
   * Dont forget to include Cross and circle icons in them.
   */
  const handleChange = (e: any) => {
    console.log(task);
    setTask(e.target.value);
  };
  const addTask = (newTask: String) => {
    const updatedList = [...todoList, newTask];
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    setTask("");
  };
  const removeTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  return (
    <TaskContainer>
      <TaskWrapper>
        <TaskButton onClick={() => addTask(task)}>
          <img src={Cross} alt="" />
        </TaskButton>
        <TaskInput
          placeholder="✅ Add a new task"
          value={task}
          onChange={handleChange}
        />
      </TaskWrapper>

      {todoList.map((val, index) => (
        <TaskItem key={index} index={index} task={val} onRemove={removeTask} />
      ))}
    </TaskContainer>
  );
};
export default memo(TaskComponent);
