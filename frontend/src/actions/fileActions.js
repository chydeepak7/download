import axios from "axios";
import {
  FILE_LIST_REQUEST,
  FILE_LIST_SUCCESS,
  FILE_LIST_FAIL,
  FILE_LIST_MY_REQUEST,
  FILE_LIST_MY_SUCCESS,
  FILE_LIST_MY_FAIL,
  FILE_LIST_MY_RESET,
} from "../constants/fileConstants";

export const listFiles = () => async (dispatch) => {
  try {
    dispatch({ type: FILE_LIST_REQUEST });
    const { data } = await axios.get("/api/files/");
    dispatch({ type: FILE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FILE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listMyFiles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FILE_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/files/`, config);
    dispatch({
      type: FILE_LIST_MY_SUCCESS,
      payload: data,
    });
    localStorage.setItem("fileListMy", JSON.stringify(data));//added later to check
  } catch (error) {
    dispatch({
      type: FILE_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
