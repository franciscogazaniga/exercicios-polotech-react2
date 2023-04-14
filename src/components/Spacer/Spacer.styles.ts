import styled from "styled-components";

export const SpacerContainer = styled.div<{heightY: number | undefined; widthX: number | undefined}>`
    height: ${(props) => props.heightY || 30}px};
    width: ${(props) => props.widthX || 30}px};
    display: flex;
    align-items: center;
`
