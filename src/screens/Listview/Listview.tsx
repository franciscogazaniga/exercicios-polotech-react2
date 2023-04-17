import { TrashSimple } from "@phosphor-icons/react";
import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Input } from "../../components/Input/Input";
import { RemoveTaskIcon } from "../../components/RemoveTaskIcon/RemoveTaskIcon";
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
  const[searchTask, setSearchTask] = useState("")
  
  function saveTasksOnLocalStorage(updateTasks: ITaskState[]) {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem("tasks", tasksString)
  }

  const addTask = (label: string) => {
    const id = nanoid()
    const currentTask: ITaskState = {id, label, isComplete:false}
    const updateTasks = [...tasks, currentTask]

    setTasks(updateTasks)
    saveTasksOnLocalStorage(updateTasks)
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
      addTask(newTaskLabel)
      setNewTaskLabel("")
    }
  }

  function handleTaskComplete(taskToCompleteId: string) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === taskToCompleteId;
    });

    const tempTasks = [...tasks];
      
    tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;

    setTasks(tempTasks);
  }

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
      <Input 
        placeholder="Inserir tarefa"
        value={newTaskLabel}
        onChange={handleTaskLabelChange}
        onKeyPress={handleTaskKeyPress}
      />

      <Input 
        placeholder="Buscar tarefa"
        value={searchTask}
        onChange={handleTaskSearchChange}
      />

      <TodoListContainer>
        {tasks.length > 0 ? 
          <TodoListItem>
            {tasks.filter((eachTask) => eachTask.label.includes(searchTask))
            .map((eachTask, key) => (
                <ItemContainer key={key}>
                  <CheckBox completed={eachTask.isComplete} onClick={() => handleTaskComplete(eachTask.id)}/>
                  <Spacer widthX={10}/>
                  <Task text={eachTask.label} completed={eachTask.isComplete}/>
                  <RemoveTaskIcon onClick={() => handleTaskRemove(eachTask.id)}/>
                </ItemContainer>
            ))}
          </TodoListItem>
          :
          <div>
            Você não possui nenhuma tarefa para realizar. Crie uma tarefa!
          </div>
        }

      </TodoListContainer>
    </ListContainer>
  );
};

export default Listview;
