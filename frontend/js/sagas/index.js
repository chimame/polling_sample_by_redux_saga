import { takeEvery, delay } from "redux-saga"
import fetch from 'isomorphic-fetch'
import { put, call } from "redux-saga/effects"
import {
  START_POLLING,
  showCurrentTime,
  showNetworkError
} from "../actions"

const fetchStatus = () => {
  return fetch(`http://localhost:3000/time.json`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(payload => { return payload })
    .catch(error => { return undefined })
}

export function* pollingAsync() {
  while (true) {
    const posts = yield call(fetchStatus)
    if (posts) {
      yield put(showCurrentTime(posts))
    } else {
      yield put(showNetworkError())
    }
    yield call(delay, 10000)
  }
}

export default function* rootSaga() {
  yield* takeEvery(START_POLLING, pollingAsync)
}

