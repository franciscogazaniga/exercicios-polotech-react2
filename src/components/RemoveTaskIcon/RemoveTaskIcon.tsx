import { TrashSimple } from "@phosphor-icons/react";
import { Span } from "./RemoveTaskIcon.styles";
import { IRemoveTaskIcon } from "./RemoveTaskIcon.types";

export function RemoveTaskIcon({onClick}: IRemoveTaskIcon) {
  return(
    <Span onClick={onClick}>
      <TrashSimple color="#FFC93f" size={25}/>
    </Span>
  )
}