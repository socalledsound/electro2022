
import React, { useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectWorksByUserId, startFetchUserWorks} from '../gallery/gallerySlice'

const PersonPage = ({match}) => {

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(startFetchUserWorks())
}, [dispatch])

    const works = useSelector(selectWorksByUserId(match.params.userId))
    console.log(works)

    return ( 
        <div>
            person page here for  {match.params.userId}

            {
                works.map(work => {
                    return (
                        <div>{work.title}</div>
                        
                    )
                })
            }
            
        </div>
     );
}
 
export default withRouter(PersonPage);