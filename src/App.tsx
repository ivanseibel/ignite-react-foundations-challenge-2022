import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Input />
        <div>
          <h2>TO-DO LIST</h2>
        </div>
      </div>
    </div>
  )
}

export default App
