import styled from "styled-components";
import { globalColorsObject } from "../../styles";

export const CheckBoxCircle = styled.button<{completed: boolean, urgent: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 20px;
    width: 20px;
    border: 2px solid ${(props) => 
    props.urgent ? "red" : globalColorsObject.primaryColor};
    border-radius: 100%;
    cursor: pointer;
    background-color: ${(props) =>
    (props.completed && props.urgent) 
        ? "red"
        : (props.completed && !props.urgent) 
            ? globalColorsObject.primaryColor
            : 'gray'};
    transition: all 100ms;
`
