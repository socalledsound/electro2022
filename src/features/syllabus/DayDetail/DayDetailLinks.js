import React from 'react'
import styles from './DayDetailLinks.module.css'

const DayDetailLinks = ({day}) => {
    
    const { inspirationLinks, techLinks, videos, reading, inClassDemo } = day
    return ( 
                      
        <div className={styles.linksWrapper}>

            {
                inClassDemo &&
                inClassDemo.length > 0 &&
                <div className={styles.linksListContainer} >
                <ul  className={styles.linksList}>
                    {
                         inClassDemo.map((item, index) => (
                             <div key={index}>
                            <li  className={styles.dayDemoTitle}><p>{item.title}</p></li>     
                            </div>       
                        ))
                    }
                </ul>
                <div className={styles.listTitleContainer}  style={{backgroundColor: 'rgba(132, 18, 231, 0.9)'}}>
                    <p className={styles.videoListTitle}>d</p> 
                    <p className={styles.videoListTitle}>e</p> 
                    <p className={styles.videoListTitle}>m</p> 
                    <p className={styles.videoListTitle}>o</p> 
                </div>
            </div>
            }

            {
            videos &&
            videos.length > 0 &&
            <div className={styles.linksListContainer} style={{backgroundColor: 'rgba(248, 248, 161,)'}}>
                <ul  className={styles.linksList}>
                {/* <span className={styles.linksTitle}>tools & techniques :</span> */}
                {
                
                videos.map((link, index) => (
                            <li key={index} className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>            
                    ))}
                </ul>
                <div className={styles.listTitleContainer}  style={{backgroundColor: 'rgba(232, 18, 131, 0.9)'}}>
                    <p className={styles.videoListTitle}>v</p> 
                    <p className={styles.videoListTitle}>i</p> 
                    <p className={styles.videoListTitle}>d</p> 
                    <p className={styles.videoListTitle}>s</p> 
                </div>
            </div>

            }

            {
                reading && reading.length > 0 &&
                <div className={styles.linksListContainer}>
                    <ul  className={styles.linksList}>
                    {
                        reading.map((link, idx) => {
                            return (
                                <div key={idx}>
                                     <li  className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>
                                </div>
                            )
                        })
                    }
                    </ul>
                    <div className={styles.listTitleContainer} style={{backgroundColor: 'rgba(32, 18, 231, 0.9)'}}>
                        <p className={styles.listTitle}>r</p> 
                        <p className={styles.listTitle}>e</p> 
                        <p className={styles.listTitle}>a</p> 
                        <p className={styles.listTitle}>d</p> 
                    </div>
                </div>
            }

            
                {
                    techLinks &&
                techLinks.length > 0 &&
                <div className={styles.linksListContainer} >
                <ul  className={styles.linksList}>
                
                {
                
                techLinks.map((link, index) => (
                            <li key={index} className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>            
                        ))
                }
                </ul>
                    <div className={styles.listTitleContainer} style={{backgroundColor: 'rgba(154, 205, 50, 0.9)'}}>
                        <p className={styles.listTitle}>c</p> 
                        <p className={styles.listTitle}>o</p> 
                        <p className={styles.listTitle}>d</p> 
                        <p className={styles.listTitle}>e</p> 
                    </div>
                </div>
                }
                

                {
                    inspirationLinks &&
                    inspirationLinks.length > 0 &&
                    <div className={styles.linksListContainer}>
                    <ul className={styles.linksList}>
                  
                        {
                        inspirationLinks.map((link, index) => (
                                    <li key={index} className={styles.dayDetailLink}><a href={link.linkSrc}>{link.linkText}</a></li>            
                            ))
                        }
                        </ul>
                        <div className={styles.listTitleContainer}>
                            <p className={styles.listTitle}>i</p> 
                            <p className={styles.listTitle}>n</p> 
                            <p className={styles.listTitle}>s</p> 
                            <p className={styles.listTitle}>p</p> 
                            <p className={styles.listTitle}>i</p> 
                            <p className={styles.listTitle}>r</p> 
                            <p className={styles.listTitle}>a</p> 
                            <p className={styles.listTitle}>t</p> 
                            <p className={styles.listTitle}>i</p> 
                            <p className={styles.listTitle}>o</p> 
                            <p className={styles.listTitle}>n</p> 
                        </div>
                </div>
                }
         </div> 


     );
}
 
export default DayDetailLinks;