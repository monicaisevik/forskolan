'use client'

import React,{useState} from 'react'
import styles from '../../../../styles/dokumenter.module.scss';
import Button from '../../../utils/Button';
import LogOut from '@/app/utils/LogOut';
import Tilldokument from '@/app/utils/Tilldokument';



const Laddaup = () => {
  const [postTitle,setPostTitle]=useState('');
  const [postImage,setPostImage]=useState<any>('');
  const myRef = React.useRef<any>(null)

   const titleHandler=(e:any)=>{
    setPostTitle(e.target.value)

   }
 
     const coverToBase64=(e:any)=>{
    
      const reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
        console.log(reader.result);
        setPostImage(reader.result)
      
      };
      reader.onerror=error=>{
        console.log('Error',error);
     }

  }

  const handleSubmit =async(e:any) => {
    e.preventDefault();
     try{
      const res=await fetch('/api/create', {
        method:'POST',
    
        headers:{
           'Content-Type': 'application/file',
        
        },
        body:JSON.stringify({
        title: postTitle,
        image: postImage,
    })
             });
            
             myRef.current.value = "";
          setPostTitle('') 
       if(res.status===201){
         alert('filen skickas lyckat!')
       }
      
   }catch(err){
        console.log(err)
    }
        };
   



  return (
    <div className={styles.laddaup}>
      <div className={styles.dokumenter_header}>
        <Tilldokument />
         <LogOut />
      </div>
        <form className={styles.laddaup_form} onSubmit={handleSubmit}>
          <div className={styles.laddaup_formItem1}>
          <label htmlFor='title'>Filnamn</label>
          <input  type='text' name='title'  onChange={titleHandler} value={postTitle}/>
          </div>
          <div className={styles.laddaup_formItem2}>
          <label htmlFor={'file'}>Ladda upp fil</label>
          <input  type='file' name='file' accept="application/pdf" onChange={coverToBase64} ref={myRef} />
          </div>
          <Button >Upload</Button> 
      </form>   
    </div>
  )
}

export default Laddaup