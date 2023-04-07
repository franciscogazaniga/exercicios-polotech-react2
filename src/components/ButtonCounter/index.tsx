import React, { useState } from 'react';

interface IButtonProps {
  title: string,
  active?: boolean,
  actualNumber: (data: number) => void,
}

export function ButtonCounter({title, active, actualNumber}: IButtonProps) {
  const[counter, setCounter] = useState(0)
  actualNumber(counter)

  return(
    <button onClick={() => setCounter(counter + 1)}>{title} {counter}</button>
  )
}