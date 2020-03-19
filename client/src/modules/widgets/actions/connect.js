import ActionTypes from '../constants/actionTypes';

export default id => ({
  type: ActionTypes.WIDGET_CONNECT,
  payload: { id },
});
