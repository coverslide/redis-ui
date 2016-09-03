import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import Actions from './actions';

function* init() {
  // do nothing
}

export default function* combiner() {
  yield [
    takeEvery(Actions.INIT, init),
  ];
}
