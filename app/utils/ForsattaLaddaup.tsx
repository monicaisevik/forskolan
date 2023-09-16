'use client';

import React from 'react'
import styles from '../../styles/dokumenter.module.scss';
import  Link  from 'next/link';
import { useRouter } from 'next/navigation'

const ForsattaLaddaup = () => {

const router = useRouter()

const handelTillbaka=(e:any) => {
    e.preventDefault()
    router.push('/dokumenter/loggain/laddaup')
  }


  return (
    <div className={styles.loggain_forsatta}>
        <Link onClick={handelTillbaka} href='/dokumenter/loggain/laddaup' className={styles.loggain_link}><p >Upladda</p></Link>
    </div>
  )
}

export default ForsattaLaddaup