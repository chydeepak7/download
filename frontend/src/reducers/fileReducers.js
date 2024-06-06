import {
  FILE_LIST_REQUEST,
  FILE_LIST_SUCCESS,
  FILE_LIST_FAIL,
  FILE_LIST_MY_REQUEST,
  FILE_LIST_MY_SUCCESS,
  FILE_LIST_MY_FAIL,
  FILE_LIST_MY_RESET,
} from "../constants/fileConstants";

export const fileListReducers = (state = { files: [] }, action) => {
  switch (action.type) {
    case FILE_LIST_REQUEST:
      return { loading: true, files: [] };

    case FILE_LIST_SUCCESS:
      return { loading: false, files: action.payload };

    case FILE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const fileListMyReducers = (state = { files: {} }, action) => {
  switch (action.type) {
    case FILE_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case FILE_LIST_MY_SUCCESS:
      return {
        loading: false,
        files: action.payload,
      };
    case FILE_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case FILE_LIST_MY_RESET:
      return {
        files: [],
      };
    default:
      return state;
  }
};
