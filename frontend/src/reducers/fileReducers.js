import {
  FILE_LIST_REQUEST,
  FILE_LIST_SUCCESS,
  FILE_LIST_FAIL,
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
