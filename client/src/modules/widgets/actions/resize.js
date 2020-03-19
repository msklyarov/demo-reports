import ActionTypes from '../constants/actionTypes';

export default (id, width, height) => ({
  type: ActionTypes.WIDGET_RESIZE,
  payload: { id, width, height },
});
