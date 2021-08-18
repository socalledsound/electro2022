import React from 'react'
import styles from './ResourcesPage.module.css'

const ResourceBlock = ({resourceTopic}) => {

    const { links } = resourceTopic

    return ( 
        <div className={styles.topicContainer}>
       
        <div className={styles.resourceSection}>
            <h3>{resourceTopic.title}</h3>
            <p className={styles.resourceSectionInnerHeading}>{resourceTopic.description}</p>
            <div className={styles.resourceSectionInner}></div>
                
        
                <ul className={styles.linksList}>
                    {
                    links.length > 0 && 
                    links.map((link, index) => 
                    (
                        <li key={index} className={styles.resourceLink}><a href={link.linkSrc}>{link.linkText}</a></li> 
                    ))
                    }
                </ul>
        </div>
    </div>
     );
}
 
export default ResourceBlock;