import { Binoculars, NotePencil } from "@phosphor-icons/react";
import { Input } from "components/Input/Input";
import { TodoItem } from "components/ToDoItem/ToDoItem";
import { useTask } from "context/task.context";
import { useMemo } from "react";
import { NoTaskContainer, TaskInfo, TasksInfoContainer, TodoListContainer, TodoListItem } from "./TasksBox.styles";
export function TasksBox() {
  const{tasks,searchTask, setSearchTask, taskFilter, handleTaskComplete, handleTaskRemove} = useTask()

  const tasksIsEmpty = tasks.length === 0
  const searchTaskIsEmpty = tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTask.toLowerCase())).length === 0

  const TasksInfo = useMemo(() => {
    const tasksAmount = tasks.length
    const tasksCompletedAmount = tasks.filter((eachTask) => eachTask.isComplete).length
    const taskIncompletedAmount = tasks.filter(eachTask => eachTask.isComplete === false).length

    return(
      <>
        <TaskInfo>Tarefas: {tasksAmount}</TaskInfo>
        <TaskInfo>Tarefas Concluídas: {tasksCompletedAmount}</TaskInfo>
        <TaskInfo>Tarefas Pendentes: {taskIncompletedAmount}</TaskInfo>
      </>
    )
  }, [tasks])

  return(
    <>
      <TasksInfoContainer>
        {TasksInfo}
      </TasksInfoContainer>

      <TodoListContainer>
        <Input 
          placeholder="Buscar tarefa"
          value={searchTask}
          onChange={(event) => setSearchTask(event.target.value)}
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
              taskFilter
              .map((eachTask, key) => (
                  TodoItem(key, eachTask, handleTaskComplete, handleTaskRemove)
              ))
            }
          </TodoListItem>
        }
      </TodoListContainer>
    </>
  )
}


