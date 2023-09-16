'use client';

import React from 'react'
import styles from '../../styles/dokumenter.module.scss';
import  Link  from 'next/link';
import { useRouter } from 'next/navigation'

const Tilldokument = () => {

const router = useRouter()

const handelTillbaka=(e:any) => {
    e.preventDefault()
    router.push('/dokumenter')
  }


  return (
    <div className={styles.loggain_tillbaka}>
        <Link onClick={handelTillbaka} href='/dokumenter' className={styles.loggain_link}><p>Dokumenter</p></Link>
    </div>
  )
}

export default Tilldokument