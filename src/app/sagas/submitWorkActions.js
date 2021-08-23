import { SubmitWorkTypes } from "./SubmitWorkTypes"

export const submitWorkStart = (data) => ({
    type: SubmitWorkTypes.SUBMIT_WORK_START,
    payload: data,
})