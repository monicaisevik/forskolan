'use client'
import React from 'react'
import Navbar from './Navbar'
import styles from '../../styles/header.module.scss'
import Image from 'next/image'
import LogOut from '@/app/utils/LogOut'
import {useSession} from 'next-auth/react'

const Header = () => {

  const session=useSession()

  return (
    <div className={styles.header}>
     
      <div className={styles.header_nav}>
         <Navbar />
      </div>
      <div className={styles.header_main}>
        <h3 >VÄLKOMMEN TILL SKOGSGLÄNTANS FÖRSKOLA</h3>
        <h3 className={styles.header_h3} >”En trygg och stimulerande värld full av möjligheter”
          </h3>
         
          <Image 
        className={styles.header_image}
        src='/forskolan1.png'
        width={600}
        height={350}
        priority={true}
        alt="picture1"
        />
      </div>
      <div className={styles.header_logout}>
        {session.status==='authenticated' && <LogOut />}
      </div>
       
    </div>
  )
}

export default Header