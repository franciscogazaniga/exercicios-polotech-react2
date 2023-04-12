import styled from "styled-components";

export const SpacerContainer = styled.div<{heightY: number; widthX: number}>`
    height: ${(props) => props.heightY}px;
    width: ${(props) => props.widthX}px;
    display: flex;
    align-items: center;
`
