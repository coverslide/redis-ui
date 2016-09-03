import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import Actions, { setCurrentConnection, queryResults } from './actions';
import { createRedisConnection } from 'helpers';

export function* connect({ payload: { dsn } }) {
  const connection = createRedisConnection(dsn);
  yield put(setCurrentConnection(connection));
}


export function* query({ payload: { values: { query }, resolve, reject } }) {
  console.log(1);
  try {
    const { redis: { currentConnection } } = yield select();
    const params = query.split(/\s+/g);
    const response = yield currentConnection[`${params[0]}Async`](params.slice(1));
    yield put(queryResults(response))
    resolve();
  } catch (err) {
    console.trace(err);
    reject(err);
  }
}

export function* scan({ payload: { values: pattern }, resolve, reject }) {
  const { redis: { currentConnection } } = yield select();
  yield currentConnection.scan('match', `*${pattern}*`);
  yield put(setCurrentConnection(connection));
  resolve();
}

export default function* combiner() {
  yield [
    takeEvery(Actions.CONNECT, connect),
    takeEvery(Actions.QUERY, query),
    takeEvery(Actions.SCAN, scan),
  ];
}
