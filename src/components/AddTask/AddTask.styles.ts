import styled from "styled-components"

export const InputContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 75px;
    width: 30rem;
`
export const AddButton = styled.button`
    width: 4rem;
    margin: 0px 0px 0px 4px;
    border: none;
    border-radius: 8px;
    background-color: #2D59B7;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        filter: brightness(120%);
    }
`