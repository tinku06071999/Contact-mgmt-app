import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const userData = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    addUser(state, action) {
      // Implement the logic to Add  user to the state
      state.push(action.payload);
    },
    removeUser(state, action) {
      // Implement the logic to remove a user from the state
      state.splice(action.payload.Index, 1);
    },
    EditUser(state, action) {
      // Implement the logic to delete a user from the state
      // firstName: Param1,
      // lastName :Param2,
      // status : Param3,
      // Index:Param4
      state[action.payload.Index].firstName = action.payload.firstName;
      state[action.payload.Index].lastName = action.payload.lastName;
      state[action.payload.Index].status = action.payload.status;
    },
  },
});

export const { addUser, removeUser, EditUser } = userData.actions;

export default userData.reducer;
