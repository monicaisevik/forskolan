'use client'

import React,{useState} from 'react'
import styles from'../../styles/matsedeln.module.scss'
import styels from '../../styles/vekansmatsedeln.module.scss'
import menyData from '@/data/data'
import Tillbaka from '../utils/Tillbaka'


const Matsedeln = () => {
  const [active, setActive]=useState(null)
  
  const toggle=(i:any)=>{
    if(active===i){
      return setActive(null)
 }
      setActive(i)
   
  }

  

  console.log(active)
  return (
    <div className={styles.matsedeln}>
      <Tillbaka /> 
        <h4>Veckans Matsedeln</h4>
        <div className={styles.matsedeln_item}>

        {menyData && menyData.map((item:any, i:any)=>(
          <div key={item.id}className={styels.vekansmatsedeln}>
          <div className={styels.vekansmatsedeln_header}   
          onClick={()=>toggle(i)}
            > 
              <h4>
          {item.menyNr}
        </h4>
        <i className={`bi  ${ active===i ? 'bi-chevron-up' : 'bi-chevron-down'}` } > 
        </i>
      </div>
    <div >
      {active===i  && <div>
     
     <div className={styels.vekansmatsedeln_meny}>
         <div className={styels.vekansmatsedeln_items}>
         <h5>Mån</h5>  
         <h5>Tis</h5>  
         <h5>Ons</h5>  
         <h5>Tor</h5>  
         <h5>Fri</h5>  
         <h5><div ><span className={styels.vekansmatsedeln_span}>Veckans</span><span>pålägg</span></div></h5>
         <h5>Frukost</h5>
         <h5>Mellanmål</h5>
         </div>
         <div className={styels.vekansmatsedeln_detaljer}>
     <p>{item.man}</p>
     <p>{item.tis}</p>
     <p>{item.ons}</p>
     <p>{item.tor}</p>
     <p>{item.fre}</p>
     <p>{item.palagg}</p>
     <p>{item.frukost}</p>
     <p>{item.mellanmal}</p>
         </div>
      </div>
      
      </div>
      }
       </div>
       </div>
         ))
        }
       </div>
</div>
  )
}

export default Matsedeln;