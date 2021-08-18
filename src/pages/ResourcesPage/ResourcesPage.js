import React from 'react';
import RESOURCES from './RESOURCE_DATA/RESOURCES'
import ResourceBlock from './ResourceBlock'
import styles from './ResourcesPage.module.css'

const ResourcesPage = () => {
    
const { resourceTopics } =  RESOURCES;

     
    return (
        <div className={styles.resourcesPageWrapper}>
           
                {  
                    resourceTopics.map(resourceTopic => (
                         <ResourceBlock key={resourceTopic.title} resourceTopic={resourceTopic}/>
                    ))
                }

            
        </div>
           
     
    )
}

export default ResourcesPage