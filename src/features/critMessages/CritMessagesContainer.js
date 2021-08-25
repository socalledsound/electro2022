import React from 'react'
import { useSelector } from 'react-redux'
import { selectCritMessagesForItemId } from './critMessagesSlice'
import CritMessage from './CritMessage'
import styles from './CritMessages.module.css'
import SubmitCritMessageForm from './SubmitCritMessageForm'
const CritMessagesContainer = ({item}) => {

    const critMessages = useSelector(selectCritMessagesForItemId(item.id))
    console.log(item.id)
    console.log(critMessages)
    // const critMessages = useSelector(selectCritMessages)

    // const critMessages = [
    //     {id: 0, createdBy:{id:'xqWp0vWr3ENQwBOep8O6nrlCKgo1'}, text: 'hi there thius is really nice'}
    // ]

    return ( 
        <div className={styles.critMessagesContainerWrapper}>
            <SubmitCritMessageForm item={item}/>
            {
                critMessages.length > 0 ?
                critMessages.map(msg => <CritMessage key={msg.id} message={msg}/>)
                :
                null
            }
        </div>
     );
}
 
export default CritMessagesContainer;