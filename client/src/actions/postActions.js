import axios from "axios";

import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  GET_ERRORS
} from "./types";

// Add Post
export const addPost = postData => dispatch => {
  axios.post("/posts", postData).then(res =>
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
  );
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
