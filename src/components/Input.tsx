import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { v4 } from 'uuid';

import { ToDo } from '../hooks/useToDo';

import styles from './Input.module.css'

interface InputProps {
  onCreateNewToDo: (newToDo: ToDo) => void;
}

export function Input({ onCreateNewToDo }: InputProps) {
  const [description, setDescription] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    console.log(description)

    const newToDo = {
      id: v4(),
      description,
      isComplete: false
    }

    onCreateNewToDo(newToDo);

    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.input}>
      <input
        className={styles.input}
        value={description}
        onChange={event => setDescription(event.target.value)}
        type="text"
        placeholder="Add a new task"
      />
      <button>
        Add
        <PlusCircle size={16} />
      </button>
    </form>
  )
}