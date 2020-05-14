// rootsaga là 1 generator function
import { fork, take, call, put, delay } from 'redux-saga/effects'
import * as taskTypes from '../constants/task';
import * as uiTypes from '../constants/ui';
import { fetchList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';
import {fetchListTaskSuccess, fetchListTaskFailed } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

/**
 * B1: Thực thi action fetch task
 * B2: Gọi api
 * B3: Kiểm tra status code 
 * Thành công ...
 * Thất bại ...
 * B4: Thực thi công việc tiếp theo
 */
function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASKS); // block cho den khi 
    yield put(showLoading())
    const response = yield call(fetchList); // block cho den khi call xong
    if (response.status === STATUS_CODE.SUCCESS) {
      // dispatch fetch lít task success
      yield put(fetchListTaskSuccess(response.data));
    } else {
      yield put(fetchListTaskFailed());
    }
    yield delay(1000)
    yield put(hideLoading())
  }
}

function* watchCreateTaskAction() {
  yield take(taskTypes.ADD_TASK);
  console.log('edef');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}



export default rootSaga;