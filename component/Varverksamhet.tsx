import React from 'react'
import Image from 'next/image'
import styles from '../styles/varverksamhet.module.scss'

const Varverksamhet = () => {
  return (
    <div className={styles.varverksamhet} id='verksamhet'>
        <h2>Varverksamhet</h2>
        <div className={styles.varverksamhet_p}>
        <p>Vi har två avdelningar Lilla Björn ( 1 – 3 år ) och Stora Björn ( 4 – 5 år ).</p>
        </div>
        <Image
         className={styles.varverksamhet_image}
         src='/forskolan3.png'
         width={600}
         height={350}
         priority={true}
         alt="picture2"
        />
        <div className={styles.varverksamhet_p}>
        <p>Vi har som mål att skapa trygga barn där alla blir sedda genom närvarande och in lyssnande
pedagoger.</p>
        <p>Vi ser barn som kompetenta, utforskande och unika människor, där var och en har ett eget värde. Vi</p>
        <p>vuxna hjälper barnet att utforska, förstå sin omvärld och att utmanas mot nya kunskapsmål. Vi stöttar</p>
        <p>och vägleder och hjälper dem att växa. Vi sätter barnet i fokus.
Leken är en viktig del på förskolan, </p>
        <p> genom leken utvecklas förutsättningar för lärande och utveckling.</p>
        </div>
        <Image
         className={styles.varverksamhet_image}
         src='/forskolan2.png'
         width={600}
         height={350}
         priority={true}
         alt="picture3"
        />
        <div className={styles.varverksamhet_p}>
        <p>Vi arbetar utifrån ” Jag kan, Jag vill, Jag vågar, Jag får tiden och Jag blir lyssnad på.</p>
        </div>
        <Image
         className={styles.varverksamhet_image}
         src='/forskolan4.png'
         width={600}
         height={350}
         priority={true}
         alt="picture4"
        />
        <div className={styles.varverksamhet_pLast}>
        <p>Vi vill att alla barn ska utveckla sin empatiska förmåga och lära sig att ta hänsyn till varandra, att
lyssna till</p>
        <p>varandra och respektera varandras olikheter i kunskap, förmågor, tänkande, språk och
sätt att leva på.</p>
        <p>Våra styrdokument som vi arbetar efter är förskolans läroplan, barnkonventionen och skollagen.</p>
        </div>
        </div>
  )
}

export default Varverksamhet