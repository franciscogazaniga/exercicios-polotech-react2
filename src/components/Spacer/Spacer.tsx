import { SpacerContainer } from "./Spacer.styles";
import { ISpacerProps } from "./Spacer.types";

export function Spacer({content, heightY, widthX}: ISpacerProps) {
  return(
    <SpacerContainer heightY={heightY} widthX={widthX}>
      {content}
    </SpacerContainer>
  )
}