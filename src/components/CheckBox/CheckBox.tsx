import { CheckBoxCircle } from "./CheckBox.styles";
import { ICheckBoxTypes } from "./CheckBox.types";

export const CheckBox = ({completed = false, urgent = false, onClick}: ICheckBoxTypes) => {
  return (
    <CheckBoxCircle completed={completed} urgent={urgent} onClick={onClick}/>
  );
};
