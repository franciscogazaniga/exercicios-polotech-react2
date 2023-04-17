import { TrashSimple } from "@phosphor-icons/react";
import { Span } from "./RemoveTaskIcon.styles";
import { IRemoveTaskIcon } from "./RemoveTaskIcon.types";

export function RemoveTaskIcon({onClick}: IRemoveTaskIcon) {
  return(
    <Span onClick={onClick}>
      <TrashSimple color="#ffa1a1" size={25}/>
    </Span>
  )
}