import { useState } from "react";
import { CheckBox } from "../CheckBox/CheckBox";
import { Spacer } from "../Spacer/Spacer";
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
                <Spacer heightY={50} widthX={200} content={eachTask.label} />
              </>
          ))}
        </TodoListItem>
      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
