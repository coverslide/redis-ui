import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Connection, Redis, UI } from 'modules';
import { reducer as formReducer } from 'redux-form';
import createLogger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function (initialState) {
  const store = createStore(
    combineReducers({
      connection: Connection.reducer,
      redis: Redis.reducer,
      ui: UI.reducer,
      form: formReducer,
    })
  , initialState, applyMiddleware(logger, sagaMiddleware));

  sagaMiddleware.run(Connection.sagas);
  sagaMiddleware.run(UI.sagas);
  sagaMiddleware.run(Redis.sagas);

  return store;
}
