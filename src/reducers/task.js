import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASKS:
      return {
        ...state,
        listTask: []
      };
    case taskConstants.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        listTask: [
          ...action.payload.tasks
        ]
      };
    case taskConstants.FETCH_TASKS_FAILED:
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listTask: []
      };
    default:
      return {...state };
  }
}

export default reducer;