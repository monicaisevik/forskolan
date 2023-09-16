import React from 'react'
import {signOut} from 'next-auth/react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/dokumenter.module.scss'


const LogOut = () => {
const router = useRouter()
  const session=useSession()

  // if(session.status==='loading'){
  //   return <p>Loading...</p>
  //  }

   if(session.status==='unauthenticated'){
    router?.push('/')
   }
  console.log(session)
  return (
    <div className={styles.loggain_logout}>
        <p onClick={()=>signOut()}>loggaut</p>
    </div>
  )
}

export default LogOut