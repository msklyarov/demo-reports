import ActionTypes from '../constants/actionTypes';

export default name => ({
  type: ActionTypes.ACTION_SET,
  payload: name,
});
