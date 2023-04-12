import { CheckBoxCircle } from "./CheckBox.styles";
import { ICheckBoxTypes } from "./CheckBox.types";

export const CheckBox = ({completed = false, onClick}: ICheckBoxTypes) => {
  return (
    <CheckBoxCircle completed={completed} onClick={onClick}/>
  );
};
