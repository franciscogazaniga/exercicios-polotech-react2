import styled from "styled-components";

export const TaskContainer = styled.div<{completed: boolean}>`
  text-decoration: ${props => props.completed ? "line-through" : "none"};
  color: ${props => props.completed ? "#303030" : "white"};;
`