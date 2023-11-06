import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answersList: [],
};

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    GET_ANSWERS: (state, action) => {
      state.answersList.push(action.payload);
    },
    RESET_ANSWERS: (state) => {
      state.answersList = [];
    },
  },
});

export const { GET_ANSWERS, RESET_ANSWERS } = answerSlice.actions;

export default answerSlice.reducer;