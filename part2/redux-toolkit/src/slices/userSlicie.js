/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUser = createAsyncThunk("users/fetchAllUser", async () => {
  const response = await axios.get("http://localhost:8080/users/all");
  return response.data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (dataAddUser, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:8080/users/create",
      dataAddUser
    );
    thunkAPI.dispatch(fetchAllUser());
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    const response = await axios.post(
      `http://localhost:8080/users/delete/${userId}`
    );
    thunkAPI.dispatch(fetchAllUser());
    return response.data;
  }
);

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional actiocn types here, and handle loading state as needed
    builder
      .addCase(fetchAllUser.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        // Add user to the state array
        state.listUsers = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllUser.rejected, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(deleteUser.pending, (state, action) => {
        // Add user to the state array
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // Add user to the state array
      })
      .addCase(deleteUser.rejected, (state, action) => {
        // Add user to the state array
      })

      .addCase(createUser.pending, (state, action) => {
        // Add user to the state array
        state.isCreating = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        // Add user to the state array
        state.isCreating = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        // Add user to the state array
        state.isCreating = false;
      });
  },
});

export default userSlice.reducer;
