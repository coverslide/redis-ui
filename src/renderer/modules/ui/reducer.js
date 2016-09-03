import { handleActions } from 'redux-actions';
import Actions from './actions';

export default handleActions({
  [Actions.LOAD_START]: (state, { payload }) => ({ ...state, loading: payload || true }),
  [Actions.LOAD_END]: (state, { payload }) => ({ ...state, loading: false }),
}, { loading: false });
