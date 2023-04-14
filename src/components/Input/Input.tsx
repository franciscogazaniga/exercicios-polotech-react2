import { InputContainer } from "./Input.styles";
import { IInputProps } from "./Input.types";

export function Input({placeholder, value, onChange, onKeyPress}: IInputProps) {
  return(
    <InputContainer placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress}></InputContainer>
  )
}