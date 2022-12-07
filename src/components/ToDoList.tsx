import styles from './ToDoList.module.css'
import { EmptyList } from './EmptyList'
import { ToDoItem } from './ToDoItem'
import { ToDo, useToDo } from '../hooks/useToDo';

interface ToDoListProps {
  toDos: ToDo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  totalCompleted: number;
}

export function ToDoList({ toDos, onToggle, onDelete, totalCompleted }: ToDoListProps) {
  return (
    <div className={styles.toDo}>
      <header>
        <div className={styles.createdSummary}>
          <span>Created</span>
          <div className={styles.summary}>{toDos.length}</div>
        </div>

        <div className={styles.dueSummary}>
          <span>Completed</span>
          <div className={styles.summary}>{totalCompleted} of {toDos.length}</div>
        </div>
      </header>

      <main className={styles.toDoList}>
        {toDos.length > 0 ? (
          toDos.map(task => (
            <ToDoItem 
              key={task.id}
              onToggle={onToggle} 
              onDelete={onDelete}
              {...task} 
            />
          ))
        ) : (
          <EmptyList />
        )}
      </main>
      
    </div>
  )
}