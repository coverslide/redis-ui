import { handleActions } from 'redux-actions';
import Actions from './actions';

export default handleActions({
  [Actions.SET_CURRENT_CONNECTION]: (state, { payload }) => ({...state, currentConnection: payload }),
  [Actions.QUERY_RESULTS]: (state, { payload }) => ({ ...state, results: payload }),
  [Actions.SCAN_RESULTS]: (state, { payload }) => ({ ...state, scanResults: payload }),
  [Actions.CHANNEL_MESSAGE]: (state, { payload: { channel, message } }) => ({ ...state, channels: {...state.channels, [channel]: { ...state.channels[channel], messages: [...state.channels[channel].messages, message]}}})
}, {});
