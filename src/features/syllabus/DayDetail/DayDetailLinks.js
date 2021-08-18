import React from 'react'
import styles from './DayDetail.module.css'

const DayDetailLinks = ({day}) => {
    
    const { inspirationLinks, techLinks } = day
    return ( 
                      
        <div className={styles.linksWrapper}>
           
             <ul className={styles.linksList}>
                 <span className={styles.linksTitle}>inspiration & ideas :</span>
             {inspirationLinks.map((link, index) => (
                         <li key={index} className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>            
                 ))}
             </ul>
             <ul  className={styles.linksList}>
             <span className={styles.linksTitle}>tools & techniques :</span>
             {techLinks.map((link, index) => (
                         <li key={index} className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>            
                 ))}
             </ul>
     
             {/* <div className="to-videos">watch today's videos</div> */}
         </div> 


     );
}
 
export default DayDetailLinks;