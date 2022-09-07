import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
    return ( 
        <div className={styles.loader}>
            {/* <p id="html-para">{`loading spinner will be here`}</p> */}
                <div className={styles.anim}>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                </div>

            
            <div>
                <p>...loading</p>
            </div>
        </div>
     );
}
 
export default Loading;