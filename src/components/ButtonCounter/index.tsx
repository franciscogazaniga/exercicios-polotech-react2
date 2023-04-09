import React, { useState } from 'react';
import './styles.css';

interface IButtonProps {
  title: string,
  active?: boolean,
  actualNumber: (data: number) => void,
}

export function ButtonCounter({title, active = true, actualNumber}: IButtonProps) {
  const[counter, setCounter] = useState(0)
  actualNumber(counter)

  return(
    <button className={'button'} disabled={!active} onClick={() => setCounter(counter + 1)}>{title} <span className={counter % 2 === 0 ? 'blue' : 'green'}>{counter}</span></button>
  )
}