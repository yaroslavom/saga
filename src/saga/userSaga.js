import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from '../store/userReducer';


const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUserWorker() {
    const data = yield call(fetchUsers);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(setUsers(json));
}

export function* userWatchers() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}
