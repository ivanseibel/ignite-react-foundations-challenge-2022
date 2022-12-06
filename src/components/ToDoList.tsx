import styles from './ToDoList.module.css'
import { EmptyList } from './EmptyList'
import { ToDoItem } from './ToDoItem'

const tasks = [
  {
    id: 1,
    description: 'Ut dolor sunt proident amet sit enim et irure.',
    isComplete: false
  },
  {
    id: 2,
    description: 'Mollit laborum cillum pariatur et adipisicing aliquip officia pariatur esse Lorem eiusmod exercitation mollit.',
    isComplete: false
  },
  {
    id: 3,
    description: 'Exercitation commodo cillum nulla consequat laboris esse amet ad mollit elit cillum non.',
    isComplete: false
  },
  {
    id: 4,
    description: 'Excepteur do ex do id magna veniam enim.',
    isComplete: true
  },
  {
    id: 5,
    description: 'Pariatur ad et adipisicing proident adipisicing.',
    isComplete: true
  }
]

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
        {tasks.length > 0 ? (
          tasks.map(task => (
            <ToDoItem key={task.id} id={task.id} />
          ))
        ) : (
          <EmptyList />
        )}
      </main>
      
    </div>
  )
}