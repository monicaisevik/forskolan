import React from 'react';
import styles from '../styles/footer.module.scss'



const Footer = () => {
  return (
    <div className={styles.footer} id='kontakt'>
      <div className={styles.footer_info}>
        <div className={styles.footer_infoGap}>
          <div className={styles.footer_infoItem1}>
            <i className="bi bi-telephone-fill" />
            <p>08 591 147 50</p>
          </div>
          <div className={styles.footer_infoItem2}>
            <i className="bi bi-envelope-fill" />
            <p>skogsglantansforskola@gmail.com</p>
          </div>
      
      
      </div>
      <div>
      <div className={styles.footer_infoItem3}>
        <i className="bi bi-person-fill" />
        <p>Rektor: Monica Isevik 073 987 25 15</p>
      </div>
      <div className={styles.footer_infoItem4}>
        <i className="bi bi-clock-fill" />
        <p>Vardagar  6.30 -17.00</p>
      </div>
      
      </div>
      
      
      </div>
      <div className={styles.footer_copyright}>
        <p>skogsglantansforskola</p>
        <i className="bi bi-c-circle" />
        <p>2023</p>
      </div>
      
    </div>
  )
}

export default Footer