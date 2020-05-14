import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASKS,
  };
}

export const fetchListTaskSuccess = (tasks) => {
  return {
    type: taskConstants.FETCH_TASKS_SUCCESS,
    payload: {
      tasks
    }
  };
}

// B1: fetchListTaskRequest
// B2: reset: state tasks => []
// B3: fetchListTaskSuccess  || fetchListTaskFailed

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASKS_FAILED,
    payload: {
      error
    }
  };
}

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis.fetchList().then(response => {
//       dispatch(fetchListTaskSuccess(response.data));
//     }).catch(error => {
//       dispatch(fetchListTaskFailed(error));
//     });

//   }
// }