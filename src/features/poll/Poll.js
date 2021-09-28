// import { useSelector, useDispatch} from 'react-redux'
// import { selectPollQuestion } from './pollSlice'
import styles from './Poll.module.css'

const pollItem = {
    question: 'in person or discord for tuesday oct. 5?',
    answers: ['yes', 'no']
}

const Poll = () => {

    // const dispatch = useDispatch()

    // const question = useSelector(selectPollQuestion)

    return ( 

        <div className={styles.pollWrapper}>
            <div className={styles.pollQuestion}>{pollItem.question}</div>
            <div className={styles.answers}>
                {
                    pollItem.answers.map(answer => 
                            <div>
                                
                            </div>

                        )
                }
            </div>

        </div>

     );
}
 
export default Poll;