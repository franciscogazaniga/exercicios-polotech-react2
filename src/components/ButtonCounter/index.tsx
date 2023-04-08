import React, { useState } from 'react';
import './styles.css';

interface IButtonProps {
  title: string,
  active?: boolean,
  actualNumber: (data: number) => void,
}

export function ButtonCounter({title, active, actualNumber}: IButtonProps) {
  const[counter, setCounter] = useState(0)
  actualNumber(counter)

  return(
    <button className='button' onClick={() => setCounter(counter + 1)}>{title} {counter}</button>
  )
}