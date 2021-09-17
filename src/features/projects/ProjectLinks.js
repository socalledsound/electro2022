import styles from './ProjectLinks.module.css'

const ProjectLinks = ({project}) => {
    const { studentWorksLinks, javascriptLinks, inspirationLinks } = project
    return (
        <>
        <div 
            className={styles.linksListContainer} 
            style={{border: '3px solid rgba(176, 231, 105, 1.0'}}
        >
        <h3>some neat projects from last year:</h3>
        <ul  className={styles.linksList}>
           
        {
            studentWorksLinks && studentWorksLinks.length > 0 &&
            studentWorksLinks.map((link, idx) => {
                return (
                    <div key={idx}>
                         <li  className={styles.projectLink}><a href={link.linkSrc}>{link.linkText}</a></li>
                    </div>
                )
            })
        }
        </ul>
        </div>

        <div 
            className={styles.linksListContainer} 
            style={{border: '3px solid rgba(106, 101, 205, 1.0'}}
        >
            <h3>some games in javascript:</h3>
        <ul  className={styles.linksList}>
           
        {
            javascriptLinks && javascriptLinks.length > 0 &&
            javascriptLinks.map((link, idx) => {
                return (
                    <div key={idx}>
                         <li  className={styles.projectLink}><a href={link.linkSrc}>{link.linkText}</a></li>
                    </div>
                )
            })
        }
        </ul>
        </div>


        <div 
            className={styles.linksListContainer} 
            style={{border: '3px solid rgba(206, 101, 205, 1.0'}}
        >
            <h3>links for inspiration:</h3>
        <ul  className={styles.linksList}>
           
        {
            inspirationLinks && inspirationLinks.length > 0 &&
            inspirationLinks.map((link, idx) => {
                return (
                    <div key={idx}>
                         <li  className={styles.projectLink}><a href={link.linkSrc}>{link.linkText}</a></li>
                    </div>
                )
            })
        }
        </ul>
        </div>
        </>
    )

}

export default ProjectLinks
