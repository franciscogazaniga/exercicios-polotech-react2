import { Binoculars, NotePencil } from "@phosphor-icons/react";
import { CheckBox } from "components/CheckBox/CheckBox";
import { Input } from "components/Input/Input";
import { RemoveTaskIcon } from "components/RemoveTaskIcon/RemoveTaskIcon";
import { Spacer } from "components/Spacer/Spacer";
import { Task } from "components/Task/Task";
import { ChangeEvent, useMemo, useState } from "react";
import { ITaskState } from "screens/Listview/Listview.types";
import { CheckBoxAndTaskContainer, ItemContainer, NoTaskContainer, TaskInfo, TasksInfoContainer, TodoListContainer, TodoListItem } from "./TasksBox.styles";
import { ITaskBoxProps } from "./TasksBox.types";

export function TasksBox({tasks, setTasks}: ITaskBoxProps) {
  const[searchTask, setSearchTask] = useState("")

  const tasksIsEmpty = tasks.length === 0
  const searchTaskIsEmpty = tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTask.toLowerCase())).length === 0
  const tasksAmount = tasks.length
  const tasksCompletedAmount = tasks.filter((eachTask) => eachTask.isComplete).length

  function saveTasksOnLocalStorage(updateTasks: ITaskState[]) {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem("tasks", tasksString)
  }

  const handleTaskRemove = (taskToRemove: string) => {
    const tempTasks = [...tasks];
    const newTasks = tempTasks.filter((eachTask) => !eachTask.id.includes(taskToRemove))

    setTasks(newTasks);
    saveTasksOnLocalStorage(newTasks)
  }

  function handleTaskComplete(taskToCompleteId: string) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === taskToCompleteId;
    });

    const tempTasks = [...tasks];
      
    tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;

    setTasks(tempTasks);
    saveTasksOnLocalStorage(tempTasks)
  }

  const handleTaskSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(event.target.value)
  }

  useMemo(() => {
    console.log(tasksAmount)
  }, [tasksAmount, tasksCompletedAmount])

  return(
    <>
      <TasksInfoContainer>
        <TaskInfo>Tarefas: {tasksAmount}</TaskInfo>
        <TaskInfo>Tarefas Concluídas: {tasksCompletedAmount}</TaskInfo>
      </TasksInfoContainer>

      <TodoListContainer>
        <Input 
          placeholder="Buscar tarefa"
          value={searchTask}
          onChange={handleTaskSearchChange}
        />

        {tasksIsEmpty ? 
          <NoTaskContainer>
            <NotePencil size={32}/>
            <span>Você não possui nenhuma tarefa para realizar.</span>
            <span>Crie uma!</span>
          </NoTaskContainer>
          :
          <TodoListItem>
            { searchTaskIsEmpty ? 
              <NoTaskContainer>
                <Binoculars size={32}/>
                <span>Nenhuma tarefa encontrada com os termos buscados.</span>
              </NoTaskContainer>
              :
              tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTask.toLowerCase()))
              .map((eachTask, key) => (
                  <ItemContainer key={key}>
                    <CheckBoxAndTaskContainer>
                      <CheckBox completed={eachTask.isComplete} onClick={() => handleTaskComplete(eachTask.id)}/>
                      <Spacer widthX={10}/>
                      <Task text={eachTask.label} completed={eachTask.isComplete}/>
                    </CheckBoxAndTaskContainer>
                    <RemoveTaskIcon onClick={() => handleTaskRemove(eachTask.id)}/>
                  </ItemContainer>
              ))
            }
          </TodoListItem>
        }
      </TodoListContainer>
    </>
  )
}