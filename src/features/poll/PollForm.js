import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startSubmitPollAnswer } from './pollSlice'

import styles from './Poll.module.css'

const PollForm = ({currentUser, currentQuestion}) => {

     const dispatch = useDispatch()
    

    

    const [selectedOption, setSelectedOption] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const pollAnswer = {currentUser, pollId: currentQuestion.id, answerId: selectedOption }
        dispatch(startSubmitPollAnswer(pollAnswer))
    }


    return ( 
        <>
        {
            currentUser ?
            <div className={styles.pollFormWrapper}>
                 a little poll for you
            <div className={styles.pollQuestion}>{currentQuestion.question}</div>
            
                
                <form>
                   
                    {
                    currentQuestion.answers.map((answer, idx) => 
                                <div key={idx}  className={styles.pollQuestionSelections}>
                                <label >
                                    <input type='radio' value={answer} name="answer" onChange={() => setSelectedOption(idx)} />
                                    {answer}
                                </label>
                                </div>  
                                
                    )}
                     <div className={styles.flexFormCenter}>
                    <button className={styles.pollButton} type='submit' onClick={handleSubmit}>submit</button>
                    </div>
                </form>
        
                      
        </div>  
        :
        null
        }
        
        </>
     );
}
 
export default PollForm;