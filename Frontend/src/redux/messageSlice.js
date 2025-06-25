import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
 messages: []
}

export const messageSlice = createSlice({
 name: "message",
 initialState,
 reducers: {
  setMessage: ((state, action) => {
   state.messages = (action.payload)
  }),
  addMessage: ((state, action) => {
   state.messages.push(action.payload)
  })
 }
})

export const { setMessage, addMessage } = messageSlice.actions
export default messageSlice.reducer
