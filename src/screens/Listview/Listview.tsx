import { useEffect, useState } from "react";
import {
  ListContainer,
} from "./Listview.styles";
import { ITaskState } from "./Listview.types";
import { TasksBox } from "components/TasksBox/TasksBox";
import { AddTask } from "components/AddTask/AddTask";

const Listview = () => {
  const[tasks, setTasks] = useState<ITaskState[]>([])

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
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TasksBox tasks={tasks} setTasks={setTasks}/>
    </ListContainer>
  );
};

export default Listview;
