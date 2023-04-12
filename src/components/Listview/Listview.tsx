import { useState } from "react";
import { CheckBox } from "../CheckBox/CheckBox";
import {
  ListContainer,
  TodoListContainer,
  TodoListItem,
} from "./Listview.styles";
import { ITaskState } from "./Listview.types";

const Listview = () => {
  const tasks: ITaskState[] = [
    { id: "1", label: "Primeira task", isComplete: false },
  ];

  const[taskCompleted, setTaskCompleted] = useState(false)

  function handleTask() {
    setTaskCompleted(!taskCompleted)
  }

  return (
    <ListContainer>
      <TodoListContainer>
        <TodoListItem>
          {tasks.map((eachTask, key) => (
              <>
                <CheckBox id={key} completed={taskCompleted} onClick={() => handleTask()}/>
                {eachTask.label}
              </>
          ))}
        </TodoListItem>
      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
