import { handleActions } from 'redux-actions';
import Actions from './actions';

export default handleActions({
  [Actions.SET_CURRENT_CONNECTION]: (state, { payload }) => ({ ...state, currentConnection: payload })
}, {});
