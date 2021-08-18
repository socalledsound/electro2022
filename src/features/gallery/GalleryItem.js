import React from 'react'
import { withRouter } from 'react-router-dom'
const GalleryItem = ({ item, history }) => {
    return ( 
        <div  onClick={ () => history.push(`/gallery/${item.id}`)} >
            {item.title}
        </div>
     );
}
 
export default withRouter(GalleryItem);