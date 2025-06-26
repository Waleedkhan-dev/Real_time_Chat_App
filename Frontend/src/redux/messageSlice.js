import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
 messages: {}
}

export const messageSlice = createSlice({
 name: "message",
 initialState,
 reducers: {
  setMessage: ((state, action) => {
   state.messages = (action.payload)
  }),
  sendmessage: (state, action) => {
   const { to, text } = action.payload
   if (!state.messages[to]) {
    state.messages[to] = []
   }
   state.messages[to].push({
    text,
    from: "me",
    timeStamp: Date.now()
   })
  }
 }
})

export const { setMessage, sendmessage } = messageSlice.actions
export default messageSlice.reducer
