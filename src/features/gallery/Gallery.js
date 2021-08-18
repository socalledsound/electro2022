import React from 'react'
import { useSelector } from 'react-redux'
import { selectWorks } from './gallerySlice'
import GalleryRow from './GalleryRow'

const Gallery = () => {

    const works = useSelector(selectWorks)
    const featuredWorks = works.filter(item => item.featured)
    
    return ( 

        <div>
            {
                featuredWorks && 
                    <GalleryRow title={'featured'} works={featuredWorks}/>
            }

            {
                
                    <GalleryRow title={'featured'} works={works}/>
            }

        </div>
     );
}
 
export default Gallery;