import styles from './ToDoList.module.css'
import { EmptyList } from './EmptyList'
import { ToDoItem } from './ToDoItem'
import { ToDo, useToDo } from '../hooks/useToDo';

interface ToDoListProps {
  toDos: ToDo[];
}

export function ToDoList({ toDos }: ToDoListProps) {
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
        {toDos.length > 0 ? (
          toDos.map(task => (
            <ToDoItem key={task.id} {...task} />
          ))
        ) : (
          <EmptyList />
        )}
      </main>
      
    </div>
  )
}