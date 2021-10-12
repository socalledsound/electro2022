
import { useSelector, } from 'react-redux'
import { selectCurrentPollQuestion, selectPollAnswers, selectSubmittedPollAnswer} from './pollSlice'
import { selectCurrentUser } from '../user/userSlice'
import PollForm from './PollForm'
import PollAnswers from './PollAnswers'
import styles from './Poll.module.css'
import { selectAllPeople } from '../people/peopleSlice'

// const pollItem = {
//     id: 0,
//     question: 'How is the mix of in person and online working for you?',
//     // answers: [
//     //         `I think that all classes should be in-person`, 
//     //         `I think some online is good but more in-person would be good`,
//     //         `I like mixture of in-person and online that I see on the syllabus`,
//     //         `I perfer online classes, slightly more of that, please`,
//     //         `I don't think we need to have classes, can we just show up for the crits?`
//     // ],
//     answers: [
//         `a little more in person would be good`,
//         `the mix is pretty good`,
//         `a little more remote would be good`
//     ]
// }

const Poll = () => {


    const currentUser = useSelector(selectCurrentUser)
    const currentQuestion = useSelector(selectCurrentPollQuestion)
    const alreadySubmitted  = useSelector(selectSubmittedPollAnswer(currentUser))
    const pollAnswers = useSelector(selectPollAnswers)
    const students = useSelector(selectAllPeople)
    const responses = pollAnswers.map(answer => ({
        student: students.filter(student => student.id === answer.userId),
        answer: currentQuestion.answers[answer.answerId]
        })
    )
    console.log(responses)
   


    return ( 
        <div className={styles.pollWrapper}>
           
            {
                alreadySubmitted ? 
                <PollAnswers currentQuestion={currentQuestion} pollAnswers={pollAnswers}/>
                :
                <PollForm currentUser={currentUser} currentQuestion={currentQuestion} />
            }

        
        </div>  
     );
}
 
export default Poll;