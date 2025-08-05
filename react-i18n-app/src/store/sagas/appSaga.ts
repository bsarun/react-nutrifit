import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure } from '../slices/appSlice';
import type { User } from '../../types';

// Mock API call
const fetchUsersApi = async (): Promise<User[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  return [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com' }
  ];
};

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

function* watchFetchUsers() {
  yield takeEvery('app/fetchUsersRequest', fetchUsersSaga);
}

export default function* rootSaga() {
  yield watchFetchUsers();
}