import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    answersList: []
}

export const answerSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        GET_ANSWERS: (state, action) => {
            state.answersList.push(action.payload)
        }
    }
})

export const { GET_ANSWERS } = answerSlice.actions

export default answerSlice.reducer
