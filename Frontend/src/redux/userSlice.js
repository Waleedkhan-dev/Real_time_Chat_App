// userSlice.js
const initialState = {
 currentUser: null,
 selectedUser: null
};

const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  setCurrentUser: (state, action) => {
   state.currentUser = action.payload;
  },
  setSelectedUser: (state, action) => {
   state.selectedUser = action.payload;
  }
 }
});

export const { setCurrentUser, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
