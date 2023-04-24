import { CheckBox } from "components/CheckBox/CheckBox";
import { RemoveTaskIcon } from "components/RemoveTaskIcon/RemoveTaskIcon";
import { Spacer } from "components/Spacer/Spacer";
import { Task } from "components/Task/Task";
import { CheckBoxAndTaskContainer, ItemContainer } from "components/TasksBox/TasksBox.styles";
import { ITaskState } from "screens/Listview/Listview.types";

export function TodoItem(key: number, eachTask: ITaskState, handleTaskComplete: (taskToCompleteId: string) => void, handleTaskRemove: (taskToRemove: string) => void): JSX.Element {
  return <ItemContainer key={key}>
    <CheckBoxAndTaskContainer>
      <CheckBox completed={eachTask.isComplete} onClick={() => handleTaskComplete(eachTask.id)} />
      <Spacer widthX={10} />
      <Task text={eachTask.label} completed={eachTask.isComplete} />
    </CheckBoxAndTaskContainer>
    <RemoveTaskIcon onClick={() => handleTaskRemove(eachTask.id)} />
  </ItemContainer>;
}