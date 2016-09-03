import { mapActions } from 'react-redux-helpers';
import { createAction } from 'redux-actions';

const Actions = mapActions([
  'CREATE_CONNECTION',
  'SET_CURRENT_CONNECTION',
], 'CONNECTION');

export default Actions;

export const setCurrentConnection = createAction(Actions.SET_CURRENT_CONNECTION);
