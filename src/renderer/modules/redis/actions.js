import { mapActions } from 'react-redux-helpers';
import { createAction } from 'redux-actions';

const Actions = mapActions([
  'CONNECT',
  'SET_CURRENT_CONNECTION',
  'QUERY',
  'QUERY_RESULTS',
  'SCAN',
  'SCAN_RESULTS',
  'CREATE_CHANNEL',
  'CHANNEL_MESSAGE',
  'DELETE_CHANNEL',
], 'REDIS');

export default Actions;

export const connect = createAction(Actions.CONNECT);
export const setCurrentConnection = createAction(Actions.SET_CURRENT_CONNECTION);
export const query = createAction(Actions.QUERY);
export const queryResults = createAction(Actions.QUERY_RESULTS);
export const scan = createAction(Actions.SCAN);
export const scanResults = createAction(Actions.SCAN_RESULTS);
export const createChannel = createAction(Actions.CREATE_CHANNEL);
export const channelMessage = createAction(Actions.CHANNEL_MESSAGE);
export const deleteChannel = createAction(Actions.DELETE_CHANNEL);
