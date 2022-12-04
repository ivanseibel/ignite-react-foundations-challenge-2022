import styles from './ToDoList.module.css'
import { EmptyList } from './EmptyList'

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
        <EmptyList />
      </main>
      
    </div>
  )
}