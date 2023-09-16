import React from 'react'
import styles from '../../styles/dokumenter.module.scss';

interface Props {
    children: React.ReactNode;
    
  }

const Button:React.FC<Props> = ({children}) => {
  return (
    <button className={styles.loggain_btn}>{children}</button>
  )
}

export default Button