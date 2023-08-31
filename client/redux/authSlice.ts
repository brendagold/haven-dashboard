import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   email: "",
//   firstName: "",
//   image: "",
//   lastName: "",
//   _id: "",
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginRedux: (state, action) => {
//       console.log(action.payload.data);
//       //   state.user = action.payload.data;
//       state._id = action.payload.data._id;
//       state.firstName = action.payload.data.firstName;
//       state.lastName = action.payload.data.lastName;
//       state.email = action.payload.data.email;
//       state.image = action.payload.data.image;
//     },
//     logoutRedux: (state, action) => {
//       state._id = "";
//       state.firstName = "";
//       state.lastName = "";
//       state.email = "";
//       state.image = "";
//     },
//   },
// });
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {},
  })
  
  export default authSlice.reducer
//export const { loginRedux ,logoutRedux} = userSlice.actions;

//export default userSlice.reducer;