import ActionTypes from '../constants/actionTypes';

export default (type, width, height, x, y) => ({
  type: ActionTypes.WIDGET_CREATE,
  payload: { type, width, height, x, y, connected: false },
});
