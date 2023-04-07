import React, { useState } from 'react';
import { ButtonCounter } from "../ButtonCounter";
import { NumberArray } from "../NumberArray";

export function MainSection() {
  const[actualNumberOfCounter, setActualNumberOfCounter] = useState(0)

  function callbackActualNumberCount(childData: number) {
    console.log("Numero atual" + childData)
    return setActualNumberOfCounter(childData)
  }

  return(
    <div>
      {
        actualNumberOfCounter % 2 === 0 ? <></> : <NumberArray numbers={[0,1,2,3,4]}/>
      }
      
      <ButtonCounter title='Clique aqui para contar: ' actualNumber={callbackActualNumberCount}/>
    </div>
  )
}