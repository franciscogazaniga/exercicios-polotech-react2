import React, { useState } from 'react';
import { ButtonCounter } from "../ButtonCounter";
import './styles.css';

import { NumberArray } from "../NumberArray";

export function MainSection() {
  const[actualNumberOfCounter, setActualNumberOfCounter] = useState(0)
  const arrayOfNumbers = [0,1,2,3,4]

  function callbackActualNumberCount(childData: number) {
    return setActualNumberOfCounter(childData)
  }

  return(
    <div className='container'>
      <NumberArray numbers={arrayOfNumbers} actualNumber={actualNumberOfCounter}/>
      <ButtonCounter title='Clique aqui para contar: ' actualNumber={callbackActualNumberCount}/>
    </div>
  )
}