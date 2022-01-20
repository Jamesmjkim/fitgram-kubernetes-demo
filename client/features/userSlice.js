import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dummyData from "../constants/dummyData";
import axios from "axios";

const initialState = {
  userId: null,
  userData: {},
  status: null,
};

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  const data = {
    user_name: user.username,
    password: user.password,
  };
  const userData = await axios.post("/user/login", data);
  return userData;
});

export const signUpUser = createAsyncThunk("user/signUpUser", async (user) => {
  const userData = await axios.post("/user/signup", user);
  return userData;
});

export const getUserId = createAsyncThunk("user/getUserId", async (payload) => {
  const data = {
    token: payload.token,
  };
  const userId = await axios.post("/session/token", data, {
    headers: { "Content-Type": "application/json" },
  });
  console.log("userData==>", userId);
  return userId;
});

export const getUserName = createAsyncThunk(
  "user/getUserName",
  async (payload) => {
    const userInfo = await axios.get(`/user/${payload.userId}`);
    return userInfo;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // getUserId: (state, action) => {
    //   const token = action.payload.token;
    //   /**
    //    * TODO: Make API call to get User ID from the server.
    //    */
    //   const res = dummyData.user;
    //   state.userId = res;
    // },
    // getUserName: (state, action) => {
    //   const userId = action.payload.userId;
    //   // console.log('line 25', userId);
    //   /**
    //    * TODO: Make API call to get User Name from the server.
    //    */
    //   let res = dummyData.users.filter((user) => user.id === userId)[0];
    //   if (res) {
    //     res = JSON.parse(JSON.stringify(res));
    //   }
    //   // console.log('line 29', res);
    //   state.userData = res;
    //   // console.log('state.userData', state.userData);
    // },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loginUser api is pending";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userId = payload.data.userID;
      sessionStorage.setItem("token", payload.data.token);
      state.status = "loginUser fulfilled";
    },
    [loginUser.rejected]: (state) => {
      state.userId = null;
      state.status = "Something went wrong in loginUser Call";
    },
    [getUserId.pending]: (state) => {
      state.status = "getUserId api is pending";
    },
    [getUserId.fulfilled]: (state, { payload }) => {
      state.userId = payload.data.user_id;
      state.status = "getUserId fulfilled";
    },
    [getUserId.rejected]: (state) => {
      state.userId = null;
      state.status = "Something went wrong in getUserId Call";
    },
    [getUserName.pending]: (state) => {
      state.status = "getUserName api is pending";
    },
    [getUserName.fulfilled]: (state, { payload }) => {
      state.userData = payload.data;
      state.status = "getUserName fulfilled";
    },
    [getUserName.rejected]: (state) => {
      state.status = "Something went wrong in getUserName Call";
    },
    [signUpUser.pending]: (state) => {
      state.status = "signUpUser api is pending";
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.userId = payload.data.user_id;
      sessionStorage.setItem("token", payload.data.token);
      state.status = "signUpUser fulfilled";
    },
    [signUpUser.rejected]: (state) => {
      state.status = "Something went wrong in signUpUser Call";
    },
  },
});

export default userSlice.reducer;
