import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "components/Input/Input";
import { Spacer } from "components/Spacer/Spacer";
import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { ITaskState } from "screens/Listview/Listview.types";
import { AddButton, InputContainer } from "./AddTask.styles";
import { IAddTaskProps } from "./AddTask.types";

export function AddTask({tasks, setTasks}: IAddTaskProps) {
  const[newTaskLabel, setNewTaskLabel] = useState("")

  function saveTasksOnLocalStorage(updateTasks: ITaskState[]) {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem("tasks", tasksString)
  }

  const handleAddTask = (label: string) => {
    const id = nanoid()
    const currentTask: ITaskState = {id, label, isComplete:false}

    const tasksFiltred = tasks.filter((eachTask) => eachTask.label.toLowerCase() === currentTask.label.toLowerCase())

    if(tasksFiltred.length > 0) {
      console.log("Essa task já existe")
    } else {
      const updateTasks = [...tasks, currentTask]

      setTasks(updateTasks)
      saveTasksOnLocalStorage(updateTasks)
      setNewTaskLabel("")
    }
  }

  const handleTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }

  const handleTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && newTaskLabel !== "") {
      handleAddTask(newTaskLabel)
    }
  }

  return(
    <>
      <Spacer heightY={4} />
      <InputContainer>
        <Input 
          placeholder="Inserir tarefa"
          value={newTaskLabel}
          onChange={handleTaskLabelChange}
          onKeyPress={handleTaskKeyPress}
        />
        <AddButton onClick={() => handleAddTask(newTaskLabel)}>
          <PlusCircle color="white" size={32} />
        </AddButton>
      </InputContainer>
    </>
  )
}