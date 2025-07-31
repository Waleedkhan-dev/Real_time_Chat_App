import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

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
   const { to, from, text } = action.payload
   if (!state.messages[to]) {
    state.messages[to] = []
   }
   state.messages[to].push({
    id: nanoid(), // har message ka unique id
    to,
    text,
    from,
    status: "sent",
    timeStamp: Date.now()
   }
   )
  }
 }
})

export const { setMessage, sendmessage } = messageSlice.actions
export default messageSlice.reducer
