import { PlusCircle } from 'phosphor-react'

import styles from './Input.module.css'

export function Input() {
  return (
    <div className={styles.input}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma tarefa"
      />
      <button>
        Create
        <PlusCircle size={16} />
      </button>
    </div>
  )
}