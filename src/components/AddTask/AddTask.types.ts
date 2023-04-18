import { ITaskState } from "screens/Listview/Listview.types";

export interface IAddTaskProps {
  tasks: ITaskState[];
  setTasks: (val: ITaskState[]) => void;
}