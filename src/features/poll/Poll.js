// import { useSelector, useDispatch} from 'react-redux'
// import { selectPollQuestion } from './pollSlice'
import { useDispatch } from 'react-redux'
import styles from './Poll.module.css'

const pollItem = {
    question: 'How is the mix of in person and online working for you?',
    // answers: [
    //         `I think that all classes should be in-person`, 
    //         `I think some online is good but more in-person would be good`,
    //         `I like mixture of in-person and online that I see on the syllabus`,
    //         `I perfer online classes, slightly more of that, please`,
    //         `I don't think we need to have classes, can we just show up for the crits?`
    // ],
    answers: [
        `a little more in person would be good`,
        `the mix is pretty good`,
        `a little more remote would be good`
    ]
}

const Poll = () => {

     //const dispatch = useDispatch()

    // const question = useSelector(selectPollQuestion)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        //dispatch(submitPollAnswer)
    }


    return ( 

        <div className={styles.pollWrapper}>
            <div className={styles.pollQuestion}>{pollItem.question}</div>
            <div className={styles.answers}>
                
                <form>
                    {
                    pollItem.answers.map((answer, idx) => 
                                <label>
                                    <input key={idx} type='radio' value={`${idx}`} name="answer" />
                                    {answer}
                                </label>
                                
                    )}
                    <button type='submit' onClick={handleSubmit}>submit</button>
                </form>
        
            </div>            
        </div>  

     );
}
 
export default Poll;