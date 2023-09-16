'use client';

import React from 'react'
import Image from 'next/image'
import styles from '../../styles/navbar.module.scss'
 import  Link  from 'next/link';
 import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router = useRouter()

  const handelmatsedeln=(e:any) => {
    e.preventDefault()
    router.push('/matsedeln')
  }

  const handeldokumenter=(e:any) => {
    e.preventDefault()
    router.push('/dokumenter')
  }


  return (
    <div className={styles.navbar}>
      <Image
      className={styles.navbar_image}
      src='/logo.png'
      width={200}
      height={180}
      priority={true}
      alt="logo"
      
      />
      <ul className={styles.navbar_list}>
        <li><h4 ><a  className={styles.navbar_list_a} href="#omoss" >Om oss</a></h4></li>
        <li><h4 ><a className={styles.navbar_list_a} href='#verksamhet'>Vår verksamhet</a></h4></li>
        <li><h4 ><a className={styles.navbar_list_a} href='#foreningen'>Om föreningen</a></h4></li>
        <li><h4 ><a className={styles.navbar_list_a} href='#kontakt'>Kontakt oss</a></h4></li>
        <li><Link onClick={handelmatsedeln} href='/matsedeln' className={styles.navbar_list_link}><h4>Matsedeln</h4></Link></li>
        <li><Link onClick={handeldokumenter} href='/dokumenter' className={styles.navbar_list_link}><h4>Dokumenter</h4></Link></li>
      </ul>
    </div>
  )
}

export default Navbar