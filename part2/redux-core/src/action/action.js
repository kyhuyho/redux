/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DECREMENT,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  INCREMENT,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError());
    }
  };
};

export const createNewUser = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log(error);
      dispatch(createUsersError());
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch(deleteUsersRequest);
    try {
      const res = await axios.post(
        `http://localhost:8080/users/delete/${userId}`
      );
      if (res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log(error);
      dispatch(DELETE_USER_ERROR);
    }
  };
};

// fetch list user
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

// add new user
export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

// delete user

export const deleteUsersRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUsersSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUsersError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
