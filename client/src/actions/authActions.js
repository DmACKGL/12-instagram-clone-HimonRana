import axios from "axios";
import { GET_ERRORS } from "./types";

// Register
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/auth/register", userData)
    .then(res => {
      history.push("/");
      console.log('You are registered now!');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
