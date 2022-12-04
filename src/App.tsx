import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { ToDoList } from './components/ToDoList'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input />
        <ToDoList />
      </main>
    </div>
  )
}

export default App
