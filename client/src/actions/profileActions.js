import axios from "axios";
import { logoutUser } from "./authActions";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_ERRORS
} from "./types";


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
        payload: null
      });
    });
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/profile", profileData)
    .then(res => history.push("/profile"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Account
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure, you want to delete this Account?")) {
    axios
      .delete("/profile")
      .then(res => dispatch(logoutUser()))
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
