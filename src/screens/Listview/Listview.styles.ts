import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 30rem;
`

export const TodoListContainer = styled.div`
    background: grey;
    border-radius: 1rem;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const TodoListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem 0rem 0rem;
    align-items: left;
    font-size: 1.2rem;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const InputContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 75px;
    width: 30rem;
`

export const CheckBoxAndTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NoTaskContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
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
        background-color: #65ACEA;
    }
`