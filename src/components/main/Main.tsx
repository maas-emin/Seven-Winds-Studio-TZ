import { FC } from 'react'
import Table from './Table'
import styles from './Main.module.scss'

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.main_text}>Строительно-монтажные работы</div>
      </div>
      <Table />
    </div>
  )
}

export default Main
