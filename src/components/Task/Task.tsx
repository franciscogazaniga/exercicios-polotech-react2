import { TaskContainer } from "./Task.styles";
import { ITaskProps } from "./Task.types";

export function Task({text, completed}: ITaskProps) {
  return(
    <TaskContainer completed={completed}>
      {text}
    </TaskContainer>
  )
}