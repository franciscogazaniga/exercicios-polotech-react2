import React, { useState } from 'react';
import './styles.css';

interface INumberArrayProps{
  numbers: number[],
  actualNumber: number
}

export function NumberArray({numbers, actualNumber}: INumberArrayProps) {

  function numerosImpares(numbersArray: number[]) {
    const imparesArray = numbersArray.filter(number => number % 2 != 0)

    const numeros = imparesArray.map((number, key) => {
      return number
    }).join(", ")

    return numeros
    
    //return imparesArray
    //return numbersArray.filter(number => number % 2 != 0)
  }

  return(
    <div className='container'>
      {
        actualNumber % 2 === 0 ?
        <div>O valor atual do contator é par, não exibiremos a lista.</div>
        :
        <div>Lista de números ímpares: {numerosImpares(numbers)}</div>
      }

    </div>
  )
}