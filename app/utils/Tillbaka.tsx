'use client';

import React from 'react'
import styles from '../../styles/dokumenter.module.scss';
import  Link  from 'next/link';
import { useRouter } from 'next/navigation'

const Tillbaka = () => {

const router = useRouter()

const handelTillbaka=(e:any) => {
    e.preventDefault()
    router.push('/')
  }


  return (
    <div className={styles.loggain_tillbaka}>
        <Link onClick={handelTillbaka} href='/' className={styles.loggain_link}><p>Huvudsidan</p></Link>
    </div>
  )
}

export default Tillbaka