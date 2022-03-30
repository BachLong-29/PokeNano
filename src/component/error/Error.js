import React from 'react'
import styles from './Error.module.scss'

const Error = () => {
  return (
    <div className={styles.frame}>
      <h1>Page Not Found</h1>
      <img
        src='https://i.imgur.com/knud03D.png'
        height='300px'
        width='300px'
      />
    </div>
  )
}

export default Error