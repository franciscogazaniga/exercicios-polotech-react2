import React from 'react';

interface INumberArrayProps{
  numbers: number[]
}

export function NumberArray({numbers}: INumberArrayProps) {

  function numerosImpares(numbersArray: number[]) {
    return numbersArray.filter(number => number % 2 != 0)
  }

  return(
    <div>
      Lista de números ímpares: {numerosImpares(numbers)}
    </div>
  )
}