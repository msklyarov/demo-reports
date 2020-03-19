import ActionTypes from '../constants/actionTypes';

export default name => ({
  type: ActionTypes.WIDGET_CREATE,
  payload: name,
});
