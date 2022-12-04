import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h2>INPUT</h2>
        <div>
          <h2>TO-DO LIST</h2>
        </div>
      </div>
    </div>
  )
}

export default App
