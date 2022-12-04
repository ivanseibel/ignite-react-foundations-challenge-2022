import styles from './EmptyList.module.css';
import clipboard from '../assets/clipboard.svg'

export const EmptyList = () => {
  return (
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
  )
}