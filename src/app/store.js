import { configureStore } from "@reduxjs/toolkit"
import questionReducer from "../features/questions/questionSlice"
import answerReducer from "../features/answers/answerSlice"

const store = configureStore({
    reducer: {
        questions: questionReducer,
        answers: answerReducer
    },
})

export default store