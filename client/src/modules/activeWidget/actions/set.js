import ActionTypes from '../constants/actionTypes';

export default name => ({
  type: ActionTypes.ACTIVE_WIDGET_SET,
  payload: name,
});
