import React from 'react'
import Image from 'next/image'
import styles from '../styles/omforeningen.module.scss'

const Omforeningen = () => {
  return (
    <div className={styles.omforeningen} id='foreningen'>
        
        
            <Image
             className={styles.omforeningen_image}
             src='/forskolan6.png'
             width={300}
             height={350}
             priority={true}
             alt="picture4"
             />
            <div>
                <h2>Omforeningen</h2>
                <p>Skogsgläntans förskola är ett 
personalkooperativ.</p>
<p>Vi har öppet vardagar 6.30 – 17.00.</p>
<p>Vi har semesterstängt V 29 – V 32</p>
<p>I början av varje termin får du 
terminsinfo på dagar då förskolan
har stäng.</p>
<p>Vi har en egen kock som lagar maten
på förskolan.</p>
            </div>
        
        </div>
  )
}

export default Omforeningen