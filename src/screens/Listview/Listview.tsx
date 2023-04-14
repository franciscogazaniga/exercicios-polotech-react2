import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Input } from "../../components/Input/Input";
import { Spacer } from "../../components/Spacer/Spacer";
import {
  ListContainer,
  TodoListContainer,
  TodoListItem,
} from "./Listview.styles";
import { ITaskState } from "./Listview.types";

const Listview = () => {
  const[tasks, setTasks] = useState<ITaskState[]>([])
  const[newTaskLabel, setNewTaskLabel] = useState("")
  
  const addTask = (label: string) => {
    const id = nanoid()
    setTasks((tasks) => [...tasks, {id, label, isComplete:false}])
  }

  const handleTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }

  const handleTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && newTaskLabel !== "") {
      addTask(newTaskLabel)
      setNewTaskLabel("")
    }
  }

  const[taskCompleted, setTaskCompleted] = useState(false)

  function handleTask() {
    setTaskCompleted(!taskCompleted)
  }

  return (
    <ListContainer>
      <Spacer heightY={4} />
      <Input 
        placeholder="Digite uma tarefa"
        value={newTaskLabel}
        onChange={handleTaskLabelChange}
        onKeyPress={handleTaskKeyPress}
      />

      <TodoListContainer>
        <TodoListItem>
          {tasks.map((eachTask, key) => (
              <>
                <CheckBox id={key} completed={taskCompleted} onClick={() => handleTask()}/>
                <Spacer widthX={10} />
                {eachTask.label} 
              </>
          ))}
        </TodoListItem>
      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
