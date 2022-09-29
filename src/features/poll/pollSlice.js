import { createSlice } from '@reduxjs/toolkit'
import { POLLQUESTIONS } from './POLLQUESTIONS'

const initialState = {
    pollQuestions: POLLQUESTIONS,
    pollAnswers: [],
    currentPollQuestionIdx: 1,
}

export const pollSlice = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        startSubmitPollAnswer(){},
        submitPollAnswerSuccess(){},
        submitPollAnswerFailure(){},
        startSyncPollAnswers(){},
        updatePollAnswers: (state, action) => {
            //console.log(action.payload)
            return{
                ...state,
                pollAnswers: action.payload
            }
            
        },
        syncPollAnswersFailure(){},
    }
})


export const selectCurrentPollQuestion = state => {
    const currentIdx = state.polls.currentPollQuestionIdx
   // console.log(currentIdx)
   // console.log(state.polls)
   // console.log(state.polls.pollQuestions)
    const currentQuestion = state.polls.pollQuestions[currentIdx]
    //console.log(currentQuestion)
    return currentQuestion
}
export const selectPollAnswers = state => {
    const currentPoll = selectCurrentPollQuestion(state)
    const answers = state.polls.pollAnswers
   // console.log(currentPoll)
   // console.log(answers)
    if(answers.length > 0){
        return answers.filter(answer => answer.id === currentPoll.id)
    }else {
        return []
    }
    
}


export const selectSubmittedPollAnswer = currentUser => state => {
    const submittedAnswers = selectPollAnswers(state)
    const userSubmitted = submittedAnswers.filter(answer => answer.userId === currentUser.id)
    if(userSubmitted.length > 0){
        return true
    } else {
        return false
    }

}



export const {
    startSubmitPollAnswer,
    submitPollAnswerSuccess,
    submitPollAnswerFailure,
    startSyncPollAnswers,
    updatePollAnswers,
    syncPollAnswersFailure,
} = pollSlice.actions

export default pollSlice.reducer