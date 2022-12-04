import styles from './ToDoList.module.css'
import clipboard from '../assets/clipboard.svg'

export function ToDoList() {
  return (
    <div className={styles.toDo}>
      <header>
        <div className={styles.createdSummary}>
          <span>Created</span>
          <div className={styles.summary}>0</div>
        </div>

        <div className={styles.dueSummary}>
          <span>Due</span>
          <div className={styles.summary}>0</div>
        </div>
      </header>

      <main className={styles.toDoList}>
        <div className={styles.emptyList}>
          <img src={clipboard} alt="Clipboard image" />
          <p>
            <strong>
              You still have no tasks
            </strong>
            <span>
              Add a task to start your day
            </span>
          </p>
        </div>
      </main>
      
    </div>
  )
}