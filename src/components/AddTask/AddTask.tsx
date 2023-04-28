import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "components/Input/Input";
import { Spacer } from "components/Spacer/Spacer";
import { useTask } from "context/task.context";
import { ChangeEvent, KeyboardEvent, useCallback } from "react";
import { AddButton, InputContainer } from "./AddTask.styles";
import { IAddTaskProps } from "./AddTask.types";

export function AddTask({ urgentTask = false}: IAddTaskProps) {
  const{handleAddTask, taskLabel, setTaskLabel, taskLabelUrgent, setTaskLabelUrgent} = useTask()

  const handleTaskLabelChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(event.target.value)
  }, [setTaskLabel])

  const handleTaskLabelChangeUrgent = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTaskLabelUrgent(event.target.value)
  }, [setTaskLabelUrgent])

  const handleNewTaskKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && taskLabel !== "") {
      handleAddTask(taskLabel, false);
    }
  }, [taskLabel, handleAddTask])

  const handleNewTaskKeyPressUrgent = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter" && taskLabelUrgent !== "") {
      handleAddTask(taskLabelUrgent, true);
    }
  }, [handleAddTask, taskLabelUrgent])

  return(
    <>
      <Spacer heightY={4} />
      <InputContainer urgentTask={urgentTask}>
        {
          urgentTask ? 
          <>
          <Input 
            placeholder="Inserir tarefa urgente"
            value={taskLabelUrgent}
            onChange={handleTaskLabelChangeUrgent}
            onKeyPress={handleNewTaskKeyPressUrgent}
          />

          <AddButton urgentTask={urgentTask} onClick={() => handleAddTask(taskLabelUrgent, true)}>
            <PlusCircle color="white" size={32} />
          </AddButton>
          </>
          :
          <>
          <Input 
            placeholder="Inserir tarefa"
            value={taskLabel}
            onChange={handleTaskLabelChange}
            onKeyPress={handleNewTaskKeyPress}
          />

          <AddButton urgentTask={urgentTask} onClick={() => handleAddTask(taskLabel, false)}>
            <PlusCircle color="white" size={32} />
          </AddButton>
          </>
        }


      </InputContainer>
    </>
  )
}