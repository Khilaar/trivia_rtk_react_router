import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questionList: []
}

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        GET_QUESTIONS: (state, action) => {
            state.questionList = action.payload
        }
    }
})

export const { GET_QUESTIONS } = questionSlice.actions

export default questionSlice.reducer
