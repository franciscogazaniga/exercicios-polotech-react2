import {
  ListContainer,
} from "./Listview.styles";
import { TasksBox } from "components/TasksBox/TasksBox";
import { AddTask } from "components/AddTask/AddTask";

const Listview = () => {
  return (
    <ListContainer>
      <AddTask />
      <TasksBox />
    </ListContainer>
  );
};

export default Listview;
