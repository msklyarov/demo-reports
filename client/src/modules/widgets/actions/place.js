import ActionTypes from '../constants/actionTypes';

export default (id, x, y) => ({
  type: ActionTypes.WIDGET_PLACE,
  payload: { id, x, y },
});
