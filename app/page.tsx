import React from 'react'
import Header from '@/component/header/Header'
import OmForskolan from '@/component/OmForskolan'
import Varverksamhet from '@/component/Varverksamhet'
import Omforeningen from '@/component/Omforeningen'
import Footer from '@/component/Footer'
import styles from '../styles/header.module.scss'

export const metadata = {
  title: 'skogsglantansforskola',
  description: 'forskolan märsta',

 
}

const page = () => {
    return (
      <div className={styles.page}>
          <Header />
          <OmForskolan/>
          <Varverksamhet/>
          <Omforeningen/>
          <Footer/>
      </div>
    )
  }
  
  export default page