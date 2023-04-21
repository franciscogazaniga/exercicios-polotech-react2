import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "components/Input/Input";
import { Spacer } from "components/Spacer/Spacer";
import { useTask } from "context/task.context";
import { ChangeEvent, KeyboardEvent } from "react";
import { AddButton, InputContainer } from "./AddTask.styles";

export function AddTask() {
  const{handleAddTask, taskLabel, setTaskLabel} = useTask()

  const handleTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(event.target.value)
  }

  const handleNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && taskLabel !== "") {
      handleAddTask(taskLabel);
    }
  }

  return(
    <>
      <Spacer heightY={4} />
      <InputContainer>
        <Input 
          placeholder="Inserir tarefa"
          value={taskLabel}
          onChange={handleTaskLabelChange}
          onKeyPress={handleNewTaskKeyPress}
        />
        <AddButton onClick={() => handleAddTask(taskLabel)}>
          <PlusCircle color="white" size={32} />
        </AddButton>
      </InputContainer>
    </>
  )
}