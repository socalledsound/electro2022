import { createSlice } from '@reduxjs/toolkit'
import POLLQUESTIONS from './PollQuestions'

const initialState = {
    polls: POLLQUESTIONS,
    pollAnswers: [],
}

export const pollSlice = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        startSubmitPollAnswer(){},
        startFetchPollAnswers(){},
    }
})

export const {
    startSubmitPollAnswer,
    startFetchPollAnswers,
} = pollSlice.actions

export default pollSlice.reducer