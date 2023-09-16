'use client'

import React from 'react'
import Button from '../../utils/Button';
import Input from '../../utils/Input';
import Tillbaka from '../../utils/Tillbaka';
import styles from '../../../styles/dokumenter.module.scss';
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import {useSession} from 'next-auth/react'


const Loggain = () => {

  const router = useRouter()
  const session=useSession()

if(session.status==='loading'){
    return <div className={styles.loggain_loading}><p>Loading...</p></div>
   }

   if(session.status==='authenticated'){
    router?.push('/dokumenter/loggain/laddaup')
   }


  
 

const handleSubmit=async(e:any)=>{
  e.preventDefault();

  const username=e.target[0].value
  const password=e.target[1].value
 
console.log(e.target[0].value)
  signIn('credentials', {username, password})
}
 


return (
        
<div className={styles.loggain}>
<Tillbaka />
<div className={styles.loggain_formLayout}>
   
  <form className={styles.loggain_form} onSubmit={handleSubmit}>
    <h4>Logga in</h4>
    <Input
      name="text"
      htmlfor="text"
      type="text"
      label="Användarnamn"
      placeholder="t ex. john"
      value=""
    />
    <Input
      name="Lösenord"
      htmlfor="password"
      type="password"
      label="Lösenord"
      placeholder="********"
      value=""
    />
    <Button>Loggain</Button>
  </form>
</div>
</div>
)
}

export default Loggain;