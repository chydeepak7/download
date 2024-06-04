import axios from 'axios'
import {
    FILE_LIST_REQUEST,
    FILE_LIST_SUCCESS,
    FILE_LIST_FAIL,
  } from "../constants/fileConstants";


export const listFiles = () => async(dispatch) => {

    try{
        dispatch({type:FILE_LIST_REQUEST})
        const {data} = await axios.get('/api/files/')
        dispatch({type:FILE_LIST_SUCCESS,
            payload:data
        })

    } catch(error) {
        dispatch({type:FILE_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}


