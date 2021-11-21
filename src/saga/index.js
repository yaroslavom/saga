import { all } from "@redux-saga/core/effects";
import { CountWatcher } from "./countSaga";
import { userWatchers } from "./userSaga";

export function* rootWatchers() {
    yield all([CountWatcher(), userWatchers()])
}
