import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_ERRORS
} from "./types";
import { logoutUser } from "./authActions";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

// Delete Account
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure, you want to delete this Account?")) {
    axios
      .delete("/profile")
      .then(res => 
        dispatch(logoutUser())
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.respones.data
        })
      );
  }
};

// Profile loading

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
    payload: {}
  };
};


