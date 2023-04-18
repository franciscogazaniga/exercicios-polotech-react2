import styled from "styled-components"

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

export const NoTaskContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    text-align: center;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const CheckBoxAndTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`