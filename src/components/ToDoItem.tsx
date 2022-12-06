import { Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styles from './ToDoItem.module.css';

interface ToDoItemProps {
  id: number;
}

export const ToDoItem = ({ id }: ToDoItemProps) => {
  return (
    <div className={styles.toDoItem}>
      <Checkbox.Root className="" id={`c1-${id}`}>
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={`c1-${id}`}>
        Sint adipisicing velit veniam pariatur aliquip duis. Pariatur in anim dolor dolor est labore deserunt nulla ex Lorem. Sit duis enim anim fugiat elit amet cillum deserunt id et sunt dolor.Reprehenderit Lorem officia nisi duis.
      </label>
      <button type="button" className={styles.deleteButton} >
        <Trash width={14} />
      </button>
    </div>
  )
}