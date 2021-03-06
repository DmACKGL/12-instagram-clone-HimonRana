// FETCHAR API I DENNA ACTION
import {
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "../constants";

import { API_URL } from "../constants/config/constants";

const url = `${API_URL}/photos`;

export const requestPhotos = () => ({
  type: FETCH_PHOTOS_START
});

export const receivePhotos = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
});

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos());

  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log("successfully fetched photos", data);
      return dispatch(receivePhotos(data));
    })
    .catch(err => {
      console.error("fetch photos failed", err);
      return dispatch({
        type: FETCH_PHOTOS_FAILURE
      });
    });
};
