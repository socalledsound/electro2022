import React from 'react'
import styles from './Gallery.module.css'
import GalleryItem from './GalleryItem'

const GalleryRow = ({title, works}) => {
    console.log(works)
    return ( 
        <div className={styles.galleryRowContainer}> 
            {
                works.map(((item, idx) => {
                    return (
                        <GalleryItem key={`gallery-item-${idx}`} item={item} />
                    )
                }))
            }
        {/* {works[0].title} */}
         {/* <div className={styles.galleryRowContainer} 
            style={{width: `${windowWidth + 10}px`, height: `${(windowHeight/heightScaler)+30}px`}} 
            onMouseDown={() => this.dragStart()} 
            onMouseUp={()=> this.dragEnd()} 
            onMouseMove={() => this.dragAction()} 
            onMouseEnter={() => this.toggleHideButton()} 
            onMouseLeave={() => this.toggleHideButton()}>
        <h1 id="title" >{title}</h1>  
        
        <div className="gallery-row-container" id={strippedItem} >
            
            {
            works.map(item => (
                <GalleryItem 
                    key={item.id} 
                    item={item} 
                    windowWidth={windowWidth} 
                    windowHeight={windowHeight} 
                    scaler={heightScaler}/>))
            }
            
        </div>
        </div> */}
        </div>
     );
}
 
export default GalleryRow;