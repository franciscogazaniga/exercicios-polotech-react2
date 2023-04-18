import { Binoculars, NotePencil, PlusCircle } from "@phosphor-icons/react";
import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CheckBox } from "components/CheckBox/CheckBox";
import { Input } from "components/Input/Input";
import { RemoveTaskIcon } from "components/RemoveTaskIcon/RemoveTaskIcon";
import { Spacer } from "components/Spacer/Spacer";
import { Task } from "components/Task/Task";
import {
  AddButton,
  CheckBoxAndTaskContainer,
  InputContainer,
  ItemContainer,
  ListContainer,
  NoTaskContainer,
  TodoListContainer,
  TodoListItem,
} from "./Listview.styles";
import { ITaskState } from "./Listview.types";

const Listview = () => {
  const[tasks, setTasks] = useState<ITaskState[]>([])
  const[newTaskLabel, setNewTaskLabel] = useState("")
  const[searchTask, setSearchTask] = useState("")

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

  const handleTaskRemove = (taskToRemove: string) => {
    const tempTasks = [...tasks];
    const newTasks = tempTasks.filter((eachTask) => !eachTask.id.includes(taskToRemove))

    setTasks(newTasks);
    saveTasksOnLocalStorage(newTasks)
  }

  const handleTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }

  const handleTaskSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(event.target.value)
  }

  const handleTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && newTaskLabel !== "") {
      handleAddTask(newTaskLabel)
    }
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

  const tasksIsEmpty = tasks.length === 0
  const searchTaskIsEmpty = tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTask.toLowerCase())).length === 0

  useEffect(() => {
    const fetchTasks = () => {
      const tasksString = localStorage.getItem("tasks")

      if(tasksString) {
        const tasksArray = JSON.parse(tasksString)
        setTasks(tasksArray)
      }
    }
    
    fetchTasks()
  }, [])

  return (
    <ListContainer>
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

    </ListContainer>
  );
};

export default Listview;
