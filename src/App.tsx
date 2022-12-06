import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { ToDoList } from './components/ToDoList'
import { useToDo } from './hooks/useToDo'

function App() {
  const { toDos, addToDo } = useToDo();
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input onCreateNewToDo={addToDo} />
        <ToDoList toDos={toDos} />
      </main>
    </div>
  )
}

export default App
