import ActionTypes from '../constants/actionTypes';

export default id => ({
  type: ActionTypes.WIDGET_DELETE,
  payload: id,
});
