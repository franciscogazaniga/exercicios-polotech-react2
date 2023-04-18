import { ITaskState } from "screens/Listview/Listview.types";

export interface ITaskBoxProps {
  tasks: ITaskState[];
  setTasks: (val: ITaskState[]) => void;
}