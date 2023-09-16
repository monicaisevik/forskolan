import React, { FC}  from 'react'
import styles from '../../styles/dokumenter.module.scss';
import {useSession} from 'next-auth/react'


interface Files {
    title: string;
    file:string;
    id:string;
  }

const PdfFiles: FC<Files>=({
    title, file, id
}) => {
  const session=useSession()
  

  



  const removeHandler=async(id:any)=>{
    try{
      const res=await fetch(`/api/showfile?id=${id}`, {
        method:'DELETE',
         headers:{
            'Content-Type': 'application/json',
         },
             });
       
       const data=await res.json()
       alert('filen har raderats lyckat!')
   }catch(err){
        console.log(err)
    }}
  return (
    <div className={styles.pdffiles}>
      <div className={styles.pdffiles_header}>
        <p>{title}</p>
        {session.status==='authenticated' && <button onClick={()=>{removeHandler(id)}}>Radera</button>}
      </div>
        
        <object  data={file} type='application/pdf' width='1000' height='300' />
    </div>
  )
}

export default PdfFiles