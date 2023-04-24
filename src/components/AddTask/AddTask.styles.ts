import styled from "styled-components"

export const InputContainer = styled.div<{urgentTask: boolean}>`
    position: ${props => props.urgentTask ? "none" : "absolute"};
    display: flex;
    flex-direction: row;
    top: 75px;
    width: 30rem;
    margin-top: ${props => props.urgentTask ? "20px" : "none"};
`
export const AddButton = styled.button<{urgentTask: boolean}>`
    width: 4rem;
    margin: 0px 0px 0px 4px;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.urgentTask ? "red" : "#2D59B7"};
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        filter: brightness(120%);
    }
`