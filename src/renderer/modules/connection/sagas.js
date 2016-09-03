import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { createAction } from 'redux-actions';
import Actions, { setCurrentConnection } from './actions';
import { Redis } from 'modules';

export function* createConnection({ payload: { values: { dsn }, resolve, reject } }) {
  // yield put(setCurrentConnection(dsn));
  try {
    if (dsn.match(/^redis/)) {
      yield put(createAction(Redis.actions.CONNECT)({ dsn }));
      yield put(setCurrentConnection({ dsn, type: 'redis', connected: true }));
      resolve();
    } else {
      reject(new SubmissionError({ dsn: 'DSN protocol not recognized' }));
    }
  } catch (err) {
    reject(err);
  }
}

export default function* combiner() {
  yield [
    takeEvery(Actions.CREATE_CONNECTION, createConnection),
  ];
}
