import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Input } from "../../components/Input/Input";
import { Spacer } from "../../components/Spacer/Spacer";
import { Task } from "../../components/Task/Task";
import {
  ItemContainer,
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

  function handleTask(taskToCompleteId: string) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === taskToCompleteId;
    });

    const tempTasks = [...tasks];
      
    tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;

    setTasks(tempTasks);
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
          {tasks.map((eachTask) => (
              <ItemContainer>
                <CheckBox completed={eachTask.isComplete} onClick={() => handleTask(eachTask.id)}/>
                <Spacer widthX={10}/>
                <Task text={eachTask.label} completed={eachTask.isComplete}/>
              </ItemContainer>
          ))}
        </TodoListItem>
      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
