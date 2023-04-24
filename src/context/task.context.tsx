import { nanoid } from "nanoid";
import { createContext, useContext, useEffect, useState } from "react";
import { ITaskState } from "screens/Listview/Listview.types";

interface ITaskContext {
  tasks: ITaskState[],
  searchTask: string,
  setSearchTask: React.Dispatch<React.SetStateAction<string>>,
  taskFilter: ITaskState[], 
  handleAddTask: (label: string) => void,
  handleTaskComplete: (taskToCompleteId: string) => void,
  handleTaskRemove: (taskToRemove: string) => void,
  taskLabel: string,
  setTaskLabel: React.Dispatch<React.SetStateAction<string>>,
  taskLabelUrgent: string,
  setTaskLabelUrgent: React.Dispatch<React.SetStateAction<string>>,
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext)

interface ITaskProviderProps {
  children: React.ReactNode
}

const TaskProvider = ({ children }: ITaskProviderProps) => {
  const[tasks, setTasks] = useState<ITaskState[]>([])
  const[taskLabel, setTaskLabel] = useState("")
  const[taskLabelUrgent, setTaskLabelUrgent] = useState("")
  const[searchTask, setSearchTask] = useState("")
  const[taskFilter, setTaskFilter] = useState<ITaskState[]>([])

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
      setTaskLabel("");
      setTaskLabelUrgent("");
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

  const handleTaskRemove = (taskToRemove: string) => {
    const tempTasks = [...tasks];
    const newTasks = tempTasks.filter((eachTask) => !eachTask.id.includes(taskToRemove))

    setTasks(newTasks);
    saveTasksOnLocalStorage(newTasks)
  }

  function saveTasksOnLocalStorage(updateTasks: ITaskState[]) {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem("tasks", tasksString)
  }

  useEffect(() => {
    const taskList = tasks.filter((eachTask) => eachTask.label.toLowerCase().includes(searchTask.toLowerCase()))
    setTaskFilter(taskList)
  }, [searchTask, tasks])

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

  return(
    <TaskContext.Provider
      value={{
        tasks,
        searchTask,
        setSearchTask,
        taskFilter,
        handleAddTask,
        handleTaskComplete,
        handleTaskRemove,
        taskLabel,
        setTaskLabel,
        taskLabelUrgent,
        setTaskLabelUrgent,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }