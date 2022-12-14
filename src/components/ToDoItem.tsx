import { Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styles from './ToDoItem.module.css';
import { ToDo } from '../hooks/useToDo';

interface ToDoItemProps extends ToDo {
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}


export const ToDoItem = ({ id, description, isComplete, onToggle, onDelete }:ToDoItemProps) => {
  function handleToggle() {
    onToggle(id)
  }

  function handleDelete() {
    if (!isComplete) {
      alert('You must complete the task before deleting it.')
      return
    }
    onDelete(id)
  }

  return (
    <div className={styles.toDoItem}>
      <Checkbox.Root 
        id={`c1-${id}`}
        onCheckedChange={handleToggle}
      >
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={`c1-${id}`}>
        {description}
      </label>
      <button 
        type="button" 
        className={styles.deleteButton}
        onClick={handleDelete} 
      >
        <Trash width={14} />
      </button>
    </div>
  )
}