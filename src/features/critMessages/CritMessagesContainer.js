import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCritMessagesForItemId, fetchCritMessagesStart } from './critMessagesSlice'
import CritMessage from './CritMessage'
import styles from './CritMessages.module.css'
import SubmitCritMessageForm from './SubmitCritMessageForm'
const CritMessagesContainer = ({item}) => {

    const dispatch = useDispatch()
    const critMessages = useSelector(selectCritMessagesForItemId(item.id))
    useEffect(() => {  
        dispatch(fetchCritMessagesStart(item.id))
    }, [dispatch, item.id])

    console.log(critMessages)

    const sortedCritMessages = critMessages.sort((a, b) => {
        const time1 = new Date(a.timestamp)
        const time2 = new Date(b.timestamp)
        return time2 - time1
    })

    return ( 
        <div className={styles.critMessagesContainerWrapper}>
            <SubmitCritMessageForm item={item}/>
            {
               sortedCritMessages.length > 0 ?
               sortedCritMessages.map(messageItem => <CritMessage key={messageItem.id} item={messageItem}/>)
                :
                null
            }
        </div>
     );
}
 
export default CritMessagesContainer;